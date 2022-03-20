import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FAKE_DATA } from '../fakeData'
import { HEIGHT, SERVER_URL, WIDTH, YELLOW } from '../constants'

export function Article({ route }) {
  const { id } = route.params
  const article = FAKE_DATA[id - 1]
  const [modalVisible, setModalVisible] = useState(false)
  const [claimModalVisible, setClaimModalVisible] = useState(false)
  const [status, setStatus] = useState(false)

  const purchaseAmountRequest = async () => {
    const response = await fetch(`${SERVER_URL}/user/purchase`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: article.price
      })
    })
    if (response.status === 200) {
      const json = await response.json()
      if (json.status === true) {
        setStatus(true)
      }
    }
  }

  useEffect(() => {
    let id, idB
    if (modalVisible === true) {
      id = setTimeout(() => { setModalVisible(false) }, 2500)
      if (status) {
        idB = setTimeout(() => setClaimModalVisible(true), 2500)
      }
    }
    return () => {
      clearTimeout(id)
      clearTimeout(idB)
    }
  }, [modalVisible, status])

  useEffect(() => {
    let id
    if (claimModalVisible === true) {
      id = setTimeout(() => setClaimModalVisible(false), 2500)
    }
    return () => clearTimeout(id)
  }, [claimModalVisible])

  const handleBuy = () => {
    setModalVisible(true)
    purchaseAmountRequest()
  }

  return (
    <ScrollView>
      <View style={css.image_view}>
        <Image style={css.image} source={article.image} />
      </View>
      <View style={css.content}>
        <Text style={css.text_name}>{article.name}</Text>
        <Text style={css.text_desc}>{article.description}</Text>
        <Text style={css.text_price}>{article.price}$</Text>
      </View>
      <View style={css.button_view}>
        <Button title='Buy' onPress={handleBuy} />
      </View>
      <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={css.modal_view}>
          <Text style={css.modal_text}>Simulating payment with your favorite bank system</Text>
          <View style={css.loading_view}>
            <ActivityIndicator size='large' color='black'/>
          </View>
        </View>
      </Modal>
      <Modal animationType='slide' visible={claimModalVisible} transparent={true} onRequestClose={() => setClaimModalVisible(false)}>
        <View style={css.claim_view}>
          <Text style={css.claim_text}>NFT unlocked !</Text>
        </View>
      </Modal>
    </ScrollView>
  )
}

const css = StyleSheet.create({
  claim_text: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  claim_view: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: 20,
    alignSelf: 'center',
    height: 100,
    width: WIDTH - 20,
    padding: '5%',
    backgroundColor: YELLOW,
    borderRadius: 10,
  },
  loading_view: {
    padding: '20%'
  },
  modal_text: {
    textAlign: 'center',
    fontSize: 20
  },
  modal_view: {
    padding: '10%',
    backgroundColor: YELLOW,
    borderRadius: 10,
    position: 'absolute',
    top: HEIGHT / 2 - 150,
    left: WIDTH / 2 - 150,
    height: 300,
    width: 300,
  },
  button_view: {
    margin: '10%',
  },
  text_name: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_desc: {
    fontSize: 18,
  },
  text_price: {
   fontWeight: 'bold',
   fontSize: 25,
    textAlign: 'right'
  },
  content: {
    marginHorizontal: '5%',
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%'
  },
  image_view: {
    height: 400,
    width: WIDTH
  },
  view: {
    flex: 1,
  }
})
