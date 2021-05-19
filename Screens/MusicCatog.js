import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class MusicCatog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Rock",
        img: require("../assets/welcome.png"),
        id: "1",
      },
      {
        name: "HipHop",
        img: require("../assets/welcome.png"),
        id: "2",
      },
      {
        name: "Jazz",
        img: require("../assets/welcome.png"),
        id: "3",
      },
      {
        name: "Classical",
        img: require("../assets/welcome.png"),
        id: "4",
      },
      {
        name: "Metal",
        img: require("../assets/welcome.png"),
        id: "5",
      },
    ];
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingLeft: 5,
          }}
        >
          Categories
        </Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <Surface style={styles.surface}>
                <Image
                  style={{ width: 110, height: 110, borderRadius: 20 }}
                  source={item.img}
                />
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  {item.name}
                </Text>
              </Surface>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
  },
  surface: {
    width: 130,
    padding: 5,
    backgroundColor: "#2d2d2d",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default MusicCatog;
