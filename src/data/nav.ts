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
  cal: 'https://calendly.com/schmitz-systemarchitektur-info/15-min-gesprach-passt-der-knoten',
  email: 'info@schmitz-systemarchitektur.de',
  phone: '+49 163 727 1007',
  web: 'schmitz-systemarchitektur.de',
  location: 'Mönchengladbach · Remote',
};
