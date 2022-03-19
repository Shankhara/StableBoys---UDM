import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FAKE_DATA } from '../fakeData'

export function ArticlesList() {
  const nav = useNavigation()

  const Item = ({ item }) => {
    const handleItemNav = () => {
      nav.navigate('Article', { id: item.id })
    }

    return (
      <TouchableOpacity onPress={handleItemNav}>
        <View style={css.item}>
          <View style={css.image_view}>
            <Image style={css.image} source={item.image} />
          </View>
          <View style={css.text_view}>
            <Text style={css.text_name}>{item.name}</Text>
            <Text style={css.text_desc}>{item.description}</Text>
            <Text style={css.text_price}>{item.price}$</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={FAKE_DATA}
      renderItem={Item}
      keyExtractor={item => item.id}
    />
  )
}

const css = StyleSheet.create({
  image_view: {
    flex: 1,
  },
  image: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    height: '100%',
    width: '100%'
  },
  text_name: {
    margin: '2%'
  },
  text_desc: {
    margin: '2%'
  },
  text_price: {
    margin: '2%'
  },
  text_view: {
    flex: 2,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    margin: '2%',
    height: 150,
  }
})
