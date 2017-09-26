console.log('sourced client.js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function( $routeProvider) {
    $routeProvider.when('/cohen', {
        templateUrl: 'views/cohen.html',
        controller: 'TarikController',
        controllerAs: 'tc'
    }).when('/lynch', {
        templateUrl: 'views/lynch.html',
        controller: 'LynchController',
        controllerAs: 'lc'
    }).when('/ingram', {
        templateUrl: 'views/ingram.html',
        controller: 'IngramController',
        controllerAs: 'ic'
    }).when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'hc'
    }).otherwise({ redirectTo: '/home'});
});
