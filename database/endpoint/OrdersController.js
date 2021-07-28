var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const GetAllOrdersInDataBase = require('../external/orders/GetAllOrdersInDataBase');
const GetOrdersByIdInDataBase = require('../external/orders/GetOrdersByIdInDataBase');
const DeleteOrdersByIdInDataBase = require('../external/orders/DeleteOrdersByIdInDataBase');
const UpdateOrdersByIdInDataBase = require('../external/orders/UpdateOrdersByIdInDataBase');
const InsertOrdersInDataBase = require("../external/orders/InsertOrdersInDataBase");


router.post('/', function (req, res, err) { new InsertOrdersInDataBase().insertOrders(req,res,err)});
router.get('/', function(req, res, err) {new GetAllOrdersInDataBase().getAllOrders(req, res, err)});
router.get('/:id', function(req,res,err) { new GetOrdersByIdInDataBase().getOrdersById(req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteOrdersByIdInDataBase().deleteOrdersById(req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateOrdersByIdInDataBase().updatOrdersById(req, res, err)});


module.exports = router;