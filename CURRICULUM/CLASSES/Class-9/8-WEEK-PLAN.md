# Class 9 — AI Programme, 8 Weeks

Plan only; this is not a record of teaching completed. The shared spine, outcomes, and rubric are in [AI-8-WEEK-PROGRAM.md](../AI-8-WEEK-PROGRAM.md).

**Timetable:** Friday and Saturday — 2 sessions per week, 16 in total. Sections C and D attend the same slots on the same day, so each lesson is delivered twice.
**Target level:** 2–3 (Best to Advanced — engineer).
**Capstone:** a trained classifier driving a physical output, with accuracy measured on held-out data.
**Units:** 1–20 — see [AI-TEACHING-LIST.md](../../AI-TEACHING-LIST.md).

| Week | Session 1 (Fri) | Session 2 (Sat) | Evidence |
|---|---|---|---|
| 1 | What AI is; rule vs learned pattern; real examples | Data → pattern → prediction; classification vs generation; define the dataset to build | Definition + dataset plan |
| 2 | Features and labels; collect and train a 3-category classifier | Test on new examples; record accuracy as a fraction | Dataset count, accuracy |
| 3 | Data quality: variety, balance, labelling errors | Retrain; compare accuracy; identify bias | Before/after accuracy |
| 4 | Train/test split; confusion matrix; precision in plain words | Model card; start Python on the Raspberry Pi | Model card |
| 5 | Python: load a small dataset, train, print accuracy | Sensor thresholds on Arduino; rule vs learned | Script output + circuit |
| 6 | Design brief: model, decision, output, failure mode | Build and integrate model with actuator | Prototype + failure list |
| 7 | Teams; measurable success test | Build sprint and integration | Dated build log |
| 8 | Test on unseen data; record the result | Demo day; written evaluation of limits | Report + demo |

## Advanced track (level 3)

Use the Raspberry Pi 3 with Python and scikit-learn on a small tabular dataset — for example sensor readings with a labelled outcome. Deliverables:

- a train/test split with a stated accuracy;
- a confusion matrix for two classes;
- one paragraph on what the model cannot do.

Keep the dataset small (a few hundred rows). Training must finish in under a minute on a Pi 3.

If the Pis or Python environment are not ready, run the same evaluation on the Arduino rule-based build and require the written evaluation instead.

## Delivery notes

- Class 9 has 16 sessions, not 24: protect build time by keeping explanation short.
- No face recognition and no student images; use objects, colours, or sensor data.
- Repeat every lesson for section D on the same day; record C and D separately.
- A trained model is not evidence of reliability: every claim needs a measured accuracy.
