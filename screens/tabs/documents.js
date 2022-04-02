import React from "react";
import { Text, View } from "react-native";
import TabRender from "../../components/TabRender";

const Documents = ({ route, navigation }) => {

  const { list } = route.params;
  const { fire } = route.params;

  return (
    <TabRender list={list} fire={fire} />
  )
}

export default Documents;
