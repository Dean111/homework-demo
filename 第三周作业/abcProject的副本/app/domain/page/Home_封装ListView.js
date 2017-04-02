import React,{Component} from 'react'

import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet
} from 'react-native'

import {format_currency} from "basic"

import {COLOR_TITLE,COLOR_TEXT_LIGHT,COLOR_PRICE} from 'domain/def'
import {ListView} from "basic"
const CARD_HEIGHT = 268



/**
 *@param N 总共的卡片张数 1000
 *@param L 卡片的高度 50
 *@param H 滚动区域的高度 200
 *@param y 滚动的距离 500
 *@return {{p:*,q:*,H1:*,H3:*}}
 */
 const nextListViewState = (N,L,H) => {
   return y => {
     const p = Math.floor(y/L)//滚动的距离/卡片的高度  向下取整  （向上滑动  划过的卡片张数）
     const q = Math.ceil((y+H)/L-1)//划过的+可视区域的卡片张数
     const H1 = p*L//划过卡片的高度
     const H3 = (N - (q+1))*L//剩余卡片的高度
     return {
       p,
       q,
       H1,
       H3
     }
   }
 }


export class Home extends Component {
  constructor(){
    super()
    const course_gen = () => {
      return {
        image:"http://pic31.nipic.com/20130710/7092831_114938320000_2.jpg",
        title:"国内顶级大神教你写node.js",
        author:"张仁阳",
        description:"国内顶级大神教你写node.js 从零开始，循序渐进.....",
        price:Math.random()*10000 + 5000
      }
    }
    const courses=[]
    for (let i = 0; i < 1000; i++) {
      courses.push(course_gen())
    }
    this.state = {
      courses:courses
    }
  }


  _renderItem(course,i){
    return (
      <CourseCard {...course} key={i} />
    )
  }

  render(){
  //  let cours = this.state.courses
    return(
        <ListView
          itemHeight={268}
          height={Dimensions.get("window").height - 64}
          renderItem={this._renderItem}
          data={this.state.courses}/>
    )
  }
}

class CourseCard extends Component {
  render(){
    const {image,title,author,description,price} = this.props

    const W = Dimensions.get("window").width
    return <View style={courseStyle.cardContainer}>
      <Image
        source={{uri:image}}
        style={{width:W-20,height:(W-20)*0.3}}
      />
      <Title>{title}</Title>
      <Author label="讲师">{author}</Author>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </View>
  }
}
const Paragraph = {
  paddingLeft:20,
  paddingRight:20,
  marginTop:10
}

const courseStyle = StyleSheet.create({
  cardContainer:{
    marginBottom : 15, paddingBottom : 10, marginLeft : 10,
    marginRight : 10, borderRadius : 5, overflow : "hidden",
    borderWidth : 1, borderColor : "#c7c8c9",height:CARD_HEIGHT
  }
})

const Title = ({children}) => {
  return <Text style={{...Paragraph,color:COLOR_TITLE,fontSize:18,fontWeight:'bold'}}>{children}</Text>
}
const Author = ({label,children}) => {
  return <Text style={{...Paragraph,color:COLOR_TEXT_LIGHT}}>{label}:{children}</Text>
}
const Description = ({children}) => {
  return <Text style={{...Paragraph, color : COLOR_TEXT_LIGHT}}>{children}</Text>
}
const Price = ({children}) =>{
  return <Text style={{...Paragraph,color:COLOR_PRICE,fontSize:18,fontWeight:'bold'}}>￥{format_currency(children)}</Text>
}
