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
import { PageContext, PageContext2 } from "../context";

const HomeScreen = () => {
  //console.log('==================================================')
  const [lists, setLists] = useState([]);
  const [tests, setTests] = useState([1,2]);
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const { value, fire } = React.useContext(PageContext);
  //console.log('INITIALIZE: ' + loading)

  // Initialize Firebase class to use methods

  //const fire = new Fire();

  // useEffect is a Effect hook that triggers depending on render
  // this useEffect triggers once when HomeScreen renders, when triggered it calls the firebase getLists function
  // to retrieve the data from the Database, after the cleanup function is called to unsubscribe to the firebase
  // listener that recieves the data
  useEffect(() => {
    fire.getLists((lists) => {
      setLists(lists);
      //console.log('GET LIST CALL: ' + loading)
    });
    // Specify how to clean up after this effect:
    return function cleanup() {
      //console.log('CLEAN UP CALL')
      //console.log(lists)
      fire.detach();
    };
  }, []);

  

  // const listContext = React.useMemo(
  //   () => ({
  //     getLists: () => {
  //       return lists;
  //     },
  //   }),
  //   [lists]
  // );

  //console.log(lists)

  // This useEffect triggers when the useState 'lists' changes, when it changes the loading state to false
  // so that the activity indicator is disabled and shows the content of the screen when loaded

  // At least thats how it should work but currently the useEffect is triggered on the initialization of the useState
  // this can be considered a bug
  useEffect(() => {
    //console.log('LISTCHANGED ' + loading)
    setLoading(false);
  }, [lists]);

  const navigation = useNavigation();

  const handleSignOut = () => {
    fire.auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const handleVital = () => {
    navigation.navigate("Vital Signs");
  };

  const ItemRender = ({ item, name }) => (
    <TouchableOpacity
      style={styles.circleButton}
      onPress={() =>
        navigation.navigate(name, {
          list: item,
          fire: fire,
          points: points,
          setPoints: setPoints,
        })
      }
    >
      <Text style={styles.circleText}>{name}</Text>
    </TouchableOpacity>
  );

  const test = () => {
    console.log(
      "--------------------------------------------------------------------"
    );
    console.log(lists[0].name);
  };

  // If loading is true then display activity indicator
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    );
  }

  return (
    <PageContext2.Provider value={tests}>
      <SafeAreaView style={styles.container}>
        <Text>Email: {fire.auth.currentUser?.email}</Text>
        <Text>userID: {fire.userID}</Text>
        <Text>POINTS: {value}</Text>

        <FlatList
          data={lists}
          renderItem={({ item }) => <ItemRender item={item} name={item.name} />}
          keyExtractor={(item) => item.id.toString()}
        />

        <View>
          <TouchableOpacity onPress={handleVital} style={styles.circleButton}>
            <Text style={styles.circleText}>Vital Signs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(lists[1].name, { listID: 1 });
            }}
            style={styles.circleButton}
          >
            <Text style={styles.circleText}>EMPLOYMENT</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={test} style={styles.circleButton}>
            <Text style={styles.circleText}>Print</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </PageContext2.Provider>
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
    //backgroundColor: 'blue',
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    bottom: 30,
  },
  buttonText: {
    color: "lightblue",
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
