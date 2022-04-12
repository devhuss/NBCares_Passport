import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Linking,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { PageContext } from "../context";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fire } = React.useContext(PageContext);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = fire.auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const onSignUpPress = () => {
    navigation.navigate("Register");
  };

  const onForgetPasswordPress = () => {
    navigation.navigate("Forgot Password");
  };

  const handleLogin = () => {
    fire.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      //behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        style={{
          width: "75%",
          height: 175,
          resizeMode: "stretch",
          marginBottom: 15,
        }}
        source={require("../assets/nbcares_gold.png")}
      />

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
      <TouchableOpacity
        onPress={onForgetPasswordPress}
        style={[styles.buttonFrgt, styles.buttonOutlineFgt]}
      >
        <Text style={styles.buttonOutlineText_Frgt}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        {/* login button */}
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* register button */}
        <TouchableOpacity
          onPress={onSignUpPress}
          style={[styles.buttonRgst, styles.buttonOutlineRgst]}
        >
          <Text style={styles.buttonOutlineText_Rgst}>
            Don't have an Account? Register here
          </Text>
        </TouchableOpacity>

        <Button title = "Visit our Website" 
        onPress={() => Linking.openURL('https://jmkryzanski.pythonanywhere.com')}/>
      </View>
  
<Image
       style={styles.paraDYM}
      source={require("../assets/paraDYM_academy.png" )}
     // source={{uri: 'https://www.paradymacademy.org/'}}
/> 


    </KeyboardAvoidingView>

    
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  paraDYM:{
    alignItems: "flex-start",
    width: '25%', 
    height: 100,
    resizeMode : 'stretch',
    justifyContent: 'flex-end',
    bottom: -125,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
 
  inputContainer: {
    width: "80%",
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
    marginTop: 14,
  },
  button: {
    backgroundColor: "darkred",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "darkred",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "darkred",
    borderWidth: 2,
  },
  buttonRgst: {
    marginTop: 75,
    width: "81%",
    padding: 1,
    alignItems: "flex-end",
    fontWeight: "700",
    fontSize: 16,
    bottom: 1,
  },

  buttonFrgt: {
    marginTop: 5,
    width: "80%",
    padding: 1,
    alignItems: "flex-end",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText_Frgt: {
    color: "darkred",
    fontWeight: "700",
    fontSize: 12,
  },
  buttonOutlineText_Rgst: {
    color: "black",
    fontWeight: "700",
    fontSize: 10,
    bottom: 1,
  },
});
