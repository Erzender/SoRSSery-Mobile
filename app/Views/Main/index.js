import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import colors from '../../Resources/colors'
import NavBar from './NavBar'
import MainView from './MainView'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: ["flux"]
    }
  }
  shouldComponentUpdate(nextProps) {
      return false;
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.brand_darkened}
          barStyle="light-content"
        />
        <NavBar />
        <MainView nav={this.state.nav} />
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
