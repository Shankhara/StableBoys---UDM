import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { YELLOW } from '../App'

export function Profile() {
  const [wallet, setWallet] = useState()

  const handleSaveWalletAddress = () => {

  }

  const WalletForm = () => {
    return (
      <View style={css.wallet_form}>
        <Text style={css.text}>Wallet address</Text>
        <TextInput
          style={css.text_input}
          value={wallet}
          onChangeText={value => setWallet(value)}
          placeholder='0xfA0AF7599a7a46ff19eb3B34f2A8Bc1b86203D63'
        />
        <View style={css.button_view}>
          <Button title='Save' onPress={handleSaveWalletAddress} />
        </View>
      </View>
    )
  }

  return (
    <View style={css.view}>
      <WalletForm />
    </View>
  )
}

const css = StyleSheet.create({
  button_view: {
    paddingVertical: '2%',
    paddingHorizontal: '20%',
  },
  text: {
    margin: '3%',
    fontSize: 25,
    fontWeight: 'bold',
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
