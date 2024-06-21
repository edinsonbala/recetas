import React from 'react';
import { View, Text, StyleSheet, Pressable,Alert,Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Header({ navigation, name }) {
  let btn;
  let ifDrawer = true;

  if (navigation && typeof navigation.openDrawer === 'function') {
    btn = navigation.openDrawer;
  } else {
    ifDrawer = false;
    btn = navigation.goBack;
  }
  return (
    <View style={styles.header}>
      <Pressable style={styles.backButton} onPress={() =>btn() }>
        {!ifDrawer &&<FontAwesome name="angle-left" size={40} color="#fff" />}
        {ifDrawer &&<Ionicons name="menu-outline" size={40} color="#fff" />}
      </Pressable>
      <Text style={styles.headerTitle}>{name}</Text>
      <Pressable style={styles.profileButton}  onPress={() =>Alert.alert("Mensaje","En desarrollo")}>
        <Image style={styles.profileImage} source={require("../assets/images/profile.png")} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#ef4c00",
    height: 75,
  },
  backButton: {
    position: 'absolute',
    left: 5,
    top: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButton: {
    position: 'absolute',
    right: 15,
    top: 33,
    width: 40,
    height: 40,
    borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    fontWeight: '600',
    marginTop: 30,
    color:"#fff"
  },
  profileImage:{
    width: 30, 
    height: 30,
    resizeMode: 'contain',
    marginLeft:10
  }
});
