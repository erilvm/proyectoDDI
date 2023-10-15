import { View, Text, FlatList, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import homeImage from '../assets/fondoHome2.jpeg';  // Importa tu imagen de fondo


export default function HomeScreen(props) {
  const { characters } = props;
  console.log('Characters', characters);

  return (
    <ImageBackground source={homeImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(characters) => String(characters.id)}
          renderItem={({ item }) => <Card characters={item} />}
        />
      </SafeAreaView>

    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',  // Ajusta la imagen al tamaño del contenedor
  }
});
