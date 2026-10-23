# AI Programme — 8 Weeks, Classes 5–9

An eight-week AI teaching programme for Classes 5–9, built on the timetable in `SCHOOL-OPERATIONS/TIMETABLES/MAIN/` and the equipment references in `LAB/REFERENCE/`.

**Status:** plan, not a record of teaching completed. Dates assume the programme starts on Monday 26 October 2026 and runs without interruption.

## 1. Time available

| Class | Days | Sessions per week | Total sessions | Approx. contact time |
|---|---|---|---:|---:|
| Class 5 | Mon, Tue, Wed | 3 | 24 | 28 h |
| Class 6 | Thu, Fri, Sat | 3 | 24 | 28 h |
| Class 7 | Mon, Tue | 2 | 16 | 18 h |
| Class 8 | Wed, Thu | 2 | 16 | 18 h |
| Class 9 | Fri, Sat | 2 | 16 | 18 h |

Section C and section D share the same slot on the same day, so every lesson is prepared once and delivered twice.

## 2. Learning progression

The programme moves through four levels. Every class starts at level 0; how far each class reaches differs.

| Level | Name | The student can |
|---|---|---|
| 0 | **Aware** | Explain what AI is and is not, and identify data, pattern, and prediction in a real example. |
| 1 | **Good — user** | Build a training set, train a simple classifier, test it, and explain its failures. |
| 2 | **Best — builder** | Make a model or decision rule control a physical output, measure its accuracy, and improve it. |
| 3 | **Advanced — engineer** | Evaluate a model on unseen data, explain bias and error, deploy it on a device, and state its limits. |

**Target by class:** Classes 5–6 reach level 1, with some teams at level 2. Classes 7–8 reach level 2. Class 9 reaches level 2–3.

## 3. Equipment assumptions

The equipment list in `LAB/REFERENCE/` is a **specification of what the ATL package should contain, not verified stock**. The programme is written so it still works if the computers or cameras are missing.

Useful listed items (verify actual presence and condition):

- 8 × Raspberry Pi 3 Model B+ with microSD cards — the only computers on the list.
- 45 × Arduino Uno, 15 × Nano, 15 × Mega.
- 50 × HC-SR04 ultrasonic, 50 × DHT11, 45 × LDR, 30 × PIR, 6 × TCS3200 colour sensor.
- 60 × small plastic-gear servo, 30 × single-channel relay, 6 × 12 V water pump.
- 8 × NodeMCU / 8 × WeMos D1 (ESP8266).

**Not confirmed:** any laptop, projector, camera, or webcam. Check the "Before Week 1" list in section 9.

Two delivery tracks:

- **Track A (computer available):** Teachable Machine in a browser for image/audio classification; Python on the Raspberry Pis for Class 9.
- **Track B (no computer or camera):** the class acts as the classifier using printed feature cards; the teacher demonstrates a model on any available screen. The concepts and the capstone still work — only the model-training tool changes.

## 4. Eight-week spine

| Week | Theme | Level reached |
|---|---|---|
| 1 | What AI is and is not | 0 |
| 2 | First model: features, labels, training | 0–1 |
| 3 | Data quality and bias | 1 |
| 4 | Testing honestly: accuracy and failure | 1 |
| 5 | Senses and rules: sensors to decisions | 2 |
| 6 | Learned model meets hardware | 2 |
| 7 | Capstone build | 2 |
| 8 | Test, document, demonstrate | 2–3 |

## 5. Weekly detail

Three-session classes use all three bullets. Two-session classes combine the second and third bullet into one session.

### Week 1 — What AI is and is not
- **Session 1:** Hook with three everyday AI uses. Sorting game: classify ten cards once by a written rule, once by example. Name the difference between a rule and a learned pattern.
- **Session 2:** "AI or not?" card sort. Write a class definition: data → pattern → prediction.
- **Session 3:** Each student records three AI examples and labels the data, the pattern, and the prediction in each.
- **Evidence:** definition plus three labelled examples.

### Week 2 — First model
- **Session 1:** Choose three categories to classify. Plan a dataset: 15 examples per category, what varies, what stays fixed.
- **Session 2:** Collect and train. Track A: Teachable Machine. Track B: printed feature cards and a recorded "human classifier".
- **Session 3:** Test on new examples. Record accuracy as a simple fraction.
- **Evidence:** dataset count and first accuracy figure.

### Week 3 — Data quality
- **Session 1:** Add variety — angle, light, background, size. Discuss balance across categories.
- **Session 2:** Retrain and compare accuracy with Week 2.
- **Session 3:** Bias hunt: find one group of examples the model gets wrong, and explain why.
- **Evidence:** before/after accuracy and one explained failure.

### Week 4 — Testing honestly
- **Session 1:** Separate training examples from test examples. Explain why testing on training data flatters the model.
- **Session 2:** Build a small confusion table for three categories. Put precision into plain words.
- **Session 3:** Write a one-page model card: data used, accuracy, known failures, limits.
- **Evidence:** model card.

### Week 5 — Senses and rules
- **Session 1:** Arduino with LDR or ultrasonic sensor. Read live values; watch them change.
- **Session 2:** Set a threshold that switches an LED or buzzer. This is a decision rule, not learning.
- **Session 3:** Compare rule-based and learned decisions. State when a rule is the better engineering choice.
- **Evidence:** working circuit and a one-line rule description.

### Week 6 — Learned model meets hardware
- **Session 1:** Design brief: input, decision, output. Choose components and draw the wiring plan.
- **Session 2:** Build and debug. If a trained model is available, let it drive the output; otherwise the sensor rule does.
- **Session 3:** Demonstrate to another team and record what failed.
- **Evidence:** working prototype and a failure list.

### Week 7 — Capstone build
- **Session 1:** Teams of four or five. Define the problem, the success test, and the components.
- **Session 2:** Build sprint.
- **Session 3:** Build sprint and integration.
- **Evidence:** build log with dated entries.

### Week 8 — Test, document, demonstrate
- **Session 1:** Test against the success criteria from Week 7; fix what fails.
- **Session 2:** Demo day. Each team runs its device and explains one design decision and one limitation.
- **Session 3:** Reflection and record the outcome in this repository.
- **Evidence:** demo result and reflection note.

## 6. Capstone options

Chosen to fit hardware that appears on the equipment list. Confirm stock before assigning.

| Class | Capstone | Main parts |
|---|---|---|
| 5 | Distance alarm or automatic light | Arduino, HC-SR04 or LDR, buzzer/LED |
| 6 | Smart dustbin | Arduino, HC-SR04, servo |
| 7 | Colour-sorting station | Arduino, TCS3200, servo |
| 8 | Plant care assistant | Arduino, soil sensor, DHT11, relay or pump |
| 9 | Learned classifier plus actuator | Raspberry Pi, Python, Arduino link, servo or LED |

Class 9 alternative where a camera is available: image classifier on the Pi using a pre-trained model, with accuracy measured on a held-out set.

## 7. Assessment

Four criteria, each rated 1–4. Use the same rubric in every class, with age-appropriate expectations.

| Criterion | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **Concept** | Names an AI example | Explains data → pattern → prediction | Explains why the model fails | Explains bias, error, and limits |
| **Data** | Collects examples | Collects varied examples | Checks balance and variety | Designs a fair train/test split |
| **Build** | Assembles with help | Works independently | Debugs systematically | Integrates model and hardware |
| **Explanation** | Describes what it does | Explains how it decides | Justifies a design choice | States limitations honestly |

Record one rating per criterion per team at Weeks 4 and 8.

## 8. Safety and privacy

- Never drive a servo, motor, pump, or relay coil directly from a GPIO pin; use a separate supply and a driver.
- Do not connect school-built circuits to mains power.
- Gas sensors are teaching components, not life-safety alarms.
- No face recognition, no photographs of students, no uploaded student data. Keep all datasets to objects, colours, sounds, or numbers.
- This repository is public: record class-level outcomes, never student names or individual performance.

## 9. Before Week 1

Check and record the actual state of each item:

1. How many Raspberry Pis boot, and which OS is installed.
2. Whether any laptop, projector, camera, or webcam exists.
3. Whether the lab has working internet.
4. Which Arduino boards and cables are present and functional.
5. Servo, ultrasonic, LDR, DHT11, relay, and pump counts.
6. Whether Arduino IDE or the web editor works on the available machines.
7. Any holiday or exam that interrupts Weeks 1–8.
8. Whether section C and D can share the same hardware on the same day.

If items 1–3 fail, run Track B and move the Class 9 capstone to a rule-based build with a written evaluation.

## 10. Records

- Class plans and dates: `CURRICULUM/CLASSES/Class-<number>/8-WEEK-PLAN.md`.
- Session outcomes and team results: add a `PROGRESS.md` in the relevant section folder when teaching starts.
- Update `INDEX.md` when a new record area is actually created.
