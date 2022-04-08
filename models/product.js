'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true  //espazioak kentzen ditu aurrean zein atzean
    },
    foto: {
        type: String,
        required: false,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    categoria: {
        type: String,
        enum: ['computers', 'phones', 'accesories'],
        required: false,
    },
    descripcion: {
        type: String,
        required: false,
        trim: false
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true
    },
    fecha: {
        type: Date,
        required: true,
        default: Date()
    }
});


module.exports = mongoose.model('Product', ProductSchema)