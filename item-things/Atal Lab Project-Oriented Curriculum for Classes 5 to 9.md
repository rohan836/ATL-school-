# Atal Lab Project-Oriented Curriculum for Classes 5 to 9

## Curriculum Overview

| Item | Details |
|---|---|
| Curriculum name | Atal Lab Project-Oriented Curriculum for Classes 5 to 9 |
| Duration | 4 months |
| Students per class | 40 |
| Groups per class | 8 |
| Students per group | 5 |
| Session duration | 60 minutes |
| Teaching format | 20-minute concept/component lesson + 40-minute hands-on project work |
| Platforms | Arduino Uno, ESP32, Raspberry Pi |
| Approach | Learn, test, build, improve, and present |

Each class has eight groups of five students. Each group works on a distinct project. Projects develop incrementally across the four-month period, with complexity increasing from basic circuits in Class 5 to sensors, automation, IoT, Python, cameras, and system integration in Classes 6–9.

## Teaching Approach

Each session follows this learning cycle:

1. **Understand:** Introduce an electronics concept and a real-world use.
2. **Identify:** Explain the component, its purpose, pins, and connections.
3. **Test:** Demonstrate a safe test using a multimeter, simple circuit, or controller.
4. **Build:** Apply the concept to the group's ongoing project.
5. **Improve:** Test, troubleshoot, and refine the project.
6. **Present:** Explain the work completed and the way it functions.

The first 20 minutes are for the concept, component explanation, and testing. The next 40 minutes are for practical work on the group's project. Projects are built in stages rather than completed in a single session.

## Class 5 — Electronics Discovery and Basic Arduino

**Learning goal:** Understand electricity, components, circuits, inputs, outputs, and introductory programming.

| Group | 20-minute lesson: teach and test | 40-minute project: build and try | Platform and components |
|---|---|---|---|
| 1 | DC electricity, conductors, insulators, and circuit continuity. Test materials with a simple circuit. | **Material Detective:** Build a low-voltage tester that indicates whether an object conducts electricity. | Arduino Uno, resistors, LEDs, jumper wires, probes |
| 2 | Digital outputs, LED polarity, and current-limiting resistors. | **Interactive Traffic Light:** Build a three-colour traffic light with a pedestrian request button. | Arduino Uno, red/yellow/green LEDs, resistors, button |
| 3 | Light-dependent resistors and analog readings. Compare readings in bright and dark conditions. | **Smart Night Lamp:** Automatically switch on a light when the environment becomes dark. | Arduino Uno, LDR, LED, resistors |
| 4 | Buttons, timers, and conditional programming. | **Reaction-Time Challenge:** Press a button when an LED turns on; the program measures response time. | Arduino Uno, LEDs, buttons, buzzer |
| 5 | Open and closed circuits, switches, and sound output. | **Smart Door Alert:** Trigger a buzzer and warning light when a model door opens. | Arduino Uno, switch, buzzer, LED |
| 6 | RGB LEDs, PWM, and brightness control. Test output values. | **RGB Mood Lamp:** Create a lamp with selectable colours and brightness. | Arduino Uno, RGB LED, potentiometer, resistors |
| 7 | Diodes, capacitors, charging, and discharging. Observe capacitor voltage with a multimeter. | **Glow-After-Power LED:** Build a circuit that keeps an LED glowing briefly after power is switched off. | Capacitor, diode, resistor, LED, battery, breadboard |
| 8 | Temperature sensing and threshold-based decisions. Read and compare sensor values. | **Classroom Comfort Indicator:** Use LEDs to indicate different temperature ranges. | Arduino Uno, DHT11/DHT22, LEDs, resistors |

**Outcome:** Students identify basic components, assemble and test simple circuits, and explain their projects.

## Class 6 — Sensors and Interactive Smart Devices

**Learning goal:** Read sensor data, interpret values, and use them to control an output.

| Group | 20-minute lesson: teach and test | 40-minute project: build and try | Platform and components |
|---|---|---|---|
| 1 | Ultrasonic distance measurement; test readings at several distances. | **Touchless Smart Dustbin:** Open a model bin lid when a hand approaches and close it after a delay. | Arduino Uno, HC-SR04, servo |
| 2 | Distance thresholds, buzzers, and visual indicators. | **Mini Parking Radar:** Indicate when a model car is close to an obstacle using LEDs, a buzzer, or display. | Arduino Uno, HC-SR04, buzzer, LEDs, optional LCD |
| 3 | PIR motion sensing and light detection. Test with and without movement. | **Motion-Activated Room Light:** Switch on a light when motion is detected in a dark room. | Arduino Uno, PIR sensor, LDR, LED |
| 4 | Soil-moisture sensing and comparing sensor values. | **Smart Plant Monitor:** Indicate dry, moist, or wet soil using LEDs. | Arduino Uno, soil-moisture sensor, LEDs |
| 5 | Temperature, humidity, and displaying sensor data. | **Classroom Weather Station:** Display current temperature and humidity. | Arduino Uno, DHT11/DHT22, LCD/OLED |
| 6 | Infrared detection and automatic signalling. Test an IR sensor with objects at different positions. | **Smart Pedestrian Crossing:** Detect an approaching model vehicle or object and activate warning lights. | Arduino Uno, IR or ultrasonic sensor, LEDs, buzzer |
| 7 | Object detection and counting. Observe sensor response as objects pass. | **Smart Object Counter:** Count objects moving past a sensor and display the total. | Arduino Uno, IR sensor, display |
| 8 | Colour sensing and comparing colour readings. | **Colour Challenge Game:** Detect a coloured object and give feedback through lights and sound. | Arduino Uno, TCS3200 or TCS34725, LEDs, buzzer |

**Outcome:** Students read a sensor, interpret its output, and make a device respond automatically.

## Class 7 — Arduino Robotics and Automation

**Learning goal:** Combine sensors, motors, mechanical structures, and programming to build machines that respond to their surroundings.

| Group | 20-minute lesson: teach and test | 40-minute project: build and try | Platform and components |
|---|---|---|---|
| 1 | DC motors, motor drivers, and direction control. Test forward and reverse movement. | **Obstacle-Avoiding Robot:** Build a robot that detects obstacles and changes direction. | Arduino Uno, chassis, DC motors, motor driver, HC-SR04 |
| 2 | Line sensors and reflectance detection. Test sensor response on light and dark surfaces. | **Line-Following Robot:** Follow a dark track using sensor feedback. | Arduino Uno, chassis, motors, motor driver, IR line sensors |
| 3 | Servo motors, angles, and mechanical movement. | **Automatic Barrier Gate:** Raise and lower a model gate when a vehicle is detected. | Arduino Uno, servo, IR/ultrasonic sensor |
| 4 | Joystick input and motor control. | **Remote-Controlled Rover:** Control a small rover using a joystick. | Arduino Uno, joystick, motor driver, motors |
| 5 | Feedback, sensor thresholds, and actuator control. | **Smart Conveyor Sorter:** Detect an object and use a servo to direct it into a selected lane. | Arduino Uno, sensor, servo, conveyor/model mechanism |
| 6 | PWM motor speed control and comparing speeds. | **Variable-Speed Fan:** Control a small DC motor's speed using a potentiometer. | Arduino Uno, motor driver, DC motor, potentiometer |
| 7 | Multiple sensor inputs and robot decision-making. | **Maze Explorer Model:** Build a robot that detects walls/obstacles and navigates a simple course. | Arduino Uno, chassis, motor driver, distance sensors |
| 8 | Combining inputs, outputs, and timed control. | **Automated Mini Greenhouse:** Monitor soil moisture and operate a small demonstration pump or indicator. | Arduino Uno, soil-moisture sensor, driver/relay module, low-voltage pump or LEDs |

**Outcome:** Students build and program a moving or automated system, understand basic motor control, and use sensor feedback to make decisions.

## Class 8 — ESP32, IoT, and Connected Devices

**Learning goal:** Understand Wi-Fi-enabled microcontrollers, sensor data, dashboards, and connected-device concepts.

| Group | 20-minute lesson: teach and test | 40-minute project: build and try | Platform and components |
|---|---|---|---|
| 1 | ESP32 basics, Wi-Fi connection, and sending sensor data. | **IoT Weather Station:** Send temperature and humidity readings to a simple dashboard. | ESP32, DHT11/DHT22 |
| 2 | Digital outputs over a network and safe control concepts. | **Wi-Fi Smart Light:** Control an LED or low-voltage lamp from a simple web interface. | ESP32, LED, resistor |
| 3 | Soil-moisture readings and remote monitoring. | **IoT Plant Monitor:** Send soil-moisture status to a dashboard and show dry/wet alerts. | ESP32, soil-moisture sensor |
| 4 | Distance sensing and online status display. | **Connected Parking Monitor:** Publish parking-space status based on a distance sensor. | ESP32, HC-SR04 with suitable interface |
| 5 | PIR sensing and notifications/status reporting. | **IoT Motion Alert:** Detect movement and display or send a network status alert. | ESP32, PIR sensor |
| 6 | Data logging and viewing sensor history. | **Classroom Environment Logger:** Record periodic sensor readings and view a simple history or chart. | ESP32, DHT sensor, dashboard/data service |
| 7 | Remote monitoring of a robot and control interfaces. | **Wi-Fi Rover Monitor:** Add a Wi-Fi status interface and obstacle-warning function to a rover. | ESP32, motor driver, distance sensor |
| 8 | Gas-sensor readings, thresholds, and warning outputs. | **Environmental Alert Panel:** Display readings and trigger an alert when values cross a selected threshold. | ESP32, MQ-series sensor, buzzer, optional display |

**Outcome:** Students build a connected device that measures, controls, or reports information over a network.

## Class 9 — Raspberry Pi, Python, Cameras, and System Integration

**Learning goal:** Use Python and Linux to collect data, control hardware, use a camera, and combine multiple devices into a larger system.

| Group | 20-minute lesson: teach and test | 40-minute project: build and try | Platform and components |
|---|---|---|---|
| 1 | Raspberry Pi, Python, buttons, and camera capture. | **Smart Doorbell Camera:** Press a button to capture and save an image. | Raspberry Pi, camera or USB webcam, button |
| 2 | PIR motion detection, image capture, and saving files. | **Motion-Activated Camera:** Capture an image when movement is detected. | Raspberry Pi, camera, PIR sensor |
| 3 | Camera images, colour values, and basic image processing. | **Camera Colour Detector:** Identify a selected colour in an image and show the result on screen. | Raspberry Pi, camera, Python image-processing software |
| 4 | Sensor readings, data logging, and plotting data. | **Weather Data Logger:** Record temperature and humidity and display a simple graph. | Raspberry Pi, compatible DHT sensor, display |
| 5 | Distance sensors, Python, and displaying live measurements. | **Smart Parking Display:** Measure distance to a model vehicle and show parking status. | Raspberry Pi, HC-SR04, display, appropriate signal-level interface |
| 6 | Object detection and counting using sensor inputs. | **Visitor Counter:** Count model visitors passing a point and display the total. | Raspberry Pi, IR sensors, display |
| 7 | Connecting an ESP32 to a computer over Wi-Fi and displaying sensor data. | **Smart Greenhouse Control Hub:** Collect sensor data from an ESP32 and display it on a Raspberry Pi dashboard. | Raspberry Pi, ESP32, soil-moisture sensor, DHT sensor |
| 8 | Integrating sensors, controller logic, and visual displays. | **Smart City Model:** Build a miniature traffic system that responds to sensor inputs and displays status on a Raspberry Pi screen. | Raspberry Pi, ESP32, sensors, LEDs, servo, display |

**Outcome:** Students build projects using Python and integrate cameras, sensors, displays, or connected microcontrollers into a larger system.

## Four-Month Project Schedule

All eight groups in each class follow the same timeline. Project-specific tasks differ, but all groups reach common milestones.

| Month | Main learning | Expected group completion |
|---|---|---|
| Month 1 — Learn and Plan | Electronics basics, component purpose, testing, and safe wiring | Test required components, draw a circuit or block diagram, and demonstrate individual components working. |
| Month 2 — Build | Programming, wiring, sensor input, and output control | Produce the first working version of the project. |
| Month 3 — Test and Improve | Troubleshooting, measurement, calibration, and integration | Test in different conditions, fix problems, and add one useful feature. |
| Month 4 — Finish and Present | Reliability, documentation, and presentation | Complete the prototype, maintain a project log, and demonstrate it to others. |

## Standard 60-Minute Session Format

| Time | Activity |
|---|---|
| 0–5 minutes | Introduce a real-world problem or demonstrate an example. |
| 5–15 minutes | Explain the electronics concept, component purpose, and working principle. |
| 15–20 minutes | Demonstrate how to test the component or read its output. |
| 20–30 minutes | Groups connect the circuit or assemble the next project part. |
| 30–45 minutes | Students program, test, and troubleshoot. |
| 45–55 minutes | Groups improve the prototype and record results. |
| 55–60 minutes | Demonstrate progress and record the next task. |

## Group Roles

Each group has five students. Roles should rotate so every student gains experience in electronics, programming, building, testing, and presenting.

| Role | Responsibility |
|---|---|
| Electronics Lead | Connects components and checks wiring. |
| Programming Lead | Writes and tests code. |
| Mechanical Lead | Builds the robot, model, or enclosure. |
| Testing Lead | Records results and identifies faults. |
| Documentation and Presentation Lead | Maintains the project log and prepares the demonstration. |

## Managing Eight Projects in One Class

- Teach the shared skill of the week to the whole class.
- Give each group a project sheet with its objective, components, wiring or block diagram, test procedure, and build task.
- Check component availability before assigning projects.
- Use rotating build stations if boards, sensors, or tools are limited.
- Review group progress weekly using the same milestone checklist.
- Ensure every student participates in component testing, construction, programming, and demonstration.

## Lab Safety and Component Notes

- Use isolated low-voltage sources for AC/DC demonstrations. Students must not wire household mains.
- ESP32 and Raspberry Pi GPIO use 3.3V logic and are not 5V tolerant. Use appropriate level shifting where required.
- Motors and pumps need suitable drivers and power arrangements; do not power them directly from GPIO pins.
- Gas and flame sensor projects are educational demonstrations, not certified safety alarms.
- Pulse sensors are educational devices and are not medical devices.
- Confirm actual inventory and compatible sensor interfaces before finalizing each group's project kit.
- Disconnect power before changing wiring. Check polarity and connections before energizing a circuit.

## Final Learning Outcome

By the end of the four-month cycle, every group should have a distinct working project. Students should be able to:

- Explain the purpose of the components they used.
- Test components and interpret sensor readings.
- Build and program a circuit or system.
- Troubleshoot and improve a prototype.
- Demonstrate the project and explain how it works.
