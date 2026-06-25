/*
  js/ui/presetView.js

  Shared user preset UI.

  Phase 1 supports Current Selection presets only. These presets save the
  selected collections, grouped entity sources, direct entities and direct
  variants. They are deliberately quiz-mode neutral: the same saved selection
  can be loaded into Typing Quiz or Multiple-Choice Quiz.
*/

const SELECTION_PRESET_KIND = "selection";

function setupPresetView() {
  const saveButton = document.getElementById(
    "saveSelectionPresetButton"
  );

  saveButton?.addEventListener("click", () => {
    saveCurrentSelectionPresetFromUi();
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
    console.warn("Only selection presets can be applied in this phase.", preset);
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

function renderPresetList(containerElement, presets, context) {
  if (!containerElement) {
    return;
  }

  if (presets.length === 0) {
    containerElement.innerHTML = `
      <p class="empty-message">
        No selection presets saved yet.
      </p>
    `;
    return;
  }

  containerElement.innerHTML = "";

  const listElement = document.createElement("div");
  listElement.className = "preset-list";

  presets.forEach(preset => {
    listElement.appendChild(
      createSelectionPresetCard(preset, context)
    );
  });

  containerElement.appendChild(listElement);
}

function renderPresetViews() {
  const selectionPresets = getUserPresetsByKind(SELECTION_PRESET_KIND);

  const saveButton = document.getElementById(
    "saveSelectionPresetButton"
  );

  if (saveButton) {
    saveButton.disabled = !hasActiveCurrentSelection();
  }

  const selectionSourceCount = getCurrentSelectionSourceCount();
  const saveNameInput = document.getElementById(
    "selectionPresetNameInput"
  );

  if (saveNameInput) {
    saveNameInput.placeholder = selectionSourceCount > 0
      ? `${selectionSourceCount} source selection`
      : "Build a selection before saving";
  }

  renderPresetList(
    document.getElementById("selectionPresetsView"),
    selectionPresets,
    "selection"
  );

  renderPresetList(
    document.getElementById("typingPresetView"),
    selectionPresets,
    "typing"
  );

  renderPresetList(
    document.getElementById("multipleChoicePresetView"),
    selectionPresets,
    "multipleChoice"
  );
}
