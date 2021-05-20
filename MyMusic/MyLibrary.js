import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const MyLibrary = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text>MyLibrary</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
