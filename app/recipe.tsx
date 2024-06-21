import React,{useEffect,useState} from 'react';
import { View, StyleSheet,Image,Text,ScrollView,ActivityIndicator} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Lookup } from '@/api/themealdb';
import { Entypo, AntDesign,Feather} from '@expo/vector-icons';
export default function Recipecreen() {
  const route = useRoute();
  const { id } = route.params ?? { id: null };
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({strMealThumb:'',strMeal:'',strArea:'',strInstructions:''});
  const index= async () =>{
    const list = await Lookup({parameter:{i:id}});
    setData(list.data);
    setLoading(false);
  }
  useEffect(() => { 
    setLoading(true);
    index();
  }, []);
  if(loading){
    return (
      <ActivityIndicator size="large" color="#b30733" style={{width:"100%",height:"100%"}} />
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{width:"100%",height:"100%"}}>
        <Image source={{ uri: data.strMealThumb}} style={styles.image}    resizeMode="cover"/>
      
        <View style={{width:"90%",marginLeft:"5%",marginBottom:80}}>
          <Text style={[styles.textClock,{width:"100%",marginTop:20}]}><Feather name="clock" size={13} color="#516780" /> 20-30</Text>
          <View style={styles.containereBetween}>
            <View style={styles.containerStar}>
              <Text style={[styles.title]} numberOfLines={1}>{data.strMeal}</Text>
              <Entypo name="star" size={15} color="#f0560f" />
              <Entypo name="star" size={15} color="#f0560f" />
              <Entypo name="star" size={15} color="#f0560f" />
              <Entypo name="star" size={15} color="#f0560f" />
              <Entypo name="star" size={15} color="#fbdbcc" />
            </View>
            <AntDesign name="heart" size={20} color="#ff0043" />
          </View>
          <Text style={[styles.textClock,{marginLeft:5,width:"100%"}]}> 45 Reviews</Text>
          <View style={{alignSelf: 'flex-start',marginBottom:10}}><Text style={styles.areaText}>{data.strArea}</Text></View>
          <Text style={{color:"#b30733"}}> {data.strInstructions} </Text>
        
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 2, 
    borderRadius: 30,
    marginTop:30
  },
  textClock:{
    color: '#516780',
    fontSize: 13,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  containerStar:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  title: {
    fontSize: 24,
    color:"#b30733",
    marginBottom: 3,
    marginRight:20,
    marginTop:10
  },
  containereBetween:{
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  areaText: {
    fontSize: 13,
    backgroundColor: '#f4f9ff',
    padding: 4,
    margin: 4,
    borderRadius: 10,
    color: '#516780',
    width:'auto',

  },
});
