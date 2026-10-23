# Class 9 — Interactive Autonomous Robotics Projects

Emphasize design choices, repeatable tests, debugging, and limitations. Select capstone by available chassis, sensors, motors, and drivers.

## 1. Obstacle-Avoiding Explorer
**Curriculum:** architecture, sensor data, motor driver, sequences, feedback, navigation, testing.
**Materials:** chassis, controller, distance sensor(s), driver, DC motors, suitable battery arrangement.
1. Draw sensor → controller → driver → motors.
2. Test each component separately.
3. Program forward motion; when obstacle is near, stop, turn, continue.
4. Run at least five trials and record collisions/completion.
5. Change one variable and compare.
**Interactive twist:** a rescue route with soft obstacles; score reliability, not speed alone.
**Success:** present test data and one improvement.

## 2. Line-Following Delivery Bot
**Curriculum:** sensors, calibration, structured code, motor control, data logging.
**Materials:** chassis, line sensor(s), driver, motors, controller, tape track, lightweight payload.
1. Read values over line/background.
2. Calibrate and define detection.
3. Implement steering at low speed.
4. Add delivery stop/indicator if supported.
5. Log repeated trial outcomes.
**Interactive twist:** teams design and exchange track segments.
**Success:** explain how sensor readings steer and what causes tracking errors.

## 3. Mini Maze Mission
**Curriculum:** multi-step behavior, edge cases, reliability, constraints, documentation.
**Materials:** robot from project 1/2 and cardboard maze with wide corridors.
1. Sketch maze and finish condition.
2. Start with simple observable rules.
3. Test slowly and record wrong turns/stalls.
4. Change one rule and retest.
5. Present strategy and limitation.
**Interactive twist:** teams make comparable maze layouts for other teams.
**Success:** complete a route or document why the design falls short.

## 4. Engineering Showdown: Improve, Don't Just Race
**Curriculum:** constraints, repeated tests, reflection, documentation.
1. Select baseline metric: completion rate, time, collisions, or runtime.
2. Run repeatable baseline trials.
3. Make one design change.
4. Repeat under the same conditions.
5. Present evidence, trade-offs, and next improvement.
**Success:** report metric, conditions, results, and limitation.

## Suggested assessment
- 25% task functionality and success criteria
- 25% evidence and repeatable trials
- 20% architecture/control explanation
- 20% debugging and improvement
- 10% safety and documentation

## Safety
Low-voltage power and suitable motor drivers only; no motor directly from controller pins. Keep speeds low, use soft obstacles, secure batteries, and disconnect power before rewiring.
