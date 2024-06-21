import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Pressable,TouchableOpacity,FlatList } from 'react-native';
import { AntDesign, Octicons,Feather} from '@expo/vector-icons';
function Item({ item, navigate}) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={() =>{navigate(item.ruta,{refresh:true})}}>
        <View style={{ width: "20%",justifyContent: "center", alignItems: "center" }}>
             {item.icon}
        </View>
        <View style={{ width: "80%",flex: 1,justifyContent: 'center'}}>
          <Text style={[styles.title]}>{item.name}</Text>
        </View>
        
      </TouchableOpacity>
    );
  }
export default function MenuItems({navigate,role=""}) {
  const [listMenu, setListMenu] = useState([
  {
      name:"Home",
      ruta:"index",
      color:"white",
      icon:<AntDesign name="home" size={24} color="black" />,
  },
  {
      name:"Nosotros",
      ruta:"us",
      color:"white",
      icon:<Feather name="users" size={24} color="black" />,
  },
  {
    name:"Videos",
    ruta:"videos",
    color:"white",
    icon:<Octicons name="video" size={24} color="black" />,
  }
  ]);
  useEffect(() => {
    
  }, []);
  return (
    <FlatList
    style={{width:"100%",marginBottom:10,marginTop:10}}
     data={listMenu}
     renderItem={({item}) => <Item  item={item} navigate={navigate} />}
     keyExtractor={(item, index) => index.toString()}
 />
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"84%",
    marginLeft:"4%",
    marginTop: 10,
   
  },
  input: {
    flex: 1,
    paddingLeft: 20,
    borderRadius: 20,
    height:44,
    backgroundColor: 'white',
    marginRight:"8%",
  },
  title:{
    fontFamily:"SpaceMono", 
    fontWeight:"600",
    fontSize: 17,
    textTransform: "capitalize",
    lineHeight: 22 * 1.2,
    color:"black",
  },
  listItem:{
    width:"100%",
    flexDirection: 'row',
    minHeight:40
},
});
