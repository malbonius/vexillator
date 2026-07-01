/*
  Gallery zoom viewer module.

  This file owns the shared zoom overlay used by Gallery, Entity Detail and
  quiz image inspection. It is loaded as a normal script so the existing
  local-file workflow can keep using global functions.
*/

function setupGalleryZoomViewer() {

  const overlay = document.getElementById("galleryZoomOverlay");
  const closeButton = document.getElementById("closeGalleryZoomButton");
  const previousButton = document.getElementById("previousGalleryZoomButton");
  const nextButton = document.getElementById("nextGalleryZoomButton");
  const viewEntityButton = document.getElementById(
    "viewGalleryZoomEntityButton"
  );
  const reverseButton = document.getElementById(
    "galleryZoomReverseButton"
  );
  const alternativeButton = document.getElementById(
  "galleryZoomAlternativeButton"
  );
  const renditionButton = document.getElementById(
    "galleryZoomRenditionButton"
  );

  if (!overlay || !closeButton) {
    return;
  }

  closeButton.addEventListener("click", () => {
    closeGalleryZoom();
  });


  if (previousButton) {
    previousButton.addEventListener("click", () => {
      moveGalleryZoom(-1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      moveGalleryZoom(1);
    });
  }

  if (alternativeButton) {
  alternativeButton.addEventListener("click", () => {
    cycleGalleryZoomRelatedVariants("alternatives");
    });
  }

  if (renditionButton) {
    renditionButton.addEventListener("click", () => {
      cycleGalleryZoomRenditions();
    });
  }

  if (reverseButton) {
    reverseButton.addEventListener("click", () => {
      cycleGalleryZoomRelatedVariants("reverses");
    });
  }

  /*
    Open the entity represented by the currently displayed zoom item.

    If the item has a specific variant, focus that variant on the Entity page.
  */
  if (viewEntityButton) {
    viewEntityButton.addEventListener("click", () => {
      const currentItem =
        appState.galleryZoom.items[appState.galleryZoom.currentIndex];

      if (!currentItem) {
        return;
      }

      closeGalleryZoom();

      openEntityView(
        currentItem.entityId,
        currentItem.galleryVariantId
      );
    });
  }

  /*
    Clicking the dark overlay outside the viewer closes the zoom.
  */
  overlay.addEventListener("click", event => {
    if (event.target === overlay) {
      closeGalleryZoom();
    }
  });

  /*
    Keyboard controls only work while the zoom overlay is open.
  */
  document.addEventListener("keydown", event => {
    if (overlay.classList.contains("hidden")) {
      return;
    }

    if (event.key === "Escape") {
      closeGalleryZoom();
    }

        /*
      Quiz zoom contains only the current image, so left/right navigation is
      deliberately disabled.
    */
    if (appState.galleryZoom.sourceMode === "quiz") {
      return;
    }

    if (event.key === "ArrowLeft") {
      moveGalleryZoom(-1);
    }

    if (event.key === "ArrowRight") {
      moveGalleryZoom(1);
    }
  });
}

function openGalleryZoom() {
  const overlay = document.getElementById("galleryZoomOverlay");

  if (!overlay) {
    return;
  }

  /*
    While zoom is open, lock the document behind it.

    This prevents mobile browsers from scrolling the Gallery, Entity page or
    quiz screen underneath the overlay.
  */
  document.documentElement.classList.add("zoom-open");
  document.body.classList.add("zoom-open");

  overlay.classList.remove("hidden");
}

/*
  Replaces the complete zoom context before opening an item.

  Keeping this in one helper prevents Gallery and Entity Detail from
  accidentally reusing each other's item lists.
*/
function setGalleryZoomContext(
  sourceMode,
  items,
  currentIndex = 0
) {
  appState.galleryZoom.sourceMode = sourceMode;
  appState.galleryZoom.items = items;
  appState.galleryZoom.currentIndex = currentIndex;

  /*
    Every new zoom context begins on the variant represented by its item.
  */
  appState.galleryZoom.activeRelatedType = null;
  appState.galleryZoom.activeRelatedVariantId = null;
  appState.galleryZoom.activeAssetId = null;
  appState.galleryZoom.activeRelatedSourceVariantId = null;
}

/*
  Opens a stripped-back zoom view for the quiz image currently on screen.

  Quiz zoom displays only the image:
  - no title or metadata;
  - no View entity action;
  - no previous/next controls.
*/
function openQuizImageZoom(imageElement) {
  if (!imageElement?.src) {
    return;
  }

  setGalleryZoomContext(
    "quiz",
    [
      {
        imagePath: imageElement.src,
        imageAlt: imageElement.alt || "Flag quiz image"
      }
    ],
    0
  );

  showGalleryZoomOverlay(0);
}

function showGalleryZoomOverlay(index) {
  const items = appState.galleryZoom.items;

  if (!items.length || index < 0 || index >= items.length) {
    return;
  }

  appState.galleryZoom.currentIndex = index;
  /*
    Opening a Gallery or Entity Detail item always begins on that item's
    original variant rather than a related variant previously inspected.
  */
  appState.galleryZoom.activeRelatedType = null;
  appState.galleryZoom.activeRelatedVariantId = null;
  appState.galleryZoom.activeAssetId = null;
  appState.galleryZoom.activeRelatedSourceVariantId = null;

  /*
  Render the zoom item using the current gallery detail mode.
  This keeps the zoom viewer visually consistent with the gallery grid.
  */
  renderGalleryZoomItem();
  openGalleryZoom();
}

/*
  Returns the variant anchored to the current Gallery or Entity Detail item.

  Quiz zoom contains only a raw image and therefore has no anchored variant.
*/
function getGalleryZoomAnchorVariant() {
  const item =
    appState.galleryZoom.items[
      appState.galleryZoom.currentIndex
    ];

  if (!item?.galleryVariantId) {
    return null;
  }

  return dataIndex.variantsById[item.galleryVariantId] ?? null;
}

/*
  Returns the variant currently displayed inside zoom.

  Normally this is the anchored item variant. A related reverse or alternative
  may temporarily replace it without changing the Gallery item itself.
*/
function getDisplayedGalleryZoomVariant() {
  const relatedVariantId =
    appState.galleryZoom.activeRelatedVariantId;

  if (relatedVariantId) {
    return dataIndex.variantsById[relatedVariantId] ?? null;
  }

  return getGalleryZoomAnchorVariant();
}

/*
  Returns every valid visual rendition belonging to one semantic variant.

  The primary asset is always first, followed by alternativeAssetIds.
*/
function getVariantRenditionAssetIds(variant) {
  if (!variant) {
    return [];
  }

  return [
    variant.assetId,
    ...(variant.alternativeAssetIds ?? [])
  ].filter(assetId => {
    return Boolean(dataIndex.assetsById[assetId]);
  });
}

/*
  Returns the asset currently displayed inside zoom.

  A temporary rendition asset takes priority over the variant's primary asset.
*/
function getDisplayedGalleryZoomAsset(variant) {
  const activeAssetId =
    appState.galleryZoom.activeAssetId;

  if (activeAssetId) {
    return dataIndex.assetsById[activeAssetId] ?? null;
  }

  return variant
    ? dataIndex.assetsById[variant.assetId] ?? null
    : null;
}

/*
  Cycles through visual renditions of the currently displayed semantic
  variant.

  This does not change variant identity, Gallery membership or quiz state.
*/
function cycleGalleryZoomRenditions() {
  const variant = getDisplayedGalleryZoomVariant();

  if (!variant) {
    return;
  }

  const renditionAssetIds =
    getVariantRenditionAssetIds(variant);

  if (renditionAssetIds.length < 2) {
    return;
  }

  const currentAssetId =
    appState.galleryZoom.activeAssetId ??
    variant.assetId;

  const currentIndex =
    renditionAssetIds.indexOf(currentAssetId);

  const nextIndex =
    currentIndex >= 0
      ? (currentIndex + 1) % renditionAssetIds.length
      : 0;

  const nextAssetId =
    renditionAssetIds[nextIndex];

  appState.galleryZoom.activeAssetId =
    nextAssetId === variant.assetId
      ? null
      : nextAssetId;

  renderGalleryZoomItem();
}

/*
  Cycles related variants for the requested relationship type.

  Alternatives remain anchored to the original Gallery or Entity Detail item.

  Reverses are resolved from the semantic variant currently being displayed,
  so an alternative design only exposes an other side when that alternative
  itself declares one.
*/
function cycleGalleryZoomRelatedVariants(relationshipType) {
  const anchorVariant = getGalleryZoomAnchorVariant();
  const displayedVariant = getDisplayedGalleryZoomVariant();

  if (!anchorVariant || !displayedVariant) {
    return;
  }

  /*
    Alternatives describe designs related to the anchored Gallery item.

    Reverses describe another side of whichever semantic variant is currently
    displayed.
  */
  const relationshipSourceVariant =
    relationshipType === "reverses"
      ? (
          appState.galleryZoom.activeRelatedType === "reverses" &&
          appState.galleryZoom.activeRelatedSourceVariantId
            ? dataIndex.variantsById[
                appState.galleryZoom.activeRelatedSourceVariantId
              ] ?? displayedVariant
            : displayedVariant
        )
      : anchorVariant;

  const relatedVariantIds =
    relationshipSourceVariant
      .relatedVariants?.[relationshipType] ?? [];

  const validRelatedVariantIds =
    relatedVariantIds.filter(variantId => {
      return Boolean(dataIndex.variantsById[variantId]);
    });

  if (validRelatedVariantIds.length === 0) {
    return;
  }

  const isAlreadyCyclingThisType =
    appState.galleryZoom.activeRelatedType ===
    relationshipType;

  /*
    When a related variant is already shown, return to the variant from which
    that relationship was opened after the final related item.
  */
  const sourceVariantId =
    isAlreadyCyclingThisType
      ? appState.galleryZoom.activeRelatedSourceVariantId ??
        relationshipSourceVariant.id
      : relationshipSourceVariant.id;

  const cycleVariantIds = [
    sourceVariantId,
    ...validRelatedVariantIds
  ];

  const currentVariantId =
    isAlreadyCyclingThisType
      ? appState.galleryZoom.activeRelatedVariantId ??
        sourceVariantId
      : sourceVariantId;

  const currentCycleIndex =
    cycleVariantIds.indexOf(currentVariantId);

  const nextCycleIndex =
    currentCycleIndex >= 0
      ? (currentCycleIndex + 1) % cycleVariantIds.length
      : 1;

  const nextVariantId =
    cycleVariantIds[nextCycleIndex];

  if (nextVariantId === sourceVariantId) {
    /*
      Return to the source variant.

      If the source was the Gallery anchor, clear related state completely.
      Otherwise retain it as the currently displayed alternative.
    */
    if (sourceVariantId === anchorVariant.id) {
      appState.galleryZoom.activeRelatedType = null;
      appState.galleryZoom.activeRelatedVariantId = null;
    } else {
      appState.galleryZoom.activeRelatedType = "alternatives";
      appState.galleryZoom.activeRelatedVariantId =
        sourceVariantId;
    }

    appState.galleryZoom.activeRelatedSourceVariantId =
      null;
  } else {
    appState.galleryZoom.activeRelatedType =
      relationshipType;

    appState.galleryZoom.activeRelatedSourceVariantId =
      sourceVariantId;

    appState.galleryZoom.activeRelatedVariantId =
      nextVariantId;
  }

  /*
    A different semantic variant begins on its primary rendition.
  */
  appState.galleryZoom.activeAssetId = null;

  renderGalleryZoomItem();
}

function renderGalleryZoomItem() {
  const items = appState.galleryZoom.items;
  const currentIndex = appState.galleryZoom.currentIndex;
  const item = items[currentIndex];

  if (!item) {
    return;
  }

  const isQuizZoom =
  appState.galleryZoom.sourceMode === "quiz";

  /*
    Entity Detail zoom navigation updates the focused variant so that closing
    the viewer can return the user to the variant they were inspecting.
  */
  if (
    appState.galleryZoom.sourceMode === "entity" &&
    item.galleryVariantId
  ) {
    appState.entityView.focusedVariantId = item.galleryVariantId;
  }

  const entity = dataIndex.entitiesById[item.entityId];

    /*
    Related variants temporarily replace the anchored item variant only inside
    zoom. The Gallery item and currentIndex remain unchanged.
  */
  const anchorVariant = getGalleryZoomAnchorVariant();
  const variant = getDisplayedGalleryZoomVariant();

  /*
    The semantic variant may temporarily display one of its alternative visual
    renditions inside zoom.
  */
  const asset = getDisplayedGalleryZoomAsset(variant);

  /*
  Gallery items have source collections. Entity Detail zoom items will not
  necessarily have any collection provenance.
*/
  const sourceCollectionNames = (item.sourceCollectionIds || [])
    .map(collectionId => dataIndex.collectionsById[collectionId])
    .filter(Boolean)
    .map(collection => collection.name);

  const metaElement = document.getElementById("galleryZoomMeta");
  const viewEntityButton = document.getElementById(
    "viewGalleryZoomEntityButton"
  );

  const relatedControlsElement = document.getElementById(
    "galleryZoomRelatedControls"
  );

  const reverseButton = document.getElementById(
    "galleryZoomReverseButton"
  );

  const alternativeButton = document.getElementById(
  "galleryZoomAlternativeButton"
  );

  const renditionButton = document.getElementById(
    "galleryZoomRenditionButton"
  );

  const imageElement = document.getElementById("galleryZoomImage");
  const titleElement = document.getElementById("galleryZoomTitle");
  const subtitleElement = document.getElementById("galleryZoomSubtitle");

  const detailsElement = document.querySelector(
    "#galleryZoomOverlay .zoom-details"
  );

  const previousButton = document.getElementById(
    "previousGalleryZoomButton"
  );

  const nextButton = document.getElementById(
    "nextGalleryZoomButton"
  );

  if (
    !imageElement ||
    !titleElement ||
    !subtitleElement ||
    !metaElement
  ) {
    return;
  }
  
    /*
    Quiz zoom uses the image already displayed in the question rather than
    resolving an entity or variant again.

    This ensures the zoom changes automatically when feedback reveals the
    original flag.
  */
  if (isQuizZoom) {
    imageElement.src = item.imagePath || "";
    imageElement.alt = item.imageAlt || "Flag quiz image";

    titleElement.textContent = "";
    subtitleElement.textContent = "";
    metaElement.textContent = "";

	if (relatedControlsElement) {
      relatedControlsElement.hidden = true;
    }

    if (reverseButton) {
      reverseButton.hidden = true;
    }

    if (detailsElement) {
      detailsElement.hidden = true;
    }

    if (previousButton) {
      previousButton.hidden = true;
    }

    if (nextButton) {
      nextButton.hidden = true;
    }

    if (viewEntityButton) {
      viewEntityButton.hidden = true;
    }

	if (alternativeButton) {
      alternativeButton.hidden = true;
    }

	if (renditionButton) {
    renditionButton.hidden = true;
    }

    return;
  }

  /*
    Restore the normal controls when returning from quiz zoom to Gallery or
    Entity Detail zoom.
  */
  if (detailsElement) {
    detailsElement.hidden = false;
  }

  if (previousButton) {
    previousButton.hidden = false;
  }

  if (nextButton) {
    nextButton.hidden = false;
  }

  /*
  The other-side control belongs to the semantic variant currently visible,
  not necessarily the Gallery item's anchored variant.
*/
  const reverseSourceVariant =
    appState.galleryZoom.activeRelatedType === "reverses" &&
    appState.galleryZoom.activeRelatedSourceVariantId
      ? dataIndex.variantsById[
          appState.galleryZoom.activeRelatedSourceVariantId
        ] ?? variant
      : variant;

  const reverseVariantIds =
    reverseSourceVariant?.relatedVariants?.reverses ?? [];
	
/*
  Alternatives are genuine separate variants that can be inspected from the
  anchored Gallery or Entity Detail item.

  They remain zoom-only and do not enter the working pool automatically.
*/
  const alternativeVariantIds =
  anchorVariant?.relatedVariants?.alternatives ?? [];

  const validAlternativeVariantIds =
  alternativeVariantIds.filter(variantId => {
    return Boolean(dataIndex.variantsById[variantId]);
  });

  const hasValidAlternatives =
  validAlternativeVariantIds.length > 0;

  if (alternativeButton) {
  alternativeButton.hidden = !hasValidAlternatives;

  if (hasValidAlternatives) {
    const isShowingAlternative =
      appState.galleryZoom.activeRelatedType ===
      "alternatives";

    if (!isShowingAlternative) {
      alternativeButton.textContent =
        validAlternativeVariantIds.length === 1
          ? "Show alternative"
          : `Show alternatives (${validAlternativeVariantIds.length})`;
    } else {
      const currentAlternativeId =
        appState.galleryZoom.activeRelatedVariantId;

      const currentAlternativeIndex =
        validAlternativeVariantIds.indexOf(
          currentAlternativeId
        );

      const isLastAlternative =
        currentAlternativeIndex ===
        validAlternativeVariantIds.length - 1;

      alternativeButton.textContent =
        isLastAlternative
          ? "Show original design"
          : "Show next alternative";
    }
  }
}	

  /*
    Rendition controls operate on assets belonging to the currently displayed
    semantic variant, including a related alternative or reverse variant.
  */
  const renditionAssetIds =
    getVariantRenditionAssetIds(variant);

  const hasMultipleRenditions =
    renditionAssetIds.length > 1;

if (renditionButton) {
  renditionButton.hidden = !hasMultipleRenditions;

  if (hasMultipleRenditions) {
    const currentAssetId =
      appState.galleryZoom.activeAssetId ??
      variant.assetId;

    const currentRenditionIndex =
      renditionAssetIds.indexOf(currentAssetId);

    const isLastRendition =
      currentRenditionIndex ===
      renditionAssetIds.length - 1;

    if (appState.galleryZoom.activeAssetId === null) {
      renditionButton.textContent =
        renditionAssetIds.length === 2
          ? "Show other rendition"
          : `Show renditions (${renditionAssetIds.length - 1})`;
    } else {
      renditionButton.textContent =
        isLastRendition
          ? "Show primary rendition"
          : "Show next rendition";
    }
  }
}

  /*
  A reverse relationship currently applies only to the semantic variant's
  primary rendition.

  Alternative asset renditions hide the control unless asset-specific reverse
  relationships are introduced later.
*/
  const isShowingPrimaryRendition =
    appState.galleryZoom.activeAssetId === null;

  const hasValidReverse =
    isShowingPrimaryRendition &&
    reverseVariantIds.some(variantId => {
      return Boolean(dataIndex.variantsById[variantId]);
    });

  if (reverseButton) {
    reverseButton.hidden = !hasValidReverse;

    if (hasValidReverse) {
      const isShowingReverse =
        appState.galleryZoom.activeRelatedType ===
        "reverses";

      reverseButton.textContent = isShowingReverse
        ? "Show original side"
        : "Show other side";
    }
  }

  if (relatedControlsElement) {
    relatedControlsElement.hidden =
      !hasValidAlternatives &&
      !hasValidReverse &&
      !hasMultipleRenditions;
  }

  /*
  Gallery zoom can take the user to Entity Detail.

  Entity Detail zoom is already on that page, so showing the same action would
  be redundant.
	*/
  if (viewEntityButton) {
    viewEntityButton.hidden =
      appState.galleryZoom.sourceMode === "entity";
  }

  if (asset) {
    imageElement.src = asset.path;

    /*
      Alt text stays descriptive even if the selected display mode hides text.
      This keeps the zoom viewer accessible.
    */
    imageElement.alt =
      `${entity ? entity.name : "Unknown entity"} - ${variant ? variant.displayName : "Unknown variant"}`;
  } else {
    imageElement.src = "";
    imageElement.alt = "No image available";
  }

  /*
    Clear all text areas first.

    This prevents leftover subtitle/meta text from a previous zoom item
    appearing when switching to Image Only, Name Only, or another compact mode.
  */
  titleElement.textContent = "";
  subtitleElement.textContent = "";
  metaElement.textContent = "";

  /*
  Gallery zoom mirrors the selected Gallery Details mode.

  Entity Detail zoom always shows full variant information because it is an
  inspection view rather than a compact gallery presentation.
  */
  const mode = appState.galleryZoom.sourceMode === "entity" ?
    "full" :
    appState.galleryDetailsMode;

  /*
    Image Only mode keeps the zoom image but hides all text details.
  */
  if (mode === "image") {
    return;
  }

  /*
  Grouped Gallery items may carry the title determined within their original
  source section. Combined Gallery items continue to calculate it normally.
*/
  titleElement.textContent = item.zoomDisplayTitle ||
    getGalleryCardTitle(
      item,
      items,
      entity,
      variant
    );

  if (mode === "name") {
    return;
  }

  if (mode === "name_year") {
    subtitleElement.textContent = formatVariantYears(variant);
    return;
  }

  if (mode === "stats") {
    /*
      The zoom viewer uses the same compact stats text as the gallery cards,
      but writes it into the existing subtitle/meta lines.
    */
    const typingRecord = getGalleryStatRecord(item, "typing");
    const multipleChoiceRecord = getGalleryStatRecord(item, "multiple_choice");

    subtitleElement.textContent =
      `Typing: ${formatCompactStat(typingRecord)}`;

    metaElement.textContent =
      `MCQ: ${formatCompactStat(multipleChoiceRecord)}`;

    return;
  }

  /*
    Full Details mode.

    Gallery zoom uses shortest-clear gallery labels.

    Entity Detail zoom always shows the entity and exact variant separately,
    because the user is inspecting one particular variant rather than scanning
    a deduplicated gallery.
  */
  if (appState.galleryZoom.sourceMode === "entity") {
    titleElement.textContent = entity ?
      entity.name :
      "Unknown entity";

    subtitleElement.textContent = variant ?
      variant.displayName :
      "Unknown variant";

    const entityMetaParts = [];

    if (variant && variant.aliases.length > 0) {
      entityMetaParts.push(
        `Aliases: ${variant.aliases.join(", ")}`
      );
    }

    const yearsText = formatVariantYears(variant);

    if (yearsText) {
      entityMetaParts.push(yearsText);
    }


    if (variant?.tags.includes("text_removed")) {
      entityMetaParts.push(
        "Quiz-safe technical variant"
      );
    }

    metaElement.textContent = entityMetaParts.join(" · ");

    return;
  }

  const titleAlreadyIncludesVariant =
    typeof item.zoomTitleIncludesVariant === "boolean" ?
    item.zoomTitleIncludesVariant :
    entityAppearsMoreThanOnceInGallery(item, items);

  if (!titleAlreadyIncludesVariant) {
    subtitleElement.textContent = variant ?
      variant.displayName :
      "No variant";
  }

  const yearsText = formatVariantYears(variant);

  const metaParts = [];

  if (variant && variant.aliases.length > 0) {
    metaParts.push(
      `Aliases: ${variant.aliases.join(", ")}`
    );
  }

  if (yearsText) {
    metaParts.push(yearsText);
  }

  if (sourceCollectionNames.length > 0) {
    metaParts.push(
      `Collections: ${sourceCollectionNames.join(", ")}`
    );
  }

  metaElement.textContent = metaParts.join(" · ");
}

function closeGalleryZoom() {
  const overlay = document.getElementById("galleryZoomOverlay");

  if (!overlay) {
    return;
  }

  const wasEntityZoom =
    appState.galleryZoom.sourceMode === "entity";

  overlay.classList.add("hidden");

  /*
    Re-enable normal page scrolling after the zoom overlay closes.
  */
  document.documentElement.classList.remove("zoom-open");
  document.body.classList.remove("zoom-open");
  
  /*
    Related-variant inspection is temporary and must never change the Gallery
    or Entity Detail item that originally opened zoom.
  */
  appState.galleryZoom.activeRelatedType = null;
  appState.galleryZoom.activeRelatedVariantId = null;
  appState.galleryZoom.activeAssetId = null;  
  appState.galleryZoom.activeRelatedSourceVariantId = null;

  /*
    Re-render Entity Detail so the variant last viewed in zoom receives the
    existing focused styling.

    Gallery zoom does not need to re-render Entity Detail.
  */
  if (
    wasEntityZoom &&
    appState.entityView.activeEntityId
  ) {
    renderEntityView();
  }
}

function moveGalleryZoom(direction) {
  const items = appState.galleryZoom.items;

  if (!items.length) {
    return;
  }

  const currentIndex = appState.galleryZoom.currentIndex;
  const nextIndex = (currentIndex + direction + items.length) % items.length;

  appState.galleryZoom.currentIndex = nextIndex;
  /*
    Moving to another Gallery or Entity Detail item returns zoom to that
    item's anchored variant.
  */
  appState.galleryZoom.activeRelatedType = null;
  appState.galleryZoom.activeRelatedVariantId = null;
  appState.galleryZoom.activeAssetId = null;  
  appState.galleryZoom.activeRelatedSourceVariantId = null;
  
  renderGalleryZoomItem();
}
