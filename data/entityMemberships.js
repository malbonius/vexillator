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
  })
]);
