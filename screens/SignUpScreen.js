import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal, Pressable, ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { PageContext } from "../context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AgreementText from "../AgreementText.js";



const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { fire, namee } = React.useContext(PageContext);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [complianceModal, setComplianceModal] = useState(true);

  const [name, setName] = namee;

  const navigation = useNavigation();


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
    <View style = {styles.container}>
    <View style = {styles.header}>
      <Text style = {styles.text_header}>Register an Account</Text>
    </View>
    <View style = {styles.footer}>

    <Text style = {styles.text_footer}>Name</Text>
    <View style={styles.action}>
    <TextInput
            
            onChangeText={setName}
            value={name}
            placeholder="Enter your first and last name"
          />
    
  </View>
    <Text style = {styles.text_footer}>Email</Text>
    <View style={styles.action}>
      
    <TextInput
      placeholder="Enter your Email"
      value={email}
      onChangeText={(text) => setEmail(text)}
      style={styles.input}
    />
  </View>

  <Text style = {styles.text_footer}>Password</Text>
    <View style={styles.action}>
    <TextInput
          placeholder="Create a Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
  </View>


        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonText}>Register & Login</Text>
        </TouchableOpacity>
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
                <ScrollView>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <ScrollView>
                    <Text style={styles.modalText}>{AgreementText}</Text>
                    <Pressable
                      style={[styles.buttonModal, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                    </ScrollView>
                  </View>
                </View>
                </ScrollView>
              </Modal>
             
            <Text style = {styles.termsClick}>By registering, you are agreeing to authorize information.</Text></TouchableOpacity>
 
  
    </View>

   
    
  </View>

 
  );
};

export default SignUpScreen;

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
  paddingBottom: 9,
  paddingTop:2

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
  
  
    color: "#af272f",
    fontWeight: "700",
    fontSize: 16,
  
  },
  buttonOutlineText: {
    color: "#af272f",
    fontWeight: "700",
    fontSize: 16,
  },
  registerIcon:{
    bottom: 100
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
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
  buttonModal: {
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
    textAlign: "left",
    fontSize:8,
  },
  termsClick: {
    color: "dodgerblue"
  }
});

