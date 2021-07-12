import React from 'react' 

import styles from './style'
import {Text,View,Image,TouchableOpacity} from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const userListItem = ({user}) => {
    const navigation = useNavigation()
    const imageUri ='http://' +  user.avatar.slice(2)
    return (
        <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Chat Room' , {id:user.user})}>
            <View style={styles.leftContainer}>
                <Image source={{uri: imageUri }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                </View>
            </View>
            {/* <Text style={styles.time}>{moment(user.lastMessage.createdAt).format('YYYY-MM-DD')}</Text> */}
        </TouchableOpacity>
    )
}

export default userListItem