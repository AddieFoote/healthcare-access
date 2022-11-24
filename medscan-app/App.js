import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './Screens/HomeScreen';
import  Search  from './Screens/SearchScreen';
import  Scanner from './Screens/ScannerScreen';
import InfoScreen from './Screens/InfoScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Info" component={InfoScreen} />

      </Stack.Navigator>
    }</NavigationContainer>
  );
}