/*
  randomQuizBuilder.js

  Builds temporary entity/default-variant quiz pools for Random Quiz.

  V1 deliberately works at entity level only: every matching entity resolves
  through its existing defaultVariantId. More advanced variant-level random
  pools can be added later without changing Current Selection semantics.
*/

const RANDOM_QUIZ_REGION_OPTIONS = [
  {
    id: "ent_africa",
    label: "Africa"
  },
  {
    id: "ent_northern_africa",
    label: "Northern Africa"
  },
  {
    id: "ent_eastern_africa",
    label: "Eastern Africa"
  },
  {
    id: "ent_middle_africa",
    label: "Middle Africa"
  },
  {
    id: "ent_southern_africa",
    label: "Southern Africa"
  },
  {
    id: "ent_western_africa",
    label: "Western Africa"
  },
  {
    id: "ent_asia",
    label: "Asia"
  },
  {
    id: "ent_central_asia",
    label: "Central Asia"
  },
  {
    id: "ent_eastern_asia",
    label: "Eastern Asia"
  },
  {
    id: "ent_south_eastern_asia",
    label: "South-eastern Asia"
  },
  {
    id: "ent_southern_asia",
    label: "Southern Asia"
  },
  {
    id: "ent_western_asia",
    label: "Western Asia"
  },
  {
    id: "ent_europe",
    label: "Europe"
  },
  {
    id: "ent_eastern_europe",
    label: "Eastern Europe"
  },
  {
    id: "ent_northern_europe",
    label: "Northern Europe"
  },
  {
    id: "ent_southern_europe",
    label: "Southern Europe"
  },
  {
    id: "ent_western_europe",
    label: "Western Europe"
  },
  {
    id: "ent_north_america",
    label: "North America"
  },
  {
    id: "ent_northern_america",
    label: "Northern America"
  },
  {
    id: "ent_central_america",
    label: "Central America"
  },
  {
    id: "ent_caribbean",
    label: "Caribbean"
  },
  {
    id: "ent_south_america",
    label: "South America"
  },
  {
    id: "ent_oceania",
    label: "Oceania"
  },
  {
    id: "ent_antarctica",
    label: "Antarctica"
  },
  {
    id: "ent_austria",
    label: "Austria"
  },
  {
    id: "ent_france",
    label: "France"
  },
  {
    id: "ent_germany",
    label: "Germany"
  },
  {
    id: "ent_italy",
    label: "Italy"
  },
  {
    id: "ent_spain",
    label: "Spain"
  },
  {
    id: "ent_united_kingdom",
    label: "United Kingdom"
  },
  {
    id: "ent_england",
    label: "England"
  },
  {
    id: "ent_scotland",
    label: "Scotland"
  },
  {
    id: "ent_wales",
    label: "Wales"
  },
  {
    id: "ent_japan",
    label: "Japan"
  },
  {
    id: "ent_canada",
    label: "Canada"
  },
  {
    id: "ent_united_states",
    label: "United States"
  },
  {
    id: "ent_venezuela",
    label: "Venezuela"
  },
  {
    id: "ent_australia",
    label: "Australia"
  },
  {
    id: "ent_federated_states_of_micronesia",
    label: "Federated States of Micronesia"
  },
  {
    id: "ent_international_organisations",
    label: "International organisations"
  },
  {
    id: "ent_united_nations_system",
    label: "United Nations system and related bodies"
  },
  {
    id: "ent_european_atlantic_organisations",
    label: "European and Atlantic organisations"
  },
  {
    id: "ent_sporting_organisations",
    label: "Sporting organisations"
  },
  {
    id: "ent_treaty_systems",
    label: "Treaty systems"
  },
  {
    id: "ent_international_police_cooperation",
    label: "International police cooperation"
  },
  {
    id: "ent_kingdom_of_denmark",
    label: "Kingdom of Denmark"
  },
  {
    id: "ent_kingdom_of_the_netherlands",
    label: "Kingdom of the Netherlands"
  }
];

/*
  Scope filters are grouped for presentation only.

  They still resolve through the same entity IDs and do not create a new
  geography, membership or organisation model. Broad geography, detailed
  datasets and non-geographic entities stay separate so the Random Quiz panel
  does not become a massive undifferentiated wall of checkboxes.
*/
const RANDOM_QUIZ_REGION_GROUPS = [
  {
    id: "broad_geography",
    label: "Broad geography",
    optionIds: [
      "ent_africa",
      "ent_asia",
      "ent_europe",
      "ent_north_america",
      "ent_south_america",
      "ent_oceania",
      "ent_antarctica"
    ],
    openByDefault: true
  },
  {
    id: "african_subregions",
    label: "African subregions",
    optionIds: [
      "ent_northern_africa",
      "ent_eastern_africa",
      "ent_middle_africa",
      "ent_southern_africa",
      "ent_western_africa"
    ],
    openByDefault: false
  },
  {
    id: "asian_subregions",
    label: "Asian subregions",
    optionIds: [
      "ent_central_asia",
      "ent_eastern_asia",
      "ent_south_eastern_asia",
      "ent_southern_asia",
      "ent_western_asia"
    ],
    openByDefault: false
  },
  {
    id: "european_subregions",
    label: "European subregions",
    optionIds: [
      "ent_eastern_europe",
      "ent_northern_europe",
      "ent_southern_europe",
      "ent_western_europe"
    ],
    openByDefault: false
  },
  {
    id: "north_america_and_caribbean",
    label: "North America and Caribbean subregions",
    optionIds: [
      "ent_northern_america",
      "ent_central_america",
      "ent_caribbean"
    ],
    openByDefault: false
  },
  {
    id: "european_detailed_datasets",
    label: "Detailed European datasets",
    optionIds: [
      "ent_austria",
      "ent_france",
      "ent_germany",
      "ent_italy",
      "ent_spain",
      "ent_united_kingdom",
      "ent_england",
      "ent_scotland",
      "ent_wales"
    ],
    openByDefault: false
  },
  {
    id: "asian_detailed_datasets",
    label: "Detailed Asian datasets",
    optionIds: [
      "ent_japan"
    ],
    openByDefault: false
  },
  {
    id: "north_american_detailed_datasets",
    label: "Detailed North American datasets",
    optionIds: [
      "ent_canada",
      "ent_united_states"
    ],
    openByDefault: false
  },
  {
    id: "south_american_detailed_datasets",
    label: "Detailed South American datasets",
    optionIds: [
      "ent_venezuela"
    ],
    openByDefault: false
  },
  {
    id: "oceanian_detailed_datasets",
    label: "Detailed Oceanian datasets",
    optionIds: [
      "ent_australia",
      "ent_federated_states_of_micronesia"
    ],
    openByDefault: false
  },
  {
    id: "non_geographic_entities",
    label: "Non-geographic entities",
    optionIds: [
      "ent_international_organisations",
      "ent_united_nations_system",
      "ent_european_atlantic_organisations",
      "ent_sporting_organisations",
      "ent_treaty_systems",
      "ent_international_police_cooperation",
      "ent_kingdom_of_denmark",
      "ent_kingdom_of_the_netherlands"
    ],
    openByDefault: false
  }
];

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
      "dependent_territory",
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
  return RANDOM_QUIZ_REGION_OPTIONS.filter(option => {
    return index.entitiesById[option.id];
  });
}

function getRandomQuizAvailableRegionGroups(index) {
  const availableOptionsById = new Map(
    getRandomQuizAvailableRegionOptions(index).map(option => {
      return [option.id, option];
    })
  );

  return RANDOM_QUIZ_REGION_GROUPS
    .map(group => {
      return {
        ...group,
        options: group.optionIds
          .map(optionId => {
            return availableOptionsById.get(optionId);
          })
          .filter(Boolean)
      };
    })
    .filter(group => {
      return group.options.length > 0;
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
