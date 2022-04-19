import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Pressable,
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
  const [vision, setMood2] = useState("");
  const [physical, setMood3] = useState("");
  const [mental, setMood4] = useState("");
  const [housing, setMood5] = useState("");
  const [community, setMood6] = useState("");
  const [network, setMood7] = useState("");
  const [job, setMood8] = useState("");
  const [education, setMood9] = useState("");

  // upon saving the data, the user is prompted with an alert that gives them their total
  // score for the smilies only. 9 is the least and 45 is the best. commented code was
  // the attempt to catch the user forgetting a category. but, it says 'num1 is read only'
  const userPrompt = () => {
    // if((num1=0)||(num2=0)||(num3=0)||(num4=0)||(num5=0)||(num6=0)||(num7=0)||(num8=0)||(num9=0)){
    //   alert('Please fill out the missing information');
    // }
    //   else
    alert("Nice Job! Your evaluation score is " + total);
  };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);
  const [num6, setNum6] = useState(0);
  const [num7, setNum7] = useState(0);
  const [num8, setNum8] = useState(0);
  const [num9, setNum9] = useState(0);

  const total = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9;

  const saveData = () => {
    fire.addVitalsign({
      createdAt: fire.timeStamp,
      income: income,
      creditScore: creditScore,
      emergency: emergency,
      budget: budget,
      life: life,
      vision: vision,
      physical: physical,
      mental: mental,
      housing: housing,
      community: community,
      network: network,
      job: job,
      education: education,
      total: total,
    });

    userPrompt();
  };

  return (
    <ScrollView>
      <View>
        <Text style={{ padding: 10, fontSize: 25, fontWeight: "bold" }}>
          Financial
        </Text>
      </View>
      <View style={[styles.container, { bottom: 15 }]}>
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
          maxLength={16}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Credit Score"
          onChangeText={(val) => setCreditScore(val)}
          maxLength={3}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Emergency Funds"
          onChangeText={(val) => setEmergency(val)}
          maxLength={16}
        />
      </View>

      {/* likert scale. currently does nothing 
            note: onPressIn -> onPressOut -> onPress by order of execution
            reset with pressIn, highlight with pressOut*/}
      <View style={{ flexDirection: "row", left: 5 }}>
        <TouchableOpacity
          style={[styles.likert, { left: 20, bottom: 13 }]}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.likert, { left: 80, bottom: 13 }]}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.likert, { left: 140, bottom: 13 }]}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.likert, { left: 200, bottom: 13 }]}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.likert, { left: 260, bottom: 13 }]}
        ></TouchableOpacity>
      </View>

      <View>
        {/* these are the values that are just printed out under the grid.
            basically we replace {income} with the previous database value
            and cruise like that */}
        <View style={{ top: 100 }}>
          <Text style={[styles.text, { position: "absolute", bottom: 282 }]}>
            {" "}
            Previous Income: ${income}
          </Text>
          <Text style={[styles.text, { position: "absolute", bottom: 217 }]}>
            {" "}
            Previous Credit Score: {creditScore}
          </Text>
          <Text style={[styles.text, { position: "absolute", bottom: 152 }]}>
            {" "}
            Previous EF: ${emergency}
          </Text>
        </View>

        {/* start of the smiles page. Everything is its own button so it is a bit of a mess */}
        <Text style={styles.text2}>How I feel about my... {"\n"}</Text>
        {/* life */}
        <Text style={{ fontSize: 20, position: "absolute", top: 37, left: 10 }}>
          Life: {life}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood1("Excellent");
              setNum1(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood1("Good");
              setNum1(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood1("Okay");
              setNum1(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood1("Bad");
              setNum1(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood1("Horrible");
              setNum1(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
        {/* vision of self */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Vision of Self: {vision}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood2("Excellent");
              setNum2(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood2("Good");
              setNum2(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood2("Okay");
              setNum2(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood2("Bad");
              setNum2(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood2("Horrible");
              setNum2(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
        {/* physical health */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Physical Health: {physical}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood3("Excellent");
              setNum3(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood3("Good");
              setNum3(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood3("Okay");
              setNum3(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood3("Bad");
              setNum3(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood3("Horrible");
              setNum3(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
        {/* mental health */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Mental Health: {mental}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood4("Excellent");
              setNum4(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood4("Good");
              setNum4(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood4("Okay");
              setNum4(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood4("Bad");
              setNum4(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood4("Horrible");
              setNum4(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
        {/* housing */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Housing: {housing}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood5("Excellent");
              setNum5(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood5("Good");
              setNum5(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood5("Okay");
              setNum5(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood5("Bad");
              setNum5(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood5("Horrible");
              setNum5(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
        {/* community */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Community: {community}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood6("Excellent");
              setNum6(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood6("Good");
              setNum6(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood6("Okay");
              setNum6(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood6("Bad");
              setNum6(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood6("Horrible");
              setNum6(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
        {/* network */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Network: {network}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood7("Excellent");
              setNum7(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood7("Good");
              setNum7(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood7("Okay");
              setNum7(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood7("Bad");
              setNum7(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood7("Horrible");
              setNum7(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
        {/* job */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Job/Career: {job}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood8("Excellent");
              setNum8(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood8("Good");
              setNum8(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood8("Okay");
              setNum8(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood8("Bad");
              setNum8(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood8("Horrible");
              setNum8(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
        {/* education */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Education/Training: {education}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPress={() => {
              setMood9("Excellent");
              setNum9(5);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/excellent.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood9("Good");
              setNum9(4);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/good.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood9("Okay");
              setNum9(3);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/okay.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood9("Bad");
              setNum9(2);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/bad.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMood9("Horrible");
              setNum9(1);
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={require("../../assets/horrible.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* save data */}
      <TouchableOpacity
        style={[styles.button, { alignItems: "center", left: 130 }]}
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
    width: 150,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
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
    width: 150,
  },
  text: {
    left: 170,
  },
  text2: {
    left: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  pictures: {
    left: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  likert: {
    width: 10,
    height: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
  },
});
