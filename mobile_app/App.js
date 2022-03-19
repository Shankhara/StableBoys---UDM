import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { BottomTab } from './navigation/BottomTab'
import { NavigationContainer } from '@react-navigation/native'

export const API_KEY = 'pznNDBukYDS0nutULkGBxjLi89VFMAKM'
export const SB_WALLET = '0xa86458DC41B35b0c29dBB26C887D3359c40c3459'
export const SERVER_URL = 'https://stableboys.com/'
export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height
export const YELLOW = '#ffb92c'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

const css = StyleSheet.create({})
