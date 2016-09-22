import React, { Component } from 'react';
import HeadlineText from '../HeadlineText.js';
import DoDont from '../DoDont.js';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';

const DO = [
  'Banenenschalen',
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


export default class Sondermuell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeadlineText mainColor={true} center={true}>Sondermüll</HeadlineText>
        <DoDont do={DO} dont={DONT}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
});