import axios from 'axios'

export const sendingChat = (textMessage,userId) => async dispatch => {
    const body = JSON.stringify({textMessage,userId})
    const config = {
        headers: {
            'Content-type' : 'application/json'
        }
    }
    const res = await axios.post('http://localhost:5000/api/chat',body,config)
    dispatch({
        type: 'CHATADDSUCCESS',
        payload : res.data
    })
}



export const fetchChat = (userId) => async dispatch => {
    try{
        const res = await axios.get('http://localhost:5000/api/chat' + `/${userId}` )
        let crossUser = null
        if (res.data){
            const user1 = res.data.users.user1.userId
            const user2 = res.data.users.user2.userId
            if (user1 === userId){
                crossUser = res.data.users.user1
                crossUser.userCode = 'user1'
                crossUser.directUserCode = 'user2'
            }
            else if(user2 === userId){
                crossUser  = res.data.users.user2
                crossUser.userCode = 'user2'
                crossUser.directUserCode = 'user1'
            }    
        }
       
        dispatch({
            type: 'CHATLOADEDSUCCESS',
            payload : {data:res.data , crossUser : crossUser }
        })
    }
    catch(err){
        console.error(err)
    }
    
}

export const fetchChatList = (userId) => async dispatch => {
    const res = await axios.get('http://localhost:5000/api/chat')
    
    dispatch({
        type : 'CHATLISTLOADEDSUCESS',
        payload : res.data
    })
}

export const blockUser = (userId) => async dispatch => {
    const res = await axios.get(`http://localhost:5000/api/chat/block/${userId}`)
}