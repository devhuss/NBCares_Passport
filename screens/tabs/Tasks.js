import React, {useEffect} from "react";
import TabRender from "../../components/TabRender";

const Tasks = ({ route, navigation }) => {
  const { listID, name } = route.params;

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: name,
  //     headerShown: true
  //   })
  // }, [])

  return <TabRender listID={listID} />;
};

export default Tasks;
