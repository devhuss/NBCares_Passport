import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Tasks from "../screens/tabs/Tasks";
import Steps from "../screens/tabs/Steps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { PageContext } from "../context";
import { Button, View, Icon } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

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
  const [header, setHeader] = headers;
  return (
    <Stack.Navigator screenOptions={(screenOptionStyle, { headerShown: true })}>
      <Stack.Screen
        name="Home "
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()} // open drawer
              title="---" 
              color="#551E18"
            ></Button>
          ),
        }}
      />
      <Stack.Screen
        name="Tasks"
        options={{ title: header, headerShown: true }}
        component={Tasks}
      />
      <Stack.Screen
        name="Steps"
        options={{ headerShown: true }}
        component={Steps}
      />
    </Stack.Navigator>
  );
};

export { Navigation };
