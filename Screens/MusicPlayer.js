import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  Ionicons,
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

const MusicPlayer = ({ navigation, route }) => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/minimal.mp3")
    );

    setSound(sound);

    console.log("Playing Sound");
    (await sound.playAsync()) && sound.setVolumeAsync(1);
  }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.pauseAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  const [status, setStatus] = useState("play");

  const play_pause = () => {
    if (status === "play") {
      setStatus("pause"), playSound();
    } else {
      setStatus("play"), console.log("Unloading Sound");
      sound.pauseAsync();
    }
  };

  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={item.img}
        blurRadius={10}
      >
        {/* -------------------------------------------------Header -------------------------------------- */}
        <View style={styles.header}>
          <View
            style={{ width: "20%", height: "100%", justifyContent: "center" }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={35} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "60%",
              height: "100%",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: "transparent",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Playing now{" "}
            </Text>
            <Ionicons name="volume-medium" size={24} color="white" />
          </View>
          <View
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 15,
            }}
          >
            <SimpleLineIcons name="playlist" size={24} color="white" />
          </View>
        </View>
        {/* ------------------------------------------------- Mid Section -------------------------------------- */}
        <View style={{ height: "70%", width: "100%", alignItems: "center" }}>
          <View style={styles.imagebackview}>
            <Image source={item.img} style={styles.image} />
          </View>
          <View style={styles.songnamesec}>
            {/* ------------------------------------------------- Song name -------------------------------------- */}
            <View>
              <Text
                style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "normal" }}
              >
                {item.artist}
              </Text>
            </View>
            {/**Icon */}
            <Ionicons name="heart" size={28} color="white" />
          </View>
          {/* ------------------------------------------------- Slider -------------------------------------- */}
          <Slider
            style={{
              width: "85%",
              height: 10,
              marginTop: 50,
              backgroundColor: "transparent",
            }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          {/* ------------------------------------------------- Time -------------------------------------- */}
          <View
            style={{
              width: "85%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={styles.time}>0:00</Text>
            <Text style={styles.time}>3:18</Text>
          </View>
        </View>
        {/* ------------------------------------------------- Bottom Section -------------------------------------- */}
        <View
          style={{
            height: "20%",
            width: "100%",
            alignItems: "center",
            backgroundColor: "black",
            flexDirection: "row",
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            opacity: 0.8,
          }}
        >
          <View style={styles.icon}>
            <TouchableOpacity>
              <Feather name="shuffle" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 20,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="play-back" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity style={styles.playpause} onPress={play_pause}>
              <Ionicons name={status} size={35} color="#434b56" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 20,
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="play-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="replay" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  header: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  imgBackground: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  imagebackview: {
    height: 305,
    width: 305,
    borderRadius: 20,
    elevation: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  songnamesec: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    marginTop: 30,
    justifyContent: "space-between",
  },
  time: {
    color: "white",
    fontSize: 15,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playpause: {
    height: 70,
    width: 70,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
