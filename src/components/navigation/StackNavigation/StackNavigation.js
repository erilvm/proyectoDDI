import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RickAndMortyApi from '../../../api/RickandMortyApi';
import DetallePersonaje from '../../../screen/CharacterDetail/DetallePersonaje';

export default function StackNavigation() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen
      name='RickAndMortyApi'
      component={RickAndMortyApi}
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
        headerShown: true,
        headerTransparent: true,
        headerLeftContainerStyle:{
          marginTop: 30
        },
        headerTintColor: 'white'  // Color del ícono de la flecha de regreso
      }}
    />
  </Stack.Navigator>
  )
}