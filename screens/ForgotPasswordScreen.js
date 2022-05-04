import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  SafeAreaView
} from "react-native";
import React, { useEffect, useState, u } from "react";
import { useNavigation } from "@react-navigation/native";
import { PageContext } from "../context";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";



const ForgotPasswordScreen = () => {
  const { fire } = React.useContext(PageContext);
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const handleforgotPassword = (Email) => {
    fire.auth
      .sendPasswordResetEmail(Email)
      .then(() => {
        Alert.alert("Password Reset", "Email sent!", [
          {
            text: "OK",
            onPress: () => {},
          },
        ]);
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    
  
      <View style = {styles.container}>
      
        <View style = {styles.header}>
          
          <Text style = {styles.text_header}>Forgot Password?</Text>
        </View>
        <View style = {styles.footer}>
        <Text style = {styles.text_footer}>Email</Text>
        <View style={styles.action}>
        <TextInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        onPress={() => handleforgotPassword(email)}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Send Password Reset</Text>
      </TouchableOpacity>
      
      
        </View>
        
      </View>
   
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   //behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
      // <View style={styles.inputContainer}>
      //   <TextInput
      //     placeholder="Email"
      //     value={email}
      //     onChangeText={(text) => setEmail(text)}
      //     style={styles.input}
      //   />
      // </View>

    //   <TouchableOpacity
    //     onPress={() => handleforgotPassword(email)}
    //     style={[styles.button, styles.buttonOutline]}
    //   >
    //     <Text style={styles.buttonOutlineText}>Forgot Password?</Text>
    //   </TouchableOpacity>
    // </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#af272f'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },

  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
},

text_footer: {
  color: '#05375a',
  fontSize: 18
},

action: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5
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
    marginTop: 40,
  },
  button: {
    backgroundColor: "#af272f",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    top: 100
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#af272f",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#af272f",
    fontWeight: "700",
    fontSize: 16,
  },
});
