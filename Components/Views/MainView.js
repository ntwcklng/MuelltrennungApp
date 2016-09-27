import React, { Component, PropTypes } from 'react';
import TonneView from './TonneView';
import TonnenItems from '../TonnenItems';
import HeadlineText from '../HeadlineText';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Image
} from 'react-native';


export default class MainView extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  constructor(props, context) {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <HeadlineText center={true} mainColor={true}>Was möchtest du entsorgen?</HeadlineText>
          <TonnenItems navigator={this.props.navigator}/>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TonnenDesc: {
    marginTop: 15,
    color: '#585858',
    textAlign: 'center',
  },
  ImgBtn: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  TonnenButton: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
  },
});