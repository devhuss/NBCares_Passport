import React from "react";
import TabRender from "../../components/TabRender";
const Housing = ({ route, navigation }) => {

  const { listID } = route.params;

  return (
    <TabRender listID={listID} />
  )
}
export default Housing;
