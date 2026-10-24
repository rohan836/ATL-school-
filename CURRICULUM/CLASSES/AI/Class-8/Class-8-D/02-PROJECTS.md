# Class 8 — Projects and Build Guides

Projects focus on the full data/ML workflow, thoughtful evaluation and introductory modern-AI system design. GPU access, web cameras and paid services are not prerequisites.

| Month | Project | Focus | Evidence |
|---|---|---|---|
| 1 | Modular Python Utility | Functions, modules, files, exceptions and tests | Readable code and test cases |
| 2 | Data Quality and Visualisation | Cleaning, summaries, charts, notebooks | Reproducible analysis |
| 3 | Baseline ML Model | Data split, leakage, baseline comparison | Evaluation log |
| 4 | Model Error Lab | Confusion matrix, precision/recall concept, generalisation | Error analysis and metric choice |
| 5 | Small Retrieval Demo | Search approved passages and ground answers in source text | Source-linked answers and failure cases |
| 6 | Applied AI/Data Capstone | End-to-end prototype and report | Code/notebook, evaluation, risk review and demo |

## Month 1 — Modular Python Utility
Build a small file-backed task tracker, data validator or quiz utility. Use at least two functions, clear input validation, and either exceptions or explicit error messages. Write a short set of tests for valid and invalid inputs. Explain how modularity aids debugging.

## Month 2 — Data Quality and Visualisation
Use a small, non-sensitive dataset. Document its source, columns and meaning; inspect missing values, duplicates, inconsistent categories and outliers; choose and justify cleaning steps; and make one or two plots. Include a reproducible sequence and avoid claims unsupported by the sample.

## Month 3 — Baseline ML Model
Choose a classroom-size classification or regression task. Before using a model, define a simple baseline. Identify features and target, split data before model selection where possible, fit a beginner model if the environment supports it, and compare results with the baseline. If tools are unavailable, analyse prepared output or use a paper model.

## Month 4 — Model Error Lab
Build a confusion matrix from predictions and interpret which classes are confused. Discuss accuracy and, as appropriate, precision/recall in plain language. Inspect incorrect cases and consider class imbalance, leakage and overfitting. Do not report a single metric without the test-set context.

## Month 5 — Small Retrieval Demo
Use a teacher-approved text collection. Split it into short passages, retrieve relevant passages for a question, and answer only from those passages. Display which passage supports each answer and use “not found in the supplied material” when evidence is missing. Compare a supported answer with an unanswerable query. A manual paper search is acceptable.

## Month 6 — Applied AI/Data Capstone
Choose one manageable problem and produce an end-to-end artefact with a clear user, inputs, output, baseline, tests and limitations. Include reproducible instructions, sources, an error analysis, and a short privacy/fairness note. Keep live tools bounded and teacher approved.

## Minimum submission standard
Code/notebook or labelled simulation; data/source note; train/test or test-case description; metric or qualitative evidence; at least one error-driven revision; and honest limitations. Never expose personal student data or allow a project to take consequential actions on real users.
