# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal-brand single-page site for **Schmitz Systemarchitektur** (Inhaber: Tim Schmitz) at `schmitz-systemarchitektur.de`. German (Sie-Form), one-pager with anchor navigation, plus two legal sub-pages (Impressum, Datenschutz).

The site is **built and deployed** — a static **Astro** project lives in `src/`. It is served from a custom domain via GitHub Pages: every push to `main` runs `.github/workflows/deploy.yml` (build → `actions/upload-pages-artifact` → `actions/deploy-pages`). `astro.config.mjs` sets `site` and `output: 'static'` with **no `base`** (custom domain at root).

## Commands

```bash
npm run dev       # local dev server (astro dev)
npm run build     # static build → dist/
npm run preview   # serve the built dist/ locally
```

Node 20 (`.nvmrc`). No test or lint setup exists — don't invent one; ask before scaffolding. `npm run build` is the closest thing to a CI check (it type-checks `.astro` files and fails on broken imports/types).

## Architecture (`src/`)

- `pages/index.astro` — the one-pager. Imports `BaseLayout` and renders the section components in order (Hero → WerIchBin → Prinzipien → KnotenSection → Ablauf → Stimmen → Cases → Faq → Werdegang → Kontakt → Footer). `MobileMenu` is rendered once near the top.
- `pages/impressum.astro`, `pages/datenschutz.astro` — legal pages using `LegalLayout`.
- `layouts/BaseLayout.astro` — `<html>` shell, SEO/OG meta, and **self-hosted fonts** imported via `@fontsource/manrope` and `@fontsource/ibm-plex-mono` (specific weights + latin/latin-ext subsets). Also imports `styles/global.css`. (Note: the site no longer uses the Google Fonts CDN that `README.md` describes.)
- `layouts/LegalLayout.astro` — BaseLayout + TopNav + MobileMenu + Footer, with scoped typography for legal prose (uses `:global()` for slotted markdown-ish content).
- `components/sections/*.astro` — one file per numbered section. Each owns its markup + scoped `<style>`; pixel values live inline here, ported from `source/variant-a.jsx`.
- `components/brand/*.astro` — the brand primitives, ported from `source/shared.jsx`: `Knoten` (inline SVG, `dark`/`light` variants), `Plakette`, `MonoMarker`, `CTA`, `CTAGhost`, `Accent`, `Portrait`, `Divider`.
- `components/nav/` — `TopNav.astro` (static, not sticky) and `MobileMenu.astro` (Mitternacht overlay; toggles `body[data-menu-open='true']`).
- `data/*.ts` — typed content arrays consumed by sections (`prinzipien`, `ablauf`, `stimmen`, `cases`, `faq`, `werdegang`, `nav`). Edit copy here, not in markup, for list-driven sections. `data/nav.ts` also exports the `contact` object (Calendly link, email, phone) used across nav/contact/footer.
- `styles/global.css` — design tokens as CSS custom properties (`--ink`, `--bg`, `--sand`, `--steel`, `--accent`, layout vars) and base resets. **It enforces `border-radius: 0 !important` on `*, *::before, *::after` globally** — the no-rounded-corners rule is structural, not per-component. Utility classes: `.container`, `.section`, `.section--dark`, `.section--sand`, `.mono`.
- `assets/` — `tim-portrait.png` and `logo-schmitz.svg`. The portrait is rendered through Astro's `astro:assets` `<Image>` (`Portrait.astro`) which emits responsive WebP at build time — do **not** hand-optimize it.

Conventions: every component is a `.astro` file with a frontmatter `interface Props`, styles are component-scoped `<style>` blocks (use `:global()` only deliberately), shared values come from the CSS custom properties in `global.css`.

## `source/` — design reference only

`source/` holds the original hi-fi JSX mockups (`shared.jsx`, `variant-a.jsx`, `variants-mobile.jsx`) plus the portrait and print SVGs. These are **not** built or shipped (`tsconfig.json` excludes `source/`). They remain the authoritative source for exact pixel values, colors, and final copy — when a section's measurements are unclear, read `variant-a.jsx`. If a value in `source/` conflicts with `README.md`, the JSX wins.

## Non-negotiable brand rules

These come from `CI Guidelines.md` and `README.md` — violating them breaks the brand. Many are unusual enough that "industry defaults" would get them wrong:

- **No `border-radius`.** Every button, card, image, container is sharp-cornered. Set `border-radius: 0` even where frameworks default to rounding.
- **No `box-shadow`.** Anywhere.
- **No gradients.** No consultant-blue tones. No bright colors.
- **Accent color (`--accent: #b85a3f` Lehm) is for marker dots and single highlighted words only — never as a fill.** Examples of legitimate uses: the dot in the Knoten SVG, the tick on the Plakette, a 6×6 px square inside the CTA, one accented word per section, hover state on buttons. Filling a card or background with accent is wrong.
- **Only two fonts:** Manrope (everything) + IBM Plex Mono (only for UPPERCASE labels, data tables, stamps — letter-spacing 0.18–0.22em, opacity ~0.55).
- **One accent word per section, max.** Use the `<Accent>` component.
- **Thin 1–1.5 px lines** as separators, not heavy boxes.
- **Sie-Form** throughout. No buzzwords ("Synergien", "end-to-end", "Lösungspartner", "passgenau", "auf Augenhöhe", "Digitalisierungs-Roadmap"). Werkstatt-Sprache, not Berater-Sprache.

## Copy & content state

- The German copy is **final**; the canonical text lives in the section components (and `source/variant-a.jsx`). Carry it over 1:1.
- Two blocks are deliberate placeholders that will be replaced before launch — do not treat them as final: **Stimmen (section 06)** and **Cases (section 07)** (`data/stimmen.ts`, `data/cases.ts`).
- **Pricing is intentionally hidden** on the site (decision from briefing). Don't add prices to the Knoten data table.
- Booking now goes through a **Calendly** link (`data/nav.ts` → `contact.cal`); contact email is `info@schmitz-systemarchitektur.de`. (The `cal.com/tim-schmitz` and `tim@…` references in `README.md` are stale.)
- `Impressum` and `Datenschutz` exist as pages (`pages/*.astro`); confirm their legal content is final before launch.

## Design tokens (quick reference)

```
--ink:    #16223a   (Mitternacht — primary text & dark sections)
--bg:     #f1ebde   (Pergament — main background)
--sand:   #e4dac1   (alternating sections)
--steel:  #5a667a   (mid-tone, secondary text, mono data)
--accent: #b85a3f   (Lehm — markers only, never as a fill)

Container max-width: 1180 px · Desktop horizontal padding: 60 px · Mobile: 22–24 px
Standard section padding: 140 px top/bottom (desktop), 44–56 px (mobile)
Section anchor scroll-margin-top: 80 px
```

Full type scale and per-section specs are in `README.md`; the JSX inline styles are the ground truth if anything conflicts.

## Section order (one-pager)

```
01 Hero (Mitternacht) → 02 Wer ich bin (Pergament) → 03 Prinzipien (Pergament)
→ 04 Der Knoten (Mitternacht) → 05 Ablauf (Pergament) → 06 Stimmen (Sand)
→ 07 Cases (Pergament) → 08 FAQ (Sand) → 09 Werdegang (Pergament)
→ 10 Kontakt (Mitternacht) → Footer (Mitternacht)
```

Top-nav is **not** sticky (klassisch statisch). No parallax, no scroll reveals, no complex animations — the brand lives from ruhe.

## Performance targets (when shipping)

- < 100 KB JS on the homepage
- Lighthouse Performance > 95
- Portrait as WebP, ~120 KB, `loading="eager"` (above the fold)
- Other images `loading="lazy"`
- Google Fonts via `preconnect` + `display=swap`
