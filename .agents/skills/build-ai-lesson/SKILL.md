---
name: build-ai-lesson
description: Facilitate ATL AI, Computing & Robotics sessions (Classes 5-9) using the unified Term 1/Term 2 curricula (CLASS-<N>-CURRICULUM.md with integrated Project 1-5 columns), Jupyter/Python/PyTorch and C++ controller workflows.
---

# ATL AI, Computing & Robotics Lesson Skill

Use this skill when planning, updating, or facilitating any AI session or project under `CURRICULUM/CLASSES/AI/`.

## 1. Required Reading First
1. Read `CURRICULUM/CLASSES/AI/AGENTS.md`.
2. Read the target grade's `CLASS-<N>-CURRICULUM.md` and `SKILL.md` inside `CURRICULUM/CLASSES/AI/Class-<N>/`.

## 2. Practical Classroom Approach
Keep lessons hands-on, visual, and age-scaled:
1. **Concept & Real-World Purpose:** Connect the topic to tangible 2017–2026 AI systems (`ChatGPT`, `o1/o3`, `DeepSeek-R1`, `AlphaGo`, `OpenAI Five Dota 2`, `AlphaFold 3`, `AlphaGenome`, `Sora`, `Genie 2`, `Gemini Robotics`) or core hardware logic (`Gates`, `CPU/GPU/NPU`).
2. **Guided Build from `Project 1`–`Project 5`:** Pick a challenge from the week's row in `CLASS-<N>-CURRICULUM.md` using `Jupyter Notebook`, `Python` (`NumPy`, `Pandas`, `Scikit-Learn`, `OpenCV`, `PyTorch`), or `C++` (`Arduino`/`ESP`/controller logic & `Raspberry Pi` Python scripts).
3. **Evaluate, Break & Verify:** Students test edge cases, inspect hallucinations/bias/errors, keep humans in charge of decisions, and protect privacy.

## 3. Unified Curriculum File Rules
- **One File Per Class (`CLASS-<N>-CURRICULUM.md`):** Strictly one 10-column table (`| Term | Month | Week | Module | Concept / Topic | Project 1 | Project 2 | Project 3 | Project 4 | Project 5 |`) covering `June–October` (`Term 1`, Weeks 01–14) and `November–March` (`Term 2`, Weeks 15–28).
- **One Unified Master File (`AI-CURRICULUM-CLASSES-5-TO-9.md`):** Combines all Class 5–9 rows into one 11-column table (`Class` + the 10 columns above).
- **Strict Separation & Zero Clutter:** Never reference external Electronics classes inside AI curriculum files; no separate `PROJECTS.md`; no timetable/minute clutter inside curriculum tables.
- **Regenerate HTML Reading Copies:** Run `python3 CURRICULUM/build_html.py` after Markdown changes.
