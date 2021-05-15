import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://wallpaperaccess.com/full/3039969.jpg" }}
        style={styles.background}
      >
        <Image
          style={styles.welcome}
          source={require("../assets/welcome.png")}
        />
        <TextInput
          placeholder="Email"
          style={styles.inputemail}
          placeholderTextColor="yellow"
        />
        <TextInput
          placeholder="Password"
          style={styles.inputpassword}
          placeholderTextColor="yellow"
        />
        <TouchableOpacity
          onPress={() => props.navigation.replace("HomeScreen")}
          style={styles.button}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.signup}>
          <Text style={{ fontSize: 18, color: "white" }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <Text
              style={{
                marginLeft: 3,
                fontSize: 20,
                fontWeight: "700",
                color: "yellow",
              }}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    width: 400,
    height: 120,
  },
  inputemail: {
    width: "70%",
    maxWidth: 500,
    backgroundColor: "grey",
    height: 50,
    marginTop: 50,
    borderRadius: 20,
    paddingLeft: 10,
  },
  inputpassword: {
    width: "70%",
    maxWidth: 500,
    backgroundColor: "grey",
    height: 50,
    marginTop: 10,
    borderRadius: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "yellow",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 250,
  },
  signup: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
});
