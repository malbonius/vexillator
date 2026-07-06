/*
  Entity memberships.

  This file stores non-geographic relationships between entities.

  Examples:
  - states that are members of organisations
  - organisations that are part of wider systems
  - sporting confederations under FIFA
  - treaty-system membership

  Minimum useful record shape:
  - memberEntityId
  - groupEntityId
  - status

  relationshipType and membershipType are optional. Add them only when they
  help generate meaningful browsing or quiz collections, such as separating
  UN member states from UN agencies.

  This must not be used for geographic parentage.
  Geographic ancestry belongs in parentIds inside entities.js.
*/

const entityMemberships = Object.freeze([
  Object.freeze({
    id: "mem_austria_european_union",
    memberEntityId: "ent_austria",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1995,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belgium_european_union",
    memberEntityId: "ent_belgium",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1958,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bulgaria_european_union",
    memberEntityId: "ent_bulgaria",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2007,
    endYear: null
  }),
  Object.freeze({
    id: "mem_croatia_european_union",
    memberEntityId: "ent_croatia",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2013,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cyprus_european_union",
    memberEntityId: "ent_cyprus",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null,
    notes: "Cyprus is geographically modelled in Western Asia but is a current European Union member state."
  }),
  Object.freeze({
    id: "mem_czechia_european_union",
    memberEntityId: "ent_czechia",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_denmark_european_union",
    memberEntityId: "ent_denmark",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1973,
    endYear: null
  }),
  Object.freeze({
    id: "mem_estonia_european_union",
    memberEntityId: "ent_estonia",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_finland_european_union",
    memberEntityId: "ent_finland",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1995,
    endYear: null
  }),
  Object.freeze({
    id: "mem_france_european_union",
    memberEntityId: "ent_france",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1958,
    endYear: null
  }),
  Object.freeze({
    id: "mem_germany_european_union",
    memberEntityId: "ent_germany",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1958,
    endYear: null
  }),
  Object.freeze({
    id: "mem_greece_european_union",
    memberEntityId: "ent_greece",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1981,
    endYear: null
  }),
  Object.freeze({
    id: "mem_hungary_european_union",
    memberEntityId: "ent_hungary",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ireland_european_union",
    memberEntityId: "ent_ireland",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1973,
    endYear: null
  }),
  Object.freeze({
    id: "mem_italy_european_union",
    memberEntityId: "ent_italy",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1958,
    endYear: null
  }),
  Object.freeze({
    id: "mem_latvia_european_union",
    memberEntityId: "ent_latvia",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lithuania_european_union",
    memberEntityId: "ent_lithuania",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_luxembourg_european_union",
    memberEntityId: "ent_luxembourg",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1958,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malta_european_union",
    memberEntityId: "ent_malta",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_netherlands_european_union",
    memberEntityId: "ent_netherlands",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1958,
    endYear: null
  }),
  Object.freeze({
    id: "mem_poland_european_union",
    memberEntityId: "ent_poland",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_portugal_european_union",
    memberEntityId: "ent_portugal",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1986,
    endYear: null
  }),
  Object.freeze({
    id: "mem_romania_european_union",
    memberEntityId: "ent_romania",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2007,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovakia_european_union",
    memberEntityId: "ent_slovakia",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovenia_european_union",
    memberEntityId: "ent_slovenia",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_spain_european_union",
    memberEntityId: "ent_spain",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1986,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sweden_european_union",
    memberEntityId: "ent_sweden",
    groupEntityId: "ent_european_union",
    status: "current",
    startYear: 1995,
    endYear: null
  }),
  Object.freeze({
    id: "mem_algeria_arab_league",
    memberEntityId: "ent_algeria",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1962,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahrain_arab_league",
    memberEntityId: "ent_bahrain",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1971,
    endYear: null
  }),
  Object.freeze({
    id: "mem_comoros_arab_league",
    memberEntityId: "ent_comoros",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1993,
    endYear: null
  }),
  Object.freeze({
    id: "mem_djibouti_arab_league",
    memberEntityId: "ent_djibouti",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1977,
    endYear: null
  }),
  Object.freeze({
    id: "mem_egypt_arab_league",
    memberEntityId: "ent_egypt",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1945,
    endYear: null,
    notes: "Suspended from 1979 to 1989; current membership is represented here."
  }),
  Object.freeze({
    id: "mem_iraq_arab_league",
    memberEntityId: "ent_iraq",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1945,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jordan_arab_league",
    memberEntityId: "ent_jordan",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1945,
    endYear: null,
    notes: "Joined as Transjordan."
  }),
  Object.freeze({
    id: "mem_kuwait_arab_league",
    memberEntityId: "ent_kuwait",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1961,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lebanon_arab_league",
    memberEntityId: "ent_lebanon",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1945,
    endYear: null
  }),
  Object.freeze({
    id: "mem_libya_arab_league",
    memberEntityId: "ent_libya",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1953,
    endYear: null,
    notes: "Suspended and readmitted in 2011; current membership is represented here."
  }),
  Object.freeze({
    id: "mem_mauritania_arab_league",
    memberEntityId: "ent_mauritania",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1973,
    endYear: null
  }),
  Object.freeze({
    id: "mem_morocco_arab_league",
    memberEntityId: "ent_morocco",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1958,
    endYear: null
  }),
  Object.freeze({
    id: "mem_oman_arab_league",
    memberEntityId: "ent_oman",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1971,
    endYear: null
  }),
  Object.freeze({
    id: "mem_palestine_arab_league",
    memberEntityId: "ent_palestine",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1976,
    endYear: null,
    notes: "The Palestinian seat was originally held by the Palestine Liberation Organization."
  }),
  Object.freeze({
    id: "mem_qatar_arab_league",
    memberEntityId: "ent_qatar",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1971,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saudi_arabia_arab_league",
    memberEntityId: "ent_saudi_arabia",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1945,
    endYear: null
  }),
  Object.freeze({
    id: "mem_somalia_arab_league",
    memberEntityId: "ent_somalia",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1974,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sudan_arab_league",
    memberEntityId: "ent_sudan",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1956,
    endYear: null
  }),
  Object.freeze({
    id: "mem_syria_arab_league",
    memberEntityId: "ent_syria",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1945,
    endYear: null,
    notes: "Suspended from 2011 to 2023; current membership is represented here."
  }),
  Object.freeze({
    id: "mem_tunisia_arab_league",
    memberEntityId: "ent_tunisia",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1958,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_arab_emirates_arab_league",
    memberEntityId: "ent_united_arab_emirates",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1971,
    endYear: null
  }),
  Object.freeze({
    id: "mem_yemen_arab_league",
    memberEntityId: "ent_yemen",
    groupEntityId: "ent_arab_league",
    status: "current",
    startYear: 1945,
    endYear: null,
    notes: "Joined as North Yemen; current membership is represented by Yemen."
  }),

  /*
    NATO member states.
  */
  Object.freeze({
    id: "mem_albania_nato",
    memberEntityId: "ent_albania",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2009,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belgium_nato",
    memberEntityId: "ent_belgium",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bulgaria_nato",
    memberEntityId: "ent_bulgaria",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_canada_nato",
    memberEntityId: "ent_canada",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_croatia_nato",
    memberEntityId: "ent_croatia",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2009,
    endYear: null
  }),
  Object.freeze({
    id: "mem_czechia_nato",
    memberEntityId: "ent_czechia",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1999,
    endYear: null
  }),
  Object.freeze({
    id: "mem_denmark_nato",
    memberEntityId: "ent_denmark",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_estonia_nato",
    memberEntityId: "ent_estonia",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_finland_nato",
    memberEntityId: "ent_finland",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2023,
    endYear: null
  }),
  Object.freeze({
    id: "mem_france_nato",
    memberEntityId: "ent_france",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_germany_nato",
    memberEntityId: "ent_germany",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1955,
    endYear: null
  }),
  Object.freeze({
    id: "mem_greece_nato",
    memberEntityId: "ent_greece",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1952,
    endYear: null
  }),
  Object.freeze({
    id: "mem_hungary_nato",
    memberEntityId: "ent_hungary",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1999,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iceland_nato",
    memberEntityId: "ent_iceland",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_italy_nato",
    memberEntityId: "ent_italy",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_latvia_nato",
    memberEntityId: "ent_latvia",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lithuania_nato",
    memberEntityId: "ent_lithuania",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_luxembourg_nato",
    memberEntityId: "ent_luxembourg",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_montenegro_nato",
    memberEntityId: "ent_montenegro",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2017,
    endYear: null
  }),
  Object.freeze({
    id: "mem_netherlands_nato",
    memberEntityId: "ent_netherlands",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_north_macedonia_nato",
    memberEntityId: "ent_north_macedonia",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2020,
    endYear: null
  }),
  Object.freeze({
    id: "mem_norway_nato",
    memberEntityId: "ent_norway",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_poland_nato",
    memberEntityId: "ent_poland",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1999,
    endYear: null
  }),
  Object.freeze({
    id: "mem_portugal_nato",
    memberEntityId: "ent_portugal",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_romania_nato",
    memberEntityId: "ent_romania",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovakia_nato",
    memberEntityId: "ent_slovakia",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovenia_nato",
    memberEntityId: "ent_slovenia",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2004,
    endYear: null
  }),
  Object.freeze({
    id: "mem_spain_nato",
    memberEntityId: "ent_spain",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1982,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sweden_nato",
    memberEntityId: "ent_sweden",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 2024,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkey_nato",
    memberEntityId: "ent_turkey",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1952,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_kingdom_nato",
    memberEntityId: "ent_united_kingdom",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_states_nato",
    memberEntityId: "ent_united_states",
    groupEntityId: "ent_nato",
    status: "current",
    startYear: 1949,
    endYear: null
  }),
  Object.freeze({
    id: "mem_afghanistan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_afghanistan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_albania_organisation_of_islamic_cooperation",
    memberEntityId: "ent_albania",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1992,
    endYear: null
  }),
  Object.freeze({
    id: "mem_algeria_organisation_of_islamic_cooperation",
    memberEntityId: "ent_algeria",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_azerbaijan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_azerbaijan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1992,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahrain_organisation_of_islamic_cooperation",
    memberEntityId: "ent_bahrain",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1972,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bangladesh_organisation_of_islamic_cooperation",
    memberEntityId: "ent_bangladesh",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1974,
    endYear: null
  }),
  Object.freeze({
    id: "mem_benin_organisation_of_islamic_cooperation",
    memberEntityId: "ent_benin",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1983,
    endYear: null
  }),
  Object.freeze({
    id: "mem_brunei_organisation_of_islamic_cooperation",
    memberEntityId: "ent_brunei",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1984,
    endYear: null
  }),
  Object.freeze({
    id: "mem_burkina_faso_organisation_of_islamic_cooperation",
    memberEntityId: "ent_burkina_faso",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1974,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cameroon_organisation_of_islamic_cooperation",
    memberEntityId: "ent_cameroon",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1974,
    endYear: null
  }),
  Object.freeze({
    id: "mem_chad_organisation_of_islamic_cooperation",
    memberEntityId: "ent_chad",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_comoros_organisation_of_islamic_cooperation",
    memberEntityId: "ent_comoros",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1976,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cote_d_ivoire_organisation_of_islamic_cooperation",
    memberEntityId: "ent_cote_d_ivoire",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 2001,
    endYear: null
  }),
  Object.freeze({
    id: "mem_djibouti_organisation_of_islamic_cooperation",
    memberEntityId: "ent_djibouti",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1978,
    endYear: null
  }),
  Object.freeze({
    id: "mem_egypt_organisation_of_islamic_cooperation",
    memberEntityId: "ent_egypt",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gabon_organisation_of_islamic_cooperation",
    memberEntityId: "ent_gabon",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1974,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gambia_organisation_of_islamic_cooperation",
    memberEntityId: "ent_gambia",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1974,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guinea_organisation_of_islamic_cooperation",
    memberEntityId: "ent_guinea",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guinea_bissau_organisation_of_islamic_cooperation",
    memberEntityId: "ent_guinea_bissau",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1974,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guyana_organisation_of_islamic_cooperation",
    memberEntityId: "ent_guyana",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1998,
    endYear: null
  }),
  Object.freeze({
    id: "mem_indonesia_organisation_of_islamic_cooperation",
    memberEntityId: "ent_indonesia",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iran_organisation_of_islamic_cooperation",
    memberEntityId: "ent_iran",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iraq_organisation_of_islamic_cooperation",
    memberEntityId: "ent_iraq",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1975,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jordan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_jordan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kazakhstan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_kazakhstan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1995,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kuwait_organisation_of_islamic_cooperation",
    memberEntityId: "ent_kuwait",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kyrgyzstan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_kyrgyzstan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1992,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lebanon_organisation_of_islamic_cooperation",
    memberEntityId: "ent_lebanon",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_libya_organisation_of_islamic_cooperation",
    memberEntityId: "ent_libya",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malaysia_organisation_of_islamic_cooperation",
    memberEntityId: "ent_malaysia",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_maldives_organisation_of_islamic_cooperation",
    memberEntityId: "ent_maldives",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1976,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mali_organisation_of_islamic_cooperation",
    memberEntityId: "ent_mali",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mauritania_organisation_of_islamic_cooperation",
    memberEntityId: "ent_mauritania",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_morocco_organisation_of_islamic_cooperation",
    memberEntityId: "ent_morocco",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mozambique_organisation_of_islamic_cooperation",
    memberEntityId: "ent_mozambique",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1994,
    endYear: null
  }),
  Object.freeze({
    id: "mem_niger_organisation_of_islamic_cooperation",
    memberEntityId: "ent_niger",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nigeria_organisation_of_islamic_cooperation",
    memberEntityId: "ent_nigeria",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1986,
    endYear: null
  }),
  Object.freeze({
    id: "mem_oman_organisation_of_islamic_cooperation",
    memberEntityId: "ent_oman",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1972,
    endYear: null
  }),
  Object.freeze({
    id: "mem_pakistan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_pakistan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_palestine_organisation_of_islamic_cooperation",
    memberEntityId: "ent_palestine",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_qatar_organisation_of_islamic_cooperation",
    memberEntityId: "ent_qatar",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1972,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saudi_arabia_organisation_of_islamic_cooperation",
    memberEntityId: "ent_saudi_arabia",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_senegal_organisation_of_islamic_cooperation",
    memberEntityId: "ent_senegal",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sierra_leone_organisation_of_islamic_cooperation",
    memberEntityId: "ent_sierra_leone",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1972,
    endYear: null
  }),
  Object.freeze({
    id: "mem_somalia_organisation_of_islamic_cooperation",
    memberEntityId: "ent_somalia",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sudan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_sudan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_suriname_organisation_of_islamic_cooperation",
    memberEntityId: "ent_suriname",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1996,
    endYear: null
  }),
  Object.freeze({
    id: "mem_syria_organisation_of_islamic_cooperation",
    memberEntityId: "ent_syria",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1972,
    endYear: null,
    notes: "Suspended from 2012 to 2025; current membership is represented here."
  }),
  Object.freeze({
    id: "mem_tajikistan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_tajikistan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1992,
    endYear: null
  }),
  Object.freeze({
    id: "mem_togo_organisation_of_islamic_cooperation",
    memberEntityId: "ent_togo",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1997,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tunisia_organisation_of_islamic_cooperation",
    memberEntityId: "ent_tunisia",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkey_organisation_of_islamic_cooperation",
    memberEntityId: "ent_turkey",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkmenistan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_turkmenistan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1992,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_arab_emirates_organisation_of_islamic_cooperation",
    memberEntityId: "ent_united_arab_emirates",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1972,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uganda_organisation_of_islamic_cooperation",
    memberEntityId: "ent_uganda",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1974,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uzbekistan_organisation_of_islamic_cooperation",
    memberEntityId: "ent_uzbekistan",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1996,
    endYear: null
  }),
  Object.freeze({
    id: "mem_yemen_organisation_of_islamic_cooperation",
    memberEntityId: "ent_yemen",
    groupEntityId: "ent_organisation_of_islamic_cooperation",
    status: "current",
    startYear: 1969,
    endYear: null
  })
,

  /*
    United Nations current member states.

    Current-only membership set. Start years are intentionally left null here
    because this group is used for present-day membership browsing and quiz
    collection generation rather than accession-date history.
  */
  Object.freeze({
    id: "mem_afghanistan_united_nations",
    memberEntityId: "ent_afghanistan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_albania_united_nations",
    memberEntityId: "ent_albania",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_algeria_united_nations",
    memberEntityId: "ent_algeria",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_andorra_united_nations",
    memberEntityId: "ent_andorra",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_angola_united_nations",
    memberEntityId: "ent_angola",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_antigua_and_barbuda_united_nations",
    memberEntityId: "ent_antigua_and_barbuda",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_argentina_united_nations",
    memberEntityId: "ent_argentina",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_armenia_united_nations",
    memberEntityId: "ent_armenia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_australia_united_nations",
    memberEntityId: "ent_australia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_austria_united_nations",
    memberEntityId: "ent_austria",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_azerbaijan_united_nations",
    memberEntityId: "ent_azerbaijan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahamas_united_nations",
    memberEntityId: "ent_bahamas",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahrain_united_nations",
    memberEntityId: "ent_bahrain",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bangladesh_united_nations",
    memberEntityId: "ent_bangladesh",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_barbados_united_nations",
    memberEntityId: "ent_barbados",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belarus_united_nations",
    memberEntityId: "ent_belarus",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belgium_united_nations",
    memberEntityId: "ent_belgium",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belize_united_nations",
    memberEntityId: "ent_belize",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_benin_united_nations",
    memberEntityId: "ent_benin",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bhutan_united_nations",
    memberEntityId: "ent_bhutan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bolivia_united_nations",
    memberEntityId: "ent_bolivia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bosnia_and_herzegovina_united_nations",
    memberEntityId: "ent_bosnia_and_herzegovina",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_botswana_united_nations",
    memberEntityId: "ent_botswana",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_brazil_united_nations",
    memberEntityId: "ent_brazil",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_brunei_united_nations",
    memberEntityId: "ent_brunei",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bulgaria_united_nations",
    memberEntityId: "ent_bulgaria",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_burkina_faso_united_nations",
    memberEntityId: "ent_burkina_faso",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_burundi_united_nations",
    memberEntityId: "ent_burundi",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cabo_verde_united_nations",
    memberEntityId: "ent_cabo_verde",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cambodia_united_nations",
    memberEntityId: "ent_cambodia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cameroon_united_nations",
    memberEntityId: "ent_cameroon",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_canada_united_nations",
    memberEntityId: "ent_canada",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_central_african_republic_united_nations",
    memberEntityId: "ent_central_african_republic",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_chad_united_nations",
    memberEntityId: "ent_chad",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_chile_united_nations",
    memberEntityId: "ent_chile",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_china_united_nations",
    memberEntityId: "ent_china",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_colombia_united_nations",
    memberEntityId: "ent_colombia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_comoros_united_nations",
    memberEntityId: "ent_comoros",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_costa_rica_united_nations",
    memberEntityId: "ent_costa_rica",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_croatia_united_nations",
    memberEntityId: "ent_croatia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cuba_united_nations",
    memberEntityId: "ent_cuba",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cyprus_united_nations",
    memberEntityId: "ent_cyprus",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_czechia_united_nations",
    memberEntityId: "ent_czechia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cote_d_ivoire_united_nations",
    memberEntityId: "ent_cote_d_ivoire",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_democratic_republic_of_the_congo_united_nations",
    memberEntityId: "ent_democratic_republic_of_the_congo",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_denmark_united_nations",
    memberEntityId: "ent_denmark",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_djibouti_united_nations",
    memberEntityId: "ent_djibouti",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_dominica_united_nations",
    memberEntityId: "ent_dominica",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_dominican_republic_united_nations",
    memberEntityId: "ent_dominican_republic",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ecuador_united_nations",
    memberEntityId: "ent_ecuador",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_egypt_united_nations",
    memberEntityId: "ent_egypt",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_el_salvador_united_nations",
    memberEntityId: "ent_el_salvador",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_equatorial_guinea_united_nations",
    memberEntityId: "ent_equatorial_guinea",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_eritrea_united_nations",
    memberEntityId: "ent_eritrea",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_estonia_united_nations",
    memberEntityId: "ent_estonia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_eswatini_united_nations",
    memberEntityId: "ent_eswatini",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ethiopia_united_nations",
    memberEntityId: "ent_ethiopia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_federated_states_of_micronesia_united_nations",
    memberEntityId: "ent_federated_states_of_micronesia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiji_united_nations",
    memberEntityId: "ent_fiji",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_finland_united_nations",
    memberEntityId: "ent_finland",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_france_united_nations",
    memberEntityId: "ent_france",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gabon_united_nations",
    memberEntityId: "ent_gabon",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gambia_united_nations",
    memberEntityId: "ent_gambia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_georgia_united_nations",
    memberEntityId: "ent_georgia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_germany_united_nations",
    memberEntityId: "ent_germany",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ghana_united_nations",
    memberEntityId: "ent_ghana",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_greece_united_nations",
    memberEntityId: "ent_greece",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_grenada_united_nations",
    memberEntityId: "ent_grenada",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guatemala_united_nations",
    memberEntityId: "ent_guatemala",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guinea_united_nations",
    memberEntityId: "ent_guinea",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guinea_bissau_united_nations",
    memberEntityId: "ent_guinea_bissau",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guyana_united_nations",
    memberEntityId: "ent_guyana",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_haiti_united_nations",
    memberEntityId: "ent_haiti",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_honduras_united_nations",
    memberEntityId: "ent_honduras",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_hungary_united_nations",
    memberEntityId: "ent_hungary",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iceland_united_nations",
    memberEntityId: "ent_iceland",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_india_united_nations",
    memberEntityId: "ent_india",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_indonesia_united_nations",
    memberEntityId: "ent_indonesia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iran_united_nations",
    memberEntityId: "ent_iran",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iraq_united_nations",
    memberEntityId: "ent_iraq",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ireland_united_nations",
    memberEntityId: "ent_ireland",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_israel_united_nations",
    memberEntityId: "ent_israel",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_italy_united_nations",
    memberEntityId: "ent_italy",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jamaica_united_nations",
    memberEntityId: "ent_jamaica",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_japan_united_nations",
    memberEntityId: "ent_japan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jordan_united_nations",
    memberEntityId: "ent_jordan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kazakhstan_united_nations",
    memberEntityId: "ent_kazakhstan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kenya_united_nations",
    memberEntityId: "ent_kenya",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kiribati_united_nations",
    memberEntityId: "ent_kiribati",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kuwait_united_nations",
    memberEntityId: "ent_kuwait",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kyrgyzstan_united_nations",
    memberEntityId: "ent_kyrgyzstan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_laos_united_nations",
    memberEntityId: "ent_laos",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_latvia_united_nations",
    memberEntityId: "ent_latvia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lebanon_united_nations",
    memberEntityId: "ent_lebanon",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lesotho_united_nations",
    memberEntityId: "ent_lesotho",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_liberia_united_nations",
    memberEntityId: "ent_liberia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_libya_united_nations",
    memberEntityId: "ent_libya",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_liechtenstein_united_nations",
    memberEntityId: "ent_liechtenstein",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lithuania_united_nations",
    memberEntityId: "ent_lithuania",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_luxembourg_united_nations",
    memberEntityId: "ent_luxembourg",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_madagascar_united_nations",
    memberEntityId: "ent_madagascar",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malawi_united_nations",
    memberEntityId: "ent_malawi",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malaysia_united_nations",
    memberEntityId: "ent_malaysia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_maldives_united_nations",
    memberEntityId: "ent_maldives",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mali_united_nations",
    memberEntityId: "ent_mali",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malta_united_nations",
    memberEntityId: "ent_malta",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_marshall_islands_united_nations",
    memberEntityId: "ent_marshall_islands",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mauritania_united_nations",
    memberEntityId: "ent_mauritania",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mauritius_united_nations",
    memberEntityId: "ent_mauritius",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mexico_united_nations",
    memberEntityId: "ent_mexico",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_moldova_united_nations",
    memberEntityId: "ent_moldova",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_monaco_united_nations",
    memberEntityId: "ent_monaco",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mongolia_united_nations",
    memberEntityId: "ent_mongolia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_montenegro_united_nations",
    memberEntityId: "ent_montenegro",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_morocco_united_nations",
    memberEntityId: "ent_morocco",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mozambique_united_nations",
    memberEntityId: "ent_mozambique",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_myanmar_united_nations",
    memberEntityId: "ent_myanmar",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_namibia_united_nations",
    memberEntityId: "ent_namibia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nauru_united_nations",
    memberEntityId: "ent_nauru",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nepal_united_nations",
    memberEntityId: "ent_nepal",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_netherlands_united_nations",
    memberEntityId: "ent_netherlands",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_new_zealand_united_nations",
    memberEntityId: "ent_new_zealand",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nicaragua_united_nations",
    memberEntityId: "ent_nicaragua",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_niger_united_nations",
    memberEntityId: "ent_niger",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nigeria_united_nations",
    memberEntityId: "ent_nigeria",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_north_korea_united_nations",
    memberEntityId: "ent_north_korea",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_north_macedonia_united_nations",
    memberEntityId: "ent_north_macedonia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_norway_united_nations",
    memberEntityId: "ent_norway",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_oman_united_nations",
    memberEntityId: "ent_oman",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_pakistan_united_nations",
    memberEntityId: "ent_pakistan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_palau_united_nations",
    memberEntityId: "ent_palau",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_panama_united_nations",
    memberEntityId: "ent_panama",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_papua_new_guinea_united_nations",
    memberEntityId: "ent_papua_new_guinea",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_paraguay_united_nations",
    memberEntityId: "ent_paraguay",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_peru_united_nations",
    memberEntityId: "ent_peru",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_philippines_united_nations",
    memberEntityId: "ent_philippines",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_poland_united_nations",
    memberEntityId: "ent_poland",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_portugal_united_nations",
    memberEntityId: "ent_portugal",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_qatar_united_nations",
    memberEntityId: "ent_qatar",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_republic_of_the_congo_united_nations",
    memberEntityId: "ent_republic_of_the_congo",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_romania_united_nations",
    memberEntityId: "ent_romania",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_russia_united_nations",
    memberEntityId: "ent_russia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_rwanda_united_nations",
    memberEntityId: "ent_rwanda",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_kitts_and_nevis_united_nations",
    memberEntityId: "ent_saint_kitts_and_nevis",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_lucia_united_nations",
    memberEntityId: "ent_saint_lucia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_vincent_and_the_grenadines_united_nations",
    memberEntityId: "ent_saint_vincent_and_the_grenadines",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_samoa_united_nations",
    memberEntityId: "ent_samoa",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_san_marino_united_nations",
    memberEntityId: "ent_san_marino",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saudi_arabia_united_nations",
    memberEntityId: "ent_saudi_arabia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_senegal_united_nations",
    memberEntityId: "ent_senegal",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_serbia_united_nations",
    memberEntityId: "ent_serbia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_seychelles_united_nations",
    memberEntityId: "ent_seychelles",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sierra_leone_united_nations",
    memberEntityId: "ent_sierra_leone",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_singapore_united_nations",
    memberEntityId: "ent_singapore",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovakia_united_nations",
    memberEntityId: "ent_slovakia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovenia_united_nations",
    memberEntityId: "ent_slovenia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_solomon_islands_united_nations",
    memberEntityId: "ent_solomon_islands",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_somalia_united_nations",
    memberEntityId: "ent_somalia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_africa_united_nations",
    memberEntityId: "ent_south_africa",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_korea_united_nations",
    memberEntityId: "ent_south_korea",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_sudan_united_nations",
    memberEntityId: "ent_south_sudan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_spain_united_nations",
    memberEntityId: "ent_spain",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sri_lanka_united_nations",
    memberEntityId: "ent_sri_lanka",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sudan_united_nations",
    memberEntityId: "ent_sudan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_suriname_united_nations",
    memberEntityId: "ent_suriname",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sweden_united_nations",
    memberEntityId: "ent_sweden",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_switzerland_united_nations",
    memberEntityId: "ent_switzerland",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_syria_united_nations",
    memberEntityId: "ent_syria",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sao_tome_and_principe_united_nations",
    memberEntityId: "ent_sao_tome_and_principe",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tajikistan_united_nations",
    memberEntityId: "ent_tajikistan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tanzania_united_nations",
    memberEntityId: "ent_tanzania",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_thailand_united_nations",
    memberEntityId: "ent_thailand",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_timor_leste_united_nations",
    memberEntityId: "ent_timor_leste",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_togo_united_nations",
    memberEntityId: "ent_togo",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tonga_united_nations",
    memberEntityId: "ent_tonga",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_trinidad_and_tobago_united_nations",
    memberEntityId: "ent_trinidad_and_tobago",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tunisia_united_nations",
    memberEntityId: "ent_tunisia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkey_united_nations",
    memberEntityId: "ent_turkey",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkmenistan_united_nations",
    memberEntityId: "ent_turkmenistan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tuvalu_united_nations",
    memberEntityId: "ent_tuvalu",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uganda_united_nations",
    memberEntityId: "ent_uganda",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ukraine_united_nations",
    memberEntityId: "ent_ukraine",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_arab_emirates_united_nations",
    memberEntityId: "ent_united_arab_emirates",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_kingdom_united_nations",
    memberEntityId: "ent_united_kingdom",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_states_united_nations",
    memberEntityId: "ent_united_states",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uruguay_united_nations",
    memberEntityId: "ent_uruguay",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uzbekistan_united_nations",
    memberEntityId: "ent_uzbekistan",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_vanuatu_united_nations",
    memberEntityId: "ent_vanuatu",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_venezuela_united_nations",
    memberEntityId: "ent_venezuela",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_vietnam_united_nations",
    memberEntityId: "ent_vietnam",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_yemen_united_nations",
    memberEntityId: "ent_yemen",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_zambia_united_nations",
    memberEntityId: "ent_zambia",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_zimbabwe_united_nations",
    memberEntityId: "ent_zimbabwe",
    groupEntityId: "ent_united_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  })
,
  Object.freeze({
    id: "mem_botswana_commonwealth_of_nations",
    memberEntityId: "ent_botswana",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cameroon_commonwealth_of_nations",
    memberEntityId: "ent_cameroon",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gabon_commonwealth_of_nations",
    memberEntityId: "ent_gabon",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gambia_commonwealth_of_nations",
    memberEntityId: "ent_gambia",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ghana_commonwealth_of_nations",
    memberEntityId: "ent_ghana",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kenya_commonwealth_of_nations",
    memberEntityId: "ent_kenya",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_eswatini_commonwealth_of_nations",
    memberEntityId: "ent_eswatini",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lesotho_commonwealth_of_nations",
    memberEntityId: "ent_lesotho",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malawi_commonwealth_of_nations",
    memberEntityId: "ent_malawi",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mauritius_commonwealth_of_nations",
    memberEntityId: "ent_mauritius",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mozambique_commonwealth_of_nations",
    memberEntityId: "ent_mozambique",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_namibia_commonwealth_of_nations",
    memberEntityId: "ent_namibia",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nigeria_commonwealth_of_nations",
    memberEntityId: "ent_nigeria",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_rwanda_commonwealth_of_nations",
    memberEntityId: "ent_rwanda",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_seychelles_commonwealth_of_nations",
    memberEntityId: "ent_seychelles",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sierra_leone_commonwealth_of_nations",
    memberEntityId: "ent_sierra_leone",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_africa_commonwealth_of_nations",
    memberEntityId: "ent_south_africa",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_togo_commonwealth_of_nations",
    memberEntityId: "ent_togo",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uganda_commonwealth_of_nations",
    memberEntityId: "ent_uganda",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tanzania_commonwealth_of_nations",
    memberEntityId: "ent_tanzania",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_zambia_commonwealth_of_nations",
    memberEntityId: "ent_zambia",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bangladesh_commonwealth_of_nations",
    memberEntityId: "ent_bangladesh",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_brunei_commonwealth_of_nations",
    memberEntityId: "ent_brunei",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_india_commonwealth_of_nations",
    memberEntityId: "ent_india",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malaysia_commonwealth_of_nations",
    memberEntityId: "ent_malaysia",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_maldives_commonwealth_of_nations",
    memberEntityId: "ent_maldives",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_pakistan_commonwealth_of_nations",
    memberEntityId: "ent_pakistan",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_singapore_commonwealth_of_nations",
    memberEntityId: "ent_singapore",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sri_lanka_commonwealth_of_nations",
    memberEntityId: "ent_sri_lanka",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_antigua_and_barbuda_commonwealth_of_nations",
    memberEntityId: "ent_antigua_and_barbuda",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahamas_commonwealth_of_nations",
    memberEntityId: "ent_bahamas",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_barbados_commonwealth_of_nations",
    memberEntityId: "ent_barbados",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belize_commonwealth_of_nations",
    memberEntityId: "ent_belize",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_canada_commonwealth_of_nations",
    memberEntityId: "ent_canada",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_dominica_commonwealth_of_nations",
    memberEntityId: "ent_dominica",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_grenada_commonwealth_of_nations",
    memberEntityId: "ent_grenada",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guyana_commonwealth_of_nations",
    memberEntityId: "ent_guyana",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jamaica_commonwealth_of_nations",
    memberEntityId: "ent_jamaica",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_lucia_commonwealth_of_nations",
    memberEntityId: "ent_saint_lucia",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_kitts_and_nevis_commonwealth_of_nations",
    memberEntityId: "ent_saint_kitts_and_nevis",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_vincand_the_grenadines_commonwealth_of_nations",
    memberEntityId: "ent_saint_vincent_and_the_grenadines",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_trinidad_and_tobago_commonwealth_of_nations",
    memberEntityId: "ent_trinidad_and_tobago",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cyprus_commonwealth_of_nations",
    memberEntityId: "ent_cyprus",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malta_commonwealth_of_nations",
    memberEntityId: "ent_malta",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_kingdom_commonwealth_of_nations",
    memberEntityId: "ent_united_kingdom",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_australia_commonwealth_of_nations",
    memberEntityId: "ent_australia",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiji_commonwealth_of_nations",
    memberEntityId: "ent_fiji",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kiribati_commonwealth_of_nations",
    memberEntityId: "ent_kiribati",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nauru_commonwealth_of_nations",
    memberEntityId: "ent_nauru",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_new_zealand_commonwealth_of_nations",
    memberEntityId: "ent_new_zealand",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_papua_new_guinea_commonwealth_of_nations",
    memberEntityId: "ent_papua_new_guinea",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_samoa_commonwealth_of_nations",
    memberEntityId: "ent_samoa",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_solomon_islands_commonwealth_of_nations",
    memberEntityId: "ent_solomon_islands",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tonga_commonwealth_of_nations",
    memberEntityId: "ent_tonga",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tuvalu_commonwealth_of_nations",
    memberEntityId: "ent_tuvalu",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_vanuatu_commonwealth_of_nations",
    memberEntityId: "ent_vanuatu",
    groupEntityId: "ent_commonwealth_of_nations",
    relationshipType: "member",
    membershipType: "member_state",
    status: "current",
    startYear: null,
    endYear: null
  }),
    Object.freeze({
    id: "mem_afghanistan_fifa",
    memberEntityId: "ent_afghanistan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    displayNameOverride: "Afghanistan",
    galleryVariantId: "var_afghanistan_republic_tricolour_current",
    quizVariantId: "var_afghanistan_republic_tricolour_current",
    notes: "Use the Afghan Republic tricolour as Afghanistan's external representation in non-geographic FIFA-facing contexts.",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_albania_fifa",
    memberEntityId: "ent_albania",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_algeria_fifa",
    memberEntityId: "ent_algeria",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_american_samoa_fifa",
    memberEntityId: "ent_american_samoa",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_andorra_fifa",
    memberEntityId: "ent_andorra",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_angola_fifa",
    memberEntityId: "ent_angola",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_anguilla_fifa",
    memberEntityId: "ent_anguilla",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_antigua_and_barbuda_fifa",
    memberEntityId: "ent_antigua_and_barbuda",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_argentina_fifa",
    memberEntityId: "ent_argentina",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_armenia_fifa",
    memberEntityId: "ent_armenia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_aruba_fifa",
    memberEntityId: "ent_aruba",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_australia_fifa",
    memberEntityId: "ent_australia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_austria_fifa",
    memberEntityId: "ent_austria",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_azerbaijan_fifa",
    memberEntityId: "ent_azerbaijan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahamas_fifa",
    memberEntityId: "ent_bahamas",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahrain_fifa",
    memberEntityId: "ent_bahrain",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bangladesh_fifa",
    memberEntityId: "ent_bangladesh",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_barbados_fifa",
    memberEntityId: "ent_barbados",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belarus_fifa",
    memberEntityId: "ent_belarus",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belgium_fifa",
    memberEntityId: "ent_belgium",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belize_fifa",
    memberEntityId: "ent_belize",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_benin_fifa",
    memberEntityId: "ent_benin",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bermuda_fifa",
    memberEntityId: "ent_bermuda",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bhutan_fifa",
    memberEntityId: "ent_bhutan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bolivia_fifa",
    memberEntityId: "ent_bolivia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bosnia_and_herzegovina_fifa",
    memberEntityId: "ent_bosnia_and_herzegovina",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_botswana_fifa",
    memberEntityId: "ent_botswana",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_brazil_fifa",
    memberEntityId: "ent_brazil",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_british_virgin_islands_fifa",
    memberEntityId: "ent_british_virgin_islands",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_brunei_fifa",
    memberEntityId: "ent_brunei",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bulgaria_fifa",
    memberEntityId: "ent_bulgaria",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_burkina_faso_fifa",
    memberEntityId: "ent_burkina_faso",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_burundi_fifa",
    memberEntityId: "ent_burundi",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cambodia_fifa",
    memberEntityId: "ent_cambodia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cameroon_fifa",
    memberEntityId: "ent_cameroon",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_canada_fifa",
    memberEntityId: "ent_canada",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cabo_verde_fifa",
    memberEntityId: "ent_cabo_verde",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cayman_islands_fifa",
    memberEntityId: "ent_cayman_islands",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_central_african_republic_fifa",
    memberEntityId: "ent_central_african_republic",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_chad_fifa",
    memberEntityId: "ent_chad",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_chile_fifa",
    memberEntityId: "ent_chile",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_china_fifa",
    memberEntityId: "ent_china",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
    Object.freeze({
    id: "mem_taiwan_fifa",
    memberEntityId: "ent_taiwan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    displayNameOverride: "Chinese Taipei",
    galleryVariantId: "var_taiwan_chinese_taipei_current",
    quizVariantId: "var_taiwan_chinese_taipei_current",
    answerAliases: ["Chinese Taipei", "Taiwan"],
    notes: "FIFA member association name: Chinese Taipei. Vexillator keeps the underlying entity as Taiwan and uses the Chinese Taipei Olympic flag for FIFA-facing representation.",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_colombia_fifa",
    memberEntityId: "ent_colombia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_comoros_fifa",
    memberEntityId: "ent_comoros",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_republic_of_the_congo_fifa",
    memberEntityId: "ent_republic_of_the_congo",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cook_islands_fifa",
    memberEntityId: "ent_cook_islands",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_costa_rica_fifa",
    memberEntityId: "ent_costa_rica",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_croatia_fifa",
    memberEntityId: "ent_croatia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cuba_fifa",
    memberEntityId: "ent_cuba",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_curacao_fifa",
    memberEntityId: "ent_curacao",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cyprus_fifa",
    memberEntityId: "ent_cyprus",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_czechia_fifa",
    memberEntityId: "ent_czechia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_denmark_fifa",
    memberEntityId: "ent_denmark",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_djibouti_fifa",
    memberEntityId: "ent_djibouti",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_dominica_fifa",
    memberEntityId: "ent_dominica",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_dominican_republic_fifa",
    memberEntityId: "ent_dominican_republic",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_democratic_republic_of_the_congo_fifa",
    memberEntityId: "ent_democratic_republic_of_the_congo",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ecuador_fifa",
    memberEntityId: "ent_ecuador",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_egypt_fifa",
    memberEntityId: "ent_egypt",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_el_salvador_fifa",
    memberEntityId: "ent_el_salvador",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_england_fifa",
    memberEntityId: "ent_england",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_equatorial_guinea_fifa",
    memberEntityId: "ent_equatorial_guinea",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_eritrea_fifa",
    memberEntityId: "ent_eritrea",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_estonia_fifa",
    memberEntityId: "ent_estonia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_eswatini_fifa",
    memberEntityId: "ent_eswatini",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ethiopia_fifa",
    memberEntityId: "ent_ethiopia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_faroe_islands_fifa",
    memberEntityId: "ent_faroe_islands",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiji_fifa",
    memberEntityId: "ent_fiji",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_finland_fifa",
    memberEntityId: "ent_finland",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_france_fifa",
    memberEntityId: "ent_france",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gabon_fifa",
    memberEntityId: "ent_gabon",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gambia_fifa",
    memberEntityId: "ent_gambia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_georgia_fifa",
    memberEntityId: "ent_georgia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_germany_fifa",
    memberEntityId: "ent_germany",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ghana_fifa",
    memberEntityId: "ent_ghana",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gibraltar_fifa",
    memberEntityId: "ent_gibraltar",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_greece_fifa",
    memberEntityId: "ent_greece",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_grenada_fifa",
    memberEntityId: "ent_grenada",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guam_fifa",
    memberEntityId: "ent_guam",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guatemala_fifa",
    memberEntityId: "ent_guatemala",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guinea_fifa",
    memberEntityId: "ent_guinea",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guinea_bissau_fifa",
    memberEntityId: "ent_guinea_bissau",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guyana_fifa",
    memberEntityId: "ent_guyana",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_haiti_fifa",
    memberEntityId: "ent_haiti",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_honduras_fifa",
    memberEntityId: "ent_honduras",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_hong_kong_fifa",
    memberEntityId: "ent_hong_kong",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_hungary_fifa",
    memberEntityId: "ent_hungary",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iceland_fifa",
    memberEntityId: "ent_iceland",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_india_fifa",
    memberEntityId: "ent_india",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_indonesia_fifa",
    memberEntityId: "ent_indonesia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iran_fifa",
    memberEntityId: "ent_iran",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iraq_fifa",
    memberEntityId: "ent_iraq",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_israel_fifa",
    memberEntityId: "ent_israel",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_italy_fifa",
    memberEntityId: "ent_italy",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cote_d_ivoire_fifa",
    memberEntityId: "ent_cote_d_ivoire",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jamaica_fifa",
    memberEntityId: "ent_jamaica",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_japan_fifa",
    memberEntityId: "ent_japan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jordan_fifa",
    memberEntityId: "ent_jordan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kazakhstan_fifa",
    memberEntityId: "ent_kazakhstan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kenya_fifa",
    memberEntityId: "ent_kenya",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kosovo_fifa",
    memberEntityId: "ent_kosovo",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kuwait_fifa",
    memberEntityId: "ent_kuwait",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kyrgyzstan_fifa",
    memberEntityId: "ent_kyrgyzstan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_laos_fifa",
    memberEntityId: "ent_laos",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_latvia_fifa",
    memberEntityId: "ent_latvia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lebanon_fifa",
    memberEntityId: "ent_lebanon",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lesotho_fifa",
    memberEntityId: "ent_lesotho",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_liberia_fifa",
    memberEntityId: "ent_liberia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_libya_fifa",
    memberEntityId: "ent_libya",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_liechtenstein_fifa",
    memberEntityId: "ent_liechtenstein",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lithuania_fifa",
    memberEntityId: "ent_lithuania",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_luxembourg_fifa",
    memberEntityId: "ent_luxembourg",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_macao_fifa",
    memberEntityId: "ent_macao",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_madagascar_fifa",
    memberEntityId: "ent_madagascar",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malawi_fifa",
    memberEntityId: "ent_malawi",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malaysia_fifa",
    memberEntityId: "ent_malaysia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_maldives_fifa",
    memberEntityId: "ent_maldives",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mali_fifa",
    memberEntityId: "ent_mali",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malta_fifa",
    memberEntityId: "ent_malta",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mauritania_fifa",
    memberEntityId: "ent_mauritania",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mauritius_fifa",
    memberEntityId: "ent_mauritius",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mexico_fifa",
    memberEntityId: "ent_mexico",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_moldova_fifa",
    memberEntityId: "ent_moldova",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mongolia_fifa",
    memberEntityId: "ent_mongolia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_montenegro_fifa",
    memberEntityId: "ent_montenegro",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_montserrat_fifa",
    memberEntityId: "ent_montserrat",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_morocco_fifa",
    memberEntityId: "ent_morocco",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mozambique_fifa",
    memberEntityId: "ent_mozambique",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_myanmar_fifa",
    memberEntityId: "ent_myanmar",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_namibia_fifa",
    memberEntityId: "ent_namibia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nepal_fifa",
    memberEntityId: "ent_nepal",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_netherlands_fifa",
    memberEntityId: "ent_netherlands",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_new_caledonia_fifa",
    memberEntityId: "ent_new_caledonia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_new_zealand_fifa",
    memberEntityId: "ent_new_zealand",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nicaragua_fifa",
    memberEntityId: "ent_nicaragua",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_niger_fifa",
    memberEntityId: "ent_niger",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nigeria_fifa",
    memberEntityId: "ent_nigeria",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_north_korea_fifa",
    memberEntityId: "ent_north_korea",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_north_macedonia_fifa",
    memberEntityId: "ent_north_macedonia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_northern_ireland_fifa",
    memberEntityId: "ent_northern_ireland",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_norway_fifa",
    memberEntityId: "ent_norway",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_oman_fifa",
    memberEntityId: "ent_oman",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_pakistan_fifa",
    memberEntityId: "ent_pakistan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_palestine_fifa",
    memberEntityId: "ent_palestine",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_panama_fifa",
    memberEntityId: "ent_panama",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_papua_new_guinea_fifa",
    memberEntityId: "ent_papua_new_guinea",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_paraguay_fifa",
    memberEntityId: "ent_paraguay",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_peru_fifa",
    memberEntityId: "ent_peru",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_philippines_fifa",
    memberEntityId: "ent_philippines",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_poland_fifa",
    memberEntityId: "ent_poland",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_portugal_fifa",
    memberEntityId: "ent_portugal",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_puerto_rico_fifa",
    memberEntityId: "ent_puerto_rico",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_qatar_fifa",
    memberEntityId: "ent_qatar",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ireland_fifa",
    memberEntityId: "ent_ireland",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_romania_fifa",
    memberEntityId: "ent_romania",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_russia_fifa",
    memberEntityId: "ent_russia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_rwanda_fifa",
    memberEntityId: "ent_rwanda",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_kitts_and_nevis_fifa",
    memberEntityId: "ent_saint_kitts_and_nevis",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_lucia_fifa",
    memberEntityId: "ent_saint_lucia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_vincand_the_grenadines_fifa",
    memberEntityId: "ent_saint_vincent_and_the_grenadines",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_samoa_fifa",
    memberEntityId: "ent_samoa",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_san_marino_fifa",
    memberEntityId: "ent_san_marino",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sao_tome_and_principe_fifa",
    memberEntityId: "ent_sao_tome_and_principe",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saudi_arabia_fifa",
    memberEntityId: "ent_saudi_arabia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_scotland_fifa",
    memberEntityId: "ent_scotland",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_senegal_fifa",
    memberEntityId: "ent_senegal",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_serbia_fifa",
    memberEntityId: "ent_serbia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_seychelles_fifa",
    memberEntityId: "ent_seychelles",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sierra_leone_fifa",
    memberEntityId: "ent_sierra_leone",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_singapore_fifa",
    memberEntityId: "ent_singapore",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovakia_fifa",
    memberEntityId: "ent_slovakia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovenia_fifa",
    memberEntityId: "ent_slovenia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_solomon_islands_fifa",
    memberEntityId: "ent_solomon_islands",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_somalia_fifa",
    memberEntityId: "ent_somalia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_africa_fifa",
    memberEntityId: "ent_south_africa",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_korea_fifa",
    memberEntityId: "ent_south_korea",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_sudan_fifa",
    memberEntityId: "ent_south_sudan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_spain_fifa",
    memberEntityId: "ent_spain",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sri_lanka_fifa",
    memberEntityId: "ent_sri_lanka",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sudan_fifa",
    memberEntityId: "ent_sudan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_suriname_fifa",
    memberEntityId: "ent_suriname",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sweden_fifa",
    memberEntityId: "ent_sweden",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_switzerland_fifa",
    memberEntityId: "ent_switzerland",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_syria_fifa",
    memberEntityId: "ent_syria",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
    Object.freeze({
    id: "mem_french_polynesia_fifa",
    memberEntityId: "ent_french_polynesia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    displayNameOverride: "Tahiti",
    galleryVariantId: "var_french_polynesia_current",
    quizVariantId: "var_french_polynesia_current",
    answerAliases: ["Tahiti", "French Polynesia"],
    notes: "FIFA and OFC use the association name Tahiti; the represented territorial entity is French Polynesia and the displayed flag is the French Polynesian flag.",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tajikistan_fifa",
    memberEntityId: "ent_tajikistan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tanzania_fifa",
    memberEntityId: "ent_tanzania",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_thailand_fifa",
    memberEntityId: "ent_thailand",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_timor_leste_fifa",
    memberEntityId: "ent_timor_leste",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_togo_fifa",
    memberEntityId: "ent_togo",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tonga_fifa",
    memberEntityId: "ent_tonga",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_trinidad_and_tobago_fifa",
    memberEntityId: "ent_trinidad_and_tobago",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tunisia_fifa",
    memberEntityId: "ent_tunisia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkey_fifa",
    memberEntityId: "ent_turkey",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkmenistan_fifa",
    memberEntityId: "ent_turkmenistan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turks_and_caicos_islands_fifa",
    memberEntityId: "ent_turks_and_caicos_islands",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uganda_fifa",
    memberEntityId: "ent_uganda",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ukraine_fifa",
    memberEntityId: "ent_ukraine",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_arab_emirates_fifa",
    memberEntityId: "ent_united_arab_emirates",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_states_fifa",
    memberEntityId: "ent_united_states",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uruguay_fifa",
    memberEntityId: "ent_uruguay",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_us_virgin_islands_fifa",
    memberEntityId: "ent_us_virgin_islands",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uzbekistan_fifa",
    memberEntityId: "ent_uzbekistan",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_vanuatu_fifa",
    memberEntityId: "ent_vanuatu",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_venezuela_fifa",
    memberEntityId: "ent_venezuela",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_vietnam_fifa",
    memberEntityId: "ent_vietnam",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_wales_fifa",
    memberEntityId: "ent_wales",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_yemen_fifa",
    memberEntityId: "ent_yemen",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_zambia_fifa",
    memberEntityId: "ent_zambia",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_zimbabwe_fifa",
    memberEntityId: "ent_zimbabwe",
    groupEntityId: "ent_fifa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  })
,
  Object.freeze({
    id: "mem_afc_fifa_confederation",
    memberEntityId: "ent_afc",
    groupEntityId: "ent_fifa",
    relationshipType: "affiliated_with",
    membershipType: "confederation",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_caf_fifa_confederation",
    memberEntityId: "ent_caf",
    groupEntityId: "ent_fifa",
    relationshipType: "affiliated_with",
    membershipType: "confederation",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_concacaf_fifa_confederation",
    memberEntityId: "ent_concacaf",
    groupEntityId: "ent_fifa",
    relationshipType: "affiliated_with",
    membershipType: "confederation",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_conmebol_fifa_confederation",
    memberEntityId: "ent_conmebol",
    groupEntityId: "ent_fifa",
    relationshipType: "affiliated_with",
    membershipType: "confederation",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ofc_fifa_confederation",
    memberEntityId: "ent_ofc",
    groupEntityId: "ent_fifa",
    relationshipType: "affiliated_with",
    membershipType: "confederation",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uefa_fifa_confederation",
    memberEntityId: "ent_uefa",
    groupEntityId: "ent_fifa",
    relationshipType: "affiliated_with",
    membershipType: "confederation",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_afghanistan_afc",
    memberEntityId: "ent_afghanistan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    displayNameOverride: "Afghanistan",
    galleryVariantId: "var_afghanistan_republic_tricolour_current",
    quizVariantId: "var_afghanistan_republic_tricolour_current",
    notes: "Use the Afghan Republic tricolour as Afghanistan's external representation in non-geographic FIFA-facing contexts.",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_australia_afc",
    memberEntityId: "ent_australia",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahrain_afc",
    memberEntityId: "ent_bahrain",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bangladesh_afc",
    memberEntityId: "ent_bangladesh",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bhutan_afc",
    memberEntityId: "ent_bhutan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_brunei_afc",
    memberEntityId: "ent_brunei",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cambodia_afc",
    memberEntityId: "ent_cambodia",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_china_afc",
    memberEntityId: "ent_china",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_taiwan_afc",
    memberEntityId: "ent_taiwan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    displayNameOverride: "Chinese Taipei",
    galleryVariantId: "var_taiwan_chinese_taipei_current",
    quizVariantId: "var_taiwan_chinese_taipei_current",
    answerAliases: ["Chinese Taipei", "Taiwan"],
    notes: "FIFA member association name: Chinese Taipei. Vexillator keeps the underlying entity as Taiwan and uses the Chinese Taipei Olympic flag for FIFA-facing representation.",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guam_afc",
    memberEntityId: "ent_guam",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_hong_kong_afc",
    memberEntityId: "ent_hong_kong",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_india_afc",
    memberEntityId: "ent_india",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_indonesia_afc",
    memberEntityId: "ent_indonesia",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iran_afc",
    memberEntityId: "ent_iran",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iraq_afc",
    memberEntityId: "ent_iraq",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_japan_afc",
    memberEntityId: "ent_japan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jordan_afc",
    memberEntityId: "ent_jordan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kuwait_afc",
    memberEntityId: "ent_kuwait",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kyrgyzstan_afc",
    memberEntityId: "ent_kyrgyzstan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_laos_afc",
    memberEntityId: "ent_laos",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lebanon_afc",
    memberEntityId: "ent_lebanon",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_macao_afc",
    memberEntityId: "ent_macao",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malaysia_afc",
    memberEntityId: "ent_malaysia",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_maldives_afc",
    memberEntityId: "ent_maldives",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mongolia_afc",
    memberEntityId: "ent_mongolia",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_myanmar_afc",
    memberEntityId: "ent_myanmar",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nepal_afc",
    memberEntityId: "ent_nepal",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_north_korea_afc",
    memberEntityId: "ent_north_korea",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_oman_afc",
    memberEntityId: "ent_oman",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_pakistan_afc",
    memberEntityId: "ent_pakistan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_palestine_afc",
    memberEntityId: "ent_palestine",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_philippines_afc",
    memberEntityId: "ent_philippines",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_qatar_afc",
    memberEntityId: "ent_qatar",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saudi_arabia_afc",
    memberEntityId: "ent_saudi_arabia",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_singapore_afc",
    memberEntityId: "ent_singapore",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_korea_afc",
    memberEntityId: "ent_south_korea",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sri_lanka_afc",
    memberEntityId: "ent_sri_lanka",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_syria_afc",
    memberEntityId: "ent_syria",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tajikistan_afc",
    memberEntityId: "ent_tajikistan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_thailand_afc",
    memberEntityId: "ent_thailand",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_timor_leste_afc",
    memberEntityId: "ent_timor_leste",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkmenistan_afc",
    memberEntityId: "ent_turkmenistan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_arab_emirates_afc",
    memberEntityId: "ent_united_arab_emirates",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uzbekistan_afc",
    memberEntityId: "ent_uzbekistan",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_vietnam_afc",
    memberEntityId: "ent_vietnam",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_yemen_afc",
    memberEntityId: "ent_yemen",
    groupEntityId: "ent_afc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_algeria_caf",
    memberEntityId: "ent_algeria",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_angola_caf",
    memberEntityId: "ent_angola",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_benin_caf",
    memberEntityId: "ent_benin",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_botswana_caf",
    memberEntityId: "ent_botswana",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_burkina_faso_caf",
    memberEntityId: "ent_burkina_faso",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_burundi_caf",
    memberEntityId: "ent_burundi",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cameroon_caf",
    memberEntityId: "ent_cameroon",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cabo_verde_caf",
    memberEntityId: "ent_cabo_verde",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_central_african_republic_caf",
    memberEntityId: "ent_central_african_republic",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_chad_caf",
    memberEntityId: "ent_chad",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_comoros_caf",
    memberEntityId: "ent_comoros",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_republic_of_the_congo_caf",
    memberEntityId: "ent_republic_of_the_congo",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_democratic_republic_of_the_congo_caf",
    memberEntityId: "ent_democratic_republic_of_the_congo",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cote_d_ivoire_caf",
    memberEntityId: "ent_cote_d_ivoire",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_djibouti_caf",
    memberEntityId: "ent_djibouti",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_egypt_caf",
    memberEntityId: "ent_egypt",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_equatorial_guinea_caf",
    memberEntityId: "ent_equatorial_guinea",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_eritrea_caf",
    memberEntityId: "ent_eritrea",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_eswatini_caf",
    memberEntityId: "ent_eswatini",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ethiopia_caf",
    memberEntityId: "ent_ethiopia",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gabon_caf",
    memberEntityId: "ent_gabon",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gambia_caf",
    memberEntityId: "ent_gambia",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ghana_caf",
    memberEntityId: "ent_ghana",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guinea_caf",
    memberEntityId: "ent_guinea",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guinea_bissau_caf",
    memberEntityId: "ent_guinea_bissau",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kenya_caf",
    memberEntityId: "ent_kenya",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lesotho_caf",
    memberEntityId: "ent_lesotho",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_liberia_caf",
    memberEntityId: "ent_liberia",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_libya_caf",
    memberEntityId: "ent_libya",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_madagascar_caf",
    memberEntityId: "ent_madagascar",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malawi_caf",
    memberEntityId: "ent_malawi",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mali_caf",
    memberEntityId: "ent_mali",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mauritania_caf",
    memberEntityId: "ent_mauritania",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mauritius_caf",
    memberEntityId: "ent_mauritius",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_morocco_caf",
    memberEntityId: "ent_morocco",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mozambique_caf",
    memberEntityId: "ent_mozambique",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_namibia_caf",
    memberEntityId: "ent_namibia",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_niger_caf",
    memberEntityId: "ent_niger",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nigeria_caf",
    memberEntityId: "ent_nigeria",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_rwanda_caf",
    memberEntityId: "ent_rwanda",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sao_tome_and_principe_caf",
    memberEntityId: "ent_sao_tome_and_principe",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_senegal_caf",
    memberEntityId: "ent_senegal",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_seychelles_caf",
    memberEntityId: "ent_seychelles",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sierra_leone_caf",
    memberEntityId: "ent_sierra_leone",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_somalia_caf",
    memberEntityId: "ent_somalia",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_africa_caf",
    memberEntityId: "ent_south_africa",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_south_sudan_caf",
    memberEntityId: "ent_south_sudan",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sudan_caf",
    memberEntityId: "ent_sudan",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tanzania_caf",
    memberEntityId: "ent_tanzania",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_togo_caf",
    memberEntityId: "ent_togo",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tunisia_caf",
    memberEntityId: "ent_tunisia",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uganda_caf",
    memberEntityId: "ent_uganda",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_zambia_caf",
    memberEntityId: "ent_zambia",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_zimbabwe_caf",
    memberEntityId: "ent_zimbabwe",
    groupEntityId: "ent_caf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_anguilla_concacaf",
    memberEntityId: "ent_anguilla",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_antigua_and_barbuda_concacaf",
    memberEntityId: "ent_antigua_and_barbuda",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_aruba_concacaf",
    memberEntityId: "ent_aruba",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bahamas_concacaf",
    memberEntityId: "ent_bahamas",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_barbados_concacaf",
    memberEntityId: "ent_barbados",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belize_concacaf",
    memberEntityId: "ent_belize",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bermuda_concacaf",
    memberEntityId: "ent_bermuda",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_british_virgin_islands_concacaf",
    memberEntityId: "ent_british_virgin_islands",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_canada_concacaf",
    memberEntityId: "ent_canada",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cayman_islands_concacaf",
    memberEntityId: "ent_cayman_islands",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_costa_rica_concacaf",
    memberEntityId: "ent_costa_rica",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cuba_concacaf",
    memberEntityId: "ent_cuba",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_curacao_concacaf",
    memberEntityId: "ent_curacao",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_dominica_concacaf",
    memberEntityId: "ent_dominica",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_dominican_republic_concacaf",
    memberEntityId: "ent_dominican_republic",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_el_salvador_concacaf",
    memberEntityId: "ent_el_salvador",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_grenada_concacaf",
    memberEntityId: "ent_grenada",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guatemala_concacaf",
    memberEntityId: "ent_guatemala",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_guyana_concacaf",
    memberEntityId: "ent_guyana",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_haiti_concacaf",
    memberEntityId: "ent_haiti",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_honduras_concacaf",
    memberEntityId: "ent_honduras",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_jamaica_concacaf",
    memberEntityId: "ent_jamaica",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_mexico_concacaf",
    memberEntityId: "ent_mexico",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_montserrat_concacaf",
    memberEntityId: "ent_montserrat",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_nicaragua_concacaf",
    memberEntityId: "ent_nicaragua",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_panama_concacaf",
    memberEntityId: "ent_panama",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_puerto_rico_concacaf",
    memberEntityId: "ent_puerto_rico",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_kitts_and_nevis_concacaf",
    memberEntityId: "ent_saint_kitts_and_nevis",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_lucia_concacaf",
    memberEntityId: "ent_saint_lucia",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_saint_vincent_and_the_grenadines_concacaf",
    memberEntityId: "ent_saint_vincent_and_the_grenadines",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_suriname_concacaf",
    memberEntityId: "ent_suriname",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_trinidad_and_tobago_concacaf",
    memberEntityId: "ent_trinidad_and_tobago",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turks_and_caicos_islands_concacaf",
    memberEntityId: "ent_turks_and_caicos_islands",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_united_states_concacaf",
    memberEntityId: "ent_united_states",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_us_virgin_islands_concacaf",
    memberEntityId: "ent_us_virgin_islands",
    groupEntityId: "ent_concacaf",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_argentina_conmebol",
    memberEntityId: "ent_argentina",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bolivia_conmebol",
    memberEntityId: "ent_bolivia",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_brazil_conmebol",
    memberEntityId: "ent_brazil",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_chile_conmebol",
    memberEntityId: "ent_chile",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_colombia_conmebol",
    memberEntityId: "ent_colombia",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ecuador_conmebol",
    memberEntityId: "ent_ecuador",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_paraguay_conmebol",
    memberEntityId: "ent_paraguay",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_peru_conmebol",
    memberEntityId: "ent_peru",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_uruguay_conmebol",
    memberEntityId: "ent_uruguay",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_venezuela_conmebol",
    memberEntityId: "ent_venezuela",
    groupEntityId: "ent_conmebol",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_american_samoa_ofc",
    memberEntityId: "ent_american_samoa",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cook_islands_ofc",
    memberEntityId: "ent_cook_islands",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiji_ofc",
    memberEntityId: "ent_fiji",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_french_polynesia_ofc",
    memberEntityId: "ent_french_polynesia",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    displayNameOverride: "Tahiti",
    galleryVariantId: "var_french_polynesia_current",
    quizVariantId: "var_french_polynesia_current",
    answerAliases: ["Tahiti", "French Polynesia"],
    notes: "FIFA and OFC use the association name Tahiti; the represented territorial entity is French Polynesia and the displayed flag is the French Polynesian flag.",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_new_caledonia_ofc",
    memberEntityId: "ent_new_caledonia",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_new_zealand_ofc",
    memberEntityId: "ent_new_zealand",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_papua_new_guinea_ofc",
    memberEntityId: "ent_papua_new_guinea",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_samoa_ofc",
    memberEntityId: "ent_samoa",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_solomon_islands_ofc",
    memberEntityId: "ent_solomon_islands",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_tonga_ofc",
    memberEntityId: "ent_tonga",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_vanuatu_ofc",
    memberEntityId: "ent_vanuatu",
    groupEntityId: "ent_ofc",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_albania_uefa",
    memberEntityId: "ent_albania",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_andorra_uefa",
    memberEntityId: "ent_andorra",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_armenia_uefa",
    memberEntityId: "ent_armenia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_austria_uefa",
    memberEntityId: "ent_austria",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_azerbaijan_uefa",
    memberEntityId: "ent_azerbaijan",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belarus_uefa",
    memberEntityId: "ent_belarus",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_belgium_uefa",
    memberEntityId: "ent_belgium",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bosnia_and_herzegovina_uefa",
    memberEntityId: "ent_bosnia_and_herzegovina",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_bulgaria_uefa",
    memberEntityId: "ent_bulgaria",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_croatia_uefa",
    memberEntityId: "ent_croatia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_cyprus_uefa",
    memberEntityId: "ent_cyprus",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_czechia_uefa",
    memberEntityId: "ent_czechia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_denmark_uefa",
    memberEntityId: "ent_denmark",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_england_uefa",
    memberEntityId: "ent_england",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_estonia_uefa",
    memberEntityId: "ent_estonia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_faroe_islands_uefa",
    memberEntityId: "ent_faroe_islands",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_finland_uefa",
    memberEntityId: "ent_finland",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_france_uefa",
    memberEntityId: "ent_france",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_georgia_uefa",
    memberEntityId: "ent_georgia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_germany_uefa",
    memberEntityId: "ent_germany",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_gibraltar_uefa",
    memberEntityId: "ent_gibraltar",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_greece_uefa",
    memberEntityId: "ent_greece",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_hungary_uefa",
    memberEntityId: "ent_hungary",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_iceland_uefa",
    memberEntityId: "ent_iceland",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ireland_uefa",
    memberEntityId: "ent_ireland",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_israel_uefa",
    memberEntityId: "ent_israel",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_italy_uefa",
    memberEntityId: "ent_italy",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kazakhstan_uefa",
    memberEntityId: "ent_kazakhstan",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_kosovo_uefa",
    memberEntityId: "ent_kosovo",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_latvia_uefa",
    memberEntityId: "ent_latvia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_liechtenstein_uefa",
    memberEntityId: "ent_liechtenstein",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_lithuania_uefa",
    memberEntityId: "ent_lithuania",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_luxembourg_uefa",
    memberEntityId: "ent_luxembourg",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_malta_uefa",
    memberEntityId: "ent_malta",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_moldova_uefa",
    memberEntityId: "ent_moldova",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_montenegro_uefa",
    memberEntityId: "ent_montenegro",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_netherlands_uefa",
    memberEntityId: "ent_netherlands",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_northern_ireland_uefa",
    memberEntityId: "ent_northern_ireland",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_north_macedonia_uefa",
    memberEntityId: "ent_north_macedonia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_norway_uefa",
    memberEntityId: "ent_norway",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_poland_uefa",
    memberEntityId: "ent_poland",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_portugal_uefa",
    memberEntityId: "ent_portugal",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_romania_uefa",
    memberEntityId: "ent_romania",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_russia_uefa",
    memberEntityId: "ent_russia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_san_marino_uefa",
    memberEntityId: "ent_san_marino",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_scotland_uefa",
    memberEntityId: "ent_scotland",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_serbia_uefa",
    memberEntityId: "ent_serbia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovakia_uefa",
    memberEntityId: "ent_slovakia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_slovenia_uefa",
    memberEntityId: "ent_slovenia",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_spain_uefa",
    memberEntityId: "ent_spain",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_sweden_uefa",
    memberEntityId: "ent_sweden",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_switzerland_uefa",
    memberEntityId: "ent_switzerland",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_turkey_uefa",
    memberEntityId: "ent_turkey",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_ukraine_uefa",
    memberEntityId: "ent_ukraine",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_wales_uefa",
    memberEntityId: "ent_wales",
    groupEntityId: "ent_uefa",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),

  /*
    International Federation of Vexillological Associations member associations.
  */
  Object.freeze({
    id: "mem_fiav_aav_fiav",
    memberEntityId: "ent_fiav_aav",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_acv_fiav",
    memberEntityId: "ent_fiav_acv",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_bda_fiav",
    memberEntityId: "ent_fiav_bda",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_bhvs_fiav",
    memberEntityId: "ent_fiav_bhvs",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_bs_fiav",
    memberEntityId: "ent_fiav_bs",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_cbfa_fiav",
    memberEntityId: "ent_fiav_cbfa",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_cebed_fiav",
    memberEntityId: "ent_fiav_cebed",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_cfa_fiav",
    memberEntityId: "ent_fiav_cfa",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_cidec_fiav",
    memberEntityId: "ent_fiav_cidec",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_cisv_fiav",
    memberEntityId: "ent_fiav_cisv",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_conavex_fiav",
    memberEntityId: "ent_fiav_conavex",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_cvs_fiav",
    memberEntityId: "ent_fiav_cvs",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_dgf_fiav",
    memberEntityId: "ent_fiav_dgf",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_fhf_fiav",
    memberEntityId: "ent_fiav_fhf",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_fi_fiav",
    memberEntityId: "ent_fiav_fi",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_fotw_fiav",
    memberEntityId: "ent_fiav_fotw",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_frc_fiav",
    memberEntityId: "ent_fiav_frc",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_fsa_fiav",
    memberEntityId: "ent_fiav_fsa",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_gsi_fiav",
    memberEntityId: "ent_fiav_gsi",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_gwav_fiav",
    memberEntityId: "ent_fiav_gwav",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_hgzd_fiav",
    memberEntityId: "ent_fiav_hgzd",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_hs_fiav",
    memberEntityId: "ent_fiav_hs",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_hvk_fiav",
    memberEntityId: "ent_fiav_hvk",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_ihw_fiav",
    memberEntityId: "ent_fiav_ihw",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_iva_fiav",
    memberEntityId: "ent_fiav_iva",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_java_fiav",
    memberEntityId: "ent_fiav_java",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_kvv_fiav",
    memberEntityId: "ent_fiav_kvv",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_nava_fiav",
    memberEntityId: "ent_fiav_nava",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_neva_fiav",
    memberEntityId: "ent_fiav_neva",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_nf_fiav",
    memberEntityId: "ent_fiav_nf",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_nvvv_fiav",
    memberEntityId: "ent_fiav_nvvv",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_nzfa_fiav",
    memberEntityId: "ent_fiav_nzfa",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_pfa_fiav",
    memberEntityId: "ent_fiav_pfa",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_ptw_fiav",
    memberEntityId: "ent_fiav_ptw",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_rcvh_fiav",
    memberEntityId: "ent_fiav_rcvh",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_sava_fiav",
    memberEntityId: "ent_fiav_sava",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_schg_fiav",
    memberEntityId: "ent_fiav_schg",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_sev_fiav",
    memberEntityId: "ent_fiav_sev",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_sfv_fiav",
    memberEntityId: "ent_fiav_sfv",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_sghapg_fiav",
    memberEntityId: "ent_fiav_sghapg",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_ssv_fiav",
    memberEntityId: "ent_fiav_ssv",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_svb_fiav",
    memberEntityId: "ent_fiav_svb",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_svi_fiav",
    memberEntityId: "ent_fiav_svi",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_svpr_fiav",
    memberEntityId: "ent_fiav_svpr",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_uht_fiav",
    memberEntityId: "ent_fiav_uht",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_vast_fiav",
    memberEntityId: "ent_fiav_vast",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  }),
  Object.freeze({
    id: "mem_fiav_wvri_fiav",
    memberEntityId: "ent_fiav_wvri",
    groupEntityId: "ent_fiav",
    relationshipType: "member",
    membershipType: "member_association",
    status: "current",
    startYear: null,
    endYear: null
  })
]);
