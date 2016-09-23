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
  Image
} from 'react-native';

const DO = [
  'Bananenschalen',
  'Blumenerde',
  'Eierschalen',
  'Gartenabfälle',
  'Kaffeesatz',
  'Nussschalen',
  'Küchentücher',
  'Salatblätter',
  'Teebeutel',
  'Topfblumen',
];

const DONT = [
  'Asche',
  'Brot',
  'Fisch',
  'Fleisch',
  'Käse',
  'Zigaretten',
  'Wurst'
];


export default class BioTonne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeadlineText mainColor={true} center={true}>Bio Tonne</HeadlineText>
        <AnimImg tonne='bio' />
        <DoDont do={DO} dont={DONT}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});