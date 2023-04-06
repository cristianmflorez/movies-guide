import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from '../screens/Movie';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function MovieNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{
        tabBarLabel: "",
        headerTitle: "Pelis recomendadas"
      }}/>
      <Stack.Screen name='Movie' component={MovieScreen} options={{
        title: "",
        headerTransparent: true
      }}/>
        
    </Stack.Navigator>
  )
}