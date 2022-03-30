import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

export default class TodoModal extends React.Component {
    state = {
        name: this.props.list.name,
        todos: this.props.list.todos
    }
    render() {
        return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{position: 'absolute', top:64, right: 32, zIndex: 10}} onPress={this.props.closeModal}>
                <AntDesign name='close' size={24} color='black' />
            </TouchableOpacity>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})