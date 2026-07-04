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
    name: "South American Sovereign Nations",
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
    name: "North American Sovereign Nations",
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
    name: "Central American Sovereign Nations",
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
    name: "Caribbean Sovereign Nations",
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
    name: "African Sovereign Nations",
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
    name: "European Sovereign Nations",
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
    name: "Asian Sovereign Nations",
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
    name: "Oceanian Sovereign Nations",
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
    Subregion sovereign-nation collections.
  */
  {
    id: "col_northern_america_sovereign",
    name: "Northern American Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_northern_america"
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
    id: "col_northern_africa_sovereign",
    name: "Northern African Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_northern_africa"
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
    id: "col_eastern_africa_sovereign",
    name: "Eastern African Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_eastern_africa"
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
    id: "col_middle_africa_sovereign",
    name: "Middle African Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_middle_africa"
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
    id: "col_southern_africa_sovereign",
    name: "Southern African Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_southern_africa"
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
    id: "col_western_africa_sovereign",
    name: "Western African Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_western_africa"
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
    id: "col_eastern_europe_sovereign",
    name: "Eastern European Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_eastern_europe"
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
    id: "col_northern_europe_sovereign",
    name: "Northern European Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_northern_europe"
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
    id: "col_southern_europe_sovereign",
    name: "Southern European Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_southern_europe"
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
    id: "col_western_europe_sovereign",
    name: "Western European Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_western_europe"
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
    id: "col_central_asia_sovereign",
    name: "Central Asian Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_central_asia"
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
    id: "col_eastern_asia_sovereign",
    name: "Eastern Asian Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_eastern_asia"
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
    id: "col_south_eastern_asia_sovereign",
    name: "South-Eastern Asian Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_south_eastern_asia"
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
    id: "col_southern_asia_sovereign",
    name: "Southern Asian Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_southern_asia"
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
    id: "col_western_asia_sovereign",
    name: "Western Asian Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_western_asia"
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
    id: "col_australia_and_new_zealand_sovereign",
    name: "Australia and New Zealand Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_australia_and_new_zealand"
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
    id: "col_melanesia_sovereign",
    name: "Melanesian Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_melanesia"
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
    id: "col_micronesia_sovereign",
    name: "Micronesian Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_micronesia"
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
    id: "col_polynesia_sovereign",
    name: "Polynesian Sovereign Nations",
    type: "dynamic",
    target: "entity",
    rules: {
      all: [
        {
          hasAncestor: "ent_polynesia"
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
    id: "col_albania_counties",
    name: "Albanian County Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes the 12 current Albanian counties as first-level subdivisions.",
    rules: {
      all: [
        {
          hasAncestor: "ent_albania"
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
    id: "col_andorra_parishes",
    name: "Andorran Parish Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes the seven current Andorran parishes. Parish flag status is treated conservatively: hypothetical designs are tagged as unofficial at variant level.",
    rules: {
      all: [
        {
          hasAncestor: "ent_andorra"
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
    id: "col_bosnia_and_herzegovina_subnational_flags",
    name: "Bosnia and Herzegovina Subnational Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes current selectable subnational flags: Republika Srpska and Federation cantons with available flag assets. The Federation, Brčko District and Canton 10 are represented structurally where no current asset is present.",
    rules: {
      all: [
        {
          hasAncestor: "ent_bosnia_and_herzegovina"
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
    id: "col_croatia_counties_and_city",
    name: "Croatian County and Capital City Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes Croatia's 20 counties and the City of Zagreb as current first-level subdivisions.",
    rules: {
      all: [
        {
          hasAncestor: "ent_croatia"
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
    id: "col_greece_regions",
    name: "Greek Regional Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes current selectable Greek regional flags with available assets.",
    rules: {
      all: [
        {
          hasAncestor: "ent_greece"
        },
        {
          hasTag: "region"
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
    id: "col_malta_regions",
    name: "Maltese Regional Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes current selectable Maltese regional flags with available assets.",
    rules: {
      all: [
        {
          hasAncestor: "ent_malta"
        },
        {
          hasTag: "region"
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
    id: "col_north_macedonia_local_government_flags",
    name: "North Macedonian Local-Government Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes available current flags for the City of Skopje and North Macedonian municipalities. Statistical regions are used as collection/group filters rather than modelled as entities.",
    rules: {
      all: [
        {
          hasAncestor: "ent_north_macedonia"
        },
        {
          hasTag: "current"
        },
        {
          hasDefaultVariant: true
        },
        {
          any: [
            {
              hasTag: "municipality"
            },
            {
              hasTag: "city"
            }
          ]
        }
      ]
    }
  },
  {
    id: "col_north_macedonia_city_of_skopje_flags",
    name: "City of Skopje Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes the City of Skopje flag and available flags for municipalities within the City of Skopje.",
    rules: {
      all: [
        {
          any: [
            {
              entityIs: "ent_north_macedonia_city_of_skopje"
            },
            {
              hasAncestor: "ent_north_macedonia_city_of_skopje"
            }
          ]
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
    id: "col_north_macedonia_eastern_statistical_region_flags",
    name: "North Macedonia — Eastern Statistical Region Flags",
    type: "manual",
    target: "entity",
    notes: "Uses the statistical region as a collection/grouping filter only; the statistical region itself is not modelled as a flag-bearing entity. Membership is listed manually so entity tags remain within the controlled tag registry.",
    members: [
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_berovo_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_berovo_municipality",
        galleryVariantId: "var_north_macedonia_berovo_municipality_current",
        quizVariantId: "var_north_macedonia_berovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_delcevo_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_delcevo_municipality",
        galleryVariantId: "var_north_macedonia_delcevo_municipality_current",
        quizVariantId: "var_north_macedonia_delcevo_municipality_current"
      },
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_karbinci_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_karbinci_municipality",
        galleryVariantId: "var_north_macedonia_karbinci_municipality_current",
        quizVariantId: "var_north_macedonia_karbinci_municipality_current"
      },
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_kocani_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_kocani_municipality",
        galleryVariantId: "var_north_macedonia_kocani_municipality_current",
        quizVariantId: "var_north_macedonia_kocani_municipality_current"
      },
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_makedonska_kamenica_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_makedonska_kamenica_municipality",
        galleryVariantId: "var_north_macedonia_makedonska_kamenica_municipality_current",
        quizVariantId: "var_north_macedonia_makedonska_kamenica_municipality_current"
      },
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_pehcevo_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_pehcevo_municipality",
        galleryVariantId: "var_north_macedonia_pehcevo_municipality_current",
        quizVariantId: "var_north_macedonia_pehcevo_municipality_current"
      },
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_vinica_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_vinica_municipality",
        galleryVariantId: "var_north_macedonia_vinica_municipality_current",
        quizVariantId: "var_north_macedonia_vinica_municipality_current"
      },
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_zrnovci_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_zrnovci_municipality",
        galleryVariantId: "var_north_macedonia_zrnovci_municipality_current",
        quizVariantId: "var_north_macedonia_zrnovci_municipality_current"
      },
      {
        id: "mem_north_macedonia_eastern_statistical_region_flags_stip_municipality",
        collectionId: "col_north_macedonia_eastern_statistical_region_flags",
        entityId: "ent_north_macedonia_stip_municipality",
        galleryVariantId: "var_north_macedonia_stip_municipality_current",
        quizVariantId: "var_north_macedonia_stip_municipality_current"
      }
    ]
  },
    {
    id: "col_north_macedonia_northeastern_statistical_region_flags",
    name: "North Macedonia — Northeastern Statistical Region Flags",
    type: "manual",
    target: "entity",
    notes: "Uses the statistical region as a collection/grouping filter only; the statistical region itself is not modelled as a flag-bearing entity. Membership is listed manually so entity tags remain within the controlled tag registry.",
    members: [
      {
        id: "mem_north_macedonia_northeastern_statistical_region_flags_kratovo_municipality",
        collectionId: "col_north_macedonia_northeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_kratovo_municipality",
        galleryVariantId: "var_north_macedonia_kratovo_municipality_current",
        quizVariantId: "var_north_macedonia_kratovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_northeastern_statistical_region_flags_kriva_palanka_municipality",
        collectionId: "col_north_macedonia_northeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_kriva_palanka_municipality",
        galleryVariantId: "var_north_macedonia_kriva_palanka_municipality_current",
        quizVariantId: "var_north_macedonia_kriva_palanka_municipality_current"
      },
      {
        id: "mem_north_macedonia_northeastern_statistical_region_flags_kumanovo_municipality",
        collectionId: "col_north_macedonia_northeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_kumanovo_municipality",
        galleryVariantId: "var_north_macedonia_kumanovo_municipality_current",
        quizVariantId: "var_north_macedonia_kumanovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_northeastern_statistical_region_flags_lipkovo_municipality",
        collectionId: "col_north_macedonia_northeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_lipkovo_municipality",
        galleryVariantId: "var_north_macedonia_lipkovo_municipality_current",
        quizVariantId: "var_north_macedonia_lipkovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_northeastern_statistical_region_flags_rankovce_municipality",
        collectionId: "col_north_macedonia_northeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_rankovce_municipality",
        galleryVariantId: "var_north_macedonia_rankovce_municipality_current",
        quizVariantId: "var_north_macedonia_rankovce_municipality_current"
      },
      {
        id: "mem_north_macedonia_northeastern_statistical_region_flags_staro_nagoricane_municipality",
        collectionId: "col_north_macedonia_northeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_staro_nagoricane_municipality",
        galleryVariantId: "var_north_macedonia_staro_nagoricane_municipality_current",
        quizVariantId: "var_north_macedonia_staro_nagoricane_municipality_current"
      }
    ]
  },
    {
    id: "col_north_macedonia_pelagonia_statistical_region_flags",
    name: "North Macedonia — Pelagonia Statistical Region Flags",
    type: "manual",
    target: "entity",
    notes: "Uses the statistical region as a collection/grouping filter only; the statistical region itself is not modelled as a flag-bearing entity. Membership is listed manually so entity tags remain within the controlled tag registry.",
    members: [
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_bitola_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_bitola_municipality",
        galleryVariantId: "var_north_macedonia_bitola_municipality_current",
        quizVariantId: "var_north_macedonia_bitola_municipality_current"
      },
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_demir_hisar_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_demir_hisar_municipality",
        galleryVariantId: "var_north_macedonia_demir_hisar_municipality_current",
        quizVariantId: "var_north_macedonia_demir_hisar_municipality_current"
      },
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_dolneni_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_dolneni_municipality",
        galleryVariantId: "var_north_macedonia_dolneni_municipality_current",
        quizVariantId: "var_north_macedonia_dolneni_municipality_current"
      },
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_krivogastani_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_krivogastani_municipality",
        galleryVariantId: "var_north_macedonia_krivogastani_municipality_current",
        quizVariantId: "var_north_macedonia_krivogastani_municipality_current"
      },
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_krusevo_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_krusevo_municipality",
        galleryVariantId: "var_north_macedonia_krusevo_municipality_current",
        quizVariantId: "var_north_macedonia_krusevo_municipality_current"
      },
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_mogila_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_mogila_municipality",
        galleryVariantId: "var_north_macedonia_mogila_municipality_current",
        quizVariantId: "var_north_macedonia_mogila_municipality_current"
      },
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_novaci_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_novaci_municipality",
        galleryVariantId: "var_north_macedonia_novaci_municipality_current",
        quizVariantId: "var_north_macedonia_novaci_municipality_current"
      },
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_prilep_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_prilep_municipality",
        galleryVariantId: "var_north_macedonia_prilep_municipality_current",
        quizVariantId: "var_north_macedonia_prilep_municipality_current"
      },
      {
        id: "mem_north_macedonia_pelagonia_statistical_region_flags_resen_municipality",
        collectionId: "col_north_macedonia_pelagonia_statistical_region_flags",
        entityId: "ent_north_macedonia_resen_municipality",
        galleryVariantId: "var_north_macedonia_resen_municipality_current",
        quizVariantId: "var_north_macedonia_resen_municipality_current"
      }
    ]
  },
    {
    id: "col_north_macedonia_polog_statistical_region_flags",
    name: "North Macedonia — Polog Statistical Region Flags",
    type: "manual",
    target: "entity",
    notes: "Uses the statistical region as a collection/grouping filter only; the statistical region itself is not modelled as a flag-bearing entity. Membership is listed manually so entity tags remain within the controlled tag registry.",
    members: [
      {
        id: "mem_north_macedonia_polog_statistical_region_flags_bogovinje_municipality",
        collectionId: "col_north_macedonia_polog_statistical_region_flags",
        entityId: "ent_north_macedonia_bogovinje_municipality",
        galleryVariantId: "var_north_macedonia_bogovinje_municipality_current",
        quizVariantId: "var_north_macedonia_bogovinje_municipality_current"
      },
      {
        id: "mem_north_macedonia_polog_statistical_region_flags_brvenica_municipality",
        collectionId: "col_north_macedonia_polog_statistical_region_flags",
        entityId: "ent_north_macedonia_brvenica_municipality",
        galleryVariantId: "var_north_macedonia_brvenica_municipality_current",
        quizVariantId: "var_north_macedonia_brvenica_municipality_current"
      },
      {
        id: "mem_north_macedonia_polog_statistical_region_flags_gostivar_municipality",
        collectionId: "col_north_macedonia_polog_statistical_region_flags",
        entityId: "ent_north_macedonia_gostivar_municipality",
        galleryVariantId: "var_north_macedonia_gostivar_municipality_current",
        quizVariantId: "var_north_macedonia_gostivar_municipality_current"
      },
      {
        id: "mem_north_macedonia_polog_statistical_region_flags_jegunovce_municipality",
        collectionId: "col_north_macedonia_polog_statistical_region_flags",
        entityId: "ent_north_macedonia_jegunovce_municipality",
        galleryVariantId: "var_north_macedonia_jegunovce_municipality_current",
        quizVariantId: "var_north_macedonia_jegunovce_municipality_current"
      },
      {
        id: "mem_north_macedonia_polog_statistical_region_flags_mavrovo_and_rostusa_municipality",
        collectionId: "col_north_macedonia_polog_statistical_region_flags",
        entityId: "ent_north_macedonia_mavrovo_and_rostusa_municipality",
        galleryVariantId: "var_north_macedonia_mavrovo_and_rostusa_municipality_current",
        quizVariantId: "var_north_macedonia_mavrovo_and_rostusa_municipality_current"
      },
      {
        id: "mem_north_macedonia_polog_statistical_region_flags_tetovo_municipality",
        collectionId: "col_north_macedonia_polog_statistical_region_flags",
        entityId: "ent_north_macedonia_tetovo_municipality",
        galleryVariantId: "var_north_macedonia_tetovo_municipality_current",
        quizVariantId: "var_north_macedonia_tetovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_polog_statistical_region_flags_zelino_municipality",
        collectionId: "col_north_macedonia_polog_statistical_region_flags",
        entityId: "ent_north_macedonia_zelino_municipality",
        galleryVariantId: "var_north_macedonia_zelino_municipality_current",
        quizVariantId: "var_north_macedonia_zelino_municipality_current"
      }
    ]
  },
    {
    id: "col_north_macedonia_skopje_statistical_region_flags",
    name: "North Macedonia — Skopje Statistical Region Flags",
    type: "manual",
    target: "entity",
    notes: "Uses the statistical region as a collection/grouping filter only; the statistical region itself is not modelled as a flag-bearing entity. Membership is listed manually so entity tags remain within the controlled tag registry.",
    members: [
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_aerodrom_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_aerodrom_city_municipality",
        galleryVariantId: "var_north_macedonia_aerodrom_city_municipality_current",
        quizVariantId: "var_north_macedonia_aerodrom_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_aracinovo_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_aracinovo_municipality",
        galleryVariantId: "var_north_macedonia_aracinovo_municipality_current",
        quizVariantId: "var_north_macedonia_aracinovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_butel_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_butel_city_municipality",
        galleryVariantId: "var_north_macedonia_butel_city_municipality_current",
        quizVariantId: "var_north_macedonia_butel_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_centar_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_centar_city_municipality",
        galleryVariantId: "var_north_macedonia_centar_city_municipality_current",
        quizVariantId: "var_north_macedonia_centar_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_city_of_skopje",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_city_of_skopje",
        galleryVariantId: "var_north_macedonia_city_of_skopje_current",
        quizVariantId: "var_north_macedonia_city_of_skopje_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_gazi_baba_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_gazi_baba_city_municipality",
        galleryVariantId: "var_north_macedonia_gazi_baba_city_municipality_current",
        quizVariantId: "var_north_macedonia_gazi_baba_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_gjorce_petrov_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_gjorce_petrov_city_municipality",
        galleryVariantId: "var_north_macedonia_gjorce_petrov_city_municipality_current",
        quizVariantId: "var_north_macedonia_gjorce_petrov_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_ilinden_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_ilinden_municipality",
        galleryVariantId: "var_north_macedonia_ilinden_municipality_current",
        quizVariantId: "var_north_macedonia_ilinden_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_karpos_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_karpos_city_municipality",
        galleryVariantId: "var_north_macedonia_karpos_city_municipality_current",
        quizVariantId: "var_north_macedonia_karpos_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_kisela_voda_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_kisela_voda_city_municipality",
        galleryVariantId: "var_north_macedonia_kisela_voda_city_municipality_current",
        quizVariantId: "var_north_macedonia_kisela_voda_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_petrovec_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_petrovec_municipality",
        galleryVariantId: "var_north_macedonia_petrovec_municipality_current",
        quizVariantId: "var_north_macedonia_petrovec_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_saraj_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_saraj_city_municipality",
        galleryVariantId: "var_north_macedonia_saraj_city_municipality_current",
        quizVariantId: "var_north_macedonia_saraj_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_sopiste_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_sopiste_municipality",
        galleryVariantId: "var_north_macedonia_sopiste_municipality_current",
        quizVariantId: "var_north_macedonia_sopiste_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_studenicani_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_studenicani_municipality",
        galleryVariantId: "var_north_macedonia_studenicani_municipality_current",
        quizVariantId: "var_north_macedonia_studenicani_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_zelenikovo_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_zelenikovo_municipality",
        galleryVariantId: "var_north_macedonia_zelenikovo_municipality_current",
        quizVariantId: "var_north_macedonia_zelenikovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_cair_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_cair_city_municipality",
        galleryVariantId: "var_north_macedonia_cair_city_municipality_current",
        quizVariantId: "var_north_macedonia_cair_city_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_cucer_sandevo_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_cucer_sandevo_municipality",
        galleryVariantId: "var_north_macedonia_cucer_sandevo_municipality_current",
        quizVariantId: "var_north_macedonia_cucer_sandevo_municipality_current"
      },
      {
        id: "mem_north_macedonia_skopje_statistical_region_flags_suto_orizari_city_municipality",
        collectionId: "col_north_macedonia_skopje_statistical_region_flags",
        entityId: "ent_north_macedonia_suto_orizari_city_municipality",
        galleryVariantId: "var_north_macedonia_suto_orizari_city_municipality_current",
        quizVariantId: "var_north_macedonia_suto_orizari_city_municipality_current"
      }
    ]
  },
    {
    id: "col_north_macedonia_southeastern_statistical_region_flags",
    name: "North Macedonia — Southeastern Statistical Region Flags",
    type: "manual",
    target: "entity",
    notes: "Uses the statistical region as a collection/grouping filter only; the statistical region itself is not modelled as a flag-bearing entity. Membership is listed manually so entity tags remain within the controlled tag registry.",
    members: [
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_bogdanci_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_bogdanci_municipality",
        galleryVariantId: "var_north_macedonia_bogdanci_municipality_current",
        quizVariantId: "var_north_macedonia_bogdanci_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_bosilovo_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_bosilovo_municipality",
        galleryVariantId: "var_north_macedonia_bosilovo_municipality_current",
        quizVariantId: "var_north_macedonia_bosilovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_dojran_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_dojran_municipality",
        galleryVariantId: "var_north_macedonia_dojran_municipality_current",
        quizVariantId: "var_north_macedonia_dojran_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_gevgelija_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_gevgelija_municipality",
        galleryVariantId: "var_north_macedonia_gevgelija_municipality_current",
        quizVariantId: "var_north_macedonia_gevgelija_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_konce_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_konce_municipality",
        galleryVariantId: "var_north_macedonia_konce_municipality_current",
        quizVariantId: "var_north_macedonia_konce_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_novo_selo_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_novo_selo_municipality",
        galleryVariantId: "var_north_macedonia_novo_selo_municipality_current",
        quizVariantId: "var_north_macedonia_novo_selo_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_radovis_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_radovis_municipality",
        galleryVariantId: "var_north_macedonia_radovis_municipality_current",
        quizVariantId: "var_north_macedonia_radovis_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_strumica_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_strumica_municipality",
        galleryVariantId: "var_north_macedonia_strumica_municipality_current",
        quizVariantId: "var_north_macedonia_strumica_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_valandovo_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_valandovo_municipality",
        galleryVariantId: "var_north_macedonia_valandovo_municipality_current",
        quizVariantId: "var_north_macedonia_valandovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_southeastern_statistical_region_flags_vasilevo_municipality",
        collectionId: "col_north_macedonia_southeastern_statistical_region_flags",
        entityId: "ent_north_macedonia_vasilevo_municipality",
        galleryVariantId: "var_north_macedonia_vasilevo_municipality_current",
        quizVariantId: "var_north_macedonia_vasilevo_municipality_current"
      }
    ]
  },
    {
    id: "col_north_macedonia_southwestern_statistical_region_flags",
    name: "North Macedonia — Southwestern Statistical Region Flags",
    type: "manual",
    target: "entity",
    notes: "Uses the statistical region as a collection/grouping filter only; the statistical region itself is not modelled as a flag-bearing entity. Membership is listed manually so entity tags remain within the controlled tag registry.",
    members: [
      {
        id: "mem_north_macedonia_southwestern_statistical_region_flags_centar_zupa_municipality",
        collectionId: "col_north_macedonia_southwestern_statistical_region_flags",
        entityId: "ent_north_macedonia_centar_zupa_municipality",
        galleryVariantId: "var_north_macedonia_centar_zupa_municipality_current",
        quizVariantId: "var_north_macedonia_centar_zupa_municipality_current"
      },
      {
        id: "mem_north_macedonia_southwestern_statistical_region_flags_debarca_municipality",
        collectionId: "col_north_macedonia_southwestern_statistical_region_flags",
        entityId: "ent_north_macedonia_debarca_municipality",
        galleryVariantId: "var_north_macedonia_debarca_municipality_current",
        quizVariantId: "var_north_macedonia_debarca_municipality_current"
      },
      {
        id: "mem_north_macedonia_southwestern_statistical_region_flags_makedonski_brod_municipality",
        collectionId: "col_north_macedonia_southwestern_statistical_region_flags",
        entityId: "ent_north_macedonia_makedonski_brod_municipality",
        galleryVariantId: "var_north_macedonia_makedonski_brod_municipality_current",
        quizVariantId: "var_north_macedonia_makedonski_brod_municipality_current"
      },
      {
        id: "mem_north_macedonia_southwestern_statistical_region_flags_ohrid_municipality",
        collectionId: "col_north_macedonia_southwestern_statistical_region_flags",
        entityId: "ent_north_macedonia_ohrid_municipality",
        galleryVariantId: "var_north_macedonia_ohrid_municipality_current",
        quizVariantId: "var_north_macedonia_ohrid_municipality_current"
      },
      {
        id: "mem_north_macedonia_southwestern_statistical_region_flags_plasnica_municipality",
        collectionId: "col_north_macedonia_southwestern_statistical_region_flags",
        entityId: "ent_north_macedonia_plasnica_municipality",
        galleryVariantId: "var_north_macedonia_plasnica_municipality_current",
        quizVariantId: "var_north_macedonia_plasnica_municipality_current"
      },
      {
        id: "mem_north_macedonia_southwestern_statistical_region_flags_vevcani_municipality",
        collectionId: "col_north_macedonia_southwestern_statistical_region_flags",
        entityId: "ent_north_macedonia_vevcani_municipality",
        galleryVariantId: "var_north_macedonia_vevcani_municipality_current",
        quizVariantId: "var_north_macedonia_vevcani_municipality_current"
      }
    ]
  },
    {
    id: "col_north_macedonia_vardar_statistical_region_flags",
    name: "North Macedonia — Vardar Statistical Region Flags",
    type: "manual",
    target: "entity",
    notes: "Uses the statistical region as a collection/grouping filter only; the statistical region itself is not modelled as a flag-bearing entity. Membership is listed manually so entity tags remain within the controlled tag registry.",
    members: [
      {
        id: "mem_north_macedonia_vardar_statistical_region_flags_demir_kapija_municipality",
        collectionId: "col_north_macedonia_vardar_statistical_region_flags",
        entityId: "ent_north_macedonia_demir_kapija_municipality",
        galleryVariantId: "var_north_macedonia_demir_kapija_municipality_current",
        quizVariantId: "var_north_macedonia_demir_kapija_municipality_current"
      },
      {
        id: "mem_north_macedonia_vardar_statistical_region_flags_kavadarci_municipality",
        collectionId: "col_north_macedonia_vardar_statistical_region_flags",
        entityId: "ent_north_macedonia_kavadarci_municipality",
        galleryVariantId: "var_north_macedonia_kavadarci_municipality_current",
        quizVariantId: "var_north_macedonia_kavadarci_municipality_current"
      },
      {
        id: "mem_north_macedonia_vardar_statistical_region_flags_lozovo_municipality",
        collectionId: "col_north_macedonia_vardar_statistical_region_flags",
        entityId: "ent_north_macedonia_lozovo_municipality",
        galleryVariantId: "var_north_macedonia_lozovo_municipality_current",
        quizVariantId: "var_north_macedonia_lozovo_municipality_current"
      },
      {
        id: "mem_north_macedonia_vardar_statistical_region_flags_negotino_municipality",
        collectionId: "col_north_macedonia_vardar_statistical_region_flags",
        entityId: "ent_north_macedonia_negotino_municipality",
        galleryVariantId: "var_north_macedonia_negotino_municipality_current",
        quizVariantId: "var_north_macedonia_negotino_municipality_current"
      },
      {
        id: "mem_north_macedonia_vardar_statistical_region_flags_rosoman_municipality",
        collectionId: "col_north_macedonia_vardar_statistical_region_flags",
        entityId: "ent_north_macedonia_rosoman_municipality",
        galleryVariantId: "var_north_macedonia_rosoman_municipality_current",
        quizVariantId: "var_north_macedonia_rosoman_municipality_current"
      },
      {
        id: "mem_north_macedonia_vardar_statistical_region_flags_veles_municipality",
        collectionId: "col_north_macedonia_vardar_statistical_region_flags",
        entityId: "ent_north_macedonia_veles_municipality",
        galleryVariantId: "var_north_macedonia_veles_municipality_current",
        quizVariantId: "var_north_macedonia_veles_municipality_current"
      },
      {
        id: "mem_north_macedonia_vardar_statistical_region_flags_caska_municipality",
        collectionId: "col_north_macedonia_vardar_statistical_region_flags",
        entityId: "ent_north_macedonia_caska_municipality",
        galleryVariantId: "var_north_macedonia_caska_municipality_current",
        quizVariantId: "var_north_macedonia_caska_municipality_current"
      }
    ]
  },

  {
    id: "col_bulgaria_first_level_subdivisions",
    name: "Bulgarian Provincial Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes the currently available Bulgarian provincial flags. Provinces without sufficiently high-quality source artwork are intentionally omitted until rebuilt or replaced.",
    rules: {
      all: [
        {
          hasAncestor: "ent_bulgaria"
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
    id: "col_hungary_first_level_subdivisions",
    name: "Hungarian County and Capital City Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes the 19 Hungarian counties and Budapest as current first-level subdivisions.",
    rules: {
      all: [
        {
          hasAncestor: "ent_hungary"
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
    id: "col_romania_first_level_subdivisions",
    name: "Romanian County and Bucharest Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes currently available Romanian county flags and the Municipality of Bucharest as first-level subdivisions.",
    rules: {
      all: [
        {
          hasAncestor: "ent_romania"
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
    id: "col_slovakia_regions",
    name: "Slovak Regional Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes the currently available Slovak self-governing regions, or kraje, as first-level subdivisions.",
    rules: {
      all: [
        {
          hasAncestor: "ent_slovakia"
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
    id: "col_san_marino_castelli",
    name: "San Marino Castelli Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes San Marino's nine castelli with available current flags.",
    rules: {
      all: [
        {
          hasAncestor: "ent_san_marino"
        },
        {
          hasTag: "municipality"
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
    id: "col_portugal_autonomous_regions",
    name: "Portuguese Autonomous Region Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes Portugal's two autonomous regions. Azores and Madeira are geographically modelled outside mainland Portugal, so they are included explicitly while remaining constituent parts of Portugal.",
    rules: {
      all: [
        {
          hasAncestor: "ent_portugal"
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
      "ent_azores",
      "ent_madeira"
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
    id: "col_nordic_council_flag",
    name: "Nordic Council Flag",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_nordic_council_flag",
        collectionId: "col_nordic_council_flag",
        entityId: "ent_nordic_council",
        galleryVariantId: "var_nordic_council_current",
        quizVariantId: "var_nordic_council_current"
      }
    ]
  },
  {
    id: "col_nordic_council_member_flags",
    name: "Nordic Council Member Flags",
    type: "manual",
    target: "entity",
    notes: "Nordic Council membership-style browsing set: the five Nordic sovereign states plus the Faroe Islands, Greenland and Åland.",
    members: [
      {
        id: "mem_nordic_council_denmark",
        collectionId: "col_nordic_council_member_flags",
        entityId: "ent_denmark",
        galleryVariantId: "var_denmark_current",
        quizVariantId: "var_denmark_current"
      },
      {
        id: "mem_nordic_council_finland",
        collectionId: "col_nordic_council_member_flags",
        entityId: "ent_finland",
        galleryVariantId: "var_finland_current",
        quizVariantId: "var_finland_current"
      },
      {
        id: "mem_nordic_council_iceland",
        collectionId: "col_nordic_council_member_flags",
        entityId: "ent_iceland",
        galleryVariantId: "var_iceland_current",
        quizVariantId: "var_iceland_current"
      },
      {
        id: "mem_nordic_council_norway",
        collectionId: "col_nordic_council_member_flags",
        entityId: "ent_norway",
        galleryVariantId: "var_norway_current",
        quizVariantId: "var_norway_current"
      },
      {
        id: "mem_nordic_council_sweden",
        collectionId: "col_nordic_council_member_flags",
        entityId: "ent_sweden",
        galleryVariantId: "var_sweden_current",
        quizVariantId: "var_sweden_current"
      },
      {
        id: "mem_nordic_council_faroe_islands",
        collectionId: "col_nordic_council_member_flags",
        entityId: "ent_faroe_islands",
        galleryVariantId: "var_faroe_islands_current",
        quizVariantId: "var_faroe_islands_current"
      },
      {
        id: "mem_nordic_council_greenland",
        collectionId: "col_nordic_council_member_flags",
        entityId: "ent_greenland",
        galleryVariantId: "var_greenland_current",
        quizVariantId: "var_greenland_current"
      },
      {
        id: "mem_nordic_council_aland",
        collectionId: "col_nordic_council_member_flags",
        entityId: "ent_aland",
        galleryVariantId: "var_aland_current",
        quizVariantId: "var_aland_current"
      }
    ]
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


  {
    id: "col_commonwealth_member_state_flags",
    name: "Commonwealth of Nations Member State Flags",
    type: "dynamic",
    target: "entity",
    notes: "Membership-driven collection. Commonwealth membership is stored in entityMemberships.js so cross-regional Commonwealth members can remain geographically modelled by their actual regions.",
    rules: {
      all: [
        {
          memberOf: "ent_commonwealth_of_nations",
          membershipStatus: "current"
        },
        {
          hasDefaultVariant: true
        }
      ]
    }
  },


  {
    id: "col_fifa_member_association_flags",
    name: "FIFA Member Association Flags",
    type: "manual",
    target: "entity",
    notes: "Manual membership-driven collection for FIFA's 211 current member associations. Manual members are used here so Taiwan can display the Chinese Taipei sporting flag and Tahiti can be represented separately from French Polynesia.",
    members: [
      {
        id: "mem_fifa_member_association_flags_afghanistan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_afghanistan",
        galleryVariantId: "var_afghanistan_current",
        quizVariantId: "var_afghanistan_current"
      },
      {
        id: "mem_fifa_member_association_flags_albania",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_albania",
        galleryVariantId: "var_albania_current",
        quizVariantId: "var_albania_current"
      },
      {
        id: "mem_fifa_member_association_flags_algeria",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_algeria",
        galleryVariantId: "var_algeria_current",
        quizVariantId: "var_algeria_current"
      },
      {
        id: "mem_fifa_member_association_flags_american_samoa",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_american_samoa",
        galleryVariantId: "var_american_samoa_current",
        quizVariantId: "var_american_samoa_current"
      },
      {
        id: "mem_fifa_member_association_flags_andorra",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_andorra",
        galleryVariantId: "var_andorra_current",
        quizVariantId: "var_andorra_current"
      },
      {
        id: "mem_fifa_member_association_flags_angola",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_angola",
        galleryVariantId: "var_angola_current",
        quizVariantId: "var_angola_current"
      },
      {
        id: "mem_fifa_member_association_flags_anguilla",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_anguilla",
        galleryVariantId: "var_anguilla_current",
        quizVariantId: "var_anguilla_current"
      },
      {
        id: "mem_fifa_member_association_flags_antigua_and_barbuda",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_antigua_and_barbuda",
        galleryVariantId: "var_antigua_and_barbuda_current",
        quizVariantId: "var_antigua_and_barbuda_current"
      },
      {
        id: "mem_fifa_member_association_flags_argentina",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_argentina",
        galleryVariantId: "var_argentina_current",
        quizVariantId: "var_argentina_current"
      },
      {
        id: "mem_fifa_member_association_flags_armenia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_armenia",
        galleryVariantId: "var_armenia_current",
        quizVariantId: "var_armenia_current"
      },
      {
        id: "mem_fifa_member_association_flags_aruba",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_aruba",
        galleryVariantId: "var_aruba_current",
        quizVariantId: "var_aruba_current"
      },
      {
        id: "mem_fifa_member_association_flags_australia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_australia",
        galleryVariantId: "var_australia_current",
        quizVariantId: "var_australia_current"
      },
      {
        id: "mem_fifa_member_association_flags_austria",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_austria",
        galleryVariantId: "var_austria_current",
        quizVariantId: "var_austria_current"
      },
      {
        id: "mem_fifa_member_association_flags_azerbaijan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_azerbaijan",
        galleryVariantId: "var_azerbaijan_current",
        quizVariantId: "var_azerbaijan_current"
      },
      {
        id: "mem_fifa_member_association_flags_bahamas",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_bahamas",
        galleryVariantId: "var_bahamas_current",
        quizVariantId: "var_bahamas_current"
      },
      {
        id: "mem_fifa_member_association_flags_bahrain",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_bahrain",
        galleryVariantId: "var_bahrain_current",
        quizVariantId: "var_bahrain_current"
      },
      {
        id: "mem_fifa_member_association_flags_bangladesh",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_bangladesh",
        galleryVariantId: "var_bangladesh_current",
        quizVariantId: "var_bangladesh_current"
      },
      {
        id: "mem_fifa_member_association_flags_barbados",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_barbados",
        galleryVariantId: "var_barbados_current",
        quizVariantId: "var_barbados_current"
      },
      {
        id: "mem_fifa_member_association_flags_belarus",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_belarus",
        galleryVariantId: "var_belarus_current",
        quizVariantId: "var_belarus_current"
      },
      {
        id: "mem_fifa_member_association_flags_belgium",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_belgium",
        galleryVariantId: "var_belgium_current",
        quizVariantId: "var_belgium_current"
      },
      {
        id: "mem_fifa_member_association_flags_belize",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_belize",
        galleryVariantId: "var_belize_current",
        quizVariantId: "var_belize_current"
      },
      {
        id: "mem_fifa_member_association_flags_benin",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_benin",
        galleryVariantId: "var_benin_current",
        quizVariantId: "var_benin_current"
      },
      {
        id: "mem_fifa_member_association_flags_bermuda",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_bermuda",
        galleryVariantId: "var_bermuda_current",
        quizVariantId: "var_bermuda_current"
      },
      {
        id: "mem_fifa_member_association_flags_bhutan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_bhutan",
        galleryVariantId: "var_bhutan_current",
        quizVariantId: "var_bhutan_current"
      },
      {
        id: "mem_fifa_member_association_flags_bolivia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_bolivia",
        galleryVariantId: "var_bolivia_civil",
        quizVariantId: "var_bolivia_civil"
      },
      {
        id: "mem_fifa_member_association_flags_bosnia_and_herzegovina",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_bosnia_and_herzegovina",
        galleryVariantId: "var_bosnia_and_herzegovina_current",
        quizVariantId: "var_bosnia_and_herzegovina_current"
      },
      {
        id: "mem_fifa_member_association_flags_botswana",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_botswana",
        galleryVariantId: "var_botswana_current",
        quizVariantId: "var_botswana_current"
      },
      {
        id: "mem_fifa_member_association_flags_brazil",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_brazil",
        galleryVariantId: "var_brazil_current",
        quizVariantId: "var_brazil_current"
      },
      {
        id: "mem_fifa_member_association_flags_british_virgin_islands",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_british_virgin_islands",
        galleryVariantId: "var_british_virgin_islands_current",
        quizVariantId: "var_british_virgin_islands_current"
      },
      {
        id: "mem_fifa_member_association_flags_brunei",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_brunei",
        galleryVariantId: "var_brunei_current",
        quizVariantId: "var_brunei_current"
      },
      {
        id: "mem_fifa_member_association_flags_bulgaria",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_bulgaria",
        galleryVariantId: "var_bulgaria_current",
        quizVariantId: "var_bulgaria_current"
      },
      {
        id: "mem_fifa_member_association_flags_burkina_faso",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_burkina_faso",
        galleryVariantId: "var_burkina_faso_current",
        quizVariantId: "var_burkina_faso_current"
      },
      {
        id: "mem_fifa_member_association_flags_burundi",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_burundi",
        galleryVariantId: "var_burundi_current",
        quizVariantId: "var_burundi_current"
      },
      {
        id: "mem_fifa_member_association_flags_cambodia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_cambodia",
        galleryVariantId: "var_cambodia_current",
        quizVariantId: "var_cambodia_current"
      },
      {
        id: "mem_fifa_member_association_flags_cameroon",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_cameroon",
        galleryVariantId: "var_cameroon_current",
        quizVariantId: "var_cameroon_current"
      },
      {
        id: "mem_fifa_member_association_flags_canada",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_canada",
        galleryVariantId: "var_canada_current",
        quizVariantId: "var_canada_current"
      },
      {
        id: "mem_fifa_member_association_flags_cabo_verde",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_cabo_verde",
        galleryVariantId: "var_cabo_verde_current",
        quizVariantId: "var_cabo_verde_current"
      },
      {
        id: "mem_fifa_member_association_flags_cayman_islands",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_cayman_islands",
        galleryVariantId: "var_cayman_islands_current",
        quizVariantId: "var_cayman_islands_current"
      },
      {
        id: "mem_fifa_member_association_flags_central_african_republic",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_central_african_republic",
        galleryVariantId: "var_central_african_republic_current",
        quizVariantId: "var_central_african_republic_current"
      },
      {
        id: "mem_fifa_member_association_flags_chad",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_chad",
        galleryVariantId: "var_chad_current",
        quizVariantId: "var_chad_current"
      },
      {
        id: "mem_fifa_member_association_flags_chile",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_chile",
        galleryVariantId: "var_chile_current",
        quizVariantId: "var_chile_current"
      },
      {
        id: "mem_fifa_member_association_flags_china",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_china",
        galleryVariantId: "var_china_current",
        quizVariantId: "var_china_current"
      },
      {
        id: "mem_fifa_member_association_flags_taiwan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_taiwan",
        galleryVariantId: "var_taiwan_chinese_taipei_current",
        quizVariantId: "var_taiwan_chinese_taipei_current",
        notes: "FIFA uses the Chinese Taipei sporting representation for Taiwan."
      },
      {
        id: "mem_fifa_member_association_flags_colombia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_colombia",
        galleryVariantId: "var_colombia_current",
        quizVariantId: "var_colombia_current"
      },
      {
        id: "mem_fifa_member_association_flags_comoros",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_comoros",
        galleryVariantId: "var_comoros_current",
        quizVariantId: "var_comoros_current"
      },
      {
        id: "mem_fifa_member_association_flags_republic_of_the_congo",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_republic_of_the_congo",
        galleryVariantId: "var_republic_of_the_congo_current",
        quizVariantId: "var_republic_of_the_congo_current"
      },
      {
        id: "mem_fifa_member_association_flags_cook_islands",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_cook_islands",
        galleryVariantId: "var_cook_islands_current",
        quizVariantId: "var_cook_islands_current"
      },
      {
        id: "mem_fifa_member_association_flags_costa_rica",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_costa_rica",
        galleryVariantId: "var_costa_rica_current",
        quizVariantId: "var_costa_rica_current"
      },
      {
        id: "mem_fifa_member_association_flags_croatia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_croatia",
        galleryVariantId: "var_croatia_current",
        quizVariantId: "var_croatia_current"
      },
      {
        id: "mem_fifa_member_association_flags_cuba",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_cuba",
        galleryVariantId: "var_cuba_current",
        quizVariantId: "var_cuba_current"
      },
      {
        id: "mem_fifa_member_association_flags_curacao",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_curacao",
        galleryVariantId: "var_curacao_current",
        quizVariantId: "var_curacao_current"
      },
      {
        id: "mem_fifa_member_association_flags_cyprus",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_cyprus",
        galleryVariantId: "var_cyprus_current",
        quizVariantId: "var_cyprus_current"
      },
      {
        id: "mem_fifa_member_association_flags_czechia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_czechia",
        galleryVariantId: "var_czechia_current",
        quizVariantId: "var_czechia_current"
      },
      {
        id: "mem_fifa_member_association_flags_denmark",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_denmark",
        galleryVariantId: "var_denmark_current",
        quizVariantId: "var_denmark_current"
      },
      {
        id: "mem_fifa_member_association_flags_djibouti",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_djibouti",
        galleryVariantId: "var_djibouti_current",
        quizVariantId: "var_djibouti_current"
      },
      {
        id: "mem_fifa_member_association_flags_dominica",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_dominica",
        galleryVariantId: "var_dominica_current",
        quizVariantId: "var_dominica_current"
      },
      {
        id: "mem_fifa_member_association_flags_dominican_republic",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_dominican_republic",
        galleryVariantId: "var_dominican_republic_current",
        quizVariantId: "var_dominican_republic_current"
      },
      {
        id: "mem_fifa_member_association_flags_democratic_republic_of_the_congo",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_democratic_republic_of_the_congo",
        galleryVariantId: "var_democratic_republic_of_the_congo_current",
        quizVariantId: "var_democratic_republic_of_the_congo_current"
      },
      {
        id: "mem_fifa_member_association_flags_ecuador",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_ecuador",
        galleryVariantId: "var_ecuador_current",
        quizVariantId: "var_ecuador_current"
      },
      {
        id: "mem_fifa_member_association_flags_egypt",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_egypt",
        galleryVariantId: "var_egypt_current",
        quizVariantId: "var_egypt_current"
      },
      {
        id: "mem_fifa_member_association_flags_el_salvador",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_el_salvador",
        galleryVariantId: "var_el_salvador_current",
        quizVariantId: "var_el_salvador_current"
      },
      {
        id: "mem_fifa_member_association_flags_england",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_england",
        galleryVariantId: "var_england_current",
        quizVariantId: "var_england_current"
      },
      {
        id: "mem_fifa_member_association_flags_equatorial_guinea",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_equatorial_guinea",
        galleryVariantId: "var_equatorial_guinea_current",
        quizVariantId: "var_equatorial_guinea_current"
      },
      {
        id: "mem_fifa_member_association_flags_eritrea",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_eritrea",
        galleryVariantId: "var_eritrea_current",
        quizVariantId: "var_eritrea_current"
      },
      {
        id: "mem_fifa_member_association_flags_estonia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_estonia",
        galleryVariantId: "var_estonia_current",
        quizVariantId: "var_estonia_current"
      },
      {
        id: "mem_fifa_member_association_flags_eswatini",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_eswatini",
        galleryVariantId: "var_eswatini_current",
        quizVariantId: "var_eswatini_current"
      },
      {
        id: "mem_fifa_member_association_flags_ethiopia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_ethiopia",
        galleryVariantId: "var_ethiopia_current",
        quizVariantId: "var_ethiopia_current"
      },
      {
        id: "mem_fifa_member_association_flags_faroe_islands",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_faroe_islands",
        galleryVariantId: "var_faroe_islands_current",
        quizVariantId: "var_faroe_islands_current"
      },
      {
        id: "mem_fifa_member_association_flags_fiji",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_fiji",
        galleryVariantId: "var_fiji_current",
        quizVariantId: "var_fiji_current"
      },
      {
        id: "mem_fifa_member_association_flags_finland",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_finland",
        galleryVariantId: "var_finland_current",
        quizVariantId: "var_finland_current"
      },
      {
        id: "mem_fifa_member_association_flags_france",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_france",
        galleryVariantId: "var_france_current",
        quizVariantId: "var_france_current"
      },
      {
        id: "mem_fifa_member_association_flags_gabon",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_gabon",
        galleryVariantId: "var_gabon_current",
        quizVariantId: "var_gabon_current"
      },
      {
        id: "mem_fifa_member_association_flags_gambia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_gambia",
        galleryVariantId: "var_gambia_current",
        quizVariantId: "var_gambia_current"
      },
      {
        id: "mem_fifa_member_association_flags_georgia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_georgia",
        galleryVariantId: "var_georgia_current",
        quizVariantId: "var_georgia_current"
      },
      {
        id: "mem_fifa_member_association_flags_germany",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_germany",
        galleryVariantId: "var_germany_current",
        quizVariantId: "var_germany_current"
      },
      {
        id: "mem_fifa_member_association_flags_ghana",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_ghana",
        galleryVariantId: "var_ghana_current",
        quizVariantId: "var_ghana_current"
      },
      {
        id: "mem_fifa_member_association_flags_gibraltar",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_gibraltar",
        galleryVariantId: "var_gibraltar_current",
        quizVariantId: "var_gibraltar_current"
      },
      {
        id: "mem_fifa_member_association_flags_greece",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_greece",
        galleryVariantId: "var_greece_current",
        quizVariantId: "var_greece_current"
      },
      {
        id: "mem_fifa_member_association_flags_grenada",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_grenada",
        galleryVariantId: "var_grenada_current",
        quizVariantId: "var_grenada_current"
      },
      {
        id: "mem_fifa_member_association_flags_guam",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_guam",
        galleryVariantId: "var_guam_current",
        quizVariantId: "var_guam_current"
      },
      {
        id: "mem_fifa_member_association_flags_guatemala",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_guatemala",
        galleryVariantId: "var_guatemala_current",
        quizVariantId: "var_guatemala_current"
      },
      {
        id: "mem_fifa_member_association_flags_guinea",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_guinea",
        galleryVariantId: "var_guinea_current",
        quizVariantId: "var_guinea_current"
      },
      {
        id: "mem_fifa_member_association_flags_guinea_bissau",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_guinea_bissau",
        galleryVariantId: "var_guinea_bissau_current",
        quizVariantId: "var_guinea_bissau_current"
      },
      {
        id: "mem_fifa_member_association_flags_guyana",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_guyana",
        galleryVariantId: "var_guyana_current",
        quizVariantId: "var_guyana_current"
      },
      {
        id: "mem_fifa_member_association_flags_haiti",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_haiti",
        galleryVariantId: "var_haiti_current",
        quizVariantId: "var_haiti_current"
      },
      {
        id: "mem_fifa_member_association_flags_honduras",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_honduras",
        galleryVariantId: "var_honduras_current",
        quizVariantId: "var_honduras_current"
      },
      {
        id: "mem_fifa_member_association_flags_hong_kong",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_hong_kong",
        galleryVariantId: "var_hong_kong_current",
        quizVariantId: "var_hong_kong_current"
      },
      {
        id: "mem_fifa_member_association_flags_hungary",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_hungary",
        galleryVariantId: "var_hungary_current",
        quizVariantId: "var_hungary_current"
      },
      {
        id: "mem_fifa_member_association_flags_iceland",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_iceland",
        galleryVariantId: "var_iceland_current",
        quizVariantId: "var_iceland_current"
      },
      {
        id: "mem_fifa_member_association_flags_india",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_india",
        galleryVariantId: "var_india_current",
        quizVariantId: "var_india_current"
      },
      {
        id: "mem_fifa_member_association_flags_indonesia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_indonesia",
        galleryVariantId: "var_indonesia_current",
        quizVariantId: "var_indonesia_current"
      },
      {
        id: "mem_fifa_member_association_flags_iran",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_iran",
        galleryVariantId: "var_iran_current",
        quizVariantId: "var_iran_current"
      },
      {
        id: "mem_fifa_member_association_flags_iraq",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_iraq",
        galleryVariantId: "var_iraq_current",
        quizVariantId: "var_iraq_current"
      },
      {
        id: "mem_fifa_member_association_flags_israel",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_israel",
        galleryVariantId: "var_israel_current",
        quizVariantId: "var_israel_current"
      },
      {
        id: "mem_fifa_member_association_flags_italy",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_italy",
        galleryVariantId: "var_italy_current",
        quizVariantId: "var_italy_current"
      },
      {
        id: "mem_fifa_member_association_flags_cote_d_ivoire",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_cote_d_ivoire",
        galleryVariantId: "var_cote_d_ivoire_current",
        quizVariantId: "var_cote_d_ivoire_current"
      },
      {
        id: "mem_fifa_member_association_flags_jamaica",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_jamaica",
        galleryVariantId: "var_jamaica_current",
        quizVariantId: "var_jamaica_current"
      },
      {
        id: "mem_fifa_member_association_flags_japan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_japan",
        galleryVariantId: "var_japan_current",
        quizVariantId: "var_japan_current"
      },
      {
        id: "mem_fifa_member_association_flags_jordan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_jordan",
        galleryVariantId: "var_jordan_current",
        quizVariantId: "var_jordan_current"
      },
      {
        id: "mem_fifa_member_association_flags_kazakhstan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_kazakhstan",
        galleryVariantId: "var_kazakhstan_current",
        quizVariantId: "var_kazakhstan_current"
      },
      {
        id: "mem_fifa_member_association_flags_kenya",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_kenya",
        galleryVariantId: "var_kenya_current",
        quizVariantId: "var_kenya_current"
      },
      {
        id: "mem_fifa_member_association_flags_kosovo",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_kosovo",
        galleryVariantId: "var_kosovo_current",
        quizVariantId: "var_kosovo_current"
      },
      {
        id: "mem_fifa_member_association_flags_kuwait",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_kuwait",
        galleryVariantId: "var_kuwait_current",
        quizVariantId: "var_kuwait_current"
      },
      {
        id: "mem_fifa_member_association_flags_kyrgyzstan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_kyrgyzstan",
        galleryVariantId: "var_kyrgyzstan_current",
        quizVariantId: "var_kyrgyzstan_current"
      },
      {
        id: "mem_fifa_member_association_flags_laos",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_laos",
        galleryVariantId: "var_laos_current",
        quizVariantId: "var_laos_current"
      },
      {
        id: "mem_fifa_member_association_flags_latvia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_latvia",
        galleryVariantId: "var_latvia_current",
        quizVariantId: "var_latvia_current"
      },
      {
        id: "mem_fifa_member_association_flags_lebanon",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_lebanon",
        galleryVariantId: "var_lebanon_current",
        quizVariantId: "var_lebanon_current"
      },
      {
        id: "mem_fifa_member_association_flags_lesotho",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_lesotho",
        galleryVariantId: "var_lesotho_current",
        quizVariantId: "var_lesotho_current"
      },
      {
        id: "mem_fifa_member_association_flags_liberia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_liberia",
        galleryVariantId: "var_liberia_current",
        quizVariantId: "var_liberia_current"
      },
      {
        id: "mem_fifa_member_association_flags_libya",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_libya",
        galleryVariantId: "var_libya_current",
        quizVariantId: "var_libya_current"
      },
      {
        id: "mem_fifa_member_association_flags_liechtenstein",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_liechtenstein",
        galleryVariantId: "var_liechtenstein_current",
        quizVariantId: "var_liechtenstein_current"
      },
      {
        id: "mem_fifa_member_association_flags_lithuania",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_lithuania",
        galleryVariantId: "var_lithuania_current",
        quizVariantId: "var_lithuania_current"
      },
      {
        id: "mem_fifa_member_association_flags_luxembourg",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_luxembourg",
        galleryVariantId: "var_luxembourg_current",
        quizVariantId: "var_luxembourg_current"
      },
      {
        id: "mem_fifa_member_association_flags_macao",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_macao",
        galleryVariantId: "var_macao_current",
        quizVariantId: "var_macao_current"
      },
      {
        id: "mem_fifa_member_association_flags_madagascar",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_madagascar",
        galleryVariantId: "var_madagascar_current",
        quizVariantId: "var_madagascar_current"
      },
      {
        id: "mem_fifa_member_association_flags_malawi",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_malawi",
        galleryVariantId: "var_malawi_current",
        quizVariantId: "var_malawi_current"
      },
      {
        id: "mem_fifa_member_association_flags_malaysia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_malaysia",
        galleryVariantId: "var_malaysia_current",
        quizVariantId: "var_malaysia_current"
      },
      {
        id: "mem_fifa_member_association_flags_maldives",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_maldives",
        galleryVariantId: "var_maldives_current",
        quizVariantId: "var_maldives_current"
      },
      {
        id: "mem_fifa_member_association_flags_mali",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_mali",
        galleryVariantId: "var_mali_current",
        quizVariantId: "var_mali_current"
      },
      {
        id: "mem_fifa_member_association_flags_malta",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_malta",
        galleryVariantId: "var_malta_current",
        quizVariantId: "var_malta_current"
      },
      {
        id: "mem_fifa_member_association_flags_mauritania",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_mauritania",
        galleryVariantId: "var_mauritania_current",
        quizVariantId: "var_mauritania_current"
      },
      {
        id: "mem_fifa_member_association_flags_mauritius",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_mauritius",
        galleryVariantId: "var_mauritius_current",
        quizVariantId: "var_mauritius_current"
      },
      {
        id: "mem_fifa_member_association_flags_mexico",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_mexico",
        galleryVariantId: "var_mexico_current",
        quizVariantId: "var_mexico_current"
      },
      {
        id: "mem_fifa_member_association_flags_moldova",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_moldova",
        galleryVariantId: "var_moldova_current",
        quizVariantId: "var_moldova_current"
      },
      {
        id: "mem_fifa_member_association_flags_mongolia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_mongolia",
        galleryVariantId: "var_mongolia_current",
        quizVariantId: "var_mongolia_current"
      },
      {
        id: "mem_fifa_member_association_flags_montenegro",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_montenegro",
        galleryVariantId: "var_montenegro_current",
        quizVariantId: "var_montenegro_current"
      },
      {
        id: "mem_fifa_member_association_flags_montserrat",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_montserrat",
        galleryVariantId: "var_montserrat_current",
        quizVariantId: "var_montserrat_current"
      },
      {
        id: "mem_fifa_member_association_flags_morocco",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_morocco",
        galleryVariantId: "var_morocco_current",
        quizVariantId: "var_morocco_current"
      },
      {
        id: "mem_fifa_member_association_flags_mozambique",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_mozambique",
        galleryVariantId: "var_mozambique_current",
        quizVariantId: "var_mozambique_current"
      },
      {
        id: "mem_fifa_member_association_flags_myanmar",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_myanmar",
        galleryVariantId: "var_myanmar_current",
        quizVariantId: "var_myanmar_current"
      },
      {
        id: "mem_fifa_member_association_flags_namibia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_namibia",
        galleryVariantId: "var_namibia_current",
        quizVariantId: "var_namibia_current"
      },
      {
        id: "mem_fifa_member_association_flags_nepal",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_nepal",
        galleryVariantId: "var_nepal_current",
        quizVariantId: "var_nepal_current"
      },
      {
        id: "mem_fifa_member_association_flags_netherlands",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_netherlands",
        galleryVariantId: "var_netherlands_current",
        quizVariantId: "var_netherlands_current"
      },
      {
        id: "mem_fifa_member_association_flags_new_caledonia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_new_caledonia",
        galleryVariantId: "var_new_caledonia_kanak_current_unofficial",
        quizVariantId: "var_new_caledonia_kanak_current_unofficial"
      },
      {
        id: "mem_fifa_member_association_flags_new_zealand",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_new_zealand",
        galleryVariantId: "var_new_zealand_current",
        quizVariantId: "var_new_zealand_current"
      },
      {
        id: "mem_fifa_member_association_flags_nicaragua",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_nicaragua",
        galleryVariantId: "var_nicaragua_current",
        quizVariantId: "var_nicaragua_current"
      },
      {
        id: "mem_fifa_member_association_flags_niger",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_niger",
        galleryVariantId: "var_niger_current",
        quizVariantId: "var_niger_current"
      },
      {
        id: "mem_fifa_member_association_flags_nigeria",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_nigeria",
        galleryVariantId: "var_nigeria_current",
        quizVariantId: "var_nigeria_current"
      },
      {
        id: "mem_fifa_member_association_flags_north_korea",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_north_korea",
        galleryVariantId: "var_north_korea_current",
        quizVariantId: "var_north_korea_current"
      },
      {
        id: "mem_fifa_member_association_flags_north_macedonia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_north_macedonia",
        galleryVariantId: "var_north_macedonia_current",
        quizVariantId: "var_north_macedonia_current"
      },
      {
        id: "mem_fifa_member_association_flags_northern_ireland",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_northern_ireland",
        galleryVariantId: "var_northern_ireland_unofficial",
        quizVariantId: "var_northern_ireland_unofficial"
      },
      {
        id: "mem_fifa_member_association_flags_norway",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_norway",
        galleryVariantId: "var_norway_current",
        quizVariantId: "var_norway_current"
      },
      {
        id: "mem_fifa_member_association_flags_oman",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_oman",
        galleryVariantId: "var_oman_current",
        quizVariantId: "var_oman_current"
      },
      {
        id: "mem_fifa_member_association_flags_pakistan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_pakistan",
        galleryVariantId: "var_pakistan_current",
        quizVariantId: "var_pakistan_current"
      },
      {
        id: "mem_fifa_member_association_flags_palestine",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_palestine",
        galleryVariantId: "var_palestine_current",
        quizVariantId: "var_palestine_current"
      },
      {
        id: "mem_fifa_member_association_flags_panama",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_panama",
        galleryVariantId: "var_panama_current",
        quizVariantId: "var_panama_current"
      },
      {
        id: "mem_fifa_member_association_flags_papua_new_guinea",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_papua_new_guinea",
        galleryVariantId: "var_papua_new_guinea_current",
        quizVariantId: "var_papua_new_guinea_current"
      },
      {
        id: "mem_fifa_member_association_flags_paraguay",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_paraguay",
        galleryVariantId: "var_paraguay_obverse",
        quizVariantId: "var_paraguay_obverse"
      },
      {
        id: "mem_fifa_member_association_flags_peru",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_peru",
        galleryVariantId: "var_peru_civil",
        quizVariantId: "var_peru_civil"
      },
      {
        id: "mem_fifa_member_association_flags_philippines",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_philippines",
        galleryVariantId: "var_philippines_current",
        quizVariantId: "var_philippines_current"
      },
      {
        id: "mem_fifa_member_association_flags_poland",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_poland",
        galleryVariantId: "var_poland_current",
        quizVariantId: "var_poland_current"
      },
      {
        id: "mem_fifa_member_association_flags_portugal",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_portugal",
        galleryVariantId: "var_portugal_current",
        quizVariantId: "var_portugal_current"
      },
      {
        id: "mem_fifa_member_association_flags_puerto_rico",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_puerto_rico",
        galleryVariantId: "var_puerto_rico_current",
        quizVariantId: "var_puerto_rico_current"
      },
      {
        id: "mem_fifa_member_association_flags_qatar",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_qatar",
        galleryVariantId: "var_qatar_current",
        quizVariantId: "var_qatar_current"
      },
      {
        id: "mem_fifa_member_association_flags_ireland",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_ireland",
        galleryVariantId: "var_ireland_current",
        quizVariantId: "var_ireland_current"
      },
      {
        id: "mem_fifa_member_association_flags_romania",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_romania",
        galleryVariantId: "var_romania_current",
        quizVariantId: "var_romania_current"
      },
      {
        id: "mem_fifa_member_association_flags_russia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_russia",
        galleryVariantId: "var_russia_current",
        quizVariantId: "var_russia_current"
      },
      {
        id: "mem_fifa_member_association_flags_rwanda",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_rwanda",
        galleryVariantId: "var_rwanda_current",
        quizVariantId: "var_rwanda_current"
      },
      {
        id: "mem_fifa_member_association_flags_saint_kitts_and_nevis",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_saint_kitts_and_nevis",
        galleryVariantId: "var_saint_kitts_and_nevis_current",
        quizVariantId: "var_saint_kitts_and_nevis_current"
      },
      {
        id: "mem_fifa_member_association_flags_saint_lucia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_saint_lucia",
        galleryVariantId: "var_saint_lucia_current",
        quizVariantId: "var_saint_lucia_current"
      },
      {
        id: "mem_fifa_member_association_flags_saint_vincand_the_grenadines",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_saint_vincent_and_the_grenadines",
        galleryVariantId: "var_saint_vincent_and_the_grenadines_current",
        quizVariantId: "var_saint_vincent_and_the_grenadines_current"
      },
      {
        id: "mem_fifa_member_association_flags_samoa",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_samoa",
        galleryVariantId: "var_samoa_current",
        quizVariantId: "var_samoa_current"
      },
      {
        id: "mem_fifa_member_association_flags_san_marino",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_san_marino",
        galleryVariantId: "var_san_marino_current",
        quizVariantId: "var_san_marino_current"
      },
      {
        id: "mem_fifa_member_association_flags_sao_tome_and_principe",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_sao_tome_and_principe",
        galleryVariantId: "var_sao_tome_and_principe_current",
        quizVariantId: "var_sao_tome_and_principe_current"
      },
      {
        id: "mem_fifa_member_association_flags_saudi_arabia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_saudi_arabia",
        galleryVariantId: "var_saudi_arabia_current",
        quizVariantId: "var_saudi_arabia_current"
      },
      {
        id: "mem_fifa_member_association_flags_scotland",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_scotland",
        galleryVariantId: "var_scotland_current",
        quizVariantId: "var_scotland_current"
      },
      {
        id: "mem_fifa_member_association_flags_senegal",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_senegal",
        galleryVariantId: "var_senegal_current",
        quizVariantId: "var_senegal_current"
      },
      {
        id: "mem_fifa_member_association_flags_serbia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_serbia",
        galleryVariantId: "var_serbia_current",
        quizVariantId: "var_serbia_current"
      },
      {
        id: "mem_fifa_member_association_flags_seychelles",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_seychelles",
        galleryVariantId: "var_seychelles_current",
        quizVariantId: "var_seychelles_current"
      },
      {
        id: "mem_fifa_member_association_flags_sierra_leone",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_sierra_leone",
        galleryVariantId: "var_sierra_leone_current",
        quizVariantId: "var_sierra_leone_current"
      },
      {
        id: "mem_fifa_member_association_flags_singapore",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_singapore",
        galleryVariantId: "var_singapore_current",
        quizVariantId: "var_singapore_current"
      },
      {
        id: "mem_fifa_member_association_flags_slovakia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_slovakia",
        galleryVariantId: "var_slovakia_current",
        quizVariantId: "var_slovakia_current"
      },
      {
        id: "mem_fifa_member_association_flags_slovenia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_slovenia",
        galleryVariantId: "var_slovenia_current",
        quizVariantId: "var_slovenia_current"
      },
      {
        id: "mem_fifa_member_association_flags_solomon_islands",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_solomon_islands",
        galleryVariantId: "var_solomon_islands_current",
        quizVariantId: "var_solomon_islands_current"
      },
      {
        id: "mem_fifa_member_association_flags_somalia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_somalia",
        galleryVariantId: "var_somalia_current",
        quizVariantId: "var_somalia_current"
      },
      {
        id: "mem_fifa_member_association_flags_south_africa",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_south_africa",
        galleryVariantId: "var_south_africa_current",
        quizVariantId: "var_south_africa_current"
      },
      {
        id: "mem_fifa_member_association_flags_south_korea",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_south_korea",
        galleryVariantId: "var_south_korea_current",
        quizVariantId: "var_south_korea_current"
      },
      {
        id: "mem_fifa_member_association_flags_south_sudan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_south_sudan",
        galleryVariantId: "var_south_sudan_current",
        quizVariantId: "var_south_sudan_current"
      },
      {
        id: "mem_fifa_member_association_flags_spain",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_spain",
        galleryVariantId: "var_spain_current",
        quizVariantId: "var_spain_current"
      },
      {
        id: "mem_fifa_member_association_flags_sri_lanka",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_sri_lanka",
        galleryVariantId: "var_sri_lanka_current",
        quizVariantId: "var_sri_lanka_current"
      },
      {
        id: "mem_fifa_member_association_flags_sudan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_sudan",
        galleryVariantId: "var_sudan_current",
        quizVariantId: "var_sudan_current"
      },
      {
        id: "mem_fifa_member_association_flags_suriname",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_suriname",
        galleryVariantId: "var_suriname_current",
        quizVariantId: "var_suriname_current"
      },
      {
        id: "mem_fifa_member_association_flags_sweden",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_sweden",
        galleryVariantId: "var_sweden_current",
        quizVariantId: "var_sweden_current"
      },
      {
        id: "mem_fifa_member_association_flags_switzerland",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_switzerland",
        galleryVariantId: "var_switzerland_current",
        quizVariantId: "var_switzerland_current"
      },
      {
        id: "mem_fifa_member_association_flags_syria",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_syria",
        galleryVariantId: "var_syria_current",
        quizVariantId: "var_syria_current"
      },
      {
        id: "mem_fifa_member_association_flags_tahiti",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_tahiti",
        galleryVariantId: "var_tahiti_current",
        quizVariantId: "var_tahiti_current"
      },
      {
        id: "mem_fifa_member_association_flags_tajikistan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_tajikistan",
        galleryVariantId: "var_tajikistan_current",
        quizVariantId: "var_tajikistan_current"
      },
      {
        id: "mem_fifa_member_association_flags_tanzania",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_tanzania",
        galleryVariantId: "var_tanzania_current",
        quizVariantId: "var_tanzania_current"
      },
      {
        id: "mem_fifa_member_association_flags_thailand",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_thailand",
        galleryVariantId: "var_thailand_current",
        quizVariantId: "var_thailand_current"
      },
      {
        id: "mem_fifa_member_association_flags_timor_leste",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_timor_leste",
        galleryVariantId: "var_timor_leste_current",
        quizVariantId: "var_timor_leste_current"
      },
      {
        id: "mem_fifa_member_association_flags_togo",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_togo",
        galleryVariantId: "var_togo_current",
        quizVariantId: "var_togo_current"
      },
      {
        id: "mem_fifa_member_association_flags_tonga",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_tonga",
        galleryVariantId: "var_tonga_current",
        quizVariantId: "var_tonga_current"
      },
      {
        id: "mem_fifa_member_association_flags_trinidad_and_tobago",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_trinidad_and_tobago",
        galleryVariantId: "var_trinidad_and_tobago_current",
        quizVariantId: "var_trinidad_and_tobago_current"
      },
      {
        id: "mem_fifa_member_association_flags_tunisia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_tunisia",
        galleryVariantId: "var_tunisia_current",
        quizVariantId: "var_tunisia_current"
      },
      {
        id: "mem_fifa_member_association_flags_turkey",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_turkey",
        galleryVariantId: "var_turkey_current",
        quizVariantId: "var_turkey_current"
      },
      {
        id: "mem_fifa_member_association_flags_turkmenistan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_turkmenistan",
        galleryVariantId: "var_turkmenistan_current",
        quizVariantId: "var_turkmenistan_current"
      },
      {
        id: "mem_fifa_member_association_flags_turks_and_caicos_islands",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_turks_and_caicos_islands",
        galleryVariantId: "var_turks_and_caicos_islands_current",
        quizVariantId: "var_turks_and_caicos_islands_current"
      },
      {
        id: "mem_fifa_member_association_flags_uganda",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_uganda",
        galleryVariantId: "var_uganda_current",
        quizVariantId: "var_uganda_current"
      },
      {
        id: "mem_fifa_member_association_flags_ukraine",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_ukraine",
        galleryVariantId: "var_ukraine_current",
        quizVariantId: "var_ukraine_current"
      },
      {
        id: "mem_fifa_member_association_flags_united_arab_emirates",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_united_arab_emirates",
        galleryVariantId: "var_united_arab_emirates_current",
        quizVariantId: "var_united_arab_emirates_current"
      },
      {
        id: "mem_fifa_member_association_flags_united_states",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_united_states",
        galleryVariantId: "var_united_states_current",
        quizVariantId: "var_united_states_current"
      },
      {
        id: "mem_fifa_member_association_flags_uruguay",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_uruguay",
        galleryVariantId: "var_uruguay_current",
        quizVariantId: "var_uruguay_current"
      },
      {
        id: "mem_fifa_member_association_flags_us_virgin_islands",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_us_virgin_islands",
        galleryVariantId: "var_us_virgin_islands_current",
        quizVariantId: "var_us_virgin_islands_current"
      },
      {
        id: "mem_fifa_member_association_flags_uzbekistan",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_uzbekistan",
        galleryVariantId: "var_uzbekistan_current",
        quizVariantId: "var_uzbekistan_current"
      },
      {
        id: "mem_fifa_member_association_flags_vanuatu",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_vanuatu",
        galleryVariantId: "var_vanuatu_current",
        quizVariantId: "var_vanuatu_current"
      },
      {
        id: "mem_fifa_member_association_flags_venezuela",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_venezuela",
        galleryVariantId: "var_venezuela_current",
        quizVariantId: "var_venezuela_current"
      },
      {
        id: "mem_fifa_member_association_flags_vietnam",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_vietnam",
        galleryVariantId: "var_vietnam_current",
        quizVariantId: "var_vietnam_current"
      },
      {
        id: "mem_fifa_member_association_flags_wales",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_wales",
        galleryVariantId: "var_wales_current",
        quizVariantId: "var_wales_current"
      },
      {
        id: "mem_fifa_member_association_flags_yemen",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_yemen",
        galleryVariantId: "var_yemen_current",
        quizVariantId: "var_yemen_current"
      },
      {
        id: "mem_fifa_member_association_flags_zambia",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_zambia",
        galleryVariantId: "var_zambia_current",
        quizVariantId: "var_zambia_current"
      },
      {
        id: "mem_fifa_member_association_flags_zimbabwe",
        collectionId: "col_fifa_member_association_flags",
        entityId: "ent_zimbabwe",
        galleryVariantId: "var_zimbabwe_current",
        quizVariantId: "var_zimbabwe_current"
      }
    ]
  },
  {
    id: "col_ukraine_first_level_subdivisions",
    name: "Ukrainian First-Level Subdivision Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes Ukrainian first-level subdivisions represented in the dataset. Crimea and Sevastopol are geographically modelled under Ukraine and marked as disputed with Russian administration/claim metadata.",
    rules: {
      all: [
        {
          hasAncestor: "ent_ukraine"
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
    id: "col_ukraine_oblast_flags",
    name: "Ukrainian Oblast Flags",
    type: "manual",
    target: "entity",
    notes: "Includes the Ukrainian oblast flags currently represented in the dataset.",
    members: [
      {
        id: "mem_ukraine_oblast_flags_cherkasy",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_cherkasy",
        galleryVariantId: "var_ukraine_cherkasy_current",
        quizVariantId: "var_ukraine_cherkasy_current"
      },
      {
        id: "mem_ukraine_oblast_flags_chernihiv",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_chernihiv",
        galleryVariantId: "var_ukraine_chernihiv_current",
        quizVariantId: "var_ukraine_chernihiv_current"
      },
      {
        id: "mem_ukraine_oblast_flags_chernivtsi",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_chernivtsi",
        galleryVariantId: "var_ukraine_chernivtsi_current",
        quizVariantId: "var_ukraine_chernivtsi_current"
      },
      {
        id: "mem_ukraine_oblast_flags_dnipropetrovsk",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_dnipropetrovsk",
        galleryVariantId: "var_ukraine_dnipropetrovsk_current",
        quizVariantId: "var_ukraine_dnipropetrovsk_current"
      },
      {
        id: "mem_ukraine_oblast_flags_donetsk",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_donetsk",
        galleryVariantId: "var_ukraine_donetsk_current",
        quizVariantId: "var_ukraine_donetsk_current"
      },
      {
        id: "mem_ukraine_oblast_flags_ivano_frankivsk",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_ivano_frankivsk",
        galleryVariantId: "var_ukraine_ivano_frankivsk_current",
        quizVariantId: "var_ukraine_ivano_frankivsk_current"
      },
      {
        id: "mem_ukraine_oblast_flags_kharkiv",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_kharkiv",
        galleryVariantId: "var_ukraine_kharkiv_current",
        quizVariantId: "var_ukraine_kharkiv_current"
      },
      {
        id: "mem_ukraine_oblast_flags_kherson",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_kherson",
        galleryVariantId: "var_ukraine_kherson_current",
        quizVariantId: "var_ukraine_kherson_current"
      },
      {
        id: "mem_ukraine_oblast_flags_khmelnytskyi",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_khmelnytskyi",
        galleryVariantId: "var_ukraine_khmelnytskyi_current",
        quizVariantId: "var_ukraine_khmelnytskyi_current"
      },
      {
        id: "mem_ukraine_oblast_flags_kirovohrad",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_kirovohrad",
        galleryVariantId: "var_ukraine_kirovohrad_current",
        quizVariantId: "var_ukraine_kirovohrad_current"
      },
      {
        id: "mem_ukraine_oblast_flags_kyiv_oblast",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_kyiv_oblast",
        galleryVariantId: "var_ukraine_kyiv_oblast_current",
        quizVariantId: "var_ukraine_kyiv_oblast_current"
      },
      {
        id: "mem_ukraine_oblast_flags_luhansk",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_luhansk",
        galleryVariantId: "var_ukraine_luhansk_current",
        quizVariantId: "var_ukraine_luhansk_current"
      },
      {
        id: "mem_ukraine_oblast_flags_lviv",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_lviv",
        galleryVariantId: "var_ukraine_lviv_current",
        quizVariantId: "var_ukraine_lviv_current"
      },
      {
        id: "mem_ukraine_oblast_flags_mykolaiv",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_mykolaiv",
        galleryVariantId: "var_ukraine_mykolaiv_current",
        quizVariantId: "var_ukraine_mykolaiv_current"
      },
      {
        id: "mem_ukraine_oblast_flags_odesa",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_odesa",
        galleryVariantId: "var_ukraine_odesa_current",
        quizVariantId: "var_ukraine_odesa_current"
      },
      {
        id: "mem_ukraine_oblast_flags_poltava",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_poltava",
        galleryVariantId: "var_ukraine_poltava_current",
        quizVariantId: "var_ukraine_poltava_current"
      },
      {
        id: "mem_ukraine_oblast_flags_rivne",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_rivne",
        galleryVariantId: "var_ukraine_rivne_current",
        quizVariantId: "var_ukraine_rivne_current"
      },
      {
        id: "mem_ukraine_oblast_flags_sumy",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_sumy",
        galleryVariantId: "var_ukraine_sumy_current",
        quizVariantId: "var_ukraine_sumy_current"
      },
      {
        id: "mem_ukraine_oblast_flags_ternopil",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_ternopil",
        galleryVariantId: "var_ukraine_ternopil_current",
        quizVariantId: "var_ukraine_ternopil_current"
      },
      {
        id: "mem_ukraine_oblast_flags_vinnytsia",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_vinnytsia",
        galleryVariantId: "var_ukraine_vinnytsia_current",
        quizVariantId: "var_ukraine_vinnytsia_current"
      },
      {
        id: "mem_ukraine_oblast_flags_volyn",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_volyn",
        galleryVariantId: "var_ukraine_volyn_current",
        quizVariantId: "var_ukraine_volyn_current"
      },
      {
        id: "mem_ukraine_oblast_flags_zakarpattia",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_zakarpattia",
        galleryVariantId: "var_ukraine_zakarpattia_current",
        quizVariantId: "var_ukraine_zakarpattia_current"
      },
      {
        id: "mem_ukraine_oblast_flags_zaporizhzhia",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_zaporizhzhia",
        galleryVariantId: "var_ukraine_zaporizhzhia_current",
        quizVariantId: "var_ukraine_zaporizhzhia_current"
      },
      {
        id: "mem_ukraine_oblast_flags_zhytomyr",
        collectionId: "col_ukraine_oblast_flags",
        entityId: "ent_ukraine_zhytomyr",
        galleryVariantId: "var_ukraine_zhytomyr_current",
        quizVariantId: "var_ukraine_zhytomyr_current"
      }
    ]
  },
  {
    id: "col_ukraine_autonomous_republic_flags",
    name: "Ukrainian Autonomous Republic Flag",
    type: "manual",
    target: "entity",
    notes: "Includes the Autonomous Republic of Crimea. The entity is geographically modelled under Ukraine and marked as disputed with Russian administration/claim metadata.",
    members: [
      {
        id: "mem_ukraine_autonomous_republic_flags_crimea",
        collectionId: "col_ukraine_autonomous_republic_flags",
        entityId: "ent_ukraine_crimea",
        galleryVariantId: "var_ukraine_crimea_current",
        quizVariantId: "var_ukraine_crimea_current"
      }
    ]
  },
  {
    id: "col_ukraine_special_city_flags",
    name: "Ukrainian Special City Flags",
    type: "manual",
    target: "entity",
    notes: "Includes Kyiv and Sevastopol as first-level cities with special status represented in the dataset. Sevastopol is geographically modelled under Ukraine and marked as disputed with Russian administration/claim metadata.",
    members: [
      {
        id: "mem_ukraine_special_city_flags_kyiv_city",
        collectionId: "col_ukraine_special_city_flags",
        entityId: "ent_ukraine_kyiv_city",
        galleryVariantId: "var_ukraine_kyiv_city_current",
        quizVariantId: "var_ukraine_kyiv_city_current"
      },
      {
        id: "mem_ukraine_special_city_flags_sevastopol",
        collectionId: "col_ukraine_special_city_flags",
        entityId: "ent_ukraine_sevastopol",
        galleryVariantId: "var_ukraine_sevastopol_current",
        quizVariantId: "var_ukraine_sevastopol_current"
      }
    ]
  },

  /*
    Russian federal subjects by region and subject type.
  */
  {
    id: "col_russia_first_level_subdivisions",
    name: "Russian Federal Subject Flags",
    type: "dynamic",
    target: "entity",
    notes: "Includes current Russian federal-subject entries represented in the dataset. Disputed Crimea and Sevastopol are geographically modelled under Ukraine but remain included here through Russian administration/claim metadata.",
    rules: {
      all: [
        {
          any: [
            {
              hasAncestor: "ent_russia"
            },
            {
              administeredBy: "ent_russia"
            }
          ]
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
    id: "col_russia_central_region_flags",
    name: "Russian Central Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russia_central_region_flags_belgorod",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_belgorod",
        galleryVariantId: "var_russia_belgorod_current",
        quizVariantId: "var_russia_belgorod_current"
      },
      {
        id: "mem_russia_central_region_flags_bryansk",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_bryansk",
        galleryVariantId: "var_russia_bryansk_current",
        quizVariantId: "var_russia_bryansk_current"
      },
      {
        id: "mem_russia_central_region_flags_ivanovo",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_ivanovo",
        galleryVariantId: "var_russia_ivanovo_current",
        quizVariantId: "var_russia_ivanovo_current"
      },
      {
        id: "mem_russia_central_region_flags_kaluga",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_kaluga",
        galleryVariantId: "var_russia_kaluga_current",
        quizVariantId: "var_russia_kaluga_current"
      },
      {
        id: "mem_russia_central_region_flags_kostroma",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_kostroma",
        galleryVariantId: "var_russia_kostroma_current",
        quizVariantId: "var_russia_kostroma_current"
      },
      {
        id: "mem_russia_central_region_flags_kursk",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_kursk",
        galleryVariantId: "var_russia_kursk_current",
        quizVariantId: "var_russia_kursk_current"
      },
      {
        id: "mem_russia_central_region_flags_lipetsk",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_lipetsk",
        galleryVariantId: "var_russia_lipetsk_current",
        quizVariantId: "var_russia_lipetsk_current"
      },
      {
        id: "mem_russia_central_region_flags_moscow",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_moscow",
        galleryVariantId: "var_russia_moscow_current",
        quizVariantId: "var_russia_moscow_current"
      },
      {
        id: "mem_russia_central_region_flags_moscow_oblast",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_moscow_oblast",
        galleryVariantId: "var_russia_moscow_oblast_current",
        quizVariantId: "var_russia_moscow_oblast_current"
      },
      {
        id: "mem_russia_central_region_flags_oryol",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_oryol",
        galleryVariantId: "var_russia_oryol_current",
        quizVariantId: "var_russia_oryol_current"
      },
      {
        id: "mem_russia_central_region_flags_ryazan",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_ryazan",
        galleryVariantId: "var_russia_ryazan_current",
        quizVariantId: "var_russia_ryazan_current"
      },
      {
        id: "mem_russia_central_region_flags_smolensk",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_smolensk",
        galleryVariantId: "var_russia_smolensk_current",
        quizVariantId: "var_russia_smolensk_current"
      },
      {
        id: "mem_russia_central_region_flags_tambov",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_tambov",
        galleryVariantId: "var_russia_tambov_current",
        quizVariantId: "var_russia_tambov_current"
      },
      {
        id: "mem_russia_central_region_flags_tula",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_tula",
        galleryVariantId: "var_russia_tula_current",
        quizVariantId: "var_russia_tula_current"
      },
      {
        id: "mem_russia_central_region_flags_tver",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_tver",
        galleryVariantId: "var_russia_tver_current",
        quizVariantId: "var_russia_tver_current"
      },
      {
        id: "mem_russia_central_region_flags_vladimir",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_vladimir",
        galleryVariantId: "var_russia_vladimir_current",
        quizVariantId: "var_russia_vladimir_current"
      },
      {
        id: "mem_russia_central_region_flags_voronezh",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_voronezh",
        galleryVariantId: "var_russia_voronezh_current",
        quizVariantId: "var_russia_voronezh_current"
      },
      {
        id: "mem_russia_central_region_flags_yaroslavl",
        collectionId: "col_russia_central_region_flags",
        entityId: "ent_russia_yaroslavl",
        galleryVariantId: "var_russia_yaroslavl_current",
        quizVariantId: "var_russia_yaroslavl_current"
      }
    ]
  },
  {
    id: "col_russia_northwestern_region_flags",
    name: "Russian Northwestern Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russia_northwestern_region_flags_arkhangelsk",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_arkhangelsk",
        galleryVariantId: "var_russia_arkhangelsk_current",
        quizVariantId: "var_russia_arkhangelsk_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_kaliningrad",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_kaliningrad",
        galleryVariantId: "var_russia_kaliningrad_current",
        quizVariantId: "var_russia_kaliningrad_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_karelia",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_karelia",
        galleryVariantId: "var_russia_karelia_current",
        quizVariantId: "var_russia_karelia_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_komi",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_komi",
        galleryVariantId: "var_russia_komi_current",
        quizVariantId: "var_russia_komi_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_leningrad",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_leningrad",
        galleryVariantId: "var_russia_leningrad_current",
        quizVariantId: "var_russia_leningrad_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_murmansk",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_murmansk",
        galleryVariantId: "var_russia_murmansk_current",
        quizVariantId: "var_russia_murmansk_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_nenets",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_nenets",
        galleryVariantId: "var_russia_nenets_current",
        quizVariantId: "var_russia_nenets_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_novgorod",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_novgorod",
        galleryVariantId: "var_russia_novgorod_current",
        quizVariantId: "var_russia_novgorod_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_pskov",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_pskov",
        galleryVariantId: "var_russia_pskov_current",
        quizVariantId: "var_russia_pskov_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_saint_petersburg",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_saint_petersburg",
        galleryVariantId: "var_russia_saint_petersburg_current",
        quizVariantId: "var_russia_saint_petersburg_current"
      },
      {
        id: "mem_russia_northwestern_region_flags_vologda",
        collectionId: "col_russia_northwestern_region_flags",
        entityId: "ent_russia_vologda",
        galleryVariantId: "var_russia_vologda_current",
        quizVariantId: "var_russia_vologda_current"
      }
    ]
  },
  {
    id: "col_russia_southern_region_flags",
    name: "Russian Southern Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russia_southern_region_flags_adygea",
        collectionId: "col_russia_southern_region_flags",
        entityId: "ent_russia_adygea",
        galleryVariantId: "var_russia_adygea_current",
        quizVariantId: "var_russia_adygea_current"
      },
      {
        id: "mem_russia_southern_region_flags_astrakhan",
        collectionId: "col_russia_southern_region_flags",
        entityId: "ent_russia_astrakhan",
        galleryVariantId: "var_russia_astrakhan_current",
        quizVariantId: "var_russia_astrakhan_current"
      },
      {
        id: "mem_russia_southern_region_flags_crimea",
        collectionId: "col_russia_southern_region_flags",
        entityId: "ent_ukraine_crimea",
        galleryVariantId: "var_ukraine_crimea_current",
        quizVariantId: "var_ukraine_crimea_current"
      },
      {
        id: "mem_russia_southern_region_flags_kalmykia",
        collectionId: "col_russia_southern_region_flags",
        entityId: "ent_russia_kalmykia",
        galleryVariantId: "var_russia_kalmykia_current",
        quizVariantId: "var_russia_kalmykia_current"
      },
      {
        id: "mem_russia_southern_region_flags_krasnodar",
        collectionId: "col_russia_southern_region_flags",
        entityId: "ent_russia_krasnodar",
        galleryVariantId: "var_russia_krasnodar_current",
        quizVariantId: "var_russia_krasnodar_current"
      },
      {
        id: "mem_russia_southern_region_flags_rostov",
        collectionId: "col_russia_southern_region_flags",
        entityId: "ent_russia_rostov",
        galleryVariantId: "var_russia_rostov_current",
        quizVariantId: "var_russia_rostov_current"
      },
      {
        id: "mem_russia_southern_region_flags_sevastopol",
        collectionId: "col_russia_southern_region_flags",
        entityId: "ent_ukraine_sevastopol",
        galleryVariantId: "var_ukraine_sevastopol_current",
        quizVariantId: "var_ukraine_sevastopol_current"
      },
      {
        id: "mem_russia_southern_region_flags_volgograd",
        collectionId: "col_russia_southern_region_flags",
        entityId: "ent_russia_volgograd",
        galleryVariantId: "var_russia_volgograd_current",
        quizVariantId: "var_russia_volgograd_current"
      }
    ]
  },
  {
    id: "col_russia_north_caucasian_region_flags",
    name: "Russian North Caucasian Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russia_north_caucasian_region_flags_chechen_republic",
        collectionId: "col_russia_north_caucasian_region_flags",
        entityId: "ent_russia_chechen_republic",
        galleryVariantId: "var_russia_chechen_republic_current",
        quizVariantId: "var_russia_chechen_republic_current"
      },
      {
        id: "mem_russia_north_caucasian_region_flags_dagestan",
        collectionId: "col_russia_north_caucasian_region_flags",
        entityId: "ent_russia_dagestan",
        galleryVariantId: "var_russia_dagestan_current",
        quizVariantId: "var_russia_dagestan_current"
      },
      {
        id: "mem_russia_north_caucasian_region_flags_ingushetia",
        collectionId: "col_russia_north_caucasian_region_flags",
        entityId: "ent_russia_ingushetia",
        galleryVariantId: "var_russia_ingushetia_current",
        quizVariantId: "var_russia_ingushetia_current"
      },
      {
        id: "mem_russia_north_caucasian_region_flags_kabardino_balkaria",
        collectionId: "col_russia_north_caucasian_region_flags",
        entityId: "ent_russia_kabardino_balkaria",
        galleryVariantId: "var_russia_kabardino_balkaria_current",
        quizVariantId: "var_russia_kabardino_balkaria_current"
      },
      {
        id: "mem_russia_north_caucasian_region_flags_karachay_cherkessia",
        collectionId: "col_russia_north_caucasian_region_flags",
        entityId: "ent_russia_karachay_cherkessia",
        galleryVariantId: "var_russia_karachay_cherkessia_current",
        quizVariantId: "var_russia_karachay_cherkessia_current"
      },
      {
        id: "mem_russia_north_caucasian_region_flags_north_ossetia",
        collectionId: "col_russia_north_caucasian_region_flags",
        entityId: "ent_russia_north_ossetia",
        galleryVariantId: "var_russia_north_ossetia_current",
        quizVariantId: "var_russia_north_ossetia_current"
      },
      {
        id: "mem_russia_north_caucasian_region_flags_stavropol",
        collectionId: "col_russia_north_caucasian_region_flags",
        entityId: "ent_russia_stavropol",
        galleryVariantId: "var_russia_stavropol_current",
        quizVariantId: "var_russia_stavropol_current"
      }
    ]
  },
  {
    id: "col_russia_volga_region_flags",
    name: "Russian Volga Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russia_volga_region_flags_bashkortostan",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_bashkortostan",
        galleryVariantId: "var_russia_bashkortostan_current",
        quizVariantId: "var_russia_bashkortostan_current"
      },
      {
        id: "mem_russia_volga_region_flags_chuvashia",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_chuvashia",
        galleryVariantId: "var_russia_chuvashia_current",
        quizVariantId: "var_russia_chuvashia_current"
      },
      {
        id: "mem_russia_volga_region_flags_kirov",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_kirov",
        galleryVariantId: "var_russia_kirov_current",
        quizVariantId: "var_russia_kirov_current"
      },
      {
        id: "mem_russia_volga_region_flags_mari_el",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_mari_el",
        galleryVariantId: "var_russia_mari_el_current",
        quizVariantId: "var_russia_mari_el_current"
      },
      {
        id: "mem_russia_volga_region_flags_mordovia",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_mordovia",
        galleryVariantId: "var_russia_mordovia_current",
        quizVariantId: "var_russia_mordovia_current"
      },
      {
        id: "mem_russia_volga_region_flags_nizhny_novgorod",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_nizhny_novgorod",
        galleryVariantId: "var_russia_nizhny_novgorod_current",
        quizVariantId: "var_russia_nizhny_novgorod_current"
      },
      {
        id: "mem_russia_volga_region_flags_orenburg",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_orenburg",
        galleryVariantId: "var_russia_orenburg_current",
        quizVariantId: "var_russia_orenburg_current"
      },
      {
        id: "mem_russia_volga_region_flags_penza",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_penza",
        galleryVariantId: "var_russia_penza_current",
        quizVariantId: "var_russia_penza_current"
      },
      {
        id: "mem_russia_volga_region_flags_perm",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_perm",
        galleryVariantId: "var_russia_perm_current",
        quizVariantId: "var_russia_perm_current"
      },
      {
        id: "mem_russia_volga_region_flags_samara",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_samara",
        galleryVariantId: "var_russia_samara_current",
        quizVariantId: "var_russia_samara_current"
      },
      {
        id: "mem_russia_volga_region_flags_saratov",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_saratov",
        galleryVariantId: "var_russia_saratov_current",
        quizVariantId: "var_russia_saratov_current"
      },
      {
        id: "mem_russia_volga_region_flags_tatarstan",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_tatarstan",
        galleryVariantId: "var_russia_tatarstan_current",
        quizVariantId: "var_russia_tatarstan_current"
      },
      {
        id: "mem_russia_volga_region_flags_udmurtia",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_udmurtia",
        galleryVariantId: "var_russia_udmurtia_current",
        quizVariantId: "var_russia_udmurtia_current"
      },
      {
        id: "mem_russia_volga_region_flags_ulyanovsk",
        collectionId: "col_russia_volga_region_flags",
        entityId: "ent_russia_ulyanovsk",
        galleryVariantId: "var_russia_ulyanovsk_current",
        quizVariantId: "var_russia_ulyanovsk_current"
      }
    ]
  },
  {
    id: "col_russia_ural_region_flags",
    name: "Russian Ural Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russia_ural_region_flags_chelyabinsk",
        collectionId: "col_russia_ural_region_flags",
        entityId: "ent_russia_chelyabinsk",
        galleryVariantId: "var_russia_chelyabinsk_current",
        quizVariantId: "var_russia_chelyabinsk_current"
      },
      {
        id: "mem_russia_ural_region_flags_kurgan",
        collectionId: "col_russia_ural_region_flags",
        entityId: "ent_russia_kurgan",
        galleryVariantId: "var_russia_kurgan_current",
        quizVariantId: "var_russia_kurgan_current"
      },
      {
        id: "mem_russia_ural_region_flags_sverdlovsk",
        collectionId: "col_russia_ural_region_flags",
        entityId: "ent_russia_sverdlovsk",
        galleryVariantId: "var_russia_sverdlovsk_current",
        quizVariantId: "var_russia_sverdlovsk_current"
      },
      {
        id: "mem_russia_ural_region_flags_tyumen",
        collectionId: "col_russia_ural_region_flags",
        entityId: "ent_russia_tyumen",
        galleryVariantId: "var_russia_tyumen_current",
        quizVariantId: "var_russia_tyumen_current"
      },
      {
        id: "mem_russia_ural_region_flags_yamalo_nenets",
        collectionId: "col_russia_ural_region_flags",
        entityId: "ent_russia_yamalo_nenets",
        galleryVariantId: "var_russia_yamalo_nenets_current",
        quizVariantId: "var_russia_yamalo_nenets_current"
      },
      {
        id: "mem_russia_ural_region_flags_yugra",
        collectionId: "col_russia_ural_region_flags",
        entityId: "ent_russia_yugra",
        galleryVariantId: "var_russia_yugra_current",
        quizVariantId: "var_russia_yugra_current"
      }
    ]
  },
  {
    id: "col_russia_siberian_region_flags",
    name: "Russian Siberian Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russia_siberian_region_flags_altai",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_altai",
        galleryVariantId: "var_russia_altai_current",
        quizVariantId: "var_russia_altai_current"
      },
      {
        id: "mem_russia_siberian_region_flags_altai_republic",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_altai_republic",
        galleryVariantId: "var_russia_altai_republic_current",
        quizVariantId: "var_russia_altai_republic_current"
      },
      {
        id: "mem_russia_siberian_region_flags_irkutsk",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_irkutsk",
        galleryVariantId: "var_russia_irkutsk_current",
        quizVariantId: "var_russia_irkutsk_current"
      },
      {
        id: "mem_russia_siberian_region_flags_kemerovo",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_kemerovo",
        galleryVariantId: "var_russia_kemerovo_current",
        quizVariantId: "var_russia_kemerovo_current"
      },
      {
        id: "mem_russia_siberian_region_flags_khakassia",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_khakassia",
        galleryVariantId: "var_russia_khakassia_current",
        quizVariantId: "var_russia_khakassia_current"
      },
      {
        id: "mem_russia_siberian_region_flags_krasnoyarsk",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_krasnoyarsk",
        galleryVariantId: "var_russia_krasnoyarsk_current",
        quizVariantId: "var_russia_krasnoyarsk_current"
      },
      {
        id: "mem_russia_siberian_region_flags_novosibirsk",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_novosibirsk",
        galleryVariantId: "var_russia_novosibirsk_current",
        quizVariantId: "var_russia_novosibirsk_current"
      },
      {
        id: "mem_russia_siberian_region_flags_omsk",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_omsk",
        galleryVariantId: "var_russia_omsk_current",
        quizVariantId: "var_russia_omsk_current"
      },
      {
        id: "mem_russia_siberian_region_flags_tomsk",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_tomsk",
        galleryVariantId: "var_russia_tomsk_current",
        quizVariantId: "var_russia_tomsk_current"
      },
      {
        id: "mem_russia_siberian_region_flags_tuva",
        collectionId: "col_russia_siberian_region_flags",
        entityId: "ent_russia_tuva",
        galleryVariantId: "var_russia_tuva_current",
        quizVariantId: "var_russia_tuva_current"
      }
    ]
  },
  {
    id: "col_russia_far_eastern_region_flags",
    name: "Russian Far Eastern Region Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russia_far_eastern_region_flags_amur",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_amur",
        galleryVariantId: "var_russia_amur_current",
        quizVariantId: "var_russia_amur_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_buryatia",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_buryatia",
        galleryVariantId: "var_russia_buryatia_current",
        quizVariantId: "var_russia_buryatia_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_chukotka",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_chukotka",
        galleryVariantId: "var_russia_chukotka_current",
        quizVariantId: "var_russia_chukotka_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_jewish_autonomous_oblast",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_jewish_autonomous_oblast",
        galleryVariantId: "var_russia_jewish_autonomous_oblast_current",
        quizVariantId: "var_russia_jewish_autonomous_oblast_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_kamchatka",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_kamchatka",
        galleryVariantId: "var_russia_kamchatka_current",
        quizVariantId: "var_russia_kamchatka_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_khabarovsk",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_khabarovsk",
        galleryVariantId: "var_russia_khabarovsk_current",
        quizVariantId: "var_russia_khabarovsk_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_magadan",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_magadan",
        galleryVariantId: "var_russia_magadan_current",
        quizVariantId: "var_russia_magadan_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_primorsky",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_primorsky",
        galleryVariantId: "var_russia_primorsky_current",
        quizVariantId: "var_russia_primorsky_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_sakha",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_sakha",
        galleryVariantId: "var_russia_sakha_current",
        quizVariantId: "var_russia_sakha_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_sakhalin",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_sakhalin",
        galleryVariantId: "var_russia_sakhalin_current",
        quizVariantId: "var_russia_sakhalin_current"
      },
      {
        id: "mem_russia_far_eastern_region_flags_zabaykalsky",
        collectionId: "col_russia_far_eastern_region_flags",
        entityId: "ent_russia_zabaykalsky",
        galleryVariantId: "var_russia_zabaykalsky_current",
        quizVariantId: "var_russia_zabaykalsky_current"
      }
    ]
  },
  {
    id: "col_russian_oblast_flags",
    name: "Russian Oblast Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russian_oblast_flags_belgorod",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_belgorod",
        galleryVariantId: "var_russia_belgorod_current",
        quizVariantId: "var_russia_belgorod_current"
      },
      {
        id: "mem_russian_oblast_flags_bryansk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_bryansk",
        galleryVariantId: "var_russia_bryansk_current",
        quizVariantId: "var_russia_bryansk_current"
      },
      {
        id: "mem_russian_oblast_flags_ivanovo",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_ivanovo",
        galleryVariantId: "var_russia_ivanovo_current",
        quizVariantId: "var_russia_ivanovo_current"
      },
      {
        id: "mem_russian_oblast_flags_kaluga",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_kaluga",
        galleryVariantId: "var_russia_kaluga_current",
        quizVariantId: "var_russia_kaluga_current"
      },
      {
        id: "mem_russian_oblast_flags_kostroma",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_kostroma",
        galleryVariantId: "var_russia_kostroma_current",
        quizVariantId: "var_russia_kostroma_current"
      },
      {
        id: "mem_russian_oblast_flags_kursk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_kursk",
        galleryVariantId: "var_russia_kursk_current",
        quizVariantId: "var_russia_kursk_current"
      },
      {
        id: "mem_russian_oblast_flags_lipetsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_lipetsk",
        galleryVariantId: "var_russia_lipetsk_current",
        quizVariantId: "var_russia_lipetsk_current"
      },
      {
        id: "mem_russian_oblast_flags_moscow_oblast",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_moscow_oblast",
        galleryVariantId: "var_russia_moscow_oblast_current",
        quizVariantId: "var_russia_moscow_oblast_current"
      },
      {
        id: "mem_russian_oblast_flags_oryol",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_oryol",
        galleryVariantId: "var_russia_oryol_current",
        quizVariantId: "var_russia_oryol_current"
      },
      {
        id: "mem_russian_oblast_flags_ryazan",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_ryazan",
        galleryVariantId: "var_russia_ryazan_current",
        quizVariantId: "var_russia_ryazan_current"
      },
      {
        id: "mem_russian_oblast_flags_smolensk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_smolensk",
        galleryVariantId: "var_russia_smolensk_current",
        quizVariantId: "var_russia_smolensk_current"
      },
      {
        id: "mem_russian_oblast_flags_tambov",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_tambov",
        galleryVariantId: "var_russia_tambov_current",
        quizVariantId: "var_russia_tambov_current"
      },
      {
        id: "mem_russian_oblast_flags_tula",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_tula",
        galleryVariantId: "var_russia_tula_current",
        quizVariantId: "var_russia_tula_current"
      },
      {
        id: "mem_russian_oblast_flags_tver",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_tver",
        galleryVariantId: "var_russia_tver_current",
        quizVariantId: "var_russia_tver_current"
      },
      {
        id: "mem_russian_oblast_flags_vladimir",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_vladimir",
        galleryVariantId: "var_russia_vladimir_current",
        quizVariantId: "var_russia_vladimir_current"
      },
      {
        id: "mem_russian_oblast_flags_voronezh",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_voronezh",
        galleryVariantId: "var_russia_voronezh_current",
        quizVariantId: "var_russia_voronezh_current"
      },
      {
        id: "mem_russian_oblast_flags_yaroslavl",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_yaroslavl",
        galleryVariantId: "var_russia_yaroslavl_current",
        quizVariantId: "var_russia_yaroslavl_current"
      },
      {
        id: "mem_russian_oblast_flags_amur",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_amur",
        galleryVariantId: "var_russia_amur_current",
        quizVariantId: "var_russia_amur_current"
      },
      {
        id: "mem_russian_oblast_flags_magadan",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_magadan",
        galleryVariantId: "var_russia_magadan_current",
        quizVariantId: "var_russia_magadan_current"
      },
      {
        id: "mem_russian_oblast_flags_sakhalin",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_sakhalin",
        galleryVariantId: "var_russia_sakhalin_current",
        quizVariantId: "var_russia_sakhalin_current"
      },
      {
        id: "mem_russian_oblast_flags_arkhangelsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_arkhangelsk",
        galleryVariantId: "var_russia_arkhangelsk_current",
        quizVariantId: "var_russia_arkhangelsk_current"
      },
      {
        id: "mem_russian_oblast_flags_kaliningrad",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_kaliningrad",
        galleryVariantId: "var_russia_kaliningrad_current",
        quizVariantId: "var_russia_kaliningrad_current"
      },
      {
        id: "mem_russian_oblast_flags_leningrad",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_leningrad",
        galleryVariantId: "var_russia_leningrad_current",
        quizVariantId: "var_russia_leningrad_current"
      },
      {
        id: "mem_russian_oblast_flags_murmansk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_murmansk",
        galleryVariantId: "var_russia_murmansk_current",
        quizVariantId: "var_russia_murmansk_current"
      },
      {
        id: "mem_russian_oblast_flags_novgorod",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_novgorod",
        galleryVariantId: "var_russia_novgorod_current",
        quizVariantId: "var_russia_novgorod_current"
      },
      {
        id: "mem_russian_oblast_flags_pskov",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_pskov",
        galleryVariantId: "var_russia_pskov_current",
        quizVariantId: "var_russia_pskov_current"
      },
      {
        id: "mem_russian_oblast_flags_vologda",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_vologda",
        galleryVariantId: "var_russia_vologda_current",
        quizVariantId: "var_russia_vologda_current"
      },
      {
        id: "mem_russian_oblast_flags_irkutsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_irkutsk",
        galleryVariantId: "var_russia_irkutsk_current",
        quizVariantId: "var_russia_irkutsk_current"
      },
      {
        id: "mem_russian_oblast_flags_kemerovo",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_kemerovo",
        galleryVariantId: "var_russia_kemerovo_current",
        quizVariantId: "var_russia_kemerovo_current"
      },
      {
        id: "mem_russian_oblast_flags_novosibirsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_novosibirsk",
        galleryVariantId: "var_russia_novosibirsk_current",
        quizVariantId: "var_russia_novosibirsk_current"
      },
      {
        id: "mem_russian_oblast_flags_omsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_omsk",
        galleryVariantId: "var_russia_omsk_current",
        quizVariantId: "var_russia_omsk_current"
      },
      {
        id: "mem_russian_oblast_flags_tomsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_tomsk",
        galleryVariantId: "var_russia_tomsk_current",
        quizVariantId: "var_russia_tomsk_current"
      },
      {
        id: "mem_russian_oblast_flags_astrakhan",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_astrakhan",
        galleryVariantId: "var_russia_astrakhan_current",
        quizVariantId: "var_russia_astrakhan_current"
      },
      {
        id: "mem_russian_oblast_flags_rostov",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_rostov",
        galleryVariantId: "var_russia_rostov_current",
        quizVariantId: "var_russia_rostov_current"
      },
      {
        id: "mem_russian_oblast_flags_volgograd",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_volgograd",
        galleryVariantId: "var_russia_volgograd_current",
        quizVariantId: "var_russia_volgograd_current"
      },
      {
        id: "mem_russian_oblast_flags_chelyabinsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_chelyabinsk",
        galleryVariantId: "var_russia_chelyabinsk_current",
        quizVariantId: "var_russia_chelyabinsk_current"
      },
      {
        id: "mem_russian_oblast_flags_kurgan",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_kurgan",
        galleryVariantId: "var_russia_kurgan_current",
        quizVariantId: "var_russia_kurgan_current"
      },
      {
        id: "mem_russian_oblast_flags_sverdlovsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_sverdlovsk",
        galleryVariantId: "var_russia_sverdlovsk_current",
        quizVariantId: "var_russia_sverdlovsk_current"
      },
      {
        id: "mem_russian_oblast_flags_tyumen",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_tyumen",
        galleryVariantId: "var_russia_tyumen_current",
        quizVariantId: "var_russia_tyumen_current"
      },
      {
        id: "mem_russian_oblast_flags_kirov",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_kirov",
        galleryVariantId: "var_russia_kirov_current",
        quizVariantId: "var_russia_kirov_current"
      },
      {
        id: "mem_russian_oblast_flags_nizhny_novgorod",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_nizhny_novgorod",
        galleryVariantId: "var_russia_nizhny_novgorod_current",
        quizVariantId: "var_russia_nizhny_novgorod_current"
      },
      {
        id: "mem_russian_oblast_flags_orenburg",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_orenburg",
        galleryVariantId: "var_russia_orenburg_current",
        quizVariantId: "var_russia_orenburg_current"
      },
      {
        id: "mem_russian_oblast_flags_penza",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_penza",
        galleryVariantId: "var_russia_penza_current",
        quizVariantId: "var_russia_penza_current"
      },
      {
        id: "mem_russian_oblast_flags_samara",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_samara",
        galleryVariantId: "var_russia_samara_current",
        quizVariantId: "var_russia_samara_current"
      },
      {
        id: "mem_russian_oblast_flags_saratov",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_saratov",
        galleryVariantId: "var_russia_saratov_current",
        quizVariantId: "var_russia_saratov_current"
      },
      {
        id: "mem_russian_oblast_flags_ulyanovsk",
        collectionId: "col_russian_oblast_flags",
        entityId: "ent_russia_ulyanovsk",
        galleryVariantId: "var_russia_ulyanovsk_current",
        quizVariantId: "var_russia_ulyanovsk_current"
      }
    ]
  },
  {
    id: "col_russian_republic_flags",
    name: "Russian Republic Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russian_republic_flags_buryatia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_buryatia",
        galleryVariantId: "var_russia_buryatia_current",
        quizVariantId: "var_russia_buryatia_current"
      },
      {
        id: "mem_russian_republic_flags_sakha",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_sakha",
        galleryVariantId: "var_russia_sakha_current",
        quizVariantId: "var_russia_sakha_current"
      },
      {
        id: "mem_russian_republic_flags_chechen_republic",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_chechen_republic",
        galleryVariantId: "var_russia_chechen_republic_current",
        quizVariantId: "var_russia_chechen_republic_current"
      },
      {
        id: "mem_russian_republic_flags_dagestan",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_dagestan",
        galleryVariantId: "var_russia_dagestan_current",
        quizVariantId: "var_russia_dagestan_current"
      },
      {
        id: "mem_russian_republic_flags_ingushetia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_ingushetia",
        galleryVariantId: "var_russia_ingushetia_current",
        quizVariantId: "var_russia_ingushetia_current"
      },
      {
        id: "mem_russian_republic_flags_kabardino_balkaria",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_kabardino_balkaria",
        galleryVariantId: "var_russia_kabardino_balkaria_current",
        quizVariantId: "var_russia_kabardino_balkaria_current"
      },
      {
        id: "mem_russian_republic_flags_karachay_cherkessia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_karachay_cherkessia",
        galleryVariantId: "var_russia_karachay_cherkessia_current",
        quizVariantId: "var_russia_karachay_cherkessia_current"
      },
      {
        id: "mem_russian_republic_flags_north_ossetia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_north_ossetia",
        galleryVariantId: "var_russia_north_ossetia_current",
        quizVariantId: "var_russia_north_ossetia_current"
      },
      {
        id: "mem_russian_republic_flags_karelia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_karelia",
        galleryVariantId: "var_russia_karelia_current",
        quizVariantId: "var_russia_karelia_current"
      },
      {
        id: "mem_russian_republic_flags_komi",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_komi",
        galleryVariantId: "var_russia_komi_current",
        quizVariantId: "var_russia_komi_current"
      },
      {
        id: "mem_russian_republic_flags_altai_republic",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_altai_republic",
        galleryVariantId: "var_russia_altai_republic_current",
        quizVariantId: "var_russia_altai_republic_current"
      },
      {
        id: "mem_russian_republic_flags_khakassia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_khakassia",
        galleryVariantId: "var_russia_khakassia_current",
        quizVariantId: "var_russia_khakassia_current"
      },
      {
        id: "mem_russian_republic_flags_tuva",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_tuva",
        galleryVariantId: "var_russia_tuva_current",
        quizVariantId: "var_russia_tuva_current"
      },
      {
        id: "mem_russian_republic_flags_adygea",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_adygea",
        galleryVariantId: "var_russia_adygea_current",
        quizVariantId: "var_russia_adygea_current"
      },
      {
        id: "mem_russian_republic_flags_crimea",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_ukraine_crimea",
        galleryVariantId: "var_ukraine_crimea_current",
        quizVariantId: "var_ukraine_crimea_current"
      },
      {
        id: "mem_russian_republic_flags_kalmykia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_kalmykia",
        galleryVariantId: "var_russia_kalmykia_current",
        quizVariantId: "var_russia_kalmykia_current"
      },
      {
        id: "mem_russian_republic_flags_bashkortostan",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_bashkortostan",
        galleryVariantId: "var_russia_bashkortostan_current",
        quizVariantId: "var_russia_bashkortostan_current"
      },
      {
        id: "mem_russian_republic_flags_chuvashia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_chuvashia",
        galleryVariantId: "var_russia_chuvashia_current",
        quizVariantId: "var_russia_chuvashia_current"
      },
      {
        id: "mem_russian_republic_flags_mari_el",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_mari_el",
        galleryVariantId: "var_russia_mari_el_current",
        quizVariantId: "var_russia_mari_el_current"
      },
      {
        id: "mem_russian_republic_flags_mordovia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_mordovia",
        galleryVariantId: "var_russia_mordovia_current",
        quizVariantId: "var_russia_mordovia_current"
      },
      {
        id: "mem_russian_republic_flags_tatarstan",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_tatarstan",
        galleryVariantId: "var_russia_tatarstan_current",
        quizVariantId: "var_russia_tatarstan_current"
      },
      {
        id: "mem_russian_republic_flags_udmurtia",
        collectionId: "col_russian_republic_flags",
        entityId: "ent_russia_udmurtia",
        galleryVariantId: "var_russia_udmurtia_current",
        quizVariantId: "var_russia_udmurtia_current"
      }
    ]
  },
  {
    id: "col_russian_krai_flags",
    name: "Russian Krai Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russian_krai_flags_kamchatka",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_kamchatka",
        galleryVariantId: "var_russia_kamchatka_current",
        quizVariantId: "var_russia_kamchatka_current"
      },
      {
        id: "mem_russian_krai_flags_khabarovsk",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_khabarovsk",
        galleryVariantId: "var_russia_khabarovsk_current",
        quizVariantId: "var_russia_khabarovsk_current"
      },
      {
        id: "mem_russian_krai_flags_primorsky",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_primorsky",
        galleryVariantId: "var_russia_primorsky_current",
        quizVariantId: "var_russia_primorsky_current"
      },
      {
        id: "mem_russian_krai_flags_zabaykalsky",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_zabaykalsky",
        galleryVariantId: "var_russia_zabaykalsky_current",
        quizVariantId: "var_russia_zabaykalsky_current"
      },
      {
        id: "mem_russian_krai_flags_stavropol",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_stavropol",
        galleryVariantId: "var_russia_stavropol_current",
        quizVariantId: "var_russia_stavropol_current"
      },
      {
        id: "mem_russian_krai_flags_altai",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_altai",
        galleryVariantId: "var_russia_altai_current",
        quizVariantId: "var_russia_altai_current"
      },
      {
        id: "mem_russian_krai_flags_krasnoyarsk",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_krasnoyarsk",
        galleryVariantId: "var_russia_krasnoyarsk_current",
        quizVariantId: "var_russia_krasnoyarsk_current"
      },
      {
        id: "mem_russian_krai_flags_krasnodar",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_krasnodar",
        galleryVariantId: "var_russia_krasnodar_current",
        quizVariantId: "var_russia_krasnodar_current"
      },
      {
        id: "mem_russian_krai_flags_perm",
        collectionId: "col_russian_krai_flags",
        entityId: "ent_russia_perm",
        galleryVariantId: "var_russia_perm_current",
        quizVariantId: "var_russia_perm_current"
      }
    ]
  },
  {
    id: "col_russian_autonomous_okrug_flags",
    name: "Russian Autonomous Okrug Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russian_autonomous_okrug_flags_chukotka",
        collectionId: "col_russian_autonomous_okrug_flags",
        entityId: "ent_russia_chukotka",
        galleryVariantId: "var_russia_chukotka_current",
        quizVariantId: "var_russia_chukotka_current"
      },
      {
        id: "mem_russian_autonomous_okrug_flags_nenets",
        collectionId: "col_russian_autonomous_okrug_flags",
        entityId: "ent_russia_nenets",
        galleryVariantId: "var_russia_nenets_current",
        quizVariantId: "var_russia_nenets_current"
      },
      {
        id: "mem_russian_autonomous_okrug_flags_yamalo_nenets",
        collectionId: "col_russian_autonomous_okrug_flags",
        entityId: "ent_russia_yamalo_nenets",
        galleryVariantId: "var_russia_yamalo_nenets_current",
        quizVariantId: "var_russia_yamalo_nenets_current"
      },
      {
        id: "mem_russian_autonomous_okrug_flags_yugra",
        collectionId: "col_russian_autonomous_okrug_flags",
        entityId: "ent_russia_yugra",
        galleryVariantId: "var_russia_yugra_current",
        quizVariantId: "var_russia_yugra_current"
      }
    ]
  },
  {
    id: "col_russian_autonomous_oblast_flags",
    name: "Russian Autonomous Oblast Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russian_autonomous_oblast_flags_jewish_autonomous_oblast",
        collectionId: "col_russian_autonomous_oblast_flags",
        entityId: "ent_russia_jewish_autonomous_oblast",
        galleryVariantId: "var_russia_jewish_autonomous_oblast_current",
        quizVariantId: "var_russia_jewish_autonomous_oblast_current"
      }
    ]
  },
  {
    id: "col_russian_federal_city_flags",
    name: "Russian Federal City Flags",
    type: "manual",
    target: "entity",
    members: [
      {
        id: "mem_russian_federal_city_flags_moscow",
        collectionId: "col_russian_federal_city_flags",
        entityId: "ent_russia_moscow",
        galleryVariantId: "var_russia_moscow_current",
        quizVariantId: "var_russia_moscow_current"
      },
      {
        id: "mem_russian_federal_city_flags_saint_petersburg",
        collectionId: "col_russian_federal_city_flags",
        entityId: "ent_russia_saint_petersburg",
        galleryVariantId: "var_russia_saint_petersburg_current",
        quizVariantId: "var_russia_saint_petersburg_current"
      },
      {
        id: "mem_russian_federal_city_flags_sevastopol",
        collectionId: "col_russian_federal_city_flags",
        entityId: "ent_ukraine_sevastopol",
        galleryVariantId: "var_ukraine_sevastopol_current",
        quizVariantId: "var_ukraine_sevastopol_current"
      }
    ]
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
