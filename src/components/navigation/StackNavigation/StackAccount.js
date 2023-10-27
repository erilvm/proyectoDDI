import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../../../screen/Account/AccountScreen';
import ChangeName from '../../../screen/Account/ChangeName/ChangeName';

import ChangeEmail from '../../../screen/Account/ChangeEmail/ChangeEmail';
import ChangeUsername from '../../../screen/Account/ChangeUsername/ChangeUsername';
import ChangePassword from '../../../screen/Account/ChangePassword/ChangePassword';


export default function StackAccount() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen
      name='Perfil'
      component={AccountScreen}
      options={{
        title: '',
        headerShown: true,
        headerTransparent: true,
        headerLeftContainerStyle:{
          marginTop: 100
        },
      }}
    />
    <Stack.Screen
      name='ChangeName'
      component={ChangeName}
      options={{
        title: '',
        headerTransparent: false,
        }
      }
    />
    <Stack.Screen
      name='ChangeEmail'
      component={ChangeEmail}
      options={{
        title: '',
        headerTransparent: false,
        }
      }
    />
    <Stack.Screen
      name='ChangeUsername'
      component={ChangeUsername}
      options={{
        title: '',
        headerTransparent: false,
        }
      }
    />
    <Stack.Screen
      name='ChangePassword'
      component={ChangePassword}
      options={{
        title: '',
        headerTransparent: false,
        }
      }
    />

  </Stack.Navigator>
  )
}