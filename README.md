# Focus Board
A small task planner built with plain JavaScript.

## Features
- Add tasks with title and priority (blank, too-long and duplicate titles rejected)
- Complete/undo, delete with Undo delete, search, All/Open/Completed filters
- Saved in localStorage; damaged data is ignored safely
- Optional remote suggestions with loading, error and retry
- JSON export and import

## Run
Open index.html in a modern browser. No server or install needed.
Suggestions need internet; everything else works offline.

## Folder structure
index.html, styles.css, src/app.js (all logic), notes/daily-reflections.md

## Manual tests
1. Add valid task -> appears and survives reload.
2. Add " write tests " after "Write tests" -> duplicate error, text kept.
3. Filter Completed -> only completed tasks show.
4. Load suggestions offline -> error shown, local tasks still work.
5. Delete a task, click Undo delete -> it returns to its position.
6. Export, then import the file -> tasks restored; a bad file is rejected.

## Known limitations
Suggestions need internet. Task ids are simple numbers.

## What I learned
(2-3 sentences: what you learned, your hardest bug, next improvement.)