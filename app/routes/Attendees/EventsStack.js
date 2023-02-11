import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from '../../src/screens/Attendees/Events/EventsScreen';
import SignupScreen from '../../src/screens/SignupScreen';

const EventsStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="EventScreen">
    <Stack.Screen name="EventsScreen" component={EventsScreen} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
    
  </Stack.Navigator>
  )
}

export default EventsStack