import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import getColorByRanking from '../../utils/getColorByRanking';

export default function Genre(props) {
    
    const {genres, ranking} = props;

  return (
    <View style={styles.content}> 
      {genres.map(genre => 
        <View key={genre.id} style={{...styles.pill, backgroundColor: getColorByRanking(ranking)}}>
            <Text style={styles.genre}>{genre.name}</Text>
        </View>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
    },
    pill:{
        paddingHorizontal: 10,
        paddingVertical:10,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    genre:{
        color: "white"
    }
})