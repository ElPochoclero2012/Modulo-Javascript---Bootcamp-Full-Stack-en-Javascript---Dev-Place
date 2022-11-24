const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    type:{
        required: true,
        type: String
    },
    name:{
        required: true,
        type: String
    },
    price:{
        required: true,
        type: Number
    },
    image:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Products', ProductSchema);