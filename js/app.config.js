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
    // redirect to home from abstract member state
    $urlRouterProvider
      .when('/app/member', '/app/home')

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
        url: '/district/{id}',
        views: {
          'mainContent': {
            templateUrl: 'views/district.html',
            controller: 'DistrictCtrl',
            params: ['id']
          }
        }
      })

      .state('app.member', {
        url: '/member',
        controller: 'MemberCtrl',
        views: {
          'mainContent': {
            abstract: true,
            templateUrl: 'views/member.html',
            //controller: 'MemberCtrl'
          }
        }
      })

      .state('app.member.detail', {
        url: '/{id}',
        views: {
          'infoContent': {
            templateUrl: 'views/member.info.html',
            controller: 'MemberCtrl',
            params: ['id']
          },
          'searchContent': {
            templateUrl: 'views/member.search.html',
            controller: 'MemberSearchCtrl',
            params: ['id']
          },
          'timelineContent': {
            templateUrl: 'views/member.timeline.html',
            controller: 'MemberTimelineCtrl',
            params: ['id']
          },
        }
      });

    $urlRouterProvider.otherwise('/app/home');
  });