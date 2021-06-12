import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import { useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native";

const PodcastCarousel = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = React.useState([
    {
      name: "Educational",
      img: {
        uri: "https://assets.teenvogue.com/photos/5e6bffbbdee1770008c6d9bd/16:9/w_2560%2Cc_limit/GettyImages-577674005.jpg",
      },
      id: "1",
    },
    {
      name: "Stories",
      img: {
        uri: "https://medienkindergarten.wien/fileadmin/_processed_/9/c/csm_geschichte_was-ist-deine_3e1cd650ca.jpg",
      },
      id: "2",
    },
    {
      name: "Workout",
      img: {
        uri: "https://img.etimg.com/photo/msid-74747053,quality-100/for-miles-a-great-bodyweight-workout-would-include-squats-push-ups-walking-lunges-.jpg",
      },
      id: "3",
    },
    {
      name: "Comedy",
      img: {
        uri: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tZWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      id: "4",
    },
    {
      name: "News",
      img: {
        uri: "http://vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg",
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
              <View style={{ elevation: 50 }}>
                <TouchableOpacity activeOpacity={0.5}>
                  <ImageBackground
                    blurRadius={3}
                    source={item.img}
                    style={{
                      width: windowWidth * 0.7,
                      height: 150,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    imageStyle={{ borderRadius: 30 }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 40,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
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
        autoplayInterval={3000}
      />
      <Pagination
        dotsLength={data.length}
        dotColor="yellow"
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "red",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotColor="white"
        inactiveDotScale={1}
        tappableDots={true}
        containerStyle={{}}
      />
    </View>
  );
};

export default PodcastCarousel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 230,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
