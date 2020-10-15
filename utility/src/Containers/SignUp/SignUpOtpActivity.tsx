import React, { useEffect } from 'react';
import { postData } from '../../Services/api';
import SignUpOtpActivityView from './SignUpOtpActivity.View';

interface SignUpOtpActivityProps{
    NewUserData : [string,string]
}

const SignUpOtpActivity: React.FC<SignUpOtpActivityProps>=(props)=>{

    useEffect(() => {
            async function SignUpData(){
                await postData('v1/generate-otp/',props.NewUserData)
            }
        }, [])

        console.log(props.NewUserData)

    return(
        <SignUpOtpActivityView/>
    );
}

export default SignUpOtpActivity;