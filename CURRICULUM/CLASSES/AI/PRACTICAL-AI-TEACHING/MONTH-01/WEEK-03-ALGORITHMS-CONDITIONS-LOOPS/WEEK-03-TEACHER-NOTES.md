# Week 3 — Decisions, Conditions, Loops and Algorithms

**Big question:** How can a program make a choice and repeat a task?

**Learning goals**
Students should be able to:
1. Explain an algorithm as a set of steps.
2. Use if/else to make a decision.
3. Use a loop to repeat instructions.
4. Build a short quiz or number-pattern program.

### Prepare before class
- Open a prepared notebook with separate cells for the examples.
- Prepare one simple flowchart: “Is the answer correct?”
- Prepare a short quiz question for the group challenge.

## Teacher notes — simple explanation

### 1. What is an algorithm?

Say:

> An algorithm is a clear set of steps for solving a problem or completing a task.

Example — making lemon water:
1. Take a glass.
2. Add water.
3. Add lemon.
4. Add a little sugar.
5. Stir.

Explain that the order matters. Computers need instructions that are clear and precise.

### 2. What is a condition?

Say:

> A condition helps a program choose what to do.

Example:
- If the answer is correct, show “Correct”.
- Otherwise, show “Try again”.

~~~python
answer = input("What is 2 + 3? ")

if answer == "5":
    print("Correct!")
else:
    print("Try again!")
~~~

Explain:
- if checks a condition.
- else gives another path.
- The indented lines belong to that choice.

### 3. What is a loop?

Say:

> A loop repeats instructions so we do not have to write the same instruction again and again.

~~~python
for number in range(1, 6):
    print(number)
~~~

Ask what numbers will appear before running it.

### 4. An algorithm can become code

Show:

**Start → Ask a question → Check the answer → Show result → End**

Explain that a flowchart is a picture of the steps a program follows.

## Lesson plan — 35 minutes

| Time | Teacher action | Student action |
|---|---|---|
| 0–4 min | Play Human Robot: give a deliberately incomplete instruction | Identify what is missing |
| 4–9 min | Explain algorithms and decisions with a simple flowchart | Suggest the next step |
| 9–16 min | Demonstrate if/else using the quiz example | Predict the result and run the code |
| 16–22 min | Demonstrate a loop and a number pattern | Predict and run the loop |
| 22–31 min | Guide the group challenge | Build or modify a quiz or pattern |
| 31–35 min | Ask teams to explain the condition or loop they used | Show output and explain |

**For a 30-minute session:** use a shorter Human Robot challenge and one practical task (quiz or pattern), while still demonstrating both a condition and a loop.

## Practical activity A — Quiz Game

~~~python
score = 0

answer = input("What is 4 + 5? ")

if answer == "9":
    print("Correct!")
    score = score + 1
else:
    print("Good try. The answer is 9.")

print("Your score is:", score)
~~~

Challenge:
- Change the question and answer.
- Add a second question using the same pattern.
- Ask what happens when the answer is typed in a different format.

## Practical activity B — Number Pattern Generator

~~~python
for number in range(1, 6):
    print(number * 2)
~~~

Challenge:
- Change the range.
- Change the multiplier.
- Try number multiplied by itself and observe the pattern.

## Class-wise adjustment
- **Class 5:** use prepared code; change the question or multiplier.
- **Class 6:** complete missing words in an if/else example.
- **Class 7:** add a score counter or a second quiz question.
- **Class 8:** create a loop that prints a multiplication table.
- **Class 9:** combine a loop and a condition to count how many values meet a rule.

**Check learning:** Can the student explain the difference between a decision and a loop?

---
