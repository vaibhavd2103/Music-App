import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PodcastCarousel from "../CustomList/PodcastCarousel";
import { LinearGradient } from "expo-linear-gradient";
import PopularRadiosList from "../CustomList/PopularRadiosList";
import MotivationList from "../CustomList/MotivationList";

const Podcast = (props) => {
  return (
    <LinearGradient
      colors={[
        "yellow",
        "orange",
        "orange",
        "#FF7A00",
        "#CF6300",
        "#894200",
        "#572A00",
        "black",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
        Podcasts
      </Text>
      <PodcastCarousel />
      <PopularRadiosList navigation={props.navigation} />
      <MotivationList navigation={props.navigation} />
    </LinearGradient>
  );
};

export default Podcast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
});
