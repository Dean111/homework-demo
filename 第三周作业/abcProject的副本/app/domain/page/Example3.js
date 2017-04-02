import React,{Component} from 'react'

import {View,Text} from 'react-native'

import {ZButton} from 'domain/component'
import {flexCenter} from 'basic'
import {Routes} from 'domain/page'

export class Example3 extends Component {
  _onPress(){
    //this.props.navigator.popN(2)
    /** 方法1 **/
    //拿到RouteStack
    //const routes = this.props.navigator.getCurrentRoutes()
    //Es6的语法  find方法传入一个prediction
    //const routeTo = routes.reverse().find(v => v.name === "Example1")
    //this.props.navigator.popToRoute(routeTo)
    /**方法2**/
    //const routes = this.props.navigator.getCurrentRoutes()
    //const routeTo = routes.find(v => v.name === "Example1")
    //this.props.navigator.resetTo(routeTo)
    /**方法3 -万不得已-**/
    //有性能问题
    this.props.navigator.immediatelyResetRouteStack([Routes.Example1,Routes.Example3])

    setTimeout((() => {
      this.props.navigator.pop()
    }).bind(this),10)
  }

  render(){
    return(
      <View style={{flex:1,...flexCenter,backgroundColor:"yellow"}}>
        <Text>页面Example3</Text>
        <ZButton onPress={this._onPress.bind(this)}>成功</ZButton>
      </View>
    )
  }
}
