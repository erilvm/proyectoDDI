import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const DetallePersonaje = (props) => {
  const { navigation, route: { params } } = props;

  return (
    <ImageBackground source={require('../../assets/fondoHome2.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar.Image size={200} source={{ uri: params.image }} style={styles.image} />
          <Text style={styles.name}>{params.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}><Text style={styles.infoValue}>Estado: </Text> {params.status}</Text>
          <Text style={styles.infoText}><Text style={styles.infoValue}>Especie: </Text> {params.species}</Text>
          <Text style={styles.infoText}><Text style={styles.infoValue}>Género: </Text>{params.gender}</Text>
          <Text style={styles.infoText}><Text style={styles.infoValue}>Origen: </Text>{params.origin}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    marginEnd: -26,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',  // Alinea el texto al centro horizontalmente
  },
  infoText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 8,
  },
  infoValue: {
    color: 'green',  // Cambiar el color del texto de información
    fontWeight: 'bold',
    fontSize:20,
  },
});

export default DetallePersonaje;
