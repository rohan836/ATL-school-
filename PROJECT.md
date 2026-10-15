# ATL Lab Project — Master Project File

## 1. Project Overview

**Project name:** ATL Lab (Atal Tinkering Lab)  
**Repository:** https://github.com/rohan836/ATL-school-  
**Purpose:** Keep the project plan, hardware inventory, wiring notes, firmware, tests, and build records organized in one repository.

This file is the **main index and project guide**. Add links here when new project files are created. The hardware list is a starter catalogue of common modules that can work with ESP32 or ESP8266 boards. It is not a claim that every module works with every board or voltage level.

## 2. Main Controller Boards

- **ESP32 development boards** — Wi-Fi and Bluetooth features depend on the chip and board.
- **ESP32-S2 / ESP32-S3 boards** — USB and peripheral features vary by variant.
- **ESP32-C3 / ESP32-C6 boards** — radio and peripheral features vary by variant.
- **ESP8266 NodeMCU boards** — Wi-Fi microcontroller boards.
- **ESP-01 / ESP-01S (ESP8266)** — small modules with limited GPIO.
- **Other ESP8266 development boards** — check available pins and board voltage.

## 3. Common Modules That Can Connect to ESP Boards

Compatibility depends on the exact module, library, pin availability, supply voltage, and interface. Confirm the pinout and datasheet before wiring.

### 3.1 Basic sensors

| Module / sensor | Typical use | Common interface |
|---|---|---|
| DHT11 | Basic temperature and humidity | Digital |
| DHT22 / AM2302 | Temperature and humidity | Digital |
| DS18B20 | Temperature | One-wire |
| BME280 | Temperature, humidity, pressure | I²C / SPI |
| BMP280 | Pressure and temperature | I²C / SPI |
| AHT10 / AHT20 | Temperature and humidity | I²C |
| SHT31 | Temperature and humidity | I²C |
| LM35 | Analog temperature | Analog |
| LDR / photoresistor module | Light level | Analog / digital comparator |
| BH1750 | Digital light measurement | I²C |
| TSL2561 / TSL2591 | Light measurement | I²C |
| HC-SR04 | Distance measurement | Trigger / echo |
| VL53L0X / VL53L1X | Time-of-flight distance | I²C |
| PIR motion sensor (HC-SR501) | Motion detection | Digital |
| RCWL-0516 | Microwave motion detection | Digital |
| MPU6050 | Acceleration and rotation | I²C |
| MPU9250 / ICM-20948 | Motion and orientation | I²C / SPI |
| ADXL345 | Acceleration | I²C / SPI |
| SW-420 vibration module | Vibration trigger | Digital comparator |
| Sound sensor module | Sound-level trigger | Analog / digital comparator |
| MQ-2 | Smoke / combustible gas response | Analog / digital comparator |
| MQ-135 | Broad air-quality response | Analog / digital comparator |
| CCS811 / SGP30 | Gas / air-quality estimates | I²C |
| Soil-moisture sensor | Soil moisture | Analog / digital |
| Capacitive soil-moisture sensor | Soil moisture | Analog |
| Rain sensor board | Rain / water presence | Analog / digital |
| Water-level sensor | Water level / presence | Analog |
| Float switch | High / low water level | Digital |
| TTP223 touch sensor | Capacitive touch input | Digital |
| IR obstacle sensor | Object detection | Digital |
| IR receiver (e.g. VS1838B) | IR remote input | Digital |
| Hall-effect sensor | Magnetic field / position | Digital / analog, by model |
| Reed switch | Door / magnetic contact | Digital |
| Load cell + HX711 | Weight measurement | Digital interface |
| Rotary encoder | Rotation / menu input | Digital |
| Push button / keypad | User input | Digital / matrix |
| Joystick module | Two-axis input and button | Analog / digital |

### 3.2 Displays and user interfaces

| Module | Typical use | Common interface |
|---|---|---|
| 16×2 LCD with I²C backpack | Text output | I²C |
| 20×4 LCD with I²C backpack | Multi-line text | I²C |
| 0.96-inch OLED (SSD1306) | Graphics / text | I²C / SPI |
| 1.3-inch OLED (SH1106) | Graphics / text | I²C / SPI |
| TFT display (ILI9341) | Colour graphics | SPI |
| ST7735 TFT | Small colour display | SPI |
| E-paper display | Low-power static information | SPI, model-specific |
| MAX7219 8×8 LED matrix | Text / patterns | Serial-style interface |
| WS2812B / NeoPixel LEDs | Addressable lighting | Single-wire data |
| TM1637 4-digit display | Numeric display | Two-wire clock/data |
| 7-segment display | Numeric output | GPIO / driver |
| RGB LED module | Status / colour output | GPIO / PWM |
| LED bar graph | Level indication | GPIO / driver |
| Buzzer module | Sound alerts | Digital / PWM |

### 3.3 Output, motion, and power-control modules

| Module | Typical use | Important note |
|---|---|---|
| Relay board | Switch external loads | Check ratings and isolation |
| MOSFET driver module | Switch DC loads | Check logic and current ratings |
| L298N motor driver | DC motors / stepper experiments | Inefficient; check motor current and voltage |
| TB6612FNG motor driver | Small DC motors | Check current limits |
| DRV8833 motor driver | Small DC motors | Check current limits |
| A4988 stepper driver | Stepper motor control | Set the current limit correctly |
| DRV8825 stepper driver | Stepper motor control | Set the current limit correctly |
| ULN2003 + 28BYJ-48 | Small stepper motor | Common beginner setup |
| Servo motor (SG90 / MG90S) | Position control | Usually needs a suitable external supply |
| DC gear motor | Wheels / mechanisms | Use a motor driver, not a GPIO pin |
| Brushless motor + ESC | Speed control | Use a suitable ESC and safe test setup |
| Solenoid | Linear motion / locking | Driver and flyback protection may be required |
| Pump / fan module | Fluid / airflow control | Use a suitable driver and supply |
| PCA9685 | Multi-channel PWM / servo control | I²C; external servo power may be needed |
| MCP23017 | GPIO expansion | I²C |
| PCF8574 | GPIO expansion / LCD backpack | I²C |
| 74HC595 | Shift-register output expansion | Check logic-level compatibility |

### 3.4 Communication, networking, and positioning

| Module | Typical use | Common interface / notes |
|---|---|---|
| HC-05 / HC-06 | Bluetooth serial | ESP32 variant support differs; ESP8266 has no built-in Bluetooth |
| BLE module | Bluetooth Low Energy | Check whether the ESP board already supports BLE |
| nRF24L01+ | Short-range radio link | SPI; stable supply is important |
| LoRa SX1276 / SX1278 | Long-range, low-data-rate radio | SPI; match frequency band and local rules |
| LoRa SX1262 | LoRa radio | SPI; module variant matters |
| SIM800L | 2G cellular experiments | Network availability and power requirements vary |
| SIM7600 / LTE modules | Cellular data / GNSS, by variant | Check bands, carrier, and power |
| GPS / GNSS NEO-6M | Location and time | UART; antenna placement matters |
| u-blox M8-series GNSS | Positioning | UART / I²C, by board |
| W5500 Ethernet module | Wired network | SPI |
| ENC28J60 Ethernet module | Wired network | SPI; library and performance limits vary |
| RS-485 transceiver (MAX485-type) | Differential serial communication | UART; check logic voltage and termination |
| CAN transceiver / controller | CAN bus projects | ESP32 CAN/TWAI support varies; external controller may be needed |
| RFID RC522 | RFID tag reading | SPI; check logic voltage |
| PN532 NFC module | NFC / RFID experiments | I²C / SPI / UART, by board |
| IR transmitter / receiver | Remote-control projects | GPIO / PWM |

### 3.5 Storage, time, and data logging

| Module | Typical use | Common interface |
|---|---|---|
| MicroSD card module | Data logging / files | SPI |
| DS3231 RTC | Accurate real-time clock | I²C |
| DS1307 RTC | Real-time clock | I²C |
| 24C-series EEPROM | Small persistent settings | I²C |
| FRAM module | Frequent-write data storage | I²C / SPI, by model |
| Battery fuel gauge (e.g. MAX17048) | Battery-state estimate | I²C |

### 3.6 Analog, digital, and interface expansion

| Module | Typical use | Common interface |
|---|---|---|
| ADS1115 | External 16-bit ADC | I²C |
| ADS1015 | External ADC | I²C |
| MCP3008 | External ADC | SPI |
| MCP4725 | DAC / analog output | I²C |
| INA219 / INA226 | Voltage / current / power measurement | I²C |
| ACS712 / ACS758 | Current measurement | Analog |
| Voltage divider module | Measure a suitable higher voltage | Analog; calculate a safe input range |
| Logic-level shifter | Interface between voltage levels | Depends on design |
| Optocoupler module | Electrical signal isolation | Digital |
| TCA9548A | I²C multiplexer for address conflicts | I²C |
| USB-to-UART adapter (CP2102 / CH340) | Programming / serial debug | Development tool, not usually a project sensor |

### 3.7 Robotics and ATL project parts

- Line-tracking sensor array
- IR line sensor modules
- Obstacle-avoidance sensor modules
- Wheel encoders
- Robot chassis and wheels
- Small DC motors and motor drivers
- Servo-based robotic arm parts
- Joystick and gamepad modules
- RFID cards and tags
- Keypad and access-control parts
- Breadboard, jumper wires, headers, and screw terminals
- Battery holders and regulated DC/DC converters
- Multimeter for testing

## 4. Electrical and Compatibility Rules

1. **Check the board's logic voltage.** ESP32 and ESP8266 GPIO pins generally use 3.3 V logic. Do not assume that a 5 V signal is safe for an ESP GPIO pin.
2. **Check supply voltage separately from logic voltage.** A module may need 5 V power but use 3.3 V data signals, or it may need level conversion.
3. **Never power a motor, relay coil, pump, or servo directly from an ESP GPIO pin.** Use a suitable driver and power supply.
4. **Check current requirements.** Motors, cellular modules, and LED strips can need more current than the board regulator can provide.
5. **Use a common ground when required.** Non-isolated interfaces often need a shared ground between the ESP board and the external supply.
6. **Check pin restrictions.** Some pins affect boot, flash, USB, or other board functions. Available pins differ between ESP32 variants and ESP8266 boards.
7. **Check interface and library support.** Confirm whether the module uses GPIO, ADC, PWM, I²C, SPI, UART, or another protocol.
8. **Use safe wiring for mains voltage.** Use properly rated equipment, isolation, enclosures, and qualified supervision. Prefer low-voltage demonstrations in school projects.
9. **Check radio and cellular support.** Frequency bands, carrier support, antenna needs, and local rules vary.
10. **Record the exact module model.** Similar breakout boards can use different chips, pinouts, and voltage regulators.

## 5. Repository File Map

This file is the master index. Add links here when the files exist.

- [README.md](README.md) — short project overview and setup instructions.
- [HARDWARE.md](HARDWARE.md) — verified inventory of modules available in the lab.
- [WIRING.md](WIRING.md) — pin maps and wiring notes.
- [FIRMWARE.md](FIRMWARE.md) — firmware structure and upload instructions.
- [EXPERIMENTS.md](EXPERIMENTS.md) — test procedures, observations, and results.
- [PROJECTS.md](PROJECTS.md) — index of individual ATL projects.

Create these files as the project grows. Links will become active when the matching files are added.

## 6. Module Record Template

Use this template when adding a module to the verified inventory:

- **Module name:**
- **Exact model / chip:**
- **Purpose:**
- **Compatible board:** ESP32 / ESP8266 / both / not tested
- **Supply voltage:**
- **Logic voltage:**
- **Interface:** GPIO / ADC / PWM / I²C / SPI / UART / other
- **Pin connections:**
- **Required library:**
- **Datasheet / product link:**
- **Test status:** Not tested / tested / verified
- **Notes and limitations:**

## 7. Project Status

- [ ] Confirm the exact ESP development board model.
- [ ] Confirm which modules are physically available in the ATL Lab.
- [ ] Add exact module models and datasheet links.
- [ ] Create a pin map before building each circuit.
- [ ] Test each module separately before combining modules.
- [ ] Record wiring, code version, observations, and test results.
- [ ] Add a dedicated Markdown file for each major project.

**Important:** This catalogue is a planning reference. A module is not considered tested or verified until its exact model, wiring, voltage, code, and result have been recorded.
