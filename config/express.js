
/**
 * Module dependencies.
 */

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('config');


/**
 * Expose
 */

module.exports = function (server) {

    // Static files middleware
    server.use(express.static(path.join(__dirname, '../public')));

    // Logging middleware
    server.use(morgan('dev'));

    // bodyParser to build post data
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

};
