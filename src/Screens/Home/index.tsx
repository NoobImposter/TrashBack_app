import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import Topbar from '../Components/Topbar'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeIndex = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={Styles.main} >

      <Text>HomeIndex</Text>
      <Text></Text>
    </View>
    </SafeAreaView>
  )
}

const Styles=StyleSheet.create({
  main:{flex:1,
    justifyContent:"center",
    flexDirection:"row",padding:"2%"}
})

export default HomeIndex