import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from '../screens/Movie';
import MyListScreen from '../screens/MyList';

const Stack = createNativeStackNavigator();

export default function MyListNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Favorite' component={MyListScreen} options={{
        tabBarLabel: "",
        headerTitle: "Pelis por ver"
      }}/>
      <Stack.Screen name='Movie' component={MovieScreen} options={{
        title: "",
        headerTransparent: true
      }}/>
        
    </Stack.Navigator>
  )
}