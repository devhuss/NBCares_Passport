import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Animated,
} from "react-native";

import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { PageContext } from "../context";

const TodoModal = ({ task, listID, closeModal }) => {
  const { fire, lists, pointss, refreshs } = React.useContext(PageContext);
  const [newStep, setNewStep] = useState("");
  const [points, setPoints] = pointss;
  const [refresh, setRefresh] = refreshs;
  
  //const [refresh, setRefresh] = refreshs
  const list = lists[listID];
  const toggleCompleted = (item) => {
    item.complete = !item.complete;

    if (item.complete && !item.completed) {
      setPoints(points + 1);
      fire.updatePoints({
        userPoints: points + 1,
      });
    }

    item.completed = true;
    fire.updateList(list);

    setRefresh(!refresh);
  };

  const addStep = () => {
    if (newStep) {
      task.steps.push({
        title: newStep,
        completed: false,
      });

      fire.updateList(list);
      setNewStep("");
      //setRefresh(!refresh);
    } else {
      // a message saying that the textinput should not be empty
    }
  };

  const deleteStep = (index) => {
    task.steps.splice(index, 1);
    fire.updateList(list);
    //setRefresh(!refresh);
  };

  const rightActions = (dragX, index) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.9],
      extrapolate: "clamp",
    });

    const opacity = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [1, 0.9, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity onPress={() => deleteStep(index)}>
        <Animated.View style={[styles.deleteButton, { opacity: opacity }]}>
          <Animated.Text
            style={{
              color: "white",
              fontWeight: "bold",
              transform: [{ scale }],
            }}
          >
            Delete
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        style={{ position: "absolute", top: 8, right: 32, zIndex: 10 }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.title}
        onPress={() => toggleCompleted(task)}
      >
        <Ionicons
          name={task.complete ? "ios-square" : "ios-square-outline"}
          size={24}
          color={styles.color1}
          style={{ width: 32 }}
        />
        <View>
          <Text style={{ fontSize: 25 }}>{task.title}</Text>
          {task.steps.length > 0 ? (
            <Text>
              {task.steps.filter((step) => step.complete).length} of{" "}
              {task.steps.length}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>

      <FlatList
        data={task.steps}
        keyExtractor={(item, index) => index}
        //extraData={refresh}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        renderItem={({ item, index }) => (
          <Swipeable
            renderRightActions={(_, dragX) => rightActions(dragX, index)}
          >
            <View style={styles.taskContainer}>
              <TouchableOpacity onPress={() => toggleCompleted(item)}>
                <Ionicons
                  name={item.complete ? "ios-square" : "ios-square-outline"}
                  size={24}
                  color={styles.color1}
                  style={{ width: 32 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  textDecorationLine: item.complete ? "line-through" : "none",
                }}
              >
                {item.title}
              </Text>
            </View>
          </Swipeable>
        )}
      />

      <View style={[styles.section, styles.footer]} behavior="padding">
        <TextInput
          style={[styles.input, { borderColor: "black" }]}
          onChangeText={(text) => setNewStep(text)}
          value={newStep}
        />
        <TouchableOpacity
          style={[styles.addTodo, { backgroundColor: "black" }]}
          onPress={() => addStep()}
        >
          <AntDesign name="plus" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default TodoModal;

const styles = StyleSheet.create({
  title: {
    //backgroundColor: 'grey',
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 4,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    // backgroundColor: "lightgrey",
    marginBottom: 3,
    marginLeft: 20,
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    fontWeight: "700",
    fontSize: 16,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    marginBottom: 3,
  },
});
