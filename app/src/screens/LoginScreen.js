import { View, Text, Button, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StackActions } from '@react-navigation/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Dimensions';
import KeyBoardDismissHandler from '../components/KeyBoardDismissHandler';
import AppLoader from '../components/Apploader';

const LoginScreen = ({ navigation }) => {

  const [verify, setVerify] = useState(false)
  const [email, setEmail] = useState(false)
  const [loading, setLoading] = useState(false)
  const validateEmail = (text) => {


    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {


      setVerify(false)
      return false;
    }
    else {


      setVerify(true)
      setEmail(text)
    }
  }


  let wide = Layout.width;
  return (
    <View  style={{flex:1,backgroundColor:'white'}} >
      <StatusBar  barStyle="dark-content" backgroundColor={'#ffffff'}/>
      <AppLoader visible={loading} />
      <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false} keyboardShouldPersistTaps="handled">

                    <View style={{ marginHorizontal: wide * 0.07, marginTop: wide * 0.1 }}>
                <Image
                  style={{ width:wide*0.8, height:wide*0.4 , resizeMode:'cover',alignSelf:'center'}}
                  source={require("../../Images/logo.png")}
                />
                <Text style={{ marginVertical:wide*0.09,alignSelf:'center',fontSize:wide*0.06,fontWeight:'bold'}}>Sign In To Your Account</Text>

              
 
                <View style={{marginTop:wide*0.02}} >
                  <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Email Address</Text>
                  <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                    <TextInput onChangeText={(text) => validateEmail(text)} placeholder='Email' style={{ marginHorizontal: wide * 0.05 }} />
                  </View>
                </View>
                <View style={{marginTop:wide*0.07}} >
                  <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Password</Text>
                  <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                    <TextInput secureTextEntry={true} onChangeText={(text) => validateEmail(text)} placeholder='Enter Password' style={{ marginHorizontal: wide * 0.05 }} />
                  </View>
                </View>
           
                  <TouchableOpacity onPress={()=>{
                    navigation.navigate('SignupScreen', { email: email })

                  }} style={{ marginTop: wide * 0.1, justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ backgroundColor: Colors.main, height: wide * 0.14, borderRadius: wide*0.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                      <View style={{ flex: 3, alignItems: 'center',  }}>
                        <Text style={{ color: Colors.white, fontSize: wide*0.04, fontWeight: 'bold' }}>LOGIN</Text>
                      </View>
                     
                    </View>
                  </TouchableOpacity>
                  <View style={{flexDirection:'row',justifyContent:'center',marginTop:wide*0.04}}>
                    <Text style={{fontSize:wide*0.039}}>Don't have a Account?</Text>
                    <TouchableOpacity onPress={()=>{
                       navigation.navigate('SignupScreen')
                    }}><Text style={{marginTop:-wide*0.005,fontSize:wide*0.043,marginLeft:5,color:Colors.main,fontWeight:'bold'}} >Sign Up</Text></TouchableOpacity>
                  </View>
                
              </View>
              {/* <Button
                style={{ marginTop: wide * 0.1 }}
                onPress={
                  () => navigation.dispatch(StackActions.replace('Home', { data: "eysa azhar" }))}
                title="Home"
              />
              <Button
                onPress={() => navigation.navigate('SignupScreen', { data: 'hello eysa' })}
                title="Signup"
              /> */}
                   </ScrollView>
            </KeyboardAvoidingView>
     


      </SafeAreaView>
    </View>
  )
}

export default LoginScreen