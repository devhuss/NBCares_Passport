import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import { PageContext } from "../context";

export default function FloatingButtonf() {
    const { lists, pointss, headers } = React.useContext(PageContext);

    const [state, setState] = useState(true);
    const [open, setOpen] = useState(true);

    const toggle = () => {
        setState(!state);
    };

    const toggleMenu = () => {
        const toValue = open ? 0:1
        Animated.spring(animation, {
          toValue,
          friction: 10,
          useNativeDriver: true,
        }).start()
    
        setOpen(!open);
      };

    const animation = new Animated.ValueXY({x:0,y:0})
    const education = () => {
    Animated.spring(animation, {
        toValue: {x:50,y:50},
        friction:10,
        useNativeDriver: true,
    }).start();};

    const money = new Animated.ValueXY({ x: 0, y: 0 })
    Animated.spring(money, {
        toValue: { x: 50, y: 100 },
        friction:10,
        useNativeDriver: true,
    }).start()

    return (
        <View style={styles.container}>

            <Text
                style={{
                    position: "absolute",
                    alignItems: "center",
                    top: 0,
                    fontSize: 30,
                }}>
                {state ? "Push to Begin!" : "Welcome!"}
            </Text>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.circleButton, education()]}>

                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {toggle(); toggleMenu()}}>
                <Animated.View style={[styles.largeCircle,{position:'absolute', top:150}]}>

                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
    },
    circleButton: {
        position: 'absolute',
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