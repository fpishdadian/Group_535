'use strict';

angular.module('team535', [
  'ui.router', 
  'team535.controllers', 
  'team535.services', 
  'ngMaterial'
  ])

  .config(function ($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('pink')
      .warnPalette('red')
      .backgroundPalette('grey');

    $mdThemingProvider
      .theme('sidenav')
      .primaryPalette('blue-grey')
      .accentPalette('pink')
      .warnPalette('red')
      .backgroundPalette('blue-grey').dark();
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // abstract state
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'mainContent': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })

      .state('app.district', {
        url: '/district',
        views: {
          'mainContent': {
            templateUrl: 'views/district.html',
            controller: 'DistrictCtrl'
          }
        }
      })

      .state('app.member', {
        url: '/member/{id}',
        views: {
          'mainContent': {
            templateUrl: 'views/member.html',
            controller: 'MemberCtrl',
            params: ['id']
          }
        }
      })

    $urlRouterProvider.otherwise('/app/home');
  });