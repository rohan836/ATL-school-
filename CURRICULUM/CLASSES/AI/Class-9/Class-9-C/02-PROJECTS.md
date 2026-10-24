# Class 9 — Projects and Build Guides

Projects apply software-engineering habits, experiment design and responsible AI. Students justify why the selected method fits the task; a simple baseline may outperform or be safer than a complex model.

| Month | Project | Focus | Evidence |
|---|---|---|---|
| 1 | Tested Python Package/Utility | Functions, modules, exceptions, tests, change log | Runnable code and repeatable tests |
| 2 | Data Audit Pipeline | Cleaning, features, data dictionary, reproducibility | Reproducible notebook/script |
| 3 | Baseline vs Model | Train/test separation, leakage prevention, controlled comparison | Experiment table |
| 4 | Evaluation Report | Metric choice, error analysis, bias and generalisation | Metric table with limitations |
| 5 | Source-Grounded AI Workflow | Retrieval, source display, bounded tools, untrusted input | Traceable answer and edge-case results |
| 6 | Independent Capstone | Scope, milestones, evaluation, documentation, human review | Demo, report, code and retrospective |

## Month 1 — Tested Python Utility
Build a small command-line or notebook utility that reads input, validates it, applies reusable functions and produces a result. Include simple tests/assertions and error cases. Maintain a short change log; Git may be used if available, but concepts matter more than setup.

## Month 2 — Data Audit Pipeline
Choose a modest, approved dataset. Write a data dictionary; detect missing, duplicated or inconsistent values; justify transformations; visualise relevant variables; and document assumptions. Keep the original data unchanged and make the cleaning process repeatable.

## Month 3 — Baseline vs Model
Define the task and target, choose a baseline, set aside test data before iterative modelling, and document features. Check for leakage—for example, columns that directly reveal the answer or values calculated using information unavailable at prediction time. Compare the baseline and model under the same test conditions.

## Month 4 — Evaluation Report
Choose appropriate metrics. For classification, use a confusion matrix and explain precision/recall where useful; for regression, consider an understandable error measure. Inspect mistakes and discuss who/what might be underserved. Report data limitations and avoid claiming broad real-world performance from a small dataset.

## Month 5 — Source-Grounded AI Workflow
Create a tiny retrieval-augmented question-answering prototype using only teacher-approved material. Display retrieved passages, distinguish quotes/source facts from generated wording, and decline when the evidence is absent. If a tool is used, expose the tool call and result, restrict permissions, and treat retrieved text as untrusted input—not as permission to ignore rules.

## Month 6 — Independent Capstone
Students independently or in small teams build a bounded solution. Required stages: problem brief; baseline; data/source review; implementation; test design; results; error-driven iteration; privacy/fairness/security review; documentation; demonstration; individual reflection. A non-AI approach is allowed where more appropriate.

## Minimum submission standard
A reproducible README; code or labelled prototype; dataset/source and assumptions; baseline plus fair test; justified metric; observed failure and improvement; responsible-use review; and explanation of limitations. No uncontrolled autonomous actions, external use of private data, or consequential decisions about real people.
