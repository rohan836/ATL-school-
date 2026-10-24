# Unified Electronics, Programming & Robotics Curriculum

**Atal Thinking Lab | Classes 5–9 | Project-oriented learning**

| No. | Curriculum Topic | What to Teach | Practical / Project |
|---:|---|---|---|
| 1 | Introduction to the Atal Thinking Lab | Innovation, engineering, electronics, robotics, lab equipment, project-based learning | Identify lab components and tools; explore example projects |
| 2 | Lab Safety & Responsible Use | Electrical safety, component handling, battery safety, tool safety, safe working practices | Safety checklist and component-handling activity |
| 3 | Computational Thinking | Problem decomposition, pattern recognition, sequencing, algorithms | Write step-by-step instructions for a real-world task |
| 4 | Introduction to Programming | What is a program, programming languages, instructions, events, visual programming | Create a simple Scratch animation or interactive activity |
| 5 | Electricity Fundamentals | Voltage, current, resistance, energy, open and closed circuits, conductors and insulators | Build a simple battery-powered circuit |
| 6 | Electronic Components | Resistors, LEDs, switches, batteries, buzzers, capacitors, diodes, transistors | Component identification and testing |
| 7 | Circuit Diagrams & Breadboards | Circuit symbols, breadboard connections, polarity, circuit construction | Build an LED circuit from a circuit diagram |
| 8 | Resistors & Ohm’s Law | Resistance, current limiting, voltage, current, basic calculations | Calculate and test an LED current-limiting resistor |
| 9 | Series & Parallel Circuits | Current paths, voltage distribution, circuit behavior | Build and compare series and parallel LED circuits |
| 10 | Measurement & Testing Instruments | Multimeter, voltage measurement, continuity, resistance, troubleshooting | Diagnose faults in a circuit |
| 11 | Programming Logic & Flowcharts | Algorithms, flowcharts, pseudocode, sequencing, events | Create a flowchart for a traffic light |
| 12 | Variables, Data Types & Operators | Variables, numbers, Boolean values, arithmetic and comparison operators | Program a simple calculator or logic activity |
| 13 | Conditions & Decision-Making | if, else, nested conditions, logical operators | Create a decision-based program |
| 14 | Loops & Repetition | Repeat, for, while, loop control | Program LED patterns or a repeating animation |
| 15 | Microcontrollers & Programming Environment | Microcontroller concepts, Arduino board, IDE, program structure, uploading code | Upload a first program to an Arduino |
| 16 | Digital Outputs | HIGH/LOW, digital output pins, LEDs, buzzers | Programmable LED patterns and buzzer alerts |
| 17 | Digital Inputs | Buttons, switches, digital sensors, pull-up and pull-down logic | Button-controlled LED or buzzer |
| 18 | Programming with Physical Inputs | Input processing, conditions, loops, event-based behavior | Electronic reaction game |
| 19 | Capacitors & Timing | Capacitors, charging and discharging, RC timing, basic time delay | Capacitor charging and discharging demonstration |
| 20 | Diodes & Power Supply Basics | Diode polarity, rectification concepts, AC/DC, filtering, regulated power | Low-voltage DC power supply demonstration |
| 21 | Transistors & Switching | BJT transistor, switching, base resistor, loads, flyback diode concept | Transistor-controlled LED or small DC load |
| 22 | Relays & Load Control | Relay operation, control circuits, inductive loads, electrical isolation concept | Low-voltage relay-controlled device |
| 23 | Analog Inputs & ADC | Analog signals, voltage variation, ADC, sensor readings | Read a potentiometer or light sensor |
| 24 | PWM & Analog-Like Outputs | PWM, duty cycle, brightness and speed control | LED dimmer or motor speed demonstration |
| 25 | Functions & Modular Programming | Functions, parameters, return values, code reuse, program organization | Create reusable LED and sensor functions |
| 26 | Debugging & Program Testing | Syntax errors, logic errors, serial monitor, systematic testing | Debug a deliberately faulty program |
| 27 | Sensors & Data Collection | Light, temperature, humidity, sound, distance, motion, sensor calibration | Environmental data collection activity |
| 28 | Sensor-Based Automation | Thresholds, conditions, sensor data, automated responses | Automatic night light, temperature alert, or distance alarm |
| 29 | Displays & User Feedback | 16×2 LCD, I²C, seven-segment display, LEDs, buzzer feedback | Sensor value display system |
| 30 | Servo Motors & Actuators | Servo position, control signals, actuator concepts | Programmable servo gate or robotic arm demonstration |
| 31 | DC Motors & Motor Drivers | Motor direction, speed, H-bridge, motor driver modules, separate motor power | Motor direction and speed controller |
| 32 | Robotics Mechanical Design | Chassis, wheels, gears, torque, friction, mounting, mechanical design | Assemble a simple robot chassis |
| 33 | Robot Control & Sensor Integration | Motor control, sensor inputs, decision logic, movement | Obstacle-detection and response robot |
| 34 | Infrared Sensors & Line Detection | IR reflectance, line sensors, sensor arrays, motor control logic | Line-following robot |
| 35 | Serial Communication | Serial monitor, UART concepts, transmitting and receiving data | Send sensor readings to a computer |
| 36 | I²C & Peripheral Communication | I²C basics, device addressing, connecting displays and sensors | Connect an I²C display and sensor |
| 37 | Bluetooth Communication | Bluetooth concepts, wireless data, commands, remote control | Bluetooth-controlled LED or robot |
| 38 | ESP Microcontrollers | ESP8266/ESP32, GPIO, Wi-Fi, board differences, programming setup | Read a sensor using an ESP board |
| 39 | IoT Fundamentals | Internet of Things, connected devices, data flow, local and cloud systems | Build a connected sensor demonstration |
| 40 | Web-Based Monitoring & Control | Local web server, HTML basics, sensor data, control interface | ESP32 web page to monitor or control an output |
| 41 | IoT Dashboards & Telemetry | Data transmission, dashboards, charts, remote monitoring | Environmental monitoring dashboard |
| 42 | Wireless System Design | Bluetooth versus Wi-Fi, range, reliability, communication limits | Compare wireless control approaches |
| 43 | Data Collection & Visualization | Sensor data, tables, graphs, trends, measurement errors | Collect and graph temperature or light data |
| 44 | Introduction to AI & Smart Systems | Rule-based automation, AI concepts, data, classification, limitations, responsible use | Compare a rule-based sensor system with an AI example |
| 45 | Engineering Design Process | Identify a problem, criteria, constraints, sketching, prototyping, testing, iteration | Design and test a solution to a classroom problem |
| 46 | Project Documentation | Circuit diagrams, component lists, algorithms, flowcharts, code comments, test records | Prepare a technical project notebook |
| 47 | Integrated Engineering Projects | Combine electronics, programming, sensors, actuators, communication, mechanical design | Build a multi-component system |
| 48 | Capstone Project Design | Problem selection, research, system architecture, component selection, planning | Prepare a project proposal and prototype plan |
| 49 | Capstone Development & Testing | Assembly, programming, debugging, measurement, testing, improvement | Build and refine the capstone project |
| 50 | Capstone Showcase & Technical Review | Technical communication, project explanation, design decisions, testing results, reflection | Present and demonstrate the final project |

## Lab Safety & Project Constraints

- Use low-voltage DC supplies for student-built circuits. Direct student connection to household mains voltage is prohibited.
- Use appropriate current-limiting resistors and verify component polarity before powering a circuit.
- Do not power DC motors or high-current servos directly from a microcontroller GPIO or board supply pin. Use a suitable motor driver or external supply; connect grounds as required by the circuit.
- ESP8266/ESP32 GPIO operates at 3.3 V logic. Protect GPIO from 5 V signals using a compatible interface or level shifter.
- Soldering, cutting, drilling, and other tool-based work must be supervised and use appropriate protective equipment.
- Confirm actual lab stock, board variants, sensor pinouts, voltage limits, and module specifications before each build.
- For each project, use the engineering cycle: define → design → build → test → debug → improve → document.

## Curriculum Alignment References

- [Atal Innovation Mission — Atal Tinkering Labs](https://aim.gov.in/atal-tinkering-labs.php)
- [CSTA K–12 Computer Science Standards](https://csteachers.org/k12standards/)
- [Next Generation Science Standards — Engineering Design](https://www.nextgenscience.org/topic-arrangement/hs-engineering-design)
