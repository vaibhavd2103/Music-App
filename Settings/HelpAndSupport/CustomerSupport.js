import React from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
} from "react-native-vector-icons";

const CustomerSupport = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Settings")}
          >
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.headertext}>Customer Support</Text>
        </View>

        <View style={{ width: "10%" }}></View>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* ------------------------- contact us Section -------------------------------------*/}
        <Text style={styles.title}>Contact Us</Text>
        {/* ------------------------- phone number Section -------------------------------------*/}
        <TouchableOpacity onPress={() => {}} style={styles.list}>
          <View style={styles.list}>
            <FontAwesome name="phone" size={26} color="white" />
            <Text style={styles.value}>
              {"  "}:{"  "} 020-101202303{"  "}
            </Text>
          </View>
        </TouchableOpacity>
        {/*------------------------- email Section -------------------------------------*/}
        <TouchableOpacity onPress={() => {}} style={styles.list}>
          <View style={styles.list}>
            <MaterialIcons name="email" size={25} color="white" />
            <Text style={styles.value}>
              {"  "}:{"  "} abc@gmail.com{"  "}
            </Text>
          </View>
        </TouchableOpacity>
        {/*------------------------- FAQ Section -------------------------------------*/}
        <Text style={styles.title}>FAQ</Text>
        {/*------------------------- FAQ's -------------------------------------------*/}
        {/* -----------------------Couldnt download songs------------------------------------------ */}
        <View style={{ width: "100%" }}>
          <TouchableOpacity style={styles.que}>
            <View>
              <Text style={{ color: "white" }}>Couldn't download songs?</Text>
            </View>
          </TouchableOpacity>
          {/* ---------------------Equalizer not working----------------------------------- */}
          <TouchableOpacity style={styles.que}>
            <View>
              <Text style={{ color: "white" }}>Equalizer not working?</Text>
            </View>
          </TouchableOpacity>
          {/* ---------------------Streaming issues----------------------------------- */}
          <TouchableOpacity style={styles.que}>
            <View>
              <Text style={{ color: "white" }}>Streaming issues?</Text>
            </View>
          </TouchableOpacity>
          {/* ---------------------Missing Songs----------------------------------- */}
          <TouchableOpacity style={styles.que}>
            <View>
              <Text style={{ color: "white" }}>Missing Songs?</Text>
            </View>
          </TouchableOpacity>
          {/* ---------------------Podcast issues----------------------------------- */}
          <TouchableOpacity style={styles.que}>
            <View>
              <Text style={{ color: "white" }}>Podcast issues?</Text>
            </View>
          </TouchableOpacity>
          {/* ---------------------Player not working----------------------------------- */}
          <TouchableOpacity style={styles.que}>
            <View>
              <Text style={{ color: "white" }}>Player not working?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Enter your query"
          placeholderTextColor="yellow"
          style={styles.queryinput}
        />
        <View style={styles.submit}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomerSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    backgroundColor: "yellow",
    width: "100%",
    height: 60,
    flexDirection: "row",
  },
  headertext: {
    fontSize: 22,
    fontWeight: "bold",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 5,
    marginTop: 10,
  },
  value: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  que: {
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    height: 40,
  },
  queryinput: {
    width: "70%",
    maxWidth: 700,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#222831",
    marginTop: 10,
    paddingLeft: 10,
  },
  submit: {
    width: 150,
    height: 50,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
  },
});
