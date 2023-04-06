import { StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';

export default function MoviesList(props) {

    const {movies, loadMovies} = props;

    const loadMore = () => {
      loadMovies();
    }

  return (
    <FlatList 
        data={movies}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(movie) => String(movie.id)}
        renderItem={({item}) => <MovieCard movie={item} />}
        contentContainerStyle={styles.FlatListContentContainer}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent= {
          <ActivityIndicator 
            size="large"
            style= {styles.spinner}
          />
        }
    />
  )
}
const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5
    }, 
    spinner : {
      marginTop: 20,
      marginBottom: 60
    }
})