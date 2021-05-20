import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const StreamingQuality = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container}>
        <Text>StreamingQuality</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StreamingQuality;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
