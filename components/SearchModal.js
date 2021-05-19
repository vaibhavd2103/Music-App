import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Modal, TextInput } from "react-native";

const SearchModal = () => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      disabled={false}
      style={styles.container}
    >
      <LinearGradient
        colors={["orange", "yellow", "yellow", "orange"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.modal}
      >
        <TextInput
          placeholder="Enter to search"
          style={styles.search}
          placeholderTextColor="yellow"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export { SearchModal };

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  modal: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  search: {
    width: "50%",
    backgroundColor: "black",
    height: 40,
    borderRadius: 15,
    paddingLeft: 10,
  },
});
