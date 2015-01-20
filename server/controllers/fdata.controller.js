"use strict";
var fdataService = require('../services/fdata.service')

module.exports.listFunctionsData = function(req, res, next) {

    fdataService.listFunctionsData(function(err, retval) {
        if (err) {
            res.status(500).send(err);
        } else res.send(retval);
    });

};