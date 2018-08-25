import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import colors from '../../Resources/colors'
import FluxElem from './FluxElem'
import FluxHeader from './FluxHeader'

export default class Flux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flux: [{title: "hello", description: "oh mama mia mama mia"}, {title: "pouet", description: "mama mia let me go"}],
      selectedFlux: "Actu"
    }
    this.getOrderedFlux.bind(this)
  }
  getOrderedFlux() {
    return (this.state.flux.map((item, key) => ({...item, key: key + ""})))
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.getOrderedFlux()}
          renderItem={({item}) => <FluxElem item={item} />}
          style={styles.list}
          ListHeaderComponent={() => <FluxHeader title={this.state.selectedFlux} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.selected
  },
  list: {
  }
});
