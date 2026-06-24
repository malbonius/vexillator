/*
  Search View.

  Owns the Search tab input, result generation and result actions.
  This file intentionally uses the existing global Vexillator objects/functions
  because the app still loads plain browser scripts rather than ES modules.
*/

/*
  Sets up the search input.

  Every time the user types, we search across:
  - entities
  - variants
  - collections
  - collection groups
*/
function setupSearch() {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    renderSearchResults(query);
  });
}

/*
  Renders search results into the Search panel.
*/
function renderSearchResults(query) {
  const resultsElement = document.getElementById("searchResults");
  const normalisedQuery = normaliseSearchText(query);

  if (!normalisedQuery) {
    resultsElement.innerHTML = "";
    return;
  }

  const results = searchVexillator(normalisedQuery);

  if (results.length === 0) {
    resultsElement.innerHTML = `<p class="empty-message">No results found.</p>`;
    return;
  }

  resultsElement.innerHTML = "";

  const resultsWrapper = document.createElement("div");
  resultsWrapper.className = "search-results";

  results.forEach(result => {
    const resultElement = createSearchResultElement(result);
    resultsWrapper.appendChild(resultElement);
  });

  resultsElement.appendChild(resultsWrapper);
}

/*
  Searches the current data index.

  This is intentionally simple for V1.
  Later we can add ranking, fuzzy matching, filters and keyboard navigation.
*/
function searchVexillator(normalisedQuery) {
  const results = [];

  searchEntities(normalisedQuery, results);
  searchVariants(normalisedQuery, results);
  searchCollections(normalisedQuery, results);
  searchCollectionGroups(normalisedQuery, results);

  /*
    Sort by type first, then by label.
    This keeps results predictable.
  */
  results.sort((a, b) => {
    const typeCompare = a.type.localeCompare(b.type);

    if (typeCompare !== 0) {
      return typeCompare;
    }

    return a.label.localeCompare(b.label);
  });

  return results;
}

/*
  Entity search:
  matches entity name, aliases, ID and tags.
*/
function searchEntities(normalisedQuery, results) {
  Object.values(dataIndex.entitiesById).forEach(entity => {
    const searchableText = [
      entity.id,
      entity.name,
      ...entity.aliases,
      entity.entityType,
      ...entity.tags
    ].join(" ");

    if (normaliseSearchText(searchableText).includes(normalisedQuery)) {
      results.push({
        type: "entity",
        id: entity.id,
        label: entity.name,
        meta: `Tags: ${entity.tags.join(", ") || "none"}`
      });
    }
  });
}

/*
  Variant search:
  matches variant ID, display name, tags, and the parent entity name.
*/
function searchVariants(normalisedQuery, results) {
  Object.values(dataIndex.variantsById).forEach(variant => {
    const entity = dataIndex.entitiesById[variant.entityId];

    const searchableText = [
      variant.id,
      variant.displayName,
      ...variant.aliases,
      ...variant.tags,
      entity ? entity.name : "",
      entity ? entity.id : "",
      ...(entity ? entity.aliases : [])
    ].join(" ");

    if (normaliseSearchText(searchableText).includes(normalisedQuery)) {
      results.push({
        type: "variant",
        id: variant.id,
        label: entity ? `${entity.name} - ${variant.displayName}` : variant.displayName,
        meta: [
            variant.aliases.length > 0 ?
            `Aliases: ${variant.aliases.join(", ")}` :
            null,
            `Tags: ${variant.tags.join(", ") || "none"}`
          ]
          .filter(Boolean)
          .join(" · ")
      });
    }
  });
}

/*
  Collection search:
  matches collection ID and collection name.
*/
function searchCollections(normalisedQuery, results) {
  Object.values(dataIndex.collectionsById)
    .filter(isUserFacingCollection)
    .forEach(collection => {
      const searchableText = [
        collection.id,
        collection.name,
        collection.type,
        collection.target
      ].join(" ");

      if (normaliseSearchText(searchableText).includes(normalisedQuery)) {
        results.push({
          type: "collection",
          id: collection.id,
          label: collection.name,
          meta:
            `${collection.type} collection targeting ` +
            `${collection.target}`
        });
      }
    });
}

/*
  CollectionGroup search:
  matches group ID and group name.
*/
function searchCollectionGroups(normalisedQuery, results) {
  Object.values(dataIndex.collectionGroupsById)
    .filter(group => {
      return collectionGroupHasUserFacingContent(group.id);
    })
    .forEach(group => {
      const searchableText = [
        group.id,
        group.name
      ].join(" ");

      if (normaliseSearchText(searchableText).includes(normalisedQuery)) {
        const visibleDirectCollectionCount =
          group.collectionIds.filter(collectionId => {
            return isUserFacingCollection(
              dataIndex.collectionsById[collectionId]
            );
          }).length;

        results.push({
          type: "group",
          id: group.id,
          label: group.name,
          meta:
            `${visibleDirectCollectionCount} direct ` +
            `collection(s)`
        });
      }
    });
}

/*
  Returns the app-state Set used by a selectable search result.

  CollectionGroup results are currently informational only, so they do not
  have a corresponding selection Set.
*/
function getSelectionSetForSearchResult(resultType) {
  if (resultType === "collection") {
    return appState.selectedCollectionIds;
  }

  if (resultType === "entity") {
    return appState.selectedEntityIds;
  }

  if (resultType === "variant") {
    return appState.selectedVariantIds;
  }

  return null;
}

/*
  Adds or removes a selectable search result from the active selection.
*/
function toggleSearchResultSelection(result) {
  const selectionSet = getSelectionSetForSearchResult(result.type);

  if (!selectionSet) {
    return;
  }

  if (selectionSet.has(result.id)) {
    selectionSet.delete(result.id);
  } else {
    selectionSet.add(result.id);
  }

  /*
    This existing refresh function already updates the gallery and quiz
    question counts after a selection change.

    Its name is now slightly outdated, but we can rename it later when the
    Current Selection panel is introduced.
  */
  refreshAfterSelectionChange();
}

/*
  Creates one visible search result.

  Current actions:
  - collection results can be added or removed;
  - entity results can be added or removed directly;
  - variant results can be added or removed directly;
  - CollectionGroup results remain informational.
*/
function createSearchResultElement(result) {
  const resultElement = document.createElement("div");
  resultElement.className = "search-result";

  const titleElement = document.createElement("p");
  titleElement.className = "search-result-title";

  const typeElement = document.createElement("span");
  typeElement.className = "search-result-type";
  typeElement.textContent = result.type;

  const labelText = document.createTextNode(result.label);

  titleElement.appendChild(typeElement);
  titleElement.appendChild(labelText);

  const metaElement = document.createElement("p");
  metaElement.className = "search-result-meta";
  metaElement.textContent = result.meta;

  resultElement.appendChild(titleElement);
  resultElement.appendChild(metaElement);

  /*
  Entity and variant results can open the Entity detail view.

  Variant results open their parent entity and focus the selected variant.
  */
  if (result.type === "entity" || result.type === "variant") {
    const viewButton = document.createElement("button");
    viewButton.type = "button";
    viewButton.className = "search-result-action";

    viewButton.textContent = result.type === "entity" ?
      "View entity" :
      "View variant";

    viewButton.addEventListener("click", () => {
      if (result.type === "entity") {
        openEntityView(result.id);
        return;
      }

      const variant = dataIndex.variantsById[result.id];

      if (!variant) {
        console.error(`Cannot open missing variant: ${result.id}`);
        return;
      }

      openEntityView(variant.entityId, variant.id);
    });

    resultElement.appendChild(viewButton);
  }

  /*
    Collections, entities and variants are selectable working-pool sources.

    CollectionGroups are still navigation containers rather than direct
    working-pool sources.
  */
  const selectionSet = getSelectionSetForSearchResult(result.type);

  if (selectionSet) {
    const actionButton = document.createElement("button");
    actionButton.type = "button";
    actionButton.className = "search-result-action";

    const isSelected = selectionSet.has(result.id);

    if (
      result.type === "entity" &&
      !isSelected &&
      isEntitySelectedThroughGroup(result.id)
    ) {
      actionButton.title =
        "This entity is already active through a grouped source. " +
        "This action adds a separate direct entity source.";
    }

    if (result.type === "entity") {
      actionButton.textContent = isSelected ?
        "Remove direct entity" :
        "Add entity directly";
    } else if (result.type === "variant") {
      actionButton.textContent = isSelected ?
        "Remove direct variant" :
        "Add variant directly";
    } else {
      actionButton.textContent = isSelected ?
        "Remove from selection" :
        "Add to selection";
    }

    actionButton.addEventListener("click", () => {
      toggleSearchResultSelection(result);

      /*
        Re-render the current search so the button label reflects the new
        selection state immediately.
      */
      const searchInput = document.getElementById("searchInput");
      renderSearchResults(searchInput.value);
    });

    resultElement.appendChild(actionButton);
  }

  return resultElement;
}

/*
  Normalises text for search.

  This handles:
  - lowercase
  - leading/trailing spaces
  - repeated spaces
  - accents/diacritics
*/
function normaliseSearchText(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}
