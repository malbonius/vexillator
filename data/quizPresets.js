/*
  Quiz preset registry.

  Presets store reusable quiz configurations. They select source collections
  and a quiz mode, but they do not store flags or authoritative question
  counts.

  The available question count is calculated from the resolved working pool
  when a preset is loaded.
*/

const quizPresets = [];
  /*
    Typing presets.
  
  {
    id: "preset_south_american_countries_typing",
    name: "South American Countries",
    mode: "typing",
    sourceType: "collections",
    collectionIds: [
      "col_south_american_countries"
    ]
  },
  {
    id: "preset_yorkshire_shared_asset_typing",
    name: "Yorkshire Shared Asset Test",
    mode: "typing",
    sourceType: "collections",
    collectionIds: [
      "col_yorkshire_shared_asset_test"
    ]
  },

  /*
    Multiple-choice presets.
  
  {
    id: "preset_south_american_countries_multiple_choice",
    name: "South American Countries Multiple-Choice",
    mode: "multiple_choice",
    sourceType: "collections",
    collectionIds: [
      "col_south_american_countries"
    ]
  },
  {
    id: "preset_us_states_quiz_multiple_choice",
    name: "US States Quiz",
    mode: "multiple_choice",
    sourceType: "collections",
    collectionIds: [
      "col_us_states"
    ]
  }
];*/
