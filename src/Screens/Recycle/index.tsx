import {ScrollView, View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import Boxshow from '../Home/components/Boxshow'
import metal from "../../Images/Recycle/metal.png"
import plastic from "../../Images/Recycle/plastic.png"
import paper from "../../Images/Recycle/paper.png"
import location from "../../Images/Recycle/location.png"

import { SafeAreaView } from 'react-native-safe-area-context'
import styels from '../Components/styels'
import Recents from '../Home/components/Recents'
const RecycleIndex = () => {
  const tabdata=[{image:plastic , text:"Plastic"},{image:metal , text:"Metal"},{image:paper , text:"Paper"}]
   const recentsdata = [
    { date: "19 Feb", material: "2.5kg .25 pts" },
    { date: "19 Feb ", material: "2.5kg .25 pts" },
    { date: "19 Feb ", material: "5kg . 30 pts" },
    { date: "19 Feb ", material: "2.5kg .25 pts" },
    { date: "19 Feb ", material: "2.5kg .25 pts" },
    { date: "19 Feb ", material: "5kg . 30 pts" }
  ];
  
  return (
    <SafeAreaView style={styels.main}>
      <View style={styels.innermaincontainer}>
        <View style={styles.headerBox}>
                <Text style={styels.headertext}>Recycle</Text>
                <Text style={[styels.paragraphtext,{flexDirection:"row"}]}>
                  <Image  style={{width:25,height:25, resizeMode:"contain"}} source={location} />
                  Fast Nuces Lahore</Text>
              </View>
      
     <View style={styles.rewardsCard}>
              <View style={{ width: "100%" ,padding:3,flexDirection:"row"}}>
                <Text style={[styels.headertext,{width:"60%"}]}>Total Recycled:</Text>
                <Text style={[styels.headertext,{width:"40%",flexDirection:"row",alignSelf:"center",fontSize:55}]}>100
                  <Text style={[styels.paragraphtext]}>kg</Text>
                </Text>
              </View>
      </View>
    
    <Boxshow  arrayofdata={tabdata}/>
    <View style={styles.recentsContainer}>
          <Text style={[styels.headertext,{fontSize:30}]}>Pickup history</Text>

          <ScrollView style={{ flex: 1 }}>
            {recentsdata.map((item, index) => (
                <Recents date={item.material} material={item.date} />
            ))}
          </ScrollView>
        </View>

    </View>

    </SafeAreaView>
  
  )
}

const styles=StyleSheet.create({
   headerBox: {
    width: "100%",
    marginBottom: "6%",
  },
  recentsContainer: {
    width:"100%",
    height:"50%",
    marginTop: 10,

  },
  rewardsCard: {
    width: "100%",
    backgroundColor: "#CAEBC2",
    height: "14.5%",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
})
export default RecycleIndex