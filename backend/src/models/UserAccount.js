const mongoose = require('mongoose')

const userAccountSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    name : {
        type : String,
        required : false
    },
    avatar : {
        type : String,
        required : false
    },
    status : {
        type : String,
        required: false
    },
})

module.exports = mongoose.model('userAccount' , userAccountSchema)