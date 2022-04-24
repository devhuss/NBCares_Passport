import {
  NativeModules,
  LayoutAnimation,
  Animated,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

const Progress = () => {
  const [show, setShow] = useState(true);
  const [w, setW] = useState(100);
  const [h, setH] = useState(100);
  const [y, setY] = useState(0);
  let x = useRef(new Animated.Value(0)).current;

  const increase = () => {
    // Animate the update
    setW(w + 15);
    setH(h + 15);
    // this.setState({ w: this.state.w + 15, h: this.state.h + 15 });
  };

  useEffect(() => {
    console.log('before: ', x)
    Animated.timing(x, {
      toValue: show ? 100 : -100,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      x = new Animated.Value(100);
      console.log('after: ', x)
    });
  },[show])

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            width: w,
            height: h,
            transform: [{ translateX: x }, { translateY: 0 }],
          },
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          setShow(!show)
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
      </TouchableOpacity>
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
  box: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    position: "absolute",
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
