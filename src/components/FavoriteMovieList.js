import { StyleSheet, FlatList } from 'react-native'
import React from 'react';
import FavoriteCard from './FavoriteCard';

export default function FavoriteMoviesList(props) {

    const {movies} = props;

  return (
    <FlatList 
        data={movies}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(movie) => String(movie.id)}
        renderItem={({item}) => <FavoriteCard movie={item} />}
        contentContainerStyle={styles.FlatListContentContainer}
    />
  )
}
const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5
    }
})