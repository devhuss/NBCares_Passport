import { Text, StyleSheet, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import TodoModal from "./TodoModal";
const TaskList = ({ task, refresh, setRefresh, list, updateList }) => {
  // showList displays Modal if set to true
  // refresh updatees the TaskList if a value in its array changes
  const [showList, setShowList] = useState(false);
  //const [refresh, setRefresh] = useState(false);

  // This returns the completed amount of steps based on the array item (Used in FlatList)
  const completedCount = (item) => {
    return item.filter((step) => step.completed).length;
  };

  // This toggles the Completed Boolean of the array item then updates the TaskList
  const toggleCompleted = (item) => {
    item.completed = !item.completed;
    updateList({list});
    setRefresh(!refresh);
  };

  return (
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
          updateList={updateList}
          closeModal={() => setShowList(!showList)}
        />
      </Modal>

      <TouchableOpacity
        style={styles.taskContainer}
        onPress={() => setShowList(!showList)}
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
            {task.steps.filter((step) => step.completed).length} of {task.steps.length}
          </Text>
        </View>
      </TouchableOpacity>

      {/* <FlatList
        data={item}
        keyExtractor={(item) => item.title}
        extraData={refresh}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity onPress={() => toggleCompleted(item, index)}>
              <Ionicons
                name={item.completed ? "ios-square" : "ios-square-outline"}
                size={24}
                color={styles.color1}
                style={{ width: 32 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                textDecorationLine: item.completed ? "line-through" : "none",
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
      /> */}

      {/* <TouchableOpacity onPress={() => addStep(item, "random Task")}>
        <Text>addTask</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "lightgrey",
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
});
