/* Shared brand primitives — Schmitz Systemarchitektur */

const C = {
  ink: "#16223a",
  bg: "#f1ebde",
  sand: "#e4dac1",
  steel: "#5a667a",
  page: "#d9d2c1",
  accent: "#b85a3f",
  accentLight: "#d4724f",
};

/* Knoten — Bildmarke. size in px. variant: "light" (auf Mitternacht) | "dark" (auf Pergament) */
function Knoten({ size = 120, variant = "dark", strokeWidth = 6 }) {
  const stroke = variant === "light" ? C.bg : C.ink;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: "block" }} aria-hidden>
      <g fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round">
        <path d="M 30 70 Q 30 30, 70 30" />
        <path d="M 70 30 Q 50 70, 30 70" />
        <path d="M 50 22 L 50 78" />
      </g>
      <circle cx="50" cy="50" r={strokeWidth + 0.5} fill={C.accent} />
    </svg>
  );
}

/* Plakette — Wortmarke W1. size: "sm" | "md" | "lg" | "xl". variant: "dark" (auf Pergament) | "light" (auf Mitternacht) */
function Plakette({ size = "md", variant = "dark" }) {
  const sizes = {
    sm: { main: 14, sub: 8.5, padding: "8px 14px 6px", tick: 6, gap: 1, subLetter: "0.18em" },
    md: { main: 20, sub: 10, padding: "10px 18px 8px", tick: 8, gap: 1.5, subLetter: "0.2em" },
    lg: { main: 28, sub: 11, padding: "14px 22px 12px", tick: 10, gap: 2, subLetter: "0.2em" },
    xl: { main: 36, sub: 12, padding: "18px 28px 14px", tick: 12, gap: 3, subLetter: "0.2em" },
  };
  const s = sizes[size];
  const color = variant === "light" ? C.bg : C.ink;
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: s.gap,
        padding: s.padding,
        border: `1.5px solid ${color}`,
        color,
        position: "relative",
        lineHeight: 1,
        fontFamily: "Manrope, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
          fontWeight: 500,
          fontSize: s.sub,
          letterSpacing: s.subLetter,
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        Tim Schmitz
      </div>
      <div
        style={{
          fontSize: s.main,
          fontWeight: 700,
          letterSpacing: "-0.022em",
          lineHeight: 1,
        }}
      >
        Systemarchitektur
      </div>
      <div
        style={{
          position: "absolute",
          top: -s.tick / 2,
          right: -s.tick / 2,
          width: s.tick,
          height: s.tick,
          background: C.accent,
        }}
      />
    </div>
  );
}

/* Mono-Marker — small UPPERCASE label */
function MonoMarker({ children, color, opacity = 0.55, size = 10 }) {
  return (
    <div
      style={{
        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
        fontSize: size,
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        opacity,
        color: color || "inherit",
      }}
    >
      {children}
    </div>
  );
}

/* Primary CTA button */
function CTA({ children, variant = "dark", as = "a", href = "#kontakt", ...rest }) {
  const dark = variant === "dark";
  const bg = dark ? C.ink : C.bg;
  const fg = dark ? C.bg : C.ink;
  const Tag = as;
  return (
    <Tag
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        background: bg,
        color: fg,
        border: 0,
        padding: "14px 24px",
        fontFamily: "Manrope, system-ui, sans-serif",
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "none",
        cursor: "pointer",
        letterSpacing: "-0.005em",
      }}
      {...rest}
    >
      {children}
      <span style={{ width: 6, height: 6, background: C.accent, display: "inline-block" }} />
    </Tag>
  );
}

/* Ghost / secondary CTA */
function CTAGhost({ children, href = "#", variant = "dark" }) {
  const color = variant === "light" ? C.bg : C.ink;
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        color,
        textDecoration: "none",
        fontFamily: "Manrope, system-ui, sans-serif",
        fontSize: 14,
        fontWeight: 500,
        borderBottom: `1px solid ${color}`,
        paddingBottom: 4,
      }}
    >
      {children}
    </a>
  );
}

/* Akzent-Wort: hebt ein Schlüsselwort in Lehm hervor */
function Accent({ children }) {
  return <span style={{ color: C.accent }}>{children}</span>;
}

/* Portrait — echtes Foto von Tim, auf Sand-Karte. */
function Portrait({ width = 360, height = 460, variant = "dark", bleed = false, caption }) {
  const bg = variant === "light" ? "rgba(241,235,222,0.06)" : C.sand;
  return (
    <div
      style={{
        width,
        height,
        background: bg,
        position: "relative",
        overflow: "hidden",
        border: variant === "light" ? "1px solid rgba(241,235,222,0.18)" : "none",
      }}
    >
      <img
        src="site/tim-portrait.png"
        alt="Tim Schmitz · Inhaber & Systemarchitekt"
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: bleed ? "center 22%" : "center 28%",
          transform: bleed ? "scale(1.05)" : "scale(1.0)",
          userSelect: "none",
        }}
      />
      {caption && (
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: variant === "light" ? "rgba(241,235,222,0.7)" : "rgba(22,34,58,0.55)",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

/* Portrait-Platzhalter */
function PortraitPlaceholder({ width = 360, height = 460, label = "Portrait Tim Schmitz", variant = "dark" }) {
  const bg = variant === "light" ? "rgba(241,235,222,0.08)" : C.sand;
  const fg = variant === "light" ? "rgba(241,235,222,0.55)" : "rgba(22,34,58,0.45)";
  const border = variant === "light" ? "rgba(241,235,222,0.2)" : "rgba(22,34,58,0.15)";
  return (
    <div
      style={{
        width,
        height,
        background: bg,
        position: "relative",
        border: `1px solid ${border}`,
        overflow: "hidden",
      }}
    >
      {/* Diagonal cross */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.25 }}
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={fg} strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={fg} strokeWidth="1" />
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: fg,
        }}
      >
        Platzhalter · {label}
      </div>
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: fg,
        }}
      >
        {width} × {height}
      </div>
    </div>
  );
}

/* Section divider line */
function Divider({ variant = "dark", style = {} }) {
  const color = variant === "light" ? C.bg : C.ink;
  return (
    <div
      style={{
        height: 1,
        background: color,
        opacity: 0.18,
        width: "100%",
        ...style,
      }}
    />
  );
}

/* Base page font wrapper */
function PageBase({ children, style = {} }) {
  return (
    <div
      style={{
        fontFamily: "Manrope, system-ui, sans-serif",
        color: C.ink,
        background: C.bg,
        fontSize: 16,
        lineHeight: 1.5,
        textRendering: "geometricPrecision",
        WebkitFontSmoothing: "antialiased",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

Object.assign(window, {
  BRAND: C,
  Knoten,
  Plakette,
  MonoMarker,
  CTA,
  CTAGhost,
  Accent,
  Portrait,
  PortraitPlaceholder,
  Divider,
  PageBase,
});
