import React, { useEffect, useState, useRef,useContext } from "react";
import { StyleSheet, Image, View, Text,TouchableOpacity, Alert } from 'react-native';
import { AppProvider,AppContext} from '@/contexts/app';
import {Feather} from '@expo/vector-icons';
import MenuItems from "./MenuItems";
export default function Sidebar({ progress, ...rest }) {
  var { navigate } = rest.navigation;
  const [isListVisible, setListVisibility] = useState(0);
  const { session } = useContext(AppContext);
  const [user, setUser] = useState({name:"Jorge Perez",role:""});
  const index = async () => {
   
  }
  useEffect(() => {
    index();
  }, [session]);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
       <View style={styles.profileCol}>
           <Image style={styles.profileImage} source={require("../assets/images/profile.png")} />
       </View>
       <View style={{width:"70%",flex:1}}>

           <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"bold",fontSize:16, color: "black",width:"70%",marginTop:10,textTransform: 'capitalize'}}>{user.name} </Text>
           <TouchableOpacity style={{position:'absolute',right:30,top:10}} onPress={() => { Alert.alert("Mensaje","En desarrollo");}}>
              <Feather style={{color:"black",marginTop:8}} name="edit" size={20} />
           </TouchableOpacity>
            <Text style={{color:"gray"}}>Mi perfil</Text>
       </View>
      </View>
      <View style={styles.line}></View>
      <MenuItems navigate={navigate}  role={user.role}/>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    height: 70,
    width: "100%",
    flexDirection: "row",
  },
  line:{
    height:1,
    width:"100%",
    backgroundColor:"lightgray",
    marginVertical:10
  },
  profileCol: {
    height: "100%",
    justifyContent:"center",
    width: "30%",
  },
  profileCol2: {
    height: "100%",
    width: "70%", 
    justifyContent: "center",
    paddingLeft: 10, 
  },
  profileImage: {
    width: "70%", 
    height: "70%",
    resizeMode: 'contain',
    marginLeft:10
  },
  container: {
    backgroundColor: "white",
    paddingTop: 40,
    alignItems: "center",
    flex: 1,
  },
});
