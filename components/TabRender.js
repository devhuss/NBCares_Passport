import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TaskList from "./TaskList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PageContext } from "../context";

export default TabRender = ({ listID }) => {
  const [newTask, setNewTask] = useState("");
  const { fire, lists } = React.useContext(PageContext);
  //const [refresh, setRefresh] = refreshs
  const list = lists[listID];

  //console.log('TabRENDER: ', lists[listID])

  const addTask = () => {
    if (newTask) {
      list.tasks.push({
        title: newTask,
        complete: false,
        completed: false,
        steps: [],
      });

      updateList({ list });
      setNewTask("");
      //setRefresh(!refresh);
    } else {
      // a message saying text input cannot be empty
    }
  };

  const updateList = ({ list }) => {
    fire.updateList(list);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 25 }}>itemId: {list.name} </Text>

      <FlatList
        data={list.tasks}
        renderItem={({ item, index }) => (
          <TaskList task={item} index={index} listID={listID} />
        )}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 32 }}
        //extraData={refresh}
      />

      <View style={[styles.section, styles.footer]} behavior="padding">
        <TextInput
          style={[styles.input, { borderColor: "black" }]}
          onChangeText={(text) => setNewTask(text)}
          value={newTask}
        />
        <TouchableOpacity
          style={[styles.addTodo, { backgroundColor: "black" }]}
          onPress={() => addTask()}
        >
          <AntDesign name="plus" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
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
  task: {
    fontWeight: "700",
    fontSize: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  test: {
    flexDirection: "column",
  },
  color1: {
    color: "#555555",
  },
  color2: {
    color: "#000000",
  },
});
