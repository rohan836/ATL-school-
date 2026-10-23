# Class 5 — AI Builders: Project Guides

**Purpose:** Six monthly project guides for the project-driven Class 5 AI curriculum. Each challenge has a real-world framing, an interactive outcome, a testing cycle, and an accessible alternative.

**Teaching rule:** Show a working example early. Students should explore, predict, build, test, and improve. Introduce terminology only when it helps them explain what they are doing.

## Project map

| Month | Project | Main technique | Suggested build environment |
|---|---|---|---|
| 1 | AI Waste Detective | Image classification | Beginner-friendly image classifier or teacher-guided notebook |
| 2 | Image Segmentation Explorer | Segmentation masks | Teacher-prepared images and pretrained segmentation demo |
| 3 | Gesture-Controlled Game | Gesture classification | Webcam tool or prepared gesture inputs |
| 4 | Mini Text Generator | Next-token/text generation | Guided small model or safe local/browser demonstration |
| 5 | Classroom AI Agent | Bounded tool use | Teacher-controlled agent simulation or restricted tool workflow |
| 6 | AI School Helper | Student-selected integration | Suitable tools from earlier projects |

---

## Month 1 — AI Waste Detective

### Challenge
“Our school creates waste every day. Can we make a computer help identify an item’s likely category?”

### Build
An interactive classifier that predicts a category such as paper, plastic, metal, or organic. The result may show a teacher-approved disposal suggestion, clearly labelled as guidance rather than an authoritative waste-safety decision.

### Learning focus
- Classification, labels, examples, training, prediction/inference.
- Dataset variety and train/test separation.
- Variables, conditions, events, and simple functions.
- Testing on new images and discussing false predictions.

### Build sequence
1. Explore and sort example waste images by hand.
2. Agree on a small set of clear categories and label examples.
3. Train or configure a beginner-friendly classifier using teacher-approved software.
4. Test new images not used for training.
5. Record confusing cases and vary background, angle, and lighting.
6. Add examples or refine categories; compare results.
7. Create a simple interface and demonstrate the model’s limits.

### Success evidence
- A working or simulated classifier with at least three categories.
- A record of test inputs and predictions.
- One identified error and a reasoned improvement.
- Student explanation of classification and the role of examples.

### No-camera/offline alternative
Use teacher-prepared printed images or cards. Students run a paper simulation, label examples, and track predictions. Clearly explain that a paper activity illustrates the idea but is not itself a trained AI model.

---

## Month 2 — Image Segmentation Explorer

### Challenge
“Can a computer highlight exactly which pixels belong to an object, rather than only naming it?”

### Build
An image explorer that displays an image and an object mask or highlighted region. Use a pretrained model or teacher-prepared mask outputs; students do not need to train a large segmentation model.

### Learning focus
- Difference between classification, object detection, and segmentation.
- Pixels, image grids, foreground/background, masks, regions.
- Coordinates or simple arrays where appropriate.
- Model limitations, image variation, and careful interpretation.

### Build sequence
1. Compare an image label, a bounding box, and a segmentation mask.
2. Inspect a grid/pixel activity using a printed image.
3. Use a teacher-prepared image and segmentation output.
4. Change the image or select another object, where supported.
5. Inspect mask errors, such as missing edges or merged objects.
6. Compare outcomes and annotate what the model did well or poorly.
7. Demonstrate the explorer and explain the difference from classification.

### Success evidence
- A displayed image and mask/region.
- Correct explanation of what a mask represents.
- One example where the mask is imperfect.
- Comparison of classification and segmentation.

### Offline alternative
Use a printed grid image and transparent colored overlays or paper masks. Students mark regions pixel-by-pixel and discuss why this differs from an AI-generated mask.

---

## Month 3 — Gesture-Controlled Game

### Challenge
“Can we play a simple game using hand gestures instead of keyboard controls?”

### Build
A small game with a limited gesture vocabulary, such as open hand = move, closed fist = stop, or left/right gesture = move direction. A teacher-approved webcam classifier may be used; simulated gesture buttons are an acceptable fallback.

### Learning focus
- Classification and real-time predictions.
- Examples, labels, variation, and uncertainty.
- Events, conditions, variables, loops, and simple game state.
- Camera permission, privacy, and accessible alternatives.

### Build sequence
1. Play a keyboard-controlled version and propose gesture mappings.
2. Examine a small set of gesture classes.
3. Train/configure or use a prepared gesture classifier.
4. Connect predicted gestures to game actions.
5. Test with changed distance, background, and lighting.
6. Improve the mapping or add a confirmation/debounce step.
7. Demonstrate the game and discuss false activations.

### Success evidence
- A playable game with at least two gesture classes or a simulated equivalent.
- A test log for different conditions.
- One observed error and a change made to address it.
- A privacy-aware explanation of camera use.

### Privacy boundary
Do not record, store, or upload student faces or gestures unless the school has explicitly approved the tool and process. Prefer ephemeral local processing or prepared examples.

---

## Month 4 — Mini Text Generator

### Challenge
“Can a computer learn patterns in a small set of text and generate a new continuation?”

### Build
A small, guided text-generation demo. Use a teacher-created, age-appropriate text corpus and a character-level or word-level model, or a prepared mini language-model demonstration.

### Learning focus
- Text as sequences; characters, words, or tokens.
- Patterns and next-token prediction.
- Generation versus retrieval or classification.
- Output review, hallucination, and the limits of a tiny model.
- Strings, lists, loops, and functions where coding is appropriate.

### Build sequence
1. Play a classroom next-word prediction game using a few teacher-written examples.
2. Compare how changing examples affects likely continuations.
3. Inspect a simple token/sequence representation.
4. Run a small guided generator with approved sample text.
5. Try prompts or starting sequences and compare outputs.
6. Identify repetitive, nonsensical, or unsupported content.
7. Build a simple input/output interface and present its limits.

### Success evidence
- A text generator or guided simulation that produces a continuation.
- Student explanation of next-token prediction in simple terms.
- Two outputs compared against criteria such as relevance and coherence.
- Recognition that plausible generated text is not necessarily true.

### Technical boundary
Do not imply that students are training a modern foundation model from scratch. Use small models, pretrained demonstrations, or teacher-guided code with manageable compute.

---

## Month 5 — Classroom AI Agent

### Challenge
“Can a computer use a small set of approved tools to help complete a classroom task?”

### Build
A bounded agent that can consult a teacher-approved classroom guide and use safe tools such as a calculator or checklist. It should show its selected tool and returned result so students can inspect the process.

### Learning focus
- Goal, observation/input, action, tool, result, feedback.
- Difference between a chatbot response and a tool-using workflow.
- Functions, conditions, simple state, and task decomposition.
- Permissions, reliability, and human review.

### Build sequence
1. Choose a simple classroom task and define what “done” means.
2. Map the agent’s input, possible tools, and expected output.
3. Build a guided workflow or teacher-controlled simulation.
4. Test a successful case, a missing-information case, and an incorrect-tool case.
5. Add a clear boundary or ask-for-help path.
6. Inspect tool logs and revise instructions.
7. Demonstrate the task and explain where a person must review.

### Success evidence
- A bounded task with at least one safe tool or transparent simulated tool.
- Visible record of tool choice/result.
- Tests covering a normal case and an edge case.
- Clear limits and a human-approval point.

### Safety boundary
No unrestricted internet browsing, shell/code execution, private files, account access, or autonomous consequential actions. Use only teacher-approved content and tools. The system must ask a person when it lacks information or reaches a boundary.

---

## Month 6 — AI School Helper (Capstone)

### Challenge
“Which small problem at our school could be improved with an AI-supported prototype?”

### Build
A team-selected low-risk project. Students choose the technique based on the problem; they are not required to use every model type.

### Possible project ideas
- Waste sorting assistant.
- School-garden plant or leaf classifier using approved images.
- Library book-category helper using fictional or approved data.
- Classroom question assistant grounded in a teacher-approved guide.
- Accessibility or language-support prototype.
- Classroom task checklist agent.

### Learning focus
- Problem definition and AI suitability.
- Combining data, a model, an interface, and testing.
- Evaluation, iteration, teamwork, and communication.
- Privacy, fairness, limitations, and human oversight.

### Required project brief
1. Problem and intended users.
2. Why AI is appropriate—or why a simpler non-AI solution may be better.
3. Input, output, technique, and data/examples.
4. Prototype plan and team roles.
5. At least three test cases, including one difficult case.
6. Evidence from testing and one improvement.
7. Privacy/fairness/safety consideration.
8. Limitations and a human review point.
9. Demonstration and individual reflection.

### Success evidence
A working prototype or clearly labelled simulation, a test record, a reasoned improvement, and a presentation that accurately describes what the project can and cannot do.

---

## Optional hardware extension — AI Colour Detective

This activity preserves the existing electronics-integrated project as an optional extension. It is not a required project in the six-month AI-only progression.

### Challenge
Build a classifier that distinguishes a few coloured objects and signals its predicted colour with LEDs.

### Possible components
Arduino Uno/Nano-class board; compatible colour sensor if available; three LEDs and suitable current-limiting resistors; breadboard and jumper wires. Confirm lab inventory before promising the activity. If a sensor is unavailable, use a laptop webcam or a paper dataset.

### Architecture note
A typical Arduino Uno/Nano-class microcontroller can read sensors and control LEDs, buzzers, servos, or motors. Do not imply it trains a typical ML model. Unless a supported TinyML workflow is specifically prepared, run the model on a laptop or Raspberry Pi and use the microcontroller as the input/output interface.

### Build and test
1. Choose three colour classes and gather varied labelled examples.
2. Keep separate examples for testing.
3. Train/configure a simple classifier with teacher-approved software.
4. Map the predicted category to an LED output.
5. Test at least 10 unseen examples per colour, if time and data allow.
6. Change lighting or object position and record errors.

### No-hardware alternative
Use printed sensor readings or a paper dataset; map the predicted class to a drawn LED indicator.

### Safety
Use low-voltage USB power, a current-limiting resistor for each LED, and safe classroom handling. This is an instructional prototype, not a safety-critical classifier.

## Common student reflection prompts

- What problem were we trying to solve?
- What did we build, and what does the AI part do?
- What examples or inputs did we test?
- What did not work as expected?
- What did we change after testing?
- What should a person check or decide?
- What is one limitation of our prototype?
