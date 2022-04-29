// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import VitalScreen from "../screens/tabs/vital";
import ZoomScreen from "../screens/ZoomMeetingLink";

import  { TabNavigator } from "./TabNavigator";

import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent ={props => <CustomDrawer {...props}/>}  initialRouteName = "Home">
    <Drawer.Screen name="Home   " component={TabNavigator} options={{ headerShown: false }} />
    <Drawer.Screen name="Vital Signs" component={VitalScreen} />
    <Drawer.Screen name="Zoom Meeting" component={ZoomScreen} />
  </Drawer.Navigator>
  );
};

export { DrawerNavigator };