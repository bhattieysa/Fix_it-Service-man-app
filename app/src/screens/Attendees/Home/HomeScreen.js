import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView>
      <Text>eysa</Text>
      <Button

        onPress={() => navigation.navigate('SignupScreen', { data: 'hello eysa' })}
        title="Signup"
      />
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen