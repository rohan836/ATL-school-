# PROJECT.md — Teacher's ATL Work Database

## Purpose

This repository is a personal knowledge base and work-management space for a teacher working with the school's Atal Tinkering Lab (ATL) programme. It helps organize teaching across Classes 5–9 and manage related plans, timetables, lab references, project ideas, and workflows.

**This is a teaching and work-management database, not a software development project.**

Read [AGENTS.md](AGENTS.md) for the rules an AI assistant must follow when reading or changing this database.

## What this database supports

- **Class and section organization:** a place to navigate information for Classes 5, 6, 7, 8, and 9, with sections C and D.
- **Teaching and lesson planning:** class-related information and teaching material as it is added.
- **Timetable management:** separate locations for the main timetable and a temporary 60-minute version.
- **Lab references:** equipment and component reference documents.
- **Project planning:** a collection of project ideas to support practical, project-based teaching.
- **Workload and workflow management:** a structured place to find and maintain the records used to plan and manage teaching-related work.

Only information that actually exists in the repository should be treated as a record. Do not assume a class plan, lesson log, task tracker, or inventory exists just because it is listed as a possible use.

## How to navigate the repository

Start here, then open the source document that matches the task. Use [AGENTS.md](AGENTS.md) for change permissions and repository-handling rules.

| Need | Main location | How to interpret it |
|---|---|---|
| Navigate all classes and sections | [Class index](CURRICULUM/CLASSES/README.md) | Index for the current class folders |
| Open a class or section | `CURRICULUM/CLASSES/Class-<number>/` | Class folders cover Classes 5–9; section folders use full names such as `Class-5-C` and `Class-5-D` |
| Check the main timetable | [Main timetable (Markdown)](SCHOOL-OPERATIONS/TIMETABLES/MAIN/ATL-LAB-TIMETABLE.md) | Main timetable source |
| View the main timetable | [Main timetable (HTML)](SCHOOL-OPERATIONS/TIMETABLES/MAIN/ATL-LAB-TIMETABLE.html) | Presentation counterpart; check it against Markdown when relevant |
| Check the temporary 60-minute timetable | [Temporary timetable (Markdown)](SCHOOL-OPERATIONS/TIMETABLES/TEMPORARY/ATL-TEMP-TIMETABLE-60-MIN.md) | Separate temporary schedule, not the main timetable |
| View the temporary timetable | [Temporary timetable (HTML)](SCHOOL-OPERATIONS/TIMETABLES/TEMPORARY/ATL-TEMP-TIMETABLE-60-MIN.html) | Presentation counterpart of the temporary schedule |
| Find the supplied ATL equipment list | [Equipment list](LAB/REFERENCE/ATL_Equipment_List_90_students.md) | Reference list, not proof that every item is currently available |
| Find Arduino component references | [Arduino components](LAB/REFERENCE/ARDUINO-COMPONENTS.md) | Component reference for teaching and planning |
| Find ESP module references | [ESP modules](LAB/REFERENCE/ESP-MODULES.md) | Module reference for teaching and planning |
| Browse component-linked project ideas | [ATL component project ideas](PROJECTS/IDEAS/ATL_COMPONENT_PROJECT_IDEAS.md) | Suggestions, not a record of completed projects |

Use the live repository to confirm that a path still exists before relying on it. The table is a navigation guide, not permission to create missing files.

## Information rules

### Timetables
Treat the main and temporary timetables as separate records. Do not merge them or assume the temporary version is approved or current. When a timetable task does not identify which version to use, ask. When an approved change affects both Markdown and HTML, check that the two versions remain consistent.

### Classes and teaching material
Use the class and section folders that already exist. Keep section names explicit. Do not invent lesson coverage, class allocations, or teaching records. Add new records only after following the confirmation requirement in [AGENTS.md](AGENTS.md).

### Lab references and project ideas
A reference list does not confirm physical stock, and an idea does not confirm approval, assignment, completion, or testing. Keep facts, proposals, and unknowns clearly distinguished.

### Workload and workflows
Use existing records as the basis for workload or workflow answers. Do not infer that a task was completed, a responsibility was assigned, or a schedule was agreed unless a repository record supports it.

### Privacy
The repository is public. Keep student-identifiable details, confidential performance records, credentials, and private staff information out of it.

## How an assistant should use this database

1. Read [AGENTS.md](AGENTS.md), then this file.
2. Identify the user's actual goal: find information, explain it, plan work, or update a record.
3. Follow the table above to the relevant source and read it before answering.
4. Avoid duplicate records. Keep the original source identifiable.
5. Follow the confirmation rules before adding, deleting, removing, renaming, moving, or making broad changes.
6. Check relevant values and connected records before reporting the result.

## Maintenance of this guide

Update this file only when the database's purpose, directory layout, or authoritative source locations change. Keep detailed class notes, timetable values, component information, and project descriptions in their relevant source files rather than copying them here.

## Current boundaries

The repository currently contains class/section navigation, main and temporary timetable files, lab reference documents, and a project-ideas document. These files support the teacher's work, but they do not by themselves provide a complete lesson log, verified live inventory, or general task tracker.
