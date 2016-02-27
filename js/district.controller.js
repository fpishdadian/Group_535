'use strict';

angular.module('team535.controllers')
  .controller('DistrictCtrl', function($scope, $state, $stateParams, DistrictService) {
    $scope.controllerName = 'DistrictCtrl';
    $scope.id = $stateParams.id;

    $scope.district = DistrictService.get({id: $stateParams.id});

    $scope.selectMember = function(id) {
    	$state.go('app.member.detail', {id: id});
    };
  });