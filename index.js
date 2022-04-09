require('dotenv').config();
const express = require('express');  //importamos librerias
const Product = require('./models/product')
//const product = require('./models/product');//sobra????
//const { default: mongoose } = require('mongoose');
const dbMongo = require('./utils/mongoConfig');
const router = require('./routes/routes.js');
const morgan = require('morgan');

const port = process.env.PORT || 3000
const app = express();

//Middleware akatzak zuzentzeko
//const server = http.createServer(app);
app.use((err, req, res, next) => {
    if(!err) return next();
    console.log("Akatza: " + err);
    res.send("Bidaliko dizut akatsa: " + err);
    server.close();
    setTimeout(() => {
        process.exit(1);
    },3000)
})

morgan.token('host', function (req, res) {
    return req.hostname;
  });
morgan.token('body', function (req, res) {
    return [
        JSON.stringify(req.body)
    ]
});
app.use(morgan(':date[iso] :method :host :status :param[id] - :response-time ms :body'));

morgan.token('param', function (req, res, param) {
/*  return req.params[param];  */
});

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
//app.use(express.static('public')); //public karpetan dagoena kargatzeko

app.use('/', router);
app.listen(port, () => {
    //if (err) return console.log("Se jodió"); 
    console.log(`API REST corriendo en el puerto ${port} a las ${Date()}`);
})



/*
app.get('/', (req, res) => {
    res.send('kaixo world!');
});*/


/*mongoose.connect('mongodb://127.0.0.1:27017/shop', (err, res) => {
    if (err) { 
        console.log(err);
        return console.log("Error al conectar a la BBDD.")
    }
    console.log('Conexión a la BBDD establecida...');
    app.listen(3000, () => {
        //console.log('API REST corriendo en http://localhost:3000')
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})*/



//***********************************************

/*
app.get('/api/product', (req, res) => { //Obtener datos
    Product.find({},(err,products) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if (!products) return res.status(404).send({message: 'No existen productos'});

        res.status(200).send({ products });
    })
    
    
    //res.status(200).send({products: []})
})

app.get('/api/product/:productID', (req, res) => {  //Obtener datos de un producto concreto
    let producId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if (!product) return res.status(404).send({message: `El producto no existe`});

        res.status(200).send({ product: product });
    })
})

app.post('/api/product', (req, res) => { //Enviar datos
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
})

app.put('/api/product/:productID', (req, res) => {  //Actualizar datos
    let producId = req.params.productID
    let update = req.body

    Product.findByIdAndUpdate(producId, update, (err, productUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

        res.status(200).send({ product: productUpdated })

    })
})


app.delete('/api/product/:productID', (req, res) => {
    let productId = req.params.productID;

    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

        product.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
            res.status(200).send({message: `El producto ${product} ha sido eliminado`})

        })
    })
});
*/
 


