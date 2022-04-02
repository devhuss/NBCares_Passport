import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Fire } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

  //console.log('==================================================')
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  //console.log('INITIALIZE: ' + loading)

  // Initialize Firebase class to use methods 
  const fire = new Fire();

  // useEffect is a Effect hook that triggers depending on render
  // this useEffect triggers once when HomeScreen renders, when triggered it calls the firebase getLists function
  // to retrieve the data from the Database, after the cleanup function is called to unsubscribe to the firebase
  // listener that recieves the data
  useEffect(() => {
    fire.getLists((lists) => {

      setLists(lists)
      //console.log('GET LIST CALL: ' + loading)
    })
    // Specify how to clean up after this effect:
    return function cleanup() {
      //console.log('CLEAN UP CALL')
      //console.log(lists)
      fire.detach()
    };
  }, []);

  // This useEffect triggers when the useState 'lists' changes, when it changes the loading state to false 
  // so that the activity indicator is disabled and shows the content of the screen when loaded

  // At least thats how it should work but currently the useEffect is triggered on the initialization of the useState
  // this can be considered a bug
  useEffect(() => {
    //console.log('LISTCHANGED ' + loading)
    setLoading(false)
  }, [lists])

  const navigation = useNavigation();

  const handleSignOut = () => {
    fire.auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const ItemRender = ({ item, name }) => (
    <TouchableOpacity
      style={styles.circleButton}
      onPress={() => navigation.navigate(name, { list: item, fire: fire })}
    >
      <Text style={styles.circleText}>{name}</Text>
    </TouchableOpacity>
  );

  // If loading is true then display activity indicator
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color={'blue'} />
      </View>
    )
  }

  return (

    <SafeAreaView style={styles.container}>
      <Text>Email: {fire.auth.currentUser?.email}</Text>
      <Text>userID: {fire.userID}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <FlatList
        data={lists}
        renderItem={({ item }) => <ItemRender item={item} name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  circleButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#c5b358",
  },
  circleText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },
});
