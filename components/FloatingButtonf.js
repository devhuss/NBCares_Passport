import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import { PageContext } from "../context";
import { useNavigation } from "@react-navigation/native";

export default function FloatingButtonf() {
    const { lists, pointss, headers } = React.useContext(PageContext);
    const points = pointss;
    const list = lists;
    const [header, setHeader] = headers;
    const navigation = useNavigation();

    const [state, setState] = useState(true);
    const [open, setOpen] = useState(true);

    const toggle = () => {
        setState(!state);
        toggleMenu();
    };

    const toggleMenu = () => {
        const toValue = open ? 0:1
        Animated.spring(animation, {
          toValue,
          friction: 10,
          useNativeDriver: true,
        }).start()
    
        setOpen(!open);
        education(50,50);
      };

    //shiftEdX for shift education x, shift education y
    const animation = new Animated.ValueXY({x:0,y:0})
    const education = (shiftEdX, shiftEdY) => {
    Animated.spring(animation, {
        toValue: open ? {x:0,y:0} : {x:shiftEdX, y:shiftEdY},
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
                    fontSize: 30, }}>
                {state ? "Push to Begin!" : "Welcome!"}
            </Text>

            <TouchableWithoutFeedback onPress={() => {
            setHeader(list[0].name);
            navigation.navigate("Tasks", { listID: 0 });
            }}>
                <Animated.View style={[styles.circleButton]}>

                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={toggle}>
                <Animated.View style={[styles.largeCircle,{position:'absolute', top:150}]}>
                    <Text style={styles.pointsText}>{points}</Text>
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
    pointsText: {
        color: "white",
        fontWeight: "700",
        fontSize: 60,
      },
})