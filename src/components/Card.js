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
    <TouchableOpacity style={styles.cardContainer} onPress={goToPersonaje}>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              {characters.image && (
                <Image
                  source={{ uri: characters.image }}
                  style={[styles.image, styles.imageBorder]}
                />
              )}
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{characters.name}</Text>
              <Text style={styles.species}>{characters.species}</Text>
            </View>
          </View>
          <View style={styles.idContainer}>
            <Text style={styles.idText}>#0{characters.id}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center', // Alinea en el centro vertical
    margin: 10,
  },
  card: {
    borderRadius: 12,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start', // Alineación a la izquierda
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 310,
    height: 110,
    borderWidth: 2,
    borderColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Alineación a la izquierda
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 60,
    overflow: 'hidden',
    marginRight: 20,
    borderRadius: 100, // Hace que el borde sea circular
  },
  textContainer: {
    flex: 1,
    height: 130, // Contenedor de texto con un alto
  },
  name: {
    color: 'white',
    fontSize: 20,
    marginTop: 45, // Alineación del texto
  },
  species: {
    color: 'lightgray',
    fontSize: 16,
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
