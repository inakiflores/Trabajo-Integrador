var express = require('express');
var router = express.Router();
let userController= require('../controller/userController')

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', userController.home);

module.exports = router;
