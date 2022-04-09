require('express');
const Product = require('../models/product')

const getIndex = (req, res) => {
    res.status(200).send("kaixo");
}

const getProducts = (err, req, res) => {
    if (err) console.log(err);
    console.log("Erorororororo");
    Product.find({},(err,products) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if (!products) return res.status(404).send({message: 'No existen productos'});

        //res.status(200).send({ products });
    })
    //res.status(200).send({products: []})
}

const getProductId = (err, req, res) => {
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if (!product) return res.status(404).send({message: `El producto no existe`});

        res.status(200).send({ product: product });
    })
}

const postProduct = (err, req, res) => {
    //console.log(req.body)
    //res.status(200).send({message: 'El producto se ha recibido'})
    //res.status(404).send({message: 'El producto NO se ha recibido'})

    console.log('POST /api/product')
    console.log(req.body)

    let Product = new Product();
    Product.nombre = req.body.nombre;
    Product.foto = req.body.foto;
    Product.precio = req.body.precio;
    Product.categoria = req.body.categoria;
    Product.descripcion = req.body.descripcion;
    Product.disponible = req.body.disponible;
    Product.fecha = req.body.fecha;

    Product.save((err, productStored) => {
        if (err) res.status(500).send({message: `Error al salvar la BBDD: ${err}`})

        res.status(200).send({product: productStored})
    })
}

const putProductId = (err, req, res) => { //Actualizar datos
    let producId = req.params.productID
    let update = req.body
    Product.findByIdAndUpdate(producId, update, (err, productUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

        res.status(200).send({ product: productUpdated })
    })
}

const deleteProductId = (err, req, res) => {
    let productId = req.params.productID;

    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

        product.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
            res.status(200).send({message: `El producto ${product} ha sido eliminado`})

        })
    })
}

const controllers = {
    getIndex,
    getProducts,
    getProductId,
    postProduct,
    putProductId,
    deleteProductId
};

module.exports = controllers;