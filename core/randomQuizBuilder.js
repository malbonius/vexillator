/*
  randomQuizBuilder.js

  Builds temporary entity/default-variant quiz pools for Random Quiz.

  V1 deliberately works at entity level only: every matching entity resolves
  through its existing defaultVariantId. More advanced variant-level random
  pools can be added later without changing Current Selection semantics.
*/

const RANDOM_QUIZ_BROAD_GEOGRAPHY_IDS = [
  "ent_africa",
  "ent_asia",
  "ent_europe",
  "ent_north_america",
  "ent_south_america",
  "ent_oceania",
  "ent_antarctica"
];

/*
  These are stable backbone scope IDs, not dataset-by-dataset additions.
  Detailed country / subdivision datasets are discovered dynamically from
  entities that have quizzable descendants.
*/
const RANDOM_QUIZ_SUBREGION_IDS_BY_BROAD_GEOGRAPHY_ID = Object.freeze({
  ent_africa: Object.freeze([
    "ent_northern_africa",
    "ent_eastern_africa",
    "ent_middle_africa",
    "ent_southern_africa",
    "ent_western_africa"
  ]),
  ent_asia: Object.freeze([
    "ent_central_asia",
    "ent_eastern_asia",
    "ent_south_eastern_asia",
    "ent_southern_asia",
    "ent_western_asia"
  ]),
  ent_europe: Object.freeze([
    "ent_eastern_europe",
    "ent_northern_europe",
    "ent_southern_europe",
    "ent_western_europe"
  ]),
  ent_north_america: Object.freeze([
    "ent_northern_america",
    "ent_central_america",
    "ent_caribbean"
  ])
});

const RANDOM_QUIZ_DETAILED_DATASET_ADJECTIVES_BY_BROAD_GEOGRAPHY_ID = Object.freeze({
  ent_africa: "African",
  ent_asia: "Asian",
  ent_europe: "European",
  ent_north_america: "North American",
  ent_south_america: "South American",
  ent_oceania: "Oceanian",
  ent_antarctica: "Antarctic"
});


const randomQuizRegionGroupCacheByIndex = new WeakMap();

const RANDOM_QUIZ_TYPE_OPTIONS = [
  {
    key: "sovereign_states",
    label: "Sovereign states",
    tagsAny: ["sovereign"],
    tagsAll: ["country"]
  },
  {
    key: "territories_dependencies",
    label: "Territories, dependencies and overseas regions",
    tagsAny: [
      "territory",
      "dependency",
      "overseas"
    ]
  },
  {
    key: "subdivisions",
    label: "Subdivisions",
    tagsAny: [
      "subdivision",
      "first_level_subdivision",
      "county",
      "autonomous"
    ]
  },
  {
    key: "organisations",
    label: "Organisations",
    tagsAny: ["organisation", "international_organisation"]
  },
  {
    key: "historical",
    label: "Historical entities",
    tagsAny: ["historical", "former_subdivision"]
  }
];

function normaliseRandomQuizRule(rule = {}) {
  const regionEntityIds = Array.isArray(rule.regionEntityIds)
    ? rule.regionEntityIds.filter(value => typeof value === "string")
    : [];
  const typeKeys = Array.isArray(rule.typeKeys)
    ? rule.typeKeys.filter(value => typeof value === "string")
    : [];

  return {
    regionEntityIds: Array.from(new Set(regionEntityIds)),
    typeKeys: Array.from(new Set(typeKeys))
  };
}

function normaliseRandomQuizFilters(filters = {}) {
  /*
    Legacy Random Quiz presets stored one global area array and one global type
    array. Treat that old shape as one include rule so existing presets remain
    usable after the rule-based refactor.
  */
  const hasRuleArray = Array.isArray(filters.rules) &&
    filters.rules.length > 0;
  const rawRules = hasRuleArray
    ? filters.rules
    : [
        {
          regionEntityIds: Array.isArray(filters.regionEntityIds)
            ? filters.regionEntityIds
            : [],
          typeKeys: Array.isArray(filters.typeKeys)
            ? filters.typeKeys
            : []
        }
      ];

  return {
    rules: rawRules.map(rule => normaliseRandomQuizRule(rule)),
    includeDisputed: filters.includeDisputed === true
  };
}

function getRandomQuizAvailableRegionOptions(index) {
  return getRandomQuizAvailableRegionGroups(index).flatMap(group => {
    return group.options;
  });
}

function getRandomQuizAvailableRegionGroups(index) {
  if (!index || !index.entitiesById) {
    return [];
  }

  const cachedGroups = randomQuizRegionGroupCacheByIndex.get(index);

  if (cachedGroups) {
    return cachedGroups;
  }

  const usedOptionIds = new Set();
  const groups = [];

  const broadOptions = RANDOM_QUIZ_BROAD_GEOGRAPHY_IDS
    .map(entityId => createRandomQuizRegionOption(entityId, index))
    .filter(Boolean);

  addRandomQuizRegionGroup(groups, usedOptionIds, {
    id: "broad_geography",
    label: "Broad geography",
    options: broadOptions,
    openByDefault: true,
    sortOptions: false
  });

  broadOptions.forEach(broadOption => {
    const subregionIds = RANDOM_QUIZ_SUBREGION_IDS_BY_BROAD_GEOGRAPHY_ID[
      broadOption.id
    ] || [];

    const subregionOptions = subregionIds
      .map(entityId => createRandomQuizRegionOption(entityId, index))
      .filter(Boolean);

    addRandomQuizRegionGroup(groups, usedOptionIds, {
      id: `subregions_${broadOption.id}`,
      label: `${broadOption.label} subregions`,
      options: subregionOptions,
      openByDefault: false,
      sortOptions: false
    });
  });

  broadOptions.forEach(broadOption => {
    const adjective = RANDOM_QUIZ_DETAILED_DATASET_ADJECTIVES_BY_BROAD_GEOGRAPHY_ID[
      broadOption.id
    ] || broadOption.label;

    const detailedOptions = getRandomQuizDetailedGeographicOptions(
      broadOption.id,
      index,
      usedOptionIds
    );

    addRandomQuizRegionGroup(groups, usedOptionIds, {
      id: `detailed_${broadOption.id}`,
      label: `Detailed ${adjective} datasets`,
      options: detailedOptions,
      openByDefault: false
    });
  });

  addRandomQuizRegionGroup(groups, usedOptionIds, {
    id: "non_geographic_entities",
    label: "Non-geographic entities",
    options: getRandomQuizNonGeographicOptions(index, usedOptionIds),
    openByDefault: false
  });

  randomQuizRegionGroupCacheByIndex.set(index, groups);

  return groups;
}

function addRandomQuizRegionGroup(groups, usedOptionIds, group) {
  const filteredOptions = group.options
    .filter(option => {
      return option && !usedOptionIds.has(option.id);
    });

  const options = group.sortOptions === false
    ? filteredOptions
    : filteredOptions.sort(compareRandomQuizRegionOptions);

  if (options.length === 0) {
    return;
  }

  options.forEach(option => {
    usedOptionIds.add(option.id);
  });

  groups.push({
    id: group.id,
    label: group.label,
    options,
    openByDefault: group.openByDefault === true
  });
}

function createRandomQuizRegionOption(entityId, index) {
  const entity = index.entitiesById[entityId];

  if (!entity) {
    return null;
  }

  if (!entityHasUsefulRandomQuizScope(entity.id, index)) {
    return null;
  }

  return {
    id: entity.id,
    label: entity.name || entity.id
  };
}

function getRandomQuizDetailedGeographicOptions(
  broadEntityId,
  index,
  usedOptionIds
) {
  return Object.values(index.entitiesById)
    .filter(entity => {
      return entity && entity.entityType === "geographic";
    })
    .filter(entity => {
      return !usedOptionIds.has(entity.id);
    })
    .filter(entity => {
      return !RANDOM_QUIZ_BROAD_GEOGRAPHY_IDS.includes(entity.id);
    })
    .filter(entity => {
      return entityHasAncestor(entity.id, broadEntityId, index);
    })
    .filter(entity => {
      return !entityHasAnyTag(entity, ["region"]);
    })
    .filter(entity => {
      return entityHasQuizzableSubdivisionDescendant(entity.id, index);
    })
    .map(entity => ({
      id: entity.id,
      label: entity.name || entity.id
    }));
}

function getRandomQuizNonGeographicOptions(index, usedOptionIds) {
  return Object.values(index.entitiesById)
    .filter(entity => {
      return entity && entity.id !== "ent_world";
    })
    .filter(entity => {
      return !usedOptionIds.has(entity.id);
    })
    .filter(entity => {
      return entity.entityType !== "geographic";
    })
    .filter(entity => {
      return entityHasQuizzableDescendant(entity.id, index) ||
        entityHasAnyTag(entity, ["composite_state"]);
    })
    .map(entity => ({
      id: entity.id,
      label: entity.name || entity.id
    }));
}

function compareRandomQuizRegionOptions(firstOption, secondOption) {
  return firstOption.label.localeCompare(secondOption.label);
}

function entityHasUsefulRandomQuizScope(entityId, index) {
  const entity = index.entitiesById[entityId];

  if (!entity) {
    return false;
  }

  return entityHasQuizzableDefaultVariant(entity, index) ||
    entityHasQuizzableDescendant(entityId, index);
}

function entityHasQuizzableSubdivisionDescendant(entityId, index) {
  return Object.values(index.entitiesById).some(candidateEntity => {
    if (!candidateEntity || candidateEntity.id === entityId) {
      return false;
    }

    return entityHasAncestor(candidateEntity.id, entityId, index) &&
      entityHasQuizzableDefaultVariant(candidateEntity, index) &&
      entityHasAnyTag(candidateEntity, [
        "subdivision",
        "first_level_subdivision",
        "county",
        "former_subdivision"
      ]);
  });
}

function entityHasQuizzableDescendant(entityId, index) {
  return Object.values(index.entitiesById).some(candidateEntity => {
    if (!candidateEntity || candidateEntity.id === entityId) {
      return false;
    }

    return entityHasAncestor(candidateEntity.id, entityId, index) &&
      entityHasQuizzableDefaultVariant(candidateEntity, index);
  });
}

function getRandomQuizAvailableTypeOptions() {
  return RANDOM_QUIZ_TYPE_OPTIONS.slice();
}

function buildRandomQuizEntityIds(filters, index) {
  const normalisedFilters = normaliseRandomQuizFilters(filters);

  return Object.values(index.entitiesById)
    .filter(entity => {
      return entityMatchesRandomQuizFilters(
        entity,
        normalisedFilters,
        index
      );
    })
    .sort((firstEntity, secondEntity) => {
      return firstEntity.name.localeCompare(secondEntity.name);
    })
    .map(entity => entity.id);
}

function generateRandomQuizQuestions(options = {}, index) {
  const filters = normaliseRandomQuizFilters(options.filters);
  const questionCount = Number.isFinite(Number(options.questionCount))
    ? Number(options.questionCount)
    : 0;

  if (questionCount < 1) {
    return [];
  }

  const entityIds = buildRandomQuizEntityIds(filters, index);

  return generateQuizQuestions({
      entityIds,
      questionCount
    },
    index
  );
}

function countRandomQuizQuestions(filters, index) {
  const entityIds = buildRandomQuizEntityIds(filters, index);

  return generateQuizQuestions({
      entityIds,
      questionCount: Number.MAX_SAFE_INTEGER
    },
    index
  ).length;
}

function entityMatchesRandomQuizFilters(entity, filters, index) {
  if (!entity || !entityHasQuizzableDefaultVariant(entity, index)) {
    return false;
  }

  if (!filters.includeDisputed && entityHasAnyTag(entity, ["disputed"])) {
    return false;
  }

  return filters.rules.some(rule => {
    return entityMatchesRandomQuizRule(entity, rule, index);
  });
}

function entityMatchesRandomQuizRule(entity, rule, index) {
  if (!entityMatchesRandomQuizRegion(entity, rule, index)) {
    return false;
  }

  if (!entityMatchesRandomQuizType(entity, rule)) {
    return false;
  }

  const historicalTypeSelected = rule.typeKeys.includes("historical");

  if (
    !historicalTypeSelected &&
    entityHasAnyTag(entity, ["historical", "former_subdivision"])
  ) {
    return false;
  }

  if (
    !historicalTypeSelected &&
    !entityHasAnyTag(entity, ["current"])
  ) {
    return false;
  }

  return true;
}

function entityMatchesRandomQuizRegion(entity, rule, index) {
  if (rule.regionEntityIds.length === 0) {
    return true;
  }

  return rule.regionEntityIds.some(regionEntityId => {
    return entity.id === regionEntityId ||
      entityHasAncestor(entity.id, regionEntityId, index);
  });
}

function entityMatchesRandomQuizType(entity, rule) {
  if (rule.typeKeys.length === 0) {
    return true;
  }

  return rule.typeKeys.some(typeKey => {
    const typeOption = RANDOM_QUIZ_TYPE_OPTIONS.find(option => {
      return option.key === typeKey;
    });

    if (!typeOption) {
      return false;
    }

    const hasRequiredTags = !Array.isArray(typeOption.tagsAll) ||
      typeOption.tagsAll.every(tag => {
        return entityHasAnyTag(entity, [tag]);
      });

    const hasAnyAllowedTag = !Array.isArray(typeOption.tagsAny) ||
      entityHasAnyTag(entity, typeOption.tagsAny);

    return hasRequiredTags && hasAnyAllowedTag;
  });
}

function entityHasQuizzableDefaultVariant(entity, index) {
  if (!entity.defaultVariantId) {
    return false;
  }

  const variant = index.variantsById[entity.defaultVariantId];

  if (!variant || variant.entityId !== entity.id) {
    return false;
  }

  if (
    Array.isArray(variant.tags) &&
    variant.tags.includes("non_quizzable")
  ) {
    return false;
  }

  return Boolean(index.assetsById[variant.assetId]);
}

function entityHasAnyTag(entity, tagList) {
  if (!Array.isArray(entity.tags)) {
    return false;
  }

  return tagList.some(tag => {
    return entity.tags.includes(tag);
  });
}

function entityHasAncestor(entityId, ancestorEntityId, index) {
  const visitedEntityIds = new Set();

  function visit(currentEntityId) {
    if (visitedEntityIds.has(currentEntityId)) {
      return false;
    }

    visitedEntityIds.add(currentEntityId);

    const entity = index.entitiesById[currentEntityId];

    if (!entity || !Array.isArray(entity.parentIds)) {
      return false;
    }

    if (entity.parentIds.includes(ancestorEntityId)) {
      return true;
    }

    return entity.parentIds.some(parentId => {
      return visit(parentId);
    });
  }

  return visit(entityId);
}
