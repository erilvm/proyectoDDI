import { View, Text, ImageBackground } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { getFavoriteApi } from '../../api/favorito';
import { styles } from '../../components/navigation/TabNavigation/TabNavigation.styles';
import { Button } from 'react-native-paper';
import axios from 'axios';
import HomeScreen from '../HomeScreen';
import { ENV } from '../../utils/constants';
import { useFocusEffect } from '@react-navigation/native';

export default function FavoritesScreen() {
  const [personajes, setPersonajes] = useState([]);
  const [characters, setCharacters] = useState([]);

  const fetchAllCharacters = async () => {
    const allCharactersData = [];
  
    let page = 1;
    let hasMoreData = true;
  
    while (hasMoreData) {
      const url = `${ENV.API_URL_RM}?page=${page}`;
      console.log('Requesting URL:', url);
  
      try {
        const response = await axios.get(url);
        if (response.data.results) {
          allCharactersData.push(...response.data.results);
         
          if (response.data.info.next) {
            page++;
          } else {
            hasMoreData = false;
          }
        } else {
          hasMoreData = false;
        }
      } catch (error) {
        console.error('Error requesting URL:', url);
        console.error(error);
        break; 
      }
    }
  
    return allCharactersData;
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const favoriteResponse = await getFavoriteApi();
        setPersonajes(favoriteResponse);
        
        const allCharactersData = await fetchAllCharacters();
        setCharacters(allCharactersData);
      })();
    }, [])
  );

  return (
    <HomeScreen
      characters={characters.filter((character) => personajes.includes(character.id))}
    />
  );
}
