import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Vital Signs" component={VitalStackNavigator} />
    </Drawer.Navigator>
  );
};

const VitalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Vital Signs" component={VitalScreen} />
    </Stack.Navigator>
  );
};

export default DrawerNavigator;
