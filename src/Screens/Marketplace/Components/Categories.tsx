import { View, Text,Image,Dimensions,Pressable } from 'react-native'
import React from 'react'
import testresturants from "../../../Images/Points/testresturamts.png"
import styels from '../../Components/styels';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Categories = ({item}) => {
  return (

    <Pressable onPress={()=>{console.log({item});
        }}>
        <View style={{height:210,width:SCREEN_WIDTH * 0.55,
          marginRight:10,justifyContent:"center",alignItems:"center",
          flexDirection:"column",backgroundColor:"white",borderRadius:20,padding:5}}>
          <View style={{height:"70%",width:"100%",justifyContent:"center",alignItems:"center",
            borderRadius:10
            ,backgroundColor:"#F8F8F8"}}>
            <FontAwesomeIcon icon={item.image}  size={70}/>
            
          </View>
          
          <View style={[{flexDirection:"column",width:"100%",padding:5}]}>
          <Text style={[styels.headertext,{fontSize:25,marginLeft:5}]}>Rs {item.price}</Text>
          <Text style={[styels.paragraphtext,{fontSize:15,marginLeft:5}]}>{item.categoryname}</Text>
          <Text style={[styels.paragraphtext,{fontSize:15,marginLeft:5}]}>{item.date}</Text>
          </View>
        </View>
        </Pressable>
  )
}

export default Categories