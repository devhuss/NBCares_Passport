import { StyleSheet, Text, SafeAreaView, View} from "react-native";
import React from "react";

const Progress = () => {
    return (

        <View styles = {styles.container}>
            <Text styles = {styles.text}>Progress Chart is in Progress</Text>
            </View>
     
    );
  };

export default Progress;


const styles = StyleSheet.create({
    container: {
      flex: 1,
       alignItems: "center",
      justifyContent: "center",
    },
    text:{
        fontWeight:'400'
    }
  });
