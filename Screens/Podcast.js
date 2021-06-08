import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CarouselPodcast from "../CustomList/CarouselPodcast";

const Podcast = (props) => {
  return (
    <View style={styles.container}>
      <CarouselPodcast />
    </View>
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
