import {StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import getColorByRanking from '../utils/getColorByRanking';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieCard(props) {

    const {movie} = props;
    const navigation = useNavigation();

    const rankingColor = getColorByRanking(movie.vote_average);

    const rankingStyles = {
        color: rankingColor,
        ...styles.ranking
    };

    const goToMovie = () => {
        navigation.navigate("Movie", {id:movie.id});
    }

    return (
    <TouchableWithoutFeedback onPress={goToMovie}>
        <View style={styles.card}>
            <Text style={rankingStyles}>{movie.vote_average}  <Icon name='star' style={rankingStyles}/></Text>
            <Image 
                source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
                style={styles.image}
            />
            <View style={styles.spacing}>
                <View >
                    <Text style={styles.name}>{movie.title}</Text>  
                </View> 
            </View>            
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        height: 400,
        width: "80%",
        marginHorizontal: "auto",
    },
    spacing:{
        padding: 5
    },
    name:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 5,
        marginHorizontal: 15
    },
    ranking: {
        alignSelf: "flex-end",
        marginHorizontal: 15,
        marginTop:5,
        fontSize: 15,
        paddingHorizontal: 10
    },
    image:{
        marginTop: 5,
        width: "80%",
        height: 300,
        resizeMode: "contain",
        alignSelf:"center"
    }
})