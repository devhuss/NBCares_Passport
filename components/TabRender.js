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
  TextInput
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TaskList from "./TaskList";
import { Fire } from "../firebase";

export default TabRender = ({ lists, fire, name, todos }) => {
  const [refresh, setRefresh] = useState(false);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    todos.push({
      title: "test task",
      completed: false,
      step: [],
    });

    //console.log(lists)
    updateLists({lists});
    setRefresh(!refresh);
  };


  const updateLists = ({ lists }) => {
    console.log(lists)
    fire.updateLists(lists)
  }

 

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
            updateLists={updateLists}
            lists={lists}
          />
        )}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 32 }}
        extraData={refresh}
      />

      <View style={[styles.section, styles.footer]} behavior='padding' >
        <TextInput style={[styles.input, { borderColor: 'black' }]} />
        <TouchableOpacity style={[styles.addTodo, { backgroundColor: 'black' }]} onPress={() => addTask()} >
          <AntDesign name="plus" size={24} color={'white'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignSelf: 'stretch',
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center'
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
    alignItems: 'center',
    justifyContent: 'center'
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