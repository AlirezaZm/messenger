import React from 'react'
import {View,StyleSheet,FlatList} from 'react-native'
import ChatListItem from '../components/ChatListItem'
import UserListItem from '../components/userListItem/userListItem'
import NewMessageButton from '../components/newMessageButton'
import {loadUserList} from '../redux/actions/user'
import { useDispatch , useSelector } from 'react-redux'

const chatScreeen = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(loadUserList())
    },[])
    const userList = useSelector(state => state.user.userList)

    return (
        <View style={styles.container}>
            <FlatList
            keyExtractor = {(item) => item._id}
            data={userList}
            renderItem = {({item}) =>{
               return <UserListItem user={item} />
            } }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom:10
    }
})


export default chatScreeen