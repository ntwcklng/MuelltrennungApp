import React, { Component } from 'react';
import GraueTonne from '../Tonnen/Grau.js';
import GelbeTonne from '../Tonnen/Gelb.js';
import BlaueTonne from '../Tonnen/Blau.js';
import BioTonne from '../Tonnen/Bio.js';
import Altglas from '../Tonnen/Altglas.js';
import Sondermuell from '../Tonnen/Sondermuell.js';
import Sperrmuell from '../Tonnen/Sperrmuell.js';
import HeadlineText from '../HeadlineText.js';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';


export default class TonneView extends Component {
  render() {
    let Tonne;
    switch(this.props.tonne) {
      case 'blau':
        Tonne = (<BlaueTonne />);
        break;
      case 'grau':
        Tonne = (<GraueTonne />);
        break;
      case 'gelb':
        Tonne = (<GelbeTonne />);
        break;
      case 'bio':
        Tonne = (<BioTonne />);
        break;
      case 'altglas':
        Tonne = (<Altglas />);
        break;
      case 'sperrmüll':
        Tonne = (<Sperrmuell />);
        break;
      case 'sondermüll':
        Tonne = (<Sondermuell />);
        break;
      case 'elektro':
        Tonne = (<Elektro />);
        break;
    }
    return (
      <View style={styles.container}>
        <ScrollView style={{padding: 20}}>
          {Tonne}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});