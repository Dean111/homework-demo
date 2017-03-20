import React, {Component} from 'react'

import {
  View,
  Navigator,
  BackAndroid,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native'

import {UselessTextInputMultiline} from './TextInputCase.js'


export class Entry extends Component {

  constructor(){
    super()
    this.state = {
      text: '请输入用户名',
      text1:'请输入密码'
    }
  }

  render() {
  // initialRoute 设置第一张页面
  // renderScene 绘制场景
  //130 130 508
  const Width = Dimensions.get('window').width
  const PicWidth = Width*130/508;
    return(
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
      <ActivityIndicator
          style={[Style.centering, {transform: [{scale: 1.5}]}]}
          size="large"
        />
      </View>
    )
  }
}
//510 90 90
const Style = StyleSheet.create({
  box:{
    width:(Dimensions.get('window').width-70)/3,height:(Dimensions.get('window').width-70)/3,borderWidth:1,borderColor:'#797979',justifyContent:'center',alignItems:'center'
  },
  box_txt:{
    fontSize:42,
    color:'#021096'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
})
