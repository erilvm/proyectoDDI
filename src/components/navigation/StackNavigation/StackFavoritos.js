import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritosScreen from '../../../screen/Favoritos/FavoritesScreen';
import DetallePersonaje from '../../../screen/CharacterDetail/DetallePersonaje';

export default function StackFavoritos() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen
      name='Favoritos'
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
        title: '',
        headerTransparent: true,
        headerLeftContainerStyle:{
          marginTop: 90
        }
      }}
    />
  </Stack.Navigator>
  )
}