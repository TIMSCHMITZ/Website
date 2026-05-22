export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Der Knoten', href: '#knoten' },
  { label: 'Prinzipien', href: '#prinzipien' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Vita', href: '#vita' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const contact = {
  cal: 'https://cal.com/tim-schmitz',
  email: 'tim@schmitz-systemarchitektur.de',
  phone: '+49 163 727 1007',
  web: 'schmitz-systemarchitektur.de',
  location: 'Mönchengladbach · Remote',
};
