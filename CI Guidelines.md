# Schmitz Systemarchitektur — Corporate Identity

> Briefing-Dokument für die Entwicklung einer „Über mich"-Website mit Claude Code.
> Stand: 2025. Inhaber: Tim Schmitz.

---

## 1 · Marke auf einen Blick

| Feld | Wert |
| --- | --- |
| **Firma** | Schmitz Systemarchitektur |
| **Inhaber** | Tim Schmitz |
| **Rolle** | Inhaber · Systemarchitekt |
| **Signature-Produkt** | Der Knoten — 90 Min Sparring + 1 Report |
| **Domain** | schmitz-systemarchitektur.de |
| **E-Mail** | tim@schmitz-systemarchitektur.de |
| **Telefon** | +49 163 727 1007 |
| **Standort** | Köln · Remote |

---

## 2 · Positionierung

**Wir lösen den Knoten zwischen Mensch und IT.**

Ich finde die Lösung, die Ihr Team wirklich mitträgt — nicht die schönste auf dem Papier. Sparring für Geschäftsführer in Handwerk und Service.

### Was ich tue
Klarheit schaffen, statt Software erschlagen. Sparringspartner für Geschäftsführer im Mittelstand — vor der Technik die richtigen Fragen.

### Zielgruppe
Inhaber & Geschäftsführer aus **Handwerk und Dienstleistung**, 10–30 Mitarbeitende, 40–60 Jahre. Pragmatisch, anpackend, kein IT-Affinitäts-Bonus erforderlich.

### Abgrenzung
Keine Tool-Verkäufer, keine Berater-Floskeln. Nicht „wir digitalisieren euch" — sondern: wir finden, was wirklich klemmt, und prüfen, ob euer Team mitzieht, **bevor** Geld in Software fließt.

---

## 3 · Tonalität & Sprache

- **Warm & menschlich**, bodenständig, **Sie-Form**
- **Keine Buzzwords**, kein IT-Kauderwelsch
- Kurze Sätze. Konkrete Bilder. Werkstatt-Sprache vor Berater-Sprache.
- Selbstvertrauen ohne Lautstärke (Vorbilder: Apple, Porsche — Reduktion, Materialität)

### No-Gos in Sprache
„Synergien", „Digitalisierungs-Roadmap", „end-to-end", „Lösungspartner", „auf Augenhöhe" (ausgelutscht), „passgenau".

---

## 4 · Farbsystem · „Mitternacht + warmer Lehm"

```css
:root {
  /* Primärwelt */
  --ink:        #16223a;   /* Mitternacht — Primär, Marke, Text auf hellem Grund */
  --bg:         #f1ebde;   /* Pergament — Haupt-Untergrund */

  /* Sekundär */
  --sand:       #e4dac1;   /* Sand — Karten, alternativer Untergrund */
  --steel:      #5a667a;   /* Stahl — Mid-Tone, Linien, sekundärer Text */
  --page:       #d9d2c1;   /* Page — etwas dunklerer Page-Wrap */

  /* Akzent */
  --accent:     #b85a3f;   /* Lehm — der Auflösungspunkt, sparsam einsetzen */
  --accent-light: #d4724f; /* helleres Lehm auf dunklem Grund */
}
```

### Verwendungsregeln
- **90 % Mitternacht + Pergament.** Diese zwei tragen die Marke.
- **Lehm/Akzent NUR als Markierung.** Niemals Fläche. Beispiele: der Lösepunkt im Knoten-Logo, ein einzelnes hervorgehobenes Wort, der kleine Tick auf der Plakette, ein Button.
- Sand und Stahl ergänzen, ersetzen nie.
- **Keine Gradients.** Keine Berater-Blautöne. Keine grellen Töne.

---

## 5 · Typografie · Manrope + IBM Plex Mono

Eine Schrift für die ganze Marke (Manrope), Plex Mono nur als Akzent für Daten, Marker, Stempel.

```css
:root {
  --font: "Manrope", system-ui, sans-serif;
  --mono: "IBM Plex Mono", ui-monospace, monospace;
}
```

Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Type-Skala

| Rolle | Schrift / Gewicht | Größe | Letter-Spacing | Line-Height |
| --- | --- | --- | --- | --- |
| Display | Manrope 700 | 48–96px | -0.025em | 0.92–0.95 |
| Headline | Manrope 600 | 22–32px | -0.02em | 1.05–1.15 |
| Subhead | Manrope 600 | 17–20px | -0.01em | 1.2 |
| Body | Manrope 400 | 13–16px | normal | 1.45–1.55 |
| Akzent / Marker | IBM Plex Mono 500 | 9–12px | 0.18–0.22em | 1.5 |

**Plex Mono ist immer UPPERCASE** und für: Daten, Sektions-Marker, Stempel, kleine Labels („MOBIL", „E-MAIL"), Versions-Stempel („No. 01 · 2025").

### Akzent-Wort
Schlüsselwörter in Akzentfarbe hervorheben — z. B. „Drei Stränge, **ein Knoten**." → das Wort *Knoten* in `--accent`.

---

## 6 · Bildmarke · Der Knoten (K1 Trefoil)

Drei sich überschneidende Bögen + ein Lösepunkt in der Mitte (Akzentfarbe). Mathematischer Ur-Knoten.

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

Auf dunklem Grund: `stroke="#f1ebde"`, `fill="#b85a3f"` für den Punkt.

---

## 7 · Wortmarke · W1 „Architekten-Plakette"

Name in einem dünnen Rahmen mit Mini-Tick oben rechts (wie ein Bauplan-Titelblock).

```html
<div class="plakette">
  <div class="pl-sub">Tim Schmitz</div>
  <div class="pl-main">Systemarchitektur</div>
  <div class="pl-tick"></div>
</div>
```

```css
.plakette {
  border: 1.5px solid currentColor;
  padding: 14px 22px 12px;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  line-height: 1;
}
.plakette .pl-sub {
  font-family: var(--mono);
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.7;
}
.plakette .pl-main {
  font-size: 28px;     /* skaliert je Kontext: 14 / 20 / 28 / 36 */
  font-weight: 700;
  letter-spacing: -0.022em;
  line-height: 1;
}
.plakette .pl-tick {
  position: absolute;
  top: -5px; right: -5px;
  width: 10px; height: 10px;
  background: var(--accent);
}
```

Größen-Stufen: `sm` (14px Hauptzeile) für Footer/Signatur · `md` (20px) für Header · `lg` (28–36px) für Hero.

---

## 8 · Claims & Mikrotexte

| Verwendung | Text |
| --- | --- |
| **Hauptclaim Personenmarke** | Wir lösen den **Knoten** zwischen Mensch und IT. |
| **Sub-Headline** | Ich finde die Lösung, die Ihr Team wirklich mitträgt — nicht die schönste auf dem Papier. |
| **Positionierung** | Sparring für Geschäftsführer in Handwerk und Service. |
| **Produkt-Claim** | Drei Stränge, ein **Knoten**. |
| **USP** | Wir finden, wo es im Betrieb klemmt. |
| **Reason-Why** | Klarheit, bevor jemand Software kauft. |
| **Produkt-Format** | 90 Minuten. 1 Report. Der Knoten. |
| **Methodik** | Wir ziehen am richtigen Faden. |

---

## 9 · Layout-Prinzipien

- **Großzügige Weißräume** auf Pergament-Untergrund.
- **Klare Hierarchien** — eine Headline pro Sektion, ein Akzent pro Sektion.
- **Dünne Linien** (1–1.5px) statt schwerer Boxen.
- **Mono-Marker** über jedem Block: kleine UPPERCASE-Zeile in Plex Mono, 0.2em letter-spacing, 0.55 opacity (z. B. „01 · ÜBER MICH").
- **Plakette + Knoten** sind die zwei wiederkehrenden Bildelemente — Plakette als Marken-Signatur, Knoten als Held auf Cover/Hero-Flächen.
- Sektionen-Trenner: 1px Linie in `--ink` mit 0.18 opacity, oder ganzflächiger Wechsel auf Mitternacht-Sektion.

---

## 10 · Komponenten-Bibliothek (HTML/CSS-Snippets)

### 10.1 Section-Label (Mono-Marker)
```html
<div class="section-label">01 · ÜBER MICH</div>
```
```css
.section-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.55;
  font-weight: 600;
}
```

### 10.2 Key-Value-Daten-Tabelle
```css
.kv {
  font-family: var(--mono);
  font-size: 11px;
  line-height: 1.5;
  display: grid;
  grid-template-columns: 64px 1fr;
  row-gap: 3px;
  column-gap: 12px;
}
.kv .k {
  font-size: 8.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.55;
  padding-top: 3px;
}
.kv .v { font-weight: 500; }
```

### 10.3 Primärer CTA
```css
.btn-primary {
  background: var(--ink);
  color: var(--bg);
  border: 0;
  padding: 13px 22px;
  font-family: var(--font);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.btn-primary:hover { background: var(--accent); }
```

### 10.4 Akzent-Quadrat als Inline-Marker (vor einer Zeile)
```css
.pos { display: inline-flex; align-items: center; gap: 8px; }
.pos::before {
  content: "";
  width: 6px; height: 6px;
  background: var(--accent);
  display: inline-block;
}
```

### 10.5 Sektion auf Mitternacht
```css
.section-dark {
  background: var(--ink);
  color: var(--bg);
  padding: 96px 0;
}
.section-dark .section-label { opacity: 0.6; }
```

---

## 11 · Empfohlene Seitenstruktur „Über mich"

1. **Hero** — Plakette + Knoten + Hauptclaim („Wir lösen den **Knoten** zwischen Mensch und IT."), Subline, CTA „Knoten lösen".
2. **Wer ich bin** — kurzer Text in Sie-Form, max. 3 Absätze. Werkstatt-Sprache.
3. **Wofür ich stehe** — 3 Prinzipien als Mono-gelabelte Blöcke (z. B. „MENSCH VOR TOOL", „MASS NEHMEN STATT SÄGEN", „90 MIN STATT 9 MONATE").
4. **Der Knoten** (Signature-Produkt) — Mitternacht-Sektion mit Trefoil-SVG groß, Format „90 Min · 1 Report · 490 € Pilot", CTA.
5. **Für wen** — Zielgruppen-Block: Handwerk & Service, 10–30 MA, GFs.
6. **Kontakt** — Plakette + Datenblock (Mobil / E-Mail / Web), Köln · Remote.

---

## 12 · Verbotsschilder (Don'ts)

- ❌ Tech-Startup-Gradients
- ❌ Stockfoto-Berater mit Headset
- ❌ Cartoon-Illustrationen / verspielte Icons
- ❌ Canva-Look
- ❌ Hellblau / Türkis als Akzent
- ❌ Mehr als 2 Schriftarten
- ❌ Großflächiger Einsatz der Akzentfarbe (Hintergründe, große Buttons-Flächen)
- ❌ Emoji in der UI
- ❌ Rounded-Corner-Karten mit Left-Border-Accent (klassischer KI-Look)
