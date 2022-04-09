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

let initialRender = true;
export default function App() {
  const [authID, setAuthID] = useState("");
  const [lists, setLists] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [points, setPoints] = useState(0);

  // useEffect is a Effect hook that triggers depending on render
  // this useEffect triggers once when App.js renders, when triggered it calls the firebase getLists function
  // to retrieve the data from the Database, after the cleanup function is called to unsubscribe to the firebase
  // listener that recieves the data

  useEffect(() => {

    // prevents the useEffect from doing anything on first render
    if (initialRender) {
      initialRender = false;
    } else {
      // Retrieves the lists from the users database
      fire.getLists((lists) => {
        setLists(lists);
      });

      // Retrieves the points from the user database
      fire.refUser.get().then((doc) => {
        setPoints(doc.data().userPoints);
      });

      // Unsubscribes to the lists listener
      return function cleanup() {
        fire.detach();
      };
    }
    // Updates on authID change
  }, [authID]);

  return (
    // PageContext enables the child components to have access to values set by the provider
    // The values can be accessed in any file under its tag with the use of 'useContext'
    <PageContext.Provider
      value={{
        fire: fire,
        lists: lists,
        authen: [authID, setAuthID],
        refreshs: [refresh, setRefresh],
        pointss: [points, setPoints],
      }}
    >
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
