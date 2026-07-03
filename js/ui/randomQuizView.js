/*
  Random Quiz UI.

  Every include rule owns its own scope and entity-type filters. The resulting
  temporary quiz pool is the deduplicated union of all rules, so unrelated
  scope/type combinations do not form an accidental cross-product.
*/

let randomQuizRuleIdCounter = 1;
let randomQuizRuleToOpenId = null;

function setupRandomQuizView() {
  ensureRandomQuizRulesState();
  renderRandomQuizFilterOptions();
  bindRandomQuizControls();
  updateRandomQuizSummaryAndControls();
}

function createRandomQuizRuleState(options = {}) {
  randomQuizRuleIdCounter += 1;

  return {
    id: typeof options.id === "string" && options.id.length > 0
      ? options.id
      : `random_quiz_rule_${Date.now()}_${randomQuizRuleIdCounter}`,
    regionEntityIds: new Set(
      Array.isArray(options.regionEntityIds)
        ? options.regionEntityIds
        : []
    ),
    typeKeys: new Set(
      Array.isArray(options.typeKeys)
        ? options.typeKeys
        : []
    )
  };
}

function ensureRandomQuizRulesState() {
  if (!appState.randomQuiz || typeof appState.randomQuiz !== "object") {
    return;
  }

  /*
    This also supports a live page that still has the old global Set fields,
    although a normal reload will use the new appState shape directly.
  */
  if (
    !Array.isArray(appState.randomQuiz.rules) ||
    appState.randomQuiz.rules.length === 0
  ) {
    const legacyRegionIds = appState.randomQuiz.regionEntityIds instanceof Set
      ? Array.from(appState.randomQuiz.regionEntityIds)
      : [];
    const legacyTypeKeys = appState.randomQuiz.typeKeys instanceof Set
      ? Array.from(appState.randomQuiz.typeKeys)
      : [];

    appState.randomQuiz.rules = [
      createRandomQuizRuleState({
        regionEntityIds: legacyRegionIds,
        typeKeys: legacyTypeKeys
      })
    ];
  }

  appState.randomQuiz.rules = appState.randomQuiz.rules.map(rule => {
    if (
      rule &&
      typeof rule.id === "string" &&
      rule.regionEntityIds instanceof Set &&
      rule.typeKeys instanceof Set
    ) {
      return rule;
    }

    const regionEntityIds = rule?.regionEntityIds instanceof Set
      ? Array.from(rule.regionEntityIds)
      : Array.isArray(rule?.regionEntityIds)
        ? rule.regionEntityIds
        : [];
    const typeKeys = rule?.typeKeys instanceof Set
      ? Array.from(rule.typeKeys)
      : Array.isArray(rule?.typeKeys)
        ? rule.typeKeys
        : [];

    return createRandomQuizRuleState({
      id: rule?.id,
      regionEntityIds,
      typeKeys
    });
  });
}

function renderRandomQuizFilterOptions() {
  const rulesViewElement = document.getElementById(
    "randomQuizRulesView"
  );

  if (!rulesViewElement) {
    return;
  }

  ensureRandomQuizRulesState();
  rulesViewElement.innerHTML = "";

  appState.randomQuiz.rules.forEach((rule, ruleIndex) => {
    rulesViewElement.appendChild(
      createRandomQuizRuleElement(rule, ruleIndex)
    );
  });

  randomQuizRuleToOpenId = null;
}

function createRandomQuizRuleElement(rule, ruleIndex) {
  const ruleElement = document.createElement("details");
  ruleElement.className = "random-quiz-rule";
  ruleElement.dataset.ruleId = rule.id;
  ruleElement.open = randomQuizRuleToOpenId === rule.id ||
    (appState.randomQuiz.rules.length === 1 && ruleIndex === 0);

  const summaryElement = document.createElement("summary");
  summaryElement.className = "random-quiz-rule-summary";
  summaryElement.id = `randomQuizRuleSummary_${rule.id}`;
  summaryElement.textContent = getRandomQuizRuleSummaryText(
    rule,
    ruleIndex
  );

  const contentElement = document.createElement("div");
  contentElement.className = "random-quiz-rule-content";

  const actionsElement = document.createElement("div");
  actionsElement.className = "random-quiz-rule-actions";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = appState.randomQuiz.rules.length === 1
    ? "Clear this rule"
    : "Remove this rule";
  removeButton.addEventListener("click", () => {
    removeRandomQuizRule(rule.id);
  });

  actionsElement.appendChild(removeButton);

  const filterGridElement = document.createElement("div");
  filterGridElement.className = "random-quiz-rule-filter-grid";

  const scopeSectionElement = document.createElement("section");
  scopeSectionElement.className = "random-quiz-rule-filter-section";

  const scopeHeadingElement = document.createElement("h4");
  scopeHeadingElement.textContent = "Scope / area";

  const scopeNoteElement = document.createElement("p");
  scopeNoteElement.className = "panel-note";
  scopeNoteElement.textContent =
    "Leave empty for the whole database. Multiple areas inside this rule are combined.";

  const scopeGroupsElement = document.createElement("div");
  scopeGroupsElement.className = "random-quiz-scope-groups";

  getRandomQuizAvailableRegionGroups(dataIndex).forEach(group => {
    scopeGroupsElement.appendChild(
      createRandomQuizRegionGroupElement(group, rule, ruleIndex)
    );
  });

  scopeSectionElement.appendChild(scopeHeadingElement);
  scopeSectionElement.appendChild(scopeNoteElement);
  scopeSectionElement.appendChild(scopeGroupsElement);

  const typeSectionElement = document.createElement("section");
  typeSectionElement.className = "random-quiz-rule-filter-section";

  const typeHeadingElement = document.createElement("h4");
  typeHeadingElement.textContent = "Entity types";

  const typeNoteElement = document.createElement("p");
  typeNoteElement.className = "panel-note";
  typeNoteElement.textContent =
    "Leave empty for all current entity types. Multiple types inside this rule are combined.";

  const typeOptionsElement = document.createElement("div");
  typeOptionsElement.className = "random-quiz-option-grid";

  getRandomQuizAvailableTypeOptions().forEach(option => {
    typeOptionsElement.appendChild(
      createRandomQuizCheckbox({
        inputName: `randomQuizType_${rule.id}`,
        value: option.key,
        label: option.label,
        checked: rule.typeKeys.has(option.key),
        onChange: event => {
          updateRandomQuizSetFromCheckbox(
            rule.typeKeys,
            option.key,
            event.target.checked
          );

          handleRandomQuizRuleChange(rule, ruleIndex);
        }
      })
    );
  });

  typeSectionElement.appendChild(typeHeadingElement);
  typeSectionElement.appendChild(typeNoteElement);
  typeSectionElement.appendChild(typeOptionsElement);

  filterGridElement.appendChild(scopeSectionElement);
  filterGridElement.appendChild(typeSectionElement);

  contentElement.appendChild(actionsElement);
  contentElement.appendChild(filterGridElement);

  ruleElement.appendChild(summaryElement);
  ruleElement.appendChild(contentElement);

  return ruleElement;
}

function createRandomQuizRegionGroupElement(group, rule, ruleIndex) {
  const groupElement = document.createElement("details");
  groupElement.className = "random-quiz-filter-group";
  groupElement.open = group.openByDefault === true;

  const summaryElement = document.createElement("summary");
  summaryElement.className = "random-quiz-filter-group-summary";
  summaryElement.textContent = `${group.label} (${group.options.length})`;

  groupElement.appendChild(summaryElement);

  const optionsElement = document.createElement("div");
  optionsElement.className = "random-quiz-option-grid";

  group.options.forEach(option => {
    optionsElement.appendChild(
      createRandomQuizCheckbox({
        inputName: `randomQuizRegion_${rule.id}`,
        value: option.id,
        label: option.label,
        checked: rule.regionEntityIds.has(option.id),
        onChange: event => {
          updateRandomQuizSetFromCheckbox(
            rule.regionEntityIds,
            option.id,
            event.target.checked
          );

          handleRandomQuizRuleChange(rule, ruleIndex);
        }
      })
    );
  });

  groupElement.appendChild(optionsElement);

  return groupElement;
}

function createRandomQuizCheckbox(options) {
  const labelElement = document.createElement("label");
  labelElement.className = "random-quiz-checkbox";

  const inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.name = options.inputName;
  inputElement.value = options.value;
  inputElement.checked = options.checked;

  inputElement.addEventListener("change", options.onChange);

  const textElement = document.createElement("span");
  textElement.textContent = options.label;

  labelElement.appendChild(inputElement);
  labelElement.appendChild(textElement);

  return labelElement;
}

function getRandomQuizRuleSummaryText(rule, ruleIndex) {
  const scopeText = getRandomQuizRuleScopeSummary(rule);
  const typeText = getRandomQuizRuleTypeSummary(rule);

  return `Include rule ${ruleIndex + 1} — ${scopeText} + ${typeText}`;
}

function getRandomQuizRuleScopeSummary(rule) {
  const selectedIds = Array.from(rule.regionEntityIds);

  if (selectedIds.length === 0) {
    return "All areas";
  }

  const availableOptionsById = new Map(
    getRandomQuizAvailableRegionOptions(dataIndex).map(option => {
      return [option.id, option.label];
    })
  );

  const labels = selectedIds.map(entityId => {
    return availableOptionsById.get(entityId) ||
      dataIndex.entitiesById[entityId]?.name ||
      entityId;
  });

  return formatRandomQuizRuleSummaryLabels(labels, "area", "areas");
}

function getRandomQuizRuleTypeSummary(rule) {
  const selectedKeys = Array.from(rule.typeKeys);

  if (selectedKeys.length === 0) {
    return "All current types";
  }

  const availableOptionsByKey = new Map(
    getRandomQuizAvailableTypeOptions().map(option => {
      return [option.key, option.label];
    })
  );

  const labels = selectedKeys.map(typeKey => {
    return availableOptionsByKey.get(typeKey) || typeKey;
  });

  return formatRandomQuizRuleSummaryLabels(labels, "type", "types");
}

function formatRandomQuizRuleSummaryLabels(
  labels,
  singularNoun,
  pluralNoun
) {
  const sortedLabels = labels.slice().sort((firstLabel, secondLabel) => {
    return firstLabel.localeCompare(secondLabel);
  });

  if (sortedLabels.length <= 2) {
    return sortedLabels.join(", ");
  }

  const remainingCount = sortedLabels.length - 2;
  const noun = remainingCount === 1 ? singularNoun : pluralNoun;

  return `${sortedLabels.slice(0, 2).join(", ")} and ${remainingCount} more ${noun}`;
}

function updateRandomQuizRuleSummary(rule, ruleIndex) {
  const summaryElement = document.getElementById(
    `randomQuizRuleSummary_${rule.id}`
  );

  if (summaryElement) {
    summaryElement.textContent = getRandomQuizRuleSummaryText(
      rule,
      ruleIndex
    );
  }
}

function handleRandomQuizRuleChange(rule, ruleIndex) {
  appState.randomQuiz.questionCountTouched = false;
  updateRandomQuizRuleSummary(rule, ruleIndex);
  updateRandomQuizSummaryAndControls();
}

function addRandomQuizRule() {
  const newRule = createRandomQuizRuleState();
  appState.randomQuiz.rules.push(newRule);
  randomQuizRuleToOpenId = newRule.id;
  appState.randomQuiz.questionCountTouched = false;
  renderRandomQuizFilterOptions();
  updateRandomQuizSummaryAndControls();
}

function removeRandomQuizRule(ruleId) {
  if (appState.randomQuiz.rules.length === 1) {
    appState.randomQuiz.rules = [createRandomQuizRuleState()];
  } else {
    appState.randomQuiz.rules = appState.randomQuiz.rules.filter(rule => {
      return rule.id !== ruleId;
    });
  }

  appState.randomQuiz.questionCountTouched = false;
  renderRandomQuizFilterOptions();
  updateRandomQuizSummaryAndControls();
}

function bindRandomQuizControls() {
  const addRuleButton = document.getElementById(
    "addRandomQuizRuleButton"
  );
  const includeDisputedInput = document.getElementById(
    "randomQuizIncludeDisputedInput"
  );
  const questionCountInput = document.getElementById(
    "randomQuizQuestionCountInput"
  );
  const startTypingButton = document.getElementById(
    "startRandomTypingQuizButton"
  );
  const startMultipleChoiceButton = document.getElementById(
    "startRandomMultipleChoiceQuizButton"
  );
  const clearFiltersButton = document.getElementById(
    "clearRandomQuizFiltersButton"
  );

  addRuleButton?.addEventListener("click", () => {
    addRandomQuizRule();
  });

  includeDisputedInput?.addEventListener("change", event => {
    appState.randomQuiz.includeDisputed = event.target.checked;
    appState.randomQuiz.questionCountTouched = false;
    updateRandomQuizSummaryAndControls();
  });

  questionCountInput?.addEventListener("input", () => {
    appState.randomQuiz.questionCountTouched = true;
    updateRandomQuizStartButtonState();
  });

  startTypingButton?.addEventListener("click", () => {
    startRandomQuiz("typing");
  });

  startMultipleChoiceButton?.addEventListener("click", () => {
    startRandomQuiz("multiple_choice");
  });

  clearFiltersButton?.addEventListener("click", () => {
    clearRandomQuizFilters();
  });
}

function updateRandomQuizSetFromCheckbox(targetSet, value, isChecked) {
  if (isChecked) {
    targetSet.add(value);
    return;
  }

  targetSet.delete(value);
}

function getRandomQuizFiltersFromState() {
  ensureRandomQuizRulesState();

  return {
    rules: appState.randomQuiz.rules.map(rule => ({
      regionEntityIds: Array.from(rule.regionEntityIds),
      typeKeys: Array.from(rule.typeKeys)
    })),
    includeDisputed: appState.randomQuiz.includeDisputed
  };
}

function updateRandomQuizSummaryAndControls() {
  const filters = getRandomQuizFiltersFromState();
  const maximumQuestionCount = countRandomQuizQuestions(
    filters,
    dataIndex
  );

  appState.randomQuiz.lastMaximumQuestionCount = maximumQuestionCount;

  const summaryElement = document.getElementById(
    "randomQuizMatchSummary"
  );
  const emptyMessageElement = document.getElementById(
    "randomQuizEmptyMessage"
  );

  if (summaryElement) {
    summaryElement.textContent =
      `Matching quiz questions: ${maximumQuestionCount}`;
  }

  if (emptyMessageElement) {
    emptyMessageElement.hidden = maximumQuestionCount !== 0;
  }

  syncRandomQuizQuestionCountInput(maximumQuestionCount);
  updateRandomQuizStartButtonState();

  if (typeof renderPresetViews === "function") {
    renderPresetViews();
  }
}

function syncRandomQuizQuestionCountInput(maximumQuestionCount) {
  const questionCountInput = document.getElementById(
    "randomQuizQuestionCountInput"
  );

  if (!questionCountInput) {
    return;
  }

  if (maximumQuestionCount === 0) {
    questionCountInput.value = 0;
    questionCountInput.max = 0;
    questionCountInput.disabled = true;
    return;
  }

  questionCountInput.disabled = false;
  questionCountInput.max = maximumQuestionCount;

  const currentValue = Number(questionCountInput.value);

  if (
    !appState.randomQuiz.questionCountTouched ||
    !Number.isFinite(currentValue) ||
    currentValue < 1
  ) {
    questionCountInput.value = maximumQuestionCount;
    return;
  }

  if (currentValue > maximumQuestionCount) {
    questionCountInput.value = maximumQuestionCount;
  }
}

function updateRandomQuizStartButtonState() {
  const maximumQuestionCount = appState.randomQuiz.lastMaximumQuestionCount;
  const questionCountInput = document.getElementById(
    "randomQuizQuestionCountInput"
  );
  const startTypingButton = document.getElementById(
    "startRandomTypingQuizButton"
  );
  const startMultipleChoiceButton = document.getElementById(
    "startRandomMultipleChoiceQuizButton"
  );

  const requestedQuestionCount = Number(questionCountInput?.value);
  const canStart = maximumQuestionCount > 0 &&
    Number.isFinite(requestedQuestionCount) &&
    requestedQuestionCount >= 1;

  if (startTypingButton) {
    startTypingButton.disabled = !canStart;
  }

  if (startMultipleChoiceButton) {
    startMultipleChoiceButton.disabled = !canStart;
  }
}

function startRandomQuiz(mode) {
  const questionCountInput = document.getElementById(
    "randomQuizQuestionCountInput"
  );
  const requestedQuestionCount = Number(questionCountInput?.value);

  if (!Number.isFinite(requestedQuestionCount) || requestedQuestionCount < 1) {
    updateRandomQuizSummaryAndControls();
    return;
  }

  const filters = getRandomQuizFiltersFromState();

  startRandomQuizFromFilters(
    mode,
    filters,
    requestedQuestionCount
  );
}

function cloneRandomQuizFilters(filters) {
  return {
    rules: Array.isArray(filters?.rules)
      ? filters.rules.map(rule => ({
          regionEntityIds: Array.isArray(rule.regionEntityIds)
            ? [...rule.regionEntityIds]
            : [],
          typeKeys: Array.isArray(rule.typeKeys)
            ? [...rule.typeKeys]
            : []
        }))
      : [],
    includeDisputed: Boolean(filters?.includeDisputed)
  };
}

function startRandomQuizFromFilters(
  mode,
  filters,
  requestedQuestionCount
) {
  const capturedFilters = cloneRandomQuizFilters(filters);

  const questions = generateRandomQuizQuestions({
      filters: capturedFilters,
      questionCount: requestedQuestionCount
    },
    dataIndex
  );

  const distractorQuestions = generateRandomQuizQuestions({
      filters: capturedFilters,
      questionCount: Number.MAX_SAFE_INTEGER
    },
    dataIndex
  );

  if (questions.length === 0) {
    updateRandomQuizSummaryAndControls();
    return;
  }

  if (mode === "typing") {
    showModePanel("typing");
    startTypingQuizFromQuestions(
      questions,
      {
        restartHandler: () => {
          startRandomQuizFromFilters(
            "typing",
            capturedFilters,
            requestedQuestionCount
          );
        }
      }
    );
    return;
  }

  if (mode === "multiple_choice") {
    showModePanel("multipleChoice");
    startMultipleChoiceQuizFromQuestions(
      questions,
      distractorQuestions,
      {
        restartHandler: () => {
          startRandomQuizFromFilters(
            "multiple_choice",
            capturedFilters,
            requestedQuestionCount
          );
        }
      }
    );
  }
}

function clearRandomQuizFilters() {
  appState.randomQuiz.rules = [createRandomQuizRuleState()];
  appState.randomQuiz.includeDisputed = false;
  appState.randomQuiz.questionCountTouched = false;

  const includeDisputedInput = document.getElementById(
    "randomQuizIncludeDisputedInput"
  );

  if (includeDisputedInput) {
    includeDisputedInput.checked = false;
  }

  renderRandomQuizFilterOptions();
  updateRandomQuizSummaryAndControls();
}

/*
  Expose the setup hook explicitly for the non-module script loader used by
  index.html.
*/
if (typeof window !== "undefined") {
  window.setupRandomQuizView = setupRandomQuizView;
}
