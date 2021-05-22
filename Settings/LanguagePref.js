import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const LanguagePref = (props) => {
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
          <Text style={styles.headertext}>Set Language</Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langtext}>Arabic</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LanguagePref;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
  lang: {
    width: "100%",
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    paddingLeft: 10,
  },
  langtext: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
