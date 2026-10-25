# Rapid Prototyping & STEM Kits (Sorted List)

> **Source**: Extracted from `ATL_Equipment_List_90_students.md` (Packages 1, 2, 3)  
> **Category**: 3D Printing, Craft Prototyping, Robotics Construction & STEM Kits

| S.No. | Equipment / Kit Name | Specifications & Inclusions | Suggested Quantity | Type | Package Source |
|:---:|---|---|---:|---|---|
| 01 | **3D Printer Kit & Tools** | Fused Deposition Modelling (FDM); build volume $160\times 160\times 160\,\text{mm}$ (or 4L volume); 0.4mm nozzle; heated bed; open-source slicer compatible; LCD display; includes toolkit with tweezers, keys, spare springs, and scraper | 1 | Equipment | Package 2 |
| 02 | **Filament for 3D Printer** | High-quality 1.75mm PLA filament (1000g spools in 5 different colours) | 5 Spools | Consumable | Package 2 |
| 03 | **Filament Storage Box** | Sealed moisture-proof filament storage container with desiccant | 5 | Consumable | Package 2 |
| 04 | **Dedicated UPS / Power Backup** | Uninterruptible Power Supply (UPS) with 2-hour battery backup for 3D printer | 1 | Equipment | Package 2 |
| 05 | **Prototyping Material — Cardboard** | Heavy-duty corrugated cardboard sheets for rapid structural mockups | 5 Sheets | Consumable | Package 2 |
| 06 | **Prototyping Material — Foam Core Boards** | Rigid, lightweight foam core boards for clean enclosure cutting | 5 Boards | Consumable | Package 2 |
| 07 | **Prototyping Material — Popsicle Sticks** | Wooden craft popsicle sticks for linkages and frames | 100 Sticks | Consumable | Package 2 |
| 08 | **Prototyping Material — Wood Glue** | 500 ml PVA wood adhesive for structural joining | 2 Bottles | Consumable | Package 2 |
| 09 | **Prototyping Material — Thick String & Rubber Bands**| 20m spool of multicolored thick string and 100 heavy-duty rubber bands | 5 Spools + 100 Bands | Consumable | Package 2 |
| 10 | **Robotics DIY Kit** | Complete robotics educational kit with programmable intelligent brick/brain, chassis, sensors, and motors | 4 | Equipment | Package 1 |
| 11 | **Mechanical Modular Construction Kit** | Metal and plastic engineering construction set (beams, brackets, gears, axles, wheels, compatible with electronics) | 6 | Equipment | Package 1 |
| 12 | **Educational DIY Drone Assembly Kit** | 100% unassembled DIY quadcopter assembly kit (NOT pre-built); includes crash-resistant airframe, 6 motors (4 active + 2 spare), 12 propellers with crash guards, STM32-based flight controller with 6-axis gyro/barometer, 2x LiPo batteries, balance charger, 2.4 GHz digital radio transmitter, and DIY assembly manual | 1 Kit | Equipment | Package 1 |
| 13 | **Aerospace Kit** | Hands-on aerospace learning kit exploring flight dynamics, airfoils, and rocketry | 1 | Equipment | Package 1 |
| 14 | **Automobile Kit** | Mechanical automotive mechanism kit (chassis, differential, steering rack, suspension) | 1 | Equipment | Package 1 |
| 15 | **Bio-Medical Kit** | Educational bio-medical engineering application kit | 1 | Equipment | Package 1 |
| 16 | **Agritech Kit** | Smart agriculture application kit (automated irrigation, soil monitoring) | 1 | Equipment | Package 1 |
| 17 | **Water & Sanitation Kit** | Water testing, filtration, and sanitation STEM kit | 1 | Equipment | Package 1 |
| 18 | **Bio Tech Kit** | Educational biotechnology application kit | 1 | Equipment | Package 1 |
| 19 | **Other Potential STEM Application Kit** | Advanced multi-disciplinary STEM application kit | 1 | Equipment | Package 1 |
| 20 | **DIY Paper Microscope** | Foldable origami-style paper microscope ($100\times - 2000\times$ magnification) with all-glass optical ball lenses | 5 | Consumable | Package 3 |
| 21 | **Astronomical Telescope** | Altazimuth mount telescope for terrestrial and astronomical observation (minimum focal length 700mm) | 1 | Equipment | Package 3 |
| 22 | **Sewing Machine Kit** | Semi-automatic straight-stitch sewing machine; includes 2 sets of assorted needles and 10-colour spool set | 1 Set | Equipment | Package 3 |

---

## Educational DIY Drone Assembly Kit — Detailed Bill of Materials (BOM) & Specifications

> **Pedagogical Requirement**: The drone **MUST NOT** be delivered pre-assembled or ready-to-fly (RTF). Students must assemble the airframe, install the motors, wire the flight controller, calibrate the onboard sensor chips, and balance the propellers themselves.

### 1. Airframe & Structural Components
- **Chassis Frame**: Crash-resistant lightweight modular quadcopter frame (carbon-fiber composite or reinforced ABS nylon) with integrated Power Distribution Board (PDB) pads.
- **Safety Propeller Guards**: 4x high-durability $360^\circ$ snap-on protective crash guards (mandatory for classroom student safety).
- **Landing Gear**: 4x shock-absorbing rubber/silicone landing feet to protect the electronics during hard student landings.
- **Hardware Pack**: M2/M2.5/M3 nylon and steel machine screws, vibration-dampening rubber grommets, and motor mounting brackets.

### 2. Flight Controller (The "Brain" Chip)
- **Primary Microcontroller Chip**: **STM32F405 / STM32F411 32-bit ARM Cortex-M4** processor (or ESP32 dual-core $240\,\text{MHz}$ Wi-Fi/Bluetooth SoC) running open-source flight firmware (Betaflight / Cleanflight / ArduPilot / Scratch block-coding compatible).
- **Inertial Measurement Unit (IMU Chip)**: **ICM-42688-P or MPU6000** 6-axis digital gyroscope and accelerometer for auto-leveling and orientation tracking.
- **Altitude Barometer Sensor Chip**: **BMP280 or SPL06** precision barometric pressure sensor for automatic altitude hold and hover stability.
- **Onboard Status Indicators**: Multi-color LED status indicators (Power, Armed, GPS/Compass lock) and audible low-voltage warning buzzer.

### 3. Propulsion System (Motors & Extra Spares)
- **Primary Motors**: 4x High-performance motors (2 Clockwise - CW, 2 Counter-Clockwise - CCW).
- **Extra Spare Motors**: **2x Extra spare motors included** (1 CW + 1 CCW spare) to immediately replace burnt or crash-damaged motors during lab sessions.
- **Speed Regulators (ESCs)**: 4x Electronic Speed Controllers (or integrated 4-in-1 ESC board) supporting active motor braking and smooth throttle response.
- **Primary Propellers**: 4x Balanced nylon-reinforced blades (2 CW, 2 CCW).
- **Extra Spare Propellers**: **8x Extra spare propellers included** (4 CW + 4 CCW) with a quick-release propeller removal tool.

### 4. Power System & Batteries (Extra Spare Battery Included)
- **Primary Flight Battery**: 1x High-discharge rechargeable Lithium Polymer (LiPo) battery pack ($3.7\text{V} - 7.4\text{V} / 1\text{S}-2\text{S}$ for classroom micro-drones or $11.1\text{V} / 3\text{S}$ with XT30/XT60 connector).
- **Extra Spare Flight Battery**: **1x Extra spare matching LiPo battery pack** (total 2 batteries) ensuring students can fly one battery while the second is charging.
- **Smart LiPo Balance Charger**: Microprocessor-controlled safe USB/DC balance charger with auto-cutoff and overcharge protection.
- **Battery Safety Accessories**: 1x Fireproof explosion-resistant LiPo Guard safety charging bag + 1x digital 1S–8S battery voltage checker/buzzer.

### 5. Radio Transmitter & Control System
- **Handheld Remote Transmitter**: 2.4 GHz digital proportional 6-channel radio transmitter (FlySky FS-i6 or equivalent multi-channel remote) with dual gimbals and dual-rate switches.
- **Receiver**: Compact 2.4 GHz matching receiver board with failsafe auto-land feature if radio signal is lost.
- **Companion App (Optional)**: Mobile Wi-Fi/Bluetooth control option allowing smartphone/tablet piloting and telemetry visualization.

