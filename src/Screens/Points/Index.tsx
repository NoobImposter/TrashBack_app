import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView,Pressable, Platform,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styels from '../Components/styels'
import Topbar from '../Components/Topbar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass,faCookie,faMobile,faBook,faShirt
  ,faCouch,faCarBattery,faUtensils
  } from '@fortawesome/free-solid-svg-icons';
import { FlatList } from 'react-native'
import Ad from '../Marketplace/Components/Ad'
import Resturants from './Components/Resturants'

import SearchCard from '../Components/SearchCard'


const PointsIndex = () => {
  const [search, setSearch] = useState('');
  const Sections = [
  { id: '1',
    
    title: 'Categories', items: [
    {categoryname:"Dinning",image:faUtensils,},
    {categoryname:"Clothes",image:faShirt},
    {categoryname:"Deserts",image:faCookie},
    {categoryname:"Home",image:faCouch},], component: Ad },
      { id: '2', title: 'Featured', items:  [{resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
    {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200},
    {resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
    {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200},
    {resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
    {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200}
  
  
  ],component: Resturants   },
  { id: '3', title: 'Latest', items:  [{resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
    {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200},
    {resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
    {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200},
    {resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
    {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200}
  
  
  ],component: Resturants   },
  
  
];
  const resutrants=[{resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200},
    {resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
    {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200},
    {resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
    {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200}
  ]


  const [points,setpoints]=useState(2000)
  const [amount,setamount]=useState(0)

  const Consvertpkrto=(amount)=>{
    

    let newamount=amount*0.80
    setamount(newamount)
  }
  useEffect(()=>{
    Consvertpkrto(points)
  },)

  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
      <SafeAreaView style={styels.main}>
        <View style={styels.innermaincontainer}>

          <View style={{ height: "8%" }}>
            <Topbar textsinput={"Points"} />
          </View>
         
            <View style={styles.searchBox}>

              <TextInput
                placeholder="Search"
                style={styles.searchInput}
                value={search}
                onChangeText={setSearch}
              />
                 <FontAwesomeIcon size={25} style={{right:25,top:10}} icon={faMagnifyingGlass} />
            </View>
           
            

            <ScrollView style={{flex:1}} nestedScrollEnabled>
                <View style={styles.rewardsCard}>
                     <View style={{ width: "60%" }}>
                                           <Text style={styles.rewardsText}>You've earned
                                             <Text style={{color:"#3A913F"}}> 1,800</Text> points🎉</Text>
                                         </View>
                                       
                                         <View style={{ width: "40%",backgroundColor:"#F8F8F8",padding:5 ,borderRadius:10}}>
                                            <Pressable onPress={()=>{console.log("Helloz");
                                         }}>
                                             <Text style={[styles.rewardsText,{color:"#3A913F"}]}>Rs {amount}</Text> 
                                               <Text style={[styles.rewardsText,]}>Earned</Text> 
                                          </Pressable>
                                    
                                         </View>
                                  
            
                     
               </View>
              {
                Sections.map((section)=>{
                  const Rendercomponent=section.component
                  return(
                    <View style={{marginTop:"4%"}} key={section.id}>
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
              <Text style={styels.headertext}>All Deals</Text>
              <FlatList
                    data={resutrants}
                    renderItem={({item})=>< SearchCard item={item}/> }
                    keyExtractor={(item,index)=>index.toString()}
                    
                    showsHorizontalScrollIndicator={false}
                    ></FlatList>
              
              
              


            </ScrollView>

          

          
        </View>
      </SafeAreaView>
    // </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  rewardsCard: {
    width: "100%",
    backgroundColor: "#CAEBC2",
    padding:15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    paddingHorizontal: 20,
    marginBottom: 15,
    marginTop:5
  },
  rewardsText: {
    fontFamily: "BoldFont",
    fontSize: 28,
    flexWrap: "wrap",
  },
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

export default PointsIndex
