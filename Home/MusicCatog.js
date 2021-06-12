import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class MusicCatog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Rock",
        img: {
          uri: "https://images.saymedia-content.com/.image/t_share/MTc0NTE3OTI5MzE5MDgxOTI5/songs-with-rock-in-the-title.png",
        },
        id: "1",
        data: [
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
        ],
      },
      {
        name: "HipHop",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDRpIe8HSeXtM2brY3lpSYr8OjpC72C3pLg&usqp=CAU",
        },
        id: "2",
      },
      {
        name: "Jazz",
        img: {
          uri: "https://images-platform.99static.com//EpLOcAwxczL4I_KoW8gxhM3DsJ4=/211x237:1784x1810/fit-in/500x500/99designs-contests-attachments/78/78973/attachment_78973821",
        },
        id: "3",
      },
      {
        name: "Classical",
        img: {
          uri: "https://images.thrillophilia.com/image/upload/s--PAtBIhcq--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/141/705/original/1548157147_3.jpg.jpg?1548157147",
        },
        id: "4",
      },
      {
        name: "Metal",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyckRVilur85edy_bTLKYpZf6yhMAitnYBw&usqp=CAU",
        },
        id: "5",
      },
    ];
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingLeft: 5,
          }}
        >
          Categories
        </Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("MusicCatogList", item)
                }
              >
                <Surface style={styles.surface}>
                  <Image
                    style={{ width: 105, height: 105, borderRadius: 10 }}
                    source={item.img}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                    }}
                  >
                    {item.name}
                  </Text>
                </Surface>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: "100%",
    marginBottom: 50,
  },
  surface: {
    width: 120,
    padding: 5,
    backgroundColor: "#2d2d2d",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default MusicCatog;
