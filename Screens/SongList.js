import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

const SongList = ({ navigation, route }) => {
  const { item, token } = route.params;
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    axios(`https://api.spotify.com/v1/playlists/${item.id}/tracks`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((tracksResponse) => {
      // console.log(tracksResponse.data.items);
      setSongList(tracksResponse.data.items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: item.images[0].url }}
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          // paddingHorizontal: 10,
        }}
        blurRadius={10}
      >
        <View style={{ width: "100%", paddingHorizontal: 10 }}>
          <FlatList
            data={songList}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    height: 70,
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(150,150,150,0.3)",
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderTopColor: "grey",
                    borderBottomColor: "black",
                    marginVertical: 5,
                    paddingLeft: 10,
                    borderRadius: 10,
                  }}
                  onPress={() => navigation.navigate("MusicPlayer", { item })}
                >
                  <View style={{ width: "15%" }}>
                    <Image
                      source={{ uri: item.track.album.images[0].url }}
                      style={{ height: 50, width: 50 }}
                    />
                  </View>
                  <View style={{ width: "85%", paddingLeft: 15 }}>
                    <Text
                      style={{ color: "white", width: "90%" }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.track.name}
                    </Text>
                    <Text style={{ color: "white" }}>
                      {item.track.artists[0].name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 40,
    paddingHorizontal: 0,
  },
});
