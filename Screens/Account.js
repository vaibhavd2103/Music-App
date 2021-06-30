import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Feather, FontAwesome, MaterialIcons } from "react-native-vector-icons";
import { auth, db } from "../Config";
import * as ImagePicker from "expo-image-picker";

const Account = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [userData, setUserData] = useState([]);

  const getUser = async () => {
    await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
          console.log(doc.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const update = async () => {
    await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .update({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
      })
      .then(() => {
        console.log("User Updated!");
        Alert.alert(
          "Profile Updated!",
          "Your profile has been updated successfully."
        );
      });

    props.navigation.navigate("Home");
  };

  const signOutUser = () => {
    auth.signOut().then(() => {
      props.navigation.replace("Login");
    });
  };

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
      <View
        style={{
          width: 200,
          height: 200,
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: "white",
          borderRadius: 200,
        }}
      >
        {image && (
          <Image
            source={{
              uri: image || userData.imgUrl,
            }}
            style={{ width: 200, height: 200, borderRadius: 200 }}
          />
        )}
        <FontAwesome
          name="camera"
          size={35}
          color="grey"
          style={{ position: "absolute", top: 155, left: 155 }}
          onPress={pickImage}
        />
      </View>
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
              placeholder="Enter your name"
              placeholderTextColor="yellow"
              style={styles.userinput}
              value={userData ? userData.name || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, name: txt })}
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

        {/* Email */}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Email
            </Text>
            <TextInput
              placeholder="Enter your Email"
              placeholderTextColor="yellow"
              style={styles.userinput}
              value={userData ? userData.email || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, email: txt })}
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
              placeholder="Enter your contact no."
              placeholderTextColor="yellow"
              style={styles.userinput}
              value={userData ? userData.phone || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, phone: txt })}
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
          <TouchableOpacity onPress={update}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signout}>
          <TouchableOpacity onPress={signOutUser}>
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
    // paddingTop: 40,
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
    color: "yellow",
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
