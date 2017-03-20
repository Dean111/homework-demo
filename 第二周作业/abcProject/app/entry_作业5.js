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
  Button
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
        <Image style={{height:PicWidth,width:PicWidth}} source={{uri:'http://www.gaopinimages.com/imageview/133206189636.jpg'}} />
        <View style={{marginTop:30,height:40,width:Dimensions.get('window').width*(1-180/510),borderBottomWidth:2,borderBottomColor:'black',justifyContent:'center',alignItems:'center'}}>
          <TextInput
            style={{height: 40,textAlign:'center',fontSize:20,color:'#c2c2c2',fontWeight:'bold'}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={{marginTop:30,height:40,width:Dimensions.get('window').width*(1-180/510),borderBottomWidth:2,borderBottomColor:'black',justifyContent:'center',alignItems:'center'}}>
          <TextInput
            style={{height: 40,textAlign:'center',fontSize:20,fontWeight:'bold',color:'#c2c2c2'}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text1}
          />
        </View>
        <View style={{marginTop:30,width:160,height:40,backgroundColor:'#bdbdbd'}}>
          <Button
          title="登录"
          color="black"
          />
        </View>
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
  }
})
