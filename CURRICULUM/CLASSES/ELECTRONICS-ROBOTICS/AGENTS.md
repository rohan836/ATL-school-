# Electronics & Robotics — Curriculum & Structure Rules

**Scope:** Pure Electronics & Hardware Engineering for Classes 5–9 (`Term 1`: June–October, Weeks 01–14 · `Term 2`: November–March, Weeks 15–28)

---

## 1. Core Rules

- **Pure Electronics Only (`0% AI`):** Every curriculum row and project covers Electronics, Embedded Systems, Fabrication, IoT, and Robotics only. AI topics belong strictly under `CURRICULUM/CLASSES/AI/`.
- **Balanced Two-Term Progression (`June–March` · `28 Weeks`):**
  - Every grade starts **Term 1 (`June`, `Week 01`)** with core safety, power, `AC vs DC`, `Digital Multimeter`, and essential basic parts (`Resistor`, `Breadboard`, `LED`, `Switches`, `Potentiometer`, `LDR`, `Capacitor`, `Diode`, `Transistor`) so zero students skip basics.
  - Both **Term 1 (`June–October`, `Weeks 01–14`)** and **Term 2 (`November–March`, `Weeks 15–28`)** are balanced in pacing and depth across each grade's components and tools.
- **Age & Grade Sorting Across Classes 5–9:**
  - **Class 5:** Core basics, buzzers/piezo, RGB LED, haptic motor, `Arduino Uno R3`, `BO` motors, `SG90` servo + tester, `HC-SR04`, `IR`, `SW-520D`, `HC-05`, 1-ch relay, `ISD1820`, craft prototyping, guided kits.
  - **Class 6:** Core electronics, `DMM`, linear voltage regulators (`7805/7809/7812`), bargraph & 1-digit 7-seg, `LM555` astable/monostable, `Arduino Nano`, `DHT11`, soil/rain, sound/touch, laser/IR optical/`PIR`, joystick/`MG90S`/`L293D`, `HM-10 BLE`, water pump, storage/measuring, Agritech/Water kits.
  - **Class 7:** Pen `DMM`, Zener diodes, wire tooling & PPE Zero-PCB soldering/desoldering, `Arduino Uno` C++, `16×2 LCD` (`I2C` & bare), 4-digit 7-seg, `8×8 MAX7219`, `4×4 Keypad`, FSR/Flex/`LM35`/Pulse, `TB6612FNG`, stepper, `MG995/996R`, `433 MHz RF`, `RC522 RFID`, `DS3231 RTC`, `SD` SPI, `TCS3200` color, `FDM` 3D printing & calipers, drills/drivers, Bio-Medical kit.
  - **Class 8:** `SMPS`, bare analog/digital ICs (`LM358`, `LM393`, bare relay, `MOSFET`, `74HC595`, `ULN2003A`, bare `L293D`), `Arduino Mega 2560`, 8-IR array, `OLED SSD1306`, `MPR121`, flow sensor, 4/8-ch relays, `L298P`, `PCA9685`, `NodeMCU`/`WeMos` `ESP8266`, `NRF24L01`, `ADXL345`, `HMC5883L`, `LM2596`/`TP4056`/`18650`, single-sided PCB, drill press & rotary machining, capstone.
  - **Class 9:** `4S 4A` Li-ion charger, `50 MHz DSO`, standalone `ATmega328P-PU` & `ATmega16U2`, `ESP32 DevKit V1`/`XIAO ESP32-S3`/`ESP32-S3-DevKitC`, `MQ-2..135` gas array, `MPU6050`, `GPS NEO-6M/8M`, `GSM SIM900`, 2-layer PCB & rework, `Raspberry Pi 3B+/4/5/Zero` Linux + `Mega` bridge, sheet metal/fabrication, DIY Drone Kit, Aerospace & Bio-Tech kits, flagship integration.

---

## 2. One-File Curriculum + Projects Standard (NO Separate `PROJECTS.md`)

- **One File Per Class (`Class-<N>/CLASS-<N>-CURRICULUM.md`):**
  - Contains strictly **one table** with 10 columns:
    `| Term | Month | Week | Module | Component / Topic | Project 1 | Project 2 | Project 3 | Project 4 | Project 5 |`
  - **Left side (`Term`, `Month`, `Week`, `Module`, `Component / Topic`):** Uses `Term 1` / `Term 2`, real month names (`June`, `July`, `August`, `September`, `October`, `November`, `December`, `January`, `February`, `March`), sequential week labels (`Week 01`–`Week 28`), module title, and component/topic name from verified ATL stock.
  - **Right side (`Project 1`–`Project 5`):** Lists 5 concise project titles built from that row's component—zero explanations, zero timetables/minutes, zero step-by-step wiring scripts.
- **One Master Table (`FRAMEWORK-AND-GUIDES/ELECTRONICS-ROBOTICS-CURRICULUM-CLASSES-5-TO-9.md`):**
  - Combines every row from Class 5 through Class 9 into **one single 11-column table** (`Class` + the 10 columns above).
- **Forbidden Files:** Do NOT create separate `PROJECTS.md`, `TEACHER-NOTES.md`, or `README.html` / `AGENTS.html` / `SKILL.html` files.
- **HTML Generation:** Run `python3 CURRICULUM/build_html.py` after updating Markdown files.
