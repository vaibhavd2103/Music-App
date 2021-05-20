import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";
import Notifications from "./Screens/Notifications";
import Account from "./Screens/Account";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "react-native-vector-icons";
import { DrawerContent } from "./Screens/DrawerContent";
import MyMusic from "./Screens/MyMusic";
import Podcast from "./Screens/Podcast";
import Equalizer from "./Settings/Equalizer";
import LanguagePref from "./Settings/LanguagePref";
import StreamingQuality from "./Settings/StreamingQuality";
import DownloadQuality from "./Settings/DownloadQuality";
import MyDownloads from "./MyMusic/MyDownloads";
import MyFavs from "./MyMusic/MyFavs";
import MyLibrary from "./MyMusic/MyLibrary";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Equalizer"
          component={Equalizer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LanguagePref"
          component={LanguagePref}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StreamingQuality"
          component={StreamingQuality}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DownloadQuality"
          component={DownloadQuality}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyDownloads"
          component={MyDownloads}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyFavs"
          component={MyFavs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyLibrary"
          component={MyLibrary}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      activeColor="yellow"
      inactiveColor="white"
      barStyle={{ backgroundColor: "black" }}
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Podcast"
        component={Podcast}
        options={{
          tabBarColor: "grey",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="podcast" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Music"
        component={MyMusic}
        options={{
          tabBarColor: "darkgrey",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="music" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Music" component={BottomTab} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}

/*function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Music" component={BottomTab} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}*/
