import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { VitalStackNavigator } from "./MainStackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Vital Signs" component={VitalStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
