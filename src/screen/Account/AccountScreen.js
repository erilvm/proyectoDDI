import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import Menu from '../../components/Menu/Menu';
import accountMenu from '../../components/Menu/menu.data';

const fondoArriba = require('../../assets/fondoPerfil.jpg');
const fondoAbajo = require('../../assets/info.jpeg');
const personaImage = require('../../assets/persona3.png');

export default function AccountScreen({navigation}) {
  const { user } = useAuth();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <ImageBackground source={fondoAbajo} style={styles.backgroundImage}>
          <View style={styles.header}>
            
              
              <View style={styles.userInfo}>
              <Text style={styles.welcomeText}>Bienvenido</Text>
                <Text style={styles.username}> {
                  user.firstname && user.lastname
                  ? `${user.firstname} ${user.lastname}`
                  : user.email}
                  </Text>
              </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomHalf}>
        <View style={styles.backgroundImage1}>
          <View style={styles.userInfoContainer}>
            <ScrollView>
            <Menu data={accountMenu} navigateToScreen={navigateToScreen} />

            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topHalf: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomHalf: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  backgroundImage1: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 128, 0, 0.5)', // Color verde con opacidad al 50%

  },
  bottomBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    marginTop: -50,
  },
  avatarContainer: {
    width: 170, //tamaño del avatar
    height: 170,
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10  // Ajuste para subir el avatar más arriba
  },
  avatar: {
    flex: 1,
    width: null,
    height: null,
  },
  userInfoContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  userInfo: {
    padding: 120, //
    width: 800,
    height: 300,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center', // Centra el texto
    color: 'white',
  },
  emailText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center', // Centra el texto
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white'
  },
  email: {
    fontSize: 16,
    color: 'white'
  },
});