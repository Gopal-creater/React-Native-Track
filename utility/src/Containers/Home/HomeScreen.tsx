import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getData } from '../../Services/api';

const HomeScreen:React.FC=()=>{
    const [movie, setmovie] = useState();
    useEffect(() => {
        const response:any = getData('http://www.omdbapi.com/?i=tt3896198&apikey=f4edfb70');
        const data = response;
        setmovie(data);
    }, [])

    function renderItem ({item}:{item:any}) {
        return (
            <View >
                <Text>item.Title</Text>
            </View>
        );
    }

    return(
        <View>
            <FlatList 
            data={movie}
            renderItem={renderItem}
            keyExtractor={(item)=>item.imdbID}
            />
        </View>
    );
}

export default HomeScreen;