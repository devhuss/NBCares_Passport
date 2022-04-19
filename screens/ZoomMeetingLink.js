import { StyleSheet, Text, Image, SafeAreaView , TouchableOpacity, Linking} from "react-native";
import React from "react";

const ZoomMeetingLink = () => {
  return (
      <SafeAreaView style = {styles.container} >
        <Image style = {styles.zoom} source={require("../assets/zoom_logo.png")}/>
        <TouchableOpacity style = {styles.button}>
          <Text onPress = {() =>
            Linking.openURL("https://us05web.zoom.us/j/3760490541?pwd=VmtrcHlnQTVnbnV3dnA0K3Vld0dYUT09#success")} style = {styles.buttonText}>Click here to join a zoom meeting</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

export default ZoomMeetingLink;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: "center",
    justifyContent: "center",
  },
  zoom:{
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    bottom:200,
  },
  button: {
    backgroundColor: "dodgerblue",
    width: "75%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "dodgerblue",
    bottom: 400
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
