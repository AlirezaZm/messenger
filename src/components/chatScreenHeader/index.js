import React , {useState} from 'react'

import { Text, View, Dimensions,TouchableOpacity,Image } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width;




const chatScreenHeader = ({ avatar, crossUser, menuVisible, setMenuVisible}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='arrowleft' size={24} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact Detail')} style={{flexDirection: 'row' , alignItems:'center' , justifyContent:'flex-start',width:'100%',marginLeft:5}}>
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, width: 60 }} numberOfLines={1}>{crossUser?.name}</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                    <Icon2 name='dots-three-vertical' size={24} color='white' />
                </TouchableOpacity>
                <Icon3 name='call' size={24} color='white' />
                <Icon1 name='video-camera' size={24} color='white' />
            </View>
        </View>
    )

}


   

export default chatScreenHeader