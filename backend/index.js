const express = require('express')
const cors = require('cors')
const http = require("http");
const socket = require('socket.io')

const app = express()

const server = http.createServer(app);
const io = socket(server);


const PORT = process.env.PORT || 5000
const connectDb = require('./config/db')

app.use(cors())

connectDb()
app.get('/' , (req,res,next) => res.send('API is working'))
app.use(express.json({extended : false}))



app.use((req, res, next) => {
    req.io = io
    next()
})

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin' , '*')
    res.setHeader('Access-Control-Allow-Methods' , 'GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers' , 'Content-Type,Authorization')
    next();
})

app.use('/api/auth', require('./src/route/api/auth'))
app.use('/api/user', require('./src/route/api/user'))
app.use('/api/chat', require('./src/route/api/chat'))
app.use('/api/post', require('./src/route/api/post'))

server.listen(PORT, () => console.log('Connected on Port', PORT))









