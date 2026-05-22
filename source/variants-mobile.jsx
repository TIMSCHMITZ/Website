/* Mobile-Mockups für alle drei Varianten — gerendert in IOSDevice. */

const M_W = 402;
const M_H = 874;

/* -------- Mini-Plakette für mobile Header */
function MPlakette({ variant = "dark", scale = 0.72 }) {
  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}>
      <Plakette size="sm" variant={variant} />
    </div>
  );
}

/* -------- Mobile Knoten + Plakette Lockup */
function MobileFooter({ c }) {
  return (
    <div
      style={{
        background: c.ink,
        color: c.bg,
        padding: "36px 22px 28px",
      }}
    >
      <Plakette size="sm" variant="light" />
      <div
        style={{
          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
          fontSize: 10,
          lineHeight: 1.6,
          marginTop: 20,
          opacity: 0.85,
        }}
      >
        +49 163 727 1007<br />
        tim@schmitz-systemarchitektur.de<br />
        Mönchengladbach · Remote
      </div>
      <div
        style={{
          marginTop: 24,
          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
          fontSize: 8.5,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          opacity: 0.45,
        }}
      >
        © 2026 · Impressum · Datenschutz
      </div>
    </div>
  );
}

/* ============================================================
 * VARIANT A — Atelier · Mitternacht-Hero zentriert
 * ============================================================ */
function VariantAMobile({ claim, claimAccent, showPricing }) {
  const c = window.BRAND;
  return (
    <IOSDevice width={M_W} height={M_H} dark>
      <div style={{ paddingTop: 54, background: c.ink, color: c.bg, fontFamily: "Manrope, system-ui, sans-serif" }}>
        {/* Top bar */}
        <div style={{ padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <MPlakette variant="light" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              padding: 8,
            }}
            aria-label="Menü"
          >
            <div style={{ width: 18, height: 1.5, background: c.bg }} />
            <div style={{ width: 18, height: 1.5, background: c.bg }} />
          </div>
        </div>

        {/* Hero */}
        <div style={{ padding: "32px 22px 56px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <Knoten size={92} variant="light" strokeWidth={5.5} />
          </div>
          <MonoMarker color={c.bg} opacity={0.55} size={9}>01 · Sparring für Geschäftsführer</MonoMarker>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 0.98,
              margin: "16px 0 16px",
              textWrap: "balance",
            }}
          >
            {claim.split(claimAccent).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <Accent>{claimAccent}</Accent>}
              </React.Fragment>
            ))}
          </h1>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              opacity: 0.78,
              margin: "0 0 28px",
              textWrap: "pretty",
            }}
          >
            Ich finde die Lösung, die Ihr Team wirklich mitträgt — nicht die schönste auf dem Papier.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CTA href="#" variant="light">Den Knoten kennenlernen</CTA>
          </div>
        </div>

        {/* Wer ich bin */}
        <div style={{ background: c.bg, color: c.ink, padding: "44px 22px" }}>
          <MonoMarker size={9}>02 · Wer ich bin</MonoMarker>
          <div style={{ marginTop: 18, marginBottom: 22 }}>
            <Portrait width={M_W - 44} height={300} />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.018em", lineHeight: 1.1, margin: "0 0 16px", textWrap: "balance" }}>
            Bevor jemand Software kauft, schaue ich, was <Accent>wirklich klemmt</Accent>.
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, opacity: 0.82 }}>
            Sparringspartner für Geschäftsführer im Mittelstand — Handwerk und Service, 10–30 Mitarbeitende.
            120 Minuten an einem Tisch. Ein Report. Eine klare Empfehlung.
          </p>
        </div>

        {/* 3 Prinzipien — stacked */}
        <div style={{ background: c.bg, color: c.ink, padding: "20px 22px 56px" }}>
          <Divider style={{ marginBottom: 32 }} />
          <MonoMarker size={9}>03 · Wofür ich stehe</MonoMarker>
          <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.0, margin: "12px 0 28px", textWrap: "balance" }}>
            Drei Prinzipien. <Accent>Keine Floskeln.</Accent>
          </h2>
          {[
            ["I · Mensch vor Tool", "Erst verstehen, wer am Tisch sitzt. Dann fragen, ob Software hilft."],
            ["II · Maß nehmen statt sägen", "Messen, bevor jemand schneidet. Auch in der IT."],
            ["III · 120 Min statt 9 Monate", "Ein Gespräch, ein Report, eine Richtung."],
          ].map(([tag, body], i) => (
            <div key={tag} style={{ paddingTop: 16, paddingBottom: 16, borderTop: `1px solid rgba(22,34,58,0.18)`, borderBottom: i === 2 ? `1px solid rgba(22,34,58,0.18)` : "none" }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  fontSize: 9.5,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: c.accent,
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                {tag}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, opacity: 0.85 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Der Knoten — Mitternacht */}
        <div style={{ background: c.ink, color: c.bg, padding: "44px 22px 60px" }}>
          <MonoMarker color={c.bg} opacity={0.55} size={9}>04 · Signature-Produkt</MonoMarker>
          <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95, margin: "16px 0 16px" }}>
            Der <Accent>Knoten</Accent>.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.82, margin: "0 0 24px", textWrap: "pretty" }}>
            120 Minuten Sparring. Ein Report. Eine klare Empfehlung — was anpacken, was sein lassen.
          </p>
          <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 32px" }}>
            <Knoten size={140} variant="light" strokeWidth={4.5} />
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              fontSize: 11,
              display: "grid",
              gridTemplateColumns: "82px 1fr",
              rowGap: 8,
              columnGap: 12,
              paddingTop: 18,
              borderTop: "1px solid rgba(241,235,222,0.2)",
              marginBottom: 28,
            }}
          >
            {[
              ["FORMAT", "120 Min"],
              ["REPORT", "4–6 S. · 5 Tage"],
              ["ORT", "Mönchengladbach · Video"],
              ...(showPricing ? [["PILOT", "490 €"]] : []),
            ].map(([k, v]) => (
              <React.Fragment key={k}>
                <div style={{ fontSize: 8.5, letterSpacing: "0.22em", opacity: 0.55 }}>{k}</div>
                <div style={{ fontWeight: 500 }}>{v}</div>
              </React.Fragment>
            ))}
          </div>
          <CTA href="#" variant="light">Knoten anfragen</CTA>
        </div>

        <MobileFooter c={c} />
      </div>
    </IOSDevice>
  );
}

/* ============================================================
 * VARIANT B — Manifest · Bold Typo
 * ============================================================ */
function VariantBMobile({ claim, claimAccent, showPricing }) {
  const c = window.BRAND;
  return (
    <IOSDevice width={M_W} height={M_H}>
      <div style={{ paddingTop: 54, background: c.bg, color: c.ink, fontFamily: "Manrope, system-ui, sans-serif" }}>
        {/* Header */}
        <div
          style={{
            padding: "14px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(22,34,58,0.14)",
          }}
        >
          <MPlakette variant="dark" />
          <div
            style={{
              padding: "8px 14px",
              background: c.ink,
              color: c.bg,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "-0.005em",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Anfragen
            <span style={{ width: 5, height: 5, background: c.accent }} />
          </div>
        </div>

        {/* Hero — massiver Typo */}
        <div style={{ padding: "32px 22px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
            <MonoMarker size={9}>Manifest · No. 01 / 2026</MonoMarker>
            <Knoten size={56} variant="dark" strokeWidth={4.5} />
          </div>
          <h1
            style={{
              fontSize: 60,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 0.88,
              margin: 0,
              textWrap: "balance",
            }}
          >
            {claim.split(claimAccent).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <Accent>{claimAccent}</Accent>}
              </React.Fragment>
            ))}
          </h1>
        </div>

        <div style={{ padding: "24px 22px 36px", borderBottom: "1px solid rgba(22,34,58,0.2)", marginTop: 24 }}>
          <p style={{ fontSize: 17, lineHeight: 1.35, fontWeight: 500, letterSpacing: "-0.012em", margin: "0 0 22px", textWrap: "pretty" }}>
            Ich finde die Lösung, die Ihr Team wirklich mitträgt — nicht die schönste auf dem Papier.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <CTA href="#" variant="dark">Knoten kennenlernen</CTA>
          </div>
        </div>

        {/* Statement band */}
        <div
          style={{
            background: c.ink,
            color: c.bg,
            padding: "14px 22px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: 16,
            whiteSpace: "nowrap",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "-0.018em",
          }}
        >
          <span>Klarheit, bevor Sie Software kaufen.</span>
          <span style={{ width: 6, height: 6, background: c.accent, flexShrink: 0 }} />
          <span style={{ opacity: 0.65 }}>Mensch vor Tool.</span>
        </div>

        {/* Wer ich bin */}
        <div style={{ padding: "40px 22px 32px" }}>
          <MonoMarker size={9}>02 · Wer ich bin</MonoMarker>
          <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 0.98, margin: "16px 0 20px", textWrap: "balance" }}>
            Bevor jemand Software kauft, schaue ich, was <Accent>wirklich klemmt</Accent>.
          </h2>
          <div style={{ marginBottom: 18 }}>
            <Portrait width={M_W - 44} height={280} bleed />
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: "0 0 12px" }}>
            Mein Name ist Tim Schmitz. Sparringspartner für Geschäftsführer im Mittelstand — Handwerk und Dienstleistung.
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0, fontWeight: 600 }}>
            Ich verkaufe keine Software. Ich verkaufe Klarheit.
          </p>
        </div>

        {/* Prinzipien */}
        <div style={{ padding: "32px 22px 48px" }}>
          <MonoMarker size={9}>03 · Drei Prinzipien</MonoMarker>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.028em", lineHeight: 0.95, margin: "16px 0 24px" }}>
            Drei <Accent>Prinzipien</Accent>.
          </h2>
          {[
            ["I", "Mensch vor Tool.", "Erst verstehen, wer am Tisch sitzt. Dann fragen, ob Software hilft. Nie umgekehrt."],
            ["II", "Maß nehmen statt sägen.", "Bevor ein Schreiner schneidet, misst er. In der IT zu selten."],
            ["III", "120 Min statt 9 Monate.", "Ein Gespräch. Ein Report. Eine Richtung. Kein Beratungsmarathon."],
          ].map(([n, t, b], i) => (
            <div key={n} style={{ paddingTop: 20, paddingBottom: 20, borderTop: i === 0 ? `1.5px solid ${c.ink}` : `1px solid rgba(22,34,58,0.18)`, display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, alignItems: "start" }}>
              <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.85, color: c.accent }}>{n}</div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.018em", margin: "4px 0 8px" }}>{t}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, margin: 0, opacity: 0.82 }}>{b}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Knoten — Mitternacht */}
        <div style={{ background: c.ink, color: c.bg, padding: "44px 22px 60px" }}>
          <MonoMarker color={c.bg} opacity={0.55} size={9}>04 · Signature</MonoMarker>
          <h2 style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.86, margin: "16px 0 24px" }}>
            Der <Accent>Knoten</Accent>.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.45, fontWeight: 500, margin: "0 0 28px", textWrap: "pretty" }}>
            Drei Stränge. Ein Knoten. Ein Punkt, an dem er sich löst.
          </p>

          <div style={{ display: "grid", gap: 0, marginBottom: 28 }}>
            {[
              ["Format", "120 Min Sparring"],
              ["Report", "4–6 S. · 5 Werktage"],
              ["Ort", "Mönchengladbach vor Ort · Video"],
              ...(showPricing ? [["Pilot", "Ab 490 €"]] : []),
            ].map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "100px 1fr", padding: "12px 0", borderTop: "1px solid rgba(241,235,222,0.18)", gap: 16, alignItems: "baseline" }}>
                <div style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", fontSize: 9.5, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.55 }}>{k}</div>
                <div style={{ fontSize: 14.5, fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
          <CTA href="#" variant="light">Knoten anfragen</CTA>
        </div>

        <MobileFooter c={c} />
      </div>
    </IOSDevice>
  );
}

/* ============================================================
 * VARIANT C — Werkstatt · Bauplan-Stil
 * ============================================================ */
function VariantCMobile({ claim, claimAccent, showPricing }) {
  const c = window.BRAND;
  return (
    <IOSDevice width={M_W} height={M_H}>
      <div style={{ paddingTop: 54, background: c.bg, color: c.ink, fontFamily: "Manrope, system-ui, sans-serif" }}>
        {/* Header */}
        <div
          style={{
            padding: "12px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MPlakette variant="dark" />
          <div style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.65 }}>
            ☰
          </div>
        </div>

        {/* Hero */}
        <div style={{ padding: "20px 22px 0" }}>
          <MonoMarker size={10}>01 · Sparring für GFs</MonoMarker>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: "-0.028em",
              lineHeight: 0.95,
              margin: "16px 0 20px",
              textWrap: "balance",
            }}
          >
            {claim.split(claimAccent).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <Accent>{claimAccent}</Accent>}
              </React.Fragment>
            ))}
          </h1>

          {/* Knoten in Mitternacht-Kasten */}
          <div
            style={{
              background: c.ink,
              padding: "28px 0",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <Knoten size={150} variant="light" strokeWidth={5} />
            <div style={{ position: "absolute", top: -6, right: -6, width: 12, height: 12, background: c.accent }} />
            <div
              style={{
                position: "absolute",
                bottom: 8,
                right: 12,
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontSize: 8,
                letterSpacing: "0.22em",
                color: c.bg,
                opacity: 0.55,
              }}
            >
              K1 · TREFOIL
            </div>
          </div>

          <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: "0 0 22px", opacity: 0.85, textWrap: "pretty" }}>
            Ich finde die Lösung, die Ihr Team wirklich mitträgt — nicht die schönste auf dem Papier.
            Vor der Technik die richtigen Fragen.
          </p>
          <CTA href="#" variant="dark">Den Knoten kennenlernen</CTA>

          {/* Bauplan-Titelblock */}
          <div
            style={{
              marginTop: 32,
              padding: "14px 16px",
              border: `1px solid rgba(22,34,58,0.25)`,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 24px",
            }}
          >
            {[
              ["INHABER", "Tim Schmitz"],
              ["ROLLE", "Systemarchitekt"],
              ["FORMAT", "120 Min · 1 Report"],
              ["STANDORT", "Mönchengladbach · Remote"],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", fontSize: 8.5, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.55, marginBottom: 3 }}>{k}</div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wer ich bin */}
        <div style={{ padding: "44px 22px 32px" }}>
          <MonoMarker size={9}>02 · Wer ich bin</MonoMarker>
          <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "14px 0 18px", textWrap: "balance" }}>
            Bevor jemand Software kauft, schaue ich, was im Betrieb <Accent>wirklich klemmt</Accent>.
          </h2>
          <div style={{ marginBottom: 18 }}>
            <Portrait width={M_W - 44} height={280} />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, opacity: 0.85 }}>
            Sparring für Inhaber und Geschäftsführer im Mittelstand — Handwerk und Dienstleistung,
            10–30 Mitarbeitende. 120 Minuten, ein Report, eine klare Empfehlung.
          </p>
        </div>

        {/* 3 Prinzipien */}
        <div style={{ background: c.sand, padding: "40px 22px 48px" }}>
          <MonoMarker size={9}>03 · Wofür ich stehe</MonoMarker>
          <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 0.98, margin: "14px 0 24px", textWrap: "balance" }}>
            Drei Prinzipien. <Accent>Keine Floskeln.</Accent>
          </h2>
          {[
            ["I · Mensch vor Tool", "Erst verstehen, wer am Tisch sitzt. Dann fragen, ob Software hilft."],
            ["II · Maß nehmen statt sägen", "Messen, bevor jemand schneidet. Auch in der IT."],
            ["III · 120 Min statt 9 Monate", "Ein Gespräch, ein Report, eine Richtung."],
          ].map(([tag, body], i) => (
            <div key={tag} style={{ padding: "16px 0", borderTop: `1px solid rgba(22,34,58,0.22)`, borderBottom: i === 2 ? `1px solid rgba(22,34,58,0.22)` : "none", display: "grid", gridTemplateColumns: "10px 1fr", gap: 14, alignItems: "start" }}>
              <div style={{ width: 6, height: 6, background: c.accent, marginTop: 8 }} />
              <div>
                <div style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", fontSize: 9.5, letterSpacing: "0.2em", textTransform: "uppercase", color: c.accent, fontWeight: 600, marginBottom: 6 }}>{tag}</div>
                <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, opacity: 0.85 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Knoten — Mitternacht */}
        <div style={{ background: c.ink, color: c.bg, padding: "44px 22px 60px" }}>
          <MonoMarker color={c.bg} opacity={0.55} size={9}>04 · Der Knoten</MonoMarker>
          <h2 style={{ fontSize: 50, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.9, margin: "14px 0 20px" }}>
            Der <Accent>Knoten</Accent>.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.85, margin: "0 0 28px", textWrap: "pretty" }}>
            120 Minuten Sparring. Ein Report. Eine klare Empfehlung — was anpacken, was sein lassen.
          </p>

          <div
            style={{
              padding: "18px 16px",
              border: `1px solid rgba(241,235,222,0.25)`,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px 20px",
              marginBottom: 28,
            }}
          >
            {[
              ["FORMAT", "120 Min"],
              ["REPORT", "5 Werktage"],
              ["ORT", "Mönchengladbach · Video"],
              ["FÜR", "GFs · 10–30 MA"],
              ...(showPricing ? [["PILOT", "490 €"], ["STANDARD", "1.490 €"]] : []),
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", fontSize: 8.5, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.55, marginBottom: 3 }}>{k}</div>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>

          <CTA href="#" variant="light">Knoten anfragen</CTA>
        </div>

        <MobileFooter c={c} />
      </div>
    </IOSDevice>
  );
}

Object.assign(window, { VariantAMobile, VariantBMobile, VariantCMobile });
