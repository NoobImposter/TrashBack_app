


import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar,Text, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
 

  return (
    <SafeAreaProvider>
      <Text>Hell9</Text>
     
   
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
