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
    const [callPics, setCallPics] = useState(false);
    const [dosage, setDose] = useState("For Adults: 1 pill every 4 to 6 hours. Do not take more than 12 pills in a day (24 hours). If pain or fever does not respond to 1 pill, take 2 pills at the next dose.");
    const [interactions, setInteractions] = useState("The side effects of Tylenol (acetaminophen) include nausea, stomach pain, headache, loss of appetite, itching, rash, dark urine, clay-colored stools and swelling of the face, throat, tongue or limbs.");
    const [howToTake, setHowToTake] = useState("Ask your doctor before using acetaminophen together with ethanol. This can cause serious side effects that affect your liver.");
    const [symptoms, setSymptoms] = useState("Contraindications to using acetaminophen include hypersensitivity to acetaminophen, severe hepatic impairment, or severe active hepatic disease.");
    const [call, setCall] = useState("Acetaminophen is an analgesic drug used alone or in combination with opioids for pain management, and as an antipyretic agent.");
    const [pics, setPics] = useState("Acetaminophen is an analgesic drug");

    return (

        <View style={styles.viewsBackground}>
            <TouchableOpacity style={styles.infoButtons}>
                <Text style={styles.title}>{name}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setDosageVis(!dosageVis)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Hygrometer.png')} />
                    Dosing
                </Text>
                { dosageVis ? <Text style={styles.infoTextStyle}>{dosage}</Text> : null }
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setInteractionsVis(!interactionsVis)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Error.png')} />
                    Side Effects
                </Text>
                { interactionsVis ? <Text style={styles.infoTextStyle}>{interactions}</Text> : null }

            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setHowToTakeVis(!howToTakeVis)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Pills1.png')} />
                    Interactions
                </Text>
                { howToTakeVis ? <Text style={styles.infoTextStyle}>{howToTake}</Text> : null }

            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setSymptomsVis(!symptomsVis)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Scales.png')} />
                    Contraindications
                </Text>
                { symptomsVis ? <Text style={styles.infoTextStyle}>{symptoms}</Text> : null }

            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setCallVis(!callVis)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Molecule.png')} />
                    Pharmacology
                </Text>
                { callVis ? <Text style={styles.infoTextStyle}>{call}</Text> : null }

            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButtons} onPress={() => setCallPics(!callPics)}>
                <Text style={styles.titleTextStyle}>
                    <Image source={require('./icons/Picture.png')} />
                    Pictures
                </Text>
                { callPics ? <Text style={styles.infoTextStyle}>{pics}</Text> : null }

            </TouchableOpacity>

        </View>
        
    );
}

function dropDown() {

}