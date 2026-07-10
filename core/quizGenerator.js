/*
  quizGenerator.js

  Converts active selection sources into quiz questions.

  Flow:
  selection sources
  → WorkingPoolMembers
  → usable quiz entries
  → shared-asset merging
  → shuffle and limit
  → answer labels and ambiguity metadata
*/

/*
  Generates quiz questions from the active working-pool sources.
*/
function generateQuizQuestions(options = {}, dataIndex) {
  if (!dataIndex) {
    console.error("Cannot generate quiz questions without a data index.");
    return [];
  }

  const collectionIds = Array.isArray(options.collectionIds)
    ? options.collectionIds
    : [];

  const entityGroups = Array.isArray(options.entityGroups)
    ? options.entityGroups
    : [];

  const entityIds = Array.isArray(options.entityIds)
    ? options.entityIds
    : [];

  const variantIds = Array.isArray(options.variantIds)
    ? options.variantIds
    : [];

  /*
    Nullish coalescing preserves a deliberate value of 0.

    Invalid and negative values resolve to 0 rather than producing surprising
    Array.slice() behaviour.
  */
  const requestedQuestionCount = options.questionCount ?? 10;
  const questionCount = Number.isFinite(Number(requestedQuestionCount))
    ? Math.max(0, Math.floor(Number(requestedQuestionCount)))
    : 0;

  /*
    1. Resolve every supported source into WorkingPoolMembers.
  */
  const members = resolveWorkingPool(
    {
      collectionIds,
      entityGroups,
      entityIds,
      variantIds
    },
    dataIndex
  );

  /*
    2. Convert usable members into raw quiz entries.
  */
  const quizEntries = buildQuizEntries(members, dataIndex);

  /*
    3. Merge entries that display the same asset.

    Visually identical flags become one question with all relevant accepted
    entity IDs and source references.
  */
  const mergedEntries = mergeAcceptedAnswersByAsset(quizEntries);

  /*
    Determine whether the complete resolved pool represents only one entity.

    This is calculated before shuffling and limiting. A one-question quiz drawn
    from a Bolivia-only variants pool therefore still knows that the entity is
    implied by the broader quiz context.

    acceptedEntityIds are included so a shared-asset question representing
    several entities does not incorrectly count as a single-entity pool.
  */
  const quizIdentityKeys = new Set();

  mergedEntries.forEach(entry => {
    quizIdentityKeys.add(createQuizQuestionIdentityKey(entry));
  });

  const allowsVariantOnlyAnswers = quizIdentityKeys.size === 1;

  /*
    4. Shuffle without mutating the merged pool.
  */
  const shuffledEntries = shuffleArray(mergedEntries);

  /*
    5. Limit to the requested number of questions.
  */
  const limitedQuestions = shuffledEntries.slice(0, questionCount);

  /*
    Visual ambiguity must be calculated from the complete eligible pool before
    random question sampling. If Romania and Chad are both in the source pool
    but only one is sampled into a shorter quiz, the displayed flag is still
    ambiguous from the user's point of view.
  */
  const visualGroupContextQuestions = mergedEntries.map(entry => ({
    ...entry
  }));

  attachQuizVisualGroupMetadata(
    limitedQuestions,
    dataIndex,
    visualGroupContextQuestions
  );

  /*
    Add display labels and typing-answer context after the final question set
    is known.

    This keeps typing and multiple-choice ambiguity rules aligned.
  */
  limitedQuestions.forEach(question => {
    question.answerLabel = getQuizQuestionAnswerLabel(
      question,
      limitedQuestions,
      dataIndex
    );

    question.needsVariantAnswer = questionNeedsVariantLabel(
      question,
      limitedQuestions
    );

    question.allowsVariantOnlyAnswers = allowsVariantOnlyAnswers;
  });

  attachQuizVisualGroupLabels(
    limitedQuestions,
    dataIndex,
    visualGroupContextQuestions
  );

  return limitedQuestions;
}

/*
  Converts WorkingPoolMembers into raw quiz entries.

  Quiz variant fallback order:
  member.quizVariantId
  → member.galleryVariantId
  → entity.defaultVariantId
  → exclude from quiz
*/
function buildQuizEntries(members, dataIndex) {
  if (!Array.isArray(members)) {
    return [];
  }

  const entries = [];

  members.forEach(member => {
    if (!member || !member.entityId) {
      return;
    }

    const entity = dataIndex.entitiesById[member.entityId];

    if (!entity) {
      return;
    }

    const quizVariantId = resolveQuizVariantId(member, entity);

    if (!quizVariantId) {
      return;
    }

    const variant = dataIndex.variantsById[quizVariantId];

    if (!variant) {
      return;
    }

    /*
      Some variants are useful for Gallery/Entity browsing but unsuitable for
      quizzes. For example, a text-dependent organisation flag may become a
      meaningless plain field if the text is removed.

      Filtering here keeps the rule source-agnostic: direct variant selection,
      direct entity selection, entity groups and collections all respect the
      same non_quizzable marker.
    */
    if (isNonQuizzableVariant(variant)) {
      return;
    }

    const asset = dataIndex.assetsById[variant.assetId];

    if (!asset) {
      return;
    }

    const revealVariantId = resolveRevealVariantId(
      member,
      entity,
      quizVariantId
    );

    const displayNameOverride = normaliseQuizDisplayNameOverride(
      member.displayNameOverride
    );

    const answerAliases = normaliseQuizAnswerAliases(
      member.answerAliases
    );

    entries.push({
      memberId: member.id,
      collectionId: member.collectionId || null,
      primaryEntityId: member.entityId,
      displayedVariantId: variant.id,
      revealVariantId,
      assetId: asset.id,
      quizVisualGroupId: variant.quizVisualGroupId || null,
      displayNameOverride,
      acceptedDisplayNames: displayNameOverride
        ? [displayNameOverride]
        : [],
      answerAliases,

      /*
        Shared-asset merging may add further accepted entity IDs later.
      */
      acceptedEntityIds: [member.entityId]
    });
  });

  return entries;
}

/*
  Resolves the variant displayed while answering a quiz question.
*/
function resolveQuizVariantId(member, entity) {
  if (member?.quizVariantId) {
    return member.quizVariantId;
  }

  if (member?.galleryVariantId) {
    return member.galleryVariantId;
  }

  if (entity?.defaultVariantId) {
    return entity.defaultVariantId;
  }

  return null;
}

/*
  Returns true when a variant is explicitly excluded from quizzes.

  The variant may still appear in Gallery and Entity Detail, but it should not
  generate typing or multiple-choice questions.
*/
function isNonQuizzableVariant(variant) {
  return Array.isArray(variant?.tags) &&
    variant.tags.includes("non_quizzable");
}

/*
  Resolves the variant shown after the answer is submitted.

  Normal entries usually reveal the displayed variant. Technical quiz-safe
  entries such as text-removed flags normally reveal the gallery/default
  variant instead.
*/
function resolveRevealVariantId(member, entity, displayedVariantId) {
  if (member?.galleryVariantId) {
    return member.galleryVariantId;
  }

  if (entity?.defaultVariantId) {
    return entity.defaultVariantId;
  }

  if (member?.quizVariantId) {
    return member.quizVariantId;
  }

  return displayedVariantId || null;
}

/*
  Merges quiz entries that use the same image asset.

  Asset identity, rather than variant identity, controls quiz deduplication.
  Different entities or variants using the same image therefore become one
  question with merged accepted entities and source references.
*/
function mergeAcceptedAnswersByAsset(entries) {
  if (!Array.isArray(entries)) {
    return [];
  }

  const entriesByAssetId = new Map();

  entries.forEach(entry => {
    if (!entry?.assetId) {
      return;
    }

    const existingEntry = entriesByAssetId.get(entry.assetId);

    if (!existingEntry) {
      entriesByAssetId.set(entry.assetId, {
        ...entry,
        acceptedEntityIds: new Set(entry.acceptedEntityIds || []),
        acceptedDisplayNames: new Set(entry.acceptedDisplayNames || []),
        answerAliases: new Set(entry.answerAliases || []),
        quizVisualGroupIds: new Set(
          entry.quizVisualGroupId ? [entry.quizVisualGroupId] : []
        ),
        sourceMemberIds: new Set(
          entry.memberId ? [entry.memberId] : []
        ),
        sourceCollectionIds: new Set(
          entry.collectionId ? [entry.collectionId] : []
        )
      });

      return;
    }

    (entry.acceptedEntityIds || []).forEach(entityId => {
      existingEntry.acceptedEntityIds.add(entityId);
    });

    (entry.acceptedDisplayNames || []).forEach(displayName => {
      existingEntry.acceptedDisplayNames.add(displayName);
    });

    (entry.answerAliases || []).forEach(alias => {
      existingEntry.answerAliases.add(alias);
    });

    if (!existingEntry.displayNameOverride && entry.displayNameOverride) {
      existingEntry.displayNameOverride = entry.displayNameOverride;
    }

    if (entry.quizVisualGroupId) {
      existingEntry.quizVisualGroupIds.add(entry.quizVisualGroupId);
    }

    if (entry.memberId) {
      existingEntry.sourceMemberIds.add(entry.memberId);
    }

    if (entry.collectionId) {
      existingEntry.sourceCollectionIds.add(entry.collectionId);
    }
  });

  /*
    Convert Sets back to arrays so question objects remain simple to inspect,
    serialise and pass between quiz functions.
  */
  return Array.from(entriesByAssetId.values()).map(entry => {
    const quizVisualGroupIds = Array.from(
      entry.quizVisualGroupIds || []
    );

    const acceptedDisplayNames = Array.from(
      entry.acceptedDisplayNames || []
    );

    return {
      ...entry,
      quizVisualGroupId:
        entry.quizVisualGroupId ||
        (quizVisualGroupIds.length === 1
          ? quizVisualGroupIds[0]
          : null),
      quizVisualGroupIds,
      acceptedEntityIds: Array.from(entry.acceptedEntityIds),
      acceptedDisplayNames,
      displayNameOverride:
        entry.displayNameOverride || acceptedDisplayNames[0] || null,
      answerAliases: Array.from(entry.answerAliases || []),
      sourceMemberIds: Array.from(entry.sourceMemberIds),
      sourceCollectionIds: Array.from(entry.sourceCollectionIds)
    };
  });
}

/*
  Adds visual-ambiguity metadata for quiz questions.

  quizVisualGroupId is a deliberately explicit variant field. It groups
  variants that are visually identical or near-identical for quiz purposes
  even when they use different assets.

  The special handling is eligible-pool aware:
  - if only one member of a visual group is present in the full source pool,
    the question behaves normally;
  - if multiple members are present in the full source pool, typing mode can
    accept any active entity from that visual group, even when the final sampled
    quiz contains only one of them;
  - multiple-choice mode can avoid using same-group questions as distractors.
*/
function attachQuizVisualGroupMetadata(
  questions,
  dataIndex,
  contextQuestions = questions
) {
  if (!Array.isArray(questions) || !dataIndex) {
    return;
  }

  const safeContextQuestions =
    Array.isArray(contextQuestions) && contextQuestions.length > 0
      ? contextQuestions
      : questions;

  const contextQuestionsByGroupId = new Map();

  safeContextQuestions.forEach(contextQuestion => {
    if (!contextQuestion) {
      return;
    }

    const contextGroupId = resolveQuestionQuizVisualGroupId(
      contextQuestion,
      dataIndex
    );

    if (!contextGroupId) {
      return;
    }

    if (!contextQuestionsByGroupId.has(contextGroupId)) {
      contextQuestionsByGroupId.set(contextGroupId, []);
    }

    contextQuestionsByGroupId.get(contextGroupId).push(contextQuestion);
  });

  questions.forEach(question => {
    if (!question) {
      return;
    }

    const groupId = resolveQuestionQuizVisualGroupId(
      question,
      dataIndex
    );

    question.quizVisualGroupId = groupId;
    question.quizVisualGroupCollision = false;
    question.typingAcceptedEntityIds = [
      ...(question.acceptedEntityIds || [])
    ];
    question.visualGroupAcceptedEntityIds = [];
    question.visualGroupQuestionAssetIds = [];
    question.visualGroupMemberLabels = [];
    question.visualGroupNote = "";

    if (!groupId) {
      return;
    }

    const groupContextQuestions =
      contextQuestionsByGroupId.get(groupId) || [];

    const acceptedEntityIds = new Set();
    const assetIds = new Set();

    groupContextQuestions.forEach(contextQuestion => {
      (contextQuestion.acceptedEntityIds || []).forEach(entityId => {
        acceptedEntityIds.add(entityId);
      });

      if (contextQuestion.assetId) {
        assetIds.add(contextQuestion.assetId);
      }
    });

    /*
      A collision exists when several eligible questions share a visual group or
      when exact shared-asset merging has already produced one grouped question
      with several accepted entities.
    */
    const hasCollision =
      groupContextQuestions.length > 1 || acceptedEntityIds.size > 1;

    if (!hasCollision) {
      return;
    }

    const acceptedEntityIdList = Array.from(acceptedEntityIds);
    const assetIdList = Array.from(assetIds);

    question.quizVisualGroupCollision = true;
    question.typingAcceptedEntityIds = acceptedEntityIdList;
    question.visualGroupAcceptedEntityIds = acceptedEntityIdList;
    question.visualGroupQuestionAssetIds = assetIdList;
  });
}

/*
  Resolves a question's quiz visual group from the displayed variant.
*/
function resolveQuestionQuizVisualGroupId(question, dataIndex) {
  if (!question || !dataIndex) {
    return null;
  }

  if (question.quizVisualGroupId) {
    return question.quizVisualGroupId;
  }

  const displayedVariant =
    dataIndex.variantsById[question.displayedVariantId];

  if (displayedVariant?.quizVisualGroupId) {
    return displayedVariant.quizVisualGroupId;
  }

  const revealVariant =
    dataIndex.variantsById[question.revealVariantId];

  if (revealVariant?.quizVisualGroupId) {
    return revealVariant.quizVisualGroupId;
  }

  return null;
}

/*
  Adds display-ready labels and a reveal note for visual-group collisions.

  main.js can show visualGroupNote after answer reveal without rebuilding the
  ambiguity explanation itself.
*/
function attachQuizVisualGroupLabels(
  questions,
  dataIndex,
  contextQuestions = questions
) {
  if (!Array.isArray(questions) || !dataIndex) {
    return;
  }

  const safeContextQuestions =
    Array.isArray(contextQuestions) && contextQuestions.length > 0
      ? contextQuestions
      : questions;

  questions.forEach(question => {
    if (!question?.quizVisualGroupCollision) {
      return;
    }

    const labels = new Set();

    safeContextQuestions.forEach(contextQuestion => {
      const contextGroupId = resolveQuestionQuizVisualGroupId(
        contextQuestion,
        dataIndex
      );

      if (
        !contextQuestion ||
        contextGroupId !== question.quizVisualGroupId
      ) {
        return;
      }

      const label =
        contextQuestion.answerLabel ||
        getQuizQuestionAnswerLabel(
          contextQuestion,
          safeContextQuestions,
          dataIndex
        );

      if (label) {
        labels.add(label);
      }
    });

    question.visualGroupMemberLabels = Array.from(labels);

    if (question.visualGroupMemberLabels.length > 1) {
      question.visualGroupNote =
        "This flag is visually identical or near-identical to other " +
        "answers in the active quiz pool: " +
        question.visualGroupMemberLabels.join(", ") +
        ". Typing answers for any of these active visual matches are " +
        "accepted for this question.";
    } else {
      question.visualGroupNote =
        "This flag is visually identical or near-identical to another " +
        "accepted answer in the active quiz pool.";
    }
  });
}

/*
  Returns a shuffled copy of an array using Fisher-Yates.
*/
function shuffleArray(originalArray) {
  const array = Array.isArray(originalArray)
    ? [...originalArray]
    : [];

  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [array[index], array[randomIndex]] = [
      array[randomIndex],
      array[index]
    ];
  }

  return array;
}

/*
  Builds multiple-choice options from the current quiz pool.

  Distractors come from other questions in the same active quiz. Visible labels
  are deduplicated so two options never present the same answer text.
*/
function buildMultipleChoiceOptions(
  currentQuestion,
  allQuestions,
  dataIndex,
  optionCount = 4
) {
  if (!currentQuestion || !Array.isArray(allQuestions) || !dataIndex) {
    return [];
  }

  const resolvedOptionCount = Number.isFinite(Number(optionCount))
    ? Math.max(1, Math.floor(Number(optionCount)))
    : 4;

  const correctOption = {
    id: currentQuestion.assetId,
    label: getQuizQuestionAnswerLabel(
      currentQuestion,
      allQuestions,
      dataIndex
    ),
    isCorrect: true,
    questionAssetId: currentQuestion.assetId
  };

  /*
    Shared-asset questions have already been collapsed, so assetId is also the
    correct way to exclude the current question from distractors.
  */
  const possibleDistractors = allQuestions.filter(question => {
    if (!question || question.assetId === currentQuestion.assetId) {
      return false;
    }

    /*
      Do not use visually identical or near-identical siblings as normal
      multiple-choice distractors. That would turn a quiz question into a
      coin toss rather than a knowledge check.
    */
    if (
      currentQuestion.quizVisualGroupCollision &&
      currentQuestion.quizVisualGroupId &&
      question.quizVisualGroupId === currentQuestion.quizVisualGroupId
    ) {
      return false;
    }

    return true;
  });

  const shuffledDistractors = shuffleArray(possibleDistractors);

  const usedOptionLabels = new Set([
    normaliseMultipleChoiceLabel(correctOption.label)
  ]);

  const distractorOptions = [];

  for (const question of shuffledDistractors) {
    if (distractorOptions.length >= resolvedOptionCount - 1) {
      break;
    }

    const label = getQuizQuestionAnswerLabel(
      question,
      allQuestions,
      dataIndex
    );

    const normalisedLabel = normaliseMultipleChoiceLabel(label);

    if (!normalisedLabel || usedOptionLabels.has(normalisedLabel)) {
      continue;
    }

    usedOptionLabels.add(normalisedLabel);

    distractorOptions.push({
      id: question.assetId,
      label,
      isCorrect: false,
      questionAssetId: question.assetId
    });
  }

  return shuffleArray([
    correctOption,
    ...distractorOptions
  ]);
}

/*
  Normalises multiple-choice labels for duplicate detection.
*/
function normaliseMultipleChoiceLabel(label) {
  return String(label)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

/*
  Returns the shortest useful visible answer label.

  Entity names are used unless another question in the final quiz has the same
  primary entity but a different asset. In that case, the variant name is
  included to distinguish the questions.
*/

function normaliseQuizDisplayNameOverride(value) {
  return typeof value === "string" && value.trim() !== ""
    ? value.trim()
    : null;
}

function normaliseQuizAnswerAliases(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  const seen = new Set();
  const aliases = [];

  value.forEach(alias => {
    if (typeof alias !== "string" || alias.trim() === "") {
      return;
    }

    const trimmedAlias = alias.trim();
    const key = trimmedAlias.toLowerCase();

    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    aliases.push(trimmedAlias);
  });

  return aliases;
}

function getContextualDisplayNamesForQuestion(question) {
  const names = [];

  if (normaliseQuizDisplayNameOverride(question?.displayNameOverride)) {
    names.push(question.displayNameOverride.trim());
  }

  if (Array.isArray(question?.acceptedDisplayNames)) {
    question.acceptedDisplayNames.forEach(displayName => {
      const normalisedDisplayName = normaliseQuizDisplayNameOverride(
        displayName
      );

      if (normalisedDisplayName) {
        names.push(normalisedDisplayName);
      }
    });
  }

  return deduplicateQuizStrings(names);
}

function createQuizQuestionIdentityKey(question) {
  const contextualNames = getContextualDisplayNamesForQuestion(question);

  if (contextualNames.length > 0) {
    return `context:${contextualNames.map(name => name.toLowerCase()).join("|")}`;
  }

  if (Array.isArray(question?.acceptedEntityIds)) {
    return `entities:${question.acceptedEntityIds.slice().sort().join("|")}`;
  }

  return `entity:${question?.primaryEntityId ?? ""}`;
}

function deduplicateQuizStrings(values) {
  const seen = new Set();
  const results = [];

  values.forEach(value => {
    if (typeof value !== "string" || value.trim() === "") {
      return;
    }

    const trimmedValue = value.trim();
    const key = trimmedValue.toLowerCase();

    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    results.push(trimmedValue);
  });

  return results;
}

function getQuizQuestionAnswerLabel(question, allQuestions, dataIndex) {
  if (!question || !dataIndex) {
    return "";
  }

  if (questionNeedsVariantLabel(question, allQuestions)) {
    return getVariantAnswerLabel(question, dataIndex);
  }

  return getEntityAnswerLabel(question, dataIndex);
}

/*
  Returns true when another question in the final quiz uses the same primary
  entity but a different asset.
*/
function questionNeedsVariantLabel(question, allQuestions) {
  if (!question || !Array.isArray(allQuestions)) {
    return false;
  }

  const questionIdentityKey = createQuizQuestionIdentityKey(question);

  return allQuestions.some(otherQuestion => {
    if (!otherQuestion) {
      return false;
    }

    if (otherQuestion.assetId === question.assetId) {
      return false;
    }

    return createQuizQuestionIdentityKey(otherQuestion) ===
      questionIdentityKey;
  });
}

/*
  Builds an entity label.

  Normal question:
  Bolivia

  Shared-asset question:
  West Yorkshire / West Riding of Yorkshire
*/
function getEntityAnswerLabel(question, dataIndex) {
  if (!question || !Array.isArray(question.acceptedEntityIds)) {
    return "";
  }

  const displayNames = getContextualDisplayNamesForQuestion(question);

  if (displayNames.length > 0) {
    return displayNames.join(" / ");
  }

  return question.acceptedEntityIds
    .map(entityId => dataIndex.entitiesById[entityId])
    .filter(Boolean)
    .map(entity => entity.name)
    .join(" / ");
}

/*
  Builds an entity-and-variant label.

  Example:
  Bolivia - Civil Flag
*/
function getVariantAnswerLabel(question, dataIndex) {
  const variant = dataIndex.variantsById[question.displayedVariantId];

  if (!variant) {
    return getEntityAnswerLabel(question, dataIndex);
  }

  const entityLabel = getEntityAnswerLabel(question, dataIndex);

  if (!entityLabel) {
    return variant.displayName || "";
  }

  return `${entityLabel} - ${variant.displayName}`;
}
