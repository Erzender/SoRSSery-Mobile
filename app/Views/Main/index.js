import React, {Component} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View, StatusBar} from 'react-native';
import moment from 'moment'

import colors from '../../Resources/colors'
import NavBar from './NavBar'
import Flux from '../Flux'
import Menu from './Menu'
import Settings from '../Settings'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      margin: new Animated.Value(-200),
      menu: false,
      settings: false,
      selectedFlux: "Actu",
      flux: {
        "Actu": [{title: "hello", description: "oh mama mia mama mia", date: "2018-07-25T20:06:28+02:00"}, {title: "pouet", description: "mama mia let me go", date: "2018-07-25T20:06:28+02:00"}],
        "Test": []
      }
    }
    this.getOrderedFlux.bind(this)
    this.getTopics.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.settings !== this.state.settings || nextState.menu !== this.state.menu
  }
  toggleMenu() {
    Animated.timing(
      this.state.margin,
      {
        toValue: this.state.menu?-200:0,
        duration: 200
      }
    ).start();
    this.setState({menu: !this.state.menu})
  }
  toggleSettings() {
    this.setState({settings: !this.state.settings})
    this.toggleMenu()
  }
  closeSettings() {
    this.setState({settings: false})
  }
  getTopics() {
    var topics = []
    for (topic in this.state.flux) {
      topics.push({key: topic, latest: this.getOrderedFlux(topic)[0] ? moment(this.getOrderedFlux(topic)[0].date).fromNow():"none"})
    }
    return topics
  }
  getOrderedFlux(topic) {
    var selectedTopic = topic || this.state.selectedFlux
    return (this.state.flux[selectedTopic].map((item, key) => ({...item, key: key + ""})).sort((a, b) => new Date(b.date) - new Date(a.date)))
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.brand_darkened}
          barStyle="light-content"
          />
        <NavBar toggleMenu={this.state.settings?this.closeSettings.bind(this):this.toggleMenu.bind(this)} settings={this.state.settings} />
        <Flux flux={this.getOrderedFlux()} selectedFlux={this.state.selectedFlux} />
        {this.state.settings && <Settings />}
        <View style={styles.menuScreen}>
          <Animated.View style={[styles.menu, {marginLeft: this.state.margin}]} elevation={4}>
            <Menu openSettings={this.toggleSettings.bind(this)} topics={this.getTopics()} />
          </Animated.View>
          <View style={{flex: 1, backgroundColor: '#000000', opacity: 0.5}} elevation={this.state.menu?4:0} />
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
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menu: {
    width: 200,
    backgroundColor: colors.main_2
  }
});
