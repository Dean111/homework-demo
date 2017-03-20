import React,{Component} from 'react'
import {View ,ScrollView,Dimensions} from 'react-native'


/**
 *加载
 *1.有一个单独的方法append导入数据
 *2.将滚动替换的过程进行锁定 （因为有部分卡片的高度是不知道的）
 *3.将新卡片append在底部
 *4.新卡片都渲染完成之后解锁替换的方法，并执行一次
 */

 /**
  *滚动替换
  *已知所有的卡片的高度（假设卡片的高度不一致）,求解哪些卡片应该隐藏，哪些卡片应该显示
  *根据所有卡片的高度 数组itemHeights[],屏幕高H 默认加载卡片数量S 滚动距离y计算(p,q,H1,H3)
  *P:开始的卡片 第一个top小于（y-H）的卡片
  *q:结束的卡片 （q = p+S）
  *H1:顶部替换盒子的高度
  *H3:底部替换盒子的高度 sum(q+1,N)
  */


/**
 *N卡片数量
 *L卡片高度
 *H滚动区域高度
 *y滚动的距离
 */
const nextListViewState = (N,L,H) => {
 return y => {
   const p = Math.floor(y/H)
   const q = Math.ceil((y+H)/L -1)
   const H1 = p*L
   const H3 = (N - (q+1))*L
   return {
      p,
      q,
      H1,
      H3
   }
 }
}

const nextReplaceScrollstate = (N,cards,itemHeights,H,S,y) => {
  //p
  let sum = 0;
  let p = -1;

  for(let i = 0; i < itemHeights.length; i++) {
    if(sum > y - H) {
      p = cards[i].id
      break
    }
    sum += itemHeights[cards[i].id]
  }
  //q
  const q = p + S - 1;
  const lst1 = cards.filter(card => card.id<p).map(card => itemHeights[card.id])
  const H1 = lst1.length>0?lst1.reduce((h1,h2)=>h1+h2):0
  const lst2 = cards.filter(card => card.id>p).map(card => itemHeights[card.id])
  const H3 = lst2.length>0?lst2.reduce((h1,h2)=>h1+h2):0
  console.log(p,q,H1,H3);
  return {p,q,H1,H3}
}
//通用场景
//1.用户先渲染20项
//2.用户下拉列表
//每次加载新卡片的时候 记录卡片的高度

export class ListView extends Component {
  defaultProps = {
    displaySize:10 //默认同时渲染10张卡片
  }

  constructor(props){
    super()
    console.log('constructor');
    this.itemHeights = []//记录卡片的高度
    const {height:H,itemHeight:L} = props
    const N = props.data.length
    //const nextStateFunc = nextListViewState(N,L,H)
    //this.nextStateFunc = nextStateFunc
    this.state = {
      data:[],
      scrollLock:false
      //  ...nextStateFunc(0)
    }
  }

  componentDidMount(){
    this.append(this.props.data);
  }

  _itemLayout(i){
    return ({nativeEvent:{layout}}) => {
      console.log('进入计算高度的方法');
        this.itemHeights[i] = layout.height
        console.log(layout.height);
    }
  }

  _renderItem(item,id){
    return  (
        <View key={id} onLayout={this._itemLayout(id).bind(this)}>
          {this.props.renderItem(item.item,id)}
        </View>
    )
  }

 static id_counter = 0



 //向卡片中加载
  append(list){
    const nList = list.map((item,i) => {
      return {
        id:ListView.id_counter+1,
        item
      }
    })

    const I = setInterval((
      () => {
        console.log('进入方法',ListView.id_counter);
        for (var variable in this.itemHeights) {
          if (this.itemHeights.hasOwnProperty(variable)) {
            console.log('variable:'+variable);
            console.log('===>'+this.itemHeights[variable]);
          }
        }
        if (this.itemHeights[ListView.id_counter]) {
          clearInterval(I)
          console.log(this.itemHeights);
          this.setState({
            ...nextReplaceScrollstate(this.state.data,this.itemHeights,this.props.height,this.props.displaySize,0)
            //新卡片都渲染完成后  解锁滚动替换的方法
            ,scrollLock:false
          })
        }
      }
    ).bind(this),1000)

    //将滚动替换的过程进行锁定
    //this.scrollLock = true
    this.setState({
      data:[...this.state.data,...nList],
      newlyAdded:nList,
      scrollLock:true
    },(()=>{
      //this.setState({
        //新卡片都渲染完成后  解锁滚动替换的方法
      //  scrollLock:false
      //})
    }).bind(this))
  }

  _scroll(e){
    this.setState({
    //   ...this.nextStateFunc(e.nativeEvent.contentOffset.y)
    })
  }

  render(){
    const {data} = this.props
    const {p,q,H1,H3,newlyAdded,scrollLock}  = this.state
    /*const visibleCourses  = data.filter((item,i) => {
      if (i>=p&&i<=q) {
        return true
      }
      return false
    })
    console.log('visibleCourses',visibleCourses);*/
    return(
      <ScrollView onScroll={this._scroll.bind(this)} scrollEventThrottle={15}>
        {
          scrollLock &&
            newlyAdded.map(this._renderItem.bind(this))
        }
      </ScrollView>
    )
  }
}
