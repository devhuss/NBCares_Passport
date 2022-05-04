import HomeScreen from "../screens/HomeScreen";
import Tasks from "../screens/tabs/Tasks";
import Steps from "../screens/tabs/Steps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";

import { PageContext } from "../context";
import { TouchableOpacity, Modal, View, StyleSheet,Pressable, Text } from "react-native";
import InfoText from "../InfoText.js";
import Ionicons from "react-native-vector-icons/Ionicons";


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#b4a25f",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const Navigation = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { headers } = React.useContext(PageContext);
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home "
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons
                style={{ marginRight: 30 }}
                color="white"
                name="menu-outline"
                size={22}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>{InfoText}</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Ionicons name="information-outline" color="white" size={22} />
            </TouchableOpacity>
          ),
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 200,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#af272f",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
