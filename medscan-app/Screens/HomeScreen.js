import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';


export default function HomeScreen({ navigation }) {
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
