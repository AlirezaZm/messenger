import React,{useLayoutEffect, useState} from 'react'
import {Text,View,StyleSheet,
    FlatList,ImageBackground,TextInput,KeyboardAvoidingView,Dimensions} from 'react-native'
import ChatMessage from '../components/ChatMessage'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/Ionicons'
import ChatScreenHeader from '../components/chatScreenHeader'
import Colors from '../constants/Colors'
import {blockChecking} from '../utils/blockChecking'

import {useDispatch,useSelector} from 'react-redux'
import {sendingChat,fetchChat} from '../redux/actions/chat'
import DropDownMenu from '../components/chatScreenHeader/dropDownMenu'

const {width,height} = Dimensions.get('window')

const ChatRoomScreen = ({route}) => {
    const userId = route.params.id

    const dispatch = useDispatch()
    const [textMessage, setTextMessage] = useState('')
    const [isEmptyInput, setIsEmptyInput] = useState(false)
    const chat = useSelector(state => state.chat.loaded_chat)
    const crossUser = useSelector(state => state.chat.loaded_chat_cross_user)
    
    const isBlocked = blockChecking(chat,crossUser)

    React.useEffect(() => {
        dispatch(fetchChat(userId))
        const timer = setInterval(() => dispatch(fetchChat(userId)),5000)
        return () => { 
            console.log('i am unmounted')
           return clearInterval(timer)
        }
    },[])
   
    const ChangeFunc = (value) => {
        setTextMessage(value)
        if (value.length === 0){
            setIsEmptyInput(false)
        }
        else{
            setIsEmptyInput(true)
        }
    }
    const sendTextMessage = () => {
        dispatch(sendingChat(textMessage,userId))
        setTextMessage('')
    }
    const navigation = useNavigation()
    const messages = chat?.messages
    const [menuVisible, setMenuVisible] = useState(false)

    let avatar = 'http://' + crossUser?.imageUrl.slice(2)
    return(
        <ImageBackground source={require('../assets/images/BG.png')} style={{height:'100%',width:'100%'}}>
            <ChatScreenHeader avatar={avatar} crossUser={crossUser} menuVisible={menuVisible} setMenuVisible={setMenuVisible}  />
            <DropDownMenu userId={userId} menuVisible={menuVisible} setMenuVisible={setMenuVisible} />

                <FlatList
                    data = {messages}
                    style={{
                        marginBottom:10,
                        marginTop: 10,
                        zIndex:1
                    }}
                    keyExtractor = {(item) => item._id}
                    inverted 
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}  
                    renderItem={({item}) => {
                    return(
                        <ChatMessage message={item} />
                    )
            }} />
                <KeyboardAvoidingView behavior='height' keyboardVerticalOffse={5}>
                <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
                    {!isBlocked 
                    ?
                        (
                            <>
                            <TextInput style={styles.textInput} placeholder='Type a message...' defaultValue={textMessage} onChangeText={ChangeFunc}/>
                            <View style={styles.microphoneIconContainer}>
                                {isEmptyInput === false
                                    ?(<Icon1 name='microphone' size={24} color='white' /> )
                                    :(<Icon3 name='send' size={24} color='white' onPress={sendTextMessage}/>)
                                }
                            </View>
                            </>
                        ) 
                    :
                        (
                            <View style={styles.blockedMessageContainer}>
                                <Text style={{color:'red' , fontWeight:'bold'}}>This user has been blocked you. any illegal behaviour may be
                                            caused to deactive your account permanently
                                </Text>
                            </View>          
                        )
                    }
                </View>
                </KeyboardAvoidingView>
             </ImageBackground>

             
        
      
    )
}


const styles = StyleSheet.create({
 
    
    textInput: {
        width:'84%',
        height: 50,
        backgroundColor: 'white',
        marginBottom:5,
        marginLeft:5,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    microphoneIconContainer:{
        marginRight: 5,
        width:50,
        height:50,
        backgroundColor: Colors.light.tint,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50

    },
    blockedMessageContainer:{
        height: 80,
        width: width - width/12,
        backgroundColor: 'white',
        marginLeft:width/24,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
})
export default ChatRoomScreen