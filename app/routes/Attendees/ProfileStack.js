import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../src/screens/Attendees/Profile/ProfileScreen';
import SignupScreen from '../../src/screens/SignupScreen';

const ProfileStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ProfileScreen">
    <Stack.Screen name="EventsScreen" component={ProfileScreen} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
    
  </Stack.Navigator>
  )
}

export default ProfileStack