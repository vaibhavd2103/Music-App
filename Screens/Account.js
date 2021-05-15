import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "yellow" }}>This is Account Screen</Text>
      <LinearGradient
        colors={["orange", "yellow", "yellow", "orange"]}
        style={styles.button}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>SignOut</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  button: {
    height: 50,
    width: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
