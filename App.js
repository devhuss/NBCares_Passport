import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import DocumentsScreen from './screens/tabs/documents';
import HousingScreen from './screens/tabs/housing';
import EducationScreen from './screens/tabs/education';
import EmploymentScreen from './screens/tabs/employment';
import FinancialScreen from './screens/tabs/financial';
import HealthcareScreen from './screens/tabs/healthcare';
import VitalScreen from './screens/tabs/vital';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: true}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: true}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{headerShown: true}} name="Documents" component={DocumentsScreen} />
        <Stack.Screen options={{headerShown: true}} name="Housing" component={HousingScreen} />
        <Stack.Screen options={{headerShown: true}} name="Education" component={EducationScreen} />
        <Stack.Screen options={{headerShown: true}} name="Employment" component={EmploymentScreen} />
        <Stack.Screen options={{headerShown: true}} name="Financial" component={FinancialScreen} />
        <Stack.Screen options={{headerShown: true}} name="Healthcare" component={HealthcareScreen} />
        <Stack.Screen options={{headerShown: true}} name="Vital Signs" component={VitalScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});