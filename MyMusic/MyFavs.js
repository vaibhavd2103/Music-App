import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MyFavs = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container}>
        <Text>MyFavs</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyFavs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
