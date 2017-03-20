import React, {Component} from 'react'

import {
  View,
  Navigator,
  BackAndroid,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'

export class Entry extends Component {

  constructor(){
    super()
  }

  render() {
  // initialRoute 设置第一张页面
  // renderScene 绘制场景
    return(
      <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',backgroundColor:"#ccc"}}>
          <View style={Style.header}>
            <Text style={Style.header_txt}>标题栏</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Image style={{width:164,height:145}} source={{uri:"http://www.gaopinimages.com/imageview/133206189636.jpg"}} />
          </View>
          <View style={Style.footer}>
            <Text style={Style.footer_txt1}>探索</Text>
            <Text style={Style.footer_txt}>学习</Text>
            <Text style={Style.footer_text3}>进步</Text>
          </View>
      </View>
    )
  }
}

const Style = StyleSheet.create({
  header:{
    marginTop:20,width:Dimensions.get("window").width,height:44,backgroundColor:'#1a9bfc',alignItems:'center',justifyContent:'center'
  },
  header_txt:{
    flex:1,fontSize:24,fontWeight:'bold',color:"white",marginTop:10
  },
  //164,145
  footer:{
    width:Dimensions.get("window").width,height:48,backgroundColor:'#fff',alignItems:'center',justifyContent:'space-between',flexDirection:'row',borderWidth:1,borderColor:'#a2a2a2'
  },
  footer_txt:{
    fontSize:24,fontWeight:'bold',color:"black"
  },
  footer_txt1:{
    fontSize:24,fontWeight:'bold',color:"black",marginLeft:70
  },
  footer_text3:{
    fontSize:24,fontWeight:'bold',color:"black",marginRight:70
  }
})
