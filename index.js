//'use strict'

const express = require('express')  //importamos librerias
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/product')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

/*app.get('/hola/:name', (req,res) => {
    //res.send({ message: 'Hola Mundo!'})
    res.send({ message: `Hola ${req.params.name}!`})
})*/ 

app.get('/api/product', (req, res) => { //Obtener datos
    res.status(200).send({products: []})
})

app.get('/api/product/:productID', (req, res) => {  //Obtener datos de un producto concreto

})

app.post('/api/product', (req, res) => { //Enviar datos
    //console.log(req.body)
    //res.status(200).send({message: 'El producto se ha recibido'})
    //res.status(404).send({message: 'El producto NO se ha recibido'})

    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored) => {
        if (err) res.status(500).send({message: `Error al salvar la BBDD: ${err}`})

        res.status(200).send({product: productStored})
    })
})

app.put('/api/product/:productID', (req, res) => {  //Actualizar datos

})

app.delete('/api/product/:productID,', (req, res) => {

})

mongoose.connect('mongodb://0.0.0.0:27017/shop', (err, res) => {
    if (err) {
        console.log(err);
        return console.log("Error al conectar a la BBDD.")
    }
    console.log('Conexión a la BBDD establecida...');
    app.listen(3000, () => {
        //console.log('API REST corriendo en http://localhost:3000')
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})


