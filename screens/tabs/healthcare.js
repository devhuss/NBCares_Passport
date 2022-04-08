import React from "react";
import TabRender from "../../components/TabRender";

const Healthcare = ({ route, navigation }) => {

  const { list } = route.params;
  const { fire } = route.params;

  return (
    <TabRender list={list} />
  )
}

export default Healthcare;
