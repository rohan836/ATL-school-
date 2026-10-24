# Class 9 — Six-Month AI & Computing Curriculum

**Course:** Applied Python, Machine Learning and Responsible AI Projects  
**Duration:** 6 months · 12 sessions per month · 72 sessions total  
**Session length:** 60 minutes (optional extension to 75 minutes)  
**Level:** Intermediate; learners should practise independent planning with teacher checkpoints.

## Course goal
Students follow a complete, small-scale software/data/AI workflow: specify a problem, build a baseline, organise data, evaluate a model or rule-based solution, improve it based on evidence, and communicate limitations. The course emphasises dependable engineering over flashy demos.

## Learning outcomes
Students can:
- Decompose a problem and write readable, modular Python with functions, file handling and basic tests.
- Work in notebooks or scripts, document assumptions, and use simple version-control concepts to track changes.
- Clean data, reason about features, avoid train/test leakage and compare a model against a baseline.
- Select and interpret suitable evaluation measures, inspect errors and discuss generalisation and bias.
- Explain neural networks and transformer language models at a conceptual level without claiming to train foundation models.
- Describe retrieval-augmented generation and bounded tool calls, including source grounding and permissions.
- Deliver a project with a README/report, reproducible test cases, a safety review and a live or recorded teacher-approved demonstration.

## Six-month sequence

| Month | Focus | Essential concepts | Student evidence |
|---|---|---|---|
| 1 | Programming practices | Functions, modules, data structures, file I/O, exceptions, debugging, simple assertions/tests, version-control concepts | Modular program, tests and change log |
| 2 | Data preparation and analysis | Missing/outlier/duplicate values, transformations, feature design, charts, reproducible notebooks | Data dictionary and repeatable analysis |
| 3 | Model building and experimental design | Baselines, features/labels, train/validation/test idea, leakage, controlled comparisons | Experiment plan and baseline results |
| 4 | Evaluation and error analysis | Confusion matrix, precision/recall, regression error where relevant, class imbalance, overfitting and limitations | Metric table and error analysis |
| 5 | Modern AI systems | Neural-network and transformer concepts, tokens/embeddings/attention, RAG, tool permissions, prompt injection as an untrusted-input risk | Small source-grounded or bounded-tool prototype |
| 6 | Independent capstone | Scope, milestones, versioned iterations, test evidence, peer review, privacy/fairness/safety and communication | Working or labelled prototype, report and presentation |

## Technical expectations
Use moderate datasets, simple local execution, and teacher-approved libraries. GPU and cloud use are optional, not prerequisites. Use a baseline before adding model complexity. Never use private student data, uncontrolled autonomous agents, or tools with access to accounts, shell commands, or sensitive files. Source-grounded systems must distinguish retrieved facts from generated wording.

## Project pathway
Possible projects include a data-quality checker, a small environmental-data predictor, a fictional-item classifier, or a question-answering prototype over teacher-approved school guidance that displays its source. A rule-based solution is acceptable when it fits the problem better than AI. See [Project Guides](02-PROJECTS.md).

## Teaching and safety
Students should justify the problem and technique, report unsuccessful trials, and keep test data separate from training decisions. Review privacy, fairness, copyright, security and human oversight before public demonstration. Outputs with real-world impact need adult review and are outside the course's autonomous scope.

## Success standard
Evaluate whether the student can reproduce the result, explain the trade-offs, reason from test evidence, and state where the system may fail—not merely whether a model runs.

## Related documents
- [Project Guides](02-PROJECTS.md)
- [72-Session Plan](03-72-SESSION-PLAN.md)
- [Assessment and Teacher Guide](04-ASSESSMENT-AND-TEACHER-GUIDE.md)
