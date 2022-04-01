import React from "react";
import TabRender from "../../components/TabRender";
const Housing = ({ route, navigation }) => {

  const { name } = route.params;
  const { todos } = route.params;

  return (
    <TabRender name={name} todos={todos} />
  );
};

export default Housing;
