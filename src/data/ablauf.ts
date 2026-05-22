export interface AblaufStep {
  n: string;
  title: string;
  body: string;
}

export const ablaufSteps: AblaufStep[] = [
  {
    n: '01',
    title: 'Kennenlern-Call',
    body: '15 Minuten am Telefon. Wir prüfen, ob wir zusammenpassen. Wenn nicht, sage ich das ehrlich.',
  },
  {
    n: '02',
    title: 'Sparring',
    body: '120 Minuten an einem Tisch — in Mönchengladbach oder per Video. Wir gehen Prozesse, Menschen und offene Fragen durch.',
  },
  {
    n: '03',
    title: 'Report',
    body: 'Innerhalb von 5 Werktagen. 4–6 Seiten. Lesbar. Eine klare Empfehlung — was anpacken, was sein lassen.',
  },
  {
    n: '04',
    title: 'Optional Begleitung',
    body: 'Nur wenn Sie wollen. Bei Auswahl, Verhandlung, Einführung. Nicht stundenweise — pro Etappe.',
  },
];
