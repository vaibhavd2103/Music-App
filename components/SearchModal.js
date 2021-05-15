import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Modal } from "react-native";

const SearchModal = () => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      disabled={false}
      style={styles.container}
    >
      <View style={styles.model}>
        <Text>Modal There</Text>
      </View>
    </TouchableOpacity>
  );
};

export { SearchModal };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  model: {
    backgroundColor: "orange",
    width: 400,
    height: 60,
  },
});
