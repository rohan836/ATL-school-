# Class 6 — Interactive Electronics and Arduino Projects

Introduce controller logic through small challenges. Use the lab-approved board and test components separately before integration.

## 1. Button-Controlled “Ready, Set, Blink!”
**Curriculum:** breadboard, button, digital input/output, code.
**Materials:** Arduino-compatible controller, LED/resistor, button, breadboard, wires, USB.
1. Wire an LED output and button input using the board's supported pull-up/pull-down arrangement.
2. Start with LED-on-press behavior.
3. Change the code to toggle or blink after a press.
4. Ask another team to predict behavior from the code description.
**Interactive twist:** create a secret press pattern.
**Success:** explain the input, output, and button-state check.

## 2. Smart Night Light
**Curriculum:** analog input, sensor readings, thresholds, conditions.
**Materials:** controller, LDR module/circuit, LED and resistor.
1. Read values in bright and shaded conditions.
2. Choose a threshold based on observed data.
3. Program the LED to respond to the threshold.
4. Tune and compare thresholds with another team.
**Interactive twist:** classmates try shadows and different positions.
**Success:** explain measured values and the control condition.

## 3. Smart Dustbin Lid
**Curriculum:** distance sensor, conditional control, servo, integration.
**Materials:** controller, distance sensor, small servo, cardboard bin/lid, appropriate power.
1. Test the sensor alone; inspect readings.
2. Test servo motion alone within a safe range.
3. Set a distance threshold and open the lid.
4. Add a re-check or delay to close when the hand moves away.
5. Test from several distances and tune.
**Interactive twist:** hands-free reliability challenge.
**Success:** demonstrate sensor → controller decision → servo and describe a bug fixed.

## 4. Buzzer Quiz Button
**Curriculum:** digital input, buzzer, control logic, debugging.
**Materials:** controller, 2–4 buttons, buzzer, optional LEDs/resistors.
1. Trigger buzzer when a button is pressed.
2. Add player indicators if components/pins allow.
3. Test simultaneous presses; discuss what the program can distinguish.
4. Change rules and retest.
**Success:** explain how an input triggers an output.

## Safety
- Disconnect power before rewiring.
- Servo current can exceed a controller pin's capacity. Use suitable power and common ground as directed; never power a motor from an I/O pin.
- Use component specifications and low-voltage arrangements.
