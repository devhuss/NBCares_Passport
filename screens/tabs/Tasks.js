import React from "react";
import TabRender from "../../components/TabRender";

const Tasks = ({ route }) => {
  const { listID } = route.params;

  return <TabRender listID={listID} />;
};

export default Tasks;
