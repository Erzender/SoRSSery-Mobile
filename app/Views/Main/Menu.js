import React, {Component} from 'react';
import {Image, FlatList, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
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
        <FlatList
          data={this.props.topics}
          renderItem={({item}) =>
            <TouchableOpacity style={item.selected ? styles.topic_s : styles.topic} onPress={() => this.props.selectTopic(item.key)}>
              <Text style={[styles.text, {fontFamily: item.selected?"OpenSans-Bold":"OpenSans-Regular"}]}>{item.key}</Text>
              <Text style={[styles.text, styles.last]}>{item.latest}</Text>
            </TouchableOpacity>
          }
          style={styles.list}
          ListHeaderComponent={() =>
            <Text style={[styles.text, styles.header]}>Topics</Text>
          }
        />
        <View style={styles.version}>
          <Image source={require('../../Resources/sorssery.png')} style={styles.logo} />
          <Text style={styles.text}>SoRSSery 1.0</Text>
        </View>
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
    fontFamily: 'OpenSans-Regular',
    fontSize: 18
  },
  icon: {
    color: colors.main_1,
    fontSize: 20,
    marginRight: 5
  },
  header: {
    margin: 10,
    marginTop: 20,
    alignSelf: "center",
    fontFamily: 'OpenSans-ExtraBold',
  },
  topic: {
    backgroundColor: colors.unselected,
    flex: 1,
    maxHeight: 60,
    minHeight: 60,
    borderRadius: 10,
    padding: 10
  },
  topic_s: {
    backgroundColor: colors.selected,
    flex: 1,
    maxHeight: 60,
    minHeight: 60,
    padding: 10
  },
  last: {
    fontFamily: "OpenSans-Light",
    fontSize: 14
  },
  logo: {
    maxHeight: 50,
    maxWidth: 50,
    margin: 5
  },
  version: {
    flex: 1,
    maxHeight: 60,
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center"
  }
});
