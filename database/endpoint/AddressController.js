var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const GetAllAddressInDataBase = require('../external/address/GetAllAddressInDataBase');
const GetAddressByIdInDataBase = require('../external/address/GetAddressByIdInDataBase');
const DeleteAddressByIdInDataBase = require('../external/address/DeleteAddressByIdInDataBase');
const UpdateAddressByIdInDataBase = require('../external/address/UpdateAddressByIdInDataBase');
const InsertAddressInDataBase = require("../external/address/InsertAddressInDataBase");


router.post('/', function (req, res, err) { new InsertAddressInDataBase().insertAddress(req,res,err)});
router.get('/', function(req, res, err) {new GetAllAddressInDataBase().getAllAddress(req, res, err)});
router.get('/:id', function(req,res,err) { new GetAddressByIdInDataBase().getAddressById(req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteAddressByIdInDataBase().deleteAddressById(req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateAddressByIdInDataBase().updatAddressById(req, res, err)});


module.exports = router;