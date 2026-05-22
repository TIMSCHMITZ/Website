export interface Case {
  n: string;
  branche: string;
  title: string;
  body: string;
  ergebnis: string;
}

export const cases: Case[] = [
  {
    n: 'Case 01',
    branche: 'Sanitär · 22 MA',
    title: 'Die CRM-Frage war keine CRM-Frage.',
    body: 'Auftrag: Neues Kundensystem evaluieren. Nach dem Sparring zeigte sich: Das eigentliche Problem war die Übergabe zwischen Büro und Monteuren. Lösung: Drei Prozessänderungen, ein A4-Übergabeblatt. Kein neues Tool.',
    ergebnis: 'Drei Wochen statt sechs Monate',
  },
  {
    n: 'Case 02',
    branche: 'Tischlerei · 28 MA',
    title: 'Vor dem ERP-Kauf: drei Prozesse aufschreiben.',
    body: 'Geplant war eine ERP-Einführung im sechsstelligen Bereich. Im Sparring kam heraus: Drei Kernprozesse waren nicht dokumentiert. Empfehlung: Erst dokumentieren, dann ausschreiben. Das Projekt läuft heute — sauber, ohne Reibung.',
    ergebnis: 'Sechsstellige Fehlinvestition vermieden',
  },
  {
    n: 'Case 03',
    branche: 'Eventservice · 14 MA',
    title: 'Erst das Team fragen, dann die Software bestellen.',
    body: 'Die Geschäftsführung wollte eine Personalplanungs-App einführen. Im Sparring stellte sich heraus: Das Team plant lieber mit Whiteboard und WhatsApp — aus guten Gründen. Empfehlung: Whiteboard professionalisieren, App in 6 Monaten neu prüfen.',
    ergebnis: 'Team-Akzeptanz vor Tool-Auswahl',
  },
];
