import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProSide } from '../containers/DeployContract'
import { Menu } from '../containers/Menu'
import { ShopSide } from './ShopSide'

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
      <Stack.Screen name="ProSide" component={ProSide} />
      <Stack.Screen name="ShopSide" component={ShopSide} />
    </Stack.Navigator>
  )
}

const css = StyleSheet.create({})
