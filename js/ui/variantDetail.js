/*
  js/ui/variantDetail.js

  Renders one user-facing flag-variant detail page.

  This page explains the selected flag design without exposing internal variant
  IDs, asset IDs or file paths to normal users.
*/

function getVariantDetailSortKey(variant, entity) {
  if (!variant) {
    return "";
  }

  if (entity && variant.id === entity.defaultVariantId) {
    return `000_${variant.displayName}`;
  }

  const isTechnical = variant.tags?.includes("text_removed") ?? false;

  return `${isTechnical ? "200" : "100"}_${variant.displayName}`;
}

function getEntityVariantsForVariantDetail(entityId) {
  const entity = dataIndex.entitiesById[entityId];

  return Object.values(dataIndex.variantsById)
    .filter(variant => variant.entityId === entityId)
    .sort((a, b) => {
      return getVariantDetailSortKey(a, entity)
        .localeCompare(getVariantDetailSortKey(b, entity));
    });
}

function normaliseVariantDetailSourceMode(sourceMode) {
  const allowedModes = new Set([
    "search",
    "entity",
    "gallery",
    "typing",
    "multipleChoice",
    "randomQuiz",
    "stats"
  ]);

  if (allowedModes.has(sourceMode)) {
    return sourceMode;
  }

  if (allowedModes.has(appState.activeMode)) {
    return appState.activeMode;
  }

  return null;
}

function getVariantDetailReturnLabel(returnMode) {
  const labelsByMode = {
    search: "Search",
    entity: "Entity",
    gallery: "Gallery",
    typing: "Typing Quiz",
    multipleChoice: "Multiple-Choice Quiz",
    randomQuiz: "Quiz Builder",
    stats: "Stats"
  };

  return labelsByMode[returnMode] ?? "previous view";
}

function openVariantDetailView(variantId, options = {}) {
  const variant = dataIndex.variantsById[variantId];

  if (!variant) {
    console.error(`Cannot open missing variant: ${variantId}`);
    return;
  }

  const entity = dataIndex.entitiesById[variant.entityId];

  if (!entity) {
    console.error(
      `Cannot open variant ${variantId} because its entity is missing.`
    );
    return;
  }

  closeBrowsePanel({
    returnFocus: false
  });

  appState.variantView.activeVariantId = variant.id;
  appState.variantView.returnContext = {
    mode: normaliseVariantDetailSourceMode(options.sourceMode),
    entityId: entity.id,
    variantId: variant.id
  };

  /*
    Keep Entity Detail ready as a nearby context page without forcing the user
    away from Variant Detail.
  */
  appState.entityView.activeEntityId = entity.id;
  appState.entityView.focusedVariantId = variant.id;

  renderVariantDetailView();
  showModePanel("variant");
}

function returnFromVariantDetail() {
  const returnContext = appState.variantView.returnContext;
  const returnMode = returnContext?.mode;

  if (returnMode === "entity") {
    const variant = dataIndex.variantsById[
      appState.variantView.activeVariantId
    ];

    if (variant) {
      openEntityView(variant.entityId, variant.id, {
        recordHistory: false
      });
      return;
    }
  }

  if (returnMode) {
    showModePanel(returnMode);
    return;
  }

  const variant = dataIndex.variantsById[
    appState.variantView.activeVariantId
  ];

  if (variant) {
    openEntityView(variant.entityId, variant.id, {
      recordHistory: false
    });
  } else {
    showModePanel("search");
  }
}

function createVariantDetailBackButton() {
  const returnMode = appState.variantView.returnContext?.mode;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "variant-detail-back-button";
  button.textContent = `← Back to ${getVariantDetailReturnLabel(returnMode)}`;

  button.addEventListener("click", () => {
    returnFromVariantDetail();
  });

  return button;
}

function createVariantDetailBadge(label, className = "") {
  const badge = document.createElement("span");
  badge.className = `variant-detail-badge ${className}`.trim();
  badge.textContent = label;

  return badge;
}

function formatVariantDetailTagLabel(tag) {
  const labelsByTag = {
    official: "Official",
    unofficial: "Unofficial",
    current: "Current",
    historical: "Historical",
    national: "National",
    civil: "Civil",
    state: "State",
    regional: "Regional",
    municipal: "Municipal",
    organisation: "Organisation",
    quiz: "Quiz variant",
    text_removed: "Text removed"
  };

  return labelsByTag[tag] ?? tag
    .split("_")
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function createVariantDetailStatusList(variant) {
  const wrapper = document.createElement("div");
  wrapper.className = "variant-detail-badges";

  const tags = Array.isArray(variant.tags) ? variant.tags : [];

  if (tags.length === 0) {
    wrapper.appendChild(
      createVariantDetailBadge("No status tags", "muted")
    );
    return wrapper;
  }

  tags.forEach(tag => {
    wrapper.appendChild(
      createVariantDetailBadge(formatVariantDetailTagLabel(tag))
    );
  });

  return wrapper;
}

function createVariantDetailPreview(variant, entity) {
  const asset = dataIndex.assetsById[variant.assetId];

  const previewSection = document.createElement("section");
  previewSection.className = "variant-detail-preview";

  const previewButton = document.createElement("button");
  previewButton.type = "button";
  previewButton.className = "variant-detail-preview-button";
  previewButton.setAttribute(
    "aria-label",
    `Open ${entity.name} - ${variant.displayName} in zoom viewer`
  );

  if (asset) {
    const imageElement = document.createElement("img");
    imageElement.className = "variant-detail-image";
    imageElement.src = asset.path;
    imageElement.alt = `${entity.name} - ${variant.displayName}`;

    previewButton.appendChild(imageElement);
  } else {
    const missingElement = document.createElement("span");
    missingElement.className = "variant-detail-missing-image";
    missingElement.textContent = "No image available";

    previewButton.appendChild(missingElement);
    previewButton.disabled = true;
  }

  previewButton.addEventListener("click", () => {
    openVariantDetailZoom(variant, entity);
  });

  previewSection.appendChild(previewButton);

  return previewSection;
}

function openVariantDetailZoom(variant, entity) {
  if (!variant || !entity) {
    return;
  }

  const entityVariants = getEntityVariantsForVariantDetail(entity.id);

  const zoomItems = entityVariants.map(entityVariant => {
    return {
      entityId: entity.id,
      galleryVariantId: entityVariant.id,
      sourceCollectionIds: []
    };
  });

  const zoomIndex = zoomItems.findIndex(item => {
    return item.galleryVariantId === variant.id;
  });

  if (zoomIndex < 0) {
    return;
  }

  setGalleryZoomContext("entity", zoomItems, zoomIndex);
  appState.entityView.activeEntityId = entity.id;
  appState.entityView.focusedVariantId = variant.id;

  showGalleryZoomOverlay(zoomIndex);
}

function createVariantDetailSummary(variant, entity) {
  const summaryElement = document.createElement("section");
  summaryElement.className = "variant-detail-summary";

  const headingGroup = document.createElement("div");
  headingGroup.className = "variant-detail-heading-group";

  const titleElement = document.createElement("h2");
  titleElement.textContent = entity.name;

  const subtitleElement = document.createElement("p");
  subtitleElement.className = "variant-detail-subtitle";
  subtitleElement.textContent = variant.displayName;

  headingGroup.appendChild(titleElement);
  headingGroup.appendChild(subtitleElement);

  if (variant.aliases.length > 0) {
    const aliasesElement = document.createElement("p");
    aliasesElement.className = "variant-detail-meta";
    aliasesElement.textContent = `Also known as: ${variant.aliases.join(", ")}`;

    headingGroup.appendChild(aliasesElement);
  }

  const yearsText = formatVariantYears(variant);

  if (yearsText) {
    const yearsElement = document.createElement("p");
    yearsElement.className = "variant-detail-meta";
    yearsElement.textContent = yearsText;

    headingGroup.appendChild(yearsElement);
  }

  headingGroup.appendChild(createVariantDetailStatusList(variant));

  const entityButton = document.createElement("button");
  entityButton.type = "button";
  entityButton.className = "variant-detail-secondary-button";
  entityButton.textContent = "View entity";

  entityButton.addEventListener("click", () => {
    openEntityView(entity.id, variant.id, {
      recordHistory: false
    });
  });

  headingGroup.appendChild(entityButton);

  summaryElement.appendChild(headingGroup);
  summaryElement.appendChild(createVariantDetailPreview(variant, entity));

  return summaryElement;
}

function createVariantDetailAboutSection(variant, entity) {
  const section = document.createElement("section");
  section.className = "variant-detail-section";

  const heading = document.createElement("h3");
  heading.textContent = "About this flag";
  section.appendChild(heading);

  const list = document.createElement("dl");
  list.className = "variant-detail-facts";

  function addFact(label, value) {
    if (!value) {
      return;
    }

    const term = document.createElement("dt");
    term.textContent = label;

    const description = document.createElement("dd");
    description.textContent = value;

    list.appendChild(term);
    list.appendChild(description);
  }

  addFact("Represents", entity.name);
  addFact("Flag", variant.displayName);
  addFact("Years", formatVariantYears(variant));

  if (variant.tags?.includes("text_removed")) {
    addFact(
      "Quiz use",
      "This is a quiz-safe version. The normal flag is shown after the answer is revealed."
    );
  }

  if (variant.alternativeAssetIds?.length > 0) {
    addFact(
      "Renditions",
      `${variant.alternativeAssetIds.length + 1} visual renditions available in zoom.`
    );
  }

  section.appendChild(list);

  return section;
}

function createVariantDetailColourList(colours, emptyLabel) {
  const list = document.createElement("div");
  list.className = "variant-detail-colour-list";

  if (!Array.isArray(colours) || colours.length === 0) {
    const emptyElement = document.createElement("p");
    emptyElement.className = "empty-message";
    emptyElement.textContent = emptyLabel;

    list.appendChild(emptyElement);
    return list;
  }

  colours.forEach(colour => {
    const item = document.createElement("span");
    item.className = "variant-detail-colour-chip";
    item.textContent = formatVariantDetailTagLabel(colour);

    list.appendChild(item);
  });

  return list;
}

function createVariantDetailDesignSection(variant) {
  const section = document.createElement("section");
  section.className = "variant-detail-section";

  const heading = document.createElement("h3");
  heading.textContent = "Design information";
  section.appendChild(heading);

  const metadata = getVisualMetadataForVariant(dataIndex, variant);

  if (!metadata) {
    const emptyElement = document.createElement("p");
    emptyElement.className = "empty-message";
    emptyElement.textContent = "No detected visual metadata is available yet.";

    section.appendChild(emptyElement);
    return section;
  }

  const primaryLabel = document.createElement("p");
  primaryLabel.className = "variant-detail-meta";
  primaryLabel.textContent = "Detected colours";
  section.appendChild(primaryLabel);
  section.appendChild(
    createVariantDetailColourList(
      metadata.colours,
      "No detected colours available."
    )
  );

  if (Array.isArray(metadata.accentColours) && metadata.accentColours.length > 0) {
    const accentLabel = document.createElement("p");
    accentLabel.className = "variant-detail-meta";
    accentLabel.textContent = "Accent colours";
    section.appendChild(accentLabel);
    section.appendChild(
      createVariantDetailColourList(metadata.accentColours, "")
    );
  }

  if (Array.isArray(metadata.traceColours) && metadata.traceColours.length > 0) {
    const traceLabel = document.createElement("p");
    traceLabel.className = "variant-detail-meta";
    traceLabel.textContent = "Trace colours";
    section.appendChild(traceLabel);
    section.appendChild(
      createVariantDetailColourList(metadata.traceColours, "")
    );
  }

  return section;
}

function createVariantDetailRelatedCard(relatedVariant, relationshipLabel) {
  const relatedEntity = dataIndex.entitiesById[relatedVariant.entityId];
  const asset = dataIndex.assetsById[relatedVariant.assetId];

  const card = document.createElement("article");
  card.className = "variant-detail-related-card";
  card.dataset.variantId = relatedVariant.id;

  if (asset) {
    const image = document.createElement("img");
    image.className = "variant-detail-related-image";
    image.src = asset.path;
    image.alt = relatedEntity
      ? `${relatedEntity.name} - ${relatedVariant.displayName}`
      : relatedVariant.displayName;

    card.appendChild(image);
  }

  const body = document.createElement("div");
  body.className = "variant-detail-related-body";

  const title = document.createElement("h4");
  title.textContent = relatedVariant.displayName;
  body.appendChild(title);

  if (relationshipLabel) {
    const relationship = document.createElement("p");
    relationship.className = "variant-detail-meta";
    relationship.textContent = relationshipLabel;
    body.appendChild(relationship);
  }

  const yearsText = formatVariantYears(relatedVariant);

  if (yearsText) {
    const years = document.createElement("p");
    years.className = "variant-detail-meta";
    years.textContent = yearsText;
    body.appendChild(years);
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = "variant-detail-secondary-button";
  button.textContent = "View details";

  button.addEventListener("click", () => {
    openVariantDetailView(relatedVariant.id, {
      sourceMode: appState.variantView.returnContext?.mode ?? "entity"
    });
  });

  body.appendChild(button);
  card.appendChild(body);

  return card;
}

function createVariantDetailRelatedSection(variant, entity) {
  const section = document.createElement("section");
  section.className = "variant-detail-section";

  const heading = document.createElement("h3");
  heading.textContent = "Related flags";
  section.appendChild(heading);

  const relatedCards = [];

  const relationships = [
    {
      key: "alternatives",
      label: "Alternative design"
    },
    {
      key: "reverses",
      label: "Other side"
    }
  ];

  relationships.forEach(relationship => {
    const relatedVariantIds = variant.relatedVariants?.[relationship.key] ?? [];

    relatedVariantIds.forEach(relatedVariantId => {
      const relatedVariant = dataIndex.variantsById[relatedVariantId];

      if (relatedVariant) {
        relatedCards.push(
          createVariantDetailRelatedCard(relatedVariant, relationship.label)
        );
      }
    });
  });

  const otherEntityVariants = getEntityVariantsForVariantDetail(entity.id)
    .filter(entityVariant => entityVariant.id !== variant.id)
    .filter(entityVariant => {
      return !relatedCards.some(card => {
        return card.dataset.variantId === entityVariant.id;
      });
    });

  otherEntityVariants.forEach(otherVariant => {
    relatedCards.push(
      createVariantDetailRelatedCard(otherVariant, "Another flag for this entity")
    );
  });

  if (relatedCards.length === 0) {
    const emptyElement = document.createElement("p");
    emptyElement.className = "empty-message";
    emptyElement.textContent = "No other variants are recorded for this entity.";

    section.appendChild(emptyElement);
    return section;
  }

  const list = document.createElement("div");
  list.className = "variant-detail-related-list";

  relatedCards.forEach(card => {
    list.appendChild(card);
  });

  section.appendChild(list);

  return section;
}

function renderVariantDetailView() {
  const container = document.getElementById("variantView");

  if (!container) {
    return;
  }

  const variantId = appState.variantView.activeVariantId;

  if (!variantId) {
    container.innerHTML = `
      <p class="empty-message">No flag variant selected.</p>
    `;
    return;
  }

  const variant = dataIndex.variantsById[variantId];

  if (!variant) {
    container.innerHTML = `
      <p class="empty-message">The selected flag variant could not be found.</p>
    `;
    return;
  }

  const entity = dataIndex.entitiesById[variant.entityId];

  if (!entity) {
    container.innerHTML = `
      <p class="empty-message">The selected flag's entity could not be found.</p>
    `;
    return;
  }

  container.innerHTML = "";

  const wrapper = document.createElement("article");
  wrapper.className = "variant-detail";

  wrapper.appendChild(createVariantDetailBackButton());
  wrapper.appendChild(createVariantDetailSummary(variant, entity));
  wrapper.appendChild(createVariantDetailAboutSection(variant, entity));
  wrapper.appendChild(createVariantDetailDesignSection(variant));
  wrapper.appendChild(createVariantDetailRelatedSection(variant, entity));

  container.appendChild(wrapper);
}
