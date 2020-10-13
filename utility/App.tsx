import 'react-native-gesture-handler';
import React from 'react';
import WelcomeActivity from './src/Containers/Welcome/WelcomeActivity';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpActivity from './src/Containers/SignUp/SignUpActivity';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeActivity">
          <Stack.Screen name="WelcomeActivity" component={WelcomeActivity} />
          <Stack.Screen name="SignUpActivity" component={SignUpActivity} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;