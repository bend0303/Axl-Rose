'use strict';

/**
 * Main Server Definition
 *  @author Bend
 */

var express = require('express');
var config = require('config');


var server = express();
var port = process.env.PORT || 3000;


// Bootstrap application settings
require('./config/express')(server);

// Load routes
require('./server/routes')(server);

//Load data to cache
require('./config/dataconfig')(function(err) {
    if (!err) {
        server.listen(port);
        console.log('Rollout.io task server started on port ' + port);
    } else console.log(err);
});



