const express = require('express')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const config = require('config')
const User = require('../../models/Users')
const UserAccount = require('../../models/UserAccount')
const auth = require('../../utils/auth')
const Post = require('../../models/Post')
const { createNewMessageType,
    addMessageToInstance,
    fetchMessage, fetchChatList,
    blockUser } = require('../../utils/chatManager')

const router = express.Router()

router.get('/', auth, async (req, res) => {
    const posts = await Post.find().populate('postOwnerInfo')
    console.log(posts)
    if (!posts){
        return res.status(400).json({'errors' : {'msg' : 'There is no post to show'}})
    }
    else{
    return res.send(posts)

    }
})


router.post('/' , auth , async(req,res) => {
    const userId = req.user.id

    const user = await User.findOne({_id : userId})
    const {text} = req.body
    if (!user){
        return res.status(500).json({'errors' : {'msg' : 'There is no user with this id'}})
    }
    else{
        const  userAccount = await UserAccount.findOne({user:userId})
        const post = await new Post
        ({ content: text, ownerUser: user, postOwnerInfo:userAccount})
        await post.save()
        return res.send(post)
    }
   
})

router.get('/' , auth , async(req,res) => {
    const posts = Post.find()
    res.send(post)
})

module.exports = router