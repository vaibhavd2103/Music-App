import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export function DrawerContent(props) {
  return (
    <LinearGradient
      colors={["black", "black", "black", "black"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, backgroundColor: "yellow", margin: 0 }}
    >
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userinfo}>
            <LinearGradient
              colors={["orange", "yellow", "yellow", "orange"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1, backgroundColor: "yellow", padding: 10 }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate("Account")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Avatar.Image
                    source={{
                      uri: "https://wallpaperaccess.com/full/3102346.jpg",
                    }}
                    size={60}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Title style={{ color: "black", fontWeight: "400" }}>
                      Vaibhav Dange
                    </Title>
                    <Caption style={{ fontSize: 15, color: "grey" }}>
                      @vaibhavd2103
                    </Caption>
                  </View>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <Drawer.Section style={styles.section}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="yellow" size={size} />
              )}
              label={() => (
                <Text
                  style={{ color: "yellow", fontWeight: "300", fontSize: 17 }}
                >
                  Music
                </Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color="yellow" size={size} />
              )}
              label={() => (
                <Text
                  style={{ color: "yellow", fontWeight: "300", fontSize: 17 }}
                >
                  Settings
                </Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  drawerContent: {},
  userinfo: {
    flexDirection: "row",
    backgroundColor: "yellow",
  },
  section: {
    paddingTop: 220,
  },
});
