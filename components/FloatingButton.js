import React from 'react';
import {StyleSheet, Text, View, Image, Animated, TouchableWithoutFeedback} from 'react-native';

export default class FloatingButton extends React.Component {
  animation = new Animated.Value(0)
  //tells the center button whether or not the buttons are open or closed.
  toggleMenu = () => {
    const toValue = this.open ? 0:1
    Animated.spring(this.animation, {
      toValue,
      friction: 10,
      useNativeDriver: true,
    }).start()

    this.open = !this.open;
  };

  render() {

    const hat = {
      transform: [
        {scale: this.animation},
        {translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60]
        })},
        {translateX: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -90]
        })}
      ]
    }

    const job = {
      transform: [
        {scale: this.animation},
        {translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60]
        })},
        {translateX: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 90]
        })}
      ]
    }

    const house = {
      transform: [
        {scale: this.animation},
        {translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 135]
        })},
        {translateX: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 115]
        })}
      ]
    }

    const heart = {
      transform: [
        {scale: this.animation},
        {translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 195]
        })},
      ]
    }

    const cash = {
      transform: [
        {scale: this.animation},
        {translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 135]
        })},
        {translateX: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -115]
        })}
      ]
    }

    return (
      <View style={[styles.container, this.props.style, {top:230}]}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.circleButton, cash]}>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={require("../assets/money.png")}/>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.circleButton, heart]}>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={require("../assets/healthcare.png")}/>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.circleButton, house]}>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={require("../assets/housing.png")}/>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.circleButton, job]}>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={require("../assets/employment.png")}/>
          </Animated.View>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={() => {
            setHeader(lists[0].name);
            navigation.navigate("Tasks", { listID: 0 });
          }}>
          <Animated.View style={[styles.circleButton, hat]}>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={require("../assets/education.png")}/>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.largeCircle]}>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={require("../assets/close.png")}/>
              {/* <Text>{points}</Text> */}
          </Animated.View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    position:'absolute',
  },
  circleButton: {
    position:'absolute',
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
})