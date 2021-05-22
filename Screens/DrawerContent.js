import React from "react";
import { View, StyleSheet, Alert } from "react-native";
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
  MaterialIcons,
} from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

export function DrawerContent(props) {
  return (
    <LinearGradient
      colors={["black", "black", "black", "black"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, backgroundColor: "yellow", margin: 0 }}
    >
      <DrawerContentScrollView {...props}>
        {/* -------------------------Drawer Content-------------------------------- */}
        <View style={styles.drawerContent}>
          {/* -------------------------User Info-------------------------------- */}
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
          {/* -------------------------Drawer Section-------------------------------- */}
          <Drawer.Section style={styles.section}>
            {/* -------------------------Music-------------------------------- */}
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
            {/* -------------------------Settings-------------------------------- */}
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
            {/* -------------------------Storage-------------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="storage" color="yellow" size={size} />
              )}
              label={() => (
                <Text
                  style={{ color: "yellow", fontWeight: "300", fontSize: 17 }}
                >
                  Storage
                </Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {}}
            />
            {/* -------------------------Progress Bar-------------------------------- */}
            <ProgressBar
              progress={0.2}
              color={"yellow"}
              style={{ width: "70%", marginLeft: 20 }}
            />
            <View style={{ flexDirection: "row", width: "100%" }}>
              <Text style={{ color: "yellow", marginLeft: 20, fontSize: 14 }}>
                24.1 GB
              </Text>
              <Text style={{ color: "#616100", marginLeft: 60, fontSize: 14 }}>
                101.8 GB free
              </Text>
            </View>
            {/* -------------------------Clear cache-------------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="broom" color="yellow" size={26} />
              )}
              label={() => (
                <Text
                  style={{ color: "yellow", fontWeight: "300", fontSize: 17 }}
                >
                  Clear cache
                </Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {
                Alert.alert("Cleared cache");
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
    paddingTop: 180,
  },
  clearcache: {},
});
