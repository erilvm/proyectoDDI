import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { Avatar, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useAuth} from '../hooks/useAuth';
import { Appbar } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export default function AccountScreen() {
  const { user, logout } = useAuth();
  console.log('Datos del usuario', user)

  return (
    
    <View style={styles.container}>
    <Appbar.Header style={{ backgroundColor: '#5CAD4A' }}>
    <Appbar.Content title="Mi cuenta" alignItems='center' />
    <Appbar.Action icon={() => <FontAwesomeIcon name="sign-out" size={24} />} onPress={logout} />
    </Appbar.Header>


      <View style={styles.header}>

        <View style={{ ...styles.avatar, width: 140, height: 140 }}>
          <Image style={{ flex: 1, width: null, height: null }} source={require('../assets/persona3.png')} resizeMode="cover" />
        </View>

      </View>
          <ScrollView>
          <View style={styles.mainContainer}>
            <Text style={styles.username}>Usuario: {user.username}</Text>
            <Text style={styles.email}>Email: {user.email}</Text>
      </View>
      </ScrollView>

      <View style={styles.footer}>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
        padding: 20,
        borderRadius: 10,
        margin: 20,
      },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center"
  },
  email: {
    fontSize: 16,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    top: 30,
  },
});
