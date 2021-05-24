import React, { useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Switch } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "react-native-vector-icons";

const Settings = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* --------------------------------------------Setting Header ------------------------------- */}
      <View style={styles.header}>
        <View
          style={{ width: "10%", justifyContent: "center", paddingLeft: 10 }}
        >
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22, color: "black", fontWeight: "700" }}>
            Settings
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* --------------------------------------------Setting content ------------------------------- */}
      <ScrollView style={{ width: "100%" }}>
        {/* -------------------------------------------Language Settings ------------------------------- */}
        <Text style={styles.settingcategory}>Language settings</Text>
        {/* --------------------------------------------Language Preference ------------------------------- */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LanguagePref")}
        >
          <View style={styles.list}>
            <View style={styles.settingname80}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Language Preference
              </Text>
            </View>
            <View style={styles.settingicon20}>
              <FontAwesome5 name="language" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        {/* --------------------------------------------Music Quality ------------------------------- */}
        <Text style={styles.settingcategory}>Music Quality</Text>
        {/* -------------------------------------------Equalizer ------------------------------- */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Equalizer")}
        >
          <View style={styles.list}>
            <View style={styles.settingname80}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Equalizer
              </Text>
            </View>
            <View style={styles.settingicon20}>
              <MaterialIcons name="equalizer" size={28} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        {/* -------------------------------------------Streaming Quality ------------------------------- */}

        <View style={styles.list}>
          <View style={styles.settingname50}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Streaming Quality
            </Text>
          </View>
          <View style={styles.settingicon50}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-high"
                size={26}
                color="grey"
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-medium"
                size={26}
                color="yellow"
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-low"
                size={26}
                color="grey"
                style={{ paddingLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* -------------------------------------------Download Quality ------------------------------- */}

        <View style={styles.list}>
          <View style={styles.settingname50}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Download Quality
            </Text>
          </View>
          <View style={styles.settingicon50}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-high"
                size={26}
                color="yellow"
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-medium"
                size={26}
                color="grey"
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-low"
                size={26}
                color="grey"
                style={{ paddingLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/*--------------------------------------------- Data Usage Section --------------------------------------- */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.settingcategory}>Data Usage</Text>
          <Text
            style={{
              color: "grey",
              padding: 5,
              marginTop: 3,
              marginLeft: 10,
            }}
          >
            218.9 MB
          </Text>
        </View>
        {/*--------------------------------------------- Data saver ----------------------------------------------- */}
        <View style={styles.list}>
          <View style={styles.settingname80}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Data Saver
            </Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Sets your music quality to low and disables artist canvases.
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",
              padding: 5,
            }}
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
        {/*--------------------------------------------- Data usage warning ----------------------------------------------- */}
        <View style={styles.list}>
          <View style={styles.settingname80}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Data usage warning
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",
              padding: 5,
            }}
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
        {/* -------------------------------------------Connect to Apps ------------------------------- */}
        <Text style={styles.settingcategory}>Connect To Apps</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Navigation")}
        >
          {/* -------------------------------------------Navigation------------------------------- */}
          <View style={styles.list}>
            <View style={styles.settingname80}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Navigation
              </Text>
              <Text style={{ color: "grey", fontSize: 13 }}>
                Connect to navigation apps.
              </Text>
            </View>
            <View style={styles.settingicon20}>
              <Feather name="navigation" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        {/* ----------------------------------------- Car mode ------------------------------- */}
        <View style={styles.list}>
          <View style={styles.settingname80}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Car Mode
            </Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Turns on your Auto Play.
            </Text>
          </View>
          <View style={styles.settingicon20}>
            <Switch
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={isEnabled ? "yellow" : "white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        {/* ----------------------------------------- Sleep Mode ------------------------------- */}
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.list}>
            <View style={styles.settingname80}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Sleep Mode
              </Text>
              <Text style={{ color: "grey", fontSize: 13 }}>
                Set timer for your music
              </Text>
            </View>
            <View style={styles.settingicon20}>
              <Switch
                trackColor={{ false: "#767577", true: "orange" }}
                thumbColor={isEnabled ? "yellow" : "white"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={{ color: "grey", paddingRight: 7 }}>10 min</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* ----------------------------------------- Help and support ------------------------------- */}
        <Text style={styles.settingcategory}>Help and Support</Text>
        {/* ----------------------------------------- Customer support ------------------------------- */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CustomerSupport")}
        >
          <View style={styles.list}>
            <View style={styles.settingname80}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Customer Support
              </Text>
            </View>
            <View style={styles.settingicon20}>
              <AntDesign name="customerservice" size={26} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        {/* ----------------------------------------- Updates ------------------------------- */}
        <TouchableOpacity onPress={() => props.navigation.navigate("Updates")}>
          <View style={styles.list}>
            <View style={styles.settingname80}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Updates
              </Text>
            </View>
            <View style={styles.settingicon20}>
              <MaterialIcons name="update" size={28} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    backgroundColor: "yellow",
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  list: {
    backgroundColor: "#111111",
    height: 60,
    width: "100%",
    padding: 5,
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  settingcategory: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    padding: 5,
  },
  settingname80: {
    alignItems: "flex-start",
    width: "80%",
    justifyContent: "center",
  },
  settingname50: {
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  settingicon20: {
    alignItems: "flex-end",
    width: "20%",
    justifyContent: "center",
    padding: 5,
  },
  settingicon50: {
    width: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
});
