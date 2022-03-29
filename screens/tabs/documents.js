import React, { useState } from 'react';
import {Button,Text,View,Modal,SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import TodoModal from '../../components/TodoModal';

const Documents = ({route, navigation}) => {

    const [showList, setShowList] = useState(false)

    const {name} = route.params
    const {todos} = route.params

    const ItemRender = ({ title }) => (
        <View>
          <Text>{title}</Text>
        </View>
      )

    

    return(
    <SafeAreaView style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{fontSize: 25}}>itemId: {todos[1].title} </Text>
        <Button
            onPress = {()=> navigation.navigate("Home")} title="previous" 
        >
        </Button>

        <Modal animationType='slide' visible={showList} onRequestClose={() => setShowList(!showList)}>
            <TodoModal list={todos} closeModal={()=> setShowList(!showList)} />
        </Modal>
        <TouchableOpacity
        onPress = {()=> setShowList(!showList)}>
            <Text>TEST MODAL</Text>
        </TouchableOpacity>

        <FlatList
            data={todos}
            renderItem={({ item }) => <ItemRender title={item.title} />}
            keyExtractor={item => item.title}
        />
    </SafeAreaView>
    );
};

export default Documents