# AI, Computing & Robotics — Curriculum & Structure Rules

**Scope:** Artificial Intelligence, Computational Thinking, Logic & GPU Hardware, Python (`Basics → Full OOP`), C++ (`Basics → Real-Time Embedded Control`), Deep Learning (`PyTorch` & `Jupyter`), Modern AI (`2017–2026`), and AI-Driven Robotics for Classes 5–9 (`Term 1`: June–October, Weeks 01–14 · `Term 2`: November–March, Weeks 15–28)

---

## 1. Core Rules

- **Strict Track Separation:** Never cross-reference external lab tracks inside AI curriculum docs. Teach Raspberry Pi Python automation and Arduino/ESP C++ controller programming directly inside AI, Robotics, and Edge AI modules.
- **Balanced Two-Term Progression (`June–March` · `28 Weeks`):**
  - Every grade starts **Term 1 (`June`, `Week 01`)** with AI purpose, Computational Thinking, Digital Logic Gates (`AND`/`OR`/`NOT`/`XOR`), and Hardware Compute (`CPU` vs `GPU` / `TPU` / `NPU`) alongside interactive `Jupyter Notebook` / `Python` (and `C++` in upper grades) so zero students miss fundamentals.
  - Both **Term 1 (`June–October`, `Weeks 01–14`)** and **Term 2 (`November–March`, `Weeks 15–28`)** blend concepts, programming, frameworks, 2017–2026 modern AI milestones, and robotics-AI builds.
- **Age & Grade Progression Across Classes 5–9:**
  - **Class 5:** AI purpose, computational thinking, binary/logic gates, `CPU vs GPU`, Jupyter + Python basics (`variables, if/else, loops, lists`), pixel grids, chatbots & word prediction, deep learning/RL intuition, `AlphaGo`/`OpenAI Five`/`AlphaFold`/`AlphaGenome`/`Sora`, Sense-Think-Act robotics, MicroPython/Pi intro.
  - **Class 6:** Narrow/Gen/Reasoning AI, CT flowcharts, `XOR`/adder gates, GPU parallel math, structured Python (`functions, dicts, CSV/charts`), supervised/unsupervised ML, RGB & object detection, tokenization/ChatGPT/2017 Transformers, Pi Python automation, neurons/RL, `o1/o3`/`DeepSeek-R1`/`Genie 2`/`Gemini Robotics`, deepfake/privacy engineering.
  - **Class 7:** 2017–2026 AI evolution, algorithmic search/complexity, half-adder gates, `CPU/GPU/TPU/NPU` & VRAM, intermediate Python (`NumPy, Pandas, Scikit-Learn`), `OpenCV`, TF-IDF/Attention/RLHF, **C++ Foundations (`setup/loop`, `millis()` timers)**, **PyTorch** tensors intro, Q-learning/`AlphaZero`/`OpenAI Five`/`AlphaGenome`, Raspberry Pi Python Vision + C++ robot control, `Gemini Robotics 2.5` VLA.
  - **Class 8:** Systems thinking, flip-flops/FSM, CUDA/FP16 VRAM, **Python OOP Intro**, **PyTorch** (`autograd`, `nn.Module`, `CNNs`, Transfer Learning), Precision/Recall/F1/PCA, Object Detection/Pose, Embeddings + Self-Attention (`Q/K/V`) + RAG/Tool Calling + `o1/o3`/`DeepSeek-R1`, **Intermediate C++ (`pointers, structs, OOP classes, PID, UART/I2C`)**, Raspberry Pi OpenCV + TinyML, DQN/`AlphaZero`/`OpenAI Five`, `Sora`/`Genie 2`, `AlphaFold 3`/`AlphaGenome 2`, `Gemini Robotics 2.5`, Agentic Coding & Red-Teaming.
  - **Class 9:** Scaling laws, 4-bit ALU & NPU/systolic arrays, **Full OOP Python (`inheritance, polymorphism, typing, unit tests`)**, **PyTorch Deep Learning (`DataLoader`, ResNets, INT8 Quantization, ONNX)**, Multi-head Self-Attention & `SFT/RLHF/DPO` + Hybrid RAG + Agents, `o1/o3` & `DeepSeek-R1 GRPO` + MoE, `AlphaFold 3`/`AlphaGenome 2 Atlas (2026)`, `Sora`/`Genie 2`, `PPO`/`MuZero`, **Applied OOP C++ & Real-Time Firmware + TinyML export**, Pi Vision + C++ Bridge, SLAM/A*/Drone autonomy, Alignment/Evals, Flagship Engineering Showcase.

---

## 2. One-File Curriculum + Projects Standard (NO Separate `PROJECTS.md`)

- **One File Per Class (`Class-<N>/CLASS-<N>-CURRICULUM.md`):**
  - Strictly **one 10-column table**:
    `| Term | Month | Week | Module | Concept / Topic | Project 1 | Project 2 | Project 3 | Project 4 | Project 5 |`
  - Uses `Term 1` / `Term 2`, real month names (`June`–`March`), `Week 01`–`Week 28`, clear topic names, and 5 concise project titles per row.
- **One Master Table (`AI-CURRICULUM-CLASSES-5-TO-9.md`):**
  - Combines every row from Class 5 through Class 9 into **one single 11-column table** (`Class` + the 10 columns above).
- **Forbidden Files:** Do NOT create separate `PROJECTS.md` files or `README.html` / `AGENTS.html` / `CLAUDE.html` / `SKILL.html` files.
- **HTML Generation:** Run `python3 CURRICULUM/build_html.py` after updating Markdown files.
