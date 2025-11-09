## Copilot / AI Agent Instructions — Final portfolio react

Purpose
- Help an automated coding assistant become productive quickly in this repository. Focus on concrete, discoverable patterns, commands, and files.

Quick commands
- Development (preferred): `npm run dev` — starts Vite (server: port 3000 as configured in `vite.config.ts`).
- Build: `npm run build` — runs `vite build` and writes output to the `build/` folder.
- Note: `start` and `test` scripts reference `react-scripts` (legacy). Prefer `dev`/`build` for local work unless a change explicitly requires CRA tooling.

Project layout (important files)
- `src/` — application source. Entry: `src/main.tsx`. Top-level layout: `src/App.tsx`.
- `src/components/` — page sections and shared components (e.g. `Header.tsx`, `Hero.tsx`, `Projects.tsx`). These are composed in `App.tsx`.
- `src/components/ui/` — design-system primitives (button, card, badge, dialog, etc.). Small changes here ripple across pages.
- `src/components/figma/ImageWithFallback.tsx` — image loading fallback pattern used across pages.
- `src/styles/` and `src/index.css` — global styling and Tailwind configuration points.
- `vite.config.ts` — aliases and build/server options. `@` is aliased to `./src`.

Key patterns and examples
- Named exports for UI and page components: components use named function exports (e.g. `export function Header() {}`) — imports in `App.tsx` use `{ Header }`.
- CSS is Tailwind-first. Components use utility classes directly in JSX (e.g. `className="min-h-screen bg-background"`).
- Utility for merging class names: `src/components/ui/utils.ts` exports `cn(...)` which wraps `clsx` + `tailwind-merge` — use it when composing conditional className strings.
- Static files (PDFs, local assets): imported using the `new URL(..., import.meta.url).href` pattern. Example from `src/components/Hero.tsx`:
  - const resumeUrl = new URL("../files/resume.pdf", import.meta.url).href
  Keep this when moving or referencing `src/files/*` assets.
- Section navigation: page sections have `id` attributes (e.g. `id="projects"`) and many components use a local `scrollToSection('projects')` helper that calls `element.scrollIntoView({ behavior: 'smooth' })`.

Integration points & external deps
- Many UI primitives wrap Radix primitives and lightweight libraries (see `package.json` dependencies: `@radix-ui/*`, `lucide-react`, `sonner`, `recharts`, etc.).
- Vite aliases include mappings like `'@': path.resolve(__dirname, './src')`. Also note multiple explicit alias entries mapping package-name@version to package-name — avoid introducing imports that bypass package names unless consistent with `vite.config.ts`.

Conventions and PR guidance
- Small visual changes: prefer editing a primitive under `src/components/ui/` (for example, `button.tsx`) and then run `npm run dev` to verify locally. Large style rewrites should include screenshots or a short GIF in the PR.
- When adding assets, place them in `src/files/` and reference via `new URL(..., import.meta.url)` so Vite resolves them correctly.
- Avoid using legacy CRA scripts. If a change requires `react-scripts`, explain why and add reproducer steps.

Debugging tips
- If the dev server is not running, start with `npm run dev` (Vite). The server is configured to open on port 3000.
- If imports fail, check `vite.config.ts` aliases (especially `@`) and any package alias entries.

Where to look first (for common tasks)
- Modify layout or page order: `src/App.tsx`.
- Change header navigation or scroll behavior: `src/components/Header.tsx`.
- Update hero content, resume link, or main CTA buttons: `src/components/Hero.tsx`.
- Add or edit a project card: `src/components/Projects.tsx` (uses `Card`, `Badge`, `ImageWithFallback`).

If something is unclear
- If you need a runtime command not listed in `package.json`, ask — do not assume a global tool is available.

End of file — ask the repo owner for clarification if any of the asset paths, build targets, or deployment expectations differ from the files listed above.
