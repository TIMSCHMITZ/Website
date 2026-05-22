# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **design handoff**, not (yet) a built website. The target is a personal-brand single-page site for **Schmitz Systemarchitektur** (Inhaber: Tim Schmitz) at `schmitz-systemarchitektur.de`. German (Sie-Form), one-pager with anchor navigation.

There is currently **no build system, no package.json, no tests, no lint config**. The next major piece of work is to rebuild `source/variant-a.jsx` in a production stack — Astro is the recommended target (see `README.md` §Tech-Stack-Empfehlung). Do not invent build/test commands; if you need them, the project hasn't been initialized yet and you should ask before scaffolding.

## Files in `source/`

These JSX files are **design references, not production code**. They are hi-fi pixel-accurate mockups using inline styles, intended to be read for exact measurements, colors, and copy when reimplementing in the production stack.

- `shared.jsx` — brand primitives (`Knoten`, `Plakette`, `MonoMarker`, `CTA`, `CTAGhost`, `Accent`, `Portrait`, `Divider`, `PageBase`). Attaches components to `window.*` (no module system) — this is intentional for the preview-only context.
- `variant-a.jsx` — desktop implementation of the chosen design direction "A · Atelier". Maßgebliche Quelle for layout, copy, and pixel values.
- `variants-mobile.jsx` — mobile (`VariantAMobile`).
- `tim-portrait.png` (1200×1123) — real portrait, must be optimized to WebP (~120 KB) before shipping.
- `Logo - Schmitz Systemarchitektur.svg`, `Visitenkarte - *.svg` — print/asset references.

When rebuilding in production: first port `shared.jsx` as a component library, then walk `variant-a.jsx` section by section. The inline pixel values in the JSX are authoritative — prefer them over any summary in `README.md` if they disagree.

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

- The German copy in `variant-a.jsx` is **final and must be carried over 1:1** when rebuilding.
- Two blocks are deliberate placeholders that will be replaced before launch — do not treat them as final: **Stimmen (section 06)** and **Cases (section 07)**.
- **Pricing is intentionally hidden** on the site (decision from briefing). Don't add prices to the Knoten data table.
- `cal.com/tim-schmitz` is a placeholder Cal-Link; the real URL is pending.
- `Impressum` and `Datenschutz` are the only planned sub-pages; their content is also pending.

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
