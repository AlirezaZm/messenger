import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {Text,TouchableOpacity,View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Entypo'

import Colors from '../constants/Colors'
import startScreen from '../screens/Authentication/startScreen';
import MainTabNavigator from './MainTabNavigator'
import ChatRoomScreen from '../screens/chatRoomScreen'
import ContactScreen from '../screens/contactScreen'
import ContactDetailScreen from '../screens/contactDetailScreen'

import DropDownMenu from '../components/dropDownMenu';

import {loadFromStorage} from '../redux/actions/auth'
import {headerButtonStat} from '../redux/actions/status'

import {useDispatch , useSelector} from 'react-redux'

const mainFlowStack = createStackNavigator()
const authFlowStack = createStackNavigator()


const AuthenticationFlow = () => {
    return(
        <authFlowStack.Navigator screenOptions={{ 
           headerShown: false
        }}>
            <authFlowStack.Screen name='start' component={startScreen} options={rootScreenOptions} />
        </authFlowStack.Navigator>
    )
}

const MainFlow = () => {
   
    
    return (
            <mainFlowStack.Navigator screenOptions={{ 
                headerStyle:{
                    backgroundColor: Colors.light.tint,
                    height:70,
                    elevation:0
                },
                headerTintColor: Colors.light.background,
                headerTitleStyle:{
                    fontWeight: 'bold'
                },
            }}>
                <mainFlowStack.Screen name='root' component={MainTabNavigator} options={rootScreenOptions()} />
                <mainFlowStack.Screen options={{
                    headerShown:false
                }} name='Chat Room' component={ChatRoomScreen} />
                <mainFlowStack.Screen name='Contact' component={ContactScreen} />
                <mainFlowStack.Screen name='Contact Detail' component={ContactDetailScreen} options={{headerShown:false}} />

            </mainFlowStack.Navigator>   
    )
}

const rootNavigator = () => {
    const dispatch = useDispatch()
    dispatch(loadFromStorage())
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return (
        <NavigationContainer>
            {! isAuthenticated 
            ?(<AuthenticationFlow /> )
            :(<MainFlow />)
            }
        </NavigationContainer>
        
    )
}

const rootScreenOptions = () => {
    const getButtonColor = (indicator) => {
        if (indicator){
            return 'white'
        }
        else{
            return 'grey'
        }
    }
    const dispatch = useDispatch()
    const headerButtonOpen = useSelector(state => state.status.headerButtonOpen)
    return (
        {
            headerTitle:'WhatsApp',
            headerRight: () => {
                return(
                    <View style={{flexDirection:'row' , justifyContent:'space-between',width:70,marginRight:10,overflow:'visible'}}>
                        <DropDownMenu hide={true}/>

                        <Icon name='search'  color='white' size={24} />
                        <TouchableOpacity onPress={() => dispatch(headerButtonStat(!headerButtonOpen)) }>
                            <Icon1 name='dots-three-vertical' color='white' size={24}
                             style={{color : getButtonColor(headerButtonOpen) }}/>
                        </TouchableOpacity>

                    </View>
                )
        
            }
        }
    )
    
}

export default rootNavigator