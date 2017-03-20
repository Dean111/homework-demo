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
      <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
          <View style={{marginLeft:35,marginRight:35,height:Dimensions.get('window').width-70,backgroundColor:'grey',flexWrap:'wrap',flexDirection:'row'}}>
            <View style={Style.box}>
                <Text style={Style.box_txt}>1</Text>
            </View>
            <View style={Style.box}>
                <Text style={Style.box_txt}>2</Text>
            </View>
            <View style={Style.box}>
                <Text style={Style.box_txt}>3</Text>
            </View>
            <View style={Style.box}>
                <Text style={Style.box_txt}>4</Text>
            </View>
            <View style={Style.box}>
                <Text style={Style.box_txt}>5</Text>
            </View>
            <View style={Style.box}>
                <Text style={Style.box_txt}>6</Text>
            </View>
            <View style={Style.box}>
                <Text style={Style.box_txt}>7</Text>
            </View>
            <View style={Style.box}>
                <Text style={Style.box_txt}>8</Text>
            </View>
            <View style={Style.box}>
                <Text style={Style.box_txt}>9</Text>
            </View>
          </View>
      </View>
    )
  }
}
//262   45
const Style = StyleSheet.create({
  box:{
    width:(Dimensions.get('window').width-70)/3,height:(Dimensions.get('window').width-70)/3,borderWidth:1,borderColor:'#797979',justifyContent:'center',alignItems:'center'
  },
  box_txt:{
    fontSize:42,
    color:'#021096'
  }
})
