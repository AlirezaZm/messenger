const UserAccount = require('../models/UserAccount')
const ChatMessages = require('../models/ChatMessages')
const {addChat } = require('../utils/socket')



 const createNewMessageType = async  (senderId,receiverId,res) => {
    const sender = await UserAccount.findOne({user : senderId})
       const receiver = await UserAccount.findOne({user : receiverId})
       const user1 = {userId : sender.user , name: sender.name , imageUrl:sender.avatar}
       const user2 = {userId : receiver.user , name: receiver.name , imageUrl:receiver.avatar}
       const chat = new ChatMessages({users:{user1,user2} })
       chat.save()
       return res.send(chat)
}


const addMessageToInstance = async(chat,message,senderUser,req,res,receiverId) => {
    const messages = chat.messages
    const chatMessage = {content: message,ownerUserNumber:senderUser}
    messages.push(chatMessage)
    chat.messages = messages
    chat.save()
    res.send(chat)
    addChat(chat, receiverId, req.io)

}


const fetchMessage =async  (userId , ownerUserId,res) => {
    const chats = await ChatMessages.find()
    if ( chats.length !== 0 ){
         chats.map(chat => {
             const userId1 = chat.users.user1.userId.toString()
             const userId2 = chat.users.user2.userId.toString()
             if(  (userId1 === userId &&userId2 === ownerUserId ) || (userId2 === userId&&userId1 === ownerUserId ) ){
                return res.send(chat)
            }
             else{
                 createNewMessageType(ownerUserId, userId, [], res)
             }
            })
    }
    else{
        createNewMessageType(ownerUserId, userId, [], res)
    }

}

const fetchChatList = (chat , usernumber) => {
    let result = {}
    let selectedUser
    if (usernumber === '1'){
        selectedUser = chat.users.user1
    } else if (usernumber === '2'){
        selectedUser = chat.users.user2

    }
    const messages = chat.messages
    const lastMessage  = messages[messages.length-1]
    result = { ...result, 
                imageUrl: selectedUser?.imageUrl, 
                name: selectedUser?.name,
                id: selectedUser?.userId,
                content : lastMessage?.content,
                createdAt : lastMessage?.createdAt
            }

    return result
}

const blockUser = (chat , blockedUser) => {
    if (blockedUser === 'user1'){
        chat.users.user1.blocked = true
    }
    else if (blockedUser === 'user2'){
        chat.users.user2.blocked = true
    }
    chat.save()
}

module.exports = { createNewMessageType, addMessageToInstance, fetchMessage, fetchChatList, blockUser}