import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text , View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


import Colors from '../constants/Colors'

import ChatsScreen from '../screens/chatsScreen';
import PostScreen from '../screens/postScreen'

const Tab = createMaterialTopTabNavigator();



const AA = () => {
    return(
        <Text>BB component</Text>
    )
}
const BB = () => {
    return(
        <Text>BB component</Text>
    )
}

const MainTabNavigator = () => {
    return (
        <Tab.Navigator 
        initialRouteName= "Chats"
        tabBarOptions=
        {{
            activeTintColor: Colors.light.background,
            style:{
                zIndex:10,
                
                backgroundColor: Colors.light.tint,
            },
            indicatorStyle:{
                backgroundColor: Colors.light.background,
                height: 4
            },
            labelStyle:{
                fontWeight: 'bold'
            },
            showIcon: true
        }}> 
            <Tab.Screen name='Camera' component={AA}
            options={{
                tabBarIcon: () => <Icon name='camera' color='white' size={24} /> ,
                tabBarLabel: () => null,
            }} />
            <Tab.Screen name='Chats' component={ChatsScreen} />
            <Tab.Screen name='Posts' component={PostScreen} />
            <Tab.Screen name='Calls' component={BB} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator