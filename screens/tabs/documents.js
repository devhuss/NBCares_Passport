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
import { Ionicons } from "@expo/vector-icons";
import TodoModal from "../../components/TodoModal";

const Documents = ({ route, navigation }) => {
  const [showList, setShowList] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { name } = route.params;
  const { todos } = route.params;

  const toggleCompleted = (item, index) => {
    item.completed = !item.completed;
    setRefresh(!refresh);
  };

  const addTask = () => {
    todos[0].step.push({
      title: "TEST",
      completed: false,
    });
    setRefresh(!refresh);
  };

  const completedCount = (item) => {
    return item.filter((step) => step.completed).length;
  };

  const ItemRender = ({ item, title }) => (
    <View>
      <View style={styles.taskContainer}>
        <TouchableOpacity>
          <Ionicons
            name={item.completed ? "ios-square" : "ios-square-outline"}
            size={28}
            color={styles.color1}
            style={{ width: 40 }}
          />
        </TouchableOpacity>
        <View style={styles.test}>
          <Text>{title}</Text>
          
          <Text>{completedCount(item)} of {item.length}</Text>
        </View>
      </View>

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

      {/* <TouchableOpacity onPress={() => addTask(item, "random Task")}>
        <Text>addTask</Text>
      </TouchableOpacity> */}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 3, justifyContent: "center" }}>
      <Text style={{ fontSize: 25 }}>itemId: {name} </Text>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <ItemRender item={item.step} title={item.title} />
        )}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 32 }}
        extraData={refresh}
      />

      <Modal
        animationType="fade"
        visible={showList}
        onRequestClose={() => setShowList(!showList)}
      >
        <TodoModal list={todos} closeModal={() => setShowList(!showList)} />
      </Modal>

      <TouchableOpacity onPress={() => setShowList(!showList)}>
        <Text>TEST MODAL</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setRefresh(!refresh)}>
        <Text>Refresh LIST</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
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
  taskContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Documents;
