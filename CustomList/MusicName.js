import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "react-native-vector-icons";

const MusicName = ({ name, artist }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ width: "90%", flexDirection: "row", alignItems: "center" }}
      >
        <FontAwesome name="music" size={27} color="black" />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontWeight: "700", fontSize: 17 }}>{name}</Text>
          <Text style={{ color: "yellow" }}>{artist}</Text>
        </View>
      </View>

      <View style={{ width: "10%", alignItems: "flex-end" }}>
        <AntDesign name="heart" size={24} />
      </View>
    </View>
  );
};

export default MusicName;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "#393e46",
    flexDirection: "row",
    padding: 10,
  },
});
