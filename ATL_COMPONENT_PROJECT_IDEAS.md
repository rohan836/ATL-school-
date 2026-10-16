# ATL Component-to-Project Guide

This guide maps the equipment names in [ATL_Equipment_List_90_students.md](ATL_Equipment_List_90_students.md) to practical school-level project ideas. The original equipment list remains the source of truth for names, specifications, suggested quantities, and type.

## How to use this guide

- Each entry gives two or three project ideas that meaningfully use the named item.
- A project idea is not a claim that the lab has all the additional parts needed. Check the equipment inventory before starting.
- Many projects need a controller, power source, wires, resistors, or a display in addition to the named item.
- Start with low-voltage USB or battery-powered circuits. Do not connect school-built circuits directly to household mains.
- Gas sensors are for learning demonstrations, not certified life-safety alarms. Do not use alcohol sensors to test people or make medical/legal judgements.
- Use soldering, cutting, drilling, hot glue, heat guns, and power tools only with teacher supervision and appropriate PPE.
- Raspberry Pi, Arduino, ESP8266, and other board capabilities depend on the exact model and software. Verify pinouts and voltage levels before wiring.

## Package 1 — Electronics Development, Robotics, IoT and Sensors

### Controllers, prototyping boards and displays

**Arduino Uno or equivalent**
1. Traffic-light sequence with pedestrian button.
2. Automatic night lamp using an LDR.
3. Ultrasonic distance meter with serial or LCD output.

**Arduino Nano or equivalent**
1. Mini line-following robot controller.
2. Compact temperature-and-humidity monitor.
3. Desk-sized reaction-time game using LEDs and buttons.

**Arduino Mega or equivalent**
1. Multi-sensor classroom environment monitor.
2. Model smart greenhouse with several sensor inputs and outputs.
3. Robotic arm controller with multiple servos.

**Raspberry Pi 3 Model B+**
1. Local web dashboard for classroom sensor readings.
2. Camera-based object or colour sorting demonstration (camera required).
3. School information display or simple kiosk.

**Breadboard — 400-pin**
1. LED and resistor series/parallel experiment.
2. Push-button input and debouncing demonstration.
3. LM555 timer or transistor switching experiment.

**Breadboard — 800-pin**
1. Multi-sensor weather-station prototype.
2. Small reaction game with display, buttons, and buzzer.
3. Prototype a multi-stage logic or timing circuit.

**Self-Adhesive Proto Shield**
1. Build a reusable Arduino sensor shield.
2. Create a plug-in LED and button experiment board.
3. Make a compact classroom data-logger shield.

**General-purpose solderable board — 140 × 90 mm**
1. Permanent LED traffic-light circuit.
2. Soldered sensor alarm with buzzer.
3. Reusable school demonstration circuit board.

**General-purpose solderable board — 80 × 55 mm**
1. Compact LED flasher.
2. Small transistor-controlled motor interface.
3. Mini touch-switch lamp circuit.

**Female Berg Strip**
1. Make a removable sensor connector panel.
2. Build a plug-in controller breakout board.
3. Create a serviceable connection panel for a school robot.

**Male Berg Strip**
1. Add pin headers to a prototype circuit.
2. Build a plug-in LED/display module.
3. Make a replaceable sensor interface board.

**16×2 LCD display**
1. Digital thermometer with live readings.
2. Distance meter showing centimetres.
3. Soil-moisture monitor showing dry/wet status.

**USB Cable Set — A to B**
1. Program an Arduino board and run a serial monitor.
2. Log sensor readings to a computer.
3. Demonstrate how USB provides data and (for compatible boards) power.

**USB Cable Set — Mini**
1. Connect/program compatible boards that use Mini USB.
2. Transfer serial sensor readings to a computer.
3. Demonstrate USB connection and power on a compatible development board.

**Rechargeable battery with chargers**
1. Portable battery-powered robot (with a suitable motor driver).
2. Mobile sensor station.
3. Battery runtime comparison for different loads. Use a suitable regulator and check voltage/current ratings.

**Resistor Kit**
1. Compare LED brightness using different series resistors.
2. Build a voltage divider to read an analogue input.
3. Demonstrate pull-up/pull-down inputs or transistor switching.

**Capacitor Kit**
1. RC charge/discharge timing experiment.
2. LED fade or delay circuit with a suitable transistor/555 circuit.
3. Compare ripple/noise before and after decoupling in a low-voltage circuit.

**Linear Voltage Regulator (7805, 7812, 7809)**
1. Regulated low-voltage supply demonstration.
2. Compare input/output voltage and regulator heating under safe loads.
3. Power a compatible sensor/controller prototype from a suitable higher-voltage DC source. Check datasheets and heat dissipation.

**Water Pump Module**
1. Automatic plant watering using a soil-moisture sensor.
2. Model water-tank transfer system with level detection.
3. Mini irrigation timer. Keep water away from exposed electronics and use a suitable driver.

**Piezoelectric Plate**
1. Tap/vibration detector with an LED or buzzer.
2. Knock-counting door or desk sensor.
3. Compare voltage pulses from gentle and firm taps; protect the input with an appropriate circuit.

**8×8 LED Matrix Module**
1. Animated smiley or arrow display.
2. Scrolling classroom message.
3. Simple pixel-art game or direction indicator.

**Bluetooth Module (HC-05)**
1. Phone-controlled LED or buzzer.
2. Bluetooth remote for a low-voltage robot.
3. Wireless serial dashboard for sensor values. Check logic-level compatibility.

**7-Segment LED Display**
1. Digital stopwatch or countdown timer.
2. Visitor/people counter with a suitable sensor.
3. Reaction-time game score display.

**GSM Module (SIM900)**
1. Send an SMS when a demo sensor crosses a threshold.
2. Remote water-tank status notifier.
3. Basic remote telemetry demonstration. Requires a compatible SIM/network and a suitable power supply; network availability varies.

**GPS Module (GY-NEO6MV2)**
1. Display latitude/longitude outdoors.
2. Record a route for a school field trip (with permission).
3. GPS-based speed/distance logging demonstration. GPS reception is poor indoors.

**Laser Diode Emitter**
1. Low-power beam-break counter with a light sensor.
2. Optical communication demonstration over a short distance.
3. Alignment/straight-line geometry activity. Never point a laser at eyes, people, vehicles, or reflective surfaces.

**LDR Module**
1. Automatic night lamp.
2. Light-level meter with LEDs or LCD.
3. Solar-tracker model using two LDRs and a servo.

**Keypad**
1. PIN-code electronic lock model using a low-voltage servo.
2. Quiz buzzer/answer-entry system.
3. Menu-driven controller for a sensor station.

**Joystick**
1. Two-axis servo positioning controller.
2. Manual robot steering.
3. Cursor or menu navigation interface.

**Active Buzzer — small**
1. Button-press feedback.
2. Door-open warning for a model door.
3. Reaction-time game sound output.

**Active Buzzer — big**
1. Water-level alert for a demonstration tank.
2. Motion-triggered warning indicator.
3. Quiz buzzer system. Keep sound at a safe volume.

**Motor Driver Module (L293D)**
1. Forward/reverse DC motor control.
2. Two-motor robot drive.
3. PWM motor-speed comparison. Do not power motors directly from controller GPIO pins.

**Sound Playback Module (ISD1820)**
1. Record-and-play classroom announcement button.
2. Talking model or interactive exhibit.
3. Recorded warning prompt triggered by a sensor.

**DC Plastic Gear Motor with Wheel**
1. Two-wheel obstacle-avoiding robot (use a pair of motors and driver).
2. Line-following robot chassis.
3. Small conveyor-belt model.

**NodeMCU (ESP8266)**
1. Wi-Fi sensor dashboard.
2. Smart plant monitor sending readings to a local server.
3. Wi-Fi-controlled LED or relay demo. Use 3.3 V logic and a suitable power supply.

**WeMos D1 R2**
1. Wi-Fi room temperature/humidity monitor.
2. Browser-controlled low-voltage LED project.
3. Local IoT dashboard for soil moisture or light level.

**Vibrating Motor**
1. Vibration alert for a timer or sensor threshold.
2. Wearable-style direction/notification prototype.
3. Compare vibration patterns for different alerts. Drive through a suitable transistor/driver, not directly from a GPIO.

**Alligator Connectors**
1. Temporary circuit connections for voltage/current experiments.
2. Quick-connect battery-to-low-voltage prototype wiring.
3. Conductivity test for different materials. Avoid shorting batteries or connecting to mains.

**Battery Clips with DC Jack**
1. Battery-powered Arduino-compatible prototype (only if voltage is suitable).
2. Portable LED demonstration.
3. Low-voltage sensor experiment with a battery supply. Verify polarity and voltage first.

**Hook-up Wires**
1. Build a breadboard LED circuit.
2. Wire a sensor-to-controller experiment.
3. Make a labelled prototype wiring harness.

**Jumper Cable — male to male**
1. Breadboard LED and resistor experiment.
2. Connect compatible sensor modules to a breadboard.
3. Prototype button/display circuits.

**Jumper Cable — male to female**
1. Connect a controller to a sensor module with male header pins.
2. Wire a display or communication module.
3. Make a temporary robot sensor harness.

**Jumper Cable — female to female**
1. Connect modules with male header pins.
2. Join controller and sensor breakout boards.
3. Build a removable wiring harness for a prototype.

**RGB LEDs**
1. Colour-mixing demonstration.
2. Mood/status indicator for a sensor station.
3. Traffic-light or reaction-game indicator.

**LEDs — red**
1. Red warning/status indicator.
2. Traffic-light model.
3. LED current-limiting resistor experiment.

**LEDs — green**
1. Green safe/ready indicator.
2. Soil-moisture status light.
3. Logic-output indicator.

**LEDs — blue**
1. Blue status indicator.
2. Colour and light-intensity comparison.
3. RGB colour-mixing experiment.

**LEDs — yellow**
1. Caution indicator.
2. Multi-state machine status display.
3. Traffic-light model.

**LEDs — white**
1. Mini task light.
2. LDR-based night lamp.
3. Light-distance and brightness experiment.

**Timer IC — LM555**
1. LED flasher.
2. Adjustable tone generator for a buzzer/speaker circuit.
3. One-shot timer that keeps an LED on briefly after a button press.

**ATmega16U2**
1. Microcontroller architecture and USB-interface study on a suitable development setup.
2. Compare USB-to-serial communication with a separate USB-serial adapter.
3. Firmware/USB-interface learning exercise using a compatible board and documented programming tools. This individual IC is not a plug-and-play project module.

**Diodes and Transistors Kit**
1. Diode polarity and rectification demonstration.
2. NPN transistor as a low-voltage electronic switch.
3. Compare NPN/PNP switching and flyback-diode protection on a small DC motor.

**Button Switch Set**
1. Pedestrian button for a traffic-light model.
2. Quiz answer and reaction-time console.
3. Limit switch for a model door or robot.

**Capacitive Touch Module (MPR121)**
1. Multi-touch musical/pad interface.
2. Touch-controlled display menu.
3. Interactive museum/school exhibit. Check the module's 2.5–3.6 V supply and interface levels.

**Capacitive Touch Switch Module (TTP223B)**
1. Touch-activated LED lamp.
2. Touch-operated sound playback trigger.
3. Contactless-feeling button for a model control panel.

### Sensors and communications

**IR Obstacle-Avoider Sensor Module**
1. Obstacle detector for a small robot.
2. Object counter at a model doorway.
3. Automatic lid or barrier trigger.

**Triple-Axis Magnetometer**
1. Digital compass display.
2. Compare magnetic fields near common objects.
3. Magnetic heading indicator for a robot. Calibrate away from magnets and current-carrying wires.

**Humidity Sensor**
1. Relative-humidity measurement demonstration.
2. Compare humidity in different classroom locations.
3. Humidity-triggered fan/indicator model, with a suitable controller and driver.

**MQ-2 Smoke Sensor**
1. Sensor warm-up and analogue-reading experiment using safe, teacher-approved conditions.
2. Threshold indicator with LED/buzzer.
3. Compare sensor readings in clean air and controlled classroom demonstration conditions. Not a certified smoke alarm; never create a fire or expose students to smoke.

**MQ-3 Alcohol Sensor**
1. Study analogue sensor readings with teacher-prepared, controlled samples.
2. Threshold-indicator circuit for a non-human demonstration.
3. Compare sensor response and warm-up time in a controlled experiment. Not for testing people or making impairment judgements.

**MQ-4 Gas Sensor**
1. Read and graph sensor output in a safe, teacher-approved demonstration.
2. Build a threshold LED indicator using controlled test conditions.
3. Compare warm-up and baseline readings. Do not release combustible gas; this is not a certified gas alarm.

**MQ-5 Gas Sensor**
1. Gas-sensor output logging demonstration.
2. Threshold buzzer/LED prototype using safe simulated input where possible.
3. Sensor calibration and baseline comparison exercise. Do not release LPG or other flammable gas.

**MQ-6 Gas Sensor**
1. Analogue output and threshold experiment.
2. Data-logging demonstration with simulated sensor values.
3. Compare sensor response under controlled, teacher-approved conditions. Not a certified leak detector.

**MQ-7 Gas Sensor**
1. Study carbon-monoxide sensor signal processing using simulated data.
2. Display threshold states on an LCD using simulated readings.
3. Compare warm-up and calibration concepts in a supervised demonstration. Never generate CO; never use as a life-safety device.

**MQ-8 Gas Sensor**
1. Explore sensor readings and analogue-to-digital conversion using safe simulated values.
2. Build a dashboard showing a simulated hydrogen level.
3. Demonstrate threshold alarms with a potentiometer in place of gas exposure. Do not generate or release hydrogen.

**MQ-135 Air Quality Sensor**
1. Classroom air-quality trend logger (indicative readings only).
2. LED/LCD air-quality indicator for a demonstration.
3. Compare readings before and after ventilation, while noting sensor limitations. Not a certified or calibrated air-quality instrument.

**IR Transmitter/Receiver (TSOP1738)**
1. Infrared remote-control receiver.
2. Send coded commands to a model vehicle.
3. IR beam/code communication demonstration. Avoid assuming compatibility with every remote protocol.

**Ultrasonic Sensor Module (HC-SR04)**
1. Distance meter with LCD.
2. Model parking-assistance sensor.
3. Obstacle-avoiding robot. Keep sensor voltage and controller logic compatible.

**Triple-Axis Accelerometer**
1. Tilt and orientation indicator.
2. Step/movement counter prototype.
3. Vibration logger for comparing movement of a stationary and moving object.

**PIR Motion Detector Module**
1. Motion-activated light model.
2. Classroom entry counter prototype (one sensor may miss or double-count people).
3. Motion-triggered recorded message or buzzer.

**Pulse-Rate Heart Sensor**
1. Display pulse waveform/estimated pulse rate for a consenting volunteer.
2. Compare pulse readings before and after gentle exercise as a classroom observation.
3. Visualise noise and signal quality in pulse measurements. Educational only, not a medical device; do not diagnose conditions.

**Relay Module — 2 channel**
1. Switch two low-voltage lamps independently.
2. Automated model greenhouse fan and pump (with suitable drivers and safe loads).
3. Two-output automation board. Do not switch mains voltage in student-built circuits.

**Relay Module — 1 channel**
1. Switch a low-voltage lamp or fan.
2. Sensor-triggered low-voltage pump model.
3. Threshold-controlled output demo. Do not switch mains voltage in student-built circuits.

**Big Sound Microphone Module (first entry)**
1. Clap-triggered LED (with threshold tuning).
2. Sound-level trend indicator.
3. Noise-activated counter. It measures sound signal, not calibrated decibels unless designed and calibrated for that purpose.

**Big Sound Microphone Module (second source entry)**
1. Clap-triggered LED or buzzer.
2. Compare readings from two microphone modules.
3. Sound-event counter. The source list contains this as a second entry; confirm whether it represents a separate unit/model before inventory consolidation.

**Soil Moisture Sensor Module (FC-28)**
1. Soil-moisture monitor with LED status.
2. Automatic plant-watering model with pump and driver.
3. Compare drying rates for different soil samples. Protect electronics from water and avoid leaving a resistive probe powered continuously where corrosion is a concern.

**Touch Sensor (TTP22X series)**
1. Touch-controlled lamp.
2. Touch-operated quiz input.
3. Touch-triggered sound or message.

**Metal Touch Sensor Module (KY-036)**
1. Metal-touch detection demonstration.
2. Touch-controlled indicator.
3. Compare output readings for different conductive materials. Do not treat it as a safety detector.

**Rain Drop Sensor**
1. Rain-detection alarm.
2. Automatic closing-roof model.
3. Rain-triggered window/awning prototype. Keep the electronics dry and use a suitable driver for motors.

**Flex Sensor**
1. Bend-controlled LED brightness.
2. Glove-based gesture input.
3. Bend counter for a model joint or cardboard mechanism. Use an appropriate voltage-divider circuit.

**Temperature Sensor (LM35)**
1. Digital thermometer.
2. Temperature threshold warning.
3. Compare temperature at different locations or times; avoid using it as a medical thermometer without validation.

**Temperature and Humidity Sensor Module (DHT11)**
1. Room weather station.
2. Temperature/humidity display on LCD.
3. Wi-Fi classroom environment dashboard with an ESP8266 board.

**Force Pressure Sensor**
1. Force-sensitive electronic switch.
2. Press counter for a model button or seat.
3. Compare relative force readings using calibration weights and a suitable divider circuit; do not claim precise weighing without calibration.

**Colour Recognition Sensor (TCS3200)**
1. Sort coloured paper/card samples.
2. Colour-based traffic signal or indicator.
3. Simple colour-matching game. Control ambient light and calibrate against reference colours.

**Water Flow Sensor**
1. Measure flow through a small water line.
2. Estimate water used by a model tap.
3. Compare flow rate at different pump settings. Use a compatible supply and keep connections dry.

**Sound Sensor**
1. Clap-activated light.
2. Sound-event counter.
3. Compare relative sound levels in different locations. A basic module is not necessarily a calibrated sound-level meter.

**IR Sensor Array for Line Following**
1. Line-following robot.
2. Track-following delivery vehicle model.
3. Compare black/white line detection and sensor calibration.

**Power Bank**
1. Portable power source for a compatible 5 V sensor station.
2. Runtime test for low-power USB devices.
3. Portable classroom demonstration kit. Do not assume it can supply motor surge current or every board's required input voltage.

**RFID Reader and Tags**
1. RFID-based library checkout mock-up.
2. Classroom equipment check-in/check-out prototype.
3. RFID access-control model using a servo. Use sample IDs; do not store sensitive personal information.

**RF Transmitter and Receiver Modules**
1. Wireless button-to-LED demonstration.
2. Remote sensor reading link.
3. Simple wireless alert between two low-voltage boards. Use legally permitted modules/frequencies and avoid sending sensitive data.

### Robotics motors, drivers and kits

**Stepper Motor with Driver Board (28BYJ-48 + ULN2003)**
1. Rotating pointer or compass dial.
2. Mini automated curtain/door model.
3. Precise-position turntable for a school display.

**DC Motor (12 V, 150 RPM)**
1. Mini conveyor-belt model.
2. Two-wheel robot drive.
3. Fan or wheel-speed experiment with suitable power and driver.

**Servo Motor — position-angle-based metal gear**
1. Robotic arm joint.
2. Automatic barrier/gate model.
3. Sensor-controlled pointer. Use a suitable servo supply.

**Servo Motor — small metal gear**
1. Small robot arm.
2. Pan/tilt sensor mount.
3. Automatic door or valve model (non-plumbing demonstration).

**Servo Motor — continuous metal gear 360°**
1. Small mobile robot drive.
2. Rotating display platform.
3. Model conveyor or mechanism. Continuous-rotation servos control speed/direction rather than a precise target angle.

**Servo Motor — small plastic gear**
1. Smart dustbin lid.
2. Sensor-controlled mini barrier.
3. Small pan/tilt mount.

**150 RPM BO Motor**
1. Two-wheel obstacle-avoiding robot.
2. Line-following car.
3. Small model conveyor. Use a motor driver and a separate suitable supply.

**L298P Motor Driver**
1. Two-motor robot controller.
2. Forward/reverse and PWM speed demonstration.
3. Joystick-controlled robot. Verify board/shield pin mapping and current limits.

**Servo Motor Tester**
1. Test and compare servo movement.
2. Demonstrate servo position versus control pulse.
3. Check whether a servo operates smoothly before fitting it to a robot.

**Robotics DIY Kit**
1. Build and program a basic mobile robot.
2. Create a sensor-based obstacle-avoiding robot.
3. Build a small robotic arm or mechanism supported by the kit. Exact projects depend on the kit's controller and included parts.

**Mechanical (Modular) Construction Kit**
1. Build a bridge or tower and test load limits.
2. Create a gear-and-linkage mechanism.
3. Construct a robot chassis for sensors and motors.

**Drone Kit**
1. Learn flight principles and identify drone components using a safe, manufacturer-approved trainer.
2. Study lift, thrust, and stability through simulation or a tethered/guarded educational setup.
3. Map a small area only where permitted and under qualified supervision. Follow local rules; never fly near people, roads, airports, or restricted areas.

**Aerospace Kit**
1. Build a paper/foam glider and compare flight distance.
2. Demonstrate wing shape and lift with a teacher-led airflow model.
3. Create a model rocket/spacecraft display using non-powered safe materials unless the kit explicitly supports supervised activities.

**Automobile Kit**
1. Build a working steering or drivetrain model.
2. Demonstrate gear ratios and wheel rotation.
3. Create a model parking-assistance system with an ultrasonic sensor.

**Bio-Medical Kit**
1. Model a pulse-rate display using an educational sensor.
2. Build a hand-washing timer or health-awareness exhibit.
3. Create an anatomical model with LEDs to show a body system. Use only for education, not diagnosis.

**Agritech Kit**
1. Soil-moisture-based irrigation model.
2. Plant-growth observation station.
3. Water-use comparison for different irrigation methods.

**Water/Sanitation Kit**
1. Water-tank level indicator.
2. Demonstration of water filtration layers (not for drinking without proper treatment/testing).
3. Handwashing timer or water-use monitor.

**Bio Tech Kit**
1. Observe plant growth under different light conditions.
2. Create a model of DNA or cell structures.
3. Build a classroom environmental observation project according to the kit's instructions. Do not culture unknown microbes or handle biological samples without approved procedures.

**Other Potential STEM Application Kit**
1. Identify the problem and build a prototype relevant to the kit's topic.
2. Create a measurement-and-data-collection project using the kit's supplied sensors.
3. Present a design challenge with a testable hypothesis. Specific ideas depend on the actual kit contents.

## Package 2 — Rapid Prototyping Tools

**3D Printer Kit and Tools**
1. Print a custom sensor mount or robot chassis.
2. Design and print a gear, wheel, or linkage prototype.
3. Compare strength and dimensions across print settings using small test pieces. Use teacher supervision and the printer manufacturer's safety guidance.

**Dedicated UPS / Power Backup**
1. Measure backup runtime for a suitable low-power device.
2. Compare device behaviour with and without a backup supply.
3. Design a model uninterrupted power system diagram. Do not open the UPS or modify its mains wiring.

**Filament for 3D Printer**
1. Print test coupons to compare dimensions and surface finish.
2. Print a custom bracket for a sensor.
3. Prototype gears or enclosures in different colours. Use only filament compatible with the printer.

**Filament Storage Box**
1. Compare print quality with properly stored versus exposed filament.
2. Design a labelled filament inventory and storage system.
3. Measure storage humidity and document filament condition.

**Cardboard prototyping material**
1. Build a bridge and compare structural shapes.
2. Make a cardboard robot chassis.
3. Prototype a smart-house or traffic-layout model.

**Foam core boards**
1. Build a lightweight architectural model.
2. Create a display stand for a sensor exhibit.
3. Prototype a wind-turbine or bridge model.

**Thick string**
1. Build a pulley/lifting mechanism model.
2. Demonstrate tension and load distribution in a bridge.
3. Create a linkage or pull-cord switch model.

**Rubber bands**
1. Build a rubber-band-powered car.
2. Demonstrate elastic potential energy and distance travelled.
3. Make a vibration-isolation or suspension model.

**Popsicle sticks**
1. Build and load-test a truss bridge.
2. Create a lever, linkage, or scissor mechanism.
3. Prototype a small tower and compare bracing patterns.

**Wood glue**
1. Assemble a bridge or tower prototype.
2. Compare joint strength after equal drying times.
3. Build a cardboard/wood sensor enclosure. Follow product instructions and keep glue away from eyes and mouth.

## Package 3 — Mechanical, Electrical and Measurement Tools

**Hacksaw Frame**
1. Cut teacher-approved soft stock for a robot chassis.
2. Make measured cuts for a mechanical frame.
3. Compare cut accuracy with a marked measurement. Adult/teacher supervision required.

**Hacksaw Blades**
1. Compare cutting performance on permitted materials.
2. Learn how blade direction and tension affect cutting.
3. Practise safe, straight cuts on scrap stock under supervision.

**Mini Hacksaw Frame**
1. Trim small plastic construction pieces.
2. Cut small approved brackets or rods.
3. Prepare a small model frame with accurate measurements.

**Mini Hacksaw Blades**
1. Compare blade tooth patterns on suitable scrap.
2. Practise controlled cuts on small approved pieces.
3. Observe how blade condition affects cut quality.

**External straight-nose circlip plier**
1. Assemble/disassemble a compatible circlip mechanism.
2. Build a wheel or axle assembly that uses retaining rings.
3. Demonstrate how retaining rings prevent axial movement.

**Long-nose plier**
1. Bend component leads and small wire loops.
2. Place wires in a model mechanism.
3. Assemble a low-voltage robot wiring harness.

**Combination mini plier**
1. Grip and bend small mechanical parts.
2. Assemble a model linkage.
3. Hold small parts during a supervised prototype build.

**Wire-stripping pliers**
1. Prepare wire ends for a low-voltage LED circuit.
2. Build a correctly stripped and labelled wiring harness.
3. Compare insulation removal quality on scrap wire.

**Bent-nose plier**
1. Reach and bend wires in a compact prototype.
2. Assemble a small mechanical linkage.
3. Route wires neatly inside a model enclosure.

**Needle-nose pliers**
1. Bend component leads for soldering.
2. Place small connectors in a prototype.
3. Assemble a small robot linkage.

**Tweezer Set**
1. Place small components on a solderable board.
2. Sort and identify small electronic parts.
3. Assemble a miniature mechanical prototype.

**Ball Pein Hammer**
1. Demonstrate shaping/peening on teacher-approved soft metal.
2. Compare deformation of different safe materials.
3. Make a simple metalworking sample under workshop supervision.

**Steel Shaft Claw Hammer**
1. Assemble a wooden prototype using suitable nails.
2. Build a braced frame or display stand.
3. Compare joint stability in a supervised construction test.

**C-Clamp**
1. Hold material securely during gluing.
2. Clamp a workpiece for supervised sawing or drilling.
3. Build a stable jig for repeated measurements.

**Allen Key Set**
1. Assemble a modular construction-kit frame.
2. Adjust compatible robot chassis fasteners.
3. Demonstrate matching hex-key sizes to fasteners.

**Drill Machine Set**
1. Drill aligned holes in a teacher-approved project plate.
2. Make a sensor-mounting panel.
3. Compare hole diameter and position accuracy. Teacher supervision, clamping, eye protection, and appropriate bits are required.

**Drilling Workstation**
1. Drill repeatable holes in a model panel.
2. Make aligned holes for a robot chassis.
3. Compare hand-held versus guided drilling accuracy. Supervised tool use only.

**Spanner Set**
1. Assemble a modular frame with hex nuts and bolts.
2. Build and service a robot chassis.
3. Compare fastener sizes and tool fit.

**Table-top vice**
1. Hold a workpiece while filing.
2. Secure material for supervised cutting/drilling.
3. Build a small work-holding jig.

**Precision Screwdriver Set**
1. Assemble small electronic enclosures.
2. Open/close compatible battery-powered educational devices under supervision.
3. Match screw-head type and size to the correct driver.

**Adjustable universal wrench**
1. Assemble a frame with compatible nuts.
2. Compare wrench jaw settings with fastener sizes.
3. Tighten/loosen workshop fasteners under supervision.

**Wire Strippers**
1. Prepare wire for a breadboard-to-terminal connection.
2. Make a labelled low-voltage wiring harness.
3. Compare strip lengths and inspect for damaged conductors.

**40-piece Screwdriver Set**
1. Assemble robot chassis and enclosures.
2. Identify screw head types and matching bits.
3. Build a modular mechanical prototype.

**Cordless Rotary Multitool Set**
1. Smooth a 3D-printed part with a suitable attachment.
2. Deburr a teacher-approved plastic prototype.
3. Engrave a label on suitable material. Use guards/PPE and adult supervision; never hold a workpiece by hand near a rotating bit.

**Air Blower**
1. Clean dust from non-powered workshop surfaces or suitable equipment.
2. Compare airflow at different speed settings.
3. Demonstrate air movement using lightweight paper strips. Do not direct air at people or spin objects dangerously; follow tool instructions.

**Drill Bit Set**
1. Compare bit types and hole quality in approved materials.
2. Select a suitable bit for a model mounting plate.
3. Create a hole-size chart from supervised test pieces.

**File Set**
1. Smooth the edges of a cut prototype.
2. Compare surface finish before and after filing.
3. Fit a bracket or model part to a marked dimension.

**Mini File Set**
1. Deburr small plastic parts.
2. Smooth a small 3D-printed model.
3. Adjust a small non-electrical component for fit.

**Flexible Cutting Mat**
1. Cut cardboard pieces to precise dimensions.
2. Create repeatable paper/foam templates.
3. Design a scaled floor plan for a smart-school model. Use a craft knife only with teacher supervision.

**Plastic Storage Drawer / Organiser**
1. Create a labelled component sorting system.
2. Run a component-identification and inventory activity.
3. Track kit usage and missing parts after projects.

**Pegboard**
1. Create a labelled tool wall.
2. Design a visual tool-return checklist.
3. Organise a project station by workflow and safety category.

**Hot Glue Gun**
1. Assemble a cardboard robot chassis.
2. Attach a lightweight sensor mount to a model.
3. Build a bridge or exhibit prototype. High-temperature tool; teacher supervision and burn precautions required.

**Digital Oscilloscope**
1. View an LED/PWM signal from a microcontroller.
2. Compare RC capacitor charge/discharge waveforms.
3. Measure frequency and duty cycle of a timer circuit. Use low-voltage circuits and verify probe settings.

**Soldering Kit**
1. Solder an LED/resistor circuit onto a prototyping board.
2. Build a permanent sensor breakout board.
3. Repair a permitted low-voltage educational circuit. Teacher supervision, ventilation, eye protection, and heat-safe handling required.

**DC Power Adapter — 5 V**
1. Power a compatible 5 V sensor/controller circuit.
2. Compare voltage under different safe loads.
3. Build a regulated low-voltage test bench. Verify polarity, connector, and current requirements.

**DC Power Adapter — 12 V**
1. Power a compatible 12 V motor demonstration through a driver.
2. Test a suitable 12 V pump module.
3. Compare motor behaviour under controlled loads. Do not connect 12 V directly to 5 V/3.3 V electronics.

**Electric Screwdriver Set**
1. Assemble modular kits more consistently.
2. Build an enclosure or robot chassis.
3. Compare manual versus powered assembly time. Use correct torque and bit.

**Dual-Temperature Heat Gun**
1. Teacher-led heat-shrink tubing demonstration on a low-voltage cable.
2. Observe how heat affects approved thermoplastic samples.
3. Form a suitable plastic prototype if the material and tool instructions permit. High-temperature tool; adult supervision required.

**Soldering Helping Hand**
1. Hold a board while soldering a basic circuit.
2. Assemble a sensor breakout board.
3. Demonstrate how stable workholding improves solder-joint consistency. Use with normal soldering safety measures.

**Return Measuring Tape**
1. Measure and draw a scaled classroom layout.
2. Compare dimensions of bridge/robot prototypes.
3. Measure travel distance for a model car.

**Stainless Steel Rule**
1. Mark precise cut lines on cardboard or sheet material.
2. Measure component spacing on a prototype.
3. Compare measurement precision across tools.

**Digital Vernier Calliper**
1. Measure diameter and thickness of 3D-printed parts.
2. Compare nominal CAD dimensions with printed dimensions.
3. Measure wire, rod, or fastener sizes and record uncertainty.

**Spirit Level**
1. Level a model ramp and compare vehicle travel.
2. Check alignment of a 3D printer or work surface according to its manual.
3. Build a level platform for a robot or sensor station.

**Digital Pen Electric Tester**
1. Learn the purpose and limits of voltage-testing tools using a teacher-prepared safe demonstration.
2. Identify a tool's indication on a suitable low-voltage test source if the device supports it.
3. Compare tester instructions and safety ratings. Never use it as permission for students to probe mains circuits.

**Digital Multi Meter**
1. Measure voltage, resistance, and current in a low-voltage LED circuit.
2. Test continuity of wires and switches.
3. Compare battery voltage under no-load and suitable load conditions. Select the correct range/jack and never measure current across a voltage source.

**DIY Paper Microscope**
1. Observe prepared plant/leaf samples.
2. Compare fibres from paper, cloth, and other prepared materials.
3. Photograph or sketch microscopic structures for a classroom observation log. Follow the kit's optics and sample-preparation instructions.

**Telescope**
1. Observe the Moon and record visible features.
2. Compare apparent views of distant terrestrial objects and celestial objects.
3. Track visible planets or bright objects using a teacher-led observing plan. Never point a telescope at the Sun without a specifically designed certified solar filter and expert supervision.

**Sewing Kit**
1. Sew a simple fabric pouch for a project kit.
2. Create a fabric sleeve for a sensor enclosure (keep electronics removable and dry).
3. Prototype a wearable/soft-circuit layout without connecting unsafe power sources. Use the machine under supervision.

## Package 4 — Power Supply, Accessories and Safety Equipment

**Glue Sticks**
1. Assemble cardboard robot chassis parts.
2. Attach lightweight labels and sensor holders.
3. Build a bridge or display prototype. Use only with a compatible glue gun and teacher supervision.

**Nuts, Bolts and Screws**
1. Assemble a modular robot chassis.
2. Build a truss/bridge model with bolted joints.
3. Create adjustable brackets for a sensor mount.

**Small Cable Tie Pack**
1. Bundle low-voltage wires neatly.
2. Secure sensor cables to a robot chassis.
3. Make a reusable labelled cable-management layout; do not overtighten on delicate wires.

**Medium Cable Tie Pack**
1. Organise cables on a project frame.
2. Secure wiring harnesses away from moving parts.
3. Attach lightweight non-electrical accessories to a prototype.

**Big Cable Tie Pack**
1. Bundle larger cable groups on a model setup.
2. Secure loose wires away from wheels and gears.
3. Organise a demonstration station. Do not use cable ties as structural load-bearing fasteners.

**Sand Paper**
1. Compare surface finish at different grits.
2. Smooth a 3D-printed part before assembly.
3. Prepare an approved wood/plastic prototype for painting or gluing. Use suitable dust control and eye protection.

**Power Strip Adaptors**
1. Create a supervised equipment-power station with labelled outlets.
2. Conduct a power-budget worksheet for lab equipment.
3. Demonstrate safe cable routing and load planning. Never modify mains wiring or daisy-chain strips; adult supervision required.

**Bulb Holders**
1. Build a low-voltage lamp-holder demonstration using a suitably rated low-voltage bulb.
2. Compare lamp types in a teacher-prepared circuit.
3. Create a model streetlight. Do not wire household mains as a student project.

**Electric Wires**
1. Build a low-voltage LED circuit.
2. Wire a battery-powered sensor project.
3. Create a labelled series/parallel circuit board. Use correct gauge, insulation, and low-voltage supply.

**USB-to-DC Jack Cable**
1. Power a compatible 5 V device from a USB power bank.
2. Compare voltage/polarity at a compatible DC connector using a multimeter.
3. Create a portable low-power sensor station. Verify connector size, polarity, and current before use.

**First-Aid Kit**
1. Run a classroom safety-equipment identification activity.
2. Create an emergency-response and incident-reporting poster.
3. Conduct a supervised lab safety audit and restocking checklist. Do not use this as a substitute for trained medical help.

**Fire Extinguisher (2 kg powder type)**
1. Identify extinguisher parts, label, and appropriate use from the manufacturer's instructions.
2. Create a fire-response decision poster and evacuation plan.
3. Run a supervised safety inspection checklist. Do not discharge or practise with the extinguisher except in an authorised training session.

**Safety Goggles**
1. PPE compliance station for tool-use activities.
2. Compare eye-protection markings and correct fit.
3. Create a safety checklist for drilling, cutting, soldering, and workshop activities.

**Safety Gloves**
1. Select suitable gloves for an approved handling task after reviewing the risk assessment.
2. Create a PPE selection chart showing when gloves are appropriate and when they may be hazardous around rotating tools.
3. Inspect fit, condition, and storage as part of a workshop safety audit. Do not wear gloves near rotating machinery where they could catch.

**Safety Mask**
1. Learn the difference between dust masks and certified respiratory protection.
2. Create a PPE selection and fit-check poster based on product instructions.
3. Audit workshop dust-control procedures. A stated filtration value alone does not establish protection against every hazard; use the correct certified protection and ventilation.

## Suggested next step for each project

Before building, add a project record with: **problem statement, objective, required components, circuit/wiring diagram, working principle, build steps, code (if needed), testing procedure, expected result, limitations, and safety checklist**. For project selection, verify the actual lab inventory first; the quantities in the equipment catalogue are suggested quantities from the source, not proof of current stock.
