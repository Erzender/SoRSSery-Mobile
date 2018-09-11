import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';

import colors from '../../Resources/colors'

export default class FluxElem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlInput: '',
      loadUrl: this.loadUrl.bind(this)
    };
  }
  loadUrl() {
    console.log(this.state.urlInput);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Load OPML file from url :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(urlInput) => this.setState({urlInput})}
          value={this.state.urlInput}
          placeholder={"OPML file URL"}
          placeholderTextColor={colors.main_1_altered}
          />
        <Button title="Load" color={colors.brand} onPress={this.state.loadUrl} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 50,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.selected,
    padding: 10
  },
  input: {
    maxHeight: 50,
    flex: 1,
    borderColor: colors.main_1_altered,
    borderBottomWidth: 1,
    marginBottom: 10,
    color: colors.main_1
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    color: colors.main_1
  }
});
