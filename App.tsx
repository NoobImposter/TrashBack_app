import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Bottomtabs from './src/Screens/Components/Bottomtabs';

export default function App() {
  return (
    <SafeAreaProvider >
      <NavigationContainer>
        <Bottomtabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
