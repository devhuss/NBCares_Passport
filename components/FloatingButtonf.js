import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { PageContext } from "../context";
import { useNavigation } from "@react-navigation/native";
import { set } from "react-native-reanimated";

export default function FloatingButtonf() {
  const { lists, pointss, headers } = React.useContext(PageContext);
  const points = pointss;
  const list = lists;
  const [header, setHeader] = headers;
  const navigation = useNavigation();

  const [state, setState] = useState(true);
  const [open, setOpen] = useState(false);

  //   const toggle = () => {
  //     setState(!state);
  //     toggleMenu();
  //   };

  //   //shiftEdX for shift education x, shift education y
  //   const animation = new Animated.ValueXY({ x: 0, y: 0 });

  //   const toggleMenu = () => {
  //       education(50,50);
  //     };

  //   const education = (shiftEdX, shiftEdY) => {
  //     Animated.spring(animation, {
  //       toValue: open ? { x: 0, y: 0 } : { x: shiftEdX, y: shiftEdY },
  //       friction: 10,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       setOpen(!open);
  //     });
  //   };

  //   const money = new Animated.ValueXY({ x: 0, y: 0 });
  //   Animated.spring(money, {
  //     toValue: { x: 50, y: 100 },
  //     friction: 10,
  //     useNativeDriver: true,
  //   }).start();

  // One animated value correlates to one animation the animated value
  // should be put in the animated view's transform style in order to work
  let pos1 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let pos2 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // When the center circle is pushed this will trigger the animations
  useEffect(() => {
    animation(pos1, 100, 0);
    animation(pos2, 0, 100);
  }, [open]);


  const animation = (pos, shiftX, shiftY) => {
    Animated.spring(pos, {
      toValue: open ? { x: shiftX, y: shiftY } : { x: 0, y: 0 },
      useNativeDriver: true,
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
              transform: [{ translateX: pos1.x }, { translateY: pos1.y }], // This is needed for the view to animate
            },
          ]}
        ></Animated.View>
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
              transform: [{ translateX: pos2.x }, { translateY: pos2.y }], // This is needed for the view to animate
            },
          ]}
        ></Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          setOpen(!open);
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
}

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
