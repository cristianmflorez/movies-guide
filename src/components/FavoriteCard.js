import {StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function MovieCard(props) {

    const {movie} = props;
    const navigation = useNavigation();

    const goToMovie = () => {
        navigation.navigate("Movie", {id:movie.id});
    }

    return (
        <TouchableWithoutFeedback onPress={goToMovie}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                
                        
                        <Image 
                            source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
                            style={styles.image}
                        />
                        <View style={styles.description}>
                            <Text style={styles.name}>{movie.title}</Text>
                            <View style={styles.content}> 
                                {movie.genres.map(genre => 
                                    <View key={genre.id} style={styles.pill}>
                                        <Text style={styles.genre}>{genre.name}</Text>
                                    </View>
                                )}
                            </View>
                            <Text style={styles.year}>{movie.release_date.slice(0,4)}</Text> 
                        </View>
                    
                        
                    
                </View>            
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card:{
        height: 160,
        marginVertical: 10,
    },
    spacing:{
        flexDirection: "row",
        paddingVertical: 10,
        

    },
    description: {
        backgroundColor: "#7A787A",
        width: "70%",
        height: 160,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    name:{
        color: "gold",
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 10,
        marginLeft: 20,
    },
    text: {
        fontSize: 11
    },
    year:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
        position: "absolute",
        right: 20,
        bottom: 10,
    },
    image:{
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        marginLeft:10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    content: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginLeft: 10,
    },
    genre: {
        marginHorizontal: 10,
    },
    pill:{
        paddingHorizontal: 5,
        paddingVertical:5,
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: "white"
    },
})