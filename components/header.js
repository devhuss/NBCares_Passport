import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
{/* This is supposed to be the generic header.
It will add the menu later once I figure out how it works */}
export default function Header({navigation, title}){

    const openMenu = () => {
        navigation.openDrawer();
    }
{/* this is the header menu button */}
<View style={styles.header}>
    <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      <View>
       <Text style={styles.headerText}>{ title }</Text>
      </View>
  </View>
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#af272f',
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
      },
      icon: {
        position: 'absolute',
        right: 16
      },
})