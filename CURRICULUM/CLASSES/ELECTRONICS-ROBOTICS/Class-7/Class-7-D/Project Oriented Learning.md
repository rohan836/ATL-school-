# Project Oriented Learning — Class 7, Batch D

## Batch and group plan

- **Class:** 7
- **Batch:** D
- **Students:** 40
- **Groups:** 8
- **Students per group:** 5
- **Session duration:** 60 minutes
- **Concept introduction:** 20 minutes
- **Hands-on practice:** 40 minutes
- **Project cycle:** Multi-session build, test, improve, and present

This plan assigns one distinct project to each group. Projects are class-level appropriate and should be checked against actual lab inventory before starting. Groups work on the same shared lesson concept where possible, then apply it to their assigned build.

## Group project allocation and project briefs

### Group 1 — Students 1–5: Bluetooth-Controlled Rover

**Project goal:** Rover responds to wireless commands.

- **Components:** Arduino Uno; Bluetooth module; motor driver; chassis
- **Concepts:** Wireless serial, motor commands
- **Build plan:** Map received commands to safe rover movements and test range.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 2 — Students 6–10: Light-Seeking Robot

**Project goal:** Robot turns toward a light source.

- **Components:** Arduino Uno; chassis; two LDRs; motor driver
- **Concepts:** Analog comparison, differential steering
- **Build plan:** Compare left/right light levels and adjust motor outputs.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 3 — Students 11–15: Remote Servo Arm

**Project goal:** Arm moves and manipulates lightweight objects.

- **Components:** Arduino Uno; joystick/potentiometer; servos; cardboard arm
- **Concepts:** Servo position, linkage design, mapping
- **Build plan:** Build a light model arm and map controls to servo angles.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 4 — Students 16–20: Smart Railway Crossing

**Project goal:** Timed railway crossing model.

- **Components:** Arduino Uno; IR sensor; LEDs; buzzer; servo
- **Concepts:** Detection, sequence, actuator control
- **Build plan:** Detect model train; activate warning; lower gate; reopen after passage.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 5 — Students 21–25: Wall-Following Robot

**Project goal:** Rover follows a wall section.

- **Components:** Arduino Uno; chassis; motor driver; distance sensor
- **Concepts:** Feedback, distance control
- **Build plan:** Adjust motor movement to maintain a target gap from a wall.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 6 — Students 26–30: Gesture-Controlled Car

**Project goal:** Car responds to selected gestures.

- **Components:** Arduino Uno; gesture/accelerometer controller; receiver; motor driver
- **Concepts:** Sensor interpretation, wireless control
- **Build plan:** Map a limited set of gestures to safe motor commands.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 7 — Students 31–35: Mini Robotic Gripper

**Project goal:** Gripper picks and moves small objects.

- **Components:** Arduino Uno; servo; cardboard gripper; buttons
- **Concepts:** Servo, mechanism design
- **Build plan:** Build a gripper and program open/close positions for lightweight objects.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 8 — Students 36–40: Smart Recycling Sorter

**Project goal:** Sorting demonstrator with documented limits.

- **Components:** Arduino Uno; proximity/color sensor; servo; model chute
- **Concepts:** Sensing, decision rules, sorting
- **Build plan:** Detect sample objects and move diverter according to calibrated categories.
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
