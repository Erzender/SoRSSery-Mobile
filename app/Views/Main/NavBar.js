import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import colors from '../../Resources/colors'

type Props = {};
export default class NavBar extends Component<Props> {
  render() {
    return (
      <View style={styles.container} elevation={5}>
        <View style={styles.side}><FontAwesome5 name={'bars'} solid style={styles.text} /></View>
        <View style={styles.middle}><Text style={styles.text}>SoRSSery</Text></View>
        <View style={styles.side}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    backgroundColor: colors.brand,
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  side: {
    flex: 1,
    maxWidth: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.main_1,
    fontSize: 25,
    fontFamily: "OpenSans-Light"
  }
});
