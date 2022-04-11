import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  Linking,
  SafeAreaView,
  Modal,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Fire } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import text from "./text";
import CheckBox from "@react-native-community/checkbox";

const InformationScreen = () => {
  const [name, setEmail] = useState("");
  const [phoneNumber, setPassword] = useState("");
  const [familyOrFriend, setFamilyOrFriend] = useState("");
  const [familyOrFriend2, setFamilyOrFriend2] = useState("");
  const [familyOrFriend3, setFamilyOrFriend3] = useState("");
  const [familyOrFriend4, setFamilyOrFriend4] = useState("");
  const [familyOrFriend5, setFamilyOrFriend5] = useState("");
  const [familyOrFriend6, setFamilyOrFriend6] = useState("");

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [complianceModal, setComplianceModal] = useState(true);

  const navigation = useNavigation();

  const onContinuePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={complianceModal}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalComplianceTitle}>NB CARES</Text>
                <Text>{text}</Text>
                <Text>Enter up to six family members</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Family or Friend"
                    value={familyOrFriend}
                    onChangeText={(text) => setFamilyOrFriend(text)}
                    style={styles.input}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Family or Friend"
                    value={familyOrFriend2}
                    onChangeText={(text) => setFamilyOrFriend2(text)}
                    style={styles.input}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Family or Friend"
                    value={familyOrFriend3}
                    onChangeText={(text) => setFamilyOrFriend3(text)}
                    style={styles.input}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Family or Friend"
                    value={familyOrFriend4}
                    onChangeText={(text) => setFamilyOrFriend4(text)}
                    style={styles.input}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Family or Friend"
                    value={familyOrFriend5}
                    onChangeText={(text) => setFamilyOrFriend5(text)}
                    style={styles.input}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Family or Friend"
                    value={familyOrFriend6}
                    onChangeText={(text) => setFamilyOrFriend6(text)}
                    style={styles.input}
                  />
                </View>

                {/* <View style={styles.checkBoxContainer}>
                    <CheckBox style = {styles.checkBox}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue => setToggleCheckBox(newValue))}
                    />
                    <Text>I agree.</Text>
                    </View> */}

                <TouchableOpacity
                  style={[
                    styles.continueButton,

                    { backgroundColor: toggleCheckBox ? "darkred" : "darkred" },
                  ]}
                  disabled={toggleCheckBox}
                  onPress={
                    (() => onContinuePress(true),
                    () => setComplianceModal(false))
                  }
                >
                  <Text>Agree & Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
      <SafeAreaView>
        <TouchableOpacity onPress={onContinuePress} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
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
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    // marginTop: 25,
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
});
