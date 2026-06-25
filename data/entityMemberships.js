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
]);
