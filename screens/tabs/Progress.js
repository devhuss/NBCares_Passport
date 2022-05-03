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
  let pos1 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let pos2 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const increase = () => {
    // Animate the update
    setW(w + 15);
    setH(h + 15);
    // this.setState({ w: this.state.w + 15, h: this.state.h + 15 });
  };

  useEffect(() => {
    // console.log("before: ", pos);
    animation(pos1, 100, 0)
    animation(pos2, 0, 100)
  }, [show]);

  const animation = (pos, shiftX, shiftY) => {
    Animated.spring(pos, {
      toValue: show ? { x: shiftX, y: shiftY } : { x: 0, y: 0 },
      // duration: 2000,
      useNativeDriver: true,
    }).start(() => {});
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            width: 150,
            height: 150,
            backgroundColor: "blue",
            transform: [{ translateX: pos2.x }, { translateY: pos2.y }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.box,
          {
            width: w,
            height: h,
            transform: [{ translateX: pos1.x }, { translateY: pos1.y }],
          },
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
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
