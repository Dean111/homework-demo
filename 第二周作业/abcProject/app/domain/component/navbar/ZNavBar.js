import React,{Component} from 'react'
import {TouchableOpacity,Image} from 'react-native'
import {flexCenter} from 'basic'

export class ZNavBar extends Component {
  render(){
    return null
  }
}

class ZNavBarBackButton extends Component {
  constructor(){
    super()
    this._press = this._press.bind(this)
  }

  _press(){
    this.props.navigator.pop()
  }

  render(){
    const {route} = this.props
    return <TouchableOpacity onPress={this._press} style={{flex:1,...flexCenter,paddingLeft:10,paddingRight:10}}>
        <Image source={ route.Inverse ? require("./title-back-inv.png") : require("./title-back.png")} style={{height : 24, width : 24}} />
    </TouchableOpacity>
  }
}

ZNavBar.Back = ZNavBarBackButton
