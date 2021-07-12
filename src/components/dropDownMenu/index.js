import React from 'react'
import {View,Text,Dimensions, TouchableWithoutFeedback} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {logout} from '../../redux/actions/auth'
import {useDispatch } from 'react-redux'
import { headerButtonStat } from '../../redux/actions/status'

import styles from './style'

const { width, height } = Dimensions.get('window')

const Menu = (props) => {  
    const dispatch = useDispatch()     
    return (

        <TouchableOpacity onPress={() => dispatch(headerButtonStat(true))} activeOpacity={1}  style={{top:-20,width:width,height:height , backgroundColor:'rgba(0,0,0,0)'}}  >
            <View style={[styles.container]}>
                <TouchableOpacity onPress={() => dispatch(logout())}>
                    <View style={styles.itemContainer}>
                        <Text>Logout</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('gfgfrg')}>
                    <View style={styles.itemContainer}>
                        <Text>Create new contact</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('gfgfrg')}>
                    <View style={styles.itemContainer}>
                        <Text>Create new contact</Text>
                    </View>
                </TouchableOpacity>

            </View>
            </TouchableOpacity>

      
    )
}


const dropDownMenu = ({hide}) => {
    if (hide){
        return null
    }else{       
        return <Menu/>
    }
}


export default dropDownMenu