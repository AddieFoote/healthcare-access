import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Touchable, TouchableOpacity, TextInput, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './Screens/HomeScreen';
import  Search  from './Screens/SearchScreen';
import  Scanner from './Screens/ScannerScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Search" component={Search} />

      </Stack.Navigator>
    }</NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
    margin: 10
  },
  input: {
    backgroundColor: "#EEEEEE",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
