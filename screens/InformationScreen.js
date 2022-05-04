import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity, 
  SafeAreaView,
  Modal,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import text from "../AgreementText";
import { PageContext } from "../context";


const InformationScreen = () => {
  const { fire, namee } = 
  React.useContext(PageContext)

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [complianceModal, setComplianceModal] = useState(true);

  const [name, setName] = namee;
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigation = useNavigation();

 

  const userPrompt = () => {
    if(name == "" || phoneNumber == ""){
      alert('Please fill out the missing information');
    }
    else{
        fire.updateUser({
          userName: name,
          phone: phoneNumber,
        })
        navigation.navigate("Home");
      
    }
 }

  return (
    
      <View style = {styles.container}>
       
    <View style = {styles.header}>
      <Text style = {styles.text_header}>Welcome!</Text>
      <Text style = {styles.text_header2}>We need some information before we start.</Text>
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



        
  
    </View>
    
  </View>

// {/* <View>
  
//       <Modal animationType="slide" transparent={true} visible={complianceModal}>
//         <SafeAreaView>
//           <ScrollView>
//             <View style={styles.modalContainer}>
//               <View style={styles.modalView}>
//                 <Text style={styles.modalComplianceTitle}>NB CARES</Text>
//                 <Text>{text}</Text>

//                 <TouchableOpacity
//                   style={[
//                     styles.continueButton,

//                     { backgroundColor: toggleCheckBox ? "darkred" : "darkred" },
//                   ]}
//                   disabled={toggleCheckBox}
//                   onPress={
//                     (() => userPrompt(true),
//                     () => setComplianceModal(false))
//                   }
//                 >
//                   <Text>Agree & Continue</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </ScrollView>
//         </SafeAreaView>
//       </Modal>
  

//       {/* START OF INFORMATION PAGE */}
//       {/* <SafeAreaView>
//         <View style={styles.infoContainer}>
//           <Text style={styles.informationText}>Information</Text>

//           <TextInput
//             style={styles.input}
//             onChangeText={setName}
//             value={name}
//             placeholder="Enter your first and last name"
//           />
//           <TextInput
//             style={styles.input}
//             onChangeText={setPhoneNumber}
//             value={phoneNumber}
//             placeholder="Enter your phone number"
//             keyboardType="numeric"
//           />
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity onPress={userPrompt} style={styles.button}>
//               <Text style={styles.buttonText}>Continue</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView> */}



  
//   </View> */}

 
  );
};

export default InformationScreen;

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
text_header2: {
  color: 'lightgray',
  fontSize: 15,
  paddingTop: 5
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
    width: "100%",
    // alignItems: "center",
    //justifyContent: "center",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "darkred",
    width: "75%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, .6)",
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    padding: 20,
    alignItems: "center",
  },
  modalComplianceTitle: {
    marginBottom: 20,
    color: "maroon",
    fontWeight: "bold",
    fontSize: 18,
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginVertical: 30,
    alignItems: "center",
  },
  checkBox: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  continueButton: {
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    //top: 600,
    marginLeft: 75,
  },
  button: {
    backgroundColor: "darkred",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  informationText: {
    fontSize: 55,
    fontVariant: [
      "small-caps",
      "oldstyle-nums",
      "lining-nums",
      "tabular-nums",
      "proportional-nums",
    ],
    color: "darkred",
  },
  infoContainer: {
    justifyContent: "center",
  
    // alignItems:'center'
    top: 75,
    backgroundColor: "white",
    width: "90%"
  },
});
