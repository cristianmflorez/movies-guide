import { SafeAreaView, Text } from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getMoviesMyListApi} from '../api/myList';
import {getArrayMovies} from '../api/tmdb';
import MyListMovieList from '../components/MyListMovieList';

export default function MyList() {
  const [movies, setMovies] = useState([]);
  let moviesList = [];

  useFocusEffect(
    useCallback(()=>{
      (async() => {
        const MyList = await getMoviesMyListApi();
        moviesList = await getArrayMovies(MyList);
        setMovies(moviesList)
      })()
    }, [])
  );

  return (
    <SafeAreaView>
      <MyListMovieList movies={movies}/>
    </SafeAreaView>
  )
}