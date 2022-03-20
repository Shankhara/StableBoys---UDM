import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { YELLOW } from '../constants'
import { useNavigation } from '@react-navigation/native'

export function Menu() {
  const nav = useNavigation()

  return (
    <View style={css.view}>
     <TouchableOpacity style={css.top_touch} onPress={() => nav.navigate('ProSide')}>
       <Text style={css.pro_text}>PRO side</Text>
     </TouchableOpacity>
      <TouchableOpacity style={css.bot_touch} onPress={() => nav.navigate('ShopSide')}>
        <Text style={css.shop_text}>Shop side</Text>
      </TouchableOpacity>
    </View>
  )
}

const css = StyleSheet.create({
  pro_text: {
    fontWeight: 'bold',
    fontSize: 42,
    textAlign: 'center',
    color: 'black'
  },
  shop_text: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: 'black'
  },
  bot_touch: {
    flex: 1,
    backgroundColor: YELLOW,
    justifyContent: 'center'
  },
  top_touch: {
    flex: 1,
    justifyContent: 'center'
  },
  view: {
    flex: 1,
  }
})
