const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    first_name:String,
    last_name:String,
    status:{
        type:Boolean,
        default:true
    },
    phone : String
});

module.exports = mongoose.model('users',UsersSchema);
