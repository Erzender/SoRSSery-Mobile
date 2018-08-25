import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import colors from '../../Resources/colors'
import FluxElem from './FluxElem'
import FluxHeader from './FluxHeader'

export default class Flux extends Component {
  render() {
    return (
      <View style={styles.container} elevation={1}>
        <FlatList
          data={this.props.flux}
          renderItem={({item}) => <FluxElem item={item} />}
          style={styles.list}
          ListHeaderComponent={() => <FluxHeader title={this.props.selectedFlux} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.selected
  },
  list: {
  }
});
