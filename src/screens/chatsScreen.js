import React from 'react'
import {View,StyleSheet,FlatList,TouchableOpacity,Dimensions,Keyboard} from 'react-native'
import ChatListItem from '../components/ChatListItem'
import ChatRooms from '../data/ChatRooms'
import NewMessageButton from '../components/newMessageButton'
import DropDownMenu from '../components/dropDownMenu';
import { useSelector , useDispatch } from 'react-redux'
import { fetchChatList} from '../redux/actions/chat'
import { headerButtonStat } from '../redux/actions/status'



export default function chatsScreen() {
    const dispatch = useDispatch()
    const buttonstatus = useSelector(state => state.status.headerButtonOpen)
    const chatList = useSelector(state => state.chat.chatList)
    React.useEffect(() => {
        dispatch(fetchChatList() )
    },[])
    return (
            <View style={styles.container}>
                <FlatList
                style={{position:'absolute'}}
                keyExtractor = {(item) => item.id}
                data={chatList}
                renderItem = {({item}) => <ChatListItem chat={item}/>}
                />

            <NewMessageButton />
            <DropDownMenu hide={buttonstatus} />




            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom:10,
        flex:1,
    }
})

