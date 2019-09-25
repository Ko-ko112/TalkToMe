import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

export default class WebExam extends Component {
  render() {
    return (
	<WebView
        source={{uri: 'http://www.prdmh.com/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%8B%E0%B8%B6%E0%B8%A1%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B9%89%E0%B8%B2-9-%E0%B8%84%E0%B8%B3%E0%B8%96%E0%B8%B2%E0%B8%A1-9q.html'}}
        style={{marginTop: 20}}
      />
    );
  }
}
