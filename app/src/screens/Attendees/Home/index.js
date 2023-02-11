import * as React from 'react';
import { Button, Text, View, StyleSheet,TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../../../../routes/Attendees/HomeStack'
import EventsStack from '../../../../routes/Attendees/EventsStack'
import ProfileStack from '../../../../routes/Attendees/ProfileStack'
import Colors from "../../../constants/Colors";
import LinearGradient from 'react-native-linear-gradient';

const BottomTab = ({ type, color, size = 24, isFocused, index }) => {
  const icon = index == 0 ? 'home' : 'heart';
  const gradient = index == 1;
  return (
    <View>
      {gradient ? (
        <LinearGradient
          colors={[Colors.light, Colors.dark]}
          start={{ x: isFocused ? 0 : 1, y: 0 }} end={{ x: isFocused ? 1 : 0, y: 0 }}
          style={styles.middleIcon}>
          {/* <AppIcon name={'shopping-basket'} type={type} size={size} color={'white'} /> */}
          <Text>eysa</Text>
        </LinearGradient>
      ) : (
        <View style={styles.icon}>
          {/* <AppIcon name={icon} type={type} size={size} color={color} /> */}
          <Text>hello</Text>
        </View>
      )}
    </View>
  )
}

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={styles.bottomBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }

        const color = isFocused ? Colors.dark : Colors.gray;

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            testID={options.tabBarTestID}
            accessibilityRole="button"
          >
            <BottomTab
              // type={index !== 1 ? Icons.MaterialCommunityIcons : Icons.FontAwesome5}
              index={index}
              isFocused={isFocused}
              size={24}
              color={color}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
   
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeStack" tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="EventStack" component={EventsStack} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} />
      </Tab.Navigator>
   
  );
}
const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  middleIcon: {
    bottom: 18,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 8,
  }
});
export default Index;