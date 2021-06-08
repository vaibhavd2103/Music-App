import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import { useWindowDimensions } from "react-native";

const CarouselPodcast = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = React.useState([
    {
      name: "Rock",
      img: {
        uri: "https://images.saymedia-content.com/.image/t_share/MTc0NTE3OTI5MzE5MDgxOTI5/songs-with-rock-in-the-title.png",
      },
      id: "1",
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
  ]);
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={20}
        ref={isCarousel}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                paddingTop: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageBackground
                blurRadius={3}
                source={item.img}
                style={{
                  width: windowWidth * 0.7,
                  height: 200,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                imageStyle={{ borderRadius: 30 }}
              >
                <Text
                  style={{ color: "white", fontSize: 50, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
              </ImageBackground>
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
    </View>
  );
};

export default CarouselPodcast;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
