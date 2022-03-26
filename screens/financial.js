import React from 'react';
import {Button,Text,View,} from 'react-native';

const financial = ({navigation}) => {
    return(
    <View style={{alignItems: 'center',justifyContent: 'center'}}>
        <Text>
            This is the financial literacay tab to be filled later :)
        </Text>
        <Button
        onPress = {()=> navigation.navigate("Home")} title='Previous'>
        </Button>
    </View>
    );
};

export default financial