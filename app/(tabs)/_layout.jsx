import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Colors} from "../../constants/Colors"

const LayoutStructure = () => {
  return (
   <Tabs>
    <Tabs.Screen name='home' options={{
      tabBarLabel:"Home",
      headerShown: false,
      tabBarActiveTinColor: Colors.primary,
      tabBarIcon: ({ color }) => ( <FontAwesome5
      name="home" size={24} color={color} />
        ),
      }}
    />
     <Tabs.Screen name='favorites' options={{
      tabBarLabel:"Favorites",
      headerShown: false,
      tabBarActiveTinColor: Colors.primary,
      tabBarIcon: ({ color }) => ( <EvilIcons
        name="heart" size={28} color={color} />
          ),
    }}/>
     <Tabs.Screen name='profile' options={{
      tabBarLabel:"Profile",
      headerShown: false,
      tabBarActiveTinColor: Colors.primary,
      tabBarIcon: ({ color }) => ( <MaterialCommunityIcons
        name="account-check-outline" size={24} color={color} />
          ),
    }}/>
    
   </Tabs>
  )
}

export default LayoutStructure

const styles = StyleSheet.create({})