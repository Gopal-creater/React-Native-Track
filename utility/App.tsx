import 'react-native-gesture-handler';
import React from 'react';
import WelcomeActivity from './src/Containers/Welcome/WelcomeActivity';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpActivity from './src/Containers/SignUp/SignUpActivity';
import SignUpOtpActivity from './src/Containers/SignUp/SignUpOtpActivity';
import SignUpOtpActivityView from './src/Containers/SignUp/SignUpOtpActivity.View';
import LoginActivity from './src/Containers/Login/LoginActivity';
import Home from './src/Containers/Home/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeActivity">
          <Stack.Screen name="WelcomeActivity" component={WelcomeActivity} />
          <Stack.Screen name="SignUpActivity" component={SignUpActivity} />
          <Stack.Screen name="LoginActivity" component={LoginActivity}/>
          {/* <Stack.Screen name="SignUpOtpActivity" component={SignUpOtpActivity} /> */}
          <Stack.Screen name="SignUpOtpActivityView" component={SignUpOtpActivityView} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;