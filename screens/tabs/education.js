import React from "react";
import TabRender from "../../components/TabRender";

const Education = ({ route, navigation }) => {
  const { listID } = route.params;

  return <TabRender listID={listID} />;
};

export default Education;
