import { View, Text,Image,Dimensions,Pressable } from 'react-native'
import React from 'react'
import testresturants from "../../../Images/Points/testresturamts.png"
import styels from '../../Components/styels';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ScreenHIw=Dimensions.get("screen").height
const Allresturants = () => {
  return (
    <Pressable onPress={()=>{console.log("resturanyts");
        }}>
        <View style={{width:"100%",
          marginRight:"3%"
          ,flexDirection:"column",backgroundColor:"white",borderRadius:20,padding:5}}>
          <View style={{height:"70%",padding:5}}>
            <Image source={testresturants} style={{width:"100%",height:"100%",borderRadius:20,resizeMode:"stretch",overflow:"hidden"}}></Image>
          </View>
         
            <Text style={styels.paragraphtext} >Resturant Name</Text>
          <View style={[{flexDirection:"row",padding:5}]}>
          <Text style={[styels.paragraphtext,{fontSize:15}]}>40%
          </Text>
          <Text>.</Text>
          <Text style={[styels.paragraphtext,{fontSize:15,marginLeft:25}]}>450 Pts</Text>
          </View>   
          
        </View>
        </Pressable>
  )
}

export default Allresturants