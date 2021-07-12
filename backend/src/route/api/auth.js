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
    const userAccount = await UserAccount.findOne({user: userId})
    if (userAccount){
        res.send(userAccount)
    }
    else{
        res.status(400).json({'errors'  :   [ { 'msg' : 'the user account with that information does not exist'   } ]  })
    }
})



router.post(
    '/register',
   [
    body('email').isEmail().withMessage('please enter a valid email'),
    body('password').not().isEmpty().withMessage('password is required'),
    body('email').not().isEmpty().withMessage('email  is required'),
    body('password').isLength({min:6}).withMessage('please enter a pasword with 6 or more character')
   ] 
    , 
    async(req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()})
        }
        const {email,password}  = req.body
        try{
            let user = await User.findOne({email})
            if (user){
                return res.status(400).json({errors:[{msg:'User already exist'}]})
            }
            const avatar = gravatar.url(email , {
                s:'200',
                r: 'pg',
                d: 'mm'
            })
            console.log('erwerwerwerwerwer',avatar)
            user = new User({email,password})
            userAccount = new UserAccount({avatar:avatar , name:email , user : user.id})

            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password,salt)
            console.log(user)
            await user.save()
            await userAccount.save()
            const payload = {
                user:{
                    id : user.id
                }
            }
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                    expiresIn : 360000
                },
                (err,token) => {
                    if (err) throw err;
                    console.log('Token is:' , token)
                    return res.json({token})
                }
            )
        }
        catch(err){
            console.log(err)
            res.status(500).send('server error')
        }
    }
)


router.post('/login'
, [
    body('email').isEmail().withMessage('please enter a valid email'),
    body('password').not().isEmpty().withMessage('password is required'),
    body('email').not().isEmpty().withMessage('email  is required'),
    body('password').isLength({min:6}).withMessage('please enter a pasword with 6 or more character')
   ]  
, async (req,res) => {
    const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()})
        }
        const {email , password} = req.body
        try{
            let user = await User.findOne({email})
            if (!user){
                return res.status(400).json({errors: [{msg : 'There is no user with this email'}]})
            }
            console.log(password , user)
            const isMatch = await bcrypt.compare(password , user.password)
            if (!isMatch){
                return res.status(400).json({ errors : [ { msg : 'Email and password does not match' } ]})
            }

            const payload = {
                user : {
                    id : user.id
                }
            }
            jwt.sign(
                payload , 
                config.get('jwtSecret'),
                {
                    expiresIn : 360000
                },
                (err,token) => {
                    if (err) throw err;
                    console.log('Token is:' , token)
                    return res.json({token})
                }
            )

        }
        catch(err){
            console.error(err.message)
            res.status(500).send('server error')
        }

})



module.exports = router