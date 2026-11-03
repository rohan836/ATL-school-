# Python Basics — Student Notes

**AI Lab | Classes 5–9**

## 1. What is Python?

Python is a programming language. We use it to write instructions that a computer can run.

Python can be used to:
- Create games and applications.
- Work with numbers and data.
- Automate tasks.
- Build and experiment with Artificial Intelligence (AI).

## 2. What is a Python notebook?

A notebook is a digital document where we can write and run Python code.

- **Cell:** one section of a notebook.
- **Code cell:** a cell that contains Python instructions.
- **Run:** executes the code in the selected cell.
- **Output:** the result shown after the code runs.
- **Markdown cell:** a cell used for headings and written notes.

Run cells one at a time and read the output.

## 3. Your first Python command

~~~python
print("Hello, AI Lab!")
~~~

- `print()` displays information.
- The round brackets `()` contain the information to display.
- Quotation marks `" "` or `' '` mark text.

Try changing the message:

~~~python
print("Welcome to Python!")
print("I am learning to code.")
print(25)
~~~

## 4. Variables

A **variable** is a name that refers to a value stored in a program.

~~~python
team_name = "Smart Builders"
score = 10

print(team_name)
print(score)
~~~

In this example:

| Code part | Meaning |
|---|---|
| `team_name` | Variable name |
| `"Smart Builders"` | String value stored in the variable |
| `score` | Another variable name |
| `10` | Integer value stored in the variable |
| `=` | Assignment operator; assigns the value on the right to the name on the left |

A variable's value can be changed:

~~~python
score = 10
print(score)

score = 15
print(score)
~~~

The second assignment changes the value of `score` to `15`.

## 5. Basic data types

A **data type** tells Python what kind of value it is working with.

| Data type | Python name | Meaning | Example |
|---|---|---|---|
| String | `str` | Text | `"Hello"` |
| Integer | `int` | Whole number without a decimal part | `12` |
| Float | `float` | Number that can have a decimal part | `3.5` |
| Boolean | `bool` | A true-or-false value | `True` |

### String — `str`

A string is text written inside quotation marks.

~~~python
school = "ATL Lab"
language = "Python"
number_as_text = "123"
~~~

Even `"123"` is a string because it is inside quotation marks.

### Integer — `int`

An integer is a whole number without a decimal part.

~~~python
age = 12
score = 100
temperature_change = -3
~~~

### Float — `float`

A float is a number that can contain a decimal part.

~~~python
height = 4.5
price = 25.75
whole_value_as_float = 8.0
~~~

Python treats `8` as an integer and `8.0` as a float.

### Boolean — `bool`

A Boolean has only two possible values: `True` or `False`.

~~~python
is_ready = True
is_finished = False
~~~

The first letters in `True` and `False` must be capitalised.

## 6. Check a value's data type

Use `type()` to see the type of a value.

~~~python
print(type("Hello"))
print(type(25))
print(type(4.5))
print(type(True))
~~~

Python reports types such as `str`, `int`, `float` and `bool`.

## 7. Getting information with input()

The `input()` function allows a program to receive text typed by a user.

~~~python
team_name = input("Enter your team name: ")
print("Welcome,", team_name)
~~~

The typed response is stored in the variable `team_name`.

**Important:** `input()` returns text (a string), even when a person types digits.

~~~python
points_text = input("Enter your points: ")
print(type(points_text))
~~~

## 8. Converting data types

**Type conversion** means changing a value from one data type to another.

| Function | Purpose |
|---|---|
| `int()` | Converts a suitable value to an integer |
| `float()` | Converts a suitable value to a float |
| `str()` | Converts a value to text |

Example:

~~~python
points_text = "12"
points = int(points_text)

print(points)
print(type(points))
~~~

Using a number entered by the user:

~~~python
points_text = input("Enter whole-number points: ")
points = int(points_text)

total = points + 5
print("Points plus bonus:", total)
~~~

For this example, enter a whole number such as `8`. The text must contain a valid number for `int()` to convert it.

## 9. Basic arithmetic in Python

| Operator | Operation | Example | Result |
|---|---|---|---:|
| `+` | Addition | `5 + 2` | 7 |
| `-` | Subtraction | `5 - 2` | 3 |
| `*` | Multiplication | `5 * 2` | 10 |
| `/` | Division | `5 / 2` | 2.5 |

Example:

~~~python
first_score = 8
second_score = 6

total = first_score + second_score
difference = first_score - second_score
product = first_score * second_score

print("Total:", total)
print("Difference:", difference)
print("Product:", product)
~~~

## 10. Important symbols in Python

| Symbol | Name / use |
|---|---|
| `" "` or `' '` | Quotation marks; mark text |
| `()` | Parentheses; used when calling functions |
| `=` | Assignment; stores a value in a variable |
| `,` | Comma; separates items or function arguments |
| `#` | Starts a comment |
| `_` | Underscore; can be used in variable names |

### Assignment and comparison

- One equals sign `=` assigns a value: `score = 10`.
- Two equals signs `==` compare values: `score == 10`.

We will use comparisons more in the next lesson.

## 11. Variable naming rules

Good variable names describe the information they store.

~~~python
team_name = "Team Blue"
student_score = 15
number_of_points = 20
~~~

Rules:
- Use letters, numbers and underscores.
- Do not use spaces in a variable name.
- Do not begin a variable name with a number.
- Python distinguishes uppercase and lowercase letters.
- Use names that describe the value.

For example, `score` and `Score` are different names in Python.

## 12. Comments

A comment is a note in the code for people reading it. Python does not run the comment.

~~~python
# Store the team's points
score = 10

print(score)
~~~

A comment begins with `#`.

## 13. Mini Project — Team Greeting and Scoreboard

Build a small program for your group.

### Step 1 — Display a welcome message

~~~python
print("Welcome to the AI Lab")
~~~

### Step 2 — Store your team name and score

~~~python
team_name = "Team A"
score = 5

print(team_name)
print(score)
~~~

Change the example team name and score.

### Step 3 — Add two scores

~~~python
first_score = 8
second_score = 6
total = first_score + second_score

print("Total score:", total)
~~~

Change the two scores and run the program again.

### Step 4 — Ask for your team name

~~~python
team_name = input("Enter your team name: ")
print("Welcome,", team_name)
~~~

### Step 5 — Optional challenge: add a bonus

~~~python
points_text = input("Enter whole-number points: ")
points = int(points_text)

total = points + 5
print("Your points plus bonus:", total)
~~~

## 14. Practice challenges

Try these tasks in your notebook:

1. Display your favourite subject using `print()`.
2. Create a variable called `team_name` and store a team name in it.
3. Create an integer variable called `score`.
4. Create a float variable called `average_score`.
5. Create a Boolean variable called `is_ready`.
6. Use `type()` to check the types of your variables.
7. Ask the user for a team name using `input()`.
8. Ask for a whole-number score, convert it with `int()` and add 10 points.
9. Make a calculator that adds two numbers.
10. Change a variable's value and observe how the output changes.

## 15. Quick revision

- **Python:** a programming language used to write instructions for a computer.
- **Program:** a set of instructions that a computer runs.
- **Notebook cell:** a section where we write and run code.
- **Output:** the result produced by running code.
- **`print()`:** displays information.
- **Variable:** a name that refers to a value.
- **String (`str`):** text.
- **Integer (`int`):** a whole number.
- **Float (`float`):** a number that can have a decimal part.
- **Boolean (`bool`):** `True` or `False`.
- **`input()`:** receives text typed by a user.
- **`type()`:** checks the type of a value.
- **`int()`:** converts a suitable value to a whole number.
- **Comment:** a note in code that begins with `#`.

## 16. Self-check

Before finishing, make sure you can:

- [ ] Open a Python notebook and run a code cell.
- [ ] Use `print()` to display text and numbers.
- [ ] Identify a variable name and its value.
- [ ] Recognise strings, integers, floats and Booleans.
- [ ] Use `input()` to receive information.
- [ ] Explain why `input()` returns text.
- [ ] Use `int()` to convert valid digit text to a whole number.
- [ ] Change code, run it again and explain the output.

**Next topic:** Algorithms, decisions, conditions and loops.
