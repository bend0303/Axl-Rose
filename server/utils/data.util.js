'use strict';

/**
 * Data util library
 *  @author Bend
 */

var _ = require('lodash');

module.exports.buildDataObject = function (data) {
    var retval = [];
    var classes = _.flatten(data);

    for (var c_index in classes) {
        var cls = classes[c_index]; //The class object
        var classname = cls.symbol;
        var functions = cls.children; // Array of function objects as used in the data structure

        for (var f_index in functions) {
            var fnc = functions[f_index]; //the function object
            var splittedFname = fnc.file.split('/'); //split the function to get the file name
            var retelem = {};

            retelem.classname = classname;
            retelem.fncname = fnc.symbol;
            retelem.line = fnc.line;
            retelem.file = _.last(splittedFname);
            retelem.data = fnc;

            retval.push(retelem);
        }
    }

    return retval;

};
