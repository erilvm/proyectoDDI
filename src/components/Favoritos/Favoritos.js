import React, { useEffect, useState }from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { addFavoriteApi, isFavoriteApi, removeFavoriteApi } from '../../api/favorito';

export default function Favoritos(props) {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  //Estado para cambiar el de icono de favorito a no favorito
  const [reloadFavorite, setReloadFavorite] = useState(false)
  console.log(isFavorite);

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(id)
      if (response) setIsFavorite(true)
      else setIsFavorite(false)
    })()
  }, [id, reloadFavorite]) //El useEffect se ejecuta cuando reloadFavorite cambia de estado

  //Cada vez que se cambie el estado de reloadFavorite se ejecuta la funcion
  const onReloadFavorite = () => {
    setReloadFavorite((prev) => !prev)
  }
  const addFavoritos = async () => {
    try {
      await addFavoriteApi(id)
      onReloadFavorite()
    }
    catch (error) {
      console.log(error);
    }
  }

  const removeFavoritos = async () => {
    try {
      await removeFavoriteApi(id)
      onReloadFavorite()
    }
    catch (error) {
      console.log(error);
    }
  }

  //Definir el color del icono basado en el valor de isFavoritos
  const iconColor = isFavorite ? "red" : "white";

  return (
    <View style={styles.container}>
      <IconButton
        icon="heart"
        iconColor={iconColor}
        size={40}
        onPress={isFavorite ? removeFavoritos : addFavoritos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10, // Puedes ajustar 
    
  },
});
