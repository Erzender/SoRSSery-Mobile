import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import colors from '../../Resources/colors'
import NavBar from './NavBar'
import MainView from './MainView'

type Props = {};
export default class Main extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      nav: ["main"]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.brand_darkened}
          barStyle="light-content"
        />
        <NavBar />
        <MainView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.selected,
  }
});
