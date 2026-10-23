# Repository-Wide Agent Instructions

These rules apply to every AI agent and coding assistant that works in this repository.

## Start here

1. Read [PROJECT.md](PROJECT.md) before making changes.
2. Use PROJECT.md to find the authoritative file for the requested subject.
3. Read the relevant source files before editing. Do not rely on an old summary when the current file is available.

## Protect the source of truth

- Keep one authoritative location for each subject. Link to it instead of copying the same facts into several files.
- Keep the main timetable separate from the temporary 60-minute timetable.
- If a timetable change affects both Markdown and HTML files, keep the pair consistent.
- Do not change the main timetable unless the request clearly authorizes that change.
- Do not treat an equipment catalogue or suggested quantity as proof that an item is physically available.
- Do not claim that a project, circuit, or firmware build has been tested without recorded test evidence.

## Make controlled changes

- Inspect the current repository structure and relevant links before moving or renaming files.
- Preserve useful information. Remove a file only when it is confirmed to be a duplicate or its removal is explicitly requested.
- Make the smallest complete change for the task.
- Use descriptive file names and relative links.
- After a move or rename, update every affected link and the source-of-truth map in PROJECT.md.
- Do not create empty placeholder files or directories just to predict future work.
- Do not create new curricula, project requirements, inventory quantities, or timetable details unless requested.

## Class naming

- The class range is Class 5 through Class 9.
- Use full section names in paths: `Class-5-C`, `Class-5-D`, and the equivalent names for Classes 6–9.
- Do not create ambiguous section-only folders named just `C` or `D`.

## Hardware accuracy and safety

- Confirm the exact board or module model before writing wiring instructions.
- Verify pinout, voltage, current, and compatibility against manufacturer documentation.
- Do not suggest powering motors, servos, pumps, relay coils, or high-current LED strips directly from GPIO pins.
- Treat gas sensors as learning devices, not certified life-safety alarms.
- Do not connect school-built low-voltage circuits directly to household mains.
- Identify assumptions and untested steps clearly.

## Privacy and security

- Never commit credentials, access tokens, or passwords.
- Do not add identifiable student records, sensitive student performance details, or private staff information to this public repository.

## Verify before finishing

- Confirm the requested files exist at their final paths.
- Check for broken relative links, duplicate indexes, stale path references, and accidental changes to unrelated files.
- Report what changed and what was verified. Do not claim hardware testing when no hardware test occurred.
