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
    <View style={styles.container}>
      <LinearGradient
        colors={["orange", "yellow", "yellow", "orange"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
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
          <View style={{ width: "90%", flexDirection: "row" }}>
            <AntDesign name="search1" size={24} color="darkgrey" />
            <TextInput
              placeholder="Search"
              style={{ paddingLeft: 5, width: "80%" }}
            />
          </View>
          <View
            style={{ width: "10%", alignItems: "flex-end", paddingRight: 5 }}
          >
            <MaterialIcons name="keyboard-voice" size={28} color="darkgrey" />
          </View>
        </View>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {/*<View style={{ width: "100%", height: 200 }}>
          <View style={{ width: "100%", padding: 5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
                textAlign: "left",
              }}
            >
              Recently Played
            </Text>
          </View>
          <ScrollView style={{ width: "100%", height: 0 }} horizontal={true}>
            <MusicName name="Dil mere" artist="Local train" />
            <MusicName
              name="Dusk till down"
              artist="Zyan"
              albumUrl="https://i1.sndcdn.com/artworks-000405545727-arfwqx-t500x500.jpg"
            />
            <MusicName name="Treat you better" artist="Zyan" />
            <MusicName name="Zindagi" artist="Jubin Nautiyal" />
            <MusicName name="Channa mereya" artist="Artist:ABC" />
            <MusicName name="Tum mile" artist="Unknown" />
          </ScrollView>
        </View>
        <View style={{ width: "100%", height: 200 }}>
          <View style={{ width: "100%", padding: 5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
                textAlign: "left",
              }}
            >
              Today's Pick
            </Text>
          </View>
          <ScrollView style={{ width: "100%" }} horizontal={true}>
            <MusicName name="Dil mere" artist="Local train" />
            <MusicName
              name="Dusk till down"
              artist="Zyan"
              albumUrl="https://i1.sndcdn.com/artworks-000405545727-arfwqx-t500x500.jpg"
            />
            <MusicName name="Treat you better" artist="Zyan" />
            <MusicName name="Zindagi" artist="Jubin Nautiyal" />
            <MusicName name="Channa mereya" artist="Artist:ABC" />
            <MusicName name="Tum mile" artist="Unknown" />
          </ScrollView>
        </View>*/}
        <CategoryCarousel navigation={props.navigation} />
        <RecentlyPlayed navigation={props.navigation} />
        <Trending navigation={props.navigation} />
        <TodaysPick navigation={props.navigation} />
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

{
  /*<Modal
          transparent={true}
          animationType="fade"
          visible={isvisible}
          onRequestClose={() => changeModelVisible(false)}
        >
          <SearchModal />
        </Modal>*/
}
