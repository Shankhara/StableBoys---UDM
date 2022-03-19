import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { YELLOW } from '../constants'

export function Profile() {
  const [wallet, setWallet] = useState()

  const handleSaveWalletAddress = () => {

  }

  return (
    <View style={css.view}>
      <View style={css.wallet_form}>
        <Text style={css.text_title}>🪙 NFT Prize</Text>
        <Text style={css.text}>To participate enter your wallet address</Text>
        <TextInput
          style={css.text_input}
          onChangeText={setWallet}
          placeholder='0xfA0AF7599a7a46ff19eb3B34f2A8Bc1b86203D63'
        />
        <View style={css.button_view}>
          <Button title='Save' onPress={handleSaveWalletAddress} />
        </View>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  button_view: {
    paddingVertical: '2%',
    paddingHorizontal: '20%',
  },
  text_title: {
    padding: '2%',
    backgroundColor: 'black',
    borderRadius: 5,
    color: 'white',
    margin: '3%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginHorizontal: '2%',
  },
  wallet_form: {
    margin: '3%',
    padding: '2%',
    backgroundColor: YELLOW,
    borderRadius: 10,
  },
  text_input: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 3,
    padding: '2%',
    margin: '2%'
  },
  view: {

  }
})
