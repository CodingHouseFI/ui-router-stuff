'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', template: '<h1>HOME!</h1>' })
    .state('about', { url: '/about/:myParam', template: '<h1>ABOUT!</h1>', controller: 'aboutCtrl' })
    .state('swapi', { url: '/swapi', templateUrl: '/html/swapi.html', controller: 'swapiCtrl' })

  $urlRouterProvider.otherwise('/');
});
