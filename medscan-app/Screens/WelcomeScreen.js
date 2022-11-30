import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconColumnRow}>
          <View style={styles.iconColumn}>
            <FontAwesomeIcon name="save" style={styles.icon}></FontAwesomeIcon>
            <Text style={styles.saved}>Saved</Text>
          </View>
          <View style={styles.interactionStack}>
            <Text style={styles.interaction}>Interaction{"\n"} Tracker</Text>
            <MaterialCommunityIconsIcon
              name="pill"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.reverseSearchStack}>
            <Text style={styles.reverseSearch}>Reverse{"\n"} Search</Text>
            <EntypoIcon
              name="magnifying-glass"
              style={styles.icon3}
            ></EntypoIcon>
          </View>
        </View>
      </TouchableOpacity>
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
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={38}
            cy={38}
            rx={38}
            ry={38}
          ></Ellipse>
        </Svg>
        <MaterialCommunityIconsIcon
          name="flower-outline"
          style={styles.icon11}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="flower-outline"
          style={styles.icon12}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="flower-outline"
          style={styles.icon13}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="flower-outline"
          style={styles.icon14}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="flower-outline"
          style={styles.icon15}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="flower-outline"
          style={styles.icon16}
        ></MaterialCommunityIconsIcon>
      </View>
      <Text style={styles.tools}>Tools</Text>
      <Text style={styles.recents}>Recents</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rect2Row}>
            <View style={styles.rect2}>
              <MaterialCommunityIconsIcon
                name="pill"
                style={styles.icon4}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.nitrostat}>Nitrostat</Text>
            </View>
            <View style={styles.icon5StackStack}>
              <View style={styles.icon5Stack}>
                <MaterialCommunityIconsIcon
                  name="pill"
                  style={styles.icon5}
                ></MaterialCommunityIconsIcon>
                <View style={styles.rect3}>
                  <MaterialCommunityIconsIcon
                    name="pill"
                    style={styles.icon7}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.amoxycillin}>Amoxycillin</Text>
                </View>
              </View>
              <Text style={styles.nitrostat1}>Nitrostat</Text>
            </View>
            <View style={styles.icon6StackStack}>
              <View style={styles.icon6Stack}>
                <MaterialCommunityIconsIcon
                  name="pill"
                  style={styles.icon6}
                ></MaterialCommunityIconsIcon>
                <View style={styles.rect4}>
                  <MaterialCommunityIconsIcon
                    name="pill"
                    style={styles.icon8}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.dayQuil}>DayQuil</Text>
                </View>
              </View>
              <Text style={styles.nitrostat2}>Nitrostat</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.welcomeBackUserRow}>
        <Text style={styles.welcomeBackUser}>Welcome back,{"\n"}User</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,234,197,1)"
  },
  button: {
    width: 348,
    height: 114,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 257,
    marginLeft: 14
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 34,
    marginLeft: 7
  },
  saved: {
    //fontFamily: "poppins-regular",
    color: "#121212",
    marginTop: 2
  },
  iconColumn: {
    width: 44,
    marginTop: 11,
    marginBottom: 11
  },
  interaction: {
    top: 43,
    left: 0,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "#121212",
    textAlign: "justify"
  },
  icon2: {
    top: 0,
    left: 18,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  interactionStack: {
    width: 76,
    height: 85,
    marginLeft: 60
  },
  reverseSearch: {
    top: 39,
    left: 0,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "#121212",
    textAlign: "justify"
  },
  icon3: {
    top: 0,
    left: 8,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 45,
    width: 40
  },
  reverseSearchStack: {
    width: 55,
    height: 81,
    marginLeft: 48,
    marginTop: 4
  },
  iconColumnRow: {
    height: 85,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 32,
    marginRight: 33
  },
  rect: {
    top: 40,
    left: 0,
    width: 399,
    height: 58,
    position: "absolute",
    backgroundColor: "rgba(129,152,102,1)",
    flexDirection: "row"
  },
  home: {
    top: 32,
    left: 1,
    position: "absolute",
    //fontFamily: "poppins-700",
    color: "#121212",
    fontSize: 13
  },
  icon9: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(230,227,201,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  homeStack: {
    width: 40,
    height: 52
  },
  scan: {
    //fontFamily: "poppins-700",
    color: "#121212",
    fontSize: 21,
    marginLeft: 68,
    marginTop: 4
  },
  pharmacy: {
    top: 31,
    left: 0,
    position: "absolute",
    //fontFamily: "poppins-700",
    color: "#121212",
    fontSize: 12
  },
  icon10: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(30,45,13,1)",
    fontSize: 40,
    height: 40,
    width: 31
  },
  pharmacyStack: {
    width: 62,
    height: 49,
    marginLeft: 63,
    marginTop: 4
  },
  homeStackRow: {
    height: 53,
    flexDirection: "row",
    flex: 1,
    marginRight: 63,
    marginLeft: 50
  },
  ellipse: {
    top: 23,
    left: 147,
    width: 75,
    height: 75,
    position: "absolute"
  },
  icon11: {
    top: 1,
    left: 1,
    position: "absolute",
    color: "rgba(41,64,13,1)",
    fontSize: 40
  },
  icon12: {
    top: 1,
    left: 36,
    position: "absolute",
    color: "rgba(41,64,13,1)",
    fontSize: 40
  },
  icon13: {
    top: 1,
    left: 71,
    position: "absolute",
    color: "rgba(41,64,13,1)",
    fontSize: 40
  },
  icon14: {
    top: 0,
    left: 336,
    position: "absolute",
    color: "rgba(41,64,13,1)",
    fontSize: 40
  },
  icon15: {
    top: 1,
    left: 302,
    position: "absolute",
    color: "rgba(41,64,13,1)",
    fontSize: 40
  },
  icon16: {
    top: 1,
    left: 265,
    position: "absolute",
    color: "rgba(41,64,13,1)",
    fontSize: 40
  },
  rectStack: {
    width: 399,
    height: 98,
    marginTop: 343
  },
  tools: {
    //fontFamily: "poppins-700",
    color: "#121212",
    fontSize: 21,
    marginTop: -597,
    marginLeft: 27
  },
  recents: {
    //fontFamily: "poppins-700",
    color: "#121212",
    fontSize: 21,
    marginTop: 167,
    marginLeft: 21
  },
  scrollArea: {
    width: 349,
    height: 146,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 14
  },
  scrollArea_contentContainerStyle: {
    width: 443,
    height: 146,
    flexDirection: "row"
  },
  rect2: {
    width: 130,
    height: 133,
    backgroundColor: "rgba(231,225,209,1)"
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 44,
    marginTop: 36,
    marginLeft: 44
  },
  nitrostat: {
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 26
  },
  icon5: {
    top: 36,
    left: 45,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 44
  },
  rect3: {
    left: 0,
    width: 130,
    height: 133,
    position: "absolute",
    backgroundColor: "rgba(231,225,209,1)",
    top: 0
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 44,
    marginTop: 36,
    marginLeft: 45
  },
  amoxycillin: {
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 14
  },
  icon5Stack: {
    top: 0,
    left: 0,
    width: 130,
    height: 134,
    position: "absolute"
  },
  nitrostat1: {
    top: 80,
    left: 26,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 18
  },
  icon5StackStack: {
    width: 130,
    height: 134,
    marginLeft: 20
  },
  icon6: {
    top: 36,
    left: 45,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 44
  },
  rect4: {
    left: 0,
    width: 130,
    height: 133,
    position: "absolute",
    backgroundColor: "rgba(231,225,209,1)",
    top: 0
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 44,
    marginTop: 36,
    marginLeft: 45
  },
  dayQuil: {
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 26
  },
  icon6Stack: {
    top: 0,
    left: 0,
    width: 130,
    height: 134,
    position: "absolute"
  },
  nitrostat2: {
    top: 80,
    left: 26,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 18
  },
  icon6StackStack: {
    width: 130,
    height: 134,
    marginLeft: 19
  },
  rect2Row: {
    height: 134,
    flexDirection: "row",
    flex: 1,
    marginRight: -94,
    marginLeft: 14,
    marginTop: 6
  },
  welcomeBackUser: {
    //fontFamily: "poppins-700",
    color: "#121212",
    fontSize: 21,
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
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  ellipse1Stack: {
    width: 56,
    height: 60,
    marginLeft: 117
  },
  welcomeBackUserRow: {
    height: 93,
    flexDirection: "row",
    marginTop: -556,
    marginLeft: 27,
    marginRight: 14
  }
});

//export default WelcomeScreen;
