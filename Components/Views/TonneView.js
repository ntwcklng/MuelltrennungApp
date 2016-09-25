import React, { Component } from 'react';
import GraueTonne from '../Tonnen/Grau';
import GelbeTonne from '../Tonnen/Gelb';
import BlaueTonne from '../Tonnen/Blau';
import BioTonne from '../Tonnen/Bio';
import Altglas from '../Tonnen/Altglas';
import Sondermuell from '../Tonnen/Sondermuell';
import Sperrmuell from '../Tonnen/Sperrmuell';
import HeadlineText from '../HeadlineText';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View,
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