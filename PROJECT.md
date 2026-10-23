# ATL School — Project Control and Context

This file is the central project brief and navigation map for the ATL School repository. It explains what the project is, how its information is organized, which files are authoritative, and how the repository holder expects changes to be managed.

For agent behavior, permission gates, and safe execution rules, read [AGENTS.md](AGENTS.md). The two files are intentionally separate:
- **AGENTS.md:** how an agent must behave and what it must ask before changing.
- **PROJECT.md:** what this project is, how its information connects, and where to find or maintain each part.

## 1. Project identity

This repository supports the Atal Tinkering Lab (ATL) teaching programme at the school. The teaching work includes AI, electronics, robotics, and project-based learning for Classes 5–9.

### Teaching team and responsibilities

- **Rohan and his brother:** teach AI.
- **Rushi:** teaches electronics through projects.
- The team works together within the ATL programme and lab context.

These role notes describe the teaching context. They do not define or approve a timetable, workload, or class allocation. Use the current timetable files for scheduled assignments.

### Project goals

Use this repository to keep teaching and lab information organized and connected, including:
- class and section curriculum context;
- approved and temporary timetables;
- project concepts and project work;
- lab equipment and component references;
- teaching notes and records as they are added with repository-holder approval.

The repository should let a teacher or a coding agent understand the ATL project by reading this file first and then following its links to relevant source documents.

## 2. Operating model: one source of truth

Keep each authoritative fact in one clear place. Other files should link to it rather than copy it.

| Information | Authoritative location | Interpretation |
|---|---|---|
| Repository-wide agent rules and approval requirements | [AGENTS.md](AGENTS.md) | Mandatory behavior for agents |
| Project identity, structure, and source map | This file | Central orientation and control map |
| Classes 5–9 and section folder index | [Curriculum index](CURRICULUM/CLASSES/README.md) | Navigation to class/section areas |
| Main timetable | [Main timetable Markdown](SCHOOL-OPERATIONS/TIMETABLES/MAIN/ATL-LAB-TIMETABLE.md) | Main schedule source |
| Main timetable presentation | [Main timetable HTML](SCHOOL-OPERATIONS/TIMETABLES/MAIN/ATL-LAB-TIMETABLE.html) | HTML counterpart; check consistency before approved edits |
| Temporary 60-minute timetable | [Temporary timetable Markdown](SCHOOL-OPERATIONS/TIMETABLES/TEMPORARY/ATL-TEMP-TIMETABLE-60-MIN.md) | Separate temporary/proposed schedule; not the main schedule |
| Temporary timetable presentation | [Temporary timetable HTML](SCHOOL-OPERATIONS/TIMETABLES/TEMPORARY/ATL-TEMP-TIMETABLE-60-MIN.html) | HTML counterpart of temporary schedule |
| Original ATL equipment list | [Equipment list](LAB/REFERENCE/ATL_Equipment_List_90_students.md) | Source catalogue/list, not verified stock |
| Arduino component reference | [Arduino catalogue](LAB/REFERENCE/ARDUINO-COMPONENTS.md) | Reference information, not verified stock |
| ESP module reference | [ESP catalogue](LAB/REFERENCE/ESP-MODULES.md) | Reference information, not verified stock |
| Component-linked project suggestions | [Project ideas](PROJECTS/IDEAS/ATL_COMPONENT_PROJECT_IDEAS.md) | Ideas only; check availability and suitability |

**Important distinction:** a suggested component quantity, catalogue entry, or project idea does not establish that the school owns the item, that it is currently available, or that a project has been built and tested.

## 3. Repository map

```text
ATL-school-/
├── AGENTS.md                         # Agent rules, safety, and approval gates
├── PROJECT.md                        # This project control/context document
├── CURRICULUM/
│   └── CLASSES/
│       ├── README.md                 # Class 5–9 navigation index
│       ├── Class-5/
│       │   ├── README.md
│       │   ├── Class-5-C/README.md
│       │   └── Class-5-D/README.md
│       ├── Class-6/                  # Same class + C/D pattern
│       ├── Class-7/
│       ├── Class-8/
│       └── Class-9/
├── SCHOOL-OPERATIONS/
│   └── TIMETABLES/
│       ├── MAIN/                     # Main schedule, Markdown + HTML
│       └── TEMPORARY/                # Temporary 60-minute schedule, Markdown + HTML
├── LAB/
│   └── REFERENCE/                    # Original list and component catalogues
└── PROJECTS/
    └── IDEAS/                        # Existing component/project ideas reference
```

The map is an orientation guide. Confirm the live repository tree before assuming that a listed file exists or that a path has not changed.

## 4. Class and section conventions

- The programme currently covers Classes 5, 6, 7, 8, and 9.
- Each class has section C and section D.
- Use full section names in folder paths: `Class-5-C`, `Class-5-D`, and corresponding names for other classes.
- The class-level README links to its section folders.
- The curriculum index links to all classes and sections.
- Do not create lesson content, curriculum scope, or student records without a direct request and appropriate approval.

## 5. Timetable interpretation

- The MAIN timetable folder holds the main timetable files.
- The TEMPORARY folder holds the separate 60-minute timetable files.
- Temporary does not mean approved or current as the main schedule.
- Do not merge, replace, or silently modify these schedules.
- If a timetable edit is requested, identify which schedule is in scope. If unclear, ask.
- When an approved edit changes schedule content, check both Markdown and HTML counterparts and update them together only when the holder authorizes the change.

## 6. Lab and project interpretation

### Lab reference

The LAB/REFERENCE documents contain equipment and component reference information. They do not yet represent a verified physical inventory unless a document explicitly records a physical count and its date.

Do not state that an item is available, reserved, or in stock based only on its presence in a reference catalogue.

### Project ideas

The existing component-project guide is an idea source. It does not mean that any listed project is approved, assigned to a class, active, completed, or tested.

A project-specific record or workflow may be added only after the repository holder requests or approves it.

## 7. How to work with this repository

For any human, coding agent, or other AI system:

1. Start with AGENTS.md and this PROJECT.md.
2. Identify the requested outcome and scope.
3. Follow the source-of-truth table to the relevant file(s).
4. Read the source content; do not guess from file names or old conversation notes.
5. If a request could involve adding, deleting, removing content, renaming, moving, or a broad structural edit, follow the confirmation gates in AGENTS.md.
6. Make authorized changes only. Keep connected records aligned and avoid duplicate facts.
7. Verify affected paths, links, values, and consistency.
8. Report the change, verification, and anything that remains unconfirmed.

## 8. Project context maintenance

Update this file when an approved change alters:
- project purpose or teaching team responsibilities;
- the repository's directory structure;
- authoritative source locations;
- how timetables or lab references must be interpreted;
- repository-wide workflows or constraints.

Do not add every lesson note, component detail, or project description here. Store those in their approved subject location and link them from this map.

## 9. Current limitations and known boundaries

- There is a source equipment list and component reference material, but no claim here that these are verified current stock records.
- The main and temporary timetables are distinct sources.
- The project idea guide is not a project status tracker.
- This repository is public. Keep credentials, student-identifiable records, sensitive student performance details, and private staff information out of it.
- A coding agent can use repository documents as context, but no Markdown file can guarantee that every model or agent platform reads every file automatically. The agent must support its instruction format and be started with this repository as its workspace.

## 10. Context change log

- **2026-10-23:** Revised the project context to define the ATL teaching team, project scope, source-of-truth register, repository navigation, timetable boundaries, and agent handoff process. Revised AGENTS.md to define explicit approval gates and safe repository operations.
