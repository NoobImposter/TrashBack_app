import { View, Text } from 'react-native';
import React from 'react';
import styels from '../../Components/styels';
import { useRoute } from '@react-navigation/native';
import Pagesback from '../../Components/Pagesback';
import { ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass,faCookie,faMobile,faBook,faShirt
  ,faCouch,faCarBattery,faUtensils
  } from '@fortawesome/free-solid-svg-icons';

const Catergoriesshow = () => {
   const resutrants=[{resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200},
      {resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
      {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200},
      {resturnantName:"Phones",image:faMobile,Location:"Faisal Town",Discount:150},
      {resturnantName:"Books",image:faBook,Location:"Faisal Town",Discount:200}
    ]
  
  const route = useRoute();
  const { categoryname } = route.params || {}; // get categoryname safely

  return (
    <View style={styels.main}>
      <View style={styels.innermaincontainer}>
        <View style={{height:"8%"}}>
        <Pagesback textsinput={categoryname} />
        </View>
        <ScrollView style={{flex:1}}>
          

        </ScrollView>
        

        
        
       
      </View>
    </View>
  );
};

export default Catergoriesshow;
