import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';
import MyListNavigation from './MyListNavigation';
import MovieNavigation from './MovieNavigation';
import FavoriteNavigation from './FavoriteNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pelis">
      <Tab.Screen name='Favorites' component={FavoriteNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (<Icon name='heart' color={color} size={size}/>),
        headerShown: false
      }}/>
      <Tab.Screen name='Pelis' component={MovieNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: () => renderMovieIcon(),
        headerShown: false
      }} />
      <Tab.Screen name='MyList' component={MyListNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (<Icon name='check' color={color} size={size}/>),
        headerShown: false
      }}/>
    </Tab.Navigator>
  )
}

function renderMovieIcon(){
  return(
    <Image 
      source={require('../assets/movie-icon.jpg')}
      style={{width:75, height:75, top:-15, borderColor: "black", borderWidth: 2, borderRadius: 50}}
    />
  )
}