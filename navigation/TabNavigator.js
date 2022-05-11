import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Navigation } from "./Navigation";

import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Navigation}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              name={"home-sharp"}
              size={25}
              color={"black"}
              style={{ justifyContent: "center", alignItems:"center" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
