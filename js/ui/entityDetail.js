/*
  Entity Detail UI.

  This file is intentionally loaded as a normal script, not an ES module,
  so the app can keep its current local-file workflow while main.js is
  gradually reduced into smaller feature files.

  It owns:
  - Entity Detail navigation history
  - Entity Detail section disclosure state
  - relationship-group rendering
  - membership display
  - child/administered/constituent sections
  - entity variant cards and Entity Detail zoom entry points
*/
/*
  Creates the stable source ID used for one Entity Detail bulk-selection group.

  Existing broad relationship groups retain their original IDs. Configured
  sections and subgroups append a stable key so their provenance remains
  independent.
*/
function createEntitySelectionGroupId(
  sourceEntityId,
  groupType,
  groupKey = null
) {
  const baseId =
    `entity_group_${groupType}_${sourceEntityId}`;

  return groupKey
    ? `${baseId}_${groupKey}`
    : baseId;
}

/*
  Returns the default user-facing label for an explicit grouped source.
*/
function getEntitySelectionGroupTypeLabel(groupType) {
  const labelsByType = {
    child_entities: "Child Entities",
    administered_entities: "Administered Entities",
    constituent_entities: "Constituent Entities",
    membership_members: "Members",
    relationship_entities: "Related Entities",
    relationship_subgroup: "Entity Subgroup"
  };

  return labelsByType[groupType] ?? "Entity Group";
}

/*
  Uses an explicit presentation label when a configured relationship section
  or subgroup supplied one, otherwise falls back to the broad group type.
*/
function getEntitySelectionGroupDisplayLabel(entityGroup) {
  const explicitLabel =
    typeof entityGroup?.sourceLabel === "string"
      ? entityGroup.sourceLabel.trim()
      : "";

  return explicitLabel ||
    getEntitySelectionGroupTypeLabel(
      entityGroup?.groupType
    );
}

/*
  Reads the presentation-only relationship configuration for one entity.
*/
function getEntityRelationshipGroupSection(entityId) {
  if (
    typeof entityRelationshipGroups !== "object" ||
    !entityRelationshipGroups
  ) {
    return null;
  }

  const section = entityRelationshipGroups[entityId];

  if (
    !section ||
    typeof section !== "object" ||
    typeof section.id !== "string" ||
    typeof section.label !== "string" ||
    !Array.isArray(section.relationshipTypes) ||
    !Array.isArray(section.groups)
  ) {
    return null;
  }

  return section;
}

/*
  Resolves one configured relationship source without changing the underlying
  entity model.
*/
function getEntitiesForRelationshipType(
  sourceEntityId,
  relationshipType
) {
  if (relationshipType === "child_entities") {
    return getChildEntities(sourceEntityId);
  }

  if (relationshipType === "administered_entities") {
    return getAdministeredEntities(sourceEntityId);
  }

  if (relationshipType === "constituent_entities") {
    return getConstituentEntities(sourceEntityId);
  }

  return [];
}

/*
  Returns all unique entities available to one configured section.
*/
function getConfiguredRelationshipEntities(
  sourceEntityId,
  section
) {
  const entitiesById = new Map();

  section.relationshipTypes.forEach(relationshipType => {
    getEntitiesForRelationshipType(
      sourceEntityId,
      relationshipType
    ).forEach(entity => {
      entitiesById.set(entity.id, entity);
    });
  });

  /*
    Explicit IDs support presentation-only associations such as the Crown
    Dependencies on the United Kingdom page. They do not create or imply an
    underlying parent, constituent or administration relationship.
  */
  const explicitEntityIds = Array.isArray(section.entityIds)
    ? section.entityIds
    : [];

  explicitEntityIds.forEach(entityId => {
    const explicitEntity = dataIndex.entitiesById[entityId];

    if (explicitEntity) {
      entitiesById.set(explicitEntity.id, explicitEntity);
    }
  });

  return Array.from(entitiesById.values())
    .sort(compareEntitiesAlphabetically);
}

/*
  Tests one entity against a presentation-only subgroup rule.
*/
function entityMatchesRelationshipGroup(entity, group) {
  const match = group?.match ?? {};

  if (
    Array.isArray(group?.entityIds) &&
    group.entityIds.length > 0 &&
    !group.entityIds.includes(entity.id)
  ) {
    return false;
  }

  const allTags = Array.isArray(match.allTags)
    ? match.allTags
    : [];

  const anyTags = Array.isArray(match.anyTags)
    ? match.anyTags
    : [];

  const noneTags = Array.isArray(match.noneTags)
    ? match.noneTags
    : [];

  if (
    allTags.length > 0 &&
    !allTags.every(tag => entity.tags.includes(tag))
  ) {
    return false;
  }

  if (
    anyTags.length > 0 &&
    !anyTags.some(tag => entity.tags.includes(tag))
  ) {
    return false;
  }

  if (
    noneTags.some(tag => entity.tags.includes(tag))
  ) {
    return false;
  }

  return true;
}

/*
  Builds ordered, non-overlapping presentation subgroups.

  First match wins. Unmatched entities remain visible in a fallback subgroup.
*/
function buildEntityRelationshipSubgroups(
  sourceEntityId,
  section
) {
  const relationshipEntities =
    getConfiguredRelationshipEntities(
      sourceEntityId,
      section
    );

  const unassignedEntityIds = new Set(
    relationshipEntities.map(entity => entity.id)
  );

  const groups = [];

  section.groups.forEach(groupConfig => {
    if (
      !groupConfig ||
      typeof groupConfig.id !== "string" ||
      typeof groupConfig.label !== "string"
    ) {
      return;
    }

    const entities = relationshipEntities.filter(entity => {
      return (
        unassignedEntityIds.has(entity.id) &&
        entityMatchesRelationshipGroup(
          entity,
          groupConfig
        )
      );
    });

    entities.forEach(entity => {
      unassignedEntityIds.delete(entity.id);
    });

    if (entities.length > 0) {
      const configuredSelectionEntityIds =
        Array.isArray(groupConfig.selectionEntityIds)
          ? groupConfig.selectionEntityIds
          : null;

      const selectionEntities =
        configuredSelectionEntityIds
          ? configuredSelectionEntityIds
              .map(entityId => {
                return dataIndex.entitiesById[entityId];
              })
              .filter(Boolean)
              .sort(compareEntitiesAlphabetically)
          : entities;

      groups.push({
        id: groupConfig.id,
        label: groupConfig.label,
        sourceLabel:
          groupConfig.sourceLabel ??
          groupConfig.label,
        entities,
        selectionEntities
      });
    }
  });

  const unmatchedEntities = relationshipEntities.filter(entity => {
    return unassignedEntityIds.has(entity.id);
  });

  if (unmatchedEntities.length > 0) {
    const fallbackLabel =
      section.unmatchedLabel ??
      "Other Related Entities";

    groups.push({
      id: "other",
      label: fallbackLabel,
      sourceLabel: fallbackLabel,
      entities: unmatchedEntities,
      selectionEntities: unmatchedEntities
    });
  }

  const selectionEntitiesById = new Map();

  groups.forEach(group => {
    group.selectionEntities.forEach(selectionEntity => {
      selectionEntitiesById.set(
        selectionEntity.id,
        selectionEntity
      );
    });
  });

  const selectionEntities = Array.from(
    selectionEntitiesById.values()
  ).sort(compareEntitiesAlphabetically);

  return {
    relationshipEntities,
    selectionEntities,
    groups
  };
}


/*
  Membership relationships are non-geographical links such as EU membership.

  They enrich Entity Detail pages and dynamic collections without altering the
  strict parentIds hierarchy.
*/
function isCurrentEntityMembership(membership) {
  return membership?.status === "current";
}

function getCurrentMembershipsForMemberEntity(entityId) {
  const memberships =
    dataIndex.entityMembershipsByMemberEntityId?.[entityId] ?? [];

  return memberships.filter(isCurrentEntityMembership);
}

function getCurrentMembershipsForGroupEntity(entityId) {
  const memberships =
    dataIndex.entityMembershipsByGroupEntityId?.[entityId] ?? [];

  return memberships.filter(isCurrentEntityMembership);
}

function getMemberOfEntities(entityId) {
  const entitiesById = new Map();

  getCurrentMembershipsForMemberEntity(entityId)
    .forEach(membership => {
      const groupEntity =
        dataIndex.entitiesById[membership.groupEntityId];

      if (groupEntity) {
        entitiesById.set(groupEntity.id, groupEntity);
      }
    });

  return Array.from(entitiesById.values())
    .sort(compareEntitiesAlphabetically);
}

function getMembershipMemberEntities(entityId) {
  const entitiesById = new Map();

  getCurrentMembershipsForGroupEntity(entityId)
    .forEach(membership => {
      const memberEntity =
        dataIndex.entitiesById[membership.memberEntityId];

      if (memberEntity) {
        entitiesById.set(memberEntity.id, memberEntity);
      }
    });

  return Array.from(entitiesById.values())
    .sort(compareEntitiesAlphabetically);
}

function renderMemberOfEntitiesSection(entity, memberOfEntities) {
  if (!entity || memberOfEntities.length === 0) {
    return null;
  }

  const sectionElement = document.createElement("div");

  /*
    Reuse the compact non-geographical relationship styling already used for
    administration and constituent-of links.
  */
  sectionElement.className =
    "entity-administration-section entity-member-of-section";

  const labelElement = document.createElement("span");
  labelElement.className = "entity-detail-meta";
  labelElement.textContent = "Member of:";

  sectionElement.appendChild(labelElement);

  const linksElement = document.createElement("div");
  linksElement.className =
    "entity-administration-list entity-member-of-list";

  memberOfEntities.forEach(groupEntity => {
    const groupButton = document.createElement("button");

    groupButton.type = "button";
    groupButton.className =
      "entity-administration-button entity-member-of-button";
    groupButton.textContent = groupEntity.name;

    groupButton.addEventListener("click", () => {
      openEntityView(groupEntity.id);
    });

    linksElement.appendChild(groupButton);
  });

  sectionElement.appendChild(linksElement);

  return sectionElement;
}

function renderMembershipMembersSection(entity, memberEntities) {
  if (!entity || memberEntities.length === 0) {
    return null;
  }

  const compactMemberThreshold = 9;

  const usesCompactMemberBrowser =
    memberEntities.length >= compactMemberThreshold;

  const defaultMemberSectionExpanded =
    shouldEntityDetailSectionStartExpanded(
      memberEntities.length
    );

  const isMemberSectionExpanded =
    getEntityDetailSectionExpanded(
      "memberEntities",
      entity.id,
      defaultMemberSectionExpanded
    );

  const sectionElement = document.createElement("section");

  sectionElement.className =
    "entity-administered-section entity-members-section";

  const headerElement = document.createElement("div");
  headerElement.className = "entity-section-header";

  const disclosureButton =
    createEntityDetailDisclosureButton({
      label: "Members",
      count: memberEntities.length,
      expanded: isMemberSectionExpanded,
      sectionKey: "memberEntities",
      entityId: entity.id
    });

  headerElement.appendChild(disclosureButton);

  const selectionActions =
    createEntityGroupSelectionActions(
      memberEntities,
      {
        sourceEntityId: entity.id,
        groupType: "membership_members",
        groupKey: "current_members",
        sourceLabel: "Members"
      }
    );

  if (selectionActions) {
    headerElement.appendChild(selectionActions);
  }

  sectionElement.appendChild(headerElement);

  if (!isMemberSectionExpanded) {
    return sectionElement;
  }

  let filterInput = null;

  if (usesCompactMemberBrowser) {
    filterInput = document.createElement("input");
    filterInput.type = "search";
    filterInput.className =
      "entity-administered-filter entity-members-filter";
    filterInput.placeholder =
      `Filter ${memberEntities.length} members`;

    filterInput.setAttribute(
      "aria-label",
      `Filter members of ${entity.name}`
    );

    sectionElement.appendChild(filterInput);
  }

  const listElement = document.createElement("div");

  listElement.className = usesCompactMemberBrowser
    ? "entity-administered-list " +
      "entity-administered-list-compact " +
      "entity-members-list"
    : "entity-administered-list entity-members-list";

  const noMatchesElement = document.createElement("p");

  noMatchesElement.className =
    "empty-message entity-administered-no-matches " +
    "entity-members-no-matches";

  noMatchesElement.textContent = "No matching members.";
  noMatchesElement.hidden = true;

  function renderMemberEntities(filterText = "") {
    const normalisedFilter = filterText
      .trim()
      .toLocaleLowerCase();

    const visibleMemberEntities = memberEntities.filter(memberEntity => {
      const searchableText = [
        memberEntity.name,
        ...(memberEntity.aliases ?? [])
      ]
        .join(" ")
        .toLocaleLowerCase();

      return searchableText.includes(normalisedFilter);
    });

    listElement.innerHTML = "";

    visibleMemberEntities.forEach(memberEntity => {
      const memberButton = document.createElement("button");

      memberButton.type = "button";
      memberButton.className = usesCompactMemberBrowser
        ? "entity-administered-button " +
          "entity-administered-button-compact " +
          "entity-member-button"
        : "entity-administered-button entity-member-button";

      memberButton.textContent = memberEntity.name;

      memberButton.addEventListener("click", () => {
        openEntityView(memberEntity.id);
      });

      listElement.appendChild(memberButton);
    });

    noMatchesElement.hidden =
      visibleMemberEntities.length > 0;
  }

  renderMemberEntities();

  filterInput?.addEventListener("input", event => {
    renderMemberEntities(event.target.value);
  });

  sectionElement.appendChild(listElement);
  sectionElement.appendChild(noMatchesElement);

  return sectionElement;
}

/*
  Returns whether an entity is active through at least one grouped entity
  source. Individual direct selection remains a separate source.
*/
function isEntitySelectedThroughGroup(entityId) {
  return Array.from(appState.selectedEntityGroups.values())
    .some(entityGroup => {
      return entityGroup.entityIds.includes(entityId);
    });
}

/*
  Creates compact Add all / Clear controls for a group of related entities.

  Only entities with a valid default variant can become direct entity
  selections. Collections and directly selected variants are untouched.
*/
function createEntityGroupSelectionActions(
  entities,
  {
    sourceEntityId,
    groupType,
    groupKey = null,
    sectionId = null,
    subgroupId = null,
    sourceLabel = null,
    relationshipTypes = []
  }
) {
  const selectableEntities = entities.filter(entity => {
    const defaultVariant = entity.defaultVariantId
      ? dataIndex.variantsById[entity.defaultVariantId]
      : null;

    return (
      defaultVariant &&
      defaultVariant.entityId === entity.id
    );
  });

  /*
    A group containing only structural entities has nothing that can be added
    directly, so no bulk controls are needed.
  */
  if (
    selectableEntities.length === 0 ||
    typeof sourceEntityId !== "string" ||
    typeof groupType !== "string"
  ) {
    return null;
  }

  const groupId = createEntitySelectionGroupId(
    sourceEntityId,
    groupType,
    groupKey
  );

  const actionsElement = document.createElement("div");
  actionsElement.className = "entity-section-actions";

  const addAllButton = document.createElement("button");
  addAllButton.type = "button";
  addAllButton.className = "group-action-button";
  addAllButton.textContent = "Add all";

  const groupIsSelected =
    appState.selectedEntityGroups.has(groupId);

  addAllButton.disabled = groupIsSelected;

  addAllButton.addEventListener("click", () => {
    appState.selectedEntityGroups.set(groupId, {
      id: groupId,
      sourceEntityId,
      groupType,
      groupKey,
      sectionId,
      subgroupId,
      sourceLabel,
      relationshipTypes: Array.isArray(relationshipTypes)
        ? [...relationshipTypes]
        : [],
      entityIds: selectableEntities.map(entity => entity.id)
    });

    /*
      Remain on Entity Detail so the grouped source and button state remain
      visible. The entities are not flattened into individual direct sources.
    */
    refreshAfterSelectionChange({
      showGallery: false
    });

    renderEntityView();
  });

  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.className = "group-action-button";
  clearButton.textContent = "Clear";
  clearButton.disabled = !groupIsSelected;

  clearButton.addEventListener("click", () => {
    /*
      Remove only this explicit grouped source. Individual entity selections,
      other groups, collections and directly selected variants remain intact.
    */
    appState.selectedEntityGroups.delete(groupId);

    refreshAfterSelectionChange({
      showGallery: false
    });

    renderEntityView();
  });

  actionsElement.appendChild(addAllButton);
  actionsElement.appendChild(clearButton);

  return actionsElement;
}

/*
  Creates compact Add all / Clear controls for an entity's normal variants.

  Technical text_removed variants have already been excluded from the supplied
  array and are therefore unaffected by these bulk actions.
*/
function createVariantGroupSelectionActions(variants) {
  if (variants.length === 0) {
    return null;
  }

  const actionsElement = document.createElement("div");
  actionsElement.className = "entity-section-actions";

  const addAllButton = document.createElement("button");
  addAllButton.type = "button";
  addAllButton.className = "group-action-button";
  addAllButton.textContent = "Add all";

  const allSelected = variants.every(variant => {
    return appState.selectedVariantIds.has(variant.id);
  });

  addAllButton.disabled = allSelected;

  addAllButton.addEventListener("click", () => {
    variants.forEach(variant => {
      appState.selectedVariantIds.add(variant.id);
    });

    /*
      Stay on Entity Detail so the bulk-selection state remains visible.
    */
    refreshAfterSelectionChange({
      showGallery: false
    });

    renderEntityView();
  });

  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.className = "group-action-button";
  clearButton.textContent = "Clear";

  const anySelected = variants.some(variant => {
    return appState.selectedVariantIds.has(variant.id);
  });

  clearButton.disabled = !anySelected;

  clearButton.addEventListener("click", () => {
    variants.forEach(variant => {
      appState.selectedVariantIds.delete(variant.id);
    });

    /*
      Remove only direct selections for these normal variants.

      Entity selections, collections and technical text_removed variants remain
      untouched.
    */
    refreshAfterSelectionChange({
      showGallery: false
    });

    renderEntityView();
  });

  actionsElement.appendChild(addAllButton);
  actionsElement.appendChild(clearButton);

  return actionsElement;
}

/*
  Opens an entity detail view.

  focusedVariantId is optional. It will later allow a variant search result
  or gallery item to open the parent entity with that variant highlighted.
*/
/*
  Returns the remembered Entity Detail disclosure state.

  When the user has not changed the section for this entity, the supplied
  responsive default is used.
*/
function getEntityDetailSectionExpanded(
  sectionKey,
  entityId,
  defaultExpanded = false
) {
  if (!appState.entityDetailDisclosureStates) {
    appState.entityDetailDisclosureStates = {};
  }

  let sectionStates =
    appState.entityDetailDisclosureStates[sectionKey];

  if (!(sectionStates instanceof Map)) {
    sectionStates = new Map();
    appState.entityDetailDisclosureStates[sectionKey] = sectionStates;
  }

  return sectionStates.has(entityId)
    ? sectionStates.get(entityId)
    : defaultExpanded;
}

/*
  Stores the inverse of the currently rendered state.

  The rendered state may come from a responsive default rather than an
  existing Map entry, so it is passed explicitly.
*/
function toggleEntityDetailSection(
  sectionKey,
  entityId,
  currentExpanded
) {
  if (!appState.entityDetailDisclosureStates) {
    appState.entityDetailDisclosureStates = {};
  }

  let sectionStates =
    appState.entityDetailDisclosureStates[sectionKey];

  if (!(sectionStates instanceof Map)) {
    sectionStates = new Map();
    appState.entityDetailDisclosureStates[sectionKey] = sectionStates;
  }

  sectionStates.set(entityId, !currentExpanded);
  renderEntityView();
}

/*
  Creates the consistent heading control used by collapsible Entity Detail
  sections.
*/
function createEntityDetailDisclosureButton({
  label,
  count,
  expanded,
  sectionKey,
  entityId,
  extraClassName = ""
}) {
  const button = document.createElement("button");

  button.type = "button";

  button.className = [
    "entity-section-disclosure",
    extraClassName
  ]
    .filter(Boolean)
    .join(" ");

  button.textContent =
    `${expanded ? "▼" : "▶"} ${label} (${count})`;

  button.setAttribute(
    "aria-expanded",
    String(expanded)
  );

  button.addEventListener("click", () => {
    toggleEntityDetailSection(
      sectionKey,
      entityId,
      expanded
    );
  });

  return button;
}

/*
  Renders one configured relationship section with independently collapsible
  subgroups and honest grouped-source provenance.
*/
function renderConfiguredEntityRelationshipSection(
  entity,
  section,
  relationshipEntities,
  selectionEntities,
  subgroups
) {
  if (
    !entity ||
    !section ||
    relationshipEntities.length === 0
  ) {
    return null;
  }

  const sectionStateKey =
    `${entity.id}|relationship_section|${section.id}`;

  const defaultExpanded =
    shouldEntityDetailSectionStartExpanded(
      relationshipEntities.length
    );

  const expanded =
    getEntityDetailSectionExpanded(
      "childEntities",
      sectionStateKey,
      defaultExpanded
    );

  const sectionElement = document.createElement("section");

  sectionElement.className =
    "entity-child-section entity-relationship-group-section";

  const headerElement = document.createElement("div");
  headerElement.className = "entity-section-header";

  const disclosureButton =
    createEntityDetailDisclosureButton({
      label: section.label,
      count: relationshipEntities.length,
      expanded,
      sectionKey: "childEntities",
      entityId: sectionStateKey
    });

  headerElement.appendChild(disclosureButton);

  const isSingleBroadRelationship =
    section.relationshipTypes.length === 1 &&
    [
      "child_entities",
      "administered_entities",
      "constituent_entities"
    ].includes(section.relationshipTypes[0]);

  const sectionGroupType = isSingleBroadRelationship
    ? section.relationshipTypes[0]
    : "relationship_entities";

  const sectionActions =
    createEntityGroupSelectionActions(
      selectionEntities,
      {
        sourceEntityId: entity.id,
        groupType: sectionGroupType,
        groupKey: isSingleBroadRelationship
          ? null
          : section.id,
        sectionId: section.id,
        sourceLabel: section.label,
        relationshipTypes:
          section.relationshipTypes
      }
    );

  if (sectionActions) {
    headerElement.appendChild(sectionActions);
  }

  sectionElement.appendChild(headerElement);

  if (!expanded) {
    return sectionElement;
  }

  const groupsElement = document.createElement("div");
  groupsElement.className =
    "entity-relationship-subgroup-list";

  subgroups.forEach(subgroup => {
    const subgroupElement = document.createElement("section");

    subgroupElement.className =
      "entity-relationship-subgroup";

    const subgroupHeaderElement =
      document.createElement("div");

    subgroupHeaderElement.className =
      "entity-relationship-subgroup-header";

    const subgroupStateKey =
      `${entity.id}|${section.id}|${subgroup.id}`;

    const defaultSubgroupExpanded =
      shouldEntityDetailSectionStartExpanded(
        subgroup.entities.length
      );

    const subgroupExpanded =
      getEntityDetailSectionExpanded(
        "relationshipSubgroups",
        subgroupStateKey,
        defaultSubgroupExpanded
      );

    const subgroupDisclosureButton =
      createEntityDetailDisclosureButton({
        label: subgroup.label,
        count: subgroup.entities.length,
        expanded: subgroupExpanded,
        sectionKey: "relationshipSubgroups",
        entityId: subgroupStateKey,
        extraClassName:
          "entity-relationship-subgroup-disclosure"
      });

    subgroupHeaderElement.appendChild(
      subgroupDisclosureButton
    );

    const subgroupActions =
      createEntityGroupSelectionActions(
        subgroup.selectionEntities,
        {
          sourceEntityId: entity.id,
          groupType: "relationship_subgroup",
          groupKey:
            `${section.id}_${subgroup.id}`,
          sectionId: section.id,
          subgroupId: subgroup.id,
          sourceLabel: subgroup.sourceLabel,
          relationshipTypes:
            section.relationshipTypes
        }
      );

    if (subgroupActions) {
      subgroupHeaderElement.appendChild(
        subgroupActions
      );
    }

    subgroupElement.appendChild(
      subgroupHeaderElement
    );

    if (subgroupExpanded) {
      const usesCompactBrowser =
        subgroup.entities.length >= 9;

      let filterInput = null;

      if (usesCompactBrowser) {
        filterInput = document.createElement("input");
        filterInput.type = "search";

        filterInput.className =
          "entity-child-filter " +
          "entity-relationship-subgroup-filter";

        filterInput.placeholder =
          `Filter ${subgroup.label.toLocaleLowerCase()}`;

        filterInput.setAttribute(
          "aria-label",
          `Filter ${subgroup.label} of ${entity.name}`
        );

        subgroupElement.appendChild(filterInput);
      }

      const entityListElement =
        document.createElement("div");

      entityListElement.className = usesCompactBrowser
        ? "entity-child-list entity-child-list-compact " +
          "entity-relationship-subgroup-entities"
        : "entity-child-list " +
          "entity-relationship-subgroup-entities";

      const noMatchesElement =
        document.createElement("p");

      noMatchesElement.className =
        "empty-message entity-child-no-matches";

      noMatchesElement.textContent =
        `No matching ${subgroup.label.toLocaleLowerCase()}.`;

      noMatchesElement.hidden = true;

      function renderSubgroupEntities(filterText = "") {
        const normalisedFilter = filterText
          .trim()
          .toLocaleLowerCase();

        const visibleEntities = subgroup.entities.filter(
          relatedEntity => {
            const searchableText = [
              relatedEntity.name,
              ...(relatedEntity.aliases ?? [])
            ]
              .join(" ")
              .toLocaleLowerCase();

            return searchableText.includes(
              normalisedFilter
            );
          }
        );

        entityListElement.innerHTML = "";

        visibleEntities.forEach(relatedEntity => {
          const entityButton =
            document.createElement("button");

          entityButton.type = "button";

          entityButton.className = usesCompactBrowser
            ? "entity-child-button " +
              "entity-child-button-compact"
            : "entity-child-button";

          entityButton.textContent = relatedEntity.name;

          entityButton.addEventListener("click", () => {
            openEntityView(relatedEntity.id);
          });

          entityListElement.appendChild(entityButton);
        });

        noMatchesElement.hidden =
          visibleEntities.length > 0;
      }

      renderSubgroupEntities();

      filterInput?.addEventListener("input", event => {
        renderSubgroupEntities(event.target.value);
      });

      subgroupElement.appendChild(entityListElement);
      subgroupElement.appendChild(noMatchesElement);
    }

    groupsElement.appendChild(subgroupElement);
  });

  sectionElement.appendChild(groupsElement);

  return sectionElement;
}

/*
  Returns the most recent valid Entity Detail history entry.

  Missing entities and entries that point to the current page are discarded so
  the back control can never lead to a dead or self-referential destination.
*/
function getPreviousEntityHistoryEntry() {
  const history = appState.entityView.history;

  while (history.length > 0) {
    const entry = history[history.length - 1];
    const entity = dataIndex.entitiesById[entry.entityId];

    if (
      !entity ||
      entry.entityId === appState.entityView.activeEntityId
    ) {
      history.pop();
      continue;
    }

    return entry;
  }

  return null;
}

/*
  Opens an Entity Detail page.

  Direct Entity-to-Entity navigation records the current page. Opening an
  entity from another app mode begins a fresh contextual history path.
*/
function openEntityView(
  entityId,
  focusedVariantId = null,
  {
    recordHistory = true
  } = {}
) {
  const entity = dataIndex.entitiesById[entityId];

  if (!entity) {
    console.error(`Cannot open missing entity: ${entityId}`);
    return;
  }

  /*
    Ignore a focused variant that does not belong to this entity.
  */
  const focusedVariant = focusedVariantId ?
    dataIndex.variantsById[focusedVariantId] :
    null;

  const currentEntityId =
    appState.entityView.activeEntityId;

  const isDirectEntityNavigation =
    appState.activeMode === "entity" &&
    currentEntityId &&
    currentEntityId !== entity.id;

  if (recordHistory && isDirectEntityNavigation) {
    appState.entityView.history.push({
      entityId: currentEntityId,
      focusedVariantId:
        appState.entityView.focusedVariantId
    });

    /*
      Prevent an accidental runaway stack during a very long session.
    */
    if (appState.entityView.history.length > 100) {
      appState.entityView.history.shift();
    }
  } else if (
    recordHistory &&
    appState.activeMode !== "entity"
  ) {
    appState.entityView.history = [];
  }

  closeBrowsePanel({
    returnFocus: false
  });

  appState.entityView.activeEntityId = entity.id;
  appState.entityView.focusedVariantId =
    focusedVariant && focusedVariant.entityId === entity.id ?
    focusedVariant.id :
    null;

  renderEntityView();
  showModePanel("entity");
}

/*
  Returns to the previous Entity Detail page without recording the page being
  left as a new history entry.
*/
function openPreviousEntityView() {
  const previousEntry =
    getPreviousEntityHistoryEntry();

  if (!previousEntry) {
    return;
  }

  appState.entityView.history.pop();

  openEntityView(
    previousEntry.entityId,
    previousEntry.focusedVariantId,
    {
      recordHistory: false
    }
  );
}

/*
  Creates a contextual Entity Detail back-navigation control.

  The same helper is used at the top and bottom of the page so long mobile
  Entity Detail pages do not force the user to scroll back to the top.
*/
function createEntityHistoryNavigationElement(
  previousHistoryEntry,
  positionLabel = "top"
) {
  if (!previousHistoryEntry) {
    return null;
  }

  const previousEntity =
    dataIndex.entitiesById[
      previousHistoryEntry.entityId
    ];

  if (!previousEntity) {
    return null;
  }

  const historyNavigationElement =
    document.createElement("nav");

  historyNavigationElement.className =
    "entity-history-navigation";

  historyNavigationElement.setAttribute(
    "aria-label",
    positionLabel === "bottom"
      ? "Entity navigation history, bottom"
      : "Entity navigation history"
  );

  const backButton =
    document.createElement("button");

  backButton.type = "button";
  backButton.className = "entity-back-button";
  backButton.textContent =
    `← Back to ${previousEntity.name}`;

  backButton.addEventListener("click", () => {
    openPreviousEntityView();
  });

  historyNavigationElement.appendChild(
    backButton
  );

  return historyNavigationElement;
}


/*
  Creates the default-variant hero used at the top of Entity Detail pages.

  This is only a presentation shortcut for the entity's existing
  defaultVariantId. It does not create a new data concept or change selection,
  gallery, quiz or stats behaviour.
*/
function createEntityDefaultVariantHeroElement(
  entity,
  defaultVariant,
  entityZoomItems
) {
  if (
    !entity ||
    !defaultVariant ||
    defaultVariant.entityId !== entity.id
  ) {
    return null;
  }

  const asset = dataIndex.assetsById[defaultVariant.assetId];

  const heroElement = document.createElement("aside");
  heroElement.className = "entity-default-variant-hero";

  const headingElement = document.createElement("h3");
  headingElement.className = "entity-default-variant-heading";
  headingElement.textContent = defaultVariant.displayName;

  heroElement.appendChild(headingElement);

  const zoomIndex = entityZoomItems.findIndex(item => {
    return item.galleryVariantId === defaultVariant.id;
  });

  const imageButton = document.createElement("button");
  imageButton.type = "button";
  imageButton.className = "entity-default-variant-zoom-button";
  imageButton.setAttribute(
    "aria-label",
    `View ${entity.name} - ${defaultVariant.displayName} in zoom viewer`
  );

  if (zoomIndex < 0) {
    imageButton.disabled = true;
  }

  imageButton.addEventListener("click", () => {
    if (zoomIndex < 0) {
      return;
    }

    setGalleryZoomContext(
      "entity",
      entityZoomItems,
      zoomIndex
    );

    appState.entityView.focusedVariantId = defaultVariant.id;

    showGalleryZoomOverlay(zoomIndex);
  });

  if (asset) {
    const imageElement = document.createElement("img");
    imageElement.className = "entity-default-variant-image";
    imageElement.src = asset.path;
    imageElement.alt = `${entity.name} - ${defaultVariant.displayName}`;

    imageButton.appendChild(imageElement);
  } else {
    const missingImageElement = document.createElement("span");
    missingImageElement.className = "entity-default-variant-missing-image";
    missingImageElement.textContent = "No image available";

    imageButton.appendChild(missingImageElement);
  }

  heroElement.appendChild(imageButton);

  const labelElement = document.createElement("p");
  labelElement.className = "entity-default-variant-label";
  labelElement.textContent =
    `Default variant: ${defaultVariant.displayName}`;

  heroElement.appendChild(labelElement);

  return heroElement;
}

/*
  Renders the currently active entity.

  The first pass shows:
  - entity identity;
  - aliases;
  - tags;
  - parents;
  - all variants belonging to the entity.
*/
function renderEntityView() {
  const entityViewElement = document.getElementById("entityView");
  const entityId = appState.entityView.activeEntityId;

  if (!entityId) {
    entityViewElement.innerHTML = `
      <p class="empty-message">No entity selected.</p>
    `;
    return;
  }

  const entity = dataIndex.entitiesById[entityId];

  if (!entity) {
    entityViewElement.innerHTML = `
      <p class="empty-message">The selected entity could not be found.</p>
    `;
    return;
  }

  /*
    Entity Detail treats the entity default as its primary identifier.

    The default variant appears first, ordinary variants remain alphabetical,
    and technical text-removed quiz variants appear after normal variants.
    The same order also drives Entity Detail zoom navigation.
  */
  const entityVariants = Object.values(dataIndex.variantsById)
    .filter(variant => variant.entityId === entity.id)
    .sort((a, b) => {
      const aIsDefault = a.id === entity.defaultVariantId;
      const bIsDefault = b.id === entity.defaultVariantId;

      if (aIsDefault !== bIsDefault) {
        return aIsDefault ? -1 : 1;
      }

      const aIsTechnical =
        a.tags?.includes("text_removed") ?? false;

      const bIsTechnical =
        b.tags?.includes("text_removed") ?? false;

      if (aIsTechnical !== bIsTechnical) {
        return aIsTechnical ? 1 : -1;
      }

      return a.displayName.localeCompare(b.displayName);
    });

  /*
  Entity Detail zoom cycles through every variant belonging to this entity,
  including technical variants such as text_removed.

  These use the same basic item shape as gallery zoom items, but they have no
  collection-source context.
*/
  const entityZoomItems = entityVariants.map(variant => {
    return {
      entityId: entity.id,
      galleryVariantId: variant.id,
      sourceCollectionIds: []
    };
  });

  /*
  Variants suitable for the user-facing "Add all variants" action.

  Quiz-safe text-removed variants are technical alternatives and should not
  be bulk-added alongside normal visual variants.
*/
  const selectableEntityVariants = entityVariants.filter(variant => {
    return !variant.tags?.includes("text_removed");
  });

  const childEntities = getChildEntities(entity.id);

  /*
    Entities politically or administratively associated with the current
    entity, without treating them as geographical children.
  */
  const administeredEntities = getAdministeredEntities(entity.id);
  
  /*
    Entities that belong directly to the current composite political entity.

    This remains separate from geographical children and administered entities.
  */
  const constituentEntities = getConstituentEntities(entity.id);

  /*
    Some Entity pages use presentation-only grouping across one or more
    relationship sources. The underlying relationship fields remain unchanged.
  */
  const relationshipGroupSection =
    getEntityRelationshipGroupSection(entity.id);

  const configuredRelationshipData =
    relationshipGroupSection
      ? buildEntityRelationshipSubgroups(
          entity.id,
          relationshipGroupSection
        )
      : null;

  const handledRelationshipTypes = new Set(
    relationshipGroupSection?.relationshipTypes ?? []
  );

  /*
    Composite political entities to which the current entity belongs.
  */
  const constituentOfEntities = (
    entity.constituentOfEntityIds ?? []
  )
    .map(compositeEntityId => {
      return dataIndex.entitiesById[compositeEntityId];
    })
    .filter(Boolean)
    .sort(compareEntitiesAlphabetically);

  /*
    Current non-geographical memberships.

    These are independent of geography and allow pages such as Cyprus and the
    European Union to explain their membership context lightly.
  */
  const memberOfEntities = getMemberOfEntities(entity.id);
  const membershipMemberEntities =
    getMembershipMemberEntities(entity.id);

  /*
  Collections that currently include this entity through either manual or
  dynamic resolution.
*/
  const relatedCollections = getRelatedCollectionsForEntity(entity.id);

  /*
  An entity can only be added directly when its default variant exists.

  Parent/navigation entities may legitimately have no default flag and should
  still have Entity pages, but they should not create unusable pool members.
*/
  const defaultVariant = entity.defaultVariantId ?
    dataIndex.variantsById[entity.defaultVariantId] :
    null;

  const canSelectEntity = Boolean(defaultVariant);

  /*
  Resolve parent entities so they can be shown as navigation links rather
  than plain text.
  */
  const parentEntities = entity.parentIds
    .map(parentId => dataIndex.entitiesById[parentId])
    .filter(Boolean);
	
  /*
    Resolve political or administrative relationships separately from the
    geographical parent hierarchy.
  */
  const administeringEntities = (
    entity.administeringEntityIds ?? []
  )
    .map(administeringEntityId => {
      return dataIndex.entitiesById[administeringEntityId];
    })
    .filter(Boolean);	
	
  /*
    Resolve external variants that officially represent this entity.

    These variants belong to another entity and are informational only. They
    must not become variants, selection sources, quiz entries or stats targets
    for the entity currently being viewed.
  */
  const officialRepresentationVariants = (
  entity.officialRepresentationVariantIds ?? []
  )
    .map(variantId => {
      return dataIndex.variantsById[variantId];
  })
  .filter(Boolean);

  /*
  Complete hierarchy paths provide broader geographical context than the
  direct-parent links alone.
*/
  const ancestorPaths = getEntityAncestorPaths(entity.id);

  entityViewElement.innerHTML = "";

  const previousHistoryEntry =
    getPreviousEntityHistoryEntry();

  const historyNavigationElement =
    createEntityHistoryNavigationElement(
      previousHistoryEntry
    );

  if (historyNavigationElement) {
    entityViewElement.appendChild(
      historyNavigationElement
    );
  }

  const summaryElement = document.createElement("section");
  summaryElement.className = "entity-detail-summary";

  const summaryInfoElement = document.createElement("div");
  summaryInfoElement.className = "entity-detail-summary-main";

  summaryElement.appendChild(summaryInfoElement);

  const defaultVariantHeroElement =
    createEntityDefaultVariantHeroElement(
      entity,
      defaultVariant,
      entityZoomItems
    );

  if (defaultVariantHeroElement) {
    summaryElement.appendChild(defaultVariantHeroElement);
  }

  entityViewElement.appendChild(summaryElement);

  const headingElement = document.createElement("h2");
  headingElement.textContent = entity.name;
  summaryInfoElement.appendChild(headingElement);

  /*
  Add or remove the entity itself as a direct working-pool source.

  A direct entity uses its default variant in gallery and quiz modes.
	*/
  /*
  Only entities with a valid default variant can be added directly.

  Structural entities such as countries, continents or regions may still be
  useful for navigation even when no default flag has been assigned.
*/
  if (canSelectEntity) {
    const entityActionButton = document.createElement("button");
    entityActionButton.type = "button";
    entityActionButton.className = "entity-selection-action";

    const isEntitySelected = appState.selectedEntityIds.has(entity.id);
    const isActiveThroughGroup =
      isEntitySelectedThroughGroup(entity.id);

    entityActionButton.textContent = isEntitySelected ?
      "Remove entity from selection" :
      "Add entity to selection";

    if (!isEntitySelected && isActiveThroughGroup) {
      entityActionButton.title =
        "This entity is already active through a grouped source. " +
        "This button adds a separate direct entity source.";
    }

    entityActionButton.addEventListener("click", () => {
      const wasSelected = appState.selectedEntityIds.has(entity.id);

      if (wasSelected) {
        appState.selectedEntityIds.delete(entity.id);
      } else {
        appState.selectedEntityIds.add(entity.id);
      }

      refreshAfterSelectionChange({
        /*
          Adding sends the user to Gallery.
          Removing keeps them on the Entity page.
        */
        showGallery: !wasSelected
      });

      if (wasSelected) {
        /*
          The user stayed on the Entity page, so update the button text.
        */
        renderEntityView();
      }
    });

    summaryInfoElement.appendChild(entityActionButton);
  }

  /*
  Explain why some navigation entities do not have an entity-level selection
  button. Their child entities or individual variants may still be selectable.
*/
  if (!canSelectEntity) {
    const unavailableElement = document.createElement("p");
    unavailableElement.className = "entity-detail-meta";
    unavailableElement.textContent =
      "This entity has no default flag and cannot be added directly.";

    summaryInfoElement.appendChild(unavailableElement);
  }

  const typeElement = document.createElement("p");
  typeElement.className = "entity-detail-meta";
  typeElement.textContent = `Entity type: ${entity.entityType}`;
  summaryInfoElement.appendChild(typeElement);

  const aliasesElement = document.createElement("p");
  aliasesElement.className = "entity-detail-meta";
  aliasesElement.textContent = entity.aliases.length > 0 ?
    `Aliases: ${entity.aliases.join(", ")}` :
    "Aliases: none";
  summaryInfoElement.appendChild(aliasesElement);

  /*
    Show the complete hierarchy path or paths leading to this entity.

    Every ancestor is clickable. The current entity is plain text because its
    page is already open.
  */
  if (ancestorPaths.length > 0) {
    const contextSectionElement = document.createElement("div");
    contextSectionElement.className = "entity-context-section";

    const contextLabelElement = document.createElement("p");
    contextLabelElement.className = "entity-detail-meta";
    contextLabelElement.textContent =
      ancestorPaths.length === 1 ?
      "Hierarchy:" :
      "Hierarchies:";

    contextSectionElement.appendChild(contextLabelElement);

    const pathsElement = document.createElement("div");
    pathsElement.className = "entity-context-paths";

    ancestorPaths.forEach(path => {
      const pathElement = document.createElement("div");
      pathElement.className = "entity-context-path";

      path.forEach((pathEntity, index) => {
        if (index > 0) {
          const separatorElement = document.createElement("span");
          separatorElement.className = "entity-context-separator";
          separatorElement.textContent = "→";

          pathElement.appendChild(separatorElement);
        }

        const isCurrentEntity = pathEntity.id === entity.id;

        if (isCurrentEntity) {
          const currentEntityElement = document.createElement("span");
          currentEntityElement.className = "entity-context-current";
          currentEntityElement.textContent = pathEntity.name;

          pathElement.appendChild(currentEntityElement);
        } else {
          const entityButton = document.createElement("button");
          entityButton.type = "button";
          entityButton.className = "entity-context-button";
          entityButton.textContent = pathEntity.name;

          entityButton.addEventListener("click", () => {
            openEntityView(pathEntity.id);
          });

          pathElement.appendChild(entityButton);
        }
      });

      pathsElement.appendChild(pathElement);
    });

    contextSectionElement.appendChild(pathsElement);
    summaryInfoElement.appendChild(contextSectionElement);
  }

  /*
  Parent entities are clickable so the user can move upwards through the
  entity hierarchy.
*/
  const parentsElement = document.createElement("div");
  parentsElement.className = "entity-parent-section";

  const parentsLabelElement = document.createElement("span");
  parentsLabelElement.className = "entity-detail-meta";
  parentsLabelElement.textContent = "Parents:";

  parentsElement.appendChild(parentsLabelElement);

  if (parentEntities.length === 0) {
    const noParentsElement = document.createElement("span");
    noParentsElement.className = "entity-detail-meta";
    noParentsElement.textContent = " none";

    parentsElement.appendChild(noParentsElement);
  } else {
    const parentLinksElement = document.createElement("div");
    parentLinksElement.className = "entity-parent-list";

    parentEntities.forEach(parentEntity => {
      const parentButton = document.createElement("button");
      parentButton.type = "button";
      parentButton.className = "entity-parent-button";
      parentButton.textContent = parentEntity.name;

      parentButton.addEventListener("click", () => {
        openEntityView(parentEntity.id);
      });

      parentLinksElement.appendChild(parentButton);
    });

    parentsElement.appendChild(parentLinksElement);
  }

  summaryInfoElement.appendChild(parentsElement);
    /*
    Show political or administrative relationships separately.

    These links do not form part of the geographical hierarchy and therefore
    do not affect geographic collection ancestry.
  */
  if (administeringEntities.length > 0) {
    const administrationElement = document.createElement("div");
    administrationElement.className =
      "entity-administration-section";

    const administrationLabelElement =
      document.createElement("span");

    administrationLabelElement.className =
      "entity-detail-meta";

    administrationLabelElement.textContent =
      administeringEntities.length === 1
        ? "Administered by:"
        : "Administered by:";

    administrationElement.appendChild(
      administrationLabelElement
    );

    const administrationLinksElement =
      document.createElement("div");

    administrationLinksElement.className =
      "entity-administration-list";

    administeringEntities.forEach(administeringEntity => {
      const administrationButton =
        document.createElement("button");

      administrationButton.type = "button";
      administrationButton.className =
        "entity-administration-button";

      administrationButton.textContent =
        administeringEntity.name;

      administrationButton.addEventListener("click", () => {
        openEntityView(administeringEntity.id);
      });

      administrationLinksElement.appendChild(
        administrationButton
      );
    });

    administrationElement.appendChild(
      administrationLinksElement
    );

    summaryInfoElement.appendChild(
      administrationElement
    );
  }

/*
  Show membership in composite political entities separately from both
  geographical ancestry and administration.
*/
if (constituentOfEntities.length > 0) {
  const constituentOfElement = document.createElement("div");

  /*
    Reuse the established administration layout because this is another
    compact non-geographical relationship list.
  */
  constituentOfElement.className =
    "entity-administration-section entity-constituent-of-section";

  const constituentOfLabelElement =
    document.createElement("span");

  constituentOfLabelElement.className =
    "entity-detail-meta";

  constituentOfLabelElement.textContent =
    "Constituent of:";

  constituentOfElement.appendChild(
    constituentOfLabelElement
  );

  const constituentOfLinksElement =
    document.createElement("div");

  constituentOfLinksElement.className =
    "entity-administration-list entity-constituent-of-list";

  constituentOfEntities.forEach(compositeEntity => {
    const constituentOfButton =
      document.createElement("button");

    constituentOfButton.type = "button";

    /*
      Reuse the existing compact relationship-button styling.
    */
    constituentOfButton.className =
      "entity-administration-button entity-constituent-of-button";

    constituentOfButton.textContent =
      compositeEntity.name;

    constituentOfButton.addEventListener("click", () => {
      openEntityView(compositeEntity.id);
    });

    constituentOfLinksElement.appendChild(
      constituentOfButton
    );
  });

  constituentOfElement.appendChild(
    constituentOfLinksElement
  );

  summaryInfoElement.appendChild(
    constituentOfElement
  );
}

  const memberOfSectionElement =
    renderMemberOfEntitiesSection(
      entity,
      memberOfEntities
    );

  if (memberOfSectionElement) {
    summaryInfoElement.appendChild(
      memberOfSectionElement
    );
  }


  const tagsElement = document.createElement("p");
  tagsElement.className = "entity-detail-meta";
  tagsElement.textContent = entity.tags.length > 0 ?
    `Tags: ${entity.tags.join(", ")}` :
    "Tags: none";
  summaryInfoElement.appendChild(tagsElement);
  
  /*
  Show flags belonging to another entity that officially represent the
  current entity.

  This section is deliberately informational:
  - no Add/Remove action;
  - no working-pool membership;
  - no quiz participation;
  - no stats recorded against the current entity.
*/
if (officialRepresentationVariants.length > 0) {
  const representationSectionElement =
    document.createElement("section");

  representationSectionElement.className =
    "entity-official-representation-section";

  const representationHeadingElement =
    document.createElement("h3");

  representationHeadingElement.textContent =
    officialRepresentationVariants.length === 1
      ? "Official representation"
      : "Official representations";

  representationSectionElement.appendChild(
    representationHeadingElement
  );

  const explanationElement = document.createElement("p");
  explanationElement.className = "entity-detail-meta";
  explanationElement.textContent =
    "This entity is officially represented by the following external flag.";

  representationSectionElement.appendChild(explanationElement);

  const representationListElement =
    document.createElement("div");

  representationListElement.className =
    "entity-official-representation-list";

  officialRepresentationVariants.forEach(variant => {
    const representingEntity =
      dataIndex.entitiesById[variant.entityId];

    const asset = dataIndex.assetsById[variant.assetId];

    /*
      Invalid references will later be reported by validation. Skip them here
      so one malformed entry does not break the Entity Detail page.
    */
    if (!representingEntity) {
      return;
    }

    const representationItemElement =
      document.createElement("article");

    representationItemElement.className =
      "entity-official-representation-item";

    if (asset) {
      const imageElement = document.createElement("img");

      imageElement.className =
        "entity-official-representation-image";

      imageElement.src = asset.path;
      imageElement.alt =
        `${representingEntity.name} — ${variant.displayName}`;

      representationItemElement.appendChild(imageElement);
    }

    const bodyElement = document.createElement("div");
    bodyElement.className =
      "entity-official-representation-body";

    const nameElement = document.createElement("h4");
    nameElement.textContent =
      `${representingEntity.name} — ${variant.displayName}`;

    bodyElement.appendChild(nameElement);

    const noteElement = document.createElement("p");
    noteElement.className = "entity-detail-meta";
    noteElement.textContent =
      `Used as the official flag representing ${entity.name}.`;

    bodyElement.appendChild(noteElement);

    const viewEntityButton = document.createElement("button");
    viewEntityButton.type = "button";
    viewEntityButton.className = "entity-parent-button";
    viewEntityButton.textContent =
      `View ${representingEntity.name}`;

    viewEntityButton.addEventListener("click", () => {
      openEntityView(
        representingEntity.id,
        variant.id
      );
    });

    bodyElement.appendChild(viewEntityButton);

    representationItemElement.appendChild(bodyElement);
    representationListElement.appendChild(
      representationItemElement
    );
    });

    representationSectionElement.appendChild(
      representationListElement
    );

    entityViewElement.appendChild(
      representationSectionElement
    );
}

/*
  Show entities that belong to the current composite political entity.

  Small groups start open. On wide/full desktop layouts, every group starts
  open. Large groups still use a compact searchable list when open.
*/
if (
  constituentEntities.length > 0 &&
  !handledRelationshipTypes.has("constituent_entities")
) {
  const compactConstituentThreshold = 9;

  const usesCompactConstituentBrowser =
    constituentEntities.length >= compactConstituentThreshold;

  const defaultConstituentSectionExpanded =
    shouldEntityDetailSectionStartExpanded(
      constituentEntities.length
    );

  const isConstituentSectionExpanded =
    getEntityDetailSectionExpanded(
      "constituentEntities",
      entity.id,
      defaultConstituentSectionExpanded
    );

  const constituentSectionElement =
    document.createElement("section");

  /*
    Reuse administered-entity layout rules while retaining a distinct
    constituent class for future styling if needed.
  */
  constituentSectionElement.className =
    "entity-administered-section entity-constituent-section";

  const constituentHeaderElement =
    document.createElement("div");

  constituentHeaderElement.className =
    "entity-section-header";

  const constituentDisclosureButton =
    createEntityDetailDisclosureButton({
      label: "Constituent Entities",
      count: constituentEntities.length,
      expanded: isConstituentSectionExpanded,
      sectionKey: "constituentEntities",
      entityId: entity.id,
      extraClassName: "entity-constituent-disclosure"
    });

  constituentHeaderElement.appendChild(
    constituentDisclosureButton
  );

  const constituentSelectionActions =
    createEntityGroupSelectionActions(
      constituentEntities,
      {
        sourceEntityId: entity.id,
        groupType: "constituent_entities"
      }
    );

  if (constituentSelectionActions) {
    constituentHeaderElement.appendChild(
      constituentSelectionActions
    );
  }

  constituentSectionElement.appendChild(
    constituentHeaderElement
  );

  /*
    Do not construct the constituent list until its disclosure is open.
  */
  if (isConstituentSectionExpanded) {
    let constituentFilterInput = null;

    if (usesCompactConstituentBrowser) {
      constituentFilterInput =
        document.createElement("input");

      constituentFilterInput.type = "search";

      constituentFilterInput.className =
        "entity-administered-filter entity-constituent-filter";

      constituentFilterInput.placeholder =
        `Filter ${constituentEntities.length} constituent entities`;

      constituentFilterInput.setAttribute(
        "aria-label",
        `Filter constituent entities of ${entity.name}`
      );

      constituentSectionElement.appendChild(
        constituentFilterInput
      );
    }

    const constituentListElement =
      document.createElement("div");

    constituentListElement.className =
      usesCompactConstituentBrowser
        ? "entity-administered-list " +
          "entity-administered-list-compact " +
          "entity-constituent-list"
        : "entity-administered-list entity-constituent-list";

    const noMatchesElement =
      document.createElement("p");

    noMatchesElement.className =
      "empty-message entity-administered-no-matches " +
      "entity-constituent-no-matches";

    noMatchesElement.textContent =
      "No matching constituent entities.";

    noMatchesElement.hidden = true;

    /*
      Render the currently visible constituent entities.

      Filtering is local to this Entity Detail section.
    */
    function renderConstituentEntities(filterText = "") {
      const normalisedFilter = filterText
        .trim()
        .toLocaleLowerCase();

      const visibleConstituentEntities =
        constituentEntities.filter(constituentEntity => {
          const searchableValues = [
            constituentEntity.name,
            ...(constituentEntity.aliases ?? [])
          ];

          return searchableValues.some(value => {
            return value
              .toLocaleLowerCase()
              .includes(normalisedFilter);
          });
        });

      constituentListElement.innerHTML = "";

      visibleConstituentEntities.forEach(
        constituentEntity => {
          const constituentButton =
            document.createElement("button");

          constituentButton.type = "button";

          constituentButton.className =
            usesCompactConstituentBrowser
              ? "entity-administered-button " +
                "entity-administered-button-compact " +
                "entity-constituent-button"
              : "entity-administered-button " +
                "entity-constituent-button";

          constituentButton.textContent =
            constituentEntity.name;

          constituentButton.addEventListener("click", () => {
            openEntityView(constituentEntity.id);
          });

          constituentListElement.appendChild(
            constituentButton
          );
        }
      );

      noMatchesElement.hidden =
        visibleConstituentEntities.length > 0;
    }

    renderConstituentEntities();

    if (constituentFilterInput) {
      constituentFilterInput.addEventListener(
        "input",
        event => {
          renderConstituentEntities(
            event.target.value
          );
        }
      );
    }

    constituentSectionElement.appendChild(
      constituentListElement
    );

    constituentSectionElement.appendChild(
      noMatchesElement
    );
  }

  entityViewElement.appendChild(
    constituentSectionElement
  );
}

  /*
    Show entities administered by the current entity.

    Small groups start open. On wide/full desktop layouts, every group starts
    open. Large groups still use a compact searchable list when open.
  */
  if (administeredEntities.length > 0) {
    const compactAdministeredThreshold = 9;

    const usesCompactAdministeredBrowser =
      administeredEntities.length >= compactAdministeredThreshold;

    const defaultAdministeredSectionExpanded =
      shouldEntityDetailSectionStartExpanded(
        administeredEntities.length
      );

    const isAdministeredSectionExpanded =
      getEntityDetailSectionExpanded(
        "administeredEntities",
        entity.id,
        defaultAdministeredSectionExpanded
      );

    const administeredSectionElement =
      document.createElement("section");

    administeredSectionElement.className =
      "entity-administered-section";

/*
  Keep the section title/disclosure and bulk-selection actions together.

  Bulk actions remain visible even when a large list is collapsed.
*/
const administeredHeaderElement = document.createElement("div");
administeredHeaderElement.className = "entity-section-header";

const administeredDisclosureButton =
  createEntityDetailDisclosureButton({
    label: "Administered Entities",
    count: administeredEntities.length,
    expanded: isAdministeredSectionExpanded,
    sectionKey: "administeredEntities",
    entityId: entity.id
  });

administeredHeaderElement.appendChild(
  administeredDisclosureButton
);

const administeredSelectionActions =
  createEntityGroupSelectionActions(
    administeredEntities,
    {
      sourceEntityId: entity.id,
      groupType: "administered_entities"
    }
  );

if (administeredSelectionActions) {
  administeredHeaderElement.appendChild(
    administeredSelectionActions
  );
}

administeredSectionElement.appendChild(
  administeredHeaderElement
);

    /*
      Do not build the administered list until its disclosure is open.
    */
    if (isAdministeredSectionExpanded) {
      let administeredFilterInput = null;

      if (usesCompactAdministeredBrowser) {
        administeredFilterInput =
          document.createElement("input");

        administeredFilterInput.type = "search";
        administeredFilterInput.className =
          "entity-administered-filter";

        administeredFilterInput.placeholder =
          `Filter ${administeredEntities.length} administered entities`;

        administeredFilterInput.setAttribute(
          "aria-label",
          `Filter entities administered by ${entity.name}`
        );

        administeredSectionElement.appendChild(
          administeredFilterInput
        );
      }

      const administeredListElement =
        document.createElement("div");

      administeredListElement.className =
        usesCompactAdministeredBrowser
          ? "entity-administered-list entity-administered-list-compact"
          : "entity-administered-list";

      const noMatchesElement =
        document.createElement("p");

      noMatchesElement.className =
        "empty-message entity-administered-no-matches";

      noMatchesElement.textContent =
        "No matching administered entities.";

      noMatchesElement.hidden = true;

      /*
        Render the currently visible administered entities.

        Filtering is local to this one Entity Detail section.
      */
      function renderAdministeredEntities(filterText = "") {
        const normalisedFilter = filterText
          .trim()
          .toLocaleLowerCase();

        const visibleAdministeredEntities =
          administeredEntities.filter(administeredEntity => {
            const searchableValues = [
              administeredEntity.name,
              ...(administeredEntity.aliases ?? [])
            ];

            return searchableValues.some(value => {
              return value
                .toLocaleLowerCase()
                .includes(normalisedFilter);
            });
          });

        administeredListElement.innerHTML = "";

        visibleAdministeredEntities.forEach(
          administeredEntity => {
            const administeredButton =
              document.createElement("button");

            administeredButton.type = "button";
            administeredButton.className =
              usesCompactAdministeredBrowser
                ? "entity-administered-button " +
                  "entity-administered-button-compact"
                : "entity-administered-button";

            administeredButton.textContent =
              administeredEntity.name;

            administeredButton.addEventListener("click", () => {
              openEntityView(administeredEntity.id);
            });

            administeredListElement.appendChild(
              administeredButton
            );
          }
        );

        noMatchesElement.hidden =
          visibleAdministeredEntities.length > 0;
      }

      renderAdministeredEntities();

      if (administeredFilterInput) {
        administeredFilterInput.addEventListener(
          "input",
          event => {
            renderAdministeredEntities(
              event.target.value
            );
          }
        );
      }

      administeredSectionElement.appendChild(
        administeredListElement
      );

      administeredSectionElement.appendChild(
        noMatchesElement
      );
    }

    entityViewElement.appendChild(
      administeredSectionElement
    );
  }

  const membershipMembersSectionElement =
    renderMembershipMembersSection(
      entity,
      membershipMemberEntities
    );

  if (membershipMembersSectionElement) {
    entityViewElement.appendChild(
      membershipMembersSectionElement
    );
  }

   /*
    Show direct child entities as navigation links.

    Groups with eight or fewer children start open. On wide/full desktop
    layouts, every child group starts open.
  */
  if (
    relationshipGroupSection &&
    configuredRelationshipData
  ) {
    const configuredSectionElement =
      renderConfiguredEntityRelationshipSection(
        entity,
        relationshipGroupSection,
        configuredRelationshipData.relationshipEntities,
        configuredRelationshipData.selectionEntities,
        configuredRelationshipData.groups
      );

    if (configuredSectionElement) {
      entityViewElement.appendChild(
        configuredSectionElement
      );
    }
  } else if (childEntities.length > 0) {
    const compactChildThreshold = 9;

    const usesCompactChildBrowser =
      childEntities.length >= compactChildThreshold;

    const defaultChildSectionExpanded =
      shouldEntityDetailSectionStartExpanded(
        childEntities.length
      );

    const isChildSectionExpanded =
      getEntityDetailSectionExpanded(
        "childEntities",
        entity.id,
        defaultChildSectionExpanded
      );

    const childrenSectionElement = document.createElement("section");
    childrenSectionElement.className = "entity-child-section";

/*
  Keep the section title/disclosure and bulk-selection actions together.

  Bulk actions remain visible even when a large child list is collapsed.
*/
const childrenHeaderElement = document.createElement("div");
childrenHeaderElement.className = "entity-section-header";

const childDisclosureButton =
  createEntityDetailDisclosureButton({
    label: "Child Entities",
    count: childEntities.length,
    expanded: isChildSectionExpanded,
    sectionKey: "childEntities",
    entityId: entity.id
  });

childrenHeaderElement.appendChild(
  childDisclosureButton
);

const childSelectionActions =
  createEntityGroupSelectionActions(
    childEntities,
    {
      sourceEntityId: entity.id,
      groupType: "child_entities"
    }
  );

if (childSelectionActions) {
  childrenHeaderElement.appendChild(
    childSelectionActions
  );
}

childrenSectionElement.appendChild(childrenHeaderElement);

    /*
      Do not build the child list until the disclosure is open.
    */
    if (isChildSectionExpanded) {
      let childFilterInput = null;

      if (usesCompactChildBrowser) {
        childFilterInput = document.createElement("input");
        childFilterInput.type = "search";
        childFilterInput.className = "entity-child-filter";
        childFilterInput.placeholder =
          `Filter ${childEntities.length} child entities`;

        childFilterInput.setAttribute(
          "aria-label",
          `Filter child entities of ${entity.name}`
        );

        childrenSectionElement.appendChild(childFilterInput);
      }

      const childrenElement = document.createElement("div");

      childrenElement.className = usesCompactChildBrowser
        ? "entity-child-list entity-child-list-compact"
        : "entity-child-list";

      const noMatchesElement = document.createElement("p");

      noMatchesElement.className =
        "empty-message entity-child-no-matches";

      noMatchesElement.textContent =
        "No matching child entities.";

      noMatchesElement.hidden = true;

      function renderChildEntities(filterText = "") {
        const normalisedFilter = filterText
          .trim()
          .toLocaleLowerCase();

        const visibleChildren = childEntities.filter(childEntity => {
          return childEntity.name
            .toLocaleLowerCase()
            .includes(normalisedFilter);
        });

        childrenElement.innerHTML = "";

        visibleChildren.forEach(childEntity => {
          const childButton = document.createElement("button");
          childButton.type = "button";

          childButton.className = usesCompactChildBrowser
            ? "entity-child-button entity-child-button-compact"
            : "entity-child-button";

          childButton.textContent = childEntity.name;

          childButton.addEventListener("click", () => {
            openEntityView(childEntity.id);
          });

          childrenElement.appendChild(childButton);
        });

        noMatchesElement.hidden =
          visibleChildren.length > 0;
      }

      renderChildEntities();

      if (childFilterInput) {
        childFilterInput.addEventListener("input", event => {
          renderChildEntities(event.target.value);
        });
      }

      childrenSectionElement.appendChild(childrenElement);
      childrenSectionElement.appendChild(noMatchesElement);
    }

    entityViewElement.appendChild(childrenSectionElement);
  } 
  
  /*
    Show collections that include this entity.

    These controls add or remove the collection as a source; they do not alter
    the entity or variant direct selections.
  */
  if (relatedCollections.length > 0) {
    const isRelatedCollectionsExpanded =
      getEntityDetailSectionExpanded(
        "relatedCollections",
        entity.id,
        false
      );

    const collectionsSectionElement =
      document.createElement("section");

    collectionsSectionElement.className =
      "entity-related-collections-section";

    const collectionsHeaderElement =
      document.createElement("div");

    collectionsHeaderElement.className =
      "entity-section-header";

    const collectionsDisclosureButton =
      createEntityDetailDisclosureButton({
        label: "Related Collections",
        count: relatedCollections.length,
        expanded: isRelatedCollectionsExpanded,
        sectionKey: "relatedCollections",
        entityId: entity.id
      });

    collectionsHeaderElement.appendChild(
      collectionsDisclosureButton
    );

    collectionsSectionElement.appendChild(
      collectionsHeaderElement
    );

    if (isRelatedCollectionsExpanded) {
      const collectionsElement =
        document.createElement("div");

      collectionsElement.className =
        "entity-related-collection-list";

    relatedCollections.forEach(({
      collection,
      matchingMembers
    }) => {
      const collectionItemElement = document.createElement("div");
      collectionItemElement.className = "entity-related-collection-item";

      /*
        Keep collection information together so the action button can remain a
        separate control alongside it.
      */
      const collectionInfoElement = document.createElement("div");
      collectionInfoElement.className = "entity-related-collection-info";

      const collectionNameElement = document.createElement("span");
      collectionNameElement.className = "entity-related-collection-name";
      collectionNameElement.textContent = collection.name;

      collectionInfoElement.appendChild(collectionNameElement);

      /*
        Explain the broad collection behaviour without exposing internal IDs.
      */
      const collectionMetaElement = document.createElement("span");
      collectionMetaElement.className = "entity-related-collection-meta";

      const targetLabel = collection.target === "variant" ?
        "Variant collection" :
        "Entity collection";

      const typeLabel = collection.type === "dynamic" ?
        "dynamic" :
        "manual";

      /*
        matchingMembers contains only members belonging to the current entity.

        The count therefore describes this entity's relationship with the
        collection, not the total size of the entire collection.
      */
      const matchingCount = matchingMembers.length;

      const matchingCountLabel = collection.target === "variant" ?
        `${matchingCount} matching ${matchingCount === 1 ? "variant" : "variants"}` :
        `${matchingCount} matching ${matchingCount === 1 ? "entry" : "entries"}`;

      collectionMetaElement.textContent =
        `${targetLabel} · ${typeLabel} · ${matchingCountLabel}`;

      collectionInfoElement.appendChild(collectionMetaElement);

      /*
        Variant-target collections may include one or more particular variants of
        this entity. Show those variant names so the relationship is clear.

        Entity-target collections do not need this extra line because they include
        the entity through its default representation.
      */
      if (collection.target === "variant") {
        /*
  For variant-target collections, describe the variant the collection
  actually selects.

  quizVariantId takes priority because text-removed quiz collections may use
  a normal gallery variant while selecting a different technical quiz variant.
*/
        const matchingVariantNames = [
          ...new Set(
            matchingMembers
            .map(member => {
              const variantId =
                member.quizVariantId ||
                member.galleryVariantId;

              const matchingVariant = variantId ?
                dataIndex.variantsById[variantId] :
                null;

              if (!matchingVariant) {
                return null;
              }

              const isQuizSafeVariant =
                matchingVariant.tags?.includes("text_removed");

              return isQuizSafeVariant ?
                `${matchingVariant.displayName} (quiz-safe)` :
                matchingVariant.displayName;
            })
            .filter(Boolean)
          )
        ];

        if (matchingVariantNames.length > 0) {
          const variantsMetaElement = document.createElement("span");
          variantsMetaElement.className =
            "entity-related-collection-variants";

          variantsMetaElement.textContent =
            `Includes: ${matchingVariantNames.join(", ")}`;

          collectionInfoElement.appendChild(variantsMetaElement);
        }
      }

      const collectionActionButton = document.createElement("button");
      collectionActionButton.type = "button";
      collectionActionButton.className = "entity-selection-action";

      const isCollectionSelected =
        appState.selectedCollectionIds.has(collection.id);

      collectionActionButton.textContent = isCollectionSelected ?
        "Remove collection" :
        "Add collection";

      collectionActionButton.addEventListener("click", () => {
        const wasSelected =
          appState.selectedCollectionIds.has(collection.id);

        if (wasSelected) {
          appState.selectedCollectionIds.delete(collection.id);
        } else {
          appState.selectedCollectionIds.add(collection.id);
        }

        refreshAfterSelectionChange({
          /*
            Adding opens Gallery for immediate visual confirmation.
            Removing keeps the user on the Entity page.
          */
          showGallery: !wasSelected
        });

        if (wasSelected) {
          renderEntityView();
        }
      });

      collectionItemElement.appendChild(collectionInfoElement);
      collectionItemElement.appendChild(collectionActionButton);
      collectionsElement.appendChild(collectionItemElement);
    });

      collectionsSectionElement.appendChild(
        collectionsElement
      );
    }

    entityViewElement.appendChild(
      collectionsSectionElement
    );
  }

/*
  Keep the Variants heading and its direct-selection bulk actions together.

  The heading count includes every variant shown below, while the bulk actions
  deliberately affect only normal variants and exclude text_removed variants.

  When the default hero already shows the only normal visual variant, collapse
  this full list by default so the page does not repeat the same flag
  immediately below the summary. User disclosure choices still override this
  default during the current session.
*/
const shouldCollapseSingleDefaultVariantSection = Boolean(
  defaultVariantHeroElement &&
  selectableEntityVariants.length === 1 &&
  !appState.entityView.focusedVariantId
);

const variantsSectionExpanded =
  getEntityDetailSectionExpanded(
    "entityVariants",
    entity.id,
    !shouldCollapseSingleDefaultVariantSection
  );

const variantsHeaderElement = document.createElement("div");
variantsHeaderElement.className = "entity-section-header";

const variantsDisclosureButton =
  createEntityDetailDisclosureButton({
    label: "Variants",
    count: entityVariants.length,
    expanded: variantsSectionExpanded,
    sectionKey: "entityVariants",
    entityId: entity.id
  });

variantsHeaderElement.appendChild(variantsDisclosureButton);

const variantSelectionActions =
  createVariantGroupSelectionActions(selectableEntityVariants);

if (variantSelectionActions) {
  variantsHeaderElement.appendChild(variantSelectionActions);
}

entityViewElement.appendChild(variantsHeaderElement);

if (variantsSectionExpanded) {
  if (entityVariants.length === 0) {
    const noVariantsElement = document.createElement("p");
    noVariantsElement.className = "empty-message";
    noVariantsElement.textContent = "This entity has no variants.";
    entityViewElement.appendChild(noVariantsElement);
  } else {

    const variantsElement = document.createElement("div");
    variantsElement.className = "entity-variant-list";

    entityVariants.forEach(variant => {
      const variantElement = document.createElement("article");
      variantElement.className = "entity-variant-item";

      if (variant.id === appState.entityView.focusedVariantId) {
        variantElement.classList.add("focused");
      }

      /*
        Resolve the image asset belonging to this variant.
      */
      const asset = dataIndex.assetsById[variant.assetId];

      const imageWrapper = document.createElement("div");
      imageWrapper.className = "entity-variant-image-wrapper";

      /*
        The image itself acts as the zoom control.

        Keeping zoom on the image avoids conflicting with the Add/Remove button
        elsewhere in the variant card.
      */
      imageWrapper.classList.add("entity-variant-zoom-trigger");
      imageWrapper.tabIndex = 0;
      imageWrapper.setAttribute("role", "button");
      imageWrapper.setAttribute(
        "aria-label",
        `View ${entity.name} - ${variant.displayName} in zoom viewer`
      );

      const zoomIndex = entityZoomItems.findIndex(item => {
        return item.galleryVariantId === variant.id;
      });

      function openVariantInEntityZoom() {
        if (zoomIndex < 0) {
          return;
        }

        /*
          Replace any previous Gallery zoom context with this entity's complete
          variant list.
        */
        setGalleryZoomContext(
          "entity",
          entityZoomItems,
          zoomIndex
        );

        appState.entityView.focusedVariantId = variant.id;

        showGalleryZoomOverlay(zoomIndex);
      }

      imageWrapper.addEventListener("click", () => {
        openVariantInEntityZoom();
      });

      imageWrapper.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openVariantInEntityZoom();
        }
      });

      if (asset) {
        const imageElement = document.createElement("img");
        imageElement.className = "entity-variant-image";
        imageElement.src = asset.path;
        imageElement.alt = `${entity.name} - ${variant.displayName}`;

        imageWrapper.appendChild(imageElement);
      } else {
        imageWrapper.textContent = "No image available";
      }

      variantElement.appendChild(imageWrapper);

      const bodyElement = document.createElement("div");
      bodyElement.className = "entity-variant-body";

      /*
        Keep the variant title and any technical status label together.
      */
      const variantHeadingRowElement = document.createElement("div");
      variantHeadingRowElement.className = "entity-variant-heading-row";

      const variantHeadingElement = document.createElement("h4");
      variantHeadingElement.textContent = variant.displayName;

      variantHeadingRowElement.appendChild(variantHeadingElement);

      /*
        text_removed variants are technical quiz-safe alternatives rather than
        normal visual variants. Mark them clearly without hiding them.
      */
      const isTextRemovedVariant =
        variant.tags?.includes("text_removed");

      if (isTextRemovedVariant) {
        const technicalBadgeElement = document.createElement("span");
        technicalBadgeElement.className = "entity-variant-technical-badge";
        technicalBadgeElement.textContent = "Quiz-safe";

        variantHeadingRowElement.appendChild(technicalBadgeElement);
      }

      bodyElement.appendChild(variantHeadingRowElement);

      /*
        Variant aliases are alternative names for this specific flag design.

        They are separate from entity aliases, which name the represented place or
        organisation rather than the flag itself.
      */
      if (variant.aliases.length > 0) {
        const variantAliasesElement = document.createElement("p");
        variantAliasesElement.className = "entity-variant-meta";
        variantAliasesElement.textContent =
          `Aliases: ${variant.aliases.join(", ")}`;

        bodyElement.appendChild(variantAliasesElement);
      }

      /*
        Only render year information when it exists.
      */
      const formattedYears = formatVariantYears(variant);

      if (formattedYears) {
        const yearElement = document.createElement("p");
        yearElement.className = "entity-variant-meta";
        yearElement.textContent = formattedYears;

        bodyElement.appendChild(yearElement);
      }

      const variantTagsElement = document.createElement("p");
      variantTagsElement.className = "entity-variant-meta";
      variantTagsElement.textContent = variant.tags.length > 0 ?
        `Tags: ${variant.tags.join(", ")}` :
        "Tags: none";

      bodyElement.appendChild(variantTagsElement);

      /*
  Explain how quiz-safe text-removed variants behave in the working pool.
*/
      if (isTextRemovedVariant) {
        const technicalNoteElement = document.createElement("p");
        technicalNoteElement.className = "entity-variant-technical-note";
        technicalNoteElement.textContent =
          "Used during quizzes; the normal flag is shown in the gallery and after the answer is revealed.";

        bodyElement.appendChild(technicalNoteElement);
      }

      /*
        Add or remove this exact variant as a direct selection source.
      */
      const variantActionButton = document.createElement("button");
      variantActionButton.type = "button";
      variantActionButton.className = "entity-selection-action";

      const isVariantSelected = appState.selectedVariantIds.has(variant.id);

      variantActionButton.textContent = isVariantSelected ?
        "Remove variant from selection" :
        "Add variant to selection";

      variantActionButton.addEventListener("click", () => {
        const wasSelected = appState.selectedVariantIds.has(variant.id);

        if (wasSelected) {
          appState.selectedVariantIds.delete(variant.id);
        } else {
          appState.selectedVariantIds.add(variant.id);
        }

        refreshAfterSelectionChange({
          /*
            Adding sends the user to Gallery.
            Removing keeps them on the Entity page.
          */
          showGallery: !wasSelected
        });

        if (wasSelected) {
          /*
            The user stayed on the Entity page, so update the button text.
          */
          renderEntityView();
        }
      });

      bodyElement.appendChild(variantActionButton);
      variantElement.appendChild(bodyElement);

      variantsElement.appendChild(variantElement);
    });

    entityViewElement.appendChild(variantsElement);
  }
}

  const bottomHistoryNavigationElement =
    createEntityHistoryNavigationElement(
      previousHistoryEntry,
      "bottom"
    );

  if (bottomHistoryNavigationElement) {
    entityViewElement.appendChild(
      bottomHistoryNavigationElement
    );
  }
}
