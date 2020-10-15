import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Switch, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import RoundCheckbox from 'rn-round-checkbox';

const SignUpActivity:React.FC=()=>{

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Name</Text>
                <TextInput placeholder="Name" style={styles.input}/>
            </View>
            <View>
                <Text>Email address/Phone No.</Text>
                <TextInput placeholder="eg : gopalgautam05@gmail.com or 9742480602" style={styles.input}/>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} textContentType={'password'}/>
            </View>
            <View>
                <Text>Confirm Password</Text>
                <TextInput placeholder="Repeat Password" style={styles.input}/>
            </View>
            <View style={styles.roundcheckbox}>
                <RoundCheckbox  size={20}/>
                <Text>I agree with all terms and conditions</Text>
            </View>
            <View style={styles.serviceprovider}>
                <Text>Register with me as service provide.</Text>
                <Switch trackColor={{ false: 'gray', true: 'teal' }} thumbColor="white"/>
            </View>
            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Sign Up</Text></TouchableOpacity>
            <Text style={styles.baseText}>
                Already have an account ?
                <Text style={styles.innerText} onPress={()=>navigation.navigate('LoginActivity')}> Log In</Text>
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around",
        padding:40,
    },

    baseText: {
        fontWeight: 'bold'
      },

      innerText: {
        color: 'dodgerblue'
      },

      btn:{
        padding:20,
        backgroundColor:'dodgerblue',
        borderRadius:40,
      },

      btntext:{
          textAlign:"center",
          fontSize:20,
          color:'white',
      },

      serviceprovider:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",    
      },

      input:{
        borderBottomColor:'gray',
        borderBottomWidth:1,
      },

      aggrement:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
      },

      roundcheckbox:{
        display:"flex",
        flexDirection:'row',
        justifyContent:"space-between",
      },
});

export default SignUpActivity;