import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const Settings = (props) => {
  return (
    <View style={styles.container}>
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
      <Text
        style={{ fontWeight: "bold", fontSize: 18, color: "white", padding: 5 }}
      >
        Language settings
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("LanguagePref")}
      >
        <View style={styles.list}>
          <View
            style={{
              alignItems: "flex-start",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "darkgrey" }}>Language Preference</Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "50%",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <FontAwesome5 name="language" size={24} color="grey" />
          </View>
        </View>
      </TouchableOpacity>
      <Text
        style={{ fontWeight: "bold", fontSize: 18, color: "white", padding: 5 }}
      >
        Music Quality
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Equalizer")}>
        <View style={styles.list}>
          <View
            style={{
              width: "50%",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "darkgrey" }}>Equalizer</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="equalizer" size={28} color="grey" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("StreamingQuality")}
      >
        <View style={styles.list}>
          <View
            style={{
              width: "50%",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "darkgrey" }}>Streaming Quality</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
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
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("DownloadQuality")}
      >
        <View style={styles.list}>
          <View
            style={{
              width: "50%",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "darkgrey" }}>Download Quality</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
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
      </TouchableOpacity>
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
    backgroundColor: "#222831",
    height: 50,
    width: "100%",
    padding: 5,
    flexDirection: "row",
  },
});
