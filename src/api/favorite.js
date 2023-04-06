import AsyncStorage from "@react-native-async-storage/async-storage";
import {FAVORITE_STORAGE} from '../utils/constants';

export async function getMoviesFavoritesApi(){
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        const responseJSON = JSON.parse(response);
        return responseJSON ? responseJSON : [];
    } catch (error) {
        throw error;
    }
}

export async function addMovieFavorite(id){
    try {
        const favorites = await getMoviesFavoritesApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
}

export async function removeMovieFavorite(id){
    try {
        const favorites = await getMoviesFavoritesApi();
        const newFavorites = favorites.filter(f => f!=id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
        throw error;
    }
}

export async function isMovieFavoriteApi(id){
    try {
        const response = await getMoviesFavoritesApi();
        return response.includes(id);
    } catch (error) {
        throw error;
    }
}