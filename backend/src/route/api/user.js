const express = require('express')
const {body,validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const config = require('config')
const User = require('../../models/Users')
const UserAccount = require('../../models/UserAccount') 
const auth = require('../../utils/auth')

const router = express.Router()

router.get('/' ,  auth , async (req,res) => {
    const userId = req.user.id
    const user = await UserAccount.find({user: {$ne: userId}})
    res.send(user)
})
 // This API not used yet
router.get('/current_user' , auth , async (req,res) => {
    const userId = req.user.id
    const user = User.findOne({_id : userId})
    if(!user){
        res.status(401).json({'errors' : {'msg' : 'There is no user'} })
    }
    else{
        res.send(user)
    }
})


module.exports = router