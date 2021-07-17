const { Socket } = require("socket.io")



const chatList =  (io) => {
    io.on('connection' , (socket) => {
        console.log('A user connected to socket' , socket.id)
        console.log(socket.handshake.auth)
        socket.emit('chatList' , {data:'hello'})

        
    })
}

const addChat = (chatMessage ,receiverId ,  io) => {
    for (let [id, socket] of io.of("/").sockets) {
        if (socket.handshake.auth.userId.toString() !== receiverId.toString()){
            console.log('i am in')
            socket.emit('addChat', { data: chatMessage})
        }
    }
}


module.exports = {chatList,addChat}