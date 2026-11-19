# ATL Electronics Master Teaching Plan (Classes 5–9)

**Atal Thinking Lab · Term 1 Shared Core + Term 2 Grade Progression · 28 Active Weeks**

> **Facilitation Style:** Facilitator, Not Lecturer (zero textbook theory memorization, zero step-by-step wiring handouts)  
> **Classroom Setup:** `70 min` · `40 students` organized into **`8 groups of 5`**  
> **Hardware Catalog:** 160-item ATL Sorted Equipment Catalog (`main ATL school/Electronic component sorted list/README.md`)

---

## 1. Two-Term Structure (Term 1 Shared Core & Term 2 Grade Progression)

Every class (Classes 5 through 9) runs **28 active weeks** split cleanly into **Term 1 (`June–October`, `Weeks 01–14`)** and **Term 2 (`November–March`, `Weeks 15–28`)**:
- Every grade begins **June (`Week 01`)** with safety, power, `AC vs DC`, `Digital Multimeter`, and essential foundational parts (`Resistor`, `Breadboard`, `LED`, `Switches`, `Potentiometer`, `LDR`, `Capacitor`, `Diode`, `Transistor`) so nobody enters upper builds missing basic circuit fluency.
- Across both Term 1 and Term 2, each grade balances core electronics with age-appropriate sensors, soldering, coding, PCB, 3D fabrication, IoT, and robotics modules.

Every row pairs directly with **5 hands-on projects (`Project 1`–`Project 5`)** inside each grade's unified curriculum table (`Class-5/CLASS-5-CURRICULUM.md` through `Class-9/CLASS-9-CURRICULUM.md`).

---

## 2. The 70-Minute ATL Facilitator Class Flow (40 Students · 8 Groups of 5)

Instead of lecturing or handing out pin-by-pin wiring recipes, the teacher acts purely as a **lab facilitator** while **8 groups of 5 students** learn through building and debugging:

| Time Block | Duration | Facilitator & Student Role | What Happens on the Projector / Benches |
|---|---|---|---|
| **1. Visual Behavior Intro** | **10–15 min** | Facilitator shows *only* how the component behaves—no formulas, no history, no step-by-step schematic to copy. | Open **Chrome diagrams** (pinout, polarity legs, safe voltage limits) and play a **short 2–4 min YouTube clip** showing what the part reacts to or drives. Pose a project challenge (`Project 1`–`Project 5`) from `CLASS-<N>-CURRICULUM.md`. |
| **2. Open-Ended Group Build & Debugging** | **35–40 min** | **8 groups of 5** design, test, break, and fix circuits on their own. Facilitator circulates asking diagnostic questions instead of wiring for students. | Groups collect verified parts from ATL trays, experiment on breadboards/chassis/boards, use the **4-Step Fault-Finder** when something fails, and iterate until their group build works reliably. |
| **3. Showcase & 3-Box Debugging Log** | **10 min** | Quick group demos + concise notebook reflection (zero copied definitions). | 2–3 groups demonstrate their working build and share one failure they fixed. Every student completes the **3-Box Debugging Log** in their notebook before pack-up (`5 min` buffer for tray reset). |

### Group Roles Inside Every Team of 5
To ensure all 40 students participate hands-on across 8 benches:
1. **Parts & Safety Lead:** Collects exact ATL stock, checks battery/rail voltage, and enforces PPE goggles when required.
2. **Circuit Builder:** Places components and jumpers cleanly on breadboard / Zero-PCB / chassis.
3. **Tester / Coder:** Runs measurements (DMM / Serial Monitor / Oscilloscope in higher grades) or edits sketch parameters.
4. **Fault-Finder:** Runs the 4-Step Fault-Finder checklist whenever output breaks.
5. **Logger & Presenter:** Tracks bugs fixed during the build and presents the 30-second showcase demo.

*(Students rotate roles every week.)*

---

## 3. Standard Student Notebook: 3-Box Debugging Log

Students never copy textbook definitions or long paragraphs. Every project session fills only **three crisp boxes**:

```
┌──────────────────────────────────────────────────────────────────────┐
│ PROBLEM                                                              │
│ What real-world problem or challenge prompt did our group build for? │
├──────────────────────────────────────────────────────────────────────┤
│ WHAT BROKE                                                           │
│ What failed first? (Wrong polarity, loose row, missing resistor...)  │
├──────────────────────────────────────────────────────────────────────┤
│ HOW WE FIXED IT                                                      │
│ Exact change or test that made our circuit or code work properly.    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 4. Fault-Finder Rule (Before Calling the Facilitator)

Before raising a hand, every group of 5 must check four things together:
1. **Power & Polarity:** Is the 5V/9V/12V supply switched on? Are `+` and `−` legs (LED long/short, electrolytic stripe, diode silver band) right?
2. **Breadboard & Wire Contact:** Are pins seated firmly in connected rows with no loose jumpers?
3. **Component Value & Pinout:** Is that 220 Ω or 220 kΩ? Are sensor VCC, GND, and OUT/SDA/SCL pins matched?
4. **Measure or Isolate:** Check continuity/voltage with a Digital Multimeter (Class 6+), Serial Monitor (Class 7+), or 50 MHz Oscilloscope (Class 9).

---

## 5. 8-Group Bench & Shared Equipment Rotation Plan (40 Students)

| ATL Equipment & Lab Stock | How 8 Groups of 5 Share Smoothly |
|---|---|
| **Breadboards (80), Arduino Unos (45), Resistors/LEDs/Caps (30+ kits), BO Motors (60)** | All **8 groups** work in parallel (1–2 kits per group, zero waiting). |
| **Soldering Stations (6), Helping Hands (6), Desoldering Pumps (6)** | Classes 7–9 assign 6 groups to soldering benches while 2 groups prep layouts/DMM checks, rotating every 12–15 minutes. |
| **Digital Multimeters (5)** | Shared across bench clusters on demand during diagnostic checks. |
| **3D Printer (1 FDM + 2-hr UPS) & Vernier Calipers (2)** | Groups measure parts with calipers and export STL brackets during build time; printing runs queued between sessions. |
| **50 MHz Digital Oscilloscope (1, Class 9)** | Connected to the projector for waveform behavior demos + group probe checks at the diagnostic station. |

---

## 6. Two-Term Grade Progression Summary

| Grade | Term 1 (`June–October` · `Weeks 01–14`) | Term 2 (`November–March` · `Weeks 15–28`) | Key Group Deliverables |
|---|---|---|---|
| **Class 5** | Safety, AC vs DC, DMM, Core Passives/Transistors, Buzzers, RGB LED, Haptic Motor, Arduino Uno R3 | BO Gear Motors, SG90 Servo & Tester, HC-SR04, IR, Tilt, Bluetooth HC-05, Relay, ISD1820, Craft & Guided Kits | Phone-Controlled Rover, Touchless Trash Lid, Wired Buzzer Quiz, Geared Crane |
| **Class 6** | Core + DMM, LM78xx Regulators, Bargraph/7-Seg, LM555 Timer, 2-Ch Relay, Nano, DHT11, Soil/Rain | Sound, Capacitive Touch, Laser/IR/PIR, Joystick, MG90S, L293D, HM-10 BLE, Water Pump, Agritech/Water Kits | 555 Timer Siren, Laser Tripwire, Auto Plant Irrigator, No-Code IR Buggy |
| **Class 7** | Pen DMM + Core, Zeners, Zero-PCB Soldering, Uno C++, 16×2 LCD, 4-Digit 7-Seg, 8×8 Matrix, Keypad, Bio Sensors | TB6612FNG, Stepper, MG995/996R, 433 MHz RF, RFID, DS3231, SD Card, Color Sensor, FDM 3D Printing, Tools, Bio-Med Kit | Soldered 555 PCB, RFID Attendance Logger, Color Candy Sorter, 3D-Printed Turret |
| **Class 8** | SMPS + Core, Bare ICs (`LM358/393`, `MOSFET`, `74HC595`, `L293D/ULN`), Mega 2560, 8-IR, OLED, MPR121, 4/8-Ch Relay, L298P, PCA9685 | ESP8266 Wi-Fi, NRF24L01, ADXL345, HMC5883L, Buck/LiPo/18650, Single-Sided PCB, Machining, Capstone | ESP8266 Web Console, 6-Legged Hexapod, Long-Range NRF Rover, Custom Shield |
| **Class 9** | 4S Charger + Core, 50 MHz DSO, Standalone ATmega328P/16U2, ESP32/S3, MQ-2..135 Gas, MPU6050, GPS, GSM, 2-Layer PCB | Raspberry Pi 3B+/4/5/Zero + Mega Bridge, Multi-Part 3D & Sheet Metal, DIY Drone Kit, Aerospace/Bio-Tech Kits, Capstone | Campus Gas IoT Network, GPS/GSM Tracker, Raspberry Pi Server, DIY Quadcopter |

