import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Bottomtabs from './src/Screens/Components/Bottomtabs';
import Rootstack from './src/Screens/Stacks/Rootstack';
export default function App() {
  return (
    <SafeAreaProvider >
      <NavigationContainer>
        <Rootstack />
        
        {/* <Bottomtabs /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
