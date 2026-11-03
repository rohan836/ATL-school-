# Month 1 Teacher Notes — AI Foundations and Python

**Classes:** 5–9  
**Programme:** First four teaching weeks  
**Status:** Proposed teaching notes. Record actual delivery in the lesson log.  
**Purpose:** A simple classroom guide for teaching from an iPad, a laptop connected to the projector, and one shared laptop per student group.

Related records:
- [16-week practical AI learning roadmap](FOUR-MONTH-LEARNING-ROADMAP.md)
- [Teacher delivery guide and lesson log](TEACHER-DELIVERY-GUIDE.md)
- [Canonical AI curriculum](../AI-CURRICULUM-CLASSES-5-TO-9.md)
- [Current ATL timetable](../../../../main%20ATL%20school/ATL%20Lab%20Timetable/ATL-LAB-TIMETABLE.md)

---

## Before the month starts — classroom setup

### Equipment and preparation
- Teacher laptop connected to the projector.
- iPad for viewing these notes, keeping time and checking lesson steps.
- One working student laptop per group.
- Projector, chargers and internet connection if the activity needs it.
- Prepared browser tabs or notebook files.
- A non-internet backup activity.

Test every website, notebook and code example before students arrive. Do not spend the short AI lesson installing software or creating accounts. Keep a prepared notebook ready on each group laptop wherever possible.

### Group arrangement
Form teams according to the number of students and laptops available. Give each team one laptop. Rotate the laptop operator every lesson so one student does not do all the work.

Suggested roles:
- **Operator:** uses the laptop and runs the activity.
- **Navigator:** reads instructions and guides the operator.
- **Tester:** tries different examples and looks for mistakes.
- **Reporter:** explains what the team discovered.
- **Recorder:** writes down the result (for teams of five).

Change roles in the next session.

### How to use the screens
- **Projector / teacher laptop:** show the question, demonstration, starter code and instructions.
- **iPad:** keep these notes open, watch the time and record what to change for the next batch.
- **Group laptops:** students perform the experiment. Ask them to take turns typing and explaining.

---

# Week 1 — What Is AI? (AI Detective)

**Big question:** How can a computer recognise, recommend, predict or create something?

**Learning goals**
By the end of the lesson, students should be able to:
1. Give a simple explanation of AI.
2. Identify a few everyday examples of AI.
3. Distinguish an AI system from an ordinary fixed-rule program in simple cases.
4. Explain that AI can make mistakes.

### Prepare before class
- Prepare 5–6 example pictures or slides: calculator, voice assistant, film recommendation, spam filter, fixed timer and image-recognition example.
- Prepare one teacher-controlled AI demonstration, such as asking a language model to explain a topic or generate a short quiz.
- Do not require students to create personal accounts. Use teacher-operated demonstrations or a school-approved supervised setup.
- Prepare a paper version of the AI Detective activity in case the internet is unavailable.

## Teacher notes — simple explanation

### 1. What is Artificial Intelligence?

Say:

> Artificial Intelligence, or AI, is technology that helps computers do tasks such as recognising pictures, understanding language, finding patterns, making predictions or generating content.

Explain:
- A computer follows instructions.
- Some programs follow rules written directly by a programmer.
- Some AI systems learn patterns from examples or use trained models to produce an answer or prediction.
- AI is useful, but it does not know everything and can make mistakes.

**Easy example:** A program that always says “Good morning” at 8 AM is following a fixed rule. A trained model that looks at many pictures of cats and dogs and predicts which one is in a new picture is using a learned pattern.

### 2. AI is not the same as all software

Write on the projector:
- All AI systems use software.
- Not all software is AI.
- A basic calculator follows exact instructions.
- An image classifier uses a model to recognise patterns in pictures.

Avoid telling students that every smart-looking device uses AI. Some devices mainly use fixed rules; some combine rules and AI.

### 3. Where do we see AI?
Use familiar examples:
- Voice typing converts speech into text.
- A photo app may recognise objects or group similar pictures.
- A video or music app may recommend what to watch or hear.
- A translation tool generates a translation.
- A spam filter identifies likely unwanted messages.
- A map app may estimate traffic or travel time.

Ask: “What is the input? What does the computer produce?”

### 4. A simple AI process

Show:

**Input → AI model → Output**

Example:
- Input: a picture of a fruit.
- AI model: examines patterns learned from example pictures.
- Output: “This may be a mango.”

Explain that the output is a prediction, not a promise that the answer is correct.

## Lesson plan — 35 minutes

| Time | Teacher action | Student action |
|---|---|---|
| 0–4 min | Show three surprising examples. Ask: “Which of these do you think uses AI?” | Vote and explain guesses |
| 4–9 min | Explain AI, ordinary software and input–model–output | Listen and answer quick questions |
| 9–15 min | Run a teacher-controlled AI demonstration. Change the instruction and compare results | Suggest a prompt and compare outputs |
| 15–25 min | Run the AI Detective group challenge | Sort examples and record reasons |
| 25–31 min | Ask each team to choose one example and explain how it helps a user | Prepare a 30-second explanation |
| 31–35 min | Ask the exit questions and correct misunderstandings | Answer individually or as a team |

**For a 30-minute session:** use 0–3, 3–7, 7–11, 11–21, 21–27 and 27–30 minute sections. Shorten discussion, not the group activity.

## Practical activity — AI Detective

**Goal:** Decide whether an example uses AI, fixed rules or a mixture.

Give each group these examples:
1. A basic calculator.
2. A voice-to-text system.
3. A fixed traffic-light timer.
4. A film or music recommendation system.
5. A spam email filter.
6. A trained program that classifies pictures of cats and dogs.

Ask teams to complete:

| Example | What goes in? | What comes out? | AI, fixed rules or unsure? Why? |
|---|---|---|---|
| Voice typing | Speech | Text | |
| Recommendation app | Viewing/listening history | Suggested content | |
| Calculator | Numbers and operation | Answer | |

Some systems combine fixed rules and AI. Accept “unsure” when students can explain what they would need to investigate.

**Challenge:** Ask each team to invent one useful AI idea for the school. They must explain the problem it could help solve.

## Projector demonstration — prompt experiment

Show two prompts to a teacher-controlled AI assistant:

**Prompt A:** “Make a quiz.”

**Prompt B:** “Create three easy multiple-choice questions about planets for Class 5. Give four options and show the correct answer separately.”

Ask students:
- Which instruction is clearer?
- What changed in the answer?
- Should we trust every answer without checking?

Do not enter student names, photographs, voices or personal information.

## Board / student notebook notes
Students only need to record:
1. AI helps computers recognise, understand, predict or create.
2. AI can learn patterns from examples.
3. Input → model → output.
4. AI can make mistakes, so we test its results.
5. One AI example I found: ________.

## Class-wise adjustment
- **Class 5:** use pictures and simple examples; sort the six cards and explain one choice.
- **Class 6:** identify input and output for each example.
- **Class 7:** discuss why a recommendation system might need data from previous examples.
- **Class 8:** compare a fixed-rule program with a learned image classifier.
- **Class 9:** discuss what evidence would show whether a system uses AI and how its predictions might fail.

**Check learning:** Can each student explain one AI example and one non-AI or fixed-rule example?

---

# Week 2 — Python Basics: Give Instructions to a Computer

**Big question:** How do we tell a computer exactly what to do?

**Learning goals**
Students should be able to:
1. Open a prepared notebook and run a code cell.
2. Use print to display a result.
3. Store information in a variable.
4. Use simple text and number values.
5. Change code and predict what will happen.

### Prepare before class
- Open a prepared Jupyter Notebook or another school-approved Python notebook on each group laptop.
- Test that the notebook runs.
- Prepare a notebook with the examples below already entered.
- If notebooks are not installed or internet is not available, use an approved offline Python editor or run the demo on the teacher laptop while groups complete a code-prediction sheet.

## Teacher notes — simple explanation

### 1. What is Python?

Say:

> Python is a programming language. We use it to write instructions that a computer can run. Python is not AI by itself, but people use Python to create programs and AI projects.

### 2. What is a notebook?

Explain:
- A notebook is a digital page where we can write code.
- A **code cell** contains Python instructions.
- We run a cell to see what the computer does.
- We can change the code and run it again.

Show the Run button. Ask students to run one cell at a time.

### 3. First Python instruction

~~~python
print("Hello, AI Lab!")
~~~

Explain:
- print tells Python to display something.
- Text is written inside quotation marks.
- Parentheses hold the information we give to print.

### 4. What is a variable?

Say:

> A variable is a named box where a program stores information so it can use it later.

~~~python
team_name = "Smart Builders"
score = 10

print(team_name)
print(score)
~~~

Explain:
- team_name stores text.
- score stores a number.
- The equals sign stores the value in the variable.

### 5. Getting input

~~~python
team_name = input("Enter your team name: ")
print("Welcome,", team_name)
~~~

Use a team name, not students' personal details.

## Lesson plan — 35 minutes

| Time | Teacher action | Student action |
|---|---|---|
| 0–4 min | Ask: “How can we make a computer display our team's name?” | Predict an answer |
| 4–9 min | Demonstrate a notebook cell and explain print and variables | Watch and identify the code cell |
| 9–14 min | Run the first examples on the projector | Run the starter cells on group laptops |
| 14–26 min | Guide the Team Greeting and Scoreboard activity | Change variables, run code and test values |
| 26–31 min | Show a prepared mystery-number example and ask students to change the target number | Change one value and predict the output |
| 31–35 min | Ask each team to explain one variable | Explain what their code stores |

**For a 30-minute session:** shorten the demonstration and share-out by five minutes while keeping time for students to run code.

## Practical activity — Team Greeting and Scoreboard

**Task 1: Display a message**

~~~python
print("Welcome to the AI Lab")
~~~

**Task 2: Create variables**

~~~python
team_name = "Team A"
score = 5

print(team_name)
print(score)
~~~

Students replace the example team name and score.

**Task 3: Ask for a team name**

~~~python
team_name = input("Enter your team name: ")
print("Welcome,", team_name)
~~~

**Task 4: Make a score calculator**

~~~python
first_score = 8
second_score = 6
total = first_score + second_score

print("Total score:", total)
~~~

Ask teams to change the scores and predict the total before running the cell.

## Small teacher demonstration — mystery number

Show this prepared code. Explain that the comparison and decision lines will be taught in Week 3; today students only change the stored number and observe the program.

~~~python
secret_number = 7
guess = 5

if guess == secret_number:
    print("Correct!")
else:
    print("Try again!")
~~~

Ask: “What happens if we change guess to 7?” Do not require students to memorise if/else yet.

## Board / student notebook notes
1. Python is a language for writing computer instructions.
2. A notebook contains code cells that we can run.
3. print displays information.
4. A variable stores information.
5. input lets a program receive information.

**Check learning:** Can the student change a variable, run the cell and explain the new output?

## Class-wise adjustment
- **Class 5:** use the prepared notebook; change text and numbers only.
- **Class 6:** type the print and variable examples with guidance.
- **Class 7:** add the input and score-calculator tasks.
- **Class 8:** predict outputs before running and explain text vs numeric values.
- **Class 9:** change the program and add a simple calculation or extra variable independently.

---

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

# Week 4 — Functions, Lists and Importing Libraries

**Big question:** How can we organise code and reuse helpful tools?

**Learning goals**
Students should be able to:
1. Explain why functions are useful.
2. Store several values in a list.
3. Explain what a library is.
4. Use an import statement in a prepared example.
5. Build a small reusable quiz or calculator.

### Prepare before class
- Prepare a notebook with the examples below.
- Make sure the Python environment includes the standard random module.
- Prepare a short list of quiz questions.
- Keep an extension task ready for faster groups.

## Teacher notes — simple explanation

### 1. What is a function?

Say:

> A function is a named set of instructions that we can use whenever we need it.

~~~python
def welcome_team():
    print("Welcome to the AI Lab!")

welcome_team()
~~~

Explain:
- def creates a function.
- The function name tells us what it does.
- Calling the function runs its instructions.

### 2. What is a list?

Say:

> A list stores several items together in one place.

~~~python
fruits = ["mango", "apple", "banana"]

print(fruits)
print(fruits[0])
~~~

Explain that Python starts counting list positions from zero. For younger students, treat this as a discovery: “Why does the first item use 0?”

### 3. What is a library?

Say:

> A library is a collection of ready-made code that helps us do a task without writing everything ourselves.

~~~python
import random

number = random.randint(1, 10)
print(number)
~~~

Explain:
- import makes library tools available to our program.
- random is a Python module for random choices and numbers.
- randint(1, 10) gives a whole number from 1 to 10, including both ends.

Later, students will meet libraries that help with data, charts and machine learning.

## Lesson plan — 35 minutes

| Time | Teacher action | Student action |
|---|---|---|
| 0–4 min | Ask: “What if we need to repeat the same instructions many times?” | Suggest ways to reuse code |
| 4–10 min | Explain functions and lists with examples | Run the prepared cells |
| 10–15 min | Demonstrate import random | Predict and run a random-number cell |
| 15–27 min | Guide the Random Quiz Challenge | Modify a list and run a function |
| 27–32 min | Give teams one extension challenge | Add a question or change the function |
| 32–35 min | Review what def, list and import mean | Explain one part of their program |

**For a 30-minute session:** reduce introduction and extension time. Keep the main activity and final check.

## Practical activity — Random Quiz Challenge

Start with:

~~~python
import random

questions = [
    "What is 2 + 3?",
    "What planet do we live on?",
    "How many days are in a week?"
]

question = random.choice(questions)
print(question)
~~~

Explain that random.choice selects one item from the list.

Then add a reusable function:

~~~python
def show_team_result(team_name, score):
    print("Team:", team_name)
    print("Score:", score)

show_team_result("Smart Builders", 3)
~~~

**Challenge options:**
- Add two more questions to the list.
- Run the question cell several times. Does the question change?
- Change the team name and score.
- For older students, create a function that accepts a question and prints it.

## Board / student notebook notes
1. A function is a reusable set of instructions.
2. A list stores several values together.
3. A library contains ready-made code.
4. import makes a library or module available.
5. We can build bigger programs by combining small parts.

**Check learning:** Can the student identify a function, a list and an imported module in the notebook?

---

# End of Month 1 — Teacher review

After Week 4, check whether students can:
- explain AI with one example;
- tell the difference between AI and a fixed-rule program in a simple case;
- open and run a prepared Python notebook;
- use print, variables and input;
- explain an algorithm, a condition and a loop;
- recognise a function, a list and an import statement;
- change code, run it and explain the output.

Do not expect every student in Classes 5–9 to reach the same level. Use the class-wise expectations in each week and note where extra support is needed.

## What to prepare for Month 2

The next learning block is **Data and Machine Learning**.

Prepare:
- a small non-personal dataset (for example, plant counts, weather observations or labelled object images);
- a beginner notebook for reading a small table and making a simple chart;
- a visual demonstration showing examples, labels, training and testing;
- a simple number-prediction activity;
- a prepared handwritten-digit recognition experiment.

Use small datasets and prepared notebooks. Students should learn what the model is doing, not spend the lesson troubleshooting installation.

## Teacher lesson record — complete after every batch

Copy this block for each delivery:

**Date:**  
**Class / Batch:**  
**Week / lesson:**  
**What I actually taught:**  
**Practical activity completed:**  
**What students made or tested:**  
**What students understood:**  
**Where students struggled:**  
**What worked well:**  
**What I would change for Batch D / next time:**  
**Next lesson:**  
**Preparation needed:**  

Record class-level observations only. Do not add student names, photographs, personal details or sensitive information to this public repository.
