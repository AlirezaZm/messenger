import React from 'react'
import {TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


const NewMessageButton = () => {
   const navigation = useNavigation()
    return (

        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Contact')}>
            <Icon name='message-reply-text' size={28} color='white' />
        </TouchableOpacity>
    )
}

export default NewMessageButton