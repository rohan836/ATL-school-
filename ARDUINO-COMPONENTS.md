# Arduino Boards and Module Catalogue for the ATL Lab

## Purpose and Status

This document is a planning catalogue for future school projects. It lists Arduino boards and commonly available add-on modules, shields, sensors, actuators, and accessories. Each section is separated by function and explains what the components are used for.

**This is not a physical inventory.** An item in this document is not confirmed to be present in the school lab, purchased, or tested. Record actual stock separately in `HARDWARE-INVENTORY.md`.

Arduino's product range changes. This catalogue covers the major official board families and widely used board models, plus common Arduino-compatible boards. It is not a claim to list every historical revision, discontinued product, third-party clone, or seller-specific variant. Before choosing a component, check the exact board's official documentation, voltage, pinout, connector, and library support.

## 1. Arduino Controller Boards

Choose the controller board first. Modules connect to the board, so board voltage, available pins, memory, interfaces, and software support affect what can be built.

### 1.1 UNO Family — general classroom prototyping

| Board | Main purpose | Notes |
|---|---|---|
| Arduino UNO R3 | Beginner electronics, LEDs, buttons, basic sensors, simple robots | Classic 5 V, ATmega328P board; broad tutorial and shield support |
| Arduino UNO R3 SMD | Same learning and project uses as UNO R3 | SMD microcontroller version |
| Arduino UNO R4 Minima | Modern 32-bit general-purpose projects | Renesas RA4M1; check pin and library differences from R3 |
| Arduino UNO R4 WiFi | General prototyping with Wi-Fi/Bluetooth-capable wireless module and LED matrix | RA4M1 plus ESP32-S3 connectivity module; do not assume it behaves like an ESP32 development board |
| Arduino UNO Q | Projects combining Linux computing and microcontroller control, including vision and AI workflows | Dual-computing architecture; follow UNO Q-specific setup and accessory compatibility |
| Arduino UNO WiFi Rev2 | Wireless sensor and IoT projects | Different MCU/core from UNO R3; choose the correct board in Arduino IDE |
| Arduino UNO WiFi | Legacy Wi-Fi UNO projects | Older product; confirm availability and current support |
| Arduino UNO Mini Limited Edition | Compact UNO-style projects and education | Limited-edition product; not a separate general-purpose module |
| Arduino-compatible UNO R3 boards (for example, ATmega328P-based clones) | Low-cost classroom prototyping | USB interface chip, bootloader, voltage, and board quality vary by manufacturer |

### 1.2 Mega and large-I/O boards

| Board | Main purpose | Notes |
|---|---|---|
| Arduino Mega 2560 Rev3 | Projects requiring many pins, several serial devices, or more memory than UNO R3 | 54 digital I/O, 16 analog inputs, four hardware UARTs |
| Arduino Due | More demanding 32-bit embedded projects | 3.3 V logic; do not connect 5 V signals directly to pins |
| Arduino GIGA R1 WiFi | Advanced robotics, displays, USB host, audio, and complex prototypes | Dual-core STM32H747, many I/O pins, wireless connectivity; check peripheral voltage |
| Arduino GIGA Display Shield | Touchscreen and richer user interface for GIGA R1 WiFi | Designed for the GIGA family; not a generic UNO shield |

### 1.3 Nano Family — compact and breadboard-friendly

| Board | Main purpose | Notes |
|---|---|---|
| Arduino Nano (classic) | Breadboard experiments and compact projects | Commonly ATmega328P, 5 V; clones vary |
| Arduino Nano Every | Compact projects needing a newer AVR board | ATmega4809; check library and pin differences |
| Arduino Nano R4 | Compact 32-bit projects and sensor/automation prototypes | RA4M1, 5 V operating logic; includes Qwiic/I²C connector |
| Arduino Nano 33 IoT | Wi-Fi/Bluetooth Low Energy sensor and IoT projects | 3.3 V logic |
| Arduino Nano 33 BLE | BLE and motion-sensing projects | 3.3 V logic; onboard IMU |
| Arduino Nano 33 BLE Sense | TinyML, audio, environmental, and gesture experiments | Sensor set depends on revision |
| Arduino Nano 33 BLE Sense Rev2 | TinyML and onboard sensor projects | Updated sensor set; use Rev2 documentation |
| Arduino Nano RP2040 Connect | Wi-Fi/BLE, embedded sensing, and TinyML learning | RP2040-based board with wireless module and onboard sensors |
| Arduino Nano ESP32 | Wi-Fi/Bluetooth IoT and compact connected projects | ESP32-S3-based; 3.3 V logic; select the right board core |
| Arduino Nano Matter | Smart-home and Matter-over-Thread learning | Wireless module and ecosystem support are model-specific |
| Arduino Nano Connector Carrier | Easier connections for supported Nano boards | Confirm the exact Nano model and carrier pin mapping |
| Arduino Nano Motor Carrier | Small robotics and motor experiments with compatible Nano boards | Confirm supported Nano models, motors, and supply ratings |

### 1.4 Classic and other microcontroller boards

| Board | Main purpose | Notes |
|---|---|---|
| Arduino Leonardo | USB keyboard/mouse/game-controller emulation and general prototyping | ATmega32U4 supports native USB |
| Arduino Micro | Compact USB HID projects | Similar use cases to Leonardo in a smaller format |
| Arduino Zero | 32-bit embedded learning and prototyping | SAMD21-based; verify current availability and support |
| Arduino Yún | Legacy networked projects combining Linux and microcontroller control | Older product; document only if the lab actually has one |
| Arduino Esplora | Built-in-input/output learning and game-controller experiments | Legacy/discontinued product; availability varies |
| Arduino Ethernet (legacy) | Wired-networking experiments | Legacy board; use only if already available |

### 1.5 MKR Family — compact IoT and connectivity

| Board | Main purpose | Notes |
|---|---|---|
| Arduino MKR WiFi 1010 | Wi-Fi/BLE IoT | 3.3 V ecosystem; verify shield compatibility |
| Arduino MKR WAN 1300 | LoRa connectivity | External antenna and regional radio rules matter |
| Arduino MKR WAN 1310 | Low-power LoRa sensor nodes | LoRa radio; check frequency region |
| Arduino MKR GSM 1400 | Cellular-connected sensor projects | Network generation and local carrier availability must be checked |
| Arduino MKR NB 1500 | Narrowband IoT experiments | Requires compatible carrier/network and subscription |
| Arduino MKR FOX 1200 | Sigfox demonstrations | Service availability depends on region and operator |
| Arduino MKR Zero | Audio, SD-card, and embedded projects | Confirm board support and SD/audio wiring |
| Arduino MKR Vidor 4000 | FPGA and advanced digital-logic experiments | Specialized; check current software ecosystem |
| Arduino MKR1000 | Older Wi-Fi IoT projects | Legacy product; availability/support varies |

### 1.6 Portenta, Nicla, Opta, and advanced/industrial boards

| Board or family | Main purpose | Notes |
|---|---|---|
| Arduino Portenta H7 | High-performance embedded, industrial, and dual-core projects | Advanced board; use exact carrier and voltage documentation |
| Arduino Portenta H7 Lite Connected | Connected embedded/industrial projects | Variant-specific capabilities |
| Arduino Portenta C33 | Connected embedded and industrial applications | Check wireless, I/O, and supported core details |
| Arduino Portenta X8 | Linux-capable embedded computing and edge applications | Higher complexity than beginner microcontroller boards |
| Arduino Portenta Machine Control | Industrial automation and machine interfaces | Industrial I/O; follow official wiring and safety requirements |
| Arduino Portenta Max Carrier | Expansion for supported Portenta boards | Interface and radio support depend on board combination |
| Arduino Nicla Vision | Camera, machine vision, and edge-AI experiments | Integrated vision-oriented board; confirm model support |
| Arduino Nicla Sense ME | Compact environmental and motion sensing | Integrated sensors; check current software/library support |
| Arduino Nicla Voice | Voice/audio-triggered embedded projects | Specialized edge-audio board |
| Arduino Opta Lite / Opta WiFi / Opta RS485 | PLC-style automation, monitoring, and control | Industrial product family; follow electrical safety rules |
| Arduino VENTUNO Q | Advanced edge-AI and robotics projects | High-performance product; use current official hardware documentation |

### 1.7 Plug-and-play and education kits

| Product | Main purpose | Notes |
|---|---|---|
| Arduino Starter Kit / Starter Kit R4 | Structured beginner electronics lessons | Contents vary by kit edition |
| Arduino Student Kit | Guided school-level electronics and coding | Check current regional availability |
| Arduino Education kits | Classroom lesson plans and bundled parts | Verify the exact kit bill of materials |
| Arduino Sensor Kit | Guided sensor experiments | Contents depend on edition |
| Arduino Oplà IoT Kit | Connected home and IoT prototypes | Uses the included board and accessories |
| Arduino Plug and Make Kit | Modular plug-and-play projects | Includes specific supported modules; catalogue them individually if stocked |
| Arduino Modulino family | Plug-and-play sensors and input/output nodes using supported connectors | Check supported host board, connector, voltage, and library |

## 2. Basic Electronics and Input Components

### 2.1 Output, indicator, and sound

| Component / module | Purpose | Common connection |
|---|---|---|
| 5 mm LED assortment (red, green, blue, yellow, white) | Status lights and output indication | Digital pin through a current-limiting resistor |
| RGB LED module | Three-colour status and mixing colours | GPIO/PWM; check common-anode/common-cathode type |
| WS2812B addressable RGB LED strip/ring | Individually controlled light patterns | Data pin plus suitable power supply |
| APA102 addressable LED strip | Individually controlled LEDs with clock and data | Two signal lines plus suitable power |
| 8×8 LED matrix module (MAX7219) | Symbols, counters, scrolling text | Serial-style interface |
| 4-digit 7-segment display (TM1637) | Timers, counters, numeric values | Clock/data pins |
| 7-segment display module (MAX7219) | Numeric display | Serial-style interface |
| Active buzzer module | Beeps and alerts | Digital output; check voltage |
| Passive buzzer / piezo element | Tones, melodies, frequency experiments | Digital/PWM output |
| Small speaker with amplifier module | Sound output | Audio signal and separate supply as required |
| Push-button module | User input, start/stop controls | Digital input |
| Toggle/slide switch | On/off or mode selection | Digital input or power switching, depending on rating |
| Potentiometer module | Adjustable value, menu control, analog input | Analog input |
| Rotary encoder module (KY-040 type) | Menu navigation and rotation measurement | Digital inputs |
| 4×4 matrix keypad | PIN entry and menu input | Multiple digital pins |
| 4×3 matrix keypad | Numeric input | Multiple digital pins |
| TTP223 capacitive touch module | Touch button | Digital output |
| Joystick module (KY-023 type) | Two-axis movement control | Two analog inputs and one digital button |

### 2.2 Breadboard, wiring, and circuit building

| Component | Purpose | Notes |
|---|---|---|
| Solderless breadboard (small and full-size) | Build temporary circuits without soldering | Check rail connections and current limits |
| Jumper wires (male–male, male–female, female–female) | Connect boards, breadboards, and modules | Keep separate lengths and types |
| Resistor assortment | Current limiting, pull-ups, voltage dividers | Use correct resistance and power rating |
| Ceramic and electrolytic capacitor assortment | Filtering, timing, decoupling | Observe polarity for electrolytic capacitors |
| Diode assortment (1N4148, 1N400x, Schottky types) | Protection and rectification | Choose by current, voltage, and switching needs |
| Transistor assortment (NPN/PNP) | Switching and simple amplification | Verify pinout and ratings |
| Logic-level MOSFET module | Switch DC loads | Choose a genuine logic-level part for the board's gate voltage |
| Logic-level converter module | Connect supported 3.3 V and 5 V signals | Check direction and signal type |
| Voltage regulator / DC-DC buck module | Provide a suitable lower voltage | Measure output before connecting electronics |
| USB cable for exact board connector | Programming and power | Some cables provide power only; use a data cable |
| USB-to-serial adapter (3.3 V or 5 V variant) | Serial debugging and programming supported boards | Select correct logic voltage |
| Screw-terminal / breakout adapter | More secure wiring | Confirm board and pin mapping |
| Perfboard / prototyping PCB | Build semi-permanent circuits | Soldering required |
| Assorted headers and sockets | Make replaceable module connections | Match pin pitch and board footprint |

## 3. Sensors — Measure the Environment

### 3.1 Temperature, humidity, pressure, and weather

| Module | Purpose | Typical interface / notes |
|---|---|---|
| DHT11 temperature and humidity module | Basic classroom weather monitor | Digital; lower accuracy/range than newer options |
| DHT22 / AM2302 temperature and humidity module | Room and weather station | Digital |
| DS18B20 waterproof temperature probe | Measure liquid or outdoor temperature | One-wire; use the correct pull-up |
| BME280 temperature, humidity, and pressure module | Weather station and environmental logger | I²C/SPI |
| BMP280 barometric pressure module | Pressure and approximate altitude experiments | I²C/SPI; no humidity measurement |
| AHT20 temperature and humidity module | Environmental monitoring | I²C |
| SHT31 temperature and humidity module | More stable environmental measurements | I²C |
| DS3231 real-time clock module | Timestamp measurements | I²C; often includes a backup cell |
| MAX6675 / MAX31855 thermocouple interface with K-type probe | Higher-temperature measurement demonstrations | Interface varies; observe probe and board limits |

### 3.2 Light, colour, UV, and flame demonstrations

| Module | Purpose | Typical interface / notes |
|---|---|---|
| LDR photoresistor module | Detect light/dark conditions | Analog or digital comparator |
| BH1750 digital light sensor | Measure illuminance | I²C |
| TSL2591 high-dynamic-range light sensor | Measure a wide range of light levels | I²C |
| TCS34725 colour sensor | Read reflected colour / RGB values | I²C |
| APDS-9960 gesture, proximity, RGB, and ambient-light sensor | Gesture and proximity experiments | I²C |
| GUVA-S12SD UV sensor module | UV-level demonstration | Analog; calibrate and interpret cautiously |
| IR flame sensor module (KY-026 type) | Demonstrate infrared response to a flame | Not a certified fire alarm; never use as the only safety detector |
| IR receiver module (38 kHz type) | Receive signals from common IR remotes | Digital signal; remote protocol varies |
| IR transmitter LED module | Send IR remote-control signals | Drive current correctly |

### 3.3 Air quality, gas, and particles

| Module | Purpose | Typical interface / notes |
|---|---|---|
| MQ-2 smoke/combustible-gas sensor module | Gas-response demonstrations | Heater consumes power; warm-up and calibration needed |
| MQ-3 alcohol-response sensor module | Gas-sensor experiments | Not a calibrated breathalyser |
| MQ-7 carbon-monoxide sensor module | Demonstrate CO sensor response | Not a certified CO safety alarm |
| MQ-135 air-quality response module | Broad gas-response experiments | Not a precise universal air-quality meter |
| PMS5003 particulate-matter sensor | Measure airborne particles | UART; provide suitable power and airflow |
| SDS011 particulate-matter sensor | Particle concentration experiments | UART; suitable power required |
| SGP30 VOC/eCO₂ sensor | Indoor-air-quality demonstrations | I²C; eCO₂ is an estimate, not direct CO₂ measurement |
| SCD40 / SCD41 CO₂ sensor | Measure CO₂ and environmental data | I²C; follow calibration and ventilation guidance |
| CCS811 VOC/eCO₂ sensor | VOC-response and estimated CO₂ projects | I²C; observe warm-up and baseline requirements |

### 3.4 Soil, rain, and water

| Module | Purpose | Typical interface / notes |
|---|---|---|
| Capacitive soil-moisture sensor | Plant watering and smart-garden projects | Analog; often more durable than exposed-resistance probes |
| FC-28 / YL-69 resistive soil-moisture sensor | Basic soil-moisture experiment | Exposed probes corrode; limit powered time |
| Rain sensor plate and comparator board | Detect wetness/rain | Analog/digital; exposed plate may corrode |
| Water-level sensor strip | Detect water level/presence | Analog; protect against corrosion |
| Float switch | Tank high/low level detection | Digital switch |
| Waterproof leak-detection probe | Detect water leaks | Interface depends on model |
| pH sensor interface kit | Measure liquid acidity/alkalinity | Requires calibration and suitable probe handling |
| TDS / conductivity sensor kit | Estimate dissolved-solids/conductivity trends | Requires calibration; not a full water-safety test |
| Turbidity sensor module | Demonstrate water cloudiness | Analog; optical geometry affects readings |

### 3.5 Motion, distance, orientation, and vibration

| Module | Purpose | Typical interface / notes |
|---|---|---|
| HC-SR04 ultrasonic distance sensor | Measure distance for obstacle avoidance | Echo is commonly 5 V; protect 3.3 V inputs |
| JSN-SR04T waterproof ultrasonic sensor | Outdoor or splash-resistant distance measurement | Check exact variant and echo voltage |
| VL53L0X time-of-flight distance sensor | Short-range distance measurement | I²C; board voltage varies |
| VL53L1X time-of-flight distance sensor | Distance measurement over a different range | I²C; check module specification |
| HC-SR501 PIR motion sensor | Detect movement of warm bodies | Digital output; not person identification |
| AM312 mini PIR sensor | Compact motion-triggered projects | Digital output |
| RCWL-0516 microwave motion sensor | Detect movement | Digital output; can detect through some non-metallic materials |
| MPU6050 6-axis accelerometer/gyroscope | Tilt and motion experiments | I²C |
| MPU9250 9-axis motion sensor | Orientation experiments | I²C/SPI; module variants differ |
| ADXL345 3-axis accelerometer | Acceleration and tilt | I²C/SPI |
| QMC5883L magnetometer module | Compass experiments | I²C; calibrate away from magnetic interference |
| SW-420 vibration module | Detect vibration/shock events | Digital comparator; threshold adjustment varies |
| Hall-effect sensor (A3144-type) | Detect magnets and count rotations | Digital; check pull-up and output type |
| Reed-switch magnetic contact | Door/window open-close demonstration | Digital switch |
| Optical wheel encoder | Measure rotation/speed | Digital pulses |
| TCRT5000 reflective IR sensor | Surface detection and line following | Analog/digital depending on module |
| 3-channel / 5-channel line-tracking array | Line-following robots | Check sensor output type and mounting height |
| Load cell with HX711 amplifier | Build a weighing scale | Calibrate with known weights |

### 3.6 Location and navigation

| Module | Purpose | Typical interface / notes |
|---|---|---|
| NEO-6M GPS module | Basic location and time experiments | UART; needs suitable antenna and sky view |
| u-blox NEO-M8N GNSS module | GNSS positioning experiments | Interface depends on breakout board |
| Digital compass / magnetometer module | Heading estimation | Calibrate and keep away from motors/magnets |
| Wheel encoders | Robot odometry and distance estimation | Usually requires interrupt-capable inputs and calibration |

## 4. Displays and User Interfaces

| Module | Purpose | Typical interface / notes |
|---|---|---|
| 1602 16×2 LCD with I²C backpack | Show readings, menus, status | Check backpack voltage and I²C address |
| 2004 20×4 LCD with I²C backpack | More lines of text | Check backpack voltage and I²C address |
| SSD1306 0.96-inch OLED | Compact text and graphics | I²C/SPI; resolution and address vary |
| SH1106 1.3-inch OLED | Compact graphics | I²C/SPI; library differs from some SSD1306 modules |
| ILI9341 TFT display | Colour graphics and touch interfaces | SPI; touchscreen may need a separate controller |
| ST7735 TFT display | Small colour user interface | SPI |
| E-paper display module | Low-power status display | Usually SPI; refresh and temperature limits vary |
| MAX7219 LED matrix | Scrolling text and symbols | Serial-style interface |
| TM1637 numeric display | Clock, timer, counter | Two-wire clock/data |
| 4-digit / 6-digit 7-segment display | Numeric readings | Driver and interface depend on module |
| Capacitive touchscreen module | Touch-based control | Controller and host support vary |
| Rotary encoder with push switch | Navigate menus | Digital inputs |
| Keypad module | PIN entry and selection | Matrix GPIO or I/O expander |
| Joystick module | Direction and speed input | Analog inputs plus button |

## 5. Motors, Robotics, and Actuators

### 5.1 Motors and drivers

| Component / module | Purpose | Important note |
|---|---|---|
| SG90 micro servo | Small angle-controlled mechanisms | Use a suitable supply; signal pin does not power the motor |
| MG90S metal-gear micro servo | Small mechanisms needing stronger gears | Check current and stall load |
| MG996R high-torque servo | Larger mechanisms and robot arms | External supply usually required |
| DC geared motor | Robot wheels and moving mechanisms | Use a motor driver; check stall current |
| DC gear motor with encoder | Closed-loop speed/distance experiments | Encoder wiring and voltage vary |
| TT yellow gear motor | Common low-cost educational robot motor | Requires driver and suitable battery supply |
| L298N dual H-bridge module | Drive two small DC motors | Older and inefficient; check heat/current limits |
| TB6612FNG dual motor driver | Drive small DC motors efficiently | Check motor stall current and supply |
| DRV8833 dual H-bridge module | Small robot motor control | Check board ratings and thermal limits |
| L9110S dual motor driver | Small DC motor demonstrations | Limited current; check board documentation |
| A4988 stepper driver | Stepper positioning | Set current limit; heatsinking may be needed |
| DRV8825 stepper driver | Stepper positioning | Set current limit and motor supply correctly |
| ULN2003 driver with 28BYJ-48 stepper | Small stepper experiments | Common education kit |
| PCA9685 16-channel PWM/servo driver | Control multiple servos | Separate servo power supply often needed |
| BTS7960 high-current H-bridge | Higher-current DC motor control | Requires careful supply, cooling, and wiring |
| MOSFET DC load driver | Control fans, pumps, LEDs, and suitable DC loads | Use correct gate voltage, current rating, and protection |

### 5.2 Robot chassis and mechanical parts

| Component | Purpose | Notes |
|---|---|---|
| 2-wheel robot chassis kit | Build a basic mobile robot | Usually includes motors and wheels; verify contents |
| 4-wheel robot chassis kit | Build a four-wheel robot | Motor-driver channel count matters |
| Caster wheel | Stabilize a two-wheel robot | Match chassis height |
| Robot wheels and hubs | Transfer motor rotation | Match motor shaft |
| Servo bracket and robot-arm kit | Build a movable arm | Check servo torque and safe load |
| Pan-tilt camera bracket | Aim a camera or sensor | Requires compatible servos and mounting holes |
| Small gripper mechanism | Pick up light objects | Limit force and pinch hazards |
| 3D-printed brackets / structural parts | Mount sensors and boards | Check fit, strength, and fasteners |

### 5.3 Relays, switches, and other actuators

| Module | Purpose | Important note |
|---|---|---|
| 1-channel / 2-channel / 4-channel relay module | Switch compatible electrical loads | Confirm input logic, coil supply, isolation, and contact rating |
| Solid-state relay module | Switch supported loads | AC/DC type and load current must match |
| Solenoid with driver | Push/pull mechanical action | External supply and flyback protection required |
| DC fan with driver | Ventilation and cooling | Do not power directly from a GPIO pin |
| Small DC water pump | Automated watering and water movement | External supply and transistor/driver required |
| Electromagnet module | Demonstrate magnetic actuation | Limit current and temperature |
| Linear actuator with suitable driver | Controlled linear movement | Confirm voltage/current and end-stop protection |

## 6. Communication, Wireless, and Networking

| Module | Purpose | Typical interface / notes |
|---|---|---|
| HC-05 Bluetooth Classic serial module | Phone-to-board serial control | Logic levels and role vary by breakout |
| HC-06 Bluetooth Classic serial module | Basic Bluetooth serial link | Commonly slave-mode variants; verify board |
| HM-10 BLE module | Bluetooth Low Energy communication | Clone firmware differs; test exact module |
| nRF24L01+ radio module | Low-cost board-to-board wireless links | SPI; stable 3.3 V supply required |
| SX1276/SX1278 LoRa module | Long-range low-data-rate telemetry | SPI; use legal regional frequency |
| RFM95W LoRa module | LoRa communication | Match frequency and antenna |
| W5500 Ethernet module | Wired networking | SPI |
| ENC28J60 Ethernet module | Basic wired-network experiments | SPI; check library and performance limits |
| MAX485 RS-485 transceiver module | Long-distance wired serial communication | UART; use correct termination and voltage |
| CAN transceiver module (e.g. SN65HVD230-type) | CAN bus physical layer for supported controllers | A transceiver alone may not provide a CAN controller |
| MCP2515 CAN controller with transceiver | CAN bus projects | SPI; check logic-voltage compatibility |
| RC522 MFRC522 RFID reader | Read compatible RFID cards/tags | SPI; many boards use 3.3 V logic |
| PN532 NFC/RFID reader | NFC and RFID experiments | I²C/SPI/UART depending on board |
| SIM800L GSM/GPRS module | SMS and cellular data demos | 2G availability and peak current are major constraints |
| SIM7600 4G LTE module | Cellular data and some GNSS functions | Exact regional bands and carrier support required |
| A7670 cellular module | Cellular connectivity projects | Model, bands, antenna, and supply vary |
| ESP-01 / ESP-01S ESP8266 module | Add Wi-Fi to another microcontroller | 3.3 V logic and stable supply; limited GPIO |
| USB-to-UART adapter (CP2102/CH340/FT232 variant) | Programming and serial debugging | Match logic voltage and driver support |
| TCA9548A I²C multiplexer | Connect I²C devices with duplicate addresses | Check bus voltage and pull-ups |
| MCP23017 GPIO expander | Add digital input/output pins | I²C |
| PCF8574 I/O expander | Add simple digital I/O or support LCD backpacks | I²C; board voltage affects signal levels |

## 7. Storage, Data Logging, and Analog Measurement

| Module | Purpose | Typical interface / notes |
|---|---|---|
| MicroSD card reader module | Save sensor data and files | SPI; check whether board includes level shifting |
| AT24C256 I²C EEPROM | Store settings and small records | I²C; write endurance and capacity are limited |
| I²C FRAM module | Frequent-write data logging | I²C; confirm chip and voltage |
| ADS1115 16-bit ADC | Read analog signals with higher resolution | I²C; input range must stay within ratings |
| ADS1015 12-bit ADC | External analog measurements | I²C |
| MCP3008 8-channel ADC | Add analog inputs | SPI; input voltage must match supply/reference |
| MCP4725 12-bit DAC | Generate a controlled analog voltage | I²C; output current is limited |
| INA219 voltage/current/power monitor | Measure DC power use | I²C; check shunt and bus-voltage limits |
| INA226 voltage/current/power monitor | More precise DC power measurement | I²C; check module ratings |
| ACS712 current sensor | Measure DC/AC current within its design range | Analog output; choose the correct range |
| MAX17048 battery fuel gauge | Estimate single-cell Li-ion battery state | I²C; battery chemistry and module wiring matter |
| DS3231 RTC | Keep time for logs and schedules | I²C |
| USB flash storage | Store larger files on supported host boards | Requires USB-host support and compatible software |

## 8. Power, Charging, and Protection

| Component / module | Purpose | Important note |
|---|---|---|
| Regulated USB power supply | Power board during development | Match connector and power requirements |
| Battery holder (AA/AAA/18650) | Portable power experiments | Match cell chemistry, count, and board input limits |
| Protected battery pack | Portable projects | Use cells and protection designed for the load |
| DC-DC buck converter (LM2596-type) | Reduce DC voltage | Measure output before connecting |
| DC-DC boost converter (MT3608-type) | Increase DC voltage | Output current is lower than input current; observe limits |
| TP4056 single-cell Li-ion charger module | Charge one compatible Li-ion cell | Protection varies by board; use safe cells and charging practices |
| BMS/protection board for a specific battery pack | Battery protection | Must match chemistry, cell count, and current |
| Logic-level converter | Shift compatible signal levels | Not universal for all signals or bus speeds |
| Optocoupler isolation module | Isolate supported control signals | Check isolation voltage and input/output ratings |
| Fuse and holder assortment | Protect wiring from overcurrent | Choose fuse rating for the wire and load |
| Emergency stop / main power switch | Stop power to a project | Select appropriate DC/AC voltage and current ratings |
| Reverse-polarity protection module | Reduce damage from incorrect supply polarity | Confirm voltage drop and current rating |

## 9. Cameras, Vision, and Edge AI

| Component / product | Purpose | Compatibility notes |
|---|---|---|
| Arduino Nicla Vision | Compact machine-vision and edge-AI projects | Integrated camera-oriented board; check current libraries |
| Arduino UNO Q with supported USB camera/accessories | Vision, AI, and robotics projects | Use accessories explicitly supported by the board |
| Arduino GIGA R1 WiFi with compatible camera hardware | Camera and advanced embedded experiments | Check connector, sensor, driver, and example support |
| USB UVC webcam | Camera input for supported Linux/USB-host boards | Not a universal direct connection to ordinary Arduino microcontrollers |
| OV2640 camera module | Image capture on supported camera-capable hardware | Requires a compatible camera interface, pinout, memory, and driver |
| Arducam camera module (exact model) | Camera experiments with supported controller/interface | Verify model, interface, voltage, and library |
| Camera pan-tilt bracket with servos | Aim camera for tracking experiments | Requires suitable servo supply and mechanical mounting |
| LED illumination module / ring light | Improve lighting for vision experiments | Supply and camera exposure matter |

## 10. Arduino Shields, Carriers, and Expansion Boards

A **shield** or **carrier** adds connectors or functions to a controller board. It is not the same as a sensor module. A shield may fit physically but still be electrically or software-incompatible.

| Shield / carrier | Purpose | Compatibility notes |
|---|---|---|
| Arduino Motor Shield Rev3 | Control DC motors and compatible stepper configurations | Check current and supply limits |
| Arduino Ethernet Shield Rev2 | Add wired Ethernet to supported boards | Confirm SPI pins and board compatibility |
| Arduino 4 Relays Shield | Switch supported loads | Check exact shield revision and load ratings |
| Arduino 9 Axis Motion Shield | Motion/orientation experiments | Check current availability and supported libraries |
| Arduino GIGA Display Shield | Touchscreen and display projects | GIGA R1 WiFi-specific |
| Arduino MKR ETH Shield | Ethernet for supported MKR boards | MKR family compatibility only |
| Arduino MKR GPS Shield | GNSS/location projects | Confirm board and shield support |
| Arduino MKR Relay Proto Shield | Relay/prototyping tasks | Check exact MKR model and load rating |
| Arduino Portenta Vision Shield | Vision / camera-related expansion for supported Portenta boards | Variant and connector matter |
| Arduino Portenta Breakout / Max Carrier | Expose and expand supported Portenta interfaces | Confirm exact Portenta board |
| Arduino Modulino Buttons | Plug-and-play button input | Supported host and connector required |
| Arduino Modulino Buzzer | Sound output | Supported host and library required |
| Arduino Modulino Distance | Distance sensing | Check supported board and range |
| Arduino Modulino Knob | Rotary input | Check connector and library |
| Arduino Modulino Movement | Motion sensing | Exact sensor and board support vary |
| Arduino Modulino Pixels | Addressable pixel output | Follow power limits |
| Arduino Modulino Thermo | Temperature sensing | Check supported host and library |
| Arduino Modulino Joystick | Directional input | Check supported host and library |
| Arduino Modulino Light | Light sensing | Check supported host and library |
| Arduino Modulino Latch Relay | Relay output | Check load rating and safety |
| Arduino Modulino Vibro | Vibration sensing | Check supported host and library |
| Arduino Modulino LED Matrix | Matrix display | Check supported host and library |
| Generic sensor shield / expansion board | Easier module wiring | Must match exact board pinout and voltage |
| Nano-compatible terminal/Qwiic carrier | Easier connections to supported Nano boards and I²C modules | Nano family boards do not all share identical voltage or pin behavior |

## 11. Common Project Bundles for School Activities

These are suggested combinations, not purchases or confirmed stock.

| Project theme | Example components |
|---|---|
| Traffic light | UNO R3 or Nano, LEDs, resistors, push buttons, breadboard, jumper wires |
| Automatic night lamp | UNO/Nano, LDR or BH1750, LED, resistor or MOSFET driver |
| Temperature and humidity station | UNO/Nano, DHT22 or BME280, LCD/OLED, jumper wires |
| Weather data logger | Controller, BME280, DS3231 RTC, microSD module |
| Smart irrigation demonstrator | Controller, capacitive soil-moisture sensor, pump, MOSFET/relay driver, suitable external supply |
| Obstacle-avoiding robot | UNO/Nano/Mega, ultrasonic sensor, motor driver, DC motors, chassis, wheels, battery |
| Line-following robot | Controller, line-tracking array, motor driver, chassis, motors |
| Bluetooth-controlled robot | Controller with supported Bluetooth or HC-05/HM-10, motor driver, chassis |
| RFID attendance demonstrator | Controller, RC522 or PN532, cards/tags, display, buzzer |
| Smart dustbin | Controller, ultrasonic sensor, servo, power supply |
| Digital weighing scale | Controller, load cell, HX711, display |
| Room air monitor | Controller, appropriate particulate/CO₂ sensor, display, enclosure |
| Water-level alarm | Controller, float switch or level sensor, buzzer, indicator |
| Solar/energy monitor | Controller, voltage/current sensor, safe measurement interface, display |
| Gesture-controlled device | Compatible board, APDS-9960 or motion sensor, actuator driver |
| Camera/vision project | Camera-capable board or supported Linux/USB-host board, camera, lighting, mount |

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
