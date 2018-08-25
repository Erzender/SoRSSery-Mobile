import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../Resources/colors'

export default class FluxHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 50,
    maxHeight: 50,
    backgroundColor: colors.unselected,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.main_1,
    fontFamily: "OpenSans-Regular",
    fontSize: 18
  }
});
