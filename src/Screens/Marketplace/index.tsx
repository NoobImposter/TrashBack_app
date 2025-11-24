import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styels from '../Components/styels'
import Topbar from '../Components/Topbar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass,faLocationCrosshairs,faMobile,faBook } from '@fortawesome/free-solid-svg-icons';
import { FlatList } from 'react-native'
import Ad from './Components/Ad'
import Categories from './Components/Categories'




const Maketplaceindex = () => {
  const [search, setSearch] = useState('');
  const Sections = [
  { id: '1', title: 'Categories', items: [{categoryname:"Phones",image:faMobile},
    {categoryname:"Books",image:faBook},
    {categoryname:"Phones",image:faMobile},
    {categoryname:"Phones",image:faMobile},



  ], component: Ad },
  { id: '2', title: 'Mobile Phones', items: Array.from({ length: 6 }, (_, i) => i),component: Ad   },
  { id: '3', title: 'Third Section', items: Array.from({ length:  6}, (_, i) => i), component: Ad },
  
];
  

  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
      <SafeAreaView style={styels.main}>
        <View style={styels.innermaincontainer}>

          <View style={{ height: "8%" }}>
            <Topbar textsinput={"MarketPlace"} />
          </View>
          <View style={styles.headerBox}>
                          <Text style={[styels.paragraphtext,{flexDirection:"row"}]}>
                            {/* <Image  style={{width:25,height:25, resizeMode:"contain"}} source={location} /> */}
                            <FontAwesomeIcon icon={faLocationCrosshairs} />
                            Fast Nuces Lahore</Text>
                        </View>
        
            <View style={styles.searchBox}>

              <TextInput
                placeholder="Search nearby listings"
                style={styles.searchInput}
                value={search}
                onChangeText={setSearch}
              />
                 <FontAwesomeIcon size={25} style={{right:25,top:10}} icon={faMagnifyingGlass} />
            </View>

            <ScrollView style={{flex:1}} nestedScrollEnabled>
              {
                Sections.map((section)=>{
                  const Rendercomponent=section.component
                  return(
                    <View key={section.id}>
                      <Text style={styels.headertext}>{section.title}</Text>
                      <FlatList
                    data={section.items}
                    renderItem={({item})=><Rendercomponent item={item}/> }
                    keyExtractor={(item,index)=>index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ></FlatList>
                    </View>

                    
                  )
                  

                })
              }

{/* 
              <FlatList>

              </FlatList> */}

            </ScrollView>

          

          
        </View>
      </SafeAreaView>
    // </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  headerBox: {
    width: "100%",
    marginBottom: "1%",
  },
  searchBox: {
    margin:5,
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 4,
  },
  searchInput: {
    flex:1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 16,
  }
})

export default Maketplaceindex
