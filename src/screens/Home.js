import { SafeAreaView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { getMovies, getMoviesDetailsByUrlApi} from '../api/tmdb';
import MoviesList from '../components/MoviesList';

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() =>{
    (async()=>{
      await loadMovies();
    })()
  }, []);

  const loadMovies = async() => {
    try {
      if(page<500){
        const response = await getMovies(page);
        setMovies([...movies, ...response.results]);//[...movies]
        setPage(parseInt(page)+1);
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <MoviesList movies={movies} loadMovies={loadMovies}/>
    </SafeAreaView>
  )
}