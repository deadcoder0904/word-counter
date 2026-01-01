# Word Counter App Overview and Setup

**Purpose**
- Simple React app that counts words and characters while estimating reading and speaking time.
- Focused UI with a single text area and live stats.

**Key Features**
- Word count with whitespace normalization.
- Character counts with and without spaces.
- Reading time estimate at ~200 wpm and speaking time at ~150 wpm.
- Human-friendly time labels (e.g., `<1 min read`, `~2 min speak`).

**Tech Stack**
- React + TypeScript with Vite as the build tool.
- Tailwind CSS (via `@tailwindcss/vite`) for styling.
- `pretty-ms` for compact time formatting.

**Quick Start**
```bash
bun install
bun run dev
bun run lint
```

**Scripts**
- `bun run dev` - start the Vite dev server.
- `bun run build` - produce the production bundle in `dist/`.
- `bun run preview` - serve the production build locally.
- `bun run lint` - run oxlint across the repo.
- `bun run typecheck` - run oxlint with type awareness.
- `bun run format` - format code using oxfmt.
- `bun run format:check` - verify formatting only.
- `bun run clean` - remove `dist/`.

**Project Structure**
- `src/App.tsx` - main UI and layout.
- `src/hooks/useTextStats.ts` - memoized hook for text stats.
- `src/utils/textStats.ts` - counting and time estimation logic.
- `src/index.css` - global styles.

**Contributing Notes**
- Formatting rules live in `oxfmt.json` (2 spaces, single quotes, semicolons).
- Lint rules live in `oxlint.json` (warnings for style/perf, errors for correctness).
