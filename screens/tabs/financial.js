import React from "react";
import TabRender from "../../components/TabRender";

const Financial = ({ route, navigation }) => {
  const { listID } = route.params;

  return <TabRender listID={listID} />;
};

export default Financial;
