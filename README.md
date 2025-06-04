# 🎥 YouTube AI Analyzer

> A React-based tool that fetches YouTube subtitles and summarizes them using open-source LLMs — like Mistral running locally via Ollama.

---

## ✨ Features

- 🎬 Extracts subtitles from any public YouTube video (auto or manual captions)
- 🧠 Summarizes transcripts using **local** LLMs via [Ollama](https://ollama.com/)
- 🧱 Clean, modular **React + TypeScript** architecture
- 🌐 Built for **real-world utility** with excellent developer experience (DX)
- 💡 AI-first UX patterns for fast summarization and clarity

---

## 🧰 Tech Stack

| Layer      | Tech                        |
| ---------- | --------------------------- |
| UI         | React, TailwindCSS          |
| State      | Zustand                     |
| Build Tool | Vite                        |
| AI Backend | Ollama (running Mistral 7B) |
| Language   | TypeScript                  |

---

## 🚀 Project Goals

This project aims to:

- 🧑‍💻 Showcase **expert-level frontend engineering**
- 🧠 Explore **LLM UX patterns** and prompt abstraction
- 💼 Serve as an open-source portfolio project for **FAANG-level interviews**
- 🌍 Demonstrate **LLM integration in local-first apps**

---

## 🛠️ Setup & Development

```bash
# 1. Clone the repo
git clone https://github.com/VladyslavGit/youtube-ai-analyzer.git
cd youtube-ai-analyzer

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev

# Install Ollama (https://ollama.com)
brew install ollama  # macOS

# Pull and start Mistral
ollama pull mistral
ollama run mistral
```
