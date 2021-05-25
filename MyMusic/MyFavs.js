import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MusicName from "../CustomList/MusicName";
import { Ionicons } from "react-native-vector-icons";

const MyFavs = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("My Music")}
          >
            <Ionicons name="chevron-back" size={35} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>My Downloads</Text>
        </View>
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("My Music")}
          >
            <Ionicons name="search-sharp" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <TouchableOpacity>
          <MusicName name="Dil mere" artist="Local train" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MusicName name="Dusk till down" artist="Zyan" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MusicName name="Treat you better" artist="Zyan" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MusicName name="Zindagi" artist="Jubin Nautiyal" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MusicName name="Channa mereya" artist="Artist:ABC" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MusicName name="Tum mile" artist="Unknown" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MyFavs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    backgroundColor: "yellow",
    flexDirection: "row",
    height: 60,
  },
});
