# ATL Repository Agent Orchestration

This file is the repository-wide operating contract for AI and coding agents. It is separate from [PROJECT.md](PROJECT.md), which is the project map and domain guide.

## Mandatory entry point

At the start of every task:

1. Read this entire file.
2. Read [PROJECT.md](PROJECT.md) to understand the ATL programme, repository map, source-of-truth locations, and change process.
3. Read only the relevant source files and any applicable nested `AGENTS.md` instructions.
4. If the task, source of truth, requested change, or authorization is unclear, ask the repository holder before acting.

Do not assume that prior chat context replaces repository documents. Use the files in the current branch as the source of truth.

## Repository holder authority and approval gates

The repository holder's direct request is the highest project-level authority. Do not silently reinterpret it or expand its scope.

**Ask for explicit confirmation before any of these actions unless the repository holder has already clearly authorized that exact action in the current request:**

- Delete a file or folder, including a suspected duplicate.
- Add a new file, folder, curriculum item, project, inventory record, or other repository content.
- Remove content from an existing file.
- Rename or move files or folders.
- Replace a source-of-truth document, or make a change that could alter approved school operations.
- Make a broad or irreversible change, perform a bulk edit, or change the repository's structure.

A request to “organize” or “align” permits inspection and planning. It does not by itself authorize deletion, renaming, removal of information, or creation of new substantive records. Present a proposed change list and wait for approval when needed.

When authorization is clear, do only the requested scope. If new risks or unrequested changes emerge, stop and ask.

## Safe read, edit, and commit workflow

### Read and plan
- Inspect the current branch, repository tree, relevant file contents, and references before editing.
- Identify the authoritative source for each fact. Do not infer stock, timetable status, lesson coverage, or project test results.
- Prepare a concise change plan for multi-file or structural tasks. Ask for approval if any approval-gated action is included and not already authorized.

### Edit
- Preserve existing information unless the holder explicitly approves its removal.
- Prefer precise edits to wholesale rewrites.
- Do not duplicate facts that already have an authoritative home. Link to that home.
- Use stable, descriptive paths and relative Markdown links.
- Keep paired formats (for example, Markdown and HTML timetables) consistent only when the holder authorizes the relevant update.
- Never create placeholder content to make an empty directory appear in Git.

### Verify
- Check the final diff or changed paths against the approved plan.
- Verify Markdown links and references affected by the change.
- Check class names, section names, dates, durations, arithmetic, and cross-file consistency where relevant.
- Distinguish confirmed facts, proposals, assumptions, and unverified information.
- Do not claim that hardware or a project was tested unless evidence records that test.

### Report
- State what changed, what did not change, what was checked, and any remaining uncertainty.
- Provide the commit or pull request link when available.
- Never claim success for an action that failed or was not verified.

## Source-of-truth and domain rules

- Use [PROJECT.md](PROJECT.md) to locate authoritative records.
- Approved timetable information must remain distinct from proposed or temporary schedules.
- Equipment catalogues and school-provided lists are not proof of actual, available physical stock.
- A project idea is not a confirmed project, and a plan is not evidence of a completed build.
- The class range is Class 5 through Class 9. Use full section names such as `Class-5-C` and `Class-5-D`; do not use bare section folder names `C` or `D`.
- Do not add student-identifiable data or sensitive staff information to this public repository.

## Hardware safety

- Confirm the exact board and module model before writing connection instructions.
- Verify pinout, supply voltage, logic voltage, current, and compatibility against reliable manufacturer documentation.
- Do not drive motors, servos, pumps, relay coils, or high-current LED strips directly from GPIO pins.
- Treat gas sensors as learning components, not certified life-safety alarms.
- Do not connect school-built low-voltage circuits directly to household mains.
- Clearly mark assumptions and untested instructions.

## Scope of this file

Keep this file focused on agent behavior, approvals, and safe execution. Put project purpose, people and responsibilities, the directory map, source-of-truth register, current status, and domain-specific definitions in [PROJECT.md](PROJECT.md). Put repeatable task procedures in skill files only when the holder asks to create them.
