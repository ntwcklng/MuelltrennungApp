import React, { Component } from 'react';
import HeadlineText from './HeadlineText';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class DoDont extends Component {

  constructor(props, context) {
    super(props, context);
  }
  render() {
    const renderDO = this.props.do.map((i) => {
      return (<View key={i} style={styles.dodontView}>
        <View style={styles.imgView}>
           {/*<Image style={styles.img} source={require('./Images/DO.png')} />*/}
           <Icon name='check' color='limegreen' size={25} />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.dodontText}>{i}</Text>
        </View>
        </View>);
    });
    const renderDONT = this.props.dont.map((i) => {
      return (<View key={i} style={styles.dodontView}>
        <View style={styles.imgView}>
          {/*<Image style={styles.img} source={require('./Images/DONT.png')} />*/}
          <Icon name='times' color='red' size={24} />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.dodontText}>{i}</Text>
        </View>
        </View>);
    });
    return (
      <View style={styles.container}>
          <HeadlineText mainColor={true} center={true}>Was gehört rein?</HeadlineText>
          {renderDO}
          <HeadlineText mainColor={true} center={true}>Was gehört nicht rein?</HeadlineText>
          {renderDONT}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  wrapper: {
    flex: .9,
    alignSelf: 'center',
  },
  dodontText: {
    color: '#585858',
    fontSize: 18,
  },
  dodontView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 20,
  },
  imgView: {
    flex: .1,
    alignSelf: 'center',
    marginRight: 20,
  },
  container: {
    flex: 1,
  },
});