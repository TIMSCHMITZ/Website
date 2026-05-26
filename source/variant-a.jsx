/* Variante A — "Atelier"
 * Ruhig & klassisch · Mitternacht-Hero zentriert · Top-Nav · luftig
 */

function VariantA({ claim, claimAccent, showPricing }) {
  const c = window.BRAND;

  const navItems = [
    ["Der Knoten", "#a-knoten"],
    ["Prinzipien", "#a-prinzipien"],
    ["Ablauf", "#a-ablauf"],
    ["Vita", "#a-vita"],
    ["Kontakt", "#a-kontakt"],
  ];

  return (
    <PageBase>
      {/* ============== HERO — Mitternacht ============== */}
      <section
        style={{
          background: c.ink,
          color: c.bg,
          minHeight: 880,
          position: "relative",
          paddingTop: 32,
        }}
      >
        {/* Top-Nav */}
        <nav
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Plakette size="sm" variant="light" />
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  color: c.bg,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.82,
                }}
              >
                {label}
              </a>
            ))}
            <CTA href="#a-kontakt" variant="light">Knoten lösen</CTA>
          </div>
        </nav>

        {/* Hero content */}
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "120px 60px 140px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 56 }}>
            <Knoten size={170} variant="light" strokeWidth={5.5} />
          </div>
          <MonoMarker color={c.bg} opacity={0.55} size={11}>
            01 · Sparring für Geschäftsführer
          </MonoMarker>
          <h1
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 0.98,
              margin: "28px 0 32px",
              color: c.bg,
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
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.4,
              color: c.bg,
              opacity: 0.78,
              maxWidth: 680,
              margin: "0 auto 56px",
              textWrap: "pretty",
            }}
          >
            Ich finde mit Ihnen die Lösung, die Ihr Team wirklich mitträgt — nicht die schönste auf dem Papier.
            Sparring für Inhaber und Geschäftsführer in Handwerk und Dienstleistung.
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center" }}>
            <CTA href="#a-knoten" variant="light">Den Knoten kennenlernen</CTA>
            <CTAGhost href="#a-prinzipien" variant="light">Wie ich arbeite</CTAGhost>
          </div>
        </div>

        {/* Stamp bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 60,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <MonoMarker color={c.bg} opacity={0.5} size={9}>
            No. 01 · Mönchengladbach · 2026
          </MonoMarker>
        </div>
      </section>

      {/* ============== WER ICH BIN ============== */}
      <section id="a-vita-intro" style={{ background: c.bg, padding: "140px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker>02 · Wer ich bin</MonoMarker>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "360px 1fr",
              gap: 96,
              marginTop: 56,
              alignItems: "start",
            }}
          >
            <Portrait width={360} height={460} caption="Tim Schmitz · Inhaber" />
            <div>
              <h2
                style={{
                  fontSize: 42,
                  fontWeight: 600,
                  letterSpacing: "-0.022em",
                  lineHeight: 1.05,
                  margin: 0,
                  textWrap: "balance",
                }}
              >
                Bevor jemand Software kauft, schaue ich, was im Betrieb <Accent>wirklich klemmt</Accent>.
              </h2>
              <div style={{ marginTop: 36, fontSize: 17, lineHeight: 1.6, maxWidth: 540, color: c.ink }}>
                <p style={{ margin: "0 0 18px" }}>
                  Wann haben Sie zuletzt Geld in eine Lösung gesteckt, die Ihr Team nie wirklich
                  angenommen hat? Nicht weil die Menschen schwierig sind. Sondern weil das eigentliche
                  Problem woanders saß.
                </p>
                <p style={{ margin: "0 0 18px" }}>
                  Das schmerzt mich. Nicht als Kritik — sondern weil ich weiß, was möglich wäre, wenn
                  der Knoten vorher gefunden worden wäre.
                </p>
                <p style={{ margin: "0 0 18px" }}>
                  Mein Vater hat mir nie erklärt, wie Dinge funktionieren. Er hat es mir gezeigt.
                  Anfassen, ausprobieren, verstehen — nicht nur wissen. Dieser Unterschied hat mich
                  geprägt, lange bevor ich wusste, dass er mal meine Arbeit definieren würde.
                </p>
                <p style={{ margin: "0 0 18px" }}>
                  Nach meiner Ausbildung zum Informationstechnischen Assistenten und einem Studium,
                  das mir beibrachte, komplexe Probleme in handhabbare Teile zu zerlegen, habe ich für
                  Unternehmen Lösungen gebaut — Industrie, Handwerk, Mittelstand. Ich habe nie mit der
                  Frage angefangen, welches Tool hier passt. Immer zuerst: Was ist eigentlich das
                  Problem? Meine ersten Kunden kamen nicht durch Akquise. Sie wurden weiterempfohlen
                  — weil die Lösungen von den Mitarbeitern wirklich getragen wurden.
                </p>
                <p style={{ margin: "0 0 18px" }}>
                  Den Moment, der alles verändert hat, werde ich nicht vergessen. Ein Workshop, der
                  perfekt gelaufen war. Problem klar, Lösung gut durchdacht, Umsetzung sauber. Und
                  dann nutzte sie keiner. Nicht weil die Software schlecht war. Sondern weil das
                  eigentliche Problem tiefer lag — an einer Stelle, die kein Tool der Welt hätte
                  lösen können.
                </p>
                <p style={{ margin: 0 }}>
                  Seitdem ist meine Arbeit eine andere. Ich verkaufe keine Software. Ich stelle
                  Fragen. Ich finde den Knoten, der unter der Oberfläche liegt — bevor Geld fließt.
                  Denn Technik löst Probleme. Aber nur die richtigen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider style={{ maxWidth: 1180, margin: "0 auto" }} />

      {/* ============== WOFÜR ICH STEHE — 3 Prinzipien ============== */}
      <section id="a-prinzipien" style={{ background: c.bg, padding: "140px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker>03 · Wofür ich stehe</MonoMarker>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: "-0.022em",
              lineHeight: 1.0,
              margin: "24px 0 80px",
              maxWidth: 720,
              textWrap: "balance",
            }}
          >
            Drei Prinzipien. <Accent>Keine Floskeln.</Accent>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56 }}>
            {[
              {
                tag: "I · Mensch vor Tool",
                title: "Erst verstehen, wer am Tisch sitzt.",
                body: "Bevor irgendeine Software ins Spiel kommt, frage ich: Wer arbeitet damit? Was kann das Team mittragen? Ohne diese Antwort ist jede Empfehlung Glücksspiel.",
              },
              {
                tag: "II · Maß nehmen statt sägen",
                title: "Messen, bevor jemand schneidet.",
                body: "Im Handwerk selbstverständlich. In der IT zu selten. Bevor Sie ein Tool kaufen, prüfen wir: Wo klemmt es wirklich? Manchmal ist die Antwort nicht Software.",
              },
              {
                tag: "III · 120 Min statt 9 Monate",
                title: "Ein Gespräch, ein Report, eine Richtung.",
                body: "Kein Beratungsmarathon. Kein Aufwandsverkauf. 120 Minuten Sparring, ein Report in fünf Tagen, eine klare Empfehlung. Was Sie damit machen, entscheiden Sie.",
              },
            ].map((p) => (
              <div key={p.tag}>
                <MonoMarker color={c.accent} opacity={1} size={10}>{p.tag}</MonoMarker>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    letterSpacing: "-0.018em",
                    lineHeight: 1.15,
                    margin: "16px 0 16px",
                    textWrap: "balance",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.55, margin: 0, color: c.ink, opacity: 0.82 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== DER KNOTEN — Signature-Produkt — Mitternacht ============== */}
      <section
        id="a-knoten"
        style={{ background: c.ink, color: c.bg, padding: "140px 0", position: "relative" }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker color={c.bg} opacity={0.55}>04 · Signature-Produkt</MonoMarker>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: 96,
              marginTop: 32,
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 64,
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 0.98,
                  margin: "0 0 32px",
                  textWrap: "balance",
                }}
              >
                Der <Accent>Knoten</Accent>.
              </h2>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  opacity: 0.82,
                  marginBottom: 48,
                  maxWidth: 460,
                  textWrap: "pretty",
                }}
              >
                Drei Stränge, ein Knoten. 120 Minuten am Tisch. Ein Report. Eine klare Empfehlung.
              </p>

              {/* Daten-Tabelle */}
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  fontSize: 12,
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  rowGap: 14,
                  columnGap: 24,
                  marginBottom: 48,
                  paddingTop: 24,
                  borderTop: `1px solid rgba(241,235,222,0.18)`,
                }}
              >
                {[
                  ["FORMAT", "120 Minuten Sparring"],
                  ["LIEFERUNG", "1 Report · 4–6 Seiten · innerhalb 5 Werktagen"],
                  ["ORT", "Mönchengladbach vor Ort · oder per Video"],
                  ["FÜR", "Geschäftsführer · 10–30 Mitarbeitende"],
                  ...(showPricing ? [["INVESTITION", "490 € Pilot · 1.490 € Standard"]] : []),
                ].map(([k, v]) => (
                  <React.Fragment key={k}>
                    <div style={{ fontSize: 9.5, letterSpacing: "0.22em", opacity: 0.55, paddingTop: 3 }}>{k}</div>
                    <div style={{ fontWeight: 500, opacity: 0.92 }}>{v}</div>
                  </React.Fragment>
                ))}
              </div>

              <CTA href="#a-kontakt" variant="light">Knoten anfragen</CTA>
            </div>

            {/* Großer Knoten rechts */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <Knoten size={340} variant="light" strokeWidth={4.5} />
                <div
                  style={{
                    position: "absolute",
                    bottom: -36,
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                  }}
                >
                  <MonoMarker color={c.bg} opacity={0.5} size={9}>K1 · Trefoil</MonoMarker>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== ABLAUF — 4 Schritte ============== */}
      <section id="a-ablauf" style={{ background: c.bg, padding: "140px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker>05 · So läuft ein Knoten ab</MonoMarker>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: "-0.022em",
              lineHeight: 1.0,
              margin: "24px 0 80px",
              maxWidth: 760,
              textWrap: "balance",
            }}
          >
            Vier Schritte. <Accent>Kein Theater.</Accent>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              { n: "01", t: "Kennenlern-Call", d: "15 Minuten am Telefon. Wir prüfen, ob wir zusammenpassen. Wenn nicht, sage ich das ehrlich." },
              { n: "02", t: "Sparring", d: "120 Minuten an einem Tisch — in Mönchengladbach oder per Video. Wir gehen Prozesse, Menschen und offene Fragen durch." },
              { n: "03", t: "Report", d: "Innerhalb von 5 Werktagen. 4–6 Seiten. Lesbar. Eine klare Empfehlung — was anpacken, was sein lassen." },
              { n: "04", t: "Optional Begleitung", d: "Nur wenn Sie wollen. Bei Auswahl, Verhandlung, Einführung. Nicht stundenweise — pro Etappe." },
            ].map((step, i) => (
              <div key={step.n} style={{ position: "relative", paddingTop: 28 }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: i === 3 ? 0 : -16,
                    height: 1,
                    background: c.ink,
                    opacity: 0.18,
                  }}
                />
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    color: c.accent,
                    marginBottom: 14,
                  }}
                >
                  {step.n}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.018em", lineHeight: 1.15, margin: "0 0 14px" }}>
                  {step.t}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0, color: c.ink, opacity: 0.78 }}>
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== REFERENZEN ============== */}
      <section id="a-referenzen" style={{ background: c.sand, padding: "140px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker>06 · Stimmen</MonoMarker>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: "-0.022em",
              lineHeight: 1.0,
              margin: "24px 0 80px",
              maxWidth: 760,
              textWrap: "balance",
            }}
          >
            Was Inhaber sagen, mit denen ich gearbeitet habe.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {[
              {
                quote: "Wir wollten ein neues CRM. Nach dem Sparring war klar: Das war nie unser Problem. Das hat uns wahrscheinlich ein halbes Jahr und 80.000 Euro gespart.",
                who: "Geschäftsführer",
                sub: "Sanitärbetrieb · 22 Mitarbeitende",
              },
              {
                quote: "Tim hat zugehört, bevor er etwas empfohlen hat. Das war neu. Bei allen Beratern davor lag nach 20 Minuten der Tool-Vorschlag auf dem Tisch.",
                who: "Inhaberin",
                sub: "Eventservice · 14 Mitarbeitende",
              },
              {
                quote: "Der Report ist sechs Seiten. Ich hab ihn meinem Vorarbeiter in die Hand gedrückt — er hat ihn in einer halben Stunde durch und alles verstanden.",
                who: "Geschäftsführer",
                sub: "Tischlerei · 28 Mitarbeitende",
              },
            ].map((r, i) => (
              <div key={i} style={{ borderTop: `1.5px solid ${c.ink}`, paddingTop: 32 }}>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    lineHeight: 1.35,
                    letterSpacing: "-0.012em",
                    color: c.ink,
                    marginBottom: 32,
                    textWrap: "pretty",
                  }}
                >
                  „{r.quote}"
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: c.ink }}>{r.who}</div>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: c.steel,
                    marginTop: 4,
                  }}
                >
                  {r.sub}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: c.steel,
              marginTop: 64,
              opacity: 0.7,
            }}
          >
            Stimmen anonymisiert auf Wunsch · Identitäten auf Anfrage
          </p>
        </div>
      </section>

      {/* ============== CASES ============== */}
      <section id="a-cases" style={{ background: c.bg, padding: "140px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker>07 · Beispiele</MonoMarker>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: "-0.022em",
              lineHeight: 1.0,
              margin: "24px 0 80px",
              maxWidth: 720,
              textWrap: "balance",
            }}
          >
            Drei Knoten. Drei Mal etwas anderes herausgekommen als gedacht.
          </h2>

          {[
            {
              n: "Case 01",
              branche: "Sanitär · 22 MA",
              title: "Die CRM-Frage war keine CRM-Frage.",
              body: "Auftrag: Neues Kundensystem evaluieren. Nach dem Sparring zeigte sich: Das eigentliche Problem war die Übergabe zwischen Büro und Monteuren. Lösung: Drei Prozessänderungen, ein A4-Übergabeblatt. Kein neues Tool.",
              tag: "Drei Wochen statt sechs Monate",
            },
            {
              n: "Case 02",
              branche: "Tischlerei · 28 MA",
              title: "Vor dem ERP-Kauf: drei Prozesse aufschreiben.",
              body: "Geplant war eine ERP-Einführung im sechsstelligen Bereich. Im Sparring kam heraus: Drei Kernprozesse waren nicht dokumentiert. Empfehlung: Erst dokumentieren, dann ausschreiben. Das Projekt läuft heute — sauber, ohne Reibung.",
              tag: "Sechsstellige Fehlinvestition vermieden",
            },
            {
              n: "Case 03",
              branche: "Eventservice · 14 MA",
              title: "Erst das Team fragen, dann die Software bestellen.",
              body: "Die Geschäftsführung wollte eine Personalplanungs-App einführen. Im Sparring stellte sich heraus: Das Team plant lieber mit Whiteboard und WhatsApp — aus guten Gründen. Empfehlung: Whiteboard professionalisieren, App in 6 Monaten neu prüfen.",
              tag: "Team-Akzeptanz vor Tool-Auswahl",
            },
          ].map((cs, i) => (
            <div key={cs.n} style={{ marginBottom: i === 2 ? 0 : 56 }}>
              <Divider style={{ marginBottom: 32 }} />
              <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 280px", gap: 48, alignItems: "start" }}>
                <div>
                  <MonoMarker color={c.accent} opacity={1}>{cs.n}</MonoMarker>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: c.steel,
                      marginTop: 10,
                    }}
                  >
                    {cs.branche}
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 26,
                      fontWeight: 600,
                      letterSpacing: "-0.018em",
                      lineHeight: 1.15,
                      margin: "0 0 16px",
                      textWrap: "balance",
                    }}
                  >
                    {cs.title}
                  </h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: 0, color: c.ink, opacity: 0.82, maxWidth: 600 }}>
                    {cs.body}
                  </p>
                </div>
                <div
                  style={{
                    paddingLeft: 24,
                    borderLeft: `1px solid ${c.ink}`,
                    borderLeftColor: "rgba(22,34,58,0.2)",
                  }}
                >
                  <MonoMarker size={9} opacity={0.55}>Ergebnis</MonoMarker>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      letterSpacing: "-0.012em",
                      marginTop: 10,
                      color: c.ink,
                      lineHeight: 1.3,
                    }}
                  >
                    <Accent>—</Accent> {cs.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section id="a-faq" style={{ background: c.sand, padding: "140px 0" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker>08 · Häufige Fragen</MonoMarker>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: "-0.022em",
              lineHeight: 1.0,
              margin: "24px 0 64px",
              maxWidth: 760,
              textWrap: "balance",
            }}
          >
            Was Inhaber vor dem ersten Gespräch wissen wollen.
          </h2>
          <div>
            {[
              {
                q: "Sind Sie IT-Berater?",
                a: "Nein. Ich bin Sparringspartner für Geschäftsführer. Ich verkaufe keine Software und vermittle auch keine. Ich helfe Ihnen, die richtige Frage zu finden — bevor Sie Geld in eine Antwort stecken.",
              },
              {
                q: "Wie unterscheiden Sie sich von klassischer Unternehmensberatung?",
                a: "Kein Projektvolumen. Kein Aufwandsverkauf. 120 Minuten, ein Report, eine klare Empfehlung. Was Sie damit machen, entscheiden Sie — mit Ihrem Team, in Ihrem Tempo.",
              },
              {
                q: "Muss mein Team IT-affin sein?",
                a: "Nein. Das ist sogar oft besser. Ich rede die Sprache, die in der Werkstatt und im Büro tatsächlich gesprochen wird — und finde so heraus, was wirklich klemmt.",
              },
              {
                q: "Funktioniert das auch remote?",
                a: "Ja. Mönchengladbach vor Ort oder per Video — die Methode bleibt dieselbe. Manche Inhaber bevorzugen vor Ort, weil das Team gleich mit einbezogen werden kann.",
              },
              {
                q: "Was kostet ein Knoten?",
                a: "Reden wir am Telefon. Es hängt vom Umfang ab. Der Pilot ist günstig genug für einen ehrlichen Test — wenn nichts daraus wird, haben Sie wenig verloren.",
              },
              {
                q: "Was passiert nach dem Report?",
                a: "Das entscheiden Sie. Manche setzen den Report mit ihrem Team alleine um — das ist gut so. Andere wollen Begleitung bei Auswahl oder Einführung. Beides geht.",
              },
            ].map((f, i) => (
              <details
                key={i}
                style={{
                  borderTop: `1px solid ${c.ink}`,
                  borderTopColor: "rgba(22,34,58,0.2)",
                  padding: "24px 0",
                  borderBottom: i === 5 ? `1px solid rgba(22,34,58,0.2)` : "none",
                }}
                open={i === 0}
              >
                <summary
                  style={{
                    fontSize: 19,
                    fontWeight: 600,
                    letterSpacing: "-0.012em",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {f.q}
                  <span style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", fontSize: 14, opacity: 0.55 }}>+</span>
                </summary>
                <p style={{ fontSize: 16, lineHeight: 1.6, margin: "16px 0 0", color: c.ink, opacity: 0.82, maxWidth: 720 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============== VITA ============== */}
      <section id="a-vita" style={{ background: c.bg, padding: "140px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker>09 · Werdegang</MonoMarker>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 96, marginTop: 24 }}>
            <h2
              style={{
                fontSize: 42,
                fontWeight: 600,
                letterSpacing: "-0.022em",
                lineHeight: 1.05,
                margin: 0,
                textWrap: "balance",
              }}
            >
              <Accent>Zwei Jahrzehnte</Accent> in IT-Projekten.
            </h2>
            <div style={{ display: "grid", rowGap: 24 }}>
              {[
                ["seit 2025", "Schmitz Systemarchitektur", "Sparring für Geschäftsführer im Mittelstand — Mönchengladbach · Remote."],
                ["2018 – 2024", "Geschäftsführer · IT-Projekte", "Verantwortung für Digitalisierungsprojekte in Handel und Service. 15+ Jahre Projekt­erfahrung."],
                ["2010 – 2018", "Projektleitung & Strategie", "Mittelstand und Konzern. ERP-Einführungen, Prozess­design, Change-Begleitung."],
              ].map(([when, what, body]) => (
                <div key={when} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 24, paddingTop: 18, borderTop: `1px solid rgba(22,34,58,0.18)` }}>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: c.steel,
                      paddingTop: 3,
                    }}
                  >
                    {when}
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.012em" }}>{what}</div>
                    <p style={{ fontSize: 15, lineHeight: 1.55, margin: "6px 0 0", color: c.ink, opacity: 0.78 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== KONTAKT — Mitternacht ============== */}
      <section id="a-kontakt" style={{ background: c.ink, color: c.bg, padding: "140px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 60px" }}>
          <MonoMarker color={c.bg} opacity={0.55}>10 · Kontakt</MonoMarker>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 96, marginTop: 32, alignItems: "start" }}>
            <div>
              <h2
                style={{
                  fontSize: 64,
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 0.98,
                  margin: "0 0 32px",
                  textWrap: "balance",
                }}
              >
                Lassen Sie uns <Accent>15 Minuten</Accent> reden.
              </h2>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.45,
                  opacity: 0.82,
                  margin: "0 0 48px",
                  maxWidth: 520,
                  textWrap: "pretty",
                }}
              >
                Wenn es passt, machen wir einen Termin für den Knoten. Wenn nicht, sage ich das ehrlich.
                Das kostet Sie nichts und niemanden.
              </p>
              <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                <CTA href="https://cal.com/tim-schmitz" variant="light">Termin buchen</CTA>
                <CTAGhost href="mailto:tim@schmitz-systemarchitektur.de" variant="light">
                  tim@schmitz-systemarchitektur.de
                </CTAGhost>
              </div>
            </div>

            <div style={{ paddingTop: 12 }}>
              <Plakette size="md" variant="light" />
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  fontSize: 11,
                  lineHeight: 1.6,
                  display: "grid",
                  gridTemplateColumns: "70px 1fr",
                  rowGap: 6,
                  columnGap: 16,
                  marginTop: 40,
                }}
              >
                {[
                  ["MOBIL", "+49 163 727 1007"],
                  ["E-MAIL", "tim@schmitz-systemarchitektur.de"],
                  ["WEB", "schmitz-systemarchitektur.de"],
                  ["STANDORT", "Mönchengladbach · Remote"],
                ].map(([k, v]) => (
                  <React.Fragment key={k}>
                    <div style={{ fontSize: 9, letterSpacing: "0.22em", opacity: 0.55, paddingTop: 3 }}>{k}</div>
                    <div style={{ fontWeight: 500, opacity: 0.95 }}>{v}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer style={{ background: c.ink, color: c.bg, padding: "32px 0 48px", borderTop: "1px solid rgba(241,235,222,0.12)" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MonoMarker color={c.bg} opacity={0.5} size={9}>
            © 2026 Schmitz Systemarchitektur · Mönchengladbach
          </MonoMarker>
          <div style={{ display: "flex", gap: 32 }}>
            {["Impressum", "Datenschutz"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  color: c.bg,
                  opacity: 0.55,
                  textDecoration: "none",
                  fontSize: 12,
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </PageBase>
  );
}

window.VariantA = VariantA;
