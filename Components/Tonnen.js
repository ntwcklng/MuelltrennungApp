const Tonnen = [
  {
    name: 'grau',
    displayName: 'Graue Tonne (Restmüll)',
    component: './Tonnen/Grau.js',
    img: '/Components/Images/Graue.png',
    desc: 'Essensreste, Hygieneartikel usw.'
  },
  {
    name: 'gelb',
    displayName: 'Gelbe Tonne (Verpackung/Kunststoffe)',
    component: './Tonnen/Gelb.js',
    img: '../Images/Gelbe.png',
    desc: 'Plastik, Alu, Folien usw.'
  },
  {
    name: 'blau',
    displayName: 'Blaue Tonne (Papier)',
    component: './Tonnen/Blau.js',
    img: './Images/Blaue.png',
    desc: 'Papier, Pappe, Kartons etc'
  },
  {
    name: 'bio',
    displayName: 'Bio Tonne',
    component: './Tonnen/Bio.js',
    img: './Images/Bio.png',
    desc: 'Grünabfälle, Obstreste, Kaffeesatz usw.'
  },
]
module.exports = Tonnen;