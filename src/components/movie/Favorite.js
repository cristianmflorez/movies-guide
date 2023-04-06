import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {addMovieFavorite, isMovieFavoriteApi, removeMovieFavorite} from '../../api/favorite';

export default function Favorite(props) {

    const {id} = props;
    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reload, setReaload] = useState(false);
    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
      (async () => {
          try {
              const response = await isMovieFavoriteApi(id);
              setIsFavorite(response);
          } catch (error) {
              setIsFavorite(false);
          }
      })()
    }, [id, reload]);

    const onReload = () => {
        setReaload((prev) => !prev);
    };
    

    const addFavorite = async () => {
        try {
            await addMovieFavorite(id);
            onReload();
        } catch (error) {
            throw error;
        }
    };

    const revomeFavorite = async () => {
        try {
            await removeMovieFavorite(id);
            onReload();
        } catch (error) {
            throw error;
        }
    };

    return (
        <Icon 
            name="heart" 
            color="white" 
            size={30} 
            onPress={isFavorite? revomeFavorite : addFavorite} 
            style={{marginRight:40}}
        />
    )
}