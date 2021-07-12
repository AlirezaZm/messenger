import React from 'react'

import {View,Text,Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'
import { blockUser } from '../../redux/actions/chat'

import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import {blockChecking , reverseBlockChecking} from '../../utils/blockChecking'

 
const ContactDetail = ({user}) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()


    const chat = useSelector(state => state.chat.loaded_chat)
    const crossUser = useSelector(state => state.chat.loaded_chat_cross_user)
    const isBlocked = blockChecking(chat, crossUser)
    const blocking = reverseBlockChecking(chat,crossUser)
    let imageUrl = 'http://' + crossUser?.imageUrl.slice(2)


    return (

            <View style={styles.mainContainer}>
                <View style={styles.headerImageContainer}>
                    <Image source={{uri : imageUrl}} style={styles.headerImage}/>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrowleft' size={28} color='black' style={styles.leftArrow} />
                    </TouchableOpacity>
                </View>

                <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{crossUser.name}</Text>
                    {blocking && <Text style={{ color: 'red', fontWeight: 'bold' }}>You blocked this user already</Text>}
                    {isBlocked && <Text style={{color:'red',fontWeight:'bold'}}>This user blocked you</Text>}
                </View>
                
                <View style={styles.actionBlockContainer}>
                    <Icon1 name='block' color='red' size={21} style={{marginLeft:20,fontWeight:'bold'}} />
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => dispatch(blockUser(crossUser.userId))}>
                        <Text style={styles.actionBlockText}>
                            Block This User
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.actionBlockContainer}>
                    <Icon2 name='report' color='red' size={21} style={{ marginLeft: 20, fontWeight: 'bold' }} />
                    <TouchableOpacity style={{marginLeft:10}}>
                        <Text style={styles.actionBlockText}>
                            Report This User
                        </Text>
                    </TouchableOpacity>
                </View>

             </View>
    )

}

export default ContactDetail