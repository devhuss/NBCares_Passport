import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

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

  const handleDocuments = () => {
    navigation.navigate('Documents')
  }

  const handleEducation = () => {
    navigation.navigate('Education')
  }

  const handleEmployment = () => {
    navigation.navigate('Employment')
  }

  const handleFinancial = () => {
    navigation.navigate('Financial')
  }

  const handleHealthcare = () => {
    navigation.navigate('Healthcare')
  }

  const handleHousing = () => {
    navigation.navigate('Housing')
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
      onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

{/* documents button */}
    <TouchableOpacity
    onPress={handleDocuments}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Documents</Text>
      </TouchableOpacity>

{/* education button */}
<TouchableOpacity
    onPress={handleEducation}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Education</Text>
      </TouchableOpacity>

{/* employment button */}
<TouchableOpacity
    onPress={handleEmployment}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Employment</Text>
      </TouchableOpacity>

{/* financial button */}
<TouchableOpacity
    onPress={handleFinancial}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Financial Literacy</Text>
      </TouchableOpacity>

{/* healthcare button */}
<TouchableOpacity
    onPress={handleHealthcare}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Healthcare</Text>
      </TouchableOpacity>

{/* housing button */}
<TouchableOpacity
    onPress={handleHousing}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Housing</Text>
      </TouchableOpacity>
    </View>
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
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    position: 'absolute',
    bottom:30,
    
  },
  buttonText: {
    color: 'lightblue',
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
