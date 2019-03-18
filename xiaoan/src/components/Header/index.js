import React, {Component} from 'react';
import {Header} from 'react-native-elements'

class XaHeader extends Component {
  render() {
    let data = {}
    return (
      <Header
        barStyle="light-content"
        placement="center"
        backgroundColor="#ffb148"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: '信公小安', style: {color: '#fff'}}}
        rightComponent={{}}
      />
    )
  }
}

export default XaHeader
