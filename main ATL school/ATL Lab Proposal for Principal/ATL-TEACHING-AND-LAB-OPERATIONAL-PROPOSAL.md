# PROPOSAL: Atal Tinkering Lab (ATL) Operational Framework, Teaching Methodology & Resource Allocation Plan

> **TO**: The Principal / Institutional Management  
> **FROM**: ATL In-Charge & Electronics / Robotics Instructor  
> **DATE**: Academic Session 2026–2027  
> **SUBJECT**: Proposal for Classroom Teaching Model, Student Group Organization, Grade-Wise Curriculum Progression, and Optimized Component Procurement (Classes 5 to 9)  

---

## 1. Executive Summary

Respected Principal,

As our school establishes and expands the **Atal Tinkering Lab (ATL)**, this proposal outlines a comprehensive pedagogical, operational, and inventory management framework. 

A common concern in STEM and tinkering labs is the risk of purchasing excess components that remain unused, or experiencing high component breakage due to unorganized student handling. The framework proposed here resolves both problems through a **structured 5-student team model**, a **rotational lab timetable**, and a **grade-appropriate curriculum progression**.

This plan ensures that **all 400 students across Classes 5 to 9** receive hands-on robotics, electronics, and design engineering education while keeping school procurement costs optimized, disciplined, and transparent.

---

## 2. School Demographics & Lab Capacity Planning

Our school has a total student body of **400 students** across Classes 5 to 9 participating in the ATL program.

| Grade Level | Sections / Batches | Students per Batch | Total Students in Grade |
|:---:|:---:|:---:|:---:|
| **Class 5** | Batch 5C & Batch 5D | 40 Students each | **80 Students** |
| **Class 6** | Batch 6C & Batch 6D | 40 Students each | **80 Students** |
| **Class 7** | Batch 7C & Batch 7D | 40 Students each | **80 Students** |
| **Class 8** | Batch 8C & Batch 8D | 40 Students each | **80 Students** |
| **Class 9** | Batch 9C & Batch 9D | 40 Students each | **80 Students** |
| **Total** | **10 Batches** | **40 Active / Session** | **400 Students** |

### The "Concurrent Session" Principle:
- The school timetable schedules **one batch of 40 students** in the lab during any single period.
- Therefore, our lab benches, tools, and test instruments **never need to accommodate 400 students simultaneously**.
- We equip the lab for **one active batch of 40 students**, which is reused across all 10 batches throughout the week.

---

## 3. Classroom Organization: The 5-Student Team Model (8 Groups per Batch)

When a batch of 40 students (20 boys and 20 girls) enters the lab, they are organized into **8 balanced teams of 5 students each**.

Individual work on complex electronics leads to isolation, confusion, and high component failure. Conversely, large groups (8–10 students) cause passive bystander behavior. A **5-member team** is the internationally recognized sweet spot for collaborative STEM education.

```
       [ 40 Students in Lab ]
                 │
  ┌──────────────┴──────────────┐
  │  8 Working Tables / Groups  │
  │   (5 Students per Table)    │
  └──────────────┬──────────────┘
                 │
  Each Student has a Clear Technical Role:
  ├── 1. Mechanical & Chassis Lead
  ├── 2. Circuit & Breadboard Lead
  ├── 3. Software & Logic Programmer
  ├── 4. Sensor & Calibration Lead
  └── 5. QA Tester & Lab Logbook Documenter
```

### Team Role Descriptions:
1. **Mechanical & Chassis Lead**: Assembles wheels, motor brackets, chassis plates, standoffs, and mechanical fasteners.
2. **Circuit & Wiring Lead**: Reads circuit schematics, handles breadboard connections, color-codes jumper wires, and checks power polarity.
3. **Software & Logic Programmer**: Operates the computer/laptop, writes code (Block-based Scratch for younger classes, C++/Python for older classes), and uploads firmware.
4. **Sensor & Calibration Specialist**: Adjusts trimmer potentiometers, aligns infrared sensors, tests environmental sensitivity (light/distance/sound).
5. **Quality Assurance (QA) & Documentation Lead**: Measures circuit voltages with the digital multimeter, tests error conditions, and records project observations in the official group logbook.

*Roles rotate across projects so every boy and girl gains hands-on experience in hardware, software, and testing.*

---

## 4. Grade-Wise Curriculum Progression (Classes 5 to 9)

To ensure student engagement and cost efficiency, **different grades do not build the same project**. 5th graders must not be overwhelmed with complex coding, and 9th graders must not repeat basic battery circuits.

```
Class 5: Basic Electrical Circuits (Batteries, Bulbs, DC Motors, Paper Crafts)
   ↓
Class 6: Discrete Electronics (Breadboards, LEDs, Resistors, 555 Timers, Alarms)
   ↓
Class 7: Intro to Microcontrollers (Arduino Uno, Sensor-Actuator Automation)
   ↓
Class 8: Mobile Robotics & Autonomy (Line-Following Car, Obstacle Avoider)
   ↓
Class 9: IoT Connected Systems & Drones (ESP8266 Wi-Fi, Cloud Dashboards, Drone BOM)
```

| Class | Focus Area | Sample Project | Microcontroller Required? | Hardware Complexity |
|:---:|---|---|:---:|---|
| **Class 5** | Electric Circuits & Simple Machines | Motorized Propeller Boat / Vibration Bug Bot | **None** | Low (DC motors, switches, batteries, craft card) |
| **Class 6** | Electronic Components & Analog Logic | Dark-Activated Night Lamp & 555 Police Siren | **None** | Medium (Breadboards, LDRs, 555 IC, buzzers) |
| **Class 7** | Embedded Computing & Smart Systems | Touchless Automatic Smart Dustbin / Distance Alarm | **Arduino Uno** | High (Ultrasonic sensor, SG90 servo motor) |
| **Class 8** | Mobile Robotics & Kinematics | **Autonomous Line-Following Robot Car** | **Arduino Uno / Nano** | Advanced (H-Bridge motor shield, IR array, 2WD chassis) |
| **Class 9** | Internet of Things (IoT) & Aeromodelling | Wi-Fi Weather Station & Educational Drone Assembly | **NodeMCU (ESP8266) & STM32** | Expert (Cloud IoT dashboards, dual LiPo quadcopter) |

---

## 5. Case Study Demonstration: Teaching the "Line-Following Robot Car" Project

To illustrate how this works in practice, here is the complete operational and instructional walkthrough for the **Class 8 Line-Following Car Project**.

### A. The 4-Week Pedagogical Plan

* **Week 1 (Mechanical Build & Motor Dynamics)**:
  - Students study motor torque, gear reduction, and wheel traction.
  - The Mechanical Lead and Circuit Lead assemble the 2WD acrylic chassis, mount the twin BO motors, battery pack, and front balance castor wheel.
* **Week 2 (Motor Driver Circuitry & H-Bridge Control)**:
  - Students learn how an H-Bridge driver (L298N/L293D) controls high-current motors using low-power microcontroller logic.
  - Students wire the motor driver to the Arduino Uno and test forward, backward, left, and right spins.
* **Week 3 (Infrared Reflection & Sensor Tuning)**:
  - Students examine how black surfaces absorb infrared light while white surfaces reflect it.
  - The Sensor Specialist calibrates the IR tracking sensor pair using the onboard sensitivity trimmers and multimeter voltage checks.
* **Week 4 (Closed-Loop Algorithm & Track Competition)**:
  - The Programmer writes the control logic (`IF left sensor sees white AND right sees black, THEN turn right`).
  - Teams compete on an arena track in the lab; the QA Lead logs lap times and optimization data.

---

### B. Component Requirements & Mathematical Calculation

#### 1. Per Single Car (1 Group of 5 Students):
- 1x 2WD Robot Chassis Plate with hardware & screws
- 2x 150 RPM Dual-Shaft BO Motors
- 2x High-Traction Rubber Wheels
- 1x Front Castor Wheel
- 1x Arduino Uno (or Nano) with USB cable
- 1x L298N Dual H-Bridge Motor Driver Module
- 1x 2-Channel Infrared Line-Tracking Sensor Module
- 1x 2x18650 Li-ion Battery Holder with DC Jack (or 4xAA)
- 1x Half-size Solderless Breadboard
- 20x Jumper Wires (Male-to-Female & Male-to-Male)

#### 2. For 1 Active Lab Batch (8 Groups working simultaneously):
- $8 \times 1 = \mathbf{8\text{ Chassis Kits}}$
- $8 \times 2 = \mathbf{16\text{ BO Motors with Wheels}}$
- $8 \times 1 = \mathbf{8\text{ Arduino Boards}}$
- $8 \times 1 = \mathbf{8\text{ Motor Drivers}}$
- $8 \times 1 = \mathbf{8\text{ IR Sensor Modules}}$
- $8 \times 1 = \mathbf{8\text{ Battery Holders}}$
- $8 \times 20 = \mathbf{160\text{ Jumper Wires}}$

#### 3. For the Entire Grade 8 (Batch 8C + Batch 8D = 16 Groups Total):
If Batch 8C and Batch 8D both keep their cars assembled during the 4-week module so they can compete against each other in the semester finale:
- **16 Complete Car Kits + 2 Teacher Spares = 18 Kits Total**.
- **Financial Benefit to School**: We only purchase **18 kits**, NOT 80 kits! Once Class 8 completes their grading, the components are returned to storage or reused for the next term.

---

## 6. Lab Organization: The "Project Box" Storage System

A major challenge in school laboratories is maintaining component accountability when 10 different batches share the space. 

To prevent loss and maintain order, we implement the **Classroom Project Box System**:

1. **80 Modular Clear Plastic Storage Bins** ($25\times 18\times 12\,\text{cm}$) are installed on lab shelving racks.
2. Each box is permanently labeled by class and group number:
   - `Class 5C — Group 1` through `Class 5C — Group 8`
   - `Class 5D — Group 1` through `Class 5D — Group 8`
   - ... up to `Class 9D — Group 8`
3. At the start of the 45-minute lab period, each group retrieves their team's box.
4. All in-progress circuits, chassis, and loose components remain inside that specific box.
5. At the clean-up bell (5 minutes before the end of the period), the QA Lead checks all items into the box and returns it to the shelf.
6. **Result**: Zero components left on tables, zero lost parts, and total accountability for each student team.

---

## 7. Laboratory Safety Protocols & Permanent Station Setup

Student safety is our highest priority. The lab is physically organized into distinct activity zones:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MAIN WHITEBOARD & PROJECTOR                     │
├────────────────────────────────────────────────────────────────────────┤
│  Table 1 (Grp 1)    Table 2 (Grp 2)    Table 3 (Grp 3)   Table 4 (Grp 4)│
│                                                                        │
│  Table 5 (Grp 5)    Table 6 (Grp 6)    Table 7 (Grp 7)   Table 8 (Grp 8)│
├──────────────────────────┬──────────────────────┬──────────────────────┤
│      SOLDERING BAY       │  3D PRINTING STATION │   TEST & DIAGNOSTICS │
│  (6–8 Supervised Irons)  │ (1x FDM Printer+UPS) │  (1x Oscilloscope)   │
└──────────────────────────┴──────────────────────┴──────────────────────┘
```

1. **Soldering Safety Bay**:
   - Soldering irons are **never** placed on student general desks.
   - A dedicated fire-resistant soldering bench with **6 to 8 temperature-controlled soldering stations**, safety cradles, and brass cleaners is located along the perimeter wall.
   - Only 1 student per team accesses the soldering bay at a time under direct teacher supervision with safety glasses on.
2. **Personal Protective Equipment (PPE)**:
   - **45 Clear Polycarbonate Safety Goggles**: Every student and instructor wears eye protection during soldering, rotary cutting, and mechanical assembly.
   - **Lab First-Aid Station** and **2 kg ABC Dry Powder Fire Extinguisher** mounted adjacent to the door.

---

## 8. Budget Optimization: Permanent Capital vs. Consumable Materials

To assist school administration in budget allocations, our procurement list divides all items into two strict accounting categories:

| Category | Definition | School Investment Rationale |
|---|---|---|
| **Permanent Capital Assets** | Physical equipment, diagnostic meters, power tools, soldering stations, 3D printer, furniture, and storage pegboards. | **One-time investment**. These stay in the lab permanently, do not leave the premises, and serve multiple generations of students over 5–7 years. |
| **Project Consumables** | Microcontroller boards (Arduino/Raspberry Pi), discrete passives (resistors, capacitors, LEDs), motors, sensor modules, jumper cables, solder wire, glue sticks, and fasteners. | **Recurring educational material**. These get wired, soldered, cut, and built into student models. Budgeted on a per-term or annual replenishment basis. |

---

## 9. Conclusion and Institutional Benefits

By approving this operational plan, our school achieves:
1. **100% Practical Student Inclusion**: Every single student from Class 5 to 9 actively designs, builds, and codes in every lab session.
2. **High Gender Engagement**: Equal distribution (20 boys / 20 girls per batch) across structured 5-student teams ensures full participation of girls in engineering and programming leadership roles.
3. **Fiscal Responsibility**: Equipment is purchased for concurrent batch capacities (8 teams / 40 students) rather than wasteful 400-individual purchases, saving significant institutional funds.
4. **Safety & Discipline**: Defined team roles, dedicated soldering stations, and the 80-bin project box system ensure an orderly, clean, and safe laboratory environment.

I respectfully submit this proposal for your review and formal administrative approval to proceed with lab setup and curriculum scheduling.

---

### Administrative Review & Approval

**Submitted by:**  
*(ATL In-Charge / Electronics & Robotics Instructor)*  
Date: ________________________  
Signature: ___________________  

<br>

**Approved by:**  
*(Principal / Head of Institution)*  
Date: ________________________  
Signature & Seal: ____________  
