# Project Oriented Learning — Class 9, Batch D

## Batch and group plan

- **Class:** 9
- **Batch:** D
- **Students:** 40
- **Groups:** 8
- **Students per group:** 5
- **Session duration:** 60 minutes
- **Concept introduction:** 20 minutes
- **Hands-on practice:** 40 minutes

Each group builds a class-appropriate prototype over multiple sessions. Confirm hardware availability, interface compatibility, and teacher supervision before beginning.

## Group project allocation and briefs

### Group 1 — Students 1–5: Python Reaction Game

- **Goal:** Create a repeatable reaction-time game.
- **Components:** Raspberry Pi, button, LED, buzzer.
- **Concepts:** GPIO, timing, event handling.
- **Build plan:** Implement start, wait, signal, and response states; record reaction time.
- **Test/evidence:** Run at least three trials, compare response times, and document one issue or limitation.
- **Deliverable:** Working game, circuit diagram, project log, and group explanation.

### Group 2 — Students 6–10: Camera Object Counter

- **Goal:** Count objects crossing a defined camera region.
- **Components:** Raspberry Pi, camera, Python image-processing software.
- **Concepts:** Image thresholding, counting, frame logic.
- **Build plan:** Define a detection region and count objects crossing it under controlled conditions.
- **Test/evidence:** Test different object positions and speeds; record count accuracy and limitations.
- **Deliverable:** Demonstration, sample results, and explanation of the counting logic.

### Group 3 — Students 11–15: Smart Library Entry Monitor

- **Goal:** Demonstrate a local entry-event workflow.
- **Components:** Raspberry Pi, RFID reader or button-based mockup, display.
- **Concepts:** Input events, local logging, privacy.
- **Build plan:** Record demonstration-tag or mock-button events and display an event count.
- **Test/evidence:** Test repeated events and confirm the system avoids collecting real personal data.
- **Deliverable:** Local prototype, event log using demo data, and privacy note.

### Group 4 — Students 16–20: Air-Quality Data Dashboard

- **Goal:** Collect sensor-module readings and visualize trends.
- **Components:** Raspberry Pi, teacher-approved sensor module, Python.
- **Concepts:** Sampling, logging, visualization, interpreting sensor output.
- **Build plan:** Collect readings at intervals and plot changes over time.
- **Test/evidence:** Record a sample dataset and explain sensor limitations.
- **Deliverable:** Dashboard/graph, dataset, and project explanation. This is educational monitoring, not certified air-quality measurement.

### Group 5 — Students 21–25: Voice-Command Model Controller

- **Goal:** Control a model output using a small set of voice commands.
- **Components:** Raspberry Pi, microphone, Python, LED or servo.
- **Concepts:** Audio input, command mapping, output control.
- **Build plan:** Use teacher-approved or offline command recognition to map a few commands to model actions.
- **Test/evidence:** Test each command in different conditions and record recognition results.
- **Deliverable:** Working command demonstration and limitations report.

### Group 6 — Students 26–30: Smart Attendance Demonstrator

- **Goal:** Demonstrate an attendance-event workflow without using real student information.
- **Components:** Raspberry Pi, RFID reader, display/log.
- **Concepts:** Event reading, data handling, privacy.
- **Build plan:** Use non-identifying demo tags to record mock events and display the result.
- **Test/evidence:** Test multiple demo tags and verify that no real personal data is stored.
- **Deliverable:** Demonstrator, sample mock log, and data-privacy note.

### Group 7 — Students 31–35: Remote Sensor Gateway

- **Goal:** Receive sensor data from a microcontroller and display it locally.
- **Components:** Raspberry Pi, ESP32, sensors, dashboard.
- **Concepts:** Serial/network messaging, gateway design, data fields.
- **Build plan:** Receive ESP32 sensor readings and show them on a Pi dashboard; document the message format.
- **Test/evidence:** Compare displayed values with transmitted sample values and record communication errors.
- **Deliverable:** Gateway demonstration, system diagram, and sample data.

### Group 8 — Students 36–40: Adaptive Traffic Model

- **Goal:** Adjust a model traffic-signal pattern based on detected traffic.
- **Components:** Raspberry Pi, sensors, LEDs, optional servo.
- **Concepts:** Conditions, state machines, system integration.
- **Build plan:** Use model traffic counts to adapt low-voltage signal timing.
- **Test/evidence:** Run several traffic scenarios and document how signal behavior changes.
- **Deliverable:** Responsive traffic model, test log, and system diagram.

## Learning and teaching sequence

1. **Introduce (20 min):** Explain the problem, concepts, component roles, and safe use.
2. **Plan:** Identify components, create a system block diagram, and split the work into build stages.
3. **Build:** Assemble and test one subsystem at a time.
4. **Program and integrate:** Add Python/control logic after checking wiring and interfaces.
5. **Test:** Record at least three trials and compare expected with actual behavior.
6. **Improve:** Fix a fault or add a useful feature, documenting the change.
7. **Present:** Demonstrate the system and explain its working, limitations, and next improvement.

## Project milestones

| Milestone | Evidence |
|---|---|
| Plan | Problem statement, component list, group roles, system diagram |
| Component check | Safe component test and recorded observations |
| First build | Core subsystem works |
| Integration | Inputs, logic, and outputs work together |
| Test and improve | Three or more trials, fault notes, one improvement |
| Final presentation | Prototype, project log, and group explanation |

## Group roles

Assign five rotating roles: electronics/build lead, programming/control lead, mechanical/design lead, testing and measurement lead, and documentation/presentation lead. Rotate roles between sessions. Every student must participate in hands-on work and understand the overall project.

## Assessment rubric

| Area | Weight | Evidence |
|---|---:|---|
| Concept understanding | 20% | Explains principles and component roles |
| Construction and wiring | 20% | Safe, organized, correct assembly |
| Programming/control | 20% | Logic works and is understood |
| Testing and troubleshooting | 15% | Records trials, faults, and fixes |
| Improvement | 10% | Useful change based on testing |
| Teamwork/documentation | 10% | Rotating participation and project log |
| Demonstration | 5% | Clear explanation and limitation |

## Safety and implementation notes

- Use isolated low-voltage DC student circuits; do not build or probe household mains circuits.
- Disconnect power before rewiring and verify component ratings and polarity.
- Do not drive motors, pumps, or high-current servos directly from GPIO pins; use appropriate drivers and power supplies.
- Raspberry Pi GPIO is 3.3 V logic; use suitable level interfaces for incompatible sensor outputs.
- Camera and attendance demonstrations must use approved subjects and non-identifying data; do not collect personal data without authorization.
- Sensor modules used for air-quality demonstrations are not certified safety instruments.
- Check actual inventory and obtain teacher approval before construction.

## Final submission checklist

- [ ] Project title and group number
- [ ] Problem statement and learning concepts
- [ ] Component list and system diagram
- [ ] Build/programming notes
- [ ] At least three test observations
- [ ] Fault and improvement record
- [ ] Demonstration or documented reason for incomplete operation
- [ ] Every student can explain the project
