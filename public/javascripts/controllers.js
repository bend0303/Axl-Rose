'use strict';

/**
 * Main page controllers - where task is displayed
 *  @author Bend
 */

angular.module('rolloutTask').controller('MainCtrl', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.functions = [];
    $scope.selectedFunctions = [];
    $scope.viewedFunc = {}

    dataService.fetchData().success(function(data) {
        $scope.functions = data;
    }).error(function(err) {
        alert('error communicating the server ' + err);
    });

    $scope.onSelectFunction = function($item, $model, $label) {
        $scope.selectedFunctions.push($item);
        var index = $scope.functions.indexOf($item);
        $scope.functions.splice(index, 1);
        $scope.selectedFunction = '';
    }
    $scope.activeFunc = function($index) {
        $scope.activeFunctionIndex = $index;
        $scope.viewedFunc = $scope.functions[$index];
    }
}]);