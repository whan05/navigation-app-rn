import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../theme/theme'
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/Shared/PrimaryButton'
import { type RootStackParams } from '../../routes/StackNavigator'
import { Ionicon } from '../../components/Shared/Ionicon'

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          style={{ paddingLeft: 5}}
          onPress={ () =>  navigation.dispatch( DrawerActions.toggleDrawer)}>
         <Ionicon name='menu-outline' color={ globalColors.primary}/>
        </Pressable>
      )
    })
  }, [])
  

  return (
    <View style={ globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label='Productos'
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label='Settings'
      />
    </View>
  )
}
