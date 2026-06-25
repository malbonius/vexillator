/*
  Random Quiz UI.

  This page owns the shared Random Quiz filters. It can start either quiz
  presentation from the same temporary entity/default-variant pool.
*/

function setupRandomQuizView() {
  renderRandomQuizFilterOptions();
  bindRandomQuizControls();
  updateRandomQuizSummaryAndControls();
}

function renderRandomQuizFilterOptions() {
  const regionOptionsElement = document.getElementById(
    "randomQuizRegionOptions"
  );
  const typeOptionsElement = document.getElementById(
    "randomQuizTypeOptions"
  );

  if (!regionOptionsElement || !typeOptionsElement) {
    return;
  }

  regionOptionsElement.innerHTML = "";
  typeOptionsElement.innerHTML = "";

  getRandomQuizAvailableRegionGroups(dataIndex).forEach(group => {
    regionOptionsElement.appendChild(
      createRandomQuizRegionGroupElement(group)
    );
  });

  getRandomQuizAvailableTypeOptions().forEach(option => {
    typeOptionsElement.appendChild(
      createRandomQuizCheckbox({
        inputName: "randomQuizType",
        value: option.key,
        label: option.label,
        checked: appState.randomQuiz.typeKeys.has(option.key),
        onChange: event => {
          updateRandomQuizSetFromCheckbox(
            appState.randomQuiz.typeKeys,
            option.key,
            event.target.checked
          );

          appState.randomQuiz.questionCountTouched = false;
          updateRandomQuizSummaryAndControls();
        }
      })
    );
  });
}

function createRandomQuizRegionGroupElement(group) {
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
        inputName: "randomQuizRegion",
        value: option.id,
        label: option.label,
        checked: appState.randomQuiz.regionEntityIds.has(option.id),
        onChange: event => {
          updateRandomQuizSetFromCheckbox(
            appState.randomQuiz.regionEntityIds,
            option.id,
            event.target.checked
          );

          appState.randomQuiz.questionCountTouched = false;
          updateRandomQuizSummaryAndControls();
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

function bindRandomQuizControls() {
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
  return {
    regionEntityIds: Array.from(appState.randomQuiz.regionEntityIds),
    typeKeys: Array.from(appState.randomQuiz.typeKeys),
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
  const questionCountInput = document.getElementById(
    "randomQuizQuestionCountInput"
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

  const questions = generateRandomQuizQuestions({
      filters: getRandomQuizFiltersFromState(),
      questionCount: requestedQuestionCount
    },
    dataIndex
  );

  if (questions.length === 0) {
    updateRandomQuizSummaryAndControls();
    return;
  }

  if (mode === "typing") {
    showModePanel("typing");
    startTypingQuizFromQuestions(questions);
    return;
  }

  if (mode === "multiple_choice") {
    showModePanel("multipleChoice");
    startMultipleChoiceQuizFromQuestions(questions);
  }
}

function clearRandomQuizFilters() {
  appState.randomQuiz.regionEntityIds.clear();
  appState.randomQuiz.typeKeys.clear();
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
