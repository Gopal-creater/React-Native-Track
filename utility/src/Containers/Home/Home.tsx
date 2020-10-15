import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeActivity from './HomeActivity';
import SearchActivity from '../Search/SearchActivity';


const Home:React.FC=()=>{

    const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator initialRouteName='HomeActivity' tabBarOptions={{activeTintColor:'white',style:{backgroundColor:'blue'},showIcon:true}}>
            <Tab.Screen name="HomeActivity"  component={HomeActivity} options={{
                tabBarLabel:({focused, color:white})=>{

                }
            }}/>
            <Tab.Screen name="SearchActivity" component={SearchActivity} />
        </Tab.Navigator>
    );
}

export default Home;