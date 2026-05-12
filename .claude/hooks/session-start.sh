#!/usr/bin/env bash
# SessionStart hook: install dependencies when running in a remote Claude Code
# sandbox (claude.ai/code) so the agent has a working node_modules from the
# first turn. No-op locally — devs install via `pnpm install` themselves.
#
# Toggle: only runs when CLAUDE_CODE_REMOTE=true is set by the runtime.

set -euo pipefail

if [[ "${CLAUDE_CODE_REMOTE:-}" != "true" ]]; then
  exit 0
fi

cd "$(dirname "$0")/../.."

# pnpm is required: the lockfile uses pnpm's workspace: protocol, which
# breaks npm/yarn installs. Bootstrap via corepack when pnpm is missing.
if ! command -v pnpm >/dev/null 2>&1; then
  if command -v corepack >/dev/null 2>&1; then
    echo "[session-start] pnpm not found; enabling via corepack"
    corepack enable >/dev/null 2>&1 || true
  fi
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "[session-start] pnpm unavailable; cannot install dependencies" >&2
  exit 1
fi

echo "[session-start] pnpm install --prefer-offline"
pnpm install --prefer-offline
