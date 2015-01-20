"use strict";

var redis = require("redis"),
    request = require('request'),
    dataUtil = require('../server/utils/data.util'),
    config = require('config'),
    _ = require('lodash');

module.exports = function (callback) {
    var client = redis.createClient();
    var retval = [];

    request({
        url: config.data.url1,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            if (body.length && body.length > 0) {
                retval = dataUtil.buildDataObject(body);
                client.set(config.data.cachename, JSON.stringify(retval));
                console.log('Data has been loaded to cache');
                return callback(false);
            }
        } else callback('error has been occurred while loading the data - please restart');
    })


}