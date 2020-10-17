import React from 'react';
import { Image, ImageComponent, TabBarIOS, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SearchScreen from '../Search/SearchScreen';
import Icon from "react-native-vector-icons/MaterialIcons";

const Home:React.FC=()=>{

    const Tab = createMaterialTopTabNavigator();

    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color}) => {
                    let iconName:string='home' ;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home': 'home';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'cog' : 'cog';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName}  color={color} />;
                },
            })}
                tabBarOptions={{
                    activeTintColor: 'dodgerblue',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon:({focused,color})=>{
                        return <Image source={require('../../assets/home.png')}></Image>;
                    }
                }} />
                <Tab.Screen name="Search" component={SearchScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Home;