import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './TabNavigation.styles';
import CustomTabBarButton from './CustomTabBarButton';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import StackNavigation from '../../navigation/StackNavigation/StackNavigation';
import StackFavoritos from '../../navigation/StackNavigation/StackFavoritos';

import AccountScreen from '../../../screen/AccountScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (

    <Tab.Navigator
    initialRouteName="Inicio" // Inicializa en HomeScreen 
    screenOptions={({ route }) => ({
    tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
    tabBarStyle: {
      backgroundColor: '#0D0D0D', // Cambia el color de fondo de la barra superior
    },
  })}
>

      <Tab.Screen
  name="Cuenta"
  component={AccountScreen}
  options={{
    title: 'Mi Cuenta',
    headerShown: false
    
  }}
/>
<Tab.Screen
      name="Inicio"
      component={StackNavigation}
      options={{
        title: 'Inicio',
        headerShown: false,
        tabBarButton: () => (
          //icono de boton en la pantalla de home
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
  let color = '#F0F2EB'; //se determina el color de los botones de la barra superior
  if (routeStatus.focused) {
    color = '#A7CB54'; //se determina el color de cuando el boton esta activo
    }
//se determina los iconos para cada boton
    if(route.name === "Inicio"){
      iconName="home"
    }
    if(route.name === "Cuenta"){
      iconName="user"
    }
    if(route.name === "StackFavoritos"){
      iconName="heart"
    }
return <AwesomeIcon name={iconName} color={color} style={styles.icon}/>

}
