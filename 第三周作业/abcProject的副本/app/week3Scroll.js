import React,{Component} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  nativeEvent,
  TouchableOpacity
} from 'react-native'

export class Entry extends Component {
  constructor() {
    super();
    this.state = {
      hideArrow:true
    }
  }

  _onPressButton(){
    this.setState({hideArrow:true})
    this._scrollView.scrollTo({x:0,y:0,animated:true});
  }

  render(){
    let isHidden = this.state.hideArrow
    return (
      <View>
        <ScrollView ref={component => this._scrollView = component}
        onScroll={(e)=>{e.nativeEvent.contentOffset.y>=0?this.setState({hideArrow:false}):""}}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        scrollEventThrottle={200}
        contentContainerStyle={styles.contentContainer}>
        {
          [1,2,3,4,5,6,7,8].map((n,i) => {
            return  <View key={i} style={{width:(Dimensions.get("window").width-20),marginTop:10,overflow:'hidden'}}>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
          })
        }
        </ScrollView>
        {
          isHidden?<View></View>:<TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.arrow_up}>
              <Image  source={{uri:'../../domain/page/uparrow.jpeg'}} style={styles.arrowImg} />
          </TouchableOpacity>
        }

      </View>
    )
  }
}
const styles = StyleSheet.create({
  contentContainer:{
    width:'100%',
    height:'300%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:-200
  },
  arrow_up:{
    flex:1,
    width:30,
    height:30,
    right:20,
    bottom:20,
    position:'absolute',
    overflow:'hidden',
    backgroundColor:'red'
  },
  arrowImg:{
    resizeMode: Image.resizeMode.cover,

    width:40,
    height:40
  }
})
