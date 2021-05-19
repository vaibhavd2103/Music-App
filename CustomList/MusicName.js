import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ListItem } from "react-native-elements";

import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "react-native-vector-icons";

const MusicName = ({ name, artist, albumUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 100, width: 135, borderRadius: 10 }}
        source={{
          uri:
            albumUrl ||
            "https://i.pinimg.com/originals/d4/af/31/d4af318787315ed1398f51bde0caf405.png",
        }}
      />
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View>
          <Text style={{ fontWeight: "700", fontSize: 17 }}>{name}</Text>
          <Text style={{ color: "yellow" }}>{artist}</Text>
        </View>
        <AntDesign
          name="heart"
          size={24}
          style={{ position: "absolute", top: 17, left: 115 }}
        />
      </View>
    </View>
  );
};

export default MusicName;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "grey",
    height: 150,
    width: 150,
    alignItems: "center",
    borderRightWidth: 0.2,
    borderRightColor: "#393e46",
    padding: 5,
  },
});
