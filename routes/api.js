//Dependencies
var express = require('express');
var router = express.Router();

//Model
var Product = require('../models/product');

//Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

//Return router
module.exports = router;