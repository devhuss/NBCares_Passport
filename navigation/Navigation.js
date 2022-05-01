import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Tasks from "../screens/tabs/Tasks";
import Steps from "../screens/tabs/Steps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PageContext } from "../context";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#551E18",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const Navigation = ({ navigation }) => {
  const { headers } = React.useContext(PageContext);
  return (
    <Stack.Navigator screenOptions={(screenOptionStyle, { headerShown: true })}>
      <Stack.Screen
        name="Home "
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu-outline" size={22} />
            </TouchableOpacity>
          ), headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="information-outline" size={22} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Tasks"
        options={{ headerShown: true }}
        component={Tasks}
      />
      <Stack.Screen
        name="Steps"
        options={{ headerShown: false }}
        component={Steps}
      />
    </Stack.Navigator>
  );
};

export { Navigation };
