# ATL School — Master Project Context

## Purpose

This repository organizes the ATL teaching programme for Classes 5–9. It supports AI education, electronics, robotics, project-based learning, class planning, timetables, and lab reference material.

## Control files

- **[AGENTS.md](AGENTS.md)** — rules that apply to AI agents working anywhere in this repository.
- **[PROJECT.md](PROJECT.md)** — the project overview, directory map, authoritative sources, constraints, and maintenance workflow. Read it after AGENTS.md.

AGENTS.md defines how an agent must work. PROJECT.md explains what this repository contains and where its information lives.

## Authoritative sources

Use the relevant file below instead of copying information into another document.

- **[Class curriculum index](CURRICULUM/CLASSES/README.md)** — links to Classes 5–9 and their C/D sections.
- **[Main ATL timetable — Markdown](SCHOOL-OPERATIONS/TIMETABLES/MAIN/ATL-LAB-TIMETABLE.md)** — current main timetable.
- **[Main ATL timetable — HTML](SCHOOL-OPERATIONS/TIMETABLES/MAIN/ATL-LAB-TIMETABLE.html)** — HTML presentation of the main timetable. Keep it consistent with the Markdown version.
- **[Temporary 60-minute timetable — Markdown](SCHOOL-OPERATIONS/TIMETABLES/TEMPORARY/ATL-TEMP-TIMETABLE-60-MIN.md)** — separate trial timetable; it does not replace the main timetable.
- **[Temporary 60-minute timetable — HTML](SCHOOL-OPERATIONS/TIMETABLES/TEMPORARY/ATL-TEMP-TIMETABLE-60-MIN.html)** — HTML presentation of the temporary timetable. Keep it consistent with its Markdown version.
- **[Original ATL equipment list](LAB/REFERENCE/ATL_Equipment_List_90_students.md)** — source list with equipment specifications and suggested quantities. It is not proof of current physical stock.
- **[Arduino component catalogue](LAB/REFERENCE/ARDUINO-COMPONENTS.md)** — reference catalogue for boards and modules. It is not proof that every item is in the lab.
- **[ESP module catalogue](LAB/REFERENCE/ESP-MODULES.md)** — reference catalogue for ESP32/ESP8266-compatible modules and boards. It is not proof that every item is in the lab.
- **[ATL component-to-project ideas](PROJECTS/IDEAS/ATL_COMPONENT_PROJECT_IDEAS.md)** — school project ideas mapped to names in the original equipment list. Check actual stock and project requirements before planning a build.

## Repository map

- `AGENTS.md` — repository-wide agent instructions.
- `PROJECT.md` — master project context and source-of-truth map.
- `CURRICULUM/CLASSES/` — class and section folders for Classes 5–9.
- `SCHOOL-OPERATIONS/TIMETABLES/MAIN/` — the main timetable files.
- `SCHOOL-OPERATIONS/TIMETABLES/TEMPORARY/` — the separate 60-minute trial timetable files.
- `LAB/REFERENCE/` — original equipment list and hardware reference catalogues.
- `PROJECTS/IDEAS/` — component-based project idea guide.

## Current state and limits

- The class structure covers Class 5 through Class 9, with full section names such as `Class-5-C` and `Class-5-D`.
- Main and temporary timetables are separate. Do not replace one with the other.
- The equipment list contains source specifications and suggested quantities. The repository does not yet contain a verified record of physical stock.
- The Arduino and ESP documents are reference catalogues, not inventory records.
- Project ideas are suggestions. An idea is not proof that all parts are available or that a project has been built or tested.
- Do not claim a circuit, firmware build, or project has been tested unless the repository records the test and result.

## Working workflow

1. Read AGENTS.md and this file before changing repository structure or project-wide information.
2. Identify the authoritative file for the requested subject.
3. Inspect relevant existing content and links before editing.
4. Make the smallest complete change. Preserve useful source information.
5. Update related files together when a change affects paired documents, such as the Markdown and HTML timetable versions.
6. Check relative links, file names, class/section names, calculations, and consistency after changes.
7. Record test results and distinguish tested, untested, planned, and verified items.
8. Update this file when repository structure, source-of-truth locations, constraints, or project-wide procedures change.

## Hardware and classroom safety

- Confirm the exact board and module model before wiring.
- Verify pinout, supply voltage, logic voltage, current requirements, and compatibility against the exact product documentation.
- Many ESP32 and ESP8266 GPIO pins use 3.3 V logic. Verify the exact board before connecting signals.
- Do not power motors, servos, pumps, relay coils, or high-current LED strips directly from GPIO pins.
- Use soldering, cutting, drilling, hot glue, heat guns, and power tools only with teacher supervision and suitable protective equipment.
- Gas sensors are learning tools, not certified life-safety alarms.
- Do not connect school-built low-voltage circuits directly to household mains.

## Data protection

- Do not commit Wi-Fi passwords, API keys, access tokens, or other secrets.
- Do not add identifiable student records, private student performance information, or sensitive staff information to this public repository.

## Update history

- **2026-10-15:** Created the initial master project context and ESP module reference.
- **2026-10-16:** Added the Arduino component reference catalogue.
- **2026-10-21:** Added the main ATL timetable and the separate temporary 60-minute timetable.
- **2026-10-23:** Aligned existing materials under curriculum, lab reference, project ideas, and timetable sections; added repository-wide agent instructions.
