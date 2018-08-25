import React, {Component} from 'react';
import {TouchableOpacity, Animated, StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import colors from '../../Resources/colors'

export default class Menu extends Component {
  render() {
    return (
      <View style={{...this.props.style, ...styles.container}}>
        <TouchableOpacity style={styles.settingsButton} onPress={this.props.openSettings}>
          <FontAwesome5 name={'cog'} solid style={styles.icon} />
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsButton: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.selected,
    minHeight: 40,
    maxHeight: 50,
    minHeight: 50,
    flexDirection: 'row'
  },
  text: {
    color: colors.main_1,
    fontFamily: 'OpenSans-Regular'
  },
  icon: {
    color: colors.main_1,
    fontSize: 20,
    marginRight: 5
  }
});
