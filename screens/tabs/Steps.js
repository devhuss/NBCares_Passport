import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Animated,
  Alert,
} from "react-native";

import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { PageContext } from "../../context";
import AddModal from "../../components/AddModal";

const Steps = ({ route, navigation }) => {
  const { task } = route.params;
  const { index } = route.params;
  const { listID } = route.params;
  const { fire, lists, pointss, refreshs } = React.useContext(PageContext);
  const [points, setPoints] = pointss;
  const [refresh, setRefresh] = refreshs;

  const [modalVisible, setModalVisible] = useState(false);

  const list = lists[listID];

  const toggleCompleted = (item) => {
    
      item.complete = !item.complete;
      console.log(item);
      console.log(item);
      fire.updateList(list);

    setRefresh(!refresh);
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

  const deleteStep = (index) => {
    task.steps.splice(index, 1);
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

    const radi = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [10, 7.5, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity onPress={() => deleteStep(index)}>
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

  return (
    <GestureHandlerRootView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#859a9b" }}
    >
      <AddModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        listID={listID}
        tIndex={index}
        type="step"
      />
      <TouchableOpacity
        style={{ position: "absolute", top: 36, left: 16, zIndex: 10 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back-sharp" size={26} color="white" />
      </TouchableOpacity>

      <View style={styles.title}>
        <TouchableOpacity onPress={() => toggleCompleted(task)}>
          <Ionicons
            name={task.complete ? "ios-checkbox-outline" : "ios-square"}
            size={35}
            color={task.complete ? "#e3e3e3" : "#ffffff"}
            style={{ width: 40 }}
          />
        </TouchableOpacity>

        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontSize: 22,
              color: task.complete ? "#e3e3e3" : "#ffffff",
            }}
          >
            {task.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            {task.steps.length > 0 ? (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    styles.taskSubText,
                    { color: task.complete ? "#e3e3e3" : "#ffffff" },
                  ]}
                >
                  {task.steps.filter((step) => step.complete).length} of{" "}
                  {task.steps.length}
                </Text>
                <Text
                  style={[
                    styles.taskSubText,
                    {
                      paddingHorizontal: 10,
                      color: task.complete ? "#e3e3e3" : "#ffffff",
                    },
                  ]}
                >
                  ||
                </Text>
              </View>
            ) : null}

            <Text
              style={[
                styles.taskSubText,
                { color: task.complete ? "#e3e3e3" : "#ffffff" },
              ]}
            >
              Type: {task.type}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 35,
          borderBottomColor: "white",
          borderBottomWidth: 2,
        }}
      />

      <FlatList
        data={task.steps}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ paddingHorizontal: 45, marginTop: 15 }}
        renderItem={({ item, index }) => (
          <Swipeable
            renderRightActions={(_, dragX) => rightActions(dragX, index)}
          >
            <View style={styles.taskContainer}>
              <TouchableOpacity onPress={() => toggleCompleted(item)}>
                <Ionicons
                  name={item.complete ? "ios-checkbox-outline" : "ios-square"}
                  size={24}
                  color={item.complete ? "#e3e3e3" : "#ffffff"}
                  style={{ width: 40 }}
                />
              </TouchableOpacity>
              <View>
                <Text style={{ color: item.complete ? "#e3e3e3" : "#ffffff" }}>
                  {item.title}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={[
                      styles.taskSubText,
                      { color: item.complete ? "#e3e3e3" : "#e8e8e8" },
                    ]}
                  >
                    Type: {item.type}
                  </Text>
                </View>
              </View>
            </View>
          </Swipeable>
        )}
      />

      <View style={[styles.section, styles.footer]}>
        <TouchableOpacity
          style={[styles.addTodo, { backgroundColor: "white" }]}
          onPress={() => setModalVisible(true)}
        >
          <AntDesign name="plus" size={24} color={"#677d7e"} />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default Steps;

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 90,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
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
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 30,
    padding: 12,
    position: "absolute",
    bottom: 10,
    opacity: 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    marginBottom: 3,
    marginLeft: 20,
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
    marginBottom: 5,
  },
});
