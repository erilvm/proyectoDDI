import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card({ characters }) {
  const navigation = useNavigation();
  
  const goToPersonaje = () => {
    navigation.navigate('DetallePersonaje', {
      name: characters.name,
      image: characters.image,
      id: characters.id,
      gender: characters.gender,
      species: characters.species,
      status: characters.status,
      origin: characters.origin.name,
      
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={goToPersonaje}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            {characters.image && (
              <Image
              source={{ uri: characters.image }}
              style={[styles.image, styles.imageBorder]}  // Aplica el estilo del borde a la imagen
            />
            )}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{characters.name}</Text>
            <Text style={styles.species}>{characters.especie}</Text>
          </View>
        </View>
        <View style={styles.idContainer}>
          <Text style={styles.idText}>#0{characters.id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',  // Alineación a la izquierda
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 10,
    width: 310,
    height: 170,
    borderWidth: 2,  // Grosor del borde del card
    borderColor: 'white',  // Color del borde del card
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',  // Alineación a la izquierda
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',  // Alineación a la izquierda
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 60,
    overflow: 'hidden',
    marginRight: 20,
    borderRadius: 100,  // Hace que el borde sea circular
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
  species: {
    color: 'lightgray',  // Color para la especie
    fontSize: 16,  // Tamaño de letra para la especie
  },
  idContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'green',
    padding: 5,
    borderRadius: 5,
  },
  idText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageBorder: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 60, // Mismo radio que el contenedor
    overflow: 'hidden',
    borderWidth: 5, // Grosor del borde de la imagen
  },
});

