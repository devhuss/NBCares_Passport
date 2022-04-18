import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, VitalStackNavigator } from "./MainStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      {/* <Tab.Screen name="Vital Signs" component={VitalStackNavigator} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
