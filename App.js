
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {View,StatusBar} from 'react-native'

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={{flex:1}}>
        <WebView 
          source={{ uri: 'https://rainyday-client.herokuapp.com/' }}
          // source={{ uri: 'http://192.168.0.103:8080' }}
          style={{flex:1}}
        />

        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#20262d" translucent={false} />
      </View>  
    )
  }
}

export default App; 