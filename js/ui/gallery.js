/*
  Gallery view module.

  This file owns Gallery rendering, Gallery presentation controls and shared
  Gallery item/card helpers. It is loaded as a normal script so the existing
  local-file workflow can keep using global functions.
*/


/*
  Resets Gallery to its first render batch.

  This should happen when the active selection or Gallery presentation changes.
*/
function resetGalleryRenderLimit() {
  appState.galleryRenderLimit = GALLERY_INITIAL_RENDER_LIMIT;
}

/*
  Returns how many Gallery items should be rendered for the current batch.
*/
function getGalleryVisibleItemCount(totalItemCount) {
  if (!Number.isFinite(appState.galleryRenderLimit)) {
    return totalItemCount;
  }

  return Math.min(
    appState.galleryRenderLimit,
    totalItemCount
  );
}

/*
  Ensures the Random order option exists even if the HTML select has not yet
  been updated.
*/
function ensureGallerySortSelectOptions(sortSelect) {
  if (!sortSelect) {
    return;
  }

  const hasRandomOption = Array.from(sortSelect.options).some(option => {
    return option.value === "random";
  });

  if (hasRandomOption) {
    return;
  }

  const randomOption = document.createElement("option");
  randomOption.value = "random";
  randomOption.textContent = "Random order";

  sortSelect.appendChild(randomOption);
}

/*
  Clears the remembered Random order.

  This is used when the user deliberately changes sort mode so returning to
  Random order creates a fresh shuffle.
*/
function resetGalleryRandomOrder() {
  appState.galleryRandomSortSeed = null;
  appState.galleryRandomSortSignature = null;
}

/*
  Creates a stable signature for the current resolved Gallery pool.

  Random order should remain steady while the same pool is simply re-rendered,
  but should refresh when the selected content changes.
*/
function createGalleryRandomOrderSignature(members) {
  return members
    .map(member => {
      return [
        member.sourceType ?? "",
        member.sourceId ?? "",
        member.collectionId ?? "",
        member.entityId ?? "",
        member.variantId ?? "",
        member.galleryVariantId ?? "",
        member.quizVariantId ?? "",
        member.displayNameOverride ?? ""
      ].join("::");
    })
    .sort()
    .join("||");
}

/*
  Prepares the current Random order seed.

  The seed is refreshed only when Random order is newly selected or when the
  resolved Gallery pool changes. Detail-mode changes, zoom interactions and
  render batching do not reshuffle the same pool.
*/
function prepareGalleryRandomOrder(members) {
  if (appState.gallerySortMode !== "random") {
    return;
  }

  const signature = createGalleryRandomOrderSignature(members);

  if (
    appState.galleryRandomSortSeed &&
    appState.galleryRandomSortSignature === signature
  ) {
    return;
  }

  appState.galleryRandomSortSeed = `${Date.now()}_${Math.random()}`;
  appState.galleryRandomSortSignature = signature;
}

/*
  Deterministic 32-bit hash used to sort items into a seeded pseudo-random
  order.

  Using a seeded hash rather than Math.random() inside Array.sort keeps Random
  order stable between normal re-renders.
*/
function hashGalleryRandomSortValue(value) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function getGalleryRandomSortKey(galleryItem) {
  return [
    galleryItem.entityId ?? "",
    galleryItem.galleryVariantId ?? "",
    galleryItem.displayNameOverride ?? ""
  ].join("::");
}

/*
  Creates controls for progressively rendering more Gallery cards.

  The full Working Pool remains available to quiz modes; this controls only
  how many cards Gallery creates in the DOM.
*/
function createGalleryRenderLimitControls(
  totalItemCount,
  visibleItemCount
) {
  if (visibleItemCount >= totalItemCount) {
    return null;
  }

  const noticeElement = document.createElement("div");
  noticeElement.className = "gallery-render-limit-notice";

  const messageElement = document.createElement("p");
  messageElement.className = "panel-note";
  messageElement.textContent =
    `Showing ${visibleItemCount} of ${totalItemCount} flags.`;

  noticeElement.appendChild(messageElement);

  const actionsElement = document.createElement("div");
  actionsElement.className = "gallery-render-limit-actions";

  const remainingItemCount = totalItemCount - visibleItemCount;
  const nextBatchSize = Math.min(
    GALLERY_RENDER_BATCH_SIZE,
    remainingItemCount
  );

  const showMoreButton = document.createElement("button");
  showMoreButton.type = "button";
  showMoreButton.className = "entity-selection-action";
  showMoreButton.textContent =
    `Show next ${nextBatchSize}`;

  showMoreButton.addEventListener("click", () => {
    appState.galleryRenderLimit = Math.min(
      totalItemCount,
      visibleItemCount + GALLERY_RENDER_BATCH_SIZE
    );

    renderGallery();
  });

  const showAllButton = document.createElement("button");
  showAllButton.type = "button";
  showAllButton.className = "entity-selection-action";
  showAllButton.textContent = "Show all";

  showAllButton.addEventListener("click", () => {
    appState.galleryRenderLimit = Number.POSITIVE_INFINITY;
    renderGallery();
  });

  actionsElement.appendChild(showMoreButton);
  actionsElement.appendChild(showAllButton);
  noticeElement.appendChild(actionsElement);

  return noticeElement;
}

/*
  Renders the gallery from the active working pool.

  Flow:
  selected collections, entities and variants
  → resolved WorkingPoolMembers
  → gallery variant
  → deduplicated gallery items
  → sorted flag cards

  Important:
  We deduplicate by gallery variant ID, not by asset ID.

  This means:
  - Bolivia Civil Flag is not repeated if it enters through multiple sources.
  - West Yorkshire and West Riding can still appear separately even if they
    share the same image asset.
*/
function renderGallery() {
  const galleryElement = document.getElementById("galleryView");

  /*
    Check all currently supported selection sources rather than collections
    alone.
  */
  const hasActiveSelection =
    appState.selectedCollectionIds.size > 0 ||
    appState.selectedEntityGroups.size > 0 ||
    appState.selectedEntityIds.size > 0 ||
    appState.selectedVariantIds.size > 0 ||
    appState.selectedVariantGroups.size > 0;

  if (!hasActiveSelection) {
    setGalleryZoomContext(null, [], 0);

    galleryElement.innerHTML = `
      <p class="empty-message">
        Select one or more collections, entities or variants to view flags.
      </p>
    `;

    return;
  }

  /*
    Resolve every selection source into the same WorkingPoolMember shape.
  */
  const members = resolveWorkingPool({
      collectionIds: Array.from(appState.selectedCollectionIds),
      entityGroups: Array.from(appState.selectedEntityGroups.values()),
      entityIds: Array.from(appState.selectedEntityIds),
      variantIds: Array.from(appState.selectedVariantIds),
      variantGroups: Array.from(appState.selectedVariantGroups.values())
    },
    dataIndex
  );

  if (members.length === 0) {
    setGalleryZoomContext(null, [], 0);

    galleryElement.innerHTML = `
      <p class="empty-message">
        The current selection did not resolve to any gallery items.
      </p>
    `;

    return;
  }

  prepareGalleryRandomOrder(members);

  /*
    Existing gallery-specific deduplication remains downstream.

    The working-pool resolver deliberately does not deduplicate members.
  */
  const galleryItems = buildDeduplicatedGalleryItems(members);

  if (galleryItems.length === 0) {
    setGalleryZoomContext(null, [], 0);

    galleryElement.innerHTML = `
      <p class="empty-message">
        The current selection did not contain any displayable gallery items.
      </p>
    `;

    return;
  }

  /*
    Grouped-by-source mode shows what every active selection source contributes.

    Items are deduplicated within a source section but may deliberately appear
    again under another source.
  */
  if (appState.galleryOrganisationMode === "grouped_source") {
    const sourceGroups = buildGallerySourceGroups(members);

    const totalGroupedItemCount = sourceGroups.reduce(
      (total, group) => total + group.items.length,
      0
    );

    const visibleItemLimit =
      getGalleryVisibleItemCount(totalGroupedItemCount);

    let remainingVisibleSlots = visibleItemLimit;

    const visibleSourceGroups = [];

    sourceGroups.forEach(group => {
      if (remainingVisibleSlots <= 0) {
        return;
      }

      const visibleGroupItems = group.items.slice(
        0,
        remainingVisibleSlots
      );

      if (visibleGroupItems.length === 0) {
        return;
      }

      visibleSourceGroups.push({
        ...group,
        allItems: group.items,
        items: visibleGroupItems
      });

      remainingVisibleSlots -= visibleGroupItems.length;
    });

    /*
      Preserve the label context of each source group for zoom.

      The same variant may appear in several groups, but its shortest clear
      title depends on the group in which the user opened it.
    */
    const displayedItems = visibleSourceGroups.flatMap(group => {
      return group.items.map(item => {
        const entity = dataIndex.entitiesById[item.entityId];

        const variant = item.galleryVariantId ?
          dataIndex.variantsById[item.galleryVariantId] :
          null;

        const titleIncludesVariant =
          entityAppearsMoreThanOnceInGallery(item, group.allItems);

        return {
          ...item,

          /*
            Store the exact title used by this source section.
          */
          zoomDisplayTitle: getGalleryCardTitle(
            item,
            group.allItems,
            entity,
            variant
          ),

          zoomTitleIncludesVariant: titleIncludesVariant
        };
      });
    });

    if (displayedItems.length === 0) {
      setGalleryZoomContext(null, [], 0);

      galleryElement.innerHTML = `
      <p class="empty-message">
        The current selection did not contain any grouped gallery items.
      </p>
    `;

      return;
    }

    /*
      Zoom follows the actual visual order, including only currently rendered
      Gallery cards. Showing more flags expands this zoom context.
    */
    setGalleryZoomContext("gallery", displayedItems, 0);

    galleryElement.innerHTML = "";

    let displayedItemIndex = 0;

    visibleSourceGroups.forEach(group => {
      const sectionElement = document.createElement("section");
      sectionElement.className = "gallery-source-section";

      const headingElement = document.createElement("h3");
      headingElement.className = "gallery-source-heading";
      headingElement.textContent = group.heading;

      sectionElement.appendChild(headingElement);

      const countElement = document.createElement("p");
      countElement.className = "gallery-source-count";

      countElement.textContent =
        group.items.length === group.allItems.length ?
        `${group.items.length} ${group.items.length === 1 ? "flag" : "flags"}` :
        `${group.items.length} of ${group.allItems.length} flags shown`;

      sectionElement.appendChild(countElement);

      const gridElement = document.createElement("div");
      gridElement.className = "gallery-grid";

      group.items.forEach(galleryItem => {
        /*
          Determine the shortest clear label within this source section.

          An entity-target collection may resolve through a default variant, but
          if the entity appears only once in this group, the card should still
          display the entity name alone.
        */
        const cardElement = createFlagCard(
          galleryItem,
          group.allItems
        );

        const zoomIndex = displayedItemIndex;

        function openRenderedGalleryItem() {
          /*
            Entity Detail zoom replaces the shared zoom context. Gallery cards
            may still be on screen when the user returns, so restore the
            Gallery context immediately before opening zoom.
          */
          setGalleryZoomContext(
            "gallery",
            displayedItems,
            zoomIndex
          );

          showGalleryZoomOverlay(zoomIndex);
        }

        cardElement.addEventListener("click", () => {
          openRenderedGalleryItem();
        });

        cardElement.tabIndex = 0;

        cardElement.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openRenderedGalleryItem();
          }
        });

        gridElement.appendChild(cardElement);
        displayedItemIndex += 1;
      });

      sectionElement.appendChild(gridElement);
      galleryElement.appendChild(sectionElement);
    });

    const limitControls = createGalleryRenderLimitControls(
      totalGroupedItemCount,
      displayedItems.length
    );

    if (limitControls) {
      galleryElement.appendChild(limitControls);
    }

    return;
  }

  const visibleItemCount =
    getGalleryVisibleItemCount(galleryItems.length);

  const visibleGalleryItems = galleryItems.slice(
    0,
    visibleItemCount
  );

  /*
    Gallery zoom cycles through the currently rendered Gallery list after
    resolution, deduplication and sorting.

    Showing more flags expands this zoom context.
  */
  const displayedGalleryItems = visibleGalleryItems.map(galleryItem => {
    const entity = dataIndex.entitiesById[galleryItem.entityId];

    const variant = galleryItem.galleryVariantId ?
      dataIndex.variantsById[galleryItem.galleryVariantId] :
      null;

    const titleIncludesVariant =
      entityAppearsMoreThanOnceInGallery(galleryItem, galleryItems);

    return {
      ...galleryItem,
      zoomDisplayTitle: getGalleryCardTitle(
        galleryItem,
        galleryItems,
        entity,
        variant
      ),
      zoomTitleIncludesVariant: titleIncludesVariant
    };
  });

  setGalleryZoomContext("gallery", displayedGalleryItems, 0);

  galleryElement.innerHTML = "";

  const gridElement = document.createElement("div");
  gridElement.className = "gallery-grid";

  displayedGalleryItems.forEach((galleryItem, index) => {
    const cardElement = createFlagCard(galleryItem, galleryItems);

    function openRenderedGalleryItem() {
      /*
        Entity Detail zoom replaces the shared zoom context. Gallery cards may
        still be on screen when the user returns, so restore the Gallery
        context immediately before opening zoom.
      */
      setGalleryZoomContext(
        "gallery",
        displayedGalleryItems,
        index
      );

      showGalleryZoomOverlay(index);
    }

    cardElement.addEventListener("click", () => {
      openRenderedGalleryItem();
    });

    cardElement.tabIndex = 0;

    cardElement.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRenderedGalleryItem();
      }
    });

    gridElement.appendChild(cardElement);
  });

  galleryElement.appendChild(gridElement);

  const limitControls = createGalleryRenderLimitControls(
    galleryItems.length,
    displayedGalleryItems.length
  );

  if (limitControls) {
    galleryElement.appendChild(limitControls);
  }
}

/*
  Formats a variant's active years for display.

  Supported start-date precision:
  - omitted: exact year
  - circa: approximately this year
  - range: adopted sometime between startYear and startYearLatest
  - decade: adopted sometime during the stated decade

  startYear remains numeric so Gallery sorting continues to work.
*/
function formatVariantYears(variant) {
  if (!variant) {
    return "";
  }

  const startYear = variant.startYear;
  const startYearLatest = variant.startYearLatest;
  const startYearPrecision = variant.startYearPrecision;
  const endYear = variant.endYear;

  if (startYear == null && endYear == null) {
    return "";
  }

  if (startYear == null && endYear != null) {
    return `Until ${endYear}`;
  }

  let startText = String(startYear);

  if (startYearPrecision === "circa") {
    startText = `c. ${startYear}`;
  }

  if (
    startYearPrecision === "range" &&
    Number.isFinite(startYearLatest)
  ) {
    startText = `${startYear}–${startYearLatest}`;
  }

  if (startYearPrecision === "decade") {
    /*
      Prefer the stored decade's first year.

      For example, startYear: 1980 displays as "1980s".
    */
    const decadeStart = Math.floor(startYear / 10) * 10;
    startText = `${decadeStart}s`;
  }

  if (endYear == null) {
    /*
      Date ranges describe uncertainty about adoption, not a continuous
      historical period, so avoid unclear output such as 1981–1983–present.
    */
    if (startYearPrecision === "range") {
      return `Adopted ${startText}; current`;
    }

    if (startYearPrecision === "decade") {
      return `Adopted in the ${startText}; current`;
    }

    return `${startText}–present`;
  }

  if (startYearPrecision === "range") {
    return `Adopted ${startText}; used until ${endYear}`;
  }

  if (startYearPrecision === "decade") {
    return `Adopted in the ${startText}; used until ${endYear}`;
  }

  if (
    startYearPrecision !== "circa" &&
    startYear === endYear
  ) {
    return String(startYear);
  }

  return `${startText}–${endYear}`;
}

/*
  Decides whether a gallery card needs the variant name in its main label.

  If an entity appears more than once in the current gallery, the entity name
  alone is ambiguous.

  Example:
  - Bolivia
  - Bolivia

  becomes:
  - Bolivia - Civil Flag
  - Bolivia - State Flag
*/
function entityAppearsMoreThanOnceInGallery(galleryItem, galleryItems) {
  if (!galleryItem || !galleryItems) {
    return false;
  }

  const galleryItemEntityLabel = getGalleryItemEntityDisplayName(
    galleryItem,
    dataIndex.entitiesById[galleryItem.entityId]
  );

  const matchingItems = galleryItems.filter(item => {
    const itemEntityLabel = getGalleryItemEntityDisplayName(
      item,
      dataIndex.entitiesById[item.entityId]
    );

    return itemEntityLabel === galleryItemEntityLabel;
  });

  return matchingItems.length > 1;
}

/*
  Builds the main gallery card label.

  Normal case:
  - Argentina

  If the same entity appears more than once in the current gallery:
  - Bolivia - Civil Flag
  - Bolivia - State Flag
*/
function getGalleryCardTitle(galleryItem, galleryItems, entity, variant) {
  const entityName = getGalleryItemEntityDisplayName(
    galleryItem,
    entity
  );

  const needsVariantName =
    entityAppearsMoreThanOnceInGallery(galleryItem, galleryItems);

  if (!needsVariantName || !variant || !variant.displayName) {
    return entityName;
  }

  return `${entityName} - ${variant.displayName}`;
}



/*
  Sets up Gallery presentation controls.

  These controls update only Gallery presentation state:
  - organisation mode;
  - sort order;
  - detail display.

  They do not alter the active selection, quiz state or stats.
*/
function setupGalleryControls() {
  const organisationSelect = document.getElementById(
    "galleryOrganisationSelect"
  );

  const sortSelect = document.getElementById(
    "gallerySortSelect"
  );

  const detailsSelect = document.getElementById(
    "galleryDetailsSelect"
  );

  /*
    Keep each available HTML control synchronised with app state.

    Check them independently so one missing control does not prevent the
    others from being initialised.
  */
  if (organisationSelect) {
    organisationSelect.value =
      appState.galleryOrganisationMode;

    organisationSelect.addEventListener("change", () => {
      appState.galleryOrganisationMode =
        organisationSelect.value;

      resetGalleryRenderLimit();
      renderGallery();
    });
  }

  if (sortSelect) {
    ensureGallerySortSelectOptions(sortSelect);

    sortSelect.value =
      appState.gallerySortMode;

    sortSelect.addEventListener("change", () => {
      if (appState.gallerySortMode === sortSelect.value) {
        return;
      }

      appState.gallerySortMode =
        sortSelect.value;

      resetGalleryRandomOrder();
      resetGalleryRenderLimit();
      renderGallery();
    });
  }

  if (detailsSelect) {
    detailsSelect.value =
      appState.galleryDetailsMode;

    detailsSelect.addEventListener("change", () => {
      appState.galleryDetailsMode =
        detailsSelect.value;

      /*
        Gallery zoom reads the detail mode when it renders, so no zoom state
        needs to be reset here.
      */
      resetGalleryRenderLimit();
      renderGallery();
    });
  }
}


/*
  Sorts gallery items according to the active Gallery sort mode.

  Name sorting uses entity name first and variant name second.

  Year sorting uses the variant start year. Variants without a start year are
  placed after dated variants so unknown dates do not dominate either end.
*/

function normaliseGalleryDisplayNameOverride(value) {
  return typeof value === "string" && value.trim() !== ""
    ? value.trim()
    : null;
}

function normaliseGalleryAnswerAliases(value) {
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

function getGalleryItemEntityDisplayName(galleryItem, entity) {
  return normaliseGalleryDisplayNameOverride(
    galleryItem?.displayNameOverride
  ) ?? entity?.name ?? "Unknown entity";
}

function createGalleryItemDedupeKey(galleryItem) {
  const baseKey = galleryItem.galleryVariantId || galleryItem.entityId;
  const displayNameOverride = normaliseGalleryDisplayNameOverride(
    galleryItem.displayNameOverride
  );

  return displayNameOverride
    ? `${baseKey}::context:${displayNameOverride.toLowerCase()}`
    : `${baseKey}::context:default`;
}

function sortGalleryItems(galleryItems) {
  return [...galleryItems].sort((itemA, itemB) => {
    const entityA = dataIndex.entitiesById[itemA.entityId];
    const entityB = dataIndex.entitiesById[itemB.entityId];

    const variantA = itemA.galleryVariantId ?
      dataIndex.variantsById[itemA.galleryVariantId] :
      null;

    const variantB = itemB.galleryVariantId ?
      dataIndex.variantsById[itemB.galleryVariantId] :
      null;

    const entityNameA = getGalleryItemEntityDisplayName(itemA, entityA);
    const entityNameB = getGalleryItemEntityDisplayName(itemB, entityB);

    const variantNameA = variantA?.displayName || "";
    const variantNameB = variantB?.displayName || "";

    /*
      Stable alphabetical fallback used after year comparisons, when dates are
      equal or unavailable, and to break rare Random order hash ties.
    */
    function compareNames() {
      const entityCompare = entityNameA.localeCompare(entityNameB);

      if (entityCompare !== 0) {
        return entityCompare;
      }

      return variantNameA.localeCompare(variantNameB);
    }

    if (appState.gallerySortMode === "random") {
      const seed = appState.galleryRandomSortSeed ?? "";

      const randomValueA = hashGalleryRandomSortValue(
        `${seed}::${getGalleryRandomSortKey(itemA)}`
      );

      const randomValueB = hashGalleryRandomSortValue(
        `${seed}::${getGalleryRandomSortKey(itemB)}`
      );

      if (randomValueA !== randomValueB) {
        return randomValueA - randomValueB;
      }

      return compareNames();
    }

    if (appState.gallerySortMode === "name_desc") {
      return compareNames() * -1;
    }

    if (
      appState.gallerySortMode === "year_newest" ||
      appState.gallerySortMode === "year_oldest"
    ) {
      const startYearA = Number.isFinite(variantA?.startYear) ?
        variantA.startYear :
        null;

      const startYearB = Number.isFinite(variantB?.startYear) ?
        variantB.startYear :
        null;

      /*
        Unknown years always appear after known years.
      */
      if (startYearA === null && startYearB !== null) {
        return 1;
      }

      if (startYearA !== null && startYearB === null) {
        return -1;
      }

      if (
        startYearA !== null &&
        startYearB !== null &&
        startYearA !== startYearB
      ) {
        return appState.gallerySortMode === "year_newest" ?
          startYearB - startYearA :
          startYearA - startYearB;
      }

      return compareNames();
    }

    /*
      Default: Name A–Z.
    */
    return compareNames();
  });
}
/*
  Builds deduplicated gallery items from resolved WorkingPoolMembers.

  A gallery item is slightly richer than a WorkingPoolMember because it also
  records every selected collection that contributed to it.

  Dedupe key:
  - gallery variant ID if available
  - otherwise entity ID

  We avoid deduping by asset ID because different entities may intentionally
  share the same image.
*/
function buildDeduplicatedGalleryItems(members) {
  const itemsByKey = {};

  members.forEach(member => {
    const entity = dataIndex.entitiesById[member.entityId];

    if (!entity) {
      return;
    }

    const galleryVariantId = resolveGalleryVariantId(member, entity);
    const displayNameOverride = normaliseGalleryDisplayNameOverride(
      member.displayNameOverride
    );
    const answerAliases = normaliseGalleryAnswerAliases(
      member.answerAliases
    );

    /*
      If there is no gallery variant, we can still make a no-image card for
      the entity. Context labels are part of the key so, for example, Taiwan
      and Chinese Taipei can remain distinct when both appear together.
    */
    const dedupeKey = createGalleryItemDedupeKey({
      entityId: member.entityId,
      galleryVariantId,
      displayNameOverride
    });

    if (!itemsByKey[dedupeKey]) {
      itemsByKey[dedupeKey] = {
        entityId: member.entityId,
        galleryVariantId,
        displayNameOverride,
        answerAliases,
        sourceCollectionIds: new Set()
      };
    }

    answerAliases.forEach(alias => {
      if (!itemsByKey[dedupeKey].answerAliases.includes(alias)) {
        itemsByKey[dedupeKey].answerAliases.push(alias);
      }
    });

    /*
    Direct entity and variant selections do not have a collection source.
    */
    if (member.collectionId) {
      itemsByKey[dedupeKey].sourceCollectionIds.add(member.collectionId);
    }
  });

  const galleryItems = Object.values(itemsByKey).map(item => {
    return {
      entityId: item.entityId,
      galleryVariantId: item.galleryVariantId,
      displayNameOverride: item.displayNameOverride,
      answerAliases: item.answerAliases,
      sourceCollectionIds: Array.from(item.sourceCollectionIds)
    };
  });

  return sortGalleryItems(galleryItems);
}

/*
  Builds Gallery sections from WorkingPoolMembers.

  Collection sources each receive their own section.

  Explicit entity groups each retain their own bulk-action provenance.

  Temporary variant groups each retain their own source provenance.

  Individual direct entity and direct variant sources remain grouped by source
  type so the gallery does not create a separate heading for every selection.

  Deduplication happens inside each section only. Therefore, the same flag may
  appear in several source sections when several selections contribute it.
*/
function buildGallerySourceGroups(members) {
  const groups = [];

  /*
    Preserve the user's collection-selection order.

    JavaScript Sets retain insertion order, so selectedCollectionIds gives us
    a stable and understandable section order.
  */
  appState.selectedCollectionIds.forEach(collectionId => {
    const collection = dataIndex.collectionsById[collectionId];

    if (!collection) {
      return;
    }

    const collectionMembers = members.filter(member => {
      return (
        member.sourceType === "collection" &&
        member.sourceId === collectionId
      );
    });

    if (collectionMembers.length === 0) {
      return;
    }

    groups.push({
      id: `gallery_source_collection_${collectionId}`,
      sourceType: "collection",
      sourceId: collectionId,
      heading: collection.name,
      items: buildDeduplicatedGalleryItems(collectionMembers)
    });
  });

  /*
    Explicit bulk-selection groups each receive their own section.

    The heading records the Entity Detail page and relationship section that
    created the source instead of inferring a common ancestor afterwards.
  */
  appState.selectedEntityGroups.forEach(entityGroup => {
    const sourceEntity =
      dataIndex.entitiesById[entityGroup.sourceEntityId];

    if (!sourceEntity) {
      return;
    }

    const groupedMembers = members.filter(member => {
      return (
        member.sourceType === "entity_group" &&
        member.sourceId === entityGroup.id
      );
    });

    if (groupedMembers.length === 0) {
      return;
    }

    const groupTypeLabel =
      getEntitySelectionGroupDisplayLabel(entityGroup);

    groups.push({
      id: `gallery_source_${entityGroup.id}`,
      sourceType: "entity_group",
      sourceId: entityGroup.id,
      heading: `${sourceEntity.name} — ${groupTypeLabel}`,
      items: buildDeduplicatedGalleryItems(groupedMembers)
    });
  });

  /*
    Temporary grouped variant selections each receive their own section.

    This is used by Quiz Builder's Add to Gallery action, preserving each
    builder result as a separate source while combined Gallery can still
    deduplicate the displayed flags.
  */
  appState.selectedVariantGroups.forEach(variantGroup => {
    const groupedMembers = members.filter(member => {
      return (
        member.sourceType === "variant_group" &&
        member.sourceId === variantGroup.id
      );
    });

    if (groupedMembers.length === 0) {
      return;
    }

    groups.push({
      id: `gallery_source_${variantGroup.id}`,
      sourceType: "variant_group",
      sourceId: variantGroup.id,
      heading: variantGroup.label ?? "Variant group",
      items: buildDeduplicatedGalleryItems(groupedMembers)
    });
  });

  /*
    Directly selected entities share one section.
  */
  const directEntityMembers = members.filter(member => {
    return member.sourceType === "direct_entity";
  });

  if (directEntityMembers.length > 0) {
    groups.push({
      id: "gallery_source_direct_entities",
      sourceType: "direct_entity",
      sourceId: null,
      heading: "Direct entities",
      items: buildDeduplicatedGalleryItems(directEntityMembers)
    });
  }

  /*
    Directly selected variants share one section.
  */
  const directVariantMembers = members.filter(member => {
    return member.sourceType === "direct_variant";
  });

  if (directVariantMembers.length > 0) {
    groups.push({
      id: "gallery_source_direct_variants",
      sourceType: "direct_variant",
      sourceId: null,
      heading: "Direct variants",
      items: buildDeduplicatedGalleryItems(directVariantMembers)
    });
  }

  return groups;
}

/*
  Gets the most relevant stat record for a gallery card.

  Priority:
  1. Variant stats for the displayed gallery variant.
  2. Entity stats for the displayed entity.

  This lets the gallery show specific variant performance where possible,
  while still showing useful entity-level stats if no variant stats exist yet.
*/
function getGalleryStatRecord(galleryItem, mode) {
  const variantRecord = getStatRecord(
    "variant",
    galleryItem.galleryVariantId,
    mode
  );

  if (variantRecord && variantRecord.seen > 0) {
    return variantRecord;
  }

  const entityRecord = getStatRecord(
    "entity",
    galleryItem.entityId,
    mode
  );

  if (entityRecord && entityRecord.seen > 0) {
    return entityRecord;
  }

  return null;
}

/*
  Formats one compact stat line.

  Example:
  75% · 3/4 · 5.2s

  Meaning:
  accuracy · correct/seen · average response time
*/
function formatCompactStat(statRecord) {
  if (!statRecord || statRecord.seen === 0) {
    return "No data";
  }

  const accuracy = Math.round(
    (statRecord.correct / statRecord.seen) * 100
  );

  const averageTimeText =
    statRecord.averageResponseTime !== null &&
    statRecord.averageResponseTime !== undefined ?
    `${statRecord.averageResponseTime.toFixed(1)}s` :
    "—";

  return `${accuracy}% · ${statRecord.correct}/${statRecord.seen} · ${averageTimeText}`;
}

/*
  Creates the compact gallery stats block.

  Shows typing and multiple-choice separately because Vexillator stores
  quiz modes separately in localStorage.
*/
function createGalleryStatsElement(galleryItem) {
  const statsWrapper = document.createElement("div");
  statsWrapper.className = "flag-card-stats";

  const typingRecord = getGalleryStatRecord(galleryItem, "typing");
  const multipleChoiceRecord = getGalleryStatRecord(galleryItem, "multiple_choice");

  const typingElement = document.createElement("p");
  typingElement.className = "flag-card-meta";
  typingElement.textContent = `Typing: ${formatCompactStat(typingRecord)}`;

  const multipleChoiceElement = document.createElement("p");
  multipleChoiceElement.className = "flag-card-meta";
  multipleChoiceElement.textContent = `MCQ: ${formatCompactStat(multipleChoiceRecord)}`;

  statsWrapper.appendChild(typingElement);
  statsWrapper.appendChild(multipleChoiceElement);

  return statsWrapper;
}


function appendGalleryCardDetailButton(bodyElement, variant) {
  if (!bodyElement || !variant) {
    return;
  }

  const detailButton = document.createElement("button");
  detailButton.type = "button";
  detailButton.className = "entity-selection-action flag-card-detail-button";
  detailButton.textContent = "View flag details";

  detailButton.addEventListener("click", event => {
    event.stopPropagation();

    openVariantDetailView(variant.id, {
      sourceMode: "gallery"
    });
  });

  detailButton.addEventListener("keydown", event => {
    event.stopPropagation();
  });

  bodyElement.appendChild(detailButton);
}

/*
  Creates one gallery card from a deduplicated gallery item.

  The image is always shown.

  The card body changes depending on appState.galleryDetailsMode:
  - full: name, variant, aliases, years and collections
  - name: entity name only
  - name_year: entity name plus active years
  - stats: compact quiz statistics
  - image: image only, no text body

  The zoom viewer replicates the current gallery view.
*/
function createFlagCard(galleryItem, galleryItems) {
  const entity = dataIndex.entitiesById[galleryItem.entityId];

  const variant = galleryItem.galleryVariantId ?
    dataIndex.variantsById[galleryItem.galleryVariantId] :
    null;

  const asset = variant ?
    dataIndex.assetsById[variant.assetId] :
    null;

  const sourceCollectionNames = galleryItem.sourceCollectionIds
    .map(collectionId => dataIndex.collectionsById[collectionId])
    .filter(Boolean)
    .map(collection => collection.name);

  const cardElement = document.createElement("article");
  cardElement.className = "flag-card";

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "flag-image-wrapper";

  if (asset) {
    const imageElement = document.createElement("img");
    imageElement.className = "flag-image";
    imageElement.loading = "lazy";
    imageElement.decoding = "async";
    imageElement.src = asset.path;

    /*
      Keep alt text descriptive even when the visible card mode is image-only.
    */
    const entityDisplayName = getGalleryItemEntityDisplayName(
      galleryItem,
      entity
    );

    imageElement.alt = entity && variant ?
      `${entityDisplayName} - ${variant.displayName}` :
      "Flag image";

    imageWrapper.appendChild(imageElement);
  } else {
    imageWrapper.textContent = "No image available";
  }

  cardElement.appendChild(imageWrapper);

  /*
    Image-only mode deliberately stops here.

    The card remains clickable because renderGallery() adds the click listener.
  */
  if (appState.galleryDetailsMode === "image") {
    return cardElement;
  }

  const bodyElement = document.createElement("div");
  bodyElement.className = "flag-card-body";

  const titleElement = document.createElement("h3");
  titleElement.className = "flag-card-title";

  /*
    Use the shortest clear gallery label.

    If the entity appears only once, show just the entity name.
    If it appears more than once, include the variant name.
  */
  titleElement.textContent = getGalleryCardTitle(
    galleryItem,
    galleryItems,
    entity,
    variant
  );

  bodyElement.appendChild(titleElement);

  /*
    Name Only mode stops after the title.
  */
  if (appState.galleryDetailsMode === "name") {
    appendGalleryCardDetailButton(bodyElement, variant);
    cardElement.appendChild(bodyElement);
    return cardElement;
  }

  /*
    Name + Year mode shows only the title and active years.
  */
  if (appState.galleryDetailsMode === "name_year") {
    const yearsText = formatVariantYears(variant);

    if (yearsText) {
      const yearsElement = document.createElement("p");
      yearsElement.className = "flag-card-meta";
      yearsElement.textContent = yearsText;

      bodyElement.appendChild(yearsElement);
    }

    appendGalleryCardDetailButton(bodyElement, variant);
    cardElement.appendChild(bodyElement);
    return cardElement;
  }

  /*
    Stats mode shows compact quiz performance.

    It prefers variant stats but falls back to entity stats if the specific
    variant has not yet been quizzed.
  */
  if (appState.galleryDetailsMode === "stats") {
    const statsElement = createGalleryStatsElement(galleryItem);

    bodyElement.appendChild(statsElement);
    appendGalleryCardDetailButton(bodyElement, variant);
    cardElement.appendChild(bodyElement);

    return cardElement;
  }

  /*
    Default Full Details mode.
  */
  const titleAlreadyIncludesVariant =
    entityAppearsMoreThanOnceInGallery(galleryItem, galleryItems);

  /*
    When the title contains only the entity name, show the variant beneath it.

    When the title already includes the variant name, do not repeat it.
  */
  if (!titleAlreadyIncludesVariant) {
    const subtitleElement = document.createElement("p");
    subtitleElement.className = "flag-card-subtitle";
    subtitleElement.textContent = variant ?
      variant.displayName :
      "No variant";

    bodyElement.appendChild(subtitleElement);
  }

  /*
    Variant aliases appear only in Full Details mode.
  */
  if (variant && variant.aliases.length > 0) {
    const aliasesElement = document.createElement("p");
    aliasesElement.className = "flag-card-meta";
    aliasesElement.textContent =
      `Aliases: ${variant.aliases.join(", ")}`;

    bodyElement.appendChild(aliasesElement);
  }

  const yearsText = formatVariantYears(variant);

  if (yearsText) {
    const yearsElement = document.createElement("p");
    yearsElement.className = "flag-card-meta";
    yearsElement.textContent = yearsText;

    bodyElement.appendChild(yearsElement);
  }

  const collectionsElement = document.createElement("p");
  collectionsElement.className = "flag-card-meta";

  collectionsElement.textContent = sourceCollectionNames.length > 0 ?
    `Collections: ${sourceCollectionNames.join(", ")}` :
    "Collections: none";

  bodyElement.appendChild(collectionsElement);
  appendGalleryCardDetailButton(bodyElement, variant);
  cardElement.appendChild(bodyElement);

  return cardElement;
}

/*
  Gallery variant fallback order.

  According to the blueprint:

  collectionMember.galleryVariantId
  → collectionMember.quizVariantId
  → entity.defaultVariantId
  → no image
*/
function resolveGalleryVariantId(member, entity) {
  if (member.galleryVariantId) {
    return member.galleryVariantId;
  }

  if (member.quizVariantId) {
    return member.quizVariantId;
  }

  if (entity && entity.defaultVariantId) {
    return entity.defaultVariantId;
  }

  return null;
}
