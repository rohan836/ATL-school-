---
name: build-electronics-lesson
description: Facilitate ATL Electronics & Robotics sessions (8 groups of 5) using the unified Term 1/Term 2 curricula (CLASS-<N>-CURRICULUM.md with integrated Project 1-5 columns), Chrome/YouTube visual behavior intros, and 3-box debugging logs.
---

# ATL Electronics Session & Project Facilitator

Use this skill when planning, updating, or facilitating any Electronics session or hands-on project under `CURRICULUM/CLASSES/ELECTRONICS-ROBOTICS/`.

## 1. Required Reading First
1. Read `CURRICULUM/CLASSES/ELECTRONICS-ROBOTICS/AGENTS.md`.
2. Read the target grade's `CLASS-<N>-CURRICULUM.md` and `SKILL.md` inside `CURRICULUM/CLASSES/ELECTRONICS-ROBOTICS/Class-<N>/`.
3. Check `main ATL school/Electronic component sorted list/README.md` and `main ATL school/Electronic Shop Purchase Order List/00-MASTER-PURCHASE-ORDER.md` so all parts match verified lab stock.

## 2. Facilitator Workflow (40 Students · 8 Groups of 5)
Never deliver textbook theory lectures or hand out pin-by-pin wiring recipes. Run every session in three blocks:
1. **Visual Behavior Intro:** Use Chrome component diagrams (pinouts, polarity, voltage limits) and a short YouTube clip showing *only* how the component behaves. Pick one or more project challenges from `Project 1`–`Project 5` on that week's row in `CLASS-<N>-CURRICULUM.md`.
2. **Open-Ended Group Build & Debugging:** 8 groups of 5 collect ATL stock, build, test, break, and debug independently using the 4-Step Fault-Finder (`Power/Polarity → Contact → Value/Pinout → Measure/Isolate`).
3. **Showcase & 3-Box Notebook Debugging Log:** 2–3 groups demo their build while students record three boxes in their notebook (**Problem | What Broke | How We Fixed It**), followed by bench reset.

## 3. Unified Curriculum File Rules
- **One File Per Class (`CLASS-<N>-CURRICULUM.md`):** Strictly one 10-column table (`| Term | Month | Week | Module | Component / Topic | Project 1 | Project 2 | Project 3 | Project 4 | Project 5 |`) covering `June–October` (`Term 1`, Weeks 01–14) and `November–March` (`Term 2`, Weeks 15–28).
- **One Unified Master File (`ELECTRONICS-ROBOTICS-CURRICULUM-CLASSES-5-TO-9.md`):** Combines all Class 5–9 rows into one 11-column table (`Class` + the 10 columns above).
- **Zero Extra Clutter:** No separate `PROJECTS.md`, no `TEACHER-NOTES`, no timetable/minute numbers inside curriculum tables, and zero AI topics (`CURRICULUM/CLASSES/AI/`).
- **Regenerate HTML Reading Copies:** Run `python3 CURRICULUM/build_html.py` after Markdown changes.
