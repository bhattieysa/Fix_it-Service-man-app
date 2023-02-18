import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/Home/HomeScreen';
import ProfileStack from './ProfileStack';



const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false,animation: 'none'  }} initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
  



    </Stack.Navigator>
  )

}

export default HomeStack