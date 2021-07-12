import React from 'react'
import {Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import ChatRoomScreen from '../screens/chatRoomScreen'
import contactDetailScreen from '../screens/contactDetailScreen'

const chatRoomStack = createStackNavigator()



const AA = () => {
    return <Text>dgfsdf</Text>
}

const chatRoomStackNavigator = () => {
    return (
        <chatRoomStack.Navigator>
            <chatRoomStack.Screen name='Chat Room' component={ChatRoomScreen} />
        </chatRoomStack.Navigator>
    )
}

export default chatRoomStackNavigator