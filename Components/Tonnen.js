const Tonnen = [
  {
    name: 'grau',
    displayName: 'Graue Tonne (Restmüll)',
    component: './Tonnen/Grau.js',
    desc: 'Essensreste, Hygieneartikel, usw.'
  },
  {
    name: 'gelb',
    displayName: 'Gelbe Tonne (Verpackung/Kunststoffe)',
    component: './Tonnen/Gelb.js',
    desc: 'Plastik, Alu, Folien, usw.'
  },
  {
    name: 'blau',
    displayName: 'Blaue Tonne (Papier)',
    component: './Tonnen/Blau.js',
    desc: 'Papier, Pappe, Kartons, usw.'
  },
  {
    name: 'bio',
    displayName: 'Bio Tonne',
    component: './Tonnen/Bio.js',
    desc: 'Grünabfälle, Obstreste, Kaffeesatz, usw.'
  },
  {
    name: 'altglas',
    displayName: 'Altglas',
    component: './Tonnen/Altglas.js',
    desc: 'Wurst- und Gurkengläser, Weinflaschen,\n leere Flaschen'
  },
  {
    name: 'sperrmüll',
    displayName: 'Sperrmüll',
    component: './Tonnen/Sperrmuell.js',
    desc: 'Möbel, Schränke, Regale, Teppiche, Koffer, usw.'
  },
  {
    name: 'sondermüll',
    displayName: 'Sondermüll',
    component: './Tonnen/Sondermuell.js',
    desc: 'Batterien, Kork, Tintenpatronen, Farben, Lacke, usw.'
  }
];
module.exports = Tonnen;
