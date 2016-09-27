import React, { Component } from 'react';
import HeadlineText from '../HeadlineText.js';
import DoDont from '../DoDont.js';
import AnimImg from '../AnimImg.js';
import GlobalStyle from '../GlobalStyle.js';

import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View,
  Image,
} from 'react-native';

const DO = [
  'Lacke, Farben, Verdünnung',
  'Abbeizmittel',
  'Öl, Benzin, ölhaltige Abfälle',
  'Pflanzenschutzmittel',
  'Batterien, Knopfzellen, Akkus',
  'Leuchtstoffröhren, Thermometer (Quecksilber)',
  'Fotochemikalien',
];

const DONT = [
  'Eimer von Wandfarbe, die leer oder vollständig eingetrocknet sind',
  'Leere Spraydosen',
  'Leere Reinigungsmittelflaschen',
  'Aluminium',
  'Speiseöl, Fritierfett',
  'Elektroschrott'
];


export default class Sondermuell extends Component {
  render() {
    return (
      <View style={GlobalStyle.containerTonne}>
        <HeadlineText mainColor={true} center={true}>Sondermüll</HeadlineText>
        <AnimImg tonne='sondermüll' />
        <Text style={GlobalStyle.infoText}>Informiere dich bei deiner Stadt wo du Sondermüll entsorgen bzw. anmelden kannst.</Text>
        <DoDont do={DO} dont={DONT}/>
      </View>
    );
  }
}