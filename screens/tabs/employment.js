import React from "react";
import TabRender from "../../components/TabRender";

const Employment = ({ route, navigation }) => {
  const { listID } = route.params;

  return <TabRender listID={listID} />;
};

export default Employment;
