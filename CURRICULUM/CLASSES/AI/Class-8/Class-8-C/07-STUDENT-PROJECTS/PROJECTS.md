# Class 8 — AI Plant Care Assistant

## Project guide: electronics-integrated AI

This guide is a practical extension to the class AI curriculum. It connects an AI idea to a physical input/output, while keeping the existing AI-only learning path usable without electronics.

**Important architecture note:** Arduino Uno/Nano-class boards are suitable for reading sensors and controlling LEDs, buzzers, servos, or motors. Do not imply that these boards train typical machine-learning models. Unless a specific supported TinyML workflow is set up, train/run the model on a laptop or Raspberry Pi (if available) and use the microcontroller as the hardware interface. Confirm actual component stock before committing to a hardware-dependent build.

### Project challenge
Use soil-moisture readings (and optionally environmental readings) to classify plant-care status and show an advisory output.
### AI learning connection

Sensor data, features and labels, classification or simple prediction, data quality, false alarms, and responsible interpretation.

### Suggested components and alternatives

Arduino Uno/Nano; soil-moisture sensor; LEDs or a small display; optional temperature/humidity sensor. A low-voltage pump is an optional extension only if available and teacher-supervised; the core project is an advisory indicator, not automatic watering.

### Build and investigation steps

1. Collect readings from dry, moderately moist, and moist soil samples. Use consistent sensor placement and label the samples with a teacher-approved method.
2. Record multiple readings and note that soil type and sensor placement affect values.
3. Train a small model on a computer or use a simple baseline; test on separate readings from repeated samples.
4. Display the predicted care category with LEDs or a display. Treat it as advice, not a guaranteed diagnosis of plant health.
5. Compare model predictions with the baseline and document sensor noise or unexpected readings.

### Testing and success criteria

Test repeated readings across the categories. Report accuracy or class-wise correct counts and explain at least one source of measurement variation.

### Optional extension

Add temperature/humidity as an additional feature, or design a safe alert that asks a person to check the plant before watering.

### No-hardware / AI-only alternative

Analyze a provided soil-moisture dataset, label cases, compare a model or hand-built rule, and design a paper dashboard.

### Safety and responsible use

Keep water away from the controller, USB connection, and exposed electrical contacts. Use low voltage only. Pump operation is optional and requires adult supervision; never leave it running unattended.

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
