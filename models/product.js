const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    picture: String,
    price: Number,
    category: { type: String, 
                enum: ['comuters', 'phones', 'accesories']},
    description: String
})

module.exports = mongoose.model('Product', ProductSchema)