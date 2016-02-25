'use strict';

angular.module('team535.controllers')
  .controller('DistrictCtrl', function($scope, $stateParams) {
    $scope.controllerName = 'DistrictCtrl';
    $scope.id = $stateParams.id;
  });