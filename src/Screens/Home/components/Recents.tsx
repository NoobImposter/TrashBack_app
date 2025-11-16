import { Dimensions,Image, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import recycleimage from  "../../../Assets/Icons/BottomTabs/Recycle.png"

const sHieght=Dimensions.get("window").height
const swidth=Dimensions.get("window").width

const Recents = ({date,material}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff",margin:"1%"}}>
    
    <View style={{padding:"2%",flexDirection:"row", alignItems:"center",
    width:swidth*0.95,height:sHieght*0.1, gap:"15"}}>
      <View style={{backgroundColor:"#ffffffff",borderRadius:"100%",
        justifyContent:"center",alignItems:"center"
        ,height:"100%",width:"20%"}}>
            <Image source={recycleimage}  style={{ width: 50, height: 50 }} />
        </View>
      <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:23 ,fontWeight:"bold"}}>{material} was collected</Text>
        <Text style={{fontSize:15 }}>{date}</Text>
      </View>
      
    </View>
    </SafeAreaView>
  )
}

export default Recents