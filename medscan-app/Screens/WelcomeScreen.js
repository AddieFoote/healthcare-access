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
            <View style={styles.icon2ColumnRow}>
              <View style={styles.icon2Column}>
                <MaterialCommunityIconsIcon
                  name="home"
                  style={styles.icon2}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.home2}>Home</Text>
              </View>
              <View style={styles.scanStack}>
                <Text style={styles.scan}>Scan</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Home")}
                  style={styles.button2}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon3Column}>
                <FontAwesomeIcon
                  name="phone"
                  style={styles.icon3}
                ></FontAwesomeIcon>
                <Text style={styles.pharmacy3}>Pharmacy</Text>
              </View>
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
      <View style={styles.scrollArea1Stack}>
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
    top: 24,
    left: 0,
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
    marginLeft: 6
  },
  home2: {
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 8,
    marginTop: 2
  },
  scan: {
    top: 5,
    left: 0,
    position: "absolute",
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 26
  },
  button2: {
    top: 0,
    left: 4,
    width: 57,
    height: 45,
    position: "absolute"
  },
  scanStack: {
    width: 66,
    height: 45,
    marginLeft: 84,
    marginTop: 3
  },
  icon3: {
    color: "rgba(30,45,13,1)",
    fontSize: 32,
    height: 32,
    width: 25,
    marginLeft: 84,
    marginTop: 5
  },
  icon2Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 111,
    marginRight: 178
  },
  home1: {
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 10
  },
  pharmacy1: {
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 10,
    marginLeft: 215
  },
  home1Row: {
    height: 15,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 111,
    marginRight: 172
  },
  icon4: {
    top: 0,
    left: 208,
    position: "absolute",
    fontSize: 120,
    color: "rgba(233,247,216,1)"
  },
  rect4Stack: {
    top: 20,
    left: 0,
    width: 580,
    height: 153,
    position: "absolute"
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
    top: 4,
    left: 56,
    width: 103,
    height: 40,
    position: "absolute"
  },
  image14: {
    top: 4,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image15: {
    top: 1,
    left: 30,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image16: {
    top: 0,
    left: 58,
    width: 40,
    height: 40,
    position: "absolute"
  },
  image14Stack: {
    top: 0,
    left: 388,
    width: 98,
    height: 44,
    position: "absolute"
  },
  rect4StackStack: {
    width: 580,
    height: 173,
    marginTop: 691,
    marginLeft: -61
  },
  welcomeBack3: {
    //fontFamily: "poppins-500",
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
    fontSize: 40
  },
  ellipse1Stack: {
    width: 56,
    height: 60,
    marginLeft: 134
  },
  welcomeBack3Row: {
    height: 80,
    flexDirection: "row",
    marginTop: -814,
    marginLeft: 20,
    marginRight: 49
  },
  button1: {
    width: 352,
    height: 119,
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
    marginTop: 163,
    marginLeft: 33
  },
  image9: {
    width: 40,
    height: 40,
    marginTop: 1
  },
  image10: {
    width: 40,
    height: 41,
    marginLeft: 67
  },
  image8: {
    width: 40,
    height: 40,
    marginLeft: 75
  },
  image9Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 49,
    marginRight: 41
  },
  saved1: {
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 14,
    lineHeight: 16
  },
  interaction2: {
    //fontFamily: "poppins-500",
    color: "#121212",
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 42
  },
  reverse2: {
    //fontFamily: "poppins-500",
    color: "#121212",
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 35
  },
  saved1Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 39,
    marginRight: 69
  },
  checker: {
    //fontFamily: "poppins-500",
    color: "#121212",
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 16
  },
  search: {
    //fontFamily: "poppins-500",
    color: "#121212",
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 58
  },
  checkerRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 138,
    marginRight: 55
  },
  scrollArea1: {
    top: 26,
    left: 1,
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
    //fontFamily: "poppins-regular",
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
    //fontFamily: "poppins-regular",
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
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 13
  },
  image3: {
    top: 0,
    left: 9,
    width: 53,
    height: 79,
    position: "absolute"
  },
  amoxycillin1Stack: {
    width: 101,
    height: 93,
    marginTop: 13,
    marginLeft: 30
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
    //fontFamily: "poppins-regular",
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
  recents2: {
    left: 0,
    position: "absolute",
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 20,
    top: 0
  },
  scrollArea1Stack: {
    width: 365,
    height: 188,
    marginTop: 21,
    marginLeft: 20
  },
  tools1: {
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 20,
    marginTop: -371,
    marginLeft: 21
  },
  pranav: {
    //fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 20,
    marginTop: -150,
    marginLeft: 20
  }
});
