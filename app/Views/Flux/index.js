import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import colors from '../../Resources/colors'

export default class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flux: [{title: "hello"}, {title: "pouet"}]
    }
    this.getOrderedFlux.bind(this)
  }
  getOrderedFlux() {
    return (this.state.flux.map((item, key) => ({key: key + "", title: item.title})))
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.getOrderedFlux()}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
