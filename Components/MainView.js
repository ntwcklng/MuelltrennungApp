import React, { Component, PropTypes } from 'react';
import TonneView from './TonneView.js';
import Tonnen from './Tonnen.js';
import HeadlineText from './HeadlineText.js';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View,
  Image
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
      let MuellImg;
      switch(tonne.name) {
        case 'blau':
          MuellImg = require('./Images/Blaue.png');
          break;
        case 'grau':
          MuellImg = require('./Images/Graue.png');
          break;
        case 'gelb':
          MuellImg = require('./Images/Gelbe.png');
          break;
        case 'bio':
          MuellImg = require('./Images/Bio.png');
          break;
      };
      return (
        <TouchableHighlight
          key={tonne.name}
          onPress={() => this._onPressBtn(tonne.name)}
          style={styles.TonnenButton}
          underlayColor='#02B875'>
          <View>
          <Image
            source={MuellImg}
            style={styles.ImgBtn}
          />
          <Text style={styles.TonnenDesc}>{tonne.desc}</Text>
          </View>
        </TouchableHighlight>
      )
    })
    return (
      <View style={styles.container}>
        <ScrollView>
          <HeadlineText center={true} mainColor={true}>Was möchtest du entsorgen?</HeadlineText>
          {TonnenItems}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TonnenDesc: {
    marginTop: 15,
  },
  ImgBtn: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  TonnenButton: {
    backgroundColor: '#fbfbfb',
    marginBottom: 10,
    padding: 10,
    flex:1,
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },

});