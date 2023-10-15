import { View, Text, Image} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetallePersonaje from '../../../screen/CharacterDetail/DetallePersonaje';
import FavoritosScreen from '../../../screen/Favoritos/FavoritesScreen'

export default function StackNavigation() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen
      name='FavoritosScreen'
      component={FavoritosScreen}
      options={{
        title: '',
        headerTransparent: true,
      }}
    />

    <Stack.Screen
      name="DetallePersonaje"
      component={DetallePersonaje}
      options={{
        title: 'Detalle Personaje',
        headerShown: true,
        tabBarVisible: false,
      }}
    />
  </Stack.Navigator>
  )
}