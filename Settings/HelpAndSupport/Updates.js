import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons, MaterialIcons } from "react-native-vector-icons";

const Updates = (props) => {
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
          <Text style={styles.headertext}>Updates</Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* --------------------------------------------------Bell image------------------------------------------------------------ */}
      <Image source={require("../../assets/bell.png")} style={styles.bell} />
      {/* --------------------------------------------- Software update info--------------------------------*/}
      <View style={{ width: "100%", padding: 10 }}>
        <Text style={{ fontWeight: "600", color: "white", fontSize: 17 }}>
          Software Update Information
        </Text>
        <Text style={styles.updateinfo}>. Version: A176FJHDSJ5678123KJH</Text>
        <Text style={styles.updateinfo}>. Size: 20.21 MB</Text>
        <Text style={styles.updateinfo}>
          . Security Patch Level: 1st May 2021
        </Text>
      </View>
      {/*---------------------------------------What's new ----------------------------------------*/}
      <View style={{ width: "100%", padding: 10 }}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text
            style={{
              fontWeight: "600",
              color: "white",
              fontSize: 17,
              marginRight: 5,
            }}
          >
            What's New
          </Text>
          <MaterialIcons name="celebration" size={24} color="white" />
        </View>
        <Text style={styles.updateinfo}>. Updated Podcast</Text>
        <Text style={styles.updateinfo}>
          . New navigation feature available
        </Text>
        <Text style={styles.updateinfo}>. Improved Streaming Quality</Text>
      </View>
      {/*---------------------------------------Learn more at ----------------------------------------*/}
      <View style={{ width: "100%", padding: 10 }}>
        <Text style={{ fontWeight: "600", color: "white", fontSize: 17 }}>
          Learn more at:
        </Text>
        <Text style={styles.updateinfo}>
          http://doc.horenmusik.com/jkahgdi/kajsdgbka/doc.html
        </Text>
      </View>
    </View>
  );
};

export default Updates;

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
  bell: {
    height: 200,
    width: 200,
    marginTop: 30,
    marginBottom: 20,
  },
  updateinfo: {
    fontWeight: "400",
    color: "grey",
    fontSize: 15,
    marginLeft: 10,
  },
});
