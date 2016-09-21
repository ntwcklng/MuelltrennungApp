import React, { Component, PropTypes } from 'react';
import TonneView from './TonneView.js';
import Tonnen from './Tonnen.js';
import HeadlineText from './HeadlineText.js';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';


export default class MainView extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  constructor(props, context) {
    super(props, context);
    this._onPressBtn = this._onPressBtn.bind(this);
  }
  _onPressBtn(tonne) {
    const title = tonne.toUpperCase();
    this.props.navigator.push({
      component: TonneView,
      title,
      passProps: { tonne }
    })
  }
  render() {
    const TonnenItems = Tonnen.map((tonne) => {
      return (
        <TouchableHighlight
          key={tonne.name}
          onPress={() => this._onPressBtn(tonne.name)}
          style={styles.TonnenButton}
          underlayColor='#02B875'>
          <Text>{tonne.displayName}</Text>
        </TouchableHighlight>
      )
    })
    return (
      <View style={styles.container}>
        <ScrollView centerContent={false}>
          <HeadlineText center={true} mainColor={true}>Was kommt wo rein?</HeadlineText>
          {TonnenItems}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TonnenButton: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    padding: 10,
    flex:0.5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

});