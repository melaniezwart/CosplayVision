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
      .when('/startupproject', {
        templateUrl: 'views/startupproject.html',
        controller: 'userCtrl',
        controllerAs: 'user'
      })
      .when('/admin/userlist', {
        templateUrl: 'views/admin/userlist.html',
        controller: 'adminCtrl',
        controllerAs: 'ctrl'
      })
      .when('/admin/manageproject', {
        templateUrl: 'views/admin/manageproject.html',
        controller: 'adminCtrl',
        controllerAs: 'ctrl'
      })
      .when('/admin/managematerials', {
        templateUrl: 'views/admin/managematerials.html',
        controller: 'adminCtrl',
        controllerAs: 'ctrl'
      })
      .when('/admin/managetasks', {
        templateUrl: 'views/admin/managetasks.html',
        controller: 'adminCtrl',
        controllerAs: 'ctrl'
      })
      .when('/admin/adminpage', {
        templateUrl: 'views/admin/adminmain.html',
        controller: 'adminCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
