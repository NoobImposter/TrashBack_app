import { View, Text,Image,Dimensions,Pressable } from 'react-native'
import React from 'react'
import testresturants from "../../../Images/Points/testresturamts.png"
import styels from '../../Components/styels';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const TopDeals = ({discount,points}) => {
  return (

    <Pressable onPress={()=>{console.log({discount});
        }}>
        <View style={{height:150,width:SCREEN_WIDTH * 0.23,
          marginRight:"3%"
          ,flexDirection:"column",backgroundColor:"white",borderRadius:20,padding:5}}>
          <View style={{height:"70%"}}>
            <Image source={testresturants} style={{width:"100%",height:"100%",borderRadius:20,
                resizeMode:"stretch",overflow:"hidden"}}></Image>
          </View>
          
          <View style={[{flexDirection:"row",width:"100%",padding:5}]}>
          <Text style={[styels.paragraphtext,{fontSize:12}]}>40%
          </Text>
          <Text style={[styels.paragraphtext,{fontSize:12,marginLeft:5}]}>450 Pts</Text>
          </View>
        </View>
        </Pressable>











  )
}

export default TopDeals