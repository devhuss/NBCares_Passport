import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import tempData from '../tempData'

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  const ItemRender = ({ item, name }) => (
    <TouchableOpacity
      style={styles.circleButton}
      onPress={()=> navigation.navigate(name, item)}
    >
      <Text style={styles.circleText}>{name}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      
      <FlatList
        data={tempData}
        renderItem={({ item }) => <ItemRender item={item} name={item.name} />}
        keyExtractor={item => item.name}
      />


    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  circleButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth:3,
    borderColor:'black',
    backgroundColor: '#c5b358',
  },
  circleText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
})
