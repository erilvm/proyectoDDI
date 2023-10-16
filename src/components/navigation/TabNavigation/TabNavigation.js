import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './TabNavigation.styles';
import CustomTabBarButton from './CustomTabBarButton';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StackNavigation from '../../navigation/StackNavigation/StackNavigation';
import StackFavoritos from '../../navigation/StackNavigation/StackFavoritos';
import AccountScreen from '../../../screen/AccountScreen';
import { useAuth } from '../../../hooks/useAuth';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const { logout } = useAuth();

  // Función para manejar el evento de cerrar sesión
  const handleLogout = () => {
  // Mostrar una alerta para confirmar el cierre de sesión

    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => {
            // Si se presiona "Aceptar", llamar a la función de cerrar sesión esta se encuentra en useAuth
            logout();
          },
        },
      ],
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarStyle: {
          backgroundColor: '#0D0D0D',
        },
      })}
    >
      <Tab.Screen
        name="Cuenta"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Mi perfil',
          title: '',
          headerShown: true,
          headerTransparent: true,
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }} onPress={handleLogout}>
              <AwesomeIcon name="sign-out" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Inicio"
        component={StackNavigation}
        options={{
          title: 'Inicio',
          headerShown: false,
          tabBarButton: () => (
            <CustomTabBarButton iconSource={require('../../../assets/home.png')} />
          ),
        }}
      />

      <Tab.Screen
        name="StackFavoritos"
        component={StackFavoritos}
        options={{
          title: 'Favoritos',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = '';
  let color = '#F0F2EB';

  if (routeStatus.focused) {
    color = '#A7CB54';
  }

  if (route.name === 'Inicio') {
    iconName = 'home';
  }
  if (route.name === 'Cuenta') {
    iconName = 'user';
  }
  if (route.name === 'StackFavoritos') {
    iconName = 'heart';
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
};
