# Arduino Boards and Module Catalogue for the ATL Lab

## Purpose and Status

This document is a planning catalogue for future school projects. It lists Arduino boards and commonly available add-on modules, shields, sensors, actuators, and accessories. Each section is separated by function and explains what the components are used for.

**This is not a physical inventory.** An item in this document is not confirmed to be present in the school lab, purchased, or tested. Record actual stock separately in `HARDWARE-INVENTORY.md`.

Arduino's product range changes. This catalogue covers the major official board families and widely used board models, plus common Arduino-compatible boards. It is not a claim to list every historical revision, discontinued product, third-party clone, or seller-specific variant. Before choosing a component, check the exact board's official documentation, voltage, pinout, connector, and library support.

## 1. Arduino Controller Boards

Choose the controller board first. Modules connect to the board, so board voltage, available pins, memory, interfaces, and software support affect what can be built.

### 1.1 UNO Family — general classroom prototyping

| Board | Main purpose | Notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino UNO R3 | Beginner electronics, LEDs, buttons, basic sensors, simple robots | Classic 5 V, ATmega328P board; broad tutorial and shield support | ₹2,025 | 1 | ₹2,025 | [Amazon listing](https://www.amazon.in/dp/B0044X2E5S) |
| Arduino UNO R3 SMD | Same learning and project uses as UNO R3 | SMD microcontroller version | ₹319 | 1 | ₹319 | [Amazon search](https://www.amazon.in/s?k=Arduino%20UNO%20R3%20SMD) |
| Arduino UNO R4 Minima | Modern 32-bit general-purpose projects | Renesas RA4M1; check pin and library differences from R3 | ₹1,450 | 1 | ₹1,450 | [Amazon search](https://www.amazon.in/s?k=Arduino%20UNO%20R4%20Minima) |
| Arduino UNO R4 WiFi | General prototyping with Wi-Fi/Bluetooth-capable wireless module and LED matrix | RA4M1 plus ESP32-S3 connectivity module; do not assume it behaves like an ESP32 development board | ₹1,982 | 1 | ₹1,982 | [Amazon listing](https://www.amazon.in/dp/B0F9X19JYB) |
| Arduino UNO Q | Projects combining Linux computing and microcontroller control, including vision and AI workflows | Dual-computing architecture; follow UNO Q-specific setup and accessory compatibility | ₹5,949 | 1 | ₹5,949 | [Amazon search](https://www.amazon.in/s?k=Arduino%20UNO%20Q) |
| Arduino UNO WiFi Rev2 | Wireless sensor and IoT projects | Different MCU/core from UNO R3; choose the correct board in Arduino IDE | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20UNO%20WiFi%20Rev2) |
| Arduino UNO WiFi | Legacy Wi-Fi UNO projects | Older product; confirm availability and current support | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20UNO%20WiFi) |
| Arduino UNO Mini Limited Edition | Compact UNO-style projects and education | Limited-edition product; not a separate general-purpose module | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20UNO%20Mini%20Limited%20Edition) |
| Arduino-compatible UNO R3 boards (for example, ATmega328P-based clones) | Low-cost classroom prototyping | USB interface chip, bootloader, voltage, and board quality vary by manufacturer | ₹549 | 1 | ₹549 | [Amazon search](https://www.amazon.in/s?k=Arduino-compatible%20UNO%20R3%20boards%20(for%20example%2C%20ATmega328P-based%20clones)) |

### 1.2 Mega and large-I/O boards

| Board | Main purpose | Notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino Mega 2560 Rev3 | Projects requiring many pins, several serial devices, or more memory than UNO R3 | 54 digital I/O, 16 analog inputs, four hardware UARTs | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Mega%202560%20Rev3) |
| Arduino Due | More demanding 32-bit embedded projects | 3.3 V logic; do not connect 5 V signals directly to pins | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Due) |
| Arduino GIGA R1 WiFi | Advanced robotics, displays, USB host, audio, and complex prototypes | Dual-core STM32H747, many I/O pins, wireless connectivity; check peripheral voltage | ₹6,397 | 1 | ₹6,397 | [Amazon search](https://www.amazon.in/s?k=Arduino%20GIGA%20R1%20WiFi) |
| Arduino GIGA Display Shield | Touchscreen and richer user interface for GIGA R1 WiFi | Designed for the GIGA family; not a generic UNO shield | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20GIGA%20Display%20Shield) |

### 1.3 Nano Family — compact and breadboard-friendly

| Board | Main purpose | Notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino Nano (classic) | Breadboard experiments and compact projects | Commonly ATmega328P, 5 V; clones vary | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%20(classic)) |
| Arduino Nano Every | Compact projects needing a newer AVR board | ATmega4809; check library and pin differences | ₹4,231 | 1 | ₹4,231 | [Amazon listing](https://www.amazon.in/dp/B07WWK29XF) |
| Arduino Nano R4 | Compact 32-bit projects and sensor/automation prototypes | RA4M1, 5 V operating logic; includes Qwiic/I²C connector | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%20R4) |
| Arduino Nano 33 IoT | Wi-Fi/Bluetooth Low Energy sensor and IoT projects | 3.3 V logic | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%2033%20IoT) |
| Arduino Nano 33 BLE | BLE and motion-sensing projects | 3.3 V logic; onboard IMU | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%2033%20BLE) |
| Arduino Nano 33 BLE Sense | TinyML, audio, environmental, and gesture experiments | Sensor set depends on revision | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%2033%20BLE%20Sense) |
| Arduino Nano 33 BLE Sense Rev2 | TinyML and onboard sensor projects | Updated sensor set; use Rev2 documentation | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%2033%20BLE%20Sense%20Rev2) |
| Arduino Nano RP2040 Connect | Wi-Fi/BLE, embedded sensing, and TinyML learning | RP2040-based board with wireless module and onboard sensors | ₹2,279 | 1 | ₹2,279 | [Amazon search](https://www.amazon.in/s?k=Arduino%20Nano%20RP2040%20Connect) |
| Arduino Nano ESP32 | Wi-Fi/Bluetooth IoT and compact connected projects | ESP32-S3-based; 3.3 V logic; select the right board core | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%20ESP32) |
| Arduino Nano Matter | Smart-home and Matter-over-Thread learning | Wireless module and ecosystem support are model-specific | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%20Matter) |
| Arduino Nano Connector Carrier | Easier connections for supported Nano boards | Confirm the exact Nano model and carrier pin mapping | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%20Connector%20Carrier) |
| Arduino Nano Motor Carrier | Small robotics and motor experiments with compatible Nano boards | Confirm supported Nano models, motors, and supply ratings | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nano%20Motor%20Carrier) |

### 1.4 Classic and other microcontroller boards

| Board | Main purpose | Notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino Leonardo | USB keyboard/mouse/game-controller emulation and general prototyping | ATmega32U4 supports native USB | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Leonardo) |
| Arduino Micro | Compact USB HID projects | Similar use cases to Leonardo in a smaller format | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Micro) |
| Arduino Zero | 32-bit embedded learning and prototyping | SAMD21-based; verify current availability and support | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Zero) |
| Arduino Yún | Legacy networked projects combining Linux and microcontroller control | Older product; document only if the lab actually has one | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Y%C3%BAn) |
| Arduino Esplora | Built-in-input/output learning and game-controller experiments | Legacy/discontinued product; availability varies | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Esplora) |
| Arduino Ethernet (legacy) | Wired-networking experiments | Legacy board; use only if already available | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Ethernet%20(legacy)) |

### 1.5 MKR Family — compact IoT and connectivity

| Board | Main purpose | Notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino MKR WiFi 1010 | Wi-Fi/BLE IoT | 3.3 V ecosystem; verify shield compatibility | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20WiFi%201010) |
| Arduino MKR WAN 1300 | LoRa connectivity | External antenna and regional radio rules matter | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20WAN%201300) |
| Arduino MKR WAN 1310 | Low-power LoRa sensor nodes | LoRa radio; check frequency region | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20WAN%201310) |
| Arduino MKR GSM 1400 | Cellular-connected sensor projects | Network generation and local carrier availability must be checked | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20GSM%201400) |
| Arduino MKR NB 1500 | Narrowband IoT experiments | Requires compatible carrier/network and subscription | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20NB%201500) |
| Arduino MKR FOX 1200 | Sigfox demonstrations | Service availability depends on region and operator | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20FOX%201200) |
| Arduino MKR Zero | Audio, SD-card, and embedded projects | Confirm board support and SD/audio wiring | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20Zero) |
| Arduino MKR Vidor 4000 | FPGA and advanced digital-logic experiments | Specialized; check current software ecosystem | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20Vidor%204000) |
| Arduino MKR1000 | Older Wi-Fi IoT projects | Legacy product; availability/support varies | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR1000) |

### 1.6 Portenta, Nicla, Opta, and advanced/industrial boards

| Board or family | Main purpose | Notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino Portenta H7 | High-performance embedded, industrial, and dual-core projects | Advanced board; use exact carrier and voltage documentation | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Portenta%20H7) |
| Arduino Portenta H7 Lite Connected | Connected embedded/industrial projects | Variant-specific capabilities | ₹9,110 | 1 | ₹9,110 | [Amazon search](https://www.amazon.in/s?k=Arduino%20Portenta%20H7%20Lite%20Connected) |
| Arduino Portenta C33 | Connected embedded and industrial applications | Check wireless, I/O, and supported core details | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Portenta%20C33) |
| Arduino Portenta X8 | Linux-capable embedded computing and edge applications | Higher complexity than beginner microcontroller boards | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Portenta%20X8) |
| Arduino Portenta Machine Control | Industrial automation and machine interfaces | Industrial I/O; follow official wiring and safety requirements | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Portenta%20Machine%20Control) |
| Arduino Portenta Max Carrier | Expansion for supported Portenta boards | Interface and radio support depend on board combination | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Portenta%20Max%20Carrier) |
| Arduino Nicla Vision | Camera, machine vision, and edge-AI experiments | Integrated vision-oriented board; confirm model support | ₹8,050 | 1 | ₹8,050 | [Amazon search](https://www.amazon.in/s?k=Arduino%20Nicla%20Vision) |
| Arduino Nicla Sense ME | Compact environmental and motion sensing | Integrated sensors; check current software/library support | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nicla%20Sense%20ME) |
| Arduino Nicla Voice | Voice/audio-triggered embedded projects | Specialized edge-audio board | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Nicla%20Voice) |
| Arduino Opta Lite / Opta WiFi / Opta RS485 | PLC-style automation, monitoring, and control | Industrial product family; follow electrical safety rules | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Opta%20Lite%20%2F%20Opta%20WiFi%20%2F%20Opta%20RS485) |
| Arduino VENTUNO Q | Advanced edge-AI and robotics projects | High-performance product; use current official hardware documentation | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20VENTUNO%20Q) |

### 1.7 Plug-and-play and education kits

| Product | Main purpose | Notes | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Product) |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino Starter Kit / Starter Kit R4 | Structured beginner electronics lessons | Contents vary by kit edition | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Starter%20Kit%20%2F%20Starter%20Kit%20R4) |
| Arduino Student Kit | Guided school-level electronics and coding | Check current regional availability | ₹6,495 | 1 | ₹6,495 | [Amazon search](https://www.amazon.in/s?k=Arduino%20Student%20Kit) |
| Arduino Education kits | Classroom lesson plans and bundled parts | Verify the exact kit bill of materials | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Education%20kits) |
| Arduino Sensor Kit | Guided sensor experiments | Contents depend on edition | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Sensor%20Kit) |
| Arduino Oplà IoT Kit | Connected home and IoT prototypes | Uses the included board and accessories | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Opl%C3%A0%20IoT%20Kit) |
| Arduino Plug and Make Kit | Modular plug-and-play projects | Includes specific supported modules; catalogue them individually if stocked | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Plug%20and%20Make%20Kit) |
| Arduino Modulino family | Plug-and-play sensors and input/output nodes using supported connectors | Check supported host board, connector, voltage, and library | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20family) |

## 2. Basic Electronics and Input Components

### 2.1 Output, indicator, and sound

| Component / module | Purpose | Common connection | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| 5 mm LED assortment (red, green, blue, yellow, white) | Status lights and output indication | Digital pin through a current-limiting resistor | ₹169 (50-piece pack) | 1 | ₹169 | [Amazon listing](https://www.amazon.in/dp/B0B4KB4RPH) |
| RGB LED module | Three-colour status and mixing colours | GPIO/PWM; check common-anode/common-cathode type | ₹159 | 1 | ₹159 | [Amazon search](https://www.amazon.in/s?k=RGB%20LED%20module) |
| WS2812B addressable RGB LED strip/ring | Individually controlled light patterns | Data pin plus suitable power supply | ₹399 (50-pixel pack) | 1 | ₹399 | [Amazon search](https://www.amazon.in/s?k=WS2812B%20addressable%20RGB%20LED%20strip%2Fring) |
| APA102 addressable LED strip | Individually controlled LEDs with clock and data | Two signal lines plus suitable power | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=APA102%20addressable%20LED%20strip) |
| 8×8 LED matrix module (MAX7219) | Symbols, counters, scrolling text | Serial-style interface | ₹1,013 (6-module pack) | 1 | ₹1,013 | [Amazon search](https://www.amazon.in/s?k=8%C3%978%20LED%20matrix%20module%20(MAX7219)) |
| 4-digit 7-segment display (TM1637) | Timers, counters, numeric values | Clock/data pins | ₹289 | 1 | ₹289 | [Amazon search](https://www.amazon.in/s?k=4-digit%207-segment%20display%20(TM1637)) |
| 7-segment display module (MAX7219) | Numeric display | Serial-style interface | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=7-segment%20display%20module%20(MAX7219)) |
| Active buzzer module | Beeps and alerts | Digital output; check voltage | ₹167 (5-piece pack) | 1 | ₹167 | [Amazon search](https://www.amazon.in/s?k=Active%20buzzer%20module) |
| Passive buzzer / piezo element | Tones, melodies, frequency experiments | Digital/PWM output | ₹199 (2-piece pack) | 1 | ₹199 | [Amazon search](https://www.amazon.in/s?k=Passive%20buzzer%20%2F%20piezo%20element) |
| Small speaker with amplifier module | Sound output | Audio signal and separate supply as required | ₹154 | 1 | ₹154 | [Amazon search](https://www.amazon.in/s?k=Small%20speaker%20with%20amplifier%20module) |
| Push-button module | User input, start/stop controls | Digital input | ₹91 | 1 | ₹91 | [Amazon search](https://www.amazon.in/s?k=Push-button%20module) |
| Toggle/slide switch | On/off or mode selection | Digital input or power switching, depending on rating | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Toggle%2Fslide%20switch) |
| Potentiometer module | Adjustable value, menu control, analog input | Analog input | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Potentiometer%20module) |
| Rotary encoder module (KY-040 type) | Menu navigation and rotation measurement | Digital inputs | ₹110 | 1 | ₹110 | [Amazon search](https://www.amazon.in/s?k=Rotary%20encoder%20module%20(KY-040%20type)) |
| 4×4 matrix keypad | PIN entry and menu input | Multiple digital pins | ₹499 (5-piece pack) | 1 | ₹499 | [Amazon search](https://www.amazon.in/s?k=4%C3%974%20matrix%20keypad) |
| 4×3 matrix keypad | Numeric input | Multiple digital pins | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=4%C3%973%20matrix%20keypad) |
| TTP223 capacitive touch module | Touch button | Digital output | ₹119 | 1 | ₹119 | [Amazon search](https://www.amazon.in/s?k=TTP223%20capacitive%20touch%20module) |
| Joystick module (KY-023 type) | Two-axis movement control | Two analog inputs and one digital button | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Joystick%20module%20(KY-023%20type)) |

### 2.2 Breadboard, wiring, and circuit building

| Component | Purpose | Notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Solderless breadboard (small and full-size) | Build temporary circuits without soldering | Check rail connections and current limits | ₹135 | 1 | ₹135 | [Amazon search](https://www.amazon.in/s?k=Solderless%20breadboard%20(small%20and%20full-size)) |
| Jumper wires (male–male, male–female, female–female) | Connect boards, breadboards, and modules | Keep separate lengths and types | ₹158 (30-wire pack) | 1 | ₹158 | [Amazon listing](https://www.amazon.in/dp/B074J9CPV3) |
| Resistor assortment | Current limiting, pull-ups, voltage dividers | Use correct resistance and power rating | ₹157 (320-piece kit) | 1 | ₹157 | [Amazon search](https://www.amazon.in/s?k=Resistor%20assortment) |
| Ceramic and electrolytic capacitor assortment | Filtering, timing, decoupling | Observe polarity for electrolytic capacitors | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Ceramic%20and%20electrolytic%20capacitor%20assortment) |
| Diode assortment (1N4148, 1N400x, Schottky types) | Protection and rectification | Choose by current, voltage, and switching needs | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Diode%20assortment%20(1N4148%2C%201N400x%2C%20Schottky%20types)) |
| Transistor assortment (NPN/PNP) | Switching and simple amplification | Verify pinout and ratings | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Transistor%20assortment%20(NPN%2FPNP)) |
| Logic-level MOSFET module | Switch DC loads | Choose a genuine logic-level part for the board's gate voltage | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Logic-level%20MOSFET%20module) |
| Logic-level converter module | Connect supported 3.3 V and 5 V signals | Check direction and signal type | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Logic-level%20converter%20module) |
| Voltage regulator / DC-DC buck module | Provide a suitable lower voltage | Measure output before connecting electronics | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Voltage%20regulator%20%2F%20DC-DC%20buck%20module) |
| USB cable for exact board connector | Programming and power | Some cables provide power only; use a data cable | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=USB%20cable%20for%20exact%20board%20connector) |
| USB-to-serial adapter (3.3 V or 5 V variant) | Serial debugging and programming supported boards | Select correct logic voltage | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=USB-to-serial%20adapter%20(3.3%20V%20or%205%20V%20variant)) |
| Screw-terminal / breakout adapter | More secure wiring | Confirm board and pin mapping | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Screw-terminal%20%2F%20breakout%20adapter) |
| Perfboard / prototyping PCB | Build semi-permanent circuits | Soldering required | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Perfboard%20%2F%20prototyping%20PCB) |
| Assorted headers and sockets | Make replaceable module connections | Match pin pitch and board footprint | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Assorted%20headers%20and%20sockets) |

## 3. Sensors — Measure the Environment

### 3.1 Temperature, humidity, pressure, and weather

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| DHT11 temperature and humidity module | Basic classroom weather monitor | Digital; lower accuracy/range than newer options | ₹225 | 1 | ₹225 | [Amazon search](https://www.amazon.in/s?k=DHT11%20temperature%20and%20humidity%20module) |
| DHT22 / AM2302 temperature and humidity module | Room and weather station | Digital | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=DHT22%20%2F%20AM2302%20temperature%20and%20humidity%20module) |
| DS18B20 waterproof temperature probe | Measure liquid or outdoor temperature | One-wire; use the correct pull-up | ₹329 | 1 | ₹329 | [Amazon search](https://www.amazon.in/s?k=DS18B20%20waterproof%20temperature%20probe) |
| BME280 temperature, humidity, and pressure module | Weather station and environmental logger | I²C/SPI | ₹490 | 1 | ₹490 | [Amazon search](https://www.amazon.in/s?k=BME280%20temperature%2C%20humidity%2C%20and%20pressure%20module) |
| BMP280 barometric pressure module | Pressure and approximate altitude experiments | I²C/SPI; no humidity measurement | ₹151 | 1 | ₹151 | [Amazon search](https://www.amazon.in/s?k=BMP280%20barometric%20pressure%20module) |
| AHT20 temperature and humidity module | Environmental monitoring | I²C | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=AHT20%20temperature%20and%20humidity%20module) |
| SHT31 temperature and humidity module | More stable environmental measurements | I²C | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SHT31%20temperature%20and%20humidity%20module) |
| DS3231 real-time clock module | Timestamp measurements | I²C; often includes a backup cell | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=DS3231%20real-time%20clock%20module) |
| MAX6675 / MAX31855 thermocouple interface with K-type probe | Higher-temperature measurement demonstrations | Interface varies; observe probe and board limits | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MAX6675%20%2F%20MAX31855%20thermocouple%20interface%20with%20K-type%20probe) |

### 3.2 Light, colour, UV, and flame demonstrations

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| LDR photoresistor module | Detect light/dark conditions | Analog or digital comparator | ₹107 | 1 | ₹107 | [Amazon search](https://www.amazon.in/s?k=LDR%20photoresistor%20module) |
| BH1750 digital light sensor | Measure illuminance | I²C | ₹269 | 1 | ₹269 | [Amazon search](https://www.amazon.in/s?k=BH1750%20digital%20light%20sensor) |
| TSL2591 high-dynamic-range light sensor | Measure a wide range of light levels | I²C | ₹2,745 | 1 | ₹2,745 | [Amazon search](https://www.amazon.in/s?k=TSL2591%20high-dynamic-range%20light%20sensor) |
| TCS34725 colour sensor | Read reflected colour / RGB values | I²C | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=TCS34725%20colour%20sensor) |
| APDS-9960 gesture, proximity, RGB, and ambient-light sensor | Gesture and proximity experiments | I²C | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=APDS-9960%20gesture%2C%20proximity%2C%20RGB%2C%20and%20ambient-light%20sensor) |
| GUVA-S12SD UV sensor module | UV-level demonstration | Analog; calibrate and interpret cautiously | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=GUVA-S12SD%20UV%20sensor%20module) |
| IR flame sensor module (KY-026 type) | Demonstrate infrared response to a flame | Not a certified fire alarm; never use as the only safety detector | ₹129 | 1 | ₹129 | [Amazon search](https://www.amazon.in/s?k=IR%20flame%20sensor%20module%20(KY-026%20type)) |
| IR receiver module (38 kHz type) | Receive signals from common IR remotes | Digital signal; remote protocol varies | ₹99 (5-piece pack) | 1 | ₹99 | [Amazon search](https://www.amazon.in/s?k=IR%20receiver%20module%20(38%20kHz%20type)) |
| IR transmitter LED module | Send IR remote-control signals | Drive current correctly | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=IR%20transmitter%20LED%20module) |

### 3.3 Air quality, gas, and particles

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| MQ-2 smoke/combustible-gas sensor module | Gas-response demonstrations | Heater consumes power; warm-up and calibration needed | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MQ-2%20smoke%2Fcombustible-gas%20sensor%20module) |
| MQ-3 alcohol-response sensor module | Gas-sensor experiments | Not a calibrated breathalyser | ₹172 | 1 | ₹172 | [Amazon search](https://www.amazon.in/s?k=MQ-3%20alcohol-response%20sensor%20module) |
| MQ-7 carbon-monoxide sensor module | Demonstrate CO sensor response | Not a certified CO safety alarm | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MQ-7%20carbon-monoxide%20sensor%20module) |
| MQ-135 air-quality response module | Broad gas-response experiments | Not a precise universal air-quality meter | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MQ-135%20air-quality%20response%20module) |
| PMS5003 particulate-matter sensor | Measure airborne particles | UART; provide suitable power and airflow | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=PMS5003%20particulate-matter%20sensor) |
| SDS011 particulate-matter sensor | Particle concentration experiments | UART; suitable power required | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SDS011%20particulate-matter%20sensor) |
| SGP30 VOC/eCO₂ sensor | Indoor-air-quality demonstrations | I²C; eCO₂ is an estimate, not direct CO₂ measurement | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SGP30%20VOC%2FeCO%E2%82%82%20sensor) |
| SCD40 / SCD41 CO₂ sensor | Measure CO₂ and environmental data | I²C; follow calibration and ventilation guidance | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SCD40%20%2F%20SCD41%20CO%E2%82%82%20sensor) |
| CCS811 VOC/eCO₂ sensor | VOC-response and estimated CO₂ projects | I²C; observe warm-up and baseline requirements | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=CCS811%20VOC%2FeCO%E2%82%82%20sensor) |

### 3.4 Soil, rain, and water

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Capacitive soil-moisture sensor | Plant watering and smart-garden projects | Analog; often more durable than exposed-resistance probes | ₹175 | 1 | ₹175 | [Amazon search](https://www.amazon.in/s?k=Capacitive%20soil-moisture%20sensor) |
| FC-28 / YL-69 resistive soil-moisture sensor | Basic soil-moisture experiment | Exposed probes corrode; limit powered time | ₹65 | 1 | ₹65 | [Amazon search](https://www.amazon.in/s?k=FC-28%20%2F%20YL-69%20resistive%20soil-moisture%20sensor) |
| Rain sensor plate and comparator board | Detect wetness/rain | Analog/digital; exposed plate may corrode | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Rain%20sensor%20plate%20and%20comparator%20board) |
| Water-level sensor strip | Detect water level/presence | Analog; protect against corrosion | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Water-level%20sensor%20strip) |
| Float switch | Tank high/low level detection | Digital switch | ₹310 | 1 | ₹310 | [Amazon search](https://www.amazon.in/s?k=Float%20switch) |
| Waterproof leak-detection probe | Detect water leaks | Interface depends on model | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Waterproof%20leak-detection%20probe) |
| pH sensor interface kit | Measure liquid acidity/alkalinity | Requires calibration and suitable probe handling | ₹1,949 | 1 | ₹1,949 | [Amazon search](https://www.amazon.in/s?k=pH%20sensor%20interface%20kit) |
| TDS / conductivity sensor kit | Estimate dissolved-solids/conductivity trends | Requires calibration; not a full water-safety test | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=TDS%20%2F%20conductivity%20sensor%20kit) |
| Turbidity sensor module | Demonstrate water cloudiness | Analog; optical geometry affects readings | ₹899 | 1 | ₹899 | [Amazon search](https://www.amazon.in/s?k=Turbidity%20sensor%20module) |

### 3.5 Motion, distance, orientation, and vibration

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| HC-SR04 ultrasonic distance sensor | Measure distance for obstacle avoidance | Echo is commonly 5 V; protect 3.3 V inputs | ₹165 | 1 | ₹165 | [Amazon listing](https://www.amazon.in/dp/B01I1ZTPJC) |
| JSN-SR04T waterproof ultrasonic sensor | Outdoor or splash-resistant distance measurement | Check exact variant and echo voltage | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=JSN-SR04T%20waterproof%20ultrasonic%20sensor) |
| VL53L0X time-of-flight distance sensor | Short-range distance measurement | I²C; board voltage varies | ₹599 | 1 | ₹599 | [Amazon search](https://www.amazon.in/s?k=VL53L0X%20time-of-flight%20distance%20sensor) |
| VL53L1X time-of-flight distance sensor | Distance measurement over a different range | I²C; check module specification | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=VL53L1X%20time-of-flight%20distance%20sensor) |
| HC-SR501 PIR motion sensor | Detect movement of warm bodies | Digital output; not person identification | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=HC-SR501%20PIR%20motion%20sensor) |
| AM312 mini PIR sensor | Compact motion-triggered projects | Digital output | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=AM312%20mini%20PIR%20sensor) |
| RCWL-0516 microwave motion sensor | Detect movement | Digital output; can detect through some non-metallic materials | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=RCWL-0516%20microwave%20motion%20sensor) |
| MPU6050 6-axis accelerometer/gyroscope | Tilt and motion experiments | I²C | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MPU6050%206-axis%20accelerometer%2Fgyroscope) |
| MPU9250 9-axis motion sensor | Orientation experiments | I²C/SPI; module variants differ | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MPU9250%209-axis%20motion%20sensor) |
| ADXL345 3-axis accelerometer | Acceleration and tilt | I²C/SPI | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ADXL345%203-axis%20accelerometer) |
| QMC5883L magnetometer module | Compass experiments | I²C; calibrate away from magnetic interference | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=QMC5883L%20magnetometer%20module) |
| SW-420 vibration module | Detect vibration/shock events | Digital comparator; threshold adjustment varies | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SW-420%20vibration%20module) |
| Hall-effect sensor (A3144-type) | Detect magnets and count rotations | Digital; check pull-up and output type | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Hall-effect%20sensor%20(A3144-type)) |
| Reed-switch magnetic contact | Door/window open-close demonstration | Digital switch | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Reed-switch%20magnetic%20contact) |
| Optical wheel encoder | Measure rotation/speed | Digital pulses | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Optical%20wheel%20encoder) |
| TCRT5000 reflective IR sensor | Surface detection and line following | Analog/digital depending on module | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=TCRT5000%20reflective%20IR%20sensor) |
| 3-channel / 5-channel line-tracking array | Line-following robots | Check sensor output type and mounting height | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=3-channel%20%2F%205-channel%20line-tracking%20array) |
| Load cell with HX711 amplifier | Build a weighing scale | Calibrate with known weights | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Load%20cell%20with%20HX711%20amplifier) |

### 3.6 Location and navigation

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| NEO-6M GPS module | Basic location and time experiments | UART; needs suitable antenna and sky view | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=NEO-6M%20GPS%20module) |
| u-blox NEO-M8N GNSS module | GNSS positioning experiments | Interface depends on breakout board | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=u-blox%20NEO-M8N%20GNSS%20module) |
| Digital compass / magnetometer module | Heading estimation | Calibrate and keep away from motors/magnets | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Digital%20compass%20%2F%20magnetometer%20module) |
| Wheel encoders | Robot odometry and distance estimation | Usually requires interrupt-capable inputs and calibration | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Wheel%20encoders) |

## 4. Displays and User Interfaces

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| 1602 16×2 LCD with I²C backpack | Show readings, menus, status | Check backpack voltage and I²C address | ₹199 | 1 | ₹199 | [Amazon search](https://www.amazon.in/s?k=1602%2016%C3%972%20LCD%20with%20I%C2%B2C%20backpack) |
| 2004 20×4 LCD with I²C backpack | More lines of text | Check backpack voltage and I²C address | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=2004%2020%C3%974%20LCD%20with%20I%C2%B2C%20backpack) |
| SSD1306 0.96-inch OLED | Compact text and graphics | I²C/SPI; resolution and address vary | ₹299 | 1 | ₹299 | [Amazon search](https://www.amazon.in/s?k=SSD1306%200.96-inch%20OLED) |
| SH1106 1.3-inch OLED | Compact graphics | I²C/SPI; library differs from some SSD1306 modules | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SH1106%201.3-inch%20OLED) |
| ILI9341 TFT display | Colour graphics and touch interfaces | SPI; touchscreen may need a separate controller | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ILI9341%20TFT%20display) |
| ST7735 TFT display | Small colour user interface | SPI | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ST7735%20TFT%20display) |
| E-paper display module | Low-power status display | Usually SPI; refresh and temperature limits vary | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=E-paper%20display%20module) |
| MAX7219 LED matrix | Scrolling text and symbols | Serial-style interface | ₹1,013 (6-module pack) | 1 | ₹1,013 | [Amazon search](https://www.amazon.in/s?k=MAX7219%20LED%20matrix) |
| TM1637 numeric display | Clock, timer, counter | Two-wire clock/data | ₹289 | 1 | ₹289 | [Amazon search](https://www.amazon.in/s?k=TM1637%20numeric%20display) |
| 4-digit / 6-digit 7-segment display | Numeric readings | Driver and interface depend on module | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=4-digit%20%2F%206-digit%207-segment%20display) |
| Capacitive touchscreen module | Touch-based control | Controller and host support vary | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Capacitive%20touchscreen%20module) |
| Rotary encoder with push switch | Navigate menus | Digital inputs | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Rotary%20encoder%20with%20push%20switch) |
| Keypad module | PIN entry and selection | Matrix GPIO or I/O expander | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Keypad%20module) |
| Joystick module | Direction and speed input | Analog inputs plus button | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Joystick%20module) |

## 5. Motors, Robotics, and Actuators

### 5.1 Motors and drivers

| Component / module | Purpose | Important note | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| SG90 micro servo | Small angle-controlled mechanisms | Use a suitable supply; signal pin does not power the motor | ₹189 | 1 | ₹189 | [Amazon search](https://www.amazon.in/s?k=SG90%20micro%20servo) |
| MG90S metal-gear micro servo | Small mechanisms needing stronger gears | Check current and stall load | ₹399 (2-piece pack) | 1 | ₹399 | [Amazon search](https://www.amazon.in/s?k=MG90S%20metal-gear%20micro%20servo) |
| MG996R high-torque servo | Larger mechanisms and robot arms | External supply usually required | ₹409 | 1 | ₹409 | [Amazon search](https://www.amazon.in/s?k=MG996R%20high-torque%20servo) |
| DC geared motor | Robot wheels and moving mechanisms | Use a motor driver; check stall current | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=DC%20geared%20motor) |
| DC gear motor with encoder | Closed-loop speed/distance experiments | Encoder wiring and voltage vary | ₹280 | 1 | ₹280 | [Amazon search](https://www.amazon.in/s?k=DC%20gear%20motor%20with%20encoder) |
| TT yellow gear motor | Common low-cost educational robot motor | Requires driver and suitable battery supply | ₹445 | 1 | ₹445 | [Amazon search](https://www.amazon.in/s?k=TT%20yellow%20gear%20motor) |
| L298N dual H-bridge module | Drive two small DC motors | Older and inefficient; check heat/current limits | ₹195 | 1 | ₹195 | [Amazon search](https://www.amazon.in/s?k=L298N%20dual%20H-bridge%20module) |
| TB6612FNG dual motor driver | Drive small DC motors efficiently | Check motor stall current and supply | ₹1,024 (4-piece pack) | 1 | ₹1,024 | [Amazon search](https://www.amazon.in/s?k=TB6612FNG%20dual%20motor%20driver) |
| DRV8833 dual H-bridge module | Small robot motor control | Check board ratings and thermal limits | ₹353 (3-piece pack) | 1 | ₹353 | [Amazon search](https://www.amazon.in/s?k=DRV8833%20dual%20H-bridge%20module) |
| L9110S dual motor driver | Small DC motor demonstrations | Limited current; check board documentation | ₹299 (5-piece pack) | 1 | ₹299 | [Amazon search](https://www.amazon.in/s?k=L9110S%20dual%20motor%20driver) |
| A4988 stepper driver | Stepper positioning | Set current limit; heatsinking may be needed | ₹220 | 1 | ₹220 | [Amazon search](https://www.amazon.in/s?k=A4988%20stepper%20driver) |
| DRV8825 stepper driver | Stepper positioning | Set current limit and motor supply correctly | ₹189 | 1 | ₹189 | [Amazon search](https://www.amazon.in/s?k=DRV8825%20stepper%20driver) |
| ULN2003 driver with 28BYJ-48 stepper | Small stepper experiments | Common education kit | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ULN2003%20driver%20with%2028BYJ-48%20stepper) |
| PCA9685 16-channel PWM/servo driver | Control multiple servos | Separate servo power supply often needed | ₹1,099 | 1 | ₹1,099 | [Amazon search](https://www.amazon.in/s?k=PCA9685%2016-channel%20PWM%2Fservo%20driver) |
| BTS7960 high-current H-bridge | Higher-current DC motor control | Requires careful supply, cooling, and wiring | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=BTS7960%20high-current%20H-bridge) |
| MOSFET DC load driver | Control fans, pumps, LEDs, and suitable DC loads | Use correct gate voltage, current rating, and protection | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MOSFET%20DC%20load%20driver) |

### 5.2 Robot chassis and mechanical parts

| Component | Purpose | Notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| 2-wheel robot chassis kit | Build a basic mobile robot | Usually includes motors and wheels; verify contents | ₹335 | 1 | ₹335 | [Amazon search](https://www.amazon.in/s?k=2-wheel%20robot%20chassis%20kit) |
| 4-wheel robot chassis kit | Build a four-wheel robot | Motor-driver channel count matters | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=4-wheel%20robot%20chassis%20kit) |
| Caster wheel | Stabilize a two-wheel robot | Match chassis height | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Caster%20wheel) |
| Robot wheels and hubs | Transfer motor rotation | Match motor shaft | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Robot%20wheels%20and%20hubs) |
| Servo bracket and robot-arm kit | Build a movable arm | Check servo torque and safe load | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Servo%20bracket%20and%20robot-arm%20kit) |
| Pan-tilt camera bracket | Aim a camera or sensor | Requires compatible servos and mounting holes | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Pan-tilt%20camera%20bracket) |
| Small gripper mechanism | Pick up light objects | Limit force and pinch hazards | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Small%20gripper%20mechanism) |
| 3D-printed brackets / structural parts | Mount sensors and boards | Check fit, strength, and fasteners | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=3D-printed%20brackets%20%2F%20structural%20parts) |

### 5.3 Relays, switches, and other actuators

| Module | Purpose | Important note | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| 1-channel / 2-channel / 4-channel relay module | Switch compatible electrical loads | Confirm input logic, coil supply, isolation, and contact rating | ₹170 (2-channel module) | 1 | ₹170 | [Amazon search](https://www.amazon.in/s?k=1-channel%20%2F%202-channel%20%2F%204-channel%20relay%20module) |
| Solid-state relay module | Switch supported loads | AC/DC type and load current must match | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Solid-state%20relay%20module) |
| Solenoid with driver | Push/pull mechanical action | External supply and flyback protection required | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Solenoid%20with%20driver) |
| DC fan with driver | Ventilation and cooling | Do not power directly from a GPIO pin | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=DC%20fan%20with%20driver) |
| Small DC water pump | Automated watering and water movement | External supply and transistor/driver required | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Small%20DC%20water%20pump) |
| Electromagnet module | Demonstrate magnetic actuation | Limit current and temperature | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Electromagnet%20module) |
| Linear actuator with suitable driver | Controlled linear movement | Confirm voltage/current and end-stop protection | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Linear%20actuator%20with%20suitable%20driver) |

## 6. Communication, Wireless, and Networking

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| HC-05 Bluetooth Classic serial module | Phone-to-board serial control | Logic levels and role vary by breakout | ₹299 | 1 | ₹299 | [Amazon listing](https://www.amazon.in/dp/B0GD7Q932D) |
| HC-06 Bluetooth Classic serial module | Basic Bluetooth serial link | Commonly slave-mode variants; verify board | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=HC-06%20Bluetooth%20Classic%20serial%20module) |
| HM-10 BLE module | Bluetooth Low Energy communication | Clone firmware differs; test exact module | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=HM-10%20BLE%20module) |
| nRF24L01+ radio module | Low-cost board-to-board wireless links | SPI; stable 3.3 V supply required | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=nRF24L01%2B%20radio%20module) |
| SX1276/SX1278 LoRa module | Long-range low-data-rate telemetry | SPI; use legal regional frequency | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SX1276%2FSX1278%20LoRa%20module) |
| RFM95W LoRa module | LoRa communication | Match frequency and antenna | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=RFM95W%20LoRa%20module) |
| W5500 Ethernet module | Wired networking | SPI | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=W5500%20Ethernet%20module) |
| ENC28J60 Ethernet module | Basic wired-network experiments | SPI; check library and performance limits | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ENC28J60%20Ethernet%20module) |
| MAX485 RS-485 transceiver module | Long-distance wired serial communication | UART; use correct termination and voltage | ₹169 | 1 | ₹169 | [Amazon search](https://www.amazon.in/s?k=MAX485%20RS-485%20transceiver%20module) |
| CAN transceiver module (e.g. SN65HVD230-type) | CAN bus physical layer for supported controllers | A transceiver alone may not provide a CAN controller | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=CAN%20transceiver%20module%20(e.g.%20SN65HVD230-type)) |
| MCP2515 CAN controller with transceiver | CAN bus projects | SPI; check logic-voltage compatibility | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MCP2515%20CAN%20controller%20with%20transceiver) |
| RC522 MFRC522 RFID reader | Read compatible RFID cards/tags | SPI; many boards use 3.3 V logic | ₹126 | 1 | ₹126 | [Amazon search](https://www.amazon.in/s?k=RC522%20MFRC522%20RFID%20reader) |
| PN532 NFC/RFID reader | NFC and RFID experiments | I²C/SPI/UART depending on board | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=PN532%20NFC%2FRFID%20reader) |
| SIM800L GSM/GPRS module | SMS and cellular data demos | 2G availability and peak current are major constraints | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SIM800L%20GSM%2FGPRS%20module) |
| SIM7600 4G LTE module | Cellular data and some GNSS functions | Exact regional bands and carrier support required | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=SIM7600%204G%20LTE%20module) |
| A7670 cellular module | Cellular connectivity projects | Model, bands, antenna, and supply vary | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=A7670%20cellular%20module) |
| ESP-01 / ESP-01S ESP8266 module | Add Wi-Fi to another microcontroller | 3.3 V logic and stable supply; limited GPIO | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ESP-01%20%2F%20ESP-01S%20ESP8266%20module) |
| USB-to-UART adapter (CP2102/CH340/FT232 variant) | Programming and serial debugging | Match logic voltage and driver support | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=USB-to-UART%20adapter%20(CP2102%2FCH340%2FFT232%20variant)) |
| TCA9548A I²C multiplexer | Connect I²C devices with duplicate addresses | Check bus voltage and pull-ups | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=TCA9548A%20I%C2%B2C%20multiplexer) |
| MCP23017 GPIO expander | Add digital input/output pins | I²C | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MCP23017%20GPIO%20expander) |
| PCF8574 I/O expander | Add simple digital I/O or support LCD backpacks | I²C; board voltage affects signal levels | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=PCF8574%20I%2FO%20expander) |

## 7. Storage, Data Logging, and Analog Measurement

| Module | Purpose | Typical interface / notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| MicroSD card reader module | Save sensor data and files | SPI; check whether board includes level shifting | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MicroSD%20card%20reader%20module) |
| AT24C256 I²C EEPROM | Store settings and small records | I²C; write endurance and capacity are limited | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=AT24C256%20I%C2%B2C%20EEPROM) |
| I²C FRAM module | Frequent-write data logging | I²C; confirm chip and voltage | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=I%C2%B2C%20FRAM%20module) |
| ADS1115 16-bit ADC | Read analog signals with higher resolution | I²C; input range must stay within ratings | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ADS1115%2016-bit%20ADC) |
| ADS1015 12-bit ADC | External analog measurements | I²C | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ADS1015%2012-bit%20ADC) |
| MCP3008 8-channel ADC | Add analog inputs | SPI; input voltage must match supply/reference | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MCP3008%208-channel%20ADC) |
| MCP4725 12-bit DAC | Generate a controlled analog voltage | I²C; output current is limited | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MCP4725%2012-bit%20DAC) |
| INA219 voltage/current/power monitor | Measure DC power use | I²C; check shunt and bus-voltage limits | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=INA219%20voltage%2Fcurrent%2Fpower%20monitor) |
| INA226 voltage/current/power monitor | More precise DC power measurement | I²C; check module ratings | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=INA226%20voltage%2Fcurrent%2Fpower%20monitor) |
| ACS712 current sensor | Measure DC/AC current within its design range | Analog output; choose the correct range | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=ACS712%20current%20sensor) |
| MAX17048 battery fuel gauge | Estimate single-cell Li-ion battery state | I²C; battery chemistry and module wiring matter | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=MAX17048%20battery%20fuel%20gauge) |
| DS3231 RTC | Keep time for logs and schedules | I²C | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=DS3231%20RTC) |
| USB flash storage | Store larger files on supported host boards | Requires USB-host support and compatible software | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=USB%20flash%20storage) |

## 8. Power, Charging, and Protection

| Component / module | Purpose | Important note | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Regulated USB power supply | Power board during development | Match connector and power requirements | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Regulated%20USB%20power%20supply) |
| Battery holder (AA/AAA/18650) | Portable power experiments | Match cell chemistry, count, and board input limits | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Battery%20holder%20(AA%2FAAA%2F18650)) |
| Protected battery pack | Portable projects | Use cells and protection designed for the load | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Protected%20battery%20pack) |
| DC-DC buck converter (LM2596-type) | Reduce DC voltage | Measure output before connecting | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=DC-DC%20buck%20converter%20(LM2596-type)) |
| DC-DC boost converter (MT3608-type) | Increase DC voltage | Output current is lower than input current; observe limits | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=DC-DC%20boost%20converter%20(MT3608-type)) |
| TP4056 single-cell Li-ion charger module | Charge one compatible Li-ion cell | Protection varies by board; use safe cells and charging practices | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=TP4056%20single-cell%20Li-ion%20charger%20module) |
| BMS/protection board for a specific battery pack | Battery protection | Must match chemistry, cell count, and current | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=BMS%2Fprotection%20board%20for%20a%20specific%20battery%20pack) |
| Logic-level converter | Shift compatible signal levels | Not universal for all signals or bus speeds | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Logic-level%20converter) |
| Optocoupler isolation module | Isolate supported control signals | Check isolation voltage and input/output ratings | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Optocoupler%20isolation%20module) |
| Fuse and holder assortment | Protect wiring from overcurrent | Choose fuse rating for the wire and load | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Fuse%20and%20holder%20assortment) |
| Emergency stop / main power switch | Stop power to a project | Select appropriate DC/AC voltage and current ratings | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Emergency%20stop%20%2F%20main%20power%20switch) |
| Reverse-polarity protection module | Reduce damage from incorrect supply polarity | Confirm voltage drop and current rating | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Reverse-polarity%20protection%20module) |

## 9. Cameras, Vision, and Edge AI

| Component / product | Purpose | Compatibility notes | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Component%20%2F%20product) |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino Nicla Vision | Compact machine-vision and edge-AI projects | Integrated camera-oriented board; check current libraries | ₹8,050 | 1 | ₹8,050 | [Amazon search](https://www.amazon.in/s?k=Arduino%20Nicla%20Vision) |
| Arduino UNO Q with supported USB camera/accessories | Vision, AI, and robotics projects | Use accessories explicitly supported by the board | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20UNO%20Q%20USB%20camera%20accessories) |
| Arduino GIGA R1 WiFi with compatible camera hardware | Camera and advanced embedded experiments | Check connector, sensor, driver, and example support | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20GIGA%20R1%20WiFi%20camera%20hardware) |
| USB UVC webcam | Camera input for supported Linux/USB-host boards | Not a universal direct connection to ordinary Arduino microcontrollers | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=USB%20UVC%20webcam) |
| OV2640 camera module | Image capture on supported camera-capable hardware | Requires a compatible camera interface, pinout, memory, and driver | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=OV2640%20camera%20module) |
| Arducam camera module (exact model) | Camera experiments with supported controller/interface | Verify model, interface, voltage, and library | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arducam%20camera%20module%20(exact%20model)) |
| Camera pan-tilt bracket with servos | Aim camera for tracking experiments | Requires suitable servo supply and mechanical mounting | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Camera%20pan-tilt%20bracket%20with%20servos) |
| LED illumination module / ring light | Improve lighting for vision experiments | Supply and camera exposure matter | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=LED%20illumination%20module%20%2F%20ring%20light) |

## 10. Arduino Shields, Carriers, and Expansion Boards

A **shield** or **carrier** adds connectors or functions to a controller board. It is not the same as a sensor module. A shield may fit physically but still be electrically or software-incompatible.

| Shield / carrier | Purpose | Compatibility notes | Amazon India price / pack (₹) | Qty | Line total (₹) | Amazon source |
| --- | --- | --- | --- | --- | --- | --- |
| Arduino Motor Shield Rev3 | Control DC motors and compatible stepper configurations | Check current and supply limits | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Motor%20Shield%20Rev3) |
| Arduino Ethernet Shield Rev2 | Add wired Ethernet to supported boards | Confirm SPI pins and board compatibility | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Ethernet%20Shield%20Rev2) |
| Arduino 4 Relays Shield | Switch supported loads | Check exact shield revision and load ratings | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%204%20Relays%20Shield) |
| Arduino 9 Axis Motion Shield | Motion/orientation experiments | Check current availability and supported libraries | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%209%20Axis%20Motion%20Shield) |
| Arduino GIGA Display Shield | Touchscreen and display projects | GIGA R1 WiFi-specific | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20GIGA%20Display%20Shield) |
| Arduino MKR ETH Shield | Ethernet for supported MKR boards | MKR family compatibility only | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20ETH%20Shield) |
| Arduino MKR GPS Shield | GNSS/location projects | Confirm board and shield support | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20GPS%20Shield) |
| Arduino MKR Relay Proto Shield | Relay/prototyping tasks | Check exact MKR model and load rating | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20MKR%20Relay%20Proto%20Shield) |
| Arduino Portenta Vision Shield | Vision / camera-related expansion for supported Portenta boards | Variant and connector matter | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Portenta%20Vision%20Shield) |
| Arduino Portenta Breakout / Max Carrier | Expose and expand supported Portenta interfaces | Confirm exact Portenta board | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Portenta%20Breakout%20%2F%20Max%20Carrier) |
| Arduino Modulino Buttons | Plug-and-play button input | Supported host and connector required | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Buttons) |
| Arduino Modulino Buzzer | Sound output | Supported host and library required | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Buzzer) |
| Arduino Modulino Distance | Distance sensing | Check supported board and range | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Distance) |
| Arduino Modulino Knob | Rotary input | Check connector and library | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Knob) |
| Arduino Modulino Movement | Motion sensing | Exact sensor and board support vary | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Movement) |
| Arduino Modulino Pixels | Addressable pixel output | Follow power limits | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Pixels) |
| Arduino Modulino Thermo | Temperature sensing | Check supported host and library | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Thermo) |
| Arduino Modulino Joystick | Directional input | Check supported host and library | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Joystick) |
| Arduino Modulino Light | Light sensing | Check supported host and library | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Light) |
| Arduino Modulino Latch Relay | Relay output | Check load rating and safety | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Latch%20Relay) |
| Arduino Modulino Vibro | Vibration sensing | Check supported host and library | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20Vibro) |
| Arduino Modulino LED Matrix | Matrix display | Check supported host and library | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Arduino%20Modulino%20LED%20Matrix) |
| Generic sensor shield / expansion board | Easier module wiring | Must match exact board pinout and voltage | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Generic%20sensor%20shield%20%2F%20expansion%20board) |
| Nano-compatible terminal/Qwiic carrier | Easier connections to supported Nano boards and I²C modules | Nano family boards do not all share identical voltage or pin behavior | Not verified | 1 | Not verified | [Search Amazon](https://www.amazon.in/s?k=Nano-compatible%20terminal%2FQwiic%20carrier) |

## 11. Common Project Bundles for School Activities

These are suggested combinations, not purchases or confirmed stock.

| Project theme | Example components |
| --- | --- |
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


## Amazon India Price and Budget Summary

**Pricing basis (checked 16 October 2026):** Prices below are specific Amazon India listings found for the named product or a close matching module. Each catalogue line assumes **quantity 1**; where Amazon's offer is a multi-pack, the price and line total are for that entire pack. The Amazon link opens the identified listing where a specific link was available, otherwise it opens an Amazon India search for the exact component name.

**Subtotal of priced catalogue lines: ₹77,582.** This adds each priced hardware row in Sections 1–10 once, using its displayed pack/listing price. Section 11 project bundles are examples and are not added separately, since they reuse components already listed in the catalogue.

**Items with a verified Amazon price in this pass:** 66 catalogue lines.

**Items with no reliable Amazon India price matched:** 207 catalogue lines (206 distinct component names). They are marked **Not verified** and excluded from the subtotal. Their Amazon search links are provided in the table. Because Amazon prices could not be verified for every catalogue item, the subtotal is **not a complete all-items procurement total**; the final total will increase when those unpriced rows have verified prices.

**Important:** This is a catalogue of optional and alternative boards/modules, not a purchase order. The calculation intentionally counts every priced catalogue row once, so repeated listings of the same type in multiple categories can be counted more than once. Pack pricing can also mean a line represents several physical pieces. Shipping, availability, and seller prices may change.

## Price Status Legend

- A rupee value means an Amazon India listing was found; pack quantities are shown in the price cell where known.
- **Not verified** means no dependable Amazon India listing price was confirmed for that exact catalogue item during this pass. It is not the same as ₹0.

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
