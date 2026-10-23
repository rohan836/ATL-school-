# Class 5 — AI Colour Detective

## Project guide: electronics-integrated AI

This guide is a practical extension to the class AI curriculum. It connects an AI idea to a physical input/output, while keeping the existing AI-only learning path usable without electronics.

**Important architecture note:** Arduino Uno/Nano-class boards are suitable for reading sensors and controlling LEDs, buzzers, servos, or motors. Do not imply that these boards train typical machine-learning models. Unless a specific supported TinyML workflow is set up, train/run the model on a laptop or Raspberry Pi (if available) and use the microcontroller as the hardware interface. Confirm actual component stock before committing to a hardware-dependent build.

### Project challenge
Build a simple classifier that learns to distinguish a few classroom-safe coloured objects and signals its predicted colour with LEDs.
### AI learning connection

Examples, labels, features, classification, training/testing split, and the fact that predictions can be wrong.

### Suggested components and alternatives

Arduino Uno/Nano or equivalent; colour-recognition sensor if available; 3 LEDs (red, yellow, green) with suitable resistors; breadboard and jumper wires. If the colour sensor is not in the lab stock, use a laptop webcam with a beginner-friendly image classifier, then send the predicted category to the board only if a supported serial connection is available.

### Build and investigation steps

1. Choose 3 colour classes and collect balanced examples under different lighting conditions. Record sensor readings or webcam examples with labels.
2. Keep some examples aside for testing; do not test only on the examples used for training.
3. Train or configure a simple classifier using a teacher-approved tool. Compare its predictions with the known labels.
4. Use the predicted class to select an LED output. Keep the sensor/model on the computer side when the board cannot run the model.
5. Change lighting or object position and record how the predictions change.

### Testing and success criteria

Test at least 10 unseen samples per colour. Report correct predictions / total tests, and note conditions that cause errors.

### Optional extension

Add a fourth class, compare two lighting conditions, or let the student explain why the model confuses similar colours.

### No-hardware / AI-only alternative

Use printed sensor readings or a paper dataset. Students label examples, predict the class manually using a simple decision rule, and map the output to a drawn LED indicator.

### Safety and responsible use

Use low-voltage USB-powered circuits. Add a current-limiting resistor to every LED. Do not point bright lights into eyes or use unknown chemicals/materials.

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
