# Atal Tinkering Lab (ATL) — Official Procurement Requisition & Vendor Purchase Order

> **To**: The School Principal / Institutional Procurement Committee  
> **From**: ATL Lab In-Charge & Electronics Instructor  
> **Target Vendor**: Electronic Component & Educational Hardware Supplier  
> **Lab Capacity**: 90 Students (Batch Working Capacity)  
> **Source Base**: Official ATL Equipment Guidelines (`ATL_Equipment_List_90_students.md`)  
> **Date of Requisition**: October 2026  

---

### Executive Procurement Summary for Principal & Vendor

This purchase order is structured specifically for modern electronic component distributors and hardware suppliers. All items have been deduplicated, modernized to current technological standards, and organized into:
1. **Primary Sections (Sections 1 to 10)**: Latest-generation Microcontroller Boards (Arduino + ESP32 Dual-Core), Professional Breakout Modules (directly attachable to Arduino, ESP32, and Raspberry Pi via 3-pin / 4-pin jumper headers and 3.3V/5V logic), High-Efficiency MOSFET Drivers, Displays, Actuators, Workshop Machinery, Tools, and Safety Infrastructure.
2. **Dedicated Bottom Sections (Section 11 & Section 12)**:
   - **Section 11**: Older / Deprecated Legacy Modules (2G GSM SIM900, noisy 433 MHz ASK RF, obsolete classic Bluetooth, and ancient BJT motor drivers) moved out of the primary order so the school does not purchase obsolete hardware.
   - **Section 12**: Discrete and single electronic components (bare passives, loose ICs, through-hole LEDs, and unmounted sensors) that require manual circuit building on breadboards.

---

## 1. Microcontroller Boards, Single-Board Computers & Controllers

| Item # | Component / Board Name | Technical Specifications & Model Details | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 01 | **ESP32 DevKit V1 (30-Pin / 38-Pin)** | 32-bit Dual-Core Xtensa LX6 @ 240 MHz; integrated 2.4 GHz Wi-Fi + Bluetooth BLE 4.2/5.0; 520 KB SRAM; 4 MB Flash; 3.3V logic (5V Micro-USB / Type-C input); hardware capacitive touch, ADC, DAC, PWM on all GPIOs *(Latest standard for School IoT & AI)* | 16 Units | **Consumable** | | |
| 02 | **Arduino Uno R3 (or equivalent)** | ATmega328P 8-bit AVR microcontroller; 5V operating voltage; 14 Digital I/O (6 PWM); 6 Analog inputs; 16 MHz crystal; includes clear protective case and USB Type-A to Type-B programming cable | 45 Units | **Consumable** | | |
| 03 | **Arduino Nano (or equivalent)** | ATmega328P 8-bit AVR; 5V; breadboard-compatible 30-pin DIP form factor; 14 Digital I/O (6 PWM); 8 Analog inputs; Mini-USB cable included | 15 Units | **Consumable** | | |
| 04 | **Arduino Mega 2560 (or equivalent)** | ATmega2560 8-bit AVR; 5V; 54 Digital I/O (15 PWM); 16 Analog inputs; 4 UART hardware serial ports; includes protective casing and USB cable | 15 Units | **Consumable** | | |
| 05 | **Raspberry Pi 3 Model B+** | Quad Core 64-bit Broadcom ARM Cortex-A53 @ 1.4 GHz; 1 GB LPDDR2 RAM; Dual-band 2.4/5 GHz Wi-Fi & Bluetooth 4.2; 40-pin GPIO; 4x USB 2.0; Full HDMI; includes 32 GB Class-10 microSD card, HDMI-to-VGA converter, 5V 2.5A power supply, and protective enclosure | 8 Units | **Consumable** | | |
| 06 | **NodeMCU v3 (ESP8266)** | ESP8266 Wi-Fi SoC with onboard CP2102/CH340 USB-UART; 3.3V logic (5V Micro-USB power input); integrated TCP/IP stack; PCB trace antenna | 8 Units | **Consumable** | | |
| 07 | **WeMos D1 R2 (ESP8266)** | Arduino Uno form-factor Wi-Fi development board powered by ESP8266; 5V–12V barrel jack input; 11 Digital I/O; 1 Analog input; Arduino IDE compatible | 8 Units | **Consumable** | | |

---

## 2. Professional Breakout Sensors & Environmental Detection Modules
*(All sensors in this section are complete breakout modules with onboard comparators/drivers and standard 3-pin / 4-pin headers for direct plug-and-play wiring to Arduino, ESP, and Raspberry Pi)*

| Item # | Sensor Module Name | Technical Specifications & Model Details | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 08 | **LDR Light Sensor Module** | 5mm light-dependent resistor sensor with onboard LM393 voltage comparator, sensitivity adjustment trimmer potentiometer, and dual digital/analog outputs (3.3V–5V compatible) | 45 Units | **Consumable** | | |
| 09 | **Digital Temperature & Humidity (DHT11)** | Single-bus digital output sensor module with pull-up resistor onboard; temperature range $0-50^\circ\text{C}$ ($\pm 2^\circ\text{C}$); humidity range $20-90\%\,\text{RH}$; supply $3.3\text{V} - 5\text{V}$ | 50 Units | **Consumable** | | |
| 10 | **Analog Humidity Sensor Module** | Resistance-based relative humidity sensor probe board; range $20-95\%\,\text{RH}$; linear analog voltage response | 15 Units | **Consumable** | | |
| 11 | **Soil Moisture Sensor Module** | Double-sided nickel-plated fork probe with LM393 comparator breakout module; corrosion-resistant coating; analog and digital outputs | 8 Units | **Consumable** | | |
| 12 | **Raindrop Detection Board** | $50\times 40\,\text{mm}$ nickel-plated rain sensor board with separate control module (LM393 comparator and trimmer) | 8 Units | **Consumable** | | |
| 13 | **Turbine Water Flow Sensor** | Hall-effect liquid flow meter; 1–30 L/min flow rate range; operating voltage 5V DC; pulse frequency output ($f = 7.5\times Q$) | 6 Units | **Consumable** | | |
| 14 | **PIR Human Motion Detector (HC-SR501)** | Pyroelectric infrared sensor module; dome Fresnel lens; detection range 3–7 metres; adjustable delay time and sensitivity pots; 3.3V output logic | 30 Units | **Consumable** | | |
| 15 | **Ultrasonic Distance Sensor (HC-SR04)** | 40 kHz ultrasonic transmitter and receiver module; range $2\,\text{cm} - 400\,\text{cm}$; precision 3mm; 4-pin header: VCC, Trig, Echo, GND; 5V DC | 50 Units | **Consumable** | | |
| 16 | **IR Proximity / Obstacle Avoidance Module** | 940nm infrared LED emitter and photodiode pair; onboard LM393 comparator; detection distance $2-30\,\text{cm}$; $35^\circ$ detection angle | 30 Units | **Consumable** | | |
| 17 | **8-Channel IR Tracking Sensor Array** | 8-sensor reflective infrared bar with onboard comparators; digital output pins for autonomous line-following robotics | 15 Units | **Consumable** | | |
| 18 | **Sound Detection Microphone Module** | Electret condenser microphone with LM393 amplifier and digital threshold sensitivity trimmer | 15 Units | **Consumable** | | |
| 19 | **High-Sensitivity Big Sound Module** | Large electret microphone capsule module with dual analog sound waveform and digital trigger outputs *(merged deduplicated stock)* | 30 Units | **Consumable** | | |
| 20 | **Capacitive Touch Module (TTP223B)** | Single-key capacitive digital touch switch; momentary / toggle output mode selectable; supply $2.0\text{V} - 5.5\text{V}$ DC | 15 Units | **Consumable** | | |
| 21 | **Touch Sensor Module (TTP22X)** | Multi-purpose capacitive contact sensor with low standby power consumption; operating voltage $2.4\text{V} - 5.5\text{V}$ | 8 Units | **Consumable** | | |
| 22 | **Metal Touch Sensor Module (KY-036)** | Metal touch sensor with Darlington transistor and comparator; senses human skin touch on metal electrode lead | 8 Units | **Consumable** | | |
| 23 | **12-Channel Capacitive Touch (MPR121)** | MPR121 capacitive touch controller; 12 independent electrode sensing inputs; I2C digital interface; $3.3\text{V}$ logic | 30 Units | **Consumable** | | |
| 24 | **Pulse Heart-Rate Sensor** | Optical photoplethysmography (PPG) fingertip/earlobe pulse sensor with built-in ambient noise cancellation; 3.3V–5V DC | 5 Units | **Consumable** | | |
| 25 | **Color Recognition Sensor (TCS3200)** | TCS3200 programmable color light-to-frequency converter with 4 integrated white LEDs; reads Red, Green, Blue, and Clear filters | 6 Units | **Consumable** | | |
| 26 | **3-Axis Digital Accelerometer** | 3-axis motion and gravity sensor (ADXL345 / MPU-6050 compatible); user-selectable $\pm 2g / \pm 4g / \pm 8g / \pm 16g$ ranges; I2C/SPI | 15 Units | **Consumable** | | |
| 27 | **3-Axis Digital Magnetometer** | 3-axis magnetoresistive digital compass module (HMC5883L / QMC5883L); I2C interface; 12-bit ADC; $\pm 8$ Gauss dynamic range | 15 Units | **Consumable** | | |
| 28 | **Laser Diode Emitter Module** | 650nm red point laser diode head module with current-limiting resistor and 3-pin header; output 5mW; 5V DC | 15 Units | **Consumable** | | |
| 29 | **MQ-2 Smoke & Combustible Gas Sensor** | Wide-spectrum gas sensor module for methane, butane, LPG, smoke, and hydrogen; 5V heater with analog/digital comparator outputs | 4 Units | **Consumable** | | |
| 30 | **MQ-3 Alcohol Vapor Gas Sensor** | High sensitivity to ethanol alcohol vapor; ideal for breathalyzer test circuits; onboard LM393 comparator | 4 Units | **Consumable** | | |
| 31 | **MQ-4 Methane & Natural Gas Sensor** | High sensitivity to methane ($\text{CH}_4$) and natural gas leaks; fast response; onboard LM393 comparator | 4 Units | **Consumable** | | |
| 32 | **MQ-5 LPG & Town Gas Sensor** | High sensitivity to liquefied petroleum gas (LPG) and compressed natural gas (CNG); onboard LM393 comparator | 4 Units | **Consumable** | | |
| 33 | **MQ-6 Propane & Butane Gas Sensor** | Specialized high sensitivity for domestic LPG and butane gas cylinder leak detection; onboard LM393 comparator | 4 Units | **Consumable** | | |
| 34 | **MQ-7 Carbon Monoxide (CO) Sensor** | High sensitivity to toxic carbon monoxide gas; dual-temperature cycling heater; onboard LM393 comparator | 4 Units | **Consumable** | | |
| 35 | **MQ-8 Hydrogen Gas Sensor** | Specialized sensitivity to pure hydrogen gas ($\text{H}_2$); low sensitivity to alcohol/smoke; onboard LM393 comparator | 4 Units | **Consumable** | | |
| 36 | **MQ-135 Air Quality & Pollution Sensor** | Environmental air quality detector for ammonia ($\text{NH}_3$), nitrogen oxides ($\text{NO}_x$), alcohol, benzene, and smoke | 4 Units | **Consumable** | | |

---

## 3. Displays, Audio Modules & User Interface Controls

| Item # | Item Description | Technical Specifications & Model Details | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 37 | **0.96-inch I2C OLED Display Module (SSD1306)** | 0.96-inch monochrome graphic OLED display (128&times;64 resolution); SSD1306 driver; 4-pin I2C interface (VCC, GND, SCL, SDA); supply 3.3V–5V DC; high contrast text and graphics *(Directly connects to Arduino, ESP32, and Raspberry Pi)* | 30 Units | **Consumable** | | |
| 38 | **4-Digit 7-Segment Display (TM1637)** | 0.36-inch 4-digit red 7-segment LED display with colon dots; onboard TM1637 driver IC; simple 2-wire serial bus (CLK, DIO); 5V | 30 Units | **Consumable** | | |
| 39 | **8×8 LED Dot Matrix Module (MAX7219)** | 64 bright red LEDs arranged in an $8\times 8$ matrix; MAX7219 serial driver; 5-pin SPI interface; multi-module daisy-chainable | 10 Units | **Consumable** | | |
| 40 | **Voice Recording & Playback (ISD1820)** | ISD1820 chip board; 10-second voice recording; onboard electret microphone; playback pushbuttons; includes miniature 8$\Omega$ 0.5W speaker | 15 Units | **Consumable** | | |
| 41 | **$4\times 4$ Matrix Membrane Keypad** | 16-key matrix keypad (keys 0–9, *, #, A–D); flexible flat ribbon cable with 8-pin 2.54mm pitch female socket | 15 Units | **Consumable** | | |
| 42 | **Dual-Axis Analog Joystick Module** | Dual $10\,\text{k}\Omega$ potentiometers for X and Y axes with integrated momentary pushbutton switch; spring auto-return to center; 5-pin header | 15 Units | **Consumable** | | |

---

## 4. Motors, Actuators, High-Efficiency Drivers, Servos & Relay Modules

| Item # | Item Description | Technical Specifications & Model Details | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 43 | **150 RPM Plastic BO Gear Motor with Wheel** | 3V–9V DC dual-shaft straight gearbox motor (150 RPM output speed @ 6V) complete with matching 65mm rubber-tread wheel | 60 Pairs | **Consumable** | | |
| 44 | **150 RPM BO Motor (Standalone)** | 3V–9V DC battery-operated single-shaft plastic gear motor (150 RPM) | 15 Units | **Consumable** | | |
| 45 | **12V High-Torque DC Geared Motor** | 12V DC heavy-duty metal-gear motor; 150 RPM output; 6mm D-shaped center output shaft | 30 Units | **Consumable** | | |
| 46 | **Submersible Mini Water Pump** | 12V DC, 3W submersible centrifugal brushless water pump with outlet nozzle; max head 1.5 metres | 6 Units | **Consumable** | | |
| 47 | **Micro Positional Servo — Plastic Gear (SG90)** | 9g micro positional servo motor; $0^\circ - 180^\circ$ pulse angle rotation; operating voltage $4.8\text{V} - 6.0\text{V}$; stall torque 1.8 kg-cm; horns included | 60 Units | **Consumable** | | |
| 48 | **Metal-Gear Micro Servo (MG90S)** | High-durability micro servo with brass and aluminum gears; $0^\circ - 180^\circ$ rotation; stall torque 2.2 kg-cm | 15 Units | **Consumable** | | |
| 49 | **Standard High-Torque Positional Servo** | Full-size metal-gear positional servo (MG995 / MG996R); torque 10–12 kg-cm; double ball bearings; $0^\circ - 180^\circ$ control | 15 Units | **Consumable** | | |
| 50 | **Continuous Rotation Metal Servo (360°)** | Full-size continuous rotation servo ($360^\circ$ speed/direction control); high-torque metal gear train | 15 Units | **Consumable** | | |
| 51 | **3-Channel Servo & ESC Tester (CCPM)** | Standalone digital servo tester with 3 modes (Manual speed dial, Neutral auto-center, Automatic window sweep); tests up to 3 servos simultaneously | 6 Units | **Consumable** | | |
| 52 | **5V Stepper Motor with ULN2003 Driver** | 28BYJ-48 5V 4-phase 5-wire unipolar geared stepper motor paired with ULN2003 Darlington array driver board with status LEDs | 15 Sets | **Consumable** | | |
| 53 | **TB6612FNG Dual MOSFET Motor Driver Module** | **High-Efficiency Dual H-Bridge Driver**; 1.2A continuous / 3.2A peak per channel; ultra-low internal resistance (near zero voltage drop); stays cool; logic voltage $2.7\text{V} - 5.5\text{V}$ (fully compatible with 3.3V ESP32 and 5V Arduino); hardware standby pin *(Replaces outdated, hot-running L293D/L298 drivers)* | 15 Units | **Consumable** | | |
| 54 | **PCA9685 16-Channel 12-bit PWM / Servo Driver** | 16-channel independent PWM controller with I2C bus; driven by only 2 microcontroller pins (SDA, SCL); 12-bit resolution; handles up to 16 servos or LED dimmers simultaneously | 6 Units | **Consumable** | | |
| 55 | **1-Channel 5V/3.3V Relay Module with Optocoupler & Trigger Selector** | 5V DC electromagnetic relay module with PC817 optocoupler isolation, transistor driver, flyback diode, status LED, and **High/Low level trigger selection jumper**; contacts rated 10A 250V AC / 30V DC *(Directly triggered by 3.3V ESP32 or 5V Arduino GPIO without damage)* | 30 Units | **Consumable** | | |
| 56 | **2-Channel 5V/3.3V Relay Module with Optocoupler & Trigger Selector** | Dual 5V DC relay board with independent optoisolated inputs, status LEDs, High/Low trigger selection jumpers, and NO/COM/NC screw terminals *(Directly connects to ESP32 / Arduino / Raspberry Pi)* | 30 Units | **Consumable** | | |

---

## 5. Modern Wireless Communication, RFID & Telemetry Modules
*(All wireless modules in this section use current, active communication standards compatible with modern smartphones, microcontrollers, and cloud networks)*

| Item # | Module Description | Technical Specifications & Model Details | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 57 | **NRF24L01+ 2.4 GHz RF Transceiver with PA+LNA & Antenna** | Long-range 2.4 GHz digital packet radio transceiver with Power Amplifier (PA) + Low Noise Amplifier (LNA) and external SMA rubber-duck antenna; range up to 1,000 metres (1 km); SPI interface; 3.3V logic *(Modern reliable standard; replaces noisy 433 MHz ASK)* | 15 Pairs | **Consumable** | | |
| 58 | **Bluetooth Low Energy (BLE) Module (HM-10 / AT-09)** | 2.4 GHz Bluetooth 4.0/5.0 BLE transceiver; UART serial interface; compatible with **both Android and Apple iOS smartphones**; ultra-low power consumption; 3.3V/5V tolerant *(Replaces legacy Bluetooth 2.0 HC-05)* | 15 Units | **Consumable** | | |
| 59 | **RFID Reader Module & Tag Kit (RC522)** | 13.56 MHz contactless RFID/NFC reader board (MFRC522); SPI bus; includes 1x RFID contactless smart card and 1x key fob tag | 15 Kits | **Consumable** | | |
| 60 | **GPS Satellite Module (u-blox GY-NEO6MV2 / NEO-8M)** | High-sensitivity satellite receiver module with active ceramic patch antenna; EEPROM config retention; 9600 baud serial NMEA output; multi-GNSS support | 6 Units | **Consumable** | | |

---

## 6. Prototyping Hardware, Interconnects, Batteries & Power Supplies

| Item # | Item Description | Technical Specifications & Model Details | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 61 | **Half-Size Solderless Breadboard (400 Tie-Points)** | 400 tie-point solderless breadboard with self-adhesive backing tape; dual power distribution buses | 50 Units | **Consumable** | | |
| 62 | **Full-Size Solderless Breadboard (800 Tie-Points)** | 830 tie-point solderless breadboard; dual center terminal strip with 4 power distribution rails; side interlocking tabs | 30 Units | **Consumable** | | |
| 63 | **Self-Adhesive Mini Proto Shield Breadboard** | Compact 170-point mini breadboard designed for Arduino Proto-Shield mounting | 30 Units | **Consumable** | | |
| 64 | **General-Purpose Perfboard (Zero-PCB) — Medium** | FR2 single-sided copper clad dotted prototype board; size $80\times 55\,\text{mm}$; 2.54mm hole spacing | 50 Units | **Consumable** | | |
| 65 | **General-Purpose Perfboard (Zero-PCB) — Large** | FR2 single-sided copper clad dotted prototype board; size $140\times 90\,\text{mm}$; 2.54mm hole spacing | 50 Units | **Consumable** | | |
| 66 | **Male Breakable Pin Headers (Berg Strips)** | 40-pin single row male headers; standard 2.54mm pitch; gold/tin plated; snappable to any pin length | 50 Strips | **Consumable** | | |
| 67 | **Female Pin Headers (Berg Strips)** | 40-pin single row female socket headers; standard 2.54mm pitch; straight mount | 50 Strips | **Consumable** | | |
| 68 | **Jumper Wires — Male to Male (M-M)** | 20cm flexible multicolored 40-pin ribbon jumper wires with molded square male pins | 1,500 Wires (38 Packs) | **Consumable** | | |
| 69 | **Jumper Wires — Male to Female (M-F)** | 20cm flexible multicolored 40-pin ribbon jumper wires with male pin to female socket | 1,000 Wires (25 Packs) | **Consumable** | | |
| 70 | **Jumper Wires — Female to Female (F-F)** | 20cm flexible multicolored 40-pin ribbon jumper wires with female socket to female socket | 500 Wires (13 Packs) | **Consumable** | | |
| 71 | **Alligator Clip Test Leads** | Double-ended insulated alligator clip jumper cables; 12-inch length; multicolored jackets | 300 Leads | **Consumable** | | |
| 72 | **Hook-Up Wire Spools** | Single-core insulated hook-up wire spools (100 metres Red + 100 metres Black per set) | 4 Sets (8 Spools) | **Consumable** | | |
| 73 | **USB Programming Cables — Type-A to Type-B** | High-shielded 1.2m USB 2.0 cable for Arduino Uno and Arduino Mega | 15 Cables | **Consumable** | | |
| 74 | **USB Programming Cables — Type-A to Mini-B** | High-shielded 1.0m USB 2.0 cable for Arduino Nano and microcontroller boards | 15 Cables | **Consumable** | | |
| 75 | **USB to DC Barrel Jack Converter Cables** | 5V USB Type-A to 5.5mm $\times$ 2.1mm center-positive DC plug cable for running breadboards from power banks | 10 Cables | **Consumable** | | |
| 76 | **9V Battery Snaps with DC Barrel Plug** | Heavy-duty molded hard-plastic 9V battery connector clips terminating in a 5.5mm/2.1mm DC barrel jack | 40 Units | **Consumable** | | |
| 77 | **Rechargeable Battery Packs with Smart Chargers** | 9V–12V (2000–2500 mAh) rechargeable NiMH/Li-ion battery packs with dual automatic smart chargers | 10 Packs + Chargers | **Consumable** | | |
| 78 | **High-Capacity Portable Power Banks** | 10,000 mAh dual-port (5V 2.1A / 1A) portable rechargeable power bank with battery LED meter | 5 Units | **Consumable** | | |
| 79 | **Regulated DC Wall Power Adapter — 5V 2A** | 230V AC to 5V DC, 2000mA regulated switch-mode wall power adapter with 5.5mm DC barrel jack | 10 Units | **Consumable** | | |
| 80 | **Regulated DC Wall Power Adapter — 12V 2A** | 230V AC to 12V DC, 2000mA regulated switch-mode wall power adapter with 5.5mm DC barrel jack | 10 Units | **Consumable** | | |
| 81 | **Workshop Power Extension Boards** | Heavy-duty 5-socket universal surge-protected power extension strip with master switch, indicator, and 5m cord | 5 Units | **Consumable** | | |
| 82 | **Twisted-Pair Mains Distribution Wires** | Red-Black twisted flexible copper electrical distribution wire | 20 Metres | **Consumable** | | |
| 83 | **AC/DC Lamp Bulb Holders** | Standard insulated screw/bayonet socket bulb holders for bench load experiments | 10 Units | **Consumable** | | |

---

## 7. Permanent Workshop Tools, Diagnostic Instruments & Machines

| Item # | Equipment / Machine / Tool Name | Technical Specifications & Model Details | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 84 | **Digital Multimeter (DMM)** | 7 functions, 19 ranges; DC voltage ($200\text{mV} - 1000\text{V}$), AC voltage ($200\text{V} - 750\text{V}$), DC current ($200\,\mu\text{A} - 10\text{A}$), resistance ($200\,\Omega - 2\,\text{M}\Omega$), diode test, continuity buzzer, transistor $h_{FE}$ socket | 5 Units | **Permanent Asset** | | |
| 85 | **Digital Storage Oscilloscope (DSO)** | 50 MHz bandwidth, 2 channels, 1 GSa/s real-time sample rate, 7-inch color LCD, built-in function generator, USB interface | 1 Unit | **Permanent Asset** | | |
| 86 | **Digital Voltage Tester Pen** | Contactless and contact AC voltage detector pen with audible alarm and bright LED indicator | 1 Unit | **Permanent Asset** | | |
| 87 | **Digital Vernier Caliper** | 150mm / 6-inch electronic digital vernier caliper; stainless steel frame; resolution 0.01mm / 0.0005"; zero-calibration key | 2 Units | **Permanent Asset** | | |
| 88 | **Stainless Steel Workshop Ruler** | 150mm / 12-inch heavy-duty stainless steel measuring rule with photo-etched metric and imperial scales | 5 Units | **Permanent Asset** | | |
| 89 | **Auto-Retracting Measuring Tape** | 5m $\times$ 19mm steel measuring tape with rubberized shockproof armor, belt clip, and thumb lock | 2 Units | **Permanent Asset** | | |
| 90 | **Workshop Spirit Level** | 12-inch aluminum magnetic spirit level with 3 shockproof acrylic vials (horizontal, vertical, $45^\circ$) | 1 Unit | **Permanent Asset** | | |
| 91 | **Temperature-Controlled Soldering Stations** | 15W–30W / 230V variable temperature soldering stations ($280^\circ\text{C} - 450^\circ\text{C}$) with heavy cast-iron cradle stand and brass tip cleaner | 6 Stations | **Permanent Asset** | | |
| 92 | **Soldering Third-Hand Magnifier Tool** | Weighted cast-iron base, dual adjustable ball-joint crocodile clips, iron holster, LED light, and 3x optical glass magnifier | 6 Units | **Permanent Asset** | | |
| 93 | **High-Vacuum Desoldering Pump** | Aluminum body spring-loaded manual solder sucker with high-suction Teflon nozzle | 6 Units | **Permanent Asset** | | |
| 94 | **Industrial Hot Melt Glue Guns** | High-temperature electric glue gun ($230^\circ\text{C} - 280^\circ\text{C}$) for 11mm standard glue sticks; fold-out wire stand and insulated nozzle | 6 Guns | **Permanent Asset** | | |
| 95 | **Dual-Temperature Electric Heat Gun** | 1800W heavy-duty industrial heat gun with dual-heat rocker switch ($300^\circ\text{C} / 500^\circ\text{C}$) and concentration nozzle attachment | 1 Unit | **Permanent Asset** | | |
| 96 | **Adjustable Wire Stripper & Cutter** | Drop-forged steel wire stripper and diagonal cutter with adjustable brass gauge stop screw ($26\times 6\times 20\,\text{cm}$) | 5 Units | **Permanent Asset** | | |
| 97 | **Workshop Mini Plier Set (6-Piece)** | 4.5-inch carbon steel precision pliers set: Long-nose, bent-nose, needle-nose, combination mini plier, external circlip plier, and wire-stripper | 1 Set (6 Pliers) | **Permanent Asset** | | |
| 98 | **Anti-Static Precision Tweezer Set** | 6-piece non-magnetic anti-static ESD-safe stainless steel tweezers in zippered pouch (straight, curved, spade tips) | 2 Sets (12 Tweezers) | **Permanent Asset** | | |
| 99 | **Jeweler Precision Screwdriver Set** | 6-piece precision screwdriver set: Phillips PH0, PH1, and Flathead 1.4mm, 2mm, 2.4mm, 3mm in indexed case | 3 Sets | **Permanent Asset** | | |
| 100 | **40-Piece Multi-Bit Screwdriver Set** | Ratcheting screwdriver handle with flexible extension shaft and 40 magnetic bits (Torx, Hex, Phillips, Slotted, Pozidriv) | 3 Sets | **Permanent Asset** | | |
| 101 | **Rechargeable Cordless Electric Screwdriver** | 3.6V Li-ion cordless electric screwdriver with forward/reverse trigger, LED worklight, magnetic bit holder, and charger | 1 Unit | **Permanent Asset** | | |
| 102 | **Combination Spanner Set (12-Piece)** | Chrome vanadium drop-forged open and ring combination spanners (metric sizes 4mm to 30mm) with wall-mountable rack | 1 Set (12 Spanners) | **Permanent Asset** | | |
| 103 | **Universal Adjustable Wrench** | 8-inch drop-forged carbon steel adjustable wrench with laser-etched metric jaw opening scale | 2 Units | **Permanent Asset** | | |
| 104 | **Imperial Allen Hex Key Set** | 10-piece ring imperial Allen hex key set for machine hex socket screws | 1 Set (10 Keys) | **Permanent Asset** | | |
| 105 | **Table-Top Bench Vice** | Heavy-duty cast-iron bench vice with serrated steel jaws, swivel base, locking lever, and integrated anvil surface | 1 Unit | **Permanent Asset** | | |
| 106 | **Metal Screw C-Clamps** | 3-inch heavy-duty forged steel screw-threaded C-clamps with swivel shoe | 4 Units | **Permanent Asset** | | |
| 107 | **12-inch Heavy-Duty Hacksaw Frame** | Tubular steel hacksaw frame with cast handle and wingnut blade tensioner for 12-inch blades | 1 Frame | **Permanent Asset** | | |
| 108 | **6-inch Mini Hacksaw Frame** | Compact aluminum alloy mini hacksaw frame for tight spaces and delicate cutting | 1 Frame | **Permanent Asset** | | |
| 109 | **Engineering Hand File Set (6-inch)** | 6-piece high-carbon steel file set: flat, hand, round, half-round, triangular, and square with non-slip rubber handles | 1 Set (6 Files) | **Permanent Asset** | | |
| 110 | **Diamond Needle File Set (3-inch)** | 6-piece miniature diamond needle file set for fine deburring of 3D prints, plastic boxes, and small chassis | 1 Set (6 Files) | **Permanent Asset** | | |
| 111 | **Steel Shaft Claw Hammer** | 0.75 kg polished carbon steel head with tubular steel shaft and vibration-absorbing rubber grip | 1 Unit | **Permanent Asset** | | |
| 112 | **Engineer's Ball Pein Hammer** | 0.75 kg forged carbon steel ball pein hammer for metal forming, tapping, and center punching | 1 Unit | **Permanent Asset** | | |
| 113 | **Variable-Speed Electric Drill Machine** | 500W electric drill machine (1–10mm chuck capacity, variable speed trigger 0–2800 RPM, hammer/drill selector modes) | 1 Unit | **Permanent Asset** | | |
| 114 | **Bench Drill Press Stand & Holder** | Heavy cast-iron base drill press stand compatible with the 500W electric drill for perpendicular precision drilling | 1 Unit | **Permanent Asset** | | |
| 115 | **HSS Twist Drill Bit Set (13-Piece)** | 13-piece High-Speed Steel (HSS) drill bits ($1\,\text{mm} - 10\,\text{mm}$) in indexed steel storage index box | 1 Set (13 Bits) | **Permanent Asset** | | |
| 116 | **Cordless Rotary Multitool Set** | High-speed Li-ion rotary tool (up to 30,000 RPM) with flexible shaft, collets, cutting discs, grinding stones, and polishing wheels | 1 Set | **Permanent Asset** | | |
| 117 | **Variable-Speed Electric Air Blower** | 500W electric high-velocity air blower with rubber directional nozzle for bench cleaning and dust removal | 1 Unit | **Permanent Asset** | | |
| 118 | **Flexible Self-Healing Cutting Mat** | A3 size ($18\times 12\,\text{inches}$) 5-ply self-healing cutting mat with printed metric grid lines, millimeters, and angle guides | 1 Unit | **Permanent Asset** | | |
| 119 | **3D Printer (FDM) Kit & Toolkit** | Fused Deposition Modelling (FDM) 3D printer ($160\times 160\times 160\,\text{mm}$ build volume, heated bed, 0.4mm nozzle, LCD screen) with repair toolkit | 1 Unit | **Permanent Asset** | | |
| 120 | **Dedicated 2-Hour UPS Power Backup** | Heavy-duty Uninterruptible Power Supply (UPS) with 2-hour battery backup for 3D printer power protection | 1 Unit | **Permanent Asset** | | |
| 121 | **Modular Component Storage Cabinets** | High-impact plastic storage cabinets with 60 transparent drawers each ($2\times 2\times 5\,\text{inches}$) for sorting small electronics | 2 Units (120 Drawers) | **Permanent Asset** | | |
| 122 | **Wall-Mounted Pegboard Tool Systems** | $3\times 2$ feet metal tool pegboards with modular hanging hooks, spanner racks, plier clips, and tool shelves | 2 Boards | **Permanent Asset** | | |

---

## 8. Workshop Consumable Supplies & Replenishment Hardware

| Item # | Consumable Item Name | Technical Specifications & Model Details | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 123 | **Hot Melt Glue Sticks** | Standard $11\,\text{mm}\times 200\,\text{mm}$ high-clarity EVA hot melt adhesive glue sticks | 150 Sticks | **Consumable** | | |
| 124 | **12-inch Hacksaw Replacement Blades** | 12-inch high-carbon steel bi-metal flexible hacksaw blades (18/24 TPI) | 10 Blades | **Consumable** | | |
| 125 | **6-inch Mini Hacksaw Replacement Blades** | 6-inch high-carbon steel replacement mini blades (24 TPI) | 10 Blades | **Consumable** | | |
| 126 | **Waterproof Sandpaper Assortment** | Silicon carbide waterproof sandpaper sheets: Grits 80, 100, 120, 200, 300 (5 sheets of each grit) | 25 Sheets (5 Packs) | **Consumable** | | |
| 127 | **Machine Hardware Fasteners Kit** | Assorted metric machine screws, hex nuts, and washers: M4 $\times$ 12/20mm, M5 $\times$ 16/25mm, M6 $\times$ 20mm | 40 Sets | **Consumable** | | |
| 128 | **Nylon Cable Ties (Zip Ties)** | Self-locking UV-resistant nylon cable ties: Small, Medium, Big (100 ties/pack, 15 packs each size) | 45 Packs (4,500 ties) | **Consumable** | | |
| 129 | **Rosin-Core Solder Wire Spools** | 100g spools of 60/40 leaded or lead-free 20/22 AWG rosin-flux-core soldering wire | 6 Spools (600g total) | **Consumable** | | |
| 130 | **Non-Corrosive Soldering Flux Paste** | 100g tubs of non-corrosive rosin soldering flux paste for tinning iron tips and cleaning copper pads | 6 Tubs | **Consumable** | | |
| 131 | **Desoldering Copper Braid Wick** | $1.5\,\text{m}\times 2\,\text{mm}$ pure copper woven desoldering braid wick for solder bridge cleanup | 6 Spools | **Consumable** | | |
| 132 | **Heat Shrink Tubing Assortment** | Polyolefin flame-retardant heat shrink tubing assortment (diameters 2mm, 3mm, 5mm, 8mm, 10mm) | 100 Pieces | **Consumable** | | |
| 133 | **PLA 3D Printer Filament Spools** | High-grade 1.75mm PLA filament (1 kg spools in 5 different colours: Black, White, Red, Blue, Grey) | 5 Spools (5 kg) | **Consumable** | | |
| 134 | **Sealed Filament Storage Containers** | Moisture-proof airtight filament storage boxes with reusable silica gel desiccants | 5 Units | **Permanent Asset** | | |
| 135 | **Prototyping Corrugated Cardboard Sheets**| Heavy-duty 3-ply corrugated cardboard sheets for rapid structural chassis mockups | 5 Sheets | **Consumable** | | |
| 136 | **Prototyping Foam Core Boards** | Lightweight rigid 5mm white foam core boards for precision enclosure fabrication | 5 Boards | **Consumable** | | |
| 137 | **Wooden Popsicle Craft Sticks** | Natural birch wood craft sticks for linkages, chassis beams, and structural assemblies | 100 Sticks | **Consumable** | | |
| 138 | **PVA Wood Adhesive Glue** | 500 ml bottles of fast-drying non-toxic PVA wood glue | 2 Bottles | **Consumable** | | |
| 139 | **Thick String & Heavy Rubber Bands** | 20m spool of multicolored thick cord + 100 heavy-duty elastic rubber bands | 5 Spools + 100 Bands | **Consumable** | | |

---

## 9. Educational Robotics, Mechanical Kits & DIY Drone Assembly Kit

| Item # | Kit / System Name | Technical Specifications & Inclusions | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 140 | **Complete Educational Robotics DIY Kit** | Microcontroller-based robotics kit with intelligent programmable brick/brain, chassis, infrared & ultrasonic sensors, gear motors, and software | 4 Kits | **Permanent Asset** | | |
| 141 | **Mechanical Modular Construction Kit** | Metal and ABS engineering building system (beams, plates, gears, pulleys, axles, wheels, compatible with servo motors) | 6 Kits | **Permanent Asset** | | |
| 142 | **Automobile Mechanism Kit** | Automotive mechanism learning set featuring working rack-and-pinion steering, differential gears, transmission, and suspension | 1 Kit | **Permanent Asset** | | |
| 143 | **Educational DIY Drone Assembly Kit (Unassembled)** | **100% Unassembled DIY Quadcopter Kit** (NOT pre-built); includes modular composite frame, 6 motors (4 active + 2 spare), 12 balanced nylon propellers (4 active + 8 spare) with $360^\circ$ crash guards, STM32F4-based flight controller with 6-axis gyro/accelerometer & barometer, 2x LiPo flight batteries (1 active + 1 spare), USB balance charger, LiPo fireproof safety bag, 2.4 GHz 6-channel radio transmitter & receiver, and step-by-step DIY assembly guide | 1 Kit | **Permanent Asset** | | |

---

## 10. Laboratory Safety Equipment & Protective Gear

| Item # | Safety Item Name | Technical Specifications & Safety Ratings | Required Quantity | Asset Type | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 144 | **Clear Safety Goggles** | Polycarbonate high-impact scratch-resistant safety goggles (EN166 / ANSI Z87.1 certified); un-tinted clear lens | 50 Units | **Permanent Asset** | | |
| 145 | **Protective Workshop Work Gloves** | Medium-size latex/nitrile coated work grip gloves for handling sharp sheet metals, drills, and hot tools | 15 Pairs | **Consumable** | | |
| 146 | **Particulate Safety Dust & Fume Masks** | 80% particulate filtration efficiency masks for soldering flux fumes and workshop wood/drill dust | 30 Units | **Consumable** | | |
| 147 | **Comprehensive Lab First-Aid Kit** | Portable wall-mountable first-aid station with sterile bandages, burn gel dressing, antiseptic liquid, eyewash, and surgical tape | 2 Kits | **Permanent Asset** | | |
| 148 | **Portable Fire Extinguishers (ABC Dry Powder)** | 2 kg capacity ABC dry chemical powder portable fire extinguisher with pressure gauge; rated for electrical and material fires | 2 Units | **Permanent Asset** | | |

---
---

## 11. Older & Deprecated Legacy Modules (Moved Out of Primary Order)

> **Procurement Advisory for Principal & Vendor**:  
> The items in the table below are **older legacy models** from historical equipment lists. They have been moved out of the active classroom requisition because they are obsolete, power-inefficient, or unreliable in today's technological environment:  
> - **SIM900 GSM Shield**: Obsolete 2G network hardware; telecom operators are phasing out 2G, and it requires huge 2A current spikes that crash school microcontroller setups.  
> - **433 MHz / 315 MHz ASK RF Pair**: Crude super-regenerative coil radios with no error-checking, extreme interference, and poor range (superseded by modern 2.4 GHz NRF24L01+).  
> - **HC-05 Classic Bluetooth**: Obsolete Bluetooth 2.0 (SPP); incompatible with modern iOS/iPhones (superseded by BLE 4.0/5.0).  
> - **L293D / L298 Motor Drivers**: Outdated 1980s bipolar junction transistor (BJT) drivers with huge internal voltage drops (losing 2V to 2.5V as heat), draining batteries quickly (superseded by high-efficiency MOSFET TB6612FNG drivers).

| Item # | Deprecated Module Name | Original Specifications | Required Quantity | Modern Replacement in Primary Order | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|---|:---:|:---:|
| 149 | **GSM / GPRS Cellular Module (SIM900)** | Quad-Band 850/900/1800/1900 MHz 2G cellular shield; UART serial AT command control; standard SIM socket *(Obsolete 2G technology)* | 6 Units | **ESP32 Wi-Fi / Cloud IoT** (Item #01) | | |
| 150 | **433 MHz / 315 MHz RF Transmitter & Receiver** | ASK wireless super-regenerative RF pair; range 20–100m *(High RF noise, no packet filtering, unreliable)* | 15 Pairs | **NRF24L01+ 2.4 GHz PA+LNA** (Item #57) | | |
| 151 | **Bluetooth Serial Module (HC-05)** | 2.4 GHz Bluetooth V2.0+EDR classic module; SPP serial *(Incompatible with iOS/iPhones)* | 15 Units | **BLE HM-10 / AT-09 Module** (Item #58) | | |
| 152 | **L293D Dual H-Bridge Motor Driver Module** | BJT-based H-bridge board; max 600mA/ch; high 2V internal voltage drop, heavy heat dissipation | 15 Units | **TB6612FNG MOSFET Driver** (Item #53) | | |
| 153 | **L298P High-Power Motor Shield** | Arduino Uno form-factor shield featuring L298 dual full-bridge BJT driver; heavy heat dissipation | 15 Units | **TB6612FNG / PCA9685 Drivers** (Items #53 & #54) | | |

---

## 12. Discrete Electronic Components & Single Parts (Require Manual Circuit Building)

> **Important Category Classification**:  
> The items in the table below are **discrete / single components** (bare passives, loose semiconductors, through-hole LEDs, and unmounted sensors).  
> Unlike the ready-to-use breakout modules listed in Sections 2 to 5, these items **do not come with a PCB board, comparator, or direct 3-pin/4-pin headers**. They require manual circuit construction on a solderless breadboard or perfboard using resistors, capacitors, and jumper wires.  
> They are separated here so the Principal and Vendor can clearly distinguish **plug-and-play microcontroller modules** from **basic electronic components**.

| Item # | Discrete Component Name | Technical Specifications & Model Details | Required Quantity | Component Nature | Vendor Unit Price (₹) | Total Quoted Price (₹) |
|:---:|---|---|---:|:---:|:---:|:---:|
| 154 | **ATmega16U2 Standalone IC** | 8-bit AVR microcontroller bare IC in DIP/SOIC package; 16 KB flash; USB controller capability; operating voltage $2.7\text{V} - 5.5\text{V}$ *(Requires custom clock, capacitors & circuit)* | 15 Units | Discrete Bare IC | | |
| 155 | **Assorted Resistor Kit** | 30 carbon-film axial resistors each across 20 standard values: $0\,\Omega, 1.5\,\Omega, 4.7\,\Omega, 10\,\Omega, 47\,\Omega, 100\,\Omega, 220\,\Omega, 330\,\Omega, 470\,\Omega, 680\,\Omega, 1\,\text{k}\Omega, 2.2\,\text{k}\Omega, 3.3\,\text{k}\Omega, 4.7\,\text{k}\Omega, 10\,\text{k}\Omega, 22\,\text{k}\Omega, 47\,\text{k}\Omega, 100\,\text{k}\Omega, 330\,\text{k}\Omega, 1\,\text{M}\Omega$; power rating $0.25\text{W} - 1\text{W}$ | 30 Kits (600/kit = 18,000 pcs) | Discrete Passives | | |
| 156 | **Assorted Capacitor Kit** | 20 ceramic/electrolytic capacitors each across 10 values: $10\,\text{pF}, 22\,\text{pF}, 100\,\text{pF}, 1\,\text{nF}, 10\,\text{nF}, 100\,\text{nF}\,(104), 1\,\mu\text{F}, 10\,\mu\text{F}, 100\,\mu\text{F}, 1000\,\mu\text{F}$; voltage rating 16V–50V | 30 Kits (200/kit = 6,000 pcs) | Discrete Passives | | |
| 157 | **Diodes and Transistors Kit** | 25 assorted components across 4 standard types: BC547 / 2N3904 (NPN), BC557 / 2N3906 (PNP), 1N4148 (Fast silicon signal diode), 1N4001/1N4007 (1A 50V–1000V rectifier diodes) | 5 Kits (125 pcs total) | Discrete Semiconductors | | |
| 158 | **Linear Voltage Regulators (LM78XX)** | 3-terminal linear IC regulators in TO-220 package: LM7805 (+5V), LM7809 (+9V), LM7812 (+12V); 1.5A peak current *(Requires filter caps)* | 45 Units | Discrete Linear IC | | |
| 159 | **Timer IC — LM555** | Precision timing bipolar IC; DIP-8 package; operating voltage $4.5\text{V} - 16\text{V}$; astable/monostable timer modes *(Requires external R-C circuit)* | 45 Units | Discrete Timer IC | | |
| 160 | **LEDs — Red (5mm)** | High-brightness 5mm round diffused red through-hole LED; forward voltage $1.8\text{V} - 2.2\text{V}$; current $20\,\text{mA}$ | 1,500 Units | Discrete Optical Component | | |
| 161 | **LEDs — Green (5mm)** | High-brightness 5mm round diffused green through-hole LED; forward voltage $2.0\text{V} - 2.4\text{V}$; current $20\,\text{mA}$ | 1,500 Units | Discrete Optical Component | | |
| 162 | **LEDs — Blue (5mm)** | High-brightness 5mm round clear/diffused blue through-hole LED; forward voltage $2.8\text{V} - 3.2\text{V}$; current $20\,\text{mA}$ | 1,500 Units | Discrete Optical Component | | |
| 163 | **LEDs — Yellow (5mm)** | High-brightness 5mm round diffused yellow through-hole LED; forward voltage $2.0\text{V} - 2.4\text{V}$; current $20\,\text{mA}$ | 1,500 Units | Discrete Optical Component | | |
| 164 | **LEDs — White (5mm)** | Ultra-bright 5mm clear white through-hole LED; forward voltage $3.0\text{V} - 3.4\text{V}$; current $20\,\text{mA}$ | 1,500 Units | Discrete Optical Component | | |
| 165 | **RGB LEDs (5mm)** | 4-pin 5mm diffused RGB LED (Common Cathode / Common Anode); operating range $3.0\text{V} - 5.0\text{V}$ *(Requires 3 current-limiting resistors)* | 600 Units | Discrete Optical Component | | |
| 166 | **Button & Switch Assortment Set** | 100 assorted loose switches per pack: tactile momentary push buttons, SPDT slide switches, rocker switches, micro switches, and toggle switches | 5 Sets (500 switches) | Discrete Mechanical Switches | | |
| 167 | **Piezoelectric Transducer Plate** | 40mm copper-backed piezoelectric ceramic disc element with pre-soldered wire leads *(Requires external amplifier/ADC circuit)* | 30 Units | Bare Transducer Element | | |
| 168 | **Temperature Sensor (LM35)** | Precision linear analog temperature sensor; TO-92 3-pin transistor package; scale factor $10\,\text{mV}/^\circ\text{C}$ *(Bare analog component without breakout PCB)* | 8 Units | Bare Analog IC | | |
| 169 | **Force Sensitive Resistor (FSR)** | $1.75\times 1.5$ inch square polymer thick-film pressure sensor; resistance varies inversely with applied force ($100\text{g} - 10\text{kg}$) *(Requires voltage-divider resistor)* | 6 Units | Bare Resistive Sensor | | |
| 170 | **Flexion Bend Sensor** | 2.2-inch flexible carbon-resistive bend sensor; nominal flat resistance $25\,\text{k}\Omega$ *(Requires voltage-divider resistor circuit)* | 8 Units | Bare Resistive Sensor | | |
| 171 | **Miniature Active Buzzer — Small** | 5V DC active piezoelectric buzzer (2-pin through-hole component with internal oscillator) | 60 Units | Bare Audio Component | | |
| 172 | **Loud Active Buzzer — Big** | 5V–12V DC high-decibel active buzzer (2-lead round casing, 85+ dB output) | 60 Units | Bare Audio Component | | |
| 173 | **Miniature Haptic Vibrating Motor** | 10g coin/cylindrical vibration motor with eccentric mass; $1.5\text{V} - 3.7\text{V}$ DC *(Requires transistor and flyback diode driver circuit to connect to GPIO)* | 30 Units | Bare Actuator Component | | |
| 174 | **IR Transmitter & Receiver Set (TSOP1738)** | 38 kHz carrier frequency infrared receiver photodiode IC paired with 940nm high-output IR emitting LED *(Bare discrete optical components)* | 15 Pairs | Bare Optical IC & Diode | | |

---

### Procurement Terms & Instructions for Vendor Quotation:
1. **Unassembled Drone Requirement**: Item #143 must be delivered strictly as an unassembled kit with extra motors, extra propellers, dual batteries, and STM32 flight controller as specified. Pre-built/RTF drones will be rejected.
2. **Modern Module Standards**: All sensor modules, wireless boards, display modules, and motor drivers in Sections 1 through 5 must feature onboard regulation and logic level compatibility with 3.3V / 5V systems (Arduino and ESP32).
3. **Quotation Validity**: Vendor quotation must be valid for a minimum of 60 days.
4. **Warranty**: Minimum 1-year standard warranty on all permanent capital assets (DSO, Multimeters, Soldering Stations, Power Tools, 3D Printer, UPS).

---

**Submitted by**:  
*ATL In-Charge / Electronics Instructor*  
Date: ________________________  
Signature: ___________________  

**Approved by**:  
*Principal / Head of Institution*  
Date: ________________________  
Signature & Seal: ____________  
