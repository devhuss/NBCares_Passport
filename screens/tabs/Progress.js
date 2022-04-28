import { StyleSheet, Text, SafeAreaView, View} from "react-native";
import React from "react";
import FloatingButtonf from "../../components/FloatingButtonf";

const Progress = () => {
    return (

      <View styles = {styles.container}>
        {/* the new button animation class */}
        <View style={styles.container}>
            <FloatingButtonf style={{top:0}}/>
        </View>
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
