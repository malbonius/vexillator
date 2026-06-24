/*
  statsManager.js

  Stores and updates quiz statistics in localStorage.

  The storage format is intentionally isolated behind this module so it can
  later move to IndexedDB without changing quiz or display code.
*/

const STATS_STORAGE_KEY = "vexillator_stats_v1";
const STATS_EXPORT_VERSION = 1;

const VALID_STATS_TARGET_TYPES = new Set([
  "entity",
  "variant"
]);

const VALID_STATS_MODES = new Set([
  "typing",
  "multiple_choice"
]);

/*
  Returns true only for ordinary object records.

  Arrays and null are deliberately excluded.
*/
function isPlainObject(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  );
}

/*
  Builds a stable key for one stat record.

  Examples:
  entity|ent_bolivia|typing
  variant|var_bolivia_civil|multiple_choice
*/
function buildStatsKey(targetType, targetId, mode) {
  return `${targetType}|${targetId}|${mode}`;
}

/*
  Returns a fresh blank stat record.
*/
function createBlankStatRecord(targetType, targetId, mode) {
  return {
    targetType,
    targetId,
    mode,
    seen: 0,
    correct: 0,
    incorrect: 0,
    averageResponseTime: null,

    /*
      Counts only answers that supplied a valid response time.

      This keeps the running average correct even if some answers are recorded
      without timing data.
    */
    responseTimeCount: 0,

    lastSeen: null,
    lastIncorrect: null
  };
}

/*
  Checks whether a value is a non-negative finite number.
*/
function isNonNegativeFiniteNumber(value) {
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= 0
  );
}

/*
  Checks whether a value is a non-negative integer.
*/
function isNonNegativeInteger(value) {
  return (
    Number.isInteger(value) &&
    value >= 0
  );
}

/*
  Checks whether a stored timestamp is null or a valid date string.
*/
function isValidStoredDate(value) {
  return (
    value === null ||
    (
      typeof value === "string" &&
      !Number.isNaN(Date.parse(value))
    )
  );
}

/*
  Validates one stored stat record.

  The optional expectedKey check ensures the object's key agrees with its
  targetType, targetId and mode fields.
*/
function validateStatRecord(record, expectedKey = null) {
  if (!isPlainObject(record)) {
    return {
      valid: false,
      message: "Stat record must be an object."
    };
  }

  if (!VALID_STATS_TARGET_TYPES.has(record.targetType)) {
    return {
      valid: false,
      message: `Unsupported stat target type: ${record.targetType}`
    };
  }

  if (
    typeof record.targetId !== "string" ||
    record.targetId.trim() === ""
  ) {
    return {
      valid: false,
      message: "Stat record targetId must be a non-empty string."
    };
  }

  if (!VALID_STATS_MODES.has(record.mode)) {
    return {
      valid: false,
      message: `Unsupported stat mode: ${record.mode}`
    };
  }

  if (
    !isNonNegativeInteger(record.seen) ||
    !isNonNegativeInteger(record.correct) ||
    !isNonNegativeInteger(record.incorrect)
  ) {
    return {
      valid: false,
      message: "Stat counts must be non-negative integers."
    };
  }

  if (record.correct + record.incorrect !== record.seen) {
    return {
      valid: false,
      message: "Stat correct and incorrect counts must add up to seen."
    };
  }

  if (
    record.averageResponseTime !== null &&
    !isNonNegativeFiniteNumber(record.averageResponseTime)
  ) {
    return {
      valid: false,
      message:
        "averageResponseTime must be null or a non-negative finite number."
    };
  }

  if (
    record.responseTimeCount !== undefined &&
    (
      !isNonNegativeInteger(record.responseTimeCount) ||
      record.responseTimeCount > record.seen
    )
  ) {
    return {
      valid: false,
      message:
        "responseTimeCount must be a non-negative integer no greater than seen."
    };
  }

  if (
    !isValidStoredDate(record.lastSeen) ||
    !isValidStoredDate(record.lastIncorrect)
  ) {
    return {
      valid: false,
      message: "Stored stat dates must be null or valid date strings."
    };
  }

  if (expectedKey !== null) {
    const actualKey = buildStatsKey(
      record.targetType,
      record.targetId,
      record.mode
    );

    if (actualKey !== expectedKey) {
      return {
        valid: false,
        message:
          `Stat key ${expectedKey} does not match record identity ${actualKey}.`
      };
    }
  }

  return {
    valid: true,
    message: "Stat record is valid."
  };
}

/*
  Migrates older valid records to the current in-memory shape.

  Older V1 records did not store responseTimeCount. If an average exists, the
  safest backward-compatible assumption is that all previously seen answers
  were timed, which matches the behaviour of the original implementation.
*/
function normaliseStoredStatRecord(record) {
  const normalisedRecord = {
    ...record
  };

  if (normalisedRecord.responseTimeCount === undefined) {
    normalisedRecord.responseTimeCount =
      normalisedRecord.averageResponseTime === null
        ? 0
        : normalisedRecord.seen;
  }

  return normalisedRecord;
}

/*
  Validates and normalises a complete stats object.

  Invalid records are discarded when loading localStorage so one damaged
  entry does not make every other valid record unusable.
*/
function normaliseStatsObject(stats) {
  if (!isPlainObject(stats)) {
    return {};
  }

  const normalisedStats = {};

  Object.entries(stats).forEach(([key, record]) => {
    const normalisedRecord = normaliseStoredStatRecord(record);
    const validation = validateStatRecord(normalisedRecord, key);

    if (!validation.valid) {
      console.warn(
        `Discarding invalid Vexillator stat record ${key}:`,
        validation.message
      );
      return;
    }

    normalisedStats[key] = normalisedRecord;
  });

  return normalisedStats;
}

/*
  Loads all stats from localStorage.

  Missing, malformed or inaccessible storage returns an empty object.
*/
function loadStats() {
  let storedStats;

  try {
    storedStats = localStorage.getItem(STATS_STORAGE_KEY);
  } catch (error) {
    console.error("Could not read Vexillator stats:", error);
    return {};
  }

  if (!storedStats) {
    return {};
  }

  try {
    const parsedStats = JSON.parse(storedStats);
    return normaliseStatsObject(parsedStats);
  } catch (error) {
    console.error("Could not parse stored Vexillator stats:", error);
    return {};
  }
}

/*
  Saves all stats back to localStorage.

  Returns true on success and false if storage is unavailable or full.
*/
function saveStats(stats) {
  try {
    localStorage.setItem(
      STATS_STORAGE_KEY,
      JSON.stringify(stats)
    );

    return true;
  } catch (error) {
    console.error("Could not save Vexillator stats:", error);
    return false;
  }
}

/*
  Returns one existing stat record, or null if no record exists.

  This is read-only: it does not create or save missing records.
*/
function getStatRecord(targetType, targetId, mode) {
  if (!targetType || !targetId || !mode) {
    return null;
  }

  const stats = loadStats();
  const key = buildStatsKey(targetType, targetId, mode);

  return stats[key] || null;
}

/*
  Returns an existing stat record or creates a blank one.
*/
function getOrCreateStatRecord(
  stats,
  targetType,
  targetId,
  mode
) {
  const key = buildStatsKey(targetType, targetId, mode);

  if (!stats[key]) {
    stats[key] = createBlankStatRecord(
      targetType,
      targetId,
      mode
    );
  }

  return stats[key];
}

/*
  Updates one stat record after an answer.

  responseTimeSeconds may be null when timing is unavailable.
*/
function updateStatRecord(
  statRecord,
  wasCorrect,
  responseTimeSeconds
) {
  const now = new Date().toISOString();

  statRecord.seen += 1;
  statRecord.lastSeen = now;

  if (wasCorrect) {
    statRecord.correct += 1;
  } else {
    statRecord.incorrect += 1;
    statRecord.lastIncorrect = now;
  }

  const hasValidResponseTime =
    isNonNegativeFiniteNumber(responseTimeSeconds);

  if (!hasValidResponseTime) {
    return;
  }

  const previousTimeCount =
    isNonNegativeInteger(statRecord.responseTimeCount)
      ? statRecord.responseTimeCount
      : (
        statRecord.averageResponseTime === null
          ? 0
          : statRecord.seen - 1
      );

  if (
    statRecord.averageResponseTime === null ||
    previousTimeCount === 0
  ) {
    statRecord.averageResponseTime = responseTimeSeconds;
  } else {
    statRecord.averageResponseTime =
      (
        statRecord.averageResponseTime * previousTimeCount +
        responseTimeSeconds
      ) /
      (previousTimeCount + 1);
  }

  statRecord.responseTimeCount = previousTimeCount + 1;
}

/*
  Updates stats after one quiz answer.

  Entity rule:
  - normal question: update the primary entity;
  - shared-asset question: update every accepted entity.

  Variant rule:
  - update the displayed variant once.
*/
function recordQuizAnswer(options = {}) {
  const {
    mode,
    question,
    wasCorrect,
    responseTimeSeconds = null
  } = options;

  if (
    !VALID_STATS_MODES.has(mode) ||
    !isPlainObject(question) ||
    typeof wasCorrect !== "boolean"
  ) {
    console.error(
      "Cannot record quiz answer with invalid options:",
      options
    );
    return false;
  }

  const stats = loadStats();

  const acceptedEntityIds = Array.isArray(
    question.acceptedEntityIds
  )
    ? question.acceptedEntityIds
    : [];

  const entityIdsToUpdate = acceptedEntityIds.length > 1
    ? acceptedEntityIds
    : [question.primaryEntityId];

  const uniqueEntityIds = [
    ...new Set(
      entityIdsToUpdate.filter(entityId => {
        return (
          typeof entityId === "string" &&
          entityId.trim() !== ""
        );
      })
    )
  ];

  uniqueEntityIds.forEach(entityId => {
    const entityStat = getOrCreateStatRecord(
      stats,
      "entity",
      entityId,
      mode
    );

    updateStatRecord(
      entityStat,
      wasCorrect,
      responseTimeSeconds
    );
  });

  if (
    typeof question.displayedVariantId === "string" &&
    question.displayedVariantId.trim() !== ""
  ) {
    const variantStat = getOrCreateStatRecord(
      stats,
      "variant",
      question.displayedVariantId,
      mode
    );

    updateStatRecord(
      variantStat,
      wasCorrect,
      responseTimeSeconds
    );
  }

  return saveStats(stats);
}

/*
  Returns all stored stat records as an array.
*/
function getAllStats() {
  return Object.values(loadStats());
}

/*
  Deletes all stored stats.

  Returns true on success.
*/
function clearAllStats() {
  try {
    localStorage.removeItem(STATS_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error("Could not clear Vexillator stats:", error);
    return false;
  }
}

/*
  Creates a portable stats export object.
*/
function createStatsExportData() {
  return {
    app: "Vexillator",
    exportType: "stats",
    version: STATS_EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    statsStorageKey: STATS_STORAGE_KEY,
    stats: loadStats()
  };
}

/*
  Downloads the current stats as a JSON backup file.
*/
function downloadStatsExport() {
  const exportData = createStatsExportData();
  const jsonText = JSON.stringify(exportData, null, 2);

  const fileBlob = new Blob(
    [jsonText],
    {
      type: "application/json"
    }
  );

  const downloadUrl = URL.createObjectURL(fileBlob);
  const downloadLink = document.createElement("a");

  downloadLink.href = downloadUrl;
  downloadLink.download =
    `vexillator-stats-${getExportDateStamp()}.json`;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();

  /*
    Delay revocation until the browser has begun processing the download.
  */
  setTimeout(() => {
    URL.revokeObjectURL(downloadUrl);
  }, 0);
}

/*
  Creates a local date/time stamp for export filenames.

  Example:
  2026-06-02_21-47-13
*/
function getExportDateStamp() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

/*
  Validates imported Vexillator stats without saving them.

  Import remains replace-only in V1.
*/
function validateStatsImportData(importData) {
  if (!isPlainObject(importData)) {
    return {
      valid: false,
      message:
        "Import failed: the selected file does not contain valid data."
    };
  }

  if (importData.app !== "Vexillator") {
    return {
      valid: false,
      message:
        "Import failed: this does not look like a Vexillator export file."
    };
  }

  if (importData.exportType !== "stats") {
    return {
      valid: false,
      message:
        "Import failed: this file is not a stats export."
    };
  }

  if (importData.version !== STATS_EXPORT_VERSION) {
    return {
      valid: false,
      message:
        "Import failed: this stats export version is not supported."
    };
  }

  if (!isPlainObject(importData.stats)) {
    return {
      valid: false,
      message:
        "Import failed: no valid stats data was found."
    };
  }

  for (const [key, rawRecord] of Object.entries(importData.stats)) {
    const record = normaliseStoredStatRecord(rawRecord);
    const validation = validateStatRecord(record, key);

    if (!validation.valid) {
      return {
        valid: false,
        message:
          `Import failed: invalid stat record ${key}. ${validation.message}`
      };
    }
  }

  return {
    valid: true,
    message: "Stats import data is valid."
  };
}

/*
  Replaces the current stored stats with imported stats.

  The imported data is validated and normalised before it is saved.
*/
function replaceStatsFromImportData(importData) {
  const validation = validateStatsImportData(importData);

  if (!validation.valid) {
    return validation;
  }

  const normalisedStats = normaliseStatsObject(
    importData.stats
  );

  if (!saveStats(normalisedStats)) {
    return {
      valid: false,
      message:
        "Import failed: the stats could not be saved in this browser."
    };
  }

  return {
    valid: true,
    message: "Stats imported successfully."
  };
}
