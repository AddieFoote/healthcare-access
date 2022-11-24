import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from '../Styles';

export default function InfoScreen({route, nativation}) {
    const { name } = route.params;

    return (
        <View style={styles.viewsBackground} >
            <TouchableOpacity style={styles.infoButtons}>
                <Text>{name}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons}>
                <Text>Dosage Information</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons}>
                <Text>Interactions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons}>
                <Text>How to Take</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons}>
                <Text>Symptoms</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons}>
                <Text>When to Call</Text>
            </TouchableOpacity>

        </View>
        
    );

}