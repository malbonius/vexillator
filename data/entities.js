/*
  Entity registry.

  An entity is the thing represented or identified by a flag. Entities may be
  countries, territories, subdivisions, organisations, historical regions or
  structural concepts used for navigation.

  Maintenance rules:
  - IDs are permanent and use lowercase snake_case.
  - aliases contains alternative names for the entity itself.
  - parentIds defines the navigable hierarchy and may contain multiple parents.
  - structural entities may have defaultVariantId: null.
  - selectable entities should point to a valid variant belonging to that entity.
*/

const entities = [
  /*
    Structural roots and broad geographic regions.
  */
  {
    id: "ent_world",
    name: "World",
    aliases: [],
    entityType: "concept",
    parentIds: [],
    tags: [],
    defaultVariantId: null
  },
  {
    id: "ent_south_america",
    name: "South America",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_world"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_north_america",
    name: "North America",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_world"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_northern_america",
    name: "Northern America",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_north_america"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_central_america",
    name: "Central America",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_north_america"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_caribbean",
    name: "Caribbean",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_world"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_africa",
    name: "Africa",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_world"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_northern_africa",
    name: "Northern Africa",
    aliases: ["North Africa"],
    entityType: "geographic",
    parentIds: ["ent_africa"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_sub_saharan_africa",
    name: "Sub-Saharan Africa",
    aliases: ["Subsaharan Africa"],
    entityType: "geographic",
    parentIds: ["ent_africa"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_eastern_africa",
    name: "Eastern Africa",
    aliases: ["East Africa"],
    entityType: "geographic",
    parentIds: ["ent_sub_saharan_africa"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_middle_africa",
    name: "Middle Africa",
    aliases: ["Central Africa"],
    entityType: "geographic",
    parentIds: ["ent_sub_saharan_africa"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_southern_africa",
    name: "Southern Africa",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_sub_saharan_africa"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_western_africa",
    name: "Western Africa",
    aliases: ["West Africa"],
    entityType: "geographic",
    parentIds: ["ent_sub_saharan_africa"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_europe",
    name: "Europe",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_world"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_eastern_europe",
    name: "Eastern Europe",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_europe"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_northern_europe",
    name: "Northern Europe",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_europe"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_southern_europe",
    name: "Southern Europe",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_europe"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_western_europe",
    name: "Western Europe",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_europe"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_channel_islands",
    name: "The Channel Islands",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_asia",
    name: "Asia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_world"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_central_asia",
    name: "Central Asia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_asia"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_eastern_asia",
    name: "Eastern Asia",
    aliases: ["East Asia"],
    entityType: "geographic",
    parentIds: ["ent_asia"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_south_eastern_asia",
    name: "South-Eastern Asia",
    aliases: [
      "Southeast Asia",
      "South-East Asia"
    ],
    entityType: "geographic",
    parentIds: ["ent_asia"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_southern_asia",
    name: "Southern Asia",
    aliases: ["South Asia"],
    entityType: "geographic",
    parentIds: ["ent_asia"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_western_asia",
    name: "Western Asia",
    aliases: ["West Asia"],
    entityType: "geographic",
    parentIds: ["ent_asia"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_oceania",
    name: "Oceania",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_world"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_australia_and_new_zealand",
    name: "Australia and New Zealand",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_oceania"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_melanesia",
    name: "Melanesia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_oceania"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_micronesia",
    name: "Micronesia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_oceania"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_polynesia",
    name: "Polynesia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_oceania"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_antarctica",
    name: "Antarctica",
    aliases: ["Antarctic"],
    entityType: "geographic",
    parentIds: ["ent_world"],
    tags: ["region"],
    defaultVariantId: null
  },

  /*
    Antarctica.
  */
  {
    id: "ent_british_antarctic_territory",
    name: "British Antarctic Territory",
    aliases: ["BAT"],
    entityType: "geographic",
    parentIds: ["ent_antarctica"],
    administeringEntityIds: ["ent_united_kingdom"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "disputed"
    ],
    defaultVariantId: "var_british_antarctic_territory_current"
  },
  {
    id: "ent_australian_antarctic_territory",
    name: "Australian Antarctic Territory",
    aliases: ["AAT"],
    entityType: "geographic",
    parentIds: ["ent_antarctica"],
    administeringEntityIds: ["ent_australia"],
    officialRepresentationVariantIds: ["var_australia_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "disputed"
    ],
    defaultVariantId: null
  },

  /*
    Australia and New Zealand.
  */
  {
    id: "ent_australia",
    name: "Australia",
    aliases: ["Commonwealth of Australia"],
    entityType: "geographic",
    parentIds: ["ent_australia_and_new_zealand"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_australia_current"
  },
  {
    id: "ent_australian_capital_territory",
    name: "Australian Capital Territory",
    aliases: ["ACT"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    tags: ["subdivision", "first_level_subdivision", "territory", "current"],
    defaultVariantId: "var_australian_capital_territory_current"
  },
  {
    id: "ent_australia_new_south_wales",
    name: "New South Wales",
    aliases: ["NSW"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_australia_new_south_wales_current"
  },
  {
    id: "ent_northern_territory",
    name: "Northern Territory",
    aliases: ["NT"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    tags: ["subdivision", "first_level_subdivision", "territory", "current"],
    defaultVariantId: "var_northern_territory_current"
  },
  {
    id: "ent_australia_queensland",
    name: "Queensland",
    aliases: ["QLD"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_australia_queensland_current"
  },
  {
    id: "ent_australia_south_australia",
    name: "South Australia",
    aliases: ["SA"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_australia_south_australia_current"
  },
  {
    id: "ent_australia_tasmania",
    name: "Tasmania",
    aliases: ["TAS"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_australia_tasmania_current"
  },
  {
    id: "ent_australia_victoria",
    name: "Victoria",
    aliases: ["VIC"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_australia_victoria_current"
  },
  {
    id: "ent_australia_western_australia",
    name: "Western Australia",
    aliases: ["WA"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_australia_western_australia_current"
  },
  {
    id: "ent_jervis_bay_territory",
    name: "Jervis Bay Territory",
    aliases: ["JBT"],
    entityType: "geographic",
    parentIds: ["ent_australia"],
    administeringEntityIds: ["ent_australia"],
    officialRepresentationVariantIds: ["var_australia_current"],
    tags: ["subdivision", "territory", "current", "recognised"],
    defaultVariantId: null
  },
  {
    id: "ent_ashmore_and_cartier_islands",
    name: "Ashmore and Cartier Islands",
    aliases: ["Territory of Ashmore and Cartier Islands"],
    entityType: "geographic",
    parentIds: ["ent_australia_and_new_zealand"],
    administeringEntityIds: ["ent_australia"],
    officialRepresentationVariantIds: ["var_australia_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: null
  },
  {
    id: "ent_coral_sea_islands",
    name: "Coral Sea Islands",
    aliases: [
      "Coral Sea Islands Territory",
      "Territory of Coral Sea Islands"
    ],
    entityType: "geographic",
    parentIds: ["ent_australia_and_new_zealand"],
    administeringEntityIds: ["ent_australia"],
    officialRepresentationVariantIds: ["var_australia_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: null
  },
  {
    id: "ent_christmas_island",
    name: "Christmas Island",
    aliases: ["Territory of Christmas Island"],
    entityType: "geographic",
    parentIds: ["ent_australia_and_new_zealand"],
    administeringEntityIds: ["ent_australia"],
    officialRepresentationVariantIds: ["var_australia_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_christmas_island_current_unofficial"
  },
  {
    id: "ent_cocos_keeling_islands",
    name: "Cocos (Keeling) Islands",
    aliases: [
      "Cocos Islands",
      "Keeling Islands",
      "Territory of Cocos (Keeling) Islands"
    ],
    entityType: "geographic",
    parentIds: ["ent_australia_and_new_zealand"],
    administeringEntityIds: ["ent_australia"],
    officialRepresentationVariantIds: ["var_australia_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_cocos_keeling_islands_current_unofficial"
  },
  {
    id: "ent_heard_island_and_mcdonald_islands",
    name: "Heard Island and McDonald Islands",
    aliases: [
      "HIMI",
      "Territory of Heard Island and McDonald Islands"
    ],
    entityType: "geographic",
    parentIds: ["ent_australia_and_new_zealand"],
    administeringEntityIds: ["ent_australia"],
    officialRepresentationVariantIds: ["var_australia_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: null
  },
  {
    id: "ent_new_zealand",
    name: "New Zealand",
    aliases: [
      "Aotearoa",
      "Aotearoa New Zealand"
    ],
    entityType: "geographic",
    parentIds: ["ent_australia_and_new_zealand"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_new_zealand_current"
  },
  {
    id: "ent_norfolk_island",
    name: "Norfolk Island",
    aliases: ["Territory of Norfolk Island"],
    entityType: "geographic",
    parentIds: ["ent_australia_and_new_zealand"],
    administeringEntityIds: ["ent_australia"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_norfolk_island_current"
  },

  /*
    Melanesia.
  */
  {
    id: "ent_fiji",
    name: "Fiji",
    aliases: ["Republic of Fiji"],
    entityType: "geographic",
    parentIds: ["ent_melanesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_fiji_current"
  },
  {
    id: "ent_new_caledonia",
    name: "New Caledonia",
    aliases: ["Nouvelle-Calédonie"],
    entityType: "geographic",
    parentIds: ["ent_melanesia"],
    administeringEntityIds: ["ent_france"],
    officialRepresentationVariantIds: ["var_france_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_new_caledonia_kanak_current_unofficial"
  },
  {
    id: "ent_papua_new_guinea",
    name: "Papua New Guinea",
    aliases: [
      "Independent State of Papua New Guinea",
      "PNG"
    ],
    entityType: "geographic",
    parentIds: ["ent_melanesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_papua_new_guinea_current"
  },
  {
    id: "ent_solomon_islands",
    name: "Solomon Islands",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_melanesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_solomon_islands_current"
  },
  {
    id: "ent_vanuatu",
    name: "Vanuatu",
    aliases: ["Republic of Vanuatu"],
    entityType: "geographic",
    parentIds: ["ent_melanesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_vanuatu_current"
  },

  /*
    Micronesia.
  */
  {
    id: "ent_federated_states_of_micronesia",
    name: "Federated States of Micronesia",
    aliases: [
      "Micronesia",
      "FSM"
    ],
    entityType: "geographic",
    parentIds: ["ent_micronesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_federated_states_of_micronesia_current"
  },

  {
    id: "ent_micronesia_chuuk",
    name: "Chuuk",
    aliases: ["Truk"],
    entityType: "geographic",
    parentIds: ["ent_federated_states_of_micronesia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_micronesia_chuuk_current"
  },
  {
    id: "ent_micronesia_kosrae",
    name: "Kosrae",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_federated_states_of_micronesia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_micronesia_kosrae_current"
  },
  {
    id: "ent_micronesia_pohnpei",
    name: "Pohnpei",
    aliases: ["Ponape"],
    entityType: "geographic",
    parentIds: ["ent_federated_states_of_micronesia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_micronesia_pohnpei_current"
  },
  {
    id: "ent_micronesia_yap",
    name: "Yap",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_federated_states_of_micronesia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_micronesia_yap_current"
  },
  {
    id: "ent_guam",
    name: "Guam",
    aliases: ["Guåhan"],
    entityType: "geographic",
    parentIds: ["ent_micronesia"],
    administeringEntityIds: ["ent_united_states"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_guam_current"
  },
  {
    id: "ent_kiribati",
    name: "Kiribati",
    aliases: ["Republic of Kiribati"],
    entityType: "geographic",
    parentIds: ["ent_micronesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_kiribati_current"
  },
  {
    id: "ent_marshall_islands",
    name: "Marshall Islands",
    aliases: [
      "Republic of the Marshall Islands",
      "RMI"
    ],
    entityType: "geographic",
    parentIds: ["ent_micronesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_marshall_islands_current"
  },
  {
    id: "ent_nauru",
    name: "Nauru",
    aliases: ["Republic of Nauru"],
    entityType: "geographic",
    parentIds: ["ent_micronesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_nauru_current"
  },
  {
    id: "ent_northern_mariana_islands",
    name: "Northern Mariana Islands",
    aliases: [
      "Commonwealth of the Northern Mariana Islands",
      "Northern Marianas",
      "CNMI"
    ],
    entityType: "geographic",
    parentIds: ["ent_micronesia"],
    administeringEntityIds: ["ent_united_states"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_northern_mariana_islands_current"
  },
  {
    id: "ent_palau",
    name: "Palau",
    aliases: [
      "Republic of Palau",
      "Belau"
    ],
    entityType: "geographic",
    parentIds: ["ent_micronesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_palau_current"
  },
  {
    id: "ent_united_states_minor_outlying_islands",
    name: "United States Minor Outlying Islands",
    aliases: [
      "U.S. Minor Outlying Islands",
      "US Minor Outlying Islands",
      "USMOI"
    ],
    entityType: "geographic",
    parentIds: ["ent_micronesia"],
    administeringEntityIds: ["ent_united_states"],
    officialRepresentationVariantIds: ["var_united_states_current"],
    tags: ["region", "overseas", "current"],
    defaultVariantId: null
  },
  {
    id: "ent_johnston_atoll",
    name: "Johnston Atoll",
    aliases: ["Johnston Island"],
    entityType: "geographic",
    parentIds: ["ent_united_states_minor_outlying_islands"],
    administeringEntityIds: ["ent_united_states"],
    officialRepresentationVariantIds: ["var_united_states_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_johnston_atoll_current_unofficial"
  },
  {
    id: "ent_midway_atoll",
    name: "Midway Atoll",
    aliases: [
      "Midway Islands",
      "Midway Island"
    ],
    entityType: "geographic",
    parentIds: ["ent_united_states_minor_outlying_islands"],
    administeringEntityIds: ["ent_united_states"],
    officialRepresentationVariantIds: ["var_united_states_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_midway_atoll_current_unofficial"
  },
  {
    id: "ent_wake_island",
    name: "Wake Island",
    aliases: ["Wake Atoll"],
    entityType: "geographic",
    parentIds: ["ent_united_states_minor_outlying_islands"],
    administeringEntityIds: ["ent_united_states"],
    officialRepresentationVariantIds: ["var_united_states_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "disputed"
    ],
    defaultVariantId: "var_wake_island_current_unofficial"
  },

  /*
    Polynesia.
  */
  {
    id: "ent_american_samoa",
    name: "American Samoa",
    aliases: [
      "Territory of American Samoa",
      "Amerika Sāmoa"
    ],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    administeringEntityIds: ["ent_united_states"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_american_samoa_current"
  },
  {
    id: "ent_cook_islands",
    name: "Cook Islands",
    aliases: ["Kūki 'Āirani"],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_cook_islands_current"
  },
  {
    id: "ent_french_polynesia",
    name: "French Polynesia",
    aliases: ["Polynésie française"],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    administeringEntityIds: ["ent_france"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_french_polynesia_current"
  },
  {
    id: "ent_niue",
    name: "Niue",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_niue_current"
  },
  {
    id: "ent_pitcairn_islands",
    name: "Pitcairn Islands",
    aliases: [
      "Pitcairn",
      "Pitcairn Group of Islands"
    ],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    administeringEntityIds: ["ent_united_kingdom"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_pitcairn_islands_current"
  },
  {
    id: "ent_samoa",
    name: "Samoa",
    aliases: ["Independent State of Samoa"],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_samoa_current"
  },
  {
    id: "ent_tokelau",
    name: "Tokelau",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    administeringEntityIds: ["ent_new_zealand"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_tokelau_current"
  },
  {
    id: "ent_tonga",
    name: "Tonga",
    aliases: ["Kingdom of Tonga"],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_tonga_current"
  },
  {
    id: "ent_tuvalu",
    name: "Tuvalu",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_tuvalu_current"
  },
  {
    id: "ent_wallis_and_futuna",
    name: "Wallis and Futuna",
    aliases: [
      "Wallis-et-Futuna",
      "Territory of the Wallis and Futuna Islands"
    ],
    entityType: "geographic",
    parentIds: ["ent_polynesia"],
    administeringEntityIds: ["ent_france"],
    officialRepresentationVariantIds: ["var_france_current"],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_wallis_and_futuna_current_unofficial"
  },

  /*
    Northern Africa.
  */
  {
    id: "ent_algeria",
    name: "Algeria",
    aliases: ["People's Democratic Republic of Algeria"],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_algeria_current"
  },
  {
    id: "ent_egypt",
    name: "Egypt",
    aliases: ["Arab Republic of Egypt"],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_egypt_current"
  },
  {
    id: "ent_libya",
    name: "Libya",
    aliases: ["State of Libya"],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_libya_current"
  },
  {
    id: "ent_morocco",
    name: "Morocco",
    aliases: ["Kingdom of Morocco"],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_morocco_current"
  },
  {
    id: "ent_sudan",
    name: "Sudan",
    aliases: ["Republic of the Sudan"],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_sudan_current"
  },
  {
    id: "ent_tunisia",
    name: "Tunisia",
    aliases: ["Republic of Tunisia"],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_tunisia_current"
  },
  {
    id: "ent_western_sahara",
    name: "Western Sahara",
    aliases: [
      "Sahrawi Arab Democratic Republic",
      "Sahrawi Republic",
      "SADR"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    tags: ["territory", "current", "disputed"],
    defaultVariantId: "var_western_sahara_current"
  },

  /*
    Eastern Africa.
  */
  {
    id: "ent_burundi",
    name: "Burundi",
    aliases: ["Republic of Burundi"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_burundi_current"
  },
  {
    id: "ent_comoros",
    name: "Comoros",
    aliases: ["Union of the Comoros"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_comoros_current"
  },
  {
    id: "ent_djibouti",
    name: "Djibouti",
    aliases: ["Republic of Djibouti"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_djibouti_current"
  },
  {
    id: "ent_eritrea",
    name: "Eritrea",
    aliases: ["State of Eritrea"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_eritrea_current"
  },
  {
    id: "ent_ethiopia",
    name: "Ethiopia",
    aliases: ["Federal Democratic Republic of Ethiopia"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_ethiopia_current"
  },
  {
    id: "ent_kenya",
    name: "Kenya",
    aliases: ["Republic of Kenya"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_kenya_current"
  },
  {
    id: "ent_madagascar",
    name: "Madagascar",
    aliases: ["Republic of Madagascar"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_madagascar_current"
  },
  {
    id: "ent_malawi",
    name: "Malawi",
    aliases: ["Republic of Malawi"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_malawi_current"
  },
  {
    id: "ent_mauritius",
    name: "Mauritius",
    aliases: ["Republic of Mauritius"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_mauritius_current"
  },
  {
    id: "ent_mozambique",
    name: "Mozambique",
    aliases: ["Republic of Mozambique"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_mozambique_current"
  },
  {
    id: "ent_rwanda",
    name: "Rwanda",
    aliases: ["Republic of Rwanda"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_rwanda_current"
  },
  {
    id: "ent_seychelles",
    name: "Seychelles",
    aliases: ["Republic of Seychelles"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_seychelles_current"
  },
  {
    id: "ent_somalia",
    name: "Somalia",
    aliases: ["Federal Republic of Somalia"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_somalia_current"
  },
  {
    id: "ent_somaliland",
    name: "Somaliland",
    aliases: ["Republic of Somaliland"],
    entityType: "geographic",
    parentIds: ["ent_somalia"],
    tags: ["sovereign", "country", "current", "unrecognised", "disputed"],
    defaultVariantId: "var_somaliland_current"
  },
  {
    id: "ent_south_sudan",
    name: "South Sudan",
    aliases: ["Republic of South Sudan"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_south_sudan_current"
  },
  {
    id: "ent_tanzania",
    name: "Tanzania",
    aliases: ["United Republic of Tanzania"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_tanzania_current"
  },
  {
    id: "ent_uganda",
    name: "Uganda",
    aliases: ["Republic of Uganda"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_uganda_current"
  },
  {
    id: "ent_zambia",
    name: "Zambia",
    aliases: ["Republic of Zambia"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_zambia_current"
  },
  {
    id: "ent_zimbabwe",
    name: "Zimbabwe",
    aliases: ["Republic of Zimbabwe"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_zimbabwe_current"
  },
  {
    id: "ent_mayotte",
    name: "Mayotte",
    aliases: [
      "Département-Région de Mayotte",
      "Department-Region of Mayotte"
    ],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    administeringEntityIds: ["ent_france"],
    officialRepresentationVariantIds: ["var_france_current"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_mayotte_unofficial"
  },
  {
    id: "ent_reunion",
    name: "Réunion",
    aliases: ["Reunion", "La Réunion"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    administeringEntityIds: ["ent_france"],
    officialRepresentationVariantIds: ["var_france_current"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_reunion_unofficial"
  },
  {
    id: "ent_british_indian_ocean_territory",
    name: "British Indian Ocean Territory",
    aliases: ["BIOT", "Chagos Archipelago", "Chagos Islands"],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    administeringEntityIds: ["ent_united_kingdom"],
    tags: ["territory", "overseas", "current", "recognised", "disputed"],
    defaultVariantId: "var_british_indian_ocean_territory_current"
  },
  {
    id: "ent_french_southern_and_antarctic_lands",
    name: "French Southern and Antarctic Lands",
    aliases: [
      "French Southern Territories",
      "TAAF",
      "Terres australes et antarctiques françaises"
    ],
    entityType: "geographic",
    parentIds: ["ent_eastern_africa"],
    administeringEntityIds: ["ent_france"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_french_southern_and_antarctic_lands_current"
  },

  /*
    Middle Africa.
  */
  {
    id: "ent_angola",
    name: "Angola",
    aliases: ["Republic of Angola"],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_angola_current"
  },
  {
    id: "ent_cameroon",
    name: "Cameroon",
    aliases: ["Republic of Cameroon"],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_cameroon_current"
  },
  {
    id: "ent_central_african_republic",
    name: "Central African Republic",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_central_african_republic_current"
  },
  {
    id: "ent_chad",
    name: "Chad",
    aliases: ["Republic of Chad"],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_chad_current"
  },
  {
    id: "ent_democratic_republic_of_the_congo",
    name: "Democratic Republic of the Congo",
    aliases: [
      "DR Congo",
      "DRC",
      "Congo-Kinshasa"
    ],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_democratic_republic_of_the_congo_current"
  },
  {
    id: "ent_equatorial_guinea",
    name: "Equatorial Guinea",
    aliases: ["Republic of Equatorial Guinea"],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_equatorial_guinea_current"
  },
  {
    id: "ent_gabon",
    name: "Gabon",
    aliases: ["Gabonese Republic"],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_gabon_current"
  },
  {
    id: "ent_republic_of_the_congo",
    name: "Republic of the Congo",
    aliases: [
      "Congo Republic",
      "Congo-Brazzaville"
    ],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_republic_of_the_congo_current"
  },
  {
    id: "ent_sao_tome_and_principe",
    name: "São Tomé and Príncipe",
    aliases: ["Democratic Republic of São Tomé and Príncipe"],
    entityType: "geographic",
    parentIds: ["ent_middle_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_sao_tome_and_principe_current"
  },

  /*
    Southern Africa.
  */
  {
    id: "ent_botswana",
    name: "Botswana",
    aliases: ["Republic of Botswana"],
    entityType: "geographic",
    parentIds: ["ent_southern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_botswana_current"
  },
  {
    id: "ent_eswatini",
    name: "Eswatini",
    aliases: [
      "Kingdom of Eswatini",
      "Swaziland",
      "Kingdom of Swaziland"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_eswatini_current"
  },
  {
    id: "ent_lesotho",
    name: "Lesotho",
    aliases: ["Kingdom of Lesotho"],
    entityType: "geographic",
    parentIds: ["ent_southern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_lesotho_current"
  },
  {
    id: "ent_namibia",
    name: "Namibia",
    aliases: ["Republic of Namibia"],
    entityType: "geographic",
    parentIds: ["ent_southern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_namibia_current"
  },
  {
    id: "ent_south_africa",
    name: "South Africa",
    aliases: ["Republic of South Africa"],
    entityType: "geographic",
    parentIds: ["ent_southern_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_south_africa_current"
  },

  /*
    Western Africa.
  */
  {
    id: "ent_benin",
    name: "Benin",
    aliases: ["Republic of Benin"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_benin_current"
  },
  {
    id: "ent_burkina_faso",
    name: "Burkina Faso",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_burkina_faso_current"
  },
  {
    id: "ent_cabo_verde",
    name: "Cabo Verde",
    aliases: [
      "Cape Verde",
      "Republic of Cabo Verde"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_cabo_verde_current"
  },
  {
    id: "ent_cote_d_ivoire",
    name: "Côte d’Ivoire",
    aliases: [
      "Ivory Coast",
      "Cote d'Ivoire",
      "Republic of Côte d’Ivoire"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_cote_d_ivoire_current"
  },
  {
    id: "ent_gambia",
    name: "The Gambia",
    aliases: [
      "Gambia",
      "Republic of The Gambia",
    ],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_gambia_current"
  },
  {
    id: "ent_ghana",
    name: "Ghana",
    aliases: ["Republic of Ghana"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_ghana_current"
  },
  {
    id: "ent_guinea",
    name: "Guinea",
    aliases: ["Republic of Guinea", "Guinea-Conakry"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_guinea_current"
  },
  {
    id: "ent_guinea_bissau",
    name: "Guinea-Bissau",
    aliases: ["Republic of Guinea-Bissau"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_guinea_bissau_current"
  },
  {
    id: "ent_liberia",
    name: "Liberia",
    aliases: ["Republic of Liberia"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_liberia_current"
  },
  {
    id: "ent_mali",
    name: "Mali",
    aliases: ["Republic of Mali"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_mali_current"
  },
  {
    id: "ent_mauritania",
    name: "Mauritania",
    aliases: ["Islamic Republic of Mauritania"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_mauritania_current"
  },
  {
    id: "ent_niger",
    name: "Niger",
    aliases: ["Republic of the Niger"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_niger_current"
  },
  {
    id: "ent_nigeria",
    name: "Nigeria",
    aliases: ["Federal Republic of Nigeria"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_nigeria_current"
  },
  {
    id: "ent_senegal",
    name: "Senegal",
    aliases: ["Republic of Senegal"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_senegal_current"
  },
  {
    id: "ent_sierra_leone",
    name: "Sierra Leone",
    aliases: ["Republic of Sierra Leone"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_sierra_leone_current"
  },
  {
    id: "ent_togo",
    name: "Togo",
    aliases: ["Togolese Republic"],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_togo_current"
  },
  {
    id: "ent_saint_helena_ascension_and_tristan_da_cunha",
    name: "Saint Helena, Ascension and Tristan da Cunha",
    aliases: [
      "Saint Helena, Ascension Island and Tristan da Cunha",
      "St Helena, Ascension and Tristan da Cunha"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_africa"],
    administeringEntityIds: ["ent_united_kingdom"],
    officialRepresentationVariantIds: [
      "var_united_kingdom_current"
    ],
    tags: ["dependency", "overseas", "current", "recognised"],
    defaultVariantId: null
  },
  {
    id: "ent_saint_helena",
    name: "Saint Helena",
    aliases: ["St Helena"],
    entityType: "geographic",
    parentIds: ["ent_saint_helena_ascension_and_tristan_da_cunha"],
	administeringEntityIds: ["ent_united_kingdom"],
    constituentOfEntityIds: [
      "ent_saint_helena_ascension_and_tristan_da_cunha"
    ],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_saint_helena_current"
  },
  {
    id: "ent_ascension_island",
    name: "Ascension Island",
    aliases: ["Ascension"],
    entityType: "geographic",
    parentIds: ["ent_saint_helena_ascension_and_tristan_da_cunha"],
	administeringEntityIds: ["ent_united_kingdom"],
    constituentOfEntityIds: [
      "ent_saint_helena_ascension_and_tristan_da_cunha"
    ],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_ascension_island_current"
  },
  {
    id: "ent_tristan_da_cunha",
    name: "Tristan da Cunha",
    aliases: ["Tristan"],
    entityType: "geographic",
    parentIds: ["ent_saint_helena_ascension_and_tristan_da_cunha"],
	administeringEntityIds: ["ent_united_kingdom"],
    constituentOfEntityIds: [
      "ent_saint_helena_ascension_and_tristan_da_cunha"
    ],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_tristan_da_cunha_current"
  },

  /*
    South America.
  */
  {
    id: "ent_argentina",
    name: "Argentina",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_argentina_current"
  },
  {
    id: "ent_bolivia",
    name: "Bolivia",
    aliases: ["Plurinational State of Bolivia"],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_bolivia_civil"
  },
  {
    id: "ent_bouvet_island",
    name: "Bouvet Island",
    aliases: ["Bouvetøya"],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    administeringEntityIds: ["ent_norway"],
    officialRepresentationVariantIds: [
      "var_norway_current"
    ],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: null
  },
  {
    id: "ent_brazil",
    name: "Brazil",
    aliases: ["Brasil"],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_brazil_current"
  },
   {
    id: "ent_chile",
    name: "Chile",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_chile_current"
  },
  {
    id: "ent_colombia",
    name: "Colombia",
    aliases: ["Republic of Colombia"],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_colombia_current"
  },
  {
    id: "ent_ecuador",
    name: "Ecuador",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_ecuador_current"
  },
  {
    id: "ent_falkland_islands",
    name: "Falkland Islands",
    aliases: ["Islas Malvinas", "Malvinas", "Falklands"],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
	administeringEntityIds: ["ent_united_kingdom"],
    tags: [ "territory", "overseas", "current", "recognised", "disputed"],
    defaultVariantId: "var_falkland_islands_current"
  },
  {
    id: "ent_french_guiana",
    name: "French Guiana",
    aliases: ["Guyane"],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
	administeringEntityIds: ["ent_france"],
	officialRepresentationVariantIds: [
      "var_france_current"
    ],
    tags: ["subdivision", "first_level_subdivision", "overseas",
	"current", "recognised"],
    defaultVariantId: "var_french_guiana_current_unofficial"
  },
  {
    id: "ent_guyana",
    name: "Guyana",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_guyana_current"
  },
  {
    id: "ent_paraguay",
    name: "Paraguay",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_paraguay_obverse"
  },
  {
    id: "ent_peru",
    name: "Peru",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_peru_civil"
  },
  {
    id: "ent_south_georgia_and_the_south_sandwich_islands",
    name: "South Georgia and the South Sandwich Islands",
    aliases: ["SGSSI"],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
	administeringEntityIds: ["ent_united_kingdom"],
    tags: [ "territory", "overseas", "current", "recognised", "disputed"],
    defaultVariantId: "var_south_georgia_and_the_south_sandwich_islands_current"
  },
  {
    id: "ent_suriname",
    name: "Suriname",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_suriname_current"
  },
  {
    id: "ent_uruguay",
    name: "Uruguay",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_uruguay_current"
  },
  {
    id: "ent_venezuela",
    name: "Venezuela",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_venezuela_current"
  },

  /*
    Venezuelan states and the Capital District.

    Regional study groupings are modelled as collections rather than
    structural geographic entities, so all first-level subdivisions are
    direct children of Venezuela.
  */
  {
    id: "ent_venezuela_amazonas",
    name: "Amazonas",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_amazonas_current"
  },
  {
    id: "ent_venezuela_anzoategui",
    name: "Anzoátegui",
    aliases: ["Anzoategui"],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_anzoategui_current"
  },
  {
    id: "ent_venezuela_apure",
    name: "Apure",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_apure_current"
  },
  {
    id: "ent_venezuela_aragua",
    name: "Aragua",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_aragua_current"
  },
  {
    id: "ent_venezuela_barinas",
    name: "Barinas",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_barinas_current"
  },
  {
    id: "ent_venezuela_bolivar",
    name: "Bolívar",
    aliases: ["Bolivar"],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_bolivar_current"
  },
  {
    id: "ent_venezuela_carabobo",
    name: "Carabobo",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_carabobo_current"
  },
  {
    id: "ent_venezuela_caracas",
    name: "Caracas",
    aliases: ["Capital District", "Distrito Capital"],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_caracas_current"
  },
  {
    id: "ent_venezuela_cojedes",
    name: "Cojedes",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_cojedes_current"
  },
  {
    id: "ent_venezuela_delta_amacuro",
    name: "Delta Amacuro",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_delta_amacuro_current"
  },
  {
    id: "ent_venezuela_falcon",
    name: "Falcón",
    aliases: ["Falcon"],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_falcon_current"
  },
  {
    id: "ent_venezuela_guarico",
    name: "Guárico",
    aliases: ["Guarico"],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_guarico_current"
  },
  {
    id: "ent_venezuela_la_guaira",
    name: "La Guaira",
    aliases: ["Vargas"],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_la_guaira_current"
  },
  {
    id: "ent_venezuela_lara",
    name: "Lara",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_lara_current"
  },
  {
    id: "ent_venezuela_merida",
    name: "Mérida",
    aliases: ["Merida"],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_merida_current"
  },
  {
    id: "ent_venezuela_miranda",
    name: "Miranda",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_miranda_current"
  },
  {
    id: "ent_venezuela_monagas",
    name: "Monagas",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_monagas_current"
  },
  {
    id: "ent_venezuela_nueva_esparta",
    name: "Nueva Esparta",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_nueva_esparta_current"
  },
  {
    id: "ent_venezuela_portuguesa",
    name: "Portuguesa",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_portuguesa_current"
  },
  {
    id: "ent_venezuela_sucre",
    name: "Sucre",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_sucre_current"
  },
  {
    id: "ent_venezuela_tachira",
    name: "Táchira",
    aliases: ["Tachira"],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_tachira_current"
  },
  {
    id: "ent_venezuela_trujillo",
    name: "Trujillo",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_trujillo_current"
  },
  {
    id: "ent_venezuela_yaracuy",
    name: "Yaracuy",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_yaracuy_current"
  },
  {
    id: "ent_venezuela_zulia",
    name: "Zulia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_venezuela"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_zulia_current"
  },

  /*
    Northern America.
  */
  {
    id: "ent_canada",
    name: "Canada",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_northern_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_canada_current"
  },
  {
    id: "ent_canada_alberta",
    name: "Alberta",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_alberta_current"
  },
  {
    id: "ent_canada_british_columbia",
    name: "British Columbia",
    aliases: ["BC"],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_british_columbia_current"
  },
  {
    id: "ent_canada_manitoba",
    name: "Manitoba",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_manitoba_current"
  },
  {
    id: "ent_canada_new_brunswick",
    name: "New Brunswick",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_new_brunswick_current"
  },
  {
    id: "ent_canada_newfoundland_and_labrador",
    name: "Newfoundland and Labrador",
    aliases: ["Newfoundland"],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_newfoundland_and_labrador_current"
  },
  {
    id: "ent_canada_nova_scotia",
    name: "Nova Scotia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_nova_scotia_current"
  },
  {
    id: "ent_canada_ontario",
    name: "Ontario",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_ontario_current"
  },
  {
    id: "ent_canada_prince_edward_island",
    name: "Prince Edward Island",
    aliases: ["PEI"],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_prince_edward_island_current"
  },
  {
    id: "ent_canada_quebec",
    name: "Quebec",
    aliases: ["Québec"],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_quebec_current"
  },
  {
    id: "ent_canada_saskatchewan",
    name: "Saskatchewan",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_canada_saskatchewan_current"
  },
  {
    id: "ent_canada_northwest_territories",
    name: "Northwest Territories",
    aliases: ["NWT"],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "territory", "current"],
    defaultVariantId: "var_canada_northwest_territories_current"
  },
  {
    id: "ent_canada_nunavut",
    name: "Nunavut",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "territory", "current"],
    defaultVariantId: "var_canada_nunavut_current"
  },
  {
    id: "ent_canada_yukon",
    name: "Yukon",
    aliases: ["Yukon Territory"],
    entityType: "geographic",
    parentIds: ["ent_canada"],
    tags: ["subdivision", "first_level_subdivision", "territory", "current"],
    defaultVariantId: "var_canada_yukon_current"
  },
  {
    id: "ent_greenland",
    name: "Greenland",
    aliases: ["Kalaallit Nunaat"],
    entityType: "geographic",
    parentIds: ["ent_northern_america"],
	constituentOfEntityIds: [
      "ent_kingdom_of_denmark"
    ],
    tags: ["territory", "autonomous", "current", "recognised"],
    defaultVariantId: "var_greenland_current"
  },
   {
    id: "ent_saint_pierre_and_miquelon",
    name: "Saint-Pierre and Miquelon",
    aliases: [
	"Saint Pierre and Miquelon",
    "Saint-Pierre-et-Miquelon"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_america"],
	administeringEntityIds: ["ent_france"],
	officialRepresentationVariantIds: [
      "var_france_current"
    ],
    tags: [ "territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_saint_pierre_and_miquelon_current_unofficial"
  },
  {
    id: "ent_united_states",
    name: "United States",
    aliases: ["USA", "United States of America", "US"],
    entityType: "geographic",
    parentIds: ["ent_northern_america"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_united_states_current"
  },
  
  
  /*
    US States.
  */
  {
    id: "ent_alabama",
    name: "Alabama",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_alabama"
  },
  {
    id: "ent_alaska",
    name: "Alaska",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_alaska"
  },
  {
    id: "ent_arizona",
    name: "Arizona",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_arizona"
  },
  {
    id: "ent_arkansas",
    name: "Arkansas",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_arkansas"
  },
  {
    id: "ent_california",
    name: "California",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_california_official"
  },
  {
    id: "ent_colorado",
	name: "Colorado",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_colorado"
  },
  {
    id: "ent_connecticut",
    name: "Connecticut",
	aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_connecticut"
  },
  {
    id: "ent_delaware",
    name: "Delaware",
	aliases: [],
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_delaware"
  },
  {
    id: "ent_district_of_columbia",
    name: "District of Columbia",
    aliases: ["Washington, D.C.", "Washington DC", "DC"],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_district_of_columbia"
  },
  {
    id: "ent_florida",
    name: "Florida",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_florida"
  },
  {
    id: "ent_georgia_state",
    name: "Georgia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_georgia_state"
  },
  {
    id: "ent_hawaii",
    name: "Hawaii",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_hawaii"
  },
  {
    id: "ent_idaho",
    name: "Idaho",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_idaho"
  },
  {
    id: "ent_illinois",
    name: "Illinois",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_illinois"
  },
  {
    id: "ent_indiana",
    name: "Indiana",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_indiana"
  },
  {
    id: "ent_iowa",
    name: "Iowa",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_iowa"
  },
  {
    id: "ent_kansas",
    name: "Kansas",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_kansas"
  },
  {
    id: "ent_kentucky",
    name: "Kentucky",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_kentucky"
  },
    {
    id: "ent_louisiana",
    name: "Louisiana",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_louisiana"
  },
  {
    id: "ent_maine",
    name: "Maine",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_maine"
  },
  {
    id: "ent_maryland",
    name: "Maryland",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_maryland"
  },
  {
    id: "ent_massachusetts",
    name: "Massachusetts",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_massachusetts"
  },
  {
    id: "ent_michigan",
    name: "Michigan",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_michigan"
  },
  {
    id: "ent_minnesota",
    name: "Minnesota",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_minnesota"
  },
  {
    id: "ent_mississippi",
    name: "Mississippi",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_mississippi"
  },
  {
    id: "ent_missouri",
    name: "Missouri",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_missouri"
  },
  {
    id: "ent_montana",
    name: "Montana",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_montana"
  },
  {
    id: "ent_nebraska",
    name: "Nebraska",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_nebraska"
  },
  {
    id: "ent_nevada",
    name: "Nevada",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_nevada"
  },
  {
    id: "ent_new_hampshire",
    name: "New Hampshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_new_hampshire"
  },
  {
    id: "ent_new_jersey",
    name: "New Jersey",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_new_jersey"
  },
  {
    id: "ent_new_mexico",
    name: "New Mexico",
    aliases: ["The Land of Enchantment"],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_new_mexico"
  },
  {
    id: "ent_new_york",
    name: "New York",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_new_york"
  },
  {
    id: "ent_north_carolina",
    name: "North Carolina",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_north_carolina"
  },
  {
    id: "ent_north_dakota",
    name: "North Dakota",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_north_dakota"
  },
  {
    id: "ent_ohio",
    name: "Ohio",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_ohio"
  },
    {
    id: "ent_oklahoma",
    name: "Oklahoma",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_oklahoma"
  },
  {
    id: "ent_oregon",
    name: "Oregon",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_oregon_obverse"
  },
  {
    id: "ent_pennsylvania",
    name: "Pennsylvania",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_pennsylvania"
  },
  {
    id: "ent_rhode_island",
    name: "Rhode Island",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_rhode_island"
  },
  {
    id: "ent_south_carolina",
    name: "South Carolina",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_south_carolina"
  },
  {
    id: "ent_south_dakota",
    name: "South Dakota",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_south_dakota"
  },
  {
    id: "ent_tennessee",
    name: "Tennessee",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_tennessee"
  },
  {
    id: "ent_texas",
    name: "Texas",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_texas"
  },
  {
    id: "ent_utah",
    name: "Utah",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_utah"
  },
  {
    id: "ent_vermont",
    name: "Vermont",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_vermont"
  },
  {
    id: "ent_virginia",
    name: "Virginia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_virginia"
  },
  {
    id: "ent_washington",
    name: "Washington",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_washington"
  },
  {
    id: "ent_west_virginia",
    name: "West Virginia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_west_virginia"
  },
  {
    id: "ent_wisconsin",
    name: "Wisconsin",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_wisconsin"
  },
  {
    id: "ent_wyoming",
    name: "Wyoming",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_states"],
    tags: ["first_level_subdivision", "subdivision", "current"],
    defaultVariantId: "var_wyoming"
  },
  
  /*
    Central America
  */
  {
  id: "ent_belize",
  name: "Belize",
  aliases: [],
  entityType: "geographic",
  parentIds: ["ent_central_america"],
  tags: ["sovereign", "country", "current", "recognised"],
  defaultVariantId: "var_belize_current"
},
{
  id: "ent_costa_rica",
  name: "Costa Rica",
  aliases: ["Republic of Costa Rica"],
  entityType: "geographic",
  parentIds: ["ent_central_america"],
  tags: ["sovereign", "country", "current", "recognised"],
  defaultVariantId: "var_costa_rica_current"
},
{
  id: "ent_el_salvador",
  name: "El Salvador",
  aliases: ["Republic of El Salvador"],
  entityType: "geographic",
  parentIds: ["ent_central_america"],
  tags: ["sovereign", "country", "current", "recognised"],
  defaultVariantId: "var_el_salvador_current"
},
{
  id: "ent_guatemala",
  name: "Guatemala",
  aliases: ["Republic of Guatemala"],
  entityType: "geographic",
  parentIds: ["ent_central_america"],
  tags: ["sovereign", "country", "current", "recognised"],
  defaultVariantId: "var_guatemala_current"
},
{
  id: "ent_honduras",
  name: "Honduras",
  aliases: ["Republic of Honduras"],
  entityType: "geographic",
  parentIds: ["ent_central_america"],
  tags: ["sovereign", "country", "current", "recognised"],
  defaultVariantId: "var_honduras_current"
},
{
  id: "ent_nicaragua",
  name: "Nicaragua",
  aliases: ["Republic of Nicaragua"],
  entityType: "geographic",
  parentIds: ["ent_central_america"],
  tags: ["sovereign", "country", "current", "recognised"],
  defaultVariantId: "var_nicaragua_current"
},
{
  id: "ent_panama",
  name: "Panama",
  aliases: ["Republic of Panama"],
  entityType: "geographic",
  parentIds: ["ent_central_america"],
  tags: ["sovereign", "country", "current", "recognised"],
  defaultVariantId: "var_panama_current"
},
{
  id: "ent_mexico",
  name: "Mexico",
  aliases: ["United Mexican States"],
  entityType: "geographic",
  parentIds: ["ent_central_america"],
  tags: ["sovereign", "country", "current", "recognised"],
  defaultVariantId: "var_mexico_current"
},
  
  
  /*
    Caribbean.
  */
   {
    id: "ent_anguilla",
    name: "Anguilla",
    aliases: [],
    entityType: "geographic",
    parentIds: [ "ent_caribbean" ],
	administeringEntityIds: ["ent_united_kingdom"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_anguilla_current"
  },
  {
    id: "ent_antigua_and_barbuda",
    name: "Antigua and Barbuda",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_antigua_and_barbuda_current"
  },
  {
    id: "ent_aruba",
    name: "Aruba",
    aliases: ["Country of Aruba"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	constituentOfEntityIds: [
      "ent_kingdom_of_the_netherlands"
    ],
    tags: ["country", "overseas", "current", "recognised"],
    defaultVariantId: "var_aruba_current"
  },
  {
    id: "ent_bahamas",
    name: "The Bahamas",
    aliases: ["Bahamas"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_bahamas_current"
  },
  {
    id: "ent_barbados",
    name: "Barbados",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_barbados_current"
  },
  {
    id: "ent_bermuda",
    name: "Bermuda",
    aliases: [],
    entityType: "geographic",
    parentIds: [ "ent_northern_america" ],
	administeringEntityIds: ["ent_united_kingdom"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_bermuda_current"
  },
  {
    id: "ent_bonaire",
    name: "Bonaire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean_netherlands"],
	administeringEntityIds: ["ent_netherlands"],
    tags: ["subdivision", "overseas",
	"current", "recognised"],
    defaultVariantId: "var_bonaire_current"
  },
  {
    id: "ent_british_virgin_islands",
    name: "British Virgin Islands",
    aliases: ["BVI"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_united_kingdom"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_british_virgin_islands_current"
  },
  {
    id: "ent_cayman_islands",
    name: "Cayman Islands",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_united_kingdom"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_cayman_islands_current"
  },
  {
    id: "ent_cuba",
    name: "Cuba",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_cuba_current"
  },
  {
    id: "ent_caribbean_netherlands",
    name: "Caribbean Netherlands",
    aliases: [
      "Bonaire, Sint Eustatius and Saba",
      "BES Islands",
      "Caribisch Nederland"
    ],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    administeringEntityIds: ["ent_netherlands"],
    officialRepresentationVariantIds: [
      "var_netherlands_current"
    ],
    tags: ["region", "overseas", "current", "recognised"],
    defaultVariantId: null
  },
  {
    id: "ent_curacao",
    name: "Curaçao",
    aliases: ["Curacao", "Country of Curaçao"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"], 
	constituentOfEntityIds: [
      "ent_kingdom_of_the_netherlands"
    ],
    tags: ["country", "overseas", "current", "recognised"],
    defaultVariantId: "var_curacao_current"
  },
  {
    id: "ent_dominica",
    name: "Dominica",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_dominica_current"
  },
  {
    id: "ent_dominican_republic",
    name: "Dominican Republic",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_dominican_republic_current"
  },
  {
    id: "ent_federal_dependencies_of_venezuela",
    name: "Federal Dependencies of Venezuela",
    aliases: ["Federal Dependencies"],
    entityType: "geographic",
    parentIds: [ "ent_caribbean" ],
	administeringEntityIds: ["ent_venezuela"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId:
      "var_federal_dependencies_of_venezuela_current"
  },
  {
    id: "ent_grenada",
    name: "Grenada",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_grenada_current"
  },
  {
    id: "ent_guadeloupe",
    name: "Guadeloupe",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_france"],
	officialRepresentationVariantIds: [
      "var_france_current"
    ],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_guadeloupe_current_unofficial"
  },
  {
    id: "ent_haiti",
    name: "Haiti",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_haiti_current"
  },
  {
    id: "ent_jamaica",
    name: "Jamaica",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_jamaica_current"
  },
  {
    id: "ent_martinique",
    name: "Martinique",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_france"],
	officialRepresentationVariantIds: [
      "var_france_current"
    ],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_martinique_current"
  },
  {
    id: "ent_montserrat",
    name: "Montserrat",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_united_kingdom"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_montserrat_current"
  },
  {
    id: "ent_puerto_rico",
    name: "Puerto Rico",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_united_states"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_puerto_rico_current"
  },
  {
    id: "ent_saba",
    name: "Saba",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean_netherlands"],
	administeringEntityIds: ["ent_netherlands"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_saba_current"
  },
  {
    id: "ent_saint_barthelemy",
    name: "Saint Barthélemy",
    aliases: [
      "St Barthélemy",
      "St Barthelemy",
	  "St. Barthélemy",
      "St. Barthelemy",
	  "Territorial Collectivity of Saint Barthélemy",
	  "St. Barts",
	  "St. Barths",
	  "St. Barth"
    ],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_france"],
	officialRepresentationVariantIds: [
      "var_france_current"
    ],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_saint_barthelemy_current_unofficial"
  },
  {
    id: "ent_saint_kitts_and_nevis",
    name: "Saint Kitts and Nevis",
    aliases: ["St Kitts and Nevis"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_saint_kitts_and_nevis_current"
  },
  {
    id: "ent_saint_lucia",
    name: "Saint Lucia",
    aliases: ["St Lucia"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_saint_lucia_current"
  },
  {
    id: "ent_saint_martin",
    name: "Saint Martin",
    aliases: ["St Martin"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_france"],
	officialRepresentationVariantIds: [
      "var_france_current"
    ],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_saint_martin_current_unofficial"
  },
  {
    id: "ent_saint_vincent_and_the_grenadines",
    name: "Saint Vincent and the Grenadines",
    aliases: [
      "St Vincent and the Grenadines",
      "Saint Vincent"
    ],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId:
      "var_saint_vincent_and_the_grenadines_current"
  },
  {
    id: "ent_sint_eustatius",
    name: "Sint Eustatius",
    aliases: ["Statia"],
    entityType: "geographic",
    parentIds: ["ent_caribbean_netherlands"],
	administeringEntityIds: ["ent_netherlands"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_sint_eustatius_current"
  },
  {
    id: "ent_sint_maarten",
    name: "Sint Maarten",
    aliases: ["Country of Sint Maarten"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	constituentOfEntityIds: [
      "ent_kingdom_of_the_netherlands"
    ],
    tags: ["country", "overseas", "current", "recognised"],
    defaultVariantId: "var_sint_maarten_current"
  },
  {
    id: "ent_trinidad_and_tobago",
    name: "Trinidad and Tobago",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
    tags: ["country", "sovereign", "current", "recognised"],
    defaultVariantId: "var_trinidad_and_tobago_current"
  },
  {
    id: "ent_turks_and_caicos_islands",
    name: "Turks and Caicos Islands",
    aliases: ["Turks and Caicos"],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_united_kingdom"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_turks_and_caicos_islands_current"
  },
  {
    id: "ent_us_virgin_islands",
    name: "United States Virgin Islands",
    aliases: [
      "US Virgin Islands",
      "U.S. Virgin Islands",
      "USVI"
    ],
    entityType: "geographic",
    parentIds: ["ent_caribbean"],
	administeringEntityIds: ["ent_united_states"],
    tags: ["territory", "overseas", "current", "recognised"],
    defaultVariantId: "var_us_virgin_islands_current"
  },

  /*
    Eastern Asia.
  */
  {
    id: "ent_china",
    name: "China",
    aliases: [
      "People's Republic of China",
      "PRC"
    ],
    entityType: "geographic",
    parentIds: ["ent_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_china_current"
  },
  {
    id: "ent_hong_kong",
    name: "Hong Kong",
    aliases: [
      "Hong Kong Special Administrative Region",
      "Hong Kong SAR"
    ],
    entityType: "geographic",
    parentIds: ["ent_china"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_hong_kong_current"
  },
  {
    id: "ent_japan",
    name: "Japan",
    aliases: ["State of Japan"],
    entityType: "geographic",
    parentIds: ["ent_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_japan_current"
  },
  /*
    Japan prefecture regions.
  */,
  {
    id: "ent_japan_hokkaido_region",
    name: "Hokkaido Region",
    aliases: ["Hokkaidō Region"],
    entityType: "geographic",
    parentIds: ["ent_japan"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_japan_tohoku_region",
    name: "Tohoku",
    aliases: ["Tōhoku", "Tohoku Region", "Tōhoku Region"],
    entityType: "geographic",
    parentIds: ["ent_japan"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_japan_kanto_region",
    name: "Kanto",
    aliases: ["Kantō", "Kanto Region", "Kantō Region"],
    entityType: "geographic",
    parentIds: ["ent_japan"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_japan_chubu_region",
    name: "Chubu",
    aliases: ["Chūbu", "Chubu Region", "Chūbu Region"],
    entityType: "geographic",
    parentIds: ["ent_japan"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_japan_kansai_region",
    name: "Kansai",
    aliases: ["Kinki", "Kansai Region", "Kinki Region"],
    entityType: "geographic",
    parentIds: ["ent_japan"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_japan_chugoku_region",
    name: "Chugoku",
    aliases: ["Chūgoku", "Chugoku Region", "Chūgoku Region"],
    entityType: "geographic",
    parentIds: ["ent_japan"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_japan_shikoku_region",
    name: "Shikoku",
    aliases: ["Shikoku Region"],
    entityType: "geographic",
    parentIds: ["ent_japan"],
    tags: ["region"],
    defaultVariantId: null
  },
  {
    id: "ent_japan_kyushu_region",
    name: "Kyushu",
    aliases: ["Kyūshū", "Kyushu Region", "Kyūshū Region", "Kyushu and Okinawa"],
    entityType: "geographic",
    parentIds: ["ent_japan"],
    tags: ["region"],
    defaultVariantId: null
  },

  /*
    Japanese prefectures.
  */,
  {
    id: "ent_japan_hokkaido",
    name: "Hokkaido",
    aliases: ["Hokkaidō", "Hokkaido Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_hokkaido_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_hokkaido_current"
  },
  {
    id: "ent_japan_aomori",
    name: "Aomori",
    aliases: ["Aomori Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_tohoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_aomori_current"
  },
  {
    id: "ent_japan_iwate",
    name: "Iwate",
    aliases: ["Iwate Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_tohoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_iwate_current"
  },
  {
    id: "ent_japan_miyagi",
    name: "Miyagi",
    aliases: ["Miyagi Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_tohoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_miyagi_current"
  },
  {
    id: "ent_japan_akita",
    name: "Akita",
    aliases: ["Akita Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_tohoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_akita_current"
  },
  {
    id: "ent_japan_yamagata",
    name: "Yamagata",
    aliases: ["Yamagata Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_tohoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_yamagata_current"
  },
  {
    id: "ent_japan_fukushima",
    name: "Fukushima",
    aliases: ["Fukushima Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_tohoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_fukushima_current"
  },
  {
    id: "ent_japan_ibaraki",
    name: "Ibaraki",
    aliases: ["Ibaraki Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kanto_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_ibaraki_current"
  },
  {
    id: "ent_japan_tochigi",
    name: "Tochigi",
    aliases: ["Tochigi Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kanto_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_tochigi_current"
  },
  {
    id: "ent_japan_gunma",
    name: "Gunma",
    aliases: ["Gunma Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kanto_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_gunma_current"
  },
  {
    id: "ent_japan_saitama",
    name: "Saitama",
    aliases: ["Saitama Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kanto_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_saitama_current"
  },
  {
    id: "ent_japan_chiba",
    name: "Chiba",
    aliases: ["Chiba Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kanto_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_chiba_current"
  },
  {
    id: "ent_japan_tokyo",
    name: "Tokyo",
    aliases: ["Tokyo Metropolis", "Tokyo-to", "Tōkyō"],
    entityType: "geographic",
    parentIds: ["ent_japan_kanto_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_tokyo_current"
  },
  {
    id: "ent_japan_kanagawa",
    name: "Kanagawa",
    aliases: ["Kanagawa Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kanto_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_kanagawa_current"
  },
  {
    id: "ent_japan_niigata",
    name: "Niigata",
    aliases: ["Niigata Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_niigata_current"
  },
  {
    id: "ent_japan_toyama",
    name: "Toyama",
    aliases: ["Toyama Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_toyama_current"
  },
  {
    id: "ent_japan_ishikawa",
    name: "Ishikawa",
    aliases: ["Ishikawa Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_ishikawa_current"
  },
  {
    id: "ent_japan_fukui",
    name: "Fukui",
    aliases: ["Fukui Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_fukui_current"
  },
  {
    id: "ent_japan_yamanashi",
    name: "Yamanashi",
    aliases: ["Yamanashi Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_yamanashi_current"
  },
  {
    id: "ent_japan_nagano",
    name: "Nagano",
    aliases: ["Nagano Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_nagano_current"
  },
  {
    id: "ent_japan_gifu",
    name: "Gifu",
    aliases: ["Gifu Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_gifu_current"
  },
  {
    id: "ent_japan_shizuoka",
    name: "Shizuoka",
    aliases: ["Shizuoka Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_shizuoka_current"
  },
  {
    id: "ent_japan_aichi",
    name: "Aichi",
    aliases: ["Aichi Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chubu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_aichi_current"
  },
  {
    id: "ent_japan_mie",
    name: "Mie",
    aliases: ["Mie Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kansai_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_mie_current"
  },
  {
    id: "ent_japan_shiga",
    name: "Shiga",
    aliases: ["Shiga Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kansai_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_shiga_current"
  },
  {
    id: "ent_japan_kyoto",
    name: "Kyoto",
    aliases: ["Kyoto Prefecture", "Kyoto-fu"],
    entityType: "geographic",
    parentIds: ["ent_japan_kansai_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_kyoto_current"
  },
  {
    id: "ent_japan_osaka",
    name: "Osaka",
    aliases: ["Osaka Prefecture", "Osaka-fu"],
    entityType: "geographic",
    parentIds: ["ent_japan_kansai_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_osaka_current"
  },
  {
    id: "ent_japan_hyogo",
    name: "Hyogo",
    aliases: ["Hyōgo", "Hyogo Prefecture", "Hyōgo Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kansai_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_hyogo_current"
  },
  {
    id: "ent_japan_nara",
    name: "Nara",
    aliases: ["Nara Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kansai_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_nara_current"
  },
  {
    id: "ent_japan_wakayama",
    name: "Wakayama",
    aliases: ["Wakayama Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kansai_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_wakayama_current"
  },
  {
    id: "ent_japan_tottori",
    name: "Tottori",
    aliases: ["Tottori Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chugoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_tottori_current"
  },
  {
    id: "ent_japan_shimane",
    name: "Shimane",
    aliases: ["Shimane Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chugoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_shimane_current"
  },
  {
    id: "ent_japan_okayama",
    name: "Okayama",
    aliases: ["Okayama Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chugoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_okayama_current"
  },
  {
    id: "ent_japan_hiroshima",
    name: "Hiroshima",
    aliases: ["Hiroshima Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chugoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_hiroshima_current"
  },
  {
    id: "ent_japan_yamaguchi",
    name: "Yamaguchi",
    aliases: ["Yamaguchi Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_chugoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_yamaguchi_current"
  },
  {
    id: "ent_japan_tokushima",
    name: "Tokushima",
    aliases: ["Tokushima Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_shikoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_tokushima_current"
  },
  {
    id: "ent_japan_kagawa",
    name: "Kagawa",
    aliases: ["Kagawa Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_shikoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_kagawa_current"
  },
  {
    id: "ent_japan_ehime",
    name: "Ehime",
    aliases: ["Ehime Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_shikoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_ehime_current"
  },
  {
    id: "ent_japan_kochi",
    name: "Kochi",
    aliases: ["Kōchi", "Kochi Prefecture", "Kōchi Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_shikoku_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_kochi_current"
  },
  {
    id: "ent_japan_fukuoka",
    name: "Fukuoka",
    aliases: ["Fukuoka Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kyushu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_fukuoka_current"
  },
  {
    id: "ent_japan_saga",
    name: "Saga",
    aliases: ["Saga Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kyushu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_saga_current"
  },
  {
    id: "ent_japan_nagasaki",
    name: "Nagasaki",
    aliases: ["Nagasaki Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kyushu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_nagasaki_current"
  },
  {
    id: "ent_japan_kumamoto",
    name: "Kumamoto",
    aliases: ["Kumamoto Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kyushu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_kumamoto_current"
  },
  {
    id: "ent_japan_oita",
    name: "Oita",
    aliases: ["Ōita", "Oita Prefecture", "Ōita Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kyushu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_oita_current"
  },
  {
    id: "ent_japan_miyazaki",
    name: "Miyazaki",
    aliases: ["Miyazaki Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kyushu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_miyazaki_current"
  },
  {
    id: "ent_japan_kagoshima",
    name: "Kagoshima",
    aliases: ["Kagoshima Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kyushu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_kagoshima_current"
  },
  {
    id: "ent_japan_okinawa",
    name: "Okinawa",
    aliases: ["Okinawa Prefecture"],
    entityType: "geographic",
    parentIds: ["ent_japan_kyushu_region"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_japan_okinawa_current"
  },
  {
    id: "ent_macao",
    name: "Macao",
    aliases: [
      "Macau",
      "Macao Special Administrative Region",
      "Macau Special Administrative Region",
      "Macao SAR",
      "Macau SAR"
    ],
    entityType: "geographic",
    parentIds: ["ent_china"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_macao_current"
  },
  {
    id: "ent_mongolia",
    name: "Mongolia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_mongolia_current"
  },
  {
    id: "ent_north_korea",
    name: "North Korea",
    aliases: [
      "Democratic People's Republic of Korea",
      "DPRK"
    ],
    entityType: "geographic",
    parentIds: ["ent_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_north_korea_current"
  },
  {
    id: "ent_south_korea",
    name: "South Korea",
    aliases: [
      "Republic of Korea",
      "ROK"
    ],
    entityType: "geographic",
    parentIds: ["ent_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_south_korea_current"
  },
  {
    id: "ent_taiwan",
    name: "Taiwan",
    aliases: [
      "Republic of China",
      "ROC"
    ],
    entityType: "geographic",
    parentIds: ["ent_eastern_asia"],
    tags: ["sovereign", "country", "current", "disputed"],
    defaultVariantId: "var_taiwan_current"
  },

  /*
    South-eastern Asia.
  */
  {
    id: "ent_brunei",
    name: "Brunei",
    aliases: ["Brunei Darussalam"],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_brunei_current"
  },
  {
    id: "ent_cambodia",
    name: "Cambodia",
    aliases: ["Kingdom of Cambodia"],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_cambodia_current"
  },
  {
    id: "ent_indonesia",
    name: "Indonesia",
    aliases: ["Republic of Indonesia"],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_indonesia_current"
  },
  {
    id: "ent_laos",
    name: "Laos",
    aliases: [
      "Lao People's Democratic Republic",
      "Lao PDR"
    ],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_laos_current"
  },
  {
    id: "ent_malaysia",
    name: "Malaysia",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_malaysia_current"
  },
  {
    id: "ent_myanmar",
    name: "Myanmar",
    aliases: [
      "Republic of the Union of Myanmar",
      "Burma"
    ],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_myanmar_current"
  },
  {
    id: "ent_philippines",
    name: "Philippines",
    aliases: [
      "The Philippines",
      "Republic of the Philippines"
    ],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_philippines_current"
  },
  {
    id: "ent_singapore",
    name: "Singapore",
    aliases: ["Republic of Singapore"],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_singapore_current"
  },
  {
    id: "ent_thailand",
    name: "Thailand",
    aliases: [
      "Kingdom of Thailand",
      "Siam"
    ],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_thailand_current"
  },
  {
    id: "ent_timor_leste",
    name: "Timor-Leste",
    aliases: [
      "East Timor",
      "Democratic Republic of Timor-Leste"
    ],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_timor_leste_current"
  },
  {
    id: "ent_vietnam",
    name: "Vietnam",
    aliases: [
      "Viet Nam",
      "Socialist Republic of Vietnam"
    ],
    entityType: "geographic",
    parentIds: ["ent_south_eastern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_vietnam_current"
  },

  /*
    Southern Asia.
  */
  {
    id: "ent_afghanistan",
    name: "Afghanistan",
    aliases: ["Islamic Emirate of Afghanistan"],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_afghanistan_current"
  },
  {
    id: "ent_bangladesh",
    name: "Bangladesh",
    aliases: ["People's Republic of Bangladesh"],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_bangladesh_current"
  },
  {
    id: "ent_bhutan",
    name: "Bhutan",
    aliases: ["Kingdom of Bhutan"],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_bhutan_current"
  },
  {
    id: "ent_india",
    name: "India",
    aliases: [
      "Republic of India",
      "Bharat"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_india_current"
  },
  {
    id: "ent_iran",
    name: "Iran",
    aliases: [
      "Islamic Republic of Iran",
      "Persia"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_iran_current"
  },
  {
    id: "ent_maldives",
    name: "Maldives",
    aliases: [
      "The Maldives",
      "Republic of Maldives"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_maldives_current"
  },
  {
    id: "ent_nepal",
    name: "Nepal",
    aliases: ["Federal Democratic Republic of Nepal"],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_nepal_current"
  },
  {
    id: "ent_pakistan",
    name: "Pakistan",
    aliases: ["Islamic Republic of Pakistan"],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_pakistan_current"
  },
  {
    id: "ent_sri_lanka",
    name: "Sri Lanka",
    aliases: [
      "Democratic Socialist Republic of Sri Lanka",
      "Ceylon"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_sri_lanka_current"
  },

  /*
    Asia and transcontinental Europe-linked states.
  */
  {
    id: "ent_abkhazia",
    name: "Abkhazia",
    aliases: [
      "Republic of Abkhazia",
      "Apsny"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: [
      "sovereign",
      "country",
      "current",
      "partially_recognised",
      "disputed"
    ],
    defaultVariantId: "var_abkhazia_current"
  },
  {
    id: "ent_armenia",
    name: "Armenia",
    aliases: [
      "Republic of Armenia",
      "Hayastan"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_armenia_current"
  },
  {
    id: "ent_azerbaijan",
    name: "Azerbaijan",
    aliases: ["Republic of Azerbaijan"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_azerbaijan_current"
  },
  {
    id: "ent_georgia",
    name: "Georgia",
    aliases: ["Sakartvelo"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_georgia_current"
  },
  {
    id: "ent_kazakhstan",
    name: "Kazakhstan",
    aliases: [
      "Republic of Kazakhstan",
      "Qazaqstan"
    ],
    entityType: "geographic",
    parentIds: ["ent_central_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_kazakhstan_current"
  },
  {
    id: "ent_kyrgyzstan",
    name: "Kyrgyzstan",
    aliases: ["Kyrgyz Republic"],
    entityType: "geographic",
    parentIds: ["ent_central_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_kyrgyzstan_current"
  },
  {
    id: "ent_tajikistan",
    name: "Tajikistan",
    aliases: ["Republic of Tajikistan"],
    entityType: "geographic",
    parentIds: ["ent_central_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_tajikistan_current"
  },
  {
    id: "ent_turkmenistan",
    name: "Turkmenistan",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_central_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_turkmenistan_current"
  },
  {
    id: "ent_uzbekistan",
    name: "Uzbekistan",
    aliases: ["Republic of Uzbekistan"],
    entityType: "geographic",
    parentIds: ["ent_central_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_uzbekistan_current"
  },
  {
    id: "ent_russia",
    name: "Russia",
    aliases: ["Russian Federation"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_russia_current"
  },
  {
    id: "ent_south_ossetia",
    name: "South Ossetia",
    aliases: [
      "Republic of South Ossetia",
      "State of Alania",
      "Tskhinvali Region"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: [
      "sovereign",
      "country",
      "current",
      "partially_recognised",
      "disputed"
    ],
    defaultVariantId: "var_south_ossetia_current"
  },
  {
    id: "ent_turkey",
    name: "Turkey",
    aliases: [
      "Türkiye",
      "Republic of Türkiye",
      "Republic of Turkey"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_turkey_current"
  },
  /*
    Western Asia — additional UN M49 countries and areas.
  */
  {
    id: "ent_bahrain",
    name: "Bahrain",
    aliases: ["Kingdom of Bahrain"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_bahrain_current"
  },
  {
    id: "ent_iraq",
    name: "Iraq",
    aliases: ["Republic of Iraq"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_iraq_current"
  },
  {
    id: "ent_israel",
    name: "Israel",
    aliases: ["State of Israel"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_israel_current"
  },
  {
    id: "ent_jordan",
    name: "Jordan",
    aliases: ["Hashemite Kingdom of Jordan"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_jordan_current"
  },
  {
    id: "ent_kuwait",
    name: "Kuwait",
    aliases: ["State of Kuwait"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_kuwait_current"
  },
  {
    id: "ent_lebanon",
    name: "Lebanon",
    aliases: ["Lebanese Republic"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_lebanon_current"
  },
  {
    id: "ent_oman",
    name: "Oman",
    aliases: ["Sultanate of Oman"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_oman_current"
  },
  {
    id: "ent_qatar",
    name: "Qatar",
    aliases: ["State of Qatar"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_qatar_current"
  },
  {
    id: "ent_saudi_arabia",
    name: "Saudi Arabia",
    aliases: ["Kingdom of Saudi Arabia"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_saudi_arabia_current"
  },
  {
    id: "ent_palestine",
    name: "Palestine",
    aliases: [
      "State of Palestine",
      "Palestinian Territories"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: [
      "sovereign",
      "country",
      "current",
      "recognised",
      "disputed"
    ],
    defaultVariantId: "var_palestine_current"
  },
  {
    id: "ent_syria",
    name: "Syria",
    aliases: ["Syrian Arab Republic"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_syria_current"
  },
  {
    id: "ent_united_arab_emirates",
    name: "United Arab Emirates",
    aliases: [
      "UAE",
      "The Emirates"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_united_arab_emirates_current"
  },
  {
    id: "ent_yemen",
    name: "Yemen",
    aliases: ["Republic of Yemen"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_yemen_current"
  },

  /*
    Europe.
  */
  /*
    Europe — first-pass national, territorial and disputed entities.
  */
  {
    id: "ent_aland",
    name: "Åland",
    aliases: ["Åland Islands"],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_aland_current"
  },
  {
    id: "ent_akrotiri_and_dhekelia",
    name: "Akrotiri and Dhekelia",
    aliases: [
      "Sovereign Base Areas of Akrotiri and Dhekelia",
      "Sovereign Base Areas",
      "SBAs"
    ],
    entityType: "geographic",
    parentIds: ["ent_cyprus"],
    administeringEntityIds: ["ent_united_kingdom"],
    officialRepresentationVariantIds: [
      "var_united_kingdom_current"
    ],
    tags: [
      "dependency",
      "territory",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: null
  },
  {
    id: "ent_albania",
    name: "Albania",
    aliases: ["Republic of Albania"],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_albania_current"
  },
  {
    id: "ent_andorra",
    name: "Andorra",
    aliases: ["Principality of Andorra"],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_andorra_current"
  },
  {
    id: "ent_austria",
    name: "Austria",
    aliases: ["Republic of Austria"],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_austria_current"
  },
  {
    id: "ent_austria_burgenland",
    name: "Burgenland",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_burgenland_state_current"
  },
  {
    id: "ent_austria_carinthia",
    name: "Carinthia",
    aliases: ["Kärnten", "Kaernten"],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_carinthia_state_current"
  },
  {
    id: "ent_austria_lower_austria",
    name: "Lower Austria",
    aliases: ["Niederösterreich", "Niederoesterreich"],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_lower_austria_state_current"
  },
  {
    id: "ent_austria_salzburg",
    name: "Salzburg",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_salzburg_state_current"
  },
  {
    id: "ent_austria_styria",
    name: "Styria",
    aliases: ["Steiermark"],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_styria_state_current"
  },
  {
    id: "ent_austria_tyrol",
    name: "Tyrol",
    aliases: ["Tirol"],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_tyrol_state_current"
  },
  {
    id: "ent_austria_upper_austria",
    name: "Upper Austria",
    aliases: ["Oberösterreich", "Oberoesterreich"],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_upper_austria_state_current"
  },
  {
    id: "ent_austria_vienna",
    name: "Vienna",
    aliases: ["Wien"],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_vienna_state_current"
  },
  {
    id: "ent_austria_vorarlberg",
    name: "Vorarlberg",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_austria"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_austria_vorarlberg_state_current"
  },
  {
    id: "ent_belarus",
    name: "Belarus",
    aliases: ["Republic of Belarus"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_belarus_current"
  },
  {
    id: "ent_belgium",
    name: "Belgium",
    aliases: ["Kingdom of Belgium"],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_belgium_current"
  },

  /*
    Belgium.

    Flanders and Wallonia are modelled as first-level structural regions
    without default variants in this dataset. Brussels-Capital Region has a
    selectable regional flag. The ten provinces sit beneath their territorial
    regions and are not tagged as first-level subdivisions.
  */
  {
    id: "ent_belgium_brussels_capital_region",
    name: "Brussels-Capital Region",
    aliases: [
      "Brussels Region",
      "Brussels-Capital",
      "Brussels Capital Region",
      "Région de Bruxelles-Capitale",
      "Region de Bruxelles-Capitale",
      "Brussels Hoofdstedelijk Gewest"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_belgium_brussels_capital_region_current"
  },
  {
    id: "ent_belgium_flanders",
    name: "Flanders",
    aliases: [
      "Flemish Region",
      "Vlaams Gewest",
      "Vlaanderen"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: null
  },
  {
    id: "ent_belgium_antwerp",
    name: "Antwerp",
    aliases: [
      "Province of Antwerp",
      "Antwerpen"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_flanders"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_antwerp_current"
  },
  {
    id: "ent_belgium_east_flanders",
    name: "East Flanders",
    aliases: [
      "Province of East Flanders",
      "Oost-Vlaanderen",
      "Oost Vlaanderen"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_flanders"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_east_flanders_current"
  },
  {
    id: "ent_belgium_flemish_brabant",
    name: "Flemish Brabant",
    aliases: [
      "Province of Flemish Brabant",
      "Vlaams-Brabant",
      "Vlaams Brabant"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_flanders"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_flemish_brabant_current"
  },
  {
    id: "ent_belgium_limburg",
    name: "Limburg",
    aliases: [
      "Province of Limburg",
      "Limburg (Belgium)",
      "Belgian Limburg"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_flanders"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_limburg_current"
  },
  {
    id: "ent_belgium_west_flanders",
    name: "West Flanders",
    aliases: [
      "Province of West Flanders",
      "West-Vlaanderen",
      "West Vlaanderen"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_flanders"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_west_flanders_current"
  },
  {
    id: "ent_belgium_wallonia",
    name: "Wallonia",
    aliases: [
      "Walloon Region",
      "Région wallonne",
      "Region wallonne",
      "Wallonie"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: null
  },
  {
    id: "ent_belgium_hainaut",
    name: "Hainaut",
    aliases: [
      "Province of Hainaut",
      "Henegouwen"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_wallonia"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_hainaut_current"
  },
  {
    id: "ent_belgium_liege",
    name: "Liège",
    aliases: [
      "Liege",
      "Province of Liège",
      "Province of Liege",
      "Luik"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_wallonia"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_liege_current"
  },
  {
    id: "ent_belgium_luxembourg",
    name: "Luxembourg",
    aliases: [
      "Province of Luxembourg",
      "Luxembourg (Belgium)",
      "Belgian Luxembourg"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_wallonia"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_luxembourg_current"
  },
  {
    id: "ent_belgium_namur",
    name: "Namur",
    aliases: [
      "Province of Namur",
      "Namen"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_wallonia"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_namur_current"
  },
  {
    id: "ent_belgium_walloon_brabant",
    name: "Walloon Brabant",
    aliases: [
      "Province of Walloon Brabant",
      "Brabant wallon",
      "Waals-Brabant",
      "Waals Brabant"
    ],
    entityType: "geographic",
    parentIds: ["ent_belgium_wallonia"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_belgium_walloon_brabant_current"
  },
  {
    id: "ent_bosnia_and_herzegovina",
    name: "Bosnia and Herzegovina",
    aliases: [
      "Bosnia-Herzegovina",
      "Bosnia"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_bosnia_and_herzegovina_current"
  },
  {
    id: "ent_bulgaria",
    name: "Bulgaria",
    aliases: ["Republic of Bulgaria"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_bulgaria_current"
  },
  {
    id: "ent_croatia",
    name: "Croatia",
    aliases: ["Republic of Croatia"],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_croatia_current"
  },
  {
    id: "ent_cyprus",
    name: "Cyprus",
    aliases: ["Republic of Cyprus"],
    entityType: "geographic",
    parentIds: ["ent_western_asia"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_cyprus_current"
  },
  {
    id: "ent_czechia",
    name: "Czechia",
    aliases: ["Czech Republic"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_czechia_current"
  },
  /*
    Czech regions.

    These are direct first-level subdivision children of Czechia.
  */
  {
    id: "ent_czechia_central_bohemian",
    name: "Central Bohemian",
    aliases: [
      "Central Bohemian Region",
      "Středočeský Region",
      "Stredocesky Region",
      "Středočeský kraj",
      "Stredocesky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_central_bohemian_current"
  },
  {
    id: "ent_czechia_hradec_kralove",
    name: "Hradec Králové",
    aliases: [
      "Hradec Kralove",
      "Hradec Králové Region",
      "Hradec Kralove Region",
      "Královéhradecký Region",
      "Kralovehradecky Region",
      "Královéhradecký kraj",
      "Kralovehradecky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_hradec_kralove_current"
  },
  {
    id: "ent_czechia_karlovy_vary",
    name: "Karlovy Vary",
    aliases: [
      "Karlovy Vary Region",
      "Carlsbad Region",
      "Karlovarský Region",
      "Karlovarsky Region",
      "Karlovarský kraj",
      "Karlovarsky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_karlovy_vary_current"
  },
  {
    id: "ent_czechia_liberec",
    name: "Liberec",
    aliases: [
      "Liberec Region",
      "Liberecký Region",
      "Liberecky Region",
      "Liberecký kraj",
      "Liberecky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_liberec_current"
  },
  {
    id: "ent_czechia_moravian_silesian",
    name: "Moravian-Silesian",
    aliases: [
      "Moravian Silesian",
      "Moravian-Silesian Region",
      "Moravian Silesian Region",
      "Moravskoslezský Region",
      "Moravskoslezsky Region",
      "Moravskoslezský kraj",
      "Moravskoslezsky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_moravian_silesian_current"
  },
  {
    id: "ent_czechia_olomouc",
    name: "Olomouc",
    aliases: [
      "Olomouc Region",
      "Olomoucký Region",
      "Olomoucky Region",
      "Olomoucký kraj",
      "Olomoucky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_olomouc_current"
  },
  {
    id: "ent_czechia_pardubice",
    name: "Pardubice",
    aliases: [
      "Pardubice Region",
      "Pardubický Region",
      "Pardubicky Region",
      "Pardubický kraj",
      "Pardubicky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_pardubice_current"
  },
  {
    id: "ent_czechia_plzen",
    name: "Plzeň",
    aliases: [
      "Plzen",
      "Pilsen",
      "Plzeň Region",
      "Plzen Region",
      "Pilsen Region",
      "Plzeňský Region",
      "Plzensky Region",
      "Plzeňský kraj",
      "Plzensky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_plzen_current"
  },
  {
    id: "ent_czechia_prague",
    name: "Prague",
    aliases: [
      "Capital City of Prague",
      "Prague Region",
      "Praha",
      "Hlavní město Praha",
      "Hlavni mesto Praha"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_prague_current"
  },
  {
    id: "ent_czechia_south_bohemian",
    name: "South Bohemian",
    aliases: [
      "South Bohemian Region",
      "South Bohemia",
      "Jihočeský Region",
      "Jihocesky Region",
      "Jihočeský kraj",
      "Jihocesky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_south_bohemian_current"
  },
  {
    id: "ent_czechia_south_moravian",
    name: "South Moravian",
    aliases: [
      "South Moravian Region",
      "South Moravia",
      "Jihomoravský Region",
      "Jihomoravsky Region",
      "Jihomoravský kraj",
      "Jihomoravsky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_south_moravian_current"
  },
  {
    id: "ent_czechia_usti_nad_labem",
    name: "Ústí nad Labem",
    aliases: [
      "Usti nad Labem",
      "Ústí nad Labem Region",
      "Usti nad Labem Region",
      "Ústecký Region",
      "Ustecky Region",
      "Ústecký kraj",
      "Ustecky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_usti_nad_labem_current"
  },
  {
    id: "ent_czechia_vysocina",
    name: "Vysočina",
    aliases: [
      "Vysocina",
      "Vysočina Region",
      "Vysocina Region",
      "Kraj Vysočina",
      "Kraj Vysocina"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_vysocina_current"
  },
  {
    id: "ent_czechia_zlin",
    name: "Zlín",
    aliases: [
      "Zlin",
      "Zlín Region",
      "Zlin Region",
      "Zlínský Region",
      "Zlinsky Region",
      "Zlínský kraj",
      "Zlinsky kraj"
    ],
    entityType: "geographic",
    parentIds: ["ent_czechia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_czechia_zlin_current"
  },
  {
    id: "ent_estonia",
    name: "Estonia",
    aliases: ["Republic of Estonia"],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_estonia_current"
  },
  {
    id: "ent_estonia_harju",
    name: "Harju",
    aliases: [
      "Harju County",
      "Harju maakond",
      "Harjumaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_harju_current"
  },
  {
    id: "ent_estonia_hiiu",
    name: "Hiiu",
    aliases: [
      "Hiiu County",
      "Hiiu maakond",
      "Hiiumaa",
      "Hiiumaa County"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_hiiu_current"
  },
  {
    id: "ent_estonia_ida_viru",
    name: "Ida-Viru",
    aliases: [
      "Ida-Viru County",
      "Ida Viru County",
      "Ida-Viru maakond",
      "Ida-Virumaa",
      "Ida Virumaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_ida_viru_current"
  },
  {
    id: "ent_estonia_jarva",
    name: "Järva",
    aliases: [
      "Jarva",
      "Järva County",
      "Jarva County",
      "Järva maakond",
      "Jarva maakond",
      "Järvamaa",
      "Jarvamaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_jarva_current"
  },
  {
    id: "ent_estonia_jogeva",
    name: "Jõgeva",
    aliases: [
      "Jogeva",
      "Jõgeva County",
      "Jogeva County",
      "Jõgeva maakond",
      "Jogeva maakond",
      "Jõgevamaa",
      "Jogevamaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_jogeva_current"
  },
  {
    id: "ent_estonia_laane",
    name: "Lääne",
    aliases: [
      "Laane",
      "Lääne County",
      "Laane County",
      "Lääne maakond",
      "Laane maakond",
      "Läänemaa",
      "Laanemaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_laane_current"
  },
  {
    id: "ent_estonia_laane_viru",
    name: "Lääne-Viru",
    aliases: [
      "Laane-Viru",
      "Lääne Viru",
      "Laane Viru",
      "Lääne-Viru County",
      "Laane-Viru County",
      "Lääne Viru County",
      "Laane Viru County",
      "Lääne-Viru maakond",
      "Laane-Viru maakond",
      "Lääne-Virumaa",
      "Laane-Virumaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_laane_viru_current"
  },
  {
    id: "ent_estonia_parnu",
    name: "Pärnu",
    aliases: [
      "Parnu",
      "Pärnu County",
      "Parnu County",
      "Pärnu maakond",
      "Parnu maakond",
      "Pärnumaa",
      "Parnumaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_parnu_current"
  },
  {
    id: "ent_estonia_polva",
    name: "Põlva",
    aliases: [
      "Polva",
      "Põlva County",
      "Polva County",
      "Põlva maakond",
      "Polva maakond",
      "Põlvamaa",
      "Polvamaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_polva_current"
  },
  {
    id: "ent_estonia_rapla",
    name: "Rapla",
    aliases: [
      "Rapla County",
      "Rapla maakond",
      "Raplamaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_rapla_current"
  },
  {
    id: "ent_estonia_saare",
    name: "Saare",
    aliases: [
      "Saare County",
      "Saare maakond",
      "Saaremaa",
      "Saaremaa County"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_saare_current"
  },
  {
    id: "ent_estonia_tartu",
    name: "Tartu",
    aliases: [
      "Tartu County",
      "Tartu maakond",
      "Tartumaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_tartu_current"
  },
  {
    id: "ent_estonia_valga",
    name: "Valga",
    aliases: [
      "Valga County",
      "Valga maakond",
      "Valgamaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_valga_current"
  },
  {
    id: "ent_estonia_viljandi",
    name: "Viljandi",
    aliases: [
      "Viljandi County",
      "Viljandi maakond",
      "Viljandimaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_viljandi_current"
  },
  {
    id: "ent_estonia_voru",
    name: "Võru",
    aliases: [
      "Voru",
      "Võru County",
      "Voru County",
      "Võru maakond",
      "Voru maakond",
      "Võrumaa",
      "Vorumaa"
  ],
    entityType: "geographic",
    parentIds: ["ent_estonia"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_estonia_voru_current"
  },
  {
    id: "ent_faroe_islands",
    name: "Faroe Islands",
    aliases: [
      "Føroyar",
      "Færøerne"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    constituentOfEntityIds: ["ent_kingdom_of_denmark"],
    tags: [
      "territory",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_faroe_islands_current"
  },
  {
    id: "ent_finland",
    name: "Finland",
    aliases: [
      "Republic of Finland",
      "Suomi"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_finland_current"
  },
  {
    id: "ent_finland_central_finland",
    name: "Central Finland",
    aliases: [
      "Keski-Suomi",
      "Mellersta Finland"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_central_finland_current"
  },
  {
    id: "ent_finland_central_ostrobothnia",
    name: "Central Ostrobothnia",
    aliases: [
      "Keski-Pohjanmaa",
      "Mellersta Österbotten",
      "Mellersta Osterbotten"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_central_ostrobothnia_current"
  },
  {
    id: "ent_finland_kainuu",
    name: "Kainuu",
    aliases: [
      "Kajanaland"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_kainuu_current"
  },
  {
    id: "ent_finland_kanta_hame",
    name: "Kanta-Häme",
    aliases: [
      "Kanta-Hame",
      "Tavastia Proper",
      "Egentliga Tavastland"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_kanta_hame_current"
  },
  {
    id: "ent_finland_north_karelia",
    name: "North Karelia",
    aliases: [
      "Pohjois-Karjala",
      "Norra Karelen"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_north_karelia_current"
  },
  {
    id: "ent_finland_north_savo",
    name: "North Savo",
    aliases: [
      "Northern Savonia",
      "Pohjois-Savo",
      "Norra Savolax"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_north_savo_current"
  },
  {
    id: "ent_finland_paijat_hame",
    name: "Päijät-Häme",
    aliases: [
      "Paijat-Hame",
      "Päijänne Tavastia",
      "Paijanne Tavastia",
      "Päijänne-Tavastia",
      "Paijanne-Tavastia",
      "Päijät-Häme Region"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_paijat_hame_current"
  },
  {
    id: "ent_finland_pirkanmaa",
    name: "Pirkanmaa",
    aliases: [
      "Tampere Region",
      "Birkaland"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_pirkanmaa_current"
  },
  {
    id: "ent_finland_satakunta",
    name: "Satakunta",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_satakunta_current"
  },
  {
    id: "ent_finland_south_ostrobothnia",
    name: "South Ostrobothnia",
    aliases: [
      "Southern Ostrobothnia",
      "Etelä-Pohjanmaa",
      "Etela-Pohjanmaa",
      "Södra Österbotten",
      "Sodra Osterbotten"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_south_ostrobothnia_current"
  },
  {
    id: "ent_finland_south_savo",
    name: "South Savo",
    aliases: [
      "Southern Savonia",
      "Etelä-Savo",
      "Etela-Savo",
      "Södra Savolax",
      "Sodra Savolax"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_south_savo_current"
  },
  {
    id: "ent_finland_uusimaa",
    name: "Uusimaa",
    aliases: [
      "Nyland",
      "Helsinki-Uusimaa",
      "Helsinki Uusimaa"
    ],
    entityType: "geographic",
    parentIds: ["ent_finland"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_finland_uusimaa_current"
  },
  {
    id: "ent_germany",
    name: "Germany",
    aliases: [
      "Federal Republic of Germany",
      "Deutschland"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_germany_current"
  },
  {
    id: "ent_germany_baden_wurttemberg",
    name: "Baden-Württemberg",
    aliases: ["Baden-Wuerttemberg"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_baden_wurttemberg_current"
  },
  {
    id: "ent_germany_bavaria",
    name: "Bavaria",
    aliases: ["Bayern", "Free State of Bavaria", "Freistaat Bayern"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_bavaria_current_lozengy"
  },
  {
    id: "ent_germany_berlin",
    name: "Berlin",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_berlin_current"
  },
  {
    id: "ent_germany_brandenburg",
    name: "Brandenburg",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_brandenburg_current"
  },
  {
    id: "ent_germany_bremen",
    name: "Bremen",
    aliases: ["Free Hanseatic City of Bremen", "Freie Hansestadt Bremen"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_bremen_current"
  },
  {
    id: "ent_germany_hamburg",
    name: "Hamburg",
    aliases: ["Free and Hanseatic City of Hamburg", "Freie und Hansestadt Hamburg"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_hamburg_current"
  },
  {
    id: "ent_germany_hesse",
    name: "Hesse",
    aliases: ["Hessen"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_hesse_current"
  },
  {
    id: "ent_germany_lower_saxony",
    name: "Lower Saxony",
    aliases: ["Niedersachsen"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_lower_saxony_current"
  },
  {
    id: "ent_germany_mecklenburg_western_pomerania",
    name: "Mecklenburg-Vorpommern",
    aliases: ["Mecklenburg-Western Pomerania"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_mecklenburg_western_pomerania_current"
  },
  {
    id: "ent_germany_north_rhine_westphalia",
    name: "North Rhine-Westphalia",
    aliases: ["Nordrhein-Westfalen"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_north_rhine_westphalia_current"
  },
  {
    id: "ent_germany_rhineland_palatinate",
    name: "Rhineland-Palatinate",
    aliases: ["Rheinland-Pfalz"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_rhineland_palatinate_current"
  },
  {
    id: "ent_germany_saarland",
    name: "Saarland",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_saarland_current"
  },
  {
    id: "ent_germany_saxony",
    name: "Saxony",
    aliases: ["Sachsen", "Free State of Saxony", "Freistaat Sachsen"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_saxony_current"
  },
  {
    id: "ent_germany_saxony_anhalt",
    name: "Saxony-Anhalt",
    aliases: ["Sachsen-Anhalt"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_saxony_anhalt_current"
  },
  {
    id: "ent_germany_schleswig_holstein",
    name: "Schleswig-Holstein",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_schleswig_holstein_current"
  },
  {
    id: "ent_germany_thuringia",
    name: "Thuringia",
    aliases: ["Thüringen", "Free State of Thuringia", "Freistaat Thüringen"],
    entityType: "geographic",
    parentIds: ["ent_germany"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_germany_thuringia_current"
  },
  {
    id: "ent_gibraltar",
    name: "Gibraltar",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    administeringEntityIds: ["ent_united_kingdom"],
    tags: [
      "territory",
      "overseas",
      "current",
      "recognised",
      "disputed"
    ],
    defaultVariantId: "var_gibraltar_current"
  },
  {
    id: "ent_greece",
    name: "Greece",
    aliases: [
      "Hellenic Republic",
      "Hellas"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_greece_current"
  },
  {
    id: "ent_hungary",
    name: "Hungary",
    aliases: ["Magyarország"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_hungary_current"
  },
  {
    id: "ent_iceland",
    name: "Iceland",
    aliases: ["Republic of Iceland"],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_iceland_current"
  },
  {
    id: "ent_ireland",
    name: "Ireland",
    aliases: [
      "Republic of Ireland",
      "Éire"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_ireland_current"
  },
  {
    id: "ent_italy",
    name: "Italy",
    aliases: [
      "Italian Republic",
      "Italia"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_italy_current"
  },,
  /*
    Italy and its current regions.
  */,
  {
    id: "ent_italy_abruzzo",
    name: "Abruzzo",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_abruzzo_current"
  },
  {
    id: "ent_italy_aosta_valley",
    name: "Aosta Valley",
    aliases: [
      "Valle d'Aosta",
      "Vallée d'Aoste"
    ],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "autonomous", "current"],
    defaultVariantId: "var_italy_aosta_valley_current"
  },
  {
    id: "ent_italy_apulia",
    name: "Apulia",
    aliases: ["Puglia"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_apulia_current"
  },
  {
    id: "ent_italy_basilicata",
    name: "Basilicata",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_basilicata_current"
  },
  {
    id: "ent_italy_calabria",
    name: "Calabria",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_calabria_current"
  },
  {
    id: "ent_italy_campania",
    name: "Campania",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_campania_current"
  },
  {
    id: "ent_italy_emilia_romagna",
    name: "Emilia-Romagna",
    aliases: ["Emilia Romagna"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_emilia_romagna_current"
  },
  {
    id: "ent_italy_friuli_venezia_giulia",
    name: "Friuli-Venezia Giulia",
    aliases: ["Friuli Venezia Giulia"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "autonomous", "current"],
    defaultVariantId: "var_italy_friuli_venezia_giulia_current"
  },
  {
    id: "ent_italy_lazio",
    name: "Lazio",
    aliases: ["Latium"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_lazio_current"
  },
  {
    id: "ent_italy_liguria",
    name: "Liguria",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_liguria_current"
  },
  {
    id: "ent_italy_lombardy",
    name: "Lombardy",
    aliases: ["Lombardia"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_lombardy_current"
  },
  {
    id: "ent_italy_marche",
    name: "Marche",
    aliases: ["The Marches"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_marche_current"
  },
  {
    id: "ent_italy_molise",
    name: "Molise",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_molise_current"
  },
  {
    id: "ent_italy_piedmont",
    name: "Piedmont",
    aliases: ["Piemonte"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_piedmont_current"
  },
  {
    id: "ent_italy_sardinia",
    name: "Sardinia",
    aliases: ["Sardegna"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "autonomous", "current"],
    defaultVariantId: "var_italy_sardinia_current"
  },
  {
    id: "ent_italy_sicily",
    name: "Sicily",
    aliases: ["Sicilia"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "autonomous", "current"],
    defaultVariantId: "var_italy_sicily_current"
  },
  {
    id: "ent_italy_trentino_alto_adige_sudtirol",
    name: "Trentino-Alto Adige/Südtirol",
    aliases: [
      "Trentino-Alto Adige",
      "Trentino-Alto Adige/Suedtirol",
      "Trentino-South Tyrol",
      "Südtirol",
      "Sudtirol"
    ],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "autonomous", "current"],
    defaultVariantId: "var_italy_trentino_alto_adige_sudtirol_current"
  },
  {
    id: "ent_italy_tuscany",
    name: "Tuscany",
    aliases: ["Toscana"],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_tuscany_current"
  },
  {
    id: "ent_italy_umbria",
    name: "Umbria",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_umbria_current"
  },
  {
    id: "ent_italy_veneto",
    name: "Veneto",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_italy_veneto_current"
  },
  {
    id: "ent_kosovo",
    name: "Kosovo",
    aliases: [
      "Republic of Kosovo",
      "Kosova"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: [
      "sovereign",
      "country",
      "current",
      "partially_recognised",
      "disputed"
    ],
    defaultVariantId: "var_kosovo_current"
  },
  {
    id: "ent_latvia",
    name: "Latvia",
    aliases: ["Republic of Latvia"],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_latvia_current"
  },
  {
    id: "ent_latvia_daugavpils",
    name: "Daugavpils",
    aliases: [
      "Daugavpils State City",
      "Daugavpils valstspilsēta"
    ],
    entityType: "geographic",
    parentIds: ["ent_latvia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_latvia_daugavpils_current"
  },
  {
    id: "ent_latvia_jelgava",
    name: "Jelgava",
    aliases: [
      "Jelgava State City",
      "Jelgava valstspilsēta"
    ],
    entityType: "geographic",
    parentIds: ["ent_latvia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_latvia_jelgava_current"
  },
  {
    id: "ent_latvia_jurmala",
    name: "Jūrmala",
    aliases: [
      "Jurmala",
      "Jūrmala State City",
      "Jurmala State City",
      "Jūrmalas valstspilsēta",
      "Jurmala valstspilsēta"
    ],
    entityType: "geographic",
    parentIds: ["ent_latvia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_latvia_jurmala_current"
  },
  {
    id: "ent_latvia_liepaja",
    name: "Liepāja",
    aliases: [
      "Liepaja",
      "Liepāja State City",
      "Liepaja State City",
      "Liepājas valstspilsēta",
      "Liepajas valstspilsēta"
    ],
    entityType: "geographic",
    parentIds: ["ent_latvia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_latvia_liepaja_current"
  },
  {
    id: "ent_latvia_rezekne",
    name: "Rēzekne",
    aliases: [
      "Rezekne",
      "Rēzekne State City",
      "Rezekne State City",
      "Rēzeknes valstspilsēta",
      "Rezeknes valstspilsēta"
    ],
    entityType: "geographic",
    parentIds: ["ent_latvia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_latvia_rezekne_current"
  },
  {
    id: "ent_latvia_riga",
    name: "Riga",
    aliases: [
      "Rīga",
      "Riga State City",
      "Rīga State City",
      "Rīgas valstspilsēta",
      "Rigas valstspilsēta"
    ],
    entityType: "geographic",
    parentIds: ["ent_latvia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_latvia_riga_current"
  },
  {
    id: "ent_latvia_ventspils",
    name: "Ventspils",
    aliases: [
      "Ventspils State City",
      "Ventspils valstspilsēta"
    ],
    entityType: "geographic",
    parentIds: ["ent_latvia"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_latvia_ventspils_current"
  },
  {
    id: "ent_liechtenstein",
    name: "Liechtenstein",
    aliases: ["Principality of Liechtenstein"],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_liechtenstein_current"
  },
  {
    id: "ent_lithuania",
    name: "Lithuania",
    aliases: ["Republic of Lithuania"],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_lithuania_current"
  },
  {
    id: "ent_lithuania_alytus_county",
    name: "Alytus County",
    aliases: [
      "Alytaus County",
      "Alytaus apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_alytus_county_current"
  },
  {
    id: "ent_lithuania_kaunas_county",
    name: "Kaunas County",
    aliases: [
      "Kauno County",
      "Kauno apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_kaunas_county_current"
  },
  {
    id: "ent_lithuania_klaipeda_county",
    name: "Klaipėda County",
    aliases: [
      "Klaipeda County",
      "Klaipėdos County",
      "Klaipedos County",
      "Klaipėdos apskritis",
      "Klaipedos apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_klaipeda_county_current"
  },
  {
    id: "ent_lithuania_marijampole_county",
    name: "Marijampolė County",
    aliases: [
      "Marijampole County",
      "Marijampolės County",
      "Marijampoles County",
      "Marijampolės apskritis",
      "Marijampoles apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_marijampole_county_current"
  },
  {
    id: "ent_lithuania_panevezys_county",
    name: "Panevėžys County",
    aliases: [
      "Panevezys County",
      "Panevėžio County",
      "Panevezio County",
      "Panevėžio apskritis",
      "Panevezio apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_panevezys_county_current"
  },
  {
    id: "ent_lithuania_siauliai_county",
    name: "Šiauliai County",
    aliases: [
      "Siauliai County",
      "Šiaulių County",
      "Siauliu County",
      "Šiaulių apskritis",
      "Siauliu apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_siauliai_county_current"
  },
  {
    id: "ent_lithuania_taurage_county",
    name: "Tauragė County",
    aliases: [
      "Taurage County",
      "Tauragės County",
      "Taurages County",
      "Tauragės apskritis",
      "Taurages apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_taurage_county_current"
  },
  {
    id: "ent_lithuania_telsiai_county",
    name: "Telšiai County",
    aliases: [
      "Telsiai County",
      "Telšių County",
      "Telsiu County",
      "Telšių apskritis",
      "Telsiu apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_telsiai_county_current"
  },
  {
    id: "ent_lithuania_utena_county",
    name: "Utena County",
    aliases: [
      "Utenos County",
      "Utenos apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_utena_county_current"
  },
  {
    id: "ent_lithuania_vilnius_county",
    name: "Vilnius County",
    aliases: [
      "Vilniaus County",
      "Vilniaus apskritis"
    ],
    entityType: "geographic",
    parentIds: ["ent_lithuania"],
    tags: ["subdivision", "first_level_subdivision", "county", "current"],
    defaultVariantId: "var_lithuania_vilnius_county_current"
  },
  {
    id: "ent_luxembourg",
    name: "Luxembourg",
    aliases: ["Grand Duchy of Luxembourg"],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_luxembourg_current"
  },
  {
    id: "ent_malta",
    name: "Malta",
    aliases: ["Republic of Malta"],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_malta_current"
  },
  {
    id: "ent_moldova",
    name: "Moldova",
    aliases: ["Republic of Moldova"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_moldova_current"
  },
  {
    id: "ent_monaco",
    name: "Monaco",
    aliases: [
      "Principality of Monaco",
      "Principauté de Monaco"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_monaco_current"
  },
  {
    id: "ent_municipality_of_monaco",
    name: "Municipality of Monaco",
    aliases: [
      "Commune de Monaco",
      "Monaco Municipality"
    ],
    entityType: "geographic",
    parentIds: ["ent_monaco"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_municipality_of_monaco_current"
  },
  {
    id: "ent_montenegro",
    name: "Montenegro",
    aliases: ["Crna Gora"],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_montenegro_current"
  },
  {
    id: "ent_north_macedonia",
    name: "North Macedonia",
    aliases: [
      "Republic of North Macedonia",
      "Macedonia"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_north_macedonia_current"
  },
  {
    id: "ent_northern_cyprus",
    name: "Northern Cyprus",
    aliases: [
      "Turkish Republic of Northern Cyprus",
      "TRNC"
    ],
    entityType: "geographic",
    parentIds: ["ent_cyprus"],
    tags: [
      "sovereign",
      "country",
      "current",
      "partially_recognised",
      "disputed"
    ],
    defaultVariantId: "var_northern_cyprus_current"
  },
  {
    id: "ent_norway",
    name: "Norway",
    aliases: [
      "Kingdom of Norway",
      "Norge"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_norway_current"
  },
  {
    id: "ent_poland",
    name: "Poland",
    aliases: [
      "Republic of Poland",
      "Polska"
    ],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_poland_current"
  },
  /*
    Polish voivodeships.

    These are direct first-level subdivision children of Poland.
  */
  {
    id: "ent_poland_greater_poland",
    name: "Greater Poland",
    aliases: [
      "Greater Poland Voivodeship",
      "Wielkopolskie Voivodeship",
      "Wielkopolskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_greater_poland_current"
  },
  {
    id: "ent_poland_holy_cross",
    name: "Holy Cross",
    aliases: [
      "Holy Cross Voivodeship",
      "Świętokrzyskie Voivodeship",
      "Swietokrzyskie Voivodeship",
      "Świętokrzyskie",
      "Swietokrzyskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_holy_cross_current"
  },
  {
    id: "ent_poland_kuyavian_pomeranian",
    name: "Kuyavian-Pomeranian",
    aliases: [
      "Kuyavian-Pomeranian Voivodeship",
      "Kuyavian Pomeranian",
      "Kujawsko-Pomorskie Voivodeship",
      "Kujawsko-Pomorskie",
      "Kujawsko Pomorskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_kuyavian_pomeranian_current"
  },
  {
    id: "ent_poland_lesser_poland",
    name: "Lesser Poland",
    aliases: [
      "Lesser Poland Voivodeship",
      "Małopolskie Voivodeship",
      "Malopolskie Voivodeship",
      "Małopolskie",
      "Malopolskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_lesser_poland_current"
  },
  {
    id: "ent_poland_lodz",
    name: "Łódź",
    aliases: [
      "Lodz",
      "Łódź Voivodeship",
      "Lodz Voivodeship",
      "Łódzkie Voivodeship",
      "Lodzkie Voivodeship",
      "Łódzkie",
      "Lodzkie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_lodz_current"
  },
  {
    id: "ent_poland_lower_silesian",
    name: "Lower Silesian",
    aliases: [
      "Lower Silesian Voivodeship",
      "Lower Silesia",
      "Dolnośląskie Voivodeship",
      "Dolnoslaskie Voivodeship",
      "Dolnośląskie",
      "Dolnoslaskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_lower_silesian_current"
  },
  {
    id: "ent_poland_lublin",
    name: "Lublin",
    aliases: [
      "Lublin Voivodeship",
      "Lubelskie Voivodeship",
      "Lubelskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_lublin_current"
  },
  {
    id: "ent_poland_lubusz",
    name: "Lubusz",
    aliases: [
      "Lubusz Voivodeship",
      "Lubuskie Voivodeship",
      "Lubuskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_lubusz_current"
  },
  {
    id: "ent_poland_masovian",
    name: "Masovian",
    aliases: [
      "Masovian Voivodeship",
      "Mazovian Voivodeship",
      "Masovia",
      "Mazovia",
      "Mazowieckie Voivodeship",
      "Mazowieckie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_masovian_current"
  },
  {
    id: "ent_poland_opole",
    name: "Opole",
    aliases: [
      "Opole Voivodeship",
      "Opolskie Voivodeship",
      "Opolskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_opole_current"
  },
  {
    id: "ent_poland_podlaskie",
    name: "Podlaskie",
    aliases: [
      "Podlaskie Voivodeship",
      "Podlasie Voivodeship",
      "Podlasie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_podlaskie_current"
  },
  {
    id: "ent_poland_pomeranian",
    name: "Pomeranian",
    aliases: [
      "Pomeranian Voivodeship",
      "Pomerania",
      "Pomorskie Voivodeship",
      "Pomorskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_pomeranian_current"
  },
  {
    id: "ent_poland_silesian",
    name: "Silesian",
    aliases: [
      "Silesian Voivodeship",
      "Silesia",
      "Śląskie Voivodeship",
      "Slaskie Voivodeship",
      "Śląskie",
      "Slaskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_silesian_current"
  },
  {
    id: "ent_poland_subcarpathian",
    name: "Subcarpathian",
    aliases: [
      "Subcarpathian Voivodeship",
      "Podkarpackie Voivodeship",
      "Podkarpackie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_subcarpathian_current"
  },
  {
    id: "ent_poland_warmian_masurian",
    name: "Warmian-Masurian",
    aliases: [
      "Warmian-Masurian Voivodeship",
      "Warmian Masurian",
      "Warmia-Masuria",
      "Warmia and Masuria",
      "Warmińsko-Mazurskie Voivodeship",
      "Warminsko-Mazurskie Voivodeship",
      "Warmińsko-Mazurskie",
      "Warminsko-Mazurskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_warmian_masurian_current"
  },
  {
    id: "ent_poland_west_pomeranian",
    name: "West Pomeranian",
    aliases: [
      "West Pomeranian Voivodeship",
      "Western Pomerania",
      "Zachodniopomorskie Voivodeship",
      "Zachodniopomorskie"
    ],
    entityType: "geographic",
    parentIds: ["ent_poland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_poland_west_pomeranian_current"
  },
  {
    id: "ent_portugal",
    name: "Portugal",
    aliases: ["Portuguese Republic"],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_portugal_current"
  },
  {
    id: "ent_romania",
    name: "Romania",
    aliases: ["România"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_romania_current"
  },
  {
    id: "ent_san_marino",
    name: "San Marino",
    aliases: [
      "Republic of San Marino",
      "Most Serene Republic of San Marino"
    ],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_san_marino_current"
  },
  {
    id: "ent_serbia",
    name: "Serbia",
    aliases: ["Republic of Serbia"],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_serbia_current"
  },
  {
    id: "ent_slovakia",
    name: "Slovakia",
    aliases: ["Slovak Republic"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_slovakia_current"
  },
  {
    id: "ent_slovenia",
    name: "Slovenia",
    aliases: ["Republic of Slovenia"],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_slovenia_current"
  },
  {
    id: "ent_svalbard_and_jan_mayen",
    name: "Svalbard and Jan Mayen Islands",
    aliases: [
      "Svalbard and Jan Mayen",
      "Svalbard og Jan Mayen"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    administeringEntityIds: ["ent_norway"],
    officialRepresentationVariantIds: [
      "var_norway_current"
    ],
    tags: ["region", "overseas", "current", "recognised"],
    defaultVariantId: null
  },
  {
    id: "ent_sweden",
    name: "Sweden",
    aliases: [
      "Kingdom of Sweden",
      "Sverige"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_sweden_current"
  },
  {
    id: "ent_switzerland",
    name: "Switzerland",
    aliases: [
      "Swiss Confederation",
      "Schweiz",
      "Suisse",
      "Svizzera",
      "Svizra"
    ],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_switzerland_current"
  },
  /*
    Swiss cantons.

    These are direct first-level subdivision children of Switzerland.
  */
  {
    id: "ent_switzerland_aargau",
    name: "Aargau",
    aliases: [
      "Canton of Aargau"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_aargau_current"
  },
  {
    id: "ent_switzerland_appenzell_ausserrhoden",
    name: "Appenzell Ausserrhoden",
    aliases: [
      "Canton of Appenzell Ausserrhoden",
      "Appenzell Outer Rhodes"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_appenzell_ausserrhoden_current"
  },
  {
    id: "ent_switzerland_appenzell_innerrhoden",
    name: "Appenzell Innerrhoden",
    aliases: [
      "Canton of Appenzell Innerrhoden",
      "Appenzell Inner Rhodes"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_appenzell_innerrhoden_current"
  },
  {
    id: "ent_switzerland_basel_landschaft",
    name: "Basel-Landschaft",
    aliases: [
      "Canton of Basel-Landschaft",
      "Basel-Country",
      "Basel Landschaft"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_basel_landschaft_current"
  },
  {
    id: "ent_switzerland_basel_stadt",
    name: "Basel-Stadt",
    aliases: [
      "Canton of Basel-Stadt",
      "Basel-City",
      "Basel Stadt"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_basel_stadt_current"
  },
  {
    id: "ent_switzerland_bern",
    name: "Bern",
    aliases: [
      "Berne",
      "Canton of Bern",
      "Canton of Berne"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_bern_current"
  },
  {
    id: "ent_switzerland_fribourg",
    name: "Fribourg",
    aliases: [
      "Freiburg",
      "Canton of Fribourg",
      "Canton of Freiburg"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_fribourg_current"
  },
  {
    id: "ent_switzerland_geneva",
    name: "Geneva",
    aliases: [
      "Genève",
      "Geneve",
      "Canton of Geneva"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_geneva_current"
  },
  {
    id: "ent_switzerland_glarus",
    name: "Glarus",
    aliases: [
      "Canton of Glarus"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_glarus_current"
  },
  {
    id: "ent_switzerland_grisons",
    name: "Grisons",
    aliases: [
      "Graubünden",
      "Graubunden",
      "Grigioni",
      "Grischun",
      "Canton of Grisons"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_grisons_current"
  },
  {
    id: "ent_switzerland_jura",
    name: "Jura",
    aliases: [
      "Canton of Jura"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_jura_current"
  },
  {
    id: "ent_switzerland_lucerne",
    name: "Lucerne",
    aliases: [
      "Luzern",
      "Canton of Lucerne",
      "Canton of Luzern"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_lucerne_current"
  },
  {
    id: "ent_switzerland_neuchatel",
    name: "Neuchâtel",
    aliases: [
      "Neuchatel",
      "Canton of Neuchâtel",
      "Canton of Neuchatel"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_neuchatel_current"
  },
  {
    id: "ent_switzerland_nidwalden",
    name: "Nidwalden",
    aliases: [
      "Canton of Nidwalden"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_nidwalden_current"
  },
  {
    id: "ent_switzerland_obwalden",
    name: "Obwalden",
    aliases: [
      "Canton of Obwalden"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_obwalden_current"
  },
  {
    id: "ent_switzerland_schaffhausen",
    name: "Schaffhausen",
    aliases: [
      "Canton of Schaffhausen"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_schaffhausen_current"
  },
  {
    id: "ent_switzerland_schwyz",
    name: "Schwyz",
    aliases: [
      "Canton of Schwyz"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_schwyz_current"
  },
  {
    id: "ent_switzerland_solothurn",
    name: "Solothurn",
    aliases: [
      "Soleure",
      "Canton of Solothurn"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_solothurn_current"
  },
  {
    id: "ent_switzerland_st_gallen",
    name: "St. Gallen",
    aliases: [
      "Saint Gallen",
      "St Gallen",
      "Sankt Gallen",
      "Canton of St. Gallen"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_st_gallen_current"
  },
  {
    id: "ent_switzerland_thurgau",
    name: "Thurgau",
    aliases: [
      "Canton of Thurgau"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_thurgau_current"
  },
  {
    id: "ent_switzerland_ticino",
    name: "Ticino",
    aliases: [
      "Tessin",
      "Canton of Ticino"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_ticino_current"
  },
  {
    id: "ent_switzerland_uri",
    name: "Uri",
    aliases: [
      "Canton of Uri"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_uri_current"
  },
  {
    id: "ent_switzerland_valais",
    name: "Valais",
    aliases: [
      "Wallis",
      "Canton of Valais",
      "Canton of Wallis"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_valais_current"
  },
  {
    id: "ent_switzerland_vaud",
    name: "Vaud",
    aliases: [
      "Canton of Vaud"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_vaud_current"
  },
  {
    id: "ent_switzerland_zug",
    name: "Zug",
    aliases: [
      "Canton of Zug"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_zug_current"
  },
  {
    id: "ent_switzerland_zurich",
    name: "Zürich",
    aliases: [
      "Zurich",
      "Canton of Zürich",
      "Canton of Zurich"
    ],
    entityType: "geographic",
    parentIds: ["ent_switzerland"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_switzerland_zurich_current"
  },
  {
    id: "ent_transnistria",
    name: "Transnistria",
    aliases: [
      "Pridnestrovian Moldavian Republic",
      "PMR",
      "Trans-Dniester"
    ],
    entityType: "geographic",
    parentIds: ["ent_moldova"],
    tags: [
      "sovereign",
      "country",
      "current",
      "unrecognised",
      "disputed"
    ],
    defaultVariantId: "var_transnistria_current_obverse"
  },
  {
    id: "ent_ukraine",
    name: "Ukraine",
    aliases: ["Україна"],
    entityType: "geographic",
    parentIds: ["ent_eastern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_ukraine_current"
  },
  {
    id: "ent_vatican_city",
    name: "Vatican City",
    aliases: [
      "Vatican City State",
      "Holy See",
      "Stato della Città del Vaticano"
    ],
    entityType: "geographic",
    parentIds: ["ent_italy"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_vatican_city_current"
  },

  {
    id: "ent_denmark",
    name: "Denmark",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    constituentOfEntityIds: [
      "ent_kingdom_of_denmark"
    ],
    tags: [
      "sovereign",
	  "country",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_denmark_current"
  },


  /*
    Denmark and its current regions.
  */
  {
    id: "ent_denmark_capital_region",
    name: "Capital Region of Denmark",
    aliases: [
      "Region Hovedstaden",
      "Hovedstaden",
      "Capital Region",
      "Danish Capital Region"
    ],
    entityType: "geographic",
    parentIds: ["ent_denmark"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_denmark_capital_region_current"
  },
  {
    id: "ent_denmark_midtjylland",
    name: "Central Denmark Region",
    aliases: [
      "Region Midtjylland",
      "Midtjylland",
      "Central Jutland Region"
    ],
    entityType: "geographic",
    parentIds: ["ent_denmark"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_denmark_midtjylland_current"
  },
  {
    id: "ent_denmark_nordjylland",
    name: "North Denmark Region",
    aliases: [
      "Region Nordjylland",
      "Nordjylland",
      "North Jutland Region"
    ],
    entityType: "geographic",
    parentIds: ["ent_denmark"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_denmark_nordjylland_current"
  },
  {
    id: "ent_denmark_sjaelland",
    name: "Region Zealand",
    aliases: [
      "Region Sjælland",
      "Region Sjaelland",
      "Sjælland",
      "Sjaelland",
      "Zealand Region"
    ],
    entityType: "geographic",
    parentIds: ["ent_denmark"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_denmark_sjaelland_current"
  },
  {
    id: "ent_denmark_syddanmark",
    name: "Region of Southern Denmark",
    aliases: [
      "Region Syddanmark",
      "Syddanmark",
      "Southern Denmark Region"
    ],
    entityType: "geographic",
    parentIds: ["ent_denmark"],
    tags: ["subdivision", "first_level_subdivision", "region", "current"],
    defaultVariantId: "var_denmark_syddanmark_current"
  },
  {
    id: "ent_france",
    name: "France",
    aliases: ["French Republic", "République française"],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_france_current"
  },
  /*
    France and its current metropolitan regions.
  */
  {
    id: "ent_france_auvergne_rhone_alpes",
    name: "Auvergne-Rhône-Alpes",
    aliases: ["Auvergne-Rhone-Alpes", "Auvergne Rhone Alpes"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_auvergne_rhone_alpes_current"
  },
  {
    id: "ent_france_bourgogne_franche_comte",
    name: "Bourgogne-Franche-Comté",
    aliases: ["Bourgogne-Franche-Comte", "Burgundy Franche Comte",
	"Bourgogne Franche Comte"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_bourgogne_franche_comte_current"
  },
  {
    id: "ent_france_brittany",
    name: "Brittany",
    aliases: ["Bretagne"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_brittany_current"
  },
  {
    id: "ent_france_centre_val_de_loire",
    name: "Centre-Val de Loire",
    aliases: ["Centre Val de Loire"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_centre_val_de_loire_current"
  },
  {
    id: "ent_france_corsica",
    name: "Corsica",
    aliases: ["Corse"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_corsica_current"
  },
  {
    id: "ent_france_grand_est",
    name: "Grand Est",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_grand_est_current"
  },
  {
    id: "ent_france_hauts_de_france",
    name: "Hauts-de-France",
    aliases: ["Hauts de France"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_hauts_de_france_current"
  },
  {
    id: "ent_france_ile_de_france",
    name: "Île-de-France",
    aliases: ["Ile-de-France", "Ile de France"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_ile_de_france_current"
  },
  {
    id: "ent_france_normandy",
    name: "Normandy",
    aliases: ["Normandie"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_normandy_current"
  },
  {
    id: "ent_france_nouvelle_aquitaine",
    name: "Nouvelle-Aquitaine",
    aliases: ["Nouvelle Aquitaine"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_nouvelle_aquitaine_current"
  },
  {
    id: "ent_france_occitania",
    name: "Occitania",
    aliases: ["Occitanie", "Occitaine"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_occitania_current"
  },
  {
    id: "ent_france_pays_de_la_loire",
    name: "Pays de la Loire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_pays_de_la_loire_current"
  },
  {
    id: "ent_france_provence_alpes_cote_dazur",
    name: "Provence-Alpes-Côte d'Azur",
    aliases: ["Provence-Alpes-Cote d'Azur", "PACA", "Provence"],
    entityType: "geographic",
    parentIds: ["ent_france"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_france_provence_alpes_cote_dazur_current"
  },

  {
    id: "ent_isle_of_man",
    name: "Isle of Man",
    aliases: [
      "Mann"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: [
      "dependency",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_isle_of_man_current",
  },
  {
    id: "ent_kingdom_of_denmark",
    name: "Kingdom of Denmark",
    aliases: [
      "Danish Realm",
      "Unity of the Realm",
    ],
    entityType: "political",
    parentIds: [],
    tags: [
      "sovereign",
      "composite_state",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_kingdom_of_denmark_current"
  },
  {
    id: "ent_kingdom_of_the_netherlands",
    name: "Kingdom of the Netherlands",
    aliases: [],
    entityType: "political",
    parentIds: [],
    tags: ["sovereign", "composite_state", "current", "recognised"],
    defaultVariantId: "var_kingdom_of_the_netherlands_current"
  },
  {
    id: "ent_netherlands",
    name: "The Netherlands",
    aliases: [
	  "Netherlands", 
	  "Holland"
	  ],
    entityType: "geographic",
    parentIds: ["ent_western_europe"],
	constituentOfEntityIds: [
      "ent_kingdom_of_the_netherlands"
    ],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_netherlands_current"
  },
  /*
    Dutch provinces.

    These are direct first-level subdivision children of the European
    Netherlands. The Caribbean Netherlands remains geographically under the
    Caribbean and is linked politically through administration.
  */
  {
    id: "ent_netherlands_drenthe",
    name: "Drenthe",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_drenthe_current"
  },
  {
    id: "ent_netherlands_flevoland",
    name: "Flevoland",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_flevoland_current"
  },
  {
    id: "ent_netherlands_friesland",
    name: "Friesland",
    aliases: ["Fryslân", "Fryslan"],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_friesland_current"
  },
  {
    id: "ent_netherlands_gelderland",
    name: "Gelderland",
    aliases: ["Guelders"],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_gelderland_current"
  },
  {
    id: "ent_netherlands_groningen",
    name: "Groningen",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_groningen_current"
  },
  {
    id: "ent_netherlands_limburg",
    name: "Limburg",
    aliases: ["Limburg (Netherlands)", "Dutch Limburg"],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_limburg_current"
  },
  {
    id: "ent_netherlands_north_brabant",
    name: "North Brabant",
    aliases: ["Noord-Brabant", "Noord Brabant"],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_north_brabant_current"
  },
  {
    id: "ent_netherlands_north_holland",
    name: "North Holland",
    aliases: ["Noord-Holland", "Noord Holland"],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_north_holland_current"
  },
  {
    id: "ent_netherlands_overijssel",
    name: "Overijssel",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_overijssel_current"
  },
  {
    id: "ent_netherlands_south_holland",
    name: "South Holland",
    aliases: ["Zuid-Holland", "Zuid Holland"],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_south_holland_current"
  },
  {
    id: "ent_netherlands_utrecht",
    name: "Utrecht",
    aliases: ["Province of Utrecht"],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_utrecht_current"
  },
  {
    id: "ent_netherlands_zeeland",
    name: "Zeeland",
    aliases: ["Zeeland Province"],
    entityType: "geographic",
    parentIds: ["ent_netherlands"],
    tags: ["subdivision", "first_level_subdivision", "current"],
    defaultVariantId: "var_netherlands_zeeland_current"
  },

  /*
    Spain and its autonomous communities and cities.
  */
  {
    id: "ent_spain",
    name: "Spain",
    aliases: [
      "Kingdom of Spain",
      "España",
      "Reino de España"
    ],
    entityType: "geographic",
    parentIds: ["ent_southern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_spain_current"
  },
  {
    id: "ent_andalucia",
    name: "Andalusia",
    aliases: ["Andalucía"],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_andalucia_current"
  },
  {
    id: "ent_aragon",
    name: "Aragon",
    aliases: ["Aragón"],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_aragon_current"
  },
  {
    id: "ent_asturias",
    name: "Asturias",
    aliases: [
      "Principality of Asturias",
      "Principado de Asturias"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_asturias_current"
  },
  {
    id: "ent_balearic_islands",
    name: "Balearic Islands",
    aliases: [
      "Illes Balears",
      "Islas Baleares"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_balearic_islands_current"
  },
  {
    id: "ent_basque_country",
    name: "Basque Country",
    aliases: [
      "Euskadi",
      "País Vasco"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_basque_country_current"
  },
  {
    id: "ent_canary_islands",
    name: "Canary Islands",
    aliases: [
      "Canarias",
      "Islas Canarias"
    ],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    constituentOfEntityIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_canary_islands_current"
  },
  {
    id: "ent_cantabria",
    name: "Cantabria",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_cantabria_current"
  },
  {
    id: "ent_castilla_la_mancha",
    name: "Castilla-La Mancha",
    aliases: ["Castile-La Mancha"],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_castilla_la_mancha_current"
  },
  {
    id: "ent_castilla_y_leon",
    name: "Castilla y León",
    aliases: [
      "Castile and León",
      "Castile and Leon"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_castilla_y_leon_current"
  },
  {
    id: "ent_catalonia",
    name: "Catalonia",
    aliases: [
      "Catalunya",
      "Cataluña"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_catalonia_current"
  },
  {
    id: "ent_ceuta",
    name: "Ceuta",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    constituentOfEntityIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_ceuta_current"
  },
  {
    id: "ent_extremadura",
    name: "Extremadura",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_extremadura_current"
  },
  {
    id: "ent_galicia",
    name: "Galicia",
    aliases: ["Galiza"],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_galicia_current"
  },
  {
    id: "ent_la_rioja",
    name: "La Rioja",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_la_rioja_current"
  },
  {
    id: "ent_madrid",
    name: "Community of Madrid",
    aliases: [
      "Madrid",
      "Comunidad de Madrid"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_madrid_current"
  },
  {
    id: "ent_melilla",
    name: "Melilla",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_northern_africa"],
    constituentOfEntityIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "overseas",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_melilla_current"
  },
  {
    id: "ent_murcia",
    name: "Region of Murcia",
    aliases: [
      "Murcia",
      "Región de Murcia"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_murcia_current"
  },
  {
    id: "ent_navarra",
    name: "Navarre",
    aliases: [
      "Navarra",
      "Nafarroa",
      "Chartered Community of Navarre",
      "Comunidad Foral de Navarra"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_navarra_current"
  },
  {
    id: "ent_valencia",
    name: "Valencian Community",
    aliases: [
      "Valencia",
      "Comunitat Valenciana",
      "Comunidad Valenciana"
    ],
    entityType: "geographic",
    parentIds: ["ent_spain"],
    tags: [
      "subdivision",
      "first_level_subdivision",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_valencia_current"
  },

  {
    id: "ent_united_kingdom",
    name: "United Kingdom",
    aliases: [
	  "UK", 
	  "United Kingdom of Great Britain and Northern Ireland",
	  "Britain",
	  "Great Britain"
	  ],
    entityType: "geographic",
    parentIds: ["ent_northern_europe"],
    tags: ["sovereign", "country", "current", "recognised"],
    defaultVariantId: "var_united_kingdom_current"
  },
  {
    id: "ent_england",
    name: "England",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_kingdom"],
	constituentOfEntityIds: ["ent_united_kingdom"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_england_current"
  },

  /*
    United Kingdom constituent countries.
  */
  {
    id: "ent_scotland",
    name: "Scotland",
    aliases: ["Alba"],
    entityType: "geographic",
    parentIds: ["ent_united_kingdom"],
    constituentOfEntityIds: ["ent_united_kingdom"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_scotland_current"
  },
  {
    id: "ent_wales",
    name: "Wales",
    aliases: ["Cymru"],
    entityType: "geographic",
    parentIds: ["ent_united_kingdom"],
    constituentOfEntityIds: ["ent_united_kingdom"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_wales_current"
  },
  {
    id: "ent_northern_ireland",
    name: "Northern Ireland",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_united_kingdom"],
    constituentOfEntityIds: ["ent_united_kingdom"],
    tags: ["subdivision", "current"],
    defaultVariantId: "var_northern_ireland_unofficial"
  },
  
  /*
    Channel Islands.
  */
  {
    id: "ent_bailiwick_of_guernsey",
    name: "Bailiwick of Guernsey",
    aliases: [
      "Guernsey, Alderney and Sark"
    ],
    entityType: "geographic",
    parentIds: ["ent_channel_islands"],
    tags: [
      "dependency",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: null
  },
  {
    id: "ent_jersey",
    name: "Jersey",
    aliases: [
      "Bailiwick of Jersey"
    ],
    entityType: "geographic",
    parentIds: ["ent_channel_islands"],
    tags: [
      "dependency",
      "autonomous",
      "current",
      "recognised"
    ],
    defaultVariantId: "var_jersey_current"
  },
  {
  id: "ent_alderney",
  name: "Alderney",
  aliases: [],
  entityType: "geographic",
  parentIds: ["ent_bailiwick_of_guernsey"],
  constituentOfEntityIds: [
    "ent_bailiwick_of_guernsey"
  ],
  tags: [
    "autonomous",
    "current",
    "recognised"
  ],
  defaultVariantId: "var_alderney_current"
},
{
  id: "ent_brecqhou",
  name: "Brecqhou",
  aliases: ["Brechou"],
  entityType: "geographic",
  parentIds: ["ent_sark"],
  tags: [
    "current",
    "recognised"
  ],
  defaultVariantId: "var_brecqhou_current"
},
  {
  id: "ent_guernsey",
  name: "Guernsey",
  aliases: [
    "Island of Guernsey"
  ],
  entityType: "geographic",
  parentIds: ["ent_bailiwick_of_guernsey"],
  constituentOfEntityIds: [
    "ent_bailiwick_of_guernsey"
  ],
  tags: [
    "autonomous",
    "current",
    "recognised"
  ],
  defaultVariantId: "var_guernsey_current"
},
{
  id: "ent_herm",
  name: "Herm",
  aliases: [],
  entityType: "geographic",
  parentIds: ["ent_guernsey"],
  administeringEntityIds: [
    "ent_guernsey"
  ],
  tags: [
    "current",
    "recognised"
  ],
  defaultVariantId: "var_herm_current"
},
{
  id: "ent_lihou",
  name: "Lihou",
  aliases: [
    "Lihou Island"
  ],
  entityType: "geographic",
  parentIds: ["ent_guernsey"],
  administeringEntityIds: [
    "ent_guernsey"
  ],
  tags: [
    "current",
    "recognised"
  ],
  defaultVariantId: "var_lihou_current"
},
{
  id: "ent_sark",
  name: "Sark",
  aliases: [],
  entityType: "geographic",
  parentIds: ["ent_bailiwick_of_guernsey"],
  constituentOfEntityIds: [
    "ent_bailiwick_of_guernsey"
  ],
  tags: [
    "autonomous",
    "current",
    "recognised"
  ],
  defaultVariantId: "var_sark_current"
},
  
  /*
    Current English ceremonial counties.

    Bristol is included as a navigable structural entity but remains
    non-selectable until a flag asset is added.
  */
  {
    id: "ent_bedfordshire",
    name: "Bedfordshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_bedfordshire_current"
  },
  {
    id: "ent_berkshire",
    name: "Berkshire",
    aliases: ["Royal County of Berkshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_berkshire_current"
  },
  /*{
    id: "ent_bristol",
    name: "Bristol",
    aliases: ["City and County of Bristol"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: null
  },*/
  {
    id: "ent_buckinghamshire",
    name: "Buckinghamshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_buckinghamshire_current"
  },
  {
    id: "ent_cambridgeshire",
    name: "Cambridgeshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_cambridgeshire_current"
  },
  {
    id: "ent_cheshire",
    name: "Cheshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_cheshire_current"
  },
  {
    id: "ent_city_of_london",
    name: "City of London",
    aliases: ["Square Mile"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_city_of_london_current"
  },
  {
    id: "ent_cornwall",
    name: "Cornwall",
    aliases: ["Kernow"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_cornwall_current"
  },
  {
    id: "ent_cumbria",
    name: "Cumbria",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_cumbria_current"
  },
  {
    id: "ent_derbyshire",
    name: "Derbyshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_derbyshire_current"
  },
  {
    id: "ent_devon",
    name: "Devon",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_devon_current"
  },
  {
    id: "ent_dorset",
    name: "Dorset",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_dorset_current"
  },
  {
    id: "ent_county_durham",
    name: "County Durham",
    aliases: ["Durham"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_county_durham_current"
  },
  {
    id: "ent_east_riding_of_yorkshire",
    name: "East Riding of Yorkshire",
    aliases: ["East Riding"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_east_riding_of_yorkshire_current"
  },
  {
    id: "ent_east_sussex",
    name: "East Sussex",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_east_sussex_current"
  },
  {
    id: "ent_essex",
    name: "Essex",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_essex_current"
  },
  {
    id: "ent_gloucestershire",
    name: "Gloucestershire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_gloucestershire_current"
  },
  {
    id: "ent_greater_london",
    name: "Greater London",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_greater_london_current"
  },
  {
    id: "ent_greater_manchester",
    name: "Greater Manchester",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_greater_manchester_current"
  },
  {
    id: "ent_hampshire",
    name: "Hampshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_hampshire_current"
  },
  {
    id: "ent_herefordshire",
    name: "Herefordshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_herefordshire_current"
  },
  {
    id: "ent_hertfordshire",
    name: "Hertfordshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_hertfordshire_current"
  },
  {
    id: "ent_isle_of_wight",
    name: "Isle of Wight",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_isle_of_wight_current"
  },
  {
    id: "ent_kent",
    name: "Kent",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_kent_current"
  },
  {
    id: "ent_lancashire",
    name: "Lancashire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_lancashire_current"
  },
  {
    id: "ent_leicestershire",
    name: "Leicestershire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_leicestershire_current"
  },
  {
    id: "ent_lincolnshire",
    name: "Lincolnshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_lincolnshire_current"
  },
  {
    id: "ent_merseyside",
    name: "Merseyside",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_merseyside_current"
  },
  {
    id: "ent_norfolk",
    name: "Norfolk",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_norfolk_current"
  },
  {
    id: "ent_north_yorkshire",
    name: "North Yorkshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_north_yorkshire_current"
  },
  {
    id: "ent_northamptonshire",
    name: "Northamptonshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_northamptonshire_current"
  },
  {
    id: "ent_northumberland",
    name: "Northumberland",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_northumberland_current"
  },
  {
    id: "ent_nottinghamshire",
    name: "Nottinghamshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_nottinghamshire_current"
  },
  {
    id: "ent_oxfordshire",
    name: "Oxfordshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_oxfordshire_current"
  },
  {
    id: "ent_rutland",
    name: "Rutland",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_rutland_current"
  },
  {
    id: "ent_shropshire",
    name: "Shropshire",
    aliases: ["Salop"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_shropshire_current"
  },
  {
    id: "ent_somerset",
    name: "Somerset",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_somerset_current"
  },
  {
    id: "ent_south_yorkshire",
    name: "South Yorkshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_south_yorkshire_current"
  },
  {
    id: "ent_staffordshire",
    name: "Staffordshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_staffordshire_current"
  },
  {
    id: "ent_suffolk",
    name: "Suffolk",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_suffolk_current"
  },
  {
    id: "ent_surrey",
    name: "Surrey",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_surrey_current"
  },
  {
    id: "ent_tyne_and_wear",
    name: "Tyne and Wear",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_tyne_and_wear_current"
  },
  {
    id: "ent_warwickshire",
    name: "Warwickshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_warwickshire_current"
  },
  {
    id: "ent_west_midlands",
    name: "West Midlands",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_west_midlands_current"
  },
  {
    id: "ent_west_sussex",
    name: "West Sussex",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_west_sussex_current"
  },
  {
    id: "ent_west_yorkshire",
    name: "West Yorkshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_west_yorkshire_modern"
  },
  {
    id: "ent_wiltshire",
    name: "Wiltshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_wiltshire_current"
  },
  {
    id: "ent_worcestershire",
    name: "Worcestershire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "current", "subdivision"],
    defaultVariantId: "var_worcestershire_current"
  },

  /*
    Historic counties of England.

    Historic entities share current ceremonial assets where the same design
    represents both contexts. Westmorland remains non-selectable until a flag
    asset is added.
  */
  {
    id: "ent_bedfordshire_historic",
    name: "Bedfordshire (historic county)",
    aliases: ["Bedfordshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_bedfordshire_historic"
  },
  {
    id: "ent_berkshire_historic",
    name: "Berkshire (historic county)",
    aliases: ["Berkshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_berkshire_historic"
  },
  {
    id: "ent_buckinghamshire_historic",
    name: "Buckinghamshire (historic county)",
    aliases: ["Buckinghamshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_buckinghamshire_historic"
  },
  {
    id: "ent_cambridgeshire_historic",
    name: "Cambridgeshire (historic county)",
    aliases: ["Cambridgeshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_cambridgeshire_historic"
  },
  {
    id: "ent_cheshire_historic",
    name: "Cheshire (historic county)",
    aliases: ["Cheshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_cheshire_historic"
  },
  {
    id: "ent_cornwall_historic",
    name: "Cornwall (historic county)",
    aliases: ["Cornwall", "Kernow"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_cornwall_historic"
  },
  {
    id: "ent_cumberland_historic",
    name: "Cumberland (historic county)",
    aliases: ["Cumberland"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_cumberland_historic"
  },
  {
    id: "ent_derbyshire_historic",
    name: "Derbyshire (historic county)",
    aliases: ["Derbyshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_derbyshire_historic"
  },
  {
    id: "ent_devon_historic",
    name: "Devon (historic county)",
    aliases: ["Devon"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_devon_historic"
  },
  {
    id: "ent_dorset_historic",
    name: "Dorset (historic county)",
    aliases: ["Dorset"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_dorset_historic"
  },
  {
    id: "ent_durham_historic",
    name: "Durham (historic county)",
    aliases: ["County Durham", "Durham"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_durham_historic"
  },
  {
    id: "ent_essex_historic",
    name: "Essex (historic county)",
    aliases: ["Essex"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_essex_historic"
  },
  {
    id: "ent_gloucestershire_historic",
    name: "Gloucestershire (historic county)",
    aliases: ["Gloucestershire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_gloucestershire_historic"
  },
  {
    id: "ent_hampshire_historic",
    name: "Hampshire (historic county)",
    aliases: ["Hampshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_hampshire_historic"
  },
  {
    id: "ent_herefordshire_historic",
    name: "Herefordshire (historic county)",
    aliases: ["Herefordshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_herefordshire_historic"
  },
  {
    id: "ent_hertfordshire_historic",
    name: "Hertfordshire (historic county)",
    aliases: ["Hertfordshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_hertfordshire_historic"
  },
  {
    id: "ent_huntingdonshire_historic",
    name: "Huntingdonshire (historic county)",
    aliases: ["Huntingdonshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_huntingdonshire_historic"
  },
  {
    id: "ent_kent_historic",
    name: "Kent (historic county)",
    aliases: ["Kent"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_kent_historic"
  },
  {
    id: "ent_lancashire_historic",
    name: "Lancashire (historic county)",
    aliases: ["Lancashire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_lancashire_historic"
  },
  {
    id: "ent_leicestershire_historic",
    name: "Leicestershire (historic county)",
    aliases: ["Leicestershire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_leicestershire_historic"
  },
  {
    id: "ent_lincolnshire_historic",
    name: "Lincolnshire (historic county)",
    aliases: ["Lincolnshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_lincolnshire_historic"
  },
  {
    id: "ent_middlesex_historic",
    name: "Middlesex (historic county)",
    aliases: ["Middlesex"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_middlesex_historic"
  },
  {
    id: "ent_norfolk_historic",
    name: "Norfolk (historic county)",
    aliases: ["Norfolk"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_norfolk_historic"
  },
  {
    id: "ent_northamptonshire_historic",
    name: "Northamptonshire (historic county)",
    aliases: ["Northamptonshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_northamptonshire_historic"
  },
  {
    id: "ent_northumberland_historic",
    name: "Northumberland (historic county)",
    aliases: ["Northumberland"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_northumberland_historic"
  },
  {
    id: "ent_nottinghamshire_historic",
    name: "Nottinghamshire (historic county)",
    aliases: ["Nottinghamshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_nottinghamshire_historic"
  },
  {
    id: "ent_oxfordshire_historic",
    name: "Oxfordshire (historic county)",
    aliases: ["Oxfordshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_oxfordshire_historic"
  },
  {
    id: "ent_rutland_historic",
    name: "Rutland (historic county)",
    aliases: ["Rutland"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_rutland_historic"
  },
  {
    id: "ent_shropshire_historic",
    name: "Shropshire (historic county)",
    aliases: ["Shropshire", "Salop"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_shropshire_historic"
  },
  {
    id: "ent_somerset_historic",
    name: "Somerset (historic county)",
    aliases: ["Somerset"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_somerset_historic"
  },
  {
    id: "ent_staffordshire_historic",
    name: "Staffordshire (historic county)",
    aliases: ["Staffordshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_staffordshire_historic"
  },
  {
    id: "ent_suffolk_historic",
    name: "Suffolk (historic county)",
    aliases: ["Suffolk"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_suffolk_historic"
  },
  {
    id: "ent_surrey_historic",
    name: "Surrey (historic county)",
    aliases: ["Surrey"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_surrey_historic"
  },
  {
    id: "ent_sussex_historic",
    name: "Sussex (historic county)",
    aliases: ["Sussex"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_sussex_historic"
  },
  {
    id: "ent_warwickshire_historic",
    name: "Warwickshire (historic county)",
    aliases: ["Warwickshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_warwickshire_historic"
  },
  {
    id: "ent_westmorland_historic",
    name: "Westmorland (historic county)",
    aliases: ["Westmorland"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_westmorland_historic"
  },
  {
    id: "ent_wiltshire_historic",
    name: "Wiltshire (historic county)",
    aliases: ["Wiltshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_wiltshire_historic"
  },
  {
    id: "ent_worcestershire_historic",
    name: "Worcestershire (historic county)",
    aliases: ["Worcestershire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_worcestershire_historic"
  },
  {
    id: "ent_yorkshire_historic",
    name: "Yorkshire (historic county)",
    aliases: ["Yorkshire"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_yorkshire_historic"
  },

  /*
    Historic Ridings of Yorkshire.
  */
  {
    id: "ent_east_riding_of_yorkshire_historic",
    name: "East Riding of Yorkshire (historic riding)",
    aliases: ["East Riding of Yorkshire", "East Riding"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_east_riding_of_yorkshire_historic"
  },
  {
    id: "ent_north_riding_of_yorkshire",
    name: "North Riding of Yorkshire",
    aliases: ["North Riding"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_north_riding_of_yorkshire"
  },
  {
    id: "ent_west_riding_of_yorkshire",
    name: "West Riding of Yorkshire",
    aliases: ["West Riding"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_west_riding_historic"
  },

  /*
    Current English islands and island areas.
  */
  {
    id: "ent_lundy",
    name: "Lundy",
    aliases: ["Lundy Island"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["current"],
    defaultVariantId: "var_lundy_current"
  },
  {
    id: "ent_isle_of_portland",
    name: "Isle of Portland",
    aliases: ["Portland"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["current"],
    defaultVariantId: "var_isle_of_portland_current"
  },
  {
    id: "ent_isle_of_purbeck",
    name: "Isle of Purbeck",
    aliases: ["Purbeck"],
    entityType: "geographic",
    parentIds: ["ent_england"],
    tags: ["current"],
    defaultVariantId: "var_isle_of_purbeck_current"
  },

  /*
    Historic Scottish counties.
  */
  {
    id: "ent_aberdeenshire",
    name: "Aberdeenshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_aberdeenshire_historic"
  },
  {
    id: "ent_banffshire",
    name: "Banffshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_banffshire_historic"
  },
  {
    id: "ent_berwickshire",
    name: "Berwickshire",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_berwickshire_historic"
  },
  {
    id: "ent_caithness",
    name: "Caithness",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_caithness_historic"
  },
  {
    id: "ent_east_lothian",
    name: "East Lothian",
    aliases: ["Haddingtonshire"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_east_lothian_historic"
  },
  {
    id: "ent_kirkcudbrightshire",
    name: "Kirkcudbrightshire",
    aliases: ["Stewartry of Kirkcudbright"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_kirkcudbrightshire_historic"
  },
  {
    id: "ent_morayshire",
    name: "Morayshire",
    aliases: ["County of Moray", "Elginshire"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_morayshire_historic"
  },
  {
    id: "ent_orkney",
    name: "Orkney",
    aliases: ["Orkney Islands"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_orkney_historic"
  },
  {
    id: "ent_shetland",
    name: "Shetland",
    aliases: ["Shetland Islands"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_shetland_historic"
  },
  {
    id: "ent_sutherland",
    name: "Sutherland",
    aliases: [],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_sutherland_historic"
  },

  /*
    Current Scottish islands and island groups.
  */
  {
    id: "ent_barra",
    name: "Barra",
    aliases: ["Barraigh"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["current"],
    defaultVariantId: "var_barra_current"
  },
  {
    id: "ent_great_bernera",
    name: "Great Bernera",
    aliases: ["Beàrnaraigh Mòr"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["current"],
    defaultVariantId: "var_great_bernera_current"
  },
  {
    id: "ent_outer_hebrides",
    name: "Outer Hebrides",
    aliases: ["Western Isles", "Na h-Eileanan Siar"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["current"],
    defaultVariantId: "var_outer_hebrides_current"
  },
  {
    id: "ent_skye",
    name: "Skye",
    aliases: ["Isle of Skye", "An t-Eilean Sgitheanach"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["current"],
    defaultVariantId: "var_skye_current"
  },
  {
    id: "ent_south_uist",
    name: "South Uist",
    aliases: ["Uibhist a Deas"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["current"],
    defaultVariantId: "var_south_uist_current"
  },
  {
    id: "ent_tiree",
    name: "Tiree",
    aliases: ["Isle of Tiree", "Tiriodh"],
    entityType: "geographic",
    parentIds: ["ent_scotland"],
    tags: ["current"],
    defaultVariantId: "var_tiree_current"
  },

  /*
    Historic Welsh counties represented in the current asset set.
  */
  {
    id: "ent_anglesey",
    name: "Anglesey",
    aliases: ["Isle of Anglesey", "Ynys Môn"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_anglesey_historic"
  },
  {
    id: "ent_brecknockshire",
    name: "Brecknockshire",
    aliases: ["County of Brecknock", "Sir Frycheiniog"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_brecknockshire_historic"
  },
  {
    id: "ent_caernarfonshire",
    name: "Caernarfonshire",
    aliases: ["Carnarvonshire", "Sir Gaernarfon"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_caernarfonshire_historic"
  },
  {
    id: "ent_cardiganshire",
    name: "Cardiganshire",
    aliases: ["Ceredigion", "Sir Aberteifi"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_cardiganshire_historic"
  },
  {
    id: "ent_flintshire",
    name: "Flintshire",
    aliases: ["Sir y Fflint"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_flintshire_historic"
  },
  {
    id: "ent_glamorgan",
    name: "Glamorgan",
    aliases: ["Morgannwg"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_glamorgan_historic"
  },
  {
    id: "ent_merionethshire",
    name: "Merionethshire",
    aliases: ["Merioneth", "Sir Feirionnydd"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_merionethshire_historic"
  },
  {
    id: "ent_monmouthshire",
    name: "Monmouthshire",
    aliases: ["Sir Fynwy"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_monmouthshire_historic"
  },
  {
    id: "ent_pembrokeshire",
    name: "Pembrokeshire",
    aliases: ["Sir Benfro"],
    entityType: "geographic",
    parentIds: ["ent_wales"],
    tags: ["county", "historical", "former_subdivision"],
    defaultVariantId: "var_pembrokeshire_historic"
  },
  /*
    International organisations.

    These are non-geographic organisation entities. The structural grouping
    keeps Entity Browse usable without placing them inside the geography tree.
  */
{
  id: "ent_international_organisations",
  name: "International Organisations",
  aliases: ["International Organizations"],
  entityType: "organisation",
  parentIds: [],
  tags: ["organisation", "international_organisation"],
  defaultVariantId: null
},
{
  id: "ent_united_nations_system",
  name: "United Nations System and Related Bodies",
  aliases: ["UN System", "United Nations system"],
  entityType: "organisation",
  parentIds: ["ent_international_organisations"],
  tags: ["organisation", "international_organisation"],
  defaultVariantId: null
},
{
  id: "ent_european_atlantic_organisations",
  name: "European and Atlantic Organisations",
  aliases: ["European and Atlantic Organizations"],
  entityType: "organisation",
  parentIds: ["ent_international_organisations"],
  tags: ["organisation", "international_organisation"],
  defaultVariantId: null
},
{
  id: "ent_treaty_systems",
  name: "Treaty Systems",
  aliases: [],
  entityType: "organisation",
  parentIds: ["ent_international_organisations"],
  tags: ["organisation", "international_organisation"],
  defaultVariantId: null
},
{
  id: "ent_international_police_cooperation",
  name: "International Police Cooperation",
  aliases: [],
  entityType: "organisation",
  parentIds: ["ent_international_organisations"],
  tags: ["organisation", "international_organisation", "police"],
  defaultVariantId: null
},
{
  id: "ent_sporting_organisations",
  name: "Sporting Organisations",
  aliases: ["Sporting Organizations", "Sports organisations", "Sports organizations"],
  entityType: "organisation",
  parentIds: ["ent_international_organisations"],
  tags: ["organisation", "international_organisation", "sport"],
  defaultVariantId: null
},
{
  id: "ent_united_nations",
  name: "United Nations",
  aliases: ["UN", "United Nations Organization", "United Nations Organisation", "UNO"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_united_nations_current"
},
{
  id: "ent_unicef",
  name: "UNICEF",
  aliases: ["United Nations Children's Fund", "United Nations International Children's Emergency Fund"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_unicef_current"
},
{
  id: "ent_unesco",
  name: "UNESCO",
  aliases: ["United Nations Educational, Scientific and Cultural Organization", "United Nations Educational, Scientific and Cultural Organisation"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_unesco_current"
},
{
  id: "ent_world_health_organization",
  name: "World Health Organization",
  aliases: ["WHO", "World Health Organisation"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_world_health_organization_current"
},
{
  id: "ent_world_food_programme",
  name: "World Food Programme",
  aliases: ["WFP", "World Food Program"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_world_food_programme_current"
},
{
  id: "ent_international_labour_organization",
  name: "International Labour Organization",
  aliases: ["ILO", "International Labour Organisation", "International Labor Organization", "International Labor Organisation"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_international_labour_organization_current"
},
{
  id: "ent_international_maritime_organization",
  name: "International Maritime Organization",
  aliases: ["IMO", "International Maritime Organisation"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_international_maritime_organization_current"
},
{
  id: "ent_international_telecommunication_union",
  name: "International Telecommunication Union",
  aliases: ["ITU"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_international_telecommunication_union_current"
},
{
  id: "ent_international_civil_aviation_organization",
  name: "International Civil Aviation Organization",
  aliases: ["ICAO", "International Civil Aviation Organisation"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_international_civil_aviation_organization_current"
},
{
  id: "ent_world_meteorological_organization",
  name: "World Meteorological Organization",
  aliases: ["WMO", "World Meteorological Organisation"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_world_meteorological_organization_current"
},
{
  id: "ent_international_atomic_energy_agency",
  name: "International Atomic Energy Agency",
  aliases: ["IAEA"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_international_atomic_energy_agency_current"
},
{
  id: "ent_universal_postal_union",
  name: "Universal Postal Union",
  aliases: ["UPU"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_universal_postal_union_current"
},
{
  id: "ent_international_criminal_court",
  name: "International Criminal Court",
  aliases: ["ICC"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_international_criminal_court_current"
},
{
  id: "ent_united_nations_parliamentary_administration",
  name: "United Nations Parliamentary Administration",
  aliases: ["UNPA"],
  entityType: "organisation",
  parentIds: ["ent_united_nations_system"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_united_nations_parliamentary_administration_current"
},
{
  id: "ent_arab_league",
  name: "Arab League",
  aliases: ["League of Arab States", "LAS"],
  entityType: "organisation",
  parentIds: ["ent_international_organisations"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_arab_league_current"
},
{
  id: "ent_organisation_of_islamic_cooperation",
  name: "Organisation of Islamic Cooperation",
  aliases: ["OIC", "Organization of Islamic Cooperation", "Organisation of the Islamic Conference", "Organization of the Islamic Conference"],
  entityType: "organisation",
  parentIds: ["ent_international_organisations"],
  tags: ["organisation", "international_organisation", "religious", "current"],
  defaultVariantId: "var_organisation_of_islamic_cooperation_current"
},
{
  id: "ent_european_union",
  name: "European Union",
  aliases: ["EU"],
  entityType: "organisation",
  parentIds: ["ent_european_atlantic_organisations"],
  tags: ["organisation", "international_organisation", "government", "current"],
  defaultVariantId: "var_european_union_current"
},
{
  id: "ent_nato",
  name: "NATO",
  aliases: ["North Atlantic Treaty Organization", "North Atlantic Treaty Organisation"],
  entityType: "organisation",
  parentIds: ["ent_european_atlantic_organisations"],
  tags: ["organisation", "international_organisation", "military", "current"],
  defaultVariantId: "var_nato_current"
},
{
  id: "ent_antarctic_treaty_system",
  name: "Antarctic Treaty System",
  aliases: ["Antarctic Treaty"],
  entityType: "organisation",
  parentIds: ["ent_treaty_systems"],
  tags: ["organisation", "international_organisation", "current"],
  defaultVariantId: "var_antarctic_treaty_system_current"
},
{
  id: "ent_interpol",
  name: "INTERPOL",
  aliases: ["International Criminal Police Organization", "International Criminal Police Organisation"],
  entityType: "organisation",
  parentIds: ["ent_international_police_cooperation"],
  tags: ["organisation", "international_organisation", "police", "current"],
  defaultVariantId: "var_interpol_current"
},
{
  id: "ent_international_olympic_committee",
  name: "International Olympic Committee",
  aliases: ["IOC"],
  entityType: "organisation",
  parentIds: ["ent_sporting_organisations"],
  tags: ["organisation", "international_organisation", "sport", "current"],
  defaultVariantId: "var_international_olympic_committee_current"
},
{
  id: "ent_fifa",
  name: "FIFA",
  aliases: ["Fédération Internationale de Football Association", "International Federation of Association Football"],
  entityType: "organisation",
  parentIds: ["ent_sporting_organisations"],
  tags: ["organisation", "international_organisation", "sport", "current"],
  defaultVariantId: "var_fifa_current"
}
];
