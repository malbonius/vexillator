/*
  main.js

  This is the app entry point.
  It runs after all data files and core files have loaded.
*/

const rawData = {
  tagRegistry,
  assets,
  entities,
  entityMemberships:
    typeof entityMemberships !== "undefined"
      ? entityMemberships
      : [],
  variants,
  collections,
  collectionGroups,
  quizPresets
};

const dataIndex = buildDataIndex(rawData);

/*
  Shared constants and appState now live in js/state/appState.js.
*/

/*
  Returns whether a collection belongs in normal user-facing routes.

  Internal collections remain indexed and resolvable for diagnostics and
  regression testing, but they are hidden from Browse, Search, Entity Detail
  related collections and visible quiz presets.
*/
function isUserFacingCollection(collection) {
  return Boolean(collection) && collection.internal !== true;
}

/*
  Returns whether a CollectionGroup contains at least one user-facing
  collection, either directly or through a descendant group.

  The visited set prevents malformed circular group relationships from causing
  infinite recursion before validation output can report the underlying error.
*/
function collectionGroupHasUserFacingContent(
  groupId,
  visitedGroupIds = new Set()
) {
  if (visitedGroupIds.has(groupId)) {
    return false;
  }

  const group = dataIndex.collectionGroupsById[groupId];

  if (!group) {
    return false;
  }

  const nextVisitedGroupIds = new Set(visitedGroupIds);
  nextVisitedGroupIds.add(groupId);

  const hasVisibleDirectCollection = group.collectionIds.some(collectionId => {
    return isUserFacingCollection(
      dataIndex.collectionsById[collectionId]
    );
  });

  if (hasVisibleDirectCollection) {
    return true;
  }

  return getChildGroups(groupId).some(childGroup => {
    return collectionGroupHasUserFacingContent(
      childGroup.id,
      nextVisitedGroupIds
    );
  });
}

/*
  Hides collection-based presets that reference an internal or missing
  collection.

  The preset remains in quizPresets and dataIndex for validation and diagnostic
  use; only its normal visible card is suppressed.
*/
function isUserFacingQuizPreset(preset) {
  if (preset.sourceType !== "collections") {
    return true;
  }

  if (!Array.isArray(preset.collectionIds)) {
    return false;
  }

  return preset.collectionIds.every(collectionId => {
    return isUserFacingCollection(
      dataIndex.collectionsById[collectionId]
    );
  });
}


/*
  Theme handling.

  The early inline script in index.html applies the initial class before the
  stylesheet paints. main.js then owns the interactive toggle and preference
  persistence.
*/
const THEME_STORAGE_KEY = "vexillatorTheme";
const THEME_LIGHT = "light";
const THEME_DARK = "dark";

function safelyReadStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(
      THEME_STORAGE_KEY
    );

    if (
      storedTheme === THEME_LIGHT ||
      storedTheme === THEME_DARK
    ) {
      return storedTheme;
    }
  } catch (error) {
    console.warn("Theme preference could not be read.", error);
  }

  return null;
}

function safelyStoreTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn("Theme preference could not be saved.", error);
  }
}

function getSystemPreferredTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return THEME_DARK;
  }

  return THEME_LIGHT;
}

function getInitialTheme() {
  return safelyReadStoredTheme() ?? getSystemPreferredTheme();
}

function getCurrentTheme() {
  return document.documentElement.classList.contains(
    "theme-dark"
  )
    ? THEME_DARK
    : THEME_LIGHT;
}

function updateThemeToggle(theme) {
  const toggleButton = document.getElementById(
    "themeToggleButton"
  );
  const toggleText = document.getElementById(
    "themeToggleText"
  );

  if (!toggleButton) {
    return;
  }

  const isDarkTheme = theme === THEME_DARK;
  const nextThemeLabel = isDarkTheme
    ? "Use light mode"
    : "Use dark mode";

  toggleButton.setAttribute(
    "aria-pressed",
    isDarkTheme ? "true" : "false"
  );
  toggleButton.setAttribute("aria-label", nextThemeLabel);
  toggleButton.dataset.theme = theme;

  if (toggleText) {
    toggleText.textContent = nextThemeLabel;
  }
}

function applyTheme(theme) {
  const normalisedTheme = theme === THEME_DARK
    ? THEME_DARK
    : THEME_LIGHT;

  document.documentElement.classList.toggle(
    "theme-dark",
    normalisedTheme === THEME_DARK
  );
  document.documentElement.classList.toggle(
    "theme-light",
    normalisedTheme === THEME_LIGHT
  );
  document.documentElement.dataset.theme = normalisedTheme;

  updateThemeToggle(normalisedTheme);
}

function setupThemeToggle() {
  applyTheme(getInitialTheme());

  const toggleButton = document.getElementById(
    "themeToggleButton"
  );

  if (!toggleButton) {
    return;
  }

  toggleButton.addEventListener("click", () => {
    const nextTheme = getCurrentTheme() === THEME_DARK
      ? THEME_LIGHT
      : THEME_DARK;

    applyTheme(nextTheme);
    safelyStoreTheme(nextTheme);
  });

  if (!window.matchMedia) {
    return;
  }

  const preferredThemeQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  const handleSystemThemeChange = () => {
    if (safelyReadStoredTheme()) {
      return;
    }

    applyTheme(getSystemPreferredTheme());
  };

  if (
    typeof preferredThemeQuery.addEventListener === "function"
  ) {
    preferredThemeQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );
  } else if (
    typeof preferredThemeQuery.addListener === "function"
  ) {
    preferredThemeQuery.addListener(handleSystemThemeChange);
  }
}

/*
  Application shell.

  Browse is pinned on wide screens when preferred, otherwise it opens as a
  left overlay drawer. Current Selection always opens as a right overlay.
*/
function isWideShellLayout() {
  return window.matchMedia("(min-width: 1100px)").matches;
}

/*
  Decides the responsive default for Entity Detail entity-list sections.

  Explicit user disclosure choices still win through
  getEntityDetailSectionExpanded(). This is only the first-render/default state.
*/
function shouldEntityDetailSectionStartExpanded(entityCount) {
  return (
    isWideShellLayout() ||
    entityCount <= ENTITY_DETAIL_AUTO_EXPAND_THRESHOLD
  );
}

function isBrowsePinnedActive() {
  return (
    isWideShellLayout() &&
    appState.shell.browsePinned
  );
}

function isBrowseOverlayOpen() {
  return (
    appState.shell.browseOpen &&
    !isBrowsePinnedActive()
  );
}

function getShellFocusableElements(container) {
  if (!container) {
    return [];
  }

  const selector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  return Array.from(container.querySelectorAll(selector))
    .filter(element => {
      return (
        !element.hidden &&
        element.getAttribute("aria-hidden") !== "true" &&
        element.offsetParent !== null
      );
    });
}

function focusIntoShellDrawer(drawer) {
  window.requestAnimationFrame(() => {
    const focusableElements =
      getShellFocusableElements(drawer);

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
      return;
    }

    drawer?.focus();
  });
}

function restoreShellFocus(element) {
  if (
    element &&
    document.contains(element) &&
    typeof element.focus === "function"
  ) {
    element.focus();
  }
}

/*
  Switching between a sticky sidebar and a fixed drawer changes positioning
  modes. Suppressing the transform transition for that one state change avoids
  the false open-close animation.
*/
function runWithoutBrowseTransition(callback) {
  document.body.classList.add(
    "shell-browse-transition-suppressed"
  );

  callback();

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.body.classList.remove(
        "shell-browse-transition-suppressed"
      );
    });
  });
}

function syncApplicationShell() {
  const appLayout = document.getElementById("appLayout");
  const browsePanel = document.getElementById("browsePanel");
  const browseToggleButton = document.getElementById(
    "browseToggleButton"
  );
  const pinBrowseButton = document.getElementById(
    "pinBrowseButton"
  );
  const selectionDrawer = document.getElementById(
    "selectionDrawer"
  );
  const selectionToggleButton = document.getElementById(
    "selectionToggleButton"
  );
  const shellBackdrop = document.getElementById(
    "shellBackdrop"
  );

  if (
    !appLayout ||
    !browsePanel ||
    !browseToggleButton ||
    !selectionDrawer ||
    !selectionToggleButton ||
    !shellBackdrop
  ) {
    console.warn("Application-shell elements could not be found.");
    return;
  }

  const browsePinnedActive = isBrowsePinnedActive();
  const browseOverlayOpen = isBrowseOverlayOpen();
  const selectionOpen = appState.shell.selectionOpen;
  const overlayDrawerOpen =
    browseOverlayOpen || selectionOpen;

  appLayout.classList.toggle(
    "browse-pinned",
    browsePinnedActive
  );

  document.body.classList.toggle(
    "shell-browse-open",
    browseOverlayOpen
  );

  document.body.classList.toggle(
    "shell-selection-open",
    selectionOpen
  );

  document.body.classList.toggle(
    "shell-drawer-open",
    overlayDrawerOpen
  );

  shellBackdrop.classList.toggle(
    "hidden",
    !overlayDrawerOpen
  );

  shellBackdrop.setAttribute(
    "aria-hidden",
    String(!overlayDrawerOpen)
  );

  const browseVisible =
    browsePinnedActive || browseOverlayOpen;

  browsePanel.setAttribute(
    "aria-hidden",
    String(!browseVisible)
  );

  browseToggleButton.setAttribute(
    "aria-expanded",
    String(browseVisible)
  );

  if (browseOverlayOpen) {
    browsePanel.setAttribute("role", "dialog");
    browsePanel.setAttribute("aria-modal", "true");
  } else {
    browsePanel.removeAttribute("role");
    browsePanel.removeAttribute("aria-modal");
  }

  if ("inert" in browsePanel) {
    browsePanel.inert = !browseVisible;
  }

  if (pinBrowseButton) {
    pinBrowseButton.textContent =
      appState.shell.browsePinned ? "Unpin" : "Pin";

    pinBrowseButton.setAttribute(
      "aria-pressed",
      String(appState.shell.browsePinned)
    );
  }

  selectionDrawer.setAttribute(
    "aria-hidden",
    String(!selectionOpen)
  );

  selectionDrawer.setAttribute(
    "aria-modal",
    String(selectionOpen)
  );

  selectionToggleButton.setAttribute(
    "aria-expanded",
    String(selectionOpen)
  );

  if ("inert" in selectionDrawer) {
    selectionDrawer.inert = !selectionOpen;
  }
}

function openBrowsePanel(
  triggerElement = document.activeElement
) {
  if (isBrowsePinnedActive()) {
    return;
  }

  if (appState.shell.selectionOpen) {
    closeSelectionDrawer({
      returnFocus: false
    });
  }

  appState.shell.browseReturnFocusElement =
    triggerElement;

  appState.shell.browseOpen = true;

  syncApplicationShell();

  focusIntoShellDrawer(
    document.getElementById("browsePanel")
  );
}

function closeBrowsePanel({
  returnFocus = true
} = {}) {
  if (!appState.shell.browseOpen) {
    return;
  }

  appState.shell.browseOpen = false;
  syncApplicationShell();

  if (returnFocus) {
    restoreShellFocus(
      appState.shell.browseReturnFocusElement
    );
  }
}

function toggleBrowsePanel(
  triggerElement = document.activeElement
) {
  /*
    A pinned desktop sidebar is already open. The toolbar control simply moves
    focus to it rather than hiding it or changing the pin preference.
  */
  if (isBrowsePinnedActive()) {
    if (appState.shell.selectionOpen) {
      closeSelectionDrawer({
        returnFocus: false
      });
    }

    document.getElementById("browsePanel")?.focus();
    return;
  }

  if (isBrowseOverlayOpen()) {
    closeBrowsePanel();
    return;
  }

  openBrowsePanel(triggerElement);
}

function toggleBrowsePinned() {
  if (!isWideShellLayout()) {
    return;
  }

  const willPin = !appState.shell.browsePinned;

  runWithoutBrowseTransition(() => {
    appState.shell.browsePinned = willPin;
    appState.shell.browseOpen = false;
    syncApplicationShell();
  });

  if (!willPin) {
    document.getElementById(
      "browseToggleButton"
    )?.focus();
  }
}

function openSelectionDrawer(
  triggerElement = document.activeElement
) {
  if (isBrowseOverlayOpen()) {
    closeBrowsePanel({
      returnFocus: false
    });
  }

  appState.shell.selectionReturnFocusElement =
    triggerElement;

  appState.shell.selectionOpen = true;

  syncApplicationShell();

  focusIntoShellDrawer(
    document.getElementById("selectionDrawer")
  );
}

function closeSelectionDrawer({
  returnFocus = true
} = {}) {
  if (!appState.shell.selectionOpen) {
    return;
  }

  appState.shell.selectionOpen = false;
  syncApplicationShell();

  if (returnFocus) {
    restoreShellFocus(
      appState.shell.selectionReturnFocusElement
    );
  }
}

function toggleSelectionDrawer(
  triggerElement = document.activeElement
) {
  if (appState.shell.selectionOpen) {
    closeSelectionDrawer();
    return;
  }

  openSelectionDrawer(triggerElement);
}

function clearAllSelections() {
  appState.selectedCollectionIds.clear();
  appState.selectedEntityGroups.clear();
  appState.selectedEntityIds.clear();
  appState.selectedVariantIds.clear();

  refreshAfterSelectionChange({
    showGallery: false
  });
}

function trapFocusInsideShellDrawer(event) {
  if (event.key !== "Tab") {
    return;
  }

  const activeDrawer = appState.shell.selectionOpen
    ? document.getElementById("selectionDrawer")
    : isBrowseOverlayOpen()
      ? document.getElementById("browsePanel")
      : null;

  if (!activeDrawer) {
    return;
  }

  const focusableElements =
    getShellFocusableElements(activeDrawer);

  if (focusableElements.length === 0) {
    event.preventDefault();
    activeDrawer.focus();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement =
    focusableElements[focusableElements.length - 1];

  const activeElement = document.activeElement;
  const focusIsInside =
    activeDrawer.contains(activeElement);

  if (
    event.shiftKey &&
    (
      activeElement === firstElement ||
      !focusIsInside
    )
  ) {
    event.preventDefault();
    lastElement.focus();
    return;
  }

  if (
    !event.shiftKey &&
    (
      activeElement === lastElement ||
      !focusIsInside
    )
  ) {
    event.preventDefault();
    firstElement.focus();
  }
}

function updateCurrentModeTitle(modeName) {
  const titleElement = document.getElementById(
    "currentModeTitle"
  );

  if (!titleElement) {
    return;
  }

  const titlesByMode = {
    search: "Search",
    gallery: "Gallery",
    typing: "Typing Quiz",
    multipleChoice: "Multiple-Choice",
    randomQuiz: "Random Quiz",
    stats: "Stats"
  };

  if (modeName === "entity") {
    const entity = dataIndex.entitiesById[
      appState.entityView.activeEntityId
    ];

    titleElement.textContent =
      entity?.name ?? "Entity";

    return;
  }

  titleElement.textContent =
    titlesByMode[modeName] ?? "Vexillator";
}

function updateSelectionSummaries() {
  const sourceCount =
    appState.selectedCollectionIds.size +
    appState.selectedEntityGroups.size +
    appState.selectedEntityIds.size +
    appState.selectedVariantIds.size;

  let flagCount = 0;

  if (sourceCount > 0) {
    const members = resolveWorkingPool({
        collectionIds: Array.from(
          appState.selectedCollectionIds
        ),
        entityGroups: Array.from(
          appState.selectedEntityGroups.values()
        ),
        entityIds: Array.from(
          appState.selectedEntityIds
        ),
        variantIds: Array.from(
          appState.selectedVariantIds
        )
      },
      dataIndex
    );

    flagCount =
      buildDeduplicatedGalleryItems(members).length;
  }

  const sourceLabel =
    `${sourceCount} ${sourceCount === 1 ? "source" : "sources"}`;

  const flagLabel =
    `${flagCount} ${flagCount === 1 ? "flag" : "flags"}`;

  const toolbarSummary = document.getElementById(
    "selectionToolbarSummary"
  );

  const drawerSummary = document.getElementById(
    "selectionDrawerSummary"
  );

  if (toolbarSummary) {
    toolbarSummary.textContent =
      `${sourceLabel} · ${flagLabel}`;
  }

  if (drawerSummary) {
    drawerSummary.textContent =
      `${sourceLabel} · ${flagCount} resolved ` +
      `${flagCount === 1 ? "flag" : "flags"}`;
  }
}

function setupApplicationShell() {
  const browseToggleButton = document.getElementById(
    "browseToggleButton"
  );
  const closeBrowseButton = document.getElementById(
    "closeBrowseButton"
  );
  const pinBrowseButton = document.getElementById(
    "pinBrowseButton"
  );
  const selectionToggleButton = document.getElementById(
    "selectionToggleButton"
  );
  const closeSelectionButton = document.getElementById(
    "closeSelectionButton"
  );
  const shellBackdrop = document.getElementById(
    "shellBackdrop"
  );
  const selectionGalleryButton = document.getElementById(
    "selectionGalleryButton"
  );
  const selectionTypingButton = document.getElementById(
    "selectionTypingButton"
  );
  const selectionMultipleChoiceButton =
    document.getElementById(
      "selectionMultipleChoiceButton"
    );
  const clearAllSelectionButton = document.getElementById(
    "clearAllSelectionButton"
  );

  if (
    !browseToggleButton ||
    !closeBrowseButton ||
    !selectionToggleButton ||
    !closeSelectionButton ||
    !shellBackdrop
  ) {
    console.warn("Application-shell controls could not be found.");
    return;
  }

  browseToggleButton.addEventListener("click", event => {
    toggleBrowsePanel(event.currentTarget);
  });

  closeBrowseButton.addEventListener("click", () => {
    closeBrowsePanel();
  });

  pinBrowseButton?.addEventListener("click", () => {
    toggleBrowsePinned();
  });

  selectionToggleButton.addEventListener(
    "click",
    event => {
      toggleSelectionDrawer(event.currentTarget);
    }
  );

  closeSelectionButton.addEventListener("click", () => {
    closeSelectionDrawer();
  });

  shellBackdrop.addEventListener("click", () => {
    if (appState.shell.selectionOpen) {
      closeSelectionDrawer();
      return;
    }

    if (isBrowseOverlayOpen()) {
      closeBrowsePanel();
    }
  });

  selectionGalleryButton?.addEventListener(
    "click",
    () => {
      closeSelectionDrawer({
        returnFocus: false
      });

      showModePanel("gallery");
    }
  );

  selectionTypingButton?.addEventListener(
    "click",
    () => {
      closeSelectionDrawer({
        returnFocus: false
      });

      showModePanel("typing");
    }
  );

  selectionMultipleChoiceButton?.addEventListener(
    "click",
    () => {
      closeSelectionDrawer({
        returnFocus: false
      });

      showModePanel("multipleChoice");
    }
  );

  clearAllSelectionButton?.addEventListener(
    "click",
    () => {
      clearAllSelections();
    }
  );

  document.addEventListener("keydown", event => {
    const zoomOverlay = document.getElementById(
      "galleryZoomOverlay"
    );

    if (
      zoomOverlay &&
      !zoomOverlay.classList.contains("hidden")
    ) {
      return;
    }

    if (event.key === "Escape") {
      if (appState.shell.selectionOpen) {
        event.preventDefault();
        closeSelectionDrawer();
        return;
      }

      if (isBrowseOverlayOpen()) {
        event.preventDefault();
        closeBrowsePanel();
        return;
      }
    }

    trapFocusInsideShellDrawer(event);
  });

  const wideShellQuery = window.matchMedia(
    "(min-width: 1100px)"
  );

  const handleShellWidthChange = () => {
    if (
      wideShellQuery.matches &&
      appState.shell.browsePinned
    ) {
      appState.shell.browseOpen = false;
    }

    syncApplicationShell();

    if (appState.entityView.activeEntityId) {
      renderEntityView();
    }
  };

  if (
    typeof wideShellQuery.addEventListener === "function"
  ) {
    wideShellQuery.addEventListener(
      "change",
      handleShellWidthChange
    );
  } else {
    wideShellQuery.addListener(handleShellWidthChange);
  }

  syncApplicationShell();
  updateCurrentModeTitle(appState.activeMode);
}

showSystemStatus(dataIndex);
setupThemeToggle();
setupApplicationShell();
renderBrowseView();
renderCurrentSelection();
renderGallery();

setupModeTabs();

/*
  Wire the shared zoom viewer before optional feature modules.

  This keeps Gallery, Entity Detail and Quiz zoom controls functional even if
  another mode fails during startup.
*/
setupGalleryZoomViewer();

/*
  Sets up Gallery organisation, sorting and detail controls.

  Gallery zoom follows the selected detail mode, while Entity Detail zoom
  always uses full details.
*/
setupGalleryControls();
setupSearch();
setupTypingQuiz();
setupBrowseModeButtons();
setupMultipleChoiceQuiz();

if (typeof setupRandomQuizView === "function") {
  setupRandomQuizView();
} else {
  console.error(
    "setupRandomQuizView is not available. Check js/ui/randomQuizView.js."
  );
}

setupStatsView();
setupPresetView();

renderStatsView();

/*
  Shows whether the data passed validation.

  This remains a lightweight developer diagnostic rather than normal UI.
*/
function showSystemStatus(index) {
  const statusElement = document.getElementById("systemStatus");

  if (!statusElement) {
    return;
  }

  const visualMetadataStatus = getVisualMetadataStatusLines(index)
    .join("\n");

  if (index.errors.length === 0) {
    statusElement.textContent =
      "Vexillator loaded successfully.\n\n" +
      `Assets: ${assets.length}\n` +
      `Entities: ${entities.length}\n` +
      `Variants: ${variants.length}\n` +
      `Collections: ${collections.length}\n` +
      `Collection groups: ${collectionGroups.length}\n` +
      `Quiz presets: ${quizPresets.length}\n\n` +
      visualMetadataStatus;
  } else {
    statusElement.textContent =
      "Vexillator loaded with errors:\n\n" +
      index.errors.join("\n") +
      "\n\n" +
      visualMetadataStatus;
  }
}

function getVisualMetadataStatusLines(index) {
  const metadataEntries = Array.isArray(index.visualMetadata?.assets)
    ? index.visualMetadata.assets
    : [];

  const indexedAssetMetadataCount = Object.keys(
    index.assetVisualMetadataByAssetId ?? {}
  ).length;

  const totalAssetCount = Array.isArray(assets)
    ? assets.length
    : 0;

  const missingAssetMetadataCount = Array.isArray(assets)
    ? assets.filter(asset => {
        return !index.assetVisualMetadataByAssetId?.[asset.id];
      }).length
    : 0;

  const visualMetadataWarningCount = Array.isArray(index.warnings)
    ? index.warnings.filter(isVisualMetadataWarning).length
    : 0;

  const visualMetadataReviewCount = metadataEntries.filter(entry => {
    return entry?.needsReview === true;
  }).length;

  return [
    `Visual metadata: ${indexedAssetMetadataCount} / ${totalAssetCount} assets indexed`,
    `Visual metadata missing assets: ${missingAssetMetadataCount}`,
    `Visual metadata warnings: ${visualMetadataWarningCount}`,
    `Visual metadata review items: ${visualMetadataReviewCount}`
  ];
}

function isVisualMetadataWarning(warning) {
  if (typeof warning !== "string") {
    return false;
  }

  const normalisedWarning = warning.toLowerCase();

  return (
    normalisedWarning.includes("visualmetadata") ||
    normalisedWarning.includes("visual metadata") ||
    normalisedWarning.includes("asset visual metadata") ||
    normalisedWarning.includes("variant visual metadata")
  );
}

/*
  Browse panel rendering now lives in js/ui/browsePanel.js.
*/

/*
  Refreshes UI derived from the active selection.

  Used by collection, entity and variant selection controls. Keeping these
  render calls together prevents selection sources from drifting out of sync.
*/
function refreshAfterSelectionChange(options = {}) {
  const {
    showGallery = false
  } = options;
  renderBrowseView();
  renderCurrentSelection();
  resetGalleryRenderLimit();
  renderGallery();

  /*
    Manual collection changes should default quiz question counts to the
    full available quiz pool.
  */
  updateQuizQuestionCountInputsToMaximum();

  if (typeof renderPresetViews === "function") {
    renderPresetViews();
  }

  /*
    Selection changes now stay in the user's current workspace by default.
    Call refreshAfterSelectionChange({ showGallery: true }) only for actions
    that deliberately want to jump to Gallery.
  */
  if (showGallery) {
    closeBrowsePanel({
      returnFocus: false
    });

    showModePanel("gallery");
  }
}

/*
  Creates one item inside the Current Selection panel.
*/
function createCurrentSelectionItem(label, type, id) {
  const itemElement = document.createElement("div");
  itemElement.className = "selected-collection-item";

  const labelElement = document.createElement("span");
  labelElement.textContent = label;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "group-action-button";
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => {
    if (type === "collection") {
      appState.selectedCollectionIds.delete(id);
    }

    if (type === "entity_group") {
      appState.selectedEntityGroups.delete(id);
    }

    if (type === "entity") {
      appState.selectedEntityIds.delete(id);
    }

    if (type === "variant") {
      appState.selectedVariantIds.delete(id);
    }

    refreshAfterSelectionChange();
  });

  itemElement.appendChild(labelElement);
  itemElement.appendChild(removeButton);

  return itemElement;
}

/*
  Entity Detail bulk-selection and relationship helpers now live in
  js/ui/entityDetail.js.
*/

/*
  Adds one labelled section to the Current Selection panel.
*/
function appendCurrentSelectionSection(
  containerElement,
  heading,
  items
) {
  if (items.length === 0) {
    return;
  }

  const headingElement = document.createElement("h3");
  headingElement.textContent = heading;
  containerElement.appendChild(headingElement);

  items.forEach(item => {
    const itemElement = createCurrentSelectionItem(
      item.label,
      item.type,
      item.id
    );

    containerElement.appendChild(itemElement);
  });
}

/*
  Shows all active selection sources in the side panel.

  The gallery may deduplicate overlapping sources, but this panel deliberately
  shows each source separately so the user can understand why an item remains
  in the working pool.
*/
function renderCurrentSelection() {
  const selectedElement = document.getElementById("currentSelection");

  updateSelectionSummaries();

  const hasActiveSelection =
    appState.selectedCollectionIds.size > 0 ||
    appState.selectedEntityGroups.size > 0 ||
    appState.selectedEntityIds.size > 0 ||
    appState.selectedVariantIds.size > 0;

  if (!hasActiveSelection) {
    selectedElement.textContent = "No selections made.";
    return;
  }

  selectedElement.innerHTML = "";

  const collectionItems = Array.from(appState.selectedCollectionIds)
    .map(collectionId => {
      const collection = dataIndex.collectionsById[collectionId];

      if (!collection) {
        return null;
      }

      return {
        type: "collection",
        id: collection.id,
        label: collection.name
      };
    })
    .filter(Boolean);

  const entityGroupItems = Array.from(
    appState.selectedEntityGroups.values()
  )
    .map(entityGroup => {
      const sourceEntity =
        dataIndex.entitiesById[entityGroup.sourceEntityId];

      if (!sourceEntity) {
        return null;
      }

      const groupLabel =
        getEntitySelectionGroupDisplayLabel(entityGroup);

      const entityCount = entityGroup.entityIds.length;

      return {
        type: "entity_group",
        id: entityGroup.id,
        label:
          `${sourceEntity.name} — ${groupLabel} ` +
          `(${entityCount} ${entityCount === 1 ? "entity" : "entities"})`
      };
    })
    .filter(Boolean);

  const entityItems = Array.from(appState.selectedEntityIds)
    .map(entityId => {
      const entity = dataIndex.entitiesById[entityId];

      if (!entity) {
        return null;
      }

      return {
        type: "entity",
        id: entity.id,
        label: entity.name
      };
    })
    .filter(Boolean);

  const variantItems = Array.from(appState.selectedVariantIds)
    .map(variantId => {
      const variant = dataIndex.variantsById[variantId];

      if (!variant) {
        return null;
      }

      const entity = dataIndex.entitiesById[variant.entityId];

      return {
        type: "variant",
        id: variant.id,
        label: entity ?
          `${entity.name} - ${variant.displayName}` :
          variant.displayName
      };
    })
    .filter(Boolean);

  appendCurrentSelectionSection(
    selectedElement,
    "Collections",
    collectionItems
  );

  appendCurrentSelectionSection(
    selectedElement,
    "Entity Groups",
    entityGroupItems
  );

  appendCurrentSelectionSection(
    selectedElement,
    "Entities",
    entityItems
  );

  appendCurrentSelectionSection(
    selectedElement,
    "Variants",
    variantItems
  );
}

/*
  Renders available quiz presets inside their owning quiz modes.

  Presets store quiz settings, not flag data.
  Loading a preset selects its collections and applies its question count.
*/
function renderQuizPresets() {
  const presetTargets = [
    {
      elementId: "typingQuizPresetsView",
      mode: "typing",
      emptyMessage: "No typing quiz presets available."
    },
    {
      elementId: "multipleChoiceQuizPresetsView",
      mode: "multiple_choice",
      emptyMessage: "No multiple-choice presets available."
    }
  ];

  presetTargets.forEach(target => {
    const presetsElement = document.getElementById(
      target.elementId
    );

    if (!presetsElement) {
      return;
    }

    const matchingPresets = Array.isArray(quizPresets) ?
      quizPresets.filter(preset => {
        return (
          preset.mode === target.mode &&
          isUserFacingQuizPreset(preset)
        );
      }) :
      [];

    if (matchingPresets.length === 0) {
      presetsElement.innerHTML = `
        <p class="empty-message">
          ${target.emptyMessage}
        </p>
      `;

      return;
    }

    presetsElement.innerHTML = "";

    const listElement = document.createElement("div");
    listElement.className = "quiz-preset-list";

    matchingPresets.forEach(preset => {
      const presetElement =
        createQuizPresetElement(preset);

      listElement.appendChild(presetElement);
    });

    presetsElement.appendChild(listElement);
  });
}

/*
  Creates one visible quiz preset card.
*/
function createQuizPresetElement(preset) {
  const itemElement = document.createElement("div");
  itemElement.className = "quiz-preset-item";

  const titleElement = document.createElement("p");
  titleElement.className = "quiz-preset-title";
  titleElement.textContent = preset.name;

  const metaElement = document.createElement("p");
  metaElement.className = "quiz-preset-meta";

  const collectionCount = preset.collectionIds ?
    preset.collectionIds.length :
    0;

  /*
  Calculate the current number of questions available from this preset.

  This avoids showing stale hardcoded preset.questionCount values in the
  preset panel when the underlying collection data has changed.
  */
  const availableQuestions = generateQuizQuestions({
    collectionIds: preset.collectionIds || [],
    questionCount: Number.MAX_SAFE_INTEGER
  }, dataIndex);

  const availableQuestionCount = availableQuestions.length;

  /*
  Preset question count is now treated as an optional saved limit.
  The visible preset panel should show the actual current pool size.
  */
  metaElement.textContent =
    `${preset.mode} | ${collectionCount} collection(s) | ${availableQuestionCount} available question(s)`;

  const actionsElement = document.createElement("div");
  actionsElement.className = "quiz-preset-actions";

  const loadButton = document.createElement("button");
  loadButton.type = "button";
  loadButton.textContent = "Load";

  loadButton.addEventListener("click", () => {
    loadQuizPreset(preset);
  });

  const startButton = document.createElement("button");
  startButton.type = "button";
  startButton.textContent = "Load and Start";

  startButton.addEventListener("click", () => {
    loadQuizPreset(preset);
    startLoadedQuizPreset(preset);
  });

  actionsElement.appendChild(loadButton);
  actionsElement.appendChild(startButton);

  itemElement.appendChild(titleElement);
  itemElement.appendChild(metaElement);
  itemElement.appendChild(actionsElement);

  return itemElement;
}

/*
  Loads a preset into the current selection.

  Current V1 presets replace the active selection with their saved collection
  source. They default to the full question count currently available from the
  resolved preset pool.
*/
function loadQuizPreset(preset) {
  if (preset.sourceType !== "collections") {
    console.warn(`Preset ${preset.id} uses unsupported source type: ${preset.sourceType}`);
    return;
  }

  appState.selectedCollectionIds = new Set(preset.collectionIds);
  appState.selectedEntityGroups.clear();
  appState.selectedEntityIds.clear();
  appState.selectedVariantIds.clear();

  /*
    Generate the full available pool so the input maximum and default value
    remain data-driven as collection membership changes.
  */
  const availableQuestions = generateQuizQuestions({
    collectionIds: preset.collectionIds,
    questionCount: Number.MAX_SAFE_INTEGER
  }, dataIndex);

  const maximumQuestionCount = availableQuestions.length;

  /*
    Apply the currently available question count to the relevant quiz input.
  */
  if (preset.mode === "typing") {
    const typingInput = document.getElementById("typingQuestionCountInput");

    if (typingInput) {
      typingInput.max = maximumQuestionCount;
      /*
      Presets now default to the full currently available quiz pool.

      This keeps presets data-driven, so adding/removing flags from collections
      does not require manually updating questionCount in quizPresets.js.
      */
      typingInput.value = maximumQuestionCount;
    }
  }

  if (preset.mode === "multiple_choice") {
    const multipleChoiceInput = document.getElementById("multipleChoiceQuestionCountInput");

    if (multipleChoiceInput) {
      multipleChoiceInput.max = maximumQuestionCount;
      /*
      Presets now default to the full currently available quiz pool.

      This keeps presets data-driven, so adding/removing flags from collections
      does not require manually updating questionCount in quizPresets.js.
      */
      multipleChoiceInput.value = maximumQuestionCount;
    }
  }

  renderBrowseView();
  renderCurrentSelection();
  resetGalleryRenderLimit();
  renderGallery();
}

/*
  Starts the appropriate quiz mode after loading a preset.
*/
function startLoadedQuizPreset(preset) {
  if (preset.mode === "typing") {
    showModePanel("typing");
    startTypingQuiz();
    return;
  }

  if (preset.mode === "multiple_choice") {
    showModePanel("multipleChoice");
    startMultipleChoiceQuiz();
    return;
  }

  console.warn(`Preset ${preset.id} uses unsupported quiz mode: ${preset.mode}`);
}

/*
  Browse-mode event wiring now lives in js/ui/browsePanel.js.
*/

/*
  Sets up the centre-panel mode tabs.

  These tabs do not change the data.
  They only decide which centre panel is visible:
  - Search
  - Entity
  - Gallery
  - Typing Quiz
  - Multiple-Choice Quiz
  - Random Quiz
  - Stats
*/
function setupModeTabs() {
  const tabButtons = document.querySelectorAll("[data-mode-tab]");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedMode = button.dataset.modeTab;
      showModePanel(selectedMode);
    });
  });
}

/*
  Entity Detail rendering and navigation now live in js/ui/entityDetail.js.
*/

/*
  Shows one centre-panel mode and hides the others.
*/
function showModePanel(modeName) {
  const tabButtons = document.querySelectorAll("[data-mode-tab]");
  const modePanels = document.querySelectorAll(".mode-panel");

  tabButtons.forEach(button => {
    const isActive = button.dataset.modeTab === modeName;
    button.classList.toggle("active", isActive);
  });

  modePanels.forEach(panel => {
    panel.classList.remove("active");
  });

  const panelIdByMode = {
    search: "searchModePanel",
    entity: "entityModePanel",
    gallery: "galleryModePanel",
    typing: "typingModePanel",
    multipleChoice: "multipleChoiceModePanel",
    randomQuiz: "randomQuizModePanel",
    stats: "statsModePanel"
  };

  const panelId = panelIdByMode[modeName];
  const selectedPanel = document.getElementById(panelId);

  if (!selectedPanel) {
    return;
  }

  appState.activeMode = modeName;
  selectedPanel.classList.add("active");
  updateCurrentModeTitle(modeName);
}

/*
  Updates quiz question-count inputs to match the current maximum available
  from all active selection sources.

  This is a UI convenience: manual selection changes default both quiz modes
  to the full resolved pool rather than an arbitrary fixed count.
*/
function updateQuizQuestionCountInputsToMaximum() {
  const typingInput = document.getElementById("typingQuestionCountInput");
  const multipleChoiceInput = document.getElementById("multipleChoiceQuestionCountInput");
  const hasActiveSelection =
    appState.selectedCollectionIds.size > 0 ||
    appState.selectedEntityGroups.size > 0 ||
    appState.selectedEntityIds.size > 0 ||
    appState.selectedVariantIds.size > 0;

  /*
    If no collections are selected, restore the original visual default.

    We also reset max to 100 so the input does not keep a stale maximum
    from the previously selected collection pool.
  */
  if (!hasActiveSelection) {
    if (typingInput) {
      typingInput.value = 10;
      typingInput.max = 100;
    }

    if (multipleChoiceInput) {
      multipleChoiceInput.value = 10;
      multipleChoiceInput.max = 100;
    }

    return;
  }

  const selectedCollectionIds = Array.from(appState.selectedCollectionIds);

  /*
    Generate the full possible quiz pool.

    We use a deliberately large questionCount so generateQuizQuestions()
    returns everything available after resolving, deduplicating and merging
    shared assets.
  */
  const availableQuestions = generateQuizQuestions({
      collectionIds: Array.from(appState.selectedCollectionIds),
      entityGroups: Array.from(appState.selectedEntityGroups.values()),
      entityIds: Array.from(appState.selectedEntityIds),
      variantIds: Array.from(appState.selectedVariantIds),
      questionCount: Number.MAX_SAFE_INTEGER
    },
    dataIndex
  );
  const maximumQuestionCount = availableQuestions.length;
  /*
  A selected collection may exist but still produce no quizable questions.
  In that case, show 0 and prevent the input from pretending that 1+
  questions are available.
*/
  if (maximumQuestionCount === 0) {
    if (typingInput) {
      typingInput.value = 0;
      typingInput.max = 0;
    }

    if (multipleChoiceInput) {
      multipleChoiceInput.value = 0;
      multipleChoiceInput.max = 0;
    }

    return;
  }

  if (typingInput) {
    typingInput.value = maximumQuestionCount;
    typingInput.max = maximumQuestionCount;
  }

  if (multipleChoiceInput) {
    multipleChoiceInput.value = maximumQuestionCount;
    multipleChoiceInput.max = maximumQuestionCount;
  }
}

/*
  Reveals the normal/original flag image after a quiz answer.

  Some quiz questions use a quiz-safe variant while the user is answering.
  For example, a text-removed flag may be shown during the question.

  After the answer is submitted, the question can reveal a different variant,
  usually the normal/default version of the flag.
*/
function revealQuizQuestionImage(cardElement, question) {
  if (!cardElement || !question || !question.revealVariantId) {
    return;
  }

  /*
    If the reveal variant is the same as the displayed variant,
    there is nothing to change.
  */
  if (question.revealVariantId === question.displayedVariantId) {
    return;
  }

  const revealVariant = dataIndex.variantsById[question.revealVariantId];

  if (!revealVariant) {
    return;
  }

  const revealAsset = dataIndex.assetsById[revealVariant.assetId];

  if (!revealAsset) {
    return;
  }

  const imageElement = cardElement.querySelector(".quiz-image");

  if (!imageElement) {
    return;
  }

  imageElement.src = revealAsset.path;
  imageElement.alt = `Revealed flag: ${revealVariant.displayName}`;
}


/*
  Builds an optional note for quiz questions that are part of an active
  visual-ambiguity group.

  The quiz generator only adds this text when the current quiz actually
  contains multiple visually identical or near-identical active answers.
*/
function createQuizVisualGroupNoteElement(question) {
  if (!question || !question.visualGroupNote) {
    return null;
  }

  const noteElement = document.createElement("p");
  noteElement.className = "quiz-feedback quiz-visual-group-note";
  noteElement.textContent = question.visualGroupNote;

  return noteElement;
}
