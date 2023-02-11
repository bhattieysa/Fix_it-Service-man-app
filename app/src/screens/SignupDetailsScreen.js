import { View, Text, Button, SafeAreaView, StatusBar, KeyboardAvoidingView, Alert, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
import Layout from '../constants/Dimensions';
import ImagePicker from 'react-native-image-crop-picker';


const SignupDetailsScreen = ({ route, navigation }) => {
    // getting params
    const email = route.params?.email;

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
                            mediaType: 'photo'
                        })
                            .then((image) => {
                                // console.log('received image', image);

                                // setVideoURL(image.path)
                                // uploadSelectedVideo();


                                // this.sendAttempt(image.path)
                                // 

                            })
                            .catch((e) => {
                                console.log(e);
                                // Alert.alert(e.message ? e.message : e);
                            });
                    }
                },
                {
                    text: 'Camera', onPress: () => {
                        ImagePicker.openCamera({
                            width: 300,
                            height: 400,
                            cropping: true,
                            mediaType: 'photo'
                        }).then(image => {

                            // setVideoURL(image.path)

                            // uploadSelectedVideo();

                            // this.sendAttempt(image.path)


                        });
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                }
            ],
            { cancelable: false }
        );
    }


    let wide = Layout.width;
    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
            <SafeAreaView>
                <View style={{ marginHorizontal: wide * 0.05, marginVertical: wide * 0.1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                        <KeyboardAvoidingView behavior='padding'  >
                            <View style={{ marginTop: wide * 0.03 }}>
                                <Text style={{ color: '#B7B7B7', fontSize: 15, fontWeight: '400', marginLeft: wide * 0.03 }} >To continue, we’ll need some more information for your account
                                    zeeshan.hafeez@bh.edu.pk</Text>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '400', marginLeft: wide * 0.03 }}>{email}</Text>


                                <TouchableOpacity style={{
                                    borderWidth: 1,
                                    borderColor: 'rgba(84, 85, 86, 1)',
                                    width: 102,
                                    height: 30,
                                    borderRadius: 7,
                                    marginTop: wide * 0.02,
                                    justifyContent: 'center',
                                    alignItems: 'center'


                                }}

                                    onPress={() => pickSingle()}
                                >

                                    <Text style={{ color: 'rgba(84, 85, 86, 1)', fontSize: 10, fontWeight: '500' }}>SELECET FILE</Text>

                                </TouchableOpacity>


                                <View style={{ marginTop: wide * 0.1, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>First Name</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='First Name' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>
                                <View style={{ marginTop: wide * 0.05, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Last Name</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='Last Name' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>
                                <View style={{ marginTop: wide * 0.05, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Gender</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='Gender' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>
                                <View style={{ marginTop: wide * 0.05, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Email Address</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='Email Address' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>
                                <View style={{ marginTop: wide * 0.05, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Phone</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='Phone' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>

                                <View style={{ marginTop: wide * 0.05, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Age Group</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='Age Group' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>
                                <View style={{ marginTop: wide * 0.05, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Country</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='Country' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>
                                <View style={{ marginTop: wide * 0.05, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>Association with Beaconhouse</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='Association with Beaconhouse' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>
                                <View style={{ marginTop: wide * 0.05, }}>

                                    <Text style={{ color: '#2C3A4B', fontSize: 16, fontWeight: '600', marginLeft: wide * 0.03, marginBottom: wide * 0.02 }}>How did you hear about this event?</Text>
                                    <View style={{ height: wide * 0.125, borderColor: '#EBEEF2', borderWidth: 2, borderRadius: wide * 0.1, justifyContent: 'center' }}>
                                        <TextInput placeholder='Association with Beaconhouse' style={{ marginHorizontal: wide * 0.05 }} />
                                    </View>

                                </View>

                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('SignupDetailsScreen', { email: email })

                                }} style={{ marginVertical: wide * 0.1, marginHorizontal: wide * 0.15, justifyContent: 'center', alignItems: 'center' }} >
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









                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default SignupDetailsScreen
