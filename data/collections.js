/*
  Collection registry.

  Collections are curated selection sources used for browsing, Gallery,
  quizzes and presets. They do not own entities or variants.

  Maintenance rules:
  - IDs are permanent and use lowercase snake_case.
  - dynamic collections resolve members from rules.
  - manual collections list explicit members.
  - target is either "entity" or "variant".
  - entity-target flag collections use hasDefaultVariant to exclude structural
    or malformed entities that cannot supply a selectable default flag.
  - internal collections are regression fixtures and should be hidden from
    ordinary user-facing Browse, Search, Related Collections and presets.
  - manual member collectionId values must match their parent collection.
*/

const collections = [
  /*
    Global status and utility collections.
  */
  {
    id: "col_all_current_selectable_flags",
    name: "All Current Selectable Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_recognised_sovereign_states",
    name: "Recognised Sovereign and Self-Governing States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          not: {
            hasTag: "disputed"
          }
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_disputed_entities",
    name: "Disputed Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasTag: "disputed"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_unrecognised_states",
    name: "Unrecognised States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "unrecognised"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_dependencies_territories_overseas",
    name: "Dependencies, Territories and Overseas Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          hasAnyTag: [
            "dependency",
            "territory",
            "overseas"
          ]
        }
      ]
    }
  },
  {
    id: "col_unofficial_current_flags",
    name: "Unofficial Current Flags",
    type: "dynamic",
    target: "variant",
    rules: {
      all: [
        {
          variantHasAllTags: [
            "unofficial",
            "current"
          ]
        },
        {
          not: {
            variantHasTag: "text_removed"
          }
        }
      ]
    }
  },
  {
    id: "col_quiz_safe_text_removed_flags",
    name: "Quiz-Safe Text-Removed Flags",
    type: "dynamic",
    target: "variant",
    rules: {
      all: [
        {
          variantHasAllTags: [
            "quiz",
            "text_removed"
          ]
        }
      ]
    }
  },

  /*
    Major geographic flag collections.
  */
  {
    id: "col_south_american_flags",
    name: "South American Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_south_america"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_north_american_flags",
    name: "North American Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_north_america"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_caribbean_flags",
    name: "Caribbean Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_caribbean"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_african_flags",
    name: "African Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_africa"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_european_flags",
    name: "Geographical European Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_europe"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_asian_flags",
    name: "Asian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_asia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_oceanian_flags",
    name: "Oceanian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_oceania"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_antarctic_flags",
    name: "Antarctic Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_antarctica"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  /*
    Recognised sovereign-state collections.
  */
  {
    id: "col_south_american_sovereign",
    name: "Recognised South American Sovereign States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_south_america"
        },
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_north_america_countries",
    name: "Recognised North American Sovereign States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_north_america"
        },
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_central_america_sovereign",
    name: "Recognised Central American Sovereign States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_central_america"
        },
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_caribbean_sovereign",
    name: "Recognised Caribbean Sovereign States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_caribbean"
        },
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_african_sovereign",
    name: "Recognised African Sovereign States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_africa"
        },
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_european_sovereign",
    name: "Recognised European Sovereign States",
    type: "dynamic",
    target: "entity",
    notes: "Hybrid dynamic European-context sovereign collection: strict geographic Europe plus Cyprus.",
    rules: {
      all: [
        {
          hasAncestor: "ent_europe"
        },
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          hasDefaultVariant: true
        }
      ]
    },
    includeEntityIds: [
      "ent_cyprus"
    ]
  },
  {
    id: "col_eu_member_state_flags",
    name: "European Union Member State Flags",
    type: "dynamic",
    target: "entity",
    notes: "Membership-driven collection. EU membership is stored in entityMemberships.js so Cyprus can remain geographically modelled in Western Asia. relationshipType and membershipType are intentionally omitted because every current membership record in this group represents an EU member state for Vexillator collection purposes.",
    rules: {
      all: [
        {
          memberOf: "ent_european_union",
          membershipStatus: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_nato_member_state_flags",
    name: "NATO Member State Flags",
    type: "dynamic",
    target: "entity",
    notes: "Membership-driven collection. NATO membership is stored in entityMemberships.js so cross-regional NATO members can remain geographically modelled by their actual regions.",
    rules: {
      all: [
        {
          memberOf: "ent_nato",
          membershipStatus: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_asian_sovereign",
    name: "Recognised Asian Sovereign States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_asia"
        },
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_oceanian_sovereign",
    name: "Recognised Oceanian Sovereign States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_oceania"
        },
        {
          hasTag: "sovereign"
        },
        {
          hasTag: "country"
        },
        {
          hasTag: "current"
        },
        {
          hasTag: "recognised"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  /*
    Regional dependency and territory collections.
  */
  {
    id: "col_south_american_dependents",
    name: "South American Dependencies, Territories and Overseas Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_south_america"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          hasAnyTag: [
            "dependency",
            "territory",
            "overseas"
          ]
        }
      ]
    }
  },
  {
    id: "col_north_america_dependents",
    name: "North American Dependencies, Territories and Overseas Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_north_america"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          hasAnyTag: [
            "dependency",
            "territory",
            "overseas"
          ]
        }
      ]
    }
  },
  {
    id: "col_caribbean_dependents",
    name: "Caribbean Dependencies, Territories and Overseas Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_caribbean"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          hasAnyTag: [
            "dependency",
            "territory",
            "overseas"
          ]
        }
      ]
    }
  },
  {
    id: "col_african_dependents",
    name: "African Dependencies, Territories and Overseas Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_africa"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          hasAnyTag: [
            "dependency",
            "territory",
            "overseas"
          ]
        }
      ]
    }
  },
  {
    id: "col_european_dependents",
    name: "European Dependencies, Territories and Overseas Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_europe"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          hasAnyTag: [
            "dependency",
            "territory",
            "overseas"
          ]
        }
      ]
    }
  },
  {
    id: "col_oceanian_dependents",
    name: "Oceanian Dependencies, Territories and Overseas Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_oceania"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          hasAnyTag: [
            "dependency",
            "territory",
            "overseas"
          ]
        }
      ]
    }
  },
  {
    id: "col_antarctic_dependents",
    name: "Antarctic Dependencies and Territories",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_antarctica"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          hasAnyTag: [
            "dependency",
            "territory",
            "overseas"
          ]
        }
      ]
    }
  },

  /*
    UN M49 subregion flag collections.
  */
  {
    id: "col_northern_america_flags",
    name: "Northern American Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_northern_america"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_central_america_flags",
    name: "Central American Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_central_america"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_northern_africa_flags",
    name: "Northern African Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_northern_africa"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_eastern_africa_flags",
    name: "Eastern African Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_eastern_africa"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_middle_africa_flags",
    name: "Middle African Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_middle_africa"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_southern_africa_flags",
    name: "Southern African Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_southern_africa"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_western_africa_flags",
    name: "Western African Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_western_africa"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_eastern_europe_flags",
    name: "Eastern European Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_eastern_europe"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_northern_europe_flags",
    name: "Northern European Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_northern_europe"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_denmark_regions",
    name: "Danish Regional Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_denmark"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_estonia_counties",
    name: "Estonian County Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_estonia"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_finland_regions",
    name: "Finnish Regional Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_finland"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_southern_europe_flags",
    name: "Southern European Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_southern_europe"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_western_europe_flags",
    name: "Western European Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_western_europe"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_central_asia_flags",
    name: "Central Asian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_central_asia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_eastern_asia_flags",
    name: "Eastern Asian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_eastern_asia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_south_eastern_asia_flags",
    name: "South-Eastern Asian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_south_eastern_asia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_southern_asia_flags",
    name: "Southern Asian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_southern_asia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_western_asia_flags",
    name: "Western Asian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_western_asia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_australia_and_new_zealand_flags",
    name: "Australia and New Zealand Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_australia_and_new_zealand"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_australian_current_selectable_flags",
    name: "Australian Current Selectable Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          any: [
            {
              entityIs: "ent_australia"
            },
            {
              hasParent: "ent_australia"
            },
            {
              administeredBy: "ent_australia"
            }
          ]
        }
      ]
    }
  },
  {
    id: "col_australian_state_and_internal_territory_flags",
    name: "Australian State and Internal Territory Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_australia"
        },
        {
          hasTag: "subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_australian_state_flags",
    name: "Australian State Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_australia"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          not: {
            hasTag: "territory"
          }
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_australian_internal_territory_flags",
    name: "Australian Internal Territory Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_australia"
        },
        {
          hasTag: "territory"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_australian_external_territory_flags",
    name: "Australian External Territory Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          administeredBy: "ent_australia"
        },
        {
          hasTag: "overseas"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_melanesia_flags",
    name: "Melanesian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_melanesia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_micronesia_flags",
    name: "Micronesian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_micronesia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_polynesia_flags",
    name: "Polynesian Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_polynesia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  /*
    Specialist user-facing collections.
  */

  {
    id: "col_canadian_current_selectable_flags",
    name: "Canadian Current Selectable Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          any: [
            {
              entityIs: "ent_canada"
            },
            {
              hasParent: "ent_canada"
            }
          ]
        }
      ]
    }
  },
  {
    id: "col_canadian_province_and_territory_flags",
    name: "Canadian Province and Territory Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_canada"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_canadian_province_flags",
    name: "Canadian Province Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_canada"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          not: {
            hasTag: "territory"
          }
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_canadian_territory_flags",
    name: "Canadian Territory Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_canada"
        },
        {
          hasTag: "territory"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },


  {
    id: "col_japanese_current_selectable_flags",
    name: "Japanese Current Selectable Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          any: [
            {
              entityIs: "ent_japan"
            },
            {
              hasAncestor: "ent_japan"
            }
          ]
        }
      ]
    }
  },
  {
    id: "col_japanese_prefecture_flags",
    name: "Japanese Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_japan"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_japanese_hokkaido_region_prefecture_flags",
    name: "Hokkaido Region Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_japan_hokkaido_region"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_japanese_tohoku_region_prefecture_flags",
    name: "Tohoku Region Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_japan_tohoku_region"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_japanese_kanto_region_prefecture_flags",
    name: "Kanto Region Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_japan_kanto_region"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_japanese_chubu_region_prefecture_flags",
    name: "Chubu Region Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_japan_chubu_region"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_japanese_kansai_region_prefecture_flags",
    name: "Kansai Region Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_japan_kansai_region"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_japanese_chugoku_region_prefecture_flags",
    name: "Chugoku Region Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_japan_chugoku_region"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_japanese_shikoku_region_prefecture_flags",
    name: "Shikoku Region Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_japan_shikoku_region"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_japanese_kyushu_region_prefecture_flags",
    name: "Kyushu Region Prefecture Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasParent: "ent_japan_kyushu_region"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_us_states",
    name: "US States",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_united_states"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  /*
    United States Census Bureau regions and divisions.
  */
  {
    id: "col_us_state_and_dc_flags",
    name: "US State and District of Columbia Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_state_and_dc_flags_connecticut",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_connecticut",
        galleryVariantId: "var_connecticut",
        quizVariantId: "var_connecticut"
      },
      {
        id: "mem_us_state_and_dc_flags_maine",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_maine",
        galleryVariantId: "var_maine",
        quizVariantId: "var_maine"
      },
      {
        id: "mem_us_state_and_dc_flags_massachusetts",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_massachusetts",
        galleryVariantId: "var_massachusetts",
        quizVariantId: "var_massachusetts"
      },
      {
        id: "mem_us_state_and_dc_flags_new_hampshire",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_new_hampshire",
        galleryVariantId: "var_new_hampshire",
        quizVariantId: "var_new_hampshire"
      },
      {
        id: "mem_us_state_and_dc_flags_rhode_island",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_rhode_island",
        galleryVariantId: "var_rhode_island",
        quizVariantId: "var_rhode_island"
      },
      {
        id: "mem_us_state_and_dc_flags_vermont",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_vermont",
        galleryVariantId: "var_vermont",
        quizVariantId: "var_vermont"
      },
      {
        id: "mem_us_state_and_dc_flags_new_jersey",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_new_jersey",
        galleryVariantId: "var_new_jersey",
        quizVariantId: "var_new_jersey"
      },
      {
        id: "mem_us_state_and_dc_flags_new_york",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_new_york",
        galleryVariantId: "var_new_york",
        quizVariantId: "var_new_york"
      },
      {
        id: "mem_us_state_and_dc_flags_pennsylvania",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_pennsylvania",
        galleryVariantId: "var_pennsylvania",
        quizVariantId: "var_pennsylvania"
      },
      {
        id: "mem_us_state_and_dc_flags_illinois",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_illinois",
        galleryVariantId: "var_illinois",
        quizVariantId: "var_illinois"
      },
      {
        id: "mem_us_state_and_dc_flags_indiana",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_indiana",
        galleryVariantId: "var_indiana",
        quizVariantId: "var_indiana"
      },
      {
        id: "mem_us_state_and_dc_flags_michigan",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_michigan",
        galleryVariantId: "var_michigan",
        quizVariantId: "var_michigan"
      },
      {
        id: "mem_us_state_and_dc_flags_ohio",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_ohio",
        galleryVariantId: "var_ohio",
        quizVariantId: "var_ohio"
      },
      {
        id: "mem_us_state_and_dc_flags_wisconsin",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_wisconsin",
        galleryVariantId: "var_wisconsin",
        quizVariantId: "var_wisconsin"
      },
      {
        id: "mem_us_state_and_dc_flags_iowa",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_iowa",
        galleryVariantId: "var_iowa",
        quizVariantId: "var_iowa"
      },
      {
        id: "mem_us_state_and_dc_flags_kansas",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_kansas",
        galleryVariantId: "var_kansas",
        quizVariantId: "var_kansas"
      },
      {
        id: "mem_us_state_and_dc_flags_minnesota",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_minnesota",
        galleryVariantId: "var_minnesota",
        quizVariantId: "var_minnesota"
      },
      {
        id: "mem_us_state_and_dc_flags_missouri",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_missouri",
        galleryVariantId: "var_missouri",
        quizVariantId: "var_missouri"
      },
      {
        id: "mem_us_state_and_dc_flags_nebraska",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_nebraska",
        galleryVariantId: "var_nebraska",
        quizVariantId: "var_nebraska"
      },
      {
        id: "mem_us_state_and_dc_flags_north_dakota",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_north_dakota",
        galleryVariantId: "var_north_dakota",
        quizVariantId: "var_north_dakota"
      },
      {
        id: "mem_us_state_and_dc_flags_south_dakota",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_south_dakota",
        galleryVariantId: "var_south_dakota",
        quizVariantId: "var_south_dakota"
      },
      {
        id: "mem_us_state_and_dc_flags_delaware",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_delaware",
        galleryVariantId: "var_delaware",
        quizVariantId: "var_delaware"
      },
      {
        id: "mem_us_state_and_dc_flags_district_of_columbia",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_district_of_columbia",
        galleryVariantId: "var_district_of_columbia",
        quizVariantId: "var_district_of_columbia"
      },
      {
        id: "mem_us_state_and_dc_flags_florida",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_florida",
        galleryVariantId: "var_florida",
        quizVariantId: "var_florida"
      },
      {
        id: "mem_us_state_and_dc_flags_georgia_state",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_georgia_state",
        galleryVariantId: "var_georgia_state",
        quizVariantId: "var_georgia_state"
      },
      {
        id: "mem_us_state_and_dc_flags_maryland",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_maryland",
        galleryVariantId: "var_maryland",
        quizVariantId: "var_maryland"
      },
      {
        id: "mem_us_state_and_dc_flags_north_carolina",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_north_carolina",
        galleryVariantId: "var_north_carolina",
        quizVariantId: "var_north_carolina"
      },
      {
        id: "mem_us_state_and_dc_flags_south_carolina",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_south_carolina",
        galleryVariantId: "var_south_carolina",
        quizVariantId: "var_south_carolina"
      },
      {
        id: "mem_us_state_and_dc_flags_virginia",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_virginia",
        galleryVariantId: "var_virginia",
        quizVariantId: "var_virginia"
      },
      {
        id: "mem_us_state_and_dc_flags_west_virginia",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_west_virginia",
        galleryVariantId: "var_west_virginia",
        quizVariantId: "var_west_virginia"
      },
      {
        id: "mem_us_state_and_dc_flags_alabama",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_alabama",
        galleryVariantId: "var_alabama",
        quizVariantId: "var_alabama"
      },
      {
        id: "mem_us_state_and_dc_flags_kentucky",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_kentucky",
        galleryVariantId: "var_kentucky",
        quizVariantId: "var_kentucky"
      },
      {
        id: "mem_us_state_and_dc_flags_mississippi",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_mississippi",
        galleryVariantId: "var_mississippi",
        quizVariantId: "var_mississippi"
      },
      {
        id: "mem_us_state_and_dc_flags_tennessee",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_tennessee",
        galleryVariantId: "var_tennessee",
        quizVariantId: "var_tennessee"
      },
      {
        id: "mem_us_state_and_dc_flags_arkansas",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_arkansas",
        galleryVariantId: "var_arkansas",
        quizVariantId: "var_arkansas"
      },
      {
        id: "mem_us_state_and_dc_flags_louisiana",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_louisiana",
        galleryVariantId: "var_louisiana",
        quizVariantId: "var_louisiana"
      },
      {
        id: "mem_us_state_and_dc_flags_oklahoma",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_oklahoma",
        galleryVariantId: "var_oklahoma",
        quizVariantId: "var_oklahoma"
      },
      {
        id: "mem_us_state_and_dc_flags_texas",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_texas",
        galleryVariantId: "var_texas",
        quizVariantId: "var_texas"
      },
      {
        id: "mem_us_state_and_dc_flags_arizona",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_arizona",
        galleryVariantId: "var_arizona",
        quizVariantId: "var_arizona"
      },
      {
        id: "mem_us_state_and_dc_flags_colorado",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_colorado",
        galleryVariantId: "var_colorado",
        quizVariantId: "var_colorado"
      },
      {
        id: "mem_us_state_and_dc_flags_idaho",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_idaho",
        galleryVariantId: "var_idaho",
        quizVariantId: "var_idaho"
      },
      {
        id: "mem_us_state_and_dc_flags_montana",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_montana",
        galleryVariantId: "var_montana",
        quizVariantId: "var_montana"
      },
      {
        id: "mem_us_state_and_dc_flags_nevada",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_nevada",
        galleryVariantId: "var_nevada",
        quizVariantId: "var_nevada"
      },
      {
        id: "mem_us_state_and_dc_flags_new_mexico",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_new_mexico",
        galleryVariantId: "var_new_mexico",
        quizVariantId: "var_new_mexico"
      },
      {
        id: "mem_us_state_and_dc_flags_utah",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_utah",
        galleryVariantId: "var_utah",
        quizVariantId: "var_utah"
      },
      {
        id: "mem_us_state_and_dc_flags_wyoming",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_wyoming",
        galleryVariantId: "var_wyoming",
        quizVariantId: "var_wyoming"
      },
      {
        id: "mem_us_state_and_dc_flags_alaska",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_alaska",
        galleryVariantId: "var_alaska",
        quizVariantId: "var_alaska"
      },
      {
        id: "mem_us_state_and_dc_flags_california",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_california",
        galleryVariantId: "var_california_official",
        quizVariantId: "var_california_official"
      },
      {
        id: "mem_us_state_and_dc_flags_hawaii",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_hawaii",
        galleryVariantId: "var_hawaii",
        quizVariantId: "var_hawaii"
      },
      {
        id: "mem_us_state_and_dc_flags_oregon",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_oregon",
        galleryVariantId: "var_oregon_obverse",
        quizVariantId: "var_oregon_obverse"
      },
      {
        id: "mem_us_state_and_dc_flags_washington",
        collectionId: "col_us_state_and_dc_flags",
        entityId: "ent_washington",
        galleryVariantId: "var_washington",
        quizVariantId: "var_washington"
      }
    ]
  },
  {
    id: "col_us_census_northeast_flags",
    name: "US Census Northeast Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_northeast_flags_connecticut",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_connecticut",
        galleryVariantId: "var_connecticut",
        quizVariantId: "var_connecticut"
      },
      {
        id: "mem_us_census_northeast_flags_maine",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_maine",
        galleryVariantId: "var_maine",
        quizVariantId: "var_maine"
      },
      {
        id: "mem_us_census_northeast_flags_massachusetts",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_massachusetts",
        galleryVariantId: "var_massachusetts",
        quizVariantId: "var_massachusetts"
      },
      {
        id: "mem_us_census_northeast_flags_new_hampshire",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_new_hampshire",
        galleryVariantId: "var_new_hampshire",
        quizVariantId: "var_new_hampshire"
      },
      {
        id: "mem_us_census_northeast_flags_rhode_island",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_rhode_island",
        galleryVariantId: "var_rhode_island",
        quizVariantId: "var_rhode_island"
      },
      {
        id: "mem_us_census_northeast_flags_vermont",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_vermont",
        galleryVariantId: "var_vermont",
        quizVariantId: "var_vermont"
      },
      {
        id: "mem_us_census_northeast_flags_new_jersey",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_new_jersey",
        galleryVariantId: "var_new_jersey",
        quizVariantId: "var_new_jersey"
      },
      {
        id: "mem_us_census_northeast_flags_new_york",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_new_york",
        galleryVariantId: "var_new_york",
        quizVariantId: "var_new_york"
      },
      {
        id: "mem_us_census_northeast_flags_pennsylvania",
        collectionId: "col_us_census_northeast_flags",
        entityId: "ent_pennsylvania",
        galleryVariantId: "var_pennsylvania",
        quizVariantId: "var_pennsylvania"
      }
    ]
  },
  {
    id: "col_us_census_midwest_flags",
    name: "US Census Midwest Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_midwest_flags_illinois",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_illinois",
        galleryVariantId: "var_illinois",
        quizVariantId: "var_illinois"
      },
      {
        id: "mem_us_census_midwest_flags_indiana",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_indiana",
        galleryVariantId: "var_indiana",
        quizVariantId: "var_indiana"
      },
      {
        id: "mem_us_census_midwest_flags_michigan",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_michigan",
        galleryVariantId: "var_michigan",
        quizVariantId: "var_michigan"
      },
      {
        id: "mem_us_census_midwest_flags_ohio",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_ohio",
        galleryVariantId: "var_ohio",
        quizVariantId: "var_ohio"
      },
      {
        id: "mem_us_census_midwest_flags_wisconsin",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_wisconsin",
        galleryVariantId: "var_wisconsin",
        quizVariantId: "var_wisconsin"
      },
      {
        id: "mem_us_census_midwest_flags_iowa",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_iowa",
        galleryVariantId: "var_iowa",
        quizVariantId: "var_iowa"
      },
      {
        id: "mem_us_census_midwest_flags_kansas",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_kansas",
        galleryVariantId: "var_kansas",
        quizVariantId: "var_kansas"
      },
      {
        id: "mem_us_census_midwest_flags_minnesota",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_minnesota",
        galleryVariantId: "var_minnesota",
        quizVariantId: "var_minnesota"
      },
      {
        id: "mem_us_census_midwest_flags_missouri",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_missouri",
        galleryVariantId: "var_missouri",
        quizVariantId: "var_missouri"
      },
      {
        id: "mem_us_census_midwest_flags_nebraska",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_nebraska",
        galleryVariantId: "var_nebraska",
        quizVariantId: "var_nebraska"
      },
      {
        id: "mem_us_census_midwest_flags_north_dakota",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_north_dakota",
        galleryVariantId: "var_north_dakota",
        quizVariantId: "var_north_dakota"
      },
      {
        id: "mem_us_census_midwest_flags_south_dakota",
        collectionId: "col_us_census_midwest_flags",
        entityId: "ent_south_dakota",
        galleryVariantId: "var_south_dakota",
        quizVariantId: "var_south_dakota"
      }
    ]
  },
  {
    id: "col_us_census_south_flags",
    name: "US Census South Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_south_flags_delaware",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_delaware",
        galleryVariantId: "var_delaware",
        quizVariantId: "var_delaware"
      },
      {
        id: "mem_us_census_south_flags_district_of_columbia",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_district_of_columbia",
        galleryVariantId: "var_district_of_columbia",
        quizVariantId: "var_district_of_columbia"
      },
      {
        id: "mem_us_census_south_flags_florida",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_florida",
        galleryVariantId: "var_florida",
        quizVariantId: "var_florida"
      },
      {
        id: "mem_us_census_south_flags_georgia_state",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_georgia_state",
        galleryVariantId: "var_georgia_state",
        quizVariantId: "var_georgia_state"
      },
      {
        id: "mem_us_census_south_flags_maryland",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_maryland",
        galleryVariantId: "var_maryland",
        quizVariantId: "var_maryland"
      },
      {
        id: "mem_us_census_south_flags_north_carolina",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_north_carolina",
        galleryVariantId: "var_north_carolina",
        quizVariantId: "var_north_carolina"
      },
      {
        id: "mem_us_census_south_flags_south_carolina",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_south_carolina",
        galleryVariantId: "var_south_carolina",
        quizVariantId: "var_south_carolina"
      },
      {
        id: "mem_us_census_south_flags_virginia",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_virginia",
        galleryVariantId: "var_virginia",
        quizVariantId: "var_virginia"
      },
      {
        id: "mem_us_census_south_flags_west_virginia",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_west_virginia",
        galleryVariantId: "var_west_virginia",
        quizVariantId: "var_west_virginia"
      },
      {
        id: "mem_us_census_south_flags_alabama",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_alabama",
        galleryVariantId: "var_alabama",
        quizVariantId: "var_alabama"
      },
      {
        id: "mem_us_census_south_flags_kentucky",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_kentucky",
        galleryVariantId: "var_kentucky",
        quizVariantId: "var_kentucky"
      },
      {
        id: "mem_us_census_south_flags_mississippi",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_mississippi",
        galleryVariantId: "var_mississippi",
        quizVariantId: "var_mississippi"
      },
      {
        id: "mem_us_census_south_flags_tennessee",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_tennessee",
        galleryVariantId: "var_tennessee",
        quizVariantId: "var_tennessee"
      },
      {
        id: "mem_us_census_south_flags_arkansas",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_arkansas",
        galleryVariantId: "var_arkansas",
        quizVariantId: "var_arkansas"
      },
      {
        id: "mem_us_census_south_flags_louisiana",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_louisiana",
        galleryVariantId: "var_louisiana",
        quizVariantId: "var_louisiana"
      },
      {
        id: "mem_us_census_south_flags_oklahoma",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_oklahoma",
        galleryVariantId: "var_oklahoma",
        quizVariantId: "var_oklahoma"
      },
      {
        id: "mem_us_census_south_flags_texas",
        collectionId: "col_us_census_south_flags",
        entityId: "ent_texas",
        galleryVariantId: "var_texas",
        quizVariantId: "var_texas"
      }
    ]
  },
  {
    id: "col_us_census_west_flags",
    name: "US Census West Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_west_flags_arizona",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_arizona",
        galleryVariantId: "var_arizona",
        quizVariantId: "var_arizona"
      },
      {
        id: "mem_us_census_west_flags_colorado",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_colorado",
        galleryVariantId: "var_colorado",
        quizVariantId: "var_colorado"
      },
      {
        id: "mem_us_census_west_flags_idaho",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_idaho",
        galleryVariantId: "var_idaho",
        quizVariantId: "var_idaho"
      },
      {
        id: "mem_us_census_west_flags_montana",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_montana",
        galleryVariantId: "var_montana",
        quizVariantId: "var_montana"
      },
      {
        id: "mem_us_census_west_flags_nevada",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_nevada",
        galleryVariantId: "var_nevada",
        quizVariantId: "var_nevada"
      },
      {
        id: "mem_us_census_west_flags_new_mexico",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_new_mexico",
        galleryVariantId: "var_new_mexico",
        quizVariantId: "var_new_mexico"
      },
      {
        id: "mem_us_census_west_flags_utah",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_utah",
        galleryVariantId: "var_utah",
        quizVariantId: "var_utah"
      },
      {
        id: "mem_us_census_west_flags_wyoming",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_wyoming",
        galleryVariantId: "var_wyoming",
        quizVariantId: "var_wyoming"
      },
      {
        id: "mem_us_census_west_flags_alaska",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_alaska",
        galleryVariantId: "var_alaska",
        quizVariantId: "var_alaska"
      },
      {
        id: "mem_us_census_west_flags_california",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_california",
        galleryVariantId: "var_california_official",
        quizVariantId: "var_california_official"
      },
      {
        id: "mem_us_census_west_flags_hawaii",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_hawaii",
        galleryVariantId: "var_hawaii",
        quizVariantId: "var_hawaii"
      },
      {
        id: "mem_us_census_west_flags_oregon",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_oregon",
        galleryVariantId: "var_oregon_obverse",
        quizVariantId: "var_oregon_obverse"
      },
      {
        id: "mem_us_census_west_flags_washington",
        collectionId: "col_us_census_west_flags",
        entityId: "ent_washington",
        galleryVariantId: "var_washington",
        quizVariantId: "var_washington"
      }
    ]
  },
  {
    id: "col_us_census_new_england_flags",
    name: "US Census New England Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_new_england_flags_connecticut",
        collectionId: "col_us_census_new_england_flags",
        entityId: "ent_connecticut",
        galleryVariantId: "var_connecticut",
        quizVariantId: "var_connecticut"
      },
      {
        id: "mem_us_census_new_england_flags_maine",
        collectionId: "col_us_census_new_england_flags",
        entityId: "ent_maine",
        galleryVariantId: "var_maine",
        quizVariantId: "var_maine"
      },
      {
        id: "mem_us_census_new_england_flags_massachusetts",
        collectionId: "col_us_census_new_england_flags",
        entityId: "ent_massachusetts",
        galleryVariantId: "var_massachusetts",
        quizVariantId: "var_massachusetts"
      },
      {
        id: "mem_us_census_new_england_flags_new_hampshire",
        collectionId: "col_us_census_new_england_flags",
        entityId: "ent_new_hampshire",
        galleryVariantId: "var_new_hampshire",
        quizVariantId: "var_new_hampshire"
      },
      {
        id: "mem_us_census_new_england_flags_rhode_island",
        collectionId: "col_us_census_new_england_flags",
        entityId: "ent_rhode_island",
        galleryVariantId: "var_rhode_island",
        quizVariantId: "var_rhode_island"
      },
      {
        id: "mem_us_census_new_england_flags_vermont",
        collectionId: "col_us_census_new_england_flags",
        entityId: "ent_vermont",
        galleryVariantId: "var_vermont",
        quizVariantId: "var_vermont"
      }
    ]
  },
  {
    id: "col_us_census_mid_atlantic_flags",
    name: "US Census Mid-Atlantic Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_mid_atlantic_flags_new_jersey",
        collectionId: "col_us_census_mid_atlantic_flags",
        entityId: "ent_new_jersey",
        galleryVariantId: "var_new_jersey",
        quizVariantId: "var_new_jersey"
      },
      {
        id: "mem_us_census_mid_atlantic_flags_new_york",
        collectionId: "col_us_census_mid_atlantic_flags",
        entityId: "ent_new_york",
        galleryVariantId: "var_new_york",
        quizVariantId: "var_new_york"
      },
      {
        id: "mem_us_census_mid_atlantic_flags_pennsylvania",
        collectionId: "col_us_census_mid_atlantic_flags",
        entityId: "ent_pennsylvania",
        galleryVariantId: "var_pennsylvania",
        quizVariantId: "var_pennsylvania"
      }
    ]
  },
  {
    id: "col_us_census_east_north_central_flags",
    name: "US Census East North Central Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_east_north_central_flags_illinois",
        collectionId: "col_us_census_east_north_central_flags",
        entityId: "ent_illinois",
        galleryVariantId: "var_illinois",
        quizVariantId: "var_illinois"
      },
      {
        id: "mem_us_census_east_north_central_flags_indiana",
        collectionId: "col_us_census_east_north_central_flags",
        entityId: "ent_indiana",
        galleryVariantId: "var_indiana",
        quizVariantId: "var_indiana"
      },
      {
        id: "mem_us_census_east_north_central_flags_michigan",
        collectionId: "col_us_census_east_north_central_flags",
        entityId: "ent_michigan",
        galleryVariantId: "var_michigan",
        quizVariantId: "var_michigan"
      },
      {
        id: "mem_us_census_east_north_central_flags_ohio",
        collectionId: "col_us_census_east_north_central_flags",
        entityId: "ent_ohio",
        galleryVariantId: "var_ohio",
        quizVariantId: "var_ohio"
      },
      {
        id: "mem_us_census_east_north_central_flags_wisconsin",
        collectionId: "col_us_census_east_north_central_flags",
        entityId: "ent_wisconsin",
        galleryVariantId: "var_wisconsin",
        quizVariantId: "var_wisconsin"
      }
    ]
  },
  {
    id: "col_us_census_west_north_central_flags",
    name: "US Census West North Central Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_west_north_central_flags_iowa",
        collectionId: "col_us_census_west_north_central_flags",
        entityId: "ent_iowa",
        galleryVariantId: "var_iowa",
        quizVariantId: "var_iowa"
      },
      {
        id: "mem_us_census_west_north_central_flags_kansas",
        collectionId: "col_us_census_west_north_central_flags",
        entityId: "ent_kansas",
        galleryVariantId: "var_kansas",
        quizVariantId: "var_kansas"
      },
      {
        id: "mem_us_census_west_north_central_flags_minnesota",
        collectionId: "col_us_census_west_north_central_flags",
        entityId: "ent_minnesota",
        galleryVariantId: "var_minnesota",
        quizVariantId: "var_minnesota"
      },
      {
        id: "mem_us_census_west_north_central_flags_missouri",
        collectionId: "col_us_census_west_north_central_flags",
        entityId: "ent_missouri",
        galleryVariantId: "var_missouri",
        quizVariantId: "var_missouri"
      },
      {
        id: "mem_us_census_west_north_central_flags_nebraska",
        collectionId: "col_us_census_west_north_central_flags",
        entityId: "ent_nebraska",
        galleryVariantId: "var_nebraska",
        quizVariantId: "var_nebraska"
      },
      {
        id: "mem_us_census_west_north_central_flags_north_dakota",
        collectionId: "col_us_census_west_north_central_flags",
        entityId: "ent_north_dakota",
        galleryVariantId: "var_north_dakota",
        quizVariantId: "var_north_dakota"
      },
      {
        id: "mem_us_census_west_north_central_flags_south_dakota",
        collectionId: "col_us_census_west_north_central_flags",
        entityId: "ent_south_dakota",
        galleryVariantId: "var_south_dakota",
        quizVariantId: "var_south_dakota"
      }
    ]
  },
  {
    id: "col_us_census_south_atlantic_flags",
    name: "US Census South Atlantic Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_south_atlantic_flags_delaware",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_delaware",
        galleryVariantId: "var_delaware",
        quizVariantId: "var_delaware"
      },
      {
        id: "mem_us_census_south_atlantic_flags_district_of_columbia",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_district_of_columbia",
        galleryVariantId: "var_district_of_columbia",
        quizVariantId: "var_district_of_columbia"
      },
      {
        id: "mem_us_census_south_atlantic_flags_florida",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_florida",
        galleryVariantId: "var_florida",
        quizVariantId: "var_florida"
      },
      {
        id: "mem_us_census_south_atlantic_flags_georgia_state",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_georgia_state",
        galleryVariantId: "var_georgia_state",
        quizVariantId: "var_georgia_state"
      },
      {
        id: "mem_us_census_south_atlantic_flags_maryland",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_maryland",
        galleryVariantId: "var_maryland",
        quizVariantId: "var_maryland"
      },
      {
        id: "mem_us_census_south_atlantic_flags_north_carolina",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_north_carolina",
        galleryVariantId: "var_north_carolina",
        quizVariantId: "var_north_carolina"
      },
      {
        id: "mem_us_census_south_atlantic_flags_south_carolina",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_south_carolina",
        galleryVariantId: "var_south_carolina",
        quizVariantId: "var_south_carolina"
      },
      {
        id: "mem_us_census_south_atlantic_flags_virginia",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_virginia",
        galleryVariantId: "var_virginia",
        quizVariantId: "var_virginia"
      },
      {
        id: "mem_us_census_south_atlantic_flags_west_virginia",
        collectionId: "col_us_census_south_atlantic_flags",
        entityId: "ent_west_virginia",
        galleryVariantId: "var_west_virginia",
        quizVariantId: "var_west_virginia"
      }
    ]
  },
  {
    id: "col_us_census_east_south_central_flags",
    name: "US Census East South Central Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_east_south_central_flags_alabama",
        collectionId: "col_us_census_east_south_central_flags",
        entityId: "ent_alabama",
        galleryVariantId: "var_alabama",
        quizVariantId: "var_alabama"
      },
      {
        id: "mem_us_census_east_south_central_flags_kentucky",
        collectionId: "col_us_census_east_south_central_flags",
        entityId: "ent_kentucky",
        galleryVariantId: "var_kentucky",
        quizVariantId: "var_kentucky"
      },
      {
        id: "mem_us_census_east_south_central_flags_mississippi",
        collectionId: "col_us_census_east_south_central_flags",
        entityId: "ent_mississippi",
        galleryVariantId: "var_mississippi",
        quizVariantId: "var_mississippi"
      },
      {
        id: "mem_us_census_east_south_central_flags_tennessee",
        collectionId: "col_us_census_east_south_central_flags",
        entityId: "ent_tennessee",
        galleryVariantId: "var_tennessee",
        quizVariantId: "var_tennessee"
      }
    ]
  },
  {
    id: "col_us_census_west_south_central_flags",
    name: "US Census West South Central Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_west_south_central_flags_arkansas",
        collectionId: "col_us_census_west_south_central_flags",
        entityId: "ent_arkansas",
        galleryVariantId: "var_arkansas",
        quizVariantId: "var_arkansas"
      },
      {
        id: "mem_us_census_west_south_central_flags_louisiana",
        collectionId: "col_us_census_west_south_central_flags",
        entityId: "ent_louisiana",
        galleryVariantId: "var_louisiana",
        quizVariantId: "var_louisiana"
      },
      {
        id: "mem_us_census_west_south_central_flags_oklahoma",
        collectionId: "col_us_census_west_south_central_flags",
        entityId: "ent_oklahoma",
        galleryVariantId: "var_oklahoma",
        quizVariantId: "var_oklahoma"
      },
      {
        id: "mem_us_census_west_south_central_flags_texas",
        collectionId: "col_us_census_west_south_central_flags",
        entityId: "ent_texas",
        galleryVariantId: "var_texas",
        quizVariantId: "var_texas"
      }
    ]
  },
  {
    id: "col_us_census_mountain_flags",
    name: "US Census Mountain Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_mountain_flags_arizona",
        collectionId: "col_us_census_mountain_flags",
        entityId: "ent_arizona",
        galleryVariantId: "var_arizona",
        quizVariantId: "var_arizona"
      },
      {
        id: "mem_us_census_mountain_flags_colorado",
        collectionId: "col_us_census_mountain_flags",
        entityId: "ent_colorado",
        galleryVariantId: "var_colorado",
        quizVariantId: "var_colorado"
      },
      {
        id: "mem_us_census_mountain_flags_idaho",
        collectionId: "col_us_census_mountain_flags",
        entityId: "ent_idaho",
        galleryVariantId: "var_idaho",
        quizVariantId: "var_idaho"
      },
      {
        id: "mem_us_census_mountain_flags_montana",
        collectionId: "col_us_census_mountain_flags",
        entityId: "ent_montana",
        galleryVariantId: "var_montana",
        quizVariantId: "var_montana"
      },
      {
        id: "mem_us_census_mountain_flags_nevada",
        collectionId: "col_us_census_mountain_flags",
        entityId: "ent_nevada",
        galleryVariantId: "var_nevada",
        quizVariantId: "var_nevada"
      },
      {
        id: "mem_us_census_mountain_flags_new_mexico",
        collectionId: "col_us_census_mountain_flags",
        entityId: "ent_new_mexico",
        galleryVariantId: "var_new_mexico",
        quizVariantId: "var_new_mexico"
      },
      {
        id: "mem_us_census_mountain_flags_utah",
        collectionId: "col_us_census_mountain_flags",
        entityId: "ent_utah",
        galleryVariantId: "var_utah",
        quizVariantId: "var_utah"
      },
      {
        id: "mem_us_census_mountain_flags_wyoming",
        collectionId: "col_us_census_mountain_flags",
        entityId: "ent_wyoming",
        galleryVariantId: "var_wyoming",
        quizVariantId: "var_wyoming"
      }
    ]
  },
  {
    id: "col_us_census_pacific_flags",
    name: "US Census Pacific Division Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_us_census_pacific_flags_alaska",
        collectionId: "col_us_census_pacific_flags",
        entityId: "ent_alaska",
        galleryVariantId: "var_alaska",
        quizVariantId: "var_alaska"
      },
      {
        id: "mem_us_census_pacific_flags_california",
        collectionId: "col_us_census_pacific_flags",
        entityId: "ent_california",
        galleryVariantId: "var_california_official",
        quizVariantId: "var_california_official"
      },
      {
        id: "mem_us_census_pacific_flags_hawaii",
        collectionId: "col_us_census_pacific_flags",
        entityId: "ent_hawaii",
        galleryVariantId: "var_hawaii",
        quizVariantId: "var_hawaii"
      },
      {
        id: "mem_us_census_pacific_flags_oregon",
        collectionId: "col_us_census_pacific_flags",
        entityId: "ent_oregon",
        galleryVariantId: "var_oregon_obverse",
        quizVariantId: "var_oregon_obverse"
      },
      {
        id: "mem_us_census_pacific_flags_washington",
        collectionId: "col_us_census_pacific_flags",
        entityId: "ent_washington",
        galleryVariantId: "var_washington",
        quizVariantId: "var_washington"
      }
    ]
  },

  {
    id: "col_england_ceremonial_counties",
    name: "English Ceremonial County Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_england"
        },
        {
          hasTag: "county"
        },
        {
          hasTag: "subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_england_historical_counties",
    name: "English Historical County Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_england"
        },
        {
          hasTag: "county"
        },
        {
          hasTag: "historical"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },


  /*
    Recently expanded first-level subdivision collections.
  */
  {
    id: "col_europe_first_level_subdivisions",
    name: "European First-Level Subdivision Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_europe"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_belgium_subnational_flags",
    name: "Belgian Regional and Provincial Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes the flagged Brussels-Capital Region and the ten Belgian provinces. Flanders and Wallonia are structural first-level regions in entities.js but are not included here until their own flag assets are added.",
    rules: {
      all: [
        {
          hasAncestor: "ent_belgium"
        },
        {
          hasTag: "subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_monaco_municipality",
    name: "Municipality of Monaco Flag",
    type: "dynamic",
    target: "entity",
    notes: "Includes Monaco's single municipality as a flag-bearing first-level subdivision beneath the sovereign entity.",
    rules: {
      all: [
        {
          hasAncestor: "ent_monaco"
        },
        {
          hasTag: "subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_netherlands_provinces",
    name: "Dutch Provincial Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_netherlands"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_switzerland_cantons",
    name: "Swiss Cantonal Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_switzerland"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_belarus_first_level_subdivisions",
    name: "Belarusian First-Level Subdivision Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes the six Belarusian regions/oblasts and the City of Minsk as current first-level subdivisions.",
    rules: {
      all: [
        {
          hasAncestor: "ent_belarus"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_czechia_regions",
    name: "Czech Regional Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_czechia"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_poland_voivodeships",
    name: "Polish Voivodeship Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_poland"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_spain_autonomous_communities_and_cities",
    name: "Spanish Autonomous Community and City Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes Spain's autonomous communities plus the autonomous cities of Ceuta and Melilla. Canary Islands, Ceuta and Melilla are included explicitly because they are geographically modelled under Northern Africa while remaining constituent parts of Spain.",
    rules: {
      all: [
        {
          hasAncestor: "ent_spain"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "autonomous"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    },
    includeEntityIds: [
      "ent_canary_islands",
      "ent_ceuta",
      "ent_melilla"
    ]
  },
  {
    id: "col_france_current_regions",
    name: "French Current Regional Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_france"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_latvia_state_cities",
    name: "Latvian State City Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_latvia"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_lithuania_counties",
    name: "Lithuanian County Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_lithuania"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_norway_counties",
    name: "Norwegian County Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_norway"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "county"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_sweden_counties",
    name: "Swedish County Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_sweden"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "county"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_germany_lander",
    name: "German Länder Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_germany"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_austria_states",
    name: "Austrian State Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_austria"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_italy_regions",
    name: "Italian Regional Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_italy"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_italy_autonomous_regions",
    name: "Autonomous Regional Flags of Italy",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_italy"
        },
        {
          hasTag: "autonomous"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_venezuela_states",
    name: "Venezuelan State and Capital District Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_venezuela"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  /*
    Venezuelan regional study collections.

    These preserve the former regional groupings without using structural
    entities in the geographic hierarchy.
  */
  {
    id: "col_venezuela_andean_region_flags",
    name: "Venezuelan Andean Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_andean_region_flags_barinas",
        collectionId: "col_venezuela_andean_region_flags",
        entityId: "ent_venezuela_barinas",
        galleryVariantId: "var_barinas_current",
        quizVariantId: "var_barinas_current"
      },
      {
        id: "mem_venezuela_andean_region_flags_merida",
        collectionId: "col_venezuela_andean_region_flags",
        entityId: "ent_venezuela_merida",
        galleryVariantId: "var_merida_current",
        quizVariantId: "var_merida_current"
      },
      {
        id: "mem_venezuela_andean_region_flags_trujillo",
        collectionId: "col_venezuela_andean_region_flags",
        entityId: "ent_venezuela_trujillo",
        galleryVariantId: "var_trujillo_current",
        quizVariantId: "var_trujillo_current"
      },
      {
        id: "mem_venezuela_andean_region_flags_tachira",
        collectionId: "col_venezuela_andean_region_flags",
        entityId: "ent_venezuela_tachira",
        galleryVariantId: "var_tachira_current",
        quizVariantId: "var_tachira_current"
      }
    ]
  },
  {
    id: "col_venezuela_capital_region_flags",
    name: "Venezuelan Capital Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_capital_region_flags_caracas",
        collectionId: "col_venezuela_capital_region_flags",
        entityId: "ent_venezuela_caracas",
        galleryVariantId: "var_caracas_current",
        quizVariantId: "var_caracas_current"
      },
      {
        id: "mem_venezuela_capital_region_flags_la_guaira",
        collectionId: "col_venezuela_capital_region_flags",
        entityId: "ent_venezuela_la_guaira",
        galleryVariantId: "var_la_guaira_current",
        quizVariantId: "var_la_guaira_current"
      },
      {
        id: "mem_venezuela_capital_region_flags_miranda",
        collectionId: "col_venezuela_capital_region_flags",
        entityId: "ent_venezuela_miranda",
        galleryVariantId: "var_miranda_current",
        quizVariantId: "var_miranda_current"
      }
    ]
  },
  {
    id: "col_venezuela_central_region_flags",
    name: "Venezuelan Central Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_central_region_flags_aragua",
        collectionId: "col_venezuela_central_region_flags",
        entityId: "ent_venezuela_aragua",
        galleryVariantId: "var_aragua_current",
        quizVariantId: "var_aragua_current"
      },
      {
        id: "mem_venezuela_central_region_flags_carabobo",
        collectionId: "col_venezuela_central_region_flags",
        entityId: "ent_venezuela_carabobo",
        galleryVariantId: "var_carabobo_current",
        quizVariantId: "var_carabobo_current"
      },
      {
        id: "mem_venezuela_central_region_flags_cojedes",
        collectionId: "col_venezuela_central_region_flags",
        entityId: "ent_venezuela_cojedes",
        galleryVariantId: "var_cojedes_current",
        quizVariantId: "var_cojedes_current"
      }
    ]
  },
  {
    id: "col_venezuela_central_western_region_flags",
    name: "Venezuelan Central-Western Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_central_western_region_flags_falcon",
        collectionId: "col_venezuela_central_western_region_flags",
        entityId: "ent_venezuela_falcon",
        galleryVariantId: "var_falcon_current",
        quizVariantId: "var_falcon_current"
      },
      {
        id: "mem_venezuela_central_western_region_flags_lara",
        collectionId: "col_venezuela_central_western_region_flags",
        entityId: "ent_venezuela_lara",
        galleryVariantId: "var_lara_current",
        quizVariantId: "var_lara_current"
      },
      {
        id: "mem_venezuela_central_western_region_flags_portuguesa",
        collectionId: "col_venezuela_central_western_region_flags",
        entityId: "ent_venezuela_portuguesa",
        galleryVariantId: "var_portuguesa_current",
        quizVariantId: "var_portuguesa_current"
      },
      {
        id: "mem_venezuela_central_western_region_flags_yaracuy",
        collectionId: "col_venezuela_central_western_region_flags",
        entityId: "ent_venezuela_yaracuy",
        galleryVariantId: "var_yaracuy_current",
        quizVariantId: "var_yaracuy_current"
      }
    ]
  },
  {
    id: "col_venezuela_guayana_region_flags",
    name: "Venezuelan Guayana Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_guayana_region_flags_amazonas",
        collectionId: "col_venezuela_guayana_region_flags",
        entityId: "ent_venezuela_amazonas",
        galleryVariantId: "var_amazonas_current",
        quizVariantId: "var_amazonas_current"
      },
      {
        id: "mem_venezuela_guayana_region_flags_bolivar",
        collectionId: "col_venezuela_guayana_region_flags",
        entityId: "ent_venezuela_bolivar",
        galleryVariantId: "var_bolivar_current",
        quizVariantId: "var_bolivar_current"
      },
      {
        id: "mem_venezuela_guayana_region_flags_delta_amacuro",
        collectionId: "col_venezuela_guayana_region_flags",
        entityId: "ent_venezuela_delta_amacuro",
        galleryVariantId: "var_delta_amacuro_current",
        quizVariantId: "var_delta_amacuro_current"
      }
    ]
  },
  {
    id: "col_venezuela_insular_region_flags",
    name: "Venezuelan Insular Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_insular_region_flags_nueva_esparta",
        collectionId: "col_venezuela_insular_region_flags",
        entityId: "ent_venezuela_nueva_esparta",
        galleryVariantId: "var_nueva_esparta_current",
        quizVariantId: "var_nueva_esparta_current"
      }
    ]
  },
  {
    id: "col_venezuela_llanos_region_flags",
    name: "Venezuelan Llanos Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_llanos_region_flags_apure",
        collectionId: "col_venezuela_llanos_region_flags",
        entityId: "ent_venezuela_apure",
        galleryVariantId: "var_apure_current",
        quizVariantId: "var_apure_current"
      },
      {
        id: "mem_venezuela_llanos_region_flags_guarico",
        collectionId: "col_venezuela_llanos_region_flags",
        entityId: "ent_venezuela_guarico",
        galleryVariantId: "var_guarico_current",
        quizVariantId: "var_guarico_current"
      }
    ]
  },
  {
    id: "col_venezuela_northeastern_region_flags",
    name: "Venezuelan Northeastern Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_northeastern_region_flags_anzoategui",
        collectionId: "col_venezuela_northeastern_region_flags",
        entityId: "ent_venezuela_anzoategui",
        galleryVariantId: "var_anzoategui_current",
        quizVariantId: "var_anzoategui_current"
      },
      {
        id: "mem_venezuela_northeastern_region_flags_monagas",
        collectionId: "col_venezuela_northeastern_region_flags",
        entityId: "ent_venezuela_monagas",
        galleryVariantId: "var_monagas_current",
        quizVariantId: "var_monagas_current"
      },
      {
        id: "mem_venezuela_northeastern_region_flags_sucre",
        collectionId: "col_venezuela_northeastern_region_flags",
        entityId: "ent_venezuela_sucre",
        galleryVariantId: "var_sucre_current",
        quizVariantId: "var_sucre_current"
      }
    ]
  },
  {
    id: "col_venezuela_zulian_region_flags",
    name: "Venezuelan Zulian Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_venezuela_zulian_region_flags_zulia",
        collectionId: "col_venezuela_zulian_region_flags",
        entityId: "ent_venezuela_zulia",
        galleryVariantId: "var_zulia_current",
        quizVariantId: "var_zulia_current"
      }
    ]
  },
  {
    id: "col_federated_states_micronesia_states",
    name: "States of the Federated States of Micronesia",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_federated_states_of_micronesia"
        },
        {
          hasTag: "first_level_subdivision"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  /*
    International organisation collections.
  */
  {
    id: "col_international_organisation_flags",
    name: "International Organisation Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_international_organisations"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_un_system_flags",
    name: "United Nations System Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_united_nations_system"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_european_atlantic_organisation_flags",
    name: "European and Atlantic Organisation Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_european_atlantic_organisations"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_treaty_system_flags",
    name: "Treaty System Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_treaty_systems"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_international_police_cooperation_flags",
    name: "International Police Cooperation Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_international_police_cooperation"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },
  {
    id: "col_international_sporting_organisation_flags",
    name: "International Sporting Organisation Flags",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_sporting_organisations"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_arab_league_member_flags",
    name: "Arab League Member State Flags",
    type: "dynamic",
    target: "entity",
    notes: "Membership-driven collection. Arab League membership is stored in entityMemberships.js so cross-regional Arab League members can remain geographically modelled by their actual regions.",
    rules: {
      all: [
        {
          memberOf: "ent_arab_league",
          membershipStatus: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  {
    id: "col_oic_member_state_flags",
    name: "Organisation of Islamic Cooperation Member State Flags",
    type: "dynamic",
    target: "entity",
    notes: "Membership-driven collection. OIC membership is stored in entityMemberships.js so cross-regional OIC members can remain geographically modelled by their actual regions. Observer states and candidate states are not included.",
    rules: {
      all: [
        {
          memberOf: "ent_organisation_of_islamic_cooperation",
          membershipStatus: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },

  /*
    Internal regression collections.
  */
  {
    id: "col_venezuelan_overseas_entities",
    name: "Venezuelan Overseas Entities",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          administeredBy: "ent_venezuela"
        },
        {
          hasTag: "overseas"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    },
    internal: true
  },
  {
    id: "col_yorkshire_shared_asset_test",
    name: "Yorkshire Shared Asset Test",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_west_yorkshire_modern",
        collectionId: "col_yorkshire_shared_asset_test",
        entityId: "ent_west_yorkshire",
        galleryVariantId: "var_west_yorkshire_modern",
        quizVariantId: "var_west_yorkshire_modern"
      },
      {
        id: "mem_west_riding_historic",
        collectionId: "col_yorkshire_shared_asset_test",
        entityId: "ent_west_riding_of_yorkshire",
        galleryVariantId: "var_west_riding_historic",
        quizVariantId: "var_west_riding_historic"
      }
    ],
    internal: true
  }
];
