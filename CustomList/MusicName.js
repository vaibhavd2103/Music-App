import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "react-native-vector-icons";

const MusicName = ({ name, details }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 60,
          width: "5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="music" size={24} color="black" />
      </View>

      <View style={{ width: "75%", paddingLeft: 15 }}>
        <Text style={{ fontWeight: "700", fontSize: 17 }}>{name}</Text>
        <Text style={{ color: "yellow" }}>{details}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "20%",
          justifyContent: "flex-end",
        }}
      >
        <View>
          <AntDesign name="heart" size={24} color="black" />
        </View>
        <View style={{ marginLeft: 10 }}>
          <MaterialIcons name="delete" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default MusicName;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "grey",
    height: 60,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: "#393e46",
  },
});
