import { View, FlatList, Text, Button, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, SafeAreaView, StatusBar, Modal, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'

import Colors from '../../constants/Colors';
import Layout from '../../constants/Dimensions';
import AppLoader from '../../components/Apploader';

import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


// import AsyncStorage from '@react-native-async-storage/async-storage';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Svg, {
  Circle,
  Ellipse,
  G,

  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,

  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,

} from 'react-native-svg';
import BottomNavigation from '../../components/BottomNavigation';


const HomeScreen = ({ navigation }) => {
  // const handleBackPress = () => {
  //   BackHandler.exitApp()
  // }
  // BackHandler.addEventListener("hardwareBackPress", handleBackPress)

  const [selectedDay, setSelectedDay] = useState(1)

  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)











  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
  //   return () => backHandler.remove()
  // }, [])


  // const openDrawer = () => {

  //   navigation.openDrawer();
  // }









  let wide = Layout.width;
  let high = Layout.height;
  if (loading)
    return (<AppLoader visible={loading} />)
  else
    return (
      <View style={{ flex: 1 }}>
        {Platform.OS == 'ios' ?
          <StatusBar barStyle="dark-content" backgroundColor={Colors.main} />
          :
          <StatusBar barStyle="light-content" backgroundColor={Colors.main} />
        }

        <SafeAreaView style={{ flex: 1 }} >
          <View style={{ marginHorizontal: wide * 0.045, marginTop: wide * 0.05 }}>
            {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false}> */}

            <AppLoader visible={loading2} />
            <View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: wide * 0.07 }}>Category Name</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: wide * 0.2, height: wide * 0.2, resizeMode: 'contain',borderColor:Colors.main,borderWidth:2,borderRadius:wide*0.02 }}
                  source={require("../../../Images/logo.png")} />
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View style={{}}>
          <BottomNavigation navigation={navigation} checked='Home' />
        </View>


      </View>
    )
}

export default HomeScreen