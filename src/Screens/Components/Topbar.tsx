import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styels from './styels'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAlignCenter, faCircleUser } from '@fortawesome/free-solid-svg-icons';
const Topbar = ({textsinput}) => {
  return (
    <SafeAreaView
    style={[styels.main,{padding:"0%"}]}>
    <View style={[styels.innermaincontainer,{padding:"0%",flexDirection:"row",justifyContent:"space-between"}]}>
      <Text style={[styels.headertext,{fontSize:45}]}>{textsinput}</Text>
      <Pressable onPress={()=>{console.log({textsinput});
      }}>
      <FontAwesomeIcon icon={faCircleUser} size={40}  color='#6ec173' style={{ alignSelf: "center" }} />
      </Pressable>
   
    </View>
    </SafeAreaView>
  )
}

export default Topbar