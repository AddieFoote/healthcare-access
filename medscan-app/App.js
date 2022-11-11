import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Touchable, TouchableOpacity, TextInput, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to PillPharm</Text>
      <TouchableOpacity
      style={styles.scanButton}
      onPress={() => navigation.navigate('Scanner')}
      >
        <Text>Scan Barcode</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.scanButton}
      onPress={() => navigation.navigate('Search')}
      >
        <Text>Search Name</Text>
      </TouchableOpacity>
    </View>
  );
}

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


function Search() {
  const [inputText, onChangeText] = React.useState(null);
  
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={inputText}
        placeholder="Type medication here"
        placeholderTextColor="#000" 
      />

      <TouchableOpacity
      style={styles.scanButton}
      onPress={() => Alert.alert("searched")}
      >
        <Text>Search</Text>
      </TouchableOpacity>    
    </View>
  );

}


function Scanner() {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
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
