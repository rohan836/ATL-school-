# ATL Electronics & Robotics Project-Based Learning Implementation Plan
## Classes 5–9

## 1. Purpose

This document defines the project-oriented approach for teaching electronics, robotics, automation, and connected systems in the Atal Tinkering Lab (ATL). Students learn concepts by testing components and applying them to useful, working prototypes. The curriculum progresses from simple circuits to sensor-based systems, robotics, IoT, Python, and system integration.

This is a project implementation plan, not a replacement for the existing full-year electronics curriculum or other repository records.

## 2. Operating Model

| Item | Plan |
|---|---|
| Classes | 5, 6, 7, 8, and 9 |
| Students in each class | 40 |
| Groups in each class | 8 |
| Students in each group | 5 |
| Session duration | 60 minutes |
| Concept and component introduction | 20 minutes |
| Hands-on project work | 40 minutes |
| Project cycle | 4 months |
| Main platforms | Arduino Uno, ESP32, Raspberry Pi, as appropriate to the class |
| Learning cycle | Understand → Identify → Test → Build → Improve → Present |

Each class has eight groups of five students. Each group develops a project suited to its class level. The project is built progressively over the cycle; it is not expected to be completed in one session. Projects should be assigned only after checking the available inventory and compatibility of the components.

## 3. Teaching Approach

Every lesson connects a concept or component to the group's project:

1. **Understand:** Introduce a real-world problem and the underlying concept.
2. **Identify:** Explain the component's purpose, pins, ratings, and connections.
3. **Test:** Demonstrate a safe component test using a multimeter, basic circuit, or controller.
4. **Build:** Apply the lesson to the next stage of the group project.
5. **Improve:** Test the prototype, identify faults, and make a measured improvement.
6. **Present:** Explain what was built, how it works, and what remains to be improved.

The teacher introduces a common skill to the whole class. Groups then apply that skill to their own project briefs. The teacher checks progress against common milestones while allowing projects to differ.

## 4. Standard 60-Minute Session

| Time | Activity |
|---|---|
| 0–5 minutes | Introduce a real-world problem or demonstrate an example. |
| 5–15 minutes | Explain the concept, component purpose, and working principle. |
| 15–20 minutes | Demonstrate component testing or reading its output. |
| 20–30 minutes | Groups connect the circuit or assemble the next project part. |
| 30–45 minutes | Students program, test, and troubleshoot. |
| 45–55 minutes | Improve the prototype and record observations. |
| 55–60 minutes | Demonstrate progress and record the next task. |

## 5. Project Progression by Class

### Class 5 — Electronics Discovery and Basic Arduino

**Learning goal:** Understand electricity, basic components, circuits, inputs and outputs, and introductory programming.

| Group | Concept to teach and test | Project to build | Suggested components |
|---|---|---|---|
| 1 | DC electricity, conductors, insulators, continuity | **Material Detective:** Low-voltage tester that indicates whether an object conducts electricity | Arduino Uno, resistors, LEDs, jumper wires, probes |
| 2 | Digital outputs, LED polarity, current limiting | **Interactive Traffic Light:** Three-colour traffic light with pedestrian request button | Arduino Uno, red/yellow/green LEDs, resistors, button |
| 3 | LDR and analog readings | **Smart Night Lamp:** Automatically light an LED when it becomes dark | Arduino Uno, LDR, LED, resistors |
| 4 | Buttons, timers, conditional programming | **Reaction-Time Challenge:** Measure the response time between an LED signal and button press | Arduino Uno, LEDs, buttons, buzzer |
| 5 | Open/closed circuits, switches, sound output | **Smart Door Alert:** Sound and light an alert when a model door opens | Arduino Uno, switch, buzzer, LED |
| 6 | RGB LEDs, PWM, brightness | **RGB Mood Lamp:** Select colours and adjust brightness | Arduino Uno, RGB LED, potentiometer, resistors |
| 7 | Diodes, capacitors, charging and discharging | **Glow-After-Power LED:** Keep an LED glowing briefly after power is removed | Capacitor, diode, resistor, LED, battery, breadboard |
| 8 | Temperature sensing and threshold decisions | **Classroom Comfort Indicator:** Indicate temperature ranges with LEDs | Arduino Uno, DHT11/DHT22, LEDs, resistors |

**Expected outcome:** Students identify basic components, assemble and test simple circuits, and explain their projects.

### Class 6 — Sensors and Interactive Smart Devices

**Learning goal:** Read sensor data, interpret values, and control an output based on input.

| Group | Concept to teach and test | Project to build | Suggested components |
|---|---|---|---|
| 1 | Ultrasonic distance measurement | **Touchless Smart Dustbin:** Open a model bin lid when a hand approaches and close it after a delay | Arduino Uno, HC-SR04, servo |
| 2 | Distance thresholds and indicators | **Mini Parking Radar:** Indicate proximity to an obstacle using LEDs, buzzer, or display | Arduino Uno, HC-SR04, buzzer, LEDs, optional LCD |
| 3 | PIR motion and light detection | **Motion-Activated Room Light:** Turn on a light when motion occurs in a dark room | Arduino Uno, PIR, LDR, LED |
| 4 | Soil-moisture readings | **Smart Plant Monitor:** Indicate dry, moist, or wet soil | Arduino Uno, soil-moisture sensor, LEDs |
| 5 | Temperature, humidity, and data display | **Classroom Weather Station:** Display temperature and humidity | Arduino Uno, DHT11/DHT22, LCD/OLED |
| 6 | Infrared detection and signalling | **Smart Pedestrian Crossing:** Detect an approaching model object and activate warning signals | Arduino Uno, IR or ultrasonic sensor, LEDs, buzzer |
| 7 | Object detection and counting | **Smart Object Counter:** Count objects passing a sensor and display the total | Arduino Uno, IR sensor, display |
| 8 | Colour sensing and comparison | **Colour Challenge Game:** Detect a coloured object and respond with light or sound | Arduino Uno, TCS3200/TCS34725, LEDs, buzzer |

**Expected outcome:** Students read a sensor, interpret its output, and make a device respond automatically.

### Class 7 — Arduino Robotics and Automation

**Learning goal:** Combine sensors, motors, mechanisms, and programming to build machines that respond to their surroundings.

| Group | Concept to teach and test | Project to build | Suggested components |
|---|---|---|---|
| 1 | DC motors, motor drivers, direction | **Obstacle-Avoiding Robot:** Detect obstacles and change direction | Arduino Uno, chassis, DC motors, motor driver, HC-SR04 |
| 2 | Line sensors and reflectance | **Line-Following Robot:** Follow a dark track using sensor feedback | Arduino Uno, chassis, motors, motor driver, IR line sensors |
| 3 | Servo angles and mechanisms | **Automatic Barrier Gate:** Raise and lower a model gate when a vehicle is detected | Arduino Uno, servo, IR/ultrasonic sensor |
| 4 | Joystick input and motor control | **Remote-Controlled Rover:** Control a small rover using a joystick | Arduino Uno, joystick, motor driver, motors |
| 5 | Feedback and actuator control | **Smart Conveyor Sorter:** Detect an object and direct it into a selected lane | Arduino Uno, sensor, servo, model conveyor |
| 6 | PWM motor speed control | **Variable-Speed Fan:** Adjust a small DC motor's speed with a potentiometer | Arduino Uno, motor driver, DC motor, potentiometer |
| 7 | Multiple sensors and decision-making | **Maze Explorer Model:** Detect obstacles and navigate a simple course | Arduino Uno, chassis, motor driver, distance sensors |
| 8 | Inputs, outputs, and timed control | **Automated Mini Greenhouse:** Monitor soil and operate a demonstration pump or indicator | Arduino Uno, soil sensor, driver/relay, low-voltage pump or LEDs |

**Expected outcome:** Students build and program a moving or automated system and use sensor feedback to make decisions.

### Class 8 — ESP32, IoT, and Connected Devices

**Learning goal:** Use a Wi-Fi-enabled microcontroller to collect, report, and control data over a network.

| Group | Concept to teach and test | Project to build | Suggested components |
|---|---|---|---|
| 1 | ESP32 and Wi-Fi data transfer | **IoT Weather Station:** Send temperature and humidity to a dashboard | ESP32, DHT11/DHT22 |
| 2 | Networked digital output | **Wi-Fi Smart Light:** Control an LED or low-voltage lamp from a web interface | ESP32, LED, resistor |
| 3 | Soil-moisture monitoring | **IoT Plant Monitor:** Report soil status and dry/wet alerts | ESP32, soil-moisture sensor |
| 4 | Distance sensing and status reporting | **Connected Parking Monitor:** Publish parking-space status | ESP32, HC-SR04 with suitable interface |
| 5 | PIR sensing and alerts | **IoT Motion Alert:** Detect movement and report a network status | ESP32, PIR sensor |
| 6 | Data logging and history | **Classroom Environment Logger:** Record readings and view a chart or history | ESP32, DHT sensor, dashboard/data service |
| 7 | Network monitoring for a robot | **Wi-Fi Rover Monitor:** Display rover status and obstacle warnings | ESP32, motor driver, distance sensor |
| 8 | Gas-sensor readings and thresholds | **Environmental Alert Panel:** Display readings and trigger an educational threshold alert | ESP32, MQ-series sensor, buzzer, optional display |

**Expected outcome:** Students build a connected device that measures, controls, or reports information over a network.

### Class 9 — Raspberry Pi, Python, Cameras, and System Integration

**Learning goal:** Use Python and Linux to collect data, control hardware, use a camera, and integrate multiple devices.

| Group | Concept to teach and test | Project to build | Suggested components |
|---|---|---|---|
| 1 | Raspberry Pi, Python, button input, camera capture | **Smart Doorbell Camera:** Capture and save an image when a button is pressed | Raspberry Pi, camera/USB webcam, button |
| 2 | PIR motion detection and file saving | **Motion-Activated Camera:** Capture an image when movement is detected | Raspberry Pi, camera, PIR |
| 3 | Image pixels and basic image processing | **Camera Colour Detector:** Identify a selected colour and show the result | Raspberry Pi, camera, Python image-processing software |
| 4 | Sensor data logging and plotting | **Weather Data Logger:** Record temperature/humidity and plot a graph | Raspberry Pi, compatible DHT sensor, display |
| 5 | Distance measurement and live display | **Smart Parking Display:** Show parking status from measured distance | Raspberry Pi, HC-SR04, display, appropriate signal-level interface |
| 6 | Object detection and counting | **Visitor Counter:** Count model visitors and display the total | Raspberry Pi, IR sensors, display |
| 7 | ESP32-to-computer communication | **Smart Greenhouse Control Hub:** Collect ESP32 sensor data and show it on a Pi dashboard | Raspberry Pi, ESP32, soil sensor, DHT sensor |
| 8 | Integrating sensors, logic, and displays | **Smart City Model:** Build a sensor-responsive traffic model with a status display | Raspberry Pi, ESP32, sensors, LEDs, servo, display |

**Expected outcome:** Students use Python and integrate cameras, sensors, displays, and/or connected microcontrollers into a larger system.

## 6. Four-Month Project Cycle

| Month | Focus | Group milestone |
|---|---|---|
| Month 1 — Learn and Plan | Concepts, component purpose, safe testing, planning | Test components, draw a circuit/block diagram, demonstrate individual components |
| Month 2 — Build | Wiring, programming, sensor inputs, output control | Produce the first working project version |
| Month 3 — Test and Improve | Troubleshooting, measurement, calibration, integration | Test in different conditions, fix faults, add one useful feature |
| Month 4 — Finish and Present | Reliability, documentation, presentation | Complete the prototype, maintain a project log, demonstrate the project |

Projects should be broken into weekly tasks. Teachers should define the next achievable build step for each group, rather than expecting groups to complete the entire project during a single practical session.

## 7. Group Roles and Participation

Each group contains five students. Rotate roles across sessions so each student gains experience in electronics, programming, construction, testing, and presentation.

| Role | Responsibility |
|---|---|
| Electronics Lead | Connects components and checks wiring |
| Programming Lead | Writes and tests code |
| Mechanical Lead | Builds the robot, model, or enclosure |
| Testing Lead | Records results and identifies faults |
| Documentation and Presentation Lead | Maintains the project log and prepares the demonstration |

Roles are a coordination method, not a restriction. All students should participate in hands-on work and understand the complete project.

## 8. Managing Eight Groups in One Class

- Teach the shared concept or skill to the whole class.
- Give each group a project brief containing its objective, components, wiring/block diagram, test procedure, and current build task.
- Check inventory, component compatibility, and safety before assigning projects.
- Use rotating build stations if boards, sensors, tools, or computers are limited.
- Review progress weekly using the same milestone checklist.
- Keep a record of each group's completed work, issues, and next task.
- Ensure every student participates in component testing, construction, programming, and demonstration.
- Provide a fallback version of each project that can be completed if a required component is unavailable.

## 9. Project Brief Template

Each project brief should include:

1. Project title and class/group.
2. Real-world problem or use case.
3. Learning objectives.
4. Concept/component for the current lesson.
5. Required components and quantities.
6. Circuit diagram or system block diagram.
7. Build steps divided into manageable stages.
8. Code or programming task, where applicable.
9. Test procedure and expected result.
10. Troubleshooting notes.
11. Safety checks.
12. Improvement challenge.
13. Project-log prompts.
14. Demonstration and explanation checklist.

## 10. Progress and Assessment

Use common evidence across projects, while assessing the learning appropriate to each class.

| Assessment area | Evidence |
|---|---|
| Concept understanding | Student explains the concept and component function |
| Component testing | Student demonstrates a safe test and interprets its result |
| Construction | Circuit/mechanism is assembled correctly and safely |
| Programming and logic | Code or control logic responds as intended |
| Testing and troubleshooting | Group records tests, identifies faults, and explains fixes |
| Improvement | Prototype has a documented, useful improvement |
| Team participation | Students contribute and rotate roles |
| Demonstration | Group explains the system, limitations, and next step |

Assessment should reward understanding, testing, collaboration, and iteration—not only whether the prototype works on demonstration day.

## 11. Safety and Technical Notes

- Use isolated low-voltage DC for student-built circuits. Students must not probe household mains or construct exposed mains-powered circuits.
- Teach AC concepts through diagrams or teacher-prepared, isolated low-voltage demonstrations.
- Use current-limiting resistors with LEDs and verify component ratings.
- Do not power motors, pumps, or high-current servos directly from microcontroller GPIO pins. Use suitable drivers and power arrangements.
- ESP32 and Raspberry Pi GPIO use 3.3 V logic and are not 5 V tolerant; use suitable level shifting where required.
- Confirm board/module pinouts, sensor interfaces, and supply requirements before wiring.
- Disconnect power before changing connections; check polarity and wiring before energizing.
- Gas-sensor projects are educational demonstrations, not certified safety alarms.
- Pulse sensors are educational devices, not medical devices.
- Supervise tool use and soldering according to lab procedures.
- Confirm actual inventory before finalizing each project's kit.

## 12. End-of-Cycle Outcomes

By the end of the project cycle, each group should have a distinct prototype and be able to:

- Explain the purpose of the components used.
- Test components and interpret sensor readings.
- Build and program a circuit or system appropriate to the class.
- Troubleshoot and improve a prototype.
- Maintain a basic project log.
- Demonstrate the project and explain how it works, its limitations, and a possible next improvement.

## 13. Relationship to Existing Curriculum Records

This document records the project-oriented implementation approach and group project assignments. The existing full-year electronics curriculum remains the reference for the broader topic sequence. This file is an additional record and does not replace or modify existing curriculum files.
