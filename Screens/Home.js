import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Modal } from "react-native";
import MusicName from "../CustomList/MusicName";
import { FontAwesome, AntDesign, Feather } from "react-native-vector-icons";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { SearchModal } from "../components/SearchModal";

const Home = ({ navigation }) => {
  /*const [isvisible, setIsVisible] = useState(false);

  const changeModelVisible = (bool) => {
    setIsVisible(bool);
  };*/

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 22,
              color: "black",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Music
          </Text>
        </View>
        <View style={{ width: "10%", alignItems: "flex-end", paddingRight: 7 }}>
          {/*<TouchableOpacity onPress={() => changeModelVisible(true)}>*/}
        </View>
      </View>
      <View style={styles.searchcontainer}>
        <View style={styles.searchbar}>
          <AntDesign name="search1" size={24} color="darkgrey" />
          <TextInput
            placeholder="Search"
            style={{ paddingLeft: 5, width: "90%" }}
          />
        </View>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {/*<Modal
          transparent={true}
          animationType="slide"
          visible={isvisible}
          onRequestClose={() => changeModelVisible(false)}
        >
          <SearchModal />
        </Modal>*/}
        <MusicName name="Dil mere" details="Artist: Local train" />
        <MusicName name="Dusk till down" details="Artist: Zyan" />
        <MusicName name="Treat you better" details="Artist: Zyan" />
        <MusicName name="Zindagi" details="Artist: Jubin Nautiyal" />
        <MusicName name="Channa mereya" details="Artist:ABC" />
        <MusicName name="Tum mile" details="Artist: Unknown" />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "yellow",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  searchcontainer: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    width: "70%",
    maxWidth: 1000,
    height: 30,
    alignItems: "center",
    paddingLeft: 6,
  },
});
