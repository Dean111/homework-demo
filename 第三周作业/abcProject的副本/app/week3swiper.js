import React,{Component} from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Platform
} from 'react-native'

export class Entry extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render(){
    const strArr = [
      'https://oj8icns2m.qnssl.com/o_1bckg28lnlknra412prnb3155sk.jpg-ndetail?_=',
      'https://oj8icns2m.qnssl.com/o_1bck9g72n5ju11ma5ft19mp69r40.jpg-ndetail?_=',
      'https://oj8icns2m.qnssl.com/o_1bck9c931luq13s2166312o1cii1v.jpg-ndetail?_=',
      'https://oj8icns2m.qnssl.com/o_1bck9c93115ubkq6172n1605172d1t.jpg-ndetail?_='
    ]
    return <View style={{flex : 1}}>


      <ScrollView
        pagingEnabled={true}
        horizontal={true}
        style={styles.renderView} >
        {strArr.map( (img, i) => {
          return <View key={i} >
            <Image source={{uri : img}} style={styles.scrollImg}  />
          </View>
        })}
      </ScrollView>
    </View>

  }
}

const styles = StyleSheet.create({
  renderView:{
    width:Dimensions.get('window').width,
    height:150
  },
  scrollImg:{
    width : Dimensions.get('window').width, height : 200
  }
})
