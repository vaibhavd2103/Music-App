import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "react-native-vector-icons";
import MyDownloads from "../MyMusic/MyDownloads";
import MyFavs from "../MyMusic/MyFavs";
import MyLibrary from "../MyMusic/MyLibrary";

const MyMusic = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "black" }}>
            My Music
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyDownloads")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <Ionicons name="play-circle-outline" size={37} color="black" />
          </View>
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>MyDownloads</Text>
            <Text style={{ fontSize: 15, color: "yellow" }}>6 songs</Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={30} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyFavs")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <Ionicons name="play-circle-outline" size={37} color="black" />
          </View>
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              My Favourite
            </Text>
            <Text style={{ fontSize: 15, color: "yellow" }}>8 songs</Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={30} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyLibrary")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <Ionicons name="play-circle-outline" size={37} color="black" />
          </View>
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>My Library</Text>
            <Text style={{ fontSize: 15, color: "yellow" }}>15 songs</Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={30} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  header: {
    height: 60,
    width: "100%",
    backgroundColor: "yellow",
    alignItems: "center",
    flexDirection: "row",
  },
  list: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    padding: 5,
    flexDirection: "row",
    borderBottomWidth: 0.2,
  },
});
