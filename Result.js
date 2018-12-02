'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class Result extends Component {
  constructor(props) {
    super(props);
    // todo - need to check the properties that were passed in.
    // data passed in with "passProps" from the navigator
    console.log("Found prop");
    console.log(props.result);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          You have selected a house!
        </Text>
        <Image style={styles.thumb} source={{ uri: this.props.result.img_url }} />
        <Text style={styles.description}>
          {this.props.result.summary}
        </Text>
        {/*
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginBottom: 15,
  },
});
