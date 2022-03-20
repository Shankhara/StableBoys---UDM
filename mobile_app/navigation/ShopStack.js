import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ArticlesList } from '../containers/ArticlesList'
import { Article } from '../containers/Article'

const Stack = createNativeStackNavigator();

export const ShopStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArticlesList" component={ArticlesList} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  )
}

const css = StyleSheet.create({})
