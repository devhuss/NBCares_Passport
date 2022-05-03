import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { PageContext } from "../context";
import Reports from "../components/Reports";
import FloatingButtonf from "../components/FloatingButtonf";
import { LinearGradient } from "expo-linear-gradient";

let initialRender = true;
const HomeScreen = () => {
  // These variables can be considered 'global' to any file that is under the context provider in the root file
  const { fire, authen, lists, refreshs, vitals, pointss, headers } =
    React.useContext(PageContext);
  const [authID, setAuthID] = authen;
  const [refresh, setRefresh] = refreshs;
  const [vitalsigns, setVitalsigns] = vitals;
  const [points, setPoints] = pointss;
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [header, setHeader] = headers;

  // Sets the authID useState to the user ID from firebase, this then allows the useEffect in App.js to trigger
  // and retieve the lists and user points
  useEffect(() => {
    setAuthID(fire.userID);
  }, []);

  // This useEffect triggers when the useState 'lists' changes, when it changes the loading state to false
  // so that the activity indicator is disabled and shows the content of the screen when loaded
  useEffect(() => {
    if (initialRender) {
      initialRender = false;
    } else {
      setLoading(false);
    }
  }, [lists]);

  const handleVital = () => {
    navigation.navigate("Vital Signs");
  };

  const [state, setState] = useState(true);

  const toggle = () => {
    setState(!state);
  };

  // If loading is true then display activity indicator
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={"#af272f"} />
      </View>
    );
  }

  // these functions is to toggle the center button. it will be the animation
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#d0c49a","#d0c49a", "#ffffff"]}
        end={{ x: 0, y: 1 }}
        style={styles.background}
      />
      <FloatingButtonf />
      <Reports />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
