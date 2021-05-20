import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const Equalizer = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container}>
        <Text>Equalizer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Equalizer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
