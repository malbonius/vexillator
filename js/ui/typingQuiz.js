/*
  Typing quiz UI.

  This file is intentionally kept as a classic browser script rather than an
  ES module so Vexillator can still run with the existing local-file workflow.
  It depends on globals prepared by the data/core scripts and main coordinator.
*/

/*
  Sets up the typing quiz start button.
*/
function setupTypingQuiz() {
  const startButton = document.getElementById("startTypingQuizButton");

  startButton.addEventListener("click", () => {
    startTypingQuiz();
  });
}

/*
  Mobile quiz screens need deliberate scroll behaviour.

  On phones, immediately focusing the answer input summons the keyboard and
  causes the browser to centre the textbox rather than the flag.
*/
function isTypingQuizMobileViewport() {
  return window.matchMedia(
    "(max-width: 700px), (pointer: coarse)"
  ).matches;
}

function getTypingQuizScrollBehavior() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches ?
    "auto" :
    "smooth";
}

function scrollTypingQuizElementIntoView(element, block = "start") {
  if (!element || !isTypingQuizMobileViewport()) {
    return;
  }

  window.setTimeout(() => {
    element.scrollIntoView({
      behavior: getTypingQuizScrollBehavior(),
      block,
      inline: "nearest"
    });
  }, 50);
}

/*
  Starts a new typing quiz from the current working pool.
*/
function startTypingQuiz() {
  const quizViewElement = document.getElementById("typingQuizView");

  const hasActiveSelection =
    appState.selectedCollectionIds.size > 0 ||
    appState.selectedEntityGroups.size > 0 ||
    appState.selectedEntityIds.size > 0 ||
    appState.selectedVariantIds.size > 0;

  if (!hasActiveSelection) {
    quizViewElement.innerHTML = ` <p class="empty-message">
    Select one or more collections, entities or variants before starting a quiz.
	</p>
	`;
    return;
  }

  const questionCountInput = document.getElementById("typingQuestionCountInput");
  /*
  Read the requested question count directly from the input.

  Do not use `|| 10` here, because 0 is meaningful when the active
  selection produces no quizzable questions.
  */
  const requestedQuestionCount = Number(questionCountInput.value);

  if (requestedQuestionCount < 1) {
    quizViewElement.innerHTML =
      `<p class="empty-message">No quiz questions are available from the current selection.</p>`;
    return;
  }

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
    quizViewElement.innerHTML =
      `<p class="empty-message">No quiz questions could be generated from the current selection.</p>`;
    return;
  }

  appState.typingQuiz = {
    questions,
    currentQuestionIndex: 0,
    score: 0,
    hasAnsweredCurrentQuestion: false,
    questionStartedAt: null
  };

  renderTypingQuizQuestion();
}

/*
  Renders the current typing quiz question.
*/
function renderTypingQuizQuestion() {
  const quizViewElement = document.getElementById("typingQuizView");
  const quizState = appState.typingQuiz;

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  if (!currentQuestion) {
    renderTypingQuizResult();
    return;
  }

  /*
  Start timing this question as soon as it is rendered.
  */
  quizState.questionStartedAt = Date.now();

  const variant = dataIndex.variantsById[currentQuestion.displayedVariantId];
  const asset = dataIndex.assetsById[currentQuestion.assetId];

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
  imageElement.alt = `Flag quiz question: ${variant.displayName}`;

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

  const answerArea = document.createElement("div");
  answerArea.className = "quiz-answer-area";

  const answerInput = document.createElement("input");
  answerInput.type = "text";
  answerInput.id = "typingAnswerInput";
  answerInput.placeholder = "Type your answer";

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Submit Answer";

  submitButton.addEventListener("click", () => {
    submitTypingAnswer();
  });

    answerInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") {
      return;
    }

    /*
      Prevent this Enter press from also activating the Next Question button
      after feedback is rendered and focus changes.
    */
    event.preventDefault();
    event.stopPropagation();

    submitTypingAnswer();
  });

  answerArea.appendChild(answerInput);
  answerArea.appendChild(submitButton);

  cardElement.appendChild(progressElement);
  cardElement.appendChild(imageWrapper);
  cardElement.appendChild(answerArea);

  quizViewElement.appendChild(cardElement);

  if (isTypingQuizMobileViewport()) {
    scrollTypingQuizElementIntoView(cardElement, "start");
  } else {
    answerInput.focus();
  }
}

/*
  Checks the user's typed answer for the current question.
*/
function submitTypingAnswer() {
  const quizState = appState.typingQuiz;

  if (quizState.hasAnsweredCurrentQuestion) {
    return;
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  if (!currentQuestion) {
    return;
  }

  const answerInput = document.getElementById("typingAnswerInput");
  const userAnswer = answerInput.value;

  const result = checkTypedAnswer(userAnswer, currentQuestion, dataIndex);

  const responseTimeSeconds = quizState.questionStartedAt ?
    (Date.now() - quizState.questionStartedAt) / 1000 :
    null;

  if (result.isCorrect) {
    quizState.score += 1;
  }

  /*
    Record typing stats for this answer.

    This updates both:
    - entity stats
    - variant stats
  */
  recordQuizAnswer({
    mode: "typing",
    question: currentQuestion,
    wasCorrect: result.isCorrect,
    responseTimeSeconds
  });

  renderStatsView();

  quizState.hasAnsweredCurrentQuestion = true;

  renderTypingQuizFeedback(result);
}

/*
  Shows whether the submitted answer was correct,
  then gives the user a button to move to the next question.
*/
function renderTypingQuizFeedback(result) {
  const quizViewElement = document.getElementById("typingQuizView");
  const quizState = appState.typingQuiz;
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  const cardElement = quizViewElement.querySelector(".quiz-card");

  revealQuizQuestionImage(cardElement, currentQuestion);

  const feedbackElement = document.createElement("p");
  feedbackElement.className = result.isCorrect ?
    "quiz-feedback correct" :
    "quiz-feedback incorrect";

  const acceptedAnswerText = result.acceptedAnswers.join(" / ");

  if (result.isCorrect) {
    feedbackElement.textContent = `Correct: ${result.matchedAnswer}`;
  } else {
    feedbackElement.textContent = `Incorrect. Accepted answer(s): ${acceptedAnswerText}`;
  }

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.textContent = isLastTypingQuizQuestion() ?
    "Show Result" :
    "Next Question";

    /*
    Remove the temporary feedback keyboard listener before advancing.

    This prevents old question handlers from remaining active after the next
    question has rendered.
  */
  function advanceFromFeedback() {
    document.removeEventListener(
      "keydown",
      handleFeedbackKeydown
    );

    goToNextTypingQuestion();
  }

  function handleFeedbackKeydown(event) {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    advanceFromFeedback();
  }

  nextButton.addEventListener("click", () => {
    advanceFromFeedback();
  });

  const answerArea = cardElement.querySelector(".quiz-answer-area");

  /*
    Disable the input after answering so the user cannot change the answer
    after seeing feedback.
  */
  const answerInput = document.getElementById("typingAnswerInput");
  answerInput.disabled = true;

  answerArea.appendChild(feedbackElement);

  const visualGroupNoteElement = createQuizVisualGroupNoteElement(
    currentQuestion
  );

  if (visualGroupNoteElement) {
    answerArea.appendChild(visualGroupNoteElement);
  }

  answerArea.appendChild(nextButton);

  scrollTypingQuizElementIntoView(nextButton, "center");

    /*
    Register the feedback-stage Enter handler after the original submission
    key event has finished.

    Without this delay, the Enter press that submitted the answer could also
    immediately advance to the next question.
  */
  window.setTimeout(() => {
    document.addEventListener(
      "keydown",
      handleFeedbackKeydown
    );
  }, 0);
}

/*
  Moves to the next typing quiz question.
*/
function goToNextTypingQuestion() {
  appState.typingQuiz.currentQuestionIndex += 1;
  appState.typingQuiz.hasAnsweredCurrentQuestion = false;

  renderTypingQuizQuestion();
}

/*
  Checks whether the current question is the last one.
*/
function isLastTypingQuizQuestion() {
  const quizState = appState.typingQuiz;

  return quizState.currentQuestionIndex >= quizState.questions.length - 1;
}

/*
  Shows the final typing quiz score.
*/
function renderTypingQuizResult() {
  const quizViewElement = document.getElementById("typingQuizView");
  const quizState = appState.typingQuiz;

  quizViewElement.innerHTML = "";

  const resultElement = document.createElement("div");
  resultElement.className = "quiz-result";

  const titleElement = document.createElement("h3");
  titleElement.textContent = "Quiz complete";

  const scoreElement = document.createElement("p");
  scoreElement.textContent =
    `Score: ${quizState.score} / ${quizState.questions.length}`;

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.textContent = "Start New Quiz";

  restartButton.addEventListener("click", () => {
    startTypingQuiz();
  });

  resultElement.appendChild(titleElement);
  resultElement.appendChild(scoreElement);
  resultElement.appendChild(restartButton);

  quizViewElement.appendChild(resultElement);
}

