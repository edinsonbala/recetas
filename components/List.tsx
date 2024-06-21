import React,{useEffect,useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Search } from '@/api/themealdb';
import { Entypo, AntDesign,Feather} from '@expo/vector-icons';
export default function List({category="",randon=false,search=""}) {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const index= async () =>{
    setRecipes([]);
    const list = await Search({parameter:{s:search}});
    if(list.success){
      let filteredData=list.data;
      if(category!=""){
        filteredData = list.data.filter(item => item.strCategory ===category);
      }
      if(randon && list.data.length>10){
        filteredData=shuffleArray([...filteredData]);
      }
      const limitedData = filteredData.slice(0, 10);
      setRecipes(limitedData);
    }
    setLoading(false);
  } 
  const shuffleArray = (array:any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

  useEffect(() => { 
    setLoading(true);
    index();
  }, [category,search]);

  const navigation = useNavigation();

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => { navigation.navigate('recipe', { id: item.idMeal }) }}
    >
      <Image
        source={{ uri: item.strMealThumb}}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <View style={styles.containereBetween}>
          <Text style={styles.cardTitle} numberOfLines={1}>{item.strMeal}</Text>
          <AntDesign name="heart" size={20} color="#ff0043" />
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.containerStar}>
            <Entypo name="star" size={15} color="#f0560f" />
            <Entypo name="star" size={15} color="#f0560f" />
            <Entypo name="star" size={15} color="#f0560f" />
            <Entypo name="star" size={15} color="#f0560f" />
            <Entypo name="star" size={15} color="#fbdbcc" />
          </View>
          <Text style={[styles.textClock,{marginLeft:5}]}> 45 Reviews</Text>
        </View>  
        <View style={styles.containereBetween}>  
          <View style={styles.area}><Text style={styles.areaText}>{item.strArea}</Text></View>
          <Text style={styles.textClock}><Feather name="clock" size={13} color="#516780" /> 20-30</Text>
        </View>  
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ width:"100%" }}>
      {loading && <ActivityIndicator size="large" color="#b30733" style={{width:"100%",height:240}} />}
      {!loading && recipes.length==0 &&
       <View style={{width:"100%",height:240,alignItems:"center",justifyContent:"center"}}><Text >No se encontro una receta con la categoria {category} y nombre {search}</Text></View>
      }
      {!loading && recipes.length>0 &&
      <FlatList
        data={recipes}
        horizontal={true}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => index.toString()} 
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 15,
    width: 250,
    height: 240,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    color:"#b30733",
    marginBottom: 3,
  },
  containerStar:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  containereBetween:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  area:{
    minWidth:"20%",
    backgroundColor: '#f4f9ff',
    padding: 4,
    margin: 3,
    borderRadius: 10,
  },
  areaText: {
    color: '#516780',
    fontSize: 13,
  },
  textClock:{
    color: '#516780',
    fontSize: 13,
  }
});

