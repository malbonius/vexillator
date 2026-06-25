/*
  core/presetManager.js

  Stores user-created presets in localStorage.

  Legacy data/quizPresets.js remains loaded for now as static seed/diagnostic
  data, but user-created presets live separately so they can be saved, deleted
  and extended later without editing source files.
*/

const USER_PRESETS_STORAGE_KEY = "vexillatorUserPresets";
const USER_PRESET_SCHEMA_VERSION = 1;

function createUserPresetId() {
  const randomPart = Math.random()
    .toString(36)
    .slice(2, 10);

  return `user_preset_${Date.now()}_${randomPart}`;
}

function sanitisePresetName(name) {
  const trimmedName = typeof name === "string"
    ? name.trim()
    : "";

  return trimmedName || "Untitled preset";
}

function safelyClonePresetPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return {};
  }

  try {
    return JSON.parse(JSON.stringify(payload));
  } catch (error) {
    console.warn("Preset payload could not be cloned.", error);
    return {};
  }
}

function normaliseUserPreset(rawPreset) {
  if (!rawPreset || typeof rawPreset !== "object") {
    return null;
  }

  if (typeof rawPreset.id !== "string" || rawPreset.id.trim() === "") {
    return null;
  }

  if (typeof rawPreset.kind !== "string" || rawPreset.kind.trim() === "") {
    return null;
  }

  return {
    id: rawPreset.id,
    schemaVersion:
      Number(rawPreset.schemaVersion) || USER_PRESET_SCHEMA_VERSION,
    kind: rawPreset.kind,
    name: sanitisePresetName(rawPreset.name),
    createdAt:
      typeof rawPreset.createdAt === "string"
        ? rawPreset.createdAt
        : new Date().toISOString(),
    updatedAt:
      typeof rawPreset.updatedAt === "string"
        ? rawPreset.updatedAt
        : new Date().toISOString(),
    quizModePreference:
      rawPreset.quizModePreference === "typing" ||
      rawPreset.quizModePreference === "multiple_choice"
        ? rawPreset.quizModePreference
        : null,
    payload: safelyClonePresetPayload(rawPreset.payload)
  };
}

function readUserPresets() {
  let storedValue = null;

  try {
    storedValue = localStorage.getItem(USER_PRESETS_STORAGE_KEY);
  } catch (error) {
    console.warn("User presets could not be read.", error);
    return [];
  }

  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue
      .map(normaliseUserPreset)
      .filter(Boolean)
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
  } catch (error) {
    console.warn("User presets could not be parsed.", error);
    return [];
  }
}

function writeUserPresets(presets) {
  const normalisedPresets = Array.isArray(presets)
    ? presets.map(normaliseUserPreset).filter(Boolean)
    : [];

  try {
    localStorage.setItem(
      USER_PRESETS_STORAGE_KEY,
      JSON.stringify(normalisedPresets)
    );
  } catch (error) {
    console.warn("User presets could not be saved.", error);
  }

  return normalisedPresets;
}

function getUserPresets() {
  return readUserPresets();
}

function getUserPresetsByKind(kind) {
  return getUserPresets().filter(preset => preset.kind === kind);
}

function createUserPreset({
  name,
  kind,
  payload,
  quizModePreference = null
}) {
  const now = new Date().toISOString();

  const preset = normaliseUserPreset({
    id: createUserPresetId(),
    schemaVersion: USER_PRESET_SCHEMA_VERSION,
    kind,
    name,
    createdAt: now,
    updatedAt: now,
    quizModePreference,
    payload
  });

  if (!preset) {
    return null;
  }

  const presets = getUserPresets();
  presets.push(preset);
  writeUserPresets(presets);

  return preset;
}

function deleteUserPreset(presetId) {
  const presets = getUserPresets();
  const remainingPresets = presets.filter(preset => {
    return preset.id !== presetId;
  });

  writeUserPresets(remainingPresets);

  return remainingPresets.length !== presets.length;
}

function renameUserPreset(presetId, nextName) {
  const presets = getUserPresets();
  const presetIndex = presets.findIndex(preset => {
    return preset.id === presetId;
  });

  if (presetIndex === -1) {
    return null;
  }

  const renamedPreset = normaliseUserPreset({
    ...presets[presetIndex],
    name: sanitisePresetName(nextName),
    updatedAt: new Date().toISOString()
  });

  if (!renamedPreset) {
    return null;
  }

  const nextPresets = presets.slice();
  nextPresets[presetIndex] = renamedPreset;
  writeUserPresets(nextPresets);

  return renamedPreset;
}
