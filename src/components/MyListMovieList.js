import { StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import MyListCard from './MyListCard';

export default function MyListMovieList(props) {

    const {movies} = props;

  return (
    <FlatList 
        data={movies}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(movie) => String(movie.id)}
        renderItem={({item}) => <MyListCard movie={item} />}
        contentContainerStyle={styles.FlatListContentContainer}
    />
  )
}
const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5
    }
})