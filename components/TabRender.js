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
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TaskList from "./TaskList";

export default TabRender = ({ name, todos }) => {
  const [refresh, setRefresh] = useState(false);

  // const addTask = () => {
  //   todos.push({
  //     id: 3,
  //     title: "Fourth Task",
  //     completed: false,
  //     step: [],
  //   });
  //   setRefresh(!refresh);
  // };

  // const addStep = () => {
  //   todos[0].step.push({
  //     id: 4,
  //     title: "TEST",
  //     completed: false,
  //   });
  //   setRefresh(!refresh);
  // };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 25 }}>itemId: {name} </Text>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TaskList
            item={item}
            item2={item.step}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        )}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 32 }}
        extraData={refresh}
      />

      <TouchableOpacity onPress={() => setRefresh(!refresh)}>
        <Text>Refresh LIST</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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