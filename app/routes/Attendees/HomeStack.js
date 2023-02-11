import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/Attendees/Home/HomeScreen';
import SignupScreen from '../../src/screens/SignupScreen';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
    
  </Stack.Navigator>
  )
  
}

export default HomeStack