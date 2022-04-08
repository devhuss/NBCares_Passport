import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import React, { useState } from "react";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import TodoModal from "./TodoModal";
import { Swipeable } from "react-native-gesture-handler";
import { PageContext } from "../context";
const TaskList = ({ task, index, refresh, setRefresh, list }) => {
  // showList displays Modal if set to true
  // refresh updatees the TaskList if a value in its array changes
  const [showList, setShowList] = useState(false);
  const { fire } = React.useContext(PageContext);
  //const [refresh, setRefresh] = useState(false);

  // This returns the completed amount of steps based on the array item (Used in FlatList)
  const completedCount = (item) => {
    return item.filter((step) => step.completed).length;
  };

  // This toggles the Completed Boolean of the array item then updates the TaskList
  const toggleCompleted = (item) => {
    item.completed = !item.completed;
    fire.updateList(list);
    setRefresh(!refresh);
  };

  const deleteTask = (index) => {
    list.tasks.splice(index, 1);
    fire.updateList(list);
    setRefresh(!refresh);
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
      <TouchableOpacity onPress={() => deleteTask(index)}>
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
    <Swipeable renderRightActions={(_, dragX) => rightActions(dragX, index)}>
      <View>
        <Modal
          animationType="slide"
          visible={showList}
          onRequestClose={() => setShowList(!showList)}
        >
          <TodoModal
            task={task}
            refresh={refresh}
            setRefresh={setRefresh}
            list={list}
            closeModal={() => setShowList(!showList)}
          />
        </Modal>

        <TouchableOpacity
          style={styles.taskContainer}
          onPress={() => setShowList(!showList)}
          // activeOpacity={0.8}
        >
          <TouchableOpacity onPress={() => toggleCompleted(task)}>
            <Ionicons
              name={task.completed ? "ios-square" : "ios-square-outline"}
              size={28}
              color={"gray"}
              style={{ width: 40 }}
            />
          </TouchableOpacity>
          <View style={styles.test}>
            <Text
              style={[
                styles.task,
                {
                  textDecorationLine: task.completed ? "line-through" : "none",
                  color: task.completed ? "grey" : "black",
                },
              ]}
            >
              {task.title}
            </Text>

            <Text>
              {task.steps.filter((step) => step.completed).length} of{" "}
              {task.steps.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  taskContainer: {
    //backgroundColor: "lightgrey",
    marginBottom: 3,
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
