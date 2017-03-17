require('angular-ui-router');
let app = angular.module('app.Route', ['ui.router']);
app
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  	 $urlRouterProvider.otherwise("/");
  	 $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'public/templates/home.html',
        controller: 'homeCtrl'
      })
      // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

module.exports = 'app.Route';