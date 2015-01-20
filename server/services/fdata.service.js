"use strict";
var redis = require("redis"),
    config = require('config'),
    request = require('request');

module.exports.listFunctionsData = function (callback) {
    var rclient = redis.createClient();
    rclient.get(config.data.cachename, function (err, data) {
        if (!err) {
            callback(false, JSON.parse(data));
        } else callback('Data is not loaded');
    });
};