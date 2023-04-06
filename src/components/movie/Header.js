import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';
import React from 'react';
import getColorByRanking from '../../utils/getColorByRanking';

export default function Header(props) {

    const {title, ranking, image, year} = props;
    const bgColor = getColorByRanking(ranking);

    const bgStyle = [{backgroundColor: bgColor, ...styles.bg}];

  return (
    <View>
        <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
          <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.year}>{year}</Text>
          </View>
          <View style={styles.contentImg}>
            <Image 
                source={{uri: `https://image.tmdb.org/t/p/original/${image}` }}
                style={styles.image}
            />
          </View>
      </SafeAreaView>
    </View>
  )
}

const styles= StyleSheet.create({
    bg:{
        width:"100%",
        height: 500,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomStartRadius: 300,
        transform: [{scaleX: 2}]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40
    },
    title:{
        color: "white",
        fontWeight: "bold",
        fontSize: 27,
        marginTop:40,
    },
    year:{
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        top: 10
    },
    contentImg:{
        alignItems: "center",
        top: 30,
    },
    image:{
        width: "90%",
        height: 600,
        resizeMode: "contain"
    }
})