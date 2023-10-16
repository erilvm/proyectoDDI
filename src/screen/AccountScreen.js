import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const fondoArriba = require('../assets/fondoPerfil.jpg');
const fondoAbajo = require('../assets/info.jpeg');
const personaImage = require('../assets/persona3.png');

export default function AccountScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <ImageBackground source={fondoArriba} style={styles.backgroundImage}>
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={personaImage} resizeMode="cover" />
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomHalf}>
        <ImageBackground source={fondoAbajo} style={styles.bottomBackground}>
          <View style={styles.userInfoContainer}>
            <ScrollView>
              <View style={styles.userInfo}>
                <Text style={styles.username}>Usuario: {user.username}</Text>
                <Text style={styles.email}>Email: {user.email}</Text>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
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
    borderRadius: 60,
    overflow: 'hidden',
    margin: 87  // Ajuste para subir el avatar más arriba
  },
  avatar: {
    flex: 1,
    width: null,
    height: null,
  },
  userInfoContainer: {
    flex: 1,
    //backgroundColor: 'rgba(255, 255, 255, 0.7)', //fondo transparente
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  userInfo: {
    padding: 20,
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
