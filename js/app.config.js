'use strict';

angular.module('team535', ['ui.router', 'team535.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // abstract state
      .state('app', {
        url: '/',
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'
      })
/*
      .state('app.home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('app.member', {
        url: '/member/{id}',
        templateUrl: 'views/member.html',
        controller: 'MemberCtrl',
        params: ['id']
      })
*/
    $urlRouterProvider.otherwise('/');
  });