/*
  Multiple-choice quiz UI.

  This file owns the multiple-choice quiz start, question rendering,
  answer handling, feedback and result display. Shared quiz helpers still
  live in main.js for now because they are also used by Typing Quiz and
  other views.
*/

/*
  Sets up the multiple-choice quiz start button.
*/
function setupMultipleChoiceQuiz() {
  const startButton = document.getElementById("startMultipleChoiceQuizButton");

  startButton.addEventListener("click", () => {
    startMultipleChoiceQuiz();
  });
}

/*
  Mobile quiz screens need deliberate scroll behaviour.

  Multiple-choice does not summon the keyboard, but moving between questions
  should still bring the flag and options back into the useful viewport area.
*/
function isMultipleChoiceQuizMobileViewport() {
  return window.matchMedia(
    "(max-width: 700px), (pointer: coarse)"
  ).matches;
}

function isMultipleChoiceQuizLandscapeLayoutViewport() {
  return window.matchMedia(
    "(max-height: 520px) and (orientation: landscape)"
  ).matches;
}

function getMultipleChoiceQuizScrollBehavior() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches ?
    "auto" :
    "smooth";
}

function scrollMultipleChoiceQuizElementIntoView(
  element,
  block = "start"
) {
  if (
    !element ||
    !isMultipleChoiceQuizMobileViewport() ||
    isMultipleChoiceQuizLandscapeLayoutViewport()
  ) {
    return;
  }

  window.setTimeout(() => {
    element.scrollIntoView({
      behavior: getMultipleChoiceQuizScrollBehavior(),
      block,
      inline: "nearest"
    });
  }, 50);
}

function alignMultipleChoiceQuizCardForLandscape(element) {
  if (
    !element ||
    !isMultipleChoiceQuizMobileViewport() ||
    !isMultipleChoiceQuizLandscapeLayoutViewport()
  ) {
    return;
  }

  window.setTimeout(() => {
    element.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "nearest"
    });
  }, 50);
}

/*
  Starts a new multiple-choice quiz from the current working pool.
*/
function startMultipleChoiceQuiz() {
  const quizViewElement = document.getElementById("multipleChoiceQuizView");

  /*
    A quiz can now come from selected collections, directly selected entities
    or directly selected variants.
  */
  const hasActiveSelection =
    appState.selectedCollectionIds.size > 0 ||
    appState.selectedEntityGroups.size > 0 ||
    appState.selectedEntityIds.size > 0 ||
    appState.selectedVariantIds.size > 0;

  if (!hasActiveSelection) {
    quizViewElement.innerHTML = `
      <p class="empty-message">
        Select one or more collections, entities or variants before starting a quiz.
      </p>
    `;

    return;
  }

  const questionCountInput = document.getElementById(
    "multipleChoiceQuestionCountInput"
  );

  /*
    Read the requested question count directly from the input.

    Do not use || 10 here because 0 is meaningful when the current
    selection produces no quizable questions.
  */
  const requestedQuestionCount = Number(questionCountInput.value);

  if (requestedQuestionCount < 1) {
    quizViewElement.innerHTML = `
      <p class="empty-message">
        No quiz questions are available from the current selection.
      </p>
    `;

    return;
  }

  /*
    Pass every supported selection source to the quiz generator.
  */
  const questions = generateQuizQuestions({
      collectionIds: Array.from(appState.selectedCollectionIds),
      entityGroups: Array.from(appState.selectedEntityGroups.values()),
      entityIds: Array.from(appState.selectedEntityIds),
      variantIds: Array.from(appState.selectedVariantIds),
      questionCount: requestedQuestionCount
    },
    dataIndex
  );

  if (questions.length === 0) {
    quizViewElement.innerHTML = `
      <p class="empty-message">
        No quiz questions could be generated from the current selection.
      </p>
    `;

    return;
  }

  startMultipleChoiceQuizFromQuestions(questions);
}

/*
  Starts a multiple-choice quiz from a prepared question list.

  Random Quiz uses this path so it can build a temporary pool without
  touching Current Selection.
*/
function startMultipleChoiceQuizFromQuestions(questions) {
  if (!Array.isArray(questions) || questions.length === 0) {
    const quizViewElement = document.getElementById("multipleChoiceQuizView");

    quizViewElement.innerHTML = `
      <p class="empty-message">
        No quiz questions are available.
      </p>
    `;

    return;
  }

  appState.multipleChoiceQuiz = {
    questions,
    currentQuestionIndex: 0,
    score: 0,
    hasAnsweredCurrentQuestion: false,
    questionStartedAt: null
  };

  renderMultipleChoiceQuestion();
}

/*
  Renders the current multiple-choice question.
*/
function renderMultipleChoiceQuestion() {
  const quizViewElement = document.getElementById("multipleChoiceQuizView");
  const quizState = appState.multipleChoiceQuiz;

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  if (!currentQuestion) {
    renderMultipleChoiceResult();
    return;
  }

  /*
    Start timing this question as soon as it is rendered.
  */
  quizState.questionStartedAt = Date.now();

  const variant = dataIndex.variantsById[currentQuestion.displayedVariantId];
  const asset = dataIndex.assetsById[currentQuestion.assetId];

  const options = buildMultipleChoiceOptions(
    currentQuestion,
    quizState.questions,
    dataIndex,
    4
  );

  quizViewElement.innerHTML = "";

  const cardElement = document.createElement("div");
  cardElement.className = "quiz-card";

  const progressElement = document.createElement("p");
  progressElement.className = "quiz-progress";
  progressElement.textContent =
    `Question ${quizState.currentQuestionIndex + 1} of ${quizState.questions.length}`;

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "quiz-image-wrapper";
    imageWrapper.classList.add("quiz-image-zoom-trigger");
  imageWrapper.tabIndex = 0;
  imageWrapper.setAttribute("role", "button");
  imageWrapper.setAttribute(
    "aria-label",
    "Open current quiz flag in zoom viewer"
  );

  const imageElement = document.createElement("img");
  imageElement.className = "quiz-image";
  imageElement.src = asset.path;
  imageElement.alt = `Multiple-choice flag question: ${variant.displayName}`;

  imageWrapper.appendChild(imageElement);
    imageWrapper.addEventListener("click", () => {
    openQuizImageZoom(imageElement);
  });

  imageWrapper.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openQuizImageZoom(imageElement);
    }
  });

  const optionsElement = document.createElement("div");
  optionsElement.className = "multiple-choice-options";

  options.forEach(option => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "multiple-choice-option";
    optionButton.textContent = option.label;

    optionButton.addEventListener("click", () => {
      submitMultipleChoiceAnswer(option, options);
    });

    optionsElement.appendChild(optionButton);
  });

  cardElement.appendChild(progressElement);
  cardElement.appendChild(imageWrapper);
  cardElement.appendChild(optionsElement);

  quizViewElement.appendChild(cardElement);

  if (isMultipleChoiceQuizLandscapeLayoutViewport()) {
    alignMultipleChoiceQuizCardForLandscape(cardElement);
  } else {
    scrollMultipleChoiceQuizElementIntoView(cardElement, "start");
  }
}

/*
  Handles a selected multiple-choice answer.
*/
function submitMultipleChoiceAnswer(selectedOption, allOptions) {
  const quizState = appState.multipleChoiceQuiz;

  if (quizState.hasAnsweredCurrentQuestion) {
    return;
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  if (!currentQuestion) {
    return;
  }

  const responseTimeSeconds = quizState.questionStartedAt ?
    (Date.now() - quizState.questionStartedAt) / 1000 :
    null;

  if (selectedOption.isCorrect) {
    quizState.score += 1;
  }

  /*
    Record multiple-choice stats.

    recordQuizAnswer already knows how to update all accepted entities for
    combined shared-asset questions.
  */
  recordQuizAnswer({
    mode: "multiple_choice",
    question: currentQuestion,
    wasCorrect: selectedOption.isCorrect,
    responseTimeSeconds
  });

  renderStatsView();

  quizState.hasAnsweredCurrentQuestion = true;

  renderMultipleChoiceFeedback(selectedOption, allOptions);
}

/*
  Shows correct/incorrect feedback for multiple-choice.
*/
function renderMultipleChoiceFeedback(selectedOption, allOptions) {
  const quizViewElement = document.getElementById("multipleChoiceQuizView");
  const cardElement = quizViewElement.querySelector(".quiz-card");

  const quizState = appState.multipleChoiceQuiz;
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  revealQuizQuestionImage(cardElement, currentQuestion);

  const optionButtons = cardElement.querySelectorAll(".multiple-choice-option");

  optionButtons.forEach(button => {
    button.disabled = true;

    const matchingOption = allOptions.find(option => {
      return option.label === button.textContent;
    });

    if (!matchingOption) {
      return;
    }

    if (matchingOption.isCorrect) {
      button.classList.add("correct");
    }

    if (matchingOption === selectedOption && !matchingOption.isCorrect) {
      button.classList.add("incorrect");
    }
  });

  const feedbackElement = document.createElement("p");
  feedbackElement.className = selectedOption.isCorrect ?
    "quiz-feedback correct" :
    "quiz-feedback incorrect";

  const correctOption = allOptions.find(option => option.isCorrect);

  if (selectedOption.isCorrect) {
    feedbackElement.textContent = `Correct: ${selectedOption.label}`;
  } else {
    feedbackElement.textContent = `Incorrect. Correct answer: ${correctOption.label}`;
  }

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "quiz-next-button";
  nextButton.textContent = isLastMultipleChoiceQuestion() ?
    "Show Result" :
    "Next Question";

  nextButton.addEventListener("click", () => {
    goToNextMultipleChoiceQuestion();
  });

  const optionsElement = cardElement.querySelector(".multiple-choice-options");
  optionsElement.appendChild(feedbackElement);

  const visualGroupNoteElement = createQuizVisualGroupNoteElement(
    currentQuestion
  );

  if (visualGroupNoteElement) {
    optionsElement.appendChild(visualGroupNoteElement);
  }

  optionsElement.appendChild(nextButton);

  if (isMultipleChoiceQuizMobileViewport()) {
    scrollMultipleChoiceQuizElementIntoView(nextButton, "center");
  } else {
    nextButton.focus();
  }
}

/*
  Moves to the next multiple-choice question.
*/
function goToNextMultipleChoiceQuestion() {
  appState.multipleChoiceQuiz.currentQuestionIndex += 1;
  appState.multipleChoiceQuiz.hasAnsweredCurrentQuestion = false;

  renderMultipleChoiceQuestion();
}

/*
  Checks whether the current multiple-choice question is the last one.
*/
function isLastMultipleChoiceQuestion() {
  const quizState = appState.multipleChoiceQuiz;

  return quizState.currentQuestionIndex >= quizState.questions.length - 1;
}

/*
  Shows the final multiple-choice score.
*/
function renderMultipleChoiceResult() {
  const quizViewElement = document.getElementById("multipleChoiceQuizView");
  const quizState = appState.multipleChoiceQuiz;

  quizViewElement.innerHTML = "";

  const resultElement = document.createElement("div");
  resultElement.className = "quiz-result";

  const titleElement = document.createElement("h3");
  titleElement.textContent = "Multiple-choice quiz complete";

  const scoreElement = document.createElement("p");
  scoreElement.textContent =
    `Score: ${quizState.score} / ${quizState.questions.length}`;

  const actionsElement = document.createElement("div");
  actionsElement.className = "quiz-result-actions";

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.textContent = "Start New Multiple-Choice Quiz";

  restartButton.addEventListener("click", () => {
    startMultipleChoiceQuiz();
  });

  actionsElement.appendChild(restartButton);

  const snapshotStatusElement = document.createElement("p");
  snapshotStatusElement.className = "quiz-result-status panel-note";

  if (typeof saveQuizSnapshotPresetFromQuestions === "function") {
    const saveSnapshotButton = document.createElement("button");
    saveSnapshotButton.type = "button";
    saveSnapshotButton.textContent = "Save This Quiz Set";

    saveSnapshotButton.addEventListener("click", () => {
      const preset = saveQuizSnapshotPresetFromQuestions({
        questions: quizState.questions,
        sourceQuizMode: "multiple_choice",
        defaultName:
          `Multiple-choice quiz set (${quizState.questions.length} questions)`
      });

      if (preset) {
        snapshotStatusElement.textContent = `Saved “${preset.name}”.`;
      }
    });

    actionsElement.appendChild(saveSnapshotButton);
  }

  resultElement.appendChild(titleElement);
  resultElement.appendChild(scoreElement);
  resultElement.appendChild(actionsElement);
  resultElement.appendChild(snapshotStatusElement);

  quizViewElement.appendChild(resultElement);
}

