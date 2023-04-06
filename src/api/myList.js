import AsyncStorage from "@react-native-async-storage/async-storage";
import {MYLIST_STORAGE} from '../utils/constants';

export async function getMoviesMyListApi(){
    try {
        const response = await AsyncStorage.getItem(MYLIST_STORAGE);
        const responseJSON = JSON.parse(response);
        return responseJSON ? responseJSON : [];
    } catch (error) {
        throw error;
    }
}

export async function addMovieMyList(id){
    try {
        const myList = await getMoviesMyListApi();
        myList.push(id);
        await AsyncStorage.setItem(MYLIST_STORAGE, JSON.stringify(myList));
    } catch (error) {
        throw error;
    }
}

export async function removeMovieMyList(id){
    try {
        const myList = await getMoviesMyListApi();
        const newMyList = myList.filter(f => f!=id);
        await AsyncStorage.setItem(MYLIST_STORAGE, JSON.stringify(newMyList));
    } catch (error) {
        throw error;
    }
}

export async function isMovieMyList(id){
    try {
        const response = await getMoviesMyListApi();
        return response.includes(id);
    } catch (error) {
        throw error;
    }
}