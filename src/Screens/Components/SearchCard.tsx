import { View, Text,Image,Dimensions,Pressable } from 'react-native'
import React from 'react'

import styels from './styels';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const SearchCard = ({item}) => {
  return (

    <Pressable onPress={()=>{console.log({item});
        }}>
        <View style={{height:250,width:SCREEN_WIDTH * 0.95,
          marginRight:10,justifyContent:"center",alignItems:"center",
          flexDirection:"column",backgroundColor:"white",borderRadius:20,padding:5}}>
          <View style={{height:"70%",width:"100%",justifyContent:"center",alignItems:"center",
            borderRadius:10
            ,backgroundColor:"#F8F8F8"}}>
            <FontAwesomeIcon icon={item.image}  size={70}/>
            
          </View>
          
          <View style={[{flexDirection:"column",width:"100%",padding:5}]}>
          <Text style={[styels.headertext,{fontSize:35,marginLeft:5}]}>{item.resturnantName}</Text>
          <Text style={[styels.paragraphtext,{fontSize:18,marginLeft:5}]}>{item.Location}     {item.Discount}%
          </Text>
          </View>
        </View>
        </Pressable>
  )
}

export default SearchCard