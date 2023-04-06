import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffff" translucent = {true}/>
      <Navigation/>
    </NavigationContainer>
  );
}

