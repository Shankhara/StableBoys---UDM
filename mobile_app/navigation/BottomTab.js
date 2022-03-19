import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainStack } from './MainStack'
import { ProfileStack } from './ProfileStack'

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shopping List" component={MainStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  )
}

const css = StyleSheet.create({})
