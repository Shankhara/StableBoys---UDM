import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { DeployContract } from '../containers/DeployContract'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { InteractContract } from '../containers/InteractContract'

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DeployContract" component={DeployContract} />
          <Stack.Screen name="InteractContract" component={InteractContract} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const css = StyleSheet.create({})
