import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import getColorByRanking from '../../utils/getColorByRanking';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Ranking(props) {

    const {ranking} = props;

    const barStyles = (ranking) => {
        return {
            backgroundColor: getColorByRanking(ranking),
            width: `${(ranking*10)}%`
        }
    };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Ranking</Text>
      <View style={styles.block}>
          <View style={styles.blockBar}>
            <Text style={styles.blockTitle}>{ranking} <Icon name='star' style={styles.ranking}/></Text>
          </View>
          <View style={styles.bgBar}>
            <View style={[styles.bar, barStyles(ranking)]}></View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 30,
        marginTop: 40
    },
    title: {
        fontWeight:"bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    block: {
        flexDirection: "row",
        paddingVertical: 10
    },
    blockBar:{
        width: "30%",
    },
    blockTitle: {
        fontSize: 15,
        marginRight: 60
    },
    bgBar: {
        backgroundColor: "#dedede",
        width: "70%",
        height: 10,
        borderRadius: 20,
        overflow: "hidden",
        marginVertical: 5
    },
    bar: {
        height: 8,
        borderRadius: 20
    }
});