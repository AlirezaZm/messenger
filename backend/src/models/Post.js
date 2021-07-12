const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    ownerUser : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    CreatedAt : {
        type : Date,
        default : Date.now,
        required : true
    },
    updatedAt : {
        type : Date,
        required : false
    },
    postOwnerInfo : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'userAccount'
    }
})

module.exports = mongoose.model('post', postSchema)