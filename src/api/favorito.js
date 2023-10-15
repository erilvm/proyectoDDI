import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from 'lodash';
import { ENV } from "../utils/constants";

//Crear la funcion que trae los favoritos
export const getFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(ENV.STORAGE.FAVORITE);
        return JSON.parse(response || []);
    } catch (error) {
        console.log(error);
    }
};

//crear la funcion que añade favoritos

export const addFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(favorites));
    } catch (error) {
        console.log(error);
    }
};
//crear la funcion que verifica si un personaje es favorito
export const isFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        return includes(favorites, id);
    } catch (error) {
        console.log(error);
        return false;
    }
}
//crear la funcion que elimina un personaje de la lista de favoritos

export const removeFavoriteApi = async (id) => {
    try {
        //traer
        const favorites = await getFavoriteApi()
        //crear
        const newFavorites = pull(favorites, id)
        await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(newFavorites))
    } catch (error) {
        console.log(error)
    }
}
