export interface Prinzip {
  tag: string;
  title: string;
  body: string;
}

export const prinzipien: Prinzip[] = [
  {
    tag: 'I · Mensch vor Tool',
    title: 'Erst verstehen, wer am Tisch sitzt.',
    body: 'Bevor irgendeine Software ins Spiel kommt, frage ich: Wer arbeitet damit? Was kann das Team mittragen? Ohne diese Antwort ist jede Empfehlung Glücksspiel.',
  },
  {
    tag: 'II · Maß nehmen statt sägen',
    title: 'Messen, bevor jemand schneidet.',
    body: 'Im Handwerk selbstverständlich. In der IT zu selten. Bevor Sie ein Tool kaufen, prüfen wir: Wo klemmt es wirklich? Manchmal ist die Antwort nicht Software.',
  },
  {
    tag: 'III · 120 Min statt 9 Monate',
    title: 'Ein Gespräch, ein Report, eine Richtung.',
    body: 'Kein Beratungsmarathon. Kein Aufwandsverkauf. 120 Minuten Sparring, ein Report in fünf Tagen, eine klare Empfehlung. Was Sie damit machen, entscheiden Sie.',
  },
];
