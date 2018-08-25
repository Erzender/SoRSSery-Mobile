import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../Resources/colors'

type Props = {};
export default class MainView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
