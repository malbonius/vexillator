/*
  js/ui/presetView.js

  Shared user preset UI.

  Phase 1 added Current Selection presets. Phase 2 adds Random Quiz filter
  presets. Presets stay quiz-mode neutral: a saved selection or random filter
  setup can be used with Typing Quiz or Multiple-Choice Quiz.
*/

const SELECTION_PRESET_KIND = "selection";
const RANDOM_FILTER_PRESET_KIND = "random_filter";

function setupPresetView() {
  const saveSelectionButton = document.getElementById(
    "saveSelectionPresetButton"
  );
  const saveRandomFilterButton = document.getElementById(
    "saveRandomQuizFilterPresetButton"
  );

  saveSelectionButton?.addEventListener("click", () => {
    saveCurrentSelectionPresetFromUi();
  });

  saveRandomFilterButton?.addEventListener("click", () => {
    saveRandomQuizFilterPresetFromUi();
  });

  renderPresetViews();
}

function hasActiveCurrentSelection() {
  return (
    appState.selectedCollectionIds.size > 0 ||
    appState.selectedEntityGroups.size > 0 ||
    appState.selectedEntityIds.size > 0 ||
    appState.selectedVariantIds.size > 0
  );
}

function getCurrentSelectionSourceCount() {
  return (
    appState.selectedCollectionIds.size +
    appState.selectedEntityGroups.size +
    appState.selectedEntityIds.size +
    appState.selectedVariantIds.size
  );
}

function buildCurrentSelectionPresetPayload() {
  return {
    collectionIds: Array.from(appState.selectedCollectionIds),
    entityGroups: Array.from(appState.selectedEntityGroups.values())
      .map(entityGroup => ({
        id: entityGroup.id,
        sourceEntityId: entityGroup.sourceEntityId,
        groupType: entityGroup.groupType,
        groupKey: entityGroup.groupKey ?? null,
        sectionId: entityGroup.sectionId ?? null,
        subgroupId: entityGroup.subgroupId ?? null,
        sourceLabel: entityGroup.sourceLabel ?? null,
        relationshipTypes: Array.isArray(entityGroup.relationshipTypes)
          ? [...entityGroup.relationshipTypes]
          : [],
        entityIds: Array.isArray(entityGroup.entityIds)
          ? [...entityGroup.entityIds]
          : []
      })),
    entityIds: Array.from(appState.selectedEntityIds),
    variantIds: Array.from(appState.selectedVariantIds)
  };
}

function getPresetPayloadSourceCount(payload) {
  if (!payload || typeof payload !== "object") {
    return 0;
  }

  return (
    (Array.isArray(payload.collectionIds) ? payload.collectionIds.length : 0) +
    (Array.isArray(payload.entityGroups) ? payload.entityGroups.length : 0) +
    (Array.isArray(payload.entityIds) ? payload.entityIds.length : 0) +
    (Array.isArray(payload.variantIds) ? payload.variantIds.length : 0)
  );
}

function getPresetAvailableQuestionCount(preset) {
  const payload = preset?.payload ?? {};

  const questions = generateQuizQuestions({
      collectionIds: Array.isArray(payload.collectionIds)
        ? payload.collectionIds
        : [],
      entityGroups: Array.isArray(payload.entityGroups)
        ? payload.entityGroups
        : [],
      entityIds: Array.isArray(payload.entityIds)
        ? payload.entityIds
        : [],
      variantIds: Array.isArray(payload.variantIds)
        ? payload.variantIds
        : [],
      questionCount: Number.MAX_SAFE_INTEGER
    },
    dataIndex
  );

  return questions.length;
}

function setSelectionPresetStatus(message) {
  const statusElement = document.getElementById(
    "selectionPresetStatus"
  );

  if (statusElement) {
    statusElement.textContent = message;
  }
}

function setRandomQuizPresetStatus(message) {
  const statusElement = document.getElementById(
    "randomQuizPresetStatus"
  );

  if (statusElement) {
    statusElement.textContent = message;
  }
}

function saveCurrentSelectionPresetFromUi() {
  if (!hasActiveCurrentSelection()) {
    setSelectionPresetStatus(
      "Build a selection before saving a preset."
    );
    return;
  }

  const nameInput = document.getElementById(
    "selectionPresetNameInput"
  );

  const presetName = sanitisePresetName(nameInput?.value);

  const preset = createUserPreset({
    name: presetName,
    kind: SELECTION_PRESET_KIND,
    payload: buildCurrentSelectionPresetPayload(),
    quizModePreference: null
  });

  if (!preset) {
    setSelectionPresetStatus("Preset could not be saved.");
    return;
  }

  if (nameInput) {
    nameInput.value = "";
  }

  setSelectionPresetStatus(`Saved “${preset.name}”.`);
  renderPresetViews();
}

function normaliseStoredEntityGroup(entityGroup) {
  if (
    !entityGroup ||
    typeof entityGroup !== "object" ||
    typeof entityGroup.id !== "string" ||
    entityGroup.id.trim() === "" ||
    !Array.isArray(entityGroup.entityIds)
  ) {
    return null;
  }

  const validEntityIds = entityGroup.entityIds.filter(entityId => {
    return Boolean(dataIndex.entitiesById[entityId]);
  });

  if (validEntityIds.length === 0) {
    return null;
  }

  return {
    id: entityGroup.id,
    sourceEntityId:
      typeof entityGroup.sourceEntityId === "string"
        ? entityGroup.sourceEntityId
        : null,
    groupType:
      typeof entityGroup.groupType === "string"
        ? entityGroup.groupType
        : "relationship_entities",
    groupKey: entityGroup.groupKey ?? null,
    sectionId: entityGroup.sectionId ?? null,
    subgroupId: entityGroup.subgroupId ?? null,
    sourceLabel: entityGroup.sourceLabel ?? null,
    relationshipTypes: Array.isArray(entityGroup.relationshipTypes)
      ? [...entityGroup.relationshipTypes]
      : [],
    entityIds: validEntityIds
  };
}

function applySelectionPreset(preset) {
  if (!preset || preset.kind !== SELECTION_PRESET_KIND) {
    console.warn("Only selection presets can be applied here.", preset);
    return false;
  }

  const payload = preset.payload ?? {};

  const collectionIds = Array.isArray(payload.collectionIds)
    ? payload.collectionIds.filter(collectionId => {
        return Boolean(dataIndex.collectionsById[collectionId]);
      })
    : [];

  const entityGroups = Array.isArray(payload.entityGroups)
    ? payload.entityGroups
        .map(normaliseStoredEntityGroup)
        .filter(Boolean)
    : [];

  const entityIds = Array.isArray(payload.entityIds)
    ? payload.entityIds.filter(entityId => {
        return Boolean(dataIndex.entitiesById[entityId]);
      })
    : [];

  const variantIds = Array.isArray(payload.variantIds)
    ? payload.variantIds.filter(variantId => {
        return Boolean(dataIndex.variantsById[variantId]);
      })
    : [];

  appState.selectedCollectionIds = new Set(collectionIds);
  appState.selectedEntityGroups = new Map(
    entityGroups.map(entityGroup => [entityGroup.id, entityGroup])
  );
  appState.selectedEntityIds = new Set(entityIds);
  appState.selectedVariantIds = new Set(variantIds);

  refreshAfterSelectionChange({
    showGallery: false
  });

  if (
    appState.entityView.activeEntityId &&
    typeof renderEntityView === "function"
  ) {
    renderEntityView();
  }

  return true;
}

function loadSelectionPreset(preset, options = {}) {
  const {
    targetMode = null,
    startQuiz = false
  } = options;

  const applied = applySelectionPreset(preset);

  if (!applied) {
    return;
  }

  setSelectionPresetStatus(`Loaded “${preset.name}”.`);

  if (targetMode === "typing") {
    showModePanel("typing");

    if (startQuiz) {
      startTypingQuiz();
    }

    return;
  }

  if (targetMode === "multipleChoice") {
    showModePanel("multipleChoice");

    if (startQuiz) {
      startMultipleChoiceQuiz();
    }
  }
}

function buildRandomQuizFilterPresetPayload() {
  const questionCountInput = document.getElementById(
    "randomQuizQuestionCountInput"
  );
  const requestedQuestionCount = Number(questionCountInput?.value);
  const hasFixedQuestionCount =
    appState.randomQuiz.questionCountTouched &&
    Number.isFinite(requestedQuestionCount) &&
    requestedQuestionCount >= 1;

  return {
    regionEntityIds: Array.from(appState.randomQuiz.regionEntityIds),
    typeKeys: Array.from(appState.randomQuiz.typeKeys),
    includeDisputed: appState.randomQuiz.includeDisputed === true,
    questionCountMode: hasFixedQuestionCount ? "fixed" : "maximum",
    questionCount: hasFixedQuestionCount
      ? Math.floor(requestedQuestionCount)
      : null
  };
}

function saveRandomQuizFilterPresetFromUi() {
  const nameInput = document.getElementById(
    "randomQuizPresetNameInput"
  );

  const presetName = sanitisePresetName(nameInput?.value);

  const preset = createUserPreset({
    name: presetName,
    kind: RANDOM_FILTER_PRESET_KIND,
    payload: buildRandomQuizFilterPresetPayload(),
    quizModePreference: null
  });

  if (!preset) {
    setRandomQuizPresetStatus("Random Quiz preset could not be saved.");
    return;
  }

  if (nameInput) {
    nameInput.value = "";
  }

  setRandomQuizPresetStatus(`Saved “${preset.name}”.`);
  renderPresetViews();
}

function normaliseRandomFilterPresetPayload(payload) {
  if (!payload || typeof payload !== "object") {
    payload = {};
  }

  const availableTypeKeys = new Set(
    getRandomQuizAvailableTypeOptions().map(option => option.key)
  );

  const regionEntityIds = Array.isArray(payload.regionEntityIds)
    ? payload.regionEntityIds.filter(entityId => {
        return Boolean(dataIndex.entitiesById[entityId]);
      })
    : [];

  const typeKeys = Array.isArray(payload.typeKeys)
    ? payload.typeKeys.filter(typeKey => {
        return availableTypeKeys.has(typeKey);
      })
    : [];

  const rawQuestionCount = Number(payload.questionCount);
  const hasFixedQuestionCount =
    payload.questionCountMode === "fixed" &&
    Number.isFinite(rawQuestionCount) &&
    rawQuestionCount >= 1;

  return {
    regionEntityIds,
    typeKeys,
    includeDisputed: payload.includeDisputed === true,
    questionCountMode: hasFixedQuestionCount ? "fixed" : "maximum",
    questionCount: hasFixedQuestionCount
      ? Math.floor(rawQuestionCount)
      : null
  };
}

function getRandomFilterPresetAvailableQuestionCount(preset) {
  const payload = normaliseRandomFilterPresetPayload(
    preset?.payload ?? {}
  );

  return countRandomQuizQuestions({
      regionEntityIds: payload.regionEntityIds,
      typeKeys: payload.typeKeys,
      includeDisputed: payload.includeDisputed
    },
    dataIndex
  );
}

function getRandomFilterPresetMetaText(preset) {
  const payload = normaliseRandomFilterPresetPayload(
    preset?.payload ?? {}
  );
  const availableQuestionCount =
    getRandomFilterPresetAvailableQuestionCount(preset);
  const scopeCount = payload.regionEntityIds.length;
  const typeCount = payload.typeKeys.length;
  const questionCountText = payload.questionCountMode === "fixed"
    ? `fixed ${payload.questionCount} question limit`
    : "maximum questions";
  const disputedText = payload.includeDisputed
    ? "includes disputed"
    : "excludes disputed";

  return (
    `Random filter preset · ${scopeCount} ` +
    `${scopeCount === 1 ? "scope" : "scopes"} · ` +
    `${typeCount} ${typeCount === 1 ? "type" : "types"} · ` +
    `${availableQuestionCount} matching quiz ` +
    `${availableQuestionCount === 1 ? "question" : "questions"} · ` +
    `${questionCountText} · ${disputedText}`
  );
}

function applyRandomFilterPreset(preset) {
  if (!preset || preset.kind !== RANDOM_FILTER_PRESET_KIND) {
    console.warn("Only random filter presets can be applied here.", preset);
    return false;
  }

  const payload = normaliseRandomFilterPresetPayload(preset.payload);

  appState.randomQuiz.regionEntityIds = new Set(payload.regionEntityIds);
  appState.randomQuiz.typeKeys = new Set(payload.typeKeys);
  appState.randomQuiz.includeDisputed = payload.includeDisputed;
  appState.randomQuiz.questionCountTouched = false;

  const includeDisputedInput = document.getElementById(
    "randomQuizIncludeDisputedInput"
  );

  if (includeDisputedInput) {
    includeDisputedInput.checked = payload.includeDisputed;
  }

  if (typeof renderRandomQuizFilterOptions === "function") {
    renderRandomQuizFilterOptions();
  }

  if (typeof updateRandomQuizSummaryAndControls === "function") {
    updateRandomQuizSummaryAndControls();
  }

  if (payload.questionCountMode === "fixed") {
    const questionCountInput = document.getElementById(
      "randomQuizQuestionCountInput"
    );

    if (questionCountInput) {
      questionCountInput.value = payload.questionCount;
    }

    appState.randomQuiz.questionCountTouched = true;

    if (typeof syncRandomQuizQuestionCountInput === "function") {
      syncRandomQuizQuestionCountInput(
        appState.randomQuiz.lastMaximumQuestionCount
      );
    }

    if (typeof updateRandomQuizStartButtonState === "function") {
      updateRandomQuizStartButtonState();
    }
  }

  return true;
}

function loadRandomFilterPreset(preset, options = {}) {
  const {
    targetMode = "randomQuiz",
    startQuiz = false
  } = options;

  const applied = applyRandomFilterPreset(preset);

  if (!applied) {
    return;
  }

  setRandomQuizPresetStatus(`Loaded “${preset.name}”.`);

  if (startQuiz && targetMode === "typing") {
    startRandomQuiz("typing");
    return;
  }

  if (startQuiz && targetMode === "multipleChoice") {
    startRandomQuiz("multiple_choice");
    return;
  }

  showModePanel("randomQuiz");
}

function createPresetActionButton(label, handler) {
  const button = document.createElement("button");

  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", handler);

  return button;
}

function createSelectionPresetCard(preset, context) {
  const itemElement = document.createElement("div");
  itemElement.className = "preset-item";

  const titleElement = document.createElement("p");
  titleElement.className = "preset-title";
  titleElement.textContent = preset.name;

  const sourceCount = getPresetPayloadSourceCount(preset.payload);
  const availableQuestionCount = getPresetAvailableQuestionCount(preset);

  const metaElement = document.createElement("p");
  metaElement.className = "preset-meta";
  metaElement.textContent =
    `Selection preset · ${sourceCount} ` +
    `${sourceCount === 1 ? "source" : "sources"} · ` +
    `${availableQuestionCount} matching quiz ` +
    `${availableQuestionCount === 1 ? "question" : "questions"}`;

  const actionsElement = document.createElement("div");
  actionsElement.className = "preset-actions";

  if (context === "typing") {
    actionsElement.appendChild(
      createPresetActionButton("Load", () => {
        loadSelectionPreset(preset, {
          targetMode: "typing"
        });
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Load and Start", () => {
        loadSelectionPreset(preset, {
          targetMode: "typing",
          startQuiz: true
        });
      })
    );
  } else if (context === "multipleChoice") {
    actionsElement.appendChild(
      createPresetActionButton("Load", () => {
        loadSelectionPreset(preset, {
          targetMode: "multipleChoice"
        });
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Load and Start", () => {
        loadSelectionPreset(preset, {
          targetMode: "multipleChoice",
          startQuiz: true
        });
      })
    );
  } else {
    actionsElement.appendChild(
      createPresetActionButton("Load", () => {
        loadSelectionPreset(preset);
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Delete", () => {
        const shouldDelete = window.confirm(
          `Delete preset “${preset.name}”?`
        );

        if (!shouldDelete) {
          return;
        }

        deleteUserPreset(preset.id);
        setSelectionPresetStatus(`Deleted “${preset.name}”.`);
        renderPresetViews();
      })
    );
  }

  itemElement.appendChild(titleElement);
  itemElement.appendChild(metaElement);
  itemElement.appendChild(actionsElement);

  return itemElement;
}

function createRandomFilterPresetCard(preset, context) {
  const itemElement = document.createElement("div");
  itemElement.className = "preset-item";

  const titleElement = document.createElement("p");
  titleElement.className = "preset-title";
  titleElement.textContent = preset.name;

  const metaElement = document.createElement("p");
  metaElement.className = "preset-meta";
  metaElement.textContent = getRandomFilterPresetMetaText(preset);

  const actionsElement = document.createElement("div");
  actionsElement.className = "preset-actions";

  if (context === "typing") {
    actionsElement.appendChild(
      createPresetActionButton("Apply filters", () => {
        loadRandomFilterPreset(preset, {
          targetMode: "randomQuiz"
        });
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Start Typing", () => {
        loadRandomFilterPreset(preset, {
          targetMode: "typing",
          startQuiz: true
        });
      })
    );
  } else if (context === "multipleChoice") {
    actionsElement.appendChild(
      createPresetActionButton("Apply filters", () => {
        loadRandomFilterPreset(preset, {
          targetMode: "randomQuiz"
        });
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Start Multiple-Choice", () => {
        loadRandomFilterPreset(preset, {
          targetMode: "multipleChoice",
          startQuiz: true
        });
      })
    );
  } else {
    actionsElement.appendChild(
      createPresetActionButton("Apply filters", () => {
        loadRandomFilterPreset(preset, {
          targetMode: "randomQuiz"
        });
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Delete", () => {
        const shouldDelete = window.confirm(
          `Delete preset “${preset.name}”?`
        );

        if (!shouldDelete) {
          return;
        }

        deleteUserPreset(preset.id);
        setRandomQuizPresetStatus(`Deleted “${preset.name}”.`);
        renderPresetViews();
      })
    );
  }

  itemElement.appendChild(titleElement);
  itemElement.appendChild(metaElement);
  itemElement.appendChild(actionsElement);

  return itemElement;
}

function createPresetCard(preset, context) {
  if (preset.kind === RANDOM_FILTER_PRESET_KIND) {
    return createRandomFilterPresetCard(preset, context);
  }

  return createSelectionPresetCard(preset, context);
}

function renderPresetList(containerElement, presets, context, emptyMessage) {
  if (!containerElement) {
    return;
  }

  if (presets.length === 0) {
    containerElement.innerHTML = `
      <p class="empty-message">
        ${emptyMessage}
      </p>
    `;
    return;
  }

  containerElement.innerHTML = "";

  const listElement = document.createElement("div");
  listElement.className = "preset-list";

  presets.forEach(preset => {
    listElement.appendChild(
      createPresetCard(preset, context)
    );
  });

  containerElement.appendChild(listElement);
}

function sortPresetsByName(presets) {
  return presets.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

function getRandomPresetSavePlaceholder() {
  const scopeCount = appState.randomQuiz.regionEntityIds.size;
  const typeCount = appState.randomQuiz.typeKeys.size;

  if (scopeCount === 0 && typeCount === 0) {
    return appState.randomQuiz.includeDisputed
      ? "Whole database including disputed"
      : "Whole current database";
  }

  return `${scopeCount} scope${scopeCount === 1 ? "" : "s"}, ` +
    `${typeCount} type${typeCount === 1 ? "" : "s"}`;
}

function renderPresetViews() {
  const selectionPresets = getUserPresetsByKind(SELECTION_PRESET_KIND);
  const randomFilterPresets = getUserPresetsByKind(RANDOM_FILTER_PRESET_KIND);
  const quizUsablePresets = sortPresetsByName([
    ...selectionPresets,
    ...randomFilterPresets
  ]);

  const saveSelectionButton = document.getElementById(
    "saveSelectionPresetButton"
  );

  if (saveSelectionButton) {
    saveSelectionButton.disabled = !hasActiveCurrentSelection();
  }

  const selectionSourceCount = getCurrentSelectionSourceCount();
  const saveSelectionNameInput = document.getElementById(
    "selectionPresetNameInput"
  );

  if (saveSelectionNameInput) {
    saveSelectionNameInput.placeholder = selectionSourceCount > 0
      ? `${selectionSourceCount} source selection`
      : "Build a selection before saving";
  }

  const saveRandomNameInput = document.getElementById(
    "randomQuizPresetNameInput"
  );

  if (saveRandomNameInput) {
    saveRandomNameInput.placeholder = getRandomPresetSavePlaceholder();
  }

  renderPresetList(
    document.getElementById("selectionPresetsView"),
    selectionPresets,
    "selection",
    "No selection presets saved yet."
  );

  renderPresetList(
    document.getElementById("randomQuizPresetsView"),
    randomFilterPresets,
    "randomQuiz",
    "No random-filter presets saved yet."
  );

  renderPresetList(
    document.getElementById("typingPresetView"),
    quizUsablePresets,
    "typing",
    "No presets saved yet."
  );

  renderPresetList(
    document.getElementById("multipleChoicePresetView"),
    quizUsablePresets,
    "multipleChoice",
    "No presets saved yet."
  );
}
