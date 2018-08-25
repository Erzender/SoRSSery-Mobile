import React, {Component} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View, StatusBar} from 'react-native';

import colors from '../../Resources/colors'
import NavBar from './NavBar'
import MainView from './MainView'
import Menu from './Menu'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      margin: new Animated.Value(0),
      menu: false,
      nav: ["flux"]
    }
    this.toggleMenu.bind(this)
  }
  toggleMenu(){
    Animated.timing(
      this.state.margin,
      {
        toValue: this.state.menu?0:4,
        duration: 200
      }
    ).start();
    this.setState({menu: !this.state.menu})
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.brand_darkened}
          barStyle="light-content"
          />
        <NavBar toggleMenu={this.toggleMenu.bind(this)} />
        <View style={styles.menuScreen}>
          <Menu style={{flex: this.state.margin}} />
          <View style={{flex: 1, backgroundColor: '#000000', opacity: 0.5}} elevation={this.state.menu?5:0} />
          <MainView nav={this.state.nav} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.selected,
  },
  menuScreen: {
    flex: 1,
    flexDirection: "row",
  },
});
