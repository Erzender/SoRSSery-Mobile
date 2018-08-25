import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import colors from '../../Resources/colors'

export default class FluxElem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
          <Text style={styles.description}>{this.props.item.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 80,
    maxHeight: 80,
    backgroundColor: colors.main_2,
    borderRadius: 5,
    marginBottom: 1,
    overflow: "hidden"
  },
  title: {
    backgroundColor: colors.brand,
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    color: colors.main_1,
    fontFamily: "OpenSans-Bold"
  },
  description: {
    flex: 1,
    color: colors.main_1,
    fontFamily: "OpenSans-Regular",
    padding: 5,
    paddingLeft: 20
  },
  content: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    maxWidth: 80,
    maxHeight: 50,
    flex: 1,
    margin: 5
  }
});
