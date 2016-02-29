'use strict';

angular.module('team535.controllers')
  .controller('DistrictCtrl', function($scope, $state, $stateParams, DistrictService) {
    $scope.controllerName = 'DistrictCtrl';
    $scope.id = $stateParams.id;

    $scope.district = DistrictService.getSavedDistrict({id: $stateParams.id});

    $scope.selectMember = function(id) {
      $state.go('app.member.detail', {id: id});
    };
  })

  .controller('DistrictSearchCtrl', function($scope, $mdDialog, DistrictService) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.addDistrict = function(district_id) {
      $mdDialog.hide(district_id);
    };

    $scope.streetAddress = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
    $scope.search = function() {
      console.log($scope.streetAddress, $scope.city, $scope.state, $scope.zip);
      if ($scope.streetAddress == '' && $scope.city == '' 
          && $scope.state == '' && $scope.zip == '')
        return;

      $scope.districts = DistrictService.query();
    };
  });