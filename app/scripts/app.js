'use strict';

/**
 * @ngdoc overview
 * @name cosZoneApp
 * @description
 * # cosZoneApp
 *
 * Main module of the application.
 */
angular
  .module('cosZoneApp', [
    'ngMaterial',
    'ngAnimate',
    'ui.bootstrap',
/*    'ngCookies',*/
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'userCtrl',
        controllerAs: 'user'
      })
      .when('/register', {
        templateUrl: 'views/register.html'/*,
        controller: 'AboutCtrl',
        controllerAs: 'about'*/
      })
      .when('/login', {
        templateUrl: 'views/login.html'/*,
        controller: 'AboutCtrl',
        controllerAs: 'about'*/
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
         controller: 'userCtrl',
         controllerAs: 'user'
      })
      .when('/projectdetails/1', {
        templateUrl: 'views/projectdetails.html',
        controller: 'userCtrl',
        controllerAs: 'user'
      })
      .when('/newproject', {
        templateUrl: 'views/newproject.html',
        controller: 'userCtrl',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
