import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
//import Header from '../screens/header' //this is supposed to help with header navigation for menu(later)

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

  const handleVital = () => {
    navigation.navigate('Vital Signs')
  }

  //this does not work
  var disableButtons = true;

  return (

    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
      onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

{/* this will enable the buttons. I'm doing this so its easier to get our giant bubble later
    however for some reason "disable buttons wants to stay false, so you can press anyways" */}
<TouchableOpacity
    //this is apparently not an expression
    onPress={disableButtons=false}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Enable Tabs</Text>
      </TouchableOpacity>

{/* documents button */}
    <TouchableOpacity disabled={disableButtons}
    onPress={handleDocuments}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Documents</Text>
      </TouchableOpacity>

{/* education button */}
<TouchableOpacity disabled={disableButtons}
    onPress={handleEducation}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Education</Text>
      </TouchableOpacity>

{/* employment button */}
<TouchableOpacity disabled={disableButtons}
    onPress={handleEmployment}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Employment</Text>
      </TouchableOpacity>

{/* financial button */}
<TouchableOpacity disabled={disableButtons}
    onPress={handleFinancial}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Financial Literacy</Text>
      </TouchableOpacity>

{/* healthcare button */}
<TouchableOpacity disabled={disableButtons}
    onPress={handleHealthcare}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Healthcare</Text>
      </TouchableOpacity>

{/* housing button */}
<TouchableOpacity disabled={disableButtons}
    onPress={handleHousing}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Housing</Text>
      </TouchableOpacity>

{/* vital signs temporary button just to see the screen*/}
<TouchableOpacity disabled={disableButtons}
    onPress={handleVital}
      style={styles.circleButton}
      >
        <Text style={styles.circleText}>Vital Signs</Text>
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