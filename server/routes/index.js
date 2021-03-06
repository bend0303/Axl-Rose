/**
 * Author [bend]
 */

'use strict';

var fs = require('fs'),
    path = require('path');


//load all routes in dir
module.exports = function (server) {
  fs
      .readdirSync(__dirname)
      .filter(function (file) {
        return (file.indexOf(".") !== -1) && (file !== "index.js");
      })
      .forEach(function (file) {
        require(path.join(__dirname, file))(server);
      });
};