import React, { Component } from 'react';
import HeadlineText from '../HeadlineText';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';


export default class Hilfe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{padding: 20}}>
          <HeadlineText mainColor={true} center={true}>Warum?</HeadlineText>
          <Text style={styles.text}>In Deutschland fallen jedes Jahr über 40 Millionen Tonnen Hausmüll an, daher ist es besonders wichtig, diese Menge am besten zu reduzieren und richtig zu trennen.</Text>
          <Text />
          <Text style={styles.text}>Die Entwickler dieser App haben sich zur Aufgabe gemacht, dich bei der Mülltrennung zu unterstützen und dir zu zeigen, welcher Müll in welchem Behältnis entsorgt wird.</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#585858'
  },
});