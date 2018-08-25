import React, {Component} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import colors from '../../Resources/colors'

export default class Menu extends Component {
  render() {
    return (
      <Animated.View style={{...this.props.style, ...styles.container}} elevation={5}>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main_2,
    flexDirection: 'row'
  }
});
