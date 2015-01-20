'use strict';

/**
 * Main App Definition
 *  @author Bend
 */


angular.module('rolloutTask', ['ui.bootstrap', 'ui.router', 'ngPrettyJson']);


angular.module('rolloutTask').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('main', {
            url: '/',
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        });
});






