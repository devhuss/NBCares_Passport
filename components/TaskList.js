import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Animated,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import TodoModal from "./TodoModal";
import { Swipeable } from "react-native-gesture-handler";
import { PageContext } from "../context";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const TaskList = ({ task, index, listID }) => {
  // showList displays Modal if set to true
  // refresh updatees the TaskList if a value in its array changes
  const [showList, setShowList] = useState(false);
  const { fire, lists, pointss, refreshs } = React.useContext(PageContext);
  const [refresh, setRefresh] = refreshs;
  const [points, setPoints] = pointss;
  const list = lists[listID];

  const navigation = useNavigation();

  // This toggles the Completed Boolean of the array item then updates the TaskList
  const toggleCompleted = (item) => {
    if (item.completed && item.type != "system") {
      item.complete = !item.complete;
      fire.updateList(list);
    }

    if (!item.complete && !item.completed) {
      if (item.type == "system") {
        Alert.alert(
          "Complete [" + item.title + "]",
          "You will not be able to uncomplete this task",
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                add_completeTask(item);
              },
            },
          ]
        );
      } else {
        add_completeTask(item);
      }
    }

    //setRefresh(!refresh);
  };

  const add_completeTask = (item) => {
    setPoints(points + item.points);
    fire.updatePoints({
      userPoints: points + item.points,
    });
    item.complete = true;
    item.completed = true;
    fire.updateList(list);
  };

  const deleteTask = (index) => {
    list.tasks.splice(index, 1);
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

    const radi = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [10, 7.5, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity onPress={() => deleteTask(index)}>
        <Animated.View
          style={[
            styles.deleteButton,
            {
              opacity: opacity,
              borderBottomRightRadius: radi,
              borderTopRightRadius: radi,
            },
          ]}
        >
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

  const Task = () => {
    return (
      <View>
        {/* <Modal
          animationType="slide"
          visible={showList}
          onRequestClose={() => setShowList(!showList)}
        >
          <TodoModal
            task={task}
            listID={listID}
            closeModal={() => setShowList(!showList)}
          />
        </Modal> */}

        <TouchableOpacity
          style={[
            styles.taskContainer,
            { backgroundColor: task.complete ? "#c7d1d1" : "#859a9b" },
          ]}
          onPress={() => {
            navigation.navigate("Steps", { task: task, listID: listID });
          }}
          // onPress={() => setShowList(!showList)}
          // activeOpacity={0.8}
        >
          <TouchableOpacity onPress={() => toggleCompleted(task, index)}>
            <Ionicons
              name={task.complete ? "ios-checkbox-outline" : "ios-square"}
              size={35}
              color={"white"}
              style={{ width: 40 }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={[
                styles.task,
                {
                  //textDecorationLine: task.complete ? "line-through" : "none",
                  color: task.complete ? "grey" : "white",
                },
              ]}
            >
              {task.title}
            </Text>

            <View style={{ flexDirection: "row" }}>
              {task.steps.length > 0 ? (
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.taskSubText]}>
                    {task.steps.filter((step) => step.complete).length} of{" "}
                    {task.steps.length}
                  </Text>
                  <Text style={[styles.taskSubText,{ paddingHorizontal: 10  }]}>||</Text>
                </View>
              ) : null}

              <Text style={[styles.taskSubText, {color: task.complete ? '#969696' : '#e8e8e8'}]}>Type: system</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (task.type == "system") {
    return <Task />;
  } else {
    return (
      <Swipeable renderRightActions={(_, dragX) => rightActions(dragX, index)}>
        <Task />
      </Swipeable>
    );
  }
};

export default TaskList;

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 5,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    //borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    fontWeight: "bold",
    fontSize: 18,
  },
  taskSubText: {
    color: "#e8e8e8", fontWeight: "700"
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    marginBottom: 5,
  },
});
