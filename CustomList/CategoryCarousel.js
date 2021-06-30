import React, { useState, useEffect } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import { useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { Credentials } from "../Screens/Credentials";
import base64 from "react-native-base64";

const CategoryCarousel = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const spotify = Credentials();

  const [token, setToken] = useState("");

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          base64.encode(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/browse/categories?locale=sv_IN", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }).then((genreResponse) => {
        // console.log(genreResponse.data.categories.items);
        setGenres(genreResponse.data.categories.items);
      });
    });
  }, [spotify.ClientId, spotify.ClientSecret]);

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={20}
        ref={isCarousel}
        data={genres}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                paddingTop: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate("MusicCatogList", { item, token })
                }
              >
                <ImageBackground
                  blurRadius={0}
                  source={{ uri: item.icons[0].url }}
                  style={{
                    width: windowWidth * 0.7,
                    height: 150,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingBottom: 5,
                  }}
                  imageStyle={{ borderRadius: 20 }}
                >
                  <Text
                    style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                  >
                    {item.name}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.7}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        enableSnap={true}
        loop={true}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayDelay={1000}
        autoplayInterval={2000}
      />
      {/* <Pagination
        dotsLength={genres.length}
        dotColor="yellow"
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 5,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "red",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotColor="white"
        inactiveDotScale={0.3}
        tappableDots={true}
        containerStyle={{}}
      /> */}
    </View>
  );
};

export default CategoryCarousel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 190,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

/*
const [data, setData] = React.useState([
    {
      name: "Rock",
      img: {
        uri: "https://www.top10hq.com/wp-content/uploads/2015/04/60s-british-rock-music.jpg",
      },
      id: "1",
      list: [
        {
          name: "Dusk Till Dawn",
          img: {
            uri: "https://lh5.googleusercontent.com/proxy/6q29HXxx8RNDgLwGKkaKXEtaf616yJVk1XWxQoV-qH-lZwMhXilsKcmX9FSqWuAwCc-QYyWzT-kBnaywXxdMW0W9CBStnRyq1PcR22zwVc38QNB9X-eERIsAbLx5K6T4yIyXLQ5egM95Y7r8oFtim-p27A=s0-d",
          },
          id: "1",
          artist: "Zyan",
        },
        {
          name: "Girls like you",
          img: {
            uri: "https://static.parade.com/wp-content/uploads/2018/05/Girls-Like-You-HR.jpg",
          },
          id: "2",
          artist: "Maroon 5",
        },
        {
          name: "Peaches",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/f/fd/Peaches_single.jpg",
          },
          id: "3",
          artist: "Unknown",
        },
        {
          name: "Talking to the...",
          img: {
            uri: "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/ad1875717434f98e6f616e3ea8cbe0bf_500x500.jpg",
          },
          id: "4",
          artist: "Bruno Mars",
        },
        {
          name: "Kabira",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "5",
          artist: "Arjit Singh",
        },
        {
          name: "Kabiraaaaaaa",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "6",
          artist: "Arjit Singh",
        },
      ],
    },
    {
      name: "HipHop",
      img: {
        uri: "https://www.udiscovermusic.com/wp-content/uploads/2016/02/Hip-Hop-In-20-Songs-artwork-web-optimised-1000.jpg",
      },
      id: "2",
      list: [
        {
          name: "Dusk Till Dawn",
          img: {
            uri: "https://lh5.googleusercontent.com/proxy/6q29HXxx8RNDgLwGKkaKXEtaf616yJVk1XWxQoV-qH-lZwMhXilsKcmX9FSqWuAwCc-QYyWzT-kBnaywXxdMW0W9CBStnRyq1PcR22zwVc38QNB9X-eERIsAbLx5K6T4yIyXLQ5egM95Y7r8oFtim-p27A=s0-d",
          },
          id: "1",
          artist: "Zyan",
        },
        {
          name: "Girls like you",
          img: {
            uri: "https://static.parade.com/wp-content/uploads/2018/05/Girls-Like-You-HR.jpg",
          },
          id: "2",
          artist: "Maroon 5",
        },
        {
          name: "Peaches",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/f/fd/Peaches_single.jpg",
          },
          id: "3",
          artist: "Unknown",
        },
        {
          name: "Talking to the...",
          img: {
            uri: "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/ad1875717434f98e6f616e3ea8cbe0bf_500x500.jpg",
          },
          id: "4",
          artist: "Bruno Mars",
        },
        {
          name: "Kabira",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "5",
          artist: "Arjit Singh",
        },
        {
          name: "Kabiraaaaaaa",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "6",
          artist: "Arjit Singh",
        },
      ],
    },
    {
      name: "Jazz",
      img: {
        uri: "https://cdn-images.audioaddict.com/1/b/e/b/e/8/1bebe8759e23ab6a1b92e1d46e2e7f12.png",
      },
      id: "3",
      list: [
        {
          name: "Dusk Till Dawn",
          img: {
            uri: "https://lh5.googleusercontent.com/proxy/6q29HXxx8RNDgLwGKkaKXEtaf616yJVk1XWxQoV-qH-lZwMhXilsKcmX9FSqWuAwCc-QYyWzT-kBnaywXxdMW0W9CBStnRyq1PcR22zwVc38QNB9X-eERIsAbLx5K6T4yIyXLQ5egM95Y7r8oFtim-p27A=s0-d",
          },
          id: "1",
          artist: "Zyan",
        },
        {
          name: "Girls like you",
          img: {
            uri: "https://static.parade.com/wp-content/uploads/2018/05/Girls-Like-You-HR.jpg",
          },
          id: "2",
          artist: "Maroon 5",
        },
        {
          name: "Peaches",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/f/fd/Peaches_single.jpg",
          },
          id: "3",
          artist: "Unknown",
        },
        {
          name: "Talking to the...",
          img: {
            uri: "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/ad1875717434f98e6f616e3ea8cbe0bf_500x500.jpg",
          },
          id: "4",
          artist: "Bruno Mars",
        },
        {
          name: "Kabira",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "5",
          artist: "Arjit Singh",
        },
        {
          name: "Kabiraaaaaaa",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "6",
          artist: "Arjit Singh",
        },
      ],
    },
    {
      name: "Classical",
      img: {
        uri: "https://images.thrillophilia.com/image/upload/s--PAtBIhcq--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/141/705/original/1548157147_3.jpg.jpg?1548157147",
      },
      id: "4",
      list: [
        {
          name: "Dusk Till Dawn",
          img: {
            uri: "https://lh5.googleusercontent.com/proxy/6q29HXxx8RNDgLwGKkaKXEtaf616yJVk1XWxQoV-qH-lZwMhXilsKcmX9FSqWuAwCc-QYyWzT-kBnaywXxdMW0W9CBStnRyq1PcR22zwVc38QNB9X-eERIsAbLx5K6T4yIyXLQ5egM95Y7r8oFtim-p27A=s0-d",
          },
          id: "1",
          artist: "Zyan",
        },
        {
          name: "Girls like you",
          img: {
            uri: "https://static.parade.com/wp-content/uploads/2018/05/Girls-Like-You-HR.jpg",
          },
          id: "2",
          artist: "Maroon 5",
        },
        {
          name: "Peaches",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/f/fd/Peaches_single.jpg",
          },
          id: "3",
          artist: "Unknown",
        },
        {
          name: "Talking to the...",
          img: {
            uri: "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/ad1875717434f98e6f616e3ea8cbe0bf_500x500.jpg",
          },
          id: "4",
          artist: "Bruno Mars",
        },
        {
          name: "Kabira",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "5",
          artist: "Arjit Singh",
        },
        {
          name: "Kabiraaaaaaa",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "6",
          artist: "Arjit Singh",
        },
      ],
    },
    {
      name: "Metal",
      img: {
        uri: "https://www.superprof.co.in/blog/wp-content/uploads/2018/06/drums.jpg",
      },
      id: "5",
      list: [
        {
          name: "Dusk Till Dawn",
          img: {
            uri: "https://lh5.googleusercontent.com/proxy/6q29HXxx8RNDgLwGKkaKXEtaf616yJVk1XWxQoV-qH-lZwMhXilsKcmX9FSqWuAwCc-QYyWzT-kBnaywXxdMW0W9CBStnRyq1PcR22zwVc38QNB9X-eERIsAbLx5K6T4yIyXLQ5egM95Y7r8oFtim-p27A=s0-d",
          },
          id: "1",
          artist: "Zyan",
        },
        {
          name: "Girls like you",
          img: {
            uri: "https://static.parade.com/wp-content/uploads/2018/05/Girls-Like-You-HR.jpg",
          },
          id: "2",
          artist: "Maroon 5",
        },
        {
          name: "Peaches",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/f/fd/Peaches_single.jpg",
          },
          id: "3",
          artist: "Unknown",
        },
        {
          name: "Talking to the...",
          img: {
            uri: "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/ad1875717434f98e6f616e3ea8cbe0bf_500x500.jpg",
          },
          id: "4",
          artist: "Bruno Mars",
        },
        {
          name: "Kabira",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "5",
          artist: "Arjit Singh",
        },
        {
          name: "Kabiraaaaaaa",
          img: {
            uri: "http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg",
          },
          id: "6",
          artist: "Arjit Singh",
        },
      ],
    },
  ]);

*/
