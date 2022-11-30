import React, { useState } from 'react';
import { Text, View, Image, InlineImage, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from '../Styles';

export default function InfoScreen({route, nativation}) {
    const { name } = route.params;
    const [dosageVis, setDosageVis] = useState(false);
    const [interactionsVis, setInteractionsVis] = useState(false);
    const [howToTakeVis, setHowToTakeVis] = useState(false);
    const [symptomsVis, setSymptomsVis] = useState(false);
    const [callVis, setCallVis] = useState(false);
    const [dosage, setDose] = useState("afsjlk;gdhndf dksf");
    const [interactions, setInteractions] = useState("afsjlk;gdhndf dksf");
    const [howToTake, setHowToTake] = useState("afsjlk;gdhndf dksf");
    const [symptoms, setSymptoms] = useState("afsjlk;gdhndf dksf");
    const [call, setCall] = useState("afsjlk;gdhndf dksf");

    return (

        <View style={styles.viewsBackground} >
            <TouchableOpacity style={styles.infoButtons}>
                <Text style={styles.title}>{name}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setDosageVis(!dosageVis)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Hygrometer.png')} />
                    Dosage Information
                </Text>
                { dosageVis ? <Text style={styles.infoTextStyle}>{dosage}</Text> : null }
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setInteractionsVis(!interactionsVis)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Hygrometer.png')} />
                    Interactions
                </Text>
                { interactionsVis ? <Text style={styles.infoTextStyle}>{interactions}</Text> : null }

            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setHowToTakeVis(!howToTakeVis)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Hygrometer.png')} />
                    How to Take
                </Text>
                { howToTakeVis ? <Text style={styles.infoTextStyle}>{howToTake}</Text> : null }

            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setSymptomsVis(!symptomsVis)}>
                <Text style={styles.titleTextStyle}>Symptoms</Text>
                { symptomsVis ? <Text style={styles.infoTextStyle}>{symptoms}</Text> : null }

            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setCallVis(!callVis)}>
                <Text style={styles.titleTextStyle}>When to Call</Text>
                { callVis ? <Text style={styles.infoTextStyle}>{call}</Text> : null }

            </TouchableOpacity>

        </View>
        
    );
}

function dropDown() {

}