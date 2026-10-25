# Project Oriented Learning — Class 6, Batch C

## Batch and group plan

- **Class:** 6
- **Batch:** C
- **Students:** 40
- **Groups:** 8
- **Students per group:** 5
- **Session duration:** 60 minutes
- **Concept introduction:** 20 minutes
- **Hands-on practice:** 40 minutes
- **Project cycle:** Multi-session build, test, improve, and present

This plan assigns one distinct project to each group. Projects are class-level appropriate and should be checked against actual lab inventory before starting. Groups work on the same shared lesson concept where possible, then apply it to their assigned build.

## Group project allocation and project briefs

### Group 1 — Students 1–5: Touchless Smart Dustbin

**Project goal:** Hands-free model bin lid.

- **Components:** Arduino Uno; HC-SR04; servo; model bin
- **Concepts:** Ultrasonic distance, servo angle, thresholds
- **Build plan:** Measure hand distance; open the lid inside a set range; close after a delay.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 2 — Students 6–10: Mini Parking Radar

**Project goal:** Proximity warning with recorded distance thresholds.

- **Components:** Arduino Uno; HC-SR04; LEDs; buzzer; optional LCD
- **Concepts:** Distance bands, feedback
- **Build plan:** Map distance ranges to LED and buzzer signals; calibrate against measured distances.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 3 — Students 11–15: Motion-Activated Room Light

**Project goal:** Automatic light uses two sensor conditions.

- **Components:** Arduino Uno; PIR; LDR; LED; resistors
- **Concepts:** PIR, light threshold, combined conditions
- **Build plan:** Switch light only when motion is detected and ambient light is low.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 4 — Students 16–20: Smart Plant Monitor

**Project goal:** Soil-status indicator with calibration record.

- **Components:** Arduino Uno; soil-moisture sensor; LEDs
- **Concepts:** Analog values, calibration, moisture thresholds
- **Build plan:** Compare readings in dry and damp soil; set status ranges and indicate them.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 5 — Students 21–25: Classroom Weather Station

**Project goal:** Live temperature/humidity display.

- **Components:** Arduino Uno; DHT sensor; LCD/OLED
- **Concepts:** Temperature, humidity, display
- **Build plan:** Read sensor data at intervals and show it on a display.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 6 — Students 26–30: Pedestrian Crossing Model

**Project goal:** Mini crossing with defined signal states.

- **Components:** Arduino Uno; IR/ultrasonic sensor; LEDs; buzzer
- **Concepts:** Detection, signal timing, state sequence
- **Build plan:** Detect a model pedestrian and trigger a timed crossing sequence.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 7 — Students 31–35: Object Counter

**Project goal:** Display shows count of objects.

- **Components:** Arduino Uno; IR sensor; display
- **Concepts:** Object detection, edge counting
- **Build plan:** Count objects passing a sensor; test spacing and prevent duplicate counts.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 8 — Students 36–40: Color Challenge Game

**Project goal:** Color identification game.

- **Components:** Arduino Uno; TCS3200/TCS34725; LEDs; buzzer
- **Concepts:** Color sensing, calibration, comparison
- **Build plan:** Calibrate sensor on sample colors and respond when the target color is detected.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.


## Learning and teaching sequence

1. **Introduce (20 min):** Explain the real-world problem, principle, and component roles. Demonstrate safe use and relevant pins/ratings.
2. **Build (first practical stage):** Identify parts, draw the circuit/system diagram, and assemble a small working section.
3. **Program and integrate:** Add code or control logic only after the wiring and component checks pass.
4. **Test:** Record at least three observations or trials. Compare measured results with expected behavior.
5. **Improve:** Fix one identified fault or add one useful feature; document what changed.
6. **Present:** Each group demonstrates the prototype and explains the concept, components, working, and limitation.

## Suggested project milestones

| Milestone | Evidence |
|---|---|
| Plan | Problem statement, group roles, component list, labelled circuit/block diagram |
| Component check | Components tested safely; readings or observations recorded |
| First build | Core circuit/mechanism operates at least once |
| Integration | Sensors, control logic, and outputs work together as intended |
| Test and improve | Three or more trials, fault notes, one improvement |
| Final demonstration | Working prototype/model, project log, group explanation |

## Group roles and participation

Each group has five rotating roles: electronics/build lead, programming/control lead, mechanical/design lead, testing and measurement lead, and documentation/presentation lead. Rotate roles between sessions. Roles coordinate work; they do not prevent every student from wiring, coding, testing, and explaining the complete project.

## Assessment rubric

| Area | Weight | Evidence |
|---|---:|---|
| Concept understanding | 20% | Explains the principle and component function |
| Construction and wiring | 20% | Safe, organized, correct assembly |
| Programming/control | 20% | Logic works and is understood by group members |
| Testing and troubleshooting | 15% | Records trials, identifies faults, explains fixes |
| Improvement and creativity | 10% | Useful improvement based on testing |
| Teamwork and documentation | 10% | Rotating participation and clear project log |
| Demonstration | 5% | Clear explanation of operation and limitation |

## Safety and implementation notes

- Use isolated, low-voltage DC student circuits only. Never connect student-built projects to household mains.
- Disconnect power before changing wiring; check polarity and component ratings before energizing.
- Use current-limiting resistors with LEDs. Do not drive motors, pumps, or high-current servos directly from controller GPIO pins; use suitable drivers and supplies.
- ESP32 and Raspberry Pi GPIO use 3.3 V logic; protect pins from 5 V signals using appropriate interfaces.
- Keep water away from electronics and use supervised low-voltage demonstration setups for water-related projects.
- Gas sensor projects are educational demonstrations, not certified safety alarms. Camera projects must use teacher-approved subjects and privacy rules; do not capture or store personal data without authorization.
- Confirm inventory, wiring diagrams, sensor compatibility, and teacher supervision before each build.

## Final group submission checklist

- [ ] Project title and group number
- [ ] Problem statement and learning concepts
- [ ] Component inventory
- [ ] Labelled circuit/block diagram
- [ ] Build and program notes, where applicable
- [ ] At least three test observations
- [ ] Fault and improvement record
- [ ] Working demonstration or documented reason for incomplete operation
- [ ] Every student can explain the project
