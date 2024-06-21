

import { useEffect, useState ,useContext} from 'react';
import { AppProvider,AppContext} from '@/contexts/app';
import { Drawer } from "expo-router/drawer";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
export default function DrawerLayout() {
  return (
    <Drawer drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen name="index"   options={{header: ({ navigation }) => <Header navigation={navigation}  name="Home"/>}} />
      <Drawer.Screen name="us"   options={{header: ({ navigation }) => <Header navigation={navigation}  name="Nosotros"/>}}/>
      <Drawer.Screen name="videos"   options={{header: ({ navigation }) => <Header navigation={navigation}  name="Videos"/>}}/>
  </Drawer>
  );
}