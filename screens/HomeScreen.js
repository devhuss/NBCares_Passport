import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Fire } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import tempData from "../tempData";

var fire = null;
// convert back to functional component and try with useEffect
class HomeScreen extends React.Component {
  state = {
    lists: [],
    loading: true,
  }

  componentDidMount() {
    fire = new Fire()

    fire.getLists((lists) => {
      console.log('afasdf');
      this.setState({lists}, () => {
        this.setState({ loading: false})
      })
    })
  }

  componentWillUnmount() {
    fire.detach()
  }

  

  render() {

    //const navigation = useNavigation();

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
        onPress={() => this.props.navigation.navigate(name, item)}
      >
        <Text style={styles.circleText}>{name}</Text>
      </TouchableOpacity>
    );

    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color={'blue'} />
        </View>
      )
    }
 
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text>Email: {fire.auth.currentUser?.email}</Text>
        <Text>userID: {fire.userID}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity> */}
  
        <FlatList
          data={this.state.lists}
          renderItem={({ item }) => <ItemRender item={item} name={item.name} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
      
    );
  }
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
