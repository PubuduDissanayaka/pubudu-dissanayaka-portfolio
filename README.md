# Pubudu Dissanayaka — Portfolio

A fully modern, professional portfolio site built with **HTML, CSS, and Vanilla JavaScript** only — no frameworks, no build step, no dependencies.

## Structure

```
Pubudu Dissanayaka/
├── index.html          # Semantic, SEO-ready markup (content + structure)
├── css/
│   ├── tokens.css      # Design tokens: colors, typography, spacing, motion (light + dark)
│   ├── base.css        # Reset, typography, layout helpers, background motif
│   ├── components.css  # Nav, buttons, badges, cards, timeline, terminal
│   ├── layouts.css     # Sections: hero, lanes, skills, certs, projects, services, contact
│   └── animations.css  # Reveal animations, keyframes, reduced-motion guard
├── js/
│   ├── data.js         # Content as data: skills, certs, projects, terminal script
│   └── main.js         # Renders data + behavior: theme, nav, reveal, type, counters, filter
├── assets/
│   ├── favicon.svg
│   └── img/            # Image assets (placeholders)
└── README.md
```

## Design system

- **Surface:** Decide/Learn (personal-brand portfolio; hero is intentional).
- **Palette:** Warm-charcoal neutrals + a single professional emerald accent. Both **dark and light** themes, switched via the toggle (persisted to `localStorage`; defaults to OS preference).
- **Type:** Space Grotesk (display) · Manrope (body) · JetBrains Mono (mono/terminal).
- **Motion:** IntersectionObserver stagger reveals, typed-terminal intro, animated counters, pulse status, magnetic hovers — all gated behind `prefers-reduced-motion`.

## Editing content

- Narrative prose (hero, lanes, experience, services, contact) lives in `index.html`.
- Lists (skills, certifications, projects, terminal script) live in `js/data.js` and are rendered on load.

## Run

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8000
# http://localhost:8000
```
