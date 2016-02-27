'use strict';

angular.module('team535.controllers')
  .controller('MemberCtrl', function($scope, $state, $stateParams, MemberService) {
    $scope.controllerName = 'MemberCtrl';
    $scope.id = $stateParams.id;

    $scope.member = MemberService.get({id: $stateParams.id});

    $scope.go = function() {
    	$state.go('app.member.search');
    };
  })

  .controller('MemberSearchCtrl', function($scope, $stateParams) {
  	$scope.test = 'Member search tab controller';
  })

  .controller('MemberTimelineCtrl', function($scope, $stateParams) {
  	$scope.test = 'Member timeline tab controller';
  });