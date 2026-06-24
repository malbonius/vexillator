/*
  js/ui/browsePanel.js

  Browse panel rendering and event wiring.

  This file intentionally remains a classic browser script. It relies on the
  same global data/core objects as main.js so this first refactor can split the
  large file without changing behaviour or requiring a build step.
*/

/*
  Applies the default navigation state once the data index is available.

  Entity hierarchy:
  - root entities remain expanded;
  - non-root entities with children begin collapsed.

  Collection hierarchy:
  - top-level groups remain expanded;
  - nested groups begin collapsed.

  After initialisation, the existing collapse sets remain fully controlled by
  the user.
*/
function initialiseDefaultNavigationCollapseState() {
  if (appState.navigationCollapseInitialised) {
    return;
  }

  Object.values(dataIndex.entitiesById).forEach(entity => {
    const isRootEntity = entity.parentIds.length === 0;
    const hasChildren = getChildEntities(entity.id).length > 0;

    if (!isRootEntity && hasChildren) {
      appState.collapsedEntityIds.add(entity.id);
    }
  });

  Object.values(dataIndex.collectionGroupsById).forEach(group => {
    const isTopLevelGroup =
      group.parentGroupIds.length === 0;

    if (!isTopLevelGroup) {
      appState.collapsedGroupIds.add(group.id);
    }
  });

  appState.navigationCollapseInitialised = true;
}

/*
  Renders whichever Browse mode is currently active.

  Collections use the curated CollectionGroup browser.
  Entities use the hierarchy generated from parentIds.
*/
function renderBrowseView() {
  initialiseDefaultNavigationCollapseState();
  
  const collectionsButton = document.getElementById(
    "browseCollectionsButton"
  );

  const entitiesButton = document.getElementById(
    "browseEntitiesButton"
  );

  const collectionFilterContainer = document.getElementById(
    "collectionBrowserFilterContainer"
  );

  const collectionFilterInput = document.getElementById(
    "collectionBrowserFilterInput"
  );

  const entityFilterContainer = document.getElementById(
    "entityBrowserFilterContainer"
  );

  const entityFilterInput = document.getElementById(
    "entityBrowserFilterInput"
  );

  const isCollectionsMode =
    appState.browserMode === "collections";

  collectionsButton.classList.toggle(
    "active",
    isCollectionsMode
  );

  entitiesButton.classList.toggle(
    "active",
    !isCollectionsMode
  );

  /*
    Each scoped filter belongs only to its matching Browse mode.

    Filter text remains in state when the user temporarily switches modes, so
    returning to that mode restores the same filtered view.
  */
  collectionFilterContainer.hidden = !isCollectionsMode;
  entityFilterContainer.hidden = isCollectionsMode;

  if (isCollectionsMode) {
    collectionFilterInput.value =
      appState.collectionBrowserFilter ?? "";

    renderGroupBrowser();
    return;
  }

  entityFilterInput.value =
    appState.entityBrowserFilter ?? "";

  renderEntityBrowser();
}

/*
  Renders the CollectionGroup browser.

  The browser starts from root groups:
  groups with no parentGroupIds.
*/
function renderGroupBrowser() {
  const browserElement = document.getElementById("browseView");
  browserElement.innerHTML = "";

  const filterText = normaliseCollectionBrowserFilter(
    appState.collectionBrowserFilter
  );

  const rootGroups = collectionGroups.filter(group => {
    return (
      group.parentGroupIds.length === 0 &&
      collectionGroupBranchMatchesBrowserFilter(group, filterText)
    );
  });

  if (rootGroups.length === 0) {
    browserElement.innerHTML = `
      <p class="empty-message">
        ${
          filterText
            ? "No matching collections or collection groups."
            : "No collection groups available."
        }
      </p>
    `;

    return;
  }

  rootGroups.forEach(group => {
    const groupElement = createGroupElement(group, filterText);
    browserElement.appendChild(groupElement);
  });
}

/*
  Normalises scoped Collection-browser filter text.

  This keeps matching case-insensitive and ignores surrounding whitespace.
*/
function normaliseCollectionBrowserFilter(value) {
  return String(value ?? "")
    .trim()
    .toLocaleLowerCase();
}

/*
  Returns whether a collection leaf matches the scoped Collection filter.

  This deliberately checks the collection name only. Global Search remains the
  broad known-item route for IDs, tags and metadata.
*/
function collectionMatchesBrowserFilter(collection, filterText) {
  if (!filterText) {
    return true;
  }

  if (!isUserFacingCollection(collection)) {
    return false;
  }

  return collection.name
    .toLocaleLowerCase()
    .includes(filterText);
}

/*
  Returns whether a CollectionGroup title matches the scoped Collection filter.
*/
function collectionGroupMatchesOwnBrowserFilter(group, filterText) {
  if (!filterText) {
    return true;
  }

  return group.name
    .toLocaleLowerCase()
    .includes(filterText);
}

/*
  Returns whether this CollectionGroup, one of its direct collections or one of
  its descendant groups matches the scoped Collection filter.

  This is what preserves ancestor paths while filtering.
*/
function collectionGroupBranchMatchesBrowserFilter(
  group,
  filterText,
  visitedIds = new Set()
) {
  if (!group || visitedIds.has(group.id)) {
    return false;
  }

  if (!collectionGroupHasUserFacingContent(group.id)) {
    return false;
  }

  if (!filterText) {
    return true;
  }

  if (collectionGroupMatchesOwnBrowserFilter(group, filterText)) {
    return true;
  }

  const hasMatchingDirectCollection = group.collectionIds.some(collectionId => {
    return collectionMatchesBrowserFilter(
      dataIndex.collectionsById[collectionId],
      filterText
    );
  });

  if (hasMatchingDirectCollection) {
    return true;
  }

  const nextVisitedIds = new Set(visitedIds);
  nextVisitedIds.add(group.id);

  return getChildGroups(group.id).some(childGroup => {
    return collectionGroupBranchMatchesBrowserFilter(
      childGroup,
      filterText,
      nextVisitedIds
    );
  });
}

/*
  Normalises scoped Entity-browser filter text.

  This keeps matching case-insensitive and ignores surrounding whitespace.
*/
function normaliseEntityBrowserFilter(value) {
  return String(value ?? "")
    .trim()
    .toLocaleLowerCase();
}

/*
  Returns whether an entity itself matches the current scoped filter.

  Entity names and aliases are included because both are legitimate ways a
  user may know the entity.
*/
function entityMatchesBrowserFilter(entity, filterText) {
  if (!filterText) {
    return true;
  }

  const searchableValues = [
    entity.name,
    ...(entity.aliases ?? [])
  ];

  return searchableValues.some(value => {
    return value
      .toLocaleLowerCase()
      .includes(filterText);
  });
}

/*
  Returns whether the entity or any descendant matches the filter.

  This is what preserves structural context. Searching for "Wisconsin" still
  displays World, North America and United States above the matching state.
*/
function entityBranchMatchesBrowserFilter(
  entity,
  filterText,
  visitedIds = new Set()
) {
  if (!entity || visitedIds.has(entity.id)) {
    return false;
  }

  if (entityMatchesBrowserFilter(entity, filterText)) {
    return true;
  }

  const nextVisitedIds = new Set(visitedIds);
  nextVisitedIds.add(entity.id);

  return getChildEntities(entity.id).some(childEntity => {
    return entityBranchMatchesBrowserFilter(
      childEntity,
      filterText,
      nextVisitedIds
    );
  });
}

/*
  Returns an entity name without a leading English definite article.

  The displayed name is unchanged; this affects alphabetical sorting only.
*/
function getEntityAlphabeticalName(entity) {
  return entity.name.replace(/^the\s+/i, "");
}

/*
  Sorts entities alphabetically while ignoring a leading "The".

  If two names reduce to the same value, the full display name provides a
  stable secondary comparison.
*/
function compareEntitiesAlphabetically(entityA, entityB) {
  const simplifiedComparison = getEntityAlphabeticalName(entityA)
    .localeCompare(getEntityAlphabeticalName(entityB));

  if (simplifiedComparison !== 0) {
    return simplifiedComparison;
  }

  return entityA.name.localeCompare(entityB.name);
}

/*
  Builds presentation-only root sections for the Entity browser.

  These sections organise root entities without altering parentIds:
  - Geography contains root geographic entities such as World;
  - Composite States contains root political entities tagged composite_state;
  - International Bodies appears only when organisation roots exist;
  - Other Entities safely preserves any remaining root entities.
*/
function getEntityBrowserRootSections(filterText = "") {
  const allRootEntities = Object.values(dataIndex.entitiesById)
    .filter(entity => entity.parentIds.length === 0)
    .filter(entity => {
      return entityBranchMatchesBrowserFilter(
        entity,
        filterText
      );
    });

  const assignedEntityIds = new Set();

  function takeMatchingEntities(predicate) {
    const matchingEntities = allRootEntities
      .filter(entity => {
        return (
          !assignedEntityIds.has(entity.id) &&
          predicate(entity)
        );
      })
      .sort(compareEntitiesAlphabetically);

    matchingEntities.forEach(entity => {
      assignedEntityIds.add(entity.id);
    });

    return matchingEntities;
  }

  /*
    Root-section order is intentional rather than alphabetical.

    Geography is the primary browsing route and must remain first.
  */
  const sections = [
    {
      id: "geography",
      name: "Geography",
      entities: takeMatchingEntities(entity => {
        /*
          World is a structural concept rather than a geographic entity type,
          but it is the canonical root of the geographical hierarchy.
        */
        return (
          entity.id === "ent_world" ||
          entity.entityType === "geographic"
        );
      })
    },
    {
      id: "composite_states",
      name: "Composite States",
      entities: takeMatchingEntities(entity => {
        return entity.tags?.includes("composite_state") ?? false;
      })
    },
    {
      id: "international_bodies",
      name: "International Bodies",
      entities: takeMatchingEntities(entity => {
        return entity.entityType === "organisation";
      })
    },
    {
      id: "other_entities",
      name: "Other Entities",
      entities: takeMatchingEntities(() => true)
    }
  ];

  return sections.filter(section => {
    return section.entities.length > 0;
  });
}

/*
  Creates one virtual Entity-browser root section.

  The section heading is a UI container only. It is not an Entity and cannot
  participate in hierarchy, collections, Gallery, quiz or stats.
*/
function createEntityBrowserRootSectionElement(
  section,
  filterText = ""
) {
  const sectionElement = document.createElement("div");
  sectionElement.className =
    "group-block entity-browser-root-section";

  const isFiltering = Boolean(filterText);

  const isCollapsed =
    !isFiltering &&
    appState.collapsedEntityRootSectionIds.has(section.id);

  const headerElement = document.createElement("div");
  headerElement.className =
    "group-header entity-browser-root-section-header";

  const titleButton = document.createElement("button");
  titleButton.type = "button";
  titleButton.className =
    "group-title-button entity-browser-root-section-title";

  titleButton.textContent =
    `${isCollapsed ? "▶" : "▼"} ${section.name}`;

  titleButton.setAttribute(
    "aria-expanded",
    String(!isCollapsed)
  );

  if (isFiltering) {
    titleButton.disabled = true;
    titleButton.setAttribute(
      "aria-label",
      `${section.name} expanded while filtering`
    );
  } else {
    titleButton.addEventListener("click", () => {
      if (
        appState.collapsedEntityRootSectionIds.has(section.id)
      ) {
        appState.collapsedEntityRootSectionIds.delete(section.id);
      } else {
        appState.collapsedEntityRootSectionIds.add(section.id);
      }

      renderEntityBrowser();
    });
  }

  headerElement.appendChild(titleButton);
  sectionElement.appendChild(headerElement);

  if (isCollapsed) {
    return sectionElement;
  }

  const entitiesElement = document.createElement("div");
  entitiesElement.className =
    "entity-browser-children entity-browser-root-section-children";

  section.entities.forEach(entity => {
    const entityElement = createEntityBrowserElement(
      entity,
      filterText
    );

    entitiesElement.appendChild(entityElement);
  });

  sectionElement.appendChild(entitiesElement);

  return sectionElement;
}

/*
  Renders the hierarchical Entity browser beneath presentation-only root
  sections.

  Entity hierarchy remains generated exclusively from parentIds. While
  filtering, only matching sections, matching branches and the ancestors
  required to reach them are displayed.
*/
function renderEntityBrowser() {
  const browserElement = document.getElementById("browseView");
  browserElement.innerHTML = "";

  const filterText = normaliseEntityBrowserFilter(
    appState.entityBrowserFilter
  );

  const rootSections = getEntityBrowserRootSections(filterText);

  if (rootSections.length === 0) {
    browserElement.innerHTML = `
      <p class="empty-message">
        ${
          filterText
            ? "No matching entities were found."
            : "No root entities are available."
        }
      </p>
    `;

    return;
  }

  rootSections.forEach(section => {
    const sectionElement =
      createEntityBrowserRootSectionElement(
        section,
        filterText
      );

    browserElement.appendChild(sectionElement);
  });
}

/*
  Returns entities that list the supplied entity as one of their parents.

  Multiple parents are supported, so one entity may appear beneath more than
  one valid branch.
*/
function getChildEntities(entityId) {
  return Object.values(dataIndex.entitiesById)
    .filter(entity => entity.parentIds.includes(entityId))
    .sort(compareEntitiesAlphabetically);
}

/*
  Returns entities administered by the supplied entity.

  This is the reverse view of administeringEntityIds. The relationship is
  derived rather than stored twice, preventing inconsistent data.
*/
function getAdministeredEntities(entityId) {
  return Object.values(dataIndex.entitiesById)
    .filter(entity => {
      return entity.administeringEntityIds?.includes(entityId);
    })
    .sort(compareEntitiesAlphabetically);
}

/*
  Returns entities that are constituents of the supplied composite entity.

  This is the reverse view of constituentOfEntityIds. The relationship is
  derived rather than stored twice, preventing inconsistent data.
*/
function getConstituentEntities(entityId) {
  return Object.values(dataIndex.entitiesById)
    .filter(entity => {
      return entity.constituentOfEntityIds?.includes(entityId);
    })
    .sort(compareEntitiesAlphabetically);
}

/*
  Returns collections that resolve to at least one member belonging to the
  supplied entity.

  Each result also includes the resolved members that caused the collection
  to be considered related. This lets Entity Detail explain whether the
  collection includes the entity generally or particular variants.

  Using resolveCollection() keeps this compatible with both manual and
  dynamic collections.
*/
function getRelatedCollectionsForEntity(entityId) {
  return Object.values(dataIndex.collectionsById)
    .filter(isUserFacingCollection)
    .map(collection => {
      const matchingMembers = resolveCollection(collection.id, dataIndex)
        .filter(member => member.entityId === entityId);

      return {
        collection,
        matchingMembers
      };
    })
    .filter(result => result.matchingMembers.length > 0)
    .sort((a, b) => {
      return a.collection.name.localeCompare(b.collection.name);
    });
}

/*
  Returns every complete ancestor path leading to the supplied entity.

  Multiple paths are possible because entities may have more than one parent.
  The current entity is included as the final item in each path.

  Circular references are guarded against so malformed hierarchy data cannot
  cause infinite recursion.
*/
function getEntityAncestorPaths(entityId, visitedIds = new Set()) {
  const entity = dataIndex.entitiesById[entityId];

  if (!entity || visitedIds.has(entityId)) {
    return [];
  }

  const nextVisitedIds = new Set(visitedIds);
  nextVisitedIds.add(entityId);

  const parentEntities = entity.parentIds
    .map(parentId => dataIndex.entitiesById[parentId])
    .filter(Boolean);

  /*
    A root entity begins a complete path.
  */
  if (parentEntities.length === 0) {
    return [
      [entity]
    ];
  }

  return parentEntities.flatMap(parentEntity => {
    const parentPaths = getEntityAncestorPaths(
      parentEntity.id,
      nextVisitedIds
    );

    return parentPaths.map(path => [...path, entity]);
  });
}

/*
  Creates one Entity browser branch.

  The arrow button only expands or collapses children.
  The entity-name button opens the Entity Detail view.

  During filtering, matching branches are temporarily expanded and unrelated
  descendants are omitted.
*/
function createEntityBrowserElement(
  entity,
  filterText = ""
) {
  const entityBlock = document.createElement("div");
  entityBlock.className = "entity-browser-block";

  const allChildEntities = getChildEntities(entity.id);

  const visibleChildEntities = filterText
    ? allChildEntities.filter(childEntity => {
        return entityBranchMatchesBrowserFilter(
          childEntity,
          filterText
        );
      })
    : allChildEntities;

  const hasChildren = visibleChildEntities.length > 0;

  /*
    Filtering temporarily expands matching paths.

    The stored collapsed state is not modified, so clearing the filter restores
    the user's previous expansion choices.
  */
  const isFiltering = Boolean(filterText);

  const isCollapsed =
    !isFiltering &&
    appState.collapsedEntityIds.has(entity.id);

  /*
    Expanded branches receive distinct presentation styling.
    This is visual state only and does not mean the entity is selected.
  */
  entityBlock.classList.toggle(
    "expanded",
    hasChildren && !isCollapsed
  );

  const rowElement = document.createElement("div");
  rowElement.className = "entity-browser-row";

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "entity-browser-toggle";

  if (hasChildren) {
    toggleButton.textContent = isCollapsed ? "▶" : "▼";

    toggleButton.setAttribute(
      "aria-expanded",
      String(!isCollapsed)
    );

    toggleButton.setAttribute(
      "aria-label",
      `${isCollapsed ? "Expand" : "Collapse"} ${entity.name}`
    );

    /*
      Filtered paths must remain open so matches cannot disappear behind a
      collapsed ancestor.
    */
    if (isFiltering) {
      toggleButton.disabled = true;
      toggleButton.setAttribute(
        "aria-label",
        `${entity.name} expanded while filtering`
      );
    } else {
      toggleButton.addEventListener("click", () => {
        toggleEntityBrowserCollapsed(entity.id);
      });
    }
  } else {
    /*
      Preserve alignment for leaf entities without presenting a fake control.
    */
    toggleButton.textContent = "";
    toggleButton.disabled = true;
    toggleButton.setAttribute("aria-hidden", "true");
  }

  const entityButton = document.createElement("button");
  entityButton.type = "button";
  entityButton.className = "entity-browser-entity-button";
  entityButton.textContent = entity.name;

  entityButton.addEventListener("click", () => {
    openEntityView(entity.id);
  });

  rowElement.appendChild(toggleButton);
  rowElement.appendChild(entityButton);
  entityBlock.appendChild(rowElement);

  /*
    Descendants are still rendered lazily.

    With no filter, collapsed branches remain absent from the DOM. During
    filtering, only matching branches are rendered.
  */
  if (hasChildren && !isCollapsed) {
    const childrenElement = document.createElement("div");
    childrenElement.className = "entity-browser-children";

    visibleChildEntities.forEach(childEntity => {
      const childElement = createEntityBrowserElement(
        childEntity,
        filterText
      );

      childrenElement.appendChild(childElement);
    });

    entityBlock.appendChild(childrenElement);
  }

  return entityBlock;
}
/*
  Opens or closes one branch in the Entity browser.
*/
function toggleEntityBrowserCollapsed(entityId) {
  if (appState.collapsedEntityIds.has(entityId)) {
    appState.collapsedEntityIds.delete(entityId);
  } else {
    appState.collapsedEntityIds.add(entityId);
  }

  renderEntityBrowser();
}

/*
  Returns all child groups belonging to a CollectionGroup.

  A group can technically have multiple parents, so we check whether the
  current group ID appears inside each possible child group's parentGroupIds.
*/
function getChildGroups(groupId) {
  return collectionGroups.filter(possibleChildGroup => {
    return possibleChildGroup.parentGroupIds.includes(groupId);
  });
}

/*
  Creates one CollectionGroup block.

  This function is recursive:
  it creates the current group, then creates its child groups inside it.

  Groups are collapsible so the navigation can scale as the database grows.
*/
function createGroupElement(
  group,
  filterText = "",
  forceShowContents = false
) {
  const groupElement = document.createElement("div");
  groupElement.className = "group-block";

  const isFiltering = Boolean(filterText);

  const groupMatchesFilter =
    collectionGroupMatchesOwnBrowserFilter(group, filterText);

  /*
    If a group title itself matches, treat the group as the thing being
    filtered for and show its full subtree. If only a descendant matches, show
    only the matching path to that descendant.
  */
  const showFullGroupContents =
    forceShowContents || (isFiltering && groupMatchesFilter);

  const isCollapsed =
    !isFiltering &&
    appState.collapsedGroupIds.has(group.id);

  /*
    Group header.

    Contains only the collapse/expand title button. CollectionGroup bulk
    actions were removed because curated collections now cover that use case.
  */
  const headerElement = document.createElement("div");
  headerElement.className = "group-header";

  /*
    Group title button.

    We use a button instead of a plain h3 because this is interactive.
    That is better for keyboard users and general accessibility.
  */
  const titleButton = document.createElement("button");
  titleButton.type = "button";
  titleButton.className = "group-title-button";
  titleButton.textContent = `${isCollapsed ? "▶" : "▼"} ${group.name}`;

  titleButton.setAttribute(
    "aria-expanded",
    String(!isCollapsed)
  );

  /*
    Filtered paths must remain open so matches cannot disappear behind a
    collapsed ancestor. The stored collapsed state is not modified, so clearing
    the filter restores the user's previous tree state.
  */
  if (isFiltering) {
    titleButton.disabled = true;
    titleButton.setAttribute(
      "aria-label",
      `${group.name} expanded while filtering`
    );
  } else {
    titleButton.addEventListener("click", () => {
      toggleGroupCollapsed(group.id);
    });
  }

  headerElement.appendChild(titleButton);

  groupElement.appendChild(headerElement);

  /*
    If the group is collapsed, stop here.
    Its collections and child groups are not rendered.
  */
  if (isCollapsed) {
    return groupElement;
  }

  /*
    Render collections directly attached to this group.

    While filtering, direct collections are shown only if they match, unless a
    matching group title has intentionally exposed the full subtree.
  */
  const visibleCollectionIds = group.collectionIds.filter(collectionId => {
    const collection = dataIndex.collectionsById[collectionId];

    if (!isUserFacingCollection(collection)) {
      return false;
    }

    if (!isFiltering || showFullGroupContents) {
      return true;
    }

    return collectionMatchesBrowserFilter(collection, filterText);
  });

  if (visibleCollectionIds.length > 0) {
    const collectionListElement = document.createElement("div");
    collectionListElement.className = "collection-list";

    visibleCollectionIds.forEach(collectionId => {
      const collection = dataIndex.collectionsById[collectionId];
      const collectionButton = createCollectionButton(collection);
      collectionListElement.appendChild(collectionButton);
    });

    groupElement.appendChild(collectionListElement);
  }

  /*
    Find and render child groups.

    A group can technically have multiple parents, so we check whether
    this group's ID appears in each possible child group's parentGroupIds.
  */
  const childGroups = getChildGroups(group.id)
    .filter(childGroup => {
      if (!collectionGroupHasUserFacingContent(childGroup.id)) {
        return false;
      }

      if (!isFiltering || showFullGroupContents) {
        return true;
      }

      return collectionGroupBranchMatchesBrowserFilter(
        childGroup,
        filterText
      );
    });

  if (childGroups.length > 0) {
    const childrenElement = document.createElement("div");
    childrenElement.className = "group-children";

    childGroups.forEach(childGroup => {
      const childGroupElement = createGroupElement(
        childGroup,
        filterText,
        showFullGroupContents
      );

      childrenElement.appendChild(childGroupElement);
    });

    groupElement.appendChild(childrenElement);
  }

  return groupElement;
}

/*
  Opens or closes a CollectionGroup in the browser.
*/
function toggleGroupCollapsed(groupId) {
  if (appState.collapsedGroupIds.has(groupId)) {
    appState.collapsedGroupIds.delete(groupId);
  } else {
    appState.collapsedGroupIds.add(groupId);
  }

  renderBrowseView();
}

/*
  Creates a clickable collection button.

  Clicking the button toggles the collection in or out of selection.
*/
function createCollectionButton(collection) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "collection-button";
  button.textContent = collection.name;

  if (appState.selectedCollectionIds.has(collection.id)) {
    button.classList.add("selected");
  }

  button.addEventListener("click", () => {
    toggleCollectionSelection(collection.id);
  });

  return button;
}

/*
  Adds or removes a collection from the selected set.
*/
function toggleCollectionSelection(collectionId) {
  if (appState.selectedCollectionIds.has(collectionId)) {
    appState.selectedCollectionIds.delete(collectionId);
  } else {
    appState.selectedCollectionIds.add(collectionId);
  }

  refreshAfterSelectionChange();
}

function setupBrowseModeButtons() {
  const browseCollectionsButton = document.getElementById(
    "browseCollectionsButton"
  );

  const browseEntitiesButton = document.getElementById(
    "browseEntitiesButton"
  );

  const collectionBrowserFilterInput = document.getElementById(
    "collectionBrowserFilterInput"
  );

  const entityBrowserFilterInput = document.getElementById(
    "entityBrowserFilterInput"
  );

  browseCollectionsButton.addEventListener("click", () => {
    appState.browserMode = "collections";
    renderBrowseView();
  });

  browseEntitiesButton.addEventListener("click", () => {
    appState.browserMode = "entities";
    renderBrowseView();
  });

  /*
    Filter only the Collection browser.

    Global Search remains responsible for known-item retrieval across
    entities, variants, collections and CollectionGroups.
  */
  collectionBrowserFilterInput.addEventListener("input", event => {
    appState.collectionBrowserFilter = event.target.value;
    renderGroupBrowser();
  });

  /*
    Filter only the Entity browser.

    Global Search remains responsible for known-item retrieval across
    entities, variants, collections and CollectionGroups.
  */
  entityBrowserFilterInput.addEventListener("input", event => {
    appState.entityBrowserFilter = event.target.value;
    renderEntityBrowser();
  });
}
