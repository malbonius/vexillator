/*
  entityRelationshipGroups.js

  Presentation-only grouping for Entity Detail relationship sections.

  This file does not alter:
  - parentIds;
  - administeringEntityIds;
  - constituentOfEntityIds;
  - Working Pool resolution;
  - collection ancestry.

  Groups are matched in order. Each related entity appears in the first
  matching subgroup only. Anything unmatched is shown in the configured
  fallback subgroup so a configuration mistake cannot hide an entity.

  A section may also list explicit entityIds for presentation-only
  associations. A subgroup may use selectionEntityIds when the navigable
  constitutional entity and the flag-bearing representative are different.
*/

const entityRelationshipGroups = Object.freeze({
  ent_united_kingdom: Object.freeze({
    id: "united_kingdom_structure",
    label: "Constituent Countries and Crown Dependencies",
    relationshipTypes: [
      "child_entities",
      "constituent_entities"
    ],

    /*
      Crown Dependencies are associated here for presentation only. They do
      not become UK children, constituents or administered territories.
    */
    entityIds: [
      "ent_bailiwick_of_guernsey",
      "ent_isle_of_man",
      "ent_jersey"
    ],

    groups: Object.freeze([
      Object.freeze({
        id: "constituent_countries",
        label: "Constituent Countries",
        entityIds: [
          "ent_england",
          "ent_northern_ireland",
          "ent_scotland",
          "ent_wales"
        ]
      }),
      Object.freeze({
        id: "crown_dependencies",
        label: "Crown Dependencies",
        sourceLabel:
          "Crown Dependencies (representative flags)",
        entityIds: [
          "ent_bailiwick_of_guernsey",
          "ent_isle_of_man",
          "ent_jersey"
        ],

        /*
          The Bailiwick is structural and deliberately has no default flag.
          Guernsey supplies the selectable representative flag while the
          Bailiwick itself remains the navigable constitutional entity.
        */
        selectionEntityIds: [
          "ent_guernsey",
          "ent_isle_of_man",
          "ent_jersey"
        ]
      })
    ]),
    unmatchedLabel: "Other United Kingdom Relationships"
  }),

  ent_northern_africa: Object.freeze({
    id: "northern_africa_children",
    label: "Child Entities",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "sovereign_states",
        label: "Sovereign States",
        match: Object.freeze({
          allTags: [
            "sovereign",
            "country",
            "current",
            "recognised"
          ]
        })
      }),
      Object.freeze({
        id: "areas_of_european_states",
        label: "Areas of European States",
        entityIds: [
          "ent_canary_islands",
          "ent_ceuta",
          "ent_melilla"
        ]
      }),
      Object.freeze({
        id: "disputed_territories",
        label: "Disputed Territories",
        entityIds: [
          "ent_western_sahara"
        ]
      })
    ]),
    unmatchedLabel: "Other Child Entities"
  }),

  ent_eastern_africa: Object.freeze({
    id: "eastern_africa_entities",
    label: "Countries and Areas",
    relationshipTypes: ["child_entities"],

    /*
      Somaliland remains geographically beneath Somalia. It is associated
      with the Eastern Africa page here for presentation and grouped
      selection only.
    */
    entityIds: [
      "ent_somaliland"
    ],

    groups: Object.freeze([
      Object.freeze({
        id: "recognised_sovereign_states",
        label: "Recognised Sovereign States",
        match: Object.freeze({
          allTags: [
            "sovereign",
            "country",
            "current",
            "recognised"
          ]
        })
      }),
      Object.freeze({
        id: "disputed_sovereign_state",
        label: "Disputed Sovereign State",
        entityIds: [
          "ent_somaliland"
        ]
      }),
      Object.freeze({
        id: "non_sovereign_areas",
        label: "Non-Sovereign Areas",
        entityIds: [
          "ent_british_indian_ocean_territory",
          "ent_french_southern_and_antarctic_lands",
          "ent_mayotte",
          "ent_reunion"
        ]
      })
    ]),
    unmatchedLabel: "Other Eastern African Entities"
  }),


  ent_south_america: Object.freeze({
    id: "south_america_entities",
    label: "Countries and Areas",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "sovereign_states",
        label: "Sovereign States",
        match: Object.freeze({
          allTags: [
            "sovereign",
            "country",
            "current",
            "recognised"
          ]
        })
      }),
      Object.freeze({
        id: "dependencies_and_territories",
        label: "Dependencies and Territories",
        match: Object.freeze({
          anyTags: [
            "dependency",
            "territory",
            "overseas"
          ],
          allTags: ["current"]
        })
      })
    ]),
    unmatchedLabel: "Other South American Areas"
  }),

  ent_caribbean: Object.freeze({
    id: "caribbean_entities",
    label: "Countries and Areas",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "sovereign_states",
        label: "Sovereign States",
        match: Object.freeze({
          allTags: [
            "sovereign",
            "country",
            "current",
            "recognised"
          ]
        })
      }),
      Object.freeze({
        id: "dependencies_and_territories",
        label: "Dependencies and Territories",
        match: Object.freeze({
          anyTags: [
            "territory",
            "overseas"
          ],
          allTags: ["current"]
        })
      })
    ]),
    unmatchedLabel: "Other Caribbean Areas"
  }),

  ent_western_asia: Object.freeze({
    id: "western_asia_entities",
    label: "Countries and Areas",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "recognised_sovereign_states",
        label: "Recognised Sovereign States",
        match: Object.freeze({
          allTags: [
            "sovereign",
            "country",
            "current",
            "recognised"
          ]
        })
      }),
      Object.freeze({
        id: "unrecognised_disputed_states",
        label: "Unrecognised and Disputed States",
        match: Object.freeze({
          allTags: [
            "sovereign",
            "country",
            "current",
            "unrecognised",
            "disputed"
          ]
        })
      })
    ]),
    unmatchedLabel: "Other Western Asian Areas"
  }),

  ent_england: Object.freeze({
    id: "england_children",
    label: "Child Entities",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "ceremonial_counties",
        label: "Ceremonial Counties",
        match: Object.freeze({
          allTags: ["county", "current"]
        })
      }),
      Object.freeze({
        id: "historic_counties",
        label: "Historic Counties",
        match: Object.freeze({
          allTags: ["county", "historical"]
        })
      }),
      Object.freeze({
        id: "islands_and_other_areas",
        label: "Islands and Other Areas",
        match: Object.freeze({
          allTags: ["current"],
          noneTags: ["county"]
        })
      })
    ]),
    unmatchedLabel: "Other Child Entities"
  }),

  ent_scotland: Object.freeze({
    id: "scotland_children",
    label: "Child Entities",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "historic_counties",
        label: "Historic Counties",
        match: Object.freeze({
          allTags: ["county", "historical"]
        })
      }),
      Object.freeze({
        id: "islands",
        label: "Islands",
        match: Object.freeze({
          allTags: ["current"],
          noneTags: ["county"]
        })
      })
    ]),
    unmatchedLabel: "Other Child Entities"
  }),

  ent_wales: Object.freeze({
    id: "wales_children",
    label: "Child Entities",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "historic_counties",
        label: "Historic Counties",
        match: Object.freeze({
          allTags: ["county", "historical"]
        })
      })
    ]),
    unmatchedLabel: "Other Child Entities"
  }),


  ent_italy: Object.freeze({
    id: "italy_children",
    label: "Child Entities",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "italian_regions",
        label: "Italian Regions",
        sourceLabel: "Italian Regions",
        match: Object.freeze({
          allTags: [
            "first_level_subdivision",
            "current"
          ]
        })
      }),
      Object.freeze({
        id: "independent_states",
        label: "Independent States",
        sourceLabel: "Independent States in Italy",
        entityIds: [
          "ent_san_marino",
          "ent_vatican_city"
        ]
      })
    ]),
    unmatchedLabel: "Other Italian Child Entities"
  }),


  ent_canada: Object.freeze({
    id: "canada_provinces_and_territories",
    label: "Provinces and Territories",
    relationshipTypes: ["child_entities"],
    groups: Object.freeze([
      Object.freeze({
        id: "provinces",
        label: "Provinces",
        sourceLabel: "Canadian Province Flags",
        entityIds: [
          "ent_canada_alberta",
          "ent_canada_british_columbia",
          "ent_canada_manitoba",
          "ent_canada_new_brunswick",
          "ent_canada_newfoundland_and_labrador",
          "ent_canada_nova_scotia",
          "ent_canada_ontario",
          "ent_canada_prince_edward_island",
          "ent_canada_quebec",
          "ent_canada_saskatchewan"
        ]
      }),
      Object.freeze({
        id: "territories",
        label: "Territories",
        sourceLabel: "Canadian Territory Flags",
        entityIds: [
          "ent_canada_northwest_territories",
          "ent_canada_nunavut",
          "ent_canada_yukon"
        ]
      })
    ]),
    unmatchedLabel: "Other Canadian Child Entities"
  }),

  ent_australia: Object.freeze({
    id: "australia_states_and_territories",
    label: "States and Territories",
    relationshipTypes: [
      "child_entities",
      "administered_entities"
    ],
    groups: Object.freeze([
      Object.freeze({
        id: "states",
        label: "States",
        sourceLabel: "Australian State Flags",
        entityIds: [
          "ent_australia_new_south_wales",
          "ent_australia_queensland",
          "ent_australia_south_australia",
          "ent_australia_tasmania",
          "ent_australia_victoria",
          "ent_australia_western_australia"
        ]
      }),
      Object.freeze({
        id: "internal_territories",
        label: "Internal Territories",
        sourceLabel: "Australian Internal Territory Flags",
        entityIds: [
          "ent_australian_capital_territory",
          "ent_northern_territory",
          "ent_jervis_bay_territory"
        ]
      }),
      Object.freeze({
        id: "external_territories",
        label: "External Territories",
        sourceLabel: "Australian External Territory Flags",
        entityIds: [
          "ent_ashmore_and_cartier_islands",
          "ent_christmas_island",
          "ent_cocos_keeling_islands",
          "ent_coral_sea_islands",
          "ent_heard_island_and_mcdonald_islands",
          "ent_norfolk_island"
        ]
      }),
      Object.freeze({
        id: "antarctic_territory",
        label: "Antarctic Territory",
        sourceLabel: "Australian Antarctic Territory",
        entityIds: [
          "ent_australian_antarctic_territory"
        ]
      })
    ]),
    unmatchedLabel: "Other Australian Relationships"
  }),

  ent_spain: Object.freeze({
    id: "spain_autonomous_subdivisions",
    label: "Autonomous Subdivisions",
    relationshipTypes: [
      "child_entities",
      "constituent_entities"
    ],
    groups: Object.freeze([
      Object.freeze({
        id: "all_autonomous_subdivisions",
        label: "All Autonomous Subdivisions",
        match: Object.freeze({
          allTags: [
            "first_level_subdivision",
            "autonomous"
          ]
        })
      })
    ]),
    unmatchedLabel: "Other Related Entities"
  })
});
