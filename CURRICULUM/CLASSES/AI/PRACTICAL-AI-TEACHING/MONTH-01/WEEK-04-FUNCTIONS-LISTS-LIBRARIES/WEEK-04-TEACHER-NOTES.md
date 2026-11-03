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
