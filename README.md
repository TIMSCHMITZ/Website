# Handoff: schmitz-systemarchitektur.de — Variante A „Atelier"

## Übersicht

Personenmarken-Website für **Schmitz Systemarchitektur** (Inhaber: Tim Schmitz, Sparring­partner für Geschäftsführer im Mittelstand). Ziel der Website: **Vertrauen aufbauen und Reputation zeigen** — Buchung erfolgt erst später per Cal-Link / E-Mail.

Diese Vorlage ist die finale gewählte Richtung **„A · Atelier"**: ruhig & klassisch, Mitternacht-Hero mit zentriertem Knoten, klassische Top-Navigation, großzügige Weißräume, alternierende Sektions-Hintergründe (Pergament → Sand → Mitternacht).

**Domain:** `schmitz-systemarchitektur.de`
**Sprache:** Deutsch (Sie-Form), Werkstatt-Sprache statt Berater-Sprache.

---

## Über die Design-Dateien

Die mitgelieferten Dateien unter `source/` sind **als HTML/React-Prototypen erstellte Design-Referenzen** — sie zeigen die beabsichtigte Optik, das Verhalten und die exakten Maße, sind aber **nicht** als Produktionscode gedacht.

Die Aufgabe ist, diese Design-Referenzen **in der Ziel-Codebase neu aufzubauen** — idealerweise in einer Umgebung, die SEO, schnelles Laden und einfache Pflege erlaubt. Empfehlungen weiter unten unter „Tech-Stack-Empfehlung".

Die Inhalte (Copy) in der Referenz sind **finale Texte** und sollten 1:1 übernommen werden (mit Ausnahme der Kunden­stimmen / Cases — siehe „Offene Punkte").

---

## Fidelity

**Hi-fi.** Die Mockups sind pixelnah ausgearbeitet:
- Exakte Hex-Werte, Typo-Skala, Letter-Spacing, Line-Heights
- Layouts mit Pixel-Maßen für Spalten, Gaps, Paddings
- Echte Copy in finaler Tonalität
- Echte Portrait-Datei (`tim-portrait.png`)
- Echte Logo- und Knoten-Assets als SVG

Beim Re-Build bitte **exakt** umsetzen — Schriften, Farben, Abstände und Mono-Marker tragen die Marke. Kleinere Anpassungen für responsive Breakpoints sind in Ordnung, das CI muss erhalten bleiben.

---

## Tech-Stack-Empfehlung

Die Seite ist klassischer Marketing-Content — überwiegend statisch, keine komplexe Anwendungs­logik. Empfohlene Optionen (in dieser Reihenfolge):

1. **Astro** (Empfehlung) — perfekt für Marketing-Sites mit statischen Seiten, exzellente Lighthouse-Scores, einfache MDX-Integration für FAQ/Cases.
2. **Next.js (App Router) im SSG-Modus** — wenn ohnehin React-Stack gewünscht.
3. **SvelteKit / Nuxt** — solide Alternativen.
4. **Plain HTML + CSS** — nicht zu unterschätzen; reicht für diese Seite völlig aus.

**Wichtig:**
- Bundle-Größe knapp halten (Ziel: < 100 KB JS auf der Startseite).
- Lighthouse Performance > 95.
- Schriften per `<link rel="preconnect">` und `display=swap` (siehe unten).
- Bilder als `<img>` mit `loading="lazy"` (außer Hero/Portrait above the fold), optimal als WebP + Fallback.

---

## Inhaltsverzeichnis Seitenarchitektur

Single-Page-Site (One-Pager) mit Anker-Navigation. Reihenfolge der Sektionen:

| #  | Sektion             | Hintergrund   | Section-ID    |
|----|---------------------|---------------|---------------|
| 01 | Hero                | Mitternacht   | (top)         |
| 02 | Wer ich bin         | Pergament     | `#vita-intro` |
| 03 | Wofür ich stehe     | Pergament     | `#prinzipien` |
| 04 | Der Knoten          | Mitternacht   | `#knoten`     |
| 05 | Ablauf              | Pergament     | `#ablauf`     |
| 06 | Stimmen             | Sand          | `#referenzen` |
| 07 | Beispiele (Cases)   | Pergament     | `#cases`      |
| 08 | Häufige Fragen      | Sand          | `#faq`        |
| 09 | Werdegang           | Pergament     | `#vita`       |
| 10 | Kontakt             | Mitternacht   | `#kontakt`    |
| –  | Footer              | Mitternacht   | (bottom)      |

**Sticky-Verhalten:** Die Top-Nav darf bei Scroll **nicht** sticky werden (klassische statische Nav). Falls eine sticky Variante gewünscht ist, dann mit verzögertem Einblenden ab ~600 px Scrolltiefe und reduzierter Höhe.

Separate Unterseiten nur für: **Impressum** und **Datenschutz** (Inhalt: Platzhalter / liefert der Kunde nach).

---

## Design Tokens

### Farben

```css
:root {
  /* Primär */
  --ink:          #16223a;   /* Mitternacht — Marke, Text auf hellem Grund, dunkle Sektionen */
  --bg:           #f1ebde;   /* Pergament — Haupt-Untergrund */

  /* Sekundär */
  --sand:         #e4dac1;   /* Sand — alternierende Sektionen, Karten */
  --steel:        #5a667a;   /* Stahl — Mid-Tone, Linien, sekundärer Text, Mono-Daten */
  --page:         #d9d2c1;   /* Page — dunklerer Page-Wrap (kaum genutzt) */

  /* Akzent — sparsam, nur als Markierung */
  --accent:       #b85a3f;   /* Lehm — Lösepunkt, Akzent-Wörter, Tick auf Plakette */
  --accent-light: #d4724f;   /* helles Lehm für dunklen Grund */
}
```

**Verwendungsregeln (verbindlich):**
- 90 % Mitternacht + Pergament tragen die Marke.
- Lehm-Akzent **niemals flächig**. Nur als Punkt im Knoten, ein hervorgehobenes Wort, der Tick an der Plakette, ein 6 × 6 px Quadrat im CTA, eine Hover-Farbe.
- Keine Gradients. Keine Berater-Blautöne. Keine grellen Töne.
- Linien: `1 px` in `--ink` mit `opacity 0.18` (hell auf Mitternacht: `--bg`, `opacity 0.18`).

### Typografie

**Google Fonts:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

```css
:root {
  --font: "Manrope", system-ui, sans-serif;
  --mono: "IBM Plex Mono", ui-monospace, monospace;
}
```

**Type-Skala (alle Werte präzise einhalten):**

| Rolle              | Schrift / Weight     | Größe              | Letter-Spacing | Line-Height |
|--------------------|----------------------|--------------------|----------------|-------------|
| Display (Hero H1)  | Manrope 700          | 76 px              | -0.025em       | 0.98        |
| H2 Big (Knoten)    | Manrope 700          | 64 px              | -0.025em       | 0.98        |
| H2 Standard        | Manrope 600          | 48 px              | -0.022em       | 1.0         |
| H2 Block-Intro     | Manrope 600          | 42 px              | -0.022em       | 1.05        |
| H3 Card / Step     | Manrope 600          | 22–26 px           | -0.018em       | 1.15        |
| Sub-/Intro-Text    | Manrope 400          | 20–22 px           | normal         | 1.40–1.45   |
| Body               | Manrope 400          | 15.5–17 px         | normal         | 1.55–1.60   |
| FAQ-Frage          | Manrope 600          | 19 px              | -0.012em       | 1.25        |
| Daten-Wert (Mono)  | IBM Plex Mono 500    | 11–12 px           | normal         | 1.5         |
| Daten-Key (Mono)   | IBM Plex Mono 600    | 8.5–9.5 px UPPER   | 0.22em         | 1.5         |
| Section-Label      | IBM Plex Mono 600    | 10–11 px UPPER     | 0.22em         | 1.5         |

**Regeln:**
- IBM Plex Mono **immer UPPERCASE**, mit Letter-Spacing `0.18–0.22em`, `opacity 0.55` als Standard für Labels.
- Akzent-Wort: Schlüsselwort im Claim in `--accent` einfärben (siehe Komponente `<Accent>` unten).
- `text-wrap: balance` für alle H1/H2, `text-wrap: pretty` für längere Absätze.

### Spacing & Layout

```
Container Max-Width:        1180 px
Horizontal Padding:         60 px (Desktop), 24 px (Mobile)
Standard Sektion Padding:   140 px oben/unten (Desktop)
Kompaktere Sektion Padding: 96 px oben/unten
Mobile Sektion Padding:     44–56 px oben/unten

Grid Gaps:
  Hero / Headline-Block:    32–56 px
  Standard Spalten:         48–96 px
  Karten in Reihe:          32–48 px
  Listen-Items vertikal:    18–28 px

Borders / Rules:
  Standard Linie:           1 px solid, --ink, opacity 0.18
  Trenner auf Mitternacht:  1 px solid, --bg, opacity 0.18
  Akzent-Border:            1.5 px solid --ink (auf Pergament)
```

### Form-Sprache

- **Keine** abgerundeten Ecken. `border-radius: 0` überall (Buttons, Karten, Bilder).
- **Keine** Schatten. Keine `box-shadow`.
- **Dünne Linien** als Begrenzer, keine schweren Boxen.
- Akzent-Quadrat als Marker: `6 × 6 px` (klein), `8 × 8 px` (mittel), `10 × 10 px` (groß) — Hintergrund `--accent`.

---

## Komponenten-Inventar

### `<Plakette>` — Wortmarke „Architekten-Plakette"

Dünner Rahmen mit Mini-Tick oben rechts. Erscheint im Header (klein), im Kontakt­block (mittel) und kann als Hero-Element groß auftreten.

**Struktur:** zwei Textzeilen — „TIM SCHMITZ" (Mono UPPER, 0.7 opacity) über „Systemarchitektur" (Manrope 700). Tick (6–12 px Quadrat in `--accent`) ragt 4–6 px über die obere rechte Ecke hinaus.

**Größen (Hauptzeilen-Schriftgröße):**

| size | Hauptzeile | Sub-Zeile | Padding              | Tick |
|------|------------|-----------|----------------------|------|
| sm   | 14 px      | 8.5 px    | 8px 14px 6px         | 6 px |
| md   | 20 px      | 10 px     | 10px 18px 8px        | 8 px |
| lg   | 28 px      | 11 px     | 14px 22px 12px       | 10 px |
| xl   | 36 px      | 12 px     | 18px 28px 14px       | 12 px |

**Varianten:**
- `variant="dark"` (auf Pergament): Border + Text in `--ink`
- `variant="light"` (auf Mitternacht): Border + Text in `--bg`
- Tick immer in `--accent`

**Verwendung in Variante A:**
- Header (Top-Nav): `size="sm"`, `variant="light"` (Hero ist Mitternacht)
- Kontakt-Block: `size="md"`, `variant="light"`

Referenz-Datei: `source/shared.jsx` → Funktion `Plakette`.

### `<Knoten>` — Bildmarke „K1 Trefoil"

Drei sich überschneidende Bögen mit Lösepunkt in der Mitte. SVG-basiert, beliebig skalierbar.

```html
<svg viewBox="0 0 100 100" width="120" height="120">
  <g fill="none" stroke="#16223a" stroke-width="6" stroke-linecap="round">
    <path d="M 30 70 Q 30 30, 70 30" />
    <path d="M 70 30 Q 50 70, 30 70" />
    <path d="M 50 22 L 50 78" />
  </g>
  <circle cx="50" cy="50" r="6" fill="#b85a3f" />
</svg>
```

**Varianten:**
- `variant="dark"` (auf Pergament): `stroke="#16223a"`
- `variant="light"` (auf Mitternacht): `stroke="#f1ebde"`
- Lösepunkt **immer** in `#b85a3f` (--accent), Radius `strokeWidth + 0.5`

**Größen in Variante A:**
- Hero: `170 px`, `strokeWidth=5.5`, `variant="light"`
- Knoten-Sektion (groß rechts): `340 px`, `strokeWidth=4.5`, `variant="light"`

### `<MonoMarker>` — Sektions-Label

Kleine UPPERCASE-Zeile in Plex Mono. Über jedem Block.

```css
font-family: 'IBM Plex Mono', ui-monospace, monospace;
font-size: 10–11 px;
font-weight: 600;
letter-spacing: 0.22em;
text-transform: uppercase;
opacity: 0.55;  /* Standard */
```

**Format:** `01 · ÜBER MICH`, `02 · WER ICH BIN`, etc. Index 01–10 entspricht der Sektions-Reihenfolge.

### `<CTA>` — Primärer Button

```css
display: inline-flex;
align-items: center;
gap: 12 px;
padding: 14px 24px;
background: var(--ink);   /* auf Pergament */
color: var(--bg);
border: 0;
border-radius: 0;
font-family: var(--font);
font-size: 14 px;
font-weight: 500;
letter-spacing: -0.005em;
cursor: pointer;
```

**Eingebautes Element:** Ein `6 × 6 px` Quadrat in `--accent` rechts neben dem Label.

**Hover-State:** Hintergrund wechselt von `--ink` zu `--accent`. Übergang `transition: background 160ms ease`. Text bleibt `--bg`.

**Variante auf Mitternacht** (`variant="light"`): `background: --bg`, `color: --ink`, Hover wechselt zu `--accent` mit `color: --bg`.

### `<CTAGhost>` — Sekundärer Link

Unterstrichener Text, kein Hintergrund. Gleiche Größe wie CTA.

```css
display: inline-flex;
align-items: center;
gap: 10 px;
font-size: 14 px;
font-weight: 500;
color: var(--ink);                /* oder --bg auf Mitternacht */
border-bottom: 1px solid currentColor;
padding-bottom: 4 px;
text-decoration: none;
```

### `<Accent>` — Inline-Akzent

Schlüsselwort in Lehm. Reines `<span style="color: #b85a3f">…</span>`.

Wird im Claim, in Subheadlines und in Vita-Zeilen eingesetzt — **immer nur ein Akzent-Wort pro Sektion**.

### Daten-Tabelle (Plex Mono Key-Value)

Genutzt im Kontakt-Block, in der Knoten-Sektion, im Hero-Stempel.

```css
.kv {
  font-family: var(--mono);
  font-size: 11–12 px;
  display: grid;
  grid-template-columns: 64–120px 1fr;
  row-gap: 6–14 px;
  column-gap: 16–24 px;
}
.kv .k {
  font-size: 8.5–9.5 px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.55;
  padding-top: 3 px;
}
.kv .v {
  font-weight: 500;
}
```

### `<details>` für FAQ

Native HTML-`<details>` mit Custom-Styling. Erste Frage `open` per Default. Summary mit „+" rechts.

```css
details {
  border-top: 1px solid rgba(22,34,58,0.2);
  padding: 24px 0;
}
details:last-of-type { border-bottom: 1px solid rgba(22,34,58,0.2); }
summary {
  font-size: 19 px;
  font-weight: 600;
  letter-spacing: -0.012em;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
summary::-webkit-details-marker { display: none; }
details p {
  font-size: 16 px;
  line-height: 1.6;
  opacity: 0.82;
  margin: 16px 0 0;
  max-width: 720 px;
}
```

---

## Sektionen — detaillierte Spezifikation

> **Hinweis:** Alle exakten Layouts, Maße, Farben und finale Copy findest du in `source/variant-a.jsx`. Diese Übersicht ist die kommentierte Karte.

### 01 · Hero — Mitternacht

- **Hintergrund:** `--ink`. Text in `--bg`.
- **Höhe:** `min-height: 880 px` (Desktop).
- **Top-Nav (innerhalb des Heros):**
  - Container `max-width: 1180 px`, Padding `0 60px`.
  - Links: `<Plakette size="sm" variant="light">`
  - Rechts: 5 Nav-Links (Der Knoten · Prinzipien · Ablauf · Vita · Kontakt) + `<CTA variant="light">Knoten lösen</CTA>`
  - Nav-Links: `font-size: 14 px`, `font-weight: 500`, `opacity: 0.82`, `color: --bg`, kein Underline.
- **Hero-Content:** zentriert, `padding: 120px 60px 140px`.
  - Knoten (170 px, light) zentriert oben
  - MonoMarker: `01 · Sparring für Geschäftsführer` (opacity 0.55)
  - **H1** (76 px, 700, -0.025em): `Wir lösen den Knoten zwischen Mensch und IT.` — Wort „Knoten" in `<Accent>`
  - Sub-Text (22 px, 400, opacity 0.78, max-width 680 px, zentriert): „Ich finde die Lösung, die Ihr Team wirklich mitträgt — nicht die schönste auf dem Papier. Sparring für Inhaber und Geschäftsführer in Handwerk und Dienstleistung."
  - CTA-Reihe: `<CTA variant="light">Den Knoten kennenlernen</CTA>` + `<CTAGhost variant="light">Wie ich arbeite</CTAGhost>`, `gap: 24 px`
- **Stempel unten rechts:** `<MonoMarker opacity=0.5 size=9>No. 01 · Mönchengladbach · 2026</MonoMarker>`, position absolute, `bottom: 32 px, right: 60 px`.

### 02 · Wer ich bin — Pergament

- **Padding:** `140px 0`.
- **Grid:** `360 px | 1fr`, Gap `96 px`, alignment `start`.
- **Linke Spalte:** Portrait-Bild (siehe Assets) `360 × 460 px`.
- **Rechte Spalte:**
  - MonoMarker `02 · Wer ich bin`
  - H2 (42 px, 600, -0.022em, line-height 1.05, balance):
    „Bevor jemand Software kauft, schaue ich, was im Betrieb **wirklich klemmt**." — „wirklich klemmt" in `<Accent>`
  - 3 Absätze Body-Text (17 px, line-height 1.6, max-width 540 px). Exakte Copy siehe `variant-a.jsx`.
- **Trenner unten:** `<Divider>` zentriert auf `max-width: 1180 px`.

### 03 · Wofür ich stehe — Pergament (3 Prinzipien)

- **Padding:** `140px 0`.
- MonoMarker `03 · Wofür ich stehe`
- H2 (48 px, 600): „Drei Prinzipien. **Keine Floskeln.**" — Akzent auf zweitem Satz
- **Grid:** `repeat(3, 1fr)`, Gap `56 px`.
- Jede Karte:
  - Mono-Tag in `--accent`, opacity 1: z. B. `I · MENSCH VOR TOOL`
  - H3 (24 px, 600): Prinzipien-Titel
  - Body (15.5 px, line-height 1.55, opacity 0.82)

**Inhalte 1:1 aus `variant-a.jsx` (Prinzipien-Block) übernehmen.**

### 04 · Der Knoten — Mitternacht (Signature-Produkt)

- **Hintergrund:** `--ink`. Padding `140px 0`.
- MonoMarker (light, opacity 0.55): `04 · Signature-Produkt`
- **Grid:** `1.1fr | 1fr`, Gap `96 px`, alignment `center`.
- **Links:**
  - H2 (64 px, 700, -0.025em): „Der **Knoten**." — Akzent
  - Lead (22 px, 400, opacity 0.82, max-width 460 px)
  - Daten-Tabelle (Mono, 12 px, Grid `120px | 1fr`, row-gap 14 px) mit:
    - FORMAT — 120 Minuten Sparring
    - LIEFERUNG — 1 Report · 4–6 Seiten · innerhalb 5 Werktagen
    - ORT — Mönchengladbach vor Ort · oder per Video
    - FÜR — Geschäftsführer · 10–30 Mitarbeitende
    - (Preise **NICHT** öffentlich — bewusst weggelassen, siehe „Offene Punkte")
  - CTA (light): „Knoten anfragen"
- **Rechts:** Knoten `340 px`, `strokeWidth: 4.5`, variant="light", darunter Mono-Caption `K1 · Trefoil`.

### 05 · Ablauf — Pergament (4 Schritte)

- **Padding:** `140px 0`.
- MonoMarker `05 · So läuft ein Knoten ab`
- H2: „Vier Schritte. **Kein Theater.**"
- **Grid:** `repeat(4, 1fr)`, Gap `32 px`.
- Jede Spalte:
  - Top-Linie (1 px, --ink, opacity 0.18) **durchgehend** über alle 4 Spalten (in der Referenz mit `right: -16px` auf die ersten 3 Spalten erweitert)
  - Mono-Nummer in `--accent`: `01`, `02`, `03`, `04` (14 px, 600, 0.18em)
  - H3 (22 px, 600): Titel
  - Body (14.5 px, line-height 1.55, opacity 0.78)

**Inhalte:** Kennenlern-Call · Sparring · Report · Optional Begleitung — exakte Copy siehe `variant-a.jsx`.

### 06 · Stimmen — Sand

- **Hintergrund:** `--sand`. Padding `140px 0`.
- MonoMarker `06 · Stimmen`
- H2: „Was Inhaber sagen, mit denen ich gearbeitet habe."
- **Grid:** `repeat(3, 1fr)`, Gap `48 px`.
- Jede Karte:
  - Top-Border `1.5 px solid --ink`
  - Zitat (24 px, 400, line-height 1.35, max-width 100%) in deutschen Anführungszeichen
  - Name (14 px, 600)
  - Sub (Mono, 10 px, 0.18em, --steel)
- Footnote unter dem Grid (Mono, 10 px, opacity 0.7): „Stimmen anonymisiert auf Wunsch · Identitäten auf Anfrage"

**ACHTUNG:** Die drei Zitate in der Referenz sind **plausible Platzhalter** (anonymisiert). Tim hat reale Referenzen unter einer anderen Marke — diese werden vor Launch durch echte Zitate ersetzt. Siehe „Offene Punkte".

### 07 · Beispiele (Cases) — Pergament

- **Padding:** `140px 0`.
- MonoMarker `07 · Beispiele`
- H2: „Drei Knoten. Drei Mal etwas anderes herausgekommen als gedacht."
- **Pro Case:**
  - `<Divider>` darüber
  - **Grid:** `180px | 1fr | 280px`, Gap `48 px`, alignment `start`
  - Spalte 1: Mono-Tag in `--accent` „Case 01", darunter Branche/MA in Mono (Steel)
  - Spalte 2: H3 (26 px, 600) + Body (15.5 px, line-height 1.6)
  - Spalte 3: Karte mit `border-left: 1px solid rgba(22,34,58,0.2)`, Mono-Label „Ergebnis", darunter Hervorhebung (17 px, 600) mit `<Accent>—</Accent>` Präfix

**ACHTUNG:** Auch Cases sind Platzhalter (Sanitär · Tischlerei · Eventservice). Vor Launch durch echte anonymisierte Cases ersetzen.

### 08 · Häufige Fragen — Sand

- **Hintergrund:** `--sand`. Padding `140px 0`.
- **Container:** `max-width: 980 px`, Padding `0 60px`.
- MonoMarker `08 · Häufige Fragen`
- H2: „Was Inhaber vor dem ersten Gespräch wissen wollen."
- **6 `<details>`-Blöcke** (siehe Komponenten-Inventar). Erste Frage `open` per Default. Border-Top auf jedem, Border-Bottom auf dem letzten.

**Fragen 1:1:**
1. Sind Sie IT-Berater?
2. Wie unterscheiden Sie sich von klassischer Unternehmensberatung?
3. Muss mein Team IT-affin sein?
4. Funktioniert das auch remote?
5. Was kostet ein Knoten?
6. Was passiert nach dem Report?

Antworten siehe `variant-a.jsx`.

### 09 · Werdegang — Pergament

- **Padding:** `140px 0`.
- MonoMarker `09 · Werdegang`
- **Grid:** `1fr | 1.4fr`, Gap `96 px`.
- **Links:** H2 (42 px, 600): „Familie im Handwerk. **Zwei Jahrzehnte in IT-Projekten.**"
- **Rechts:** Liste mit 4 Einträgen. Jeder Eintrag:
  - Border-Top `1 px, opacity 0.18`
  - **Grid:** `150px | 1fr`, Gap `24 px`
  - Spalte 1: Zeitraum (Mono, 11 px, 0.2em, --steel)
  - Spalte 2: Titel (18 px, 600) + Body (15 px, line-height 1.55, opacity 0.78)

### 10 · Kontakt — Mitternacht

- **Hintergrund:** `--ink`. Padding `140px 0`.
- MonoMarker (light) `10 · Kontakt`
- **Grid:** `1.2fr | 1fr`, Gap `96 px`, alignment `start`.
- **Links:**
  - H2 (64 px, 700): „Lassen Sie uns **15 Minuten** reden."
  - Lead (20 px, opacity 0.82, max-width 520 px)
  - CTA-Reihe (light): „Termin buchen" (Cal-Link) + CTAGhost „tim@schmitz-systemarchitektur.de" (mailto)
- **Rechts:**
  - `<Plakette size="md" variant="light">`
  - Daten-Tabelle (Mono, 11 px, Grid `70px | 1fr`, row-gap 6 px, column-gap 16 px) mit Mobil / E-Mail / Web / Standort

### Footer — Mitternacht

- **Padding:** `32px 0 48px`. Border-Top `1 px, opacity 0.12`.
- **Flex zwischen:**
  - Links: Mono-Copyright (9 px, opacity 0.5): „© 2026 Schmitz Systemarchitektur · Mönchengladbach"
  - Rechts: Links zu Impressum und Datenschutz (Mono, 12 px, 0.18em UPPER, opacity 0.55)

---

## Interaktionen & Verhalten

| Element                    | Verhalten                                                            |
|----------------------------|----------------------------------------------------------------------|
| Top-Nav Links              | Smooth-Scroll zu Anker. `scroll-behavior: smooth` auf `<html>`.      |
| Top-Nav Hover              | `opacity` 0.82 → 1.0, `transition 120ms`                             |
| CTA-Button Hover           | `background: --ink → --accent`, `transition 160ms ease`              |
| CTA-Button Focus           | `outline: 2px solid --accent; outline-offset: 3px`                   |
| CTAGhost Hover             | Border-Bottom-Farbe wechselt von `--ink` zu `--accent`               |
| FAQ `<details>`            | Native Open/Close. Smooth-Toggle nicht zwingend, aber `<details>` mit CSS-Animation auf `summary + p` (max-height-Trick) ist okay. |
| Anker-Scroll               | `scroll-margin-top: 80 px` auf alle Section-IDs, damit nichts hinter dem Hero verschwindet |
| Hover allgemein            | Kein Pointer-Effekt auf nicht-interaktive Elemente. Cursor `pointer` nur auf Buttons, Links, Details-Summary. |

**Keine** komplexen Scroll-Animationen, keine Parallax, kein Lazy-Reveal. Die Marke lebt von Ruhe.

---

## Responsive Verhalten

Die Mocks zeigen Desktop (≥ 1180 px) und Mobile (≤ 480 px). Tablet-Verhalten ableiten.

**Breakpoints (Empfehlung):**

```css
/* Mobile-first */
@media (min-width: 720px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Small Desktop */ }
@media (min-width: 1180px) { /* Design-Referenz Desktop */ }
```

**Mobile-Anpassungen (siehe `source/variants-mobile.jsx`):**

- Container-Padding: `0 22 px`
- Top-Nav: Plakette links, Hamburger-Icon rechts. Menu öffnet als Mitternacht-Overlay mit großen Links und Plakette/Knoten-Lockup unten.
- Hero: Knoten kleiner (92 px), H1 36 px, alles zentriert.
- Sektionen-Padding: `44–56 px` oben/unten.
- Grids → Single-Column (außer 2-Spalten-Datenblöcke im Knoten).
- Stimmen / Cases: untereinander.
- Schriftgrößen entsprechend Mobile-Mock (siehe variants-mobile.jsx).

Genauere Mobile-Maße: `VariantAMobile`-Funktion in `source/variants-mobile.jsx`.

---

## State Management

Diese Seite hat **keinen App-State**. Nur:
- FAQ `<details>` haben nativen Open/Close-State.
- Mobile-Menu hat einen lokalen Open-State (toggle).
- Optional: aktive Sektion in Top-Nav hervorheben per Intersection Observer (nice-to-have).

Kein Data-Fetching, keine Forms (Kontakt erfolgt über `mailto:` und Cal-Link).

---

## Assets

| Datei                                         | Verwendung                              | Format            |
|-----------------------------------------------|------------------------------------------|-------------------|
| `source/tim-portrait.png`                     | Portrait in „Wer ich bin"                | PNG (transparent) |
| `source/Logo - Schmitz Systemarchitektur.svg` | Statische Wortmarke (alternative zur SVG-im-Code Plakette) | SVG |
| `source/Visitenkarte - Vorderseite.svg`       | Referenz für Visitenkarten-Layout (nicht für Web)    | SVG |
| `source/Visitenkarte - Rueckseite.svg`        | Referenz für Visitenkarten-Layout (nicht für Web)    | SVG |

**Portrait optimieren:**
- Original: 1200 × 1123 px, ~300 KB. Für Web in WebP konvertieren, ~120 KB anzielen.
- Vor dem Render `<img loading="eager" decoding="async">` (above the fold).
- `object-fit: cover; object-position: center 28%`.

**Favicon:** Knoten-SVG ableiten — siehe `Logo Briefing.md`. Liefert der Kunde separat als Favicon-Paket (16/32/180/512 + .ico + SVG).

---

## Meta / SEO / Sonstiges

```html
<title>Schmitz Systemarchitektur — Sparring für Geschäftsführer</title>
<meta name="description"
      content="Sparringspartner für Geschäftsführer im Mittelstand. Bevor jemand Software kauft, finde ich, was im Betrieb wirklich klemmt. Mönchengladbach · Remote.">
<meta property="og:title" content="Schmitz Systemarchitektur">
<meta property="og:description" content="Wir lösen den Knoten zwischen Mensch und IT.">
<meta property="og:image" content="/og-image.png">  <!-- noch zu produzieren -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://schmitz-systemarchitektur.de">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://schmitz-systemarchitektur.de">
```

**Structured Data (JSON-LD):** Person + LocalBusiness/ProfessionalService. Adresse Mönchengladbach, Telefon, E-Mail, URL.

**Sprache:** `<html lang="de">`.

---

## Accessibility

- Kontrastverhältnisse: alle in der Referenz verwendeten Farb-Paare prüfen. Mitternacht/Pergament: ausreichend (~10:1). Stahl auf Pergament als sekundärer Text: ~4.5:1, im Limit — bei kleinen Schriften vorsichtig sein.
- Fokus-Outline für Tastatur-Navigation: `outline: 2px solid var(--accent); outline-offset: 3px;` auf `:focus-visible`.
- `<button>` für CTA, `<a>` für Links — keine `onClick` auf Divs.
- Semantik: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` für Cases, `<footer>`.
- Alt-Texte: Portrait → „Tim Schmitz · Inhaber & Systemarchitekt". Knoten-SVG → `aria-hidden="true"`, falls dekorativ.
- `prefers-reduced-motion`: Smooth-Scroll deaktivieren, Hover-Transitions verkürzen.

---

## Tonalität / Copywriting-Regeln

Aus dem CI-Doc (für Texte, die später ergänzt werden):

- **Sie-Form.** Warm, bodenständig.
- **Keine Buzzwords**, kein IT-Kauderwelsch.
- Kurze Sätze. Konkrete Bilder. Werkstatt-Sprache vor Berater-Sprache.
- Selbstvertrauen ohne Lautstärke (Vorbilder: Apple, Porsche — Reduktion).
- **No-Gos:** „Synergien", „Digitalisierungs-Roadmap", „end-to-end", „Lösungspartner", „auf Augenhöhe" (ausgelutscht), „passgenau".

---

## Offene Punkte (vor Launch zu klären)

| #  | Punkt                                       | Status                                |
|----|---------------------------------------------|---------------------------------------|
| 1  | **Cal.com / Calendly URL**                  | Platzhalter: `cal.com/tim-schmitz`. Tim liefert finalen Link. |
| 2  | **Echte Kundenstimmen (Sektion 06)**        | Tim hat Referenzen unter anderer Marke. Vor Launch durch echte (anonymisierte) Zitate ersetzen. |
| 3  | **Echte Cases (Sektion 07)**                | Drei aktuelle Platzhalter durch echte anonymisierte Cases ersetzen. |
| 4  | **Pricing — sichtbar oder nicht?**          | Entscheidung: **nicht sichtbar** (laut Briefing). Daten-Tabelle in Sektion 04 enthält **keine** Preise. |
| 5  | **Impressum / Datenschutz**                 | Inhalte fehlen. Eigene Unterseiten anlegen, Platzhalter-Text bis Lieferung. |
| 6  | **Favicon-Paket**                           | Wird vom Designer separat geliefert (siehe `Logo Briefing.md`). |
| 7  | **OG-Image (Social Sharing)**               | Noch zu produzieren — Empfehlung: Knoten zentriert auf Mitternacht, Plakette + Hauptclaim. |

---

## Dateien in diesem Handoff

```
design_handoff_website/
├── README.md                             (dieses Dokument)
├── CI Guidelines.md                      (vollständige CI-Doku)
└── source/
    ├── variant-a.jsx                     (Desktop-Implementierung als React/JSX-Referenz)
    ├── variants-mobile.jsx               (Mobile-Implementierung als React/JSX-Referenz — VariantAMobile)
    ├── shared.jsx                        (Plakette, Knoten, MonoMarker, CTA, Accent, Portrait, Divider)
    ├── tim-portrait.png                  (Portrait-Asset)
    ├── Logo - Schmitz Systemarchitektur.svg
    ├── Visitenkarte - Vorderseite.svg
    └── Visitenkarte - Rueckseite.svg
```

**Empfehlung:** Beim Rebuild zuerst `shared.jsx` als Component-Library nachbauen (Plakette, Knoten, MonoMarker, CTA, etc.), dann `variant-a.jsx` Sektion für Sektion. Mobile-Anpassungen aus `variants-mobile.jsx` ableiten.

Bei Fragen / Zweifeln zur exakten Darstellung: die JSX-Datei ist die maßgebliche Quelle — sie enthält alle Pixel-Werte inline.
