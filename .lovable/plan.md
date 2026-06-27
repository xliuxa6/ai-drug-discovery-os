# Drug R&D Super Intelligence — Concept Page

A single scrolling page with a sticky top anchor nav linking three sections. Clean scientific / biotech visual style. All copy in English. Each section pairs concise narrative text with a custom SVG diagram.

## Visual direction

- Background: off-white (#fafbfc) with deep navy (#0c2340) text and teal (#2d8a9e) accents (Ocean Deep palette).
- Typography: Instrument Serif for display headings + Work Sans for body (editorial scientific feel).
- Generous whitespace, thin hairline dividers, small uppercase section eyebrows ("01 / Loop Engineering").
- Subtle entrance fade/slide via framer-motion when each section scrolls into view.

## Page structure (`src/routes/index.tsx`)

```
Sticky nav: Logo "Drug R&D SI"  |  Loop Engineering · AI OS · Two Scalings
Hero: Title + one-line thesis + scroll cue
Section 01 — Loop Engineering + RL              (id="loop")
Section 02 — Drug R&D AI OS                      (id="os")
Section 03 — Two Axes of Scaling                 (id="scaling")
Footer: minimal
```

Anchor nav uses plain `<a href="#id">` with `scroll-behavior: smooth` set in styles.css. Active section highlighted via IntersectionObserver hook.

## Section 1 — Loop Engineering + RL (`src/components/LoopSection.tsx`)

Narrative: Train AI Agents to complete tasks better via a closed loop. The Agent uses inference to attempt a task; the task outcome produces a reward/feedback signal; that signal updates the Agent — improving future inference. Loop Engineering + Reinforcement Learning.

Diagram (custom SVG): a circular loop with two large nodes — **AI Agent** (left) and **Task** (right) — connected by two arrows:
- Top arrow: "Inference / Action" Agent → Task
- Bottom arrow: "Reward / Feedback" Task → Agent
Small annotations around the loop: "Policy update", "Outcome eval", "Trajectory". A faint dotted outer ring labeled "Loop Engineering · RL".

## Section 2 — Drug R&D AI OS (`src/components/OSSection.tsx`)

Narrative: An operating system that orchestrates specialized agents to solve complex drug R&D workflows. The OS routes tasks, shares context, and composes agents.

Diagram: a central rounded "Drug R&D AI OS" kernel tile, with four satellite agent cards arranged in a 2x2 around it, each connected by a thin line:
- Competitive Intelligence Agent
- Target Research Agent
- Clinical Data Benchmarking Agent
- Medical Monitoring Agent

Each card has a small monoline icon, agent name, and one-line role. A thin band underneath labeled "Shared memory · Tool registry · Task router".

## Section 3 — Two Axes of Scaling (`src/components/ScalingSection.tsx`)

Narrative: Reaching Drug R&D Super Intelligence requires scaling along two orthogonal axes.

Diagram: an X/Y axis chart.
- Y axis — "Agentic Capability (Reasoning & Planning)": tick labels bottom→top: Prompt Engineering → Context Engineering → Loop Engineering → Multi-Agent Framework.
- X axis — "Action Space (Tools & Data)": tick labels left→right: Competitive Intelligence · Target Research · Medical Monitoring · ADMET Prediction · …
- A diagonal gradient arrow from lower-left to upper-right labeled "Drug R&D Super Intelligence".
- Two short captions beside each axis explaining what scaling on that axis means.

Below the chart, two compact columns restate each axis with 3–4 bullet examples.

## Files to create / change

- `src/styles.css` — add Ocean Deep tokens (background, foreground, primary teal, navy ink, hairline border), smooth scroll, font wiring.
- `src/routes/__root.tsx` — update head meta (title "Drug R&D Super Intelligence", description, og tags). Keep Outlet.
- `src/routes/index.tsx` — replace placeholder with the page composition (Nav, Hero, three sections, Footer) and per-page head meta.
- `src/components/SiteNav.tsx` — sticky anchor nav with active-section highlight.
- `src/components/Hero.tsx` — title + thesis.
- `src/components/LoopSection.tsx` + inline SVG diagram.
- `src/components/OSSection.tsx` + inline SVG diagram.
- `src/components/ScalingSection.tsx` + inline SVG diagram.
- `src/components/SectionHeader.tsx` — shared eyebrow + heading + lede.
- Install fonts: `@fontsource/instrument-serif`, `@fontsource/work-sans`, imported in `src/routes/__root.tsx` via the existing styles entry (or a small client init). Install `framer-motion` for subtle reveal animations.

## Out of scope

- No backend, auth, or database (no Lovable Cloud needed).
- No interactive simulations — diagrams are static SVG with light hover states.
- No multi-page routing; everything lives on `/`.
