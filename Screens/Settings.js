import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const Settings = (props) => {
  return (
    <View>
      <Text>This is Settings screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Equalizer")}>
        <View
          style={{
            backgroundColor: "grey",
            height: 50,
            width: "100%",
          }}
        >
          <Text>Equalizer</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("LanguagePref")}
      >
        <View
          style={{
            backgroundColor: "grey",
            height: 50,
            width: "100%",
          }}
        >
          <Text>LanguagePref</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("StreamingQuality")}
      >
        <View
          style={{
            backgroundColor: "grey",
            height: 50,
            width: "100%",
          }}
        >
          <Text>StreamingQuality</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("DownloadQuality")}
      >
        <View
          style={{
            backgroundColor: "grey",
            height: 50,
            width: "100%",
          }}
        >
          <Text>DownloadQuality</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
