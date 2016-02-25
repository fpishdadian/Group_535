'use strict';

angular.module('team535', [
  'ui.router', 
  'team535.controllers', 
  'ngMaterial'
  ])

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
        url: '/district/{districtName}',
        views: {
          'mainContent': {
            templateUrl: 'views/district.html',
            controller: 'DistrictCtrl',
            params: ['districtName']
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