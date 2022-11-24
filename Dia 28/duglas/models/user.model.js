const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nickname:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    phonenumber:{
        required: true,
        type: Number
    },
    image:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('users', UserSchema);