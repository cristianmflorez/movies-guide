import {StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import getColorByRanking from '../utils/getColorByRanking';

export default function MyListCard(props) {

    const {movie} = props;
    const navigation = useNavigation();

    const bgColor = getColorByRanking(movie.vote_average);

    const bgStyles = {
        backgroundColor: bgColor,
        ...styles.bgStyles
    };

    const goToMovie = () => {
        navigation.navigate("Movie", {id:movie.id})
    };

    return (
        <TouchableWithoutFeedback onPress={goToMovie}>
        <View style={styles.card}>
            <View style={styles.spacing}>
            
                    <Image 
                        source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
                        style={styles.image}
                    />
                    <View style={bgStyles}>
                        <Text style={styles.name}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.release_date.slice(0,4)}</Text> 
                        <Text style={styles.text} numberOfLines={13}>{movie.overview}</Text>
                        
                    </View>
                
            </View>            
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card:{
        height: 300,
        marginVertical:10,
    },
    spacing:{
        flexDirection: "row",
        paddingVertical: 10,
    },
    bgStyles:{
        height: 300,
        width:"60%",
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
    }, 
    name:{
        color: "white",
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 10,
        marginHorizontal: 15,
    },
    text: {
        fontSize: 13,
        textAlign: "justify",
        overflow: "hidden",
        marginHorizontal: 15,
    },
    year:{
        color: "white",
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: "flex-end",
        marginBottom: 10,
        marginRight: 10
    },
    image:{
        width: "40%",
        height: 300,
        resizeMode: "contain",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    }
})