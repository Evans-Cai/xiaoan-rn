import React, {Component} from 'react';
// import {Linking} from 'react-native'
import {WebView} from 'react-native-webview'

class XaHome extends Component {
  _injectJavaScript = () => {
    // var a = document.getElementsByTagName('a');
    // for (var i = 0; i < a.length; i++) {
    //   a[i].onclick = function (event) {
    //     window.postMessage(this.href);
    //     event.preventDefault();
    //   }
    // }
  }

  _onMessage = (e) => {
    // Linking.openURL(e.nativeEvent.data).catch(err => console.error('An error occurred', err))
  }

  render() {
    return (
      <WebView
        onMessage={this._onMessage}
        style={{flex: 1, height: 500}}
        source={{uri: 'https://wx.in-hope.cn'}}
        injectedJavaScript={this._injectJavaScript()}
      />
    )
  }
}

export default XaHome

