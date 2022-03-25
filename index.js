//'use strict'

const express = require('express')  //importamos librerias
const bodyParser = require('body-parser')

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
    console.log(req.body)
    res.status(200).send({message: 'El producto se ha recibido'})
    //res.status(404).send({message: 'El producto NO se ha recibido'})
})

app.put('/api/product/:productID', (req, res) => {  //Actualizar datos

})

app.delete('/api/product/:productID,', (req, res) => {

})

app.listen(3000, () => {
    //console.log('API REST corriendo en http://localhost:3000')
    console.log(`API REST corriendo en http://localhost:${port}`)
})
