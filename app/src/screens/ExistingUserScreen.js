import { View, Text, Button, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
import Layout from '../constants/Dimensions';


const ExistingUser = ({ route, navigation }) => {
  // getting params
  const email = route.params?.email;



  let wide = Layout.width;
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
      <SafeAreaView>
        <View style={{ marginHorizontal: wide * 0.07, marginVertical: wide * 0.1 }}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <KeyboardAvoidingView behavior='padding'  >
              <View style={{ marginTop: wide * 0.03, marginHorizontal: wide * 0.1 }}>
                <Image
                  style={{ alignSelf: 'center' }}
                  source={require("../../Images/sot.png")}
                />

                <View style={{ marginTop: wide * 0.1 ,}}>

                  <Text style={{ color: '#B7B7B7', fontSize: 15, fontWeight: '400',marginLeft: wide * 0.03 }} >Sign up as</Text>
                  <Text style={{ color: 'black', fontSize: 16, fontWeight: '400',marginLeft: wide * 0.03 }}>{email}</Text>


                  <View style={{ marginTop: wide * 0.22,marginBottom: wide * 0.1}}>

                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Enter password</Text>
                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                      <TextInput  placeholder='Password' style={{ marginHorizontal: wide * 0.05 }} />
                    </View>

                  </View>

                  <TouchableOpacity onPress={() => {
                    navigation.navigate('SignupScreen', { email: email })

                  }} style={{  justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ backgroundColor: '#5669FF', height: wide * 0.14, borderRadius: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                      <View style={{ flex: 3, alignItems: 'center', marginRight: -wide * 0.1 }}>
                        <Text style={{ color: Colors.white, fontSize: 15, fontWeight: '600' }}>CONTINUE</Text>
                      </View>
                      <View style={{ flex: 0.4, alignItems: 'flex-end', marginRight: wide * 0.03 }}>
                        <Image

                          source={require("../../Images/activeArrow.png")}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>







              {/* <TouchableOpacity onPress={() => { navigation.goBack() }}><Text>back button</Text></TouchableOpacity> */}


            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default ExistingUser
