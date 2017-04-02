import React,{Component} from 'react'
import {
  ScrollView,
  View,
  Text,
  Dimensions
} from 'react-native'


const nextListViewState = (N,L,H) => {
  return y => {
    const p = Math.floor(y/L)
    const q = Math.ceil((y+H)/L - 1)
    const H1 = p*L
    const H3 = (N - (q + 1))*L
    return {
      p,
      q,
      H1,
      H3
    }
  }
}


export class ListView1 extends Component{
  static defaultProps = {
    display:10 //默认同时渲染10张卡片
  }
  constructor(props){
    super()
    //滚动高度
    this.y = 0
    //所有的卡片的高度
    this.itemHeights = []

    //ID 计数器
    this.id_counter = 0

    const {height:H} = props

    const N = props.data.length
//    this.itemHeights = []
//    const nextStateFunc = nextListViewState(N,L,H)
//    this.nextStateFunc = nextStateFunc
    this.state = {
      data:[]//数据
      //...nextStateFunc(0)
    }
  }

  componentDidMount(){
    this.append(this.props.data)
  }

  //static id_counter = 0


  /**
   *向ListView中添加加载项
   */
   append(list){
     //{name:'ramroll',title:"teacher"}
     //分配id
     const nList = list.map((item,i) => {
       return {
         id:++this.id_counter,
         item
       }
     })

     const I = setInterval((() => {
       //渲染完成
       if (this.itemHeights[this.id_counter]) {
         clearInterval(I)
         console.log(this.itemHeights)
         this.setState({
            ...nextReplaceScrollstate(this.stata.data,this.itemHeights,this.props.height,this.props)
            //新卡片都渲染完成后解锁滚动替换方法
            scrollLock = false,
            newlyAdded:[]
         })
       }
     }).bind(this),1000)
     this.setState({
       //将卡片append在底部
       data:[...this.state.data,...nList],
       newlyAdded:nList,
       scrollLock:true
     })
   }

  _scroll(e){
    this.y = e.nativeEvent.contentOffset.y
    if(!this.state.scrollLock){
      this.setState({
        ...this.nextReplaceScrollstate(this.sstate.data,this.itemHeights,this.props.height,this.props.display,e.nativeEvent.contentOffset.y)
      })
    }
  }


  _itemLayout(i){
    return ({nativeEvent:{layout}}) => {
      this.itemHeights[i] = layout.height
      console.log(layout);
    }
  }

  _renderItem(item,i){
    return
    <View key={i} onLayout={this._itemLayout(i).bind(this)}>
    {
      this.props.renderItem(item,i)
    }
    </View>
  }

  render(){
    const {data} = this.props
    const {p,q,H1,H3} = this.state
    const visibleData = data.filter((item,i) => {
      if(i>=p&&i<=q){
        return true
      }
      return false
    })

    return(
      <ScrollView onScroll={this._scroll.bind(this)} scrollEventThrottle={15}>
          <View style={{height:H1}}></View>
          {
            visibleData.map(this._renderItem.bind(this))
          }
          <View style={{height:H3}}></View>
      </ScrollView>
    )
  }
}
