# ATL Lab — Project Control File

## Project Identity

- **Project:** Atal Tinkering Lab (ATL) school projects
- **Repository:** https://github.com/rohan836/ATL-school-
- **Default branch:** `main`
- **Purpose:** Build, document, test, and maintain educational hardware and software projects, including projects based on ESP32 and ESP8266 boards.

## Why This File Exists

This is the project's **master context file for coding agents and AI assistants**. Read it before making project changes. It defines the project structure, current state, and rules for maintaining the repository.

Keep this file focused on project-wide information. **Do not put long hardware catalogues, wiring tables, or detailed implementation notes here.** Store those in the appropriate separate files and link them below.

## Source-of-Truth Files

- **[ATL_Equipment_List_90_students.md](ATL_Equipment_List_90_students.md)** — original ATL equipment catalogue, retaining the source specifications and quantities.
- **[ATL_COMPONENT_PROJECT_IDEAS.md](ATL_COMPONENT_PROJECT_IDEAS.md)** — two or three practical school project ideas for each item in the ATL equipment catalogue.
- **[ARDUINO-COMPONENTS.md](ARDUINO-COMPONENTS.md)** — catalogue of major Arduino board families and common Arduino-compatible boards, plus modules grouped by purpose, including sensors, displays, robotics, communication, power, cameras, shields, and project bundles. This is a planning reference, not proof that the ATL Lab owns every item.
- **[ESP-MODULES.md](ESP-MODULES.md)** — catalogue of pre-built, market-available modules and boards that may connect to ESP32 / ESP8266 projects. It includes camera systems and other module categories. This is a reference list, not proof that the ATL Lab owns every item.
- **[README.md](README.md)** — public landing page and quick-start instructions, when created.
- **[HARDWARE-INVENTORY.md](HARDWARE-INVENTORY.md)** — actual hardware physically available in the lab, including quantity and verification status, when created.
- **[PROJECTS.md](PROJECTS.md)** — index of individual ATL projects, when created.
- **[WIRING.md](WIRING.md)** — shared wiring conventions and pin-mapping guidance, when created.
- **[EXPERIMENTS.md](EXPERIMENTS.md)** — test procedures and experiment results, when created.
- **[CHANGELOG.md](CHANGELOG.md)** — important project-wide changes, when created.

Create a referenced file when there is useful content to put in it. Do not create empty placeholder files just to match this list.

## Current Repository State

- `PROJECT.md` is the master project context and maintenance guide.
- `ARDUINO-COMPONENTS.md` is the separate reference catalogue for Arduino boards, modules, shields, and project bundles, grouped by function.
- `ESP-MODULES.md` is the separate reference catalogue for pre-built ESP-compatible modules and development boards.
- The Arduino and ESP catalogues describe common market products and planning options. The exact inventory of the ATL Lab has not yet been confirmed.
- The exact ESP32 / ESP8266 board models, project requirements, and available parts still need to be recorded.
- Do not claim that a circuit, module, firmware build, or project has been tested unless repository evidence records the test.

Update this section when important facts change.

## Required Workflow for Every Coding Agent

1. Read this file before starting work.
2. Read the relevant project-specific Markdown files and inspect the existing code before editing.
3. Confirm the target board, exact module model, required behavior, and relevant electrical limits. If a critical detail is unknown, state the assumption or ask for clarification instead of inventing a fact.
4. Make the smallest coherent change that meets the task.
5. Keep wiring documentation, source code, dependencies, and tests consistent with each other.
6. Test the change when tools and hardware are available. Record what was tested, the result, and anything that could not be tested.
7. Update this file when project-wide structure, goals, decisions, status, or agent instructions change.
8. Update the relevant detailed document when its subject changes. For example, update `ESP-MODULES.md` when the module catalogue changes, not by copying the full list into this file.
9. Add a short entry to `CHANGELOG.md` for meaningful project-wide changes if that file exists. Create it when a useful history of changes is needed.
10. Check links, filenames, pin names, and instructions before committing.

## Repository Maintenance Rules

- Keep one clear source of truth for each subject.
- Use Markdown files for human-readable project context, module records, wiring plans, and build instructions.
- Use descriptive filenames and relative links between files.
- Separate **planned**, **available**, **tested**, and **verified** hardware. These statuses are not interchangeable.
- Never guess a module's pinout, supply voltage, current requirement, or compatibility. Check the exact product documentation.
- Most ESP32 and ESP8266 GPIO pins use 3.3 V logic. Verify the exact board and module before connecting signals.
- Do not power motors, servos, pumps, relay coils, or high-current LED strips directly from GPIO pins.
- Do not store Wi-Fi passwords, API keys, access tokens, or other secrets in tracked files.
- Do not delete or overwrite useful project information without checking how it is used.
- Keep documentation practical. Explain what changed, why it changed, how to use it, and how to verify it.

## How to Update This File

Update `PROJECT.md` whenever a change affects one or more of these items:

- Project goals or scope
- Repository structure or source-of-truth files
- Target controller boards or development environment
- Major design decisions or constraints
- Current implementation status
- Build, test, safety, or contribution workflow
- Instructions that future coding agents must follow

For small changes to a sensor list, code implementation, or one project's wiring, update the relevant detailed file instead. Do not add every minor detail to this master file.

When updating this file, preserve valid existing information, correct outdated links, and keep the **Current Repository State** section accurate.

## Project Status Checklist

- [ ] Confirm the exact Arduino, ESP32, and ESP8266 board model(s) physically available.
- [ ] Record the modules and quantities physically available in the ATL Lab.
- [ ] Identify the first project and define its requirements.
- [ ] Create a project-specific folder or document when the first project is selected.
- [ ] Record wiring and power requirements before building.
- [ ] Test hardware and firmware in small steps.
- [ ] Record test evidence and known limitations.

## Update History

- **2026-10-15:** Created the master project file and separated the pre-built ESP32 / ESP8266 module catalogue into `ESP-MODULES.md`.
- **2026-10-16:** Added `ARDUINO-COMPONENTS.md`, a categorized planning catalogue of Arduino boards and common modules, their purposes, compatibility cautions, and school project bundles.
