import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const TodoModal = ({ item, parent, refresh, setRefresh, closeModal }) => {

  const toggleCompleted = (item) => {
    item.completed = !item.completed;
    setRefresh(!refresh);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 8, right: 32, zIndex: 10 }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleCompleted(parent)}>
        <Ionicons
          name={parent.completed ? "ios-square" : "ios-square-outline"}
          size={24}
          color={styles.color1}
          style={{ width: 32 }}
        />
        <Text>{parent.title}</Text>
      </TouchableOpacity>

      <FlatList
        data={item}
        keyExtractor={(item) => item.title}
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
    </SafeAreaView>
  );
};

export default TodoModal;

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
