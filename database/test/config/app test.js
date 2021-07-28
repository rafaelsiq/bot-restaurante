var express = require('express');
var app = express();
var db = require('./db test');

var SponsorsController = require('../../endpoint/SponsorsController');
var ContractsController = require('../../endpoint/ContractsController');
var AdvertisementsController = require('../../endpoint/AdvertisementsController');
var StreamersController = require('../../endpoint/StreamersController');

app.use('/streamers', StreamersController);
app.use('/sponsors', SponsorsController);
app.use('/ads', AdvertisementsController);
app.use('/contracts', ContractsController);


module.exports = app;