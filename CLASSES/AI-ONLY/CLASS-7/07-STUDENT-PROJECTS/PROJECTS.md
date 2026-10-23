# Class 7 — AI Object Sorter

## Project guide: electronics-integrated AI

This guide is a practical extension to the class AI curriculum. It connects an AI idea to a physical input/output, while keeping the existing AI-only learning path usable without electronics.

**Important architecture note:** Arduino Uno/Nano-class boards are suitable for reading sensors and controlling LEDs, buzzers, servos, or motors. Do not imply that these boards train typical machine-learning models. Unless a specific supported TinyML workflow is set up, train/run the model on a laptop or Raspberry Pi (if available) and use the microcontroller as the hardware interface. Confirm actual component stock before committing to a hardware-dependent build.

### Project challenge
A computer-vision model identifies a small set of safe classroom objects; a servo-operated cardboard gate directs each predicted class to a matching area.
### AI learning connection

Image classification, labelled datasets, training versus testing, generalization, bias from backgrounds/lighting, and uncertainty.

### Suggested components and alternatives

Laptop with webcam (or another supported camera); Arduino Uno/Nano; small hobby servo; cardboard gate and lightweight objects; jumper wires. The camera and model may run on the laptop; Arduino receives a simple class command and controls the servo. Verify servo availability before choosing the build.

### Build and investigation steps

1. Select 2–3 safe, non-personal object classes. Do not use student faces or personal belongings as training data.
2. Collect varied images with different angles, backgrounds, and lighting. Keep a separate test set.
3. Train a teacher-approved image classifier and test on images it has not seen.
4. Send the predicted category to the Arduino through a supported serial interface; map each category to a servo position.
5. Test the gate with a slow, lightweight cardboard mechanism and log incorrect classifications.

### Testing and success criteria

Test at least 10 unseen images per class. Report per-class correct counts and identify one condition that reduces performance.

### Optional extension

Add a ‘not sure’ / reject option, or compare plain-background images with varied-background images.

### No-hardware / AI-only alternative

Use printed object cards and a supplied prediction table. Students sort cards, calculate accuracy, and design a paper servo-gate state diagram.

### Safety and responsible use

Use a lightweight cardboard mechanism; keep fingers clear of moving parts. Do not use sharp blades in student handling. An adult supervises cutting and wiring.

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
