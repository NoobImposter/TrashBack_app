import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import Topbar from '../Components/Topbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Recents from './components/Recents';
import { ScrollView } from 'react-native';
import plantimage from "../../Images/Homescreen/plantimage.png";
import gifticon from "../../Images/Homescreen/gifticn.png"

import recycleicon from "../../Images/Homescreen/recycleicn.png"
import calendericon from "../../Images/Homescreen/calendericn.png"
import styels from '../Components/styels';

// import Boxes from './components/Boxes';
import Boxshow from './components/Boxshow';

// const Boxes=({images,texts})=>{
//   return(
//     <Pressable onPress={()=>{console.log("hello");
//       }} style={{
//         flex:1,
//       alignItems:"center"
//       ,justifyContent:"center"}}>
//     <View style={{flexDirection:"column",
//     width:"100%",height:"90%",padding:10,
//       borderRadius:20,backgroundColor: "#F8F8F8"}}>
//       <Image style={{height:"50%",width:"100%",resizeMode:"contain"}} source={images}>
//       </Image>
//       <Text style={[styles.headerText,{width:"100%",fontSize:16,
//         textAlign:"center"}]} >{texts}</Text>
      

//     </View>
//     </Pressable>
//   )
// }


const HomeIndex = () => {
  const [weeklyrecycleperecent,setweeklypercent]=useState(80)
  const [username,setusername]=useState("Ali")
  const [Points,setpoints]=useState("2,450")
  
  const recentsdata = [
    { date: "19 Feb 2025", material: "Paper" },
    { date: "19 Feb 2025", material: "Paper" },
    { date: "19 Feb 2025", material: "Steel" },
    { date: "19 Feb 2025", material: "Paper" },
    { date: "19 Feb 2025", material: "Paper" },
    { date: "19 Feb 2025", material: "Steel" }
  ];
  const tabdat=[{image:calendericon,text:"Schedule Pickup"},{image:recycleicon,text:"Recycle Guide"},{image:gifticon,text:"Reedeem Points"}]

  return (
    <SafeAreaView style={styels.main}>
      <View style={styels.innermaincontainer}>

        {/* Header */}
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Hi, {username} 👋</Text>
          <Text style={styles.pointsText}>{Points} pts</Text>
        </View>

        {/* Rewards Card */}
        <View style={styles.rewardsCard}>
          <View style={{ width: "60%" }}>
            <Text style={styles.rewardsText}>Recycle & Earn Rewards</Text>
          </View>

          <Image
            source={plantimage}
            style={styles.plantImage}
          />
        </View>

        {/* Schedule Pickup Section */}
        {/* <View style={styles.scheduleBox}>
          {tabdat.map((index,keys)=>(
            <Boxes key={keys} texts={index.text} images={index.image}  />
          ))}
        </View> */}

        <Boxshow arrayofdata={tabdat} />




        {/* Weekly Goal */}
        <View style={styles.goalBox}>
          <Text style={styles.sectionHeading}>Your Weekly Recycling Goal</Text>
          <View style={{width:"95%",height:"20%",marginTop:"5%",borderRadius:50,marginBottom:"5%",backgroundColor:"white"}}>
            <View  style={[styles.line,{width:`${weeklyrecycleperecent}%`}]}>
            </View>

          </View>
          <Text style={styles.sectionHeading}>{weeklyrecycleperecent} % complete</Text>
        </View>

        {/* Recents */}
        <View style={styles.recentsContainer}>
          <Text style={[styles.sectionHeading,{fontSize:30}]}>Recent Activity</Text>

          <ScrollView style={{ flex: 1 }}>
            {recentsdata.map((item, index) => (
                <Recents date={item.date} material={item.material} />
            ))}
          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: "3%",
    backgroundColor: "white"
  },

  headerBox: {
    width: "100%",
    marginBottom: "6%",
  },
  line:{height:"100%",borderRadius:50,backgroundColor:"#6EC173"},
  headerText: {
    fontFamily: "BoldFont",
    fontSize: 45,
  },
  pointsText: {
    fontFamily: "BoldFont",
    fontSize: 35,
    color: "#3A913F",
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
  rewardsText: {
    fontFamily: "BoldFont",
    fontSize: 28,
    flexWrap: "wrap",
  },

  plantImage: {
    width: "55%",
    height: "150%",
    overflow:"visible",
    resizeMode:"center"
  },

  scheduleBox: {
    width: "100%",
  flexDirection:"row",
    padding: 3,
    height:"20%",
    gap:"5%",
    marginBottom: 10,

  },

  goalBox: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    padding: 15,
    height:"18%",
    borderRadius: 12,
    marginBottom: 15,
  },

  sectionHeading: {
    fontFamily: "BoldFont",
    fontSize: 22,
  },

  sectionSub: {
    fontSize: 16,
    opacity: 0.7,
  },

  recentsContainer: {
    width:"100%",
    height:"28%",
    marginTop: 10,

  },
});

export default HomeIndex;
