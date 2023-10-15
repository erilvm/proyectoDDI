import { View, Text, ImageBackground } from 'react-native'
import React ,{useState, useCallback}from 'react'
import { getFavoriteApi } from '../../api/favorito'
import { styles } from '../../components/navigation/TabNavigation/TabNavigation.styles'
import { Button } from 'react-native-paper'
import axios from 'axios'
import HomeScreen from '../HomeScreen';
import { ENV } from '../../utils/constants'
import { useFocusEffect } from '@react-navigation/native'


export default function FavoritesScreen() {

 const [personajes, setPersonajes] = useState([])
 const [characters, setCharacters] = useState([]);

 useFocusEffect(
  useCallback
  (() => {
     (async () => {
      const favoriteResponse = await getFavoriteApi();
      setPersonajes(favoriteResponse);

      try {
        const response = await axios.get(ENV.API_URL_RM);
        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [])
 )

  return (
    
<HomeScreen characters={characters.filter((character) => personajes.includes(character.id))} />
 
     )
}