const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

//router.get('/', controllers.getIndex);
router.route('/')
    .get(controllers.getProducts);

router.route('/product')
    .post(controllers.postProduct);

router.route('/product/:productID')
    .get(controllers.getProductId)
    .put(controllers.putProductId)
    .delete(controllers.deleteProductId);



module.exports = router;