import React from 'react';
import { ClippingRectangle, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { CarouselDataType } from '../../Constants/CarouselDataType';

interface SplashType{
    Item : CarouselDataType[]
}

const SplashScreen: React.FC<SplashType>=(props)=>{

    function renderItem ({item}:{item:CarouselDataType}) {
        return (
            <View style={styles.carouselcontainer}>
                <View style={styles.imgcontainer}>
                    <Image style={styles.image} source={item.img} />
                </View>
                <View style={styles.txtcontainer}>
                    <Text style={styles.title}>{ item.title }</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        );
    }

    return (
        <View>
            <Carousel 
                data={props.Item}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:15,
        color:'dodgerblue',
        textAlign:"center",
    },

    description:{
        fontSize:13,
        textAlign:"center",
        color:'dodgerblue',
    },

    carouselcontainer:{        
        width:'100%',
        height:'100%',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:'100%',
        height:'100%',
    },
    imgcontainer:{
        height:'70%',
        width:'100%',
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    },
    txtcontainer:{
        height:'10%',
        width:'100%',
    }

});

export default SplashScreen;