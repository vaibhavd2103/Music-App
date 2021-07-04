import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import MusicName from "../CustomList/MusicName";
import {
  FontAwesome,
  AntDesign,
  Feather,
  MaterialIcons,
} from "react-native-vector-icons";
import { ScrollView } from "react-native";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { SearchModal } from "../components/SearchModal";
import { LinearGradient } from "expo-linear-gradient";
import MusicCatog from "../Home/MusicCatog";
import RecentlyPlayed from "../Home/RecentlyPlayed";
import Trending from "../Home/Trending";
import TodaysPick from "../Home/TodaysPick";
import CategoryCarousel from "../CustomList/CategoryCarousel";
import { ProgressViewIOSComponent } from "react-native";

const Home = (props) => {
  const [isvisible, setIsVisible] = useState(false);

  const changeModelVisible = (bool) => {
    setIsVisible(bool);
  };

  const [isLoading, setLoading] = useState(true);

  return (
    <LinearGradient colors={["black", "black"]} style={styles.container}>
      <LinearGradient
        colors={["transparent", "transparent", "transparent"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Feather name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 22,
              color: "white",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Music
          </Text>
        </View>
        <View style={{ width: "10%", alignItems: "flex-end", paddingRight: 7 }}>
          {/*<TouchableOpacity onPress={() => changeModelVisible(true)}>
              <AntDesign name="search1" size={26} />
            </TouchableOpacity>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isvisible}
              onRequestClose={() => changeModelVisible(false)}
            >
              <SearchModal />
            </Modal>*/}
        </View>
      </LinearGradient>
      <View style={styles.searchcontainer}>
        <View style={styles.searchbar}>
          <View
            style={{ width: "90%", flexDirection: "row", alignItems: "center" }}
          >
            <AntDesign name="search1" size={20} color="darkgrey" />
            <TextInput
              placeholder="Search"
              style={{ paddingLeft: 5, width: "80%" }}
            />
          </View>
          <View
            style={{ width: "10%", alignItems: "flex-end", paddingRight: 5 }}
          >
            <MaterialIcons name="keyboard-voice" size={24} color="darkgrey" />
          </View>
        </View>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <CategoryCarousel navigation={props.navigation} />
        <RecentlyPlayed navigation={props.navigation} />
        <Trending navigation={props.navigation} />
        <TodaysPick navigation={props.navigation} />
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 0,
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "transparent",
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
