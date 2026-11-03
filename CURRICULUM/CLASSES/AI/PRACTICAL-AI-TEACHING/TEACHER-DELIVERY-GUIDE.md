# Teacher Delivery Guide — Practical AI Classes 5–9

**Purpose:** A quick working guide for preparing, teaching and remembering each AI lesson. Use it alongside the [16-week learning roadmap](FOUR-MONTH-LEARNING-ROADMAP.md).

**Teaching rule:** Demonstrate first, let students try, then help them understand what happened. Keep theory short and make something in every lesson.

## 1. Weekly AI slots from the current timetable

Each class has Batch C and Batch D. The current timetable gives one dedicated AI session per batch each week.

| Class and batch | AI day | AI time | Duration |
|---|---|---|---:|
| Class 5C | Wednesday | 8:00–8:35 AM | 35 min |
| Class 5D | Wednesday | 9:20–9:55 AM | 35 min |
| Class 6C | Saturday | 8:10–8:45 AM | 35 min |
| Class 6D | Saturday | 9:35–10:10 AM | 35 min |
| Class 7C | Tuesday | 10:40–11:15 AM | 35 min |
| Class 7D | Tuesday | 11:55 AM–12:25 PM | 30 min |
| Class 8C | Thursday | 10:40–11:15 AM | 35 min |
| Class 8D | Thursday | 11:55 AM–12:25 PM | 30 min |
| Class 9C | Saturday | 10:55–11:25 AM | 30 min |
| Class 9D | Saturday | 12:00–12:30 PM | 30 min |

The times above are taken from the current [ATL-LAB-TIMETABLE.md](../../../../main%20ATL%20school/ATL%20Lab%20Timetable/ATL-LAB-TIMETABLE.md). Check that source again if the school timetable changes. Do not use the 70-minute electronics period as the AI lesson duration.

## 2. How to run an AI lesson

### For a 35-minute session

| Time | What to do |
|---|---|
| 0–4 min | Start with a surprising question, quick challenge or live demo |
| 4–9 min | Explain one key idea using the screen, an example or a physical object |
| 9–22 min | Students experiment in pairs or small teams |
| 22–31 min | Give a mini-build, competition or improvement challenge |
| 31–35 min | Ask students to show the result and explain one thing they learned |

### For a 30-minute session

| Time | What to do |
|---|---|
| 0–3 min | Question or quick demonstration |
| 3–7 min | Explain the one essential concept |
| 7–19 min | Student experiment |
| 19–27 min | Short challenge or improvement |
| 27–30 min | Show, explain and exit question |

Prepare the notebook, links, sample data and projector before the batch enters. Avoid spending the student activity time installing software or creating accounts.

## 3. Teaching method

Use this loop in every lesson:

1. **Ask:** Start with a question students want to answer.
2. **Show:** Demonstrate the result before explaining the theory.
3. **Try:** Let students change inputs, code or examples.
4. **Challenge:** Give them one small goal to complete.
5. **Test:** Ask them to try a new example or unusual case.
6. **Explain:** Students describe what worked, what failed and why.

Keep explanations to one or two core ideas. Do not turn the session into a long lecture or a note-copying exercise.

## 4. Python and notebook teaching

Use Jupyter Notebook or another school-approved notebook environment. Start with prepared notebooks so students can focus on learning rather than setup.

Suggested order:

1. Open a notebook; identify Markdown and code cells; run a cell.
2. Use `print()`, variables, input and simple data types.
3. Use comparisons and `if/else`.
4. Use loops to generate patterns and repeat actions.
5. Create functions and use lists.
6. Import a library and run a small example.
7. Use NumPy for simple number experiments.
8. Use pandas to read and inspect a small table or CSV.
9. Use Matplotlib to make a simple chart.
10. Use scikit-learn in prepared examples for basic regression and classification.

Teach students to read error messages, change one thing at a time and rerun the notebook in order. Give younger students partly completed cells; older students can write more of the code themselves.

## 5. How to introduce machine learning

Make the learning process visible:

**Examples and labels → Training → New example → Prediction → Check the result → Improve the data or model.**

Use simple examples:
- **Number prediction:** learn a trend from a small numeric dataset and predict an approximate value.
- **Digit recognition:** train/test a model that classifies handwritten digits from 0 to 9.
- **Image classification:** use labelled pictures of safe objects such as fruit or stationery.
- **Object detection:** show the difference between giving one label to an image and identifying the locations of objects within it.

Always reserve a few test examples that the model has not seen during training. Let students record correct and incorrect predictions. Explain that a prediction is an estimate, not a guarantee.

## 6. AI tools and AI-assisted building

Possible tools for teacher preparation and supervised classroom demonstrations:

- **Python and Jupyter Notebook:** for coding, data and small models.
- **NumPy, pandas and Matplotlib:** for numerical work, tables and charts.
- **scikit-learn:** for beginner-friendly regression and classification examples.
- **Teachable Machine or a similar approved visual tool:** for quick image, sound or pose classification demonstrations.
- **ChatGPT:** for explaining concepts, brainstorming, drafting prompts and teacher-led demonstrations.
- **Codex, Claude Code or another approved coding assistant:** for teacher-guided code generation, explanation, debugging and small application builds.

Treat these as candidate tools, not guaranteed school resources. Before a lesson, check access, internet, device compatibility, school approval and the current age/account terms of each service. For younger students, use teacher-operated demonstrations or a school-approved supervised setup; do not require children to create personal accounts without approval.

Teach the AI coding workflow:

1. Describe the problem in plain language.
2. Ask the assistant for one small step, not the whole project at once.
3. Read the suggested code and ask what it does.
4. Run it in the notebook or approved environment.
5. Test it with more than one example.
6. Show the error and ask for an explanation if it fails.
7. Make a change and test again.
8. Ask the student to explain the final result without relying on the assistant.

The student remains responsible for understanding and testing the work. AI-generated code and answers can be wrong.

## 7. Keep responsible AI practical

Do not begin with a long lecture on rules. Bring these checks into the project:

- **Privacy:** use sample or non-personal data; do not upload student names, faces, voices or personal records to public services.
- **Fairness:** test whether a model behaves differently across suitable, non-sensitive examples.
- **Reliability:** verify generated facts and test model predictions.
- **Attribution:** record when AI helped and credit sources or assets as required.
- **Human judgement:** explain why an AI result should not make important decisions by itself.

Use teacher-approved datasets and provide an offline or pre-downloaded alternative when internet access is uncertain.

## 8. Adjust the challenge by class

| Class | Teacher approach |
|---|---|
| 5 | More show-and-try; use visuals, objects, guided notebooks and short code edits |
| 6 | Pair programming, basic Python and labelled data activities |
| 7 | Let students modify code, train a model and record test results |
| 8 | Expect more independent notebook work and a small application |
| 9 | Expect experiment planning, evaluation, debugging and a clear explanation of limitations |

Offer a **starter task** for students who need support and an **extension task** for students who finish early. Keep the core project the same where practical, but change the depth expected.

## 9. Prepare before each batch

- [ ] Confirm the week's topic and learning outcome.
- [ ] Open and test the notebook, demo or application.
- [ ] Prepare sample data and a non-internet backup.
- [ ] Check projector, devices, power and internet if needed.
- [ ] Test the activity with one example before class.
- [ ] Prepare one challenge and one extension.
- [ ] Decide what students should show or submit by the end.

For Batch C and Batch D, reuse the same core lesson where possible. Record any change needed after the first batch before teaching the second.

## 10. What students should record

Keep the student record short. A practical page can include:

1. Project or experiment name.
2. What problem or question they explored.
3. Data, examples or inputs used.
4. Tool, Python library or model used.
5. What the model or program produced.
6. One test that worked and one that failed.
7. What they changed or would improve.
8. What they can explain in their own words.

## 11. Teacher lesson log — copy for each delivery

Use one entry for each class and batch. Record what actually happened, not what was planned.

**Date:**  
**Class / Batch:**  
**Week and topic:**  
**Learning goal:**  
**Demo or hook used:**  
**Practical task completed:**  
**Tools / dataset used:**  
**What students understood:**  
**Where students got stuck:**  
**What worked well:**  
**What I should change next time:**  
**Next lesson / preparation needed:**  

Do not record student personal or sensitive information in this public repository. Use class-level observations only.

## 12. Assessment after a lesson

Use quick evidence rather than a long test. Check whether students can:

- demonstrate the activity or run the notebook;
- explain the main idea in their own words;
- test a new example;
- identify one error or limitation;
- describe one possible improvement.

The programme's suggested assessment balance is: practical experiments and notebook work 30%, projects 30%, concept understanding 20%, problem-solving and creativity 10%, responsible use and teamwork 10%.

## Related records

- [16-week practical AI learning roadmap](FOUR-MONTH-LEARNING-ROADMAP.md)
- [Canonical AI curriculum](../AI-CURRICULUM-CLASSES-5-TO-9.md)
- [Existing four-month AI framework](../FOUR-MONTH-AI-TEACHING-IMPLEMENTATION-PLAN.md)
- [Current ATL timetable](../../../../main%20ATL%20school/ATL%20Lab%20Timetable/ATL-LAB-TIMETABLE.md)
- [Teacher operational guide](../../../../main%20ATL%20school/Teacher%20Operational%20Guide%20%26%20Weekly%20Teaching%20Plan/TEACHER-OPERATIONAL-GUIDE-AND-WEEKLY-PLAN.md)
