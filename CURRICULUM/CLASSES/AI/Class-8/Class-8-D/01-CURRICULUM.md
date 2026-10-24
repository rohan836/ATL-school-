# Class 8 — Six-Month AI & Computing Curriculum

**Course:** Intermediate Python, Data Science and Machine Learning  
**Duration:** 6 months · 12 sessions per month · 72 sessions total  
**Session length:** 60 minutes (optional extension to 75 minutes)  
**Level:** Intermediate; retain scaffolds for students who need them.

## Course goal
Students develop stronger programming habits, analyse modest datasets, train or inspect beginner-level machine-learning models, and evaluate results instead of focusing on accuracy alone. Modern language models, retrieval and tool-using workflows are introduced conceptually and through bounded demonstrations.

## Learning outcomes
Students can:
- Use Python functions, lists/dictionaries, files, exceptions, modules, and a notebook workflow.
- Inspect data quality, transform simple columns, summarise data and create charts.
- Explain features/labels, baseline comparisons, train/test separation, overfitting, generalisation and a confusion matrix.
- Interpret accuracy and class-specific errors; choose test cases that reveal weaknesses.
- Explain at a high level that neural networks learn parameter patterns and that transformers use attention over token sequences.
- Explain retrieval-augmented generation (RAG) as retrieving approved information before generating a response.
- Build a modest prototype, document experiments and report privacy/fairness limitations.

## Six-month sequence

| Month | Focus | Essential concepts | Student evidence |
|---|---|---|---|
| 1 | Python engineering foundations | Functions, data structures, file I/O, exceptions, modules, readable code and tests | Modular, tested mini-program |
| 2 | Data analysis | CSV files, missing/duplicate/inconsistent data, transformations, summary statistics, charts, notebooks | Reproducible data exploration |
| 3 | ML workflow | Baseline, features/labels, train/test split, leakage intuition, model fitting vs evaluation | Baseline and evaluated classifier/regressor |
| 4 | Evaluation and model behaviour | Confusion matrix, precision/recall as concepts, overfitting, generalisation, class imbalance, error analysis | Model comparison and error report |
| 5 | Neural nets and modern AI | Neurons/weights/learning at a simple level, tokens, embeddings as representations, attention intuition, RAG and tool limits | Annotated workflow or small retrieval demo |
| 6 | Capstone and communication | Clear scope, reproducible tests, iteration, documentation, risk review, human review | Documented prototype and demonstration |

## Technical expectations
Use small, teacher-approved datasets and standard local tools. NumPy/pandas or a beginner ML library may be introduced when environments support them, but the course must also work with CSV files and prepared outputs. Do not require GPU/cloud compute or training a large neural network. RAG/tool use must be restricted to a small approved corpus and safe, transparent tools.

## Project pathway
Possible projects include classifying fictional environmental samples, predicting from a small classroom dataset, analysing public weather or school-garden data, or answering questions from a teacher-approved document collection with citations to the source text. See [Project Guides](02-PROJECTS.md).

## Teaching and safety
Keep experiments small and comparable. Record dataset source, features, test method, outcome and one limitation. Separate training examples from test examples. Explain that sample accuracy does not guarantee real-world reliability. Never use student-sensitive information or make consequential decisions about real people. Every AI answer should be checked against the supplied source where facts matter.

## Success standard
A strong project has a clear baseline, leakage-aware split, appropriate metric, error analysis, reproducible steps, and a transparent statement of limits.

## Related documents
- [Project Guides](02-PROJECTS.md)
- [72-Session Plan](03-72-SESSION-PLAN.md)
- [Assessment and Teacher Guide](04-ASSESSMENT-AND-TEACHER-GUIDE.md)
