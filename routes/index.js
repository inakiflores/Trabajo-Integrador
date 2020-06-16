var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')

/* GET home page. */
router.get('/', userController.home)
router.get('/agregarProducto',userController.productAdd)
router.post('/agregarProducto',userController.store)
router.get('/product/:id/',userController.product)


module.exports = router;
