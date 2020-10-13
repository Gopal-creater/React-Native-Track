import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CarouselData} from '../../Constants/Carousel.Constant.Data';
import { CarouselDataType } from '../../Constants/CarouselDataType';

interface SplashType{
    CarouselData : CarouselDataType[]
}

const SplashScreen: React.FC=()=>{

    function renderItem (item:any) {
        return (
            <View style={styles.carouselcontainer}>
                <Text style={styles.title}>{ item.title }</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        );
    }

    return (
        <View>
            <Carousel 
                data={CarouselData}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
    },

    description:{
        fontSize:15,
    },

    carouselcontainer:{
        backgroundColor:'blue',
        width:'100%',
        height:'100%',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

});

export default SplashScreen;