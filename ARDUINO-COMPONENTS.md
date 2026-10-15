# Arduino Boards and Module Catalogue for the ATL Lab

## Purpose and Status

This document is a planning catalogue for future school projects. It lists Arduino boards and commonly available add-on modules, shields, sensors, actuators, and accessories. Each section is separated by function and explains what the components are used for.

**This is not a physical inventory.** An item in this document is not confirmed to be present in the school lab, purchased, or tested. Record actual stock separately in `HARDWARE-INVENTORY.md`.

Arduino's product range changes. This catalogue covers the major official board families and widely used board models, plus common Arduino-compatible boards. It is not a claim to list every historical revision, discontinued product, third-party clone, or seller-specific variant. Before choosing a component, check the exact board's official documentation, voltage, pinout, connector, and library support.

## 1. Arduino Controller Boards

Choose the controller board first. Modules connect to the board, so board voltage, available pins, memory, interfaces, and software support affect what can be built.

### 1.1 UNO Family — general classroom prototyping

| Board |Main purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino UNO R3 |Beginner electronics, LEDs, buttons, basic sensors, simple robots |Classic 5 V, ATmega328P board; broad tutorial and shield support |₹486–₹1,800 |
| Arduino UNO R3 SMD |Same learning and project uses as UNO R3 |SMD microcontroller version |₹250–₹500 |
| Arduino UNO R4 Minima |Modern 32-bit general-purpose projects |Renesas RA4M1; check pin and library differences from R3 |₹690–₹1,000 |
| Arduino UNO R4 WiFi |General prototyping with Wi-Fi/Bluetooth-capable wireless module and LED matrix |RA4M1 plus ESP32-S3 connectivity module; do not assume it behaves like an ESP32 development board |₹1,300–₹2,400 |
| Arduino UNO Q |Projects combining Linux computing and microcontroller control, including vision and AI workflows |Dual-computing architecture; follow UNO Q-specific setup and accessory compatibility |₹5,600–₹6,000 |
| Arduino UNO WiFi Rev2 |Wireless sensor and IoT projects |Different MCU/core from UNO R3; choose the correct board in Arduino IDE |Check current listing |
| Arduino UNO WiFi |Legacy Wi-Fi UNO projects |Older product; confirm availability and current support |Check current listing |
| Arduino UNO Mini Limited Edition |Compact UNO-style projects and education |Limited-edition product; not a separate general-purpose module |Check current listing |
| Arduino-compatible UNO R3 boards (for example, ATmega328P-based clones) |Low-cost classroom prototyping |USB interface chip, bootloader, voltage, and board quality vary by manufacturer |Check current listing |

### 1.2 Mega and large-I/O boards

| Board |Main purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino Mega 2560 Rev3 |Projects requiring many pins, several serial devices, or more memory than UNO R3 |54 digital I/O, 16 analog inputs, four hardware UARTs |₹930–₹4,500 |
| Arduino Due |More demanding 32-bit embedded projects |3.3 V logic; do not connect 5 V signals directly to pins |₹900–₹3,600 |
| Arduino GIGA R1 WiFi |Advanced robotics, displays, USB host, audio, and complex prototypes |Dual-core STM32H747, many I/O pins, wireless connectivity; check peripheral voltage |₹5,000–₹7,500 |
| Arduino GIGA Display Shield |Touchscreen and richer user interface for GIGA R1 WiFi |Designed for the GIGA family; not a generic UNO shield |₹4,000–₹6,000 |

### 1.3 Nano Family — compact and breadboard-friendly

| Board |Main purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino Nano (classic) |Breadboard experiments and compact projects |Commonly ATmega328P, 5 V; clones vary |₹175–₹300 |
| Arduino Nano Every |Compact projects needing a newer AVR board |ATmega4809; check library and pin differences |₹960–₹1,600 |
| Arduino Nano R4 |Compact 32-bit projects and sensor/automation prototypes |RA4M1, 5 V operating logic; includes Qwiic/I²C connector |₹1,500–₹2,000 |
| Arduino Nano 33 IoT |Wi-Fi/Bluetooth Low Energy sensor and IoT projects |3.3 V logic |₹2,100–₹2,800 |
| Arduino Nano 33 BLE |BLE and motion-sensing projects |3.3 V logic; onboard IMU |₹2,500–₹4,000 |
| Arduino Nano 33 BLE Sense |TinyML, audio, environmental, and gesture experiments |Sensor set depends on revision |₹2,500–₹4,000 |
| Arduino Nano 33 BLE Sense Rev2 |TinyML and onboard sensor projects |Updated sensor set; use Rev2 documentation |₹3,900–₹5,000 |
| Arduino Nano RP2040 Connect |Wi-Fi/BLE, embedded sensing, and TinyML learning |RP2040-based board with wireless module and onboard sensors |₹2,500–₹3,500 |
| Arduino Nano ESP32 |Wi-Fi/Bluetooth IoT and compact connected projects |ESP32-S3-based; 3.3 V logic; select the right board core |₹1,695–₹1,800 |
| Arduino Nano Matter |Smart-home and Matter-over-Thread learning |Wireless module and ecosystem support are model-specific |Check current listing |
| Arduino Nano Connector Carrier |Easier connections for supported Nano boards |Confirm the exact Nano model and carrier pin mapping |₹400–₹800 |
| Arduino Nano Motor Carrier |Small robotics and motor experiments with compatible Nano boards |Confirm supported Nano models, motors, and supply ratings |₹2,000–₹3,000 |

### 1.4 Classic and other microcontroller boards

| Board |Main purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino Leonardo |USB keyboard/mouse/game-controller emulation and general prototyping |ATmega32U4 supports native USB |₹415–₹2,250 |
| Arduino Micro |Compact USB HID projects |Similar use cases to Leonardo in a smaller format |₹500–₹1,500 |
| Arduino Zero |32-bit embedded learning and prototyping |SAMD21-based; verify current availability and support |₹2,000–₹3,000 |
| Arduino Yún |Legacy networked projects combining Linux and microcontroller control |Older product; document only if the lab actually has one |Check current listing |
| Arduino Esplora |Built-in-input/output learning and game-controller experiments |Legacy/discontinued product; availability varies |Check current listing |
| Arduino Ethernet (legacy) |Wired-networking experiments |Legacy board; use only if already available |Check current listing |

### 1.5 MKR Family — compact IoT and connectivity

| Board |Main purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino MKR WiFi 1010 |Wi-Fi/BLE IoT |3.3 V ecosystem; verify shield compatibility |₹3,000–₹4,000 |
| Arduino MKR WAN 1300 |LoRa connectivity |External antenna and regional radio rules matter |₹3,500–₹5,000 |
| Arduino MKR WAN 1310 |Low-power LoRa sensor nodes |LoRa radio; check frequency region |₹3,500–₹5,000 |
| Arduino MKR GSM 1400 |Cellular-connected sensor projects |Network generation and local carrier availability must be checked |₹3,500–₹6,000 |
| Arduino MKR NB 1500 |Narrowband IoT experiments |Requires compatible carrier/network and subscription |₹3,500–₹6,000 |
| Arduino MKR FOX 1200 |Sigfox demonstrations |Service availability depends on region and operator |₹3,500–₹6,000 |
| Arduino MKR Zero |Audio, SD-card, and embedded projects |Confirm board support and SD/audio wiring |₹2,500–₹3,500 |
| Arduino MKR Vidor 4000 |FPGA and advanced digital-logic experiments |Specialized; check current software ecosystem |Check current listing |
| Arduino MKR1000 |Older Wi-Fi IoT projects |Legacy product; availability/support varies |Check current listing |

### 1.6 Portenta, Nicla, Opta, and advanced/industrial boards

| Board or family |Main purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino Portenta H7 |High-performance embedded, industrial, and dual-core projects |Advanced board; use exact carrier and voltage documentation |₹8,000–₹15,000 |
| Arduino Portenta H7 Lite Connected |Connected embedded/industrial projects |Variant-specific capabilities |₹8,000–₹15,000 |
| Arduino Portenta C33 |Connected embedded and industrial applications |Check wireless, I/O, and supported core details |₹4,000–₹6,000 |
| Arduino Portenta X8 |Linux-capable embedded computing and edge applications |Higher complexity than beginner microcontroller boards |₹20,000–₹30,000 |
| Arduino Portenta Machine Control |Industrial automation and machine interfaces |Industrial I/O; follow official wiring and safety requirements |₹25,000–₹40,000 |
| Arduino Portenta Max Carrier |Expansion for supported Portenta boards |Interface and radio support depend on board combination |₹10,000–₹15,000 |
| Arduino Nicla Vision |Camera, machine vision, and edge-AI experiments |Integrated vision-oriented board; confirm model support |₹7,000–₹12,000 |
| Arduino Nicla Sense ME |Compact environmental and motion sensing |Integrated sensors; check current software/library support |₹4,000–₹8,000 |
| Arduino Nicla Voice |Voice/audio-triggered embedded projects |Specialized edge-audio board |₹4,000–₹8,000 |
| Arduino Opta Lite / Opta WiFi / Opta RS485 |PLC-style automation, monitoring, and control |Industrial product family; follow electrical safety rules |₹10,000–₹18,000 |
| Arduino VENTUNO Q |Advanced edge-AI and robotics projects |High-performance product; use current official hardware documentation |₹5,600–₹6,000 |

### 1.7 Plug-and-play and education kits

| Product |Main purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino Starter Kit / Starter Kit R4 |Structured beginner electronics lessons |Contents vary by kit edition |₹8,100–₹9,000 |
| Arduino Student Kit |Guided school-level electronics and coding |Check current regional availability |₹6,500 |
| Arduino Education kits |Classroom lesson plans and bundled parts |Verify the exact kit bill of materials |₹24,000+ |
| Arduino Sensor Kit |Guided sensor experiments |Contents depend on edition |₹1,000–₹2,500 |
| Arduino Oplà IoT Kit |Connected home and IoT prototypes |Uses the included board and accessories |₹10,000–₹15,000 |
| Arduino Plug and Make Kit |Modular plug-and-play projects |Includes specific supported modules; catalogue them individually if stocked |₹6,800–₹7,000 |
| Arduino Modulino family |Plug-and-play sensors and input/output nodes using supported connectors |Check supported host board, connector, voltage, and library |₹700–₹1,500 |

## 2. Basic Electronics and Input Components

### 2.1 Output, indicator, and sound

| Component / module |Purpose |Common connection |Indicative unit price (INR) |
| --- |--- |--- |--- |
| 5 mm LED assortment (red, green, blue, yellow, white) |Status lights and output indication |Digital pin through a current-limiting resistor |₹50–₹150 |
| RGB LED module |Three-colour status and mixing colours |GPIO/PWM; check common-anode/common-cathode type |₹20–₹80 |
| WS2812B addressable RGB LED strip/ring |Individually controlled light patterns |Data pin plus suitable power supply |₹100–₹500 |
| APA102 addressable LED strip |Individually controlled LEDs with clock and data |Two signal lines plus suitable power |₹250–₹800 |
| 8×8 LED matrix module (MAX7219) |Symbols, counters, scrolling text |Serial-style interface |₹70–₹180 |
| 4-digit 7-segment display (TM1637) |Timers, counters, numeric values |Clock/data pins |₹50–₹120 |
| 7-segment display module (MAX7219) |Numeric display |Serial-style interface |₹70–₹180 |
| Active buzzer module |Beeps and alerts |Digital output; check voltage |₹15–₹100 |
| Passive buzzer / piezo element |Tones, melodies, frequency experiments |Digital/PWM output |₹15–₹100 |
| Small speaker with amplifier module |Sound output |Audio signal and separate supply as required |₹80–₹250 |
| Push-button module |User input, start/stop controls |Digital input |₹10–₹40 |
| Toggle/slide switch |On/off or mode selection |Digital input or power switching, depending on rating |₹10–₹50 |
| Potentiometer module |Adjustable value, menu control, analog input |Analog input |₹20–₹60 |
| Rotary encoder module (KY-040 type) |Menu navigation and rotation measurement |Digital inputs |₹40–₹150 |
| 4×4 matrix keypad |PIN entry and menu input |Multiple digital pins |₹80–₹180 |
| 4×3 matrix keypad |Numeric input |Multiple digital pins |₹70–₹150 |
| TTP223 capacitive touch module |Touch button |Digital output |₹15–₹50 |
| Joystick module (KY-023 type) |Two-axis movement control |Two analog inputs and one digital button |₹50–₹150 |

### 2.2 Breadboard, wiring, and circuit building

| Component |Purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Solderless breadboard (small and full-size) |Build temporary circuits without soldering |Check rail connections and current limits |₹40–₹150 |
| Jumper wires (male–male, male–female, female–female) |Connect boards, breadboards, and modules |Keep separate lengths and types |₹80–₹250 |
| Resistor assortment |Current limiting, pull-ups, voltage dividers |Use correct resistance and power rating |₹50–₹200 |
| Ceramic and electrolytic capacitor assortment |Filtering, timing, decoupling |Observe polarity for electrolytic capacitors |₹80–₹300 |
| Diode assortment (1N4148, 1N400x, Schottky types) |Protection and rectification |Choose by current, voltage, and switching needs |₹50–₹200 |
| Transistor assortment (NPN/PNP) |Switching and simple amplification |Verify pinout and ratings |₹50–₹200 |
| Logic-level MOSFET module |Switch DC loads |Choose a genuine logic-level part for the board's gate voltage |₹40–₹200 |
| Logic-level converter module |Connect supported 3.3 V and 5 V signals |Check direction and signal type |₹25–₹100 |
| Voltage regulator / DC-DC buck module |Provide a suitable lower voltage |Measure output before connecting electronics |₹50–₹180 |
| USB cable for exact board connector |Programming and power |Some cables provide power only; use a data cable |₹50–₹200 |
| USB-to-serial adapter (3.3 V or 5 V variant) |Serial debugging and programming supported boards |Select correct logic voltage |₹100–₹400 |
| Screw-terminal / breakout adapter |More secure wiring |Confirm board and pin mapping |₹30–₹200 |
| Perfboard / prototyping PCB |Build semi-permanent circuits |Soldering required |₹20–₹100 |
| Assorted headers and sockets |Make replaceable module connections |Match pin pitch and board footprint |₹20–₹150 |

## 3. Sensors — Measure the Environment

### 3.1 Temperature, humidity, pressure, and weather

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| DHT11 temperature and humidity module |Basic classroom weather monitor |Digital; lower accuracy/range than newer options |₹85–₹150 |
| DHT22 / AM2302 temperature and humidity module |Room and weather station |Digital |₹150–₹350 |
| DS18B20 waterproof temperature probe |Measure liquid or outdoor temperature |One-wire; use the correct pull-up |₹80–₹250 |
| BME280 temperature, humidity, and pressure module |Weather station and environmental logger |I²C/SPI |₹150–₹500 |
| BMP280 barometric pressure module |Pressure and approximate altitude experiments |I²C/SPI; no humidity measurement |₹80–₹250 |
| AHT20 temperature and humidity module |Environmental monitoring |I²C |₹100–₹250 |
| SHT31 temperature and humidity module |More stable environmental measurements |I²C |₹250–₹600 |
| DS3231 real-time clock module |Timestamp measurements |I²C; often includes a backup cell |₹80–₹200 |
| MAX6675 / MAX31855 thermocouple interface with K-type probe |Higher-temperature measurement demonstrations |Interface varies; observe probe and board limits |₹250–₹700 |

### 3.2 Light, colour, UV, and flame demonstrations

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| LDR photoresistor module |Detect light/dark conditions |Analog or digital comparator |₹15–₹60 |
| BH1750 digital light sensor |Measure illuminance |I²C |₹70–₹180 |
| TSL2591 high-dynamic-range light sensor |Measure a wide range of light levels |I²C |₹250–₹600 |
| TCS34725 colour sensor |Read reflected colour / RGB values |I²C |₹150–₹450 |
| APDS-9960 gesture, proximity, RGB, and ambient-light sensor |Gesture and proximity experiments |I²C |₹150–₹400 |
| GUVA-S12SD UV sensor module |UV-level demonstration |Analog; calibrate and interpret cautiously |₹100–₹300 |
| IR flame sensor module (KY-026 type) |Demonstrate infrared response to a flame |Not a certified fire alarm; never use as the only safety detector |₹30–₹100 |
| IR receiver module (38 kHz type) |Receive signals from common IR remotes |Digital signal; remote protocol varies |₹15–₹60 |
| IR transmitter LED module |Send IR remote-control signals |Drive current correctly |₹10–₹40 |

### 3.3 Air quality, gas, and particles

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| MQ-2 smoke/combustible-gas sensor module |Gas-response demonstrations |Heater consumes power; warm-up and calibration needed |₹65–₹180 |
| MQ-3 alcohol-response sensor module |Gas-sensor experiments |Not a calibrated breathalyser |₹65–₹180 |
| MQ-7 carbon-monoxide sensor module |Demonstrate CO sensor response |Not a certified CO safety alarm |₹65–₹180 |
| MQ-135 air-quality response module |Broad gas-response experiments |Not a precise universal air-quality meter |₹65–₹180 |
| PMS5003 particulate-matter sensor |Measure airborne particles |UART; provide suitable power and airflow |₹1,200–₹2,500 |
| SDS011 particulate-matter sensor |Particle concentration experiments |UART; suitable power required |₹1,500–₹3,000 |
| SGP30 VOC/eCO₂ sensor |Indoor-air-quality demonstrations |I²C; eCO₂ is an estimate, not direct CO₂ measurement |₹350–₹800 |
| SCD40 / SCD41 CO₂ sensor |Measure CO₂ and environmental data |I²C; follow calibration and ventilation guidance |₹1,500–₹3,000 |
| CCS811 VOC/eCO₂ sensor |VOC-response and estimated CO₂ projects |I²C; observe warm-up and baseline requirements |₹250–₹600 |

### 3.4 Soil, rain, and water

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Capacitive soil-moisture sensor |Plant watering and smart-garden projects |Analog; often more durable than exposed-resistance probes |₹60–₹180 |
| FC-28 / YL-69 resistive soil-moisture sensor |Basic soil-moisture experiment |Exposed probes corrode; limit powered time |₹40–₹100 |
| Rain sensor plate and comparator board |Detect wetness/rain |Analog/digital; exposed plate may corrode |₹30–₹100 |
| Water-level sensor strip |Detect water level/presence |Analog; protect against corrosion |₹30–₹100 |
| Float switch |Tank high/low level detection |Digital switch |₹50–₹200 |
| Waterproof leak-detection probe |Detect water leaks |Interface depends on model |₹50–₹250 |
| pH sensor interface kit |Measure liquid acidity/alkalinity |Requires calibration and suitable probe handling |₹500–₹2,000 |
| TDS / conductivity sensor kit |Estimate dissolved-solids/conductivity trends |Requires calibration; not a full water-safety test |₹1,000–₹2,500 |
| Turbidity sensor module |Demonstrate water cloudiness |Analog; optical geometry affects readings |₹150–₹500 |

### 3.5 Motion, distance, orientation, and vibration

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| HC-SR04 ultrasonic distance sensor |Measure distance for obstacle avoidance |Echo is commonly 5 V; protect 3.3 V inputs |₹65–₹120 |
| JSN-SR04T waterproof ultrasonic sensor |Outdoor or splash-resistant distance measurement |Check exact variant and echo voltage |₹250–₹600 |
| VL53L0X time-of-flight distance sensor |Short-range distance measurement |I²C; board voltage varies |₹150–₹400 |
| VL53L1X time-of-flight distance sensor |Distance measurement over a different range |I²C; check module specification |₹300–₹700 |
| HC-SR501 PIR motion sensor |Detect movement of warm bodies |Digital output; not person identification |₹65–₹120 |
| AM312 mini PIR sensor |Compact motion-triggered projects |Digital output |₹40–₹100 |
| RCWL-0516 microwave motion sensor |Detect movement |Digital output; can detect through some non-metallic materials |₹30–₹100 |
| MPU6050 6-axis accelerometer/gyroscope |Tilt and motion experiments |I²C |₹60–₹180 |
| MPU9250 9-axis motion sensor |Orientation experiments |I²C/SPI; module variants differ |₹250–₹700 |
| ADXL345 3-axis accelerometer |Acceleration and tilt |I²C/SPI |₹100–₹300 |
| QMC5883L magnetometer module |Compass experiments |I²C; calibrate away from magnetic interference |₹60–₹180 |
| SW-420 vibration module |Detect vibration/shock events |Digital comparator; threshold adjustment varies |₹25–₹80 |
| Hall-effect sensor (A3144-type) |Detect magnets and count rotations |Digital; check pull-up and output type |₹15–₹80 |
| Reed-switch magnetic contact |Door/window open-close demonstration |Digital switch |₹10–₹50 |
| Optical wheel encoder |Measure rotation/speed |Digital pulses |₹50–₹250 |
| TCRT5000 reflective IR sensor |Surface detection and line following |Analog/digital depending on module |₹25–₹80 |
| 3-channel / 5-channel line-tracking array |Line-following robots |Check sensor output type and mounting height |₹100–₹350 |
| Load cell with HX711 amplifier |Build a weighing scale |Calibrate with known weights |₹150–₹400 |

### 3.6 Location and navigation

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| NEO-6M GPS module |Basic location and time experiments |UART; needs suitable antenna and sky view |₹250–₹600 |
| u-blox NEO-M8N GNSS module |GNSS positioning experiments |Interface depends on breakout board |₹800–₹1,800 |
| Digital compass / magnetometer module |Heading estimation |Calibrate and keep away from motors/magnets |₹100–₹500 (estimate) |
| Wheel encoders |Robot odometry and distance estimation |Usually requires interrupt-capable inputs and calibration |₹50–₹250 |

## 4. Displays and User Interfaces

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| 1602 16×2 LCD with I²C backpack |Show readings, menus, status |Check backpack voltage and I²C address |₹100–₹250 |
| 2004 20×4 LCD with I²C backpack |More lines of text |Check backpack voltage and I²C address |₹250–₹450 |
| SSD1306 0.96-inch OLED |Compact text and graphics |I²C/SPI; resolution and address vary |₹100–₹250 |
| SH1106 1.3-inch OLED |Compact graphics |I²C/SPI; library differs from some SSD1306 modules |₹150–₹350 |
| ILI9341 TFT display |Colour graphics and touch interfaces |SPI; touchscreen may need a separate controller |₹250–₹600 |
| ST7735 TFT display |Small colour user interface |SPI |₹200–₹450 |
| E-paper display module |Low-power status display |Usually SPI; refresh and temperature limits vary |₹500–₹2,000 |
| MAX7219 LED matrix |Scrolling text and symbols |Serial-style interface |₹70–₹180 |
| TM1637 numeric display |Clock, timer, counter |Two-wire clock/data |₹50–₹120 |
| 4-digit / 6-digit 7-segment display |Numeric readings |Driver and interface depend on module |₹30–₹150 |
| Capacitive touchscreen module |Touch-based control |Controller and host support vary |₹300–₹1,500 |
| Rotary encoder with push switch |Navigate menus |Digital inputs |₹40–₹150 |
| Keypad module |PIN entry and selection |Matrix GPIO or I/O expander |₹100–₹500 (estimate) |
| Joystick module |Direction and speed input |Analog inputs plus button |₹50–₹150 |

## 5. Motors, Robotics, and Actuators

### 5.1 Motors and drivers

| Component / module |Purpose |Important note |Indicative unit price (INR) |
| --- |--- |--- |--- |
| SG90 micro servo |Small angle-controlled mechanisms |Use a suitable supply; signal pin does not power the motor |₹70–₹150 |
| MG90S metal-gear micro servo |Small mechanisms needing stronger gears |Check current and stall load |₹120–₹250 |
| MG996R high-torque servo |Larger mechanisms and robot arms |External supply usually required |₹250–₹500 |
| DC geared motor |Robot wheels and moving mechanisms |Use a motor driver; check stall current |₹80–₹250 |
| DC gear motor with encoder |Closed-loop speed/distance experiments |Encoder wiring and voltage vary |₹100–₹500 (estimate) |
| TT yellow gear motor |Common low-cost educational robot motor |Requires driver and suitable battery supply |₹70–₹150 |
| L298N dual H-bridge module |Drive two small DC motors |Older and inefficient; check heat/current limits |₹65–₹180 |
| TB6612FNG dual motor driver |Drive small DC motors efficiently |Check motor stall current and supply |₹100–₹250 |
| DRV8833 dual H-bridge module |Small robot motor control |Check board ratings and thermal limits |₹100–₹250 |
| L9110S dual motor driver |Small DC motor demonstrations |Limited current; check board documentation |₹40–₹100 |
| A4988 stepper driver |Stepper positioning |Set current limit; heatsinking may be needed |₹80–₹180 |
| DRV8825 stepper driver |Stepper positioning |Set current limit and motor supply correctly |₹100–₹250 |
| ULN2003 driver with 28BYJ-48 stepper |Small stepper experiments |Common education kit |₹100–₹200 |
| PCA9685 16-channel PWM/servo driver |Control multiple servos |Separate servo power supply often needed |₹100–₹300 |
| BTS7960 high-current H-bridge |Higher-current DC motor control |Requires careful supply, cooling, and wiring |₹150–₹350 |
| MOSFET DC load driver |Control fans, pumps, LEDs, and suitable DC loads |Use correct gate voltage, current rating, and protection |₹100–₹500 (estimate) |

### 5.2 Robot chassis and mechanical parts

| Component |Purpose |Notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| 2-wheel robot chassis kit |Build a basic mobile robot |Usually includes motors and wheels; verify contents |₹250–₹600 |
| 4-wheel robot chassis kit |Build a four-wheel robot |Motor-driver channel count matters |₹350–₹800 |
| Caster wheel |Stabilize a two-wheel robot |Match chassis height |₹20–₹80 |
| Robot wheels and hubs |Transfer motor rotation |Match motor shaft |₹50–₹200 |
| Servo bracket and robot-arm kit |Build a movable arm |Check servo torque and safe load |₹100–₹400 |
| Pan-tilt camera bracket |Aim a camera or sensor |Requires compatible servos and mounting holes |₹150–₹500 |
| Small gripper mechanism |Pick up light objects |Limit force and pinch hazards |₹200–₹800 |
| 3D-printed brackets / structural parts |Mount sensors and boards |Check fit, strength, and fasteners |₹30–₹300 |

### 5.3 Relays, switches, and other actuators

| Module |Purpose |Important note |Indicative unit price (INR) |
| --- |--- |--- |--- |
| 1-channel / 2-channel / 4-channel relay module |Switch compatible electrical loads |Confirm input logic, coil supply, isolation, and contact rating |₹40–₹250 |
| Solid-state relay module |Switch supported loads |AC/DC type and load current must match |₹40–₹250 |
| Solenoid with driver |Push/pull mechanical action |External supply and flyback protection required |₹100–₹500 |
| DC fan with driver |Ventilation and cooling |Do not power directly from a GPIO pin |₹50–₹250 |
| Small DC water pump |Automated watering and water movement |External supply and transistor/driver required |₹80–₹300 |
| Electromagnet module |Demonstrate magnetic actuation |Limit current and temperature |₹50–₹200 |
| Linear actuator with suitable driver |Controlled linear movement |Confirm voltage/current and end-stop protection |₹800–₹4,000 |

## 6. Communication, Wireless, and Networking

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| HC-05 Bluetooth Classic serial module |Phone-to-board serial control |Logic levels and role vary by breakout |₹150–₹350 |
| HC-06 Bluetooth Classic serial module |Basic Bluetooth serial link |Commonly slave-mode variants; verify board |₹120–₹250 |
| HM-10 BLE module |Bluetooth Low Energy communication |Clone firmware differs; test exact module |₹150–₹500 |
| nRF24L01+ radio module |Low-cost board-to-board wireless links |SPI; stable 3.3 V supply required |₹50–₹150 |
| SX1276/SX1278 LoRa module |Long-range low-data-rate telemetry |SPI; use legal regional frequency |₹150–₹600 |
| RFM95W LoRa module |LoRa communication |Match frequency and antenna |₹150–₹600 |
| W5500 Ethernet module |Wired networking |SPI |₹150–₹350 |
| ENC28J60 Ethernet module |Basic wired-network experiments |SPI; check library and performance limits |₹100–₹250 |
| MAX485 RS-485 transceiver module |Long-distance wired serial communication |UART; use correct termination and voltage |₹20–₹80 |
| CAN transceiver module (e.g. SN65HVD230-type) |CAN bus physical layer for supported controllers |A transceiver alone may not provide a CAN controller |₹50–₹200 |
| MCP2515 CAN controller with transceiver |CAN bus projects |SPI; check logic-voltage compatibility |₹100–₹300 |
| RC522 MFRC522 RFID reader |Read compatible RFID cards/tags |SPI; many boards use 3.3 V logic |₹80–₹200 |
| PN532 NFC/RFID reader |NFC and RFID experiments |I²C/SPI/UART depending on board |₹250–₹700 |
| SIM800L GSM/GPRS module |SMS and cellular data demos |2G availability and peak current are major constraints |₹250–₹600 |
| SIM7600 4G LTE module |Cellular data and some GNSS functions |Exact regional bands and carrier support required |₹2,000–₹6,000 |
| A7670 cellular module |Cellular connectivity projects |Model, bands, antenna, and supply vary |₹1,500–₹4,000 |
| ESP-01 / ESP-01S ESP8266 module |Add Wi-Fi to another microcontroller |3.3 V logic and stable supply; limited GPIO |₹80–₹180 |
| USB-to-UART adapter (CP2102/CH340/FT232 variant) |Programming and serial debugging |Match logic voltage and driver support |₹100–₹500 (estimate) |
| TCA9548A I²C multiplexer |Connect I²C devices with duplicate addresses |Check bus voltage and pull-ups |₹60–₹200 |
| MCP23017 GPIO expander |Add digital input/output pins |I²C |₹100–₹300 |
| PCF8574 I/O expander |Add simple digital I/O or support LCD backpacks |I²C; board voltage affects signal levels |₹30–₹100 |

## 7. Storage, Data Logging, and Analog Measurement

| Module |Purpose |Typical interface / notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| MicroSD card reader module |Save sensor data and files |SPI; check whether board includes level shifting |₹40–₹150 |
| AT24C256 I²C EEPROM |Store settings and small records |I²C; write endurance and capacity are limited |₹30–₹100 |
| I²C FRAM module |Frequent-write data logging |I²C; confirm chip and voltage |₹150–₹500 |
| ADS1115 16-bit ADC |Read analog signals with higher resolution |I²C; input range must stay within ratings |₹100–₹300 |
| ADS1015 12-bit ADC |External analog measurements |I²C |₹100–₹250 |
| MCP3008 8-channel ADC |Add analog inputs |SPI; input voltage must match supply/reference |₹100–₹250 |
| MCP4725 12-bit DAC |Generate a controlled analog voltage |I²C; output current is limited |₹100–₹250 |
| INA219 voltage/current/power monitor |Measure DC power use |I²C; check shunt and bus-voltage limits |₹80–₹200 |
| INA226 voltage/current/power monitor |More precise DC power measurement |I²C; check module ratings |₹150–₹400 |
| ACS712 current sensor |Measure DC/AC current within its design range |Analog output; choose the correct range |₹50–₹150 |
| MAX17048 battery fuel gauge |Estimate single-cell Li-ion battery state |I²C; battery chemistry and module wiring matter |₹100–₹300 |
| DS3231 RTC |Keep time for logs and schedules |I²C |₹80–₹200 |
| USB flash storage |Store larger files on supported host boards |Requires USB-host support and compatible software |₹300–₹800 |

## 8. Power, Charging, and Protection

| Component / module |Purpose |Important note |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Regulated USB power supply |Power board during development |Match connector and power requirements |₹150–₹500 |
| Battery holder (AA/AAA/18650) |Portable power experiments |Match cell chemistry, count, and board input limits |₹20–₹100 |
| Protected battery pack |Portable projects |Use cells and protection designed for the load |₹200–₹800 |
| DC-DC buck converter (LM2596-type) |Reduce DC voltage |Measure output before connecting |₹50–₹150 |
| DC-DC boost converter (MT3608-type) |Increase DC voltage |Output current is lower than input current; observe limits |₹30–₹100 |
| TP4056 single-cell Li-ion charger module |Charge one compatible Li-ion cell |Protection varies by board; use safe cells and charging practices |₹20–₹80 |
| BMS/protection board for a specific battery pack |Battery protection |Must match chemistry, cell count, and current |₹50–₹250 |
| Logic-level converter |Shift compatible signal levels |Not universal for all signals or bus speeds |₹25–₹100 |
| Optocoupler isolation module |Isolate supported control signals |Check isolation voltage and input/output ratings |₹50–₹200 |
| Fuse and holder assortment |Protect wiring from overcurrent |Choose fuse rating for the wire and load |₹20–₹150 |
| Emergency stop / main power switch |Stop power to a project |Select appropriate DC/AC voltage and current ratings |₹100–₹500 |
| Reverse-polarity protection module |Reduce damage from incorrect supply polarity |Confirm voltage drop and current rating |₹30–₹150 |

## 9. Cameras, Vision, and Edge AI

| Component / product |Purpose |Compatibility notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino Nicla Vision |Compact machine-vision and edge-AI projects |Integrated camera-oriented board; check current libraries |₹7,000–₹12,000 |
| Arduino UNO Q with supported USB camera/accessories |Vision, AI, and robotics projects |Use accessories explicitly supported by the board |₹5,600–₹6,000 |
| Arduino GIGA R1 WiFi with compatible camera hardware |Camera and advanced embedded experiments |Check connector, sensor, driver, and example support |₹5,000–₹7,500 |
| USB UVC webcam |Camera input for supported Linux/USB-host boards |Not a universal direct connection to ordinary Arduino microcontrollers |₹500–₹2,000 |
| OV2640 camera module |Image capture on supported camera-capable hardware |Requires a compatible camera interface, pinout, memory, and driver |₹150–₹500 |
| Arducam camera module (exact model) |Camera experiments with supported controller/interface |Verify model, interface, voltage, and library |₹500–₹3,000 |
| Camera pan-tilt bracket with servos |Aim camera for tracking experiments |Requires suitable servo supply and mechanical mounting |₹500–₹3,000 (estimate) |
| LED illumination module / ring light |Improve lighting for vision experiments |Supply and camera exposure matter |₹50–₹300 |

## 10. Arduino Shields, Carriers, and Expansion Boards

A **shield** or **carrier** adds connectors or functions to a controller board. It is not the same as a sensor module. A shield may fit physically but still be electrically or software-incompatible.

| Shield / carrier |Purpose |Compatibility notes |Indicative unit price (INR) |
| --- |--- |--- |--- |
| Arduino Motor Shield Rev3 |Control DC motors and compatible stepper configurations |Check current and supply limits |₹1,500–₹2,500 |
| Arduino Ethernet Shield Rev2 |Add wired Ethernet to supported boards |Confirm SPI pins and board compatibility |₹1,500–₹2,500 |
| Arduino 4 Relays Shield |Switch supported loads |Check exact shield revision and load ratings |₹1,000–₹2,000 |
| Arduino 9 Axis Motion Shield |Motion/orientation experiments |Check current availability and supported libraries |Check current listing |
| Arduino GIGA Display Shield |Touchscreen and display projects |GIGA R1 WiFi-specific |₹4,000–₹6,000 |
| Arduino MKR ETH Shield |Ethernet for supported MKR boards |MKR family compatibility only |₹2,000–₹3,000 |
| Arduino MKR GPS Shield |GNSS/location projects |Confirm board and shield support |₹2,000–₹3,000 |
| Arduino MKR Relay Proto Shield |Relay/prototyping tasks |Check exact MKR model and load rating |₹1,000–₹2,000 |
| Arduino Portenta Vision Shield |Vision / camera-related expansion for supported Portenta boards |Variant and connector matter |₹5,000–₹10,000 |
| Arduino Portenta Breakout / Max Carrier |Expose and expand supported Portenta interfaces |Confirm exact Portenta board |₹5,000–₹10,000 |
| Arduino Modulino Buttons |Plug-and-play button input |Supported host and connector required |₹700–₹1,500 |
| Arduino Modulino Buzzer |Sound output |Supported host and library required |₹700–₹1,500 |
| Arduino Modulino Distance |Distance sensing |Check supported board and range |₹700–₹1,500 |
| Arduino Modulino Knob |Rotary input |Check connector and library |₹700–₹1,500 |
| Arduino Modulino Movement |Motion sensing |Exact sensor and board support vary |₹700–₹1,500 |
| Arduino Modulino Pixels |Addressable pixel output |Follow power limits |₹700–₹1,500 |
| Arduino Modulino Thermo |Temperature sensing |Check supported host and library |₹700–₹1,500 |
| Arduino Modulino Joystick |Directional input |Check supported host and library |₹700–₹1,500 |
| Arduino Modulino Light |Light sensing |Check supported host and library |₹700–₹1,500 |
| Arduino Modulino Latch Relay |Relay output |Check load rating and safety |₹700–₹1,500 |
| Arduino Modulino Vibro |Vibration sensing |Check supported host and library |₹700–₹1,500 |
| Arduino Modulino LED Matrix |Matrix display |Check supported host and library |₹700–₹1,500 |
| Generic sensor shield / expansion board |Easier module wiring |Must match exact board pinout and voltage |₹80–₹250 |
| Nano-compatible terminal/Qwiic carrier |Easier connections to supported Nano boards and I²C modules |Nano family boards do not all share identical voltage or pin behavior |₹100–₹500 |

## 11. Common Project Bundles for School Activities

These are suggested combinations, not purchases or confirmed stock.

| Project theme |Example components |Indicative unit price (INR) |
| --- |--- |--- |
| Traffic light |UNO R3 or Nano, LEDs, resistors, push buttons, breadboard, jumper wires |Check exact model / seller |
| Automatic night lamp |UNO/Nano, LDR or BH1750, LED, resistor or MOSFET driver |Check exact model / seller |
| Temperature and humidity station |UNO/Nano, DHT22 or BME280, LCD/OLED, jumper wires |Check exact model / seller |
| Weather data logger |Controller, BME280, DS3231 RTC, microSD module |Check exact model / seller |
| Smart irrigation demonstrator |Controller, capacitive soil-moisture sensor, pump, MOSFET/relay driver, suitable external supply |Check exact model / seller |
| Obstacle-avoiding robot |UNO/Nano/Mega, ultrasonic sensor, motor driver, DC motors, chassis, wheels, battery |Check exact model / seller |
| Line-following robot |Controller, line-tracking array, motor driver, chassis, motors |Check exact model / seller |
| Bluetooth-controlled robot |Controller with supported Bluetooth or HC-05/HM-10, motor driver, chassis |Check exact model / seller |
| RFID attendance demonstrator |Controller, RC522 or PN532, cards/tags, display, buzzer |Check exact model / seller |
| Smart dustbin |Controller, ultrasonic sensor, servo, power supply |Check exact model / seller |
| Digital weighing scale |Controller, load cell, HX711, display |Check exact model / seller |
| Room air monitor |Controller, appropriate particulate/CO₂ sensor, display, enclosure |Check exact model / seller |
| Water-level alarm |Controller, float switch or level sensor, buzzer, indicator |Check exact model / seller |
| Solar/energy monitor |Controller, voltage/current sensor, safe measurement interface, display |Check exact model / seller |
| Gesture-controlled device |Compatible board, APDS-9960 or motion sensor, actuator driver |Check exact model / seller |
| Camera/vision project |Camera-capable board or supported Linux/USB-host board, camera, lighting, mount |Check exact model / seller |

## 12. Selection and Electrical Safety Rules

1. **Confirm the exact controller model and revision.** “Arduino” is an ecosystem, not one electrical specification.
2. **Check signal voltage before wiring.** UNO R3 and many classic boards use 5 V logic. Many modern boards—including Nano 33, Nano ESP32, ESP32-based, and several advanced boards—use 3.3 V logic. A 5 V output can damage a 3.3 V input.
3. **Do not assume a board's power input voltage is its GPIO logic voltage.** Check both in official documentation.
4. **Do not power motors, servos, pumps, relay coils, or LED strips directly from GPIO pins.** Use a suitable driver and external supply.
5. **Use a common ground when required by a non-isolated signal circuit.** Follow the exact module's wiring diagram.
6. **Check current draw and motor stall current.** A driver’s advertised peak current is not always its safe continuous current.
7. **Check interfaces.** I²C, SPI, UART, analog, PWM, USB host, and camera interfaces are not interchangeable.
8. **Check libraries and board-core support.** A library that works on UNO R3 may not work on UNO Q, Nano ESP32, or a Portenta board without changes.
9. **Keep mains electricity out of beginner breadboard circuits.** Mains-powered projects require qualified supervision, suitable enclosures, rated isolation, and compliant equipment.
10. **Treat gas, flame, pH, TDS, and water sensors as educational instruments unless they are certified and calibrated for the intended safety use.**
11. **Do not connect batteries or chargers by appearance alone.** Match cell chemistry, polarity, voltage, protection, and current rating.
12. **Record evidence.** Mark a component as physically available, tested, or verified only after checking the actual item.

## 13. Component Record Template

Use this record when the lab obtains or tests a component.

- **Component / full product name:**
- **Category:**
- **Manufacturer / model:**
- **Datasheet / official product URL:**
- **Compatible controller board(s):**
- **Interface:** GPIO / ADC / PWM / I²C / SPI / UART / USB / other
- **Supply voltage and current:**
- **Signal logic voltage:**
- **Required library / driver:**
- **Physical stock status:** Unknown / in stock / out of stock
- **Quantity physically counted:**
- **Condition:** New / working / damaged / needs testing
- **Test status:** Not tested / tested / verified
- **Storage location:**
- **Notes / limitations:**


## Price Reference and Budget Note

Prices are **indicative unit-price references in Indian rupees (INR)** for planning, checked against Indian electronics sellers and current online listings on **16 October 2026**. A price range is used where seller, authenticity, revision, or module quality varies. Exact live listing prices were available for only a subset of products; where a specific current listing could not be reliably confirmed, the table gives an estimate or says to check the exact model. These are not quotations or proof of stock. Shipping, taxes not included by the seller, and bulk discounts can change the checkout price. Check the linked seller pages before purchasing.

Price references checked: [TechyTron boards and modules](https://www.techytron.in/category/boards), [Techtonics original Arduino boards](https://techtonics.in/product-category/arduino/original-arduino-boards/), [TradeIndia Arduino board listings](https://www.tradeindia.com/manufacturers/arduino-board.html), [Anu Electronics](https://www.anuelectronics.in/), [Robocraze](https://robocraze.com/), and [Robu.in](https://robu.in/).

**Budget calculation:** This is a catalogue of alternatives, not a purchase order. There is no meaningful single grand total until quantities and selected alternatives are specified. Do not add every board and every alternative together as though all are required. For a purchase budget, calculate line total as unit price × quantity, then add all line totals plus shipping/other charges.

## References

- Arduino official hardware catalogue: https://docs.arduino.cc/hardware/
- Arduino official hardware overview: https://www.arduino.cc/hardware/
- Arduino UNO family overview: https://support.arduino.cc/hc/en-us/articles/7901453165724-An-overview-of-different-UNO-boards
- Arduino Nano family overview and electrical differences: https://support.arduino.cc/hc/en-us/articles/11264980365468-Nano-family-overview
- Arduino board wireless connectivity list: https://support.arduino.cc/hc/en-us/articles/4407129094546-Boards-and-shields-with-wireless-connectivity
- Arduino Mega 2560 Rev3 documentation: https://docs.arduino.cc/hardware/mega-2560
- Arduino GIGA R1 WiFi documentation: https://docs.arduino.cc/hardware/giga-r1-wifi
- Arduino Nano ESP32 documentation: https://docs.arduino.cc/hardware/nano-esp32
- Arduino Nano R4 documentation: https://docs.arduino.cc/hardware/nano-r4
