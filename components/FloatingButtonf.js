import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { PageContext } from "../context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const FloatingButtonf = () => {
  const { pointss } = React.useContext(PageContext);
  const [points, setPoints] = pointss;

  const navigation = useNavigation();

  const [state, setState] = useState(true);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setState(!state);
    //toggleMenu();
  };

  // One animated value correlates to one animation the animated value
  // should be put in the animated view's transform style in order to work
  let pos1 = useRef(new Animated.ValueXY({ x: 0, y: 205 })).current;
  let pos2 = useRef(new Animated.ValueXY({ x: 0, y: 205 })).current;
  let pos3 = useRef(new Animated.ValueXY({ x: 0, y: 205 })).current;
  let pos4 = useRef(new Animated.ValueXY({ x: 0, y: 205 })).current;
  let pos5 = useRef(new Animated.ValueXY({ x: 0, y: 205 })).current;

  // When the center circle is pushed this will trigger the animations
  useEffect(() => {
    animation(pos1, -90, 80);
    animation(pos2, 90, 80);
    animation(pos3, -110, 300);
    animation(pos4, 0, 350);
    animation(pos5, 110, 300);
  }, [open]);

  const animation = (pos, shiftX, shiftY) => {
    Animated.spring(pos, {
      toValue: open ? { x: shiftX, y: shiftY } : { x: 0, y: 205 },
      useNativeDriver: true,
      friction: 10,
    }).start(() => {});
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          position: "absolute",
          alignItems: "center",
          top: 0,
          fontSize: 30,
        }}
      >
        {state ? "Push to Begin!" : "Welcome!"}
      </Text>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Tasks", { listID: 0 });
        }}
      >
        <Animated.View
          style={[
            styles.circleButton,
            {
              transform: [{ translateX: pos1.x }, { translateY: pos1.y }],
            },
          ]}
        >
          <Image
            style={{ width: 55, height: 60 }}
            resizeMode="contain"
            source={require("../assets/education.png")}
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Tasks", { listID: 1 });
        }}
      >
        <Animated.View
          style={[
            styles.circleButton,
            {
              transform: [{ translateX: pos2.x }, { translateY: pos2.y }],
            },
          ]}
        >
          <Image
            style={{ width: 60, height: 55, bottom: 2 }}
            resizeMode="contain"
            source={require("../assets/employment.png")}
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Tasks", { listID: 2 });
        }}
      >
        <Animated.View
          style={[
            styles.circleButton,
            {
              transform: [{ translateX: pos3.x }, { translateY: pos3.y }],
            },
          ]}
        >
          <Image
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
            source={require("../assets/money.png")}
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Tasks", { listID: 3 });
        }}
      >
        <Animated.View
          style={[
            styles.circleButton,
            {
              transform: [{ translateX: pos4.x }, { translateY: pos4.y }],
            },
          ]}
        >
          <Image
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
            source={require("../assets/healthcare2.png")}
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Tasks", { listID: 4 });
        }}
      >
        <Animated.View
          style={[
            styles.circleButton,
            {
              transform: [{ translateX: pos5.x }, { translateY: pos5.y }],
            },
          ]}
        >
          <Image
            style={{ width: 60, height: 52, bottom: 2 }}
            resizeMode="contain"
            source={require("../assets/housing.png")}
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          setOpen(!open);
          toggle();
        }}
      >
        <Animated.View
          style={[styles.largeCircle, { position: "absolute", top: 150 }]}
        >
          <Text style={styles.pointsText}>{points}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingButtonf;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },
  circleButton: {
    position: "absolute",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#c5b358",
  },
  largeCircle: {
    width: 175,
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#c5b358",
  },
  pointsText: {
    color: "white",
    fontWeight: "700",
    fontSize: 60,
  },
});
