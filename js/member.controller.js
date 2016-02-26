'use strict';

angular.module('team535.controllers')
  .controller('MemberCtrl', function($scope, $stateParams, MemberService) {
    $scope.controllerName = 'MemberCtrl';
    $scope.id = $stateParams.id;

    $scope.member = MemberService.get({id: $stateParams.id});
  });