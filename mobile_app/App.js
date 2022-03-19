import React from 'react'
import { StyleSheet } from 'react-native'
import { BottomTab } from './navigation/BottomTab'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

const css = StyleSheet.create({})
