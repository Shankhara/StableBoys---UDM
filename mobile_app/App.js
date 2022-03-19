import React from 'react'
import { StyleSheet } from 'react-native'
import { MainStack } from './navigation/MainStack'

export const API_KEY = 'pznNDBukYDS0nutULkGBxjLi89VFMAKM'
export const SB_WALLET = '0xa86458DC41B35b0c29dBB26C887D3359c40c3459'
export const SERVER_URL = 'https://stableboys.com/'

export default function App() {
  return (
    <MainStack />
  );
}

const css = StyleSheet.create({})
