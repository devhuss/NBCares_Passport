import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DocumentsScreen from "../screens/tabs/documents";
import HousingScreen from "../screens/tabs/housing";
import EducationScreen from "../screens/tabs/education";
import EmploymentScreen from "../screens/tabs/employment";
import FinancialScreen from "../screens/tabs/financial";
import HealthcareScreen from "../screens/tabs/healthcare";
import InformationScreen from "../screens/InformationScreen";
import VitalScreen from "../screens/tabs/vital";
import Tasks from "../screens/tabs/Tasks";
import Steps from "../screens/tabs/Steps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    
    // backgroundColor: "#859a9b",
    backgroundColor: "#677d7e",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Documents" component={DocumentsScreen} />
      <Stack.Screen name="Housing" component={HousingScreen} />
      <Stack.Screen name="Education" component={EducationScreen} />
      <Stack.Screen name="Employment" component={EmploymentScreen} />
      <Stack.Screen name="Financial" component={FinancialScreen} />
      <Stack.Screen name="Healthcare" component={HealthcareScreen} />
      <Stack.Screen name="Vital Signs" component={VitalScreen} />
      <Stack.Screen name="Tasks" component={Tasks} />
      <Stack.Screen name="Steps" options={{headerShown: false}} component={Steps} />
    </Stack.Navigator>
  );
};
const VitalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Vital Signs" component={VitalScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, VitalStackNavigator };
