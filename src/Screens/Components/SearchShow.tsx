import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import SearchCard from './SearchCard'

const SearchShow = (resutrants) => {
  return (
     <FlatList
                    data={resutrants}
                    renderItem={({item})=><SearchCard item={item}/>} 
                    keyExtractor={(item,index)=>index.toString()}
                   
                    showsHorizontalScrollIndicator={false}
></FlatList>
  )
}

export default SearchShow