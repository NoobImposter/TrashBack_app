import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styels from '../Components/styels';
import Topbar from '../Components/Topbar';

const PointsIndex = () => {
  const [points, stepoints] = useState(0);
  const [cash, setcash] = useState(0);

  const cashcal = (cashinput) => {
    let c = cashinput * 0.8;
    setcash(c);
  };

  useEffect(() => {
    cashcal(points);
  }, [points]);

  return (
    <SafeAreaView style={styels.main}>
      <View style={styels.innermaincontainer}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexDirection:"column",flexGrow:1,padding: 3 }}
          showsVerticalScrollIndicator={true}
        >
          <View >
            <Topbar textsinput={"Recycle"} />
          </View>


          <View style={styles.rewardsCard}>
            <View
              style={{
                flex: 1,
                padding: 3,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={[styels.paragraphtext]}>Total Points:</Text>
                <Text style={[styels.headertext, { fontSize: 58 }]}>{points}</Text>
                <Text style={[styels.paragraphtext]}>Cash for points</Text>
              </View>

              <View style={{ width: "50%", alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                  style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
                  onPress={() => {
                    stepoints(100);
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#CAEBC2",
                      width: "80%",
                      paddingVertical: 10,
                      borderRadius: 15,
                      justifyContent: "center",
                      alignItems: "center",
                      elevation:10
                    }}
                  >
                    <Text style={[styels.paragraphtext, { fontSize: 30 }]}>
                      {cash} <Text>pkr</Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

            <Text style={styels.headertext}>Feratured Resturants</Text>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            >

              

              
              
             
            </ScrollView>


    
        
        
        
        
        
        
        
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  featuredresturanst:{},

  rewardsCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
    elevation: 3,
  },
});

export default PointsIndex;
