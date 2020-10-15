import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SignUpOtpActivity from './SignUpOtpActivity';

const SignUpOtpActivityView:React.FC=()=>{

    const [Name, setName] = useState('')
    const [Contact,setContact] = useState('')

    const OnNameChangeHandler=(e:any)=> {
        setName(e.target.value)
    }

    const OnContactChangeHandler=(e:any)=>{
        setContact(e.target.value)
    }

    const OnOtpBtnPressHandler=()=>{
        console.log([Name,Contact]),
        <SignUpOtpActivity NewUserData={[Name,Contact]}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Name</Text>
                <TextInput placeholder="Name"   onChange={OnNameChangeHandler} style={styles.input}/>
            </View>

            <View>
                <Text>Email address/Phone No.</Text>
                <TextInput placeholder="eg : gopalgautam05@gmail.com or 9742480602" onChange={OnContactChangeHandler} style={styles.input}/>
            </View>

            <TouchableOpacity style={styles.btn}><Text style={styles.btntext} onPress={OnOtpBtnPressHandler}>Get OTP</Text></TouchableOpacity>

            <View>
                <Text>Verify email or Phone</Text>
                <TextInput placeholder="Enter OTP received" style={styles.input} />
            </View>

            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Verify OTP</Text></TouchableOpacity>

            <Text style={styles.baseText}>
                change email or phone no.?
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
        fontWeight: 'bold',
        color:'dodgerblue',
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

      input:{
        borderBottomColor:'gray',
        borderBottomWidth:1,
      },
});

export default SignUpOtpActivityView;