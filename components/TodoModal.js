import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput
} from "react-native";

import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const TodoModal = ({ task, refresh, setRefresh, list, updateList, closeModal }) => {
  const [newStep, setNewStep] = useState('dsad')

  const toggleCompleted = (item) => {
    item.completed = !item.completed;

    updateList({ list })
    setRefresh(!refresh);
    
  };

  const addStep = () => {
    if (newStep) {
      task.steps.push({
        title: newStep,
        completed: false
      });
  
      updateList({ list });
      setNewStep('')
      setRefresh(!refresh);
    } else {
      // a message saying that the textinput should not be empty
    }
    
  };


  const addTasp = () => {
    todos[0].step.push({
      id: 4,
      title: "TEST",
      completed: false,
    });
    setRefresh(!refresh);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        style={{ position: "absolute", top: 8, right: 32, zIndex: 10 }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleCompleted(task)}>
        <Ionicons
          name={task.completed ? "ios-square" : "ios-square-outline"}
          size={24}
          color={styles.color1}
          style={{ width: 32 }}
        />
        <Text>{task.title}</Text>
        <Text>
          {task.steps.filter((step) => step.completed).length} of {task.steps.length}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={task.steps}
        keyExtractor={(item, index) => index}
        extraData={refresh}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 32 }}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleCompleted(item)}>
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
      />

      <View style={[styles.section, styles.footer]} behavior='padding' >
        <TextInput style={[styles.input, { borderColor: 'black' }]} onChangeText={text => setNewStep(text)} value={newStep} />
        <TouchableOpacity style={[styles.addTodo, { backgroundColor: 'black' }]} onPress={() => addStep()} >
          <AntDesign name="plus" size={24} color={'white'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TodoModal;

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
