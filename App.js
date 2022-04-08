import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import DocumentsScreen from "./screens/tabs/documents";
import HousingScreen from "./screens/tabs/housing";
import EducationScreen from "./screens/tabs/education";
import EmploymentScreen from "./screens/tabs/employment";
import FinancialScreen from "./screens/tabs/financial";
import HealthcareScreen from "./screens/tabs/healthcare";
import VitalScreen from "./screens/tabs/vital";
import { Fire } from "./firebase";
import { PageContext } from "./context";

const Stack = createNativeStackNavigator();

const fire = new Fire();

export default function App() {
  

  return (
    <PageContext.Provider value={{ value: 1, value2: 2, fire: fire }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Register"
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Documents"
            component={DocumentsScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Housing"
            component={HousingScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Education"
            component={EducationScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Employment"
            component={EmploymentScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Financial"
            component={FinancialScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Healthcare"
            component={HealthcareScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Vital Signs"
            component={VitalScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PageContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
