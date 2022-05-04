import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Image,
  LayoutAnimation,
  UIManager,
  Button,
  Platform,
} from "react-native";
import { PageContext } from "../context";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { CountUp } from "use-count-up";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(false);
}

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

const FloatingButtonf = () => {
  const { pointss, counter, fire } = React.useContext(PageContext);
  const [points, setPoints] = pointss;
  const [count, setCount] = counter;
  const [interval, setInter] = useState(null);

  const navigation = useNavigation();

  const [open, setOpen] = useState(false);

  const [w, setW] = useState(200);
  const [h, setH] = useState(200);

  // const increase = () => {
  //   // Animate the update
  //   setCount(0);
  //   LayoutAnimation.configureNext({
  //     duration: 400,
  //     create: { type: "easeInEaseOut", property: "opacity" },
  //     update: { type: "spring", springDamping: 0.85 },
  //     delete: { type: "linear", property: "opacity" },
  //   });
  //   setW(open ? 200 : 350);
  //   setH(open ? 200 : 350);
  // };

  // One animated value correlates to one animation the animated value
  // should be put in the animated view's transform style in order to work
  let pos1 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let pos2 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let pos3 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let pos4 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let pos5 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let pos6 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let test = useRef(new Animated.Value(1.25)).current;

  // When the center circle is pushed this will trigger the animations
  useEffect(() => {
    animation(pos1, -125, -115); // education
    //animation(pos2, 0, -165); // chat
    animation(pos3, 125, -115); // career

    animation(pos4, -125, 115); // financial
    animation(pos5, 0, 165); // health
    animation(pos6, 125, 115); // housing
    animSize(test);
    //increase();
  }, [open]);

  const animation = (pos, shiftX, shiftY) => {
    Animated.spring(pos, {
      toValue: open ? { x: shiftX, y: shiftY } : { x: 0, y: 0 },
      useNativeDriver: true,
      friction: 6,
    }).start(() => {});
  };

  const animSize = (pos) => {
    Animated.spring(pos, {
      toValue: open ? 1 : 1.75,
      useNativeDriver: true,
      friction: 7,
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
        {open ? "Welcome!" : "Push to Begin!"}
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
            tintColor="#FFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      {/* Chat button for the future */}
      {/* <TouchableWithoutFeedback
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
          
        </Animated.View>
      </TouchableWithoutFeedback> */}

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Tasks", { listID: 1 });
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
            style={{ width: 60, height: 55, bottom: 2 }}
            resizeMode="contain"
            source={require("../assets/employment.png")}
            tintColor="#FFF"
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
              transform: [{ translateX: pos4.x }, { translateY: pos4.y }],
            },
          ]}
        >
          <Image
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
            source={require("../assets/money.png")}
            tintColor="#FFF"
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
              transform: [{ translateX: pos5.x }, { translateY: pos5.y }],
            },
          ]}
        >
          <Image
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
            source={require("../assets/healthcare2.png")}
            tintColor="#FFF"
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
              transform: [{ translateX: pos6.x }, { translateY: pos6.y }],
            },
          ]}
        >
          <Image
            style={{ width: 60, height: 52, bottom: 2 }}
            resizeMode="contain"
            source={require("../assets/housing.png")}
            tintColor="#FFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          setOpen(!open);
        }}
      >
        <Animated.View
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <AnimatedGradient
            colors={["#af272f", "#dd8064"]}
            locations={[0.7, 1]}
            // locations={gradientOptions.locations}
            // start={gradientOptions.start}
            // end={gradientOptions.end}
            style={[
              styles.largeCircle,
              {
                width: 200,
                height: 200,
                borderRadius: Platform.OS === "ios" ? 100 : 200,
                transform: [{ scale: test }],
              },
            ]}
            resizeMode="contain"
          ></AnimatedGradient>
          <Text
            style={[
              styles.pointsText,
              {
                position: "absolute",
              },
            ]}
          >
            <CountUp isCounting end={points} duration={3} />
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingButtonf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
  },
  circleButton: {
    position: "absolute",
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#75171d",
    backgroundColor: "#af272f",
  },
  largeCircle: {
    //position: "absolute",
    // width: 200,
    // height: 200,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 300,
    borderWidth: 3,
    borderColor: "#75171d",
    transform: [{ translateX: 0 }, { translateY: 0 }],
  },
  pointsText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 60,
    textAlign: "center",
    width: 300,
  },
});
