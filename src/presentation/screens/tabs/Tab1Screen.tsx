import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/Shared/HamburgerMenu'
import { Ionicon } from '../../components/Shared/Ionicon'

export const Tab1Screen = () => {
  

  return (
    <View>
      <HamburgerMenu/>
        <Text>Tab1Screen</Text>
        <Ionicon name="rocket-outline"/>
    </View>
  )
}
