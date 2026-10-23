# Class 9 — AI-Only Curriculum

**Status:** Proposed curriculum for planning and review  
**Audience:** Typical Class 9 learners (approximately 14–15)  
**Scope:** Artificial intelligence literacy only. No electronics, robotics builds, or hardware. No coding prerequisite.  
**Progression:** 20 units from foundational concepts to advanced topics for this class. No fixed dates or weeks.

## Purpose

Students analyse AI projects as systems that can be tested, challenged and governed. They learn core ML task types, more formal evaluation, neural networks and language models, retrieval, robustness, bias, provenance and responsible deployment—without requiring electronics.

## Learning outcomes

- Frame an AI problem, define a baseline and explain why AI may or may not be appropriate.
- Differentiate AI, machine learning, deep learning and generative AI accurately.
- Plan datasets with provenance, permitted use, quality checks and representativeness.
- Compare classification, regression and clustering tasks.
- Explain data splitting, leakage, overfitting and generalisation.
- Interpret confusion matrices, precision, recall, F1 and accuracy at an introductory level.
- Describe neural networks, transformers, tokens, embeddings and retrieval-grounded generation conceptually.
- Design a reproducible, low-risk evaluation with safety, fairness and privacy criteria.

## Stage 1 — Frame the Task and the Evidence (Units 1–4)

### Unit 1. Capabilities, Limits and the AI Landscape
**Learn:** Differentiate rule-based systems, machine learning, deep learning and generative AI. Identify task-specific strengths, uncertainty and cases where a human or simpler method is better.

**Activity:** Analyse case studies and classify the system type, intended use and consequence of a mistaken output.

**Evidence of learning:** A system map with capability, limitation and a reasoned AI-fit decision.

### Unit 2. Problem Framing and Baselines
**Learn:** Define the target, users, input, output, constraints and error costs. Compare against a simple rule, current human process or majority-class baseline before claiming AI is useful.

**Activity:** Write a problem statement for a fictional low-risk setting and propose a baseline with a measurable success criterion.

**Evidence of learning:** A one-page problem brief with a baseline and a measurable objective.

### Unit 3. Data Provenance, Quality and Permission
**Learn:** Record data origin, collection purpose, rights/permissions, coverage, label quality, sensitive attributes and known gaps.

**Activity:** Inspect a fictional dataset card and recommend whether the dataset is suitable, what must be corrected, or why it should not be used.

**Evidence of learning:** A completed data card and justified go/no-go decision.

### Unit 4. Feature Design, Labels and Leakage Risks
**Learn:** Features encode useful information; labels define intended answers. Leakage occurs when information unavailable at real prediction time or target-revealing details contaminate the data.

**Activity:** Examine a fictional dataset description and identify misleading features, label ambiguity and potential leakage.

**Evidence of learning:** A revised feature/label plan with leakage risks documented.

## Stage 2 — Machine Learning Task Types (Units 5–8)

### Unit 5. Supervised Learning and Classification
**Learn:** Learn from labelled examples to predict classes; label definitions and class imbalance influence what a model appears to learn.

**Activity:** Analyse a supplied set of labelled examples and prediction errors for a fictional sorting problem.

**Evidence of learning:** A task description and class-wise error summary.

### Unit 6. Regression and Numeric Targets
**Learn:** Regression predicts quantities; the choice of metric and acceptable error depends on the scale and purpose of the problem.

**Activity:** Compare predictions and actual values from a fictional demand or temperature dataset; compute absolute errors for selected records.

**Evidence of learning:** A table of errors and a defensible statement about acceptable error.

### Unit 7. Unsupervised Learning and Clustering
**Learn:** Clustering finds groups by similarity without target labels. Cluster names are interpretations, not ground-truth discoveries, and may reinforce poor assumptions.

**Activity:** Compare two alternative feature sets and describe how cluster membership changes.

**Evidence of learning:** A comparison that distinguishes algorithmic groupings from justified conclusions.

### Unit 8. Train/Validation/Test Splits and Data Leakage
**Learn:** Training fits parameters; validation supports model or hyperparameter choices; test evaluates final performance. Duplicates, temporal mixing or target clues can leak information.

**Activity:** Audit split scenarios and redesign a flawed split for a fictional dataset.

**Evidence of learning:** A split diagram with a defence against at least two leakage routes.

## Stage 3 — Evaluate and Explain Models (Units 9–12)

### Unit 9. Confusion Matrix and Accuracy
**Learn:** A confusion matrix separates types of correct and incorrect classification. Accuracy is the fraction correct and can be misleading under class imbalance.

**Activity:** Construct a confusion matrix from provided predictions and compare accuracy on balanced and imbalanced examples.

**Evidence of learning:** Correct counts and an explanation of when accuracy is insufficient.

### Unit 10. Precision, Recall and F1
**Learn:** Precision measures the reliability of positive predictions; recall measures the share of actual positives detected; F1 balances precision and recall. Metric priorities depend on error costs.

**Activity:** Calculate precision, recall and F1 from small supplied counts and compare two hypothetical models.

**Evidence of learning:** Correct calculations and a reasoned metric choice for a stated task.

### Unit 11. Overfitting, Generalisation and Robustness
**Learn:** Training performance does not guarantee performance on unseen or shifted data. Robustness means behaviour remains acceptable under realistic variations; it does not mean never failing.

**Activity:** Compare training and test scores, then construct a stress-test set with altered but plausible examples.

**Evidence of learning:** A conclusion that distinguishes memorisation, generalisation and robustness.

### Unit 12. Neural Networks and Representation Learning
**Learn:** Neural networks learn layered representations by adjusting weights during training. Performance depends on architecture, data, objectives and evaluation; more layers do not automatically mean better results.

**Activity:** Explain a network diagram from input through hidden layers to output and match training, validation and inference to their roles.

**Evidence of learning:** A labelled model diagram and a concise explanation of weight adjustment.

## Stage 4 — Generative AI and Responsible Systems (Units 13–19)

### Unit 13. Transformers, Tokens and Embeddings
**Learn:** Modern language models often use transformers. Text is processed as tokens; embeddings represent items as numerical vectors that can capture learned relationships, not perfect meaning.

**Activity:** Use a teacher-provided semantic-similarity example to discuss near and far matches and how context may change interpretation.

**Evidence of learning:** A concept map linking tokens, embeddings, context and model output while noting limitations.

### Unit 14. How Large Language Models Generate Text
**Learn:** LLMs generate sequences using patterns learned during training and context supplied at use time. They can be fluent yet wrong, outdated or incomplete; output is not a guaranteed database lookup.

**Activity:** Compare a fluent unsupported answer with an evidence-based answer and identify which claims require corroboration.

**Evidence of learning:** A critique separating fluency, plausibility and evidence.

### Unit 15. Prompt Design, Structured Output and Evaluation
**Learn:** Prompts can specify task, context, constraints, examples and output format. Stable-looking formats do not guarantee correct contents; repeatable evaluation requires defined criteria.

**Activity:** Build a prompt and a scoring rubric for a neutral task, then assess multiple teacher-prepared outputs against the same criteria.

**Evidence of learning:** A documented prompt, rubric and comparison table.

### Unit 16. Retrieval-Augmented Generation and Source Grounding
**Learn:** Retrieval-augmented generation (RAG) fetches source material to inform an answer. It may improve traceability but can fail when retrieval is incomplete or the model misreads evidence.

**Activity:** Use a small teacher-provided document set to answer questions, then check whether each output statement is supported by the retrieved source.

**Evidence of learning:** A traceability table linking claims to exact supporting material or marking them unsupported.

### Unit 17. AI Evaluation and Reproducibility
**Learn:** A result should state the dataset, test procedure, metric, model or tool version when known, limitations and conditions. Repeatability and a fair comparison matter more than a single impressive output.

**Activity:** Draft a miniature evaluation report for two fictional systems tested on the same cases.

**Evidence of learning:** A report including method, results, failure cases and limits on the conclusion.

### Unit 18. AI Security and Adversarial Inputs
**Learn:** Models may be manipulated by misleading inputs, prompt injection, poisoned examples or unsafe tool permissions. Risks depend on the system's access and intended use.

**Activity:** Run a harmless paper tabletop scenario where a retrieved document contains an instruction to break the task rules; design a safe response and permissions boundary.

**Evidence of learning:** A threat sketch with mitigation, limits and a human escalation point.

### Unit 19. Fairness, Accessibility and Unequal Errors
**Learn:** Aggregate results can conceal unequal performance. Fair evaluation considers relevant subgroups, accessibility, context, error costs and the limits of available evidence.

**Activity:** Review fictional performance tables across different conditions and propose additional tests without using sensitive real student data.

**Evidence of learning:** A fairness test plan with a proposed metric, impact analysis and mitigation.

### Unit 20. Deepfakes, Provenance, Privacy and Rights
**Learn:** Synthetic media and AI-assisted work raise issues of consent, source verification, personal data, licences, attribution and disclosure. Labels or detection tools alone are not definitive proof.

**Activity:** Assess a fictional publication decision: verify provenance, permissions and consent, then decide whether to publish, label, correct or refuse.

**Evidence of learning:** A decision record covering evidence, consent, privacy and responsible disclosure.

### Unit 21. Societal Impact, Sustainability and Governance
**Learn:** AI can create value but also shift labour, concentrate power, consume energy and produce social harms. Governance includes accountability, appropriate human oversight, appeal and monitoring.

**Activity:** Map stakeholders in a fictional public-interest AI proposal and weigh benefits, costs, excluded groups and routes for contesting mistakes.

**Evidence of learning:** A balanced impact assessment and a set of conditions for responsible use.

## Stage 5 — Capstone Research Challenge (Unit 20)

### Unit 22. Capstone: Propose and Evaluate an AI Study
**Learn:** Students define a researchable question, baseline, data plan, metrics, test cases, risks and a claim that available evidence could support. A proposal or paper simulation must not be represented as a deployed model.

**Activity:** Teams design a low-risk AI study using fictional or teacher-provided material. Include the baseline, a test set, intended metric, two failure cases, privacy/fairness controls and a short report template.

**Evidence of learning:** A research poster or report with method, expected evidence, limitations and a clear distinction between planned and observed results.


## Research basis

This curriculum is a proposed, AI-only learning plan—not an official CBSE syllabus. It uses the AI4K12 grade-band progression (especially Grades 6–8 and 9–12), UNESCO's student competencies across human-centred thinking, ethics, AI techniques and system design, CBSE's 2026–27 CT&AI materials as an Indian age-context reference, and Common Sense Education's grade-banded AI-literacy lessons.

- [AI4K12 — Grade Band Progression Charts](https://ai4k12.org/gradeband-progression-charts/)
- [UNESCO — AI Competency Framework for Students](https://www.unesco.org/en/articles/ai-competency-framework-students)
- [CBSE — Computational Thinking and Artificial Intelligence (Classes 3–8, 2026–27)](https://cbseacademic.nic.in/ct-ai.html)
- [Common Sense Education — AI Literacy Lessons for Grades K–12](https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-k-12)

## Safety and delivery

- This is AI literacy, not an electronics, robotics, or hardware curriculum. No hardware or coding prerequisite is assumed.
- Use paper-based simulations and fictional datasets wherever possible. Any live AI demo must be teacher-controlled, school-approved, and consistent with school policy.
- Do not upload students' names, faces, voices, locations, contact details, school records, passwords, or identifiable work to public AI services.
- Students should verify factual output, identify uncertainty, disclose AI assistance when required, and retain responsibility for submitted work.
- Avoid uses involving consequential decisions about real people. Use synthetic examples for bias, classification, media, and evaluation exercises.

## Assessment approach

Assess explanation and reasoning rather than tool access. Collect evidence from concept maps, paper simulations, test records, critique of AI responses, scenario discussions, and the capstone. A useful rule is: students must be able to explain the result without relying on the AI tool.

## Capstone scoring guide (10 points)

Score each criterion 0–2: (1) problem and AI fit, (2) data/examples and testing, (3) evaluation and errors, (4) privacy/fairness/human review, and (5) clarity, evidence, and honest limitations. A high score requires a reasoned design—not a claim that a paper prototype is a working AI system.
