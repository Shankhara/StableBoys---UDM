import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ShopStack } from './ShopStack'
import { ProfileStack } from './ProfileStack'

const Tab = createBottomTabNavigator();

export function ShopSide() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shopping List" component={ShopStack} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ unmountOnBlur: true }} />
    </Tab.Navigator>
  )
}

const css = StyleSheet.create({})
