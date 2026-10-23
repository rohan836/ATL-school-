# AI + Electronics Project Plan (Classes 5–9)

**Status:** Planning document. Projects should be checked against actual lab stock before lesson guides or circuit diagrams are finalized.

## Design goals

Each project should be:
- **Understandable:** one main problem and a clear student-facing goal.
- **Interactive:** students can test, change an input, and see or control an output.
- **Useful:** addresses a small real-world need in the classroom, school, home, or community.
- **Actually AI-connected:** includes examples/data, a model or classification task, predictions, and reflection on errors. A fixed threshold or Arduino rule is useful electronics, but is not by itself machine learning.
- **Buildable:** uses common ATL sensors and Arduino-compatible circuits, with optional components clearly identified.

## Project progression

| Class | Project | Useful challenge | AI learning focus | Core electronics / circuit | Student interaction and outcome |
|---|---|---|---|---|---|
| 5 | **AI Colour Detective** | Help identify and group objects for sorting or classroom games | Labels, examples, classification, prediction, mistakes | Arduino Uno/Nano; colour sensor if available, or laptop webcam for the model; LEDs/buzzer | Students show coloured objects, record predictions, and test how lighting or object changes affect accuracy. Output signals the predicted group. |
| 6 | **Smart Classroom Energy Helper** | Reduce unnecessary classroom lighting | Sensor data, features, decision rules versus a learned classifier | LDR module, PIR motion sensor, Arduino, LEDs; optional display | Students change brightness and movement, compare readings, and test the helper's recommendation. Start with a transparent rule; add a model only if students collect labeled data and train one. |
| 7 | **AI Recycling Sorter** | Help sort common recyclable items | Image classification, training examples, confidence, model errors | Laptop/webcam and image model; Arduino; servo; cardboard chute; optional LEDs | Students train/test a model on paper/plastic/metal examples. The computer predicts; Arduino moves a small gate to the selected bin. |
| 8 | **Smart Plant Care Assistant** | Help care for a classroom plant | Data collection, features, classification, interpreting recommendations | Soil-moisture module, temperature/humidity module, Arduino, LEDs or display; optional pump | Students compare dry and damp soil readings and build a “needs water / okay” indicator. Test recommendations against the plant and recorded data. |
| 9 | **Gesture-Controlled Helper Robot** | Provide a simple, accessible way to control a small robot | Gesture recognition, dataset quality, testing, AI-to-action integration | Accelerometer module or webcam; Arduino; motor driver; DC gear motors and wheels | Students collect gesture examples and map recognized gestures to forward, turn, and stop commands. Robot is tested on a short safe course. |

## Learning sequence

1. **Class 5 — Recognize:** understand labels, examples, and predictions.
2. **Class 6 — Sense and decide:** read sensors, collect data, and distinguish rules from machine learning.
3. **Class 7 — Classify and act:** connect an image model prediction to a physical mechanism.
4. **Class 8 — Interpret data:** combine readings to produce and evaluate a useful recommendation.
5. **Class 9 — Integrate:** combine an AI model, sensor input, Arduino control, and motors into a tested system.

## Circuit and hardware notes

- For an **LDR**, use a voltage-divider circuit and read its midpoint with an analog input. An LDR reading is a measurement, not an AI prediction.
- Soil-moisture modules should be tested in the actual soil and calibrated with dry and damp samples. Prefer a capacitive sensor when available; do not leave a sensor powered in wet soil unnecessarily.
- Check each sensor's operating voltage and signal levels against the selected board. Do not assume every module is safe for every 3.3 V or 5 V input.
- A standard Uno/Nano is a strong sensor-and-control board, but should not be assumed to run every image or ML model. For webcam projects, run the model on a connected computer and send the result to Arduino for actuation. Use on-device TinyML only with a board and model that support it.
- Servo and DC motors may require a separate suitable supply; connect grounds as required by the circuit design. Do not power motors directly from an Arduino I/O pin.
- Keep pumps, mains voltage, hot components, gas sensors, and unattended actuation out of the student default build. Any optional pump should use a low-voltage setup, supervision, and a safe driver stage.

## Build workflow for every project

1. Define the real-world problem and success criteria.
2. Identify the input sensor(s), controller, output, and power requirements.
3. Draw and verify the circuit; test each component separately.
4. Collect examples or sensor data and label them.
5. Train or select the model where an actual ML task is intended.
6. Connect prediction to the Arduino output or action.
7. Test under different conditions, record errors, and improve.
8. Present the working demo and explain its limits.

## Component availability and implementation caveat

The repository's ATL sensor, board, and actuator lists are derived equipment references, not a verified inventory count. Before final circuit guides are written, confirm which exact board and module students will use. Raspberry Pi, webcam, color sensor, accelerometer, servo, motor driver, display, and pump are optional unless the lab confirms availability.

## Research references

- [Arduino Project Hub](https://projecthub.arduino.cc/) — hands-on Arduino projects involving sensors, circuits, motors, and environmental monitoring.
- [Arduino Nano 33 BLE Sense Rev2 documentation](https://docs.arduino.cc/hardware/nano-33-ble-sense-rev2/) — example of hardware with integrated sensing and TinyML-oriented use.
- [Edge Impulse documentation](https://docs.edgeimpulse.com/) — workflow for collecting data, training models, and deploying to supported edge devices.
- [Edge Impulse project examples](https://docs.edgeimpulse.com/projects) — examples involving motion, gesture, environmental sensing, and anomaly detection.

**Planning note:** These are proposed projects, not finalized build instructions. Exact wiring, pin assignments, model choice, and component quantities should be decided only after checking the lab's actual stock and selected board.
