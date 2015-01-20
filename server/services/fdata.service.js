"use strict";
var fdataHandler = require('../handlers/fdata.handler'),
    config = require('config'),
    request = require('request');

module.exports.listFunctionsData = function (callback) {
    request({
        url: config.data.url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            if (typeof body == Array && body.length > 0) {
                fdataHandler.buildDataObject(body, callback);
            } else return callback("Data source is wrong or empty");
        } else callback(error)
    })
}