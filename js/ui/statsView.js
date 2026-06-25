/*
  Stats View UI module.

  Extracted from main.js during Refactor Phase 5.

  This file owns:
  - Stats controls wiring;
  - Stats summary rendering;
  - Stats filters and sorting;
  - Stats import/export/clear UI behaviour.

  It relies on the existing global statsManager helpers and dataIndex.
*/

/*
  Sets up the stats controls.

  This includes:
  - refresh stats
  - export stats
  - import stats
  - clear stats
  - stats target filter
  - stats mode filter
  - stats sort selector

  The stats display itself is handled by renderStatsView().
*/
function setupStatsView() {
  /*
    Stats management buttons.
    These are currently in the right-hand panel.
  */
  const refreshButton = document.getElementById("refreshStatsButton");
  const exportButton = document.getElementById("exportStatsButton");
  const importInput = document.getElementById("importStatsInput");
  const clearButton = document.getElementById("clearStatsButton");

  /*
    Stats display controls.
    These are inside the centre Stats mode panel.
  */
  const targetTypeFilter = document.getElementById("statsTargetTypeFilter");
  const modeFilter = document.getElementById("statsModeFilter");
  const minimumSeenFilter = document.getElementById("statsMinimumSeenFilter");
  const sortSelect = document.getElementById("statsSortSelect");

  /*
    If the management buttons are missing, stop here.

    This prevents the app from crashing if the HTML is changed later
    and one of these elements is temporarily missing.
  */
  if (!refreshButton || !exportButton || !importInput || !clearButton) {
    console.warn("Stats management controls could not be found.");
    return;
  }

  /*
    Refresh simply re-renders the current stats from localStorage.
  */
  refreshButton.addEventListener("click", () => {
    renderStatsView();
    refreshStatsPresetViewsIfAvailable();
  });

  /*
    Export downloads the current localStorage stats as a JSON file.
  */
  exportButton.addEventListener("click", () => {
    downloadStatsExport();
  });

  /*
    Import reads a selected JSON file, validates it, asks for confirmation,
    then replaces the current stats if the user confirms.
  */
  importInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      let importData;

      try {
        importData = JSON.parse(fileReader.result);
      } catch (error) {
        alert("Import failed: the selected file is not valid JSON.");
        importInput.value = "";
        return;
      }

      const validation = validateStatsImportData(importData);

      if (!validation.valid) {
        alert(validation.message);
        importInput.value = "";
        return;
      }

      const confirmed = confirm(
        "Import these stats? This will replace your current Vexillator stats."
      );

      if (!confirmed) {
        importInput.value = "";
        return;
      }

      const result = replaceStatsFromImportData(importData);

      alert(result.message);
      renderStatsView();
      refreshStatsPresetViewsIfAvailable();

      /*
        Clear the file input so the same file can be selected again later
        if needed.
      */
      importInput.value = "";
    };

    fileReader.readAsText(selectedFile);
  });

  /*
    Clear all stats after confirmation.
  */
  clearButton.addEventListener("click", () => {
    const confirmed = confirm(
      "Clear all Vexillator stats? This cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    clearAllStats();
    renderStatsView();
    refreshStatsPresetViewsIfAvailable();
  });

  /*
    Stats filters and sort controls.

    These controls are optional in the sense that the app should not crash
    if one is temporarily missing while editing the HTML.
  */
  [targetTypeFilter, modeFilter, minimumSeenFilter, sortSelect].forEach(control => {
    if (!control) {
      return;
    }

    control.addEventListener("change", () => {
      renderStatsView();
      refreshStatsPresetViewsIfAvailable();
    });
  });
}

function refreshStatsPresetViewsIfAvailable() {
  if (typeof renderPresetViews === "function") {
    renderPresetViews();
  }
}

/*
  Renders the Stats mode panel.

  This function:
  - loads all stored stats;
  - updates the summary box;
  - applies the selected filters;
  - applies the selected sort order;
  - renders the filtered stat records.
*/
function renderStatsView() {
  const statsSummaryElement = document.getElementById("statsSummaryView");
  const statsRecordCountElement = document.getElementById("statsRecordCountView");
  const statsViewElement = document.getElementById("statsView");

  /*
    These controls live inside the centre Stats mode panel.
    If a control is missing, we fall back to "all" or "weakest".
  */
  const targetTypeFilter = document.getElementById("statsTargetTypeFilter");
  const modeFilter = document.getElementById("statsModeFilter");
  const minimumSeenFilter = document.getElementById("statsMinimumSeenFilter");
  const sortSelect = document.getElementById("statsSortSelect");

  const selectedTargetType = targetTypeFilter ? targetTypeFilter.value : "all";
  const selectedMode = modeFilter ? modeFilter.value : "all";
  const selectedMinimumSeen = minimumSeenFilter ? Number(minimumSeenFilter.value) : 0;
  const selectedSort = sortSelect ? sortSelect.value : "weakest";

  const allStats = getAllStats();

  /*
  If no stats exist at all, show the empty state in both the summary
  and the stat list.
*/
  if (allStats.length === 0) {
    renderStatsSummary([], statsSummaryElement);
    renderStatsRecordCount(0, 0, statsRecordCountElement);

    statsViewElement.innerHTML = `<p class="empty-message">No stats recorded yet.</p>`;
    return;
  }

  /*
    Apply the current filters before rendering the summary and list.

    This means the summary cards describe the currently viewed stats,
    not the absolute total across all stored stats.
  */
  const filteredStats = filterStats(
    allStats,
    selectedTargetType,
    selectedMode,
    selectedMinimumSeen
  );

  renderStatsSummary(filteredStats, statsSummaryElement);
  renderStatsRecordCount(
    filteredStats.length,
    allStats.length,
    statsRecordCountElement
  );

  if (filteredStats.length === 0) {
    statsViewElement.innerHTML =
    `<p class="empty-message">No stats match the selected filters.</p>`;
    return;
  }

  const sortedStats = sortStats(filteredStats, selectedSort);

  statsViewElement.innerHTML = "";

  const listElement = document.createElement("div");
  listElement.className = "stats-list";

  sortedStats.forEach(stat => {
    const itemElement = createStatsItemElement(stat);
    listElement.appendChild(itemElement);
  });

  statsViewElement.appendChild(listElement);
}

/*
  Renders the summary area at the top of the Stats mode.

  This receives the currently viewed stat records, after filters have
  been applied. So if the user filters to variants or typing mode,
  the summary updates to match that view.
*/
function renderStatsSummary(stats, summaryElement) {
  if (!summaryElement) {
    return;
  }

  if (stats.length === 0) {
    summaryElement.innerHTML = `<p class="empty-message">No stats summary available yet.</p>`;
    return;
  }

  const totalSeen = stats.reduce((sum, stat) => {
    return sum + stat.seen;
  }, 0);

  const totalCorrect = stats.reduce((sum, stat) => {
    return sum + stat.correct;
  }, 0);

  const totalIncorrect = stats.reduce((sum, stat) => {
    return sum + stat.incorrect;
  }, 0);

  const overallAccuracy = totalSeen > 0 ?
    Math.round((totalCorrect / totalSeen) * 100) :
    0;

  const timedStats = stats.filter(stat => {
    return stat.averageResponseTime !== null;
  });

  const averageResponseTime = timedStats.length > 0 ?
    timedStats.reduce((sum, stat) => {
      return sum + stat.averageResponseTime;
    }, 0) / timedStats.length :
    null;

  const averageTimeText = averageResponseTime !== null ?
    `${averageResponseTime.toFixed(1)}s` :
    "No time data";

  summaryElement.innerHTML = "";

  const summaryGrid = document.createElement("div");
  summaryGrid.className = "stats-summary-grid";

  summaryGrid.appendChild(createStatsSummaryCard("Answers", totalSeen));
  summaryGrid.appendChild(createStatsSummaryCard("Correct", totalCorrect));
  summaryGrid.appendChild(createStatsSummaryCard("Incorrect", totalIncorrect));
  summaryGrid.appendChild(createStatsSummaryCard("Accuracy", `${overallAccuracy}%`));
  summaryGrid.appendChild(createStatsSummaryCard("Average Time", averageTimeText));

  summaryElement.appendChild(summaryGrid);
}

/*
  Shows how many stat records are currently visible after filters.

  Example:
  Showing 6 of 18 stat records.
*/
function renderStatsRecordCount(visibleCount, totalCount, recordCountElement) {
  if (!recordCountElement) {
    return;
  }

  if (totalCount === 0) {
    recordCountElement.textContent = "Showing 0 stat records.";
    return;
  }

  if (visibleCount === totalCount) {
    recordCountElement.textContent =
      `Showing all ${totalCount} stat record(s).`;
    return;
  }

  recordCountElement.textContent =
    `Showing ${visibleCount} of ${totalCount} stat record(s).`;
}

/*
  Creates one small summary card.
*/
function createStatsSummaryCard(label, value) {
  const cardElement = document.createElement("div");
  cardElement.className = "stats-summary-card";

  const valueElement = document.createElement("p");
  valueElement.className = "stats-summary-value";
  valueElement.textContent = value;

  const labelElement = document.createElement("p");
  labelElement.className = "stats-summary-label";
  labelElement.textContent = label;

  cardElement.appendChild(valueElement);
  cardElement.appendChild(labelElement);

  return cardElement;
}

/*
  Applies the selected stats filters.

  targetType:
  - all
  - entity
  - variant

  mode:
  - all
  - typing
  - multiple_choice

  minimumSeen:
  - 0 means no minimum
  - 3 means only records seen at least 3 times
*/
function filterStats(stats, targetType, mode, minimumSeen) {
  return stats.filter(stat => {
    const matchesTargetType =
      targetType === "all" || stat.targetType === targetType;

    const matchesMode =
      mode === "all" || stat.mode === mode;

    const matchesMinimumSeen =
      stat.seen >= minimumSeen;

    return matchesTargetType && matchesMode && matchesMinimumSeen;
  });
}

/*
  Sorts stat records according to the selected sort option.
*/
function sortStats(stats, sortMode) {
  const sortedStats = [...stats];

  sortedStats.sort((a, b) => {
    if (sortMode === "weakest") {
      return getStatAccuracy(a) - getStatAccuracy(b);
    }

    if (sortMode === "strongest") {
      return getStatAccuracy(b) - getStatAccuracy(a);
    }

    if (sortMode === "most_seen") {
      return b.seen - a.seen;
    }

    if (sortMode === "least_seen") {
      return a.seen - b.seen;
    }

    if (sortMode === "slowest") {
      return getAverageTimeForSort(b) - getAverageTimeForSort(a);
    }

    if (sortMode === "recently_incorrect") {
      return getDateForSort(b.lastIncorrect) - getDateForSort(a.lastIncorrect);
    }

    /*
      Default fallback: alphabetical by readable display name.
    */
    return getStatsDisplayName(a).localeCompare(getStatsDisplayName(b));
  });

  return sortedStats;
}

/*
  Gets accuracy as a number from 0 to 100.

  Records with no seen attempts are treated as 0.
*/
function getStatAccuracy(stat) {
  if (stat.seen === 0) {
    return 0;
  }

  return (stat.correct / stat.seen) * 100;
}

/*
  Converts average response time into a sortable number.

  Records without time data are pushed to the bottom for slowest sorting.
*/
function getAverageTimeForSort(stat) {
  if (stat.averageResponseTime === null) {
    return -1;
  }

  return stat.averageResponseTime;
}

/*
  Converts an ISO date string into a sortable timestamp.

  Missing dates are pushed to the bottom.
*/
function getDateForSort(dateText) {
  if (!dateText) {
    return 0;
  }

  return new Date(dateText).getTime();
}

/*
  Creates one visible stat record.

  Each record shows:
  - readable entity/variant name
  - quiz mode
  - seen/correct/incorrect counts
  - accuracy
  - average response time
  - last seen date
  - last incorrect date
*/
function createStatsItemElement(stat) {
  const itemElement = document.createElement("div");
  itemElement.className = "stats-item";

  const titleElement = document.createElement("p");
  titleElement.className = "stats-item-title";
  titleElement.textContent = getStatsDisplayName(stat);

  const modeElement = document.createElement("p");
  modeElement.className = "stats-item-mode";
  modeElement.textContent = formatStatsMode(stat.mode);

  const accuracy = Math.round(getStatAccuracy(stat));

  const averageTime = stat.averageResponseTime !== null ?
    `${stat.averageResponseTime.toFixed(1)}s` :
    "No time data";

  const lastSeenText = stat.lastSeen ?
    formatStatsDate(stat.lastSeen) :
    "Never";

  const lastIncorrectText = stat.lastIncorrect ?
    formatStatsDate(stat.lastIncorrect) :
    "Never";

  /*
    Use a small grid so the stats are easier to scan than a long sentence.
  */
  const gridElement = document.createElement("div");
  gridElement.className = "stats-item-grid";

  gridElement.appendChild(createStatsField("Seen", stat.seen));
  gridElement.appendChild(createStatsField("Correct", stat.correct));
  gridElement.appendChild(createStatsField("Incorrect", stat.incorrect));
  gridElement.appendChild(createStatsField("Accuracy", `${accuracy}%`));
  gridElement.appendChild(createStatsField("Average Time", averageTime));
  gridElement.appendChild(createStatsField("Last Seen", lastSeenText));
  gridElement.appendChild(createStatsField("Last Incorrect", lastIncorrectText));

  itemElement.appendChild(titleElement);
  itemElement.appendChild(modeElement);
  itemElement.appendChild(gridElement);

  return itemElement;
}

/*
  Creates one labelled field inside a stat record.

  Example:
  Seen
  12
*/
function createStatsField(label, value) {
  const fieldElement = document.createElement("div");
  fieldElement.className = "stats-field";

  const labelElement = document.createElement("p");
  labelElement.className = "stats-field-label";
  labelElement.textContent = label;

  const valueElement = document.createElement("p");
  valueElement.className = "stats-field-value";
  valueElement.textContent = value;

  fieldElement.appendChild(labelElement);
  fieldElement.appendChild(valueElement);

  return fieldElement;
}

/*
  Converts a stat mode into a readable label.
*/
function formatStatsMode(mode) {
  if (mode === "multiple_choice") {
    return "Multiple-choice";
  }

  if (mode === "typing") {
    return "Typing";
  }

  return mode;
}

/*
  Formats stored ISO dates for the stats display.
*/
function formatStatsDate(dateText) {
  const date = new Date(dateText);

  if (Number.isNaN(date.getTime())) {
    return "unknown";
  }

  return date.toLocaleString();
}

/*
  Converts a stat target into a readable label.
*/
function getStatsDisplayName(stat) {
  if (stat.targetType === "entity") {
    const entity = dataIndex.entitiesById[stat.targetId];
    return entity ? `Entity: ${entity.name}` : `Entity: ${stat.targetId}`;
  }

  if (stat.targetType === "variant") {
    const variant = dataIndex.variantsById[stat.targetId];

    if (!variant) {
      return `Variant: ${stat.targetId}`;
    }

    const entity = dataIndex.entitiesById[variant.entityId];
    const entityName = entity ? entity.name : variant.entityId;

    return `Variant: ${entityName} - ${variant.displayName}`;
  }

  return `${stat.targetType}: ${stat.targetId}`;
}
