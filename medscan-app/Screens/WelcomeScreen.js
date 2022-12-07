import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Svg, { Ellipse } from "react-native-svg";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

/*import React, { useState, useEffect } from 'react';
 import AppLoading from 'expo-app-loading';
 import {
   useFonts,
   Poppins_500Medium,
 } from '@expo-google-fonts/poppins';

 import * as Font from 'expo-font';
*/

export default function WelcomeScreen(props) {
  //const [loaded, error] = useFonts({"Poppins_500Medium": "poppins-regular"});

  
  return (
    <View style={styles.container}>
      <View style={styles.image3StackStack}>
        <View style={styles.image3Stack}>
          <ImageBackground
            source={require("./icons/Vector_3.png")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <Text style={styles.recents}>Recents</Text>
            <Image
              source={require("./icons/Untitled-Artwork_(4)_5.png")}
              resizeMode="contain"
              style={styles.image14}
            ></Image>
          </ImageBackground>
          <ImageBackground
            source={require("./icons/Vector_4.png")}
            resizeMode="contain"
            style={styles.image4}
            imageStyle={styles.image4_imageStyle}
          >
            <View style={styles.scrollArea}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <View style={styles.rect2Row}>
                  <View style={styles.rect2}>
                    <View style={styles.nitrostatStack}>
                      <Text style={styles.nitrostat}>Nitrostat</Text>
                      <Image
                        source={require("./icons/Pill.png")}
                        resizeMode="contain"
                        style={styles.image9}
                      ></Image>
                    </View>
                  </View>
                  <View style={styles.nitrostat1Stack}>
                    <Text style={styles.nitrostat1}></Text>
                    <View style={styles.rect3}>
                      <View style={styles.amoxycillinStack}>
                        <Text style={styles.amoxycillin}>Amoxycillin</Text>
                        <Image
                          source={require("./icons/Pill.png")}
                          resizeMode="contain"
                          style={styles.image8}
                        ></Image>
                      </View>
                    </View>
                  </View>
                  <View style={styles.rect4}>
                    <View style={styles.dayQuilStack}>
                      <Text style={styles.dayQuil}>DayQuil</Text>
                      <Image
                        source={require("./icons/Pill.png")}
                        resizeMode="contain"
                        style={styles.image10}
                      ></Image>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.rectStack}>
              <View style={styles.rect}>
                <View style={styles.homeStackRow}>
                  <View style={styles.homeStack}>
                    <Text style={styles.home}>Home</Text>
                    <MaterialCommunityIconsIcon
                      name="home"
                      style={styles.icon9}
                    ></MaterialCommunityIconsIcon>
                  </View>
                  <Text style={styles.scan}>Scan</Text>
                  <View style={styles.pharmacyStack}>
                    <Text style={styles.pharmacy}>Pharmacy</Text>
                    <FontAwesomeIcon
                      name="phone"
                      style={styles.icon10}
                    ></FontAwesomeIcon>
                  </View>
                </View>
              </View>
              <Svg viewBox="0 0 75.19 75.19" style={styles.ellipse}>
                <Ellipse
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  cx={38}
                  cy={38}
                  rx={38}
                  ry={38}
                  stroke="rgba(230, 230, 230,1)"
                ></Ellipse>
              </Svg>
              <EvilIconsIcon
                name="camera"
                style={styles.icon20}
              ></EvilIconsIcon>
              <TouchableOpacity style={styles.button5}></TouchableOpacity>
              <Image
                source={require("./icons/Untitled-Artwork_(4)_5.png")}
                resizeMode="contain"
                style={styles.image11}
              ></Image>
              <Image
                source={require("./icons/Untitled-Artwork_(4)_5.png")}
                resizeMode="contain"
                style={styles.image12}
              ></Image>
              <Image
                source={require("./icons/Untitled-Artwork_(4)_5.png")}
                resizeMode="contain"
                style={styles.image13}
              ></Image>
              <Image
                source={require("./icons/Untitled-Artwork_(4)_5.png")}
                resizeMode="contain"
                style={styles.image15}
              ></Image>
              <Image
                source={require("./icons/Untitled-Artwork_(4)_5.png")}
                resizeMode="contain"
                style={styles.image16}
              ></Image>
            </View>
          </ImageBackground>
          <TouchableOpacity style={styles.button}>
            <View style={styles.savedStackStackRow}>
              <View style={styles.savedStackStack}>
                <View style={styles.savedStack}>
                  <Text style={styles.saved}>Saved</Text>
                  <TouchableOpacity style={styles.button2}></TouchableOpacity>
                </View>
                <Image
                  source={require("./icons/Save.png")}
                  resizeMode="contain"
                  style={styles.image7}
                ></Image>
              </View>
              <View style={styles.interactionStackStack}>
                <View style={styles.interactionStack}>
                  <Text style={styles.interaction}>
                    Interaction{"\n"} Tracker
                  </Text>
                  <TouchableOpacity style={styles.button3}></TouchableOpacity>
                </View>
                <Image
                  source={require("./icons/Pills1.png")}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
              </View>
              <View style={styles.reverseSearchStackStack}>
                <View style={styles.reverseSearchStack}>
                  <Text style={styles.reverseSearch}>Reverse{"\n"} Search</Text>
                  <TouchableOpacity style={styles.button4}></TouchableOpacity>
                </View>
                <Image
                  source={require("./icons/reverse_search_logo.png")}
                  resizeMode="contain"
                  style={styles.image6}
                ></Image>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.image2Stack}>
          <Image
            source={require("./icons/Vector_2.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <ImageBackground
            source={require("./icons/Vector_1.png")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.welcomeBackPranavRow}>
              <Text style={styles.welcomeBackPranav}>
                Welcome back,{"\n"}Pranav
              </Text>
              <View style={styles.ellipse1Stack}>
                <Svg viewBox="0 0 55.69 59.87" style={styles.ellipse1}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(230, 230, 230,1)"
                    cx={28}
                    cy={30}
                    rx={28}
                    ry={30}
                  ></Ellipse>
                </Svg>
                <FontAwesomeIcon
                  name="user-circle-o"
                  style={styles.icon17}
                ></FontAwesomeIcon>
              </View>
            </View>
            <Text style={styles.tools}>Tools</Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(252,247,239,1)"
  },
  image3: {
    top: 103,
    left: 0,
    width: 659,
    height: 451,
    position: "absolute"
  },
  image3_imageStyle: {},
  recents: {
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    fontSize: 25,
    marginTop: 75,
    marginLeft: 162
  },
  image14: {
    width: 40,
    height: 40,
    marginTop: 243,
    marginLeft: 129
  },
  image4: {
    top: 197,
    left: 138,
    width: 410,
    height: 424,
    position: "absolute"
  },
  image4_imageStyle: {},
  scrollArea: {
    width: 357,
    height: 153,
    borderRadius: 23,
    marginTop: 19,
    marginLeft: 7
  },
  scrollArea_contentContainerStyle: {
    width: 439,
    height: 153,
    flexDirection: "row"
  },
  rect2: {
    width: 130,
    height: 130,
    backgroundColor: "rgba(253,245,220,1)",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginLeft: -1
  },
  nitrostat: {
    top: 65,
    left: 0,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 18
  },
  image9: {
    top: 0,
    left: 12,
    width: 53,
    height: 79,
    position: "absolute"
  },
  nitrostatStack: {
    width: 77,
    height: 93,
    marginTop: 14,
    marginLeft: 26
  },
  nitrostat1: {
    top: 79,
    left: 43,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 18
  },
  rect3: {
    left: 0,
    width: 131,
    height: 130,
    position: "absolute",
    backgroundColor: "rgba(253,245,220,1)",
    top: 0,
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 3,
      width: 2
    },
    elevation: 30,
    shadowOpacity: 0.25,
    shadowRadius: 10
  },
  amoxycillin: {
    top: 65,
    left: 0,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 18
  },
  image8: {
    top: 0,
    left: 23,
    width: 53,
    height: 79,
    position: "absolute"
  },
  amoxycillinStack: {
    width: 101,
    height: 93,
    marginTop: 14,
    marginLeft: 15
  },
  nitrostat1Stack: {
    width: 131,
    height: 130,
    marginLeft: 18
  },
  rect4: {
    width: 130,
    height: 130,
    backgroundColor: "rgba(253,245,220,1)",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    marginLeft: 19
  },
  dayQuil: {
    top: 65,
    left: 0,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 18
  },
  image10: {
    top: 0,
    left: 9,
    width: 53,
    height: 79,
    position: "absolute"
  },
  dayQuilStack: {
    width: 70,
    height: 93,
    marginTop: 14,
    marginLeft: 29
  },
  rect2Row: {
    height: 130,
    flexDirection: "row",
    flex: 1,
    marginRight: -82,
    marginLeft: 12,
    marginTop: 11
  },
  rect: {
    top: 37,
    left: 0,
    width: 399,
    height: 58,
    position: "absolute",
    backgroundColor: "rgba(124,169,130,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    flexDirection: "row",
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'green',
    flexDirection:'row',
    height:80,
    alignItems:'center',
    
  },
  home: {
    top: 31,
    left: 0,
    position: "absolute",
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    fontSize: 13
  },
  icon9: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(230,227,201,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  homeStack: {
    width: 39,
    height: 51
  },
  scan: {
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    fontSize: 20,
    marginLeft: 69,
    marginTop: 21
  },
  pharmacy: {
    top: 28,
    left: 0,
    position: "absolute",
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    fontSize: 12
  },
  icon10: {
    top: 0,
    left: 19,
    position: "absolute",
    color: "rgba(30,45,13,1)",
    fontSize: 32,
    height: 32,
    width: 25
  },
  pharmacyStack: {
    width: 62,
    height: 46,
    marginLeft: 64,
    marginTop: 3
  },
  homeStackRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 63,
    marginLeft: 51,
    marginTop: 4
  },
  ellipse: {
    top: 21,
    left: 140,
    width: 90,
    height: 90,
    position: "absolute"
  },
  icon20: {
    top: 35,
    left: 165,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 35,
    width: 40
  },
  button5: {
    top: 53,
    left: 72,
    width: 55,
    height: 59,
    position: "absolute"
  },
  image11: {
    top: 0,
    left: 353,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image12: {
    top: 1,
    left: 321,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image13: {
    top: 1,
    left: 285,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image15: {
    top: 0,
    left: 21,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image16: {
    top: 1,
    left: 56,
    width: 40,
    height: 40,
    position: "absolute"
  },
  rectStack: {
    position: 'absolute',
    bottom: 0,
    width: 399,
    height: 112,
    marginTop: 90,
    marginLeft: 3
  },
  button: {
    top: 0,
    left: 152,
    width: 348,
    height: 114,
    position: "absolute",
    backgroundColor: "rgba(255,252,244,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 2,
      width: 2
    },
    elevation: 30,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderRadius: 28,
    flexDirection: "row"
  },
  saved: {
    top: 61,
    left: 15,
    position: "absolute",
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    fontSize: 18,
    lineHeight: 16
  },
  button2: {
    top: 0,
    left: 0,
    width: 85,
    height: 91,
    position: "absolute"
  },
  savedStack: {
    top: 0,
    left: 0,
    width: 85,
    height: 91,
    position: "absolute"
  },
  image7: {
    top: 13,
    left: 23,
    width: 40,
    height: 40,
    position: "absolute"
  },
  savedStackStack: {
    width: 85,
    height: 91
  },
  interaction: {
    top: 53,
    left: 0,
    position: "absolute",
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    textAlign: "justify",
    fontSize: 18,
    lineHeight: 16
  },
  button3: {
    top: 0,
    left: 0,
    width: 99,
    height: 91,
    position: "absolute"
  },
  interactionStack: {
    top: 0,
    left: 0,
    width: 99,
    height: 91,
    position: "absolute"
  },
  image5: {
    top: 9,
    width: 40,
    height: 41,
    position: "absolute",
    left: 29
  },
  interactionStackStack: {
    width: 99,
    height: 91,
    marginLeft: 21
  },
  reverseSearch: {
    top: 53,
    left: 0,
    position: "absolute",
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    textAlign: "justify",
    fontSize: 18,
    lineHeight: 16
  },
  button4: {
    top: 0,
    left: 0,
    width: 72,
    height: 91,
    position: "absolute"
  },
  reverseSearchStack: {
    top: 0,
    left: 0,
    width: 72,
    height: 91,
    position: "absolute"
  },
  image6: {
    top: 13,
    left: 16,
    width: 40,
    height: 40,
    position: "absolute"
  },
  reverseSearchStackStack: {
    width: 72,
    height: 91,
    marginLeft: 28
  },
  savedStackStackRow: {
    height: 91,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 22,
    marginTop: 12
  },
  image3Stack: {
    top: 311,
    left: 0,
    width: 659,
    height: 621,
    position: "absolute"
  },
  image2: {
    top: 44,
    left: 0,
    width: 459,
    height: 313,
    position: "absolute"
  },
  image: {
    top: 0,
    left: 15,
    width: 401,
    height: 300,
    position: "absolute"
  },
  image_imageStyle: {},
  welcomeBackPranav: {
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    fontSize: 25,
    marginTop: 30
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 56,
    height: 60,
    position: "absolute"
  },
  icon17: {
    top: 10,
    left: 8,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  ellipse1Stack: {
    width: 56,
    height: 60,
    marginLeft: 90
  },
  welcomeBackPranavRow: {
    height: 106,
    flexDirection: "row",
    marginTop: 98,
    marginLeft: 47,
    marginRight: 14
  },
  tools: {
    //fontFamily: "Poppins_500Medium",
    color: "#121212",
    fontSize: 25,
    marginTop: 58,
    marginLeft: 47
  },
  image2Stack: {
    top: 0,
    left: 100,
    width: 459,
    height: 357,
    position: "absolute"
  },
  image3StackStack: {
    width: 659,
    height: 932,
    marginTop: -53,
    marginLeft: -141
  }
});
