import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './Screens/HomeScreen';
import  Search  from './Screens/SearchScreen';
import  Scanner from './Screens/ScannerScreen';
import InfoScreen from './Screens/InfoScreen';
import ImagePickerComponent from './Screens/ImagePickerComponent';
import {callGoogleVisionAsync} from './Screens/helperFunctions'
import WelcomeScreen from './Screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Upload Image" component={ImagePickerComponent} />

      </Stack.Navigator>
    }</NavigationContainer>
  );
}
