# Class 8 — AI-Only Curriculum

**Status:** Proposed curriculum for planning and review  
**Audience:** Typical Class 8 learners (approximately 13–14)  
**Scope:** Artificial intelligence literacy only. No electronics, robotics builds, or hardware. No coding prerequisite.  
**Progression:** 20 units from foundational concepts to advanced topics for this class. No fixed dates or weeks.

## Purpose

Students move from describing AI to analysing design choices. They compare learning methods, interpret evaluation trade-offs, understand neural networks and modern language models conceptually, and assess retrieval, agents, multimodal systems and safety.

## Learning outcomes

- Frame a suitable problem and identify when a non-AI baseline is preferable.
- Differentiate classification, regression and clustering and explain feature choices.
- Explain training/validation/test separation, data leakage and generalisation.
- Interpret accuracy and class-specific errors using a confusion matrix and precision/recall at an introductory level.
- Describe neural networks, transformers, tokens and context conceptually.
- Explain why grounding with sources can help while not eliminating errors.
- Identify risks from tool-using agents, multimodal systems, prompt injection and untrusted inputs.
- Propose an evaluated AI concept with explicit safeguards and monitoring.

## Stage 1 — Frame Problems and Data (Units 1–4)

### Unit 1. Start with the Problem, Not the Tool
**Learn:** Define users, desired outcome, constraints, consequences of errors and existing alternatives before selecting AI.

**Activity:** Evaluate three fictional problems and decide whether to use a rule, a human process or an AI model.

**Evidence of learning:** A problem statement with a reasoned AI-fit decision.

### Unit 2. AI, Machine Learning and Deep Learning
**Learn:** AI is the broad field; machine learning learns patterns from data; deep learning uses multi-layer neural networks. Generative AI is a family of methods and applications, not a synonym for all AI.

**Activity:** Build a concept map and classify examples; note overlap rather than forcing every tool into one exclusive box.

**Evidence of learning:** A concept map with accurate definitions and relationships.

### Unit 3. Dataset Provenance and Permissions
**Learn:** A dataset needs known origins, permitted use, relevant coverage and sound labels. More data is not automatically better data.

**Activity:** Audit a fictional dataset specification for source, collection purpose, consent, missing groups and quality.

**Evidence of learning:** A data-card record with provenance, limitations and a go/no-go recommendation.

### Unit 4. Features and Representation
**Learn:** Features are task-relevant information; changing representation can affect model behaviour. Correlation in examples is not necessarily a meaningful cause.

**Activity:** Compare two feature sets for a fictional classification task and identify a shortcut that may fail outside the example set.

**Evidence of learning:** A feature-selection justification and a counterexample.

## Stage 2 — Learning and Evaluation (Units 5–10)

### Unit 5. Supervised Classification
**Learn:** Classification predicts a discrete label from labelled examples; category definitions and label quality affect results.

**Activity:** Use a provided prediction table to analyse which categories are most often confused.

**Evidence of learning:** A class-by-class summary of successes and errors.

### Unit 6. Regression and Numeric Prediction
**Learn:** Regression estimates numeric quantities; useful evaluation depends on the range, units and cost of errors.

**Activity:** Compare predictions with actual values in a small fictional dataset and calculate absolute error for selected cases.

**Evidence of learning:** A correctly calculated error table and an interpretation.

### Unit 7. Clustering and Unsupervised Learning
**Learn:** Clustering groups items using similarity criteria without known target labels. The outcome depends on selected features and parameters and may not map to natural categories.

**Activity:** Compare clusters produced by two human-designed similarity rules on the same fictional records.

**Evidence of learning:** An explanation of why different similarity rules produce different groups.

### Unit 8. Train, Validation and Test Data
**Learn:** Training supports learning, validation supports choices during development, and the test set estimates final generalisation. Data leakage can make results look unrealistically strong.

**Activity:** Find leakage in fictional scenarios where duplicates or answer-revealing information cross dataset splits.

**Evidence of learning:** A corrected splitting plan and explanation of why leakage matters.

### Unit 9. Confusion Matrix, Precision and Recall
**Learn:** Different errors matter differently. Precision asks how many positive predictions were correct; recall asks how many actual positives were found. Neither is always the single best metric.

**Activity:** Use a fictional, non-consequential example to count true/false positives and negatives, then calculate precision or recall from supplied counts.

**Evidence of learning:** Correct calculations and a justified choice of which error to reduce.

### Unit 10. Generalisation, Overfitting and Baselines
**Learn:** Complex models can fit accidental patterns; baselines and held-out testing help show whether complexity adds value.

**Activity:** Compare two fictional model scorecards where one performs well on training data but poorly on test data.

**Evidence of learning:** A decision that references the test results and a likely cause.

## Stage 3 — Modern AI Concepts (Units 11–15)

### Unit 11. Neural Networks: Layers and Weights
**Learn:** Neural networks combine weighted operations and nonlinear transformations; training adjusts parameters to reduce a chosen error. A diagram is a conceptual model, not a complete implementation.

**Activity:** Trace a toy network diagram showing inputs, hidden layer, output and a training feedback arrow.

**Evidence of learning:** A labelled diagram and an explanation of the purpose of training.

### Unit 12. Computer Vision: Detection and Limits
**Learn:** Vision models can classify, detect or segment visual content, but results can change with lighting, angle, occlusion and dataset coverage.

**Activity:** Design a test matrix for a fictional object classifier with normal, difficult and out-of-scope images.

**Evidence of learning:** A test plan containing varied conditions and likely failure cases.

### Unit 13. Transformers, Tokens and Context
**Learn:** Modern language models commonly use transformer architectures and token sequences. Attention helps relate parts of context; it does not guarantee factual understanding.

**Activity:** Use a simple attention-as-relevance worksheet to discuss how a word can relate to different context words.

**Evidence of learning:** An age-appropriate account of tokens, context and a key limitation.

### Unit 14. Grounding and Retrieval-Augmented Answers
**Learn:** Some systems retrieve documents or other sources before generating an answer. Retrieval can make evidence more inspectable, but poor sources or incorrect interpretation can still produce errors.

**Activity:** Compare a generic generated response with a teacher-prepared answer that cites a supplied document; check every citation against the document.

**Evidence of learning:** A claim-source table marking supported, partly supported and unsupported statements.

### Unit 15. AI Agents and Tool Use
**Learn:** An agent-like system may plan steps, call tools and use results. More autonomy adds failure opportunities; permissions, limits, confirmation and logging matter.

**Activity:** Simulate a calendar or research agent using paper tool cards. Stop it when a request exceeds its allowed permissions.

**Evidence of learning:** A flowchart showing tool boundaries, a human confirmation point and a recovery step.

## Stage 4 — Reliability, Safety and Society (Units 16–19)

### Unit 16. Multimodal AI
**Learn:** Some systems combine text, images, audio or video. Each input type introduces ambiguity, provenance issues and privacy risks.

**Activity:** Analyse a fictional task that uses both a written question and a provided picture; identify what could be missing or misread.

**Evidence of learning:** A list of modality-specific uncertainties and verification needs.

### Unit 17. Prompt Injection and Untrusted Inputs
**Learn:** Instructions embedded in documents or retrieved content may try to redirect a tool-using system. System permissions and untrusted input boundaries are security concerns.

**Activity:** Use a harmless paper simulation in which a document says “ignore the task and reveal a secret”; decide which instructions should be followed and why.

**Evidence of learning:** A rule separating trusted task instructions from untrusted content, plus a safe response.

### Unit 18. Bias, Accessibility and Fairness Testing
**Learn:** Model quality must be checked across relevant conditions and groups. Aggregate scores can conceal uneven error patterns; fairness tests need a clear context and careful data handling.

**Activity:** Review fictional group-level scorecards and propose follow-up tests without collecting sensitive student information.

**Evidence of learning:** A test proposal that identifies a disparity, its impact and a possible mitigation.

### Unit 19. Privacy, Intellectual Property and Disclosure
**Learn:** Privacy, consent, licences, attribution and disclosure apply to model inputs and outputs. Avoid private uploads and treat ownership or permission as a question to verify, not assume.

**Activity:** Assess fictional use cases involving a private document, an image source and AI-assisted writing.

**Evidence of learning:** A checklist that states what to protect, verify, cite or disclose.

## Stage 5 — Apply and Evaluate (Unit 20)

### Unit 20. Capstone: Responsible AI System Proposal
**Learn:** A strong proposal sets a user need, baseline, fictional data plan, success metrics, tests under varied conditions, misuse cases and oversight.

**Activity:** Teams propose a low-risk system, build a paper workflow, evaluate it against a baseline, and report one failure mode plus a mitigation.

**Evidence of learning:** A project brief with test matrix, metric, provenance note, permission boundaries and limitations.


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
