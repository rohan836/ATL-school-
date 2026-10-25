# Project Oriented Learning — Class 7, Batch C

## Batch and group plan

- **Class:** 7
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

### Group 1 — Students 1–5: Obstacle-Avoiding Robot

**Project goal:** Rover navigates an obstacle course.

- **Components:** Arduino Uno; chassis; DC motors; driver; HC-SR04
- **Concepts:** Motor direction, distance feedback, decisions
- **Build plan:** Build chassis; read distance; stop and turn when an obstacle is close.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 2 — Students 6–10: Line-Following Robot

**Project goal:** Robot follows a prepared line.

- **Components:** Arduino Uno; chassis; motor driver; IR line sensors
- **Concepts:** Reflectance, calibration, feedback
- **Build plan:** Calibrate sensors on track and tune motor response.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 3 — Students 11–15: Automatic Barrier Gate

**Project goal:** Automatic barrier model.

- **Components:** Arduino Uno; servo; IR/ultrasonic sensor; model gate
- **Concepts:** Servo angles, detection, timing
- **Build plan:** Detect a model vehicle; raise gate; wait for passage; lower gate.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 4 — Students 16–20: Joystick Rover

**Project goal:** Manually controlled low-voltage rover.

- **Components:** Arduino Uno; joystick; motor driver; chassis
- **Concepts:** Analog input, mapping, motor control
- **Build plan:** Map joystick axes to motor direction and speed; test safely.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 5 — Students 21–25: Conveyor Sorting Model

**Project goal:** Model sorter using repeatable rules.

- **Components:** Arduino Uno; sensor; servo; model conveyor
- **Concepts:** Detection, actuator timing, sorting
- **Build plan:** Detect an object and position a servo diverter toward a selected lane.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 6 — Students 26–30: Variable-Speed Fan

**Project goal:** Adjustable low-voltage fan; motor not driven directly from GPIO.

- **Components:** Arduino Uno; potentiometer; motor driver; small DC motor/fan
- **Concepts:** PWM, motor driver, speed control
- **Build plan:** Map knob position to motor speed through a driver.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 7 — Students 31–35: Maze Explorer

**Project goal:** Robot completes a defined maze trial.

- **Components:** Arduino Uno; chassis; motor driver; distance sensors
- **Concepts:** Multiple sensors, decisions, navigation
- **Build plan:** Detect maze walls and navigate a simple course; record behavior.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 8 — Students 36–40: Mini Greenhouse Automation

**Project goal:** Automatic model irrigation or status indicator.

- **Components:** Arduino Uno; soil sensor; driver; low-voltage pump or LEDs
- **Concepts:** Moisture thresholds, actuator control, hysteresis
- **Build plan:** Read soil moisture and trigger an indicator or supervised bounded pump.
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
