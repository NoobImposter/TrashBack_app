import { View, Text,ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import styels from '../../Components/styels'
import Pagesback from '../../Components/Pagesback'

import LeaderBoardpersonshow from './LeaderBoardpersonshow'


const recentsdata = [

  { name: "Ayesha Khan", points: 92 },
  { name: "Daniel Smith", points: 87 },
  { name: "Muhammad Ali", points: 79 },
  { name: "Sarah Johnson", points: 74 },
  { name: "Omar Faisal", points: 63 },
  { name: "Emily Carter", points: 58 },
  { name: "Hassan Raza", points: 54 },
  { name: "John Peterson", points: 49 },
  { name: "Fatima Noor", points: 42 },
  { name: "David Williams", points: 37 },
];


const sorted=[...recentsdata].sort((a,b)=>b.points-a.points).map((player,index)=>({
  ...player,
  rank:index+1
})
)

const leaderboard = () => {
  

  return (
    <View style={styels.main} >
      <View style={[styels.innermaincontainer]}>
        <View style={{height:"8%"}}>
        <Pagesback textsinput={"LeaderBoard 🏆"} />
         
        </View>
        <ScrollView style={{ flex: 1 }}>
             <View style={styles.rewardsCard}>
                    <View style={{ width: "60%" }}>
                      <Text style={styles.rewardsText}>You've earned
                        <Text style={{color:"#3A913F"}}> 1,800</Text> points🎉</Text>
                    </View>
                    <View style={{ width: "40%",backgroundColor:"#F8F8F8",padding:5 ,borderRadius:10}}>
                      <Text style={styles.rewardsText}>Your rank
                        <Text style={{color:"#3A913F"}}> #18</Text> </Text>
                    </View>
                 
                  </View>
          

            {sorted.map((item, index) => (
              <LeaderBoardpersonshow Name={item.name} key={index} points={item.points} rank={item.rank}/>
              
            ))}
          </ScrollView>
       
      </View>
      
    </View>
  )
}
const styles=StyleSheet.create({ rewardsCard: {
    width: "100%",
    backgroundColor: "#CAEBC2",
    height: "10.5%",
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
  }})




export default leaderboard