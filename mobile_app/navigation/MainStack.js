import React from 'react'
import { StyleSheet } from 'react-native'
import { DeployContract } from '../containers/DeployContract'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { InteractContract } from '../containers/InteractContract'
import { ArticlesList } from '../containers/ArticlesList'
import { Article } from '../containers/Article'

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArticlesList" component={ArticlesList} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="DeployContract" component={DeployContract} />
      <Stack.Screen name="InteractContract" component={InteractContract} />
    </Stack.Navigator>
  )
}

const css = StyleSheet.create({})
