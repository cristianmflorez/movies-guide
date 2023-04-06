import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from '../screens/Movie';
import FavoriteScreen from '../screens/Favorite';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Favorite' component={FavoriteScreen} options={{
        tabBarLabel: "",
        headerTitle: "Mis favoritas"
      }}/>
      <Stack.Screen name='Movie' component={MovieScreen} options={{
        title: "",
        headerTransparent: true
      }}/>
        
    </Stack.Navigator>
  )
}