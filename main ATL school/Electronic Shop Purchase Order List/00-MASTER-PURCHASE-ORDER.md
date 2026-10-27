# Atal Tinkering Lab (ATL) — Official Procurement Requisition & Vendor Purchase Order

> **To**: The School Principal / Institutional Procurement Committee  
> **From**: ATL Lab In-Charge & Electronics Instructor  
> **Target Vendor**: Electronic Component & Educational Hardware Supplier  
> **Lab Capacity**: 90 Students (Batch Working Capacity)  
> **Source Base**: Official ATL Equipment Guidelines (`ATL_Equipment_List_90_students.md`)  
> **Date of Requisition**: October 2026  

---

### Executive Procurement Summary for Principal & Vendor

This purchase order is structured specifically for modern electronic component distributors and hardware suppliers. All items have been deduplicated, modernized to current technological standards, balanced with practical classroom quantities (high-volume items scaled to sensible lab packs of 2 to 5, single-piece machine tools kept to 1 unit, and specific cell battery packs provided at 30 units), and organized into:

1. **Section 1 — All Microcontrollers, ESP32-S3 Boards & Plug-and-Play Breakout Modules**: Unified master table of all development boards (ESP32-S3 Dual-Core, Arduino, Raspberry Pi 3B+) and all professional breakout modules (sensors, OLED displays, MOSFET & shield drivers, opto-relays, RTC timers, SD storage, TP4056/4S chargers, wireless) designed for direct jumper-wire connection to ESP32, Arduino, and Raspberry Pi via 3.3V/5V logic, I2C, SPI, UART, and GPIO.
2. **Sections 2 to 6 — Prototyping Hardware, Batteries, Tools, Materials & Safety Gear**: Prototyping interconnects, pre-formed jumper kits, 18650 cell holders, multi-slot chargers, 30-piece rechargeable battery packs, mechanical gear motors/servos, diagnostic instruments (DSO, Pen DMM, Continuity tester), soldering aids (helping hands, 360° PCB clamp, magnetic silicone mat), precision cordless screwdriver kit, 3D printing supplies, and laboratory safety equipment.
3. **Dedicated Bottom Sections (Sections 7 & 8)**:
   - **Section 7**: Older / Deprecated Legacy Modules (2G GSM SIM900, noisy 433 MHz RF, classic Bluetooth HC-05, bare BJT drivers) moved out of the active order so the school does not purchase obsolete hardware.
   - **Section 8**: Discrete single electronic components (bare passives in 3–5 kits, loose ICs, through-hole LEDs, and unmounted sensors) used strictly for manual breadboard circuit building.

---

## 1. All Microcontrollers & Plug-and-Play Breakout Modules (ESP32, Arduino & Raspberry Pi Ecosystem)

> **Module Standard Note**:  
> Every module in this table is a **complete breakout module** with onboard regulation, signal conditioning, level shifting, and standard 2.54mm pin headers.  
> They connect directly to **ESP32, Arduino Uno/Nano/Mega, and Raspberry Pi** using standard DuPont jumper wires without requiring discrete external driver circuits.

| Item # | Module / Controller Name | Technical Specifications & Model Details | Bus / Interface Standard | Microcontroller Compatibility | Required Quantity | Asset Type |
|:---:|---|---|---|---|---:|:---:|
| 01 | **ESP32 DevKit V1 (30-Pin / 38-Pin)** | 32-bit Dual-Core Xtensa LX6 @ 240 MHz; onboard 2.4 GHz Wi-Fi + Bluetooth BLE 4.2/5.0; 520 KB SRAM; 4 MB Flash; 3.3V logic; capacitive touch, ADC, DAC, PWM on all GPIOs | Wi-Fi / BLE / Micro-USB | **Primary IoT & AI Controller** | 16 Units | **Consumable** |
| 02 | **Seeed Studio XIAO ESP32-S3 Development Board** | WiFi & Bluetooth 5.0 Microcontroller Board with integrated battery charging; ESP32-S3 dual-core Xtensa 32-bit LX7 @ 240 MHz; ultra-compact thumb-sized form factor; ideal for IoT, robotics, wearable & smart device projects | Wi-Fi / BLE 5.0 / USB-C | **Compact IoT & Wearables** | 5 Units | **Consumable** |
| 03 | **Espressif ESP32-S3-DevKitC-1-N8R8 Development Board** | Flagship ESP32-S3 development board featuring ESP32-S3-WROOM-1 module; 8MB Octal SPI Flash + 8MB Octal PSRAM; 2.4 GHz Wi-Fi (802.11 b/g/n) + Bluetooth 5 (LE); dual USB-C ports (OTG + UART); hardware vector instructions for TinyML/Edge AI | Dual USB-C / Wi-Fi / BLE | **Edge AI & Advanced IoT** | 5 Units | **Consumable** |
| 04 | **Arduino Uno R3 (or equivalent)** | ATmega328P 8-bit AVR; 5V; 14 Digital I/O (6 PWM); 6 Analog inputs; 16 MHz; includes protective casing and USB Type-A to Type-B programming cable | USB Type-B / UART | **Primary Junior Controller** | 30 Units | **Consumable** |
| 05 | **Arduino Nano (or equivalent)** | ATmega328P 8-bit AVR; 5V; breadboard DIP form factor; 14 Digital I/O; 8 Analog inputs; Mini-USB cable included | Mini-USB / UART | **Breadboard Prototyping** | 15 Units | **Consumable** |
| 06 | **Arduino Mega 2560 (or equivalent)** | ATmega2560 8-bit AVR; 5V; 54 Digital I/O (15 PWM); 16 Analog inputs; 4 UART serial ports; USB cable included | USB Type-B / 4x UART | **Complex Multi-Sensor Robotics** | 10 Units | **Consumable** |
| 07 | **Raspberry Pi 3 Model B+** | Quad Core 64-bit Broadcom ARM @ 1.4 GHz; 1 GB RAM; Wi-Fi & BLE; 40-pin GPIO; 4x USB; HDMI; 5V 2.5A power supply & protective enclosure | 40-pin GPIO / HDMI / USB | **Single-Board Computer (Linux/Python)** | 6 Units | **Consumable** |
| 08 | **Raspberry Pi 5 (2GB RAM)** | 64-bit Quad-Core ARM Cortex-A76 @ 2.4 GHz; 2 GB LPDDR4X SDRAM; VideoCore VII GPU; Dual 4Kp60 micro-HDMI; PCIe 2.0 interface; Gigabit Ethernet, Dual-band 802.11ac Wi-Fi, Bluetooth 5.0 / BLE; 2x USB 3.0, 2x USB 2.0; USB-C 5V 5A PD input | 40-pin GPIO / Dual Micro-HDMI / PCIe | **Next-Gen Flagship SBC (AI/Linux/Vision)** | 2 Units | **Consumable** |
| 09 | **Raspberry Pi 4 Model B (2GB RAM)** | 64-bit Quad-Core ARM Cortex-A72 @ 1.5 GHz; 2 GB LPDDR4 SDRAM; Dual 4Kp60 micro-HDMI displays; Gigabit Ethernet; 2.4/5.0 GHz Wi-Fi, Bluetooth 5.0; 2x USB 3.0, 2x USB 2.0; USB-C 5V 3A input | 40-pin GPIO / Dual Micro-HDMI / USB 3.0 | **Single-Board Computer (Linux/Robotics)** | 2 Units | **Consumable** |
| 10 | **Raspberry Pi Zero (v1.3)** | Single-Core ARM11 @ 1 GHz (BCM2835); 512 MB LPDDR2 RAM; mini-HDMI video; micro-USB OTG data port; micro-USB power; CSI camera connector; ultra-compact 65×30mm board size | 40-pin GPIO / Mini-HDMI / Micro-USB OTG | **Ultra-Compact Embedded Linux Computer** | 2 Units | **Consumable** |
| 11 | **Raspberry Pi Zero W (with WiFi)** | Single-Core ARM11 @ 1 GHz; 512 MB RAM; onboard 802.11 b/g/n Wi-Fi + Bluetooth 4.1 / BLE; mini-HDMI; micro-USB OTG port; CSI camera connector; ultra-compact form factor | 40-pin GPIO / Mini-HDMI / Wi-Fi & BLE | **Compact Wireless IoT & Linux Edge Node** | 2 Units | **Consumable** |
| 12 | **Raspberry Pi Zero 2 W** | 64-bit Quad-Core ARM Cortex-A53 @ 1 GHz (RP3A0 SiP); 512 MB LPDDR2 RAM; onboard 2.4 GHz Wi-Fi + Bluetooth 4.2 / BLE; mini-HDMI; micro-USB OTG; CSI-2 camera connector; up to 5x faster performance | 40-pin GPIO / Mini-HDMI / Wi-Fi & BLE | **High-Performance Mini Linux Computer** | 2 Units | **Consumable** |
| 13 | **HIKVISION Extreme 16GB microSDXC Memory Card (Class 10, V30)** | High-speed 16GB Class 10, V30 MicroSD card; 92 MB/s read speed, 15 MB/s write speed; compatible with smartphones, cameras, CCTV; drop protection; 3-year warranty; **Dedicated for Raspberry Pi 3B+ Single-Board Computer (Operating System Boot & Local Storage)** | MicroSD Slot | **Raspberry Pi 3B+ OS Boot & Storage** | 10 Units | **Consumable** |
| 14 | **NodeMCU v3 (ESP8266)** | ESP8266 Wi-Fi SoC with onboard CP2102/CH340 USB-UART; 3.3V logic; integrated TCP/IP stack; PCB trace antenna | Wi-Fi / Micro-USB | **ESP Wi-Fi Prototyping** | 5 Units | **Consumable** |
| 15 | **WeMos D1 R2 (ESP8266)** | Arduino Uno form-factor Wi-Fi development board powered by ESP8266; 5V–12V barrel jack input; 11 Digital I/O; 1 Analog input | Wi-Fi / Micro-USB | **Arduino-Format Wi-Fi Board** | 5 Units | **Consumable** |
| 16 | **0.96-inch I2C OLED Display Module (SSD1306)** | 128×64 monochrome graphic OLED display; SSD1306 driver; 4-pin interface (VCC, GND, SCL, SDA); 3.3V–5V DC; high-contrast text and graphics *(Directly connects to Arduino, ESP32, and Raspberry Pi)* | I2C (4-pin) | ESP32 / Arduino / Raspberry Pi | 15 Units | **Consumable** |
| 17 | **Robocraze 0.91 inch Blue OLED Display Module** | 128×32 ultra-compact blue OLED display; I2C/IIC serial interface (VCC, GND, SCL, SDA); 3.3V–5V DC compatible; SSD1306 driver; for Arduino, ESP32, and Raspberry Pi | I2C (4-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 18 | **4-Digit 7-Segment Display Module (TM1637)** | 0.36-inch 4-digit red display with colon dots; onboard TM1637 driver; 2-wire serial bus (CLK, DIO); 5V/3.3V | 2-Wire Serial (4-pin) | ESP32 / Arduino / Raspberry Pi | 15 Units | **Consumable** |
| 19 | **8×8 LED Dot Matrix Module (MAX7219)** | 64 bright red LEDs in 8×8 matrix; MAX7219 serial driver; 5-pin SPI interface; daisy-chainable | SPI (5-pin) | ESP32 / Arduino / Raspberry Pi | 5 Units | **Consumable** |
| 20 | **LDR Light Sensor Module** | 5mm photoresistor with onboard LM393 voltage comparator, sensitivity trimmer pot, and dual Digital/Analog outputs (3.3V–5V compatible) | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 25 Units | **Consumable** |
| 21 | **Digital Temperature & Humidity (DHT11)** | Single-bus digital output sensor module with pull-up resistor onboard; temp range 0–50°C; humidity range 20–90% RH; supply 3.3V–5V | 1-Wire Digital (3-pin) | ESP32 / Arduino / Raspberry Pi | 25 Units | **Consumable** |
| 22 | **Analog Humidity Sensor Module** | Resistance-based relative humidity sensor probe board; range 20–95% RH; linear analog voltage response | Analog (3-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 23 | **Soil Moisture Sensor Module** | Double-sided nickel-plated fork probe with LM393 comparator breakout module; analog and digital outputs | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 8 Units | **Consumable** |
| 24 | **Raindrop Detection Board** | 50×40 mm nickel-plated rain sensor board with separate control module (LM393 comparator and trimmer) | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 8 Units | **Consumable** |
| 25 | **Turbine Water Flow Sensor** | Hall-effect liquid flow meter; 1–30 L/min range; 5V DC; pulse frequency output ($f = 7.5\times Q$) | Digital Pulse (3-pin) | ESP32 / Arduino / Raspberry Pi | 5 Units | **Consumable** |
| 26 | **PIR Human Motion Detector (HC-SR501)** | Pyroelectric infrared sensor module; dome Fresnel lens; range 3–7m; adjustable delay and sensitivity; 3.3V logic output | Digital GPIO (3-pin) | ESP32 / Arduino / Raspberry Pi | 15 Units | **Consumable** |
| 27 | **Ultrasonic Distance Sensor (HC-SR04)** | 40 kHz ultrasonic transmitter and receiver module; range 2 cm – 400 cm; precision 3mm; 4-pin header (VCC, Trig, Echo, GND) | Digital Pulse (4-pin) | ESP32 / Arduino / Raspberry Pi | 25 Units | **Consumable** |
| 28 | **IR Proximity / Obstacle Avoidance Module** | 940nm IR emitter and photodiode pair; onboard LM393 comparator; detection distance 2–30 cm; 35° angle | Digital GPIO (3-pin) | ESP32 / Arduino / Raspberry Pi | 15 Units | **Consumable** |
| 29 | **8-Channel IR Tracking Sensor Array** | 8-sensor reflective infrared bar with onboard comparators; 8 individual digital output pins for line-following robotics | Multi Digital (10-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 30 | **Sound Detection Microphone Module** | Electret condenser microphone with LM393 amplifier and digital threshold sensitivity trimmer | Digital GPIO (3-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 31 | **High-Sensitivity Big Sound Module** | Large electret microphone capsule module with dual analog sound waveform and digital trigger outputs | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 15 Units | **Consumable** |
| 32 | **Capacitive Touch Module (TTP223B)** | Single-key capacitive digital touch switch; momentary / toggle output mode selectable; supply 2.0V–5.5V DC | Digital GPIO (3-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 33 | **Touch Sensor Module (TTP22X)** | Multi-purpose capacitive contact sensor with low standby power; operating voltage 2.4V–5.5V DC | Digital GPIO (3-pin) | ESP32 / Arduino / Raspberry Pi | 6 Units | **Consumable** |
| 34 | **Metal Touch Sensor Module (KY-036)** | Metal touch sensor with Darlington transistor and comparator; senses human skin touch on metal lead | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 6 Units | **Consumable** |
| 35 | **12-Channel Capacitive Touch (MPR121)** | MPR121 capacitive touch controller; 12 independent sensing inputs; I2C digital interface; 3.3V logic | I2C (4-pin) | ESP32 / Arduino / Raspberry Pi | 15 Units | **Consumable** |
| 36 | **Pulse Heart-Rate Sensor** | Optical photoplethysmography (PPG) pulse sensor with built-in ambient noise cancellation; 3.3V–5V DC | Analog (3-pin) | ESP32 / Arduino / Raspberry Pi | 5 Units | **Consumable** |
| 37 | **Color Recognition Sensor (TCS3200)** | TCS3200 programmable color light-to-frequency converter with 4 white LEDs; reads Red, Green, Blue, Clear filters | Frequency Out (8-pin) | ESP32 / Arduino / Raspberry Pi | 5 Units | **Consumable** |
| 38 | **ADXL345 3-Axis Digital Accelerometer Module** | 3-axis digital accelerometer; high resolution (13-bit) measurement up to $\pm 16g$; ultra-low power; SPI and I2C digital interfaces; 3.3V/5V compatible | I2C / SPI | ESP32 / Arduino / Raspberry Pi | 5 Units | **Consumable** |
| 39 | **MPU6050 6-Axis Gyroscope and Accelerometer Sensor Module with I2C Interface and Digital Processor, for Robotics, Metal and Plastic** | 6-Axis motion tracking module integrating 3-axis gyroscope ($\pm 250, \pm 500, \pm 1000, \pm 2000^\circ/\text{s}$) and 3-axis accelerometer ($\pm 2g, \pm 4g, \pm 8g, \pm 16g$) with onboard Digital Motion Processor (DMP); I2C interface; operating voltage 3.3V–5V DC with onboard low-dropout regulator; essential for self-balancing robots, gesture navigation, flight stabilization, metal and plastic chassis robotics | I2C (4-pin/8-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 40 | **3-Axis Digital Magnetometer** | 3-axis magnetoresistive compass module (HMC5883L / QMC5883L); I2C interface; 12-bit ADC; $\pm 8$ Gauss range | I2C (4-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 41 | **Laser Diode Emitter Module** | 650nm red point laser diode module with onboard current-limiting resistor; output 5mW; 5V DC | Digital GPIO (3-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 42 | **MQ-2 Smoke & Combustible Gas Sensor** | Wide-spectrum gas sensor module for methane, LPG, smoke, hydrogen; 5V heater with analog/digital comparator outputs | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 43 | **MQ-3 Alcohol Vapor Gas Sensor** | High sensitivity to ethanol alcohol vapor; ideal for breathalyzer circuits; onboard LM393 comparator | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 44 | **MQ-4 Methane & Natural Gas Sensor** | High sensitivity to methane ($\text{CH}_4$) and natural gas leaks; fast response; onboard LM393 comparator | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 45 | **MQ-5 LPG & Town Gas Sensor** | High sensitivity to LPG and compressed natural gas (CNG); onboard LM393 comparator | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 46 | **MQ-6 Propane & Butane Gas Sensor** | Specialized high sensitivity for domestic LPG and butane gas cylinder leak detection; onboard LM393 comparator | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 47 | **MQ-7 Carbon Monoxide (CO) Sensor** | High sensitivity to toxic carbon monoxide gas; dual-temperature cycling heater; onboard LM393 comparator | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 48 | **MQ-8 Hydrogen Gas Sensor** | Specialized sensitivity to pure hydrogen gas ($\text{H}_2$); low sensitivity to alcohol/smoke; onboard LM393 comparator | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 49 | **MQ-135 Air Quality & Pollution Sensor** | Environmental air quality detector for ammonia ($\text{NH}_3$), $\text{NO}_x$, alcohol, benzene, and smoke; onboard LM393 | Digital / Analog (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 50 | **TB6612FNG Dual Motor Driver Module for Arduino/Other Microcontroller** | **High-Efficiency Dual MOSFET H-Bridge Driver Module**; 1.2A continuous / 3.2A peak per channel; ultra-low internal resistance; runs cool without heatsink; operating logic 2.7V–5.5V; motor voltage 4.5V–13.5V; PWM speed control *(Replaces outdated L293D / L298)* | PWM / Digital (16-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 51 | **SP Electron L293D Motor Driver Shield For Microcontrollers** | 4-Channel driver shield using bipolar pulse-width modulation; plugs directly onto Arduino Uno / Mega headers; drives up to 4 DC motors or 2 stepper motors with screw terminal power connections | Direct Shield Header | Arduino Uno / Arduino Mega | 5 Units | **Consumable** |
| 52 | **PCA9685 16-Channel 12-bit PWM / Servo Driver** | 16-channel independent PWM controller with I2C bus; driven by only 2 microcontroller pins (SDA, SCL); 12-bit resolution; handles 16 servos | I2C (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 53 | **ULN2003 Stepper Motor Driver Board with 28BYJ-48 Stepper** | 5V unipolar 4-phase stepper motor paired with ULN2003 Darlington driver board with 4-phase status indicator LEDs | Digital GPIO (4-pin) | ESP32 / Arduino / Raspberry Pi | 10 Sets | **Consumable** |
| 54 | **1-Channel 5V/3.3V Relay Module with Optocoupler & Trigger Selector** | 5V DC relay module with PC817 optocoupler isolation, transistor driver, status LED, and **High/Low level trigger selection jumper**; 10A 250V AC | Digital GPIO (3-pin) | ESP32 / Arduino / Raspberry Pi | 15 Units | **Consumable** |
| 55 | **2-Channel 5V/3.3V Relay Module with Optocoupler & Trigger Selector** | Dual 5V DC relay board with independent optoisolated inputs, status LEDs, High/Low trigger selection jumpers, and NO/COM/NC terminals | Digital GPIO (4-pin) | ESP32 / Arduino / Raspberry Pi | 15 Units | **Consumable** |
| 56 | **4 Channel 5V Relay Module with Optocoupler Isolation** | 4-Channel 5V relay module with optocoupler isolation (10A 250V AC / 30V DC), Songle SRD-05VDC-SL-C with individual status LEDs for UNO, Raspberry Pi, ESP32, robotics & home automation | Digital GPIO (6-pin) | ESP32 / Arduino / Raspberry Pi | 5 Units | **Consumable** |
| 57 | **Robocraze 8 Channel Relay Module 5V with Optocoupler Isolation** | Arduino Compatible PLC Control Board; 8 independent 10A high-current relays with optocoupler isolation, status indicator LEDs, and screw terminal blocks for smart home automation, IoT, robotics & industrial control | Digital GPIO (10-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 58 | **TP4056 USB-C 5V 1A Lithium Battery Charging Module** | Lithium battery charging board with **dual protection IC** (DW01A + 8205A MOSFET); 18650 Li-ion / LiPo charger with overcharge, overdischarge & overcurrent protection; USB-C input | USB-C / Solder Pads | 18650 Li-ion / Microcontroller Circuits | 15 Units | **Consumable** |
| 59 | **ROBOWAY 4S 4A Polymer Lithium Ion Charger Type-C (Pack of 4)** | 14.8V 18650 battery charging module; USB-C input with boost converter; LED charging status indicator; integrated overcharge and balanced protection for 4-series Li-ion battery packs | USB-C / Solder Pads | 4S (14.8V–16.8V) Battery Power Systems | 2 Packs (8 Units) | **Consumable** |
| 60 | **Electronic Spices LM2596 DC-DC Step Down Power Supply Module (3A, Pack of 2)** | High-efficiency 3A switching voltage regulator buck converter; wide input voltage 4.0V–40V DC; adjustable output 1.3V–37V DC (supports 24V, 12V, 5V, 3.3V/3V rails); high efficiency (>90%); multi-turn trimmer pot; powers ESP32, Arduino, servos & motors from batteries | DC In / DC Out Terminals | ESP32 / Arduino / Raspberry Pi / Motors | 5 Packs (10 Units) | **Consumable** |
| 61 | **Robocraze SD Card Module for Arduino SPI Interface (3.3V/5V Level Shifter)** | SPI Interface Micro SD / MicroSDHC Reader Writer Module with **onboard 3.3V/5V Level Shifter**; data logging and storage expansion board for ESP32, Arduino, and Raspberry Pi robotics & IoT projects | SPI (6-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 62 | **Robocraze DS3231 RTC Module \| AT24C32 Real Time Clock Memory Board** | High-precision Real-Time Clock with **integrated AT24C32 EEPROM memory board**; I2C interface; built-in Temperature Compensated Crystal Oscillator (TCXO); battery-backed (CR2032); essential for Automated School Bell & scheduled IoT projects | I2C (4-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 63 | **NRF24L01+PA+LNA Wireless RF Transceiver Module Long Range 1100M with SMA Antenna (2-Pack)** | Long-range 2.4 GHz digital packet radio transceiver with Power Amplifier (PA) + Low Noise Amplifier (LNA) and **external SMA duck antenna**; 2 Mbps low power signal amplifier; up to 1,100 metres line-of-sight range; SPI bus; for Uno, Arduino & ESP32 wireless communication projects | SPI (8-pin) | ESP32 / Arduino / Raspberry Pi | 5 Packs (10 Units) | **Consumable** |
| 64 | **Bluetooth Low Energy (BLE) Module (HM-10 / AT-09)** | 2.4 GHz Bluetooth 4.0/5.0 BLE transceiver; UART serial; compatible with **both Android and Apple iOS smartphones**; 3.3V/5V tolerant | UART Serial (4-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 65 | **RFID Reader Module & Tag Kit (RC522)** | 13.56 MHz contactless RFID/NFC reader board (MFRC522); SPI bus; includes 1x RFID contactless card and 1x key fob tag | SPI (8-pin) | ESP32 / Arduino / Raspberry Pi | 10 Kits | **Consumable** |
| 66 | **GPS Satellite Module (u-blox GY-NEO6MV2 / NEO-8M)** | High-sensitivity satellite receiver module with active ceramic patch antenna; EEPROM config retention; 9600 baud serial NMEA output | UART Serial (4-pin) | ESP32 / Arduino / Raspberry Pi | 3 Units | **Consumable** |
| 67 | **Voice Recording & Playback Module (ISD1820)** | ISD1820 chip board; 10-second voice recording; onboard microphone; playback pushbuttons; includes 8$\Omega$ 0.5W speaker | Digital GPIO (4-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |
| 68 | **Dual-Axis Analog Joystick Module** | Dual $10\,\text{k}\Omega$ potentiometers for X and Y axes with integrated momentary pushbutton switch; spring auto-return to center | Analog + Digital (5-pin) | ESP32 / Arduino / Raspberry Pi | 10 Units | **Consumable** |

---

## 2. Prototyping Hardware, Interconnects, Batteries, Storage & Power Supplies

| Item # | Item Description | Technical Specifications & Model Details | Required Quantity | Asset Type |
|:---:|---|---|---:|:---:|
| 69 | **Half-Size Solderless Breadboard (400 Tie-Points)** | 400 tie-point solderless breadboard with self-adhesive backing tape; dual power distribution buses | 30 Units | **Consumable** |
| 70 | **Full-Size Solderless Breadboard (800 Tie-Points)** | 830 tie-point solderless breadboard; dual center terminal strip with 4 power distribution rails; side interlocking tabs | 20 Units | **Consumable** |
| 71 | **Self-Adhesive Mini Proto Shield Breadboard** | Compact 170-point mini breadboard designed for Arduino Proto-Shield mounting | 15 Units | **Consumable** |
| 72 | **General-Purpose Perfboard (Zero-PCB) — Medium** | FR2 single-sided copper clad dotted prototype board; size $80\times 55\,\text{mm}$; 2.54mm hole spacing | 30 Units | **Consumable** |
| 73 | **General-Purpose Perfboard (Zero-PCB) — Large** | FR2 single-sided copper clad dotted prototype board; size $140\times 90\,\text{mm}$; 2.54mm hole spacing | 20 Units | **Consumable** |
| 74 | **Male Breakable Pin Headers (Berg Strips)** | 40-pin single row male headers; standard 2.54mm pitch; gold/tin plated; snappable to any pin length | 30 Strips | **Consumable** |
| 75 | **Female Pin Headers (Berg Strips)** | 40-pin single row female socket headers; standard 2.54mm pitch; straight mount | 30 Strips | **Consumable** |
| 76 | **Serplex 560pcs Jumper Wire Kit (14 Lengths, 2–125mm)** | High-quality pre-formed U-shape solderless breadboard jumper wire kit; 14 different standard wire lengths (2mm to 125mm); flexible insulated copper core in segmented plastic organizer box | 5 Kits | **Consumable** |
| 77 | **Jumper Wires — Male to Male (M-M)** | 20cm flexible multicolored 40-pin ribbon jumper wires with molded square male pins | 5 Packs (200 Wires) | **Consumable** |
| 78 | **Jumper Wires — Male to Female (M-F)** | 20cm flexible multicolored 40-pin ribbon jumper wires with male pin to female socket | 5 Packs (200 Wires) | **Consumable** |
| 79 | **Jumper Wires — Female to Female (F-F)** | 20cm flexible multicolored 40-pin ribbon jumper wires with female socket to female socket | 3 Packs (120 Wires) | **Consumable** |
| 80 | **Alligator Clip Test Leads** | Double-ended insulated alligator clip jumper cables; 12-inch length; multicolored jackets | 3 Packs (30 Leads) | **Consumable** |
| 81 | **Hook-Up Wire Spools** | Single-core insulated hook-up wire spools (100 metres Red + 100 metres Black per set) | 2 Sets (4 Spools) | **Consumable** |
| 82 | **Electronic Spices 2 x 3.7V 18650 Battery Holder with Wire Leads** | Dual 18650 Li-ion battery holder case (series connection for 7.4V DC nominal output) with color-coded positive/negative wire leads | 15 Units | **Consumable** |
| 83 | **Electronic Spices 18650 Battery Holder 3-Slot with Wire Leads** | 3-slot 18650 lithium battery holder box (3.7V × 3 = 11.1V / 12V output) with heavy-duty wire leads for robotics and motor supply | 10 Units | **Consumable** |
| 84 | **Electronic Spices Li-ion Battery Universal Charger (Dual 3.7V 18650)** | Universal dual-slot desktop battery charger for 3.7V 18650 cylindrical lithium rechargeable cells with automatic cut-off and LED status | 3 Units | **Consumable** |
| 85 | **AC to DC 4-Slot 18650 Battery Charger with LED Indicator** | Heavy-duty 4-slot intelligent AC mains charger for 3.7V rechargeable Li-ion 18650 batteries; independent channel charging with LED indicators | 2 Units | **Consumable** |
| 86 | **1200mAh Rechargeable Battery Pack** | High backup power rechargeable lithium cells for DIY electronics, power bank making, LED projects & portable gadgets *(30 Pieces as specified)* | **30 Pieces** | **Consumable** |
| 87 | **KP Original Ni-MH Rechargeable Battery (3.7V, 2200mAh)** | High-capacity flat top rechargeable cells for torch, Bluetooth speaker, power bank, LED, toys, solar lights, and student robotics *(30 Pieces as specified)* | **30 Pieces** | **Consumable** |
| 88 | **9V Battery Snaps with DC Barrel Plug** | Heavy-duty molded hard-plastic 9V battery connector clips terminating in a 5.5mm/2.1mm DC barrel jack | 20 Units | **Consumable** |
| 89 | **USB Programming Cables — Type-A to Type-B** | High-shielded 1.2m USB 2.0 cable for Arduino Uno and Arduino Mega | 10 Cables | **Consumable** |
| 90 | **USB Programming Cables — Type-A to Mini-B** | High-shielded 1.0m USB 2.0 cable for Arduino Nano and microcontroller boards | 10 Cables | **Consumable** |
| 91 | **USB to DC Barrel Jack Converter Cables** | 5V USB Type-A to 5.5mm $\times$ 2.1mm center-positive DC plug cable for running breadboards from power banks | 5 Cables | **Consumable** |
| 92 | **High-Capacity Portable Power Banks** | 10,000 mAh dual-port (5V 2.1A / 1A) portable rechargeable power bank with battery LED meter | 3 Units | **Consumable** |
| 93 | **Regulated DC Wall Power Adapter — 5V 2A** | 230V AC to 5V DC, 2000mA regulated switch-mode wall power adapter with 5.5mm DC barrel jack | 5 Units | **Consumable** |
| 94 | **Regulated DC Wall Power Adapter — 12V 2A** | 230V AC to 12V DC, 2000mA regulated switch-mode wall power adapter with 5.5mm DC barrel jack | 5 Units | **Consumable** |
| 95 | **Workshop Power Extension Boards** | Heavy-duty 5-socket universal surge-protected power extension strip with master switch, indicator, and 5m cord | 3 Units | **Consumable** |
| 96 | **Twisted-Pair Mains Distribution Wires** | Red-Black twisted flexible copper electrical distribution wire | 20 Metres | **Consumable** |
| 97 | **AC/DC Lamp Bulb Holders** | Standard insulated screw/bayonet socket bulb holders for bench load experiments | 5 Units | **Consumable** |
| 98 | **$4\times 4$ Matrix Membrane Keypad** | 16-key matrix keypad (keys 0–9, *, #, A–D); flexible flat ribbon cable with 8-pin 2.54mm pitch female socket | 10 Units | **Consumable** |

---

## 3. Mechanical Motors, Servos & Actuators

| Item # | Item Description | Technical Specifications & Model Details | Required Quantity | Asset Type |
|:---:|---|---|---:|:---:|
| 99 | **150 RPM Plastic BO Gear Motor with Wheel** | 3V–9V DC dual-shaft straight gearbox motor (150 RPM output speed @ 6V) complete with matching 65mm rubber-tread wheel | 30 Pairs | **Consumable** |
| 100 | **150 RPM BO Motor (Standalone)** | 3V–9V DC battery-operated single-shaft plastic gear motor (150 RPM) | 10 Units | **Consumable** |
| 101 | **12V High-Torque DC Geared Motor** | 12V DC heavy-duty metal-gear motor; 150 RPM output; 6mm D-shaped center output shaft | 10 Units | **Consumable** |
| 102 | **Submersible Mini Water Pump** | 12V DC, 3W submersible centrifugal brushless water pump with outlet nozzle; max head 1.5 metres | 3 Units | **Consumable** |
| 103 | **Micro Positional Servo — Plastic Gear (SG90)** | 9g micro positional servo motor; $0^\circ - 180^\circ$ pulse angle rotation; operating voltage $4.8\text{V} - 6.0\text{V}$; stall torque 1.8 kg-cm; horns included | 30 Units | **Consumable** |
| 104 | **Metal-Gear Micro Servo (MG90S)** | High-durability micro servo with brass and aluminum gears; $0^\circ - 180^\circ$ rotation; stall torque 2.2 kg-cm | 10 Units | **Consumable** |
| 105 | **Standard High-Torque Positional Servo** | Full-size metal-gear positional servo (MG995 / MG996R); torque 10–12 kg-cm; double ball bearings; $0^\circ - 180^\circ$ control | 5 Units | **Consumable** |
| 106 | **Continuous Rotation Metal Servo (360°)** | Full-size continuous rotation servo ($360^\circ$ speed/direction control); high-torque metal gear train | 5 Units | **Consumable** |
| 107 | **3-Channel Servo & ESC Tester (CCPM)** | Standalone digital servo tester with 3 modes (Manual speed dial, Neutral auto-center, Automatic window sweep); tests up to 3 servos simultaneously | 3 Units | **Consumable** |

---

## 4. Permanent Workshop Tools, Diagnostic Instruments & Machines

| Item # | Equipment / Machine / Tool Name | Technical Specifications & Model Details | Required Quantity | Asset Type |
|:---:|---|---|---:|:---:|
| 108 | **Digital Storage Oscilloscope (DSO)** | 50 MHz bandwidth, 2 channels, 1 GSa/s real-time sample rate, 7-inch color LCD, built-in function generator, USB interface | **1 Unit** | **Permanent Asset** |
| 109 | **Digital Multimeter (DMM)** | 7 functions, 19 ranges; DC voltage ($200\text{mV} - 1000\text{V}$), AC voltage ($200\text{V} - 750\text{V}$), DC current ($200\,\mu\text{A} - 10\text{A}$), resistance ($200\,\Omega - 2\,\text{M}\Omega$), diode test, continuity buzzer | 3 Units | **Permanent Asset** |
| 110 | **Serplex Pen Type Digital Multimeter (4000 Count AC/DC 600V)** | Slim pen-style auto-ranging digital multimeter; 4000 counts; measures AC/DC voltage up to 600V, resistance, continuity buzzer, frequency, NCV non-contact voltage sensor with flashlight | 2 Units | **Permanent Asset** |
| 111 | **Continuity Tester with Light Multi-Purpose Tool with Green LED** | Heavy-duty diagnostic continuity test tool with bright green LED indicator and tone buzzer; supplied complete with 2 AAA batteries; for wire tracing and PCB fault diagnosis | **1 Unit** | **Permanent Asset** |
| 112 | **Digital Voltage Tester Pen** | Contactless and contact AC voltage detector pen with audible alarm and bright LED indicator | **1 Unit** | **Permanent Asset** |
| 113 | **Digital Vernier Caliper** | 150mm / 6-inch electronic digital vernier caliper; stainless steel frame; resolution 0.01mm / 0.0005"; zero-calibration key | 2 Units | **Permanent Asset** |
| 114 | **Stainless Steel Workshop Ruler** | 150mm / 12-inch heavy-duty stainless steel measuring rule with photo-etched metric and imperial scales | 3 Units | **Permanent Asset** |
| 115 | **Auto-Retracting Measuring Tape** | 5m $\times$ 19mm steel measuring tape with rubberized shockproof armor, belt clip, and thumb lock | 2 Units | **Permanent Asset** |
| 116 | **Workshop Spirit Level** | 12-inch aluminum magnetic spirit level with 3 shockproof acrylic vials (horizontal, vertical, $45^\circ$) | **1 Unit** | **Permanent Asset** |
| 117 | **Temperature-Controlled Soldering Stations** | 15W–30W / 230V variable temperature soldering stations ($280^\circ\text{C} - 450^\circ\text{C}$) with heavy cast-iron cradle stand | **2 Stations** | **Permanent Asset** |
| 118 | **Helping Hand Magnifier Soldering Stand with 2 LED Lights** | PCB soldering auxiliary stand with dual adjustable alligator clips, heavy cast-iron base, flexible joints, bright dual LED illuminator, and dual magnification optical lens (35X / 12X, 65mm / 17mm) | 3 Units | **Permanent Asset** |
| 119 | **Circuit Board Welding Repairing Disassembly Fixture (Motherboard Holder)** | Precision adjustable PCB and motherboard holding clamp with 360° rotation fixture, high-temperature resistance, and dual movable slide-locks for soldering, desoldering, and component rework | 2 Units | **Permanent Asset** |
| 120 | **SP Electron Anti-Static Heat Insulation Silicone Magnetic Mat** | Large heat-resistant ($500^\circ\text{C}$) silicone work mat for soldering and electronics repair; built-in screw sorting notches, tool holders, and magnetic zones for mobile, PCB & laptop assembly | 3 Units | **Permanent Asset** |
| 121 | **Metal Wire Welding Soldering Tip Cleaner (Steel Ball Mesh)** | Heavy-duty copper/steel ball wire mesh tip cleaner with domed metal holder; cleans solder tips without lowering tip temperature or thermal shock | **2 Units** | **Permanent Asset** |
| 122 | **High-Vacuum Desoldering Pump** | Aluminum body spring-loaded manual solder sucker with high-suction Teflon nozzle | 5 Units | **Permanent Asset** |
| 123 | **Lifelong 105 Pcs Electric Cordless Screwdriver Kit** | Precision mini electric screwdriver with forward-reverse function, adjustable torque, 1600mAh rechargeable Li-ion battery, USB-C charging cable, and 105 CR-V precision bit set for electronics, mobile & laptop repair | **1 Unit** | **Permanent Asset** |
| 124 | **Industrial Hot Melt Glue Guns** | High-temperature electric glue gun ($230^\circ\text{C} - 280^\circ\text{C}$) for 11mm standard glue sticks; fold-out wire stand and insulated nozzle | **2 Guns** | **Permanent Asset** |
| 125 | **Dual-Temperature Electric Heat Gun** | 1800W heavy-duty industrial heat gun with dual-heat rocker switch ($300^\circ\text{C} / 500^\circ\text{C}$) and concentration nozzle attachment | **1 Unit** | **Permanent Asset** |
| 126 | **Adjustable Wire Stripper & Cutter** | Drop-forged steel wire stripper and diagonal cutter with adjustable brass gauge stop screw | 2 Units | **Permanent Asset** |
| 127 | **Workshop Mini Plier Set (6-Piece)** | 4.5-inch carbon steel precision pliers set: Long-nose, bent-nose, needle-nose, combination mini plier, external circlip plier, and wire-stripper | **1 Set** | **Permanent Asset** |
| 128 | **Anti-Static Precision Tweezer Set** | 6-piece non-magnetic anti-static ESD-safe stainless steel tweezers in zippered pouch (straight, curved, spade tips) | **1 Set** | **Permanent Asset** |
| 129 | **Jeweler Precision Screwdriver Set** | 6-piece precision screwdriver set: Phillips PH0, PH1, and Flathead 1.4mm, 2mm, 2.4mm, 3mm in indexed case | **1 Set** | **Permanent Asset** |
| 130 | **40-Piece Multi-Bit Screwdriver Set** | Ratcheting screwdriver handle with flexible extension shaft and 40 magnetic bits (Torx, Hex, Phillips, Slotted, Pozidriv) | 2 Sets | **Permanent Asset** |
| 131 | **Combination Spanner Set (12-Piece)** | Chrome vanadium drop-forged open and ring combination spanners (metric sizes 4mm to 30mm) with wall-mountable rack | **1 Set** | **Permanent Asset** |
| 132 | **Universal Adjustable Wrench** | 8-inch drop-forged carbon steel adjustable wrench with laser-etched metric jaw opening scale | **1 Unit** | **Permanent Asset** |
| 133 | **Imperial Allen Hex Key Set** | 10-piece ring imperial Allen hex key set for machine hex socket screws | **1 Set** | **Permanent Asset** |
| 134 | **Table-Top Bench Vice** | Heavy-duty cast-iron bench vice with serrated steel jaws, swivel base, locking lever, and integrated anvil surface | **1 Unit** | **Permanent Asset** |
| 135 | **Metal Screw C-Clamps** | 3-inch heavy-duty forged steel screw-threaded C-clamps with swivel shoe | 2 Units | **Permanent Asset** |
| 136 | **12-inch Heavy-Duty Hacksaw Frame** | Tubular steel hacksaw frame with cast handle and wingnut blade tensioner for 12-inch blades | **1 Frame** | **Permanent Asset** |
| 137 | **6-inch Mini Hacksaw Frame** | Compact aluminum alloy mini hacksaw frame for tight spaces and delicate cutting | **1 Frame** | **Permanent Asset** |
| 138 | **Engineering Hand File Set (6-inch)** | 6-piece high-carbon steel file set: flat, hand, round, half-round, triangular, and square with non-slip rubber handles | **1 Set** | **Permanent Asset** |
| 139 | **Diamond Needle File Set (3-inch)** | 6-piece miniature diamond needle file set for fine deburring of 3D prints, plastic boxes, and small chassis | **1 Set** | **Permanent Asset** |
| 140 | **Steel Shaft Claw Hammer** | 0.75 kg polished carbon steel head with tubular steel shaft and vibration-absorbing rubber grip | **1 Unit** | **Permanent Asset** |
| 141 | **Engineer's Ball Pein Hammer** | 0.75 kg forged carbon steel ball pein hammer for metal forming, tapping, and center punching | **1 Unit** | **Permanent Asset** |
| 142 | **Variable-Speed Electric Drill Machine** | 500W electric drill machine (1–10mm chuck capacity, variable speed trigger 0–2800 RPM, hammer/drill selector modes) | **1 Unit** | **Permanent Asset** |
| 143 | **Bench Drill Press Stand & Holder** | Heavy cast-iron base drill press stand compatible with the 500W electric drill for perpendicular precision drilling | **1 Unit** | **Permanent Asset** |
| 144 | **HSS Twist Drill Bit Set (13-Piece)** | 13-piece High-Speed Steel (HSS) drill bits ($1\,\text{mm} - 10\,\text{mm}$) in indexed steel storage index box | **1 Set** | **Permanent Asset** |
| 145 | **Cordless Rotary Multitool Set** | High-speed Li-ion rotary tool (up to 30,000 RPM) with flexible shaft, collets, cutting discs, grinding stones, and polishing wheels | **1 Set** | **Permanent Asset** |
| 146 | **Variable-Speed Electric Air Blower** | 500W electric high-velocity air blower with rubber directional nozzle for bench cleaning and dust removal | **1 Unit** | **Permanent Asset** |
| 147 | **Flexible Self-Healing Cutting Mat** | A3 size ($18\times 12\,\text{inches}$) 5-ply self-healing cutting mat with printed metric grid lines, millimeters, and angle guides | **1 Unit** | **Permanent Asset** |
| 148 | **3D Printer (FDM) Kit & Toolkit** | Fused Deposition Modelling (FDM) 3D printer ($160\times 160\times 160\,\text{mm}$ build volume, heated bed, 0.4mm nozzle, LCD screen) with repair toolkit | **1 Unit** | **Permanent Asset** |
| 149 | **Dedicated 2-Hour UPS Power Backup** | Heavy-duty Uninterruptible Power Supply (UPS) with 2-hour battery backup for 3D printer power protection | **1 Unit** | **Permanent Asset** |
| 150 | **Modular Component Storage Cabinets** | High-impact plastic storage cabinets with 60 transparent drawers each ($2\times 2\times 5\,\text{inches}$) for sorting small electronics | 2 Units (120 Drawers) | **Permanent Asset** |
| 151 | **Wall-Mounted Pegboard Tool Systems** | $3\times 2$ feet metal tool pegboards with modular hanging hooks, spanner racks, plier clips, and tool shelves | 2 Boards | **Permanent Asset** |

---

## 5. Workshop Consumable Supplies & Replenishment Hardware

| Item # | Consumable Item Name | Technical Specifications & Model Details | Required Quantity | Asset Type |
|:---:|---|---|---:|:---:|
| 152 | **Electronic Spices Quickfix Solder Paste Flux (Pack of 2, 50g+50g=100g)** | Premium brown rosin-rich active solder paste flux; facilitates fast solder wetting, prevents oxidation, and cleans copper traces during prototyping | 2 Packs (4 Tubs) | **Consumable** |
| 153 | **Mechanic XG-50 Tin Solder Paste (Sn63/Pb37, 35g)** | Professional No-Clean soldering tin paste alloy ($63\%\,\text{Sn} / 37\%\,\text{Pb}$, melting point $183^\circ\text{C}$); ideal for SMD rework, BGA, PCB assembly & mobile repair | 2 Tubs | **Consumable** |
| 154 | **SCHOFIC 5 Feet 3MM BGA Desoldering Wick** | High-absorption pure copper desoldering braid / solder remover wick (3.0mm width, 5 feet length); for cleaning solder bridges and SMD pads | 5 Spools | **Consumable** |
| 155 | **Rosin-Core Solder Wire Spools** | 100g spools of 60/40 leaded or lead-free 20/22 AWG rosin-flux-core soldering wire | 3 Spools (300g total) | **Consumable** |
| 156 | **Hot Melt Glue Sticks** | Standard $11\,\text{mm}\times 200\,\text{mm}$ high-clarity EVA hot melt adhesive glue sticks | 30 Sticks | **Consumable** |
| 157 | **12-inch Hacksaw Replacement Blades** | 12-inch high-carbon steel bi-metal flexible hacksaw blades (18/24 TPI) | 5 Blades | **Consumable** |
| 158 | **6-inch Mini Hacksaw Replacement Blades** | 6-inch high-carbon steel replacement mini blades (24 TPI) | 5 Blades | **Consumable** |
| 159 | **Waterproof Sandpaper Assortment** | Silicon carbide waterproof sandpaper sheets: Grits 80, 100, 120, 200, 300 | 3 Packs (15 Sheets) | **Consumable** |
| 160 | **Machine Hardware Fasteners Kit** | Assorted metric machine screws, hex nuts, and washers: M4 $\times$ 12/20mm, M5 $\times$ 16/25mm, M6 $\times$ 20mm | 5 Sets | **Consumable** |
| 161 | **Nylon Cable Ties (Zip Ties)** | Self-locking UV-resistant nylon cable ties: Small, Medium, Big (100 ties/pack) | 5 Packs (500 ties total) | **Consumable** |
| 162 | **Heat Shrink Tubing Assortment** | Polyolefin flame-retardant heat shrink tubing assortment (diameters 2mm, 3mm, 5mm, 8mm, 10mm) | 3 Packs (60 Pieces) | **Consumable** |
| 163 | **PLA 3D Printer Filament Spools** | High-grade 1.75mm PLA filament (1 kg spools in standard colours: Black, White, Red) | 3 Spools (3 kg) | **Consumable** |
| 164 | **Sealed Filament Storage Containers** | Moisture-proof airtight filament storage boxes with reusable silica gel desiccants | 3 Units | **Permanent Asset** |
| 165 | **Prototyping Corrugated Cardboard Sheets**| Heavy-duty 3-ply corrugated cardboard sheets for rapid structural chassis mockups | 3 Sheets | **Consumable** |
| 166 | **Prototyping Foam Core Boards** | Lightweight rigid 5mm white foam core boards for precision enclosure fabrication | 3 Boards | **Consumable** |
| 167 | **Wooden Popsicle Craft Sticks** | Natural birch wood craft sticks for linkages, chassis beams, and structural assemblies | 1 Pack (100 Sticks) | **Consumable** |
| 168 | **PVA Wood Adhesive Glue** | 500 ml bottle of fast-drying non-toxic PVA wood glue | **1 Bottle** | **Consumable** |
| 169 | **Thick String & Heavy Rubber Bands** | 20m spool of multicolored thick cord + 100 heavy-duty elastic rubber bands | 2 Spools + 1 Pack | **Consumable** |

---

## 6. Laboratory Safety Equipment & Protective Gear

| Item # | Safety Item Name | Technical Specifications & Safety Ratings | Required Quantity | Asset Type |
|:---:|---|---|---:|:---:|
| 170 | **Clear Safety Goggles** | Polycarbonate high-impact scratch-resistant safety goggles (EN166 / ANSI Z87.1 certified); un-tinted clear lens | 20 Units | **Permanent Asset** |
| 171 | **Protective Workshop Work Gloves** | Medium-size latex/nitrile coated work grip gloves for handling sharp sheet metals, drills, and hot tools | 5 Pairs | **Consumable** |
| 172 | **Particulate Safety Dust & Fume Masks** | 80% particulate filtration efficiency masks for soldering flux fumes and workshop wood/drill dust | 10 Units | **Consumable** |
| 173 | **Comprehensive Lab First-Aid Kit** | Portable wall-mountable first-aid station with sterile bandages, burn gel dressing, antiseptic liquid, eyewash, and surgical tape | **1 Kit** | **Permanent Asset** |
| 174 | **Portable Fire Extinguishers (ABC Dry Powder)** | 2 kg capacity ABC dry chemical powder portable fire extinguisher with pressure gauge; rated for electrical and material fires | 2 Units | **Permanent Asset** |

---
---

## 7. Older & Deprecated Legacy Modules (Moved Out of Primary Order)

> **Procurement Advisory for Principal & Vendor**:  
> The items in the table below are **older legacy models** from historical equipment lists. They have been moved out of the active classroom requisition because they are obsolete, power-inefficient, or unreliable in today's technological environment:  
> - **SIM900 GSM Shield**: Obsolete 2G network hardware; telecom operators are phasing out 2G, and it requires huge 2A current spikes that crash school microcontroller setups.  
> - **433 MHz / 315 MHz ASK RF Pair**: Crude super-regenerative coil radios with no error-checking, extreme interference, and poor range (superseded by modern 2.4 GHz NRF24L01+).  
> - **HC-05 Classic Bluetooth**: Obsolete Bluetooth 2.0 (SPP); incompatible with modern iOS/iPhones (superseded by BLE 4.0/5.0).  
> - **L293D / L298 Motor Drivers**: Outdated 1980s bipolar junction transistor (BJT) drivers with huge internal voltage drops (losing 2V to 2.5V as heat), draining batteries quickly (superseded by high-efficiency MOSFET TB6612FNG drivers).

| Item # | Deprecated Module Name | Original Specifications | Required Quantity | Modern Replacement in Primary Order |
|:---:|---|---|---:|---|
| 175 | **GSM / GPRS Cellular Module (SIM900)** | Quad-Band 850/900/1800/1900 MHz 2G cellular shield; UART serial AT command control; standard SIM socket *(Obsolete 2G technology)* | 3 Units | **ESP32 Wi-Fi / Cloud IoT** (Item #01 / #03) |
| 176 | **433 MHz / 315 MHz RF Transmitter & Receiver** | ASK wireless super-regenerative RF pair; range 20–100m *(High RF noise, no packet filtering, unreliable)* | 5 Pairs | **NRF24L01+ 2.4 GHz PA+LNA** (Item #63) |
| 177 | **Bluetooth Serial Module (HC-05)** | 2.4 GHz Bluetooth V2.0+EDR classic module; SPP serial *(Incompatible with iOS/iPhones)* | 5 Units | **BLE HM-10 / AT-09 Module** (Item #64) |
| 178 | **L293D Dual H-Bridge Motor Driver Module** | Standalone BJT-based H-bridge board; max 600mA/ch; high 2V internal voltage drop, heavy heat dissipation | 5 Units | **TB6612FNG MOSFET Driver** (Item #50) |
| 179 | **L298P High-Power Motor Shield** | Arduino Uno form-factor shield featuring L298 dual full-bridge BJT driver; heavy heat dissipation | 5 Units | **TB6612FNG / PCA9685 Drivers** (Items #50 & #52) |

---

## 8. Discrete Electronic Components & Single Parts (Require Manual Circuit Building)

> **Important Category Classification**:  
> The items in the table below are **discrete / single components** (bare passives, loose semiconductors, through-hole LEDs, and unmounted sensors).  
> Unlike the ready-to-use breakout modules listed in Section 1, these items **do not come with a PCB board, comparator, or direct 3-pin/4-pin headers**. They require manual circuit construction on a solderless breadboard or perfboard using resistors, capacitors, and jumper wires.  
> They are separated here so the Principal and Vendor can clearly distinguish **plug-and-play microcontroller modules** from **basic electronic components**.  
> In accordance with lab optimization guidelines, oversized component counts have been rationalized to **3 to 5 kits/packs**.

| Item # | Discrete Component Name | Technical Specifications & Model Details | Practical Lab / Circuit Role | Required Quantity |
|:---:|---|---|---|---:|
| 180 | **Bare 5V Sugar-Cube Electromagnetic Relay** | Songle SRD-05VDC-SL-C; 5-pin SPDT bare relay; contacts rated 10A 250V AC / 30V DC *(Requires manual transistor & diode driver)* | Learning coil actuation, transistor switching & flyback diode protection | **5 Units** |
| 181 | **Single 1-Digit 7-Segment LED Display (Common Cathode)** | 0.56-inch 1-digit red 7-segment display; 10-pin DIP through-hole; forward voltage 2.0V *(Requires 7-8 current-limiting resistors)* | Learning direct binary-to-decimal LED segment decoding | **5 Units** |
| 182 | **Single 1-Digit 7-Segment LED Display (Common Anode)** | 0.56-inch 1-digit red 7-segment display; 10-pin DIP through-hole; active-low configuration | Comparative study of active-high vs active-low segment logic | **5 Units** |
| 183 | **Bare 4-Digit 7-Segment LED Display** | 12-pin bare multiplexed 4-digit display *(No TM1637 driver IC; requires multiplexed pin scanning)* | Teaching display multiplexing, ghosting prevention & persistence of vision | **5 Units** |
| 184 | **Bare 16×2 Character LCD Panel (HD44780)** | 16-pin parallel interface LCD display; 5V DC; blue backlight *(Raw display without I2C backpack board)* | Teaching parallel data buses (4-bit/8-bit), RS, Enable & RW pin control | **5 Units** |
| 185 | **10-Segment LED Bargraph Display Array** | 20-pin DIP array with 10 individually addressable red/green LED segments | Analog level indicators, battery level meters & audio VU meters | **5 Units** |
| 186 | **Bare LDR Photoresistors (GL5528)** | 5mm cadmium sulfide (CdS) light-dependent resistor; dark resistance $1\,\text{M}\Omega$, light resistance $10-20\,\text{k}\Omega$ | Voltage divider circuits for automatic light/dark detectors | **5 Units** |
| 187 | **Bare NTC Thermistors (10kΩ Bead)** | 2-pin negative temperature coefficient thermistor; $B_{25/50} = 3950\,\text{K}$; resistance decreases as heat rises | Building analog thermal detection and fire alarm circuits | **5 Units** |
| 188 | **Rotary Carbon Potentiometers (10kΩ)** | 3-pin panel mount / breadboard rotary potentiometer with knurled shaft and matching control knobs | Dial controls for PWM motor speed, tone pitch & LCD contrast | **5 Units** |
| 189 | **Breadboard Miniature Trimpots (10kΩ - 3362P)** | 3-pin single-turn horizontal/vertical cermet trimmer potentiometer | Precision threshold calibration on prototype breadboards | **5 Units** |
| 190 | **ATmega328P-PU Standalone IC (with 16MHz Crystal Kit)** | 28-pin DIP AVR microcontroller bare chip paired with 16 MHz HC-49S quartz crystal and two 22pF ceramic load capacitors | Building a "DIY Arduino on Breadboard / Perfboard" from scratch | **5 Sets** |
| 191 | **ATmega16U2 Standalone IC** | 8-bit AVR microcontroller bare IC in DIP/SOIC package; 16 KB flash; USB controller capability; $2.7\text{V} - 5.5\text{V}$ | Advanced USB microcontroller prototyping & bare IC design | **3 Units** |
| 192 | **Shift Register IC (74HC595)** | 16-pin DIP 8-bit serial-in parallel-out shift register with 3-state output latches | Controlling 8 to 64 LEDs or multi-digit displays using only 3 GPIO pins | **5 Units** |
| 193 | **Dual Operational Amplifier IC (LM358)** | 8-pin DIP dual low-power general-purpose op-amp; single supply $3\text{V} - 32\text{V}$ | Building analog signal amplifiers, active filters & sensor preamps | **5 Units** |
| 194 | **Dual Voltage Comparator IC (LM393)** | 8-pin DIP dual precision voltage comparator; open-collector output | Understanding analog voltage threshold slicing (how sensor modules work) | **5 Units** |
| 195 | **Timer IC — LM555 / NE555** | Precision timing bipolar IC; DIP-8 package; operating voltage $4.5\text{V} - 16\text{V}$ | Astable multivibrators (clock pulse generators) and monostable timers | **5 Units** |
| 196 | **Linear Voltage Regulators (LM78XX)** | 3-terminal linear regulators in TO-220 package: LM7805 (+5V), LM7809 (+9V), LM7812 (+12V); 1.5A peak | Designing clean regulated DC power supply rails on breadboards | **5 Units** |
| 197 | **Logic-Level Power N-Channel MOSFET (IRLZ44N / IRF540N)** | TO-220 power MOSFET; 55V, 47A, low $R_{DS(\text{on})}$; logic-level gate threshold ($V_{GS(\text{th})} = 1.0\text{V} - 2.0\text{V}$) | Direct high-speed switching of high-current DC motors, coils & 12V LED strips | **5 Units** |
| 198 | **Bare Dual H-Bridge Motor Driver IC (L293D)** | 16-pin DIP bare driver IC (unmounted without shield); 600mA per channel; internal clamp diodes | Breadboard motor control circuits and H-bridge theory | **5 Units** |
| 199 | **Bare Darlington Transistor Array IC (ULN2003A)** | 16-pin DIP array of 7 high-voltage, high-current NPN Darlington pairs with common suppression diodes | Driving unmounted stepper motors, relays, and solenoid coils | **5 Units** |
| 200 | **Assorted Resistor Kit (1/4W Carbon Film)** | 30 resistors each across 20 standard values: $10\,\Omega, 100\,\Omega, 220\,\Omega, 330\,\Omega, 470\,\Omega, 1\,\text{k}\Omega, 4.7\,\text{k}\Omega, 10\,\text{k}\Omega, 100\,\text{k}\Omega, 1\,\text{M}\Omega$, etc. | Current-limiting for LEDs, pull-up/pull-down, and voltage dividers | **5 Kits** (3,000 pcs) |
| 201 | **Assorted Capacitor Kit (Ceramic & Electrolytic)** | Assorted values: $22\,\text{pF}, 100\,\text{pF}, 10\,\text{nF}, 100\,\text{nF}\,(104), 1\,\mu\text{F}, 10\,\mu\text{F}, 100\,\mu\text{F}, 1000\,\mu\text{F}$; 16V–50V | Noise filtering, crystal loading, decoupling & timing circuits | **5 Kits** (1,000 pcs) |
| 202 | **Diodes and Transistors Kit** | BC547 / 2N3904 (NPN), BC557 / 2N3906 (PNP), 1N4148 (Fast signal), 1N4001 / 1N4007 (1A Rectifier) | Amplification, logic inverter switching, rectification & flyback protection | **3 Kits** (75 pcs) |
| 203 | **Zener Diodes Assortment (3.3V, 5.1V, 12V)** | 0.5W axial leaded Zener voltage reference diodes | Voltage clamping, regulation & basic 5V-to-3.3V logic level shifting | **3 Packs** (30 pcs) |
| 204 | **Through-Hole Diffused LEDs (5mm) — Red** | Standard 5mm round diffused red LED; forward voltage $1.8\text{V} - 2.2\text{V}$; current $20\,\text{mA}$ | Visual output indicators and logic state signals | **5 Packs** (250 pcs) |
| 205 | **Through-Hole Diffused LEDs (5mm) — Green** | Standard 5mm round diffused green LED; forward voltage $2.0\text{V} - 2.4\text{V}$; current $20\,\text{mA}$ | Power/Go status indicators | **5 Packs** (250 pcs) |
| 206 | **Through-Hole Diffused LEDs (5mm) — Blue** | Standard 5mm round diffused blue LED; forward voltage $2.8\text{V} - 3.2\text{V}$; current $20\,\text{mA}$ | Special indicator and primary RGB color mixing | **5 Packs** (250 pcs) |
| 207 | **Through-Hole Diffused LEDs (5mm) — Yellow** | Standard 5mm round diffused yellow LED; forward voltage $2.0\text{V} - 2.4\text{V}$; current $20\,\text{mA}$ | Warning and caution state signaling | **5 Packs** (250 pcs) |
| 208 | **Through-Hole Clear LEDs (5mm) — White** | Ultra-bright 5mm clear white LED; forward voltage $3.0\text{V} - 3.4\text{V}$; current $20\,\text{mA}$ | Illumination and miniature flashlight projects | **5 Packs** (250 pcs) |
| 209 | **RGB LEDs (5mm Common Cathode, 4-Pin)** | 4-pin through-hole 5mm diffused RGB LED; common ground pin *(Requires 3 individual resistors)* | Color blending, PWM color mixing & status multi-color alerts | **3 Packs** (60 pcs) |
| 210 | **Tactile Momentary Push Buttons (6×6mm)** | 4-pin breadboard-compatible momentary micro push buttons with colored caps | Manual digital inputs, reset triggers & interface buttons | **3 Packs** (150 pcs) |
| 211 | **Miniature SPDT Slide Switches** | 3-pin through-hole sub-miniature slide switches; ON-ON 2-position rating 0.5A 50V DC | Power master switching and hardware mode selection | **2 Packs** (40 pcs) |
| 212 | **DIP Switch Array (4-Position & 8-Position)** | Standard 2.54mm pitch breadboard rocker/slide DIP switch blocks | Binary address setting, mode configuration & logic truth table tests | **5 Packs** (20 pcs) |
| 213 | **Bare Tilt Ball Switch Sensor (SW-520D)** | 2-pin brass-cased rolling ball tilt sensor switch | Simple gravity/tilt orientation detection without software libraries | **5 Units** |
| 214 | **Bare Electret Microphone Capsule (9×7mm)** | 2-pin raw electret microphone cartridge with solder pads *(Requires pull-up & coupling capacitor)* | Building custom acoustic sensor & sound trigger circuits | **5 Units** |
| 215 | **Piezoelectric Transducer Disc Plate** | 40mm copper-backed piezoelectric ceramic disc element with pre-soldered positive/negative wire leads | Vibration energy harvesting, knock detection & contact microphones | **5 Units** |
| 216 | **Precision Analog Temperature Sensor (LM35)** | Precision linear analog temperature sensor; TO-92 3-pin transistor package; $10\,\text{mV}/^\circ\text{C}$ | Raw analog voltage temperature reading | **5 Units** |
| 217 | **Force Sensitive Resistor (FSR)** | $1.75\times 1.5$ inch square polymer thick-film pressure sensor; resistance varies with mechanical force | Pressure sensing, electronic scales & footstep pads | **3 Units** |
| 218 | **Flexion Bend Sensor** | 2.2-inch flexible carbon-resistive bend sensor; nominal flat resistance $25\,\text{k}\Omega$ | Robotic finger joint tracking and wearable glove controls | **3 Units** |
| 219 | **Miniature Active Buzzer — Small** | 5V DC active piezoelectric buzzer with internal oscillator (2-pin through-hole) | Audible alarms and beep notifications | **5 Units** |
| 220 | **Loud Active Buzzer — Big** | 5V–12V DC high-decibel active buzzer (2-lead round casing, 85+ dB output) | Perimeter intrusion alarms and fire warning buzzers | **5 Units** |
| 221 | **Miniature Haptic Vibrating Motor** | 10g coin/cylindrical vibration motor ($1.5\text{V} - 3.7\text{V}$ DC) *(Requires transistor & flyback diode)* | Silent tactile alerts and wearable haptic feedback | **5 Units** |
| 222 | **IR Optical Sensor Pair (TSOP1738 + 940nm LED)** | 38 kHz infrared receiver IC (3-pin) paired with 940nm high-output IR emitting LED (2-pin) | Remote control decoders, IR beam breaks & optical tachometers | **5 Pairs** |

---

### Procurement Terms & Instructions for Vendor Quotation:
1. **Modern Module Standards**: All sensor modules, wireless boards, display modules, power buck converters, charging boards, and motor drivers in Section 1 must feature onboard regulation and logic level compatibility with 3.3V / 5V systems (Arduino and ESP32).
2. **Quotation Validity**: Vendor quotation must be valid for a minimum of 60 days.
3. **Warranty**: Minimum 1-year standard warranty on all permanent capital assets (DSO, Multimeters, Soldering Stations, Power Tools, 3D Printer, UPS).

---

**Submitted by**:  
*ATL In-Charge / Electronics Instructor*  
Date: ________________________  
Signature: ___________________  

**Approved by**:  
*Principal / Head of Institution*  
Date: ________________________  
Signature & Seal: ____________  
