import React from "react";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUs from "../screens/AboutUsScreen";
import { DrawerNavigator } from "./DrawerNavigator";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="About Us" component={AboutUs} />

      </Stack.Navigator>
    );
  };

  export { LoginStack };