/*
  CollectionGroup registry.

  CollectionGroups are navigation containers. They organise collection IDs
  into a browsable hierarchy but do not directly contain entities or variants.

  Maintenance rules:
  - IDs are permanent and use lowercase snake_case.
  - parentGroupIds defines the navigation hierarchy.
  - collectionIds contains direct collections only.
  - collections may appear in more than one group when that improves browsing.
  - internal collections must not be referenced by user-facing groups.
*/

const collectionGroups = [
  /*
    Root and cross-geographic groups.
  */
  {
    id: "grp_world",
    name: "World",
    parentGroupIds: [],
    collectionIds: [
      "col_all_current_selectable_flags"
    ]
  },
  {
    id: "grp_geography",
    name: "Geography",
    parentGroupIds: ["grp_world"],
    collectionIds: []
  },
  {
    id: "grp_political_status",
    name: "Political and Status",
    parentGroupIds: ["grp_world"],
    collectionIds: [
      "col_recognised_sovereign_states",
      "col_dependencies_territories_overseas",
      "col_disputed_entities",
      "col_unrecognised_states",
      "col_unofficial_current_flags"
    ]
  },
  {
    id: "grp_historical",
    name: "Historical and Specialist",
    parentGroupIds: ["grp_world"],
    collectionIds: [
      "col_england_historical_counties",
      "col_scotland_historical_counties",
      "col_wales_historical_counties",
      "col_united_kingdom_islands",
      "col_quiz_safe_text_removed_flags"
    ]
  },

  /*
    South America.
  */
  {
    id: "grp_south_america",
    name: "South America",
    parentGroupIds: ["grp_geography"],
    collectionIds: [
      "col_south_american_sovereign",
      "col_south_american_flags",
      "col_south_american_dependents"
    ]
  },

  {
    id: "grp_venezuela",
    name: "Venezuela",
    parentGroupIds: ["grp_south_america"],
    collectionIds: [
      "col_venezuela_states"
    ]
  },

  {
    id: "grp_venezuela_regions",
    name: "Venezuelan Regions",
    parentGroupIds: ["grp_venezuela"],
    collectionIds: [
      "col_venezuela_andean_region_flags",
      "col_venezuela_capital_region_flags",
      "col_venezuela_central_region_flags",
      "col_venezuela_central_western_region_flags",
      "col_venezuela_guayana_region_flags",
      "col_venezuela_insular_region_flags",
      "col_venezuela_llanos_region_flags",
      "col_venezuela_northeastern_region_flags",
      "col_venezuela_zulian_region_flags"
    ]
  },

  /*
    North America.
  */
  {
    id: "grp_north_america",
    name: "North America",
    parentGroupIds: ["grp_geography"],
    collectionIds: [
      "col_north_america_countries",
      "col_north_american_flags",
      "col_north_america_dependents"
    ]
  },
  {
    id: "grp_northern_america",
    name: "Northern America",
    parentGroupIds: ["grp_north_america"],
    collectionIds: [
      "col_northern_america_sovereign",
      "col_northern_america_flags"
    ]
  },

  {
    id: "grp_canada",
    name: "Canada",
    parentGroupIds: ["grp_northern_america"],
    collectionIds: [
      "col_canadian_current_selectable_flags",
      "col_canadian_province_and_territory_flags",
      "col_canadian_province_flags",
      "col_canadian_territory_flags"
    ]
  },

  {
    id: "grp_united_states",
    name: "United States",
    parentGroupIds: ["grp_northern_america"],
    collectionIds: [
      "col_us_states",
      "col_us_state_and_dc_flags"
    ]
  },
  {
    id: "grp_us_census_regions",
    name: "US Census Regions and Divisions",
    parentGroupIds: ["grp_united_states"],
    collectionIds: []
  },
  {
    id: "grp_us_census_northeast",
    name: "Northeast",
    parentGroupIds: ["grp_us_census_regions"],
    collectionIds: [
      "col_us_census_northeast_flags"
    ]
  },
  {
    id: "grp_us_census_new_england",
    name: "New England",
    parentGroupIds: ["grp_us_census_northeast"],
    collectionIds: [
      "col_us_census_new_england_flags"
    ]
  },
  {
    id: "grp_us_census_mid_atlantic",
    name: "Mid-Atlantic",
    parentGroupIds: ["grp_us_census_northeast"],
    collectionIds: [
      "col_us_census_mid_atlantic_flags"
    ]
  },
  {
    id: "grp_us_census_midwest",
    name: "Midwest",
    parentGroupIds: ["grp_us_census_regions"],
    collectionIds: [
      "col_us_census_midwest_flags"
    ]
  },
  {
    id: "grp_us_census_east_north_central",
    name: "East North Central",
    parentGroupIds: ["grp_us_census_midwest"],
    collectionIds: [
      "col_us_census_east_north_central_flags"
    ]
  },
  {
    id: "grp_us_census_west_north_central",
    name: "West North Central",
    parentGroupIds: ["grp_us_census_midwest"],
    collectionIds: [
      "col_us_census_west_north_central_flags"
    ]
  },
  {
    id: "grp_us_census_south",
    name: "South",
    parentGroupIds: ["grp_us_census_regions"],
    collectionIds: [
      "col_us_census_south_flags"
    ]
  },
  {
    id: "grp_us_census_south_atlantic",
    name: "South Atlantic",
    parentGroupIds: ["grp_us_census_south"],
    collectionIds: [
      "col_us_census_south_atlantic_flags"
    ]
  },
  {
    id: "grp_us_census_east_south_central",
    name: "East South Central",
    parentGroupIds: ["grp_us_census_south"],
    collectionIds: [
      "col_us_census_east_south_central_flags"
    ]
  },
  {
    id: "grp_us_census_west_south_central",
    name: "West South Central",
    parentGroupIds: ["grp_us_census_south"],
    collectionIds: [
      "col_us_census_west_south_central_flags"
    ]
  },
  {
    id: "grp_us_census_west",
    name: "West",
    parentGroupIds: ["grp_us_census_regions"],
    collectionIds: [
      "col_us_census_west_flags"
    ]
  },
  {
    id: "grp_us_census_mountain",
    name: "Mountain",
    parentGroupIds: ["grp_us_census_west"],
    collectionIds: [
      "col_us_census_mountain_flags"
    ]
  },
  {
    id: "grp_us_census_pacific",
    name: "Pacific",
    parentGroupIds: ["grp_us_census_west"],
    collectionIds: [
      "col_us_census_pacific_flags"
    ]
  },
  {
    id: "grp_central_america",
    name: "Central America",
    parentGroupIds: ["grp_north_america"],
    collectionIds: [
      "col_central_america_sovereign",
      "col_central_america_flags"
    ]
  },
  {
    id: "grp_caribbean",
    name: "Caribbean",
    parentGroupIds: ["grp_north_america"],
    collectionIds: [
      "col_caribbean_sovereign",
      "col_caribbean_flags",
      "col_caribbean_dependents"
    ]
  },

  /*
    Africa.
  */
  {
    id: "grp_africa",
    name: "Africa",
    parentGroupIds: ["grp_geography"],
    collectionIds: [
      "col_african_sovereign",
      "col_african_flags",
      "col_african_dependents"
    ]
  },
  {
    id: "grp_northern_africa",
    name: "Northern Africa",
    parentGroupIds: ["grp_africa"],
    collectionIds: [
      "col_northern_africa_sovereign",
      "col_northern_africa_flags"
    ]
  },
  {
    id: "grp_eastern_africa",
    name: "Eastern Africa",
    parentGroupIds: ["grp_africa"],
    collectionIds: [
      "col_eastern_africa_sovereign",
      "col_eastern_africa_flags"
    ]
  },
  {
    id: "grp_middle_africa",
    name: "Middle Africa",
    parentGroupIds: ["grp_africa"],
    collectionIds: [
      "col_middle_africa_sovereign",
      "col_middle_africa_flags"
    ]
  },
  {
    id: "grp_southern_africa",
    name: "Southern Africa",
    parentGroupIds: ["grp_africa"],
    collectionIds: [
      "col_southern_africa_sovereign",
      "col_southern_africa_flags"
    ]
  },
  {
    id: "grp_western_africa",
    name: "Western Africa",
    parentGroupIds: ["grp_africa"],
    collectionIds: [
      "col_western_africa_sovereign",
      "col_western_africa_flags"
    ]
  },

  /*
    Europe.
  */
  {
    id: "grp_europe",
    name: "Europe",
    parentGroupIds: ["grp_geography"],
    collectionIds: [
      "col_european_sovereign",
      "col_european_flags",
      "col_european_dependents",
      "col_europe_first_level_subdivisions"
    ]
  },
  {
    id: "grp_european_union_member_states",
    name: "European Union Member States",
    parentGroupIds: ["grp_europe"],
    collectionIds: [
      "col_eu_member_state_flags"
    ]
  },

  {
    id: "grp_eastern_europe",
    name: "Eastern Europe",
    parentGroupIds: ["grp_europe"],
    collectionIds: [
      "col_eastern_europe_sovereign",
      "col_eastern_europe_flags"
    ]
  },
  {
    id: "grp_belarus",
    name: "Belarus",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_belarus_first_level_subdivisions"
    ]
  },
  {
    id: "grp_bulgaria",
    name: "Bulgaria",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_bulgaria_first_level_subdivisions"
    ]
  },
  {
    id: "grp_hungary",
    name: "Hungary",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_hungary_first_level_subdivisions"
    ]
  },

  {
    id: "grp_romania",
    name: "Romania",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_romania_first_level_subdivisions"
    ]
  },

  {
    id: "grp_slovakia",
    name: "Slovakia",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_slovakia_regions"
    ]
  },

  {
    id: "grp_ukraine",
    name: "Ukraine",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_ukraine_first_level_subdivisions",
      "col_ukraine_oblast_flags",
      "col_ukraine_autonomous_republic_flags",
      "col_ukraine_special_city_flags"
    ]
  },

  {
    id: "grp_russia",
    name: "Russia",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_russia_first_level_subdivisions",
      "col_russia_central_region_flags",
      "col_russia_northwestern_region_flags",
      "col_russia_southern_region_flags",
      "col_russia_north_caucasian_region_flags",
      "col_russia_volga_region_flags",
      "col_russia_ural_region_flags",
      "col_russia_siberian_region_flags",
      "col_russia_far_eastern_region_flags",
      "col_russian_oblast_flags",
      "col_russian_republic_flags",
      "col_russian_krai_flags",
      "col_russian_autonomous_okrug_flags",
      "col_russian_autonomous_oblast_flags",
      "col_russian_federal_city_flags"
    ]
  },
  {
    id: "grp_czechia",
    name: "Czech Republic",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_czechia_regions"
    ]
  },
  {
    id: "grp_poland",
    name: "Poland",
    parentGroupIds: ["grp_eastern_europe"],
    collectionIds: [
      "col_poland_voivodeships"
    ]
  },
  {
    id: "grp_northern_europe",
    name: "Northern Europe",
    parentGroupIds: ["grp_europe"],
    collectionIds: [
      "col_northern_europe_sovereign",
      "col_northern_europe_flags"
    ]
  },

  {
    id: "grp_denmark",
    name: "Denmark",
    parentGroupIds: ["grp_northern_europe"],
    collectionIds: [
      "col_denmark_regions"
    ]
  },
  {
    id: "grp_estonia",
    name: "Estonia",
    parentGroupIds: ["grp_northern_europe"],
    collectionIds: [
      "col_estonia_counties"
    ]
  },
  {
    id: "grp_finland",
    name: "Finland",
    parentGroupIds: ["grp_northern_europe"],
    collectionIds: [
      "col_finland_regions"
    ]
  },
  {
    id: "grp_latvia",
    name: "Latvia",
    parentGroupIds: ["grp_northern_europe"],
    collectionIds: [
      "col_latvia_state_cities"
    ]
  },
  {
    id: "grp_lithuania",
    name: "Lithuania",
    parentGroupIds: ["grp_northern_europe"],
    collectionIds: [
      "col_lithuania_counties"
    ]
  },
  {
    id: "grp_norway",
    name: "Norway",
    parentGroupIds: ["grp_northern_europe"],
    collectionIds: [
      "col_norway_counties"
    ]
  },

  {
    id: "grp_sweden",
    name: "Sweden",
    parentGroupIds: ["grp_northern_europe"],
    collectionIds: [
      "col_sweden_counties"
    ]
  },
  {
    id: "grp_united_kingdom",
    name: "United Kingdom",
    parentGroupIds: ["grp_northern_europe"],
    collectionIds: [
      "col_united_kingdom_islands"
    ]
  },
  {
    id: "grp_england",
    name: "England",
    parentGroupIds: ["grp_united_kingdom"],
    collectionIds: [
      "col_england_ceremonial_counties",
      "col_england_historical_counties"
    ]
  },
  {
    id: "grp_scotland",
    name: "Scotland",
    parentGroupIds: ["grp_united_kingdom"],
    collectionIds: [
      "col_scotland_historical_counties"
    ]
  },
  {
    id: "grp_wales",
    name: "Wales",
    parentGroupIds: ["grp_united_kingdom"],
    collectionIds: [
      "col_wales_historical_counties"
    ]
  },
  {
    id: "grp_southern_europe",
    name: "Southern Europe",
    parentGroupIds: ["grp_europe"],
    collectionIds: [
      "col_southern_europe_sovereign",
      "col_southern_europe_flags"
    ]
  },
  {
    id: "grp_western_europe",
    name: "Western Europe",
    parentGroupIds: ["grp_europe"],
    collectionIds: [
      "col_western_europe_sovereign",
      "col_western_europe_flags"
    ]
  },



  {
    id: "grp_belgium",
    name: "Belgium",
    parentGroupIds: ["grp_western_europe"],
    collectionIds: [
      "col_belgium_subnational_flags"
    ]
  },
  {
    id: "grp_monaco",
    name: "Monaco",
    parentGroupIds: ["grp_western_europe"],
    collectionIds: [
      "col_monaco_municipality"
    ]
  },
  {
    id: "grp_france",
    name: "France",
    parentGroupIds: ["grp_western_europe"],
    collectionIds: [
      "col_france_current_regions"
    ]
  },
  {
    id: "grp_germany",
    name: "Germany",
    parentGroupIds: ["grp_western_europe"],
    collectionIds: [
      "col_germany_lander"
    ]
  },
  {
    id: "grp_austria",
    name: "Austria",
    parentGroupIds: ["grp_western_europe"],
    collectionIds: [
      "col_austria_states"
    ]
  },
  {
    id: "grp_netherlands",
    name: "Netherlands",
    parentGroupIds: ["grp_western_europe"],
    collectionIds: [
      "col_netherlands_provinces"
    ]
  },
  {
    id: "grp_switzerland",
    name: "Switzerland",
    parentGroupIds: ["grp_western_europe"],
    collectionIds: [
      "col_switzerland_cantons"
    ]
  },
  {
    id: "grp_albania",
    name: "Albania",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_albania_counties"
    ]
  },
  {
    id: "grp_andorra",
    name: "Andorra",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_andorra_parishes"
    ]
  },
  {
    id: "grp_bosnia_and_herzegovina",
    name: "Bosnia and Herzegovina",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_bosnia_and_herzegovina_subnational_flags"
    ]
  },
  {
    id: "grp_croatia",
    name: "Croatia",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_croatia_counties_and_city"
    ]
  },

  {
    id: "grp_greece",
    name: "Greece",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_greece_regions"
    ]
  },
  {
    id: "grp_malta",
    name: "Malta",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_malta_regions"
    ]
  },

  {
    id: "grp_north_macedonia",
    name: "North Macedonia",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_north_macedonia_local_government_flags",
      "col_north_macedonia_city_of_skopje_flags"
    ]
  },
  {
    id: "grp_north_macedonia_eastern_statistical_region",
    name: "Eastern Statistical Region",
    parentGroupIds: ["grp_north_macedonia"],
    collectionIds: [
      "col_north_macedonia_eastern_statistical_region_flags"
    ]
  },
  {
    id: "grp_north_macedonia_northeastern_statistical_region",
    name: "Northeastern Statistical Region",
    parentGroupIds: ["grp_north_macedonia"],
    collectionIds: [
      "col_north_macedonia_northeastern_statistical_region_flags"
    ]
  },
  {
    id: "grp_north_macedonia_pelagonia_statistical_region",
    name: "Pelagonia Statistical Region",
    parentGroupIds: ["grp_north_macedonia"],
    collectionIds: [
      "col_north_macedonia_pelagonia_statistical_region_flags"
    ]
  },
  {
    id: "grp_north_macedonia_polog_statistical_region",
    name: "Polog Statistical Region",
    parentGroupIds: ["grp_north_macedonia"],
    collectionIds: [
      "col_north_macedonia_polog_statistical_region_flags"
    ]
  },
  {
    id: "grp_north_macedonia_skopje_statistical_region",
    name: "Skopje Statistical Region",
    parentGroupIds: ["grp_north_macedonia"],
    collectionIds: [
      "col_north_macedonia_skopje_statistical_region_flags"
    ]
  },
  {
    id: "grp_north_macedonia_southeastern_statistical_region",
    name: "Southeastern Statistical Region",
    parentGroupIds: ["grp_north_macedonia"],
    collectionIds: [
      "col_north_macedonia_southeastern_statistical_region_flags"
    ]
  },
  {
    id: "grp_north_macedonia_southwestern_statistical_region",
    name: "Southwestern Statistical Region",
    parentGroupIds: ["grp_north_macedonia"],
    collectionIds: [
      "col_north_macedonia_southwestern_statistical_region_flags"
    ]
  },
  {
    id: "grp_north_macedonia_vardar_statistical_region",
    name: "Vardar Statistical Region",
    parentGroupIds: ["grp_north_macedonia"],
    collectionIds: [
      "col_north_macedonia_vardar_statistical_region_flags"
    ]
  },

  {
    id: "grp_portugal",
    name: "Portugal",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_portugal_autonomous_regions"
    ]
  },
  {
    id: "grp_san_marino",
    name: "San Marino",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_san_marino_castelli"
    ]
  },
  {
    id: "grp_spain",
    name: "Spain",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_spain_autonomous_communities_and_cities"
    ]
  },
  {
    id: "grp_italy",
    name: "Italy",
    parentGroupIds: ["grp_southern_europe"],
    collectionIds: [
      "col_italy_regions",
      "col_italy_autonomous_regions"
    ]
  },

  /*
    Asia.
  */
  {
    id: "grp_asia",
    name: "Asia",
    parentGroupIds: ["grp_geography"],
    collectionIds: [
      "col_asian_sovereign",
      "col_asian_flags"
    ]
  },
  {
    id: "grp_central_asia",
    name: "Central Asia",
    parentGroupIds: ["grp_asia"],
    collectionIds: [
      "col_central_asia_sovereign",
      "col_central_asia_flags"
    ]
  },
  {
    id: "grp_eastern_asia",
    name: "Eastern Asia",
    parentGroupIds: ["grp_asia"],
    collectionIds: [
      "col_eastern_asia_sovereign",
      "col_eastern_asia_flags"
    ]
  },

  {
    id: "grp_japan",
    name: "Japan",
    parentGroupIds: ["grp_eastern_asia"],
    collectionIds: [
      "col_japanese_current_selectable_flags",
      "col_japanese_prefecture_flags"
    ]
  },
  {
    id: "grp_japan_hokkaido_region",
    name: "Hokkaido Region",
    parentGroupIds: ["grp_japan"],
    collectionIds: [
      "col_japanese_hokkaido_region_prefecture_flags"
    ]
  },
  {
    id: "grp_japan_tohoku_region",
    name: "Tohoku",
    parentGroupIds: ["grp_japan"],
    collectionIds: [
      "col_japanese_tohoku_region_prefecture_flags"
    ]
  },
  {
    id: "grp_japan_kanto_region",
    name: "Kanto",
    parentGroupIds: ["grp_japan"],
    collectionIds: [
      "col_japanese_kanto_region_prefecture_flags"
    ]
  },
  {
    id: "grp_japan_chubu_region",
    name: "Chubu",
    parentGroupIds: ["grp_japan"],
    collectionIds: [
      "col_japanese_chubu_region_prefecture_flags"
    ]
  },
  {
    id: "grp_japan_kansai_region",
    name: "Kansai",
    parentGroupIds: ["grp_japan"],
    collectionIds: [
      "col_japanese_kansai_region_prefecture_flags"
    ]
  },
  {
    id: "grp_japan_chugoku_region",
    name: "Chugoku",
    parentGroupIds: ["grp_japan"],
    collectionIds: [
      "col_japanese_chugoku_region_prefecture_flags"
    ]
  },
  {
    id: "grp_japan_shikoku_region",
    name: "Shikoku",
    parentGroupIds: ["grp_japan"],
    collectionIds: [
      "col_japanese_shikoku_region_prefecture_flags"
    ]
  },
  {
    id: "grp_japan_kyushu_region",
    name: "Kyushu",
    parentGroupIds: ["grp_japan"],
    collectionIds: [
      "col_japanese_kyushu_region_prefecture_flags"
    ]
  },

  {
    id: "grp_south_eastern_asia",
    name: "South-Eastern Asia",
    parentGroupIds: ["grp_asia"],
    collectionIds: [
      "col_south_eastern_asia_sovereign",
      "col_south_eastern_asia_flags"
    ]
  },
  {
    id: "grp_southern_asia",
    name: "Southern Asia",
    parentGroupIds: ["grp_asia"],
    collectionIds: [
      "col_southern_asia_sovereign",
      "col_southern_asia_flags"
    ]
  },
  {
    id: "grp_western_asia",
    name: "Western Asia",
    parentGroupIds: ["grp_asia"],
    collectionIds: [
      "col_western_asia_sovereign",
      "col_western_asia_flags"
    ]
  },

  /*
    Oceania.
  */
  {
    id: "grp_oceania",
    name: "Oceania",
    parentGroupIds: ["grp_geography"],
    collectionIds: [
      "col_oceanian_sovereign",
      "col_oceanian_flags",
      "col_oceanian_dependents"
    ]
  },
  {
    id: "grp_australia_and_new_zealand",
    name: "Australia and New Zealand",
    parentGroupIds: ["grp_oceania"],
    collectionIds: [
      "col_australia_and_new_zealand_sovereign",
      "col_australia_and_new_zealand_flags"
    ]
  },
  {
    id: "grp_australia",
    name: "Australia",
    parentGroupIds: ["grp_australia_and_new_zealand"],
    collectionIds: [
      "col_australian_current_selectable_flags",
      "col_australian_state_and_internal_territory_flags",
      "col_australian_state_flags",
      "col_australian_internal_territory_flags",
      "col_australian_external_territory_flags"
    ]
  },
  {
    id: "grp_melanesia",
    name: "Melanesia",
    parentGroupIds: ["grp_oceania"],
    collectionIds: [
      "col_melanesia_sovereign",
      "col_melanesia_flags"
    ]
  },
  {
    id: "grp_micronesia",
    name: "Micronesia",
    parentGroupIds: ["grp_oceania"],
    collectionIds: [
      "col_micronesia_sovereign",
      "col_micronesia_flags"
    ]
  },
  {
    id: "grp_federated_states_of_micronesia",
    name: "Federated States of Micronesia",
    parentGroupIds: ["grp_micronesia"],
    collectionIds: [
      "col_federated_states_micronesia_states"
    ]
  },

  {
    id: "grp_polynesia",
    name: "Polynesia",
    parentGroupIds: ["grp_oceania"],
    collectionIds: [
      "col_polynesia_sovereign",
      "col_polynesia_flags"
    ]
  },

  /*
    International Organisations.
  */
  {
    id: "grp_international_organisations",
    name: "International Organisations",
    parentGroupIds: ["grp_world"],
    collectionIds: [
      "col_international_organisation_flags"
    ]
  },
  {
    id: "grp_united_nations_system",
    name: "United Nations System",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_un_system_flags"
    ]
  },
  {
    id: "grp_european_atlantic_organisations",
    name: "European and Atlantic Organisations",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_european_atlantic_organisation_flags"
    ]
  },
  {
    id: "grp_nordic_council",
    name: "Nordic Council",
    parentGroupIds: ["grp_european_atlantic_organisations"],
    collectionIds: [
      "col_nordic_council_flag",
      "col_nordic_council_member_flags"
    ]
  },
  {
    id: "grp_nato",
    name: "NATO",
    parentGroupIds: ["grp_european_atlantic_organisations"],
    collectionIds: [
      "col_nato_member_state_flags"
    ]
  },
  {
    id: "grp_treaty_systems",
    name: "Treaty Systems",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_treaty_system_flags"
    ]
  },
  {
    id: "grp_international_police_cooperation",
    name: "International Police Cooperation",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_international_police_cooperation_flags"
    ]
  },
  {
    id: "grp_international_sporting_organisations",
    name: "International Sporting Organisations",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_international_sporting_organisation_flags"
    ]
  },

{
    id: "grp_fifa",
    name: "FIFA",
    parentGroupIds: ["grp_international_sporting_organisations"],
    collectionIds: [
      "col_fifa_member_association_flags",
      "col_afc_member_association_flags",
      "col_caf_member_association_flags",
      "col_concacaf_member_association_flags",
      "col_conmebol_member_association_flags",
      "col_ofc_member_association_flags",
      "col_uefa_member_association_flags"
    ]
  },


{
    id: "grp_fiav",
    name: "International Federation of Vexillological Associations",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_fiav_member_association_flags"
    ]
  },

  {
    id: "grp_arab_league",
    name: "Arab League",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_arab_league_member_flags"
    ]
  },

  {
    id: "grp_organisation_of_islamic_cooperation",
    name: "Organisation of Islamic Cooperation",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_oic_member_state_flags"
    ]
  },

  {
    id: "grp_commonwealth_of_nations",
    name: "Commonwealth of Nations",
    parentGroupIds: ["grp_international_organisations"],
    collectionIds: [
      "col_commonwealth_member_state_flags"
    ]
  },

  /*
    Antarctica.
  */
  {
    id: "grp_antarctica",
    name: "Antarctica",
    parentGroupIds: ["grp_geography"],
    collectionIds: [
      "col_antarctic_flags",
      "col_antarctic_dependents"
    ]
  }
];
