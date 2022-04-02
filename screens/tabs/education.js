import React from "react";
import TabRender from "../../components/TabRender";

const Education = ({ route, navigation }) => {

  const { lists } = route.params;
  const { item } = route.params;
  const { fire } = route.params;

  return (
    <TabRender lists={item} name={item.name} todos={item.todos} fire={fire} />
  )
}

export default Education;
