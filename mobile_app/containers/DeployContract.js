import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import axios from 'axios'
import { API_KEY, SB_WALLET, SERVER_URL, YELLOW } from '../constants'
import { setValue } from '../utils'

export function ProSide() {
  const [contract, setContract] = useState({})

  const sendContractRequest = async () => {
    const response = await fetch(`${SERVER_URL}/pro/create_contract`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: ctr.name,
        goal: contract.purchaseAmountGoal
      })
    })
    if (response.status === 200) {
      const json = await response.json()
      console.log('JSON', json)
    }
  }

  const handleDeployDeal = () => {
    const http = axios.create({
      baseURL: "https://api.starton.io/v2",
      headers: {
        "x-api-key": API_KEY,
      },
    })
    http.post( '/smart-contract/from-template',
      {
        "network": 'polygon-mumbai',
        "name": contract.name,
        "templateId": 'sct_e851adefe4494fc991207b2c37ed8a83',
        "signerWallet": SB_WALLET,
        "speed": "low",
        "params": [
          contract.name,
          'Unique',
          SERVER_URL,
          'uniqueNft',
          SB_WALLET
        ]
      }).then(r => {
        setValue('smartContract', r.data.smartContract, setContract)
        sendContractRequest()
      }).catch(err => {
        console.log(err)
    })
  }

  const ctr = contract?.smartContract
  // console.log('DeployC renders', Object.keys(contract.smartContract), ctr.name, ctr.createdAt, ctr.status)
  console.log('DeployC renders')

  return (
    <ScrollView contentContainerView={css.view}>
      <View style={css.create_deal}>
        <Text style={css.create_deal_text}>Create your deal</Text>
        <TextInput
          style={css.create_deal_input}
          onChangeText={text => setValue('name', text, setContract)}
          placeholder='  Enter contract name'/>
        <TextInput
          style={css.create_deal_input}
          onChangeText={text => setValue('purchaseAmountGoal', text, setContract)}
          placeholder='  Enter purchase amount goal'/>
        <View style={css.create_button}>
          <Button title='Create' onPress={handleDeployDeal} />
        </View>
      </View>
      <View style={css.create_deal}>
        <Text style={css.create_deal_text}>Your deals</Text>
        { ctr &&
          <View style={css.ctr_view}>
            <Text style={css.ctr_name}>{ctr.name}</Text>
            <Text style={css.ctr_text}>{ctr.network} {ctr.status}</Text>
          </View>
        }
        <View style={css.create_button}>
        </View>
      </View>
    </ScrollView>
  )
}

const css = StyleSheet.create({
  ctr_view: {
    margin: '3%',
    backgroundColor: YELLOW,
    padding: '3%',
    borderRadius: 4
  },
  ctr_name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  ctr_text: {
    fontSize: 18,
  },
  create_button: {
    paddingTop: '-2%',
    padding: '5%',
  },
  create_deal_text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: '3%',
    marginBottom: '-1%'
  },
  create_deal_input: {
    borderRadius: 2,
    borderWidth: 1,
    height: 50,
    margin: '3%',
  },
  create_deal: {
    flex: 1,
    margin: '2%',
    backgroundColor:'white',
  },
  view: {
    flex: 1,
    backgroundColor: '#000000',
  }
})
