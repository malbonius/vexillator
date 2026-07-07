/*
  collectionResolver.js

  Resolves manual and dynamic collections into CollectionMember-like objects.

  Downstream systems should consume these resolved members rather than raw
  entities, variants or collection definitions.
*/

function resolveCollection(collectionId, dataIndex) {
  const collection = dataIndex.collectionsById[collectionId];

  if (!collection) {
    console.error(`Cannot resolve missing collection: ${collectionId}`);
    return [];
  }

  if (collection.type === "manual") {
    return resolveManualCollection(collection);
  }

  if (collection.type === "dynamic") {
    return resolveDynamicCollection(collection, dataIndex);
  }

  console.error(
    `Collection ${collectionId} has unsupported type: ${collection.type}`
  );

  return [];
}

/*
  Manual collections already contain explicit members.

  Return fresh objects so downstream code cannot mutate the source data.
*/
function resolveManualCollection(collection) {
  if (!Array.isArray(collection.members)) {
    console.error(
      `Manual collection ${collection.id} does not contain a members array.`
    );
    return [];
  }

  return collection.members.map(member => ({
    id: member.id,
    collectionId: member.collectionId,
    entityId: member.entityId,
    galleryVariantId: member.galleryVariantId,
    quizVariantId: member.quizVariantId,
    displayNameOverride: normaliseContextualDisplayNameOverride(
      member.displayNameOverride
    ),
    answerAliases: normaliseContextualAnswerAliases(
      member.answerAliases
    )
  }));
}

/*
  Dynamic collections are generated from their rules and target either
  entities or variants.
*/
function resolveDynamicCollection(collection, dataIndex) {
  let resolvedMembers = [];

  if (collection.target === "entity") {
    resolvedMembers = resolveDynamicEntityCollection(
      collection,
      dataIndex
    );

    return applyDynamicCollectionOverrides(
      collection,
      dataIndex,
      resolvedMembers
    );
  }

  if (collection.target === "variant") {
    resolvedMembers = resolveDynamicVariantCollection(
      collection,
      dataIndex
    );

    return applyDynamicCollectionOverrides(
      collection,
      dataIndex,
      resolvedMembers
    );
  }

  console.error(
    `Dynamic collection ${collection.id} has unsupported target: ${collection.target}`
  );

  return [];
}

/*
  Entity-target collections resolve every matching entity through its default
  variant. Structural entities may therefore resolve with null variant IDs;
  gallery and quiz apply their own downstream usability rules.
*/
function resolveDynamicEntityCollection(collection, dataIndex) {
  const resolvedMembers = [];

  Object.values(dataIndex.entitiesById).forEach(entity => {
    if (!entityMatchesRules(entity, collection.rules, dataIndex)) {
      return;
    }

    const contextMembership = findContextualMembershipForEntity(
      entity.id,
      collection,
      dataIndex
    );

    resolvedMembers.push(
      createEntityCollectionMember(
        entity,
        collection.id,
        dataIndex,
        contextMembership
      )
    );
  });

  return resolvedMembers;
}

/*
  Variant-target collections normally use the matching variant for both
  gallery and quiz.

  text_removed variants are technical quiz assets: the altered variant is used
  during the quiz, while Gallery and answer reveal use the ordinary variant
  identified by baseVariantId. The entity default remains a defensive fallback
  for older technical variants that do not yet contain a valid baseVariantId.
*/
function resolveDynamicVariantCollection(collection, dataIndex) {
  const resolvedMembers = [];

  Object.values(dataIndex.variantsById).forEach(variant => {
    if (!variantMatchesRules(variant, collection.rules, dataIndex)) {
      return;
    }

    const member = createVariantCollectionMember(
      variant,
      collection.id,
      dataIndex
    );

    if (member) {
      resolvedMembers.push(member);
    }
  });

  return resolvedMembers;
}

/*
  Optional dynamic collection overrides.

  These allow a dynamic collection to stay rule-driven while still handling
  deliberate edge cases such as Cyprus in a European-context collection.

  Supported fields:
  - includeEntityIds
  - includeVariantIds
  - excludeEntityIds
  - excludeVariantIds
*/
function applyDynamicCollectionOverrides(
  collection,
  dataIndex,
  resolvedMembers
) {
  const membersByKey = new Map();

  resolvedMembers.forEach(member => {
    membersByKey.set(
      createResolvedMemberKey(member),
      member
    );
  });

  if (Array.isArray(collection.includeEntityIds)) {
    collection.includeEntityIds.forEach(entityId => {
      const entity = dataIndex.entitiesById[entityId];

      if (!entity) {
        console.warn(
          `Collection ${collection.id} includes missing entity: ${entityId}`
        );
        return;
      }

      const member = createEntityCollectionMember(
        entity,
        collection.id,
        dataIndex
      );

      if (member) {
        membersByKey.set(
          createResolvedMemberKey(member),
          member
        );
      }
    });
  }

  if (Array.isArray(collection.includeVariantIds)) {
    collection.includeVariantIds.forEach(variantId => {
      const variant = dataIndex.variantsById[variantId];

      if (!variant) {
        console.warn(
          `Collection ${collection.id} includes missing variant: ${variantId}`
        );
        return;
      }

      const member = createVariantCollectionMember(
        variant,
        collection.id,
        dataIndex
      );

      if (member) {
        membersByKey.set(
          createResolvedMemberKey(member),
          member
        );
      }
    });
  }

  const excludeEntityIds = new Set(
    Array.isArray(collection.excludeEntityIds)
      ? collection.excludeEntityIds
      : []
  );

  const excludeVariantIds = new Set(
    Array.isArray(collection.excludeVariantIds)
      ? collection.excludeVariantIds
      : []
  );

  return Array.from(membersByKey.values()).filter(member => {
    if (excludeEntityIds.has(member.entityId)) {
      return false;
    }

    return !(
      excludeVariantIds.has(member.galleryVariantId) ||
      excludeVariantIds.has(member.quizVariantId)
    );
  });
}

/*
  Creates a collection member for an entity-target collection.
*/
function createEntityCollectionMember(
  entity,
  collectionId,
  dataIndex,
  contextMembership = null
) {
  const defaultVariant = entity.defaultVariantId
    ? dataIndex.variantsById[entity.defaultVariantId]
    : null;

  const validDefaultVariantId =
    defaultVariant?.entityId === entity.id
      ? defaultVariant.id
      : null;

  const galleryVariantId = resolveContextualMembershipVariantId(
    contextMembership,
    "galleryVariantId",
    entity,
    dataIndex
  ) ?? validDefaultVariantId;

  const quizVariantId = resolveContextualMembershipVariantId(
    contextMembership,
    "quizVariantId",
    entity,
    dataIndex
  ) ?? galleryVariantId;

  const displayNameOverride =
    normaliseContextualDisplayNameOverride(
      contextMembership?.displayNameOverride
    );

  const answerAliases =
    normaliseContextualAnswerAliases(
      contextMembership?.answerAliases
    );

  return {
    id: createDynamicMemberId(entity.id, collectionId),
    collectionId,
    entityId: entity.id,
    galleryVariantId,
    quizVariantId,
    displayNameOverride,
    answerAliases
  };
}

/*
  Creates a collection member for a variant-target collection.

  text_removed variants remain quiz assets while Gallery uses their base
  ordinary variant where available.
*/
function createVariantCollectionMember(variant, collectionId, dataIndex) {
  const entity = dataIndex.entitiesById[variant.entityId];

  if (!entity) {
    console.warn(
      `Collection ${collectionId} references variant ${variant.id} with missing entity: ${variant.entityId}`
    );
    return null;
  }

  const isTextRemoved =
    variant.tags?.includes("text_removed") ?? false;

  const baseVariant =
    isTextRemoved && variant.baseVariantId
      ? dataIndex.variantsById[variant.baseVariantId]
      : null;

  const validBaseVariant =
    baseVariant?.entityId === variant.entityId
      ? baseVariant
      : null;

  const galleryVariantId = isTextRemoved
    ? validBaseVariant?.id ??
      entity.defaultVariantId ??
      variant.id
    : variant.id;

  return {
    id: createDynamicMemberId(variant.id, collectionId),
    collectionId,
    entityId: variant.entityId,
    galleryVariantId,
    quizVariantId: variant.id,
    displayNameOverride: null,
    answerAliases: []
  };
}

/*
  Deduplicates generated members while preserving insertion order.
*/
function createResolvedMemberKey(member) {
  const contextKey = createResolvedMemberContextKey(member);

  if (member.quizVariantId) {
    return `variant:${member.quizVariantId}:${contextKey}`;
  }

  if (member.galleryVariantId) {
    return `variant:${member.galleryVariantId}:${contextKey}`;
  }

  return `entity:${member.entityId}:${contextKey}`;
}

/*
  Creates a stable, readable ID for a generated dynamic member.
*/

/*
  Context labels and answer aliases allow membership-driven collections to use
  organisation-specific names without renaming the underlying entity.
*/
function normaliseContextualDisplayNameOverride(value) {
  return typeof value === "string" && value.trim() !== ""
    ? value.trim()
    : null;
}

function normaliseContextualAnswerAliases(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  const seen = new Set();
  const aliases = [];

  value.forEach(alias => {
    if (typeof alias !== "string" || alias.trim() === "") {
      return;
    }

    const trimmedAlias = alias.trim();
    const key = trimmedAlias.toLowerCase();

    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    aliases.push(trimmedAlias);
  });

  return aliases;
}

function createResolvedMemberContextKey(member) {
  const displayName = normaliseContextualDisplayNameOverride(
    member?.displayNameOverride
  );

  if (displayName) {
    return `name:${displayName.toLowerCase()}`;
  }

  const aliases = normaliseContextualAnswerAliases(member?.answerAliases);

  if (aliases.length > 0) {
    return `aliases:${aliases.map(alias => alias.toLowerCase()).join("|")}`;
  }

  return "default";
}

function resolveContextualMembershipVariantId(
  membership,
  fieldName,
  entity,
  dataIndex
) {
  const variantId = membership?.[fieldName];

  if (typeof variantId !== "string" || variantId.trim() === "") {
    return null;
  }

  const variant = dataIndex.variantsById?.[variantId];

  return variant?.entityId === entity.id
    ? variant.id
    : null;
}

function findContextualMembershipForEntity(entityId, collection, dataIndex) {
  const criteria = extractMembershipCriteriaFromRules(collection?.rules);

  if (!criteria) {
    return null;
  }

  const memberships =
    dataIndex.entityMembershipsByMemberEntityId?.[entityId] ?? [];

  return memberships.find(membership => {
    return membershipMatchesExtractedCriteria(membership, criteria);
  }) ?? null;
}

function extractMembershipCriteriaFromRules(ruleSet) {
  if (!ruleSet || typeof ruleSet !== "object") {
    return null;
  }

  const criteria = {};

  if (typeof ruleSet.memberOf === "string") {
    criteria.groupEntityId = ruleSet.memberOf;
  }

  if (typeof ruleSet.relationshipType === "string") {
    criteria.relationshipType = ruleSet.relationshipType;
  }

  if (typeof ruleSet.membershipType === "string") {
    criteria.membershipType = ruleSet.membershipType;
  }

  if (typeof ruleSet.membershipStatus === "string") {
    criteria.status = ruleSet.membershipStatus;
  }

  if (Array.isArray(ruleSet.all)) {
    ruleSet.all.forEach(rule => {
      const nestedCriteria = extractMembershipCriteriaFromRules(rule);

      if (nestedCriteria) {
        Object.assign(criteria, nestedCriteria);
      }
    });
  }

  return Object.keys(criteria).length > 0
    ? criteria
    : null;
}

function membershipMatchesExtractedCriteria(membership, criteria) {
  if (!membership || !criteria) {
    return false;
  }

  if (
    criteria.groupEntityId &&
    membership.groupEntityId !== criteria.groupEntityId
  ) {
    return false;
  }

  if (
    criteria.relationshipType &&
    membership.relationshipType !== criteria.relationshipType
  ) {
    return false;
  }

  if (
    criteria.membershipType &&
    membership.membershipType !== criteria.membershipType
  ) {
    return false;
  }

  if (
    criteria.status &&
    membership.status !== criteria.status
  ) {
    return false;
  }

  return true;
}

function createDynamicMemberId(targetId, collectionId) {
  const targetSuffix = targetId.replace(/^(ent|var)_/, "");
  const collectionSuffix = collectionId.replace(/^col_/, "");

  return `mem_${targetSuffix}_${collectionSuffix}`;
}

/*
  Evaluates an entity rule tree.

    Supported rules:
  - all / any / not
  - entityIs
  - hasTag / hasAnyTag / hasAllTags
  - hasDefaultVariant
  - hasParent / hasAncestor
  - administeredBy
  - constituentOf
  - memberOf / relationshipType / membershipType / membershipStatus
  - entityTypeIs
*/
function entityMatchesRules(entity, ruleSet, dataIndex) {
  if (!ruleSet || typeof ruleSet !== "object") {
    console.warn("Invalid entity rule:", ruleSet);
    return false;
  }

  if (Array.isArray(ruleSet.all)) {
    return ruleSet.all.every(rule => {
      return entityMatchesRules(entity, rule, dataIndex);
    });
  }

  if (Array.isArray(ruleSet.any)) {
    return ruleSet.any.some(rule => {
      return entityMatchesRules(entity, rule, dataIndex);
    });
  }

  if (ruleSet.not) {
    return !entityMatchesRules(entity, ruleSet.not, dataIndex);
  }

  if (ruleSet.entityIs) {
    return entity.id === ruleSet.entityIs;
  }

  if (ruleSet.hasTag) {
    return entity.tags.includes(ruleSet.hasTag);
  }

  if (Array.isArray(ruleSet.hasAnyTag)) {
    return ruleSet.hasAnyTag.some(tag => entity.tags.includes(tag));
  }

  if (Array.isArray(ruleSet.hasAllTags)) {
    return ruleSet.hasAllTags.every(tag => entity.tags.includes(tag));
  }

  /*
    Matches entities with a usable default variant.

    The variant must exist and belong to the same entity. This prevents
    structural entities and malformed default references from entering
    selectable entity-target collections.
  */
  if (
    Object.prototype.hasOwnProperty.call(
      ruleSet,
      "hasDefaultVariant"
    )
  ) {
    if (typeof ruleSet.hasDefaultVariant !== "boolean") {
      console.warn(
        "hasDefaultVariant must be a boolean:",
        ruleSet
      );
      return false;
    }

    const defaultVariant =
      entity.defaultVariantId
        ? dataIndex.variantsById[entity.defaultVariantId]
        : null;

    const hasValidDefaultVariant = Boolean(
      defaultVariant &&
      defaultVariant.entityId === entity.id
    );

    return (
      hasValidDefaultVariant === ruleSet.hasDefaultVariant
    );
  }

  if (ruleSet.hasParent) {
    return entity.parentIds.includes(ruleSet.hasParent);
  }

  if (ruleSet.hasAncestor) {
    return entityHasAncestor(
      entity.id,
      ruleSet.hasAncestor,
      dataIndex
    );
  }

/*
    Matches a direct political or administrative relationship.

    Unlike hasAncestor, this does not follow the geographical parent tree.
  */
  if (ruleSet.administeredBy) {
    return entity.administeringEntityIds?.includes(
      ruleSet.administeredBy
    ) ?? false;
  }
  
  /*
  Matches direct membership in a composite political entity.

  This does not follow geographical parentIds or administrative
  relationships.
  */
  if (ruleSet.constituentOf) {
    return entity.constituentOfEntityIds?.includes(
      ruleSet.constituentOf
    )   ?? false;
  }

  if (ruleSet.entityTypeIs) {
    return entity.entityType === ruleSet.entityTypeIs;
  }

  if (entityRuleContainsMembershipCriteria(ruleSet)) {
    return entityHasMembership(
      entity.id,
      createEntityMembershipCriteria(ruleSet),
      dataIndex
    );
  }

  console.warn("Unknown entity rule:", ruleSet);
  return false;
}

/*
  Evaluates a variant rule tree.

    Supported rules:
  - all / any / not
  - variantEntityIs
  - variantHasTag / variantHasAnyTag / variantHasAllTags
  - variantEntityHasTag
  - variantEntityHasAncestor
  - variantEntityAdministeredBy
  - variantEntityConstituentOf
  - variantEntityMemberOf / variantEntityRelationshipType
  - variantEntityMembershipType / variantEntityMembershipStatus
  - variantEntityTypeIs
*/
function variantMatchesRules(variant, ruleSet, dataIndex) {
  const entity = dataIndex.entitiesById[variant.entityId];

  if (!entity) {
    return false;
  }

  if (!ruleSet || typeof ruleSet !== "object") {
    console.warn("Invalid variant rule:", ruleSet);
    return false;
  }

  if (Array.isArray(ruleSet.all)) {
    return ruleSet.all.every(rule => {
      return variantMatchesRules(variant, rule, dataIndex);
    });
  }

  if (Array.isArray(ruleSet.any)) {
    return ruleSet.any.some(rule => {
      return variantMatchesRules(variant, rule, dataIndex);
    });
  }

  if (ruleSet.not) {
    return !variantMatchesRules(variant, ruleSet.not, dataIndex);
  }

  if (ruleSet.variantEntityIs) {
    return variant.entityId === ruleSet.variantEntityIs;
  }

  if (ruleSet.variantHasTag) {
    return variant.tags.includes(ruleSet.variantHasTag);
  }

  if (Array.isArray(ruleSet.variantHasAnyTag)) {
    return ruleSet.variantHasAnyTag.some(tag => {
      return variant.tags.includes(tag);
    });
  }

  if (Array.isArray(ruleSet.variantHasAllTags)) {
    return ruleSet.variantHasAllTags.every(tag => {
      return variant.tags.includes(tag);
    });
  }

  if (ruleSet.variantEntityHasTag) {
    return entity.tags.includes(ruleSet.variantEntityHasTag);
  }

  if (ruleSet.variantEntityHasAncestor) {
    return entityHasAncestor(
      entity.id,
      ruleSet.variantEntityHasAncestor,
      dataIndex
    );
  }

/*
    Matches variants belonging to an entity administered by another entity.

    This remains separate from the geographical ancestry rules.
  */
  if (ruleSet.variantEntityAdministeredBy) {
    return entity.administeringEntityIds?.includes(
      ruleSet.variantEntityAdministeredBy
    ) ?? false;
  }
  
  /*
    Matches variants whose entity is a direct constituent of a composite
    political entity.

    This remains independent from geographical ancestry and administration.
  */
  if (ruleSet.variantEntityConstituentOf) {
    return entity.constituentOfEntityIds?.includes(
      ruleSet.variantEntityConstituentOf
    ) ?? false;
  }


  if (ruleSet.variantEntityTypeIs) {
    return entity.entityType === ruleSet.variantEntityTypeIs;
  }

  if (variantRuleContainsMembershipCriteria(ruleSet)) {
    return entityHasMembership(
      entity.id,
      createVariantEntityMembershipCriteria(ruleSet),
      dataIndex
    );
  }

  console.warn("Unknown variant rule:", ruleSet);
  return false;
}

function entityRuleContainsMembershipCriteria(ruleSet) {
  return Boolean(
    ruleSet.memberOf ||
    ruleSet.relationshipType ||
    ruleSet.membershipType ||
    ruleSet.membershipStatus
  );
}

function variantRuleContainsMembershipCriteria(ruleSet) {
  return Boolean(
    ruleSet.variantEntityMemberOf ||
    ruleSet.variantEntityRelationshipType ||
    ruleSet.variantEntityMembershipType ||
    ruleSet.variantEntityMembershipStatus
  );
}

function createEntityMembershipCriteria(ruleSet) {
  return {
    groupEntityId: ruleSet.memberOf,
    relationshipType: ruleSet.relationshipType,
    membershipType: ruleSet.membershipType,
    status: ruleSet.membershipStatus
  };
}

function createVariantEntityMembershipCriteria(ruleSet) {
  return {
    groupEntityId: ruleSet.variantEntityMemberOf,
    relationshipType: ruleSet.variantEntityRelationshipType,
    membershipType: ruleSet.variantEntityMembershipType,
    status: ruleSet.variantEntityMembershipStatus
  };
}

function entityHasMembership(entityId, criteria, dataIndex) {
  const memberships =
    dataIndex.entityMembershipsByMemberEntityId?.[entityId] ?? [];

  return memberships.some(membership => {
    return membershipMatchesCriteria(membership, criteria);
  });
}

function membershipMatchesCriteria(membership, criteria) {
  if (
    criteria.groupEntityId &&
    membership.groupEntityId !== criteria.groupEntityId
  ) {
    return false;
  }

  if (
    criteria.relationshipType &&
    membership.relationshipType !== criteria.relationshipType
  ) {
    return false;
  }

  if (
    criteria.membershipType &&
    membership.membershipType !== criteria.membershipType
  ) {
    return false;
  }

  if (
    criteria.status &&
    membership.status !== criteria.status
  ) {
    return false;
  }

  return true;
}

/*
  Returns whether possibleAncestorId appears anywhere above entityId.

  An entity is not its own ancestor. visitedIds prevents malformed circular
  parent data from causing infinite recursion.
*/
function entityHasAncestor(
  entityId,
  possibleAncestorId,
  dataIndex,
  visitedIds = new Set()
) {
  if (entityId === possibleAncestorId || visitedIds.has(entityId)) {
    return false;
  }

  const entity = dataIndex.entitiesById[entityId];

  if (!entity || !Array.isArray(entity.parentIds)) {
    return false;
  }

  const nextVisitedIds = new Set(visitedIds);
  nextVisitedIds.add(entityId);

  for (const parentId of entity.parentIds) {
    if (parentId === possibleAncestorId) {
      return true;
    }

    if (
      entityHasAncestor(
        parentId,
        possibleAncestorId,
        dataIndex,
        nextVisitedIds
      )
    ) {
      return true;
    }
  }

  return false;
}

/*
  Resolves several collections into one combined member list.

  No deduplication happens here. Gallery and quiz retain responsibility for
  their own downstream deduplication rules.
*/
function resolveCollections(collectionIds, dataIndex) {
  if (!Array.isArray(collectionIds)) {
    console.error("resolveCollections expected an array of collection IDs.");
    return [];
  }

  return collectionIds.flatMap(collectionId => {
    return resolveCollection(collectionId, dataIndex);
  });
}
