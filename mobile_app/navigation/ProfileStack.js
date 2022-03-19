import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Profile } from '../containers/Profile'

const Stack = createNativeStackNavigator();

export function ProfileStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  )
}

const css = StyleSheet.create({})
