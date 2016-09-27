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
  'leere Getränkeflaschen',
  'Konservengläser',
  'Marmeladengläser',
  'Senfgläser',
  'pharmazeutische Glasbehälter'
];

const DONT = [
  'Porzellan und Keramik',
  'feuerfestes Geschirr',
  'Trinkgläser',
  'Fensterglas',
  'Spiegel',
  'Weihnachtsbaumkugeln',
  'Ceran-Kochfelder',
  'Behälter aus Bleikristall wie z.b. Blumenvasen, Aschenbecher oder Weingläser',
  'Autoscheiben und -lampen',
];


export default class Altglas extends Component {
  render() {
    return (
      <View style={GlobalStyle.containerTonne}>
        <HeadlineText mainColor={true} center={true}>Altglas</HeadlineText>
        <AnimImg tonne='altglas' />
        <DoDont do={DO} dont={DONT}/>
      </View>
    );
  }
}