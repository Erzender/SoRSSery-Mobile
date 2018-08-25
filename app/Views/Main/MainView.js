import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../Resources/colors'
import Flux from '../Flux'

export default class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.nav[0] === 'flux' && <Flux />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
