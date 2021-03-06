import React, { Component } from 'react';
import HeadlineText from '../HeadlineText.js';
import DoDont from '../DoDont.js';
import AnimImg from '../AnimImg.js';
import GlobalStyle from '../GlobalStyle.js';

import { View, Text } from 'react-native';

const DO = [
  'Lacke, Farben, Verdünnung',
  'Abbeizmittel',
  'Öl, Benzin, ölhaltige Abfälle',
  'Pflanzenschutzmittel',
  'Batterien, Knopfzellen, Akkus',
  'Leuchtstoffröhren, Thermometer (Quecksilber)',
  'Fotochemikalien'
];

const DONT = [
  'Eimer von Wandfarbe (leer bzw. eingetrocknet)',
  'Leere Spraydosen',
  'Leere Reinigungsmittelflaschen',
  'Aluminium',
  'Speiseöl, Fritierfett',
  'Elektroschrott'
];

export default class Sondermuell extends Component {
  render () {
    return (
      <View style={GlobalStyle.containerTonne}>
        <HeadlineText mainColor center>
          Sondermüll
        </HeadlineText>
        <AnimImg tonne='sondermüll' />
        <Text style={GlobalStyle.infoText}>
          Informiere dich bei deiner Stadt wo du Sondermüll entsorgen bzw. anmelden kannst.
        </Text>
        <Text style={GlobalStyle.infoText}>
          Batterien und Leuchtstoffröhren kannst du oftmals im Baumarkt/Supermarkt in dafür vorgesehene Boxen entsorgen.
        </Text>
        <DoDont do={DO} dont={DONT} />
      </View>
    );
  }
}
