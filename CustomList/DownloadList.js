import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import MusicName from "../CustomList/MusicName";
import {
  FontAwesome,
  AntDesign,
  Feather,
  MaterialIcons,
  Ionicons,
} from "react-native-vector-icons";
import { ScrollView } from "react-native";
import { TouchableOpacity, ActivityIndicator } from "react-native";

export default function DownloadList(props) {
  const [songname, setSongname] = useState([
    {
      name: "Dusk Till Dawn",
      img: {
        uri: "https://lh5.googleusercontent.com/proxy/6q29HXxx8RNDgLwGKkaKXEtaf616yJVk1XWxQoV-qH-lZwMhXilsKcmX9FSqWuAwCc-QYyWzT-kBnaywXxdMW0W9CBStnRyq1PcR22zwVc38QNB9X-eERIsAbLx5K6T4yIyXLQ5egM95Y7r8oFtim-p27A=s0-d",
      },
      id: "1",
      artist: "Zyan",
    },
    {
      name: "Girls like you",
      img: {
        uri: "https://static.parade.com/wp-content/uploads/2018/05/Girls-Like-You-HR.jpg",
      },
      id: "2",
      artist: "Maroon 5",
    },
    {
      name: "Peaches",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/f/fd/Peaches_single.jpg",
      },
      id: "3",
      artist: "Unknown",
    },
    {
      name: "Talking to the...",
      img: {
        uri: "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/ad1875717434f98e6f616e3ea8cbe0bf_500x500.jpg",
      },
      id: "4",
      artist: "Bruno Mars",
      category: "Podcast",
    },
    {
      name: "Kabira",
      img: {
        uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
      },
      id: "5",
      artist: "Arjit Singh",
      category: "Account",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={songname}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MusicPlayer", { item })}
              style={styles.list}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: "100%",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                {/* Icon */}
                <View style={{ justifyContent: "center", padding: 10 }}>
                  <FontAwesome name="music" size={24} color="black" />
                </View>
                <View style={{ height: "100%", justifyContent: "center" }}>
                  <Text style={{ fontSize: 17, fontWeight: "700" }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "600",
                      color: "yellow",
                    }}
                  >
                    {item.artist}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  paddingRight: 15,
                }}
              >
                {/* Icon */}
                <Ionicons name="ios-heart" size={24} color="black" />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    backgroundColor: "black",
  },
  list: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "grey",
    borderBottomWidth: 0.3,
    borderColor: "black",
  },
});
