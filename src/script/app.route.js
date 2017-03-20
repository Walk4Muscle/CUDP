require('angular-ui-router');
let app = angular.module('app.Route', ['ui.router']);
app
  .config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'public/templates/home.html',
        controller: 'homeCtrl'
      })
      .state('subscription', {
        url: '/subscription',
        template: '<ui-view/>',
        abstract: true
      })
      .state('subscription.list', {
        url: '/',
        templateUrl: 'public/templates/subscription.html',
        controller: 'subscriptionCtrl'
      })
      .state('subscription.edit', {
        url: '/edit',
        templateUrl: 'public/templates/subscription_detail.html',
        controller: 'subscriptionCtrl'
      })
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
module.exports = 'app.Route';