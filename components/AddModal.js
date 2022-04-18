import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { PageContext } from "../context";

const AddModal = ({ modalVisible, setModalVisible, listID, tIndex, type }) => {
  const { fire, lists } = React.useContext(PageContext);
  const list = lists[listID];

  const [newItem, setNewItem] = useState("");
  const [androidDefaults, setAndroidDefaults] = useState({
    container: {
      backgroundColor: "#FAFAFA",
    },
    title: {
      color: "#000000",
      fontSize: 22,
      fontWeight: "bold",
    },
    message: {
      color: "#000000",
      fontSize: 15,
      fontWeight: "normal",
    },
    button: {
      color: "#387ef5",
      fontSize: 16,
      fontWeight: "500",
      textTransform: "uppercase",
      backgroundColor: "transparent",
    },
  });

  const addItem = (item, type) => {
    if (newItem) {
      // task.steps.push({
      if (type == "task") {
        item.push({
          title: newItem,
          type: "user",
          complete: false,
          completed: false,
          points: 0,
          steps: [],
        });
      } else {
        item.push({
          title: newItem,
          type: "user",
          complete: false,
          completed: false,
          points: 0,
        });
      }
      fire.updateList(list);
      setNewItem("");
      //setRefresh(!refresh);
    } else {
      // a message saying that the textinput should not be empty
    }
  };

  const AndroidButtonBox = () => {
    const [buttonLayoutHorizontal, setButtonLayoutHorizontal] = useState(1);
    const buttonProps = [{}, {}];

    return (
      <View
        style={[
          styles.androidButtonGroup,
          {
            flexDirection: buttonLayoutHorizontal === 1 ? "row" : "column",
          },
        ]}
        onLayout={(e) => {
          if (e.nativeEvent.layout.height > 60) setButtonLayoutHorizontal(0);
        }}
      >
        {buttonProps.map((item, index) => {
          if (index > 2) return null;
          const alignSelfProperty =
            buttonProps.length > 2 &&
            index === 0 &&
            buttonLayoutHorizontal === 1
              ? "flex-start"
              : "flex-end";
          let defaultButtonText = "OK";
          if (buttonProps.length > 2) {
            if (index === 0) defaultButtonText = "ASK ME LATER";
            else if (index === 1) defaultButtonText = "CANCEL";
          } else if (buttonProps.length === 2 && index === 0)
            defaultButtonText = "CANCEL";
          return (
            <View
              key={index}
              style={[
                styles.androidButton,
                index === 0 && buttonLayoutHorizontal === 1 ? { flex: 1 } : {},
              ]}
            >
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  if (type == "task") {
                    addItem(list.tasks, type);
                  } else {
                    addItem(list.tasks[tIndex].steps, type);
                  }
                }}
                style={[
                  {
                    alignSelf: alignSelfProperty,
                  },
                ]}
              >
                <View
                  style={[
                    styles.androidButtonInner,
                    {
                      backgroundColor:
                        (item.styles && item.styles.backgroundColor) ||
                        androidDefaults.button.backgroundColor,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color: androidDefaults.button.color,
                      fontFamily: androidDefaults.button.fontFamily,
                      fontSize: androidDefaults.button.fontSize,
                      fontWeight: androidDefaults.button.fontWeight,
                      textTransform: androidDefaults.button.textTransform,
                    }}
                  >
                    {" "}
                    {defaultButtonText}
                  </Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <Pressable
        style={[
          Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={() => setModalVisible(false)}
      />
      <View style={styles.alertBox}>
        <View style={[styles.androidAlertBox, androidDefaults.container]}>
          <Text style={[styles.androidTitle, androidDefaults.title]}>
            Add New:
          </Text>
          {/* <Text style={[styles.androidMessage, androidDefaults.message]}>
              "Message"
            </Text> */}
          <TextInput
            style={[styles.input, { borderColor: "grey" }]}
            onChangeText={(text) => setNewItem(text)}
            value={newItem}
          />
          <AndroidButtonBox />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 23,
    paddingHorizontal: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.3,
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.4,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  alertBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  androidAlertBox: {
    maxWidth: 280,
    width: "100%",
    margin: 48,
    elevation: 24,
    borderRadius: 5,
  },
  androidTitle: {
    marginHorizontal: 24,
    marginVertical: 15,
  },
  androidMessage: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
  androidButtonGroup: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 8,
    marginLeft: 24,
  },
  androidButton: {
    marginTop: 12,
    marginRight: 8,
  },
  androidButtonInner: {
    padding: 10,
  },
});

export default AddModal;
