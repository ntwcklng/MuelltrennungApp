import React, { Component } from 'react';
import HeadlineText from '../HeadlineText.js';
import DoDont from '../DoDont.js';
import GlobalStyle from '../GlobalStyle.js';
import AnimImg from '../AnimImg.js';

import { View } from 'react-native';

const DO = [
  'Asche (kalt!)',
  'Brot',
  'Fisch & Fleisch',
  'Kondome',
  'Monatsbinden',
  'Pflaster',
  'Putztücher',
  'Rasierklingen',
  'Speisereste'
];

const DONT = [
  'Alles, was recycelt werden kann, gehört nicht in den Restmüll!'
];

export default class GraueTonne extends Component {
  render () {
    return (
      <View style={GlobalStyle.containerTonne}>
        <HeadlineText mainColor center>
          Graue Tonne
        </HeadlineText>
        <AnimImg tonne='grau' />
        <DoDont do={DO} dont={DONT} />
      </View>
    );
  }
}
