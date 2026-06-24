/*
  Controlled tag registry.

  Tags are machine-friendly classification values used by validation,
  dynamic collections and Search. Geography should normally be represented
  through the entity hierarchy rather than place-name tags.

  Keep values lowercase and in snake_case. Add new tags here before using them
  in entity or variant data.
*/
const tagRegistry = Object.freeze({
  entityTags: Object.freeze([
    // Geographic and administrative classifications
    "sovereign",
	"country",
	"composite_state",
	"dependency",
    "subdivision",
	"first_level_subdivision",
    "former_subdivision",
    "county",
	"territory",
	"overseas",
	"region",
	"autonomous",
	
	/*  unused tags 
	"state",
    "province",	
	"district",
	"municipality",
    "department",
    "dependent_territory",
	"constituent_country",
	"public_body",
	"special_municipality",
	*/
	

    // Status and period
    "current",
    "historical",
    "recognised",
    "unrecognised",
    "disputed",
    "former_state",
    "proposed",
    "unofficial",
    "defunct",

    // Organisation and identity classifications
    "international_organisation",
	"organisation",
    "government",
    "military",
    "police",
    "religious",
    "sport",
    "charity",
    "ethnic",
    "indigenous",
    "linguistic",
    "fictional"
  ]),

  variantTags: Object.freeze([
    // Flag use and form
    "national",
	"civil",
	"first_level_subdivision",
	"second_level_subdivision",
	"third_level_subdivision",
    "state",
    "war",
	"ensign",
	"civil_ensign",
	"state_ensign",
    "naval_ensign",
	"naval_jack",
    "merchant",
    "air_force",
    "reverse",
    "obverse",
    "official",
	"unofficial",	
    "coat_of_arms",
	"organisation",

    // Quiz and technical variants
    "quiz",
	"non_quizzable",
    "text_removed",
	"ambiguous_quiz_visual",

    // Status and period
    "historical",
    "current",
	"alternative",
    "proposal"
  ])
});
