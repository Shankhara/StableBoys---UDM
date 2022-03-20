import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { API_KEY, SB_WALLET, SERVER_URL, YELLOW } from '../constants'
import { setValue } from '../utils'
import axios from 'axios'

export function Profile() {
  const [wallet, setWallet] = useState()
  const [state, setState] = useState({})

  const handleSaveWalletAddress = async () => {
    const response = await fetch(`${SERVER_URL}/user/wallet_address`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        wallet_address: wallet
      })
    })
    // console.log('saveWalletAddress', response.status)
  }

  const purchaseAmountRequest = async () => {
    const response = await fetch(`${SERVER_URL}/user/purchase_amount`, {
      method: 'GET',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    })
    if (response.status === 200) {
      const json = await response.json()
      // console.log('JSON', json)
      setValue('purchaseAmount', json.purchase_amount, setState)
      if (json.status === true) {
        setValue('status', json.status, setState)
      }
    }
  }

  const handleNFTCreate = () => {
    const http = axios.create({
      baseURL: "https://api.starton.io/v2",
      headers: {
        "x-api-key": API_KEY,
      },
    })
    http.post('/pinning/content/json',
      {
        "name": "NFT Prize - PewDiePie",
        "content": {
          "name": "NFT Prize - PewDiePie",
          "description": "Congrats !",
          "image": "ipfs://ipfs/QmV9VGokeUi36zg2dEjcwvoRqzpZycuxAq9zQQKTEazcXF",
          "attributes": [
            {
              "key": "credit",
              "trait_type": "string",
              "value": "Blockchain API lovingly delivered by https://www.starton.io"
            }
          ]
        },
        "meta": {},
        "isSync": true
      }).then(r => {
        const nftCid = r.data.pinStatus.pin.cid
        http.post(`/smart-contract/${state.ctr.network}/${state.ctr.address}/call`,
          {
            "functionName": 'safeMint',
            "signerWallet": SB_WALLET,
            "params": [
              wallet,
              nftCid
            ]
          }).then(r => {
          console.log('NFTCreate r', r.data)
        }).catch(err => {
          console.log('NFTCreate', err)
        })
    })
  }

  const contractRequest = async () => {
    const response = await fetch(`${SERVER_URL}/pro/contract`, {
      method: 'GET',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    })
    if (response.status === 200) {
      const json = await response.json()
      setValue('ctr', json.contract, setState)
      console.log('contractRequest JSON', json)
    }
  }

  console.log('Profile renders', state)

  useEffect(() => {
    purchaseAmountRequest()
    contractRequest()
  }, [])

  return (
    <View style={css.view}>
      <View style={css.wallet_form}>
        <Text style={css.text_title}>🪙 NFT Prize</Text>
        <Text style={css.text}>To participate enter your wallet address</Text>
        <TextInput
          style={css.text_input}
          value={wallet}
          onChangeText={setWallet}
          placeholder=' Enter your wallet address'
        />
        <View style={css.button_view}>
          <Button title='Save' onPress={handleSaveWalletAddress} />
        </View>
      </View>
      <View style={css.status}>
        { !state?.status &&
        <>
          <Text style={css.text}>You need to reach the purchase amount goal to claim your NFT</Text>
          <Text style={css.goal_text}>{state?.purchaseAmount} / {state?.ctr?.goal}$</Text>
        </>
        }
        { state?.status &&
        <>
          <Text style={css.text}>You're NFT is unlocked !</Text>
          <View style={css.button_view}>
            <Button title='Claim' onPress={handleNFTCreate} />
          </View>
        </>
        }
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  goal_text: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
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
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: '2%',
  },
  status: {
    margin: '3%',
    padding: '3%',
    backgroundColor: YELLOW,
    borderRadius: 10,
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
