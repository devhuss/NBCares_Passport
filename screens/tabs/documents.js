import React from "react";
import { Text, View } from "react-native";
import TabRender from "../../components/TabRender";

const Documents = ({ route, navigation }) => {

  const { lists } = route.params;
  const { item } = route.params;
  const { fire } = route.params;

  return (
    <TabRender lists={item} name={item.name} todos={item.todos} fire={fire} />
  )
}

export default Documents;
