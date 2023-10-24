import { View, Text, FlatList, SafeAreaView, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import homeImage from '../assets/fondoHome2.jpeg';
import { addFavoriteApi } from '../api/favorito'; // Importa addFavoriteApi

export default function HomeScreen(props) {
  const { characters, loadMoreData, nextUrl, onReloadFavorite } = props;

  const addFavoritos = async (id) => {
    try {
      await addFavoriteApi(id);
      onReloadFavorite(); // Llama a la función de sincronización de favoritos
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = () => {
    if (nextUrl) {
      loadMoreData();
    }
  }

  return (
    <ImageBackground source={homeImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(characters) => String(characters.id)}
          renderItem={({ item }) => (
            <Card characters={item} addFavoritos={addFavoritos} />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            nextUrl && <ActivityIndicator style={styles.spiner} size="large" color="#79B543" />
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90, // Ajusta el espacio superior donde comienzan las tarjetas
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
  },
  spiner: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
