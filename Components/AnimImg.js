import React, { Component } from 'react';
import GlobalStyle from './GlobalStyle.js';

import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';


export default class AnimImg extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      bounceVal: new Animated.Value(0)
    };
    this.bounceImgOnRender = this.bounceImgOnRender.bind(this);
    this.bounceImgOnPress = this.bounceImgOnPress.bind(this);
  }
  bounceImgOnPress() {
    this.state.bounceVal.setValue(230);
    Animated.spring(
      this.state.bounceVal,
      { toValue: 200, fiction: 9, tension: 50 }
    ).start();
  }
  bounceImgOnRender(val) {
    Animated.spring(
      this.state.bounceVal,
      { toValue: 200, fiction: 9, tension: 50 }
    ).start();
  }
  componentDidMount() {
    this.state.bounceVal.setValue(-500);
    this.bounceImgOnRender();
  }
  render() {
    let MuellImg;
    switch(this.props.tonne) {
      case 'blau':
        MuellImg = require('./Images/Result_Blau.png');
        break;
      case 'grau':
        MuellImg = require('./Images/Result_Grau.png');
        break;
      case 'gelb':
        MuellImg = require('./Images/Result_Gelb.png');
        break;
      case 'bio':
        MuellImg = require('./Images/Result_Bio.png');
        break;
      case 'altglas':
        MuellImg = require('./Images/Result_Altglas.png');
        break;
      case 'sperrmüll':
        MuellImg = require('./Images/Result_Sonder-Sperrmuell.png');
        break;
      case 'sondermüll':
        MuellImg = require('./Images/Result_Sonder-Sperrmuell.png');
        break;
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
        onPress={this.bounceImgOnPress}>
          <View>
            <Image resizeMode='contain' source={require('./Images/Pfeil.png')} style={GlobalStyle.imgPfeil}/>
            <Animated.Image resizeMode='contain' source={MuellImg} style={{width: this.state.bounceVal, height: this.state.bounceVal, alignSelf: 'center'}} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
});