import React,{Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {ZButton} from 'domain/component'
import {flexCenter} from 'basic'
import {Routes} from "domain/page"


export class Example1 extends Component {
  constructor() {
    super();
  }

  _onPress(){
      this.props.navigator.push(Routes.Example2);
  }

  render(){
    return(
      <View style={{flex:1,...flexCenter,backgroundColor:'lightgrey'}}>
          <Text>页面Example1</Text>
          <ZButton onPress={this._onPress.bind(this)}>跳转至Example2</ZButton>
      </View>
    )
  }
}
