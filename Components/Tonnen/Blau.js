import React, { Component } from 'react';
import HeadlineText from '../HeadlineText.js';
import DoDont from '../DoDont.js';
import GlobalStyle from '../GlobalStyle.js';
import AnimImg from '../AnimImg.js';

import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View,
  Image,
} from 'react-native';

const DO = [
  'Briefumschläge',
  'Brötchentüten',
  'Eierkartons',
  'Kataloge',
  'Prospekte',
  'Müslischachteln',
  'Toilettenpapierrollen',
  'Zeitschriften',
  'Zeitungen'
];

const DONT = [
  'beschichtetes Papier',
  'Monatsbinden',
  'Servietten',
  'Tampons',
  'Taschentücher',
  'verschmutztes Papier',
  'Wattepads'
];


export default class BlaueTonne extends Component {
  render() {
    return (
      <View style={GlobalStyle.containerTonne}>
        <HeadlineText mainColor={true} center={true}>Blaue Tonne</HeadlineText>
        <AnimImg tonne='blau' />
        <DoDont do={DO} dont={DONT}/>
      </View>
    );
  }
}