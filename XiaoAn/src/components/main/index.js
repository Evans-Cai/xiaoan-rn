/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {WebView} from "react-native-webview";


const instructions = Platform.select({
  ios: '\n\n\n\n\n牛逼啊谢家伟',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Main extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'skyblue'}}>
        <WebView
          source={{uri: "https://wx.in-hope.cn"}}
          style={{marginTop: 20, flex: 1}}
          onLoadProgress={e => console.log(e.nativeEvent.progress)}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
