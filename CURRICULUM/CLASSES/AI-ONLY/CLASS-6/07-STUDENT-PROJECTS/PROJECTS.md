# Class 6 — Smart Room Helper

## Project guide: electronics-integrated AI

This guide is a practical extension to the class AI curriculum. It connects an AI idea to a physical input/output, while keeping the existing AI-only learning path usable without electronics.

**Important architecture note:** Arduino Uno/Nano-class boards are suitable for reading sensors and controlling LEDs, buzzers, servos, or motors. Do not imply that these boards train typical machine-learning models. Unless a specific supported TinyML workflow is set up, train/run the model on a laptop or Raspberry Pi (if available) and use the microcontroller as the hardware interface. Confirm actual component stock before committing to a hardware-dependent build.

### Project challenge
Train a small model to classify a room’s light level (for example, dark / comfortable / bright) and show the class with LEDs or a buzzer.
### AI learning connection

Data features, labels, classification, decision boundaries, and comparison of learned predictions with a fixed threshold rule.

### Suggested components and alternatives

Arduino Uno/Nano; LDR/light sensor module; LEDs with resistors and/or a low-voltage buzzer; breadboard and jumper wires. A temperature/humidity sensor can be an optional second feature if available.

### Build and investigation steps

1. Collect labelled light readings in several room conditions. Agree on class definitions before collecting data.
2. Split examples into training and test sets. Avoid collecting all examples for one class in one location only.
3. Train a beginner-friendly classifier on a laptop or supported device. Record model predictions on held-out readings.
4. Implement a simple threshold baseline and compare its results with the learned model.
5. Connect the output to LEDs or a buzzer; keep sound brief and classroom-appropriate.

### Testing and success criteria

Compare accuracy for the model and threshold baseline on the same held-out samples. Include a small confusion table or count of mistakes.

### Optional extension

Add temperature as a second feature and test whether it improves the result; explain when extra data does not help.

### No-hardware / AI-only alternative

Use a provided table of light readings and labels; classify by hand, compare to a threshold rule, and sketch the LED output.

### Safety and responsible use

Use only low-voltage circuits. Do not connect a classroom project to mains lighting or mains power. Keep buzzer volume and duration modest.

### Student reflection

1. What examples did the model learn from, and what did you keep for testing?
2. What kinds of input caused a wrong or uncertain prediction?
3. How did the electronic output depend on the model’s prediction?
4. What would you change to make the project more reliable?

### Suggested assessment rubric (10 points)

| Criterion | Points |
|---|---:|
| Dataset, labels, and explanation of the AI concept | 2 |
| Correct and safe sensor/output integration (or quality of no-hardware equivalent) | 2 |
| Testing with unseen examples and recorded results | 2 |
| Analysis of errors, limitations, and comparison/baseline | 2 |
| Clear demonstration and reflection | 2 |

Teacher note: adapt the number of samples and coding complexity to the class timetable and available equipment. The project is an instructional prototype, not a safety-critical system.
