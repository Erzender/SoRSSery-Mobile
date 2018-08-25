import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../Resources/colors'

export default class FluxElem extends Component {
  render() {
    return (
      <View style={styles.container} elevation={1}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 50,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.selected
  }
});
