export interface Stimme {
  quote: string;
  who: string;
  sub: string;
}

export const stimmen: Stimme[] = [
  {
    quote: 'Wir wollten ein neues CRM. Nach dem Sparring war klar: Das war nie unser Problem. Das hat uns wahrscheinlich ein halbes Jahr und 80.000 Euro gespart.',
    who: 'Geschäftsführer',
    sub: 'Sanitärbetrieb · 22 Mitarbeitende',
  },
  {
    quote: 'Tim hat zugehört, bevor er etwas empfohlen hat. Das war neu. Bei allen Beratern davor lag nach 20 Minuten der Tool-Vorschlag auf dem Tisch.',
    who: 'Inhaberin',
    sub: 'Eventservice · 14 Mitarbeitende',
  },
  {
    quote: 'Der Report ist sechs Seiten. Ich hab ihn meinem Vorarbeiter in die Hand gedrückt — er hat ihn in einer halben Stunde durch und alles verstanden.',
    who: 'Geschäftsführer',
    sub: 'Tischlerei · 28 Mitarbeitende',
  },
];
