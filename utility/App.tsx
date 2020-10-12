import React from 'react';
import {  SafeAreaView,FlatList, Button,StyleSheet, ScrollView,  View,Image,  Text, StatusBar, Alert, Dimensions,} from 'react-native';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const screenWidth = Math.round(Dimensions.get('window').width);

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize:20,fontWeight:"bold",color:'dodgerblue'}}>TRADEANAPP</Text>
        <Image source={require('./src/assets/carousel1.png')} style={{resizeMode:"cover",width:screenWidth}}></Image>
        <Text style={{fontSize:18,color:'dodgerblue'}}>Find services near you</Text>
        <Text numberOfLines={2}>Search for local and international services and </Text>
        <Text>browse different category.</Text>
        <Button title='Login' onPress={()=>Alert.alert('Logged in')}/>
        <Button title='Sign Up' onPress={()=>Alert.alert('Signed in')}/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 16,
    justifyContent:'center',
  },
});

export default App;
