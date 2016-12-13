'use strict';

/**
 * @ngdoc overview
 * @name condeAngularApp
 * @description
 * # condeAngularApp
 *
 * Main module of the application.
 */
angular
  .module('condeAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
