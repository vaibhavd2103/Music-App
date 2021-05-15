import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const SignUp = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: "https://i.imgur.com/pflrJZ2.jpg" }}
        style={styles.background}
      >
        <TextInput
          style={styles.inputuser}
          placeholder="Username"
          placeholderTextColor="yellow"
        />
        <TextInput
          style={styles.inputemail}
          placeholder="Email"
          placeholderTextColor="yellow"
        />
        <TextInput
          style={styles.inputpass}
          placeholder="Password"
          placeholderTextColor="yellow"
        />
        <TouchableOpacity
          onPress={() => props.navigation.replace("HomeScreen")}
          style={styles.button}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>SignUp</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputuser: {
    backgroundColor: "grey",
    width: "70%",
    height: 45,
    borderRadius: 15,
    maxWidth: 500,
    paddingLeft: 10,
  },
  inputemail: {
    backgroundColor: "grey",
    width: "70%",
    height: 45,
    borderRadius: 15,
    maxWidth: 500,
    paddingLeft: 10,
    marginTop: 10,
  },
  inputpass: {
    backgroundColor: "grey",
    width: "70%",
    height: 45,
    borderRadius: 15,
    maxWidth: 500,
    paddingLeft: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "yellow",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 270,
  },
});
