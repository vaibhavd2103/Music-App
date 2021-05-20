import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const DownloadQuality = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container}>
        <Text>DownloadQuality</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DownloadQuality;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
