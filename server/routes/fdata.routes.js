"use strict";

var router = require('express').Router();
var fdataCtrl = require('../controllers/fdata.controller');

module.exports = function(server) {
    router.get('/list', function (req, res, next) {

        next();

    }, fdataCtrl.listFunctionsData);
    server.use('/fdata', router);
}
