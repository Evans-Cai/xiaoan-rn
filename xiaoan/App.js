/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header} from 'react-native-elements'
import Main from './src/components/main/index'
import XaFooter from './src/components/footer/index'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
        <Header
          barStyle="light-content"
          placement="center"
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: '信公小安', style: {color: '#fff'}}}
          // rightComponent={}
        />
        <Main/>
        <View style={{height: 50, backgroundColor: '#f0f1f5'}}>
          <XaFooter/>
        </View>
        <View style={{height: 34, backgroundColor: 'steelblue'}}></View>
      </View>
    );
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
});
