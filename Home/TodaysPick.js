import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList, Linking } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";
import axios from "axios";
import { Credentials } from "../Screens/Credentials";
import base64 from "react-native-base64";

export default function TodaysPick({ navigation }) {
  const [playlist, setPlaylist] = useState([]);
  const [songdata, setSongdata] = useState({});

  const spotify = Credentials();
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          base64.encode(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      // setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }).then((genreResponse) => {
        // console.log(genreResponse.data.name);
        setPlaylist(genreResponse.data.tracks.items);

        setSongdata(genreResponse.data);
      });
    });
  }, [spotify.ClientId, spotify.ClientSecret]);
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
        {songdata.name}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "normal",
          color: "#a1a1a1",
          paddingLeft: 5,
          paddingBottom: 5,
          maxWidth: "90%",
        }}
      >
        {songdata.description}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => JSON.stringify(index)}
        data={playlist}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("MusicPlayer", { item });
                Linking.openURL(item.track.external_urls.spotify);
              }}
            >
              <Surface style={styles.surface}>
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={{
                    width: 110,
                    height: 110,
                    justifyContent: "flex-end",
                    padding: 7,
                  }}
                  source={{ uri: item.track.album.images[0].url }}
                >
                  <AntDesign name="play" size={24} color="darkgrey" />
                </ImageBackground>
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "600",
                    maxWidth: 115,
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.track.name}
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
    height: 200,
    width: "100%",
    marginBottom: 10,
  },
  surface: {
    width: 115,
    padding: 5,
    backgroundColor: "transparent",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

/*
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";

export class RecentlyPlayed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Dusk Till Dawn",
        img: {
          uri: "https://lh5.googleusercontent.com/proxy/6q29HXxx8RNDgLwGKkaKXEtaf616yJVk1XWxQoV-qH-lZwMhXilsKcmX9FSqWuAwCc-QYyWzT-kBnaywXxdMW0W9CBStnRyq1PcR22zwVc38QNB9X-eERIsAbLx5K6T4yIyXLQ5egM95Y7r8oFtim-p27A=s0-d",
        },
        id: "1",
      },
      {
        name: "Girls like you",
        img: {
          uri: "https://static.parade.com/wp-content/uploads/2018/05/Girls-Like-You-HR.jpg",
        },
        id: "2",
      },
      {
        name: "Peaches",
        img: {
          uri: "https://upload.wikimedia.org/wikipedia/en/f/fd/Peaches_single.jpg",
        },
        id: "3",
      },
      {
        name: "Talking to the...",
        img: {
          uri: "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/ad1875717434f98e6f616e3ea8cbe0bf_500x500.jpg",
        },
        id: "4",
      },
      {
        name: "Kabira",
        img: {
          uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
        },
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
          Recently Played
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("MusicPlayer")}
              >
                <Surface style={styles.surface}>
                  <ImageBackground
                    imageStyle={{ borderRadius: 10 }}
                    style={{
                      width: 120,
                      height: 120,
                      justifyContent: "flex-end",
                      padding: 7,
                    }}
                    source={item.img}
                  >
                    <AntDesign name="play" size={24} color="darkgrey" />
                  </ImageBackground>
                  <Text
                    style={{ color: "white", fontSize: 15, fontWeight: "600" }}
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
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: "100%",
    marginBottom: 50,
  },
  surface: {
    width: 130,
    padding: 5,
    backgroundColor: "black",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default RecentlyPlayed;

*/
