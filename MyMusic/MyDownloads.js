import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const MyDownloads = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container}>
        <Text>MyDownloads</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyDownloads;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
