import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Switch, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

const Navigation = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      {/* ------------------------------Header------------------------------- */}
      <View style={styles.header}>
        <View
          style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Settings")}
          >
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.headertext}>Connect to Apps</Text>
        </View>

        <View style={{ width: "10%" }}></View>
      </View>
      {/* -------------------------------Navigation Info-------------------------------------- */}
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <Text style={styles.heading}>Navigation</Text>
        <Text style={styles.caption}>
          BE SAFE. DO NOT TOGGLE WITH THE NAVIGATION APP PROMPTS BELOW WHILE
          DRIVING A MOTOR VEHICLE
        </Text>
        <View style={{ width: "100%", flexDirection: "row", marginTop: 20 }}>
          <View style={{ width: "80%", paddingLeft: 10 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Get a reminder to use navigation apps when you're in your car.
            </Text>
          </View>
          <View
            style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={isEnabled ? "yellow" : "white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      {/* ------------------------------Google maps ----------------------------------- */}
      <View style={styles.googlemaps}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.googleimg}
            source={require("../assets/google1.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Google Maps
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Play music and podcasts in Google Maps.
        </Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.connect}>
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 16 }}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* --------------------------Waze--------------------------------------------- */}
      <View style={styles.waze}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.googleimg}
            source={require("../assets/waze.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Waze
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Control your music while navigating.
        </Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.connect}>
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 16 }}>Get the App</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    backgroundColor: "yellow",
    width: "100%",
    height: 60,
    flexDirection: "row",
  },
  headertext: {
    fontSize: 22,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  caption: {
    fontSize: 15,
    color: "yellow",
    textAlign: "center",
    marginTop: 20,
  },
  googlemaps: {
    height: 165,
    width: "95%",
    backgroundColor: "#172026",
    marginTop: 10,
    borderRadius: 10,
  },
  googleimg: {
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 5,
  },
  connect: {
    backgroundColor: "#172026",
    borderColor: "white",
    borderWidth: 1,
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  waze: {
    height: 165,
    width: "95%",
    backgroundColor: "#172026",
    marginTop: 10,
    borderRadius: 10,
  },
});
