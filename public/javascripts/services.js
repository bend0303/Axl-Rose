'use strict';

/**
 * Main page controllers - where task is displayed
 *  @author Bend
 */

angular.module('rolloutTask').factory('dataService', function($http) {
    var service = {
        fetchData: function() {
            return $http.get('/fdata/list');
        }
    };
    return service;
});
