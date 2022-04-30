import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { PageContext } from "../context";
import Ionicons from 'react-native-vector-icons/Ionicons';


const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fire } = React.useContext(PageContext);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = fire.auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Information");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    fire.auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
        fire.addUser(user.uid, user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      //behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
     <View style = {styles.registerIcon}>
     <Ionicons name="person-add-outline" size={200}/>
     </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

    

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Register & Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    bottom: 100
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    bottom: 100
  },
  button: {
    backgroundColor: "darkred",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "darkred",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "darkred",
    fontWeight: "700",
    fontSize: 16,
  },
  registerIcon:{
    bottom: 100
  }
});
