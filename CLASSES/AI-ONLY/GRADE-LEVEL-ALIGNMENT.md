# AI-Only Curriculum — Grade-Level Alignment and Quality Guide

**Applies to:** Classes 5–9  
**Purpose:** Keep AI learning age-appropriate, cumulative, activity-led, and assessable.  
**Status:** Curriculum alignment guide and review record; not an official CBSE syllabus.

## 1. Design principle

Teach the same broad AI ideas with increasing depth—not the same lesson repeated with harder vocabulary. Progress from **recognise and explain → model and test → compare and evaluate → analyse system design → justify a research-quality proposal**.

A class label is only a planning assumption. Teachers should use a short diagnostic and adapt for students' actual reading, numeracy, and prior computing experience. No unit should require a coding, algebra, or AI-tool prerequisite unless that prerequisite is explicitly taught first.

## 2. Expected progression by class

| Class | Approx. age | Main cognitive demand | Core AI learning focus | Suitable evidence |
|---|---:|---|---|---|
| 5 | 10–11 | Recognise, describe, sort, explain with examples | AI vs fixed rules; data/examples; simple classification; testing unfamiliar examples; generative AI as content creation; prompt clarity; verification, privacy, fairness and human responsibility | Card sorts, drawings, short explanations, paper prototype, simple test record |
| 6 | 11–12 | Explain, apply, compare, justify simply | Reinforce lifecycle and data; features/labels; paper model; training vs test examples; accuracy/errors; compare classification, recommendation and generation; responsible use | Annotated dataset, paper classifier, small count/accuracy exercise, scenario response |
| 7 | 12–13 | Compare, interpret, reason about evidence | Supervised vs unsupervised learning; train/test; confusion matrix at small-count level; overfitting/generalisation; baselines; computer vision, language AI, prompting; error costs and fairness | Model comparison, confusion matrix with small numbers, critique, paper evaluation plan |
| 8 | 13–14 | Analyse, apply concepts, evaluate trade-offs | Problem framing; data provenance/permission; classification, regression and clustering; validation and test split; introductory precision/recall; neural networks, transformers, retrieval, agents, multimodal inputs; security and fairness | Dataset card, metric choice with supplied counts, system diagram, threat/safety tabletop, system proposal |
| 9 | 14–15 | Design, defend, critique, document | Baselines and measurable goals; data quality, permission and leakage; ML task types; formal metrics; robustness; neural networks and language model concepts; reproducible evaluation; RAG, security, governance and impact | Written study plan/report, metric calculations from provided data, test matrix, data/model cards, evidence-based defence |

**Interpretation:** Advanced topics in Classes 8–9 are conceptual and evaluative by default. Do not turn them into university-level implementation, calculus, matrix algebra, model training infrastructure, or security exploitation. Optional extensions must be clearly marked and must not be required for the class-level outcome.

## 3. Unit review rubric

Review each unit against these criteria. Score each **0–2**: **0** = missing, misleading, or unsuitable; **1** = partly suitable / needs adjustment; **2** = clear and appropriate. A score is a review aid, not a student grade.

1. **Objective:** observable, student-facing outcome (not just “understand AI”).
2. **Prerequisites:** explicitly taught earlier or introduced in the unit.
3. **Cognitive demand:** fits the class progression above.
4. **Vocabulary:** limited, defined in plain language, used after concrete examples.
5. **Activity:** active, achievable, safe, and accessible without personal AI accounts.
6. **Scaffolding:** concrete example → guided practice → independent explanation.
7. **Assessment:** checks the stated objective, not tool access or memorisation alone.
8. **Progression:** builds on prior learning and adds a meaningful new demand.
9. **Time and resources:** plausible for a school period and available resources.
10. **Responsible AI:** privacy, consent, verification, fairness, and human oversight appear where relevant.

**Decision rules**
- **Pass:** 16–20, with no zero in objective, prerequisites, assessment, or safety.
- **Revise:** 11–15, or any critical zero.
- **Move / split / make optional:** 0–10, or a concept is materially beyond the stated class.
- A strong score does not override a safety issue or a false technical explanation.

## 4. Cross-grade audit: current curriculum design

This is a review of the curriculum's stated unit topics and activities, not a claim that every classroom delivery has been observed.

| Class | Alignment judgement | Keep | Guardrails / adjustments |
|---|---|---|---|
| 5 | **Generally appropriate; foundational** | Everyday AI, fixed-rule contrast, data/features/labels, paper classification, unseen tests, prompts, verification, privacy/fairness and capstone | Keep all technical explanations concrete and analogy-led. Paper classifier is a simulation, not a trained AI model. Use fictional data and teacher-prepared media. Do not require live chatbot use. |
| 6 | **Generally appropriate; consolidation plus modest extension** | Lifecycle, data quality, features, classification, paper training/testing, output critique, responsibility | Make accuracy a small-count calculation; introduce confidence/uncertainty informally. Keep model internals and generative mechanics qualitative. Avoid expanding into formal metrics. |
| 7 | **Appropriate with careful numeracy scaffolding** | Learning types, simple confusion matrix, generalisation, baseline comparison, vision/language concepts, ethics and evaluation plan | Use tiny, supplied tables and explicit worked examples. Teach precision/recall only informally if not already supported by numeracy; defer formula-heavy treatment. Treat tokens/context as conceptual. |
| 8 | **Stretch level; appropriate as teacher-guided concepts** | Problem framing, data permission, classification/regression/clustering, validation split, introductory metrics, neural networks, transformers, RAG, agents and security | Metrics should use supplied small counts, not algebra-heavy derivations. Neural networks/transformers are diagrams and mental models, not implementation. RAG, agent permissions, and prompt injection should be paper tabletop exercises with harmless fictional content. |
| 9 | **Appropriate for an advanced school-level AI literacy course, not all students' independent implementation** | Baselines, provenance, leakage, ML task types, confusion matrix, precision/recall/F1, generalisation, conceptual neural networks/transformers, RAG, security, governance and research capstone | Explicitly scaffold ratios and metric calculations; supply datasets and templates. Keep transformer/embedding concepts qualitative. Do not require Python, calculus, vector arithmetic, or deploying agents. Separate observed results from planned/expected results. |

### Key sequencing checks

- **Features and labels:** introduced concretely in Class 5/6; revisit with data quality in 7; move to representation and leakage in 8/9.
- **Testing:** unfamiliar examples in 5/6 → train/test and small confusion matrix in 7 → validation, leakage, metric selection and robustness in 8/9.
- **Generative AI:** distinguish generation from classification in 5/6 → language model patterns, prompts and verification in 7 → transformers, retrieval, tool use and adversarial inputs conceptually in 8 → traceability, reproducibility, security and governance in 9.
- **Ethics and safety:** taught from Class 5 onward and revisited with greater specificity; it is not a final isolated unit.
- **Capstones:** paper proposals in 5/6 → evaluation plan in 7 → system proposal in 8 → evidence-aware study design/report in 9. A paper artifact must never be represented as a working deployed model.

## 5. Teaching controls

- Begin each new unit with a quick prerequisite check; reteach a missing prerequisite before introducing the next abstraction.
- Use a worked example before independent work. For new metrics, model one calculation aloud and provide a small, clear table.
- Define technical words when first needed; prefer student explanation over a glossary-only check.
- Keep “core outcome” and “optional extension” separate. A student should be able to meet the core outcome without the extension.
- Assess reasoning and evidence, not whether a student has an account, device, or access to a commercial model.
- Use fictional or teacher-provided data. Never upload identifiable student data, photos, voices, records, or work to public AI tools.
- For factual outputs, require corroboration from a trusted source; fluent or confident wording is not proof.
- Provide paper-based alternatives and accessible formats for every tool-dependent demonstration.

## 6. Before marking a unit as fully reviewed

For each unit, record: exact objective; prerequisite(s); key vocabulary; activity steps; estimated period(s); resources; formative check; summative evidence; likely misconception; accessibility/scaffold; safety and privacy check; rubric score; and decision (Pass / Revise / Move / Optional).

**Audit limitation:** The topic sequence and described activities have been reviewed for developmental progression. A final lesson-by-lesson certification still requires checking the actual teacher script, worksheets, student-facing language, time estimates, and assessment instruments for each unit in classroom context.

## References for teacher planning

- [AI4K12 — Grade Band Progression Charts](https://ai4k12.org/gradeband-progression-charts/)
- [UNESCO — AI Competency Framework for Students](https://www.unesco.org/en/articles/ai-competency-framework-students)
- [CBSE — Computational Thinking and Artificial Intelligence](https://cbseacademic.nic.in/ct-ai.html)
- [Common Sense Education — AI Literacy Lessons](https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-k-12)
