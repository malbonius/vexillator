/*
  js/state/appState.js

  Shared constants and mutable app state for Vexillator.

  This is a classic browser script, not an ES module, so it can keep the
  current local-file workflow. It must load before js/main.js and any UI
  scripts that read appState.
*/

/*
  Gallery cards are the expensive part of very large selections because every
  rendered card creates DOM nodes and may request an image.

  The Working Pool itself can remain large; Gallery renders it in batches.
*/
const GALLERY_INITIAL_RENDER_LIMIT = 100;
const GALLERY_RENDER_BATCH_SIZE = 100;

/*
  Entity Detail relationship sections stay immediately readable for small
  groups and for wide/full desktop layouts.
*/
const ENTITY_DETAIL_AUTO_EXPAND_THRESHOLD = 8;

/*
  App state.

  selectedCollectionIds stores the collections currently selected by the user.
  selectedEntityIds stores entities selected individually.
  selectedEntityGroups stores explicit bulk-selection provenance.
  selectedVariantIds stores variants selected directly.
  selectedVariantGroups stores temporary grouped variant selections, such as
  Quiz Builder results added to Gallery as one named source.
  collapsedGroupIds stores collapsed navigation groups.
*/
const appState = {
  selectedCollectionIds: new Set(),
  selectedEntityGroups: new Map(),
  selectedEntityIds: new Set(),
  selectedVariantIds: new Set(),
  selectedVariantGroups: new Map(),

  /*
    Entity browsing is the default route in the redesigned shell.
    Collections remain available as the secondary Browse mode.
  */
  browserMode: "entities",
  activeMode: "search",
  entityBrowserFilter: "",
  collectionBrowserFilter: "",
  collapsedGroupIds: new Set(),

  /*
    Application-shell state.

    browsePinned stores the user's wide-screen preference. browseOpen and
    selectionOpen describe temporary overlay drawers. Focus references allow
    keyboard users to return to the control that opened one.
  */
  shell: {
    browsePinned: true,
    browseOpen: false,
    selectionOpen: false,
    browseReturnFocusElement: null,
    selectionReturnFocusElement: null
  },

  /*
  Stores collapsed branches in the Entity browser.

  This is separate from collapsedGroupIds because CollectionGroups and
  Entities are different navigation systems.
  */
  collapsedEntityIds: new Set(),

  /*
    Stores collapsed virtual root sections in the Entity browser.

    These headings organise otherwise unrelated root entities for presentation
    only. They do not alter parentIds or any collection relationship.
  */
  collapsedEntityRootSectionIds: new Set(),
  /*
    Prevents the default collapsed state from being reapplied after the user
    begins opening and closing navigation branches.
  */
  navigationCollapseInitialised: false,

  /*
    Remembers Entity Detail disclosure choices for the current app session.

    Map values are booleans so an explicit user choice can override the
    section's responsive default in either direction.
  */
  entityDetailDisclosureStates: {
    childEntities: new Map(),
    administeredEntities: new Map(),
    constituentEntities: new Map(),
    relatedCollections: new Map(),
    relationshipSubgroups: new Map(),
    memberOfEntities: new Map(),
    memberEntities: new Map()
  },

  /*
    Gallery state.

    galleryDetailsMode controls how much information appears on gallery cards
    and in Gallery zoom.

    galleryOrganisationMode controls whether the gallery is shown as one
    deduplicated pool or separated by selection source.

    gallerySortMode controls the order of items in the combined gallery and
    within each grouped source section.

    galleryRandomSortSeed and galleryRandomSortSignature keep Random order
    stable while the same Gallery pool is re-rendered.
  */
  galleryDetailsMode: "full",
  galleryOrganisationMode: "combined",
  gallerySortMode: "name_asc",
  galleryRandomSortSeed: null,
  galleryRandomSortSignature: null,
  galleryRenderLimit: GALLERY_INITIAL_RENDER_LIMIT,

  /*
    Typing quiz state.
  */
  typingQuiz: {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    hasAnsweredCurrentQuestion: false,
    questionStartedAt: null
  },

  /*
    Multiple-choice quiz state.
  */
  multipleChoiceQuiz: {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    hasAnsweredCurrentQuestion: false,
    questionStartedAt: null
  },

  /*
    Random Quiz builder state.

    The builder creates a temporary entity/default-variant quiz pool.
    It deliberately does not add matching entities to Current Selection.
    Its Add to Gallery action can create a temporary selectedVariantGroups
    source so the result can be inspected without flooding Current Selection.
  */
  randomQuiz: {
    /*
      Every include rule owns its own area and entity-type filters.

      The final temporary pool is the union of all rules, so users can combine
      combinations such as French subdivisions with Western European sovereign
      states without creating an unwanted cross-product.
    */
    rules: [
      {
        id: "random_quiz_rule_1",
        regionEntityIds: new Set(),
        typeKeys: new Set()
      }
    ],
    includeDisputed: false,
    questionCountTouched: false,
    lastMaximumQuestionCount: 0
  },

  /*
  Entity detail state.

  activeEntityId identifies the entity currently being viewed.
  focusedVariantId optionally highlights a particular variant within it.
  */
  entityView: {
    activeEntityId: null,
    focusedVariantId: null,

    /*
      Session-only Entity Detail navigation history.

      Entries are added only when moving directly from one Entity page to
      another. Opening an entity from another app mode starts a fresh path.
    */
    history: []
  },
  /*
    Shared flag zoom state.

    sourceMode determines where the zoom was opened:
    - gallery: cycle through the currently displayed gallery items;
    - entity: cycle through variants belonging to one Entity Detail page.
  */
  galleryZoom: {
  sourceMode: null,
  items: [],
  currentIndex: 0,

  /*
    A related variant may temporarily replace the anchored Gallery or Entity
    Detail variant inside zoom.

    This does not alter the working pool, Gallery card or current item index.
  */
  activeRelatedType: null,
  activeRelatedVariantId: null,
  /*
    Stores the variant from which a related side was opened.

    This allows Show original side to return to the correct alternative design,
    rather than always returning to the Gallery item's anchored variant.
  */
  activeRelatedSourceVariantId: null,
  /*
    Tracks a temporary alternative asset rendering of the currently displayed
    semantic variant.

    This affects zoom only and does not alter the Gallery item or variant.
  */
  activeAssetId: null,  
}
};
