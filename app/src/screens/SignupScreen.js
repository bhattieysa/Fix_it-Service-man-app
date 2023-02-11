import { View, Text, Button, SafeAreaView, StatusBar, KeyboardAvoidingView, FlatList, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Dimensions';
import { BlurView } from "@react-native-community/blur";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AppLoader from '../components/Apploader';
import axios from 'axios';
import * as api from '../../apis/api';

const SignupScreen = ({ route, navigation }) => {
  // getting params
  const email = route.params?.email;
  const [showCategoryDropDown, setShowCategoryrDropDown] = useState(false)
  const [showSubCategoryDropDown, setShowSubCategoryrDropDown] = useState(false)
  const [categoryValue, setCategoryValue] = useState('Select Category')
  const [subCategoryValue, setSubCategoryValue] = useState('Select Sub Category')
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState()
  const [categoriesIndex, setCategoriesIndex] = useState()
  const [subCategories, setSubCategories] = useState()

  let wide = Layout.width;
  let high = Layout.height;

  useEffect(() => {
setLoading(true)
    axios({
      method: 'POST',
      url: api.CATEGORY_URL,

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(function (response) {
        console.log(response.data.categories)
        setCategories(response.data.categories)
        setLoading(false)

      })
      .catch(function (error) {
        console.log("error", error)
      })





  }, [])

  const onChangePhone = (e) => {
    let value = e
    if (e.length > 15 || e.length < 7) {
      setVerify(false)
      setInvalid(true)
    } else {
      setVerify(true)
      setInvalid(false)
    }

    if (e.match(/[^0-9 +]/g) != null) {
      setInvalidNuumber(true)
    } else {
      setInvalidNuumber(false)
    }


    value = value.replace(/[^0-9 +]/g, '')
    setPhone(value)
  }
  const pickSingle = () => {
    Alert.alert(
      "Profile Image",
      'Pick from',
      [
        {
          text: 'Gallery',
          onPress: () => {
            ImagePicker.openPicker({

              width: 500,
              height: 500,
              cropping: true,
              cropperCircleOverlay: true,
              sortOrder: 'none',
              compressImageMaxWidth: 1000,
              compressImageMaxHeight: 1000,
              compressImageQuality: 1,
              compressVideoPreset: 'MediumQuality',
              includeExif: true,
              cropperStatusBarColor: 'white',
              cropperToolbarColor: 'white',
              cropperActiveWidgetColor: 'white',
              cropperToolbarWidgetColor: '#3498DB',
              mediaType: 'photo',
              includeBase64: true
            })
              .then((image) => {
                setBase64(image.data)
                setProfileImage(image.path)

              })
              .catch((e) => {
                Toast.show("Failed")
              });
          }
        },
        {
          text: 'Camera', onPress: () => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
              mediaType: 'photo',
              includeBase64: true
            }).then(image => {

              setBase64(image.data)
              setProfileImage(image.path)


            });
          }
        },
        {
          text: 'Cancel',
          onPress: () => Toast.show('Cancel Pressed'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    );
  }


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
      <AppLoader visible={loading} />
      <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false} keyboardShouldPersistTaps="handled">

            <View style={{ marginHorizontal: wide * 0.07, marginVertical: wide * 0.1 }}>

              <Image
                style={{ width: wide * 0.8, height: wide * 0.4, resizeMode: 'cover', alignSelf: 'center' }}
                source={require("../../Images/logo.png")}
              />
              <Text style={{ alignSelf: 'center', fontSize: wide * 0.06, fontWeight: 'bold' }}>Create Your Account</Text>
              <View style={{ marginTop: wide * 0.05 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Name</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter Name' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>
              <View style={{ marginTop: wide * 0.05 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>DNI</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter DNI' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>
              <View style={{ marginTop: wide * 0.05 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Phonenumber</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter Phonenumber' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>
              <View style={{ marginTop: wide * 0.05 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Email Address</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput onChangeText={(text) => validateEmail(text)} placeholder='Enter Email' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>
              <View style={{ marginTop: wide * 0.05 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Password</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput secureTextEntry={true} placeholder='Enter Password' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>

              <View style={{ marginTop: wide * 0.05 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Brief Experience</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter Brief Experience' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>
              <View style={{ marginTop: wide * 0.05 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Address</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter Address' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>

              <View style={{ marginTop: wide * 0.05, }}>
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Category</Text>
                <View >
                  {/* <TextInput placeholder='Gender' style={{ marginHorizontal: wide * 0.05 }} /> */}

                  <TouchableOpacity
                    style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, flexDirection: 'row', alignItems: 'center' }}
                    activeOpacity={1}
                    onPress={() => setShowCategoryrDropDown(true)}
                  >
                    <Text style={{
                      marginHorizontal: wide * 0.05, flex: 1,

                      color: categoryValue == "Select Category" ? '#DADEE3' : '#000000'

                    }}>

                      {categoryValue}
                    </Text>
                    <Image
                      style={{
                        width: wide * 0.035, height: wide * 0.025, marginHorizontal: wide * 0.05,
                      }} source={require('../../Images/dropDownIcon.png')}
                    />

                  </TouchableOpacity>


                </View>
                {showCategoryDropDown === true ?
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showCategoryDropDown}
                  >
                    <View
                      // onPress={() => setShowGenderDropDown(false)}
                      style={{
                        width: wide,
                        height: high,
                        justifyContent: 'center', alignItems: 'center'
                      }}
                    >
                      <BlurView style={{
                        width: wide,
                        height: high,
                        position: 'absolute',
                        // justifyContent: 'center', alignItems: 'center'
                      }}
                        blurAmount={10}
                        blurRadius={10}
                      />
                      <View style={{
                        width: '65%', height: wide * 0.6, backgroundColor: '#ffffff',
                        marginTop: 20, borderRadius: 20, alignItems: 'center',
                      }}>

                        <View style={{
                          width: '100%', height: '30%',
                          alignItems: 'center', justifyContent: 'center',
                          backgroundColor: Colors.main,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                          flexDirection: 'row',

                          // borderBottomColor: Colors.newGrayFontColor, borderBottomWidth: 1
                        }}>
                          <Text style={{
                            marginLeft: wide * 0.03, flex: 1, color: Colors.white, fontSize: 18, fontWeight: '700', marginTop: wide * 0.01,
                          }}>Select Category</Text>


                          <Ionicons name="ios-close" onPress={() => setShowCategoryrDropDown(false)} style={{ marginRight: wide * 0.02 }} size={34} color="#fff" />
                        </View>


                        <View style={{ width: '100%', height: '70%', }}>

                          <FlatList
                            data={categories}
                            bounce={false}
                            showsVerticalScrollIndicator={false}

                            keyExtractor={item => item.id}
                            renderItem={(item, index) =>



                              <TouchableOpacity
                                style={{
                                  justifyContent: 'center', alignItems: 'center',
                                  height: wide * 0.13, marginTop: wide * 0.01,
                                  borderBottomColor: 'grey', borderBottomWidth: 1
                                }}


                                onPress={() => { setCategoriesIndex(item.index),setCategoryValue(item.item.name), setShowCategoryrDropDown(false) }}
                              >
                                <Text style={{
                                  color: '#000000', fontSize: 15, lineHeight: 16,

                                }}>{item.item.name}</Text>

                              </TouchableOpacity>

                            }
                          />


                        </View>


                      </View>

                      {/* {/ </BlurView> /} */}
                    </View>
                  </Modal>
                  : null
                }


              </View>

              {categoryValue != "Select Category" ?

                <View style={{ marginTop: wide * 0.05, }}>
                  <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Sub Category</Text>
                  <View >
                    {/* <TextInput placeholder='Gender' style={{ marginHorizontal: wide * 0.05 }} /> */}

                    <TouchableOpacity
                      style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, flexDirection: 'row', alignItems: 'center' }}
                      activeOpacity={1}
                      onPress={() => setShowSubCategoryrDropDown(true)}
                    >
                      <Text style={{
                        marginHorizontal: wide * 0.05, flex: 1,

                        color: subCategoryValue == "Select Sub Category" ? '#DADEE3' : '#000000'

                      }}>

                        {subCategoryValue}
                      </Text>
                      <Image
                        style={{
                          width: wide * 0.035, height: wide * 0.025, marginHorizontal: wide * 0.05,
                        }} source={require('../../Images/dropDownIcon.png')}
                      />

                    </TouchableOpacity>


                  </View>
                  {showSubCategoryDropDown === true ?
                    <Modal
                      animationType="fade"
                      transparent={true}
                      visible={showSubCategoryDropDown}
                    >
                      <View
                        // onPress={() => setShowGenderDropDown(false)}
                        style={{
                          width: wide,
                          height: high,
                          justifyContent: 'center', alignItems: 'center'
                        }}
                      >
                        <BlurView style={{
                          width: wide,
                          height: high,
                          position: 'absolute',
                          // justifyContent: 'center', alignItems: 'center'
                        }}
                          blurAmount={10}
                          blurRadius={10}
                        />
                        <View style={{
                          width: '65%', height: wide * 0.6, backgroundColor: '#ffffff',
                          marginTop: 20, borderRadius: 20, alignItems: 'center',
                        }}>

                          <View style={{
                            width: '100%', height: '30%',
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: Colors.main,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            flexDirection: 'row',

                            // borderBottomColor: Colors.newGrayFontColor, borderBottomWidth: 1
                          }}>
                            <Text style={{
                              marginLeft: wide * 0.03, flex: 1, color: Colors.white, fontSize: 18, lineHeight: 16, fontWeight: '700', marginTop: wide * 0.01,
                            }}>Select Sub Category</Text>


                            <Ionicons name="ios-close" onPress={() => setShowSubCategoryrDropDown(false)} style={{ marginRight: wide * 0.02 }} size={34} color="#fff" />
                          </View>


                          <View style={{ width: '100%', height: '70%', }}>

                            <FlatList
                              data={categories[categoriesIndex].sub_categories}
                              bounce={false}
                              showsVerticalScrollIndicator={false}

                              keyExtractor={item => item.id}
                              renderItem={(item, index) =>



                                <TouchableOpacity
                                  style={{
                                    justifyContent: 'center', alignItems: 'center',
                                    height: wide * 0.13, marginTop: wide * 0.01,
                                    borderBottomColor: 'grey', borderBottomWidth: 1
                                  }}


                                  onPress={() => { setSubCategoryValue(item.item.name), setShowSubCategoryrDropDown(false) }}
                                >
                                  <Text style={{
                                    color: '#000000', fontSize: 15, lineHeight: 16,

                                  }}>{item.item.name}</Text>

                                </TouchableOpacity>

                              }
                            />


                          </View>


                        </View>

                        {/* {/ </BlurView> /} */}
                      </View>
                    </Modal>
                    : null
                  }


                </View>
                :
                null
              }


              <View style={{ backgroundColor: Colors.main, marginTop: wide * 0.07, paddingVertical: wide * 0.017, paddingLeft: wide * 0.05, borderRadius: wide * 0.01 }}>
                <Text style={{ color: Colors.white, fontSize: wide * 0.05, fontWeight: 'bold', }}>Bank Details</Text>
              </View>
              <View style={{ marginTop: wide * 0.07 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Account Holder Name</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter Account Holder Name' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>
              <View style={{ marginTop: wide * 0.07 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Type Of Account</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter Type Of Account' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>
              <View style={{ marginTop: wide * 0.07 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Account Number</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter Account Number' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>
              <View style={{ marginTop: wide * 0.07 }} >
                <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Bank Name</Text>
                <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                  <TextInput placeholder='Enter Bank Name' style={{ marginHorizontal: wide * 0.05 }} />
                </View>
              </View>

              <View style={{ backgroundColor: Colors.main, marginTop: wide * 0.07, paddingVertical: wide * 0.017, paddingLeft: wide * 0.05, borderRadius: wide * 0.01 }}>
                <Text style={{ color: Colors.white, fontSize: wide * 0.05, fontWeight: 'bold', }}>Upload DNI Images</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: wide * 0.07 }}>

                <TouchableOpacity>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Entypo name='v-card' size={wide * 0.2} color="#000" />
                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600' }}>Front Side</Text>

                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Entypo name='v-card' size={wide * 0.2} color="#000" />
                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600' }}>Back Side</Text>

                  </View>
                </TouchableOpacity>

              </View>

              <View style={{ backgroundColor: Colors.main, marginTop: wide * 0.07, paddingVertical: wide * 0.017, paddingLeft: wide * 0.05, borderRadius: wide * 0.01 }}>
                <Text style={{ color: Colors.white, fontSize: wide * 0.05, fontWeight: 'bold', }}>Certificates</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: wide * 0.07 }}>

                <TouchableOpacity>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name='certificate' size={wide * 0.23} color="#000" />
                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', alignSelf: 'center' }}>Background Check</Text>

                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name='certificate' size={wide * 0.23} color="#000" />
                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600' }}>Profession</Text>

                  </View>
                </TouchableOpacity>

              </View>


              <TouchableOpacity onPress={() => {
                navigation.navigate('SignupScreen', { email: email })

              }} style={{ marginTop: wide * 0.1, justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ backgroundColor: Colors.main, height: wide * 0.14, borderRadius: wide * 0.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                  <View style={{ flex: 3, alignItems: 'center', }}>
                    <Text style={{ color: Colors.white, fontSize: wide * 0.04, fontWeight: 'bold' }}>SIGN UP</Text>
                  </View>

                </View>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: wide * 0.04 }}>
                <Text style={{ fontSize: wide * 0.039 }}>Already have a Account?</Text>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('LoginScreen')
                }}><Text style={{ marginTop: -wide * 0.005, fontSize: wide * 0.043, marginLeft: 5, color: Colors.main, fontWeight: 'bold' }} >Login</Text></TouchableOpacity>
              </View>

            </View>


          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}

export default SignupScreen
