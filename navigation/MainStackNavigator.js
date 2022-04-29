import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import InformationScreen from "../screens/InformationScreen";
import VitalScreen from "../screens/tabs/vital";
import ProgressScreen from "../screens/tabs/Progress";
import ZoomScreen from "../screens/ZoomMeetingLink";
import Tasks from "../screens/tabs/Tasks";
import Steps from "../screens/tabs/Steps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { PageContext } from "../context";
import { Image } from "react-native"
import CustomDrawer from "../components/CustomDrawer";
import AboutUs from "../screens/AboutUsScreen";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#af272f",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  const { headers } = React.useContext(PageContext);
  const [header, setHeader] = headers;
  return (
    <Stack.Navigator
      screenOptions={(screenOptionStyle, { headerShown: false })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Tasks"
        options={{ title: header, headerShown: false }}
        component={Tasks}
      />
      <Stack.Screen
        name="Steps"
        options={{ headerShown: false}}
        component={Steps}
      />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Vital Signs" component={VitalScreen} />
      <Stack.Screen name="About Us" component={AboutUs} />

     
    </Stack.Navigator>
  );
};

const VitalStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={(screenOptionStyle, { headerShown: false })}
    >
      <Stack.Screen name="Vital Signs" component={VitalScreen} />
    </Stack.Navigator>
  );
};

const LoginStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const HomeStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Tasks"
        options={{ title: header, headerShown: false }}
        component={Tasks}
      />
      <Stack.Screen
        name="Steps"
        options={{ headerShown: false}}
        component={Steps}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent ={props => <CustomDrawer {...props}/>}screenOptions={screenOptionStyle} initialRouteName = "Home">
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Vital Signs" component={VitalStackNavigator} />
      <Drawer.Screen name="Zoom Meeting" component={ZoomScreen} />
    </Drawer.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true, }  }
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/home-bottom-tab.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/progress-bottom-tab.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }} />
    </Tab.Navigator>
  );
};

export { MainStackNavigator, LoginStackNav };

