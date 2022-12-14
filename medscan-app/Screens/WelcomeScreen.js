import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Svg, { Ellipse } from "react-native-svg";

export default function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image19StackStack}>
        <View style={styles.image19Stack}>
          <Image
            source={require("./icons/Vector_3.png")}
            resizeMode="contain"
            style={styles.image19}
          ></Image>
          <ImageBackground
            source={require("./icons/Vector_4.png")}
            resizeMode="contain"
            style={styles.image20}
            imageStyle={styles.image20_imageStyle}
          >
            <Text style={styles.recents2}>Recents</Text>
            <View style={styles.image11Stack}>
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
            </View>
          </ImageBackground>
          <View style={styles.rect4}>
            <View style={styles.icon2Row}>
              <MaterialCommunityIconsIcon
                name="home"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={styles.button2}
              >
                <Text style={styles.scan}>Scan</Text>
              </TouchableOpacity>
              <FontAwesomeIcon
                name="phone"
                style={styles.icon3}
              ></FontAwesomeIcon>
            </View>
            <View style={styles.home2Row}>
              <Text style={styles.home2}>Home</Text>
              <Text style={styles.pharmacy3}>Pharmacy</Text>
            </View>
          </View>
          <Image
            source={require("./icons/Untitled-Artwork_(4)_5.png")}
            resizeMode="contain"
            style={styles.image14}
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
          <TouchableOpacity style={styles.button1}>
            <View style={styles.image9Row}>
              <Image
                source={require("./icons/Save.png")}
                resizeMode="contain"
                style={styles.image9}
              ></Image>
              <Image
                source={require("./icons/Pills1.png")}
                resizeMode="contain"
                style={styles.image10}
              ></Image>
              <Image
                source={require("./icons/reverse_search_logo.png")}
                resizeMode="contain"
                style={styles.image8}
              ></Image>
            </View>
            <View style={styles.saved1Row}>
              <Text style={styles.saved1}>Saved</Text>
              <Text style={styles.interaction2}>Interaction</Text>
              <Text style={styles.reverse2}>Reverse</Text>
            </View>
            <View style={styles.checkerRow}>
              <Text style={styles.checker}>Checker</Text>
              <Text style={styles.search}>Search</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.scrollArea1}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}
            >
              <View style={styles.rect1Row}>
                <View style={styles.rect1}>
                  <View style={styles.nitrostat1Stack}>
                    <Text style={styles.nitrostat1}>Nitrostat</Text>
                    <Image
                      source={require("./icons/Pill.png")}
                      resizeMode="contain"
                      style={styles.image4}
                    ></Image>
                  </View>
                </View>
                <View style={styles.nitrostat2Stack}>
                  <Text style={styles.nitrostat2}></Text>
                  <View style={styles.rect2}>
                    <View style={styles.amoxycillin1Stack}>
                      <Text style={styles.amoxycillin1}>Amoxycillin</Text>
                      <Image
                        source={require("./icons/Pill.png")}
                        resizeMode="contain"
                        style={styles.image3}
                      ></Image>
                    </View>
                  </View>
                </View>
                <View style={styles.rect3}>
                  <View style={styles.dayQuil1Stack}>
                    <Text style={styles.dayQuil1}>DayQuil</Text>
                    <Image
                      source={require("./icons/Pill.png")}
                      resizeMode="contain"
                      style={styles.image5}
                    ></Image>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.image18Stack}>
          <ImageBackground
            source={require("./icons/Vector_2.png")}
            resizeMode="contain"
            style={styles.image18}
            imageStyle={styles.image18_imageStyle}
          >
            <Text style={styles.tools1}>Tools</Text>
          </ImageBackground>
          <ImageBackground
            source={require("./icons/Vector_1.png")}
            resizeMode="contain"
            style={styles.image17}
            imageStyle={styles.image17_imageStyle}
          >
            <View style={styles.welcomeBack3Row}>
              <Text style={styles.welcomeBack3}>Welcome back,</Text>
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
                  style={styles.icon1}
                ></FontAwesomeIcon>
              </View>
            </View>
            <Text style={styles.pranav}>Pranav</Text>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.rect5}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(252,247,239,1)"
  },
  image19: {
    top: 100,
    left: 0,
    width: 394,
    height: 373,
    position: "absolute"
  },
  image20: {
    top: 66,
    left: 15,
    width: 362,
    height: 517,
    position: "absolute"
  },
  image20_imageStyle: {},
  recents2: {
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 20,
    marginTop: 78,
    marginLeft: 68
  },
  image11: {
    top: 0,
    left: 63,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image12: {
    top: 0,
    left: 35,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image13: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image11Stack: {
    width: 103,
    height: 40,
    marginTop: 232,
    marginLeft: 43
  },
  rect4: {
    top: 446,
    left: 2,
    width: 580,
    height: 129,
    position: "absolute",
    backgroundColor: "rgba(124,169,130,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10
  },
  icon2: {
    color: "rgba(230,227,201,1)",
    fontSize: 32,
    height: 35,
    width: 32,
    marginTop: 4
  },
  home2: {
    color: "#121212",
    fontSize: 8,
    marginTop: 2
  },
  icon2Column: {
    width: 38
  },
  scan: {
    top: 8,
    left: 2,
    position: "absolute",
    color: "#121212",
    fontSize: 16,
    marginTop: 10
  },
  icon3: {
    color: "rgba(30,45,13,1)",
    fontSize: 32,
    height: 32,
    width: 25,
    marginLeft: 93,
    marginTop: 7
  },
  icon2Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 111,
    marginRight: 178
  },
  home2: {
    color: "#121212",
    fontSize: 8
  },
  pharmacy3: {
    color: "#121212",
    fontSize: 8,
    marginLeft: 232
  },
  home2Row: {
    height: 13,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 105,
    marginRight: 177
  },
  image14: {
    top: 406,
    left: 390,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image15: {
    top: 406,
    left: 420,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image16: {
    top: 406,
    left: 448,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1: {
    top: 0,
    left: 88,
    width: 365,
    height: 132,
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
    borderRadius: 28
  },
  image9: {
    width: 40,
    height: 40,
    marginTop: 4
  },
  image10: {
    width: 40,
    height: 41,
    marginLeft: 77
  },
  image8: {
    width: 40,
    height: 40,
    marginLeft: 76,
    marginTop: 4
  },
  image9Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 37,
    marginRight: 55
  },
  saved1: {
    color: "#121212",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 8
  },
  interaction2: {
    color: "#121212",
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 54
  },
  reverse2: {
    color: "#121212",
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 40
  },
  saved1Row: {
    height: 24,
    flexDirection: "row",
    marginLeft: 35,
    marginRight: 69
  },
  checker: {
    color: "#121212",
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 16
  },
  search: {
    color: "#121212",
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 58
  },
  checkerRow: {
    height: 16,
    flexDirection: "row",
    marginLeft: 146,
    marginRight: 60
  },
  scrollArea1: {
    top: 170,
    left: 84,
    width: 364,
    height: 162,
    position: "absolute",
    borderRadius: 23
  },
  scrollArea1_contentContainerStyle: {
    width: 436,
    height: 162,
    flexDirection: "row"
  },
  rect1: {
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
    shadowRadius: 10
  },
  nitrostat1: {
    top: 73,
    left: 0,
    position: "absolute",
    color: "#121212",
    fontSize: 13
  },
  image4: {
    top: 0,
    left: 12,
    width: 53,
    height: 79,
    position: "absolute"
  },
  nitrostat1Stack: {
    width: 77,
    height: 93,
    marginTop: 13,
    marginLeft: 27
  },
  nitrostat2: {
    top: 78,
    left: 43,
    position: "absolute",
    color: "#121212",
    fontSize: 18
  },
  rect2: {
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
  amoxycillin1: {
    top: 73,
    left: 0,
    position: "absolute",
    color: "#121212",
    fontSize: 13
  },
  image3: {
    top: 0,
    left: 13,
    width: 53,
    height: 79,
    position: "absolute"
  },
  amoxycillin1Stack: {
    width: 105,
    height: 93,
    marginTop: 13,
    marginLeft: 26
  },
  nitrostat2Stack: {
    width: 131,
    height: 130,
    marginLeft: 17
  },
  rect3: {
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
  dayQuil1: {
    top: 73,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 13
  },
  image5: {
    top: 0,
    left: 8,
    width: 53,
    height: 79,
    position: "absolute"
  },
  dayQuil1Stack: {
    width: 70,
    height: 93,
    marginTop: 13,
    marginLeft: 30
  },
  rect1Row: {
    height: 130,
    flexDirection: "row",
    flex: 1,
    marginRight: -72,
    marginLeft: 9,
    marginTop: 16
  },
  image19Stack: {
    top: 321,
    left: 31,
    width: 582,
    height: 583,
    position: "absolute"
  },
  image18: {
    top: 32,
    width: 543,
    height: 335,
    position: "absolute",
    left: 26
  },
  image18_imageStyle: {},
  tools1: {
    color: "#121212",
    fontSize: 20,
    marginTop: 250,
    marginLeft: 89
  },
  image17: {
    top: 0,
    left: 0,
    width: 576,
    height: 294,
    position: "absolute"
  },
  image17_imageStyle: {},
  welcomeBack3: {
    color: "#121212",
    fontSize: 20,
    marginTop: 50
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 56,
    height: 60,
    position: "absolute"
  },
  icon1: {
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
    marginLeft: 134
  },
  welcomeBack3Row: {
    height: 80,
    flexDirection: "row",
    marginTop: 82,
    marginLeft: 114,
    marginRight: 117
  },
  pranav: {
    color: "#121212",
    fontSize: 20,
    marginLeft: 114
  },
  image18Stack: {
    top: 0,
    left: 0,
    width: 576,
    height: 367,
    position: "absolute"
  },
  image19StackStack: {
    top: -32,
    left: -94,
    width: 613,
    height: 904,
    position: "absolute"
  },
  rect5: {}
});
