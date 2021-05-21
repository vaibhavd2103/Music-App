import React from "react";
import { ImageBackground } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome, MaterialIcons } from "react-native-vector-icons";

const Account = (props) => {
  return (
    <View style={styles.container}>
      {/* Header*/}
      <View style={styles.header}>
        <View
          style={{ width: "10%", justifyContent: "center", paddingLeft: 10 }}
        >
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Account</Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* Screen Content*/}
      {/* Profile photo */}
      <ImageBackground
        source={{ uri: "https://wallpaperaccess.com/full/3102346.jpg" }}
        style={{ width: 200, height: 200, marginTop: 20, marginBottom: 20 }}
        imageStyle={{ borderRadius: 200 }}
      >
        <FontAwesome
          name="camera"
          size={35}
          color="grey"
          style={{ position: "absolute", top: 155, left: 155 }}
        />
      </ImageBackground>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* Realname */}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Display name
            </Text>
            <TextInput
              placeholder="Vaibhav Dange"
              placeholderTextColor="yellow"
              style={styles.userinput}
              /*value="Vaibhav Dange"*/
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View>
        {/* Userinfo */}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Username
            </Text>
            <TextInput
              placeholder="vaibhavd2103"
              placeholderTextColor="yellow"
              style={styles.userinput}
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View>
        {/* Email */}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Email
            </Text>
            <TextInput
              placeholder="vaibhav@gmail.com"
              placeholderTextColor="yellow"
              style={styles.userinput}
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View>
        {/* Contact Number */}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Contact info
            </Text>
            <TextInput
              placeholder="7038161505"
              placeholderTextColor="yellow"
              style={styles.userinput}
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View>
        <View style={styles.signout}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
              SignOut
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    height: 60,
    width: "100%",
    backgroundColor: "yellow",
    flexDirection: "row",
  },
  userinput: {
    width: "70%",
    height: 40,
    backgroundColor: "#222831",
    borderRadius: 10,
    paddingLeft: 10,
  },
  userinfo: {
    width: "100%",
    height: 80,
    backgroundColor: "black",
    padding: 5,
    flexDirection: "row",
  },
  signout: {
    backgroundColor: "yellow",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 40,
  },
});
