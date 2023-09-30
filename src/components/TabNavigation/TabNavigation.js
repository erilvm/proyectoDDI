import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './TabNavigation.styles'

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../../screen/HomeScreen';
import FavoritesScreen from '../../screen/FavoritesScreen';
import AccountScreen from '../../screen/AccountScreen';
import SettingsScreen from '../../screen/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (

    <Tab.Navigator 
     screenOptions={({ route }) => ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus)
      })}
      >
      <Tab.Screen 
        name="Inicio"
        component={HomeScreen}
        options={{
          title: 'Inicio'
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={AccountScreen}
        options={{
          title: 'Cuenta'
        }}
      />
      <Tab.Screen
        name="Config"
        component={SettingsScreen}
        options={{
          title: 'Configuraciones'
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavoritesScreen}
        options={{
          title: 'Favoritos'
        }}
      />
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = '';
  let color = '#6E6E6E';
  if (routeStatus.focused) {
    color = '#BE81F7';
    }

    if(route.name === "Inicio"){
      iconName="home"
    }
    if(route.name === "Cuenta"){
      iconName="user"
    }
    if(route.name === "Config"){
      iconName="gear"
    }
    if(route.name === "Fav"){
      iconName="heart"
    }
return <AwesomeIcon name={iconName} color={color} style={styles.icon}/>

}
