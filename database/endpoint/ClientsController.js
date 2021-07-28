var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const GetAllClientsInDataBase = require('../external/clients/GetAllClientsInDataBase');
const GetClientsByIdInDataBase = require('../external/clients/GetClientsByIdInDataBase');
const DeleteClientsByIdInDataBase = require('../external/clients/DeleteClientsByIdInDataBase');
const UpdateClientsByIdInDataBase = require('../external/clients/UpdateClientsByIdInDataBase');
const InsertClientsInDataBase = require("../external/clients/InsertClientsInDataBase");


router.post('/', function (req, res, err) { new InsertClientsInDataBase().insertClients(req,res,err)});
router.get('/', function(req, res, err) {new GetAllClientsInDataBase().getAllClients(req, res, err)});
router.get('/:id', function(req,res,err) { new GetClientsByIdInDataBase().getClientsById(req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteClientsByIdInDataBase().deleteClientsById(req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateClientsByIdInDataBase().updatClientsById(req, res, err)});


module.exports = router;