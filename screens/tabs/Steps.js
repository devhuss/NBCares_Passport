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

import React, { useState, useEffect } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { PageContext } from "../../context";
import AddModal from "../../components/AddModal";
import { LinearGradient } from "expo-linear-gradient";

const Steps = ({ route, navigation }) => {
  const { index } = route.params;
  const { listID } = route.params;
  const { fire, lists, pointss, refreshs } = React.useContext(PageContext);
  const [points, setPoints] = pointss;
  const [refresh, setRefresh] = refreshs;

  const [modalVisible, setModalVisible] = useState(false);

  const list = lists[listID];
  const task = list.tasks[index];

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
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#c6b886" }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["#d0c49a", "#ffffff"]}
        locations={[0.5,1]}
        end={{ x: 0, y: 1 }}
        style={styles.background}
      />
      <AddModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        listID={listID}
        tIndex={index}
        type="step"
      />

      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="arrow-back-circle"
            size={35}
            color="white"
            style={{ width: 35, marginLeft: 10 }}
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
        contentContainerStyle={{ paddingHorizontal: 45, marginTop: 15, paddingBottom: 250 }}
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
          <AntDesign name="plus" size={24} color={"#b4a25f"} />
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
    marginTop: 55,
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
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
