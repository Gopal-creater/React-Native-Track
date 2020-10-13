import React from 'react';
import { Alert, Button,TouchableOpacity, Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SplashScreen from '../../Components/SplashScreen/SplashScreen';
import {useNavigation} from '@react-navigation/native';

//const screenWidth = Math.round(Dimensions.get('window').width);

const WelcomeActivity: React.FC=()=>{

  const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>TRADEANAPP</Text>
        </View>

        <View style={styles.middle}>
          <SplashScreen/>
        </View>

        <View style={styles.buttom}>
          <TouchableOpacity style={styles.btn} ><Text style={styles.btntext}>LogIn</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('SignUpActivity')}}><Text style={styles.btntext}>SignUp</Text></TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </View>

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:50,
    },
  
    top:{
      height:'10%',
      display:"flex",
      justifyContent:'center',
      alignItems:'center',
    },
  
    middle:{
      height:'60%',
      display:"flex",
      justifyContent:'center',
      alignItems:'center',
      resizeMode:"contain",
    },
  
    buttom:{
      height:'30%',
      display:"flex",
      justifyContent:"space-around",
    },
  
    title:{
      fontSize:30,
      color:'dodgerblue',
    },

    btntext:{
      fontSize:15,
      color:'white',
    },
  
    img:{
      resizeMode:"contain",
    },
  
    btn:{
      padding:20,
      alignItems:"center",
      borderRadius:30,
      backgroundColor:'dodgerblue',
    },
  
    skip:{
      color:'dodgerblue',
      textAlign:"right",
    },
  });



export default WelcomeActivity;