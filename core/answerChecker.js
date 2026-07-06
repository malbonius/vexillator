/*
  answerChecker.js

  Builds and checks accepted typed answers for quiz questions.

  Entity names and aliases identify the represented entity.
  Variant display names and aliases identify a specific flag design.
  Quiz-wide ambiguity flags determine which forms may stand alone.
*/

function checkTypedAnswer(userAnswer, quizQuestion, dataIndex) {
  const normalisedUserAnswer = normaliseAnswerText(userAnswer);
  const acceptedAnswers = getAcceptedAnswersForQuestion(
    quizQuestion,
    dataIndex
  );

  const normalisedAcceptedAnswers = acceptedAnswers.map(answer => {
    return {
      original: answer,
      normalised: normaliseAnswerText(answer)
    };
  });

  const matchedAnswer = normalisedAcceptedAnswers.find(answer => {
    return answer.normalised === normalisedUserAnswer;
  });

  return {
    isCorrect: Boolean(matchedAnswer),
    userAnswer,
    normalisedUserAnswer,
    matchedAnswer: matchedAnswer?.original || null,
    acceptedAnswers
  };
}

/*
  Gets every accepted written answer for one quiz question.

  Entity answers remain valid when the entity is unambiguous.

  Variant-only display names are accepted when the complete selected quiz
  pool contains only one entity, because the entity is already implied by
  context.

  Genuine variant aliases remain valid standalone names regardless of pool
  composition.
*/
function getAcceptedAnswersForQuestion(quizQuestion, dataIndex) {
  if (!quizQuestion || !dataIndex) {
    return [];
  }

  const allowVariantOnlyAnswers =
    quizQuestion.allowsVariantOnlyAnswers === true;

  if (quizQuestion.needsVariantAnswer) {
    return getAcceptedVariantAnswersForQuestion(
      quizQuestion,
      dataIndex,
      allowVariantOnlyAnswers
    );
  }

  const entityAnswers = getAcceptedEntityAnswersForQuestion(
    quizQuestion,
    dataIndex
  );

  const variantAnswers = getAcceptedVariantAnswersForQuestion(
    quizQuestion,
    dataIndex,
    allowVariantOnlyAnswers
  );

  return deduplicateAnswers([
    ...entityAnswers,
    ...variantAnswers
  ]);
}

/*
  Returns accepted entity names and aliases.

  Shared-asset questions may contain several accepted entity IDs, so every
  represented entity contributes its own name and aliases.
*/

function getContextualEntityAnswerFormsForQuestion(quizQuestion) {
  const answers = [];

  if (
    typeof quizQuestion?.displayNameOverride === "string" &&
    quizQuestion.displayNameOverride.trim() !== ""
  ) {
    answers.push(quizQuestion.displayNameOverride.trim());
  }

  if (Array.isArray(quizQuestion?.acceptedDisplayNames)) {
    answers.push(...quizQuestion.acceptedDisplayNames);
  }

  if (Array.isArray(quizQuestion?.answerAliases)) {
    answers.push(...quizQuestion.answerAliases);
  }

  return deduplicateAnswers(answers);
}

function getAcceptedEntityAnswersForQuestion(quizQuestion, dataIndex) {
  const answers = [];

  answers.push(...getContextualEntityAnswerFormsForQuestion(quizQuestion));

  const acceptedEntityIds = getAcceptedEntityIdsForTypingQuestion(
    quizQuestion
  );

  acceptedEntityIds.forEach(entityId => {
    const entity = dataIndex?.entitiesById?.[entityId];

    if (!entity) {
      return;
    }

    answers.push(entity.name);

    if (Array.isArray(entity.aliases)) {
      answers.push(...entity.aliases);
    }
  });

  return deduplicateAnswers(answers);
}

/*
  Returns the entity IDs accepted for typed answers.

  Normal questions use acceptedEntityIds.

  Visual-group collision questions may provide typingAcceptedEntityIds. This
  allows visually identical or near-identical active quiz answers to be treated
  fairly without merging their Gallery, variant or stats identities.
*/
function getAcceptedEntityIdsForTypingQuestion(quizQuestion) {
  const typingAcceptedEntityIds =
    Array.isArray(quizQuestion?.typingAcceptedEntityIds)
      ? quizQuestion.typingAcceptedEntityIds
      : [];

  if (typingAcceptedEntityIds.length > 0) {
    return typingAcceptedEntityIds;
  }

  return Array.isArray(quizQuestion?.acceptedEntityIds)
    ? quizQuestion.acceptedEntityIds
    : [];
}

/*
  Returns a variant display name and an optional "Flag" form.

  Do not create nonsense forms such as "State Flag Flag" when the canonical
  display name already ends with the word "flag".
*/
function getVariantDisplayAnswerForms(displayName) {
  if (typeof displayName !== "string" || displayName.trim() === "") {
    return [];
  }

  const trimmedDisplayName = displayName.trim();
  const forms = [trimmedDisplayName];

  if (!/\bflag$/i.test(trimmedDisplayName)) {
    forms.push(`${trimmedDisplayName} Flag`);
  }

  return forms;
}

/*
  Builds variant-specific accepted answers.

  When includeVariantOnlyAnswers is true, generic variant labels may stand
  alone because the quiz context already implies the entity.

  Established variant aliases such as "Old Glory" may always stand alone,
  because they identify the particular design rather than merely describing
  a broad flag type.
*/
function getAcceptedVariantAnswersForQuestion(
  quizQuestion,
  dataIndex,
  includeVariantOnlyAnswers
) {
  const variant = dataIndex.variantsById?.[quizQuestion.displayedVariantId];

  if (!variant) {
    return [];
  }

  const entity = dataIndex.entitiesById?.[variant.entityId];
  const answers = [];

  if (includeVariantOnlyAnswers) {
    answers.push(...getVariantDisplayAnswerForms(variant.displayName));
  }

  if (Array.isArray(variant.aliases)) {
    answers.push(...variant.aliases);
  }

  const entityNames = getContextualEntityAnswerFormsForQuestion(
    quizQuestion
  );

  if (entity) {
    entityNames.push(entity.name);

    if (Array.isArray(entity.aliases)) {
      entityNames.push(...entity.aliases);
    }
  }

  const variantForms = getVariantDisplayAnswerForms(
    variant.displayName
  );

  deduplicateAnswers(entityNames).forEach(entityName => {
    variantForms.forEach(variantForm => {
      const normalisedEntityName = normaliseAnswerText(entityName);
      const normalisedVariantForm = normaliseAnswerText(variantForm);

      if (normalisedVariantForm.startsWith(normalisedEntityName)) {
        answers.push(variantForm);
        return;
      }

      answers.push(`${entityName} ${variantForm}`);
      answers.push(`${entityName} - ${variantForm}`);
    });
  });

  return deduplicateAnswers(answers);
}

/*
  Removes duplicate accepted answers.

  Comparison uses normalised text, but the first original display form is
  retained for feedback. Empty or invalid answers are discarded.
*/
function deduplicateAnswers(answers) {
  const seenNormalisedAnswers = new Set();
  const deduplicatedAnswers = [];

  if (!Array.isArray(answers)) {
    return deduplicatedAnswers;
  }

  answers.forEach(answer => {
    if (typeof answer !== "string") {
      return;
    }

    const trimmedAnswer = answer.trim();
    const normalisedAnswer = normaliseAnswerText(trimmedAnswer);

    if (
      normalisedAnswer === "" ||
      seenNormalisedAnswers.has(normalisedAnswer)
    ) {
      return;
    }

    seenNormalisedAnswers.add(normalisedAnswer);
    deduplicatedAnswers.push(trimmedAnswer);
  });

  return deduplicatedAnswers;
}

/*
  Normalises typed answers by:
  - lowercasing;
  - trimming surrounding whitespace;
  - removing accents and diacritics;
  - replacing punctuation with spaces;
  - collapsing repeated spaces.

  For example, these compare equally:
  - Côte d'Ivoire
  - cote d ivoire
  - COTE D IVOIRE
*/
function normaliseAnswerText(text) {
  return String(text ?? "")
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
