import React, { useEffect } from "react";
import TabRender from "../../components/TabRender";

const Tasks = ({ route, navigation }) => {
  const { listID } = route.params;

  return <TabRender listID={listID} />;
};

export default Tasks;
