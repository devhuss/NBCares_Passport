import React, { useState, useEffect } from "react";
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
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TaskList from "./TaskList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PageContext } from "../context";
import AddModal from "./AddModal";


export default TabRender = ({ listID }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { lists, refreshs } = React.useContext(PageContext);
  
  const [refresh, setRefresh] = refreshs
  const list = lists[listID];
  
  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: "center" }}>

      <AddModal modalVisible={modalVisible} setModalVisible={setModalVisible} listID={listID}  type='task'/>

      {/* <Text style={{ fontSize: 25 }}>itemId: {list.name} </Text> */}

      <FlatList
        data={list.tasks}
        renderItem={({ item, index }) => (
          <TaskList task={item} index={index} listID={listID} />
        )}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 16,
          paddingBottom: 62,
        }}
        // keyboardShouldPersistTaps="handled"
        extraData={refresh}
      />

      <View style={[styles.section, styles.footer]}>
        <TouchableOpacity
          style={[styles.addTodo, { backgroundColor: "#677d7e", opacity: .9 }]}
          onPress={() => setModalVisible(true)}
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
    alignSelf: "flex-end",
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
    borderRadius: 10,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 30,
    padding: 12,
    position: "absolute",
    bottom: 10,
    //opacity: 0.85,
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
