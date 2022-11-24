import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from '../Styles';


export default function Search( { navigation } ) {
    const [inputText, onChangeText] = React.useState(null);
    
    return (
      <View style={styles.viewsBackground} >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={inputText}
          placeholder="Type medication here"
          placeholderTextColor="#000" 
        />
  
        <TouchableOpacity
        style={styles.scanButton}
        
        onPress={() => navigation.navigate('Info')}
        >
          <Text>Search</Text>
        </TouchableOpacity>    
      </View>
    );
  
  }