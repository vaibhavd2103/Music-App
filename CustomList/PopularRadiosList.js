import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";

export default function PopularRadiosList(props) {
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
    },
    {
      name: "Kabira",
      img: {
        uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
      },
      id: "5",
      artist: "Arjit Singh",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          paddingLeft: 15,
        }}
      >
        Popular Radios
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={songname}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MusicPlayer", { item })}
            >
              <Surface style={styles.surface}>
                <View
                  style={{
                    width: 125,
                    height: 125,
                    elevation: 20,
                    backgroundColor: "white",
                    borderRadius: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowOffset: {
                      width: 20,
                      height: 20,
                    },
                    shadowOpacity: 1,
                  }}
                >
                  <ImageBackground
                    imageStyle={{ borderRadius: 200 }}
                    style={{
                      width: 120,
                      height: 120,
                      justifyContent: "flex-end",
                      padding: 7,
                    }}
                    source={item.img}
                  ></ImageBackground>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "700",
                    marginTop: 5,
                  }}
                >
                  {item.name}
                </Text>
              </Surface>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: "100%",
    marginBottom: 10,
  },
  surface: {
    width: 130,
    padding: 5,
    backgroundColor: "transparent",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
