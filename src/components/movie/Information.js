import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Information(props) {

  const {language, runtime, overview, producers} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minutos de duración: </Text>
      <Text style={styles.text}>{runtime}"</Text>
      <Text style={styles.title}>Idioma original: </Text>
      <Text style={styles.text}>{language.toUpperCase()}</Text>
      <Text style={styles.title}>Sinopsis: </Text>
      <Text style={styles.text}>{overview}</Text>
      <Text style={styles.title}>Producida por: </Text>
        
      
      {producers.map((producer, i) =>
          <Text key={i} style={styles.text}>{producer.name}</Text>
      )}
      
    </View>
      
  );
}

const styles = StyleSheet.create({
  container:{
    marginBottom:30,
  },
  title: {
    fontWeight:"bold",
    fontSize: 20,
    paddingBottom: 5,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    marginHorizontal: 30,
    marginBottom: 10,
  }
})