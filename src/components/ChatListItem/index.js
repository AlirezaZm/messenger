import React from 'react'

import styles from './style'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const ChatListItem = ({ chat }) => {
    const buttonstatus = useSelector(state => state.status.headerButtonOpen)
    let avatar = 'http://' + chat.imageUrl.slice(2)

    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container}
            disabled={!buttonstatus}
            onPress={() => navigation.navigate('Chat Room', { id: chat.id })}
            >
            <View style={styles.leftContainer}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.name}>{chat.name}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>{chat.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>{moment(chat.createdAt).format('YYYY-MM-DD')}</Text>
        </TouchableOpacity>
    )
}

export default ChatListItem