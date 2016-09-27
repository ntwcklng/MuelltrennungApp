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
  'Möbel',
  'Schränke',
  'Regale',
  'Matratzen',
  'Koffer',
];

const DONT = [
  'asbesthaltige Abfälle',
  'Autoteile',
  'Bauschutt',
  'Waschbecken / WCs',
  'Elektro-Altgeräte',
  'Gewerbe- oder Industrieabfälle',
  'Reifen',
  'Restmüll',
  'Rasenmäher',
  'Vollglastüren',
];


export default class Sperrmuell extends Component {
  render() {
    return (
      <View style={GlobalStyle.containerTonne}>
        <HeadlineText mainColor={true} center={true}>Sperrmüll</HeadlineText>
        <AnimImg tonne='sperrmüll' />
        <Text style={GlobalStyle.infoText}>Informiere dich bei deiner Stadt wo du Sperrmüll entsorgen bzw. anmelden kannst.</Text>
        <DoDont do={DO} dont={DONT}/>
      </View>
    );
  }
}