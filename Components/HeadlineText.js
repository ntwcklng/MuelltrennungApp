import React, { Component } from 'react';
import {
  Text,
} from 'react-native';


export default class HeadlineText extends Component {
  render() {
    const textColor = (this.props.mainColor) ? '#02B875' : '#585858';
    const textAlign = (this.props.center) ? 'center' : 'left';
    return (
      <Text style={{fontSize: 30, fontFamily: 'Indie Flower', color: textColor, textAlign: textAlign}}>{this.props.children}</Text>
    );
  }
}