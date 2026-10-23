# Class 9 — AI-Assisted Autonomous Robot

## Project guide: electronics-integrated AI

This guide is a practical extension to the class AI curriculum. It connects an AI idea to a physical input/output, while keeping the existing AI-only learning path usable without electronics.

**Important architecture note:** Arduino Uno/Nano-class boards are suitable for reading sensors and controlling LEDs, buzzers, servos, or motors. Do not imply that these boards train typical machine-learning models. Unless a specific supported TinyML workflow is set up, train/run the model on a laptop or Raspberry Pi (if available) and use the microcontroller as the hardware interface. Confirm actual component stock before committing to a hardware-dependent build.

### Project challenge
Build a small robot that uses sensor readings and a trained model to choose among a limited set of actions, such as stop, turn, or move forward.
### AI learning connection

Features from sensors, supervised classification, action selection, train/test separation, robustness, and comparing AI with a rule-based controller.

### Suggested components and alternatives

Arduino-compatible board; IR line or obstacle sensor and/or ultrasonic sensor; motor driver; low-voltage DC motors and chassis; battery pack appropriate for the kit. Train/run the model on a laptop or Raspberry Pi if available; Arduino handles sensor I/O and motor control. Do not assume an onboard model or Raspberry Pi/camera is stocked.

### Build and investigation steps

1. Define a small, safe action set and collect labelled sensor snapshots for each action. Include boundary cases, not only easy examples.
2. Train a simple classifier on a computer or supported platform and reserve unseen runs for testing.
3. Use a serial or supported interface to send the predicted action to the Arduino. Apply motor commands through a suitable motor driver, never directly from GPIO pins.
4. Implement a stop state and test the robot at low speed in a clear, bounded area.
5. Build a rule-based baseline and compare both approaches on the same course; inspect failures before changing the data/model.

### Testing and success criteria

Run at least 10 trials on a defined course. Report successful completions, collisions or stops, and comparison with the rule-based baseline.

### Optional extension

Add an uncertainty threshold that causes the robot to stop, or evaluate changes in sensor placement and surface conditions.

### No-hardware / AI-only alternative

Use a simulated sensor/action table or paper robot course. Students classify readings, select actions, compare against rules, and diagram a safe controller.

### Safety and responsible use

Use low-voltage kit batteries and a motor driver. Keep wheels off the ground during initial tests; operate slowly in a clear area. Include an accessible stop/disconnect and supervise battery handling.

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
