/*
  js/ui/presetView.js

  Shared user preset UI.

  Phase 1 added Current Selection presets. Phase 2 adds Random Quiz filter
  presets. Presets stay quiz-mode neutral: a saved selection or random filter
  setup can be used with Typing Quiz or Multiple-Choice Quiz.
*/

const SELECTION_PRESET_KIND = "selection";
const RANDOM_FILTER_PRESET_KIND = "random_filter";
const STATS_RULE_PRESET_KIND = "stats_rule";
const QUIZ_SNAPSHOT_PRESET_KIND = "quiz_snapshot";

function setupPresetView() {
  const saveSelectionButton = document.getElementById(
    "saveSelectionPresetButton"
  );
  const saveRandomFilterButton = document.getElementById(
    "saveRandomQuizFilterPresetButton"
  );
  const saveStatsRuleButton = document.getElementById(
    "saveStatsRulePresetButton"
  );

  saveSelectionButton?.addEventListener("click", () => {
    saveCurrentSelectionPresetFromUi();
  });

  saveRandomFilterButton?.addEventListener("click", () => {
    saveRandomQuizFilterPresetFromUi();
  });

  saveStatsRuleButton?.addEventListener("click", () => {
    saveStatsRulePresetFromUi();
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


function setStatsPresetStatus(message) {
  const statusElement = document.getElementById(
    "statsPresetStatus"
  );

  if (statusElement) {
    statusElement.textContent = message;
  }
}

function getStatsRuleControlValue(elementId, fallbackValue) {
  const element = document.getElementById(elementId);
  return element ? element.value : fallbackValue;
}

function getCurrentStatsRulePresetPayload() {
  const rawLimit = Number(
    getStatsRuleControlValue("statsPresetLimitInput", 30)
  );

  return normaliseStatsRulePresetPayload({
    targetType: getStatsRuleControlValue("statsTargetTypeFilter", "all"),
    mode: getStatsRuleControlValue("statsModeFilter", "all"),
    minimumSeen: getStatsRuleControlValue("statsMinimumSeenFilter", 0),
    sort: getStatsRuleControlValue("statsSortSelect", "weakest"),
    limit: Number.isFinite(rawLimit) ? rawLimit : 30
  });
}

function saveStatsRulePresetFromUi() {
  const nameInput = document.getElementById(
    "statsPresetNameInput"
  );

  const presetName = sanitisePresetName(nameInput?.value);

  const preset = createUserPreset({
    name: presetName,
    kind: STATS_RULE_PRESET_KIND,
    payload: getCurrentStatsRulePresetPayload(),
    quizModePreference: null
  });

  if (!preset) {
    setStatsPresetStatus("Stats rule preset could not be saved.");
    return;
  }

  if (nameInput) {
    nameInput.value = "";
  }

  setStatsPresetStatus(`Saved “${preset.name}”.`);
  renderPresetViews();
}

function normaliseStatsRulePresetPayload(payload) {
  if (!payload || typeof payload !== "object") {
    payload = {};
  }

  const validTargetTypes = new Set(["all", "entity", "variant"]);
  const validModes = new Set(["all", "typing", "multiple_choice"]);
  const validSorts = new Set([
    "weakest",
    "strongest",
    "most_seen",
    "least_seen",
    "slowest",
    "recently_incorrect",
    "alphabetical"
  ]);

  const targetType = validTargetTypes.has(payload.targetType)
    ? payload.targetType
    : "all";

  const mode = validModes.has(payload.mode)
    ? payload.mode
    : "all";

  const rawMinimumSeen = Number(payload.minimumSeen);
  const minimumSeen = Number.isFinite(rawMinimumSeen)
    ? Math.max(0, Math.floor(rawMinimumSeen))
    : 0;

  const sort = validSorts.has(payload.sort)
    ? payload.sort
    : "weakest";

  const rawLimit = Number(payload.limit);
  const limit = Number.isFinite(rawLimit)
    ? Math.max(1, Math.floor(rawLimit))
    : 30;

  return {
    targetType,
    mode,
    minimumSeen,
    sort,
    limit
  };
}

function getStatsRulePresetResolvedTargets(presetOrPayload) {
  const payload = normaliseStatsRulePresetPayload(
    presetOrPayload?.payload ?? presetOrPayload ?? {}
  );

  const filteredStats = filterStats(
    getAllStats(),
    payload.targetType,
    payload.mode,
    payload.minimumSeen
  );

  const sortedStats = sortStats(filteredStats, payload.sort);
  const entityIds = [];
  const variantIds = [];
  const seenTargetKeys = new Set();

  sortedStats.forEach(stat => {
    if (seenTargetKeys.size >= payload.limit) {
      return;
    }

    if (stat.targetType !== "entity" && stat.targetType !== "variant") {
      return;
    }

    const targetKey = `${stat.targetType}|${stat.targetId}`;

    if (seenTargetKeys.has(targetKey)) {
      return;
    }

    if (stat.targetType === "entity") {
      if (!dataIndex.entitiesById[stat.targetId]) {
        return;
      }

      entityIds.push(stat.targetId);
    }

    if (stat.targetType === "variant") {
      if (!dataIndex.variantsById[stat.targetId]) {
        return;
      }

      variantIds.push(stat.targetId);
    }

    seenTargetKeys.add(targetKey);
  });

  return {
    payload,
    matchingStatCount: filteredStats.length,
    selectedTargetCount: seenTargetKeys.size,
    entityIds,
    variantIds
  };
}

function generateStatsRulePresetQuestions(preset) {
  const resolvedTargets = getStatsRulePresetResolvedTargets(preset);

  return generateQuizQuestions({
      entityIds: resolvedTargets.entityIds,
      variantIds: resolvedTargets.variantIds,
      questionCount: resolvedTargets.payload.limit
    },
    dataIndex
  );
}

function getStatsRulePresetAvailableQuestionCount(preset) {
  return generateStatsRulePresetQuestions(preset).length;
}

function formatStatsRulePresetTargetType(targetType) {
  if (targetType === "entity") {
    return "entities";
  }

  if (targetType === "variant") {
    return "variants";
  }

  return "all targets";
}

function formatStatsRulePresetMode(mode) {
  if (mode === "typing") {
    return "typing stats";
  }

  if (mode === "multiple_choice") {
    return "multiple-choice stats";
  }

  return "all quiz modes";
}

function formatStatsRulePresetSort(sort) {
  if (sort === "strongest") {
    return "strongest first";
  }

  if (sort === "most_seen") {
    return "most seen";
  }

  if (sort === "least_seen") {
    return "least seen";
  }

  if (sort === "slowest") {
    return "slowest average time";
  }

  if (sort === "recently_incorrect") {
    return "recently incorrect";
  }

  if (sort === "alphabetical") {
    return "alphabetical";
  }

  return "weakest first";
}

function getStatsRulePresetMetaText(preset) {
  const resolvedTargets = getStatsRulePresetResolvedTargets(preset);
  const payload = resolvedTargets.payload;
  const availableQuestionCount = getStatsRulePresetAvailableQuestionCount(preset);

  return (
    `Stats rule preset · ${formatStatsRulePresetSort(payload.sort)} · ` +
    `${formatStatsRulePresetTargetType(payload.targetType)} · ` +
    `${formatStatsRulePresetMode(payload.mode)} · ` +
    `seen ${payload.minimumSeen}+ · ` +
    `top ${payload.limit} target${payload.limit === 1 ? "" : "s"} · ` +
    `${resolvedTargets.matchingStatCount} matching stat ` +
    `${resolvedTargets.matchingStatCount === 1 ? "record" : "records"} · ` +
    `${availableQuestionCount} matching quiz ` +
    `${availableQuestionCount === 1 ? "question" : "questions"}`
  );
}

function applyStatsRulePresetToStatsPage(preset) {
  if (!preset || preset.kind !== STATS_RULE_PRESET_KIND) {
    console.warn("Only stats rule presets can be applied here.", preset);
    return false;
  }

  const payload = normaliseStatsRulePresetPayload(preset.payload);

  const targetTypeFilter = document.getElementById("statsTargetTypeFilter");
  const modeFilter = document.getElementById("statsModeFilter");
  const minimumSeenFilter = document.getElementById("statsMinimumSeenFilter");
  const sortSelect = document.getElementById("statsSortSelect");
  const limitInput = document.getElementById("statsPresetLimitInput");

  if (targetTypeFilter) {
    targetTypeFilter.value = payload.targetType;
  }

  if (modeFilter) {
    modeFilter.value = payload.mode;
  }

  if (minimumSeenFilter) {
    minimumSeenFilter.value = String(payload.minimumSeen);
  }

  if (sortSelect) {
    sortSelect.value = payload.sort;
  }

  if (limitInput) {
    limitInput.value = String(payload.limit);
  }

  renderStatsView();
  renderPresetViews();
  showModePanel("stats");
  setStatsPresetStatus(`Applied “${preset.name}”.`);

  return true;
}

function startStatsRulePresetQuiz(preset, targetMode) {
  if (!preset || preset.kind !== STATS_RULE_PRESET_KIND) {
    return;
  }

  const questions = generateStatsRulePresetQuestions(preset);

  if (questions.length === 0) {
    setStatsPresetStatus(
      `No quiz questions currently match “${preset.name}”.`
    );
    return;
  }

  if (targetMode === "typing") {
    showModePanel("typing");
    startTypingQuizFromQuestions(questions);
    return;
  }

  if (targetMode === "multipleChoice") {
    showModePanel("multipleChoice");
    startMultipleChoiceQuizFromQuestions(questions);
  }
}

function normaliseQuizSnapshotQuestion(rawQuestion) {
  if (!rawQuestion || typeof rawQuestion !== "object") {
    return null;
  }

  const displayedVariantId =
    typeof rawQuestion.displayedVariantId === "string" &&
    dataIndex.variantsById[rawQuestion.displayedVariantId]
      ? rawQuestion.displayedVariantId
      : null;

  if (!displayedVariantId) {
    return null;
  }

  const displayedVariant = dataIndex.variantsById[displayedVariantId];

  const assetId =
    typeof rawQuestion.assetId === "string" &&
    dataIndex.assetsById[rawQuestion.assetId]
      ? rawQuestion.assetId
      : displayedVariant.assetId;

  if (!assetId || !dataIndex.assetsById[assetId]) {
    return null;
  }

  const revealVariantId =
    typeof rawQuestion.revealVariantId === "string" &&
    dataIndex.variantsById[rawQuestion.revealVariantId]
      ? rawQuestion.revealVariantId
      : displayedVariantId;

  const acceptedEntityIds = Array.isArray(rawQuestion.acceptedEntityIds)
    ? rawQuestion.acceptedEntityIds.filter(entityId => {
        return Boolean(dataIndex.entitiesById[entityId]);
      })
    : [];

  const primaryEntityId =
    typeof rawQuestion.primaryEntityId === "string" &&
    dataIndex.entitiesById[rawQuestion.primaryEntityId]
      ? rawQuestion.primaryEntityId
      : acceptedEntityIds[0] || null;

  if (!primaryEntityId) {
    return null;
  }

  if (!acceptedEntityIds.includes(primaryEntityId)) {
    acceptedEntityIds.unshift(primaryEntityId);
  }

  const quizVisualGroupId =
    typeof rawQuestion.quizVisualGroupId === "string"
      ? rawQuestion.quizVisualGroupId
      : displayedVariant.quizVisualGroupId || null;

  return {
    memberId: null,
    collectionId: null,
    primaryEntityId,
    displayedVariantId,
    revealVariantId,
    assetId,
    quizVisualGroupId,
    acceptedEntityIds: [...new Set(acceptedEntityIds)]
  };
}

function normaliseQuizSnapshotPresetPayload(payload) {
  if (!payload || typeof payload !== "object") {
    payload = {};
  }

  const questions = Array.isArray(payload.questions)
    ? payload.questions
        .map(normaliseQuizSnapshotQuestion)
        .filter(Boolean)
    : [];

  return {
    questions,
    questionCount: questions.length
  };
}

function buildQuizSnapshotPresetPayload(questions) {
  return normaliseQuizSnapshotPresetPayload({
    questions
  });
}

function getDefaultQuizSnapshotPresetName(sourceQuizMode, questionCount) {
  if (sourceQuizMode === "multiple_choice") {
    return `Multiple-choice quiz set (${questionCount} questions)`;
  }

  if (sourceQuizMode === "typing") {
    return `Typing quiz set (${questionCount} questions)`;
  }

  return `Saved quiz set (${questionCount} questions)`;
}

function saveQuizSnapshotPresetFromQuestions(options = {}) {
  const questions = Array.isArray(options.questions)
    ? options.questions
    : [];

  const payload = buildQuizSnapshotPresetPayload(questions);

  if (payload.questions.length === 0) {
    window.alert("This quiz set could not be saved because it has no valid questions.");
    return null;
  }

  const sourceQuizMode =
    options.sourceQuizMode === "typing" ||
    options.sourceQuizMode === "multiple_choice"
      ? options.sourceQuizMode
      : null;

  const defaultName = typeof options.defaultName === "string"
    ? options.defaultName
    : getDefaultQuizSnapshotPresetName(
        sourceQuizMode,
        payload.questions.length
      );

  const chosenName = window.prompt(
    "Name this saved quiz set",
    defaultName
  );

  if (chosenName === null) {
    return null;
  }

  const preset = createUserPreset({
    name: sanitisePresetName(chosenName),
    kind: QUIZ_SNAPSHOT_PRESET_KIND,
    payload,
    quizModePreference: sourceQuizMode
  });

  if (preset) {
    renderPresetViews();
  }

  return preset;
}

function generateQuizSnapshotPresetQuestions(preset) {
  if (!preset || preset.kind !== QUIZ_SNAPSHOT_PRESET_KIND) {
    return [];
  }

  const payload = normaliseQuizSnapshotPresetPayload(preset.payload);
  const questions = payload.questions.map(question => ({
    ...question,
    acceptedEntityIds: [...question.acceptedEntityIds]
  }));

  attachQuizVisualGroupMetadata(questions, dataIndex);

  const quizEntityIds = new Set();

  questions.forEach(question => {
    (question.acceptedEntityIds || []).forEach(entityId => {
      quizEntityIds.add(entityId);
    });
  });

  const allowsVariantOnlyAnswers = quizEntityIds.size === 1;

  questions.forEach(question => {
    question.answerLabel = getQuizQuestionAnswerLabel(
      question,
      questions,
      dataIndex
    );

    question.needsVariantAnswer = questionNeedsVariantLabel(
      question,
      questions
    );

    question.allowsVariantOnlyAnswers = allowsVariantOnlyAnswers;
  });

  attachQuizVisualGroupLabels(questions, dataIndex);

  return questions;
}

function getQuizSnapshotPresetAvailableQuestionCount(preset) {
  return generateQuizSnapshotPresetQuestions(preset).length;
}

function shuffleQuizSnapshotQuestions(questions) {
  const shuffledQuestions = [...questions];

  for (let index = shuffledQuestions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const currentQuestion = shuffledQuestions[index];

    shuffledQuestions[index] = shuffledQuestions[swapIndex];
    shuffledQuestions[swapIndex] = currentQuestion;
  }

  return shuffledQuestions;
}

function getQuizSnapshotPresetMetaText(preset) {
  const payload = normaliseQuizSnapshotPresetPayload(preset?.payload ?? {});
  const availableQuestionCount =
    getQuizSnapshotPresetAvailableQuestionCount(preset);

  const sourceText = preset.quizModePreference === "typing"
    ? "saved from typing"
    : preset.quizModePreference === "multiple_choice"
      ? "saved from multiple-choice"
      : "quiz-mode neutral";

  return (
    `Saved quiz set · shuffled on replay · ${sourceText} · ` +
    `${payload.questionCount} saved ` +
    `${payload.questionCount === 1 ? "question" : "questions"} · ` +
    `${availableQuestionCount} currently available`
  );
}

function startQuizSnapshotPresetQuiz(preset, targetMode) {
  const questions = shuffleQuizSnapshotQuestions(
    generateQuizSnapshotPresetQuestions(preset)
  );

  if (questions.length === 0) {
    window.alert(
      `No quiz questions currently match “${preset.name}”.`
    );
    return;
  }

  if (targetMode === "typing") {
    showModePanel("typing");
    startTypingQuizFromQuestions(questions);
    return;
  }

  if (targetMode === "multipleChoice") {
    showModePanel("multipleChoice");
    startMultipleChoiceQuizFromQuestions(questions);
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


function createStatsRulePresetCard(preset, context) {
  const itemElement = document.createElement("div");
  itemElement.className = "preset-item";

  const titleElement = document.createElement("p");
  titleElement.className = "preset-title";
  titleElement.textContent = preset.name;

  const metaElement = document.createElement("p");
  metaElement.className = "preset-meta";
  metaElement.textContent = getStatsRulePresetMetaText(preset);

  const actionsElement = document.createElement("div");
  actionsElement.className = "preset-actions";

  if (context === "typing") {
    actionsElement.appendChild(
      createPresetActionButton("View rule", () => {
        applyStatsRulePresetToStatsPage(preset);
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Start Typing", () => {
        startStatsRulePresetQuiz(preset, "typing");
      })
    );
  } else if (context === "multipleChoice") {
    actionsElement.appendChild(
      createPresetActionButton("View rule", () => {
        applyStatsRulePresetToStatsPage(preset);
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Start Multiple-Choice", () => {
        startStatsRulePresetQuiz(preset, "multipleChoice");
      })
    );
  } else {
    actionsElement.appendChild(
      createPresetActionButton("Apply rule", () => {
        applyStatsRulePresetToStatsPage(preset);
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Start Typing", () => {
        startStatsRulePresetQuiz(preset, "typing");
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Start Multiple-Choice", () => {
        startStatsRulePresetQuiz(preset, "multipleChoice");
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
        setStatsPresetStatus(`Deleted “${preset.name}”.`);
        renderPresetViews();
      })
    );
  }

  itemElement.appendChild(titleElement);
  itemElement.appendChild(metaElement);
  itemElement.appendChild(actionsElement);

  return itemElement;
}

function createQuizSnapshotPresetCard(preset, context) {
  const itemElement = document.createElement("div");
  itemElement.className = "preset-item";

  const titleElement = document.createElement("p");
  titleElement.className = "preset-title";
  titleElement.textContent = preset.name;

  const metaElement = document.createElement("p");
  metaElement.className = "preset-meta";
  metaElement.textContent = getQuizSnapshotPresetMetaText(preset);

  const actionsElement = document.createElement("div");
  actionsElement.className = "preset-actions";

  if (context === "typing") {
    actionsElement.appendChild(
      createPresetActionButton("Start Typing", () => {
        startQuizSnapshotPresetQuiz(preset, "typing");
      })
    );
  } else if (context === "multipleChoice") {
    actionsElement.appendChild(
      createPresetActionButton("Start Multiple-Choice", () => {
        startQuizSnapshotPresetQuiz(preset, "multipleChoice");
      })
    );
  } else {
    actionsElement.appendChild(
      createPresetActionButton("Start Typing", () => {
        startQuizSnapshotPresetQuiz(preset, "typing");
      })
    );

    actionsElement.appendChild(
      createPresetActionButton("Start Multiple-Choice", () => {
        startQuizSnapshotPresetQuiz(preset, "multipleChoice");
      })
    );
  }

  actionsElement.appendChild(
    createPresetActionButton("Delete", () => {
      const shouldDelete = window.confirm(
        `Delete saved quiz set “${preset.name}”?`
      );

      if (!shouldDelete) {
        return;
      }

      deleteUserPreset(preset.id);
      renderPresetViews();
    })
  );

  itemElement.appendChild(titleElement);
  itemElement.appendChild(metaElement);
  itemElement.appendChild(actionsElement);

  return itemElement;
}

function createPresetCard(preset, context) {
  if (preset.kind === QUIZ_SNAPSHOT_PRESET_KIND) {
    return createQuizSnapshotPresetCard(preset, context);
  }

  if (preset.kind === RANDOM_FILTER_PRESET_KIND) {
    return createRandomFilterPresetCard(preset, context);
  }

  if (preset.kind === STATS_RULE_PRESET_KIND) {
    return createStatsRulePresetCard(preset, context);
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

function getQuizPresetGroups({
  selectionPresets,
  randomFilterPresets,
  statsRulePresets,
  quizSnapshotPresets
}) {
  return [
    {
      title: "Current Selection presets",
      note: "Saved manual selections from Browse, Entity Detail or Search.",
      presets: sortPresetsByName(selectionPresets)
    },
    {
      title: "Random Quiz filter presets",
      note: "Saved Random Quiz scope, type and disputed settings.",
      presets: sortPresetsByName(randomFilterPresets)
    },
    {
      title: "Stats smart presets",
      note: "Rules that recalculate from current stats, such as weak or slow flags.",
      presets: sortPresetsByName(statsRulePresets)
    },
    {
      title: "Saved quiz sets",
      note: "Saved quiz question pools from result screens, shuffled on replay.",
      presets: sortPresetsByName(quizSnapshotPresets)
    }
  ];
}

function renderGroupedQuizPresetList(
  containerElement,
  presetGroups,
  context,
  emptyMessage
) {
  if (!containerElement) {
    return;
  }

  const nonEmptyGroups = presetGroups.filter(group => {
    return Array.isArray(group.presets) && group.presets.length > 0;
  });

  if (nonEmptyGroups.length === 0) {
    containerElement.innerHTML = `
      <p class="empty-message">
        ${emptyMessage}
      </p>
    `;
    return;
  }

  containerElement.innerHTML = "";

  const groupedListElement = document.createElement("div");
  groupedListElement.className = "preset-grouped-list";

  nonEmptyGroups.forEach(group => {
    const groupElement = document.createElement("section");
    groupElement.className = "preset-group";

    const headingElement = document.createElement("h4");
    headingElement.className = "preset-group-heading";
    headingElement.textContent = group.title;

    const noteElement = document.createElement("p");
    noteElement.className = "preset-group-note";
    noteElement.textContent = group.note;

    const listElement = document.createElement("div");
    listElement.className = "preset-list";

    group.presets.forEach(preset => {
      listElement.appendChild(
        createPresetCard(preset, context)
      );
    });

    groupElement.appendChild(headingElement);
    groupElement.appendChild(noteElement);
    groupElement.appendChild(listElement);
    groupedListElement.appendChild(groupElement);
  });

  containerElement.appendChild(groupedListElement);
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


function getStatsPresetSavePlaceholder() {
  const payload = getCurrentStatsRulePresetPayload();

  return `${formatStatsRulePresetSort(payload.sort)} · ` +
    `${formatStatsRulePresetTargetType(payload.targetType)} · ` +
    `${formatStatsRulePresetMode(payload.mode)} · ` +
    `seen ${payload.minimumSeen}+`;
}

function renderPresetViews() {
  const selectionPresets = getUserPresetsByKind(SELECTION_PRESET_KIND);
  const randomFilterPresets = getUserPresetsByKind(RANDOM_FILTER_PRESET_KIND);
  const statsRulePresets = getUserPresetsByKind(STATS_RULE_PRESET_KIND);
  const quizSnapshotPresets = getUserPresetsByKind(QUIZ_SNAPSHOT_PRESET_KIND);
  const quizPresetGroups = getQuizPresetGroups({
    selectionPresets,
    randomFilterPresets,
    statsRulePresets,
    quizSnapshotPresets
  });

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

  const saveStatsNameInput = document.getElementById(
    "statsPresetNameInput"
  );

  if (saveStatsNameInput) {
    saveStatsNameInput.placeholder = getStatsPresetSavePlaceholder();
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
    document.getElementById("statsRulePresetsView"),
    statsRulePresets,
    "stats",
    "No stats-rule presets saved yet."
  );

  renderGroupedQuizPresetList(
    document.getElementById("typingPresetView"),
    quizPresetGroups,
    "typing",
    "No presets saved yet."
  );

  renderGroupedQuizPresetList(
    document.getElementById("multipleChoicePresetView"),
    quizPresetGroups,
    "multipleChoice",
    "No presets saved yet."
  );
}
