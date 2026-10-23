# Electronics and Robotics — Course Contents

> **Scope:** This sequence belongs to the Electronics and Robotics stream. It connects AI concepts to sensors, actuators, and physical builds where the lesson requires it. It is **not** the standalone AI-only curriculum. The filename `AI-CONTENTS.md` is retained to avoid breaking existing links.

Class curriculum documents: [Class 5](ELECTRONICS-AND-ROBOTICS/CLASS-5/CURRICULUM.md) · [Class 6](ELECTRONICS-AND-ROBOTICS/CLASS-6/CURRICULUM.md) · [Class 7](ELECTRONICS-AND-ROBOTICS/CLASS-7/CURRICULUM.md) · [Class 8](ELECTRONICS-AND-ROBOTICS/CLASS-8/CURRICULUM.md) · [Class 9](ELECTRONICS-AND-ROBOTICS/CLASS-9/CURRICULUM.md)

## Core sequence

1. **What AI is** — systems may use learned patterns, explicit rules, or a combination; not every automated device is AI.
2. **Data, patterns, and predictions** — how examples can inform a model's output.
3. **Features and labels** — input clues and target categories in a supervised-learning example.
4. **Classification and generation** — assigning a category versus creating new content.
5. **Building a dataset** — categories, relevant examples, and variety.
6. **Training a model** — using examples to adjust a model.
7. **Testing and accuracy** — evaluating with examples not used for training.
8. **Data quality and bias** — how missing or unrepresentative examples can affect performance.
9. **Train and test data** — why memorisation is not the same as generalisation.
10. **The model card** — documenting intended use, limitations, and performance.
11. **Sensors** — light, distance, and temperature as physical inputs.
12. **Decision rules** — thresholds and if/then logic; these are useful control methods but are not automatically AI.
13. **Actuators** — servos, relays, and LEDs as outputs, with appropriate drivers and safeguards.
14. **Model and hardware together** — connecting a model output to a physical action only when safe and suitable.
15. **Capstone project** — design and build a working device within the stated safety boundaries.
16. **Test, document, demonstrate** — record results, explain limits, and avoid unsupported performance claims.

## Advanced — Class 9

17. **Python and data** — reading a dataset on the Raspberry Pi, when coding is within the taught scope.
18. **Train/test split and confusion matrix** — introductory performance measurement.
19. **Error analysis** — false positives, false negatives, data bias, and limitations.
20. **Deployment and evaluation** — running a model in the project context and reporting measured results.

## Suggested pacing

- **Classes 5–6:** introduce the core ideas slowly and use guided, concrete demonstrations.
- **Classes 7–8:** revisit the sequence with more measurement, comparison, and explanation.
- **Class 9:** extend into data handling, evaluation, and deployment concepts where prerequisites have been taught.

This is a suggested sequence, not a claim that every class must implement every item at the same technical depth. Consult each class curriculum for scope and prerequisites.

## Safety and evidence rules

- No face recognition, student photographs, or student data may be uploaded to external AI services for these lessons.
- Gas sensors used in class are educational components, not life-safety alarms.
- Never drive a servo, motor, pump, or relay coil directly from a GPIO pin; use suitable driver circuitry and follow the component specifications.
- Every performance claim requires a recorded test and a clearly described test set.
- Mains-powered builds are out of scope.
