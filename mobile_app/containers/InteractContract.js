import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { API_KEY } from '../App'

export function InteractContract() {
  const nav = useNavigation()
  const [state, setState] = useState()

  const handleInteractDeal = () => {
    const http = axios.create({
      baseURL: "https://api.starton.io/v2",
      headers: {
        "x-api-key": API_KEY,
      },
    })
    http.post('/smart-contract/binance-testnet/0xE231FF67119D1c53270f2Ca036348Af00dd8597e/read',
      {
        "functionName": 'name',
        "params": []
      }).then(r => {
        setState(r.data.response)
      }).catch(err => {
        console.log(err)
    })
  }

  return (
    <View style={css.view}>
      <Text>{state}</Text>
      <Button title='Contract name' onPress={handleInteractDeal} />
      <Button title='Deploy page' onPress={() => {
        nav.navigate('DeployContract')
      }} />
    </View>
  )
}

const css = StyleSheet.create({})
