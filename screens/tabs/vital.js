import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { PageContext } from "../../context";

const Vital = () => {
  const { fire } = React.useContext(PageContext);
  //these are for the top boxes
  const [income, setIncome] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [emergency, setEmergency] = useState("");
  const [budget, setBudget] = useState("");

  /* this is for the mood smiles I'm trying to set the variables so that once you
    click a button it shows next to the large text what you pressed i.e. excellent or
    horrible. But, I don't really understand so I'm going to leave this for later.
    It will go hand in hand with saving the data as well.  */
  const [life, setMood1] = useState("");
  const [physical, setMood2] = useState("");
  const [mental, setMood3] = useState("");
  const [housing, setMood4] = useState("");
  const [community, setMood5] = useState("");
  const [network, setMood6] = useState("");
  const [job, setMood7] = useState("");
  const [education, setMood8] = useState("");

  const saveData = () => {
    fire.addVitalsign({
      createdAt: fire.timeStamp,
      income: income,
      creditScore: creditScore,
      emergency: emergency,
      budget: budget,
      life: life,
      physical: physical,
      mental: mental,
      housing: housing,
      community: community,
      network: network,
      job: job,
      education: education,
    });
  };

  return (
    <ScrollView>
      <View>
        <Text style={{ padding: 10, fontSize: 25, fontWeight: "bold" }}>
          Financial
        </Text>
      </View>
      <View style={styles.container}>
        {/* multiline makes it so that everything wraps
            numeric makes the num pad come up on click
            placeholder is the gray text inside the box that gets replaced
            onChangeText updates the values to be used at the bottom */}
        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Monthly Income"
          onChangeText={(val) => setIncome(val)}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Credit Score"
          onChangeText={(val) => setCreditScore(val)}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Emergency Funds"
          onChangeText={(val) => setEmergency(val)}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Monthly Budget"
          onChangeText={(val) => setBudget(val)}
        />

        {/* these are the values that are just printed out under the grid.
            basically we replace {income} with the previous database value
            and cruise like that */}
        <View>
          <Text style={styles.text} multiline>
            {" "}
            Previous Income: ${income}
          </Text>
          <Text style={styles.text} multiline>
            {" "}
            Previous Credit Score: {creditScore}
          </Text>
          <Text style={styles.text} multiline>
            {" "}
            Previous Emergency Fund: ${emergency}
          </Text>
          <Text style={styles.text} multiline>
            {" "}
            Previous Budget: ${budget}
            {"\n\n"}
          </Text>
        </View>

        {/* start of the smiles page. Everything is its own button so it is a bit of a mess */}
        <Text style={styles.text2}>How I feel about my... {"\n"}</Text>
        {/* life and vision of self */}
        <Text style={{ fontSize: 20, left: 10 }}>
          Life + Vision of Self: {life}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Physical Health: {physical}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Mental Health: {mental}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Housing: {housing}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Community: {community}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Network: {network}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Job/Career: {job}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Education/Training: {education}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { alignItems: "center" }]}
        onPress={saveData}
      >
        <Text style={{ color: "white" }}>SAVE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Vital;

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 175,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  text: {
    left: 7,
  },
  text2: {
    fontSize: 25,
    fontWeight: "bold",
  },
  pictures: {
    left: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
