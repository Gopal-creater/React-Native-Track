import { useNavigation } from '@react-navigation/native';
import React,{useRef} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';


const LoginActivity:React.FC=()=>{

    const ForgotPasswordModalizeRef = useRef<any>(null);
    const VerifyModalizeRef = useRef<any>(null);
    const ResetPasswordModalizeRef = useRef<any>(null);

    const navigation = useNavigation();

    const onOpenForgotPassword = () => {
        ForgotPasswordModalizeRef.current?.open();
      };

    const onOpenVerify = () => {
        ForgotPasswordModalizeRef.current?.close();
        VerifyModalizeRef.current?.open();
      };

    const onPasswordReset = () =>{
      VerifyModalizeRef.current?.close();
      ResetPasswordModalizeRef.current?.open();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>

            </View>
            <View style={styles.buttom}>
                <View>
                    <Text>Email address/Phone No.</Text>
                    <TextInput placeholder="eg : gopalgautam05@gmail.com or 9742480602" style={styles.input} />
                </View>

                <View>
                    <Text>Password</Text>
                    <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} textContentType={'password'} />
                </View>

                <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Log In</Text></TouchableOpacity>

                <TouchableOpacity onPress={onOpenForgotPassword} ><Text style={styles.signuptext}>Forgot Password</Text></TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('SignUpActivity')}><Text style={styles.signuptext}>Not a member yet ? Sign Up</Text></TouchableOpacity>
                
            </View>

            <Modalize ref={ForgotPasswordModalizeRef}  snapPoint={400}>
                <View style={styles.modal}>
                    <Text style={styles.baseText}>Forgot Password ?</Text>
                    <Text>Email Address/Phone No</Text>
                    <TextInput placeholder="eg : gopalgautam05@gmail.com or 9742480602" style={styles.input} ></TextInput>
                    <TouchableOpacity style={styles.btn} onPress={onOpenVerify}><Text style={styles.btntext}>Send Otp</Text></TouchableOpacity>
                </View>
            </Modalize>

            <Modalize ref={VerifyModalizeRef}  snapPoint={400}>
                <View style={styles.modal}>
                    <Text style={styles.baseText}>Verify Email/Phone No.</Text>
                    <Text>Otp</Text>
                    <TextInput placeholder="Enter Otp you received"  style={styles.input} ></TextInput>
                    <TouchableOpacity onPress={()=>onPasswordReset} style={styles.btn}><Text style={styles.btntext}>Verify Otp</Text></TouchableOpacity>
                </View>
            </Modalize>

            <Modalize ref={ResetPasswordModalizeRef}  snapPoint={400}>
                <View style={styles.modal}>

                    <Text style={styles.baseText}>Reset password.</Text>

                    <View>
                      <Text>Password</Text>
                      <TextInput placeholder="Enter new password"  style={styles.input} ></TextInput>
                    </View>

                    <View>
                      <Text>Confirm Password</Text>
                      <TextInput placeholder="Retype password"  style={styles.input} ></TextInput>
                    </View>

                    <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Reset Password</Text></TouchableOpacity>
                </View>
            </Modalize>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
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

      top:{
        height:'40%',
      },

      buttom:{
        height:'60%',
        display:"flex",
        justifyContent:"space-around",
      },

      signuptext:{
        color:'dodgerblue',

      },

      modal:{
        flex:1,
        height:350,
        justifyContent:"space-around",
        padding:40,          
      }
});

export default LoginActivity;