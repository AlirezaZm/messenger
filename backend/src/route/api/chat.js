const express = require('express')
const {body,validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const config = require('config')
const User = require('../../models/Users')
const UserAccount = require('../../models/UserAccount') 
const auth = require('../../utils/auth')
const ChatMessages = require('../../models/ChatMessages')
const { createNewMessageType,
      addMessageToInstance, 
      fetchMessage, fetchChatList,
     blockUser} = require('../../utils/chatManager')

const router = express.Router()

router.post('/' ,  auth , async (req,res) => {
     const message = req.body.textMessage
     const receiverId = req.body.userId
     const senderId = req.user.id 
     const chats = await ChatMessages.find()
     chats.map(chat => {
          const userId1 = chat.users.user1.userId.toString()
          const userId2 = chat.users.user2.userId.toString()
          if(  (userId1 === senderId&&userId2 === receiverId ) || (userId2 === senderId&&userId1 === receiverId ) ){
          let   senderUser = []
               if (userId1 === senderId){
                    senderUser = 'user1'
               }
               else(
                    senderUser = 'user2'
               )
               addMessageToInstance(chat,message,senderUser,res)
          }
          else{
               createNewMessageType(senderId,receiverId,res)
          }
     })
})

router.get('/' , auth , async(req,res) => {
     const userId = req.user.id
     const chats = await ChatMessages.find()
     var result = []
     chats.map(chat => {
          const userId1 = chat.users.user1.userId.toString()
          const userId2 = chat.users.user2.userId.toString()
          if (userId1 === userId) {
               var response = fetchChatList(chat, '2')
          }
          else if (userId2 === userId) {
               var response = fetchChatList(chat, '1')
               
          }
          result.push(response)
     })    
     res.send(result) 
})

router.get('/:userId' ,  auth , async (req,res) => {
     const userId = req.params.userId
     const ownerUserId = req.user.id
    fetchMessage(userId , ownerUserId , res)
    
})

router.get('/block/:userId' , auth , async (req,res) => {
     const blockedUserId = req.params.userId
     const blockingUserId = req.user.id
     

     const chats =await  ChatMessages.find()
     chats.map(chat => {
          const users = chat.users
          if (users.user1.userId.toString() === blockingUserId.toString() && users.user2.userId.toString() === blockedUserId){
               blockUser(chat,'user2')
          }
          else if (users.user1.userId.toString() === blockedUserId&& users.user2.userId.toString() === blockingUserId.toString()) {
               blockUser(chat, 'user1')
          }
     })
     
     
})

module.exports = router