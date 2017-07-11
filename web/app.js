/**
 * Created by yangshibin on 2017/5/31.
 */

var app = angular.module('SpencerApp', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'HomeController',
        controllerAs: 'home',
        templateUrl: 'Templates/home.html'
    }).when('/login', {
        controller: 'LoginController',
        controllerAs: 'login',
        templateUrl: 'Templates/login.html'
    }).otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
})