const mongoose = require('mongoose')

const chatMessages = mongoose.Schema({
    users: {
        user1 :  {
            userId : {
                type : mongoose.Schema.Types.ObjectId,
                ref: 'user',
                required: true
            },
            name : {
                type: String,
                required : false
            },
            imageUrl : {
                type: String,
                required : true
            },
            blocked:{
                type: Boolean,
                required: true,
                default : false
            },
        },
        user2 :  {
            userId : {
                type : mongoose.Schema.Types.ObjectId,
                ref: 'user',
                required: true
            },
            name : {
                type: String,
                required : false
            },
            imageUrl : {
                type: String,
                required : true
            },
            
            blocked: {
                type: Boolean,
                required: true,
                default: false
            },
        },
    },
    messages : [{
        content : {
            type : String,
        },
        ownerUserNumber : {
            type : String,
            required : false
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required : true
        },
        updatedAt: {
            type: Date,
            default : null,
            required : false
        }
    }]
})

module.exports = mongoose.model('chatMessages' , chatMessages)