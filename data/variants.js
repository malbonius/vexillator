/*
  Variant registry.

  A variant is one specific visual representation of an entity.

  Maintenance rules:
  - IDs are permanent and use lowercase snake_case.
  - entityId must reference the entity represented by the flag.
  - assetId must reference the displayed image asset.
  - displayName is the primary user-facing variant label.
  - aliases contains alternative names for this specific flag design.
  - tags describe the variant rather than its geographic location.
  - startYear and endYear may be null when dates are unknown or not useful.
*/

const variants = [
  /*
    Antarctica.
  */
  {
    id: "var_british_antarctic_territory_current",
    entityId: "ent_british_antarctic_territory",
    assetId: "ast_british_antarctic_territory_current",
    displayName: "Official Flag",
    aliases: ["BAT Flag"],
    tags: ["official", "current", "national"],
    startYear: 1998,
    endYear: null
  },

  /*
    Australia and New Zealand.
  */
  {
    id: "var_australia_current",
    entityId: "ent_australia",
    assetId: "ast_australia_current",
    displayName: "National Flag",
    aliases: ["Australian National Flag", "Australian Blue Ensign"],
    tags: ["official", "current", "national"],
    startYear: 1908,
    endYear: null
  },
  {
    id: "var_australian_capital_territory_current",
    entityId: "ent_australian_capital_territory",
    assetId: "ast_australian_capital_territory_current",
    displayName: "Territorial Flag",
    aliases: ["Australian Capital Territory Flag", "ACT Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_australia_new_south_wales_current",
    entityId: "ent_australia_new_south_wales",
    assetId: "ast_new_south_wales_current",
    displayName: "State Flag",
    aliases: ["New South Wales Flag", "NSW Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_northern_territory_current",
    entityId: "ent_northern_territory",
    assetId: "ast_northern_territory_current",
    displayName: "Territorial Flag",
    aliases: ["Northern Territory Flag", "NT Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_australia_queensland_current",
    entityId: "ent_australia_queensland",
    assetId: "ast_queensland_current",
    displayName: "State Flag",
    aliases: ["Queensland Flag", "QLD Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_australia_south_australia_current",
    entityId: "ent_australia_south_australia",
    assetId: "ast_south_australia_current",
    displayName: "State Flag",
    aliases: ["South Australia Flag", "SA Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_australia_tasmania_current",
    entityId: "ent_australia_tasmania",
    assetId: "ast_tasmania_current",
    displayName: "State Flag",
    aliases: ["Tasmania Flag", "TAS Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_australia_victoria_current",
    entityId: "ent_australia_victoria",
    assetId: "ast_victoria_current",
    displayName: "State Flag",
    aliases: ["Victoria Flag", "VIC Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_australia_western_australia_current",
    entityId: "ent_australia_western_australia",
    assetId: "ast_western_australia_current",
    displayName: "State Flag",
    aliases: ["Western Australia Flag", "WA Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_christmas_island_current_unofficial",
    entityId: "ent_christmas_island",
    assetId: "ast_christmas_island_current_unofficial",
    displayName: "Unofficial Territorial Flag",
    aliases: ["Community Flag"],
    tags: ["unofficial", "current", "national"],
    startYear: 1986,
    endYear: null
  },
  {
    id: "var_cocos_keeling_islands_current_unofficial",
    entityId: "ent_cocos_keeling_islands",
    assetId: "ast_cocos_keeling_islands_current_unofficial",
    displayName: "Unofficial Territorial Flag",
    aliases: ["Community Flag"],
    tags: ["unofficial", "current", "national"],
    startYear: 2004,
    endYear: null
  },
  {
    id: "var_new_zealand_current",
    entityId: "ent_new_zealand",
    assetId: "ast_new_zealand_current",
    displayName: "National Flag",
    aliases: ["New Zealand Flag", "Te Kara o Aotearoa"],
    tags: ["official", "current", "national"],
    startYear: 1902,
    endYear: null
  },
  {
    id: "var_norfolk_island_current",
    entityId: "ent_norfolk_island",
    assetId: "ast_norfolk_island_territory",
    displayName: "Territorial Flag",
    aliases: ["Norfolk Island Flag"],
    tags: ["official", "current", "national"],
    startYear: 1980,
    endYear: null
  },

  /*
    Melanesia.
  */
  {
    id: "var_fiji_current",
    entityId: "ent_fiji",
    assetId: "ast_fiji_current",
    displayName: "National Flag",
    aliases: ["Fijian Flag"],
    tags: ["official", "current", "national"],
    startYear: 1970,
    endYear: null
  },
  {
    id: "var_new_caledonia_kanak_current_unofficial",
    entityId: "ent_new_caledonia",
    assetId: "ast_new_caledonia_kanak_unofficial",
    displayName: "Kanak Flag",
    aliases: [
      "Kanaky Flag",
      "FLNKS Flag",
      "Pro-Independence Flag"
    ],
    tags: ["unofficial", "current", "national"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_papua_new_guinea_current",
    entityId: "ent_papua_new_guinea",
    assetId: "ast_papua_new_guinea_current",
    displayName: "National Flag",
    aliases: ["PNG Flag"],
    tags: ["official", "current", "national"],
    startYear: 1971,
    endYear: null
  },
  {
    id: "var_solomon_islands_current",
    entityId: "ent_solomon_islands",
    assetId: "ast_solomon_islands_current",
    displayName: "National Flag",
    aliases: ["Solomon Islands Flag"],
    tags: ["official", "current", "national"],
    startYear: 1977,
    endYear: null
  },
  {
    id: "var_vanuatu_current",
    entityId: "ent_vanuatu",
    assetId: "ast_vanuatu_current",
    displayName: "National Flag",
    aliases: ["Flaeg blong Vanuatu"],
    tags: ["official", "current", "national"],
    startYear: 1980,
    endYear: null
  },

  /*
    Micronesia.
  */
  {
    id: "var_federated_states_of_micronesia_current",
    entityId: "ent_federated_states_of_micronesia",
    assetId: "ast_federated_states_of_micronesia_current",
    displayName: "National Flag",
    aliases: ["FSM Flag", "Micronesian Flag"],
    tags: ["official", "current", "national"],
    startYear: 1978,
    endYear: null
  },
  {
    id: "var_micronesia_chuuk_current",
    entityId: "ent_micronesia_chuuk",
    assetId: "ast_chuuk_current",
    displayName: "State Flag",
    aliases: ["Chuuk State Flag", "Truk State Flag"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_micronesia_kosrae_current",
    entityId: "ent_micronesia_kosrae",
    assetId: "ast_kosrae_current",
    displayName: "State Flag",
    aliases: ["Kosrae State Flag"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_micronesia_pohnpei_current",
    entityId: "ent_micronesia_pohnpei",
    assetId: "ast_pohnpei_current",
    displayName: "State Flag",
    aliases: ["Pohnpei State Flag", "Ponape State Flag"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_micronesia_yap_current",
    entityId: "ent_micronesia_yap",
    assetId: "ast_yap_current",
    displayName: "State Flag",
    aliases: ["Yap State Flag"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_guam_current",
    entityId: "ent_guam",
    assetId: "ast_guam_current",
    displayName: "Territorial Flag",
    aliases: ["Banderan Guåhan", "Guam Flag"],
    tags: ["official", "current", "national"],
    startYear: 1948,
    endYear: null
  },
  {
    id: "var_johnston_atoll_current_unofficial",
    entityId: "ent_johnston_atoll",
    assetId: "ast_johnston_atoll_unofficial",
    displayName: "Unofficial Territorial Flag",
    aliases: ["Johnston Atoll Flag", "Johnston Island Flag"],
    tags: ["unofficial", "current", "national"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_kiribati_current",
    entityId: "ent_kiribati",
    assetId: "ast_kiribati_current",
    displayName: "National Flag",
    aliases: ["Buraki ni Kiribati"],
    tags: ["official", "current", "national"],
    startYear: 1979,
    endYear: null
  },
  {
    id: "var_marshall_islands_current",
    entityId: "ent_marshall_islands",
    assetId: "ast_marshall_islands_current",
    displayName: "National Flag",
    aliases: ["RMI Flag"],
    tags: ["official", "current", "national"],
    startYear: 1979,
    endYear: null
  },
  {
    id: "var_midway_atoll_current_unofficial",
    entityId: "ent_midway_atoll",
    assetId: "ast_midway_atoll_unofficial",
    displayName: "Unofficial Territorial Flag",
    aliases: ["Midway Atoll Flag", "Midway Islands Flag"],
    tags: ["unofficial", "current", "national"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_nauru_current",
    entityId: "ent_nauru",
    assetId: "ast_nauru_current",
    displayName: "National Flag",
    aliases: ["Nauruan Flag"],
    tags: ["official", "current", "national"],
    startYear: 1968,
    endYear: null
  },
  {
    id: "var_northern_mariana_islands_current",
    entityId: "ent_northern_mariana_islands",
    assetId: "ast_northern_mariana_islands_current",
    displayName: "Territorial Flag",
    aliases: ["CNMI Flag", "Northern Marianas Flag"],
    tags: ["official", "current", "national"],
    startYear: 1985,
    endYear: null
  },
  {
    id: "var_palau_current",
    entityId: "ent_palau",
    assetId: "ast_palau_current",
    displayName: "National Flag",
    aliases: ["Belau Flag", "Palauan Flag"],
    tags: ["official", "current", "national"],
    startYear: 1981,
    endYear: null
  },
  {
    id: "var_wake_island_current_unofficial",
    entityId: "ent_wake_island",
    assetId: "ast_wake_island_unofficial",
    displayName: "Unofficial Territorial Flag",
    aliases: ["Wake Island Flag", "Wake Atoll Flag"],
    tags: ["unofficial", "current", "national"],
    startYear: null,
    endYear: null
  },

  /*
    Technical quiz-safe Micronesia variants.

    text_removed variants are displayed during a quiz but resolve to their
    base variant for Gallery display and answer reveal.
  */
  {
    id: "var_guam_current_text_removed",
    entityId: "ent_guam",
    assetId: "ast_guam_current_text_removed",
    displayName: "Territorial Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1948,
    endYear: null,
    baseVariantId: "var_guam_current"
  },
  {
    id: "var_johnston_atoll_current_unofficial_text_removed",
    entityId: "ent_johnston_atoll",
    assetId: "ast_johnston_atoll_unofficial_text_removed",
    displayName: "Unofficial Territorial Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_johnston_atoll_current_unofficial"
  },
  {
    id: "var_wake_island_current_unofficial_text_removed",
    entityId: "ent_wake_island",
    assetId: "ast_wake_island_unofficial_text_removed",
    displayName: "Unofficial Territorial Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_wake_island_current_unofficial"
  },

  /*
    Polynesia.
  */
  {
    id: "var_american_samoa_current",
    entityId: "ent_american_samoa",
    assetId: "ast_american_samoa_current",
    displayName: "Territorial Flag",
    aliases: ["American Samoan Flag"],
    tags: ["official", "current", "national"],
    startYear: 1960,
    endYear: null
  },
  {
    id: "var_cook_islands_current",
    entityId: "ent_cook_islands",
    assetId: "ast_cook_islands_current",
    displayName: "National Flag",
    aliases: ["Cook Islands Ensign"],
    tags: ["official", "current", "national"],
    startYear: 1979,
    endYear: null
  },
  {
    id: "var_french_polynesia_current",
    entityId: "ent_french_polynesia",
    assetId: "ast_french_polynesia_current",
    displayName: "Territorial Flag",
    aliases: ["Drapeau de la Polynésie française"],
    tags: ["official", "current", "national"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_niue_current",
    entityId: "ent_niue",
    assetId: "ast_niue_current",
    displayName: "National Flag",
    aliases: ["Niuean Flag"],
    tags: ["official", "current", "national"],
    startYear: 1975,
    endYear: null
  },
  {
    id: "var_pitcairn_islands_current",
    entityId: "ent_pitcairn_islands",
    assetId: "ast_pitcairn_islands_current",
    displayName: "Territorial Flag",
    aliases: ["Pitcairn Flag"],
    tags: ["official", "current", "national"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_samoa_current",
    entityId: "ent_samoa",
    assetId: "ast_samoa_current",
    displayName: "National Flag",
    aliases: ["Samoan Flag"],
    tags: ["official", "current", "national"],
    startYear: 1949,
    endYear: null
  },
  {
    id: "var_tokelau_current",
    entityId: "ent_tokelau",
    assetId: "ast_tokelau_current",
    displayName: "Territorial Flag",
    aliases: ["Tokelau National Flag"],
    tags: ["official", "current", "national"],
    startYear: 2009,
    endYear: null
  },
  {
    id: "var_tonga_current",
    entityId: "ent_tonga",
    assetId: "ast_tonga_current",
    displayName: "National Flag",
    aliases: ["Tongan Flag"],
    tags: ["official", "current", "national"],
    startYear: 1875,
    endYear: null
  },
  {
    id: "var_tuvalu_current",
    entityId: "ent_tuvalu",
    assetId: "ast_tuvalu_current",
    displayName: "National Flag",
    aliases: ["Tuvaluan Flag"],
    tags: ["official", "current", "national"],
    startYear: 1997,
    endYear: null
  },
  {
    id: "var_wallis_and_futuna_current_unofficial",
    entityId: "ent_wallis_and_futuna",
    assetId: "ast_wallis_and_futuna_unofficial",
    displayName: "Unofficial Territorial Flag",
    aliases: ["Uvéa Flag"],
    tags: ["unofficial", "current", "national"],
    startYear: 1985,
    endYear: null
  },

  /*
    Northern Africa.
  */
  {
    id: "var_algeria_current",
    entityId: "ent_algeria",
    assetId: "ast_algeria_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1962,
    endYear: null
  },
  {
    id: "var_egypt_current",
    entityId: "ent_egypt",
    assetId: "ast_egypt_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_libya_current",
    entityId: "ent_libya",
    assetId: "ast_libya_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2011,
    endYear: null
  },
  {
    id: "var_morocco_current",
    entityId: "ent_morocco",
    assetId: "ast_morocco_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1915,
    endYear: null
  },
  {
    id: "var_sudan_current",
    entityId: "ent_sudan",
    assetId: "ast_sudan_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1970,
    endYear: null
  },
  {
    id: "var_tunisia_current",
    entityId: "ent_tunisia",
    assetId: "ast_tunisia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1999,
    endYear: null
  },
  {
    id: "var_western_sahara_current",
    entityId: "ent_western_sahara",
    assetId: "ast_sahrawi_arab_democratic_republic_current",
    displayName: "Flag of the Sahrawi Arab Democratic Republic",
    aliases: [
      "Sahrawi Flag",
      "SADR Flag",
      "Polisario Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 1976,
    endYear: null
  },

  /*
    Eastern Africa.
  */
  {
    id: "var_burundi_current",
    entityId: "ent_burundi",
    assetId: "ast_burundi_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1967,
    endYear: null
  },
  {
    id: "var_comoros_current",
    entityId: "ent_comoros",
    assetId: "ast_comoros_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2001,
    endYear: null
  },
  {
    id: "var_djibouti_current",
    entityId: "ent_djibouti",
    assetId: "ast_djibouti_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1977,
    endYear: null
  },
  {
    id: "var_eritrea_current",
    entityId: "ent_eritrea",
    assetId: "ast_eritrea_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1995,
    endYear: null
  },
  {
    id: "var_ethiopia_current",
    entityId: "ent_ethiopia",
    assetId: "ast_ethiopia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2009,
    endYear: null
  },
  {
    id: "var_kenya_current",
    entityId: "ent_kenya",
    assetId: "ast_kenya_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1963,
    endYear: null
  },
  {
    id: "var_madagascar_current",
    entityId: "ent_madagascar",
    assetId: "ast_madagascar_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1958,
    endYear: null
  },
  {
    id: "var_malawi_current",
    entityId: "ent_malawi",
    assetId: "ast_malawi_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2012,
    endYear: null
  },
  {
    id: "var_mauritius_current",
    entityId: "ent_mauritius",
    assetId: "ast_mauritius_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1968,
    endYear: null
  },
  {
    id: "var_mozambique_current",
    entityId: "ent_mozambique",
    assetId: "ast_mozambique_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1983,
    endYear: null
  },
  {
    id: "var_rwanda_current",
    entityId: "ent_rwanda",
    assetId: "ast_rwanda_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2001,
    endYear: null
  },
  {
    id: "var_seychelles_current",
    entityId: "ent_seychelles",
    assetId: "ast_seychelles_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1996,
    endYear: null
  },
  {
    id: "var_somalia_current",
    entityId: "ent_somalia",
    assetId: "ast_somalia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1954,
    endYear: null
  },
  {
    id: "var_somaliland_current",
    entityId: "ent_somaliland",
    assetId: "ast_somaliland_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1996,
    endYear: null
  },
  {
    id: "var_south_sudan_current",
    entityId: "ent_south_sudan",
    assetId: "ast_south_sudan_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2005,
    endYear: null
  },
  {
    id: "var_tanzania_current",
    entityId: "ent_tanzania",
    assetId: "ast_tanzania_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1964,
    endYear: null
  },
  {
    id: "var_uganda_current",
    entityId: "ent_uganda",
    assetId: "ast_uganda_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1962,
    endYear: null
  },
  {
    id: "var_zambia_current",
    entityId: "ent_zambia",
    assetId: "ast_zambia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1996,
    endYear: null
  },
  {
    id: "var_zimbabwe_current",
    entityId: "ent_zimbabwe",
    assetId: "ast_zimbabwe_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1980,
    endYear: null
  },
  {
    id: "var_mayotte_unofficial",
    entityId: "ent_mayotte",
    assetId: "ast_mayotte_unofficial",
    displayName: "Unofficial Local Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_reunion_unofficial",
    entityId: "ent_reunion",
    assetId: "ast_reunion_unofficial",
    displayName: "Unofficial Local Flag",
    aliases: [
      "Lö Mahavéli",
      "Lo Mahavéli",
      "Lö Mavéli",
      "Lo Mavéli"
    ],
    tags: ["unofficial", "current"],
    startYear: 2003,
    endYear: null
  },
  {
    id: "var_british_indian_ocean_territory_current",
    entityId: "ent_british_indian_ocean_territory",
    assetId: "ast_british_indian_ocean_territory_current",
    displayName: "Official Flag",
    aliases: ["BIOT Flag"],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_french_southern_and_antarctic_lands_current",
    entityId: "ent_french_southern_and_antarctic_lands",
    assetId: "ast_french_southern_and_antarctic_lands_current",
    displayName: "Official Flag",
    aliases: [
      "TAAF Flag",
      "Flag of the French Southern Territories"
    ],
    tags: ["official", "current", "national"],
    startYear: 2007,
    endYear: null
  },
  
  /*
    International organisations.
  */
  {
    id: "var_united_nations_current",
    entityId: "ent_united_nations",
    assetId: "ast_united_nations_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_unicef_current",
    entityId: "ent_unicef",
    assetId: "ast_unicef_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_unesco_current",
    entityId: "ent_unesco",
    assetId: "ast_unesco_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_world_health_organization_current",
    entityId: "ent_world_health_organization",
    assetId: "ast_who_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_world_food_programme_current",
    entityId: "ent_world_food_programme",
    assetId: "ast_wfp_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_international_labour_organization_current",
    entityId: "ent_international_labour_organization",
    assetId: "ast_ilo_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_international_maritime_organization_current",
    entityId: "ent_international_maritime_organization",
    assetId: "ast_imo_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_international_telecommunication_union_current",
    entityId: "ent_international_telecommunication_union",
    assetId: "ast_itu_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_international_civil_aviation_organization_current",
    entityId: "ent_international_civil_aviation_organization",
    assetId: "ast_icao_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_world_meteorological_organization_current",
    entityId: "ent_world_meteorological_organization",
    assetId: "ast_wmo_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_international_atomic_energy_agency_current",
    entityId: "ent_international_atomic_energy_agency",
    assetId: "ast_iaea_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_universal_postal_union_current",
    entityId: "ent_universal_postal_union",
    assetId: "ast_upu_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_international_criminal_court_current",
    entityId: "ent_international_criminal_court",
    assetId: "ast_icc_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_united_nations_parliamentary_administration_current",
    entityId: "ent_united_nations_parliamentary_administration",
    assetId: "ast_unpa_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_arab_league_current",
    entityId: "ent_arab_league",
    assetId: "ast_arab_league_current",
    displayName: "Organisation Flag",
    aliases: ["Flag of the League of Arab States"],
    tags: ["organisation", "current"],
    startYear: 1945,
    endYear: null
  },

  {
    id: "var_organisation_of_islamic_cooperation_current",
    entityId: "ent_organisation_of_islamic_cooperation",
    assetId: "ast_oic_current",
    displayName: "Organisation Flag",
    aliases: ["Flag of the Organisation of Islamic Cooperation", "OIC Flag"],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_commonwealth_of_nations_current",
    entityId: "ent_commonwealth_of_nations",
    assetId: "ast_commonwealth_current",
    displayName: "Organisation Flag",
    aliases: ["Commonwealth Flag", "Flag of the Commonwealth of Nations"],
    tags: ["organisation", "current"],
    startYear: 2013,
    endYear: null
  },

  {
    id: "var_european_union_current",
    entityId: "ent_european_union",
    assetId: "ast_eu_current",
    displayName: "European Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_nordic_council_current",
    entityId: "ent_nordic_council",
    assetId: "ast_nordic_council_current",
    displayName: "Nordic Council Flag",
    aliases: ["Nordic cooperation flag", "Swan flag"],
    tags: ["organisation", "current"],
    startYear: 2016,
    endYear: null
  },

  {
    id: "var_nato_current",
    entityId: "ent_nato",
    assetId: "ast_nato_current",
    displayName: "NATO Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_antarctic_treaty_system_current",
    entityId: "ent_antarctic_treaty_system",
    assetId: "ast_antarctic_treaty_current",
    displayName: "Treaty Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_interpol_current",
    entityId: "ent_interpol",
    assetId: "ast_interpol_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_international_olympic_committee_current",
    entityId: "ent_international_olympic_committee",
    assetId: "ast_olympics_current",
    displayName: "Olympic Flag",
    aliases: [],
    tags: ["organisation", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_fifa_current",
    entityId: "ent_fifa",
    assetId: "ast_fifa_current",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current", "non_quizzable"],
    startYear: null,
    endYear: null
  },

/*
    Technical quiz-safe variants.

    text_removed variants are displayed during a quiz but normally resolve to
    the entity's default or gallery variant for Gallery and answer reveal.
  */
  {
    id: "var_mayotte_unofficial_quiz",
    entityId: "ent_mayotte",
    assetId: "ast_mayotte_unofficial_text_removed",
    displayName: "Unofficial Local Flag",
    aliases: [],
    tags: ["unofficial", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_mayotte_unofficial"
  },

  /*
    Middle Africa.
  */
  {
    id: "var_angola_current",
    entityId: "ent_angola",
    assetId: "ast_angola_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1975,
    endYear: null
  },
  {
    id: "var_cameroon_current",
    entityId: "ent_cameroon",
    assetId: "ast_cameroon_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1975,
    endYear: null
  },
  {
    id: "var_central_african_republic_current",
    entityId: "ent_central_african_republic",
    assetId: "ast_central_african_republic_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1958,
    endYear: null
  },
  {
    id: "var_chad_current",
    entityId: "ent_chad",
    assetId: "ast_chad_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "ambiguous_quiz_visual"],
    quizVisualGroupId: "blue_yellow_red_vertical_tricolour",
    startYear: 1959,
    endYear: null
  },
  {
    id: "var_democratic_republic_of_the_congo_current",
    entityId: "ent_democratic_republic_of_the_congo",
    assetId: "ast_democratic_republic_of_the_congo_current",
    displayName: "National Flag",
    aliases: [
      "DR Congo Flag",
      "DRC Flag",
      "Congo-Kinshasa Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 2006,
    endYear: null
  },
  {
    id: "var_equatorial_guinea_current",
    entityId: "ent_equatorial_guinea",
    assetId: "ast_equatorial_guinea_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1979,
    endYear: null
  },
  {
    id: "var_gabon_current",
    entityId: "ent_gabon",
    assetId: "ast_gabon_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1960,
    endYear: null
  },
  {
    id: "var_republic_of_the_congo_current",
    entityId: "ent_republic_of_the_congo",
    assetId: "ast_republic_of_the_congo_current",
    displayName: "National Flag",
    aliases: [
      "Congo Republic Flag",
      "Congo-Brazzaville Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 1991,
    endYear: null
  },
  {
    id: "var_sao_tome_and_principe_current",
    entityId: "ent_sao_tome_and_principe",
    assetId: "ast_sao_tome_and_principe_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1975,
    endYear: null
  },

  /*
    Southern Africa.
  */
  {
    id: "var_botswana_current",
    entityId: "ent_botswana",
    assetId: "ast_botswana_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1966,
    endYear: null
  },
  {
    id: "var_eswatini_current",
    entityId: "ent_eswatini",
    assetId: "ast_eswatini_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1968,
    endYear: null
  },
  {
    id: "var_lesotho_current",
    entityId: "ent_lesotho",
    assetId: "ast_lesotho_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2006,
    endYear: null
  },
  {
    id: "var_namibia_current",
    entityId: "ent_namibia",
    assetId: "ast_namibia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_south_africa_current",
    entityId: "ent_south_africa",
    assetId: "ast_south_africa_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1994,
    endYear: null
  },

  /*
    Western Africa.
  */
  {
    id: "var_benin_current",
    entityId: "ent_benin",
    assetId: "ast_benin_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_burkina_faso_current",
    entityId: "ent_burkina_faso",
    assetId: "ast_burkina_faso_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_cabo_verde_current",
    entityId: "ent_cabo_verde",
    assetId: "ast_cape_verde_current",
    displayName: "National Flag",
    aliases: ["Cape Verde Flag"],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_cote_d_ivoire_current",
    entityId: "ent_cote_d_ivoire",
    assetId: "ast_cote_divoire_current",
    displayName: "National Flag",
    aliases: [
      "Ivory Coast Flag",
      "Cote d'Ivoire Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 1959,
    endYear: null
  },
  {
    id: "var_gambia_current",
    entityId: "ent_gambia",
    assetId: "ast_gambia_current",
    displayName: "National Flag",
    aliases: ["Gambian Flag"],
    tags: ["official", "current", "national"],
    startYear: 1965,
    endYear: null
  },
  {
    id: "var_ghana_current",
    entityId: "ent_ghana",
    assetId: "ast_ghana_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1966,
    endYear: null
  },
  {
    id: "var_guinea_current",
    entityId: "ent_guinea",
    assetId: "ast_guinea_current",
    displayName: "National Flag",
    aliases: ["Guinea-Conakry Flag"],
    tags: ["official", "current", "national"],
    startYear: 1958,
    endYear: null
  },
  {
    id: "var_guinea_bissau_current",
    entityId: "ent_guinea_bissau",
    assetId: "ast_guinea_bissau_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1973,
    endYear: null
  },
  {
    id: "var_liberia_current",
    entityId: "ent_liberia",
    assetId: "ast_liberia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1847,
    endYear: null
  },
  {
    id: "var_mali_current",
    entityId: "ent_mali",
    assetId: "ast_mali_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1961,
    endYear: null
  },
  {
    id: "var_mauritania_current",
    entityId: "ent_mauritania",
    assetId: "ast_mauritania_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2017,
    endYear: null
  },
  {
    id: "var_niger_current",
    entityId: "ent_niger",
    assetId: "ast_niger_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1959,
    endYear: null
  },
  {
    id: "var_nigeria_current",
    entityId: "ent_nigeria",
    assetId: "ast_nigeria_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1960,
    endYear: null
  },
  {
    id: "var_senegal_current",
    entityId: "ent_senegal",
    assetId: "ast_senegal_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1960,
    endYear: null
  },
  {
    id: "var_sierra_leone_current",
    entityId: "ent_sierra_leone",
    assetId: "ast_sierra_leone_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1961,
    endYear: null
  },
  {
    id: "var_togo_current",
    entityId: "ent_togo",
    assetId: "ast_togo_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1960,
    endYear: null
  },
  {
    id: "var_saint_helena_current",
    entityId: "ent_saint_helena",
    assetId: "ast_saint_helena_current",
    displayName: "Official Flag",
    aliases: ["St Helena Flag"],
    tags: ["official", "current", "national"],
    startYear: 2019,
    endYear: null
  },
  {
    id: "var_ascension_island_current",
    entityId: "ent_ascension_island",
    assetId: "ast_ascension_island_current",
    displayName: "Official Flag",
    aliases: ["Ascension Flag"],
    tags: ["official", "current", "national"],
    startYear: 2013,
    endYear: null
  },
  {
    id: "var_tristan_da_cunha_current",
    entityId: "ent_tristan_da_cunha",
    assetId: "ast_tristan_da_cunha_current",
    displayName: "Official Flag",
    aliases: ["Tristan Flag"],
    tags: ["official", "current", "national"],
    startYear: 2002,
    endYear: null
  },

  /*
    South America.
  */
  {
    id: "var_argentina_civil",
    entityId: "ent_argentina",
    assetId: "ast_argentina_civil",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "civil", "ensign"],
    startYear: 1861,
    endYear: null
  },
  {
    id: "var_argentina_current",
    entityId: "ent_argentina",
    assetId: "ast_argentina_current",
    displayName: "National Flag",
    aliases: ["Argentine Flag"],
    tags: ["official", "current", "national", "state", "naval_ensign"],
    startYear: 1861,
    endYear: null
  },
  {
    id: "var_bolivia_civil",
    entityId: "ent_bolivia",
    assetId: "ast_bolivia_civil",
    displayName: "Civil Flag",
    aliases: ["La Tricolor"],
    tags: ["official", "civil", "current", "national"],
    startYear: 1851,
    endYear: null
  },
  {
    id: "var_bolivia_state",
    entityId: "ent_bolivia",
    assetId: "ast_bolivia_state",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "state", "current", "national"],
    startYear: 1851,
    endYear: null
  },
  {
    id: "var_brazil_current",
    entityId: "ent_brazil",
    assetId: "ast_brazil_current",
    displayName: "National Flag",
    aliases: ["A Auriverde", "Verde e amarela"],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_brazil_naval_jack",
    entityId: "ent_brazil",
    assetId: "ast_brazil_naval_jack",
    displayName: "Naval Jack",
    aliases: [],
    tags: ["official", "current", "naval_jack"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_chile_current",
    entityId: "ent_chile",
    assetId: "ast_chile_current",
    displayName: "National Flag",
    aliases: ["La Estrella Solitaria"],
    tags: ["official", "current", "ensign", "national"],
    startYear: 1817,
    endYear: null
  },
  {
    id: "var_colombia_civil_ensign",
    entityId: "ent_colombia",
    assetId: "ast_colombia_civil_ensign",
    displayName: "Civil Ensign",
    aliases: [],
    tags: ["official", "current", "civil_ensign"],
    startYear: 1861,
    endYear: null
  },
  {
    id: "var_colombia_current",
    entityId: "ent_colombia",
    assetId: "ast_colombia_current",
    displayName: "National Flag",
    aliases: ["El Tricolor Nacional"],
    tags: ["official", "current", "national", "civil"],
    startYear: 1861,
    endYear: null
  },
  {
    id: "var_colombia_naval_ensign",
    entityId: "ent_colombia",
    assetId: "ast_colombia_naval_ensign",
    displayName: "Naval Ensign",
    aliases: [],
    tags: ["official", "current", "naval_ensign"],
    startYear: 1861,
    endYear: null
  },
  {
    id: "var_colombia_naval_jack",
    entityId: "ent_colombia",
    assetId: "ast_colombia_naval_jack",
    displayName: "Naval Jack",
    aliases: [],
    tags: ["official", "current", "naval_jack"],
    startYear: 1861,
    endYear: null
  },
  {
    id: "var_colombia_state",
    entityId: "ent_colombia",
    assetId: "ast_colombia_state",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "state", "ensign"],
    startYear: 1861,
    endYear: null
  },
  {
    id: "var_ecuador_civil",
    entityId: "ent_ecuador",
    assetId: "ast_ecuador_civil",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "civil"],
    startYear: 2009,
    endYear: null
  },
  {
    id: "var_ecuador_current",
    entityId: "ent_ecuador",
    assetId: "ast_ecuador_current",
    displayName: "State Flag",
    aliases: ["La Tricolor", "The Tricolor"],
    tags: ["official", "current", "state", "war", "civil_ensign", "national"],
    startYear: 2009,
    endYear: null
  },
  {
    id: "var_falkland_islands_civil_ensign",
    entityId: "ent_falkland_islands",
    assetId: "ast_falkland_islands_civil_ensign",
    displayName: "Civil Ensign",
    aliases: [],
    tags: ["official", "current", "civil_ensign"],
    startYear: 1999,
    endYear: null
  },
  {
    id: "var_falkland_islands_current",
    entityId: "ent_falkland_islands",
    assetId: "ast_falkland_islands_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1999,
    endYear: null
  },
  {
    id: "var_french_guiana_current_unofficial",
    entityId: "ent_french_guiana",
    assetId: "ast_french_guiana_current_unofficial",
    displayName: "Unofficial National Flag",
    aliases: [],
    tags: ["unofficial", "current", "national"],
    startYear: 1967,
    endYear: null
  },
  {
    id: "var_guyana_civil_air_ensign",
    entityId: "ent_guyana",
    assetId: "ast_guyana_civil_air_ensign",
    displayName: "Civil Air Ensign",
    aliases: [],
    tags: ["official", "current", "air_force"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_guyana_current",
    entityId: "ent_guyana",
    assetId: "ast_guyana_current",
    displayName: "National Flag",
    aliases: ["The Golden Arrowhead"],
    tags: ["official", "current", "national"],
    startYear: 1966,
    endYear: null
  },
  {
    id: "var_paraguay_obverse",
    entityId: "ent_paraguay",
    assetId: "ast_paraguay_obverse",
    displayName: "Obverse",
    aliases: [],
    tags: ["official", "current", "obverse", "national"],
    startYear: 2013,
    endYear: null,
	relatedVariants: {
    reverses: ["var_paraguay_reverse"]
    }
  },
  {
    id: "var_paraguay_reverse",
    entityId: "ent_paraguay",
    assetId: "ast_paraguay_reverse",
    displayName: "Reverse",
    aliases: [],
    tags: ["official", "current", "reverse", "national"],
    startYear: 2013,
    endYear: null,
	relatedVariants: {
    reverses: ["var_paraguay_obverse"]
    }	
  },
  {
    id: "var_peru_civil",
    entityId: "ent_peru",
    assetId: "ast_peru_civil",
    displayName: "Civil Flag",
    aliases: ["Bandera nacional", "El pendón bicolor", "The Bicolor Banner",
	"La enseña nacional", "The National Ensign"],
    tags: ["official", "current", "civil", "national"],
    startYear: 1950,
    endYear: null
  },
   {
    id: "var_peru_state",
    entityId: "ent_peru",
    assetId: "ast_peru_state",
    displayName: "State Flag",
    aliases: ["Pabellón nacional"],
    tags: ["official", "current", "state"],
    startYear: 1950,
    endYear: null
  },
  {
    id: "var_peru_war",
    entityId: "ent_peru",
    assetId: "ast_peru_war",
    displayName: "War Flag",
    aliases: [],
    tags: ["official", "current", "war"],
    startYear: 1901,
    endYear: null
  },
  {
    id: "var_south_georgia_and_the_south_sandwich_islands_current",
    entityId: "ent_south_georgia_and_the_south_sandwich_islands",
    assetId: "ast_south_georgia_and_the_south_sandwich_islands_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1999,
    endYear: null
  },
  {
    id: "var_suriname_current",
    entityId: "ent_suriname",
    assetId: "ast_suriname_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1975,
    endYear: null
  },
  {
    id: "var_uruguay_artigas",
    entityId: "ent_uruguay",
    assetId: "ast_uruguay_artigas",
    displayName: "Artigas Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1952,
    endYear: null,
	relatedVariants: {
    alternatives: [
      "var_uruguay_current",
      "var_uruguay_treinta"
      ]
    }
  },
  {
    id: "var_uruguay_current",
    entityId: "ent_uruguay",
    assetId: "ast_uruguay_current",
    displayName: "National Flag",
    aliases: ["Pabellón nacional", "National Pavilion"],
    tags: ["official", "current", "national"],
    startYear: 1830,
    endYear: null,
	relatedVariants: {
    alternatives: [
      "var_uruguay_artigas",
      "var_uruguay_treinta"
      ]
    }
  },
  {
    id: "var_uruguay_treinta",
    entityId: "ent_uruguay",
    assetId: "ast_uruguay_treinta",
    displayName: "Flag of the Treinta y Tres",
    aliases: ["Treinta y Tres", "Flag of the Thirty Three", "Thirty Three"],
    tags: ["official", "current"],
    startYear: 1952,
    endYear: null,
	relatedVariants: {
    alternatives: [
      "var_uruguay_current",
      "var_uruguay_artigas"
      ]
    }
  },
  {
    id: "var_venezuela_current",
    entityId: "ent_venezuela",
    assetId: "ast_venezuela_current",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil"],
    startYear: 2006,
    endYear: null
  },
  {
    id: "var_venezuela_state",
    entityId: "ent_venezuela",
    assetId: "ast_venezuela_state",
    displayName: "State and War Flag",
    aliases: [],
    tags: ["official", "current", "state", "war"],
    startYear: 2006,
    endYear: null
  },

  /*
    Venezuelan states and Capital District.
  */
  {
    id: "var_amazonas_current",
    entityId: "ent_venezuela_amazonas",
    assetId: "ast_amazonas_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_anzoategui_current",
    entityId: "ent_venezuela_anzoategui",
    assetId: "ast_anzoategui_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_apure_current",
    entityId: "ent_venezuela_apure",
    assetId: "ast_apure_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_aragua_current",
    entityId: "ent_venezuela_aragua",
    assetId: "ast_aragua_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_barinas_current",
    entityId: "ent_venezuela_barinas",
    assetId: "ast_barinas_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bolivar_current",
    entityId: "ent_venezuela_bolivar",
    assetId: "ast_bolivar_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_carabobo_current",
    entityId: "ent_venezuela_carabobo",
    assetId: "ast_carabobo_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_caracas_current",
    entityId: "ent_venezuela_caracas",
    assetId: "ast_caracas_current",
    displayName: "Official Flag",
    aliases: ["Capital District Flag", "Distrito Capital Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cojedes_current",
    entityId: "ent_venezuela_cojedes",
    assetId: "ast_cojedes_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_delta_amacuro_current",
    entityId: "ent_venezuela_delta_amacuro",
    assetId: "ast_delta_amacuro_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_falcon_current",
    entityId: "ent_venezuela_falcon",
    assetId: "ast_falcon_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_guarico_current",
    entityId: "ent_venezuela_guarico",
    assetId: "ast_guarico_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_la_guaira_current",
    entityId: "ent_venezuela_la_guaira",
    assetId: "ast_la_guaira_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lara_current",
    entityId: "ent_venezuela_lara",
    assetId: "ast_lara_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_merida_current",
    entityId: "ent_venezuela_merida",
    assetId: "ast_merida_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_miranda_current",
    entityId: "ent_venezuela_miranda",
    assetId: "ast_miranda_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_monagas_current",
    entityId: "ent_venezuela_monagas",
    assetId: "ast_monagas_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_nueva_esparta_current",
    entityId: "ent_venezuela_nueva_esparta",
    assetId: "ast_nueva_esparta_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_portuguesa_current",
    entityId: "ent_venezuela_portuguesa",
    assetId: "ast_portuguesa_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sucre_current",
    entityId: "ent_venezuela_sucre",
    assetId: "ast_sucre_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_tachira_current",
    entityId: "ent_venezuela_tachira",
    assetId: "ast_tachira_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_trujillo_current",
    entityId: "ent_venezuela_trujillo",
    assetId: "ast_trujillo_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_yaracuy_current",
    entityId: "ent_venezuela_yaracuy",
    assetId: "ast_yaracuy_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_zulia_current",
    entityId: "ent_venezuela_zulia",
    assetId: "ast_zulia_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  
   /*
    Technical quiz-safe variants.

    text_removed variants are displayed during a quiz but normally resolve to
    the entity's default or gallery variant for Gallery and answer reveal.
  */

  {
    id: "var_apure_current_text_removed",
    entityId: "ent_venezuela_apure",
    assetId: "ast_apure_current_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_apure_current"
  },
  {
    id: "var_aragua_current_text_removed",
    entityId: "ent_venezuela_aragua",
    assetId: "ast_aragua_current_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_aragua_current"
  },
  {
    id: "var_venezuela_state_quiz",
    entityId: "ent_venezuela",
    assetId: "ast_venezuela_state_text_removed",
    displayName: "State and War Flag",
    aliases: [],
    tags: ["official", "current", "state", "war", "quiz", "text_removed"],
    startYear: 2006,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_venezuela_state"
  },
  {
    id: "var_bolivia_state_quiz",
    entityId: "ent_bolivia",
    assetId: "ast_bolivia_state_text_removed",
    displayName: "State Flag",
    aliases: [],
    tags: ["state", "current", "quiz", "text_removed"],
    startYear: 1851,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_bolivia_state"
  },
  {
    id: "var_paraguay_obverse_quiz",
    entityId: "ent_paraguay",
    assetId: "ast_paraguay_obverse_text_removed",
    displayName: "Obverse",
    aliases: [],
    tags: ["official", "current", "obverse", "quiz", "text_removed"],
    startYear: 2013,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_paraguay_obverse"
  },

  /*
    North America.
  */
  {
    id: "var_bermuda_current",
    entityId: "ent_bermuda",
    assetId: "ast_bermuda_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1910,
    endYear: null
  },
  {
    id: "var_canada_current",
    entityId: "ent_canada",
    assetId: "ast_canada_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1965,
    endYear: null
  },
  {
    id: "var_canada_alberta_current",
    entityId: "ent_canada_alberta",
    assetId: "ast_alberta_current",
    displayName: "Provincial Flag",
    aliases: ["Alberta Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_british_columbia_current",
    entityId: "ent_canada_british_columbia",
    assetId: "ast_british_columbia_current",
    displayName: "Provincial Flag",
    aliases: ["British Columbia Flag", "BC Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_manitoba_current",
    entityId: "ent_canada_manitoba",
    assetId: "ast_manitoba_current",
    displayName: "Provincial Flag",
    aliases: ["Manitoba Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_new_brunswick_current",
    entityId: "ent_canada_new_brunswick",
    assetId: "ast_new_brunswick_current",
    displayName: "Provincial Flag",
    aliases: ["New Brunswick Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_newfoundland_and_labrador_current",
    entityId: "ent_canada_newfoundland_and_labrador",
    assetId: "ast_newfoundland_and_labrador_current",
    displayName: "Provincial Flag",
    aliases: ["Newfoundland and Labrador Flag", "Newfoundland Flag", "Labrador Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_nova_scotia_current",
    entityId: "ent_canada_nova_scotia",
    assetId: "ast_nova_scotia_current",
    displayName: "Provincial Flag",
    aliases: ["Nova Scotia Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_ontario_current",
    entityId: "ent_canada_ontario",
    assetId: "ast_ontario_current",
    displayName: "Provincial Flag",
    aliases: ["Ontario Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_prince_edward_island_current",
    entityId: "ent_canada_prince_edward_island",
    assetId: "ast_prince_edward_island_current",
    displayName: "Provincial Flag",
    aliases: ["Prince Edward Island Flag", "PEI Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_quebec_current",
    entityId: "ent_canada_quebec",
    assetId: "ast_quebec_current",
    displayName: "Provincial Flag",
    aliases: ["Quebec Flag", "Québec Flag", "Fleurdelisé"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_saskatchewan_current",
    entityId: "ent_canada_saskatchewan",
    assetId: "ast_saskatchewan_current",
    displayName: "Provincial Flag",
    aliases: ["Saskatchewan Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_northwest_territories_current",
    entityId: "ent_canada_northwest_territories",
    assetId: "ast_northwest_territories_current",
    displayName: "Territorial Flag",
    aliases: ["Northwest Territories Flag", "NWT Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_nunavut_current",
    entityId: "ent_canada_nunavut",
    assetId: "ast_nunavut_current",
    displayName: "Territorial Flag",
    aliases: ["Nunavut Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_canada_yukon_current",
    entityId: "ent_canada_yukon",
    assetId: "ast_yukon_current",
    displayName: "Territorial Flag",
    aliases: ["Yukon Flag", "Yukon Territory Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_greenland_current",
    entityId: "ent_greenland",
    assetId: "ast_greenland_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1985,
    endYear: null
  },
  {
    id: "var_saint_pierre_and_miquelon_current_unofficial",
    entityId: "ent_saint_pierre_and_miquelon",
    assetId: "ast_saint_pierre_and_miquelon_current_unofficial",
    displayName: "Unofficial National Flag",
    aliases: [],
    tags: ["unofficial", "current", "national"],
    startYear: 1980,
    startYearLatest: 1989,
    startYearPrecision: "decade",
    endYear: null
},
  {
    id: "var_united_states_current",
    entityId: "ent_united_states",
    assetId: "ast_united_states_current",
    displayName: "National Flag",
    aliases: [
      "Stars and Stripes",
      "Old Glory"
    ],
    tags: ["official", "current", "national"],
    startYear: 1960,
    endYear: null
  },
  
  /*
    US States.
  */
  {
    id: "var_alabama",
    entityId: "ent_alabama",
    assetId: "ast_alabama",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1895,
    endYear: null
  },
  {
    id: "var_alaska",
    entityId: "ent_alaska",
    assetId: "ast_alaska",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1927,
    endYear: null
  },
  {
    id: "var_arizona",
    entityId: "ent_arizona",
    assetId: "ast_arizona",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1912,
    endYear: null
  },
  {
    id: "var_arkansas",
    entityId: "ent_arkansas",
    assetId: "ast_arkansas",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1913,
    endYear: null
  },
  {
    id: "var_california_official",
    entityId: "ent_california",
    assetId: "ast_california_official",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1911,
    endYear: null
  },
  {
    id: "var_colorado",
    entityId: "ent_colorado",
    assetId: "ast_colorado",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1911,
    endYear: null
  },
  {
    id: "var_connecticut",
    entityId: "ent_connecticut",
    assetId: "ast_connecticut",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1897,
    endYear: null
  },
  {
    id: "var_delaware",
    entityId: "ent_delaware",
    assetId: "ast_delaware",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1913,
    endYear: null
  },
  {
    id: "var_district_of_columbia",
    entityId: "ent_district_of_columbia",
    assetId: "ast_washington_dc",
    displayName: "Official Flag",
    aliases: ["Washington, D.C. Flag", "DC Flag"],
    tags: ["official", "current"],
    startYear: 1938,
    endYear: null
  },
  {
    id: "var_florida",
    entityId: "ent_florida",
    assetId: "ast_florida",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1900,
    endYear: null
  },
  {
    id: "var_georgia_state",
    entityId: "ent_georgia_state",
    assetId: "ast_georgia_state",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 2003,
    endYear: null
  },
  {
    id: "var_hawaii",
    entityId: "ent_hawaii",
    assetId: "ast_hawaii",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1845,
    endYear: null
  },
  {
    id: "var_idaho",
    entityId: "ent_idaho",
    assetId: "ast_idaho",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1907,
    endYear: null
  },
  {
    id: "var_illinois",
    entityId: "ent_illinois",
    assetId: "ast_illinois",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1915,
    endYear: null
  },
  {
    id: "var_indiana",
    entityId: "ent_indiana",
    assetId: "ast_indiana",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1917,
    endYear: null
  },
  {
    id: "var_iowa",
    entityId: "ent_iowa",
    assetId: "ast_iowa",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1921,
    endYear: null
  },
  {
    id: "var_kansas",
    entityId: "ent_kansas",
    assetId: "ast_kansas",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1961,
    endYear: null
  },
  {
    id: "var_kentucky",
    entityId: "ent_kentucky",
    assetId: "ast_kentucky",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1918,
    endYear: null
  },
    {
    id: "var_louisiana",
    entityId: "ent_louisiana",
    assetId: "ast_louisiana",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 2010,
    endYear: null
  },
  {
    id: "var_maine",
    entityId: "ent_maine",
    assetId: "ast_maine",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1909,
    endYear: null
  },
  {
    id: "var_maryland",
    entityId: "ent_maryland",
    assetId: "ast_maryland",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1904,
    endYear: null
  },
  {
    id: "var_massachusetts",
    entityId: "ent_massachusetts",
    assetId: "ast_massachusetts",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1971,
    endYear: null
  },
  {
    id: "var_michigan",
    entityId: "ent_michigan",
    assetId: "ast_michigan",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1911,
    endYear: null
  },
  {
    id: "var_minnesota",
    entityId: "ent_minnesota",
    assetId: "ast_minnesota",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 2024,
    endYear: null
  },
  {
    id: "var_mississippi",
    entityId: "ent_mississippi",
    assetId: "ast_mississippi",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 2021,
    endYear: null
  },
  {
    id: "var_missouri",
    entityId: "ent_missouri",
    assetId: "ast_missouri",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1913,
    endYear: null
  },
  {
    id: "var_montana",
    entityId: "ent_montana",
    assetId: "ast_montana",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1981,
    endYear: null
  },
  {
    id: "var_nebraska",
    entityId: "ent_nebraska",
    assetId: "ast_nebraska",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1925,
    endYear: null
  },
  {
    id: "var_nevada",
    entityId: "ent_nevada",
    assetId: "ast_nevada",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1991,
    endYear: null
  },
  {
    id: "var_new_hampshire",
    entityId: "ent_new_hampshire",
    assetId: "ast_new_hampshire",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1909,
    endYear: null
  },
  {
    id: "var_new_jersey",
    entityId: "ent_new_jersey",
    assetId: "ast_new_jersey",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1896,
    endYear: null
  },
  {
    id: "var_new_mexico",
    entityId: "ent_new_mexico",
    assetId: "ast_new_mexico",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1925,
    endYear: null
  },
  {
    id: "var_new_york",
    entityId: "ent_new_york",
    assetId: "ast_new_york",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 2020,
    endYear: null
  },
  {
    id: "var_north_carolina",
    entityId: "ent_north_carolina",
    assetId: "ast_north_carolina",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1885,
    endYear: null
  },
  {
    id: "var_north_dakota",
    entityId: "ent_north_dakota",
    assetId: "ast_north_dakota",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1911,
    endYear: null
  },
  {
    id: "var_ohio",
    entityId: "ent_ohio",
    assetId: "ast_ohio",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1902,
    endYear: null
  },
  {
    id: "var_oklahoma",
    entityId: "ent_oklahoma",
    assetId: "ast_oklahoma",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1941,
    endYear: null
  },
  {
    id: "var_oregon_obverse",
    entityId: "ent_oregon",
    assetId: "ast_oregon_obverse",
    displayName: "Obverse",
    aliases: [],
    tags: ["official", "current", "obverse"],
    startYear: 1925,
    endYear: null,
	relatedVariants: {
    reverses: ["var_oregon_reverse"]
    }
  },
  {
    id: "var_oregon_reverse",
    entityId: "ent_oregon",
    assetId: "ast_oregon_reverse",
    displayName: "Reverse",
    aliases: [],
    tags: ["official", "current", "reverse"],
    startYear: 1925,
    endYear: null,
	relatedVariants: {
    reverses: ["var_oregon_obverse"]
    }
  },
  {
    id: "var_pennsylvania",
    entityId: "ent_pennsylvania",
    assetId: "ast_pennsylvania",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1907,
    endYear: null
  },
  {
    id: "var_rhode_island",
    entityId: "ent_rhode_island",
    assetId: "ast_rhode_island",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1897,
    endYear: null
  },
  {
    id: "var_south_carolina",
    entityId: "ent_south_carolina",
    assetId: "ast_south_carolina",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1861,
    endYear: null
  },
  {
    id: "var_south_dakota",
    entityId: "ent_south_dakota",
    assetId: "ast_south_dakota",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_tennessee",
    entityId: "ent_tennessee",
    assetId: "ast_tennessee",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1905,
    endYear: null
  },
  {
    id: "var_texas",
    entityId: "ent_texas",
    assetId: "ast_texas",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1839,
    endYear: null
  },
  {
    id: "var_utah",
    entityId: "ent_utah",
    assetId: "ast_utah",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 2024,
    endYear: null
  },
  {
    id: "var_vermont",
    entityId: "ent_vermont",
    assetId: "ast_vermont",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1923,
    endYear: null
  },
  {
    id: "var_virginia",
    entityId: "ent_virginia",
    assetId: "ast_virginia",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1912,
    endYear: null
  },
  {
    id: "var_washington",
    entityId: "ent_washington",
    assetId: "ast_washington",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1923,
    endYear: null
  },
  {
    id: "var_west_virginia",
    entityId: "ent_west_virginia",
    assetId: "ast_west_virginia",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1929,
    endYear: null
  },
  {
    id: "var_wisconsin",
    entityId: "ent_wisconsin",
    assetId: "ast_wisconsin",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1981,
    endYear: null
  },
  {
    id: "var_wyoming",
    entityId: "ent_wyoming",
    assetId: "ast_wyoming",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1917,
    endYear: null
  },

  /*
    Technical quiz-safe variants.

    text_removed variants are displayed during a quiz but normally resolve to
    the entity's default or gallery variant for Gallery and answer reveal.
  */
  {
    id: "var_arkansas_quiz",
    entityId: "ent_arkansas",
    assetId: "ast_arkansas_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1911,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_arkansas"
  },
  {
    id: "var_california_quiz",
    entityId: "ent_california",
    assetId: "ast_california_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1911,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_california_official"
  },
  {
    id: "var_florida_quiz",
    entityId: "ent_florida",
    assetId: "ast_florida_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1900,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_florida"
  },
  {
    id: "var_idaho_quiz",
    entityId: "ent_idaho",
    assetId: "ast_idaho_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1907,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_idaho"
  },
  {
    id: "var_illinois_quiz",
    entityId: "ent_illinois",
    assetId: "ast_illinois_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1915,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_illinois"
  },
  {
    id: "var_indiana_quiz",
    entityId: "ent_indiana",
    assetId: "ast_indiana_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1917,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_indiana"
  },
  {
    id: "var_iowa_quiz",
    entityId: "ent_iowa",
    assetId: "ast_iowa_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1921,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_iowa"
  },
  {
    id: "var_kansas_quiz",
    entityId: "ent_kansas",
    assetId: "ast_kansas_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1961,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_kansas"
  },
  {
    id: "var_kentucky_quiz",
    entityId: "ent_kentucky",
    assetId: "ast_kentucky_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1918,
    endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_kentucky"
  },
    {
    id: "var_maine_quiz",
    entityId: "ent_maine",
    assetId: "ast_maine_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1909,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_maine"
  },
  {
    id: "var_montana_quiz",
    entityId: "ent_montana",
    assetId: "ast_montana_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1981,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_montana"
  },
  {
    id: "var_nebraska_quiz",
    entityId: "ent_nebraska",
    assetId: "ast_nebraska_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1925,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_nebraska"
  },
  {
    id: "var_nevada_quiz",
    entityId: "ent_nevada",
    assetId: "ast_nevada_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1991,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_nevada"
  },
  {
    id: "var_new_hampshire_quiz",
    entityId: "ent_new_hampshire",
    assetId: "ast_new_hampshire_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1909,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_new_hampshire"
  },
  {
    id: "var_north_carolina_quiz",
    entityId: "ent_north_carolina",
    assetId: "ast_north_carolina_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1885,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_carolina"
  },
  {
    id: "var_north_dakota_quiz",
    entityId: "ent_north_dakota",
    assetId: "ast_north_dakota_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1911,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_dakota"
  },
    {
    id: "var_oklahoma_quiz",
    entityId: "ent_oklahoma",
    assetId: "ast_oklahoma_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1941,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_oklahoma"
  },
  {
    id: "var_oregon_quiz",
    entityId: "ent_oregon",
    assetId: "ast_oregon_obverse_text_removed",
    displayName: "Obverse",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1925,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_oregon_obverse"
  },
  {
    id: "var_south_dakota_quiz",
    entityId: "ent_south_dakota",
    assetId: "ast_south_dakota_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1992,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_south_dakota"
  },
  {
    id: "var_vermont_quiz",
    entityId: "ent_vermont",
    assetId: "ast_vermont_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1923,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_vermont"
  },
  {
    id: "var_virginia_quiz",
    entityId: "ent_virginia",
    assetId: "ast_virginia_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1912,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_virginia"
  },
  {
    id: "var_washington_quiz",
    entityId: "ent_washington",
    assetId: "ast_washington_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1923,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_washington"
  },
  {
    id: "var_west_virginia_quiz",
    entityId: "ent_west_virginia",
    assetId: "ast_west_virginia_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1929,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_west_virginia"
  },
  {
    id: "var_wisconsin_quiz",
    entityId: "ent_wisconsin",
    assetId: "ast_wisconsin_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1981,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_wisconsin"
  },
  {
    id: "var_wyoming_quiz",
    entityId: "ent_wyoming",
    assetId: "ast_wyoming_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1917,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_wyoming"
  },
  
  /*
    Central America
  */
   {
  id: "var_belize_current",
  entityId: "ent_belize",
  assetId: "ast_belize_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1981,
  endYear: null
},
{
  id: "var_costa_rica_current",
  entityId: "ent_costa_rica",
  assetId: "ast_costa_rica_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1848,
  endYear: null
},
{
  id: "var_costa_rica_state",
  entityId: "ent_costa_rica",
  assetId: "ast_costa_rica_state",
  displayName: "State Flag",
  aliases: [],
  tags: ["official", "current", "national", "state"],
  startYear: 1998,
  endYear: null
},
{
  id: "var_el_salvador_current",
  entityId: "ent_el_salvador",
  assetId: "ast_el_salvador_current",
  displayName: "National Flag",
  aliases: ["Bandera Magna", "Great Flag"],
  tags: ["official", "current", "national"],
  startYear: 1922,
  endYear: null
},
{
  id: "var_el_salvador_civil",
  entityId: "ent_el_salvador",
  assetId: "ast_el_salvador_civil",
  displayName: "Civil Flag",
  aliases: [],
  tags: ["official", "current", "national", "civil"],
  startYear: 1922,
  endYear: null
},
{
  id: "var_guatemala_current",
  entityId: "ent_guatemala",
  assetId: "ast_guatemala_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1871,
  endYear: null
},
{
  id: "var_guatemala_civil",
  entityId: "ent_guatemala",
  assetId: "ast_guatemala_civil",
  displayName: "Civil Flag",
  aliases: [],
  tags: ["official", "current", "national", "civil"],
  startYear: 1871,
  endYear: null
},
{
  id: "var_honduras_current",
  entityId: "ent_honduras",
  assetId: "ast_honduras_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1949,
  endYear: null
},
{
  id: "var_nicaragua_current",
  entityId: "ent_nicaragua",
  assetId: "ast_nicaragua_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1971,
  endYear: null
},
{
  id: "var_panama_current",
  entityId: "ent_panama",
  assetId: "ast_panama_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1925,
  endYear: null
},
{
  id: "var_mexico_current",
  entityId: "ent_mexico",
  assetId: "ast_mexico_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1968,
  endYear: null
},
{
  id: "var_mexico_state",
  entityId: "ent_mexico",
  assetId: "ast_mexico_state",
  alternativeAssetIds: [
    "ast_mexico_state_alt_notext"
    ],
  displayName: "State Flag",
  aliases: [],
  tags: ["official", "current", "national", "state"],
  startYear: 1968,
  endYear: null
},
{
  id: "var_mexico_state_alt_notext",
  entityId: "ent_mexico",
  assetId: "ast_mexico_state_alt_notext",
  displayName: "State Flag",
  aliases: [],
  tags: ["official", "current", "national", "state", "alternative"],
  startYear: 1968,
  endYear: null
},

   /*
    Technical quiz-safe variants.

    text_removed variants are displayed during a quiz but normally resolve to
    the entity's default or gallery variant for Gallery and answer reveal.
  */
  {
  id: "var_costa_rica_state_quiz",
  entityId: "ent_costa_rica",
  assetId: "ast_costa_rica_state_text_removed",
  displayName: "State Flag",
  aliases: [],
  tags: ["quiz", "text_removed", "current"],
  startYear: 1998,
  endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_costa_rica_state"
},
{
  id: "var_el_salvador_quiz",
  entityId: "ent_el_salvador",
  assetId: "ast_el_salvador_current_text_removed",
  displayName: "National Flag",
  aliases: ["Bandera Magna", "Great Flag"],
  tags: ["quiz", "text_removed", "current"],
  startYear: 1922,
  endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_el_salvador_current"
},
{
  id: "var_mexico_state_quiz",
  entityId: "ent_mexico",
  assetId: "ast_mexico_state_text_removed",
  displayName: "State Flag",
  aliases: [],
  tags: ["quiz", "text_removed", "current"],
  startYear: 1922,
  endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_mexico_state"
},
{
  id: "var_nicaragua_quiz",
  entityId: "ent_nicaragua",
  assetId: "ast_nicaragua_current_text_removed",
  displayName: "National Flag",
  aliases: [],
  tags: ["quiz", "text_removed", "current"],
  startYear: 1998,
  endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_nicaragua_current"
},
  
  
  /*
    Caribbean.
  */
  {
    id: "var_anguilla_current",
    entityId: "ent_anguilla",
    assetId: "ast_anguilla_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_antigua_and_barbuda_current",
    entityId: "ent_antigua_and_barbuda",
    assetId: "ast_antigua_and_barbuda_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1967,
    endYear: null
  },
  {
    id: "var_aruba_current",
    entityId: "ent_aruba",
    assetId: "ast_aruba_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1976,
    endYear: null
  },
{
    id: "var_bahamas_current",
    entityId: "ent_bahamas",
    assetId: "ast_bahamas_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1973,
    endYear: null
  },
  {
    id: "var_barbados_current",
    entityId: "ent_barbados",
    assetId: "ast_barbados_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1966,
    endYear: null
  },
  {
    id: "var_bonaire_current",
    entityId: "ent_bonaire",
    assetId: "ast_bonaire_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1981,
    endYear: null
  },
  {
    id: "var_british_virgin_islands_current",
    entityId: "ent_british_virgin_islands",
    assetId: "ast_british_virgin_islands_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1960,
    endYear: null
  },
  {
    id: "var_cayman_islands_current",
    entityId: "ent_cayman_islands",
    assetId: "ast_cayman_islands_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1999,
    endYear: null
  },
  {
    id: "var_cuba_current",
    entityId: "ent_cuba",
    assetId: "ast_cuba_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1902,
    endYear: null
  },
  {
    id: "var_curacao_current",
    entityId: "ent_curacao",
    assetId: "ast_curacao_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1984,
    endYear: null
  }, 
  {
    id: "var_dominica_current",
    entityId: "ent_dominica",
    assetId: "ast_dominica_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_dominican_republic_current",
    entityId: "ent_dominican_republic",
    assetId: "ast_dominican_republic_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1863,
    endYear: null
  },
  {
    id: "var_federal_dependencies_of_venezuela_current",
    entityId: "ent_federal_dependencies_of_venezuela",
    assetId: "ast_federal_dependencies_of_venezuela_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_grenada_current",
    entityId: "ent_grenada",
    assetId: "ast_grenada_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1974,
    endYear: null
  },
  {
    id: "var_guadeloupe_current_unofficial",
    entityId: "ent_guadeloupe",
    assetId: "ast_guadeloupe_current_unofficial",
    alternativeAssetIds: [
    "ast_guadeloupe_current_unofficial_red"
    ],
	quizAssetIds: [
    "ast_guadeloupe_current_unofficial",
    "ast_guadeloupe_current_unofficial_red"
    ],
    displayName: "Unofficial National Flag",
    aliases: [],
    tags: ["unofficial", "current", "national"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_guadeloupe_current_unofficial_red",
    entityId: "ent_guadeloupe",
    assetId: "ast_guadeloupe_current_unofficial_red",
    displayName: "Unofficial National Flag",
    aliases: [],
    tags: ["unofficial", "current", "national", "alternative"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_haiti_current",
    entityId: "ent_haiti",
    assetId: "ast_haiti_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1986,
    endYear: null
  },
  {
    id: "var_jamaica_current",
    entityId: "ent_jamaica",
    assetId: "ast_jamaica_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1962,
    endYear: null
  },
  {
    id: "var_martinique_current",
    entityId: "ent_martinique",
    assetId: "ast_martinique_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2023,
    endYear: null
  },
  {
    id: "var_montserrat_current",
    entityId: "ent_montserrat",
    assetId: "ast_montserrat_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1960,
    endYear: null
  },
  {
    id: "var_puerto_rico_current",
    entityId: "ent_puerto_rico",
    assetId: "ast_puerto_rico_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1952,
    endYear: null
  },
  {
    id: "var_saba_current",
    entityId: "ent_saba",
    assetId: "ast_saba_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1985,
    endYear: null
  },
  {
    id: "var_saint_barthelemy_current_unofficial",
    entityId: "ent_saint_barthelemy",
    assetId: "ast_saint_barthelemy_current_unofficial",
	alternativeAssetIds: [
    "ast_saint_barthelemy_current_unofficial_text"
    ],
    displayName: "Unofficial National Flag",
    aliases: [],
    tags: ["unofficial", "current", "national"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_saint_barthelemy_current_unofficial_text",
    entityId: "ent_saint_barthelemy",
    assetId: "ast_saint_barthelemy_current_unofficial_text",
    displayName: "Unofficial National Flag with text",
    aliases: [],
    tags: ["unofficial", "current", "national"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_saint_kitts_and_nevis_current",
    entityId: "ent_saint_kitts_and_nevis",
    assetId: "ast_saint_kitts_and_nevis_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1983,
    endYear: null
  },
  {
    id: "var_saint_lucia_current",
    entityId: "ent_saint_lucia",
    assetId: "ast_saint_lucia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2002,
    endYear: null
  },
  {
    id: "var_saint_martin_current_unofficial",
    entityId: "ent_saint_martin",
    assetId: "ast_saint_martin_current_unofficial",
    displayName: "Unofficial National Flag",
    aliases: [],
    tags: ["unofficial", "current", "national"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_saint_vincent_and_the_grenadines_current",
    entityId: "ent_saint_vincent_and_the_grenadines",
    assetId: "ast_saint_vincent_and_the_grenadines_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1985,
    endYear: null
  },
  {
    id: "var_sint_eustatius_current",
    entityId: "ent_sint_eustatius",
    assetId: "ast_sint_eustatius_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2004,
    endYear: null
  },
  {
    id: "var_sint_maarten_current",
    entityId: "ent_sint_maarten",
    assetId: "ast_sint_maarten_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1985,
    endYear: null
  },
  {
    id: "var_trinidad_and_tobago_current",
    entityId: "ent_trinidad_and_tobago",
    assetId: "ast_trinidad_and_tobago_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1962,
    endYear: null
  },
  {
    id: "var_turks_and_caicos_islands_current",
    entityId: "ent_turks_and_caicos_islands",
    assetId: "ast_turks_and_caicos_islands_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1968,
    endYear: null
  },
  {
    id: "var_us_virgin_islands_current",
    entityId: "ent_us_virgin_islands",
    assetId: "ast_us_virgin_islands_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1921,
    endYear: null
  },
  
  /*
    Technical quiz-safe variants.

    text_removed variants are displayed during a quiz but normally resolve to
    the entity's default or gallery variant for Gallery and answer reveal.
  */
  {
  id: "var_saint_martin_current_unofficial_quiz",
  entityId: "ent_saint_martin",
  assetId: "ast_saint_martin_current_unofficial_text_removed",
  displayName: "Unofficial National Flag",
  aliases: [],
  tags: ["quiz", "text_removed", "current", "unofficial"],
  startYear: null,
  endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_saint_martin_current_unofficial"
},
  {
  id: "var_saint_barthelemy_current_unofficial_text_quiz",
  entityId: "ent_saint_barthelemy",
  assetId: "ast_saint_barthelemy_current_unofficial_text_text_removed",
  displayName: "Unofficial National Flag",
  aliases: [],
  tags: ["quiz", "text_removed", "current", "unofficial"],
  startYear: null,
  endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_saint_barthelemy_current_unofficial_text"
},
	
  /*
    Europe.
  */
  {
    id: "var_denmark_current",
    entityId: "ent_denmark",
    assetId: "ast_denmark_current",
    displayName: "National Flag",
    aliases: ["Dannebrog"],
    tags: ["official", "current", "national"],
    startYear: 1625,
    endYear: null
  },

  {
    id: "var_denmark_capital_region_current",
    entityId: "ent_denmark_capital_region",
    assetId: "ast_capital_region_of_denmark_current",
    displayName: "Official Regional Logo",
    aliases: [
      "Capital Region of Denmark Flag",
      "Region Hovedstaden Logo"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_denmark_capital_region_current_text_removed",
    entityId: "ent_denmark_capital_region",
    assetId: "ast_capital_region_of_denmark_current_text_removed",
    displayName: "Official Regional Logo",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_denmark_capital_region_current"
  },
  {
    id: "var_denmark_midtjylland_current",
    entityId: "ent_denmark_midtjylland",
    assetId: "ast_midtjylland_current",
    displayName: "Official Regional Logo",
    aliases: [
      "Central Denmark Region Flag",
      "Region Midtjylland Logo"
    ],
    tags: ["official", "current", "non_quizzable"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_denmark_nordjylland_current",
    entityId: "ent_denmark_nordjylland",
    assetId: "ast_nordjylland_current",
    displayName: "Official Regional Logo",
    aliases: [
      "North Denmark Region Flag",
      "Region Nordjylland Logo"
    ],
    tags: ["official", "current", "non_quizzable"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_denmark_sjaelland_current",
    entityId: "ent_denmark_sjaelland",
    assetId: "ast_sjaelland_current",
    displayName: "Official Regional Logo",
    aliases: [
      "Region Zealand Flag",
      "Region Sjælland Logo",
      "Region Sjaelland Logo"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_denmark_syddanmark_current",
    entityId: "ent_denmark_syddanmark",
    assetId: "ast_syddanmark_current",
    displayName: "Official Regional Logo",
    aliases: [
      "Region of Southern Denmark Flag",
      "Region Syddanmark Logo"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_denmark_syddanmark_current_text_removed",
    entityId: "ent_denmark_syddanmark",
    assetId: "ast_syddanmark_current_text_removed",
    displayName: "Official Regional Logo",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_denmark_syddanmark_current"
  },
  {
    id: "var_france_current",
    entityId: "ent_france",
    assetId: "ast_france_current",
	alternativeAssetIds: [
    "ast_france_current_light"
    ],
	quizAssetIds: [
    "ast_france_current",
    "ast_france_current_light"
    ],
    displayName: "National Flag",
    aliases: ["Tricolore"],
    tags: ["official", "current", "national"],
    startYear: 1794,
    endYear: null,
	relatedVariants: {
    reverses: ["var_france_reverse"]
    }
  },
  {
    id: "var_france_current_light",
    entityId: "ent_france",
    assetId: "ast_france_current_light",
    displayName: "National Flag",
    aliases: ["Tricolore"],
    tags: ["official", "current", "national", "alternative"],
    startYear: 1794,
    endYear: null
  },
  {
    id: "var_france_reverse",
    entityId: "ent_france",
    assetId: "ast_france_reverse",
    displayName: "Reverse",
    aliases: ["Tricolore"],
    tags: ["official", "current", "national", "reverse"],
    startYear: 1794,
    endYear: null
  },
  /*
    France current metropolitan regions.
  */
  {
    id: "var_france_auvergne_rhone_alpes_current",
    entityId: "ent_france_auvergne_rhone_alpes",
    assetId: "ast_auvergne_rhone_alpes",
    displayName: "Regional Flag",
    aliases: ["Flag of Auvergne-Rhône-Alpes", "Flag of Auvergne-Rhone-Alpes"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_bourgogne_franche_comte_current",
    entityId: "ent_france_bourgogne_franche_comte",
    assetId: "ast_bourgogne_franche_comte",
    displayName: "Regional Flag",
    aliases: [
      "Flag of Bourgogne-Franche-Comté",
      "Flag of Bourgogne-Franche-Comte",
	  "Flag of Burgundy-Franche-Comte"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_brittany_current",
    entityId: "ent_france_brittany",
    assetId: "ast_brittany_current",
    displayName: "Regional Flag",
    aliases: [
      "Flag of Brittany",
      "Gwenn-ha-du",
      "Flag of Bretagne"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_centre_val_de_loire_current",
    entityId: "ent_france_centre_val_de_loire",
    assetId: "ast_centre_val_de_loire_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Centre-Val de Loire"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_corsica_current",
    entityId: "ent_france_corsica",
    assetId: "ast_corsica_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Corsica", "Flag of Corse"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_grand_est_current",
    entityId: "ent_france_grand_est",
    assetId: "ast_grand_est_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Grand Est"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_hauts_de_france_current",
    entityId: "ent_france_hauts_de_france",
    assetId: "ast_hauts_de_france_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Hauts-de-France"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_ile_de_france_current",
    entityId: "ent_france_ile_de_france",
    assetId: "ast_ile_de_france_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Île-de-France", "Flag of Ile-de-France"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_normandy_current",
    entityId: "ent_france_normandy",
    assetId: "ast_normandy_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Normandy", "Flag of Normandie"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_nouvelle_aquitaine_current",
    entityId: "ent_france_nouvelle_aquitaine",
    assetId: "ast_nouvelle_aquitaine_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Nouvelle-Aquitaine"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_occitania_current",
    entityId: "ent_france_occitania",
    assetId: "ast_occitanie_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Occitania", "Flag of Occitanie"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_pays_de_la_loire_current",
    entityId: "ent_france_pays_de_la_loire",
    assetId: "ast_pays_de_la_loire_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Pays de la Loire"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_france_provence_alpes_cote_dazur_current",
    entityId: "ent_france_provence_alpes_cote_dazur",
    assetId: "ast_provence_alpes_cote_dazur_current",
    displayName: "Regional Flag",
    aliases: [
      "Flag of Provence-Alpes-Côte d'Azur",
      "Flag of Provence-Alpes-Cote d'Azur",
      "Flag of PACA"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },

  /*
    France current-region text-removed quiz-safe variants.
  */
  {
    id: "var_france_centre_val_de_loire_current_text_removed",
    entityId: "ent_france_centre_val_de_loire",
    assetId: "ast_centre_val_de_loire_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Centre-Val de Loire"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_france_centre_val_de_loire_current"
  },
  {
    id: "var_france_grand_est_current_text_removed",
    entityId: "ent_france_grand_est",
    assetId: "ast_grand_est_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Grand Est"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_france_grand_est_current"
  },
  {
    id: "var_france_hauts_de_france_current_text_removed",
    entityId: "ent_france_hauts_de_france",
    assetId: "ast_hauts_de_france_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Hauts-de-France"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_france_hauts_de_france_current"
  },
  {
    id: "var_france_occitania_current_text_removed",
    entityId: "ent_france_occitania",
    assetId: "ast_occitanie_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Occitania", "Flag of Occitanie"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_france_occitania_current"
  },
  {
    id: "var_france_pays_de_la_loire_current_text_removed",
    entityId: "ent_france_pays_de_la_loire",
    assetId: "ast_pays_de_la_loire_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Pays de la Loire"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_france_pays_de_la_loire_current"
  },

  {
  id: "var_isle_of_man_current",
  entityId: "ent_isle_of_man",
  assetId: "ast_isle_of_man_current",
  displayName: "National Flag",
  aliases: [
    "Flag of Mann"
  ],
  tags: ["official", "current", "national"],
  startYear: 1932,
  endYear: null
},
  {
    id: "var_kingdom_of_denmark_current",
    entityId: "ent_kingdom_of_denmark",
    assetId: "ast_denmark_current",
    displayName: "National Flag",
    aliases: ["Dannebrog"],
    tags: ["official", "current", "national"],
    startYear: 1625,
    endYear: null
  },
  {
    id: "var_kingdom_of_the_netherlands_current",
    entityId: "ent_kingdom_of_the_netherlands",
    assetId: "ast_netherlands_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1949,
    endYear: null
  },
  {
    id: "var_netherlands_current",
    entityId: "ent_netherlands",
    assetId: "ast_netherlands_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1949,
    endYear: null
  },
  /*
    Dutch provinces.
  */
  {
    id: "var_netherlands_drenthe_current",
    entityId: "ent_netherlands_drenthe",
    assetId: "ast_drenthe_current",
    displayName: "Official Flag",
    aliases: ["Flag of Drenthe"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_flevoland_current",
    entityId: "ent_netherlands_flevoland",
    assetId: "ast_flevoland_current",
    displayName: "Official Flag",
    aliases: ["Flag of Flevoland"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_friesland_current",
    entityId: "ent_netherlands_friesland",
    assetId: "ast_friesland_current",
    displayName: "Official Flag",
    aliases: ["Flag of Friesland", "Flag of Fryslân"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_gelderland_current",
    entityId: "ent_netherlands_gelderland",
    assetId: "ast_gelderland_current",
    displayName: "Official Flag",
    aliases: ["Flag of Gelderland"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_groningen_current",
    entityId: "ent_netherlands_groningen",
    assetId: "ast_groningen_current",
    displayName: "Official Flag",
    aliases: ["Flag of Groningen"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_limburg_current",
    entityId: "ent_netherlands_limburg",
    assetId: "ast_limburg_netherlands_current",
    displayName: "Official Flag",
    aliases: ["Flag of Limburg", "Flag of Dutch Limburg"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_north_brabant_current",
    entityId: "ent_netherlands_north_brabant",
    assetId: "ast_north_brabant_current",
    displayName: "Official Flag",
    aliases: ["Flag of North Brabant", "Flag of Noord-Brabant"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_north_holland_current",
    entityId: "ent_netherlands_north_holland",
    assetId: "ast_north_holland_current",
    displayName: "Official Flag",
    aliases: ["Flag of North Holland", "Flag of Noord-Holland"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_overijssel_current",
    entityId: "ent_netherlands_overijssel",
    assetId: "ast_overijssel_current",
    displayName: "Official Flag",
    aliases: ["Flag of Overijssel"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_south_holland_current",
    entityId: "ent_netherlands_south_holland",
    assetId: "ast_south_holland_current",
    displayName: "Official Flag",
    aliases: ["Flag of South Holland", "Flag of Zuid-Holland"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_utrecht_current",
    entityId: "ent_netherlands_utrecht",
    assetId: "ast_utrecht_current",
    displayName: "Official Flag",
    aliases: ["Flag of Utrecht"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_netherlands_zeeland_current",
    entityId: "ent_netherlands_zeeland",
    assetId: "ast_zeeland_current",
    displayName: "Official Flag",
    aliases: ["Flag of Zeeland"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },

  /*
    Asia and transcontinental European edge cases.
  */
  {
    id: "var_abkhazia_current",
    entityId: "ent_abkhazia",
    assetId: "ast_abkhazia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_armenia_current",
    entityId: "ent_armenia",
    assetId: "ast_armenia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_azerbaijan_current",
    entityId: "ent_azerbaijan",
    assetId: "ast_azerbaijan_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1991,
    endYear: null
  },
  {
    id: "var_georgia_current",
    entityId: "ent_georgia",
    assetId: "ast_georgia_current",
    displayName: "National Flag",
    aliases: ["Five-Cross Flag"],
    tags: ["official", "current", "national"],
    startYear: 2004,
    endYear: null
  },
  {
    id: "var_kazakhstan_current",
    entityId: "ent_kazakhstan",
    assetId: "ast_kazakhstan_current",
    displayName: "National Flag",
    aliases: ["Kök Tu"],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_kyrgyzstan_current",
    entityId: "ent_kyrgyzstan",
    assetId: "ast_kyrgyzstan_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2023,
    endYear: null
  },
  {
    id: "var_tajikistan_current",
    entityId: "ent_tajikistan",
    assetId: "ast_tajikistan_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_turkmenistan_current",
    entityId: "ent_turkmenistan",
    assetId: "ast_turkmenistan_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2001,
    endYear: null
  },
  {
    id: "var_uzbekistan_current",
    entityId: "ent_uzbekistan",
    assetId: "ast_uzbekistan_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1991,
    endYear: null
  },
  /*
    Eastern Asia.
  */
  {
    id: "var_china_current",
    entityId: "ent_china",
    assetId: "ast_china_current",
    displayName: "National Flag",
    aliases: ["Five-star Red Flag"],
    tags: ["official", "current", "national"],
    startYear: 1949,
    endYear: null
  },
  {
    id: "var_hong_kong_current",
    entityId: "ent_hong_kong",
    assetId: "ast_hong_kong_current",
    displayName: "Regional Flag",
    aliases: ["Bauhinia Flag"],
    tags: ["official", "current"],
    startYear: 1997,
    endYear: null
  },
  {
    id: "var_japan_current",
    entityId: "ent_japan",
    assetId: "ast_japan_current",
    displayName: "National Flag",
    aliases: [
      "Hinomaru",
      "Nisshōki"
    ],
    tags: ["official", "current", "national"],
    startYear: 1999,
    endYear: null
  },

  /*
    Japanese prefectures.
  */
  {
    id: "var_japan_hokkaido_current",
    entityId: "ent_japan_hokkaido",
    assetId: "ast_hokkaido_current",
    displayName: "Prefectural Flag",
    aliases: ["Hokkaido Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_aomori_current",
    entityId: "ent_japan_aomori",
    assetId: "ast_aomori_current",
    displayName: "Prefectural Flag",
    aliases: ["Aomori Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_iwate_current",
    entityId: "ent_japan_iwate",
    assetId: "ast_iwate_current",
    displayName: "Prefectural Flag",
    aliases: ["Iwate Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_miyagi_current",
    entityId: "ent_japan_miyagi",
    assetId: "ast_miyagi_current",
    displayName: "Prefectural Flag",
    aliases: ["Miyagi Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_akita_current",
    entityId: "ent_japan_akita",
    assetId: "ast_akita_current",
    displayName: "Prefectural Flag",
    aliases: ["Akita Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_yamagata_current",
    entityId: "ent_japan_yamagata",
    assetId: "ast_yamagata_current",
    displayName: "Prefectural Flag",
    aliases: ["Yamagata Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_fukushima_current",
    entityId: "ent_japan_fukushima",
    assetId: "ast_fukushima_current",
    displayName: "Prefectural Flag",
    aliases: ["Fukushima Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_ibaraki_current",
    entityId: "ent_japan_ibaraki",
    assetId: "ast_ibaraki_current",
    displayName: "Prefectural Flag",
    aliases: ["Ibaraki Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_tochigi_current",
    entityId: "ent_japan_tochigi",
    assetId: "ast_tochigi_current",
    displayName: "Prefectural Flag",
    aliases: ["Tochigi Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_gunma_current",
    entityId: "ent_japan_gunma",
    assetId: "ast_gunma_current",
    displayName: "Prefectural Flag",
    aliases: ["Gunma Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_saitama_current",
    entityId: "ent_japan_saitama",
    assetId: "ast_saitama_current",
    displayName: "Prefectural Flag",
    aliases: ["Saitama Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_chiba_current",
    entityId: "ent_japan_chiba",
    assetId: "ast_chiba_current",
    displayName: "Prefectural Flag",
    aliases: ["Chiba Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_tokyo_current",
    entityId: "ent_japan_tokyo",
    assetId: "ast_tokyo_metropolis_current",
    displayName: "Metropolitan Flag",
    aliases: ["Tokyo Flag", "Tokyo Metropolis Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_kanagawa_current",
    entityId: "ent_japan_kanagawa",
    assetId: "ast_kanagawa_current",
    displayName: "Prefectural Flag",
    aliases: ["Kanagawa Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_niigata_current",
    entityId: "ent_japan_niigata",
    assetId: "ast_niigata_current",
    displayName: "Prefectural Flag",
    aliases: ["Niigata Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_toyama_current",
    entityId: "ent_japan_toyama",
    assetId: "ast_toyama_current",
    displayName: "Prefectural Flag",
    aliases: ["Toyama Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_ishikawa_current",
    entityId: "ent_japan_ishikawa",
    assetId: "ast_ishikawa_current",
    displayName: "Prefectural Flag",
    aliases: ["Ishikawa Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_fukui_current",
    entityId: "ent_japan_fukui",
    assetId: "ast_fukui_current",
    displayName: "Prefectural Flag",
    aliases: ["Fukui Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_yamanashi_current",
    entityId: "ent_japan_yamanashi",
    assetId: "ast_yamanashi_current",
    displayName: "Prefectural Flag",
    aliases: ["Yamanashi Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_nagano_current",
    entityId: "ent_japan_nagano",
    assetId: "ast_nagano_current",
    displayName: "Prefectural Flag",
    aliases: ["Nagano Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_gifu_current",
    entityId: "ent_japan_gifu",
    assetId: "ast_gifu_current",
    displayName: "Prefectural Flag",
    aliases: ["Gifu Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_shizuoka_current",
    entityId: "ent_japan_shizuoka",
    assetId: "ast_shizuoka_current",
    displayName: "Prefectural Flag",
    aliases: ["Shizuoka Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_aichi_current",
    entityId: "ent_japan_aichi",
    assetId: "ast_aichi_current",
    displayName: "Prefectural Flag",
    aliases: ["Aichi Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_mie_current",
    entityId: "ent_japan_mie",
    assetId: "ast_mie_current",
    displayName: "Prefectural Flag",
    aliases: ["Mie Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_shiga_current",
    entityId: "ent_japan_shiga",
    assetId: "ast_shiga_current",
    displayName: "Prefectural Flag",
    aliases: ["Shiga Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_kyoto_current",
    entityId: "ent_japan_kyoto",
    assetId: "ast_kyoto_current",
    displayName: "Prefectural Flag",
    aliases: ["Kyoto Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_osaka_current",
    entityId: "ent_japan_osaka",
    assetId: "ast_osaka_current",
    displayName: "Prefectural Flag",
    aliases: ["Osaka Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_hyogo_current",
    entityId: "ent_japan_hyogo",
    assetId: "ast_hyogo_current",
    displayName: "Prefectural Flag",
    aliases: ["Hyogo Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_nara_current",
    entityId: "ent_japan_nara",
    assetId: "ast_nara_current",
    displayName: "Prefectural Flag",
    aliases: ["Nara Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_wakayama_current",
    entityId: "ent_japan_wakayama",
    assetId: "ast_wakayama_current",
    displayName: "Prefectural Flag",
    aliases: ["Wakayama Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_tottori_current",
    entityId: "ent_japan_tottori",
    assetId: "ast_tottori_current",
    displayName: "Prefectural Flag",
    aliases: ["Tottori Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_shimane_current",
    entityId: "ent_japan_shimane",
    assetId: "ast_shimane_current",
    displayName: "Prefectural Flag",
    aliases: ["Shimane Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_okayama_current",
    entityId: "ent_japan_okayama",
    assetId: "ast_okayama_current",
    displayName: "Prefectural Flag",
    aliases: ["Okayama Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_hiroshima_current",
    entityId: "ent_japan_hiroshima",
    assetId: "ast_hiroshima_current",
    displayName: "Prefectural Flag",
    aliases: ["Hiroshima Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_yamaguchi_current",
    entityId: "ent_japan_yamaguchi",
    assetId: "ast_yamaguchi_current",
    displayName: "Prefectural Flag",
    aliases: ["Yamaguchi Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_tokushima_current",
    entityId: "ent_japan_tokushima",
    assetId: "ast_tokushima_current",
    displayName: "Prefectural Flag",
    aliases: ["Tokushima Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_kagawa_current",
    entityId: "ent_japan_kagawa",
    assetId: "ast_kagawa_current",
    displayName: "Prefectural Flag",
    aliases: ["Kagawa Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_ehime_current",
    entityId: "ent_japan_ehime",
    assetId: "ast_ehime_current",
    displayName: "Prefectural Flag",
    aliases: ["Ehime Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_kochi_current",
    entityId: "ent_japan_kochi",
    assetId: "ast_kochi_current",
    displayName: "Prefectural Flag",
    aliases: ["Kochi Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_fukuoka_current",
    entityId: "ent_japan_fukuoka",
    assetId: "ast_fukuoka_current",
    displayName: "Prefectural Flag",
    aliases: ["Fukuoka Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_saga_current",
    entityId: "ent_japan_saga",
    assetId: "ast_saga_current",
    displayName: "Prefectural Flag",
    aliases: ["Saga Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_nagasaki_current",
    entityId: "ent_japan_nagasaki",
    assetId: "ast_nagasaki_current",
    displayName: "Prefectural Flag",
    aliases: ["Nagasaki Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_kumamoto_current",
    entityId: "ent_japan_kumamoto",
    assetId: "ast_kumamoto_current",
    displayName: "Prefectural Flag",
    aliases: ["Kumamoto Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_oita_current",
    entityId: "ent_japan_oita",
    assetId: "ast_oita_current",
    displayName: "Prefectural Flag",
    aliases: ["Oita Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_miyazaki_current",
    entityId: "ent_japan_miyazaki",
    assetId: "ast_miyazaki_current",
    displayName: "Prefectural Flag",
    aliases: ["Miyazaki Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_kagoshima_current",
    entityId: "ent_japan_kagoshima",
    assetId: "ast_kagoshima_current",
    displayName: "Prefectural Flag",
    aliases: ["Kagoshima Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_japan_okinawa_current",
    entityId: "ent_japan_okinawa",
    assetId: "ast_okinawa_current",
    displayName: "Prefectural Flag",
    aliases: ["Okinawa Prefecture Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_macao_current",
    entityId: "ent_macao",
    assetId: "ast_macau_current",
    displayName: "Regional Flag",
    aliases: [
      "Macau Regional Flag",
      "Lotus Flag"
    ],
    tags: ["official", "current"],
    startYear: 1999,
    endYear: null
  },
  {
    id: "var_mongolia_current",
    entityId: "ent_mongolia",
    assetId: "ast_mongolia_current",
    displayName: "National Flag",
    aliases: ["Mongolian State Flag"],
    tags: ["official", "current", "national"],
    startYear: 2011,
    endYear: null
  },
  {
    id: "var_north_korea_current",
    entityId: "ent_north_korea",
    assetId: "ast_north_korea_current",
    displayName: "National Flag",
    aliases: ["Blue and Red Flag of the Republic"],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_south_korea_current",
    entityId: "ent_south_korea",
    assetId: "ast_south_korea_current",
    displayName: "National Flag",
    aliases: [
      "Taegeukgi",
      "Taegukgi"
    ],
    tags: ["official", "current", "national"],
    startYear: 1997,
    endYear: null
  },
  {
    id: "var_taiwan_current",
    entityId: "ent_taiwan",
    assetId: "ast_taiwan_current",
    displayName: "National Flag",
    aliases: [
      "Flag of the Republic of China",
      "Blue Sky, White Sun, and a Wholly Red Earth"
    ],
    tags: ["official", "current", "national"],
    startYear: 1928,
    endYear: null
  },
  /*
    South-eastern Asia.
  */
  {
    id: "var_brunei_current",
    entityId: "ent_brunei",
    assetId: "ast_brunei_current",
    displayName: "National Flag",
    aliases: ["Flag of Brunei Darussalam"],
    tags: ["official", "current", "national"],
    startYear: 1959,
    endYear: null
  },
  {
    id: "var_cambodia_current",
    entityId: "ent_cambodia",
    assetId: "ast_cambodia_current",
    displayName: "National Flag",
    aliases: ["Khmer Flag"],
    tags: ["official", "current", "national"],
    startYear: 1993,
    endYear: null
  },
  {
    id: "var_indonesia_current",
    entityId: "ent_indonesia",
    assetId: "ast_indonesia_current",
    displayName: "National Flag",
    aliases: [
      "Merah Putih",
      "Sang Saka Merah Putih"
    ],
    tags: ["official", "current", "national"],
    startYear: 1945,
    endYear: null
  },
  {
    id: "var_laos_current",
    entityId: "ent_laos",
    assetId: "ast_laos_current",
    displayName: "National Flag",
    aliases: [
      "Moon Flag",
      "White Moon Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 1975,
    endYear: null
  },
  {
    id: "var_malaysia_current",
    entityId: "ent_malaysia",
    assetId: "ast_malaysia_current",
    displayName: "National Flag",
    aliases: ["Jalur Gemilang"],
    tags: ["official", "current", "national"],
    startYear: 1963,
    endYear: null
  },
  {
    id: "var_myanmar_current",
    entityId: "ent_myanmar",
    assetId: "ast_myanmar_current",
    displayName: "National Flag",
    aliases: ["Union Flag"],
    tags: ["official", "current", "national"],
    startYear: 2010,
    endYear: null
  },
  {
    id: "var_philippines_current",
    entityId: "ent_philippines",
    assetId: "ast_philippines_current",
    displayName: "National Flag",
    aliases: [
      "Philippine Flag",
      "Three Stars and a Sun"
    ],
    tags: ["official", "current", "national"],
    startYear: 1998,
    endYear: null
  },
  {
    id: "var_singapore_current",
    entityId: "ent_singapore",
    assetId: "ast_singapore_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1959,
    endYear: null
  },
  {
    id: "var_thailand_current",
    entityId: "ent_thailand",
    assetId: "ast_thailand_current",
    displayName: "National Flag",
    aliases: [
      "Thong Trairong",
      "Thai Tricolour"
    ],
    tags: ["official", "current", "national"],
    startYear: 2017,
    endYear: null
  },
  {
    id: "var_timor_leste_current",
    entityId: "ent_timor_leste",
    assetId: "ast_timor_leste_current",
    displayName: "National Flag",
    aliases: ["East Timor Flag"],
    tags: ["official", "current", "national"],
    startYear: 2002,
    endYear: null
  },
  {
    id: "var_vietnam_current",
    entityId: "ent_vietnam",
    assetId: "ast_vietnam_current",
    displayName: "National Flag",
    aliases: [
      "Red Flag with a Golden Star",
      "Cờ đỏ sao vàng"
    ],
    tags: ["official", "current", "national"],
    startYear: 1955,
    endYear: null
  },
  /*
    Southern Asia.
  */
  {
    id: "var_afghanistan_current",
    entityId: "ent_afghanistan",
    assetId: "ast_afghanistan_current",
    displayName: "Islamic Emirate Flag",
    aliases: [
      "White Flag",
      "Shahada Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 2021,
    endYear: null,
    relatedVariants: {
      alternatives: [
        "var_afghanistan_republic_tricolour_current"
      ]
    }
  },
  {
    id: "var_afghanistan_republic_tricolour_current",
    entityId: "ent_afghanistan",
    assetId: "ast_afghanistan_republic_tricolour_current",
    displayName: "Republic Tricolour",
    aliases: [
      "Afghan Tricolour",
      "Islamic Republic Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 2013,
    endYear: null,
    relatedVariants: {
      alternatives: [
        "var_afghanistan_current"
      ]
    }
  },
  {
    id: "var_bangladesh_current",
    entityId: "ent_bangladesh",
    assetId: "ast_bangladesh_current",
    displayName: "National Flag",
    aliases: [
      "Red-Green",
      "Lal Sabuj"
    ],
    tags: ["official", "current", "national"],
    startYear: 1972,
    endYear: null
  },
  {
    id: "var_bhutan_current",
    entityId: "ent_bhutan",
    assetId: "ast_bhutan_current",
    displayName: "National Flag",
    aliases: ["Druk Flag"],
    tags: ["official", "current", "national"],
    startYear: 1969,
    endYear: null
  },
  {
    id: "var_india_current",
    entityId: "ent_india",
    assetId: "ast_india_current",
    displayName: "National Flag",
    aliases: [
      "Tiranga",
      "Indian Tricolour"
    ],
    tags: ["official", "current", "national"],
    startYear: 1947,
    endYear: null
  },
  {
    id: "var_iran_current",
    entityId: "ent_iran",
    assetId: "ast_iran_current",
    displayName: "National Flag",
    aliases: ["Flag of the Islamic Republic"],
    tags: ["official", "current", "national"],
    startYear: 1980,
    endYear: null
  },
  {
    id: "var_maldives_current",
    entityId: "ent_maldives",
    assetId: "ast_maldives_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1965,
    endYear: null
  },
  {
    id: "var_nepal_current",
    entityId: "ent_nepal",
    assetId: "ast_nepal_current",
    displayName: "National Flag",
    aliases: [
      "Double-pennon",
      "Double-pennant Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 1962,
    endYear: null
  },
  {
    id: "var_pakistan_current",
    entityId: "ent_pakistan",
    assetId: "ast_pakistan_current",
    displayName: "National Flag",
    aliases: ["Flag of the Crescent and Star"],
    tags: ["official", "current", "national"],
    startYear: 1947,
    endYear: null
  },
  {
    id: "var_sri_lanka_current",
    entityId: "ent_sri_lanka",
    assetId: "ast_sri_lanka_current",
    displayName: "National Flag",
    aliases: [
      "Lion Flag",
      "Sinha Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 1972,
    endYear: null
  },
  {
    id: "var_russia_current",
    entityId: "ent_russia",
    assetId: "ast_russia_current",
    displayName: "National Flag",
    aliases: ["Tricolour"],
    tags: ["official", "current", "national"],
    startYear: 1993,
    endYear: null
  },


  /*
    Russian federal subject flags.
  */
  {
    id: "var_russia_belgorod_current",
    entityId: "ent_russia_belgorod",
    assetId: "ast_belgorod_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Belgorod Oblast",
      "Flag of Belgorod"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_bryansk_current",
    entityId: "ent_russia_bryansk",
    assetId: "ast_bryansk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Bryansk Oblast",
      "Flag of Bryansk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_ivanovo_current",
    entityId: "ent_russia_ivanovo",
    assetId: "ast_ivanovo_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Ivanovo Oblast",
      "Flag of Ivanovo"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kaluga_current",
    entityId: "ent_russia_kaluga",
    assetId: "ast_kaluga_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kaluga Oblast",
      "Flag of Kaluga"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kostroma_current",
    entityId: "ent_russia_kostroma",
    assetId: "ast_kostroma_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kostroma Oblast",
      "Flag of Kostroma"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kursk_current",
    entityId: "ent_russia_kursk",
    assetId: "ast_kursk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kursk Oblast",
      "Flag of Kursk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_lipetsk_current",
    entityId: "ent_russia_lipetsk",
    assetId: "ast_lipetsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Lipetsk Oblast",
      "Flag of Lipetsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_moscow_current",
    entityId: "ent_russia_moscow",
    assetId: "ast_moscow_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Moscow",
      "Flag of Federal City of Moscow"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_moscow_oblast_current",
    entityId: "ent_russia_moscow_oblast",
    assetId: "ast_moscow_oblast_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Moscow Oblast",
      "Flag of Moscow Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_oryol_current",
    entityId: "ent_russia_oryol",
    assetId: "ast_oryol_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Oryol Oblast",
      "Flag of Orel Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_ryazan_current",
    entityId: "ent_russia_ryazan",
    assetId: "ast_ryazan_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Ryazan Oblast",
      "Flag of Ryazan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_smolensk_current",
    entityId: "ent_russia_smolensk",
    assetId: "ast_smolensk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Smolensk Oblast",
      "Flag of Smolensk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_tambov_current",
    entityId: "ent_russia_tambov",
    assetId: "ast_tambov_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Tambov Oblast",
      "Flag of Tambov"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_tula_current",
    entityId: "ent_russia_tula",
    assetId: "ast_tula_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Tula Oblast",
      "Flag of Tula"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_tver_current",
    entityId: "ent_russia_tver",
    assetId: "ast_tver_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Tver Oblast",
      "Flag of Tver"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_vladimir_current",
    entityId: "ent_russia_vladimir",
    assetId: "ast_vladimir_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Vladimir Oblast",
      "Flag of Vladimir"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_voronezh_current",
    entityId: "ent_russia_voronezh",
    assetId: "ast_voronezh_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Voronezh Oblast",
      "Flag of Voronezh"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_yaroslavl_current",
    entityId: "ent_russia_yaroslavl",
    assetId: "ast_yaroslavl_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Yaroslavl Oblast",
      "Flag of Yaroslavl"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_amur_current",
    entityId: "ent_russia_amur",
    assetId: "ast_amur_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Amur Oblast",
      "Flag of Amur"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_buryatia_current",
    entityId: "ent_russia_buryatia",
    assetId: "ast_buryatia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Buryatia",
      "Flag of Buryatia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_chukotka_current",
    entityId: "ent_russia_chukotka",
    assetId: "ast_chukotka_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Chukotka Autonomous Okrug",
      "Flag of Chukotka"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_jewish_autonomous_oblast_current",
    entityId: "ent_russia_jewish_autonomous_oblast",
    assetId: "ast_jewish_autonomous_oblast_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Jewish Autonomous Oblast",
      "Flag of Yevrey Autonomous Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kamchatka_current",
    entityId: "ent_russia_kamchatka",
    assetId: "ast_kamchatka_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kamchatka Krai",
      "Flag of Kamchatka"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_khabarovsk_current",
    entityId: "ent_russia_khabarovsk",
    assetId: "ast_khabarovsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Khabarovsk Krai",
      "Flag of Khabarovsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_magadan_current",
    entityId: "ent_russia_magadan",
    assetId: "ast_magadan_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Magadan Oblast",
      "Flag of Magadan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_primorsky_current",
    entityId: "ent_russia_primorsky",
    assetId: "ast_primorsky_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Primorsky Krai",
      "Flag of Primorye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_sakha_current",
    entityId: "ent_russia_sakha",
    assetId: "ast_sakha_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Sakha Republic",
      "Flag of Yakutia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_sakhalin_current",
    entityId: "ent_russia_sakhalin",
    assetId: "ast_sakhalin_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Sakhalin Oblast",
      "Flag of Sakhalin"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_zabaykalsky_current",
    entityId: "ent_russia_zabaykalsky",
    assetId: "ast_zabaykalsky_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Zabaykalsky Krai",
      "Flag of Transbaikal Krai"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_chechen_republic_current",
    entityId: "ent_russia_chechen_republic",
    assetId: "ast_chechen_republic_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Chechen Republic",
      "Flag of Chechnya"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_dagestan_current",
    entityId: "ent_russia_dagestan",
    assetId: "ast_dagestan_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Dagestan",
      "Flag of Dagestan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_ingushetia_current",
    entityId: "ent_russia_ingushetia",
    assetId: "ast_ingushetia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Ingushetia",
      "Flag of Ingushetia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kabardino_balkaria_current",
    entityId: "ent_russia_kabardino_balkaria",
    assetId: "ast_kabardino_balkaria_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kabardino-Balkarian Republic",
      "Flag of Kabardino-Balkaria"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_karachay_cherkessia_current",
    entityId: "ent_russia_karachay_cherkessia",
    assetId: "ast_karachay_cherkessia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Karachay-Cherkess Republic",
      "Flag of Karachay-Cherkessia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_north_ossetia_current",
    entityId: "ent_russia_north_ossetia",
    assetId: "ast_north_ossetia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of North Ossetia-Alania",
      "Flag of North Ossetia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_stavropol_current",
    entityId: "ent_russia_stavropol",
    assetId: "ast_stavropol_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Stavropol Krai",
      "Flag of Stavropol"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_arkhangelsk_current",
    entityId: "ent_russia_arkhangelsk",
    assetId: "ast_arkhangelsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Arkhangelsk Oblast",
      "Flag of Arkhangelsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kaliningrad_current",
    entityId: "ent_russia_kaliningrad",
    assetId: "ast_kaliningrad_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kaliningrad Oblast",
      "Flag of Kaliningrad"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_karelia_current",
    entityId: "ent_russia_karelia",
    assetId: "ast_karelia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Karelia",
      "Flag of Karelia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_komi_current",
    entityId: "ent_russia_komi",
    assetId: "ast_komi_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Komi Republic",
      "Flag of Republic of Komi"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_leningrad_current",
    entityId: "ent_russia_leningrad",
    assetId: "ast_leningrad_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Leningrad Oblast",
      "Flag of Leningrad"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_murmansk_current",
    entityId: "ent_russia_murmansk",
    assetId: "ast_murmansk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Murmansk Oblast",
      "Flag of Murmansk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_nenets_current",
    entityId: "ent_russia_nenets",
    assetId: "ast_nenets_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Nenets Autonomous Okrug",
      "Flag of Nenetsia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_novgorod_current",
    entityId: "ent_russia_novgorod",
    assetId: "ast_novgorod_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Novgorod Oblast",
      "Flag of Novgorod"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_pskov_current",
    entityId: "ent_russia_pskov",
    assetId: "ast_pskov_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Pskov Oblast",
      "Flag of Pskov"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_saint_petersburg_current",
    entityId: "ent_russia_saint_petersburg",
    assetId: "ast_saint_petersburg_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Saint Petersburg",
      "Flag of St Petersburg"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_vologda_current",
    entityId: "ent_russia_vologda",
    assetId: "ast_vologda_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Vologda Oblast",
      "Flag of Vologda"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_altai_current",
    entityId: "ent_russia_altai",
    assetId: "ast_altai_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Altai Krai",
      "Flag of Altai Territory"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_altai_republic_current",
    entityId: "ent_russia_altai_republic",
    assetId: "ast_altai_republic_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Altai Republic",
      "Flag of Republic of Altai"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_irkutsk_current",
    entityId: "ent_russia_irkutsk",
    assetId: "ast_irkutsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Irkutsk Oblast",
      "Flag of Irkutsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kemerovo_current",
    entityId: "ent_russia_kemerovo",
    assetId: "ast_kemerovo_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kemerovo Oblast",
      "Flag of Kuzbass"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_khakassia_current",
    entityId: "ent_russia_khakassia",
    assetId: "ast_khakassia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Khakassia",
      "Flag of Khakassia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_krasnoyarsk_current",
    entityId: "ent_russia_krasnoyarsk",
    assetId: "ast_krasnoyarsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Krasnoyarsk Krai",
      "Flag of Krasnoyarsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_novosibirsk_current",
    entityId: "ent_russia_novosibirsk",
    assetId: "ast_novosibirsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Novosibirsk Oblast",
      "Flag of Novosibirsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_omsk_current",
    entityId: "ent_russia_omsk",
    assetId: "ast_omsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Omsk Oblast",
      "Flag of Omsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_tomsk_current",
    entityId: "ent_russia_tomsk",
    assetId: "ast_tomsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Tomsk Oblast",
      "Flag of Tomsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_tuva_current",
    entityId: "ent_russia_tuva",
    assetId: "ast_tuva_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Tuva Republic",
      "Flag of Tyva Republic"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_adygea_current",
    entityId: "ent_russia_adygea",
    assetId: "ast_adygea_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Adygea",
      "Flag of Adygea"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_astrakhan_current",
    entityId: "ent_russia_astrakhan",
    assetId: "ast_astrakhan_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Astrakhan Oblast",
      "Flag of Astrakhan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kalmykia_current",
    entityId: "ent_russia_kalmykia",
    assetId: "ast_kalmykia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Kalmykia",
      "Flag of Kalmykia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_krasnodar_current",
    entityId: "ent_russia_krasnodar",
    assetId: "ast_krasnodar_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Krasnodar Krai",
      "Flag of Krasnodar"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_rostov_current",
    entityId: "ent_russia_rostov",
    assetId: "ast_rostov_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Rostov Oblast",
      "Flag of Rostov"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_volgograd_current",
    entityId: "ent_russia_volgograd",
    assetId: "ast_volgograd_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Volgograd Oblast",
      "Flag of Volgograd"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_chelyabinsk_current",
    entityId: "ent_russia_chelyabinsk",
    assetId: "ast_chelyabinsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Chelyabinsk Oblast",
      "Flag of Chelyabinsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kurgan_current",
    entityId: "ent_russia_kurgan",
    assetId: "ast_kurgan_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kurgan Oblast",
      "Flag of Kurgan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_sverdlovsk_current",
    entityId: "ent_russia_sverdlovsk",
    assetId: "ast_sverdlovsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Sverdlovsk Oblast",
      "Flag of Sverdlovsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_tyumen_current",
    entityId: "ent_russia_tyumen",
    assetId: "ast_tyumen_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Tyumen Oblast",
      "Flag of Tyumen"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_yamalo_nenets_current",
    entityId: "ent_russia_yamalo_nenets",
    assetId: "ast_yamalo_nenets_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Yamalo-Nenets Autonomous Okrug",
      "Flag of Yamal-Nenets Autonomous Okrug"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_yugra_current",
    entityId: "ent_russia_yugra",
    assetId: "ast_yugra_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Khanty-Mansi Autonomous Okrug – Yugra",
      "Flag of Yugra"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_bashkortostan_current",
    entityId: "ent_russia_bashkortostan",
    assetId: "ast_bashkortostan_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Bashkortostan",
      "Flag of Bashkortostan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_chuvashia_current",
    entityId: "ent_russia_chuvashia",
    assetId: "ast_chuvashia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Chuvash Republic",
      "Flag of Chuvashia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_kirov_current",
    entityId: "ent_russia_kirov",
    assetId: "ast_kirov_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kirov Oblast",
      "Flag of Kirov"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_mari_el_current",
    entityId: "ent_russia_mari_el",
    assetId: "ast_mari_el_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Mari El Republic",
      "Flag of Republic of Mari El"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_mordovia_current",
    entityId: "ent_russia_mordovia",
    assetId: "ast_mordovia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Mordovia",
      "Flag of Mordovia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_nizhny_novgorod_current",
    entityId: "ent_russia_nizhny_novgorod",
    assetId: "ast_nizhny_novgorod_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Nizhny Novgorod Oblast",
      "Flag of Nizhny Novgorod"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_orenburg_current",
    entityId: "ent_russia_orenburg",
    assetId: "ast_orenburg_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Orenburg Oblast",
      "Flag of Orenburg"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_penza_current",
    entityId: "ent_russia_penza",
    assetId: "ast_penza_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Penza Oblast",
      "Flag of Penza"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_perm_current",
    entityId: "ent_russia_perm",
    assetId: "ast_perm_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Perm Krai",
      "Flag of Perm"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_samara_current",
    entityId: "ent_russia_samara",
    assetId: "ast_samara_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Samara Oblast",
      "Flag of Samara"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_saratov_current",
    entityId: "ent_russia_saratov",
    assetId: "ast_saratov_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Saratov Oblast",
      "Flag of Saratov"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_tatarstan_current",
    entityId: "ent_russia_tatarstan",
    assetId: "ast_tatarstan_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Republic of Tatarstan",
      "Flag of Tatarstan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_udmurtia_current",
    entityId: "ent_russia_udmurtia",
    assetId: "ast_udmurtia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Udmurt Republic",
      "Flag of Udmurtia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_russia_ulyanovsk_current",
    entityId: "ent_russia_ulyanovsk",
    assetId: "ast_ulyanovsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Ulyanovsk Oblast",
      "Flag of Ulyanovsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_south_ossetia_current",
    entityId: "ent_south_ossetia",
    assetId: "ast_south_ossetia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_turkey_current",
    entityId: "ent_turkey",
    assetId: "ast_turkey_current",
    displayName: "National Flag",
    aliases: ["Al Bayrak", "Ay Yıldız"],
    tags: ["official", "current", "national"],
    startYear: 1936,
    endYear: null
  },
  /*
    Western Asia — additional UN M49 countries and areas.
  */
  {
    id: "var_bahrain_current",
    entityId: "ent_bahrain",
    assetId: "ast_bahrain_current",
    displayName: "National Flag",
    aliases: ["Bahraini Flag"],
    tags: ["official", "current", "national"],
    startYear: 2002,
    endYear: null
  },
  {
    id: "var_iraq_current",
    entityId: "ent_iraq",
    assetId: "ast_iraq_current",
    displayName: "National Flag",
    aliases: ["Takbir Flag"],
    tags: ["official", "current", "national"],
    startYear: 2008,
    endYear: null
  },
  {
    id: "var_israel_current",
    entityId: "ent_israel",
    assetId: "ast_israel_current",
    displayName: "National Flag",
    aliases: [
      "Blue and White Flag",
      "Degel Yisrael"
    ],
    tags: ["official", "current", "national"],
    startYear: 1948,
    endYear: null
  },
  {
    id: "var_jordan_current",
    entityId: "ent_jordan",
    assetId: "ast_jordan_current",
    displayName: "National Flag",
    aliases: ["Jordanian Flag"],
    tags: ["official", "current", "national"],
    startYear: 1928,
    endYear: null
  },
  {
    id: "var_kuwait_current",
    entityId: "ent_kuwait",
    assetId: "ast_kuwait_current",
    displayName: "National Flag",
    aliases: ["Kuwaiti Flag"],
    tags: ["official", "current", "national"],
    startYear: 1961,
    endYear: null
  },
  {
    id: "var_lebanon_current",
    entityId: "ent_lebanon",
    assetId: "ast_lebanon_current",
    displayName: "National Flag",
    aliases: ["Cedar Flag"],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_oman_current",
    entityId: "ent_oman",
    assetId: "ast_oman_current",
    displayName: "National Flag",
    aliases: ["Omani Flag"],
    tags: ["official", "current", "national"],
    startYear: 1995,
    endYear: null
  },
  {
    id: "var_qatar_current",
    entityId: "ent_qatar",
    assetId: "ast_qatar_current",
    displayName: "National Flag",
    aliases: ["Al Adaam"],
    tags: ["official", "current", "national"],
    startYear: 1971,
    endYear: null
  },
  {
    id: "var_saudi_arabia_current",
    entityId: "ent_saudi_arabia",
    assetId: "ast_saudi_arabia_current",
    displayName: "National Flag",
    aliases: [
      "Green Flag",
      "Shahada Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 1973,
    endYear: null
  },
  {
    id: "var_palestine_current",
    entityId: "ent_palestine",
    assetId: "ast_palestine_current",
    displayName: "National Flag",
    aliases: [
      "Palestinian Flag",
      "Flag of the State of Palestine"
    ],
    tags: ["official", "current", "national"],
    startYear: 1988,
    endYear: null
  },
  {
    id: "var_syria_current",
    entityId: "ent_syria",
    assetId: "ast_syria_current",
    displayName: "National Flag",
    aliases: [
      "Syrian Independence Flag",
      "Revolution Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 2025,
    endYear: null
  },
  {
    id: "var_united_arab_emirates_current",
    entityId: "ent_united_arab_emirates",
    assetId: "ast_united_arab_emirates_current",
    displayName: "National Flag",
    aliases: [
      "UAE Flag",
      "Emirati Flag"
    ],
    tags: ["official", "current", "national"],
    startYear: 1971,
    endYear: null
  },
  {
    id: "var_yemen_current",
    entityId: "ent_yemen",
    assetId: "ast_yemen_current",
    displayName: "National Flag",
    aliases: ["Yemeni Flag"],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },

  /*
    First-pass European countries, territories and disputed entities.
  */
  {
    id: "var_aland_current",
    entityId: "ent_aland",
    assetId: "ast_aland_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1954,
    endYear: null
  },
  {
    id: "var_albania_current",
    entityId: "ent_albania",
    assetId: "ast_albania_current",
    displayName: "National Flag",
    aliases: ["Flamuri Kombëtar"],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },


  /*
    Albanian counties.
  */
  {
    id: "var_albania_berat_county_current",
    entityId: "ent_albania_berat_county",
    assetId: "ast_berat_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Berat County", "Berat County Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_diber_county_current",
    entityId: "ent_albania_diber_county",
    assetId: "ast_diber_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Dibër County", "Dibër County Flag", "Flag of Diber County"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_durres_county_current",
    entityId: "ent_albania_durres_county",
    assetId: "ast_durres_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Durrës County", "Durrës County Flag", "Flag of Durres County"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_elbasan_county_current",
    entityId: "ent_albania_elbasan_county",
    assetId: "ast_elbasan_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Elbasan County", "Elbasan County Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_fier_county_current",
    entityId: "ent_albania_fier_county",
    assetId: "ast_fier_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Fier County", "Fier County Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_gjirokaster_county_current",
    entityId: "ent_albania_gjirokaster_county",
    assetId: "ast_gjirokaster_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Gjirokastër County", "Gjirokastër County Flag", "Flag of Gjirokaster County"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_korce_county_current",
    entityId: "ent_albania_korce_county",
    assetId: "ast_korce_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Korçë County", "Korçë County Flag", "Flag of Korce County"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_kukes_county_current",
    entityId: "ent_albania_kukes_county",
    assetId: "ast_kukes_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Kukës County", "Kukës County Flag", "Flag of Kukes County"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_lezhe_county_current",
    entityId: "ent_albania_lezhe_county",
    assetId: "ast_lezhe_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Lezhë County", "Lezhë County Flag", "Flag of Lezhe County"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_shkoder_county_current",
    entityId: "ent_albania_shkoder_county",
    assetId: "ast_shkoder_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Shkodër County", "Shkodër County Flag", "Flag of Shkoder County"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_tirana_county_current",
    entityId: "ent_albania_tirana_county",
    assetId: "ast_tirana_county_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Tirana County", "Tirana County Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_albania_vlore_county_current",
    entityId: "ent_albania_vlore_county",
    assetId: "ast_vlore_current",
    displayName: "Official County Flag",
    aliases: ["Flag of Vlorë County", "Vlorë County Flag", "Flag of Vlore County"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },

  /*
    Albanian county text-removed quiz-safe variants.
  */
  {
    id: "var_albania_diber_county_current_text_removed",
    entityId: "ent_albania_diber_county",
    assetId: "ast_diber_current_text_removed",
    displayName: "Official County Flag - Text Removed",
    aliases: ["Flag of Dibër County", "Dibër County Flag", "Flag of Diber County"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_albania_diber_county_current"
  },
  {
    id: "var_albania_durres_county_current_text_removed",
    entityId: "ent_albania_durres_county",
    assetId: "ast_durres_current_text_removed",
    displayName: "Official County Flag - Text Removed",
    aliases: ["Flag of Durrës County", "Durrës County Flag", "Flag of Durres County"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_albania_durres_county_current"
  },
  {
    id: "var_albania_elbasan_county_current_text_removed",
    entityId: "ent_albania_elbasan_county",
    assetId: "ast_elbasan_current_text_removed",
    displayName: "Official County Flag - Text Removed",
    aliases: ["Flag of Elbasan County", "Elbasan County Flag"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_albania_elbasan_county_current"
  },
  {
    id: "var_albania_fier_county_current_text_removed",
    entityId: "ent_albania_fier_county",
    assetId: "ast_fier_current_text_removed",
    displayName: "Official County Flag - Text Removed",
    aliases: ["Flag of Fier County", "Fier County Flag"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_albania_fier_county_current"
  },
  {
    id: "var_albania_lezhe_county_current_text_removed",
    entityId: "ent_albania_lezhe_county",
    assetId: "ast_lezhe_current_text_removed",
    displayName: "Official County Flag - Text Removed",
    aliases: ["Flag of Lezhë County", "Lezhë County Flag", "Flag of Lezhe County"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_albania_lezhe_county_current"
  },
  {
    id: "var_albania_shkoder_county_current_text_removed",
    entityId: "ent_albania_shkoder_county",
    assetId: "ast_shkoder_current_text_removed",
    displayName: "Official County Flag - Text Removed",
    aliases: ["Flag of Shkodër County", "Shkodër County Flag", "Flag of Shkoder County"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_albania_shkoder_county_current"
  },
  {
    id: "var_albania_vlore_county_current_text_removed",
    entityId: "ent_albania_vlore_county",
    assetId: "ast_vlore_current_text_removed",
    displayName: "Official County Flag - Text Removed",
    aliases: ["Flag of Vlorë County", "Vlorë County Flag", "Flag of Vlore County"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_albania_vlore_county_current"
  },
  {
    id: "var_andorra_current",
    entityId: "ent_andorra",
    assetId: "ast_andorra_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "state"],
    startYear: 1993,
    endYear: null
  },
  {
    id: "var_andorra_andorra_la_vella_parish_current",
    entityId: "ent_andorra_andorra_la_vella_parish",
    assetId: "ast_andorra_la_vella_current",
    displayName: "Parish Flag",
    aliases: ["Flag of Andorra la Vella Parish", "Andorra la Vella Parish Flag", "Flag of Andorra la Vella"],
    tags: ["current"],
    startYear: null,
    endYear: null,
    relatedVariants: {
      alternatives: ["var_andorra_andorra_la_vella_parish_current_alt"]
    }
  },
  {
    id: "var_andorra_andorra_la_vella_parish_current_alt",
    entityId: "ent_andorra_andorra_la_vella_parish",
    assetId: "ast_andorra_la_vella_current_alt",
    displayName: "Alternative Parish Flag",
    aliases: ["Alternative Flag of Andorra la Vella Parish", "Alternative Andorra la Vella Parish Flag", "Alternative Flag of Andorra la Vella"],
    tags: ["current", "alternative"],
    startYear: null,
    endYear: null,
    relatedVariants: {
      alternatives: ["var_andorra_andorra_la_vella_parish_current"]
    }
  },
  {
    id: "var_andorra_canillo_parish_current",
    entityId: "ent_andorra_canillo_parish",
    assetId: "ast_canillo_current",
    displayName: "Hypothetical Parish Flag",
    aliases: ["Flag of Canillo Parish", "Canillo Parish Flag", "Hypothetical Flag of Canillo"],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_andorra_encamp_parish_current",
    entityId: "ent_andorra_encamp_parish",
    assetId: "ast_encamp_current",
    displayName: "Hypothetical Parish Flag",
    aliases: ["Flag of Encamp Parish", "Encamp Parish Flag", "Hypothetical Flag of Encamp"],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_andorra_escaldes_engordany_parish_current",
    entityId: "ent_andorra_escaldes_engordany_parish",
    assetId: "ast_escaldes_engordany_current",
    displayName: "Hypothetical Parish Flag",
    aliases: ["Flag of Escaldes-Engordany Parish", "Escaldes-Engordany Parish Flag", "Hypothetical Flag of Escaldes-Engordany"],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_andorra_la_massana_parish_current",
    entityId: "ent_andorra_la_massana_parish",
    assetId: "ast_la_massana_current",
    displayName: "Hypothetical Parish Flag",
    aliases: ["Flag of La Massana Parish", "La Massana Parish Flag", "Hypothetical Flag of La Massana"],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_andorra_ordino_parish_current",
    entityId: "ent_andorra_ordino_parish",
    assetId: "ast_ordino_current",
    displayName: "Hypothetical Parish Flag",
    aliases: ["Flag of Ordino Parish", "Ordino Parish Flag", "Hypothetical Flag of Ordino"],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_andorra_sant_julia_de_loria_parish_current",
    entityId: "ent_andorra_sant_julia_de_loria_parish",
    assetId: "ast_san_julian_de_loria_current",
    displayName: "Hypothetical Parish Flag",
    aliases: ["Flag of Sant Julià de Lòria Parish", "Sant Julià de Lòria Parish Flag", "Flag of Sant Julia de Loria Parish", "Hypothetical Flag of Sant Julià de Lòria", "Hypothetical Flag of San Julián de Loria"],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },

  /*
    Andorra parish text-removed quiz-safe variants.
  */
  {
    id: "var_andorra_andorra_la_vella_parish_current_text_removed",
    entityId: "ent_andorra_andorra_la_vella_parish",
    assetId: "ast_andorra_la_vella_current_text_removed",
    displayName: "Parish Flag",
    aliases: [],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_andorra_andorra_la_vella_parish_current"
  },
  {
    id: "var_andorra_escaldes_engordany_parish_current_text_removed",
    entityId: "ent_andorra_escaldes_engordany_parish",
    assetId: "ast_escaldes_engordany_current_text_removed",
    displayName: "Hypothetical Parish Flag",
    aliases: [],
    tags: ["unofficial", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_andorra_escaldes_engordany_parish_current"
  },
  {
    id: "var_andorra_la_massana_parish_current_text_removed",
    entityId: "ent_andorra_la_massana_parish",
    assetId: "ast_la_massana_current_text_removed",
    displayName: "Hypothetical Parish Flag",
    aliases: [],
    tags: ["unofficial", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_andorra_la_massana_parish_current"
  },
  {
    id: "var_andorra_ordino_parish_current_text_removed",
    entityId: "ent_andorra_ordino_parish",
    assetId: "ast_ordino_current_text_removed",
    displayName: "Hypothetical Parish Flag",
    aliases: [],
    tags: ["unofficial", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_andorra_ordino_parish_current"
  },
  {
    id: "var_austria_current",
    entityId: "ent_austria",
    assetId: "ast_austria_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil"],
    startYear: 1945,
    endYear: null
  },
  {
    id: "var_austria_state",
    entityId: "ent_austria",
    assetId: "ast_austria_state",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "national", "state"],
    startYear: 1945,
    endYear: null
  },
  /*
    Austrian Länder.
  */
  {
    id: "var_austria_burgenland_state_current",
    entityId: "ent_austria_burgenland",
    assetId: "ast_burgenland_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Burgenland", "State Flag of Burgenland"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_burgenland_civil_current",
    entityId: "ent_austria_burgenland",
    assetId: "ast_burgenland_civil_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Burgenland"],
    tags: ["official", "current", "civil"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_carinthia_state_current",
    entityId: "ent_austria_carinthia",
    assetId: "ast_carinthia_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Carinthia", "State Flag of Carinthia"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_carinthia_civil_current",
    entityId: "ent_austria_carinthia",
    assetId: "ast_carinthia_civil_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Carinthia"],
    tags: ["official", "current", "civil"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_lower_austria_state_current",
    entityId: "ent_austria_lower_austria",
    assetId: "ast_lower_austria_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Lower Austria", "State Flag of Lower Austria"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_lower_austria_civil_current",
    entityId: "ent_austria_lower_austria",
    assetId: "ast_lower_austria_civil_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Lower Austria"],
    tags: ["official", "current", "civil"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_salzburg_state_current",
    entityId: "ent_austria_salzburg",
    assetId: "ast_salzburg_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Salzburg", "State Flag of Salzburg"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_salzburg_civil_current",
    entityId: "ent_austria_salzburg",
    assetId: "ast_salzburg_vienna_vorarlberg_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Salzburg"],
    tags: ["official", "current", "civil", "ambiguous_quiz_visual"],
    quizVisualGroupId: "red_white_horizontal_bicolour_dark",
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_styria_state_current",
    entityId: "ent_austria_styria",
    assetId: "ast_styria_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Styria", "State Flag of Styria"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_styria_civil_current",
    entityId: "ent_austria_styria",
    assetId: "ast_styria_civil_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Styria"],
    tags: ["official", "current", "civil"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_tyrol_state_current",
    entityId: "ent_austria_tyrol",
    assetId: "ast_tyrol_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Tyrol", "State Flag of Tyrol", "Flag of Tirol"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_tyrol_civil_current",
    entityId: "ent_austria_tyrol",
    assetId: "ast_tyrol_upper_austria_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Tyrol", "Civil Flag of Tirol"],
    tags: ["official", "current", "civil", "ambiguous_quiz_visual"],
    quizVisualGroupId: "white_red_horizontal_bicolour",
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_upper_austria_state_current",
    entityId: "ent_austria_upper_austria",
    assetId: "ast_upper_austria_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Upper Austria", "State Flag of Upper Austria"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_upper_austria_civil_current",
    entityId: "ent_austria_upper_austria",
    assetId: "ast_tyrol_upper_austria_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Upper Austria"],
    tags: ["official", "current", "civil", "ambiguous_quiz_visual"],
    quizVisualGroupId: "white_red_horizontal_bicolour",
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_vienna_state_current",
    entityId: "ent_austria_vienna",
    assetId: "ast_vienna_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Vienna", "State Flag of Vienna", "Flag of Wien"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_vienna_civil_current",
    entityId: "ent_austria_vienna",
    assetId: "ast_salzburg_vienna_vorarlberg_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Vienna", "Civil Flag of Wien"],
    tags: ["official", "current", "civil", "ambiguous_quiz_visual"],
    quizVisualGroupId: "red_white_horizontal_bicolour_dark",
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_vorarlberg_state_current",
    entityId: "ent_austria_vorarlberg",
    assetId: "ast_vorarlberg_state_current",
    displayName: "State Flag",
    aliases: ["Flag of Vorarlberg", "State Flag of Vorarlberg"],
    tags: ["official", "current", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_austria_vorarlberg_civil_current",
    entityId: "ent_austria_vorarlberg",
    assetId: "ast_salzburg_vienna_vorarlberg_current",
    displayName: "Civil Flag",
    aliases: ["State Colours", "Civil Flag of Vorarlberg"],
    tags: ["official", "current", "civil", "ambiguous_quiz_visual"],
    quizVisualGroupId: "red_white_horizontal_bicolour_dark",
    startYear: null,
    endYear: null
  },
  {
    id: "var_belarus_current",
    entityId: "ent_belarus",
    assetId: "ast_belarus_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2012,
    endYear: null
  },
  {
    id: "var_belarus_brest_region_current",
    entityId: "ent_belarus_brest_region",
    assetId: "ast_brest_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Brest Region",
      "Flag of Brest Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belarus_city_of_minsk_current",
    entityId: "ent_belarus_city_of_minsk",
    assetId: "ast_city_of_minsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of City of Minsk"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belarus_gomel_region_current",
    entityId: "ent_belarus_gomel_region",
    assetId: "ast_gomel_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Gomel Region",
      "Flag of Gomel Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belarus_grodno_region_current",
    entityId: "ent_belarus_grodno_region",
    assetId: "ast_grodno_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Grodno Region",
      "Flag of Grodno Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belarus_minsk_region_current",
    entityId: "ent_belarus_minsk_region",
    assetId: "ast_minsk_oblast_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Minsk Region",
      "Flag of Minsk Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belarus_mogilev_region_current",
    entityId: "ent_belarus_mogilev_region",
    assetId: "ast_mogilev_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Mogilev Region",
      "Flag of Mogilev Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belarus_vitebsk_region_current",
    entityId: "ent_belarus_vitebsk_region",
    assetId: "ast_vitebsk_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Vitebsk Region",
      "Flag of Vitebsk Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_current",
    entityId: "ent_belgium",
    assetId: "ast_belgium_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1831,
    endYear: null
  },

  /*
    Belgium regional and provincial flags.
  */
  {
    id: "var_belgium_brussels_capital_region_current",
    entityId: "ent_belgium_brussels_capital_region",
    assetId: "ast_brussels_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Brussels-Capital Region",
      "Flag of Brussels"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_antwerp_current",
    entityId: "ent_belgium_antwerp",
    assetId: "ast_antwerp_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Antwerp",
      "Flag of the Province of Antwerp"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_east_flanders_current",
    entityId: "ent_belgium_east_flanders",
    assetId: "ast_east_flanders_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of East Flanders",
      "Flag of the Province of East Flanders"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_flemish_brabant_current",
    entityId: "ent_belgium_flemish_brabant",
    assetId: "ast_flemish_brabant_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Flemish Brabant",
      "Flag of the Province of Flemish Brabant"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_limburg_current",
    entityId: "ent_belgium_limburg",
    assetId: "ast_limburg_belgium_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Limburg",
      "Flag of Belgian Limburg",
      "Flag of the Province of Limburg"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_west_flanders_current",
    entityId: "ent_belgium_west_flanders",
    assetId: "ast_west_flanders_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of West Flanders",
      "Flag of the Province of West Flanders"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_hainaut_current",
    entityId: "ent_belgium_hainaut",
    assetId: "ast_hainaut_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Hainaut",
      "Flag of the Province of Hainaut"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_liege_current",
    entityId: "ent_belgium_liege",
    assetId: "ast_liege_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Liège",
      "Flag of Liege",
      "Flag of the Province of Liège",
      "Flag of the Province of Liege"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_luxembourg_current",
    entityId: "ent_belgium_luxembourg",
    assetId: "ast_luxembourg_region_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Luxembourg",
      "Flag of Belgian Luxembourg",
      "Flag of the Province of Luxembourg"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_namur_current",
    entityId: "ent_belgium_namur",
    assetId: "ast_namur_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Namur",
      "Flag of the Province of Namur"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_belgium_walloon_brabant_current",
    entityId: "ent_belgium_walloon_brabant",
    assetId: "ast_walloon_brabant_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Walloon Brabant",
      "Flag of the Province of Walloon Brabant"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_current",
    entityId: "ent_bosnia_and_herzegovina",
    assetId: "ast_bosnia_and_herzegovina_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1998,
    endYear: null
  },


  /*
    Bosnia and Herzegovina subnational flags.
  */
  {
    id: "var_bosnia_and_herzegovina_republika_srpska_current",
    entityId: "ent_bosnia_and_herzegovina_republika_srpska",
    assetId: "ast_republika_srpska_current",
    displayName: "Official Entity Flag",
    aliases: ["Flag of Republika Srpska", "Republika Srpska Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_una_sana_canton_current",
    entityId: "ent_bosnia_and_herzegovina_una_sana_canton",
    assetId: "ast_una_sana_current",
    displayName: "Official Cantonal Flag",
    aliases: ["Flag of Una-Sana Canton", "Una-Sana Canton Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_posavina_canton_current",
    entityId: "ent_bosnia_and_herzegovina_posavina_canton",
    assetId: "ast_posavina_current",
    displayName: "Official Cantonal Flag",
    aliases: ["Flag of Posavina Canton", "Posavina Canton Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_tuzla_canton_current",
    entityId: "ent_bosnia_and_herzegovina_tuzla_canton",
    assetId: "ast_tuzla_current",
    displayName: "Official Cantonal Flag",
    aliases: ["Flag of Tuzla Canton", "Tuzla Canton Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_zenica_doboj_canton_current",
    entityId: "ent_bosnia_and_herzegovina_zenica_doboj_canton",
    assetId: "ast_zenica_doboj_current",
    displayName: "Official Cantonal Flag",
    aliases: ["Flag of Zenica-Doboj Canton", "Zenica-Doboj Canton Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_bosnian_podrinje_canton_current",
    entityId: "ent_bosnia_and_herzegovina_bosnian_podrinje_canton",
    assetId: "ast_bosnian_podrinje_current",
    displayName: "Official Cantonal Flag",
    aliases: [
      "Flag of Bosnian-Podrinje Canton Goražde",
      "Bosnian-Podrinje Canton Goražde Flag",
      "Flag of Bosnian-Podrinje Canton Gorazde"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_central_bosnia_canton_current",
    entityId: "ent_bosnia_and_herzegovina_central_bosnia_canton",
    assetId: "ast_central_bosnia_current",
    displayName: "Official Cantonal Flag",
    aliases: ["Flag of Central Bosnia Canton", "Central Bosnia Canton Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_herzegovina_neretva_canton_current",
    entityId: "ent_bosnia_and_herzegovina_herzegovina_neretva_canton",
    assetId: "ast_herzegovina_neretva_current",
    displayName: "Official Cantonal Flag",
    aliases: ["Flag of Herzegovina-Neretva Canton", "Herzegovina-Neretva Canton Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_west_herzegovina_canton_current",
    entityId: "ent_bosnia_and_herzegovina_west_herzegovina_canton",
    assetId: "ast_west_herzegovina_current",
    displayName: "Official Cantonal Flag",
    aliases: ["Flag of West Herzegovina Canton", "West Herzegovina Canton Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bosnia_and_herzegovina_sarajevo_canton_current",
    entityId: "ent_bosnia_and_herzegovina_sarajevo_canton",
    assetId: "ast_sarajevo_canton_current",
    displayName: "Official Cantonal Flag",
    aliases: ["Flag of Sarajevo Canton", "Sarajevo Canton Flag"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_current",
    entityId: "ent_bulgaria",
    assetId: "ast_bulgaria_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1991,
    endYear: null
  },
  {
    id: "var_bulgaria_dobrich_province_current",
    entityId: "ent_bulgaria_dobrich_province",
    assetId: "ast_dobrich_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Dobrich Province", "Dobrich Province Flag", "Flag of Dobrich Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_gabrovo_province_current",
    entityId: "ent_bulgaria_gabrovo_province",
    assetId: "ast_gabrovo_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Gabrovo Province", "Gabrovo Province Flag", "Flag of Gabrovo Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_kyustendil_province_current",
    entityId: "ent_bulgaria_kyustendil_province",
    assetId: "ast_kyustendil_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Kyustendil Province", "Kyustendil Province Flag", "Flag of Kyustendil Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_lovech_province_current",
    entityId: "ent_bulgaria_lovech_province",
    assetId: "ast_lovech_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Lovech Province", "Lovech Province Flag", "Flag of Lovech Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_montana_province_current",
    entityId: "ent_bulgaria_montana_province",
    assetId: "ast_montana_bulgaria_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Montana Province", "Montana Province Flag", "Flag of Montana Oblast", "Flag of Montana Province, Bulgaria"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_pernik_province_current",
    entityId: "ent_bulgaria_pernik_province",
    assetId: "ast_pernik_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Pernik Province", "Pernik Province Flag", "Flag of Pernik Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_plovdiv_province_current",
    entityId: "ent_bulgaria_plovdiv_province",
    assetId: "ast_plovdiv_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Plovdiv Province", "Plovdiv Province Flag", "Flag of Plovdiv Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_razgrad_province_current",
    entityId: "ent_bulgaria_razgrad_province",
    assetId: "ast_razgrad_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Razgrad Province", "Razgrad Province Flag", "Flag of Razgrad Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_shumen_province_current",
    entityId: "ent_bulgaria_shumen_province",
    assetId: "ast_shumen_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Shumen Province", "Shumen Province Flag", "Flag of Shumen Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_silistra_province_current",
    entityId: "ent_bulgaria_silistra_province",
    assetId: "ast_silistra_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Silistra Province", "Silistra Province Flag", "Flag of Silistra Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_sofia_province_current",
    entityId: "ent_bulgaria_sofia_province",
    assetId: "ast_sofia_province_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Sofia Province", "Sofia Province Flag", "Flag of Sofia Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_stara_zagora_province_current",
    entityId: "ent_bulgaria_stara_zagora_province",
    assetId: "ast_stara_zagora_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Stara Zagora Province", "Stara Zagora Province Flag", "Flag of Stara Zagora Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_bulgaria_varna_province_current",
    entityId: "ent_bulgaria_varna_province",
    assetId: "ast_varna_current",
    displayName: "Official Provincial Flag",
    aliases: ["Flag of Varna Province", "Varna Province Flag", "Flag of Varna Oblast"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },

  /*
    Bulgarian provincial text-removed quiz-safe variants.
  */
  {
    id: "var_bulgaria_dobrich_province_current_text_removed",
    entityId: "ent_bulgaria_dobrich_province",
    assetId: "ast_dobrich_current_text_removed",
    displayName: "Official Provincial Flag - Text Removed",
    aliases: ["Flag of Dobrich Province", "Dobrich Province Flag", "Flag of Dobrich Oblast"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_bulgaria_dobrich_province_current"
  },
  {
    id: "var_bulgaria_lovech_province_current_text_removed",
    entityId: "ent_bulgaria_lovech_province",
    assetId: "ast_lovech_current_text_removed",
    displayName: "Official Provincial Flag - Text Removed",
    aliases: ["Flag of Lovech Province", "Lovech Province Flag", "Flag of Lovech Oblast"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_bulgaria_lovech_province_current"
  },
  {
    id: "var_bulgaria_razgrad_province_current_text_removed",
    entityId: "ent_bulgaria_razgrad_province",
    assetId: "ast_razgrad_current_text_removed",
    displayName: "Official Provincial Flag - Text Removed",
    aliases: ["Flag of Razgrad Province", "Razgrad Province Flag", "Flag of Razgrad Oblast"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_bulgaria_razgrad_province_current"
  },
  {
    id: "var_bulgaria_shumen_province_current_text_removed",
    entityId: "ent_bulgaria_shumen_province",
    assetId: "ast_shumen_current_text_removed",
    displayName: "Official Provincial Flag - Text Removed",
    aliases: ["Flag of Shumen Province", "Shumen Province Flag", "Flag of Shumen Oblast"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_bulgaria_shumen_province_current"
  },
  {
    id: "var_bulgaria_silistra_province_current_text_removed",
    entityId: "ent_bulgaria_silistra_province",
    assetId: "ast_silistra_current_text_removed",
    displayName: "Official Provincial Flag - Text Removed",
    aliases: ["Flag of Silistra Province", "Silistra Province Flag", "Flag of Silistra Oblast"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_bulgaria_silistra_province_current"
  },
  {
    id: "var_bulgaria_varna_province_current_text_removed",
    entityId: "ent_bulgaria_varna_province",
    assetId: "ast_varna_current_text_removed",
    displayName: "Official Provincial Flag - Text Removed",
    aliases: ["Flag of Varna Province", "Varna Province Flag", "Flag of Varna Oblast"],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_bulgaria_varna_province_current"
  },

  {
    id: "var_croatia_current",
    entityId: "ent_croatia",
    assetId: "ast_croatia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },

  /*
    Croatian counties and the City of Zagreb.
  */
  {
    id: "var_croatia_bjelovar_bilogora_county_current",
    entityId: "ent_croatia_bjelovar_bilogora_county",
    assetId: "ast_bjelovar_bilogora_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Bjelovar-Bilogora County",
      "Bjelovar-Bilogora County Flag",
      "Flag of Bjelovar Bilogora County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_brod_posavina_county_current",
    entityId: "ent_croatia_brod_posavina_county",
    assetId: "ast_brod_posavina_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Brod-Posavina County",
      "Brod-Posavina County Flag",
      "Flag of Brod Posavina County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_dubrovnik_neretva_county_current",
    entityId: "ent_croatia_dubrovnik_neretva_county",
    assetId: "ast_dubrovnik_neretva_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Dubrovnik-Neretva County",
      "Dubrovnik-Neretva County Flag",
      "Flag of Dubrovnik Neretva County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_istria_county_current",
    entityId: "ent_croatia_istria_county",
    assetId: "ast_istria_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Istria County",
      "Istria County Flag",
      "Flag of Istarska županija"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_karlovac_county_current",
    entityId: "ent_croatia_karlovac_county",
    assetId: "ast_karlovac_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Karlovac County",
      "Karlovac County Flag",
      "Flag of Karlovačka županija"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_koprivnica_krizevci_county_current",
    entityId: "ent_croatia_koprivnica_krizevci_county",
    assetId: "ast_koprivnica_krizevci_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Koprivnica-Križevci County",
      "Koprivnica-Križevci County Flag",
      "Flag of Koprivnica-Krizevci County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_krapina_zagorje_county_current",
    entityId: "ent_croatia_krapina_zagorje_county",
    assetId: "ast_krapina_zagorje_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Krapina-Zagorje County",
      "Krapina-Zagorje County Flag",
      "Flag of Krapina Zagorje County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_lika_senj_county_current",
    entityId: "ent_croatia_lika_senj_county",
    assetId: "ast_lika_senj_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Lika-Senj County",
      "Lika-Senj County Flag",
      "Flag of Lika Senj County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_medimurje_county_current",
    entityId: "ent_croatia_medimurje_county",
    assetId: "ast_medimurje_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Međimurje County",
      "Međimurje County Flag",
      "Flag of Medimurje County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_osijek_baranja_county_current",
    entityId: "ent_croatia_osijek_baranja_county",
    assetId: "ast_osijek_baranja_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Osijek-Baranja County",
      "Osijek-Baranja County Flag",
      "Flag of Osijek Baranja County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_pozega_slavonia_county_current",
    entityId: "ent_croatia_pozega_slavonia_county",
    assetId: "ast_pozega_slavonia_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Požega-Slavonia County",
      "Požega-Slavonia County Flag",
      "Flag of Pozega-Slavonia County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_primorje_gorski_kotar_county_current",
    entityId: "ent_croatia_primorje_gorski_kotar_county",
    assetId: "ast_primorje_gorski_kotar_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Primorje-Gorski Kotar County",
      "Primorje-Gorski Kotar County Flag",
      "Flag of Primorje Gorski Kotar County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_sibenik_knin_county_current",
    entityId: "ent_croatia_sibenik_knin_county",
    assetId: "ast_sibenik_knin_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Šibenik-Knin County",
      "Šibenik-Knin County Flag",
      "Flag of Sibenik-Knin County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_sisak_moslavina_county_current",
    entityId: "ent_croatia_sisak_moslavina_county",
    assetId: "ast_sisak_moslavina_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Sisak-Moslavina County",
      "Sisak-Moslavina County Flag",
      "Flag of Sisak Moslavina County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_split_dalmatia_county_current",
    entityId: "ent_croatia_split_dalmatia_county",
    assetId: "ast_split_dalmatia_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Split-Dalmatia County",
      "Split-Dalmatia County Flag",
      "Flag of Split Dalmatia County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_varazdin_county_current",
    entityId: "ent_croatia_varazdin_county",
    assetId: "ast_varazdin_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Varaždin County",
      "Varaždin County Flag",
      "Flag of Varazdin County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_virovitica_podravina_county_current",
    entityId: "ent_croatia_virovitica_podravina_county",
    assetId: "ast_virovitica_podravina_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Virovitica-Podravina County",
      "Virovitica-Podravina County Flag",
      "Flag of Virovitica Podravina County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_vukovar_syrmia_county_current",
    entityId: "ent_croatia_vukovar_syrmia_county",
    assetId: "ast_vukovar_syrmia_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Vukovar-Syrmia County",
      "Vukovar-Syrmia County Flag",
      "Flag of Vukovar-Srijem County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_zadar_county_current",
    entityId: "ent_croatia_zadar_county",
    assetId: "ast_zadar_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Zadar County",
      "Zadar County Flag",
      "Flag of Zadarska županija"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_zagreb_city_current",
    entityId: "ent_croatia_zagreb_city",
    assetId: "ast_zagreb_city_current",
    displayName: "Official City Flag",
    aliases: [
      "Flag of City of Zagreb",
      "City of Zagreb Flag",
      "Flag of Zagreb"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_croatia_zagreb_county_county_current",
    entityId: "ent_croatia_zagreb_county_county",
    assetId: "ast_zagreb_county_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Zagreb County",
      "Zagreb County Flag",
      "Flag of Zagrebačka županija"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cyprus_current",
    entityId: "ent_cyprus",
    assetId: "ast_cyprus_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2006,
    endYear: null
  },
  {
    id: "var_czechia_current",
    entityId: "ent_czechia",
    assetId: "ast_czechia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1993,
    endYear: null
  },
  /*
    Czech regions.
  */
  {
    id: "var_czechia_central_bohemian_current",
    entityId: "ent_czechia_central_bohemian",
    assetId: "ast_central_bohemian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Central Bohemian",
      "Flag of Central Bohemian Region",
      "Flag of Středočeský Region",
      "Flag of Stredocesky Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_hradec_kralove_current",
    entityId: "ent_czechia_hradec_kralove",
    assetId: "ast_hradec_kralove_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Hradec Králové",
      "Flag of Hradec Kralove",
      "Flag of Hradec Králové Region",
      "Flag of Hradec Kralove Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_karlovy_vary_current",
    entityId: "ent_czechia_karlovy_vary",
    assetId: "ast_karlovy_vary_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Karlovy Vary",
      "Flag of Karlovy Vary Region",
      "Flag of Carlsbad Region",
      "Flag of Karlovarský Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_liberec_current",
    entityId: "ent_czechia_liberec",
    assetId: "ast_liberec_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Liberec",
      "Flag of Liberec Region",
      "Flag of Liberecký Region",
      "Flag of Liberecky Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_moravian_silesian_current",
    entityId: "ent_czechia_moravian_silesian",
    assetId: "ast_moravian_silesian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Moravian-Silesian",
      "Flag of Moravian Silesian",
      "Flag of Moravian-Silesian Region",
      "Flag of Moravian Silesian Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_olomouc_current",
    entityId: "ent_czechia_olomouc",
    assetId: "ast_olomouc_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Olomouc",
      "Flag of Olomouc Region",
      "Flag of Olomoucký Region",
      "Flag of Olomoucky Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_pardubice_current",
    entityId: "ent_czechia_pardubice",
    assetId: "ast_pardubice_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Pardubice",
      "Flag of Pardubice Region",
      "Flag of Pardubický Region",
      "Flag of Pardubicky Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_plzen_current",
    entityId: "ent_czechia_plzen",
    assetId: "ast_plzen_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Plzeň",
      "Flag of Plzen",
      "Flag of Pilsen",
      "Flag of Plzeň Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_prague_current",
    entityId: "ent_czechia_prague",
    assetId: "ast_prague_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Prague",
      "Flag of Capital City of Prague",
      "Flag of Prague Region",
      "Flag of Praha"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_south_bohemian_current",
    entityId: "ent_czechia_south_bohemian",
    assetId: "ast_south_bohemian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of South Bohemian",
      "Flag of South Bohemian Region",
      "Flag of South Bohemia",
      "Flag of Jihočeský Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_south_moravian_current",
    entityId: "ent_czechia_south_moravian",
    assetId: "ast_south_moravian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of South Moravian",
      "Flag of South Moravian Region",
      "Flag of South Moravia",
      "Flag of Jihomoravský Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_usti_nad_labem_current",
    entityId: "ent_czechia_usti_nad_labem",
    assetId: "ast_usti_nad_labem_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Ústí nad Labem",
      "Flag of Usti nad Labem",
      "Flag of Ústí nad Labem Region",
      "Flag of Usti nad Labem Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_vysocina_current",
    entityId: "ent_czechia_vysocina",
    assetId: "ast_vysocina_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Vysočina",
      "Flag of Vysocina",
      "Flag of Vysočina Region",
      "Flag of Vysocina Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_czechia_zlin_current",
    entityId: "ent_czechia_zlin",
    assetId: "ast_zlin_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Zlín",
      "Flag of Zlin",
      "Flag of Zlín Region",
      "Flag of Zlin Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_current",
    entityId: "ent_estonia",
    assetId: "ast_estonia_current",
    displayName: "National Flag",
    aliases: ["Sinimustvalge"],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_estonia_harju_current",
    entityId: "ent_estonia_harju",
    assetId: "ast_harju_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Harju",
      "Flag of Harju County",
      "Flag of Harju maakond",
      "Flag of Harjumaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_hiiu_current",
    entityId: "ent_estonia_hiiu",
    assetId: "ast_hiiu_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Hiiu",
      "Flag of Hiiu County",
      "Flag of Hiiu maakond",
      "Flag of Hiiumaa",
      "Flag of Hiiumaa County"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_ida_viru_current",
    entityId: "ent_estonia_ida_viru",
    assetId: "ast_ida_viru_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Ida-Viru",
      "Flag of Ida-Viru County",
      "Flag of Ida Viru County",
      "Flag of Ida-Viru maakond",
      "Flag of Ida-Virumaa",
      "Flag of Ida Virumaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_jarva_current",
    entityId: "ent_estonia_jarva",
    assetId: "ast_jarva_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Järva",
      "Flag of Järva County",
      "Flag of Jarva County",
      "Flag of Järva maakond",
      "Flag of Jarva maakond",
      "Flag of Järvamaa",
      "Flag of Jarvamaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_jogeva_current",
    entityId: "ent_estonia_jogeva",
    assetId: "ast_jogeva_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Jõgeva",
      "Flag of Jõgeva County",
      "Flag of Jogeva County",
      "Flag of Jõgeva maakond",
      "Flag of Jogeva maakond",
      "Flag of Jõgevamaa",
      "Flag of Jogevamaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_laane_current",
    entityId: "ent_estonia_laane",
    assetId: "ast_laane_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Lääne",
      "Flag of Lääne County",
      "Flag of Laane County",
      "Flag of Lääne maakond",
      "Flag of Laane maakond",
      "Flag of Läänemaa",
      "Flag of Laanemaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_laane_viru_current",
    entityId: "ent_estonia_laane_viru",
    assetId: "ast_laane_viru_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Lääne-Viru",
      "Flag of Lääne-Viru County",
      "Flag of Laane-Viru County",
      "Flag of Lääne Viru County",
      "Flag of Laane Viru County",
      "Flag of Lääne-Viru maakond",
      "Flag of Laane-Viru maakond",
      "Flag of Lääne-Virumaa",
      "Flag of Laane-Virumaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_parnu_current",
    entityId: "ent_estonia_parnu",
    assetId: "ast_parnu_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Pärnu",
      "Flag of Pärnu County",
      "Flag of Parnu County",
      "Flag of Pärnu maakond",
      "Flag of Parnu maakond",
      "Flag of Pärnumaa",
      "Flag of Parnumaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_polva_current",
    entityId: "ent_estonia_polva",
    assetId: "ast_polva_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Põlva",
      "Flag of Põlva County",
      "Flag of Polva County",
      "Flag of Põlva maakond",
      "Flag of Polva maakond",
      "Flag of Põlvamaa",
      "Flag of Polvamaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_rapla_current",
    entityId: "ent_estonia_rapla",
    assetId: "ast_rapla_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Rapla",
      "Flag of Rapla County",
      "Flag of Rapla maakond",
      "Flag of Raplamaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_saare_current",
    entityId: "ent_estonia_saare",
    assetId: "ast_saare_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Saare",
      "Flag of Saare County",
      "Flag of Saare maakond",
      "Flag of Saaremaa",
      "Flag of Saaremaa County"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_tartu_current",
    entityId: "ent_estonia_tartu",
    assetId: "ast_tartu_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Tartu",
      "Flag of Tartu County",
      "Flag of Tartu maakond",
      "Flag of Tartumaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_valga_current",
    entityId: "ent_estonia_valga",
    assetId: "ast_valga_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Valga",
      "Flag of Valga County",
      "Flag of Valga maakond",
      "Flag of Valgamaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_viljandi_current",
    entityId: "ent_estonia_viljandi",
    assetId: "ast_viljandi_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Viljandi",
      "Flag of Viljandi County",
      "Flag of Viljandi maakond",
      "Flag of Viljandimaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_estonia_voru_current",
    entityId: "ent_estonia_voru",
    assetId: "ast_voru_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Võru",
      "Flag of Võru County",
      "Flag of Voru County",
      "Flag of Võru maakond",
      "Flag of Voru maakond",
      "Flag of Võrumaa",
      "Flag of Vorumaa"
  ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_faroe_islands_current",
    entityId: "ent_faroe_islands",
    assetId: "ast_faroe_islands_current",
    displayName: "National Flag",
    aliases: ["Merkið"],
    tags: ["official", "current", "national"],
    startYear: 1948,
    endYear: null
  },
  {
    id: "var_finland_current",
    entityId: "ent_finland",
    assetId: "ast_finland_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil"],
    startYear: 1918,
    endYear: null
  },
  {
    id: "var_finland_state",
    entityId: "ent_finland",
    assetId: "ast_finland_state",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "national", "state"],
    startYear: 1918,
    endYear: null
  },
  {
    id: "var_finland_central_finland_current",
    entityId: "ent_finland_central_finland",
    assetId: "ast_central_finland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Central Finland",
      "Keski-Suomi Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_central_ostrobothnia_current",
    entityId: "ent_finland_central_ostrobothnia",
    assetId: "ast_central_ostrobothnia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Central Ostrobothnia",
      "Keski-Pohjanmaa Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_kainuu_current",
    entityId: "ent_finland_kainuu",
    assetId: "ast_kainuu_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kainuu"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_kanta_hame_current",
    entityId: "ent_finland_kanta_hame",
    assetId: "ast_kanta_hame_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kanta-Häme",
      "Flag of Kanta-Hame",
      "Flag of Tavastia Proper"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_north_karelia_current",
    entityId: "ent_finland_north_karelia",
    assetId: "ast_north_karelia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of North Karelia",
      "Pohjois-Karjala Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_north_savo_current",
    entityId: "ent_finland_north_savo",
    assetId: "ast_north_savo_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of North Savo",
      "Flag of Northern Savonia",
      "Pohjois-Savo Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_paijat_hame_current",
    entityId: "ent_finland_paijat_hame",
    assetId: "ast_paijat_hame_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Päijät-Häme",
      "Flag of Paijat-Hame",
      "Flag of Päijänne Tavastia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_pirkanmaa_current",
    entityId: "ent_finland_pirkanmaa",
    assetId: "ast_pirkanmaa_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Pirkanmaa",
      "Flag of Tampere Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_satakunta_current",
    entityId: "ent_finland_satakunta",
    assetId: "ast_satakunta_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Satakunta"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_south_ostrobothnia_current",
    entityId: "ent_finland_south_ostrobothnia",
    assetId: "ast_south_ostrobothnia_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of South Ostrobothnia",
      "Flag of Southern Ostrobothnia",
      "Etelä-Pohjanmaa Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_south_savo_current",
    entityId: "ent_finland_south_savo",
    assetId: "ast_south_savo_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of South Savo",
      "Flag of Southern Savonia",
      "Etelä-Savo Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_finland_uusimaa_current",
    entityId: "ent_finland_uusimaa",
    assetId: "ast_uusimaa_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Uusimaa",
      "Flag of Helsinki-Uusimaa"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_current",
    entityId: "ent_germany",
    assetId: "ast_germany_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil"],
    startYear: 1949,
    endYear: null
  },
  {
    id: "var_germany_state",
    entityId: "ent_germany",
    assetId: "ast_germany_state",
    displayName: "State Flag",
    aliases: ["Federal Service Flag"],
    tags: ["official", "current", "national", "state"],
    startYear: 1950,
    endYear: null
  },
  /*
    German Länder.
  */
  {
    id: "var_germany_baden_wurttemberg_current",
    entityId: "ent_germany_baden_wurttemberg",
    assetId: "ast_baden_wurttemberg_current",
    displayName: "Official Flag",
    aliases: ["Flag of Baden-Württemberg", "Flag of Baden-Wuerttemberg"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_bavaria_current_lozengy",
    entityId: "ent_germany_bavaria",
    assetId: "ast_bavaria_current_lozengy",
    displayName: "Lozengy State Flag",
    aliases: ["Lozenge Flag", "Diamond Flag", "Rautenflagge"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null,
    relatedVariants: {
      alternatives: ["var_germany_bavaria_current_striped"]
    }
  },
  {
    id: "var_germany_bavaria_current_striped",
    entityId: "ent_germany_bavaria",
    assetId: "ast_bavaria_current_striped",
    displayName: "Striped State Flag",
    aliases: ["Stripe Flag", "Streifenflagge"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null,
    relatedVariants: {
      alternatives: ["var_germany_bavaria_current_lozengy"]
    }
  },
  {
    id: "var_germany_berlin_current",
    entityId: "ent_germany_berlin",
    assetId: "ast_berlin_current",
    displayName: "Official Flag",
    aliases: ["Flag of Berlin"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_brandenburg_current",
    entityId: "ent_germany_brandenburg",
    assetId: "ast_brandenburg_current",
    displayName: "Official Flag",
    aliases: ["Flag of Brandenburg"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_bremen_current",
    entityId: "ent_germany_bremen",
    assetId: "ast_bremen_current",
    displayName: "Official Flag",
    aliases: ["Flag of Bremen"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_hamburg_current",
    entityId: "ent_germany_hamburg",
    assetId: "ast_hamburg_current",
    displayName: "Official Flag",
    aliases: ["Flag of Hamburg"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_hesse_current",
    entityId: "ent_germany_hesse",
    assetId: "ast_hesse_current",
    displayName: "Official Flag",
    aliases: ["Flag of Hesse", "Flag of Hessen"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_lower_saxony_current",
    entityId: "ent_germany_lower_saxony",
    assetId: "ast_lower_saxony_current",
    displayName: "Official Flag",
    aliases: ["Flag of Lower Saxony", "Flag of Niedersachsen"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_mecklenburg_western_pomerania_current",
    entityId: "ent_germany_mecklenburg_western_pomerania",
    assetId: "ast_mecklenburg_western_pomerania_current",
    displayName: "Official Flag",
    aliases: ["Flag of Mecklenburg-Vorpommern", "Flag of Mecklenburg-Western Pomerania"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_north_rhine_westphalia_current",
    entityId: "ent_germany_north_rhine_westphalia",
    assetId: "ast_north_rhine_westphalia_current",
    displayName: "Official Flag",
    aliases: ["Flag of North Rhine-Westphalia", "Flag of Nordrhein-Westfalen"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_rhineland_palatinate_current",
    entityId: "ent_germany_rhineland_palatinate",
    assetId: "ast_rhineland_palatinate_current",
    displayName: "Official Flag",
    aliases: ["Flag of Rhineland-Palatinate", "Flag of Rheinland-Pfalz"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_saarland_current",
    entityId: "ent_germany_saarland",
    assetId: "ast_saarland_current",
    displayName: "Official Flag",
    aliases: ["Flag of Saarland"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_saxony_current",
    entityId: "ent_germany_saxony",
    assetId: "ast_saxony_current",
    displayName: "Official Flag",
    aliases: ["Flag of Saxony", "Flag of Sachsen"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_saxony_anhalt_current",
    entityId: "ent_germany_saxony_anhalt",
    assetId: "ast_saxony_anhalt_current",
    displayName: "Official Flag",
    aliases: ["Flag of Saxony-Anhalt", "Flag of Sachsen-Anhalt"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_schleswig_holstein_current",
    entityId: "ent_germany_schleswig_holstein",
    assetId: "ast_schleswig_holstein_current",
    displayName: "Official Flag",
    aliases: ["Flag of Schleswig-Holstein"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_germany_thuringia_current",
    entityId: "ent_germany_thuringia",
    assetId: "ast_thuringia_current",
    displayName: "Official Flag",
    aliases: ["Flag of Thuringia", "Flag of Thüringen"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_gibraltar_current",
    entityId: "ent_gibraltar",
    assetId: "ast_gibraltar_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1982,
    endYear: null
  },
  {
    id: "var_greece_current",
    entityId: "ent_greece",
    assetId: "ast_greece_current",
    displayName: "National Flag",
    aliases: ["Galanolefki"],
    tags: ["official", "current", "national"],
    startYear: 1978,
    endYear: null
  },
  /*
    Greek regional flags.
  */
  {
    id: "var_greece_greek_macedonia_region_current",
    entityId: "ent_greece_greek_macedonia_region",
    assetId: "ast_greek_macedonia_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Greek Macedonia", "Flag of Macedonia (Greece)"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_current",
    entityId: "ent_hungary",
    assetId: "ast_hungary_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil"],
    startYear: 1957,
    endYear: null
  },
  {
    id: "var_hungary_state_unofficial",
    entityId: "ent_hungary",
    assetId: "ast_hungary_state_unofficial",
    displayName: "Unofficial State Flag",
    aliases: [],
    tags: ["unofficial", "current", "national", "state"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_bacs_kiskun_current",
    entityId: "ent_hungary_bacs_kiskun",
    assetId: "ast_bacs_kiskun_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Bács-Kiskun County",
      "Bács-Kiskun County Flag",
      "Flag of Bács-Kiskun vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_baranya_current",
    entityId: "ent_hungary_baranya",
    assetId: "ast_baranya_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Baranya County",
      "Baranya County Flag",
      "Flag of Baranya vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_baranya_current_text_removed",
    entityId: "ent_hungary_baranya",
    assetId: "ast_baranya_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_baranya_current"
  },
  {
    id: "var_hungary_bekes_current",
    entityId: "ent_hungary_bekes",
    assetId: "ast_bekes_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Békés County",
      "Békés County Flag",
      "Flag of Békés vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_bekes_current_text_removed",
    entityId: "ent_hungary_bekes",
    assetId: "ast_bekes_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_bekes_current"
  },
  {
    id: "var_hungary_borsod_abauj_zemplen_current",
    entityId: "ent_hungary_borsod_abauj_zemplen",
    assetId: "ast_borsod_abauj_zemplen_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Borsod-Abaúj-Zemplén County",
      "Borsod-Abaúj-Zemplén County Flag",
      "Flag of Borsod-Abaúj-Zemplén vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_budapest_city_current",
    entityId: "ent_hungary_budapest_city",
    assetId: "ast_budapest_current",
    displayName: "Official City Flag",
    aliases: [
      "Flag of Budapest",
      "Budapest City Flag",
      "Flag of Budapest főváros"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_csongrad_csanad_current",
    entityId: "ent_hungary_csongrad_csanad",
    assetId: "ast_csonrad_csanad_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Csongrád-Csanád County",
      "Csongrád-Csanád County Flag",
      "Flag of Csongrád-Csanád vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_csongrad_csanad_current_text_removed",
    entityId: "ent_hungary_csongrad_csanad",
    assetId: "ast_csonrad_csanad_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_csongrad_csanad_current"
  },
  {
    id: "var_hungary_fejer_current",
    entityId: "ent_hungary_fejer",
    assetId: "ast_fejer_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Fejér County",
      "Fejér County Flag",
      "Flag of Fejér vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_fejer_current_text_removed",
    entityId: "ent_hungary_fejer",
    assetId: "ast_fejer_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_fejer_current"
  },
  {
    id: "var_hungary_gyor_moson_sopron_current",
    entityId: "ent_hungary_gyor_moson_sopron",
    assetId: "ast_gyor_moson_sopron_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Győr-Moson-Sopron County",
      "Győr-Moson-Sopron County Flag",
      "Flag of Győr-Moson-Sopron vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_hajdu_bihar_current",
    entityId: "ent_hungary_hajdu_bihar",
    assetId: "ast_hajdu_bihar_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Hajdú-Bihar County",
      "Hajdú-Bihar County Flag",
      "Flag of Hajdú-Bihar vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_heves_current",
    entityId: "ent_hungary_heves",
    assetId: "ast_heves_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Heves County",
      "Heves County Flag",
      "Flag of Heves vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_jasz_nagykun_szolnok_current",
    entityId: "ent_hungary_jasz_nagykun_szolnok",
    assetId: "ast_jasz_nagykun_szolnok_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Jász-Nagykun-Szolnok County",
      "Jász-Nagykun-Szolnok County Flag",
      "Flag of Jász-Nagykun-Szolnok vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_jasz_nagykun_szolnok_current_text_removed",
    entityId: "ent_hungary_jasz_nagykun_szolnok",
    assetId: "ast_jasz_nagykun_szolnok_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_jasz_nagykun_szolnok_current"
  },
  {
    id: "var_hungary_komarom_esztergom_current",
    entityId: "ent_hungary_komarom_esztergom",
    assetId: "ast_komarom_esztergom_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Komárom-Esztergom County",
      "Komárom-Esztergom County Flag",
      "Flag of Komárom-Esztergom vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_komarom_esztergom_current_text_removed",
    entityId: "ent_hungary_komarom_esztergom",
    assetId: "ast_komarom_esztergom_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_komarom_esztergom_current"
  },
  {
    id: "var_hungary_nograd_current",
    entityId: "ent_hungary_nograd",
    assetId: "ast_nograd_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Nógrád County",
      "Nógrád County Flag",
      "Flag of Nógrád vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_nograd_current_text_removed",
    entityId: "ent_hungary_nograd",
    assetId: "ast_nograd_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_nograd_current"
  },
  {
    id: "var_hungary_pest_current",
    entityId: "ent_hungary_pest",
    assetId: "ast_pest_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Pest County",
      "Pest County Flag",
      "Flag of Pest vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_pest_current_text_removed",
    entityId: "ent_hungary_pest",
    assetId: "ast_pest_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_pest_current"
  },
  {
    id: "var_hungary_somogy_current",
    entityId: "ent_hungary_somogy",
    assetId: "ast_somogy_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Somogy County",
      "Somogy County Flag",
      "Flag of Somogy vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_somogy_current_text_removed",
    entityId: "ent_hungary_somogy",
    assetId: "ast_somogy_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_somogy_current"
  },
  {
    id: "var_hungary_szabolcs_szatmar_bereg_current",
    entityId: "ent_hungary_szabolcs_szatmar_bereg",
    assetId: "ast_szabolcs_szatmar_bereg_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Szabolcs-Szatmár-Bereg County",
      "Szabolcs-Szatmár-Bereg County Flag",
      "Flag of Szabolcs-Szatmár-Bereg vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_szabolcs_szatmar_bereg_current_text_removed",
    entityId: "ent_hungary_szabolcs_szatmar_bereg",
    assetId: "ast_szabolcs_szatmar_bereg_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_szabolcs_szatmar_bereg_current"
  },
  {
    id: "var_hungary_tolna_current",
    entityId: "ent_hungary_tolna",
    assetId: "ast_tolna_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Tolna County",
      "Tolna County Flag",
      "Flag of Tolna vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_tolna_current_text_removed",
    entityId: "ent_hungary_tolna",
    assetId: "ast_tolna_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_tolna_current"
  },
  {
    id: "var_hungary_vas_current",
    entityId: "ent_hungary_vas",
    assetId: "ast_vas_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Vas County",
      "Vas County Flag",
      "Flag of Vas vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_vas_current_text_removed",
    entityId: "ent_hungary_vas",
    assetId: "ast_vas_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_vas_current"
  },
  {
    id: "var_hungary_veszprem_current",
    entityId: "ent_hungary_veszprem",
    assetId: "ast_veszprem_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Veszprém County",
      "Veszprém County Flag",
      "Flag of Veszprém vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_zala_current",
    entityId: "ent_hungary_zala",
    assetId: "ast_zala_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Zala County",
      "Zala County Flag",
      "Flag of Zala vármegye"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hungary_zala_current_text_removed",
    entityId: "ent_hungary_zala",
    assetId: "ast_zala_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_hungary_zala_current"
  },
  {
    id: "var_iceland_current",
    entityId: "ent_iceland",
    assetId: "ast_iceland_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1944,
    endYear: null
  },
  {
    id: "var_ireland_current",
    entityId: "ent_ireland",
    assetId: "ast_ireland_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1937,
    endYear: null
  },
  {
    id: "var_italy_current",
    entityId: "ent_italy",
    assetId: "ast_italy_current",
    displayName: "National Flag",
    aliases: ["Il Tricolore"],
    tags: ["official", "current", "national", "civil"],
    startYear: 1946,
    endYear: null
  },
  {
    id: "var_italy_civil",
    entityId: "ent_italy",
    assetId: "ast_italy_civil",
    displayName: "Civil Ensign",
    aliases: [],
    tags: ["official", "current", "civil_ensign"],
    startYear: 1947,
    endYear: null
  },
  {
    id: "var_italy_state",
    entityId: "ent_italy",
    assetId: "ast_italy_state",
    displayName: "State Ensign",
    aliases: [],
    tags: ["official", "current", "state_ensign"],
    startYear: 1947,
    endYear: null
  },
  {
    id: "var_italy_naval",
    entityId: "ent_italy",
    assetId: "ast_italy_naval",
    displayName: "Naval Ensign",
    aliases: [],
    tags: ["official", "current", "naval_ensign"],
    startYear: 1947,
    endYear: null
  },
  /*
    Italy current regional variants.
  */
  {
    id: "var_italy_abruzzo_current",
    entityId: "ent_italy_abruzzo",
    assetId: "ast_abruzzo_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_aosta_valley_current",
    entityId: "ent_italy_aosta_valley",
    assetId: "ast_aosta_valley_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_apulia_current",
    entityId: "ent_italy_apulia",
    assetId: "ast_apulia_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_basilicata_current",
    entityId: "ent_italy_basilicata",
    assetId: "ast_basilicata_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_calabria_current",
    entityId: "ent_italy_calabria",
    assetId: "ast_calabria_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_campania_current",
    entityId: "ent_italy_campania",
    assetId: "ast_campania_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_emilia_romagna_current",
    entityId: "ent_italy_emilia_romagna",
    assetId: "ast_emilia_romagna_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_friuli_venezia_giulia_current",
    entityId: "ent_italy_friuli_venezia_giulia",
    assetId: "ast_friuli_venezia_giulia_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_lazio_current",
    entityId: "ent_italy_lazio",
    assetId: "ast_lazio_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_liguria_current",
    entityId: "ent_italy_liguria",
    assetId: "ast_liguria_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_lombardy_current",
    entityId: "ent_italy_lombardy",
    assetId: "ast_lombardy_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_marche_current",
    entityId: "ent_italy_marche",
    assetId: "ast_marche_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_molise_current",
    entityId: "ent_italy_molise",
    assetId: "ast_molise_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_piedmont_current",
    entityId: "ent_italy_piedmont",
    assetId: "ast_piedmont_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_sardinia_current",
    entityId: "ent_italy_sardinia",
    assetId: "ast_sardinia_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_sicily_current",
    entityId: "ent_italy_sicily",
    assetId: "ast_sicily_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_trentino_alto_adige_sudtirol_current",
    entityId: "ent_italy_trentino_alto_adige_sudtirol",
    assetId: "ast_trentino_alto_south_tyrol_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_tuscany_current",
    entityId: "ent_italy_tuscany",
    assetId: "ast_tuscany_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_umbria_current",
    entityId: "ent_italy_umbria",
    assetId: "ast_umbria_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_italy_veneto_current",
    entityId: "ent_italy_veneto",
    assetId: "ast_veneto_current",
    displayName: "Regional Flag",
    aliases: [],
    tags: ["current"],
    startYear: null,
    endYear: null
  },


  /*
    Italy current-region text-removed quiz-safe variants.
  */
  {
    id: "var_italy_apulia_current_text_removed",
    entityId: "ent_italy_apulia",
    assetId: "ast_apulia_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Apulia"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_italy_apulia_current"
  },
  {
    id: "var_italy_calabria_current_text_removed",
    entityId: "ent_italy_calabria",
    assetId: "ast_calabria_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Calabria"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_italy_calabria_current"
  },
  {
    id: "var_italy_emilia_romagna_current_text_removed",
    entityId: "ent_italy_emilia_romagna",
    assetId: "ast_emilia_romagna_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Emilia-Romagna", "Flag of Emilia Romagna"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_italy_emilia_romagna_current"
  },
  {
    id: "var_italy_lazio_current_text_removed",
    entityId: "ent_italy_lazio",
    assetId: "ast_lazio_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Lazio"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_italy_lazio_current"
  },
  {
    id: "var_italy_molise_current_text_removed",
    entityId: "ent_italy_molise",
    assetId: "ast_molise_current_text_removed",
    displayName: "Regional Flag - Text Removed",
    aliases: ["Flag of Molise"],
    tags: ["quiz", "text_removed", "current"],
    startYear: null,
    endYear: null,
    baseVariantId: "var_italy_molise_current"
  },
  {
    id: "var_kosovo_current",
    entityId: "ent_kosovo",
    assetId: "ast_kosovo_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2008,
    endYear: null
  },
  {
    id: "var_latvia_current",
    entityId: "ent_latvia",
    assetId: "ast_latvia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_latvia_daugavpils_current",
    entityId: "ent_latvia_daugavpils",
    assetId: "ast_daugavpils_current",
    displayName: "Official Flag",
    aliases: ["Flag of Daugavpils"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_latvia_jelgava_current",
    entityId: "ent_latvia_jelgava",
    assetId: "ast_jelgava_current",
    displayName: "Official Flag",
    aliases: ["Flag of Jelgava"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_latvia_jurmala_current",
    entityId: "ent_latvia_jurmala",
    assetId: "ast_jurmala_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Jūrmala",
      "Flag of Jurmala"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_latvia_liepaja_current",
    entityId: "ent_latvia_liepaja",
    assetId: "ast_liepaja_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Liepāja",
      "Flag of Liepaja"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_latvia_rezekne_current",
    entityId: "ent_latvia_rezekne",
    assetId: "ast_rezekne_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Rēzekne",
      "Flag of Rezekne"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_latvia_riga_current",
    entityId: "ent_latvia_riga",
    assetId: "ast_riga_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Riga",
      "Flag of Rīga"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_latvia_ventspils_current",
    entityId: "ent_latvia_ventspils",
    assetId: "ast_ventspils_current",
    displayName: "Official Flag",
    aliases: ["Flag of Ventspils"],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_liechtenstein_current",
    entityId: "ent_liechtenstein",
    assetId: "ast_liechtenstein_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1982,
    endYear: null
  },
  {
    id: "var_liechtenstein_state",
    entityId: "ent_liechtenstein",
    assetId: "ast_liechtenstein_state",
    displayName: "State Flag",
    aliases: ["Government Flag"],
    tags: ["official", "current", "state"],
    startYear: 1982,
    endYear: null
  },
  {
    id: "var_lithuania_current",
    entityId: "ent_lithuania",
    assetId: "ast_lithuania_current",
    displayName: "National Flag",
    aliases: ["Trispalvė"],
    tags: ["official", "current", "national", "civil"],
    startYear: 1988,
    endYear: null
  },
  {
    id: "var_lithuania_state",
    entityId: "ent_lithuania",
    assetId: "ast_lithuania_state",
    displayName: "State Flag",
    aliases: ["Vytis Flag"],
    tags: ["official", "current", "national", "state"],
    startYear: 2004,
    endYear: null
  },
  {
    id: "var_lithuania_alytus_county_current",
    entityId: "ent_lithuania_alytus_county",
    assetId: "ast_alytus_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Alytus County",
      "Flag of Alytaus County",
      "Flag of Alytaus apskritis"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_kaunas_county_current",
    entityId: "ent_lithuania_kaunas_county",
    assetId: "ast_kaunas_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kaunas County",
      "Flag of Kauno County",
      "Flag of Kauno apskritis"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_klaipeda_county_current",
    entityId: "ent_lithuania_klaipeda_county",
    assetId: "ast_klaipeda_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Klaipėda County",
      "Flag of Klaipeda County",
      "Flag of Klaipėdos County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_marijampole_county_current",
    entityId: "ent_lithuania_marijampole_county",
    assetId: "ast_marijampole_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Marijampolė County",
      "Flag of Marijampole County",
      "Flag of Marijampolės County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_panevezys_county_current",
    entityId: "ent_lithuania_panevezys_county",
    assetId: "ast_panevezys_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Panevėžys County",
      "Flag of Panevezys County",
      "Flag of Panevėžio County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_siauliai_county_current",
    entityId: "ent_lithuania_siauliai_county",
    assetId: "ast_siauliai_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Šiauliai County",
      "Flag of Siauliai County",
      "Flag of Šiaulių County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_taurage_county_current",
    entityId: "ent_lithuania_taurage_county",
    assetId: "ast_taurage_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Tauragė County",
      "Flag of Taurage County",
      "Flag of Tauragės County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_telsiai_county_current",
    entityId: "ent_lithuania_telsiai_county",
    assetId: "ast_telsiai_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Telšiai County",
      "Flag of Telsiai County",
      "Flag of Telšių County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_utena_county_current",
    entityId: "ent_lithuania_utena_county",
    assetId: "ast_utena_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Utena County",
      "Flag of Utenos County",
      "Flag of Utenos apskritis"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lithuania_vilnius_county_current",
    entityId: "ent_lithuania_vilnius_county",
    assetId: "ast_vilnius_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Vilnius County",
      "Flag of Vilniaus County",
      "Flag of Vilniaus apskritis"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_luxembourg_current",
    entityId: "ent_luxembourg",
    assetId: "ast_luxembourg_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1972,
    endYear: null
  },
  {
    id: "var_malta_current",
    entityId: "ent_malta",
    assetId: "ast_malta_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1964,
    endYear: null
  },
  /*
    Maltese regional flags.
  */
  {
    id: "var_malta_gozo_region_current",
    entityId: "ent_malta_gozo_region",
    assetId: "ast_gozo_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Gozo", "Gozo Region Flag", "Flag of Gozo Region"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_malta_northern_region_current",
    entityId: "ent_malta_northern_region",
    assetId: "ast_northern_region_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Northern Region", "Northern Region Flag", "Flag of Northern Region of Malta"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_malta_southern_region_current",
    entityId: "ent_malta_southern_region",
    assetId: "ast_southern_region_current",
    displayName: "Regional Flag",
    aliases: ["Flag of Southern Region", "Southern Region Flag", "Flag of Southern Region of Malta"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_moldova_current",
    entityId: "ent_moldova",
    assetId: "ast_moldova_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_monaco_current",
    entityId: "ent_monaco",
    assetId: "ast_monaco_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil", "ambiguous_quiz_visual"],
	quizVisualGroupId: "red_white_horizontal_bicolour_square",
    startYear: 1881,
    endYear: null
  },
  {
    id: "var_monaco_state",
    entityId: "ent_monaco",
    assetId: "ast_monaco_state",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "national", "state"],
    startYear: 1881,
    endYear: null
  },
  {
    id: "var_municipality_of_monaco_current",
    entityId: "ent_municipality_of_monaco",
    assetId: "ast_municipality_of_monaco_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of the Municipality of Monaco",
      "Municipal Flag of Monaco",
      "Flag of the Commune of Monaco"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_montenegro_current",
    entityId: "ent_montenegro",
    assetId: "ast_montenegro_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 2004,
    endYear: null
  },
  {
    id: "var_north_macedonia_current",
    entityId: "ent_north_macedonia",
    assetId: "ast_north_macedonia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1995,
    endYear: null
  },
  /*
    North Macedonian local-government flags.
  */
  {
    id: "var_north_macedonia_city_of_skopje_current",
    entityId: "ent_north_macedonia_city_of_skopje",
    assetId: "ast_skopje_current",
    displayName: "City Flag",
    aliases: ["Flag of City of Skopje", "Flag of Skopje", "Skopje City Flag"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_aerodrom_city_municipality_current",
    entityId: "ent_north_macedonia_aerodrom_city_municipality",
    assetId: "ast_aerodrom_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Aerodrom", "Aerodrom Municipal Flag", "Flag of Aerodrom Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_butel_city_municipality_current",
    entityId: "ent_north_macedonia_butel_city_municipality",
    assetId: "ast_butel_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Butel", "Butel Municipal Flag", "Flag of Butel Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_gazi_baba_city_municipality_current",
    entityId: "ent_north_macedonia_gazi_baba_city_municipality",
    assetId: "ast_gazi_baba_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Gazi Baba", "Gazi Baba Municipal Flag", "Flag of Gazi Baba Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_gjorce_petrov_city_municipality_current",
    entityId: "ent_north_macedonia_gjorce_petrov_city_municipality",
    assetId: "ast_gjorce_petrov_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Gjorče Petrov",
      "Gjorče Petrov Municipal Flag",
      "Flag of Gjorče Petrov Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_karpos_city_municipality_current",
    entityId: "ent_north_macedonia_karpos_city_municipality",
    assetId: "ast_karpos_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Karpoš", "Karpoš Municipal Flag", "Flag of Karpoš Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_kisela_voda_city_municipality_current",
    entityId: "ent_north_macedonia_kisela_voda_city_municipality",
    assetId: "ast_kisela_voda_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Kisela Voda", "Kisela Voda Municipal Flag", "Flag of Kisela Voda Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_saraj_city_municipality_current",
    entityId: "ent_north_macedonia_saraj_city_municipality",
    assetId: "ast_saraj_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Saraj", "Saraj Municipal Flag", "Flag of Saraj Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_cair_city_municipality_current",
    entityId: "ent_north_macedonia_cair_city_municipality",
    assetId: "ast_cair_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Čair", "Čair Municipal Flag", "Flag of Čair Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_centar_city_municipality_current",
    entityId: "ent_north_macedonia_centar_city_municipality",
    assetId: "ast_centar_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Centar", "Centar Municipal Flag", "Flag of Centar Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_suto_orizari_city_municipality_current",
    entityId: "ent_north_macedonia_suto_orizari_city_municipality",
    assetId: "ast_suto_orizari_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Šuto Orizari",
      "Šuto Orizari Municipal Flag",
      "Flag of Šuto Orizari Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_aracinovo_municipality_current",
    entityId: "ent_north_macedonia_aracinovo_municipality",
    assetId: "ast_aracinovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Aračinovo", "Aračinovo Municipal Flag", "Flag of Aračinovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_berovo_municipality_current",
    entityId: "ent_north_macedonia_berovo_municipality",
    assetId: "ast_berovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Berovo", "Berovo Municipal Flag", "Flag of Berovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_bitola_municipality_current",
    entityId: "ent_north_macedonia_bitola_municipality",
    assetId: "ast_bitola_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Bitola", "Bitola Municipal Flag", "Flag of Bitola Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_bogdanci_municipality_current",
    entityId: "ent_north_macedonia_bogdanci_municipality",
    assetId: "ast_bogdanci_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Bogdanci", "Bogdanci Municipal Flag", "Flag of Bogdanci Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_bogovinje_municipality_current",
    entityId: "ent_north_macedonia_bogovinje_municipality",
    assetId: "ast_bogovinje_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Bogovinje", "Bogovinje Municipal Flag", "Flag of Bogovinje Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_bosilovo_municipality_current",
    entityId: "ent_north_macedonia_bosilovo_municipality",
    assetId: "ast_basilovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Bosilovo", "Bosilovo Municipal Flag", "Flag of Bosilovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_brvenica_municipality_current",
    entityId: "ent_north_macedonia_brvenica_municipality",
    assetId: "ast_brvenica_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Brvenica", "Brvenica Municipal Flag", "Flag of Brvenica Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_centar_zupa_municipality_current",
    entityId: "ent_north_macedonia_centar_zupa_municipality",
    assetId: "ast_centar_zupa_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Centar Župa", "Centar Župa Municipal Flag", "Flag of Centar Župa Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_debarca_municipality_current",
    entityId: "ent_north_macedonia_debarca_municipality",
    assetId: "ast_debarca_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Debarca", "Debarca Municipal Flag", "Flag of Debarca Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_delcevo_municipality_current",
    entityId: "ent_north_macedonia_delcevo_municipality",
    assetId: "ast_delcevo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Delčevo", "Delčevo Municipal Flag", "Flag of Delčevo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_demir_hisar_municipality_current",
    entityId: "ent_north_macedonia_demir_hisar_municipality",
    assetId: "ast_demir_hisar_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Demir Hisar", "Demir Hisar Municipal Flag", "Flag of Demir Hisar Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_demir_kapija_municipality_current",
    entityId: "ent_north_macedonia_demir_kapija_municipality",
    assetId: "ast_demir_kapija_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Demir Kapija",
      "Demir Kapija Municipal Flag",
      "Flag of Demir Kapija Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_dojran_municipality_current",
    entityId: "ent_north_macedonia_dojran_municipality",
    assetId: "ast_dojran_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Dojran", "Dojran Municipal Flag", "Flag of Dojran Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_dolneni_municipality_current",
    entityId: "ent_north_macedonia_dolneni_municipality",
    assetId: "ast_dolneni_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Dolneni", "Dolneni Municipal Flag", "Flag of Dolneni Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_gevgelija_municipality_current",
    entityId: "ent_north_macedonia_gevgelija_municipality",
    assetId: "ast_gevgelija_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Gevgelija", "Gevgelija Municipal Flag", "Flag of Gevgelija Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_gostivar_municipality_current",
    entityId: "ent_north_macedonia_gostivar_municipality",
    assetId: "ast_gostivar_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Gostivar", "Gostivar Municipal Flag", "Flag of Gostivar Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_ilinden_municipality_current",
    entityId: "ent_north_macedonia_ilinden_municipality",
    assetId: "ast_ilinden_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Ilinden", "Ilinden Municipal Flag", "Flag of Ilinden Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_jegunovce_municipality_current",
    entityId: "ent_north_macedonia_jegunovce_municipality",
    assetId: "ast_jegunovce_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Jegunovce", "Jegunovce Municipal Flag", "Flag of Jegunovce Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_karbinci_municipality_current",
    entityId: "ent_north_macedonia_karbinci_municipality",
    assetId: "ast_karbinci_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Karbinci", "Karbinci Municipal Flag", "Flag of Karbinci Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_kavadarci_municipality_current",
    entityId: "ent_north_macedonia_kavadarci_municipality",
    assetId: "ast_kavadarci_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Kavadarci", "Kavadarci Municipal Flag", "Flag of Kavadarci Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_konce_municipality_current",
    entityId: "ent_north_macedonia_konce_municipality",
    assetId: "ast_konce_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Konče", "Konče Municipal Flag", "Flag of Konče Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_kocani_municipality_current",
    entityId: "ent_north_macedonia_kocani_municipality",
    assetId: "ast_kocani_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Kočani", "Kočani Municipal Flag", "Flag of Kočani Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_kratovo_municipality_current",
    entityId: "ent_north_macedonia_kratovo_municipality",
    assetId: "ast_kratovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Kratovo", "Kratovo Municipal Flag", "Flag of Kratovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_kriva_palanka_municipality_current",
    entityId: "ent_north_macedonia_kriva_palanka_municipality",
    assetId: "ast_kriva_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Kriva Palanka",
      "Kriva Palanka Municipal Flag",
      "Flag of Kriva Palanka Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_krivogastani_municipality_current",
    entityId: "ent_north_macedonia_krivogastani_municipality",
    assetId: "ast_krivogastani_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Krivogaštani",
      "Krivogaštani Municipal Flag",
      "Flag of Krivogaštani Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_krusevo_municipality_current",
    entityId: "ent_north_macedonia_krusevo_municipality",
    assetId: "ast_krusevo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Kruševo", "Kruševo Municipal Flag", "Flag of Kruševo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_kumanovo_municipality_current",
    entityId: "ent_north_macedonia_kumanovo_municipality",
    assetId: "ast_kumanovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Kumanovo", "Kumanovo Municipal Flag", "Flag of Kumanovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_lipkovo_municipality_current",
    entityId: "ent_north_macedonia_lipkovo_municipality",
    assetId: "ast_lipkovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Lipkovo", "Lipkovo Municipal Flag", "Flag of Lipkovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_lozovo_municipality_current",
    entityId: "ent_north_macedonia_lozovo_municipality",
    assetId: "ast_lozovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Lozovo", "Lozovo Municipal Flag", "Flag of Lozovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_makedonska_kamenica_municipality_current",
    entityId: "ent_north_macedonia_makedonska_kamenica_municipality",
    assetId: "ast_makedonska_kamenica_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Makedonska Kamenica",
      "Makedonska Kamenica Municipal Flag",
      "Flag of Makedonska Kamenica Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_makedonski_brod_municipality_current",
    entityId: "ent_north_macedonia_makedonski_brod_municipality",
    assetId: "ast_makedonski_brod_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Makedonski Brod",
      "Makedonski Brod Municipal Flag",
      "Flag of Makedonski Brod Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_mavrovo_and_rostusa_municipality_current",
    entityId: "ent_north_macedonia_mavrovo_and_rostusa_municipality",
    assetId: "ast_mavrovo_and_rostusa_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Mavrovo and Rostuša",
      "Mavrovo and Rostuša Municipal Flag",
      "Flag of Mavrovo and Rostuša Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_mogila_municipality_current",
    entityId: "ent_north_macedonia_mogila_municipality",
    assetId: "ast_mogila_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Mogila", "Mogila Municipal Flag", "Flag of Mogila Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_negotino_municipality_current",
    entityId: "ent_north_macedonia_negotino_municipality",
    assetId: "ast_negotino_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Negotino", "Negotino Municipal Flag", "Flag of Negotino Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_novaci_municipality_current",
    entityId: "ent_north_macedonia_novaci_municipality",
    assetId: "ast_novaci_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Novaci", "Novaci Municipal Flag", "Flag of Novaci Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_novo_selo_municipality_current",
    entityId: "ent_north_macedonia_novo_selo_municipality",
    assetId: "ast_novo_selo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Novo Selo", "Novo Selo Municipal Flag", "Flag of Novo Selo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_ohrid_municipality_current",
    entityId: "ent_north_macedonia_ohrid_municipality",
    assetId: "ast_ohrid_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Ohrid", "Ohrid Municipal Flag", "Flag of Ohrid Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_pehcevo_municipality_current",
    entityId: "ent_north_macedonia_pehcevo_municipality",
    assetId: "ast_pehcevo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Pehčevo", "Pehčevo Municipal Flag", "Flag of Pehčevo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_petrovec_municipality_current",
    entityId: "ent_north_macedonia_petrovec_municipality",
    assetId: "ast_petrovec_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Petrovec", "Petrovec Municipal Flag", "Flag of Petrovec Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_plasnica_municipality_current",
    entityId: "ent_north_macedonia_plasnica_municipality",
    assetId: "ast_plasnica_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Plasnica", "Plasnica Municipal Flag", "Flag of Plasnica Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_prilep_municipality_current",
    entityId: "ent_north_macedonia_prilep_municipality",
    assetId: "ast_prilep_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Prilep", "Prilep Municipal Flag", "Flag of Prilep Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_radovis_municipality_current",
    entityId: "ent_north_macedonia_radovis_municipality",
    assetId: "ast_radovis_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Radoviš", "Radoviš Municipal Flag", "Flag of Radoviš Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_rankovce_municipality_current",
    entityId: "ent_north_macedonia_rankovce_municipality",
    assetId: "ast_rankovce_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Rankovce", "Rankovce Municipal Flag", "Flag of Rankovce Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_resen_municipality_current",
    entityId: "ent_north_macedonia_resen_municipality",
    assetId: "ast_resen_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Resen", "Resen Municipal Flag", "Flag of Resen Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_rosoman_municipality_current",
    entityId: "ent_north_macedonia_rosoman_municipality",
    assetId: "ast_rosoman_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Rosoman", "Rosoman Municipal Flag", "Flag of Rosoman Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_sopiste_municipality_current",
    entityId: "ent_north_macedonia_sopiste_municipality",
    assetId: "ast_sopiste_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Sopište", "Sopište Municipal Flag", "Flag of Sopište Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_staro_nagoricane_municipality_current",
    entityId: "ent_north_macedonia_staro_nagoricane_municipality",
    assetId: "ast_staro_nagoricane_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Staro Nagoričane",
      "Staro Nagoričane Municipal Flag",
      "Flag of Staro Nagoričane Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_strumica_municipality_current",
    entityId: "ent_north_macedonia_strumica_municipality",
    assetId: "ast_strumica_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Strumica", "Strumica Municipal Flag", "Flag of Strumica Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_studenicani_municipality_current",
    entityId: "ent_north_macedonia_studenicani_municipality",
    assetId: "ast_studenicani_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Studeničani", "Studeničani Municipal Flag", "Flag of Studeničani Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_tetovo_municipality_current",
    entityId: "ent_north_macedonia_tetovo_municipality",
    assetId: "ast_tetovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Tetovo", "Tetovo Municipal Flag", "Flag of Tetovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_valandovo_municipality_current",
    entityId: "ent_north_macedonia_valandovo_municipality",
    assetId: "ast_valandovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Valandovo", "Valandovo Municipal Flag", "Flag of Valandovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_vasilevo_municipality_current",
    entityId: "ent_north_macedonia_vasilevo_municipality",
    assetId: "ast_vasilevo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Vasilevo", "Vasilevo Municipal Flag", "Flag of Vasilevo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_veles_municipality_current",
    entityId: "ent_north_macedonia_veles_municipality",
    assetId: "ast_veles_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Veles", "Veles Municipal Flag", "Flag of Veles Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_vevcani_municipality_current",
    entityId: "ent_north_macedonia_vevcani_municipality",
    assetId: "ast_vevcani_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Vevčani", "Vevčani Municipal Flag", "Flag of Vevčani Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_vinica_municipality_current",
    entityId: "ent_north_macedonia_vinica_municipality",
    assetId: "ast_vinica_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Vinica", "Vinica Municipal Flag", "Flag of Vinica Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_zelenikovo_municipality_current",
    entityId: "ent_north_macedonia_zelenikovo_municipality",
    assetId: "ast_zelenikovo_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Zelenikovo", "Zelenikovo Municipal Flag", "Flag of Zelenikovo Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_zrnovci_municipality_current",
    entityId: "ent_north_macedonia_zrnovci_municipality",
    assetId: "ast_zrnovci_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Zrnovci", "Zrnovci Municipal Flag", "Flag of Zrnovci Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  /*
    North Macedonian text-removed quiz variants.
  */
  {
    id: "var_north_macedonia_berovo_municipality_current_text_removed",
    entityId: "ent_north_macedonia_berovo_municipality",
    assetId: "ast_berovo_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Berovo", "Berovo Municipal Flag", "Flag of Berovo Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_berovo_municipality_current"
  },
  {
    id: "var_north_macedonia_bogdanci_municipality_current_text_removed",
    entityId: "ent_north_macedonia_bogdanci_municipality",
    assetId: "ast_bogdanci_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Bogdanci", "Bogdanci Municipal Flag", "Flag of Bogdanci Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_bogdanci_municipality_current"
  },
  {
    id: "var_north_macedonia_centar_zupa_municipality_current_text_removed",
    entityId: "ent_north_macedonia_centar_zupa_municipality",
    assetId: "ast_centar_zupa_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Centar Župa", "Centar Župa Municipal Flag", "Flag of Centar Župa Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_centar_zupa_municipality_current"
  },
  {
    id: "var_north_macedonia_debarca_municipality_current_text_removed",
    entityId: "ent_north_macedonia_debarca_municipality",
    assetId: "ast_debarca_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Debarca", "Debarca Municipal Flag", "Flag of Debarca Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_debarca_municipality_current"
  },
  {
    id: "var_north_macedonia_delcevo_municipality_current_text_removed",
    entityId: "ent_north_macedonia_delcevo_municipality",
    assetId: "ast_delcevo_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Delčevo", "Delčevo Municipal Flag", "Flag of Delčevo Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_delcevo_municipality_current"
  },
  {
    id: "var_north_macedonia_dojran_municipality_current_text_removed",
    entityId: "ent_north_macedonia_dojran_municipality",
    assetId: "ast_dojran_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Dojran", "Dojran Municipal Flag", "Flag of Dojran Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_dojran_municipality_current"
  },
  {
    id: "var_north_macedonia_gevgelija_municipality_current_text_removed",
    entityId: "ent_north_macedonia_gevgelija_municipality",
    assetId: "ast_gevgelija_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Gevgelija", "Gevgelija Municipal Flag", "Flag of Gevgelija Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_gevgelija_municipality_current"
  },
  {
    id: "var_north_macedonia_karbinci_municipality_current_text_removed",
    entityId: "ent_north_macedonia_karbinci_municipality",
    assetId: "ast_karbinci_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Karbinci", "Karbinci Municipal Flag", "Flag of Karbinci Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_karbinci_municipality_current"
  },
  {
    id: "var_north_macedonia_konce_municipality_current_text_removed",
    entityId: "ent_north_macedonia_konce_municipality",
    assetId: "ast_konce_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Konče", "Konče Municipal Flag", "Flag of Konče Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_konce_municipality_current"
  },
  {
    id: "var_north_macedonia_kratovo_municipality_current_text_removed",
    entityId: "ent_north_macedonia_kratovo_municipality",
    assetId: "ast_kratovo_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Kratovo", "Kratovo Municipal Flag", "Flag of Kratovo Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_kratovo_municipality_current"
  },
  {
    id: "var_north_macedonia_krivogastani_municipality_current_text_removed",
    entityId: "ent_north_macedonia_krivogastani_municipality",
    assetId: "ast_krivogastani_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: [
      "Flag of Krivogaštani",
      "Krivogaštani Municipal Flag",
      "Flag of Krivogaštani Municipality"
    ],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_krivogastani_municipality_current"
  },
  {
    id: "var_north_macedonia_krusevo_municipality_current_text_removed",
    entityId: "ent_north_macedonia_krusevo_municipality",
    assetId: "ast_krusevo_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Kruševo", "Kruševo Municipal Flag", "Flag of Kruševo Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_krusevo_municipality_current"
  },
  {
    id: "var_north_macedonia_mogila_municipality_current_text_removed",
    entityId: "ent_north_macedonia_mogila_municipality",
    assetId: "ast_mogila_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Mogila", "Mogila Municipal Flag", "Flag of Mogila Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_mogila_municipality_current"
  },
  {
    id: "var_north_macedonia_novaci_municipality_current_text_removed",
    entityId: "ent_north_macedonia_novaci_municipality",
    assetId: "ast_novaci_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Novaci", "Novaci Municipal Flag", "Flag of Novaci Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_novaci_municipality_current"
  },
  {
    id: "var_north_macedonia_pehcevo_municipality_current_text_removed",
    entityId: "ent_north_macedonia_pehcevo_municipality",
    assetId: "ast_pehcevo_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Pehčevo", "Pehčevo Municipal Flag", "Flag of Pehčevo Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_pehcevo_municipality_current"
  },
  {
    id: "var_north_macedonia_petrovec_municipality_current_text_removed",
    entityId: "ent_north_macedonia_petrovec_municipality",
    assetId: "ast_petrovec_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Petrovec", "Petrovec Municipal Flag", "Flag of Petrovec Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_petrovec_municipality_current"
  },
  {
    id: "var_north_macedonia_sopiste_municipality_current_text_removed",
    entityId: "ent_north_macedonia_sopiste_municipality",
    assetId: "ast_sopiste_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Sopište", "Sopište Municipal Flag", "Flag of Sopište Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_sopiste_municipality_current"
  },
  {
    id: "var_north_macedonia_staro_nagoricane_municipality_current_text_removed",
    entityId: "ent_north_macedonia_staro_nagoricane_municipality",
    assetId: "ast_staro_nagoricane_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: [
      "Flag of Staro Nagoričane",
      "Staro Nagoričane Municipal Flag",
      "Flag of Staro Nagoričane Municipality"
    ],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_staro_nagoricane_municipality_current"
  },
  {
    id: "var_north_macedonia_stip_municipality_current_text_removed",
    entityId: "ent_north_macedonia_stip_municipality",
    assetId: "ast_stip_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Štip", "Štip Municipal Flag", "Flag of Štip Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_stip_municipality_current"
  },
  {
    id: "var_north_macedonia_strumica_municipality_current_text_removed",
    entityId: "ent_north_macedonia_strumica_municipality",
    assetId: "ast_strumica_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Strumica", "Strumica Municipal Flag", "Flag of Strumica Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_strumica_municipality_current"
  },
  {
    id: "var_north_macedonia_veles_municipality_current_text_removed",
    entityId: "ent_north_macedonia_veles_municipality",
    assetId: "ast_veles_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Veles", "Veles Municipal Flag", "Flag of Veles Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_veles_municipality_current"
  },
  {
    id: "var_north_macedonia_demir_kapija_municipality_current_text_removed",
    entityId: "ent_north_macedonia_demir_kapija_municipality",
    assetId: "ast_demir_kapija_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: [
      "Flag of Demir Kapija",
      "Demir Kapija Municipal Flag",
      "Flag of Demir Kapija Municipality"
    ],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_demir_kapija_municipality_current"
  },
  {
    id: "var_north_macedonia_dolneni_municipality_current_text_removed",
    entityId: "ent_north_macedonia_dolneni_municipality",
    assetId: "ast_dolneni_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Dolneni", "Dolneni Municipal Flag", "Flag of Dolneni Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_dolneni_municipality_current"
  },
  {
    id: "var_north_macedonia_kumanovo_municipality_current_text_removed",
    entityId: "ent_north_macedonia_kumanovo_municipality",
    assetId: "ast_kumanovo_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Kumanovo", "Kumanovo Municipal Flag", "Flag of Kumanovo Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_kumanovo_municipality_current"
  },
  {
    id: "var_north_macedonia_lozovo_municipality_current_text_removed",
    entityId: "ent_north_macedonia_lozovo_municipality",
    assetId: "ast_lozovo_current_text_removed",
    displayName: "Municipal Flag - Text Removed",
    aliases: ["Flag of Lozovo", "Lozovo Municipal Flag", "Flag of Lozovo Municipality"],
    tags: ["current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_north_macedonia_lozovo_municipality_current"
  },
  {
    id: "var_north_macedonia_caska_municipality_current",
    entityId: "ent_north_macedonia_caska_municipality",
    assetId: "ast_caska_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Čaška", "Čaška Municipal Flag", "Flag of Čaška Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_cucer_sandevo_municipality_current",
    entityId: "ent_north_macedonia_cucer_sandevo_municipality",
    assetId: "ast_cucer_current",
    displayName: "Municipal Flag",
    aliases: [
      "Flag of Čučer-Sandevo",
      "Čučer-Sandevo Municipal Flag",
      "Flag of Čučer-Sandevo Municipality"
    ],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_stip_municipality_current",
    entityId: "ent_north_macedonia_stip_municipality",
    assetId: "ast_stip_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Štip", "Štip Municipal Flag", "Flag of Štip Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_macedonia_zelino_municipality_current",
    entityId: "ent_north_macedonia_zelino_municipality",
    assetId: "ast_zelino_current",
    displayName: "Municipal Flag",
    aliases: ["Flag of Želino", "Želino Municipal Flag", "Flag of Želino Municipality"],
    tags: ["current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_northern_cyprus_current",
    entityId: "ent_northern_cyprus",
    assetId: "ast_northern_cyprus_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_norway_current",
    entityId: "ent_norway",
    assetId: "ast_norway_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1821,
    endYear: null
  },
  {
    id: "var_norway_agder_county_current",
    entityId: "ent_norway_agder_county",
    assetId: "ast_agder_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Agder County",
      "Flag of Agder fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_akershus_county_current",
    entityId: "ent_norway_akershus_county",
    assetId: "ast_akershus_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Akershus County",
      "Flag of Akershus fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_buskerud_county_current",
    entityId: "ent_norway_buskerud_county",
    assetId: "ast_buskerud_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Buskerud County",
      "Flag of Buskerud fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_finnmark_county_current",
    entityId: "ent_norway_finnmark_county",
    assetId: "ast_finnmark_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Finnmark County",
      "Flag of Finnmark fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_innlandet_county_current",
    entityId: "ent_norway_innlandet_county",
    assetId: "ast_innlandet_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Innlandet County",
      "Flag of Innlandet fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_more_og_romsdal_county_current",
    entityId: "ent_norway_more_og_romsdal_county",
    assetId: "ast_more_og_romsdal_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Møre og Romsdal County",
      "Flag of Møre og Romsdal fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_nordland_county_current",
    entityId: "ent_norway_nordland_county",
    assetId: "ast_nordland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Nordland County",
      "Flag of Nordland fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_oslo_county_current",
    entityId: "ent_norway_oslo_county",
    assetId: "ast_oslo_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Oslo County",
      "Flag of Oslo fylke",
      "Flag of Oslo kommune"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_oslo_county_current_text_removed",
    entityId: "ent_norway_oslo_county",
    assetId: "ast_oslo_current_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_norway_oslo_county_current"
  },
  {
    id: "var_norway_ostfold_county_current",
    entityId: "ent_norway_ostfold_county",
    assetId: "ast_ostfold_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Østfold County",
      "Flag of Østfold fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_rogaland_county_current",
    entityId: "ent_norway_rogaland_county",
    assetId: "ast_rogaland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Rogaland County",
      "Flag of Rogaland fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_telemark_county_current",
    entityId: "ent_norway_telemark_county",
    assetId: "ast_telemark_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Telemark County",
      "Flag of Telemark fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_troms_county_current",
    entityId: "ent_norway_troms_county",
    assetId: "ast_troms_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Troms County",
      "Flag of Troms fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_trondelag_county_current",
    entityId: "ent_norway_trondelag_county",
    assetId: "ast_trondelag_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Trøndelag County",
      "Flag of Trøndelag fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_vestfold_county_current",
    entityId: "ent_norway_vestfold_county",
    assetId: "ast_vestfold_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Vestfold County",
      "Flag of Vestfold fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norway_vestland_county_current",
    entityId: "ent_norway_vestland_county",
    assetId: "ast_vestland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Vestland County",
      "Flag of Vestland fylke"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_current",
    entityId: "ent_poland",
    assetId: "ast_poland_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil", "ambiguous_quiz_visual"],
	quizVisualGroupId: "white_red_horizontal_bicolour",
    startYear: 1919,
    endYear: null
  },
  {
    id: "var_poland_state",
    entityId: "ent_poland",
    assetId: "ast_poland_state",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "national", "state"],
    startYear: 1919,
    endYear: null
  },
  /*
    Polish voivodeships.
  */
  {
    id: "var_poland_greater_poland_current",
    entityId: "ent_poland_greater_poland",
    assetId: "ast_greater_poland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Greater Poland",
      "Flag of Greater Poland Voivodeship",
      "Flag of Wielkopolskie Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_holy_cross_current",
    entityId: "ent_poland_holy_cross",
    assetId: "ast_holy_cross_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Holy Cross",
      "Flag of Holy Cross Voivodeship",
      "Flag of Świętokrzyskie Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_kuyavian_pomeranian_current",
    entityId: "ent_poland_kuyavian_pomeranian",
    assetId: "ast_kuyavian_pomeranian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kuyavian-Pomeranian",
      "Flag of Kuyavian-Pomeranian Voivodeship",
      "Flag of Kuyavian Pomeranian"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_lesser_poland_current",
    entityId: "ent_poland_lesser_poland",
    assetId: "ast_lesser_poland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Lesser Poland",
      "Flag of Lesser Poland Voivodeship",
      "Flag of Małopolskie Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_lodz_current",
    entityId: "ent_poland_lodz",
    assetId: "ast_lodz_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Łódź",
      "Flag of Łódź Voivodeship",
      "Flag of Lodz"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_lower_silesian_current",
    entityId: "ent_poland_lower_silesian",
    assetId: "ast_lower_silesian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Lower Silesian",
      "Flag of Lower Silesian Voivodeship",
      "Flag of Lower Silesia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_lublin_current",
    entityId: "ent_poland_lublin",
    assetId: "ast_lublin_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Lublin",
      "Flag of Lublin Voivodeship",
      "Flag of Lubelskie Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_lubusz_current",
    entityId: "ent_poland_lubusz",
    assetId: "ast_lubusz_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Lubusz",
      "Flag of Lubusz Voivodeship",
      "Flag of Lubuskie Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_masovian_current",
    entityId: "ent_poland_masovian",
    assetId: "ast_masovian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Masovian",
      "Flag of Masovian Voivodeship",
      "Flag of Mazovian Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_opole_current",
    entityId: "ent_poland_opole",
    assetId: "ast_opole_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Opole",
      "Flag of Opole Voivodeship",
      "Flag of Opolskie Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_podlaskie_current",
    entityId: "ent_poland_podlaskie",
    assetId: "ast_podlaskie_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Podlaskie",
      "Flag of Podlaskie Voivodeship",
      "Flag of Podlasie Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_pomeranian_current",
    entityId: "ent_poland_pomeranian",
    assetId: "ast_pomeranian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Pomeranian",
      "Flag of Pomeranian Voivodeship",
      "Flag of Pomerania"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_silesian_current",
    entityId: "ent_poland_silesian",
    assetId: "ast_silesian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Silesian",
      "Flag of Silesian Voivodeship",
      "Flag of Silesia"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_subcarpathian_current",
    entityId: "ent_poland_subcarpathian",
    assetId: "ast_subcarpathian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Subcarpathian",
      "Flag of Subcarpathian Voivodeship",
      "Flag of Podkarpackie Voivodeship"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_warmian_masurian_current",
    entityId: "ent_poland_warmian_masurian",
    assetId: "ast_warmian_masurian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Warmian-Masurian",
      "Flag of Warmian-Masurian Voivodeship",
      "Flag of Warmian Masurian"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_poland_west_pomeranian_current",
    entityId: "ent_poland_west_pomeranian",
    assetId: "ast_west_pomeranian_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of West Pomeranian",
      "Flag of West Pomeranian Voivodeship",
      "Flag of Western Pomerania"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_portugal_current",
    entityId: "ent_portugal",
    assetId: "ast_portugal_current",
    displayName: "National Flag",
    aliases: ["Bandeira das Quinas"],
    tags: ["official", "current", "national"],
    startYear: 1911,
    endYear: null
  },

  {
    id: "var_azores_current",
    entityId: "ent_azores",
    assetId: "ast_azores_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of the Azores",
      "Azores Flag",
      "Bandeira dos Açores"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_madeira_current",
    entityId: "ent_madeira",
    assetId: "ast_madeira_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Madeira",
      "Madeira Flag",
      "Bandeira da Madeira"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_current",
    entityId: "ent_romania",
    assetId: "ast_romania_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national", "ambiguous_quiz_visual"],
    quizVisualGroupId: "blue_yellow_red_vertical_tricolour",
    startYear: 1989,
    endYear: null
  },
  {
    id: "var_romania_alba_county_current",
    entityId: "ent_romania_alba_county",
    assetId: "ast_alba_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Alba County",
      "Alba County Flag",
      "Flag of Județul Alba"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_arad_county_current",
    entityId: "ent_romania_arad_county",
    assetId: "ast_arad_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Arad County",
      "Arad County Flag",
      "Flag of Județul Arad"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_bihor_county_current",
    entityId: "ent_romania_bihor_county",
    assetId: "ast_bihor_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Bihor County",
      "Bihor County Flag",
      "Flag of Județul Bihor"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_brasov_county_current",
    entityId: "ent_romania_brasov_county",
    assetId: "ast_braso_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Brașov County",
      "Brașov County Flag",
      "Flag of Brasov County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_bucharest_current",
    entityId: "ent_romania_bucharest",
    assetId: "ast_bucharest_current",
    displayName: "Official City Flag",
    aliases: [
      "Flag of Bucharest",
      "Bucharest Flag",
      "Flag of București"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_covasna_county_current",
    entityId: "ent_romania_covasna_county",
    assetId: "ast_covasna_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Covasna County",
      "Covasna County Flag",
      "Flag of Județul Covasna"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_giurgiu_county_current",
    entityId: "ent_romania_giurgiu_county",
    assetId: "ast_giurgiu_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Giurgiu County",
      "Giurgiu County Flag",
      "Flag of Județul Giurgiu"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_ialomita_county_current",
    entityId: "ent_romania_ialomita_county",
    assetId: "ast_ialomita_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Ialomița County",
      "Ialomița County Flag",
      "Flag of Ialomita County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_ialomita_county_current_text_removed",
    entityId: "ent_romania_ialomita_county",
    assetId: "ast_ialomita_current_text_removed",
    displayName: "Official County Flag",
    aliases: [],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_romania_ialomita_county_current"
  },
  {
    id: "var_romania_maramures_county_current",
    entityId: "ent_romania_maramures_county",
    assetId: "ast_maramures_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Maramureș County",
      "Maramureș County Flag",
      "Flag of Maramures County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_mures_county_current",
    entityId: "ent_romania_mures_county",
    assetId: "ast_mures_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Mureș County",
      "Mureș County Flag",
      "Flag of Mures County"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_romania_satu_mare_county_current",
    entityId: "ent_romania_satu_mare_county",
    assetId: "ast_satu_mare_current",
    displayName: "Official County Flag",
    aliases: [
      "Flag of Satu Mare County",
      "Satu Mare County Flag",
      "Flag of Județul Satu Mare"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_current",
    entityId: "ent_san_marino",
    assetId: "ast_san_marino_current",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "national", "state"],
    startYear: 2011,
    endYear: null
  },
  {
    id: "var_san_marino_civil",
    entityId: "ent_san_marino",
    assetId: "ast_san_marino_civil",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil"],
    startYear: 2011,
    endYear: null
  },
  /*
    San Marino castelli.
  */
  {
    id: "var_san_marino_acquaviva_current",
    entityId: "ent_san_marino_acquaviva",
    assetId: "ast_acquaviva_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of Acquaviva",
      "Acquaviva Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_borgo_maggiore_current",
    entityId: "ent_san_marino_borgo_maggiore",
    assetId: "ast_borgo_maggiore_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of Borgo Maggiore",
      "Borgo Maggiore Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_chiesanuova_current",
    entityId: "ent_san_marino_chiesanuova",
    assetId: "ast_chiesanuova_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of Chiesanuova",
      "Chiesanuova Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_domagnano_current",
    entityId: "ent_san_marino_domagnano",
    assetId: "ast_domagnano_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of Domagnano",
      "Domagnano Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_faetano_current",
    entityId: "ent_san_marino_faetano",
    assetId: "ast_faetano_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of Faetano",
      "Faetano Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_fiorentino_current",
    entityId: "ent_san_marino_fiorentino",
    assetId: "ast_fiorentino_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of Fiorentino",
      "Fiorentino Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_montegiardino_current",
    entityId: "ent_san_marino_montegiardino",
    assetId: "ast_montegiardino_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of Montegiardino",
      "Montegiardino Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_san_marino_city_current",
    entityId: "ent_san_marino_san_marino_city",
    assetId: "ast_san_marino_city_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of City of San Marino",
      "City of San Marino Flag",
      "Flag of the City of San Marino"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_san_marino_serravalle_current",
    entityId: "ent_san_marino_serravalle",
    assetId: "ast_serravalle_current",
    displayName: "Castello Flag",
    aliases: [
      "Flag of Serravalle",
      "Serravalle Flag"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },

  {
    id: "var_san_marino_acquaviva_current_text_removed",
    entityId: "ent_san_marino_acquaviva",
    assetId: "ast_acquaviva_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of Acquaviva",
      "Acquaviva Flag"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_acquaviva_current"
  },
  {
    id: "var_san_marino_borgo_maggiore_current_text_removed",
    entityId: "ent_san_marino_borgo_maggiore",
    assetId: "ast_borgo_maggiore_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of Borgo Maggiore",
      "Borgo Maggiore Flag"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_borgo_maggiore_current"
  },
  {
    id: "var_san_marino_chiesanuova_current_text_removed",
    entityId: "ent_san_marino_chiesanuova",
    assetId: "ast_chiesanuova_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of Chiesanuova",
      "Chiesanuova Flag"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_chiesanuova_current"
  },
  {
    id: "var_san_marino_domagnano_current_text_removed",
    entityId: "ent_san_marino_domagnano",
    assetId: "ast_domagnano_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of Domagnano",
      "Domagnano Flag"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_domagnano_current"
  },
  {
    id: "var_san_marino_faetano_current_text_removed",
    entityId: "ent_san_marino_faetano",
    assetId: "ast_faetano_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of Faetano",
      "Faetano Flag"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_faetano_current"
  },
  {
    id: "var_san_marino_fiorentino_current_text_removed",
    entityId: "ent_san_marino_fiorentino",
    assetId: "ast_fiorentino_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of Fiorentino",
      "Fiorentino Flag"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_fiorentino_current"
  },
  {
    id: "var_san_marino_montegiardino_current_text_removed",
    entityId: "ent_san_marino_montegiardino",
    assetId: "ast_montegiardino_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of Montegiardino",
      "Montegiardino Flag"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_montegiardino_current"
  },
  {
    id: "var_san_marino_san_marino_city_current_text_removed",
    entityId: "ent_san_marino_san_marino_city",
    assetId: "ast_san_marino_city_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of City of San Marino",
      "City of San Marino Flag",
      "Flag of the City of San Marino"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_san_marino_city_current"
  },
  {
    id: "var_san_marino_serravalle_current_text_removed",
    entityId: "ent_san_marino_serravalle",
    assetId: "ast_serravalle_current_text_removed",
    displayName: "Castello Flag - Text Removed",
    aliases: [
      "Flag of Serravalle",
      "Serravalle Flag"
    ],
    tags: ["official", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_san_marino_serravalle_current"
  },

  {
    id: "var_serbia_current",
    entityId: "ent_serbia",
    assetId: "ast_serbia_current",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "national", "state"],
    startYear: 2010,
    endYear: null
  },
  {
    id: "var_serbia_civil",
    entityId: "ent_serbia",
    assetId: "ast_serbia_civil",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "national", "civil"],
    startYear: 2010,
    endYear: null
  },
  {
    id: "var_slovakia_current",
    entityId: "ent_slovakia",
    assetId: "ast_slovakia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_slovakia_banska_bystrica_region_current",
    entityId: "ent_slovakia_banska_bystrica_region",
    assetId: "ast_banska_bystrica_current",
    displayName: "Official Regional Flag",
    aliases: [
      "Flag of Banská Bystrica Region",
      "Banská Bystrica Region Flag",
      "Flag of Banska Bystrica Region",
      "Flag of Banskobystrický kraj",
      "Flag of Banskobystricky kraj"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_slovakia_bratislava_region_current",
    entityId: "ent_slovakia_bratislava_region",
    assetId: "ast_bratislava_kraj_current",
    displayName: "Official Regional Flag",
    aliases: [
      "Flag of Bratislava Region",
      "Bratislava Region Flag",
      "Flag of Bratislavský kraj",
      "Flag of Bratislavsky kraj"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_slovakia_kosice_region_current",
    entityId: "ent_slovakia_kosice_region",
    assetId: "ast_kosice_current",
    displayName: "Official Regional Flag",
    aliases: [
      "Flag of Košice Region",
      "Košice Region Flag",
      "Flag of Kosice Region",
      "Flag of Košický kraj",
      "Flag of Kosicky kraj"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_slovakia_nitra_region_current",
    entityId: "ent_slovakia_nitra_region",
    assetId: "ast_nitra_current",
    displayName: "Official Regional Flag",
    aliases: [
      "Flag of Nitra Region",
      "Nitra Region Flag",
      "Flag of Nitriansky kraj"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_slovakia_presov_region_current",
    entityId: "ent_slovakia_presov_region",
    assetId: "ast_presov_current",
    displayName: "Official Regional Flag",
    aliases: [
      "Flag of Prešov Region",
      "Prešov Region Flag",
      "Flag of Presov Region",
      "Flag of Prešovský kraj",
      "Flag of Presovsky kraj"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_slovakia_trencin_region_current",
    entityId: "ent_slovakia_trencin_region",
    assetId: "ast_trencin_current",
    displayName: "Official Regional Flag",
    aliases: [
      "Flag of Trenčín Region",
      "Trenčín Region Flag",
      "Flag of Trencin Region",
      "Flag of Trenčiansky kraj",
      "Flag of Trenciansky kraj"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_slovakia_trnava_region_current",
    entityId: "ent_slovakia_trnava_region",
    assetId: "ast_trnava_current",
    displayName: "Official Regional Flag",
    aliases: [
      "Flag of Trnava Region",
      "Trnava Region Flag",
      "Flag of Trnavský kraj",
      "Flag of Trnavsky kraj"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_slovakia_zilina_region_current",
    entityId: "ent_slovakia_zilina_region",
    assetId: "ast_zilina_current",
    displayName: "Official Regional Flag",
    aliases: [
      "Flag of Žilina Region",
      "Žilina Region Flag",
      "Flag of Zilina Region",
      "Flag of Žilinský kraj",
      "Flag of Zilinsky kraj"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_slovenia_current",
    entityId: "ent_slovenia",
    assetId: "ast_slovenia_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1991,
    endYear: null
  },
  {
    id: "var_sweden_current",
    entityId: "ent_sweden",
    assetId: "ast_sweden_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1906,
    endYear: null
  },
  {
    id: "var_sweden_blekinge_county_current",
    entityId: "ent_sweden_blekinge_county",
    assetId: "ast_blekinge_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Blekinge County",
      "Flag of Blekinge län"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_dalarna_county_current",
    entityId: "ent_sweden_dalarna_county",
    assetId: "ast_dalarna_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Dalarna County",
      "Flag of Dalarnas län"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_gavleborg_county_current",
    entityId: "ent_sweden_gavleborg_county",
    assetId: "ast_gavleborg_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Gävleborg County",
      "Flag of Gävleborgs län",
      "Flag of Gavleborgs lan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_gotland_county_current",
    entityId: "ent_sweden_gotland_county",
    assetId: "ast_gotland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Gotland County",
      "Flag of Gotlands län",
      "Flag of Gotland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_halland_county_current",
    entityId: "ent_sweden_halland_county",
    assetId: "ast_halland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Halland County",
      "Flag of Hallands län",
      "Flag of Halland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_jamtland_county_current",
    entityId: "ent_sweden_jamtland_county",
    assetId: "ast_jamtland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Jämtland County",
      "Flag of Jamtland County",
      "Flag of Jämtlands län",
      "Flag of Jamtlands lan",
      "Flag of Jämtland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_jonkoping_county_current",
    entityId: "ent_sweden_jonkoping_county",
    assetId: "ast_jonkoping_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Jönköping County",
      "Flag of Jönköpings län",
      "Flag of Jonkopings lan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_kalmar_county_current",
    entityId: "ent_sweden_kalmar_county",
    assetId: "ast_kalmar_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kalmar County",
      "Flag of Kalmar län"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_kronoberg_county_current",
    entityId: "ent_sweden_kronoberg_county",
    assetId: "ast_kronoberg_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Kronoberg County",
      "Flag of Kronobergs län"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_norrbotten_county_current",
    entityId: "ent_sweden_norrbotten_county",
    assetId: "ast_norrbotten_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Norrbotten County",
      "Flag of Norrbottens län"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_orebro_county_current",
    entityId: "ent_sweden_orebro_county",
    assetId: "ast_orebro_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Örebro County",
      "Flag of Örebro län",
      "Flag of Orebro lan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_ostergotland_county_current",
    entityId: "ent_sweden_ostergotland_county",
    assetId: "ast_ostergotland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Östergötland County",
      "Flag of Ostergotland County",
      "Flag of Östergötlands län",
      "Flag of Ostergotlands lan",
      "Flag of Östergötland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_skane_county_current",
    entityId: "ent_sweden_skane_county",
    assetId: "ast_skane_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Skåne County",
      "Flag of Skåne län",
      "Flag of Skane lan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_sodermanland_county_current",
    entityId: "ent_sweden_sodermanland_county",
    assetId: "ast_sodermanland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Södermanland County",
      "Flag of Sodermanland County",
      "Flag of Södermanlands län",
      "Flag of Sodermanlands lan",
      "Flag of Sörmland",
      "Flag of Sormland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_stockholm_county_current",
    entityId: "ent_sweden_stockholm_county",
    assetId: "ast_stockholm_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Stockholm County",
      "Flag of Stockholms län"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_uppsala_county_current",
    entityId: "ent_sweden_uppsala_county",
    assetId: "ast_uppsala_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Uppsala County",
      "Flag of Uppsala län"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_varmland_county_current",
    entityId: "ent_sweden_varmland_county",
    assetId: "ast_varmland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Värmland County",
      "Flag of Varmland County",
      "Flag of Värmlands län",
      "Flag of Varmlands lan",
      "Flag of Värmland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_vasterbotten_county_current",
    entityId: "ent_sweden_vasterbotten_county",
    assetId: "ast_vasterbotten_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Västerbotten County",
      "Flag of Västerbottens län",
      "Flag of Vasterbottens lan"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_vasternorrland_county_current",
    entityId: "ent_sweden_vasternorrland_county",
    assetId: "ast_vasternorrland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Västernorrland County",
      "Flag of Vasternorrland County",
      "Flag of Västernorrlands län",
      "Flag of Vasternorrlands lan",
      "Flag of Västernorrland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_vastmanland_county_current",
    entityId: "ent_sweden_vastmanland_county",
    assetId: "ast_vastmanland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Västmanland County",
      "Flag of Vastmanland County",
      "Flag of Västmanlands län",
      "Flag of Vastmanlands lan",
      "Flag of Västmanland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sweden_vastra_gotaland_county_current",
    entityId: "ent_sweden_vastra_gotaland_county",
    assetId: "ast_vastra_gotaland_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Västra Götaland County",
      "Flag of Vastra Gotaland County",
      "Flag of Västra Götalands län",
      "Flag of Vastra Gotalands lan",
      "Flag of Västra Götaland"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_current",
    entityId: "ent_switzerland",
    assetId: "ast_switzerland_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1889,
    endYear: null
  },
  /*
    Swiss cantons.
  */
  {
    id: "var_switzerland_aargau_current",
    entityId: "ent_switzerland_aargau",
    assetId: "ast_aargau_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Aargau"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_appenzell_ausserrhoden_current",
    entityId: "ent_switzerland_appenzell_ausserrhoden",
    assetId: "ast_appenzell_ausserrhoden_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Appenzell Ausserrhoden"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_appenzell_innerrhoden_current",
    entityId: "ent_switzerland_appenzell_innerrhoden",
    assetId: "ast_appenzell_innerrhoden_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Appenzell Innerrhoden"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_basel_landschaft_current",
    entityId: "ent_switzerland_basel_landschaft",
    assetId: "ast_basel_landschaft_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Basel-Landschaft"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_basel_stadt_current",
    entityId: "ent_switzerland_basel_stadt",
    assetId: "ast_basel_stadt_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Basel-Stadt"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_bern_current",
    entityId: "ent_switzerland_bern",
    assetId: "ast_bern_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Bern",
      "Flag of Berne"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_fribourg_current",
    entityId: "ent_switzerland_fribourg",
    assetId: "ast_fribourg_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Fribourg"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_geneva_current",
    entityId: "ent_switzerland_geneva",
    assetId: "ast_geneva_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Geneva"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_glarus_current",
    entityId: "ent_switzerland_glarus",
    assetId: "ast_glarus_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Glarus"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_grisons_current",
    entityId: "ent_switzerland_grisons",
    assetId: "ast_grisons_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Grisons",
      "Flag of Graubünden"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_jura_current",
    entityId: "ent_switzerland_jura",
    assetId: "ast_jura_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Jura"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_lucerne_current",
    entityId: "ent_switzerland_lucerne",
    assetId: "ast_lucerne_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Lucerne"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_neuchatel_current",
    entityId: "ent_switzerland_neuchatel",
    assetId: "ast_neuchatel_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Neuchâtel",
      "Flag of Neuchatel"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_nidwalden_current",
    entityId: "ent_switzerland_nidwalden",
    assetId: "ast_nidwalden_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Nidwalden"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_obwalden_current",
    entityId: "ent_switzerland_obwalden",
    assetId: "ast_obwalden_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Obwalden"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_schaffhausen_current",
    entityId: "ent_switzerland_schaffhausen",
    assetId: "ast_schaffhausen_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Schaffhausen"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_schwyz_current",
    entityId: "ent_switzerland_schwyz",
    assetId: "ast_schwyz_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Schwyz"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_solothurn_current",
    entityId: "ent_switzerland_solothurn",
    assetId: "ast_solothurn_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Solothurn"
    ],
    tags: ["official", "current", "ambiguous_quiz_visual"],
	quizVisualGroupId: "red_white_horizontal_bicolour_square",
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_st_gallen_current",
    entityId: "ent_switzerland_st_gallen",
    assetId: "ast_st_gallen_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of St. Gallen"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_thurgau_current",
    entityId: "ent_switzerland_thurgau",
    assetId: "ast_thurgau_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Thurgau"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_ticino_current",
    entityId: "ent_switzerland_ticino",
    assetId: "ast_ticino_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Ticino"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_uri_current",
    entityId: "ent_switzerland_uri",
    assetId: "ast_uri_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Uri"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_valais_current",
    entityId: "ent_switzerland_valais",
    assetId: "ast_valais_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Valais"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_vaud_current",
    entityId: "ent_switzerland_vaud",
    assetId: "ast_vaud_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Vaud"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_zug_current",
    entityId: "ent_switzerland_zug",
    assetId: "ast_zug_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Zug"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_switzerland_zurich_current",
    entityId: "ent_switzerland_zurich",
    assetId: "ast_zurich_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Zürich",
      "Flag of Zurich"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_transnistria_current_obverse",
    entityId: "ent_transnistria",
    assetId: "ast_transnistria_current_obverse",
    displayName: "Obverse",
    aliases: [],
    tags: ["official", "current", "national", "obverse"],
    startYear: 2000,
    endYear: null,
    relatedVariants: {
      reverses: ["var_transnistria_current_reverse"]
    }
  },
  {
    id: "var_transnistria_current_reverse",
    entityId: "ent_transnistria",
    assetId: "ast_transnistria_current_reverse",
    displayName: "Reverse",
    aliases: [],
    tags: ["official", "current", "national", "reverse"],
    startYear: 2000,
    endYear: null,
    relatedVariants: {
      reverses: ["var_transnistria_current_obverse"]
    }
  },
  {
    id: "var_ukraine_current",
    entityId: "ent_ukraine",
    assetId: "ast_ukraine_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1992,
    endYear: null
  },
  {
    id: "var_ukraine_cherkasy_current",
    entityId: "ent_ukraine_cherkasy",
    assetId: "ast_cherkasy_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Cherkasy Oblast",
      "Cherkasy Oblast Flag",
      "Flag of Cherkasy Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_chernihiv_current",
    entityId: "ent_ukraine_chernihiv",
    assetId: "ast_chernihiv_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Chernihiv Oblast",
      "Chernihiv Oblast Flag",
      "Flag of Chernihiv Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_chernivtsi_current",
    entityId: "ent_ukraine_chernivtsi",
    assetId: "ast_chernivitsi_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Chernivtsi Oblast",
      "Chernivtsi Oblast Flag",
      "Flag of Chernivtsi Region",
      "Flag of Chernivitsi Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_crimea_current",
    entityId: "ent_ukraine_crimea",
    assetId: "ast_crimea_current",
    displayName: "Official Flag",
    aliases: [
      "Flag of Autonomous Republic of Crimea",
      "Autonomous Republic of Crimea Flag",
      "Flag of Crimea",
      "Flag of Republic of Crimea"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_dnipropetrovsk_current",
    entityId: "ent_ukraine_dnipropetrovsk",
    assetId: "ast_dnipropetrovsk_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Dnipropetrovsk Oblast",
      "Dnipropetrovsk Oblast Flag",
      "Flag of Dnipropetrovsk Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_donetsk_current",
    entityId: "ent_ukraine_donetsk",
    assetId: "ast_donetsk_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Donetsk Oblast",
      "Donetsk Oblast Flag",
      "Flag of Donetsk Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_ivano_frankivsk_current",
    entityId: "ent_ukraine_ivano_frankivsk",
    assetId: "ast_ivano_frankivst_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Ivano-Frankivsk Oblast",
      "Ivano-Frankivsk Oblast Flag",
      "Flag of Ivano-Frankivsk Region",
      "Flag of Ivano Frankivsk Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_kharkiv_current",
    entityId: "ent_ukraine_kharkiv",
    assetId: "ast_kharkiv_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Kharkiv Oblast",
      "Kharkiv Oblast Flag",
      "Flag of Kharkiv Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_kherson_current",
    entityId: "ent_ukraine_kherson",
    assetId: "ast_kherson_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Kherson Oblast",
      "Kherson Oblast Flag",
      "Flag of Kherson Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_khmelnytskyi_current",
    entityId: "ent_ukraine_khmelnytskyi",
    assetId: "ast_khmelnytskyi_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Khmelnytskyi Oblast",
      "Khmelnytskyi Oblast Flag",
      "Flag of Khmelnytskyi Region",
      "Flag of Khmelnytsky Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_kirovohrad_current",
    entityId: "ent_ukraine_kirovohrad",
    assetId: "ast_kirovohrad_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Kirovohrad Oblast",
      "Kirovohrad Oblast Flag",
      "Flag of Kirovohrad Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_kyiv_city_current",
    entityId: "ent_ukraine_kyiv_city",
    assetId: "ast_kyiv_city_current",
    displayName: "Official City Flag",
    aliases: [
      "Flag of Kyiv City",
      "Kyiv City Flag",
      "Flag of Kyiv",
      "Flag of Kyiv City Municipality",
      "Flag of Kiev City"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_kyiv_oblast_current",
    entityId: "ent_ukraine_kyiv_oblast",
    assetId: "ast_kyiv_oblast_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Kyiv Oblast",
      "Kyiv Oblast Flag",
      "Flag of Kyiv Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_luhansk_current",
    entityId: "ent_ukraine_luhansk",
    assetId: "ast_luhansk_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Luhansk Oblast",
      "Luhansk Oblast Flag",
      "Flag of Luhansk Region",
      "Flag of Lugansk Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_lviv_current",
    entityId: "ent_ukraine_lviv",
    assetId: "ast_lviv_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Lviv Oblast",
      "Lviv Oblast Flag",
      "Flag of Lviv Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_mykolaiv_current",
    entityId: "ent_ukraine_mykolaiv",
    assetId: "ast_mykolaiv_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Mykolaiv Oblast",
      "Mykolaiv Oblast Flag",
      "Flag of Mykolaiv Region",
      "Flag of Nikolaev Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_odesa_current",
    entityId: "ent_ukraine_odesa",
    assetId: "ast_odesa_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Odesa Oblast",
      "Odesa Oblast Flag",
      "Flag of Odesa Region",
      "Flag of Odessa Oblast",
      "Flag of Odessa Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_poltava_current",
    entityId: "ent_ukraine_poltava",
    assetId: "ast_poltava_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Poltava Oblast",
      "Poltava Oblast Flag",
      "Flag of Poltava Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_rivne_current",
    entityId: "ent_ukraine_rivne",
    assetId: "ast_rivne_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Rivne Oblast",
      "Rivne Oblast Flag",
      "Flag of Rivne Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_sumy_current",
    entityId: "ent_ukraine_sumy",
    assetId: "ast_sumy_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Sumy Oblast",
      "Sumy Oblast Flag",
      "Flag of Sumy Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_ternopil_current",
    entityId: "ent_ukraine_ternopil",
    assetId: "ast_ternopil_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Ternopil Oblast",
      "Ternopil Oblast Flag",
      "Flag of Ternopil Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_sevastopol_current",
    entityId: "ent_ukraine_sevastopol",
    assetId: "ast_sevastopol_current",
    displayName: "Official City Flag",
    aliases: [
      "Flag of Sevastopol",
      "Sevastopol Flag",
      "Flag of Sevastopol City",
      "Flag of Federal City of Sevastopol"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_vinnytsia_current",
    entityId: "ent_ukraine_vinnytsia",
    assetId: "ast_vinnytskoyi_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Vinnytsia Oblast",
      "Vinnytsia Oblast Flag",
      "Flag of Vinnytsia Region",
      "Flag of Vinnytskoyi Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_volyn_current",
    entityId: "ent_ukraine_volyn",
    assetId: "ast_volyn_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Volyn Oblast",
      "Volyn Oblast Flag",
      "Flag of Volyn Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_zakarpattia_current",
    entityId: "ent_ukraine_zakarpattia",
    assetId: "ast_zakarpattia_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Zakarpattia Oblast",
      "Zakarpattia Oblast Flag",
      "Flag of Zakarpattia Region",
      "Flag of Transcarpathian Oblast"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_zaporizhzhia_current",
    entityId: "ent_ukraine_zaporizhzhia",
    assetId: "ast_zaporizhia_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Zaporizhzhia Oblast",
      "Zaporizhzhia Oblast Flag",
      "Flag of Zaporizhzhia Region",
      "Flag of Zaporizhia Oblast",
      "Flag of Zaporizhia Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_ukraine_zhytomyr_current",
    entityId: "ent_ukraine_zhytomyr",
    assetId: "ast_zhytomyr_current",
    displayName: "Official Oblast Flag",
    aliases: [
      "Flag of Zhytomyr Oblast",
      "Zhytomyr Oblast Flag",
      "Flag of Zhytomyr Region"
    ],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_vatican_city_current",
    entityId: "ent_vatican_city",
    assetId: "ast_vatican_city_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1929,
    endYear: null
  },

  /*
    Spain and its autonomous communities and cities.
  */
  {
    id: "var_spain_current",
    entityId: "ent_spain",
    assetId: "ast_spain_current",
    displayName: "National Flag",
    aliases: ["La Rojigualda"],
    tags: ["official", "current", "national", "state"],
    startYear: 1981,
    endYear: null
  },
  {
    id: "var_spain_civil",
    entityId: "ent_spain",
    assetId: "ast_spain_civil",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "civil", "national"],
    startYear: 1981,
    endYear: null
  },
  {
    id: "var_andalucia_current",
    entityId: "ent_andalucia",
    assetId: "ast_andalucia_state_current",
    displayName: "State Flag",
    aliases: ["Arbonaida"],
    tags: ["official", "current", "state"],
    startYear: 1982,
    endYear: null
  },
  {
    id: "var_andalucia_civil_current",
    entityId: "ent_andalucia",
    assetId: "ast_andalucia_civil_current",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "civil"],
    startYear: 1982,
    endYear: null
  },
  {
    id: "var_aragon_current",
    entityId: "ent_aragon",
    assetId: "ast_aragon_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_asturias_current",
    entityId: "ent_asturias",
    assetId: "ast_asturias_state_current",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "state"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_asturias_civil_current",
    entityId: "ent_asturias",
    assetId: "ast_asturias_civil_current",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "civil"],
    startYear: 1990,
    endYear: null
  },
  {
    id: "var_balearic_islands_current",
    entityId: "ent_balearic_islands",
    assetId: "ast_balearic_islands_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1983,
    endYear: null
  },
  {
    id: "var_basque_country_current",
    entityId: "ent_basque_country",
    assetId: "ast_basque_country_current",
    displayName: "Official Flag",
    aliases: ["Ikurriña"],
    tags: ["official", "current"],
    startYear: 1977,
    endYear: null
  },
  {
    id: "var_canary_islands_current",
    entityId: "ent_canary_islands",
    assetId: "ast_canary_islands_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current", "civil"],
    startYear: 1982,
    endYear: null
  },
  {
    id: "var_canary_islands_state_current",
    entityId: "ent_canary_islands",
    assetId: "ast_canary_islands_state_current",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "state"],
    startYear: 1982,
    endYear: null
  },
  {
    id: "var_cantabria_current",
    entityId: "ent_cantabria",
    assetId: "ast_cantabria_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_castilla_la_mancha_current",
    entityId: "ent_castilla_la_mancha",
    assetId: "ast_castilla_la_mancha_current",
    alternativeAssetIds: ["ast_castilla_la_mancha_current_alt"],
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1982,
    endYear: null
  },
  {
    id: "var_castilla_y_leon_current",
    entityId: "ent_castilla_y_leon",
    assetId: "ast_castilla_y_leon_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1983,
    endYear: null
  },
  {
    id: "var_catalonia_current",
    entityId: "ent_catalonia",
    assetId: "ast_catalonia_current",
    displayName: "Official Flag",
    aliases: ["Senyera"],
    tags: ["official", "current"],
    startYear: 1979,
    endYear: null
  },
  {
    id: "var_ceuta_current",
    entityId: "ent_ceuta",
    assetId: "ast_ceuta_current",
    displayName: "Official Flag",
    aliases: ["Flag of Saint Vincent"],
    tags: ["official", "current"],
    startYear: 1995,
    endYear: null
  },
  {
    id: "var_extremadura_current",
    entityId: "ent_extremadura",
    assetId: "ast_extremadura_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1985,
    endYear: null
  },
  {
    id: "var_extremadura_state_current",
    entityId: "ent_extremadura",
    assetId: "ast_extremadura_state_current",
    displayName: "State Flag",
    aliases: [],
    tags: ["official", "current", "state"],
    startYear: 1985,
    endYear: null
  },
  {
    id: "var_galicia_current",
    entityId: "ent_galicia",
    assetId: "ast_galicia_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_galicia_civil_current",
    entityId: "ent_galicia",
    assetId: "ast_galicia_civil_current",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "civil"],
    startYear: 1984,
    endYear: null
  },
  {
    id: "var_la_rioja_current",
    entityId: "ent_la_rioja",
    assetId: "ast_la_rioja_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1979,
    endYear: null
  },
  {
    id: "var_la_rioja_civil_current",
    entityId: "ent_la_rioja",
    assetId: "ast_la_rioja_civil_current",
    displayName: "Civil Flag",
    aliases: [],
    tags: ["official", "current", "civil"],
    startYear: 1979,
    endYear: null
  },
  {
    id: "var_madrid_current",
    entityId: "ent_madrid",
    assetId: "ast_madrid_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1983,
    endYear: null
  },
  {
    id: "var_melilla_current",
    entityId: "ent_melilla",
    assetId: "ast_melilla_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1995,
    endYear: null
  },
  {
    id: "var_murcia_current",
    entityId: "ent_murcia",
    assetId: "ast_murcia_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1979,
    endYear: null
  },
  {
    id: "var_navarra_current",
    entityId: "ent_navarra",
    assetId: "ast_navarra_current",
    displayName: "Official Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: 1981,
    endYear: null
  },
  {
    id: "var_valencia_current",
    entityId: "ent_valencia",
    assetId: "ast_valencia_current",
    displayName: "Official Flag",
    aliases: ["Senyera Coronada"],
    tags: ["official", "current"],
    startYear: 1984,
    endYear: null
  },

  /*
    Technical quiz-safe Spain variants.

    text_removed variants are displayed during a quiz but resolve to their
    base variant for Gallery display and answer reveal.
  */
  {
    id: "var_andalucia_current_text_removed",
    entityId: "ent_andalucia",
    assetId: "ast_andalucia_current_text_removed",
    displayName: "Official Flag",
    aliases: [],
    tags: ["quiz", "text_removed", "current"],
    startYear: 1982,
    endYear: null,
    baseVariantId: "var_andalucia_current"
  },

  {
    id: "var_united_kingdom_current",
    entityId: "ent_united_kingdom",
    assetId: "ast_united_kingdom_current",
    displayName: "Union Flag",
    aliases: ["Union Jack"],
    tags: ["official", "current", "national"],
    startYear: 1801,
    endYear: null
  },
    /*
    United Kingdom constituent-country flags.
  */
  {
    id: "var_england_current",
    entityId: "ent_england",
    assetId: "ast_england_current",
    displayName: "National Flag",
    aliases: [],
    tags: ["official", "current", "national"],
    startYear: 1552,
    endYear: null
  },
  {
    id: "var_scotland_current",
    entityId: "ent_scotland",
    assetId: "ast_scotland_current",
    displayName: "National Flag",
    aliases: ["Saltire", "Saint Andrew's Cross"],
    tags: ["official", "current", "national"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_wales_current",
    entityId: "ent_wales",
    assetId: "ast_wales_current",
    displayName: "National Flag",
    aliases: ["Y Ddraig Goch", "Red Dragon"],
    tags: ["official", "current", "national"],
    startYear: 1959,
    endYear: null
  },
  {
    id: "var_northern_ireland_unofficial",
    entityId: "ent_northern_ireland",
    assetId: "ast_northern_ireland_current",
    displayName: "Ulster Banner",
    aliases: [],
    tags: ["unofficial", "current", "national"],
    startYear: 1953,
    endYear: null
  },

  /*
    Current English ceremonial county flags.
  */
  {
    id: "var_bedfordshire_current",
    entityId: "ent_bedfordshire",
    assetId: "ast_bedfordshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_berkshire_current",
    entityId: "ent_berkshire",
    assetId: "ast_berkshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_buckinghamshire_current",
    entityId: "ent_buckinghamshire",
    assetId: "ast_buckinghamshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cambridgeshire_current",
    entityId: "ent_cambridgeshire",
    assetId: "ast_cambridgeshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cheshire_current",
    entityId: "ent_cheshire",
    assetId: "ast_cheshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_city_of_london_current",
    entityId: "ent_city_of_london",
    assetId: "ast_city_of_london_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cornwall_current",
    entityId: "ent_cornwall",
    assetId: "ast_cornwall_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cumbria_current",
    entityId: "ent_cumbria",
    assetId: "ast_cumbria_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_derbyshire_current",
    entityId: "ent_derbyshire",
    assetId: "ast_derbyshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_devon_current",
    entityId: "ent_devon",
    assetId: "ast_devon_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_dorset_current",
    entityId: "ent_dorset",
    assetId: "ast_dorset_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_county_durham_current",
    entityId: "ent_county_durham",
    assetId: "ast_county_durham_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_east_riding_of_yorkshire_current",
    entityId: "ent_east_riding_of_yorkshire",
    assetId: "ast_east_riding_of_yorkshire",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_east_sussex_current",
    entityId: "ent_east_sussex",
    assetId: "ast_east_sussex_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_essex_current",
    entityId: "ent_essex",
    assetId: "ast_essex_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_gloucestershire_current",
    entityId: "ent_gloucestershire",
    assetId: "ast_gloucestershire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_greater_london_current",
    entityId: "ent_greater_london",
    assetId: "ast_greater_london_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_greater_manchester_current",
    entityId: "ent_greater_manchester",
    assetId: "ast_greater_manchester_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hampshire_current",
    entityId: "ent_hampshire",
    assetId: "ast_hampshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_herefordshire_current",
    entityId: "ent_herefordshire",
    assetId: "ast_herefordshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hertfordshire_current",
    entityId: "ent_hertfordshire",
    assetId: "ast_hertfordshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_isle_of_wight_current",
    entityId: "ent_isle_of_wight",
    assetId: "ast_isle_of_wight_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_kent_current",
    entityId: "ent_kent",
    assetId: "ast_kent_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lancashire_current",
    entityId: "ent_lancashire",
    assetId: "ast_lancashire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_leicestershire_current",
    entityId: "ent_leicestershire",
    assetId: "ast_leicestershire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lincolnshire_current",
    entityId: "ent_lincolnshire",
    assetId: "ast_lincolnshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_merseyside_current",
    entityId: "ent_merseyside",
    assetId: "ast_merseyside_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norfolk_current",
    entityId: "ent_norfolk",
    assetId: "ast_norfolk_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_yorkshire_current",
    entityId: "ent_north_yorkshire",
    assetId: "ast_north_yorkshire_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_northamptonshire_current",
    entityId: "ent_northamptonshire",
    assetId: "ast_northamptonshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_northumberland_current",
    entityId: "ent_northumberland",
    assetId: "ast_northumberland_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_nottinghamshire_current",
    entityId: "ent_nottinghamshire",
    assetId: "ast_nottinghamshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_oxfordshire_current",
    entityId: "ent_oxfordshire",
    assetId: "ast_oxfordshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_rutland_current",
    entityId: "ent_rutland",
    assetId: "ast_rutland_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_shropshire_current",
    entityId: "ent_shropshire",
    assetId: "ast_shropshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_somerset_current",
    entityId: "ent_somerset",
    assetId: "ast_somerset_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_south_yorkshire_current",
    entityId: "ent_south_yorkshire",
    assetId: "ast_south_yorkshire_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_staffordshire_current",
    entityId: "ent_staffordshire",
    assetId: "ast_staffordshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_suffolk_current",
    entityId: "ent_suffolk",
    assetId: "ast_suffolk_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_surrey_current",
    entityId: "ent_surrey",
    assetId: "ast_surrey_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_tyne_and_wear_current",
    entityId: "ent_tyne_and_wear",
    assetId: "ast_tyne_and_wear_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_warwickshire_current",
    entityId: "ent_warwickshire",
    assetId: "ast_warwickshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_west_midlands_current",
    entityId: "ent_west_midlands",
    assetId: "ast_west_midlands_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_west_sussex_current",
    entityId: "ent_west_sussex",
    assetId: "ast_west_sussex_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_west_yorkshire_modern",
    entityId: "ent_west_yorkshire",
    assetId: "ast_west_yorkshire_unofficial",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["unofficial", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_wiltshire_current",
    entityId: "ent_wiltshire",
    assetId: "ast_wiltshire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_worcestershire_current",
    entityId: "ent_worcestershire",
    assetId: "ast_worcestershire_current",
    displayName: "Ceremonial County Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },

  /*
    Flags representing the historic counties of England.
  */
  {
    id: "var_bedfordshire_historic",
    entityId: "ent_bedfordshire_historic",
    assetId: "ast_bedfordshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_berkshire_historic",
    entityId: "ent_berkshire_historic",
    assetId: "ast_berkshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_buckinghamshire_historic",
    entityId: "ent_buckinghamshire_historic",
    assetId: "ast_buckinghamshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cambridgeshire_historic",
    entityId: "ent_cambridgeshire_historic",
    assetId: "ast_cambridgeshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cheshire_historic",
    entityId: "ent_cheshire_historic",
    assetId: "ast_cheshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cornwall_historic",
    entityId: "ent_cornwall_historic",
    assetId: "ast_cornwall_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cumberland_historic",
    entityId: "ent_cumberland_historic",
    assetId: "ast_cumberland_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_derbyshire_historic",
    entityId: "ent_derbyshire_historic",
    assetId: "ast_derbyshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_devon_historic",
    entityId: "ent_devon_historic",
    assetId: "ast_devon_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_dorset_historic",
    entityId: "ent_dorset_historic",
    assetId: "ast_dorset_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_durham_historic",
    entityId: "ent_durham_historic",
    assetId: "ast_county_durham_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_essex_historic",
    entityId: "ent_essex_historic",
    assetId: "ast_essex_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_gloucestershire_historic",
    entityId: "ent_gloucestershire_historic",
    assetId: "ast_gloucestershire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hampshire_historic",
    entityId: "ent_hampshire_historic",
    assetId: "ast_hampshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_herefordshire_historic",
    entityId: "ent_herefordshire_historic",
    assetId: "ast_herefordshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_hertfordshire_historic",
    entityId: "ent_hertfordshire_historic",
    assetId: "ast_hertfordshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_huntingdonshire_historic",
    entityId: "ent_huntingdonshire_historic",
    assetId: "ast_huntingdonshire",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_kent_historic",
    entityId: "ent_kent_historic",
    assetId: "ast_kent_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lancashire_historic",
    entityId: "ent_lancashire_historic",
    assetId: "ast_lancashire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_leicestershire_historic",
    entityId: "ent_leicestershire_historic",
    assetId: "ast_leicestershire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_lincolnshire_historic",
    entityId: "ent_lincolnshire_historic",
    assetId: "ast_lincolnshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_middlesex_historic",
    entityId: "ent_middlesex_historic",
    assetId: "ast_middlesex",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_norfolk_historic",
    entityId: "ent_norfolk_historic",
    assetId: "ast_norfolk_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_northamptonshire_historic",
    entityId: "ent_northamptonshire_historic",
    assetId: "ast_northamptonshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_northumberland_historic",
    entityId: "ent_northumberland_historic",
    assetId: "ast_northumberland_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_nottinghamshire_historic",
    entityId: "ent_nottinghamshire_historic",
    assetId: "ast_nottinghamshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_oxfordshire_historic",
    entityId: "ent_oxfordshire_historic",
    assetId: "ast_oxfordshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_rutland_historic",
    entityId: "ent_rutland_historic",
    assetId: "ast_rutland_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_shropshire_historic",
    entityId: "ent_shropshire_historic",
    assetId: "ast_shropshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_somerset_historic",
    entityId: "ent_somerset_historic",
    assetId: "ast_somerset_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_staffordshire_historic",
    entityId: "ent_staffordshire_historic",
    assetId: "ast_staffordshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_suffolk_historic",
    entityId: "ent_suffolk_historic",
    assetId: "ast_suffolk_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_surrey_historic",
    entityId: "ent_surrey_historic",
    assetId: "ast_surrey_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sussex_historic",
    entityId: "ent_sussex_historic",
    assetId: "ast_sussex",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_warwickshire_historic",
    entityId: "ent_warwickshire_historic",
    assetId: "ast_warwickshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_westmorland_historic",
    entityId: "ent_westmorland_historic",
    assetId: "ast_westmorland",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_wiltshire_historic",
    entityId: "ent_wiltshire_historic",
    assetId: "ast_wiltshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_worcestershire_historic",
    entityId: "ent_worcestershire_historic",
    assetId: "ast_worcestershire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_yorkshire_historic",
    entityId: "ent_yorkshire_historic",
    assetId: "ast_yorkshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },

  /*
    Flags representing the historic Ridings of Yorkshire.
  */
  {
    id: "var_east_riding_of_yorkshire_historic",
    entityId: "ent_east_riding_of_yorkshire_historic",
    assetId: "ast_east_riding_of_yorkshire",
    displayName: "Historic Riding Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_north_riding_of_yorkshire",
    entityId: "ent_north_riding_of_yorkshire",
    assetId: "ast_north_riding_of_yorkshire",
    displayName: "Historic Riding Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_west_riding_historic",
    entityId: "ent_west_riding_of_yorkshire",
    assetId: "ast_west_yorkshire_unofficial",
    displayName: "Historical Riding Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },

  /*
    Current English island flags.
  */
  {
    id: "var_lundy_current",
    entityId: "ent_lundy",
    assetId: "ast_lundy_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_isle_of_portland_current",
    entityId: "ent_isle_of_portland",
    assetId: "ast_isle_of_portland_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_isle_of_purbeck_current",
    entityId: "ent_isle_of_purbeck",
    assetId: "ast_isle_of_purbeck_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },

  /*
    Flags representing historic Scottish counties.
  */
  {
    id: "var_aberdeenshire_historic",
    entityId: "ent_aberdeenshire",
    assetId: "ast_aberdeenshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_banffshire_historic",
    entityId: "ent_banffshire",
    assetId: "ast_banffshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_berwickshire_historic",
    entityId: "ent_berwickshire",
    assetId: "ast_berwickshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_caithness_historic",
    entityId: "ent_caithness",
    assetId: "ast_caithness_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_east_lothian_historic",
    entityId: "ent_east_lothian",
    assetId: "ast_east_lothian_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_kirkcudbrightshire_historic",
    entityId: "ent_kirkcudbrightshire",
    assetId: "ast_kirkcudbrightshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_morayshire_historic",
    entityId: "ent_morayshire",
    assetId: "ast_morayshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_orkney_historic",
    entityId: "ent_orkney",
    assetId: "ast_orkney_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_shetland_historic",
    entityId: "ent_shetland",
    assetId: "ast_shetland_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_sutherland_historic",
    entityId: "ent_sutherland",
    assetId: "ast_sutherland_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },

  /*
    Current Scottish island flags.
  */
  {
    id: "var_barra_current",
    entityId: "ent_barra",
    assetId: "ast_barra_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_great_bernera_current",
    entityId: "ent_great_bernera",
    assetId: "ast_great_bernera_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_outer_hebrides_current",
    entityId: "ent_outer_hebrides",
    assetId: "ast_outer_hebrides_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_skye_current",
    entityId: "ent_skye",
    assetId: "ast_skye_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_south_uist_current",
    entityId: "ent_south_uist",
    assetId: "ast_south_uist_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_tiree_current",
    entityId: "ent_tiree",
    assetId: "ast_tiree_current",
    displayName: "Island Flag",
    aliases: [],
    tags: ["official", "current"],
    startYear: null,
    endYear: null
  },

  /*
    Flags representing historic Welsh counties.
  */
  {
    id: "var_anglesey_historic",
    entityId: "ent_anglesey",
    assetId: "ast_anglesey_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_brecknockshire_historic",
    entityId: "ent_brecknockshire",
    assetId: "ast_brecknockshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_caernarfonshire_historic",
    entityId: "ent_caernarfonshire",
    assetId: "ast_caernarfonshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_cardiganshire_historic",
    entityId: "ent_cardiganshire",
    assetId: "ast_cardiganshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_flintshire_historic",
    entityId: "ent_flintshire",
    assetId: "ast_flintshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_glamorgan_historic",
    entityId: "ent_glamorgan",
    assetId: "ast_glamorgan_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_merionethshire_historic",
    entityId: "ent_merionethshire",
    assetId: "ast_merionethshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_monmouthshire_historic",
    entityId: "ent_monmouthshire",
    assetId: "ast_monmouthshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  {
    id: "var_pembrokeshire_historic",
    entityId: "ent_pembrokeshire",
    assetId: "ast_pembrokeshire_current",
    displayName: "Historic County Flag",
    aliases: [],
    tags: ["historical"],
    startYear: null,
    endYear: null
  },
  
  /*
    Channel Islands.
  */
{
  id: "var_alderney_current",
  entityId: "ent_alderney",
  assetId: "ast_alderney_current",
  displayName: "Island Flag",
  aliases: [],
  tags: ["official", "current"],
  startYear: 1993,
  endYear: null
},
{
  id: "var_brecqhou_current",
  entityId: "ent_brecqhou",
  assetId: "ast_brecqhou_current",
  displayName: "Unofficial Flag",
  aliases: [
    "Local Flag"
  ],
  tags: ["unofficial", "current"],
  startYear: null,
  endYear: null
},
{
  id: "var_guernsey_current",
  entityId: "ent_guernsey",
  assetId: "ast_guernsey_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1985,
  endYear: null
},
{
  id: "var_herm_current",
  entityId: "ent_herm",
  assetId: "ast_herm_current",
  displayName: "Unofficial Flag",
  aliases: [],
  tags: ["unofficial", "current"],
  startYear: 1953,
  startYearPrecision: "circa",
  endYear: null
},
{
  id: "var_jersey_current",
  entityId: "ent_jersey",
  assetId: "ast_jersey_current",
  displayName: "National Flag",
  aliases: [],
  tags: ["official", "current", "national"],
  startYear: 1981,
  endYear: null
},
{
  id: "var_lihou_current",
  entityId: "ent_lihou",
  assetId: "ast_lihou_current",
  displayName: "Unofficial Flag",
  aliases: [],
  tags: [
    "unofficial",
    "current"
  ],
  startYear: 2019,
  endYear: null
},
{
  id: "var_sark_current",
  entityId: "ent_sark",
  assetId: "ast_sark_current",
  displayName: "Island Flag",
  aliases: [],
  tags: ["official", "current"],
  startYear: 2020,
  endYear: null
},

/*
    Technical quiz-safe variants.

    text_removed variants are displayed during a quiz but normally resolve to
    the entity's default or gallery variant for Gallery and answer reveal.
  */
  {
  id: "var_lihou_current_quiz",
  entityId: "ent_lihou",
  assetId: "ast_lihou_current_text_removed",
  displayName: "Unofficial Flag",
  aliases: [],
  tags: ["quiz", "text_removed", "current", "unofficial"],
  startYear: 2019,
  endYear: null,
  // The real variant represented by this technical quiz image.
    baseVariantId: "var_lihou_current"
},

  {
    id: "var_international_labour_organization_current_text_removed",
    entityId: "ent_international_labour_organization",
    assetId: "ast_ilo_current_text_removed",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_international_labour_organization_current"
  },

  {
    id: "var_international_telecommunication_union_current_text_removed",
    entityId: "ent_international_telecommunication_union",
    assetId: "ast_itu_current_text_removed",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_international_telecommunication_union_current"
  },

  {
    id: "var_unesco_current_text_removed",
    entityId: "ent_unesco",
    assetId: "ast_unesco_current_text_removed",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_unesco_current"
  },

  {
    id: "var_unicef_current_text_removed",
    entityId: "ent_unicef",
    assetId: "ast_unicef_current_text_removed",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_unicef_current"
  },

  {
    id: "var_world_food_programme_current_text_removed",
    entityId: "ent_world_food_programme",
    assetId: "ast_wfp_current_text_removed",
    displayName: "Organisation Flag",
    aliases: [],
    tags: ["organisation", "current", "quiz", "text_removed"],
    startYear: null,
    endYear: null,
    // The real variant represented by this technical quiz image.
    baseVariantId: "var_world_food_programme_current"
  }

];
