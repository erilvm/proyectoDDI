import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from '../navigation/TabNavigation/TabNavigation';
import DetallePersonaje from '../../screen/CharacterDetail/DetallePersonaje';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='TabNavigation'
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
      name="DetallePersonaje"
      component={DetallePersonaje}
      options={{
        title: '',
        headerShown: true,
      }}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
