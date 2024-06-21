import React, { useEffect,useState } from "react";
import { StyleSheet,View,Text,ScrollView} from 'react-native';

import Carousel from '@/components/Carousel';
import Category from '@/components/Category';
import Search from '@/components/Search';
import List from '@/components/List';
export default function IndexScreen() {
  const [category,setCategory]=useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState( [
    {src: require("@/assets/images/slider1.png"), },
    {src: require("@/assets/images/slider2.png") }
   ]);
  return (
    <View style={styles.container}>
      <ScrollView style={{width:"100%",height:"80%"}}>
        <Carousel  data={data} />
        <View style={{flexDirection:'row',width:"100%"}}>
          <Text style={styles.title}>Resetas</Text>
          <Search set={setSearch}/>
        </View>
       
        
        <Category setCategory={setCategory}/>
        <List category={category} search={search}/>
        <Text style={styles.title}>Popular</Text>
        <List randon={true}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginLeft:30,
    marginBottom: 20,
    marginTop:20,
    color:"#b30733",
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
