import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Boxes from './Boxes' 

const Boxshow = ({arrayofdata}) => {
  return (
   <View style={styles.scheduleBox}>
          {arrayofdata.map((index,keys)=>(
            <Boxes key={keys} texts={index.text} images={index.image}  />
          ))}
        </View>
  )
}


const styles=StyleSheet.create({
    scheduleBox: {
    width: "100%",
  flexDirection:"row",
    padding: 3,
    height:"20%",
    gap:"5%",
    marginBottom: 10,

  },
})

export default Boxshow