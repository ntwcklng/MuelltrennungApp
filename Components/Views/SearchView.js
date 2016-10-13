import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';

export default class SearchView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { placeholder } = this.props;
    return (
      <View style={{marginTop: 200}}>
        <Text>{this.props.query}</Text>
      </View>
    )
  }
}