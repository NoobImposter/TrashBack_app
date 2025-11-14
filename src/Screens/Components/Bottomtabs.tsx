import { Image } from 'react-native';
import React from 'react';

import MarketplaceIndex from '../Marketplace';
import HomeIndex from '../Home';
import RecycleIndex from '../Recycle';
import PointsIndex from '../Points/Index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Bottomtabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor:"#606c38",
        
        tabBarShowLabel: true,


        tabBarIcon: () => {
          let icon;

          if (route.name === "Home") {
            icon = require("../../Assets/Icons/BottomTabs/Homepage.png");
          } else if(route.name==="Marketplace"){
            icon=require("../../Assets/Icons/BottomTabs/Bag.png")
          }
           else if(route.name==="Points"){
            icon=require("../../Assets/Icons/BottomTabs/Points.png")
          }
           else if(route.name==="Recycle"){
            icon=require("../../Assets/Icons/BottomTabs/Recycle.png")
          }
          return (
            <Image
              source={icon}
              style={{
                width: 32,
                height: 32,
                resizeMode: "contain",
              }}
            />
          );
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeIndex} />
      <Tab.Screen name="Recycle" component={RecycleIndex} />
      <Tab.Screen name="Points" component={PointsIndex} />
      <Tab.Screen name="Marketplace" component={MarketplaceIndex} />
    </Tab.Navigator>
  );
};

export default Bottomtabs;
