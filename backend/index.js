const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 5000
const connectDb = require('./config/db')


app.use(cors())

connectDb()
app.get('/' , (req,res,next) => res.send('API is working'))
app.use(express.json({extended : false}))

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin' , '*')
    res.setHeader('Access-Control-Allow-Methods' , 'GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers' , 'Content-Type,Authorization')
    next();
})

app.use('/api/auth' , require('./src/route/api/auth'))
app.use('/api/user' , require('./src/route/api/user'))
app.use('/api/chat' , require('./src/route/api/chat'))
app.use('/api/post' , require('./src/route/api/post'))

app.listen(PORT , () => console.log('Connected on Port',PORT))