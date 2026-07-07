/*
  dataIndex.js

  Builds fast ID-based lookup maps from the raw data files and validates
  references and schema assumptions used throughout the app.

  Example lookup:
  dataIndex.entitiesById["ent_bolivia"]
*/

function buildDataIndex(rawData) {
  const index = {
    assetsById: {},
    entitiesById: {},
    variantsById: {},
    collectionsById: {},
    collectionGroupsById: {},
    quizPresetsById: {},
    entityMembershipsById: {},
    entityMembershipsByMemberEntityId: {},
    entityMembershipsByGroupEntityId: {},
    errors: [],
    warnings: []
  };

  indexArrayById(rawData.assets, index.assetsById, "asset", index.errors);
  indexArrayById(rawData.entities, index.entitiesById, "entity", index.errors);
  indexArrayById(rawData.variants, index.variantsById, "variant", index.errors);
  indexArrayById(
    rawData.collections,
    index.collectionsById,
    "collection",
    index.errors
  );
  indexArrayById(
    rawData.collectionGroups,
    index.collectionGroupsById,
    "collection group",
    index.errors
  );
  indexArrayById(
    rawData.quizPresets,
    index.quizPresetsById,
    "quiz preset",
    index.errors
  );
  indexArrayById(
    rawData.entityMemberships ?? [],
    index.entityMembershipsById,
    "entity membership",
    index.errors
  );

  indexEntityMemberships(rawData.entityMemberships ?? [], index);

  validateAssets(rawData.assets, index);
  validateEntities(rawData.entities, index, rawData.tagRegistry);
  validateVariants(rawData.variants, index, rawData.tagRegistry);
  validateEntityMemberships(rawData.entityMemberships ?? [], index);
  validateCollections(rawData.collections, index);
  validateCollectionGroups(rawData.collectionGroups, index);
  validateQuizPresets(rawData.quizPresets, index);

  return index;
}

/*
  Converts an array of objects into a lookup map keyed by each object's ID.
*/
function indexArrayById(items, targetMap, itemType, errors) {
  if (!Array.isArray(items)) {
    errors.push(`Expected ${itemType} data to be an array.`);
    return;
  }

  items.forEach(item => {
    if (!item || typeof item !== "object") {
      errors.push(`Invalid ${itemType} entry found.`);
      return;
    }

    if (typeof item.id !== "string" || item.id.trim() === "") {
      errors.push(`Missing ID on ${itemType}.`);
      return;
    }

    if (targetMap[item.id]) {
      errors.push(`Duplicate ${itemType} ID found: ${item.id}`);
      return;
    }

    targetMap[item.id] = item;
  });
}

/*
  Builds secondary membership lookup maps.

  Memberships are non-geographic relationships such as EU membership,
  UN-system association or sporting confederation membership.
*/
function indexEntityMemberships(membershipList, index) {
  if (!Array.isArray(membershipList)) {
    return;
  }

  membershipList.forEach(membership => {
    if (!membership || typeof membership !== "object") {
      return;
    }

    addMembershipToLookup(
      index.entityMembershipsByMemberEntityId,
      membership.memberEntityId,
      membership
    );

    addMembershipToLookup(
      index.entityMembershipsByGroupEntityId,
      membership.groupEntityId,
      membership
    );
  });
}

function addMembershipToLookup(lookup, entityId, membership) {
  if (typeof entityId !== "string" || entityId.trim() === "") {
    return;
  }

  if (!Array.isArray(lookup[entityId])) {
    lookup[entityId] = [];
  }

  lookup[entityId].push(membership);
}

function validateAssets(assetList, index) {
  assetList.forEach(asset => {
    if (typeof asset.path !== "string" || asset.path.trim() === "") {
      index.errors.push(`Asset ${asset.id} has no valid path.`);
    }
  });
}

/*
  Validates an optional array of entity references.

  This is used for non-hierarchical relationships such as political or
  administrative association. The field may be omitted on entities that do
  not need the relationship.
*/
function validateOptionalEntityReferences(
  ownerEntity,
  fieldName,
  relationshipLabel,
  index
) {
  const referencedEntityIds = ownerEntity[fieldName];

  if (referencedEntityIds === undefined) {
    return;
  }

  if (!Array.isArray(referencedEntityIds)) {
    index.errors.push(
      `Entity ${ownerEntity.id} must have a ${fieldName} array when provided.`
    );

    return;
  }

  const seenEntityIds = new Set();

  referencedEntityIds.forEach(referencedEntityId => {
    if (
      typeof referencedEntityId !== "string" ||
      referencedEntityId.trim() === ""
    ) {
      index.errors.push(
        `Entity ${ownerEntity.id} contains an invalid ${relationshipLabel} reference.`
      );

      return;
    }

    if (referencedEntityId === ownerEntity.id) {
      index.errors.push(
        `Entity ${ownerEntity.id} cannot reference itself as ${relationshipLabel}.`
      );

      return;
    }

    if (seenEntityIds.has(referencedEntityId)) {
      index.errors.push(
        `Entity ${ownerEntity.id} contains duplicate ${relationshipLabel} reference: ${referencedEntityId}`
      );

      return;
    }

    seenEntityIds.add(referencedEntityId);

    if (!index.entitiesById[referencedEntityId]) {
      index.errors.push(
        `Entity ${ownerEntity.id} references missing ${relationshipLabel} entity: ${referencedEntityId}`
      );
    }
  });
}

/*
  Validates external flag variants that officially represent an entity.

  These references are informational only. The referenced variants must belong
  to another entity; flags belonging to the current entity belong in its normal
  variant list instead.
*/
function validateOfficialRepresentationVariants(entity, index) {
  const variantIds = entity.officialRepresentationVariantIds;

  if (variantIds === undefined) {
    return;
  }

  if (!Array.isArray(variantIds)) {
    index.errors.push(
      `Entity ${entity.id} must have an officialRepresentationVariantIds array when provided.`
    );

    return;
  }

  const seenVariantIds = new Set();

  variantIds.forEach(variantId => {
    if (
      typeof variantId !== "string" ||
      variantId.trim() === ""
    ) {
      index.errors.push(
        `Entity ${entity.id} contains an invalid official representation variant reference.`
      );

      return;
    }

    if (seenVariantIds.has(variantId)) {
      index.errors.push(
        `Entity ${entity.id} contains duplicate official representation variant: ${variantId}`
      );

      return;
    }

    seenVariantIds.add(variantId);

    const variant = index.variantsById[variantId];

    if (!variant) {
      index.errors.push(
        `Entity ${entity.id} references missing official representation variant: ${variantId}`
      );

      return;
    }

    /*
      The referenced variant may belong to the same entity or to another
      entity. Same-entity references are useful for context-specific external
      representations such as Afghanistan's tricolour or Taiwan's Chinese
      Taipei sporting flag.
    */
  });
}

function validateEntities(entityList, index, tagRegistry) {
  entityList.forEach(entity => {
    if (typeof entity.name !== "string" || entity.name.trim() === "") {
      index.errors.push(`Entity ${entity.id} has no valid name.`);
    }

    validateAliases(entity.aliases, `Entity ${entity.id}`, index.errors);

    if (!Array.isArray(entity.parentIds)) {
      index.errors.push(`Entity ${entity.id} must have a parentIds array.`);
    } else {
      entity.parentIds.forEach(parentId => {
        if (!index.entitiesById[parentId]) {
          index.errors.push(
            `Entity ${entity.id} references missing parent entity: ${parentId}`
          );
        }
      });
    }

    /*
      Political or administrative relationships are deliberately separate
      from parentIds.

      parentIds remains reserved for geographical hierarchy, so geographical
      hasAncestor collection rules do not follow administering states.
    */
    validateOptionalEntityReferences(
      entity,
      "administeringEntityIds",
      "administering",
      index
    );
	
  /*
    Constituent relationships describe membership in a composite political
    entity without altering geographical ancestry.
  */
  validateOptionalEntityReferences(
    entity,
    "constituentOfEntityIds",
    "constituent-of",
    index
  );
	
	/*
    External variants that officially represent this entity are separate from
    its own variants and do not participate in selection or quiz generation.
    */
    validateOfficialRepresentationVariants(entity, index);

    if (entity.defaultVariantId !== null) {
      const defaultVariant = index.variantsById[entity.defaultVariantId];

      if (!defaultVariant) {
        index.errors.push(
          `Entity ${entity.id} references missing default variant: ${entity.defaultVariantId}`
        );
      } else if (defaultVariant.entityId !== entity.id) {
        index.errors.push(
          `Entity ${entity.id} uses a default variant belonging to another entity: ${entity.defaultVariantId}`
        );
      }
    }

    validateRegisteredTags(
      entity.tags,
      tagRegistry?.entityTags,
      `Entity ${entity.id}`,
      "entity",
      index.errors
    );
  });
}

/*
  Validates optional relationships between genuine flag variants.

  alternatives:
  - separate flag designs that may be inspected from the same Gallery item;

  reverses:
  - reverse-side designs associated with the current variant.

  These relationships are visual and semantic only. They do not alter the
  working pool or quiz selection.
*/
function validateRelatedVariants(variant, index) {
  const relatedVariants = variant.relatedVariants;

  if (relatedVariants === undefined) {
    return;
  }

  if (
    !relatedVariants ||
    typeof relatedVariants !== "object" ||
    Array.isArray(relatedVariants)
  ) {
    index.errors.push(
      `Variant ${variant.id} has an invalid relatedVariants object.`
    );

    return;
  }

  const supportedRelationshipTypes = [
    "alternatives",
    "reverses"
  ];

  Object.keys(relatedVariants).forEach(relationshipType => {
    if (!supportedRelationshipTypes.includes(relationshipType)) {
      index.errors.push(
        `Variant ${variant.id} uses unsupported related variant type: ${relationshipType}`
      );
    }
  });

  supportedRelationshipTypes.forEach(relationshipType => {
    const relatedVariantIds =
      relatedVariants[relationshipType];

    /*
      Each relationship array is optional. This avoids forcing empty arrays
      onto every ordinary variant.
    */
    if (relatedVariantIds === undefined) {
      return;
    }

    if (!Array.isArray(relatedVariantIds)) {
      index.errors.push(
        `Variant ${variant.id} relatedVariants.${relationshipType} must be an array.`
      );

      return;
    }

    const seenVariantIds = new Set();

    relatedVariantIds.forEach(relatedVariantId => {
      if (
        typeof relatedVariantId !== "string" ||
        relatedVariantId.trim() === ""
      ) {
        index.errors.push(
          `Variant ${variant.id} contains an invalid ${relationshipType} variant reference.`
        );

        return;
      }

      if (relatedVariantId === variant.id) {
        index.errors.push(
          `Variant ${variant.id} cannot relate to itself as ${relationshipType}.`
        );

        return;
      }

      if (seenVariantIds.has(relatedVariantId)) {
        index.errors.push(
          `Variant ${variant.id} contains duplicate ${relationshipType} reference: ${relatedVariantId}`
        );

        return;
      }

      seenVariantIds.add(relatedVariantId);

      const relatedVariant =
        index.variantsById[relatedVariantId];

      if (!relatedVariant) {
        index.errors.push(
          `Variant ${variant.id} references missing ${relationshipType} variant: ${relatedVariantId}`
        );

        return;
      }

      /*
        Related alternatives and reverses must belong to the same entity.

        Cross-entity visual similarity is a different concern and should not
        be represented through this field.
      */
      if (relatedVariant.entityId !== variant.entityId) {
        index.errors.push(
          `Variant ${variant.id} references ${relationshipType} variant ${relatedVariantId} belonging to another entity.`
        );
      }
    });
  });
}

/*
  Validates optional asset lists belonging to one semantic variant.

  alternativeAssetIds:
  - additional visual renditions of the same flag design;

  quizAssetIds:
  - the subset of the primary and alternative assets that may be selected
    randomly when this variant appears in a quiz.
*/
function validateVariantAssetOptions(variant, index) {
  const primaryAssetId = variant.assetId;

  /*
    Validate additional visual renditions.

    The primary asset belongs in assetId and must not be repeated here.
  */
  if (variant.alternativeAssetIds !== undefined) {
    if (!Array.isArray(variant.alternativeAssetIds)) {
      index.errors.push(
        `Variant ${variant.id} must have an alternativeAssetIds array when provided.`
      );
    } else {
      const seenAlternativeAssetIds = new Set();

      variant.alternativeAssetIds.forEach(assetId => {
        if (
          typeof assetId !== "string" ||
          assetId.trim() === ""
        ) {
          index.errors.push(
            `Variant ${variant.id} contains an invalid alternative asset reference.`
          );

          return;
        }

        if (assetId === primaryAssetId) {
          index.errors.push(
            `Variant ${variant.id} repeats its primary asset inside alternativeAssetIds: ${assetId}`
          );

          return;
        }

        if (seenAlternativeAssetIds.has(assetId)) {
          index.errors.push(
            `Variant ${variant.id} contains duplicate alternative asset: ${assetId}`
          );

          return;
        }

        seenAlternativeAssetIds.add(assetId);

        if (!index.assetsById[assetId]) {
          index.errors.push(
            `Variant ${variant.id} references missing alternative asset: ${assetId}`
          );
        }
      });
    }
  }

  /*
    quizAssetIds is deliberately explicit.

    An alternative asset is not automatically quiz-safe merely because it can
    be inspected in Gallery zoom.
  */
  if (variant.quizAssetIds !== undefined) {
    if (!Array.isArray(variant.quizAssetIds)) {
      index.errors.push(
        `Variant ${variant.id} must have a quizAssetIds array when provided.`
      );

      return;
    }

    if (variant.quizAssetIds.length === 0) {
      index.errors.push(
        `Variant ${variant.id} cannot have an empty quizAssetIds array.`
      );

      return;
    }

    const permittedAssetIds = new Set([
      primaryAssetId,
      ...(variant.alternativeAssetIds ?? [])
    ]);

    const seenQuizAssetIds = new Set();

    variant.quizAssetIds.forEach(assetId => {
      if (
        typeof assetId !== "string" ||
        assetId.trim() === ""
      ) {
        index.errors.push(
          `Variant ${variant.id} contains an invalid quiz asset reference.`
        );

        return;
      }

      if (seenQuizAssetIds.has(assetId)) {
        index.errors.push(
          `Variant ${variant.id} contains duplicate quiz asset: ${assetId}`
        );

        return;
      }

      seenQuizAssetIds.add(assetId);

      if (!index.assetsById[assetId]) {
        index.errors.push(
          `Variant ${variant.id} references missing quiz asset: ${assetId}`
        );

        return;
      }

      if (!permittedAssetIds.has(assetId)) {
        index.errors.push(
          `Variant ${variant.id} uses quiz asset ${assetId} that is neither its primary asset nor an alternative asset.`
        );
      }
    });
  }
}

function validateVariants(variantList, index, tagRegistry) {
  variantList.forEach(variant => {
    if (!index.entitiesById[variant.entityId]) {
      index.errors.push(
        `Variant ${variant.id} references missing entity: ${variant.entityId}`
      );
    }

    if (!index.assetsById[variant.assetId]) {
      index.errors.push(
        `Variant ${variant.id} references missing asset: ${variant.assetId}`
      );
    }

    if (
      typeof variant.displayName !== "string" ||
      variant.displayName.trim() === ""
    ) {
      index.errors.push(`Variant ${variant.id} has no valid displayName.`);
    }

    validateAliases(variant.aliases, `Variant ${variant.id}`, index.errors);
	
	validateRelatedVariants(variant, index);
	validateVariantAssetOptions(variant, index);

    validateRegisteredTags(
      variant.tags,
      tagRegistry?.variantTags,
      `Variant ${variant.id}`,
      "variant",
      index.errors
    );

    validateVariantYears(variant, index.errors);
  });
}

/*
  Aliases must be non-empty strings and unique after normalisation.
*/
function validateAliases(aliases, ownerLabel, errors) {
  if (!Array.isArray(aliases)) {
    errors.push(`${ownerLabel} must have an aliases array.`);
    return;
  }

  const normalisedAliases = new Set();

  aliases.forEach(alias => {
    if (typeof alias !== "string" || alias.trim() === "") {
      errors.push(`${ownerLabel} contains an invalid alias.`);
      return;
    }

    const normalisedAlias = alias.trim().toLocaleLowerCase();

    if (normalisedAliases.has(normalisedAlias)) {
      errors.push(`${ownerLabel} contains duplicate alias: ${alias}`);
      return;
    }

    normalisedAliases.add(normalisedAlias);
  });
}

function validateRegisteredTags(
  tags,
  registeredTags,
  ownerLabel,
  tagType,
  errors
) {
  if (!Array.isArray(tags)) {
    errors.push(`${ownerLabel} must have a tags array.`);
    return;
  }

  if (!Array.isArray(registeredTags)) {
    errors.push(`Missing ${tagType} tag registry.`);
    return;
  }

  const seenTags = new Set();

  tags.forEach(tag => {
    if (typeof tag !== "string" || tag.trim() === "") {
      errors.push(`${ownerLabel} contains an invalid ${tagType} tag.`);
      return;
    }

    if (seenTags.has(tag)) {
      errors.push(`${ownerLabel} contains duplicate ${tagType} tag: ${tag}`);
      return;
    }

    seenTags.add(tag);

    if (!registeredTags.includes(tag)) {
      errors.push(`${ownerLabel} uses unregistered ${tagType} tag: ${tag}`);
    }
  });
}
/*
  Validates exact, approximate and uncertain variant dates.

  Supported startYearPrecision values:
  - omitted: exact start year;
  - circa: approximately startYear;
  - range: sometime between startYear and startYearLatest;
  - decade: sometime during the decade beginning at startYear.
*/
function validateVariantYears(variant, errors) {
  const startYear = variant.startYear;
  const startYearLatest = variant.startYearLatest;
  const startYearPrecision = variant.startYearPrecision;
  const endYear = variant.endYear;

  const hasValidStartYear =
    startYear === null ||
    Number.isInteger(startYear);

  const hasValidEndYear =
    endYear === null ||
    Number.isInteger(endYear);

  if (!hasValidStartYear) {
    errors.push(
      `Variant ${variant.id} has invalid startYear: ${startYear}`
    );
  }

  if (!hasValidEndYear) {
    errors.push(
      `Variant ${variant.id} has invalid endYear: ${endYear}`
    );
  }

  const supportedPrecisions = [
    "circa",
    "range",
    "decade"
  ];

  if (
    startYearPrecision !== undefined &&
    !supportedPrecisions.includes(startYearPrecision)
  ) {
    errors.push(
      `Variant ${variant.id} has unsupported startYearPrecision: ${startYearPrecision}`
    );
  }

  /*
    Precision metadata is meaningless without a known numeric starting point.
  */
  if (
    startYearPrecision !== undefined &&
    !Number.isInteger(startYear)
  ) {
    errors.push(
      `Variant ${variant.id} cannot use startYearPrecision without an integer startYear.`
    );
  }

  const hasStartYearLatest =
    startYearLatest !== undefined;

  if (
    hasStartYearLatest &&
    !Number.isInteger(startYearLatest)
  ) {
    errors.push(
      `Variant ${variant.id} has invalid startYearLatest: ${startYearLatest}`
    );
  }

  /*
    Only ranges and decades need a latest possible adoption year.
  */
  if (
    hasStartYearLatest &&
    !["range", "decade"].includes(startYearPrecision)
  ) {
    errors.push(
      `Variant ${variant.id} uses startYearLatest without range or decade precision.`
    );
  }

  if (
    ["range", "decade"].includes(startYearPrecision) &&
    !Number.isInteger(startYearLatest)
  ) {
    errors.push(
      `Variant ${variant.id} must have an integer startYearLatest when using ${startYearPrecision} precision.`
    );
  }

  if (
    Number.isInteger(startYear) &&
    Number.isInteger(startYearLatest) &&
    startYearLatest <= startYear
  ) {
    errors.push(
      `Variant ${variant.id} must have startYearLatest after startYear.`
    );
  }

  /*
    Decade precision uses a complete conventional decade, such as
    1980 through 1989.
  */
  if (
    startYearPrecision === "decade" &&
    Number.isInteger(startYear)
  ) {
    if (startYear % 10 !== 0) {
      errors.push(
        `Variant ${variant.id} decade startYear must end in zero: ${startYear}`
      );
    }

    if (
      Number.isInteger(startYearLatest) &&
      startYearLatest !== startYear + 9
    ) {
      errors.push(
        `Variant ${variant.id} decade range must end nine years after startYear.`
      );
    }
  }

  if (
    Number.isInteger(startYear) &&
    Number.isInteger(endYear) &&
    endYear < startYear
  ) {
    errors.push(
      `Variant ${variant.id} has endYear before startYear.`
    );
  }

  /*
    If adoption may have occurred as late as startYearLatest, the flag cannot
    have stopped being used before that latest possible adoption year.
  */
  if (
    Number.isInteger(startYearLatest) &&
    Number.isInteger(endYear) &&
    endYear < startYearLatest
  ) {
    errors.push(
      `Variant ${variant.id} has endYear before startYearLatest.`
    );
  }
}

function validateEntityMemberships(membershipList, index) {
  if (!Array.isArray(membershipList)) {
    index.errors.push("Expected entity membership data to be an array.");
    return;
  }

  membershipList.forEach(membership => {
    const ownerLabel = `Entity membership ${membership?.id ?? "<missing id>"}`;

    if (!membership || typeof membership !== "object") {
      index.errors.push("Invalid entity membership entry found.");
      return;
    }

    validateEntityMembershipEntityReference(
      membership,
      "memberEntityId",
      "member entity",
      index
    );

    validateEntityMembershipEntityReference(
      membership,
      "groupEntityId",
      "group entity",
      index
    );

    if (
      membership.memberEntityId &&
      membership.memberEntityId === membership.groupEntityId
    ) {
      index.errors.push(
        `${ownerLabel} cannot use the same entity as member and group: ${membership.memberEntityId}`
      );
    }

    validateOptionalNonEmptyString(
      membership,
      "relationshipType",
      ownerLabel,
      index.errors,
      false
    );

    validateOptionalNonEmptyString(
      membership,
      "membershipType",
      ownerLabel,
      index.errors,
      false
    );

    validateOptionalNonEmptyString(
      membership,
      "status",
      ownerLabel,
      index.errors,
      true
    );

    validateMembershipYear(
      membership,
      "startYear",
      ownerLabel,
      index.errors
    );

    validateMembershipYear(
      membership,
      "endYear",
      ownerLabel,
      index.errors
    );

    if (
      Number.isInteger(membership.startYear) &&
      Number.isInteger(membership.endYear) &&
      membership.endYear < membership.startYear
    ) {
      index.errors.push(
        `${ownerLabel} has endYear before startYear.`
      );
    }

    validateOptionalNonEmptyString(
      membership,
      "displayNameOverride",
      ownerLabel,
      index.errors,
      false
    );

    validateOptionalStringArray(
      membership,
      "answerAliases",
      ownerLabel,
      index.errors
    );

    validateOptionalMembershipVariantReference(
      membership,
      "galleryVariantId",
      ownerLabel,
      index
    );

    validateOptionalMembershipVariantReference(
      membership,
      "quizVariantId",
      ownerLabel,
      index
    );

    if (
      membership.notes !== undefined &&
      typeof membership.notes !== "string"
    ) {
      index.errors.push(
        `${ownerLabel} notes must be a string when provided.`
      );
    }
  });
}

function validateEntityMembershipEntityReference(
  membership,
  fieldName,
  label,
  index
) {
  const entityId = membership[fieldName];
  const ownerLabel = `Entity membership ${membership?.id ?? "<missing id>"}`;

  if (typeof entityId !== "string" || entityId.trim() === "") {
    index.errors.push(
      `${ownerLabel} has no valid ${label} reference.`
    );
    return;
  }

  if (!index.entitiesById[entityId]) {
    index.errors.push(
      `${ownerLabel} references missing ${label}: ${entityId}`
    );
  }
}


function validateOptionalStringArray(owner, fieldName, ownerLabel, errors) {
  const value = owner[fieldName];

  if (value === undefined || value === null) {
    return;
  }

  if (!Array.isArray(value)) {
    errors.push(
      `${ownerLabel} ${fieldName} must be an array when provided.`
    );
    return;
  }

  const seen = new Set();

  value.forEach((item, index) => {
    if (typeof item !== "string" || item.trim() === "") {
      errors.push(
        `${ownerLabel} ${fieldName}[${index}] must be a non-empty string.`
      );
      return;
    }

    const key = item.trim().toLowerCase();

    if (seen.has(key)) {
      errors.push(
        `${ownerLabel} ${fieldName} contains a duplicate value: ${item}`
      );
    }

    seen.add(key);
  });
}

function validateOptionalMembershipVariantReference(
  membership,
  fieldName,
  ownerLabel,
  index
) {
  const variantId = membership[fieldName];

  if (variantId === undefined || variantId === null) {
    return;
  }

  if (typeof variantId !== "string" || variantId.trim() === "") {
    index.errors.push(
      `${ownerLabel} ${fieldName} must be a non-empty string when provided.`
    );
    return;
  }

  const variant = index.variantsById[variantId];

  if (!variant) {
    index.errors.push(
      `${ownerLabel} references missing ${fieldName}: ${variantId}`
    );
    return;
  }

  if (variant.entityId !== membership.memberEntityId) {
    index.errors.push(
      `${ownerLabel} ${fieldName} must belong to ${membership.memberEntityId}.`
    );
  }
}

function validateOptionalNonEmptyString(
  owner,
  fieldName,
  ownerLabel,
  errors,
  required
) {
  const value = owner[fieldName];

  if (value === undefined || value === null) {
    if (required) {
      errors.push(`${ownerLabel} must have a ${fieldName}.`);
    }

    return;
  }

  if (typeof value !== "string" || value.trim() === "") {
    errors.push(
      `${ownerLabel} must use a non-empty string for ${fieldName}.`
    );
  }
}

function validateMembershipYear(
  membership,
  fieldName,
  ownerLabel,
  errors
) {
  const year = membership[fieldName];

  if (year === null || Number.isInteger(year)) {
    return;
  }

  errors.push(
    `${ownerLabel} has invalid ${fieldName}: ${year}`
  );
}

function validateCollections(collectionList, index) {
  collectionList.forEach(collection => {
    if (!["manual", "dynamic"].includes(collection.type)) {
      index.errors.push(
        `Collection ${collection.id} has invalid type: ${collection.type}`
      );
    }

    if (!["entity", "variant"].includes(collection.target)) {
      index.errors.push(
        `Collection ${collection.id} has invalid target: ${collection.target}`
      );
    }

    if (collection.type === "manual") {
      validateManualCollection(collection, index);
    }

    if (collection.type === "dynamic") {
      if (!collection.rules) {
        index.errors.push(`Dynamic collection ${collection.id} has no rules.`);
      } else {
        validateDynamicCollectionRules(collection, index);
        validateDynamicCollectionOverrides(collection, index);
      }
    }
  });
}

/*
  Validates rule shapes introduced for dynamic collections.

  Existing rule families continue to be resolved by collectionResolver.js.
  This validator currently checks the logical containers needed to reach
  hasDefaultVariant wherever it appears in a rule tree.
*/
function validateDynamicCollectionRules(collection, index) {
  validateDynamicCollectionRuleNode(
    collection.rules,
    collection,
    index,
    "rules"
  );
}

function validateDynamicCollectionRuleNode(
  ruleSet,
  collection,
  index,
  rulePath
) {
  if (
    !ruleSet ||
    typeof ruleSet !== "object" ||
    Array.isArray(ruleSet)
  ) {
    index.errors.push(
      `Dynamic collection ${collection.id} has an invalid rule object at ${rulePath}.`
    );
    return;
  }

  ["all", "any"].forEach(logicalKey => {
    if (!Object.prototype.hasOwnProperty.call(ruleSet, logicalKey)) {
      return;
    }

    const childRules = ruleSet[logicalKey];

    if (!Array.isArray(childRules)) {
      index.errors.push(
        `Dynamic collection ${collection.id} must use an array for ${rulePath}.${logicalKey}.`
      );
      return;
    }

    childRules.forEach((childRule, childIndex) => {
      validateDynamicCollectionRuleNode(
        childRule,
        collection,
        index,
        `${rulePath}.${logicalKey}[${childIndex}]`
      );
    });
  });

  if (Object.prototype.hasOwnProperty.call(ruleSet, "not")) {
    validateDynamicCollectionRuleNode(
      ruleSet.not,
      collection,
      index,
      `${rulePath}.not`
    );
  }

  if (
    Object.prototype.hasOwnProperty.call(
      ruleSet,
      "hasDefaultVariant"
    )
  ) {
    if (collection.target !== "entity") {
      index.errors.push(
        `Dynamic collection ${collection.id} uses entity-only rule hasDefaultVariant with target ${collection.target}.`
      );
    }

    if (typeof ruleSet.hasDefaultVariant !== "boolean") {
      index.errors.push(
        `Dynamic collection ${collection.id} must use a boolean for ${rulePath}.hasDefaultVariant.`
      );
    }
  }

  validateMembershipRuleFields(
    ruleSet,
    collection,
    index,
    rulePath
  );
}

function validateMembershipRuleFields(
  ruleSet,
  collection,
  index,
  rulePath
) {
  const entityMembershipKeys = [
    "memberOf",
    "relationshipType",
    "membershipType",
    "membershipStatus"
  ];

  const variantMembershipKeys = [
    "variantEntityMemberOf",
    "variantEntityRelationshipType",
    "variantEntityMembershipType",
    "variantEntityMembershipStatus"
  ];

  entityMembershipKeys.forEach(ruleKey => {
    if (!Object.prototype.hasOwnProperty.call(ruleSet, ruleKey)) {
      return;
    }

    if (collection.target !== "entity") {
      index.errors.push(
        `Dynamic collection ${collection.id} uses entity-only membership rule ${ruleKey} with target ${collection.target}.`
      );
    }

    validateMembershipRuleValue(
      ruleSet,
      ruleKey,
      collection,
      index,
      `${rulePath}.${ruleKey}`,
      ruleKey === "memberOf"
    );
  });

  variantMembershipKeys.forEach(ruleKey => {
    if (!Object.prototype.hasOwnProperty.call(ruleSet, ruleKey)) {
      return;
    }

    if (collection.target !== "variant") {
      index.errors.push(
        `Dynamic collection ${collection.id} uses variant-only membership rule ${ruleKey} with target ${collection.target}.`
      );
    }

    validateMembershipRuleValue(
      ruleSet,
      ruleKey,
      collection,
      index,
      `${rulePath}.${ruleKey}`,
      ruleKey === "variantEntityMemberOf"
    );
  });
}

function validateMembershipRuleValue(
  ruleSet,
  ruleKey,
  collection,
  index,
  rulePath,
  mustReferenceEntity
) {
  const ruleValue = ruleSet[ruleKey];

  if (typeof ruleValue !== "string" || ruleValue.trim() === "") {
    index.errors.push(
      `Dynamic collection ${collection.id} must use a non-empty string for ${rulePath}.`
    );
    return;
  }

  if (mustReferenceEntity && !index.entitiesById[ruleValue]) {
    index.errors.push(
      `Dynamic collection ${collection.id} ${rulePath} references missing entity: ${ruleValue}`
    );
  }
}

function validateDynamicCollectionOverrides(collection, index) {
  validateCollectionEntityIdList(
    collection,
    "includeEntityIds",
    index
  );

  validateCollectionEntityIdList(
    collection,
    "excludeEntityIds",
    index
  );

  validateCollectionVariantIdList(
    collection,
    "includeVariantIds",
    index
  );

  validateCollectionVariantIdList(
    collection,
    "excludeVariantIds",
    index
  );
}

function validateCollectionEntityIdList(collection, fieldName, index) {
  const entityIds = collection[fieldName];

  if (entityIds === undefined) {
    return;
  }

  if (!Array.isArray(entityIds)) {
    index.errors.push(
      `Dynamic collection ${collection.id} must use an array for ${fieldName}.`
    );
    return;
  }

  const seenEntityIds = new Set();

  entityIds.forEach(entityId => {
    if (typeof entityId !== "string" || entityId.trim() === "") {
      index.errors.push(
        `Dynamic collection ${collection.id} has an invalid ${fieldName} entry.`
      );
      return;
    }

    if (seenEntityIds.has(entityId)) {
      index.errors.push(
        `Dynamic collection ${collection.id} has duplicate ${fieldName} entry: ${entityId}`
      );
      return;
    }

    seenEntityIds.add(entityId);

    if (!index.entitiesById[entityId]) {
      index.errors.push(
        `Dynamic collection ${collection.id} ${fieldName} references missing entity: ${entityId}`
      );
    }
  });
}

function validateCollectionVariantIdList(collection, fieldName, index) {
  const variantIds = collection[fieldName];

  if (variantIds === undefined) {
    return;
  }

  if (!Array.isArray(variantIds)) {
    index.errors.push(
      `Dynamic collection ${collection.id} must use an array for ${fieldName}.`
    );
    return;
  }

  const seenVariantIds = new Set();

  variantIds.forEach(variantId => {
    if (typeof variantId !== "string" || variantId.trim() === "") {
      index.errors.push(
        `Dynamic collection ${collection.id} has an invalid ${fieldName} entry.`
      );
      return;
    }

    if (seenVariantIds.has(variantId)) {
      index.errors.push(
        `Dynamic collection ${collection.id} has duplicate ${fieldName} entry: ${variantId}`
      );
      return;
    }

    seenVariantIds.add(variantId);

    if (!index.variantsById[variantId]) {
      index.errors.push(
        `Dynamic collection ${collection.id} ${fieldName} references missing variant: ${variantId}`
      );
    }
  });
}

function validateManualCollection(collection, index) {
  if (!Array.isArray(collection.members)) {
    index.errors.push(
      `Manual collection ${collection.id} has no members array.`
    );
    return;
  }

  const memberIds = new Set();

  collection.members.forEach(member => {
    if (!member || typeof member !== "object") {
      index.errors.push(
        `Manual collection ${collection.id} contains an invalid member.`
      );
      return;
    }

    if (typeof member.id !== "string" || member.id.trim() === "") {
      index.errors.push(
        `Manual collection ${collection.id} contains a member with no ID.`
      );
    } else if (memberIds.has(member.id)) {
      index.errors.push(
        `Manual collection ${collection.id} contains duplicate member ID: ${member.id}`
      );
    } else {
      memberIds.add(member.id);
    }

    const entity = index.entitiesById[member.entityId];

    if (!entity) {
      index.errors.push(
        `Collection member ${member.id} references missing entity: ${member.entityId}`
      );
    }

    validateCollectionMemberVariant(
      member,
      "galleryVariantId",
      "gallery variant",
      index
    );

    validateCollectionMemberVariant(
      member,
      "quizVariantId",
      "quiz variant",
      index
    );

    validateOptionalNonEmptyString(
      member,
      "displayNameOverride",
      `Collection member ${member.id}`,
      index.errors,
      false
    );

    validateOptionalStringArray(
      member,
      "answerAliases",
      `Collection member ${member.id}`,
      index.errors
    );
  });
}

function validateCollectionMemberVariant(member, fieldName, label, index) {
  const variantId = member[fieldName];

  if (variantId === null) {
    return;
  }

  const variant = index.variantsById[variantId];

  if (!variant) {
    index.errors.push(
      `Collection member ${member.id} references missing ${label}: ${variantId}`
    );
    return;
  }

  if (variant.entityId !== member.entityId) {
    index.errors.push(
      `Collection member ${member.id} uses ${label} ${variantId} belonging to another entity.`
    );
  }
}

function validateCollectionGroups(groupList, index) {
  groupList.forEach(group => {
    if (!Array.isArray(group.parentGroupIds)) {
      index.errors.push(
        `Collection group ${group.id} must have a parentGroupIds array.`
      );
    } else {
      group.parentGroupIds.forEach(parentGroupId => {
        if (!index.collectionGroupsById[parentGroupId]) {
          index.errors.push(
            `Collection group ${group.id} references missing parent group: ${parentGroupId}`
          );
        }
      });
    }

    if (!Array.isArray(group.collectionIds)) {
      index.errors.push(
        `Collection group ${group.id} must have a collectionIds array.`
      );
      return;
    }

    group.collectionIds.forEach(collectionId => {
      if (!index.collectionsById[collectionId]) {
        index.errors.push(
          `Collection group ${group.id} references missing collection: ${collectionId}`
        );
      }
    });
  });
}

function validateQuizPresets(presetList, index) {
  presetList.forEach(preset => {
    if (!["typing", "multiple_choice"].includes(preset.mode)) {
      index.errors.push(
        `Quiz preset ${preset.id} has invalid mode: ${preset.mode}`
      );
    }

    if (preset.sourceType !== "collections") {
      index.warnings.push(
        `Quiz preset ${preset.id} uses unsupported source type: ${preset.sourceType}`
      );
    }

    if (!Array.isArray(preset.collectionIds)) {
      index.errors.push(
        `Quiz preset ${preset.id} has no collectionIds array.`
      );
      return;
    }

    preset.collectionIds.forEach(collectionId => {
      if (!index.collectionsById[collectionId]) {
        index.errors.push(
          `Quiz preset ${preset.id} references missing collection: ${collectionId}`
        );
      }
    });

    /*
      Question counts are calculated from the resolved working pool. Preserve
      old data safely, but flag the legacy field so it can be removed.
    */
    if (Object.prototype.hasOwnProperty.call(preset, "questionCount")) {
      index.warnings.push(
        `Quiz preset ${preset.id} uses legacy questionCount; the available count is calculated dynamically.`
      );
    }
  });
}
