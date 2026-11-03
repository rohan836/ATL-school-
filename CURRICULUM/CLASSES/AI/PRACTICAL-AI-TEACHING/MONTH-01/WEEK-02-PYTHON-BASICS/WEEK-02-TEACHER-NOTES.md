# Week 2 — Python Basics: Give Instructions to a Computer

**Classes:** 5–9  
**Duration:** 30–35 minutes per batch  
**Big question:** How do we tell a computer exactly what to do?  
**Main practical:** Build a team greeting and scoreboard in Python.

These are teacher-facing notes. Use the explanations and questions to teach from the projector. Students work in groups with one laptop. The aim is for every student to understand what the code means, not just copy it.

## 1. What students should learn

By the end of this lesson, students should be able to:

- Explain what Python is and what a program is.
- Open a notebook and run a code cell.
- Explain what `print()` does.
- Identify a variable, its name and the value stored in it.
- Recognise the basic data types: string (`str`), integer (`int`), decimal number (`float`) and Boolean (`bool`).
- Use `input()` to receive information.
- Understand that keyboard input is received as text and that `int()` can convert suitable text into a whole number.
- Change a value, predict the result, run the code and explain what happened.

**Keep the main lesson small:** focus on notebooks, `print()`, variables, data types and input. Arithmetic and type conversion are guided extensions. Conditions and loops are taught properly in Week 3; functions and importing libraries are taught in Week 4.

## 2. Before students arrive

### Equipment
- Teacher laptop connected to the projector.
- iPad with these notes open.
- One laptop per student group.
- Prepared Python notebook already opened on the group laptops.
- Charger, projector and internet if the chosen notebook environment needs it.
- Paper copy of the code examples as a backup.

Test the notebook and every code cell before class. Avoid making students install Python or create accounts during this 30–35-minute lesson. Use the school's approved notebook environment. If internet is unavailable, use an offline Python environment prepared in advance or conduct the practical as a teacher-led demonstration with group prediction sheets.

### Group roles
Give each group one laptop. Rotate roles in later lessons:

- **Operator:** types and runs the code.
- **Navigator:** reads the instructions.
- **Predictor:** says what they think the code will do before it runs.
- **Tester / reporter:** changes a value and explains the result.

For a fifth student, add a **recorder** who writes down the team's discoveries.

## 3. Teacher explanation — teach these ideas in simple language

### A. What is a computer program?

Say:

> A computer program is a set of instructions that tells a computer what to do.

Everyday example: a recipe gives a person steps to follow. A program gives a computer steps to follow. The instructions must be written in a language and format the computer can understand.

Ask: **“Is a computer doing whatever it wants, or is it following instructions?”**

Answer: It follows the instructions in the program. Some programs use fixed rules; AI systems may also use models that have learned patterns from examples.

### B. What is a programming language?

Say:

> A programming language is a way for people to write instructions for computers.

Examples include Python, JavaScript, Java and C++. We are starting with Python because its code is comparatively readable.

### C. What is Python?

Say:

> Python is a programming language. We write Python instructions, and the Python interpreter runs those instructions for us.

Important distinction:
- Python is a programming language.
- Python is not itself an AI model.
- People use Python to work with data, train machine-learning models, build applications and automate tasks.

Ask: **“Can we use Python to build AI?”**

Answer: Yes. Python has libraries and tools that help people work with data and machine-learning models.

### D. What is Jupyter Notebook?

Show the notebook on the projector.

Explain:
- A **notebook** is a digital document for writing and running code in small sections.
- A **cell** is one section of the notebook.
- A **code cell** contains instructions written in Python.
- The **Run** button executes the selected cell.
- The **output** is what appears after the code runs.
- A **Markdown cell** is for written notes and headings, not Python instructions.

Say:

> We can run one small piece of code, see the result, change it and run it again. This makes experiments easier.

For older students, introduce the word **kernel**: it is the running Python process that executes notebook cells and remembers variables. They do not need to manage it in this lesson.

### E. What does `print()` mean?

Show:

~~~python
print("Hello, AI Lab!")
~~~

Explain each part:

- `print` is a built-in Python function that displays information.
- The round brackets `()` contain what we want to display.
- The quotation marks `"` show that `Hello, AI Lab!` is text.
- The exclamation mark is just part of the message.
- The output appears below the cell.

Ask: **“Does Python print this message on paper?”**

Answer: No. In Python, `print()` normally displays information on the screen or in the notebook output.

Ask: **“What if I change the words inside the quotation marks?”**

Answer: Python displays the new words when we run the cell again.

Try:

~~~python
print("Welcome, Team Rocket!")
print("We are learning Python.")
print(25)
~~~

Explain that `print()` can display text and numbers.

### F. What is a variable?

Say:

> A variable is a name that refers to a value stored by a program. Think of it as a labelled box: the label is the variable name, and the value is the information inside it.

Show:

~~~python
team_name = "Smart Builders"
score = 10

print(team_name)
print(score)
~~~

Point to the code on the projector and explain every part:

- `team_name` is the **variable name**.
- `"Smart Builders"` is the **value** stored in that variable.
- `score` is another variable name.
- `10` is the value stored in `score`.
- The `=` symbol is the **assignment operator**. It assigns the value on the right to the variable name on the left.
- `print(team_name)` asks Python to display the value stored in `team_name`, not the name itself.

Ask:
- **“Which one is the variable?”** — `score` is a variable name.
- **“Which one is the value?”** — `10` is the value.
- **“Can I change the value?”** — Yes. Change `score = 10` to `score = 20` and run the cell again.
- **“Why do we need variables?”** — They let a program remember and reuse information instead of writing the same value repeatedly.

Demonstrate updating a variable:

~~~python
score = 10
print(score)

score = 15
print(score)
~~~

Explain that the second assignment gives `score` a new value. The last output is `15`.

### G. What is a data type?

Say:

> A data type tells Python what kind of value it is working with.

Introduce four basic types:

| Type | Python name | Meaning | Example |
|---|---|---|---|
| Text | String (`str`) | Letters, words, symbols or text | `"Hello"` |
| Whole number | Integer (`int`) | A number without a decimal part | `12`, `0`, `-4` |
| Decimal number | Float (`float`) | A number with a decimal part | `3.5`, `10.0` |
| True / false | Boolean (`bool`) | One of two truth values | `True`, `False` |

Explain carefully:

**String (`str`)**
- A string is text.
- In Python, text is normally written inside single or double quotation marks.
- Examples: `"ATL Lab"`, `'Python'`, `"123"`.
- Even `"123"` is text because it is inside quotation marks.

**Integer (`int`)**
- An integer is a whole number with no decimal part.
- Examples: `5`, `100`, `0`, `-2`.
- The number `5` is an integer; the text `"5"` is a string.

**Float (`float`)**
- A float is a number that can have a decimal part.
- Examples: `2.5`, `12.75`, `8.0`.
- `8` and `8.0` have the same numerical value, but Python treats them as different types: integer and float.

**Boolean (`bool`)**
- A Boolean has only two values: `True` or `False`.
- The first letter must be capitalised.
- Example: `is_ready = True`.
- Students will use Booleans for decisions in Week 3.

Show:

~~~python
student_team = "Team Blue"
points = 12
average_time = 4.5
is_ready = True

print(student_team)
print(points)
print(average_time)
print(is_ready)
~~~

Ask students to identify each variable and its data type.

### H. How can we check a data type?

Show the `type()` function:

~~~python
print(type("Hello"))
print(type(25))
print(type(4.5))
print(type(True))
~~~

Explain:
- `type()` asks Python what kind of value it has received.
- Python displays names such as `str`, `int`, `float` and `bool`.
- This is a useful way to investigate code when we are unsure what kind of value we have.

### I. What are quotation marks, brackets and commas?

Point to the code and explain:

- **Quotation marks** `" "` or `' '`: mark the beginning and end of a string.
- **Round brackets** `()`: used when calling a function, such as `print()` and `input()`.
- **Comma** `,`: separates multiple values passed to a function, such as `print("Score:", score)`.
- **Equals sign** `=`: assigns a value to a variable.
- **Underscore** `_`: can be used in a variable name instead of a space, such as `team_name`.

Do not ask younger students to memorise punctuation rules. Let them identify the parts in working examples.

### J. What is a comment?

A comment is a note for people reading the code. Python ignores it when running the program. A comment starts with `#`.

~~~python
# Store the team's points
score = 10

print(score)
~~~

Explain that comments help us remember what a part of the code does.

### K. What is `input()`?

Say:

> `input()` pauses the program and waits for the user to type something. The program can then store that response in a variable.

Show:

~~~python
team_name = input("Enter your team name: ")
print("Welcome,", team_name)
~~~

Explain:
- The message inside `input()` is the question shown to the user.
- The typed response is stored in `team_name`.
- `print()` displays the welcome message.
- Use a team name or pretend name, not personal information.

**Important teacher point:** `input()` returns text (a string), even when the student types digits.

Demonstrate:

~~~python
points_text = input("Enter your points: ")
print(type(points_text))
~~~

If a student types `12`, Python still treats the received value as a string.

### L. What does type conversion mean?

Say:

> Type conversion means changing a value from one data type to another.

Explain:
- `int()` converts suitable text or a number into an integer.
- `float()` converts a suitable value into a decimal number.
- `str()` converts a value into text.

Show:

~~~python
points_text = "12"
points = int(points_text)

print(points)
print(type(points))
~~~

Then explain the common surprise:

~~~python
print("5" + "3")
print(5 + 3)
~~~

The first line joins two strings and displays `53`. The second adds two integers and displays `8`.

Use this carefully: students should understand that text and numbers are different kinds of values.

**Input with number conversion:**

~~~python
points_text = input("Enter whole-number points: ")
points = int(points_text)

total = points + 5
print("After the bonus:", total)
~~~

For this beginner example, the user must type a whole number such as `8`. If someone types a word or a decimal, Python will show an error. Explain that programs need to check input; handling invalid input will come later.

### M. Basic arithmetic operators

Use a few examples to show that Python can work like a calculator:

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `5 + 2` gives `7` |
| `-` | Subtraction | `5 - 2` gives `3` |
| `*` | Multiplication | `5 * 2` gives `10` |
| `/` | Division | `5 / 2` gives `2.5` |

Try:

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

This is an extension if time allows. Students do not need to learn every Python operator in this lesson.

## 4. Lesson timing — fit the actual timetable

### 35-minute AI slot

| Time | Teacher action | Student action |
|---|---|---|
| 0–4 min | Ask: “How can we make a computer remember our team's name and score?” | Predict and discuss |
| 4–10 min | Demonstrate a notebook cell, `print()`, a variable and its value | Identify code parts on the projector |
| 10–16 min | Explain string, integer, float and Boolean with examples | Classify the example values |
| 16–27 min | Guide the Team Greeting and Scoreboard practical | Type, change values and run cells |
| 27–32 min | Demonstrate `input()` and, if ready, number conversion | Enter a team name or points and observe the output |
| 32–35 min | Ask quick questions and check understanding | Explain one variable and one data type |

### 30-minute AI slot

| Time | Teacher action | Student action |
|---|---|---|
| 0–3 min | Ask the opening question | Predict |
| 3–8 min | Demonstrate notebook, `print()` and variable | Identify code parts |
| 8–13 min | Explain string, integer and float; mention Boolean | Classify example values |
| 13–24 min | Run the Team Greeting and Scoreboard practical | Change and run code |
| 24–28 min | Show `input()` or the score calculator | Try one short extension |
| 28–30 min | Ask the exit questions | Answer |

For 30-minute batches, leave type conversion as a teacher demonstration or a follow-up challenge. Do not rush the core practical.

## 5. Main practical — Team Greeting and Scoreboard

**Goal:** Students identify variables and data types while building a tiny team program.

### Task 1 — Display a message

~~~python
print("Welcome to the AI Lab")
~~~

Ask: “Which part is the instruction? Which part is the message?”

Answer: `print` is the instruction/function; the text inside the quotes is the message.

### Task 2 — Store a team name and score

~~~python
team_name = "Team A"
score = 5

print(team_name)
print(score)
~~~

Ask students to point out:
- Variable names: `team_name` and `score`.
- Values: `"Team A"` and `5`.
- Data types: string and integer.

Ask each group to change the team name and score.

### Task 3 — Add a second score

~~~python
first_score = 8
second_score = 6
total = first_score + second_score

print("Total score:", total)
~~~

Ask students to predict the answer before running it. Then change one score and run again.

### Task 4 — Ask the team for its name

~~~python
team_name = input("Enter your team name: ")
print("Welcome,", team_name)
~~~

Ask: “Where is the answer stored?”  
Answer: In the variable named `team_name`.

### Optional Task 5 — Ask for points and add a bonus

~~~python
points_text = input("Enter whole-number points: ")
points = int(points_text)

total = points + 5
print("Your points plus bonus:", total)
~~~

Explain that `input()` first receives text and `int()` converts suitable digit text into a whole number.

## 6. Student questions — ready answers for the teacher

Use these as a question bank. You do not need to explain every answer in the first lesson. Answer questions when they arise, and keep the class moving toward the practical.

| Student asks | Simple answer |
|---|---|
| What is coding? | Coding means writing instructions for a computer using a programming language. |
| What is programming? | Programming is the process of designing, writing, running and improving computer instructions. |
| What is Python? | Python is a programming language that lets us write instructions for computers. |
| Is Python AI? | No. Python is a language. We can use it to build AI programs and work with AI models. |
| Why are we learning Python for AI? | Many tools for data, machine learning and AI projects can be used through Python. |
| What is a program? | A program is a set of instructions that a computer runs. |
| What is a notebook? | It is a digital document where we can write and run code in separate cells. |
| What is a cell? | One section of a notebook. A code cell contains instructions we can run. |
| What is output? | The result displayed after the program runs. |
| What does print mean? | It displays information on the screen or in the notebook. |
| What is a variable? | A named place or label used to refer to a value that the program can use. |
| Which part is the variable in `score = 10`? | `score` is the variable name. |
| Which part is the value? | `10` is the value stored in the variable. |
| What does the equals sign do? | It assigns the value on the right to the variable name on the left. |
| Can a variable change? | Yes. We can assign it a new value. |
| Why not just write the number every time? | A variable lets us give information a name and reuse or update it easily. |
| What is a string? | A string is text, usually written inside quotation marks. |
| What is an integer? | An integer is a whole number without a decimal part, such as 7 or 25. |
| Is `"7"` an integer? | No. Because it is inside quotes, it is a string containing the character 7. |
| What is a float? | A number that can have a decimal part, such as 2.5. |
| Is 5.0 an integer? | No. Python treats 5.0 as a float, even though its value is mathematically five. |
| What is a Boolean? | A value that is either `True` or `False`. |
| Why is True written with a capital T? | Python's Boolean values use the exact spellings `True` and `False`. |
| What are quotation marks for? | They tell Python that the content is text. |
| Why do we use brackets after print? | The parentheses hold the information we want the function to display. |
| What is input? | It lets a program receive something typed by the user. |
| Why does input turn 12 into text? | Python's `input()` returns the typed response as a string. |
| How do I turn text digits into a number? | Use `int()` for a whole number or `float()` for a decimal number, when the text is suitable. |
| What is type()? | It lets us ask Python what kind of value something is. |
| Why does 5 + 3 give 8 but "5" + "3" give 53? | The first adds numbers. The second joins two pieces of text. |
| What happens if I make a spelling mistake? | Python may not understand the instruction or may say that a name is not defined. Read the error and check the code carefully. |
| Does Python understand capital and small letters as the same? | No. Python is case-sensitive. For example, `score` and `Score` are different names. |
| Can a variable name contain spaces? | No. Use an underscore, such as `team_score`. |
| Can a variable name start with a number? | No. Start with a letter or underscore, such as `score2` or `_score`. |
| What is a comment? | A note for people reading the code. Python ignores text after `#` on that line. |
| What is an error? | A message or problem that tells us the program could not run as expected. We investigate and fix it. |
| Does the computer know what I mean? | It follows the instructions we write. We must be clear and precise. |

## 7. Common mistakes — show students how to fix them

| Mistake | What may happen | Correct version |
|---|---|---|
| Missing quotation mark | Python reports a syntax error | `print("Hello")` |
| Missing closing bracket | Python reports a syntax error | `print("Hello")` |
| Using a variable before creating it | Python reports that the name is not defined | Set `score = 10` before `print(score)` |
| Wrong capital letters in a name | Python may say the variable is not defined | Use the same spelling and case each time |
| Writing `"score"` instead of `score` | Python prints the word score, not the stored value | Use `print(score)` |
| Adding text directly to an integer | Python reports a type error | Convert carefully or use `print("Score:", score)` |
| Writing `true` instead of `True` | Python treats it as an unknown name | Write `is_ready = True` |

Teach students not to panic when they see an error. Ask them to:
1. Read the last line of the error message.
2. Look at the code cell that failed.
3. Check spelling, quotes, brackets and the line mentioned.
4. Change one thing and run it again.
5. Ask a teammate before asking the teacher to fix it.

## 8. Variable naming rules — simple version

Good variable names describe the information:

~~~python
team_name = "Team Blue"
student_score = 15
number_of_points = 20
~~~

Rules:
- Use letters, numbers and underscores.
- Do not put spaces in a variable name.
- Do not start a variable name with a number.
- Python distinguishes capital and small letters.
- Choose names that explain what the value means.

For this class, prefer `team_name`, `score` and `total_points`, not unclear names such as `x1` or `abc`.

## 9. What is the difference between = and ==?

This is a common question. Give a short preview; teach comparisons properly in Week 3.

- One equals sign, `=`, assigns a value: `score = 10`.
- Two equals signs, `==`, compare two values: `score == 10`.

Say:

> One equals sign stores something. Two equals signs ask whether two things are equal.

Students do not need to use `==` independently yet.

## 10. Class-wise teaching adjustments

| Class | What to expect in this lesson | Suitable challenge |
|---|---|---|
| **5 — Discover** | Run prepared cells, change text and numbers, identify the variable by pointing | Change the team name and score; tell the teacher what changed |
| **6 — Understand** | Type simple print and variable examples with guidance; identify strings and integers | Add a second score and calculate the total |
| **7 — Experiment** | Use variables, input and type() with some independence | Ask for points, convert to integer and calculate a bonus |
| **8 — Build** | Explain string, integer and float; use arithmetic and debug a small mistake | Build a two-value score calculator and explain each variable |
| **9 — Create and evaluate** | Explain assignment, types, input conversion and common errors | Extend the scoreboard with several variables and test different inputs |

Offer a prepared/starter version for students who need support and an extension task for students who finish early. Rotate the laptop operator so everyone gets a turn.

## 11. Quick assessment — ask before the bell

Ask students to answer aloud or on a small exit slip:

1. In `score = 10`, what is the variable name?
2. What is the value?
3. Is `"10"` a string or an integer?
4. What does `print()` do?
5. What data type does `input()` return?
6. What is one difference between an integer and a float?

**Expected answers:** `score`; `10`; string; displays information; string; an integer has no decimal part while a float can have one.

A student has understood the lesson when they can point to a variable, identify its value and type, change it, run the program and explain the output.

## 12. What students should write in their notebooks

Keep the student notes short. They do not need to copy the complete teacher guide.

### Python Basics — Quick Notes

- **Python:** a programming language used to write instructions for a computer.
- **Program:** a set of instructions that a computer runs.
- **Notebook cell:** a section where we write and run code.
- **`print()`:** displays information.
- **Variable:** a name used to store or refer to a value.
- **String (`str`):** text, such as `"Hello"`.
- **Integer (`int`):** a whole number, such as `12`.
- **Float (`float`):** a decimal number, such as `3.5`.
- **Boolean (`bool`):** `True` or `False`.
- **`input()`:** receives text typed by the user.
- **`type()`:** tells us the data type of a value.
- **`int()`:** converts suitable input into a whole number.

Example:

~~~python
team_name = "Team Blue"
score = 10

print("Team:", team_name)
print("Score:", score)
print(type(team_name))
print(type(score))
~~~

## 13. After the lesson — teacher record

Complete this after each batch. Record what actually happened, not only what was planned.

**Date:**  
**Class / Batch:**  
**Students completed which tasks:**  
**Could students identify a variable and its value?**  
**Could students distinguish string, integer and float?**  
**Did students understand that input() returns text?**  
**Common questions asked:**  
**Where did students struggle?**  
**What worked well?**  
**What should change for the next batch?**  
**Next lesson:** Week 3 — Algorithms, conditions and loops.  
**Preparation needed:** Prepare the quiz notebook, number-pattern notebook and a simple flowchart.

---

**Teacher reminder:** Do not try to teach every detail in this document in one short period. Use Sections 3–5 for the live explanation and practical, Section 6 when students ask questions, and Sections 7–12 as reference or extension material. The goal is understanding through doing, not memorising every definition.
