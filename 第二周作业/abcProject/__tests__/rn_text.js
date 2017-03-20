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
-----
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
----
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
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'grey'}}>
          <View style={{justifyContent:'space-around',flexDirection:'column',alignItems:'center',backgroundColor:'white',height:Dimensions.get('window').width*0.8*0.7,marginLeft:Dimensions.get('window').width*0.1,marginRight:Dimensions.get('window').width*0.1,width:Dimensions.get('window').width*0.8,borderRadius:16,borderWidth:1,borderColor:'#a9a9a9',overflow:'hidden'}}>
            <View style={{marginTop:Dimensions.get('window').width*0.8*0.7*0.29}}>
              <Text style={{fontSize:28,fontWeight:'bold'}}>请输入六位交易密码</Text>
            </View>
            <View style={{flexDirection:'row',flexWrap:'nowrap',paddingTop:Dimensions.get('window').width*0.8*0.7*0.17,paddingBottom:Dimensions.get('window').width*0.8*0.7*0.17,marginBottom:Dimensions.get('window').width*0.8*0.7*0.02}}>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
            </View>
          </View>
      </View>
    )
  }
}
const Style = StyleSheet.create({
  box:{
    width:(Dimensions.get('window').width-70)/3,height:(Dimensions.get('window').width-70)/3,borderWidth:1,borderColor:'#797979',justifyContent:'center',alignItems:'center'
  },
  box_txt:{
    fontSize:42,
    color:'#021096'
  }
})
--------
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
