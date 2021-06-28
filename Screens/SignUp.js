import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth, db } from "../Config";
import firebase from "firebase";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
        db.collection("users").doc(auth.currentUser.uid).set({
          name: username,
          email: email,
          imgUrl: "",
          phone: "",
        });
        props.navigation.navigate("HomeScreen");
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: "https://i.imgur.com/pflrJZ2.jpg" }}
        style={styles.background}
      >
        <View
          style={{
            height: "60%",
            width: "100%",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <TextInput
            style={styles.inputuser}
            placeholder="Username"
            placeholderTextColor="yellow"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.inputemail}
            placeholder="Email"
            placeholderTextColor="yellow"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.inputpass}
            placeholder="Password"
            placeholderTextColor="yellow"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity onPress={register} style={styles.button}>
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
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: 0,
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
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
    marginTop: 0,
    marginBottom: 50,
  },
});
