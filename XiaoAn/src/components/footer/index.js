/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class XaFooter extends Component {
  render() {
    let data = [
      {'name': '法规', 'index': '', 'type': ''},
      {'name': '公告', 'index': '', 'type': ''},
      {'name': '信乎', 'index': '', 'type': ''},
      {'name': '个人中心', 'index': '', 'type': ''}
    ]
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        textAlign: 'center',
        justifyContent: 'space-between'
      }}>
        {data.map((item, index) => {
          return (
            <View key={index}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    height: 50,
                    backgroundColor: '#f6f6f6'
                  }}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
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
