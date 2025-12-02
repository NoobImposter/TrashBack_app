import { View, Text } from 'react-native'
import React from 'react'
import Pagesback from '../../Components/Pagesback'
import styels from '../../Components/styels'
const RecycleGuide = () => {
  return (
   <View style={styels.main}>
    <View style={styels.innermaincontainer}>
      <View style={{height:"8%"}}>
        <Pagesback textsinput={"Recycle Guide"} />
        </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>

<Text style={styels.headertext}>Comming Soon </Text>

        </View>
    </View>

   </View>
  )
}

export default RecycleGuide