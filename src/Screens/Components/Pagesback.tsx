import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styels from './styels'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
const Pagesback = ({textsinput}) => {
    const Navigation=useNavigation()
  return (
    <SafeAreaView
    style={[styels.main,{padding:"0%"}]}>
    <View style={[styels.innermaincontainer,{padding:"3%",
flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}>
    <Pressable onPress={()=>{Navigation.goBack()}}>
     <FontAwesomeIcon icon={faArrowLeft} size={30}  color='#6ec173' style={{ alignSelf: "center" }} />
     </Pressable>
      <Text style={[styels.headertext,{fontSize:30}]}>{textsinput}</Text>
      <Pressable onPress={()=>{console.log({textsinput});
      }}>
      <FontAwesomeIcon icon={faCircleUser} size={40}  color='#6ec173' style={{ alignSelf: "center" }} />
      </Pressable>
   
    </View>
    </SafeAreaView>
  )
}

export default Pagesback