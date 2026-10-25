# Project Oriented Learning — Class 9, Batch C

## Batch and group plan

- **Class:** 9
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

### Group 1 — Students 1–5: Smart Doorbell Camera

**Project goal:** Button-triggered image capture.

- **Components:** Raspberry Pi; camera/webcam; button; Python
- **Concepts:** GPIO input, camera capture, file storage
- **Build plan:** Capture and save a still image when the button is pressed; set privacy rules.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 2 — Students 6–10: Motion-Activated Camera

**Project goal:** Motion-triggered image capture.

- **Components:** Raspberry Pi; camera; PIR
- **Concepts:** GPIO events, file handling
- **Build plan:** Capture an image on motion and use a cooldown to avoid repeated triggers.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 3 — Students 11–15: Camera Color Detector

**Project goal:** Color detector with accuracy notes.

- **Components:** Raspberry Pi; camera; Python image processing
- **Concepts:** Pixels, color spaces, thresholding
- **Build plan:** Identify a selected color under controlled lighting and test several samples.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 4 — Students 16–20: Weather Data Logger

**Project goal:** Dataset and graph.

- **Components:** Raspberry Pi; compatible sensor; Python; plotting
- **Concepts:** Data acquisition, CSV logging, graphing
- **Build plan:** Collect readings at intervals and plot a simple graph.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 5 — Students 21–25: Smart Parking Display

**Project goal:** Parking display with safe interface.

- **Components:** Raspberry Pi; distance sensor; level interface; display
- **Concepts:** Distance, state logic, display
- **Build plan:** Measure model occupancy and update display; protect GPIO from incompatible voltage.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 6 — Students 26–30: Visitor Counter

**Project goal:** Model doorway counter.

- **Components:** Raspberry Pi; two IR sensors; display
- **Concepts:** Direction detection, counting, state
- **Build plan:** Infer entry/exit from sensor order and update count.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 7 — Students 31–35: Greenhouse Control Hub

**Project goal:** Integrated sensor hub.

- **Components:** Raspberry Pi; ESP32; soil/DHT sensors
- **Concepts:** Serial/network communication, integration
- **Build plan:** Receive ESP32 readings and show status on a Pi dashboard.
- **Test and evidence:** Run at least three trials, record inputs and outputs, note one fault or limitation, and show the working result to the teacher.
- **Group deliverable:** Working prototype/model, labelled circuit or block diagram, brief project log, and a group explanation of how it works.

### Group 8 — Students 36–40: Smart City Model

**Project goal:** Integrated city model and system diagram.

- **Components:** Raspberry Pi; ESP32; LEDs; servo; sensors; display
- **Concepts:** Integration, event logic, Python
- **Build plan:** Connect model traffic/environment inputs to output behavior and a status display.
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
