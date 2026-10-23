# ESP32 and ESP8266 Compatible Module Catalogue

## Purpose

This file lists pre-built hardware modules and breakout boards that are commonly available for projects using ESP32 or ESP8266 development boards. It is a catalogue of module names and their full or commonly used product names, grouped by what they help build.

This is **not** a record of hardware owned by the ATL Lab. Availability, exact product variants, wiring, voltage, software support, and compatibility must be checked before a module is selected.

## Camera and Vision Systems

| Module / product name | What it can be used to build | Compatibility notes |
|---|---|---|
| AI-Thinker ESP32-CAM Development Board with OV2640 Camera | Wi-Fi camera, snapshots, basic streaming, door camera | ESP32-based board with camera included; not an add-on for ESP8266 |
| ESP32-CAM-MB USB-to-Serial Programmer Board | Programming adapter for compatible ESP32-CAM boards | Check the exact ESP32-CAM board layout |
| Seeed Studio XIAO ESP32S3 Sense | Compact camera and microphone projects | ESP32-S3-based board; use its supported camera and software setup |
| ESP32-S3-EYE Development Board | Camera, display, microphone, and AI-vision experiments | Integrated ESP32-S3 development board; check current vendor documentation |
| OV2640 2-Megapixel Camera Module | Camera input for supported ESP32 camera boards | Camera connector, pin mapping, PSRAM, and driver support must match |
| OV3660 3-Megapixel Camera Module | Higher-resolution image capture on supported camera boards | Not a universal drop-in replacement; verify board and driver support |
| OV5640 5-Megapixel Camera Module | Higher-resolution image capture on supported ESP32 camera boards | Verify connector, pin mapping, driver support, memory, and power |
| Arducam Mini 2MP Plus OV2640 SPI Camera Module | Camera experiments using an SPI interface | Uses a different interface from common parallel ESP32-CAM modules; check library support |
| Arducam Mega Camera Module (model-specific) | Camera projects with a camera control interface | Confirm the exact model and ESP32 library support |
| ESP32-S3 Camera Module with OV2640 / OV5640 | Camera system based on an ESP32-S3 board | Board design and sensor support vary by seller |
| USB UVC Webcam | External USB camera | Not a general plug-in module; requires USB host support and compatible software, which many ESP boards do not provide |

## Temperature, Humidity, Pressure, and Environment

| Module / product name | Typical use | Common interface |
|---|---|---|
| DHT11 Temperature and Humidity Sensor Module | Basic room monitoring | Digital |
| DHT22 / AM2302 Temperature and Humidity Sensor Module | Room and weather monitoring | Digital |
| DS18B20 Waterproof Digital Temperature Sensor Probe | Liquid / outdoor temperature measurement | One-wire |
| BME280 Temperature, Humidity, and Pressure Sensor Module | Weather station | I²C / SPI |
| BMP280 Barometric Pressure Sensor Module | Pressure and altitude estimates | I²C / SPI |
| AHT20 Temperature and Humidity Sensor Module | Environmental monitoring | I²C |
| SHT31 Temperature and Humidity Sensor Module | Environmental monitoring | I²C |
| BMP180 Barometric Pressure Sensor Module | Basic pressure experiments | I²C |
| MAX6675 Thermocouple-to-Digital Converter Module with K-Type Probe | Higher-temperature measurement | SPI-style interface |
| MAX31855 Thermocouple-to-Digital Converter Module | Thermocouple measurement | SPI-style interface |
| MLX90614 Infrared Temperature Sensor Module | Non-contact temperature measurement | I²C / SMBus, by board |
| PMS5003 Particulate Matter Sensor | Air-particle monitoring | UART |
| SDS011 Particulate Matter Sensor | Air-particle monitoring | UART |
| MQ-2 Smoke and Combustible Gas Sensor Module | Demonstration gas sensing | Analog / digital comparator |
| MQ-135 Air Quality Sensor Module | Broad gas-response experiments | Analog / digital comparator |
| SGP30 Air Quality Sensor Module | VOC / equivalent CO₂ estimates | I²C |
| SCD40 / SCD41 CO₂ Sensor Module | CO₂ and environmental measurements | I²C |
| CCS811 Air Quality Sensor Module | VOC / equivalent CO₂ estimates | I²C |
| BH1750 Digital Ambient Light Sensor Module | Light-level measurement | I²C |
| TSL2591 High-Dynamic-Range Digital Light Sensor Module | Light measurement | I²C |
| LDR Photoresistor Sensor Module | Basic light detection | Analog / digital comparator |
| Capacitive Soil Moisture Sensor Module | Plant watering projects | Analog |
| FC-28 / YL-69 Soil Moisture Sensor Module | Basic soil moisture demonstration | Analog / digital; exposed probes can corrode |
| Rain Detection Sensor Module | Rain detection | Analog / digital comparator |
| Water Level Sensor Module | Water presence / level experiments | Analog |
| Float Level Switch | Tank high / low level detection | Digital switch |
| DS3231 Real-Time Clock Module | Time-stamped data logging | I²C |

## Motion, Distance, Position, and Orientation

| Module / product name | Typical use | Common interface |
|---|---|---|
| HC-SR04 Ultrasonic Distance Sensor Module | Distance measurement | Trigger / echo; echo voltage must be safe for ESP GPIO |
| JSN-SR04T Waterproof Ultrasonic Distance Sensor | Outdoor / water-resistant distance sensing | Trigger / echo; check output voltage and model |
| VL53L0X Time-of-Flight Distance Sensor Module | Short-range distance measurement | I²C |
| VL53L1X Time-of-Flight Distance Sensor Module | Distance measurement | I²C |
| HC-SR501 PIR Motion Sensor Module | Human motion detection | Digital |
| AM312 Mini PIR Motion Sensor Module | Compact motion detection | Digital |
| RCWL-0516 Microwave Radar Motion Sensor Module | Motion detection | Digital output |
| MPU6050 6-Axis Accelerometer and Gyroscope Module | Motion / tilt experiments | I²C |
| MPU9250 9-Axis Motion Tracking Module | Motion and orientation experiments | I²C / SPI, by board |
| ICM-20948 9-Axis Motion Sensor Module | Motion and orientation | I²C / SPI |
| ADXL345 3-Axis Accelerometer Module | Acceleration / tilt | I²C / SPI |
| QMC5883L 3-Axis Magnetometer Module | Compass experiments | I²C |
| HMC5883L 3-Axis Magnetometer Module | Compass experiments | I²C; beware incompatible clone boards |
| SW-420 Vibration Sensor Module | Vibration trigger | Digital comparator |
| KY-026 Flame Sensor Module | Flame detection demonstration | Analog / digital; not a certified safety detector |
| TTP223 Capacitive Touch Sensor Module | Touch button | Digital |
| KY-040 Rotary Encoder Module | Menus and rotary input | Digital |
| KY-023 Joystick Module | Two-axis control | Analog / digital |
| IR Obstacle Avoidance Sensor Module | Robot obstacle detection | Digital comparator |
| TCRT5000 Infrared Reflective Sensor Module | Line following / surface detection | Analog / digital, by board |
| 3-Channel / 5-Channel Infrared Line Tracking Sensor Array | Line-following robot | Analog / digital, by board |
| Hall-Effect Magnetic Sensor Module (A3144-type) | Magnet / rotation detection | Digital |
| Reed Switch Magnetic Contact Module | Door / lid detection | Digital |
| Optical Slot / Wheel Encoder Module | Speed / rotation measurement | Digital |
| HX711 Load Cell Amplifier Module with Load Cell | Weight scale | Two-wire clock/data interface |

## Displays, Indicators, and Human Interfaces

| Module / product name | Typical use | Common interface |
|---|---|---|
| 1602 16×2 LCD Module with PCF8574 I²C Backpack | Text display | I²C |
| 2004 20×4 LCD Module with I²C Backpack | Multi-line display | I²C |
| 0.96-Inch SSD1306 OLED Display Module | Small graphics / text | I²C / SPI, by board |
| 1.3-Inch SH1106 OLED Display Module | Small graphics / text | I²C / SPI, by board |
| ILI9341 TFT LCD Display Module | Colour interface / graphics | SPI |
| ST7735 TFT LCD Display Module | Small colour display | SPI |
| Waveshare E-Paper Display Module (model-specific) | Low-power status display | Usually SPI; model-specific |
| MAX7219 8×8 LED Dot Matrix Module | Scrolling text / patterns | Serial-style interface |
| TM1637 4-Digit 7-Segment Display Module | Numeric output | Clock/data |
| MAX7219 7-Segment Display Module | Numeric output | SPI-like serial |
| WS2812B Addressable RGB LED Strip / Ring | Status lighting / effects | Single-wire data |
| APA102 Addressable RGB LED Strip | Addressable lighting | Clock + data |
| RGB LED Module | Status indication | GPIO / PWM |
| Active Buzzer Module | Sound alerts | Digital |
| Passive Buzzer Module | Tones / simple melodies | PWM |
| 4×4 Matrix Keypad Module | Numeric / menu input | GPIO matrix |
| 4×3 Matrix Keypad Module | Numeric input | GPIO matrix |
| Capacitive Touch Keypad Module (TTP229-type) | Touch controls | Digital / serial-style interface |

## Motors, Robotics, Relays, and Actuators

| Module / product name | Typical use | Important note |
|---|---|---|
| L298N Dual H-Bridge Motor Driver Module | Two small DC motors | Older, inefficient driver; check current and voltage limits |
| TB6612FNG Dual DC Motor Driver Module | Small robot motors | Check motor stall current |
| DRV8833 Dual H-Bridge Motor Driver Module | Small DC motors | Check board ratings |
| L9110S Dual Motor Driver Module | Small DC motors | Check board ratings |
| A4988 Stepper Motor Driver Module | Stepper motor control | Set current limit and use correct motor supply |
| DRV8825 Stepper Motor Driver Module | Stepper motor control | Set current limit and use correct motor supply |
| ULN2003 Driver Board with 28BYJ-48 Stepper Motor | Small stepper projects | Common educational kit |
| PCA9685 16-Channel PWM / Servo Driver Board | Multiple servos / PWM outputs | Separate servo supply may be required |
| SG90 Micro Servo Motor | Small position-control projects | Use a suitable supply; avoid powering from GPIO |
| MG90S Metal-Gear Micro Servo Motor | Small mechanisms | Check stall current |
| MG996R High-Torque Servo Motor | Larger mechanisms | Requires an appropriate external supply |
| DC Gear Motor with Wheel Encoder | Robot movement / speed feedback | Requires motor driver |
| 5V Relay Module (single / multi-channel) | Switch low-voltage loads | Confirm input logic and isolation; mains use requires proper safety design |
| MOSFET Switch / Driver Module | DC fan, pump, LED or motor control | Confirm logic-level gate drive and current rating |
| BTS7960 High-Current H-Bridge Driver Module | Higher-current DC motor control | Verify genuine board ratings and cooling |
| IRF520 MOSFET Driver Module | Simple switching demonstrations | Often unsuitable for efficient 3.3 V gate drive; choose carefully |
| 12V DC Water Pump Module / Pump with Driver | Watering projects | External supply and suitable driver required |
| 5V / 12V DC Fan Module | Ventilation / cooling | Check supply and current |
| Solenoid Driver Module | Solenoid actuation | Use suitable driver and flyback protection |
| 28BYJ-48 Stepper Motor and ULN2003 Driver Kit | Positioning / small robot mechanisms | Confirm supply requirements |

## Wireless, Networking, RFID, and Location

| Module / product name | Typical use | Common interface / notes |
|---|---|---|
| ESP8266 ESP-01 / ESP-01S Wi-Fi Module | Add Wi-Fi to another controller | Limited GPIO; ESP8266 itself has no Bluetooth |
| HC-05 Bluetooth Serial Module | Bluetooth Classic serial links | ESP32 support depends on variant; ESP8266 needs external Bluetooth hardware |
| HC-06 Bluetooth Serial Module | Bluetooth Classic serial links | Slave-mode product variants are common; check logic levels |
| HM-10 BLE Bluetooth Module | Bluetooth Low Energy links | Clone firmware and behavior vary |
| nRF24L01+ 2.4 GHz Wireless Transceiver Module | Low-power short-range radio | SPI; stable supply is important |
| SX1276 / SX1278 LoRa Transceiver Module | Long-range low-data-rate communication | SPI; select legal regional frequency band |
| SX1262 LoRa Transceiver Module | Long-range low-data-rate communication | SPI; board and library support vary |
| RFM95W LoRa Radio Module | LoRa communication | SPI; check frequency variant |
| W5500 Ethernet Network Module | Wired networking | SPI |
| ENC28J60 Ethernet Network Module | Wired networking | SPI; library and performance limits apply |
| MAX485 RS-485 Transceiver Module | Long-distance wired serial communication | UART; check logic voltage, termination, and biasing |
| CAN Bus Transceiver Module (SN65HVD230-type) | CAN communication with supported ESP32 chips | A transceiver alone may not replace a required controller |
| MCP2515 CAN Controller Module with Transceiver | CAN bus projects | SPI; confirm 3.3 V logic compatibility |
| SIM800L GSM / GPRS Module | Cellular SMS / data demonstrations | 2G network availability and burst current are critical |
| SIM7600 4G LTE Module (variant-specific) | Cellular connectivity / GNSS | Check regional bands, carrier support, antenna, and supply |
| A7670 4G LTE Module (variant-specific) | Cellular connectivity | Check regional bands and board support |
| NEO-6M GPS Module | GPS positioning and time | UART; antenna and sky visibility affect results |
| u-blox NEO-M8N GNSS Module | GNSS positioning | UART / I²C, depending on board |
| RC522 MFRC522 RFID Reader Module | RFID cards / tags | SPI; check logic levels |
| PN532 NFC / RFID Reader Module | NFC and RFID experiments | I²C / SPI / UART, by board |
| USB-to-UART Adapter Board (CP2102 / CH340) | Flashing and serial debugging | Programming accessory |
| TCA9548A 8-Channel I²C Multiplexer Module | Connect same-address I²C sensors | I²C |

## Storage, Expansion, and Power Measurement

| Module / product name | Typical use | Common interface |
|---|---|---|
| MicroSD Card Reader Module | Data logging / file storage | SPI; board voltage must be checked |
| DS3231 Real-Time Clock Module | Timekeeping / data logs | I²C |
| AT24C256 I²C EEPROM Module | Persistent settings | I²C |
| I²C FRAM Module (MB85RC256V-type) | Frequent-write data storage | I²C |
| ADS1115 16-Bit ADC Module | External analog measurements | I²C |
| ADS1015 12-Bit ADC Module | External analog measurements | I²C |
| MCP3008 8-Channel ADC Module | External analog measurements | SPI |
| MCP4725 12-Bit DAC Module | Analog output experiments | I²C |
| MCP23017 16-Bit GPIO Expander Module | Additional digital pins | I²C |
| PCF8574 8-Bit I/O Expander Module | Additional digital pins / LCD backpacks | I²C |
| INA219 DC Voltage / Current / Power Monitor Module | Power monitoring | I²C |
| INA226 Voltage / Current / Power Monitor Module | Power monitoring | I²C |
| ACS712 Hall-Effect Current Sensor Module | Current measurement | Analog; choose the correct current range |
| MAX17048 Li-Ion Battery Fuel Gauge Module | Battery state estimate | I²C |
| Adjustable DC-DC Buck Converter Module (LM2596-type) | Step down a DC supply | Set and measure output before connection |
| Adjustable DC-DC Boost Converter Module (MT3608-type) | Step up a DC supply | Check output and current limits |
| TP4056 Single-Cell Li-Ion Charger Module | Single-cell battery charging | Protection varies by board; use correct cells and safe charging practice |
| Logic-Level Converter Module (BSS138-type) | Shift logic levels for suitable buses | Not suitable for every high-speed or push-pull signal |
| Optocoupler Isolation Module (PC817-type) | Isolated digital signals | Check isolation and ratings |

## Pre-Built Project Boards and Kits

| Product / board family | What it enables | Compatibility note |
|---|---|---|
| AI-Thinker ESP32-CAM | Camera and Wi-Fi projects on one board | ESP32-based integrated camera board |
| Seeed Studio XIAO ESP32S3 Sense | Compact camera, audio, and sensing projects | ESP32-S3-based; use matching expansion board and software |
| ESP32-S3-EYE | Camera, display, microphone, and vision experiments | Integrated development kit |
| M5Stack Core series (exact model required) | Modular sensor / display / IoT projects | Built-in parts and expansion support vary by model |
| M5Stack Unit modules (exact model required) | Add-on sensors, displays, and peripherals | Confirm connector, voltage, and driver support |
| M5StickC / M5StickC Plus (exact model required) | Portable IoT / sensor projects | Integrated hardware differs by generation |
| Arduino Nano ESP32 | Compact ESP32-based Arduino projects | Confirm pinout and Arduino library support |
| Seeed Studio XIAO ESP32C3 | Small Wi-Fi / BLE controller projects | No camera interface equivalent to the XIAO ESP32S3 Sense's integrated camera setup |
| Seeed Studio XIAO ESP32S3 | Compact ESP32-S3 controller projects | Add-ons depend on board and expansion setup |
| ESP32 DevKitC | General ESP32 prototyping | Board variant and pin mapping must be checked |
| NodeMCU ESP8266 Development Board | Wi-Fi sensors and IoT projects | Limited ADC/GPIO; no built-in Bluetooth |
| Wemos D1 mini ESP8266 Development Board | Compact Wi-Fi projects | Check shield pinout and board revision |
| Wemos D1 mini Sensor Shields | Plug-in sensor prototyping | Shield pin mapping and voltage still need verification |
| ESP32 Sensor Shield / Expansion Board (board-specific) | Easier wiring for ESP32 projects | Not a universal standard; match the exact ESP32 board |
| ESP32-CAM-MB USB Programmer Board | USB programming for compatible ESP32-CAM | Not a standalone controller |
| Generic ESP32 / ESP8266 Starter Kit | Classroom experiments | Contents vary by seller; inventory each item separately |

## Important Compatibility Rules

1. **ESP32 and ESP8266 are not interchangeable in every project.** Features, pins, memory, camera support, Bluetooth support, and software libraries differ.
2. **Most ESP GPIO uses 3.3 V logic.** Do not connect a 5 V output directly unless the board documentation confirms it is safe.
3. **A module's power input and signal voltage are different specifications.** Check both.
4. **Use a driver and a suitable external supply for motors, servos, pumps, relays, and LED strips.** Do not power them directly from GPIO.
5. **Camera modules are not universal.** Confirm sensor, connector, pin mapping, PSRAM, driver, and board support. Espressif's official camera driver supports selected ESP32, ESP32-S2, and ESP32-S3 configurations and specific sensors; see the references below.
6. **Cellular modules need a supported network and a suitable high-current supply.** Check local carrier and band support before purchase.
7. **Treat module names as search terms, not proof of compatibility.** Sellers may use the same name for boards with different chips or circuits.
8. **This file lists market examples, not verified ATL stock.** Do not mark a module as owned, tested, or approved without evidence.

## References

- Espressif ESP32 camera driver and supported sensors: https://github.com/espressif/esp32-camera
- Espressif hardware and module catalogue: https://www.espressif.com/en/products/modules/esp32-cam/overview
- Camera board/library example (AI-Thinker ESP32-CAM, XIAO ESP32-S3 Sense): https://github.com/yoursunny/esp32cam

## Module Verification Record Template

When a module is selected for an actual project, record:

- **Exact product / model:**
- **Manufacturer / seller:**
- **Datasheet / product URL:**
- **Target board and chip variant:**
- **Power voltage and current:**
- **Signal logic voltage:**
- **Interface and GPIO pins:**
- **Required library / driver:**
- **Compatibility evidence:**
- **Availability in ATL Lab:** Unknown / available / not available
- **Test status:** Not tested / tested / verified
- **Notes / limitations:**
