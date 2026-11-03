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
