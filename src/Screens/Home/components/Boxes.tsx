import { View, Text,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import styels from '../../Components/styels'

import { useNavigation } from '@react-navigation/native'


const Boxes = ({images,texts,to}) => {
  const Navigation=useNavigation()
  return (
    <Pressable onPress={()=>{Navigation.navigate(to)
         }} style={{
           flex:1,
         alignItems:"center"
         ,justifyContent:"center"}}>
       <View style={{flexDirection:"column",
       width:"100%",height:"90%",padding:10,
         borderRadius:20,backgroundColor: "#F8F8F8"}}>
         <Image style={{height:"60%",width:"100%",resizeMode:"contain"}} source={images}>
         </Image>
         <Text style={[styels.paragraphtext,{width:"100%",fontSize:16,
           textAlign:"center"}]} >{texts}</Text>
         
   
       </View>
       </Pressable>
  )
}

const styles=StyleSheet.create({
     headerText: {
    fontFamily: "BoldFont",
    fontSize: 45,
  },
})
export default Boxes