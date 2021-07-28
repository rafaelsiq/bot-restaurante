var express = require('express');
var app = express();
var db = require('./db');

var ProductsController = require('../database/endpoint/ProductsController');
var OrdersController = require('../database/endpoint/OrdersController');
var AddressController = require('../database/endpoint/AddressController');
var ClientsController = require('../database/endpoint/ClientsController');

app.use('/products', ProductsController);
app.use('/orders', OrdersController);
app.use('/address', AddressController);
app.use('/clients', ClientsController);



module.exports = app;