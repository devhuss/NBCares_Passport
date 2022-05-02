
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Navigation } from "./Navigation";

import { Image } from "react-native"


const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home  " component={Navigation}  options={{ headerShown: false, 
          tabBarIcon: () => (
            <Image
              source={require("../assets/home-bottom-tab.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export { TabNavigator };