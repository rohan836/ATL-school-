# Class 7 — AI-Only Curriculum

**Status:** Proposed curriculum for planning and review  
**Audience:** Typical Class 7 learners (approximately 12–13)  
**Scope:** Artificial intelligence literacy only. No electronics, robotics builds, or hardware. No coding prerequisite.  
**Progression:** 20 units from foundational concepts to advanced topics for this class. No fixed dates or weeks.

## Purpose

Students examine the machine-learning process more systematically, compare different learning tasks, understand why evaluation metrics matter, and critically assess recommendation systems, generative AI and the effects of AI on people.

## Learning outcomes

- Explain the AI/ML distinction and describe supervised and unsupervised learning at a conceptual level.
- Distinguish classification from regression and explain training/test separation.
- Interpret a small confusion matrix and explain why accuracy can mislead.
- Describe overfitting and generalisation using an example.
- Critique recommendation systems and generative AI outputs.
- Evaluate bias, privacy, consent, source reliability and responsible use.
- Develop a low-risk AI proposal with explicit test cases and success criteria.

## Stage 1 — AI Models and Learning Types (Units 1–5)

### Unit 1. From AI to Machine Learning
**Learn:** AI is a broad field; machine learning uses data to fit patterns for a task. Not all AI is machine learning, and not all software that automates a task is AI.

**Activity:** Classify examples by whether they use fixed rules, learned models, or a combination.

**Evidence of learning:** A comparison diagram with a justified example of each.

### Unit 2. A Model's Lifecycle
**Learn:** Problem definition, data collection, preparation, training, evaluation, use and monitoring form a lifecycle; errors may enter at any stage.

**Activity:** Map a fictional book-recommendation task through the lifecycle.

**Evidence of learning:** A lifecycle map identifying data, model and evaluation choices.

### Unit 3. Datasets, Features and Labels
**Learn:** Records, features and labels describe examples. Data quality, representativeness, label consistency and permitted use all matter.

**Activity:** Audit a fictional dataset for missing entries, skewed categories and labels that reveal the answer unfairly.

**Evidence of learning:** A data-quality checklist with proposed fixes.

### Unit 4. Supervised Learning
**Learn:** Supervised learning uses examples with known answers to learn a mapping; classification predicts a category, while regression estimates a numeric value.

**Activity:** Sort sample tasks into classification, regression or neither, and identify their labels.

**Evidence of learning:** A task matrix with correct labels and reasons.

### Unit 5. Unsupervised Learning and Clusters
**Learn:** Clustering groups examples by similarities without being given the correct category for each. A cluster is not automatically a meaningful or fair human category.

**Activity:** Group fictional music, plant or object cards using chosen features, then compare the groups made by different teams.

**Evidence of learning:** A cluster description and an explanation of how feature choices changed results.

## Stage 2 — Test and Improve Models (Units 6–10)

### Unit 6. Training and Test Sets
**Learn:** Training examples help build a model; separate test examples estimate performance on unseen cases. Reusing test cases to tune a model weakens the test.

**Activity:** Split a small fictional card dataset into training and test piles and record the rule chosen before testing.

**Evidence of learning:** A documented split and a statement of why the test pile was held out.

### Unit 7. Accuracy and Confusion Matrix
**Learn:** Overall accuracy hides which categories are confused. A confusion matrix counts correct and incorrect predictions by actual and predicted category.

**Activity:** Fill a small 2-class confusion matrix from a teacher-provided set of predictions.

**Evidence of learning:** Correct counts and one specific interpretation of an error pattern.

### Unit 8. Overfitting and Generalisation
**Learn:** A model can memorise examples or depend on accidental clues. Generalisation is performance on new cases similar to the intended use.

**Activity:** Compare a complicated rule that fits all training cards with a simpler rule tested on new cards.

**Evidence of learning:** An explanation of which rule generalises better and the evidence.

### Unit 9. Model Comparison and Baselines
**Learn:** A meaningful AI result should be compared with a simple baseline, such as always choosing the most common class or using a clear fixed rule.

**Activity:** Compare a pretend classifier with a simple baseline on the same test set.

**Evidence of learning:** A fair comparison table and a conclusion that follows from the results.

### Unit 10. Recommendation and Ranking Systems
**Learn:** Recommenders rank options based on signals such as past activity or similarity. They can narrow choice, repeat old interests and shape what users see.

**Activity:** Simulate a recommendation list using fictional viewing or reading preferences; inspect which items are hidden.

**Evidence of learning:** A list of useful effects and risks, including one way to widen recommendations.

## Stage 3 — Language, Vision and Generative AI (Units 11–14)

### Unit 11. Computer Vision and Pattern Recognition
**Learn:** Vision systems process image data and patterns; lighting, viewpoint, background and unfamiliar examples can change predictions.

**Activity:** Compare clearly labelled teacher-selected image examples with variations in light or background.

**Evidence of learning:** A table of conditions that may change a prediction.

### Unit 12. Language AI and Generative Models
**Learn:** Language tools can classify, translate, summarise or generate text. Generative output is constructed from learned patterns and can contain unsupported claims.

**Activity:** Sort sample tasks by purpose and mark which generated claims need factual verification.

**Evidence of learning:** A task/output table with an appropriate check for each.

### Unit 13. Tokens, Context and Chatbots
**Learn:** Text systems process pieces of text (tokens) and use context to generate a response. Context windows, system design and training affect results; it is not a human memory or understanding.

**Activity:** Use a tokenisation worksheet and compare two prompts with different context.

**Evidence of learning:** An explanation of how context affects an answer without personifying the model.

### Unit 14. Prompting and Example-Based Guidance
**Learn:** Task, context, constraints, examples and output format can make prompts clearer. Example-based prompts may guide style or structure without guaranteeing truth.

**Activity:** Create two prompts for the same neutral task, one vague and one specific, then compare outputs provided by the teacher.

**Evidence of learning:** A prompt rubric and reasoned selection.

## Stage 4 — Trust, Ethics and Society (Units 15–19)

### Unit 15. Hallucinations and Source Checking
**Learn:** Generated text can include invented information, fake references or incorrect summaries. Verification requires independent sources and checking what a source actually supports.

**Activity:** Verify claims from a prepared response against a textbook and a second trusted source.

**Evidence of learning:** A source-checking record with corrected or unresolved claims.

### Unit 16. Fairness and Different Error Costs
**Learn:** Errors do not affect everyone or every task equally. Dataset coverage, task design and thresholds can change who benefits or is harmed.

**Activity:** Review a fictional model for allocating library assistance or sorting lost-property items; discuss who bears the cost of errors.

**Evidence of learning:** A risk table identifying impacted groups and a test for unequal errors.

### Unit 17. Privacy, Security and Consent
**Learn:** Personal data, confidential information and other people's likenesses require protection. Public tools may retain or process inputs under their terms; students should use only approved methods.

**Activity:** Assess fictional prompts for oversharing, then rewrite them to use only necessary fictional details.

**Evidence of learning:** A safer revised prompt and explanation of what was removed.

### Unit 18. Deepfakes, Authorship and Copyright
**Learn:** Synthetic media can mislead or violate consent; AI-generated work raises questions about attribution, permission and reuse. Labelling alone does not establish authenticity.

**Activity:** Evaluate fictional media-sharing and creative-reuse scenarios using consent, source and disclosure questions.

**Evidence of learning:** A short decision with stated reasons and a safe next step.

### Unit 19. AI in Society: Benefit, Harm and Choice
**Learn:** AI systems influence media, education, accessibility, work and public services. Ask who benefits, who is excluded, what evidence supports use and where human appeal is needed.

**Activity:** Hold a structured stakeholder discussion about a fictional community AI proposal.

**Evidence of learning:** A stakeholder map plus one benefit, one risk and one safeguard.

## Stage 5 — Design and Evaluate (Unit 20)

### Unit 20. Capstone: Build an Evaluation Plan on Paper
**Learn:** A good AI proposal defines the task, baseline, data needs, test cases, relevant metric, failure handling and responsible human oversight.

**Activity:** Teams design a low-risk AI concept with fictional data, compare it with a baseline and present a test plan including a difficult case.

**Evidence of learning:** A design poster and evaluation plan that state criteria, risks, and limits.


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
