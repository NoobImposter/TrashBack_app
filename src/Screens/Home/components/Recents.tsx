import { Dimensions,Image, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import recycleimage from  "../../../Images/Components/recycleactivityimage.png"
import styels from '../../Components/styels'
const sHieght=Dimensions.get("window").height
const swidth=Dimensions.get("window").width

const Recents = ({date,material}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff",margin:"1%"}}>
    
    <View style={{padding:"2%",flexDirection:"row", alignItems:"flex-start",
    width:swidth*0.95,height:sHieght*0.13, gap:"15",}}>
      <View style={{backgroundColor:"#ffffffff",borderRadius:"100%"
        ,height:"100%",width:"30%"}}>
            <Image source={recycleimage}  style={{resizeMode:"contain", width: "100%", height: "100%" }} />
        </View>
      <View style={{flexDirection:"column",height:"100%",width:"70%",justifyContent:"center"}}>
        <Text style={[styels.paragraphtext,{fontSize:30}]}>{material}</Text>
        <Text style={[styels.paragraphtext,{fontSize:18}]}>{date}</Text>
      </View>
      
    </View>
    </SafeAreaView>
  )
}

export default Recents