import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import axios from 'axios'
import { API_KEY, SB_WALLET, SERVER_URL, YELLOW } from '../constants'
import { setMultiValues, setValue } from '../utils'

export function ProSide() {
  const [ctr, setContract] = useState({})

  const sendContractRequest = async (contract, cid) => {
    const response = await fetch(`${SERVER_URL}/pro/create_contract`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: contract.name,
        address: contract.address,
        network: contract.network,
        goal: ctr.purchaseAmountGoal,
        cid: cid
      })
    })
    if (response.status === 200) {
      const json = await response.json()
      console.log('create_contract', json)
    }
  }

  const handleDeployDeal = () => {
    const http = axios.create({
      baseURL: "https://api.starton.io/v2",
      headers: {
        "x-api-key": API_KEY,
      },
    })
    http.post('/pinning/content/json',
      {
        "name": "Pewdiepie's collection",
        "content": {
          "name": "Pewdiepie's collection",
          "description": "Get what you deserve :)",
          "image": "ipfs://ipfs/QmWpifhomSByiminPcd4oaZkDqsFa6SLafTTm4ZTS3BtL1",
          "external_link": "https://www.starton.io/",
          "seller_fee_basis_points": 100,
          "fee_recipient": SB_WALLET
        },
        "meta": {},
        "isSync": true
      }).then(r => {
      // setValue('cid', r.data, setContract)
      const cid = r.data.pinStatus.pin.cid
      http.post( '/smart-contract/from-template',
        {
          "network": 'polygon-mumbai',
          "name": ctr.nameInput,
          "templateId": 'sct_e851adefe4494fc991207b2c37ed8a83',
          "signerWallet": SB_WALLET,
          "speed": "fast",
          "params": [
            ctr.nameInput,
            'Unique',
            'ipfs://ipfs/',
            cid,
            SB_WALLET
          ]
        }).then(r => {
        const tmp = r.data.smartContract
        setMultiValues({ name: tmp.name, address: tmp.address, network: tmp.network, status: tmp.status }, setContract)
        sendContractRequest(tmp, cid).catch(err => console.log('sendContractRequest err', err))
      }).catch(err => {
        console.log('createContract', err)
      })
    }).catch(err => console.log('pinning', err))
  }

  // if (ctr?.cid) {
  //   console.log('DeployC renders', Object.keys(ctr.cid), ctr.cid.pinStatus.pin.cid)
  // }
  //
  // if (ctr?.name) {
  //   console.log('DeployC renders', Object.keys(ctr), ctr.address)
  // }

  return (
    <ScrollView contentContainerView={css.view}>
      <View style={css.create_deal}>
        <Text style={css.create_deal_text}>Create a deal</Text>
        <TextInput
          style={css.create_deal_input}
          onChangeText={text => setValue('nameInput', text, setContract)}
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
        { ctr?.name &&
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
