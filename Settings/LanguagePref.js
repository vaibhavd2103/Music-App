import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const LanguagePref = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container}>
        <Text>LanguagePref</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LanguagePref;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
