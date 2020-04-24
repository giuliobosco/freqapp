import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NetInfo from '@react-native-community/netinfo';

export default class App extends Component {
  state = {
    isConnected: null,
  };

  componentDidMount() {
    NetInfo.fetch().then(state => {
      this.setState({isConnected: state.isConnected});
    });
  }

  render() {
    if (this.state.isConnected) {
      return (
        <View style={styles.container}>
          <Text>Connected</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Not Connected</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})