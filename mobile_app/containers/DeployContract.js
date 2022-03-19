import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import { API_KEY, SB_WALLET, SERVER_URL } from '../App'
import { useNavigation } from '@react-navigation/native'

export function DeployContract() {
  const nav = useNavigation()

  const handleDeployDeal = () => {
    const http = axios.create({
      baseURL: "https://api.starton.io/v2",
      headers: {
        "x-api-key": API_KEY,
      },
    })
    http.post( '/smart-contract/from-template',
      {
        "network": 'binance-testnet',
        "name": 'UniqueReward',
        "templateId": 'sct_e851adefe4494fc991207b2c37ed8a83',
        "signerWallet": SB_WALLET,
        "speed": "low",
        "params": [
          'UniqueReward',
          'Unique',
          SERVER_URL,
          'uniqueNft',
          SB_WALLET
        ]
      }).then(r => {
        console.log(r.data)
      }).catch(err => {
        console.log(err)
    })
  }

  return (
    <View style={css.view}>
      <Text>HELLO</Text>
      <Button title='DEAL' onPress={handleDeployDeal} />
      <Button title='Interact page' onPress={() => {
        nav.navigate('InteractContract')
      }} />
    </View>
  )
}

const css = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'blue'
  }
})
