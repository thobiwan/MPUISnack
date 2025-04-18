import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '@/ThemeContext';
import React, { useContext } from 'react';


export default function TabLayout() {
  const context:any = useContext(ThemeContext);
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: context.secondaryColor,
      tabBarInactiveTintColor: context.tertiaryColor,
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#000',
      tabBarStyle: {
       borderTopWidth: 0,
      backgroundColor: '#000',
      },
    }}>
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={28} />
          ), 
          }}/>

<Tabs.Screen
        name="search"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="search" color={color} size={28} />
          ),
        }} />


          <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="playlist-music" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}