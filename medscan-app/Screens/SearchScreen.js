import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';


export default function Search() {
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