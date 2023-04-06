import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {addMovieMyList, isMovieMyList, removeMovieMyList} from '../../api/myList';

export default function MyList(props) {

    const {id} = props;
    const [inList, setInList] = useState(undefined);
    const [reload, setReaload] = useState(false);
    const Icon = inList ? FontAwesome : FontAwesome5;

    useEffect(() => {
      (async () => {
          try {
              const response = await isMovieMyList(id);
              setInList(response);
          } catch (error) {
              setInList(false);
          }
      })()
    }, [id, reload]);

    const onReload = () => {
        setReaload((prev) => !prev);
    };
    

    const addMyList = async () => {
        try {
            await addMovieMyList(id);
            onReload();
        } catch (error) {
            throw error;
        }
    };

    const revomeMyList = async () => {
        try {
            await removeMovieMyList(id);
            onReload();
        } catch (error) {
            throw error;
        }
    };

    return (
        <Icon 
            name="check-square" 
            color="white" 
            size={30} 
            onPress={inList? revomeMyList : addMyList} 
            style={{marginRight:40}}
        />
    );
}