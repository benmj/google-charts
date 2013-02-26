'use strict';


// Declare app level module which depends on filters, and services
angular.module('googleCharts', ['googleCharts.filters', 'googleCharts.services', 'googleCharts.directives', 'googleCharts.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/index', {templateUrl: 'partials/index.html', controller: 'indexController'});
        $routeProvider.when('/table', {templateUrl: 'partials/table.html', controller: 'tableController'});
        $routeProvider.otherwise({redirectTo: '/table'});
    }
]);
