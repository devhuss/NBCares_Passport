import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View , StatusBar} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Fire } from "./firebase";
import { PageContext } from "./context";
import "react-native-gesture-handler";
import { LoginStack } from "./navigation/LoginStack";
import { DrawerNavigator } from "./navigation/DrawerNavigator";

import { LogBox } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Vital from "./screens/tabs/vital";
import ZoomMeetingLink from "./screens/ZoomMeetingLink";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./components/CustomDrawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#af272f",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const fire = new Fire();

let initialRender = true;
export default function App() {
  LogBox.ignoreLogs([
    "Warning: Async Storage has been extracted from react-native core",
  ]);

  //   <NavigationContainer>
  //   <Drawer.Navigator drawerContent ={props => <CustomDrawer {...props}/>}screenOptions={screenOptionStyle} initialRouteName = "Home">
  //   <Drawer.Screen name="Home" component={HomeScreen} />
  //   <Drawer.Screen name="Vital Signs" component={Vital} />
  //   <Drawer.Screen name="Zoom Meeting" component={ZoomMeetingLink} />
  // </Drawer.Navigator>
  // </NavigationContainer>

  const [authID, setAuthID] = useState("");
  const [lists, setLists] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [vitalsigns, setVitalsigns] = useState([]);
  const [points, setPoints] = useState(0);
  const [header, setHeader] = useState("");

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

      fire.getVitalSigns((vitalsign) => {
        setVitalsigns(vitalsign);
      });

      // fire.getUserData((data) => {
      //   setUserData(data);
      //   setPoints(data[1].userPoints)
      // });

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
        vitals: [vitalsigns, setVitalsigns],
        pointss: [points, setPoints],
        headers: [header, setHeader],
      }}
    >

      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <LoginStack/>
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
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});
