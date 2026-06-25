# Vexillator

A browser-based flag database, gallery and quiz app.

Public site:

https://malbonius.github.io/vexillator/

## What Vexillator does

Vexillator lets you explore, compare and practise flags through a structured browser, searchable entity pages, gallery views and quiz modes.

The app is designed for flags that may have complicated relationships: countries, territories, regions, counties, organisations, historical entities, unofficial flags, alternative renditions, reverse sides and quiz-safe variants.

## Basic user flow

A typical session works like this:

1. Open **Browse** or **Search** to find something interesting.
2. Add collections, entities, entity groups or individual variants to the **Current Selection**.
3. View the selected flags in **Gallery**.
4. Open flags in the zoom viewer to inspect them more closely.
5. Start a **Typing Quiz** or **Multiple-Choice Quiz** using the current selection.
6. Check **Stats** to review quiz performance.

The **Current Selection** is the key link between browsing, gallery and quiz modes. If nothing is selected, the Gallery and Quiz modes have no working pool to display or test.

## Main areas of the app

### Toolbar

The toolbar gives quick access to the main areas of the app:

- **Browse** opens the collection/entity browser.
- **Current Selection** opens the drawer showing everything currently selected.
- The mode tabs switch between Search, Gallery, Typing Quiz, Multiple Choice Quiz, Stats and Entity views.
- The theme toggle switches between light and dark mode.

On smaller screens, Browse and Current Selection open as drawers.

### Browse

Browse has two modes:

- **Collections**: curated or dynamic sets of flags.
- **Entities**: places, organisations and other represented things arranged in a hierarchy.

Use Browse when you want to explore rather than search for a known item.

In Collection Browse, selecting a collection adds that collection to the Current Selection.

In Entity Browse, selecting an entity opens its Entity page. From there, you can add the entity itself, its variants, or groups of related entities when available.

### Search

Search is best when you already know roughly what you are looking for.

Search can help you find:

- entities
- variants
- collections
- related names or aliases

Search results may open an Entity page, focus a particular variant, or lead you towards a relevant collection.

### Current Selection

Current Selection shows the sources currently feeding the working pool.

The selection may include:

- collections
- individual entities
- grouped entity sources
- individual variants

Removing an item from Current Selection removes that source from the working pool. Clearing the selection resets the working pool completely.

### Entity pages

An Entity page shows information about one entity and its flags.

Depending on the data available, an Entity page may include:

- name and aliases
- entity type
- hierarchy path
- parent entities
- administration or constituent relationships
- membership relationships
- related collections
- child entities
- variants
- Add/Remove buttons
- zoomable flag images

Some Entity pages are mainly structural. For example, a broad region may help organise the browser but may not have a default flag of its own. In that case, it cannot be added directly to the working pool, although its child entities or related collections may still be selectable.

Long Entity pages include back navigation at both the top and bottom.

### Gallery

Gallery displays the flags in the current working pool.

Use it to inspect a selection visually before starting a quiz. Gallery display options let you control how much information appears on each card.

Click or tap a flag to open the zoom viewer.

### Zoom viewer

The zoom viewer lets you inspect flags more closely.

Depending on the flag data available, the zoom viewer may let you:

- move through the current gallery or entity flag set
- view another rendition of the same flag
- view the reverse side of a flag
- inspect quiz images after answer reveal

### Typing Quiz

Typing Quiz shows a flag and asks you to type the answer.

After submitting, the app shows whether the answer was correct and displays the accepted answer or answers.

Typing Quiz uses the current working pool.

### Multiple-Choice Quiz

Multiple-Choice Quiz shows a flag and asks you to choose the correct answer from several options.

After answering, the app marks the correct answer and lets you move to the next question.

Multiple-Choice Quiz uses the current working pool.

### Stats

Stats tracks quiz performance in the browser.

Stats can help you see which flags or entities you recognise well and which need more practice.

Stats are stored locally in the browser. They are not uploaded to a server by Vexillator.

## Common tasks

### Browse a region or topic

1. Open **Browse**.
2. Choose **Collections**.
3. Open the relevant collection group.
4. Select one or more collections.
5. Open **Gallery** to view the flags.

### Explore a particular place or organisation

1. Open **Search** or **Browse**.
2. Open the relevant Entity page.
3. Read the hierarchy, relationships and variant information.
4. Add the entity, a related group, or individual variants if you want to use them in Gallery or Quiz.

### Build a custom quiz

1. Add one or more collections, entities or variants to the Current Selection.
2. Open **Typing Quiz** or **Multiple-Choice Quiz**.
3. Choose the number of questions.
4. Start the quiz.

### Inspect alternative flag versions

1. Open a flag in Gallery or on an Entity page.
2. Click or tap the flag image.
3. Use the zoom viewer controls to move through related flags, alternative renditions or reverse sides when available.

### Reset your working pool

1. Open **Current Selection**.
2. Remove individual sources or use **Clear all**.

## Glossary

### Asset

An asset is an image file used by the app. Most assets are flag SVG files.

An asset is the raw visual file. It does not, by itself, define what the flag represents.

### Entity

An entity is something represented in the database.

Examples include countries, territories, regions, counties, cities, organisations, historical states and political bodies.

### Variant

A variant is a specific flag associated with an entity.

An entity can have several variants, such as a national flag, civil flag, state flag, historical flag, unofficial flag, reverse side, alternative rendition or quiz-safe version.

### Default variant

The default variant is the main flag used when an entity itself is added to the working pool.

Some structural entities do not have a default variant.

### Collection

A collection is a group of entities or variants.

Collections may be manually defined or generated dynamically from rules.

### Collection group

A collection group is a browsing category that organises collections in the Browse panel.

Collection groups help make large sets of collections easier to navigate.

### Working pool

The working pool is the current set of flags available to Gallery and Quiz modes.

It is built from the Current Selection.

### Current Selection

Current Selection is the list of sources currently feeding the working pool.

It can include collections, entities, entity groups and variants.

### Entity group

An entity group is a grouped source added from an Entity page.

For example, an Entity page may offer an option to add all child entities, all members, or all entities in a presentation subgroup.

Entity groups preserve their source in Current Selection instead of flattening everything into unrelated individual selections.

### Gallery variant

A gallery variant is the visual flag shown in the Gallery or used as the visible flag during a quiz question.

### Quiz variant

A quiz variant is the variant used for quiz answer checking.

Usually this is the same as the displayed flag, but some technical quiz-safe variants may be used differently.

### Quiz-safe variant

A quiz-safe variant is a technical version of a flag prepared for quiz use.

For example, a flag with identifying text may have a text-removed version so the answer is not visible on the image.

### Text-removed variant

A text-removed variant is a quiz-safe variant where identifying text has been removed from the image.

### Related rendition

A related rendition is another version of the same flag design.

This might be a lighter rendition, an alternative source file, or a visually adjusted version.

### Reverse side

A reverse side is the back of a flag when it differs from the front.

### Parent entity

A parent entity is a geographical or structural parent in the entity hierarchy.

Parent relationships are used for geography and structure. They are not used for every political or administrative relationship.

### Administered by

Administered by shows a political or administrative relationship separate from the geographical hierarchy.

This is useful for territories that are geographically in one region but administered by an entity elsewhere.

### Constituent of

Constituent of shows that an entity forms part of a larger composite entity.

### Membership

Membership is a non-geographical relationship between an entity and a group or organisation.

For example, an entity may be a member of an international organisation.

### Tag

A tag is a data label used to describe an entity or variant.

Entity tags describe entities. Variant tags describe specific flags.

Tags help with organisation, filtering and dynamic collections.

### Dynamic collection

A dynamic collection is generated from rules rather than a fixed list.

Dynamic collections can use tags, relationships or other data to decide what belongs in the collection.

### Manual collection

A manual collection is a fixed list of entities or variants chosen directly in the data.

### Non-quizzable

A non-quizzable item is excluded from quiz generation.

It may still be useful for browsing, context or visual reference.

## Notes

Vexillator is a work in progress. The data model is designed to grow gradually as more flags, regions, relationships and quiz behaviours are added.
