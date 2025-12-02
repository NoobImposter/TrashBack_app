import { View, Text } from 'react-native'
import React from 'react'
import HomeIndex from '../Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtabs from '../Components/Bottomtabs';
import leaderboard from '../Home/components/leaderboard';
import RecycleGuide from '../Home/components/RecycleGuide';
const Stack = createNativeStackNavigator();

function Rootstack() {
    return(
         <Stack.Navigator   screenOptions={{animation:"fade_from_bottom"}} >
        <Stack.Screen name='Maintabs' component={Bottomtabs} options={{headerShown:false,
        animation:"fade_from_bottom"
        }}/>
         <Stack.Screen name='leaderboard' component={leaderboard} options={{headerShown:false,
         animation:"fade_from_bottom"
        }}/> 
         <Stack.Screen name='RecycleGuide' component={RecycleGuide} options={{headerShown:false,
         animation:"fade_from_bottom"
        }}/> 
       
        

    </Stack.Navigator>
    )
   
}

export default Rootstack