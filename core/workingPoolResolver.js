/*
  workingPoolResolver.js

  Turns every supported selection source into one normalised
  WorkingPoolMember list.

  Supported sources:
  - selected collections;
  - explicit grouped entity selections;
  - directly selected entities;
  - directly selected variants.

  Gallery and quiz consume these resolved members rather than reading
  selection state directly.
*/

function resolveWorkingPool(options = {}, dataIndex) {
  if (!dataIndex) {
    console.error("Cannot resolve working pool without a data index.");
    return [];
  }

  const {
    collectionIds = [],
    entityGroups = [],
    entityIds = [],
    variantIds = []
  } = options;

  const workingPoolMembers = [];

  /*
    Collection resolution remains authoritative for manual collections,
    dynamic collections and gallery/quiz variant differences.
  */
  const collectionMembers = resolveCollections(collectionIds, dataIndex);

  collectionMembers.forEach(member => {
    const workingPoolMember = createCollectionWorkingPoolMember(member);

    if (workingPoolMember) {
      workingPoolMembers.push(workingPoolMember);
    }
  });

  /*
    Explicit entity groups preserve the UI action that added several entities
    together.

    Each entity still becomes its own WorkingPoolMember, but all members retain
    the same grouped source metadata for Grouped Gallery provenance.
  */
  entityGroups.forEach(entityGroup => {
    const groupMembers = createEntityGroupWorkingPoolMembers(
      entityGroup,
      dataIndex
    );

    workingPoolMembers.push(...groupMembers);
  });

  entityIds.forEach(entityId => {
    const workingPoolMember = createDirectEntityWorkingPoolMember(
      entityId,
      dataIndex
    );

    if (workingPoolMember) {
      workingPoolMembers.push(workingPoolMember);
    }
  });

  variantIds.forEach(variantId => {
    const workingPoolMember = createDirectVariantWorkingPoolMember(
      variantId,
      dataIndex
    );

    if (workingPoolMember) {
      workingPoolMembers.push(workingPoolMember);
    }
  });

  /*
  Apply quiz-safe variant substitution after every source has been resolved.

  This keeps collection, direct-entity and direct-variant behaviour consistent
  without duplicating the same rule inside every source resolver.
  */
  return workingPoolMembers.map(member => {
  return applyQuizSafeVariantSubstitution(member, dataIndex);
});
}

/*
  Replaces an ordinary quiz variant with its linked text-removed variant when
  one exists.

  Gallery and reveal continue to use the ordinary variant. The altered asset
  is used only while the quiz question is being answered.
*/
function applyQuizSafeVariantSubstitution(member, dataIndex) {
  if (!member) {
    return member;
  }

  const galleryVariant = member.galleryVariantId
    ? dataIndex.variantsById?.[member.galleryVariantId]
    : null;

  const quizVariant = member.quizVariantId
    ? dataIndex.variantsById?.[member.quizVariantId]
    : null;

  /*
    If a technical text-removed variant was selected directly, recover the
    ordinary variant it represents for Gallery and reveal.
  */
  const normalGalleryVariantId = getBaseVariantId(
    galleryVariant,
    dataIndex
  );

  /*
    Quiz substitution is based on the conceptual quiz variant. This preserves
    manual collection members whose gallery and quiz variants intentionally
    differ.
  */
  const normalQuizVariantId = getBaseVariantId(
    quizVariant,
    dataIndex
  );

  const quizSafeVariant = normalQuizVariantId
    ? findTextRemovedVariantForBase(
        normalQuizVariantId,
        dataIndex
      )
    : null;

  const selectedTechnicalQuizVariantId =
    quizVariant?.tags?.includes("text_removed")
      ? quizVariant.id
      : null;

  return {
    ...member,
    galleryVariantId:
      normalGalleryVariantId ??
      member.galleryVariantId ??
      null,
    quizVariantId:
      quizSafeVariant?.id ??
      selectedTechnicalQuizVariantId ??
      normalQuizVariantId ??
      member.quizVariantId ??
      null
  };
}

/*
  Returns the ordinary variant represented by a technical text-removed
  variant. Ordinary variants simply return their own ID.

  The entity default is retained as a defensive fallback for older technical
  variants that do not yet contain baseVariantId.
*/
function getBaseVariantId(variant, dataIndex) {
  if (!variant) {
    return null;
  }

  const isTextRemoved =
    variant.tags?.includes("text_removed") ?? false;

  if (!isTextRemoved) {
    return variant.id;
  }

  const baseVariant =
    variant.baseVariantId
      ? dataIndex.variantsById?.[variant.baseVariantId]
      : null;

  if (baseVariant?.entityId === variant.entityId) {
    return baseVariant.id;
  }

  const entity = dataIndex.entitiesById?.[variant.entityId];

  return entity?.defaultVariantId ?? variant.id;
}

/*
  Finds the technical quiz image explicitly linked to an ordinary variant.

  A normal variant may have no altered equivalent, in which case the normal
  asset remains the quiz image.
*/
function findTextRemovedVariantForBase(baseVariantId, dataIndex) {
  return Object.values(dataIndex.variantsById ?? {}).find(variant => {
    return (
      variant.baseVariantId === baseVariantId &&
      variant.tags?.includes("text_removed")
    );
  }) ?? null;
}

/*
  Normalises a resolved CollectionMember into the shared runtime shape.
*/
function createCollectionWorkingPoolMember(member) {
  if (!member || !member.id || !member.entityId) {
    console.error("Cannot normalise an invalid collection member.", member);
    return null;
  }

  return {
    id: member.id,
    sourceType: "collection",
    sourceId: member.collectionId,
    collectionId: member.collectionId,
    entityId: member.entityId,
    galleryVariantId: member.galleryVariantId ?? null,
    quizVariantId: member.quizVariantId ?? null,
    displayNameOverride: normaliseWorkingPoolDisplayNameOverride(
      member.displayNameOverride
    ),
    answerAliases: normaliseWorkingPoolAnswerAliases(
      member.answerAliases
    )
  };
}

/*
  A direct entity uses its default variant for both gallery and quiz.

  Structural entities may technically resolve with null variant IDs, although
  the current Entity Detail UI normally prevents them from being selected.
  Quiz generation excludes any unusable member downstream.
*/
/*
  Normalises an explicit grouped entity selection into WorkingPoolMembers.

  The group controls provenance only. Every member still resolves through the
  selected entity's default variant, preserving normal Gallery and quiz rules.
*/

function normaliseWorkingPoolDisplayNameOverride(value) {
  return typeof value === "string" && value.trim() !== ""
    ? value.trim()
    : null;
}

function normaliseWorkingPoolAnswerAliases(value) {
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

function createEntityGroupWorkingPoolMembers(entityGroup, dataIndex) {
  if (
    !entityGroup ||
    typeof entityGroup !== "object" ||
    typeof entityGroup.id !== "string" ||
    entityGroup.id.trim() === "" ||
    !Array.isArray(entityGroup.entityIds)
  ) {
    console.error(
      "Cannot resolve an invalid grouped entity selection.",
      entityGroup
    );

    return [];
  }

  const seenEntityIds = new Set();
  const workingPoolMembers = [];

  entityGroup.entityIds.forEach(entityId => {
    if (
      typeof entityId !== "string" ||
      entityId.trim() === "" ||
      seenEntityIds.has(entityId)
    ) {
      return;
    }

    seenEntityIds.add(entityId);

    const entity = dataIndex.entitiesById?.[entityId];

    if (!entity) {
      console.error(
        `Cannot resolve missing grouped entity: ${entityId}`
      );

      return;
    }

    workingPoolMembers.push({
      id: `${entityGroup.id}_${entity.id}`,
      sourceType: "entity_group",
      sourceId: entityGroup.id,
      sourceEntityId:
        entityGroup.sourceEntityId ?? null,
      groupType:
        entityGroup.groupType ?? "entity_group",
      groupKey:
        entityGroup.groupKey ?? null,
      sectionId:
        entityGroup.sectionId ?? null,
      subgroupId:
        entityGroup.subgroupId ?? null,
      sourceLabel:
        entityGroup.sourceLabel ?? null,
      relationshipTypes: Array.isArray(
        entityGroup.relationshipTypes
      )
        ? [...entityGroup.relationshipTypes]
        : [],
      collectionId: null,
      entityId: entity.id,
      galleryVariantId:
        entity.defaultVariantId ?? null,
      quizVariantId:
        entity.defaultVariantId ?? null
    });
  });

  return workingPoolMembers;
}

function createDirectEntityWorkingPoolMember(entityId, dataIndex) {
  const entity = dataIndex.entitiesById?.[entityId];

  if (!entity) {
    console.error(`Cannot resolve missing direct entity: ${entityId}`);
    return null;
  }

  return {
    id: `direct_entity_${entity.id}`,
    sourceType: "direct_entity",
    sourceId: entity.id,
    collectionId: null,
    entityId: entity.id,
    galleryVariantId: entity.defaultVariantId ?? null,
    quizVariantId: entity.defaultVariantId ?? null
  };
}

/*
  A direct variant normally uses the selected variant for both Gallery and
  quiz.

  A text-removed variant preserves the altered variant for quiz display while
  Gallery and answer reveal use the ordinary variant identified by
  baseVariantId. The entity default remains a defensive fallback.
*/
function createDirectVariantWorkingPoolMember(variantId, dataIndex) {
  const variant = dataIndex.variantsById?.[variantId];

  if (!variant) {
    console.error(`Cannot resolve missing direct variant: ${variantId}`);
    return null;
  }

  const entity = dataIndex.entitiesById?.[variant.entityId];

  if (!entity) {
    console.error(
      `Cannot resolve direct variant ${variantId}: ` +
      `missing entity ${variant.entityId}`
    );
    return null;
  }

  return {
    id: `direct_variant_${variant.id}`,
    sourceType: "direct_variant",
    sourceId: variant.id,
    collectionId: null,
    entityId: variant.entityId,
    galleryVariantId: getBaseVariantId(variant, dataIndex),
    quizVariantId: variant.id
  };
}
