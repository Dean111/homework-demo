import React,{Component} from 'react'
import {
  Text,
  View
} from 'react-native'

import {ZButton} from 'domain/component'
import {flexCenter} from 'basic'
import {Routes} from "domain/page"

export class Example2 extends Component {
  constructor(){
    super();
  }
  _onPress(){
    this.props.navigator.pop()
  }

  _onNext(){
    this.props.navigator.push(Routes.Example3)
  }
  render(){
    return(
      <View style={{flex:1,...flexCenter,backgroundColor:'yellow'}}>
        <Text>页面Example2</Text>
        <ZButton onPress={this._onPress.bind(this)}>返回到Example1</ZButton>
        <View style={{marginTop:10}}>
          <ZButton onPress={this._onNext.bind(this)}>Next</ZButton>
        </View>
      </View>
    )
  }
}
