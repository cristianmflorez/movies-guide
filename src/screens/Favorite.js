import { SafeAreaView } from 'react-native';
import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getMoviesFavoritesApi} from '../api/favorite';
import {getArrayMovies} from '../api/tmdb';
import FavoriteMoviesList from '../components/FavoriteMovieList';

export default function Favorite() {

  const [movies, setMovies] = useState([]);
  let moviesList = [];

  useFocusEffect(
    useCallback(()=>{
      (async() => {
        const favorites = await getMoviesFavoritesApi();
        moviesList = await getArrayMovies(favorites);
        setMovies(moviesList)
      })()
    }, [])
  );

  

  return (
    <SafeAreaView>
      <FavoriteMoviesList movies={movies}/>
    </SafeAreaView>
  )
}