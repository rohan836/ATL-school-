# Sensors (Sorted List)

> **Source**: Extracted and deduplicated from `ATL_Equipment_List_90_students.md` (Package 1: Internet of Things & Sensors)  
> **Deduplication Note**: Merged two duplicate source entries for "Big Sound Microphone Module" into a single entry with combined quantity 30.

| S.No. | Sensor Name | Exact Specification / Operating Parameters | Suggested Quantity | Primary Sensing Role |
|:---:|---|---|---:|---|
| 01 | **LDR Module** | 5mm / 12mm photosensitive light-dependent resistor module with onboard comparator & trimpot | 45 | Ambient Light / Darkness Detection |
| 02 | **Temperature Sensor (LM35)** | LM35 precision Celsius temperature sensor; operating voltage $4\text{V} - 30\text{V}$; output $10\,\text{mV}/^\circ\text{C}$; error $\pm 0.5^\circ\text{C}$ | 8 | Analog Ambient Temperature |
| 03 | **Temperature & Humidity Sensor (DHT11)** | DHT11 digital module; operating voltage $3\text{V} - 5\text{V}$; reads humidity $20-90\%\,\text{RH}$ and temperature $0-50^\circ\text{C}$ | 50 | Digital Climate & Weather |
| 04 | **Humidity Sensor (Analog)** | Resistance-based humidity sensor; range $20-95\%\,\text{RH}$; temperature $0-60^\circ\text{C}$ | 15 | Relative Air Humidity |
| 05 | **Soil Moisture Sensor Module** | FC-28 fork probe with LM393 comparator board; operating voltage $3.3\text{V} - 5\text{V}$; analog & digital output | 8 | Soil Water Content |
| 06 | **Rain Drop Sensor Module** | Nickel-plated raindrop detection board with comparator board; $3.3\text{V} - 5.5\text{V}$; size $5\times 40\,\text{mm}$ | 8 | Rainfall & Water Droplet Detection |
| 07 | **Water Flow Sensor** | Turbine water-flow meter with Hall effect sensor; $5\text{V}$ DC input; pulse output | 6 | Liquid Volume & Flow Rate |
| 08 | **PIR Motion Detector Module** | Pyroelectric infrared sensor; detects human heat movement; range up to 6m; supply $5\text{V} - 12\text{V}$ | 30 | Security & Human Motion Detection |
| 09 | **Ultrasonic Sensor Module (HC-SR04)** | Working voltage $5\text{V}$ DC; current $15\,\text{mA}$; range $1\,\text{cm} - 4\,\text{m}$; resolution $0.3\,\text{cm}$; $15^\circ$ beam angle | 50 | Non-Contact Distance & Echo Obstacles |
| 10 | **IR Obstacle-Avoider Sensor Module** | Infrared LED emitter and photodiode with LM393; detection distance $2-30\,\text{cm}$; angle $30-40^\circ$ | 30 | Close Proximity & Obstacle Detection |
| 11 | **8-IR Sensor Array Module** | 8-channel reflective infrared sensor array; $5\text{V}$ operating voltage; digital pin outputs | 15 | Line Following & Path Navigation |
| 12 | **Sound / Microphone Sensor Module** | Electret microphone sound sensor with amplifier and digital threshold output | 15 | Sound Intensity & Clap Detection |
| 13 | **Big Sound Microphone Module** | Large electret-capsule sound module with analog and digital outputs *(deduplicated from 2 source entries)* | 30 | High-Sensitivity Audio Sensing |
| 14 | **Capacitive Touch Switch Module (TTP223B)** | TTP223B digital capacitive touch switch module; operating voltage $2\text{V} - 5\text{V}$ DC | 15 | Single-Key Touch Switching |
| 15 | **Touch Sensor Module (TTP22X)** | Capacitive touch-sensor module; voltage range $2.4\text{V} - 5.5\text{V}$ DC | 8 | Capacitive Contact Sensing |
| 16 | **Metal Touch Sensor Module (KY-036)** | KY-036 metal touch sensor with transistor and comparator; senses skin contact on metal pin | 8 | Direct Physical Metal Touch |
| 17 | **12-Channel Capacitive Touch Module (MPR121)** | MPR121 with I2C digital interface; voltage range $2.5\text{V} - 3.6\text{V}$ DC; 12 touch electrode inputs | 30 | Multi-Key Interactive Touchpads |
| 18 | **Force Pressure Sensor (FSR)** | Force-sensitive resistor with square $1.75\times 1.5$ inch sensing area; resistance drops with pressure | 6 | Weight, Squeeze & Physical Force |
| 19 | **Flex Sensor** | 2.2-inch flexible bend sensor; resistance changes proportionally to physical bending | 8 | Finger Flexion & Joint Bending |
| 20 | **Pulse-Rate Heart Sensor** | Optical finger/earlobe photoplethysmography sensor; operating voltage $3\text{V} - 5\text{V}$ | 5 | Heart Rate & Pulse Monitoring |
| 21 | **Colour Recognition Sensor (TCS3200)** | TCS3200 color sensor chip with 4 white LEDs; converts light color to frequency output | 6 | Surface Color Identification (RGB) |
| 22 | **Triple-Axis Accelerometer Module** | 3-axis motion/gravity sensor; low-profile package; supply $1.8\text{V} - 3.6\text{V}$ | 15 | Tilt, Vibration & G-Force Acceleration |
| 23 | **Triple-Axis Magnetometer Module** | 3-axis magnetoresistive sensor; I2C digital interface; 12-bit ADC; range $-8$ to $+8$ Gauss | 15 | Digital Compass & Magnetic Field |
| 24 | **MQ-2 Smoke & Flammable Gas Sensor** | Gas sensor for detecting smoke, LPG, methane, alcohol, and hydrogen | 4 | Fire Smoke & Combustible Gas Detection |
| 25 | **MQ-3 Alcohol Sensor** | High sensitivity to alcohol vapor, low sensitivity to gasoline | 4 | Breath & Ethanol Vapor Detection |
| 26 | **MQ-4 Gas Sensor** | High sensitivity to methane ($\text{CH}_4$) and natural gas | 4 | Methane & Pipeline Natural Gas Leaks |
| 27 | **MQ-5 Gas Sensor** | High sensitivity to liquefied petroleum gas (LPG) and natural gas | 4 | Kitchen LPG Gas Leak Detection |
| 28 | **MQ-6 Gas Sensor** | Specialized sensitivity to LPG, butane, and propane gas | 4 | LPG Cylinder Safety Alarms |
| 29 | **MQ-7 Carbon Monoxide (CO) Sensor** | High sensitivity to toxic carbon monoxide gas | 4 | Poisonous Exhaust & CO Detection |
| 30 | **MQ-8 Hydrogen Gas Sensor** | High sensitivity to hydrogen gas ($\text{H}_2$), low sensitivity to other gases | 4 | Clean Energy & Hydrogen Leak Alerts |
| 31 | **MQ-135 Air Quality Sensor** | Wide-spectrum detector for ammonia ($\text{NH}_3$), benzene, smoke, and air pollution | 4 | Air Pollution & Environmental Monitoring |
