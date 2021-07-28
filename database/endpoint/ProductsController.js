var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const GetAllProductsInDataBase = require('../external/products/GetAllProductsInDataBase');
const GetProductsByIdInDataBase = require('../external/products/GetProductsByIdInDataBase');
const DeleteProductsByIdInDataBase = require('../external/products/DeleteProductsByIdInDataBase');
const UpdateProductsByIdInDataBase = require('../external/products/UpdateProductsByIdInDataBase');
const InsertProductsInDataBase = require("../external/products/InsertProductsInDataBase");


router.post('/', function (req, res, err) { new InsertProductsInDataBase().insertProducts(req,res,err)});
router.get('/', function(req, res, err) {new GetAllProductsInDataBase().getAllProducts(req, res, err)});
router.get('/:id', function(req,res,err) { new GetProductsByIdInDataBase().getProductsById(req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteProductsByIdInDataBase().deleteProductsById(req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateProductsByIdInDataBase().updatProductsById(req, res, err)});


module.exports = router;