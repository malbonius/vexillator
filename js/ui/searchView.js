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
  Search ranking priorities.

  Lower numbers appear first. These ranks are deliberately tiered rather than
  purely alphabetical so exact user intent is never buried by broad contains
  matches once the database becomes large.
*/
const searchTypeOrder = {
  entity: 0,
  variant: 1,
  collection: 2,
  group: 3
};

/*
  Searches the current data index.

  Ranking rules favour:
  - direct entity-name matches;
  - direct variant-label/name matches;
  - aliases;
  - collections and CollectionGroups;
  - low-priority metadata matches such as IDs and tags.

  Prefix matches outrank word-start matches. This prevents aliases such as
  "United Mexican States" from beating entity names such as
  "United Kingdom" when the user searches for "united".
*/
function searchVexillator(normalisedQuery) {
  const results = [];
  const directlyMatchedEntityIds = new Set();

  searchEntities(
    normalisedQuery,
    results,
    directlyMatchedEntityIds
  );

  searchVariants(normalisedQuery, results);
  searchCollections(normalisedQuery, results);
  searchCollectionGroups(normalisedQuery, results);
  searchUpwardContextEntities(
    results,
    directlyMatchedEntityIds
  );

  results.sort(compareSearchResults);

  return results;
}

/*
  Sorts search results by explicit match rank first, then by broad result type,
  then alphabetically.

  This means a complete entity match for "France" appears before France variants,
  collections or groups, regardless of their display names.
*/
function compareSearchResults(resultA, resultB) {
  const rankCompare =
    (resultA.searchRank ?? 999) -
    (resultB.searchRank ?? 999);

  if (rankCompare !== 0) {
    return rankCompare;
  }

  const typeCompare =
    (searchTypeOrder[resultA.type] ?? 99) -
    (searchTypeOrder[resultB.type] ?? 99);

  if (typeCompare !== 0) {
    return typeCompare;
  }

  return resultA.label.localeCompare(resultB.label);
}

/*
  Finds the best match among several searchable fields.

  Each field controls its own ranking tiers. For example, an exact entity-name
  match is stronger than an exact tag match, even though both are "exact" text
  comparisons.
*/
function getBestSearchFieldMatch(normalisedQuery, fields) {
  let bestMatch = null;

  fields.forEach(field => {
    const normalisedValue = normaliseSearchText(field.value);

    if (!normalisedValue) {
      return;
    }

    const matchRank = getSearchFieldMatchRank(
      normalisedQuery,
      normalisedValue,
      field
    );

    if (matchRank === null) {
      return;
    }

    if (
      !bestMatch ||
      matchRank < bestMatch.rank ||
      (
        matchRank === bestMatch.rank &&
        normalisedValue.length < bestMatch.valueLength
      )
    ) {
      bestMatch = {
        rank: matchRank,
        valueLength: normalisedValue.length,
        source: field.source ?? "matched text"
      };
    }
  });

  return bestMatch;
}

/*
  Returns the rank for one searchable field, or null when the field does not
  match the query.

  Prefix matches and word-start matches can use different ranks. This lets
  "United Kingdom" beat aliases such as "United Mexican States" for
  the query "united", while still letting "york" find "West Yorkshire".
*/
function getSearchFieldMatchRank(
  normalisedQuery,
  normalisedValue,
  field
) {
  if (
    typeof field.exactRank === "number" &&
    normalisedValue === normalisedQuery
  ) {
    return field.exactRank;
  }

  if (
    typeof field.prefixRank === "number" &&
    normalisedValue.startsWith(normalisedQuery)
  ) {
    return field.prefixRank;
  }

  if (
    typeof field.wordStartRank === "number" &&
    searchValueHasWordStartingWith(normalisedValue, normalisedQuery)
  ) {
    return field.wordStartRank;
  }

  if (
    typeof field.prefixRank === "number" &&
    searchValueHasWordStartingWith(normalisedValue, normalisedQuery)
  ) {
    return field.prefixRank;
  }

  if (
    typeof field.containsRank === "number" &&
    normalisedValue.includes(normalisedQuery)
  ) {
    return field.containsRank;
  }

  return null;
}

/*
  Word-start matching catches useful queries such as:
  - "york" for "West Yorkshire";
  - "south" for "South Africa";
  - "states" for "United States".
*/
function searchValueHasWordStartingWith(normalisedValue, normalisedQuery) {
  return normalisedValue
    .split(/[^a-z0-9]+/)
    .some(word => word.startsWith(normalisedQuery));
}

/*
  Converts aliases into searchable field definitions.
*/
function createAliasSearchFields(
  aliases,
  {
    exactRank,
    prefixRank,
    containsRank,
    wordStartRank,
    source
  }
) {
  return aliases.map(alias => {
    return {
      value: alias,
      exactRank,
      prefixRank,
      wordStartRank,
      containsRank,
      source
    };
  });
}

/*
  Converts metadata values into exact-only low-priority searchable fields.

  Metadata remains searchable for precise terms such as tags or IDs, but partial
  metadata matches are intentionally avoided. Without this, broad queries such
  as "France" can match every ID containing "france" and flood Search with
  child regions or subdivisions.
*/
function createMetadataSearchFields(values, rank, source) {
  return values.map(value => {
    return {
      value,
      exactRank: rank,
      source
    };
  });
}

/*
  Entity search:
  strongest matches are entity names and aliases.
  IDs, entity type and tags remain searchable but rank lower.
*/
function searchEntities(
  normalisedQuery,
  results,
  directlyMatchedEntityIds
) {
  Object.values(dataIndex.entitiesById).forEach(entity => {
    const fields = [
      {
        value: entity.name,
        exactRank: 0,
        prefixRank: 10,
        wordStartRank: 20,
        containsRank: 30,
        source: "entity name"
      },
      ...createAliasSearchFields(entity.aliases, {
        exactRank: 100,
        prefixRank: 110,
        wordStartRank: 120,
        containsRank: 130,
        source: "entity alias"
      }),
      ...createMetadataSearchFields(
        [
          entity.id,
          entity.entityType,
          ...entity.tags
        ],
        500,
        "entity metadata"
      )
    ];

    const match = getBestSearchFieldMatch(normalisedQuery, fields);

    if (!match) {
      return;
    }

    if (match.rank < 500) {
      directlyMatchedEntityIds.add(entity.id);
    }

    results.push({
      type: "entity",
      id: entity.id,
      label: entity.name,
      meta: `Tags: ${entity.tags.join(", ") || "none"}`,
      searchRank: match.rank,
      matchSource: match.source
    });
  });
}

/*
  Returns whether an entity result is already present.
*/
function searchResultsAlreadyContainEntity(results, entityId) {
  return results.some(result => {
    return result.type === "entity" && result.id === entityId;
  });
}

/*
  Adds low-priority upward context for directly matched entities.

  This deliberately moves only upwards:
  - parent entities;
  - administering entities;
  - composite entities the match is constituent of;
  - membership group entities.

  It does not expand downwards into children, administered entities,
  constituents or members, because broad searches such as "France" should not
  flood results with every region or subdivision.
*/
function searchUpwardContextEntities(
  results,
  directlyMatchedEntityIds
) {
  directlyMatchedEntityIds.forEach(entityId => {
    const entity = dataIndex.entitiesById[entityId];

    if (!entity) {
      return;
    }

    const contextEntries = [
      ...createEntityContextEntries(
        entity.parentIds,
        "Parent context"
      ),
      ...createEntityContextEntries(
        entity.administeringEntityIds ?? [],
        "Administered by context"
      ),
      ...createEntityContextEntries(
        entity.constituentOfEntityIds ?? [],
        "Constituent of context"
      ),
      ...createMembershipContextEntries(entity)
    ];

    contextEntries.forEach(contextEntry => {
      const contextEntity =
        dataIndex.entitiesById[contextEntry.entityId];

      if (
        !contextEntity ||
        searchResultsAlreadyContainEntity(
          results,
          contextEntity.id
        )
      ) {
        return;
      }

      results.push({
        type: "entity",
        id: contextEntity.id,
        label: contextEntity.name,
        meta: contextEntry.label,
        searchRank: 600,
        matchSource: "upward context"
      });
    });
  });
}

/*
  Converts a list of entity IDs into contextual search entries.
*/
function createEntityContextEntries(entityIds, label) {
  return entityIds.map(entityId => {
    return {
      entityId,
      label
    };
  });
}

/*
  Returns membership group entities for one directly matched entity.
*/
function createMembershipContextEntries(entity) {
  const memberships =
    dataIndex.entityMembershipsByMemberEntityId?.[entity.id] ?? [];

  return memberships
    .filter(membership => membership?.status === "current")
    .map(membership => {
      return {
        entityId: membership.groupEntityId,
        label: "Membership context"
      };
    });
}

/*
  Variant search:
  direct variant labels/names rank after direct entity-name matches.

  Aliases and metadata remain searchable, but they do not beat visible entity
  or variant names. The combined label lets a query such as "united" match
  "United Kingdom - National Flag" as a variant result.
*/
function searchVariants(normalisedQuery, results) {
  Object.values(dataIndex.variantsById).forEach(variant => {
    const entity = dataIndex.entitiesById[variant.entityId];

    const variantLabel = entity ?
      `${entity.name} - ${variant.displayName}` :
      variant.displayName;

    const fields = [
      {
        value: variantLabel,
        exactRank: 40,
        prefixRank: 50,
        wordStartRank: 60,
        containsRank: 70,
        source: "variant label"
      },
      {
        value: variant.displayName,
        exactRank: 40,
        prefixRank: 50,
        wordStartRank: 60,
        containsRank: 70,
        source: "variant name"
      },
      {
        value: entity ? entity.name : "",
        exactRank: 40,
        prefixRank: 50,
        wordStartRank: 60,
        containsRank: 70,
        source: "parent entity name"
      },
      ...createAliasSearchFields(variant.aliases, {
        exactRank: 140,
        prefixRank: 150,
        wordStartRank: 160,
        containsRank: 170,
        source: "variant alias"
      }),
      ...createAliasSearchFields(entity ? entity.aliases : [], {
        exactRank: 180,
        prefixRank: 190,
        wordStartRank: 200,
        containsRank: 210,
        source: "parent entity alias"
      }),
      ...createMetadataSearchFields(
        [
          variant.id,
          ...variant.tags,
          entity ? entity.id : ""
        ],
        510,
        "variant metadata"
      )
    ];

    const match = getBestSearchFieldMatch(normalisedQuery, fields);

    if (!match) {
      return;
    }

    results.push({
      type: "variant",
      id: variant.id,
      label: variantLabel,
      meta: [
          variant.aliases.length > 0 ?
          `Aliases: ${variant.aliases.join(", ")}` :
          null,
          `Tags: ${variant.tags.join(", ") || "none"}`
        ]
        .filter(Boolean)
        .join(" · "),
      searchRank: match.rank,
      matchSource: match.source
    });
  });
}

/*
  Collection search:
  collection names rank above low-priority collection metadata.
*/
function searchCollections(normalisedQuery, results) {
  Object.values(dataIndex.collectionsById)
    .filter(isUserFacingCollection)
    .forEach(collection => {
      const fields = [
        {
          value: collection.name,
          exactRank: 300,
          prefixRank: 310,
          wordStartRank: 320,
          containsRank: 330,
          source: "collection name"
        },
        ...createMetadataSearchFields(
          [
            collection.id,
            collection.type,
            collection.target
          ],
          520,
          "collection metadata"
        )
      ];

      const match = getBestSearchFieldMatch(normalisedQuery, fields);

      if (!match) {
        return;
      }

      results.push({
        type: "collection",
        id: collection.id,
        label: collection.name,
        meta:
          `${collection.type} collection targeting ` +
          `${collection.target}`,
        searchRank: match.rank,
        matchSource: match.source
      });
    });
}

/*
  CollectionGroup search:
  group names rank above low-priority group IDs.
*/
function searchCollectionGroups(normalisedQuery, results) {
  Object.values(dataIndex.collectionGroupsById)
    .filter(group => {
      return collectionGroupHasUserFacingContent(group.id);
    })
    .forEach(group => {
      const fields = [
        {
          value: group.name,
          exactRank: 340,
          prefixRank: 350,
          wordStartRank: 360,
          containsRank: 370,
          source: "collection group name"
        },
        ...createMetadataSearchFields(
          [group.id],
          530,
          "collection group metadata"
        )
      ];

      const match = getBestSearchFieldMatch(normalisedQuery, fields);

      if (!match) {
        return;
      }

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
          `collection(s)`,
        searchRank: match.rank,
        matchSource: match.source
      });
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

      openVariantDetailView(variant.id, {
        sourceMode: "search"
      });
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
