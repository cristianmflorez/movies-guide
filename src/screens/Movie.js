import { ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import {getMovieById} from '../api/tmdb';
import Header from '../components/movie/Header';
import Genre from '../components/movie/Genre';
import Ranking from '../components/movie/Ranking';
import Favorite from '../components/movie/Favorite';
import MyList from '../components/movie/MyList';
import Information from '../components/movie/Information';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Movie(props) {
  const {route: {params}, navigation} = props;
  
  const [movie, setMovie] = useState(null);

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => 
      (<>
        <Favorite id={params.id}/>
        <MyList id={params.id}/>
      </>),
      headerLeft: () => (<Icon 
        name="arrow-left" 
        color="white" size={30} 
        style={{marginLeft: 10}}
        onPress={navigation.goBack} 
        />)

    })
  }, [navigation, params])

  useEffect(()=> {
    (async()=>{
      try {
        const response = await getMovieById(params.id);
        setMovie(response);
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params]);

  if(!movie) return null;

  return (
    <ScrollView>
      <Header title={movie.original_title} ranking={movie.vote_average} image={movie.poster_path} year={movie.release_date.slice(0,4)}/>
      <Genre genres={movie.genres} ranking={movie.vote_average}/>
      <Ranking ranking={movie.vote_average}/>
      <Information language={movie.original_language} runtime={movie.runtime} overview={movie.overview} producers={movie.production_companies} />
    </ScrollView>
  )
}