'use strict';

angular.module('team535.controllers')
  .controller('DistrictCtrl', function($scope, $stateParams, DistrictService) {
    $scope.controllerName = 'DistrictCtrl';
    $scope.id = $stateParams.id;

    $scope.district = DistrictService.get({id: $stateParams.id});
  });