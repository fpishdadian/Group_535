'use strict';

angular.module('team535.controllers')
  .controller('MemberCtrl', function($scope, $stateParams) {
    $scope.controllerName = 'MemberCtrl';
    $scope.id = $stateParams.id;
  });