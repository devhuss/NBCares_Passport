// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import VitalScreen from "../screens/tabs/vital";
import ZoomScreen from "../screens/ZoomMeetingLink";

import { TabNavigator } from "./TabNavigator";

import CustomDrawer from "../components/CustomDrawer";

import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: "#c5b783",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
      }}
      options={{ headerShown: false }}
    >
      <Drawer.Screen
        name="Home   "
        component={TabNavigator}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Vital Signs"
        component={VitalScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="thumbs-up-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Zoom Meeting"
        component={ZoomScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="videocam-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
