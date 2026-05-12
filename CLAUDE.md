# CLAUDE.md

Guidance for Claude Code (and other agentic assistants) working in this repository.

## Project

**YouTube AI Analyzer** — a local-first React SPA that fetches YouTube captions for a given video URL and summarizes the transcript using a locally-running LLM via [Ollama](https://ollama.com/). No backend; all LLM calls go from the browser to `OLLAMA_URL`.

## Stack

- React 18 + TypeScript (strict)
- Vite 5 build / dev server
- Tailwind CSS 3 (PostCSS + Autoprefixer)
- `youtube-caption-scraper` for captions
- Ollama HTTP API (`/api/generate`) for summarization
- Package manager: **pnpm**

## Commands

```bash
pnpm install           # install dependencies
pnpm dev               # start Vite dev server
pnpm build             # production build
pnpm preview           # preview production build
pnpm exec tsc --noEmit # type-check (no test or lint script defined)
```

There is no test suite and no linter wired up. `tsc --noEmit` is the closest thing to a lint step — run it before declaring a change done.

## Environment

A `.env.local` is required at the repo root:

```
VITE_OLLAMA_URL=http://localhost:11434/api/generate
```

The user must have Ollama running locally with a pulled model (default `mistral`) for the summarize flow to work end-to-end.

## Source layout

```
src/
  app/        App.tsx, main.tsx — entry + composition root
  pages/      Home.tsx (currently unused; App is rendered directly)
  features/   feature-scoped modules, one folder per domain
    youtube/    URL input + video-ID extraction
    subtitles/  caption fetching (useSubtitles hook + component)
    summary/    summarize hook + Summary component
    llm/        Ollama client + prompt generation
  config/     ollama.ts — reads VITE_OLLAMA_URL
  shared/     cross-feature components, hooks, lib utilities
  styles/     Tailwind entry (index.css)
  types/      ambient module declarations
```

Path alias: `@/*` → `src/*` (configured in both [tsconfig.json](tsconfig.json) and [vite.config.ts](vite.config.ts)).

## Conventions

- **Strict TypeScript** — `strict: true` is on; do not loosen it. Prefer explicit types at module boundaries.
- **Feature-scoped folders** — each feature owns its hook(s), component(s), and an `index.ts` barrel. New domain logic belongs under `src/features/<name>/`, not in `shared/`.
- **No backend** — all network calls happen client-side. The Ollama URL is the only external dependency at runtime.
- **No comments unless the why is non-obvious.** Names should carry intent.
- **Don't introduce libraries casually** — the dep list is intentionally small. Justify additions in the PR description.

## Notes for agents

- The README mentions Zustand, but it is **not** installed and state is local `useState` in [src/app/App.tsx](src/app/App.tsx). Treat the README as aspirational; the code is the source of truth.
- `src/pages/Home.tsx` is dead code — `App` is rendered directly from `main.tsx`.
- When summarizing changes, prefer the file_path:line_number style.
