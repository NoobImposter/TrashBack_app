import { Dimensions,Image, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import recycleimage from "../../../Images/Components/recycleactivityimage.png"
import styels from '../../Components/styels'
const sHieght=Dimensions.get("window").height
const swidth=Dimensions.get("window").width

const LeaderBoardpersonshow = ({Name,points,image,rank}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff",margin:"1%"}}>
    
    <View style={{padding:"2%",flexDirection:"row", alignItems:"center",
    width:swidth*0.95,height:sHieght*0.11, gap:"15",
    backgroundColor:"#F8F8F8",borderRadius:25,
    justifyContent:"space-evenly"
    }}>
      <View style={{borderRadius:50,
      padding:5
        ,height:"100%",width:"20%"}}>
            <Image source={recycleimage}  style={{resizeMode:"contain",
                position:"absolute", width: "100%", height: "100%",borderRadius:100 }} />
        </View>
      <View style={{flexDirection:"column",justifyContent:"center"}}>
        <Text style={[styels.paragraphtext,{fontSize:22}]}>{Name}</Text>
        <Text style={[styels.paragraphtext,{fontSize:15}]}>Pts {points}.</Text>
      </View>
      <View style={{padding:5,borderWidth:0.5,borderRadius:100,borderColor:"black"}}>
        <Text>0{rank}</Text>
      </View>
      
    </View>
    </SafeAreaView>
  )
}

export default LeaderBoardpersonshow