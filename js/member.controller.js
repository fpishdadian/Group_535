'use strict';

angular.module('team535.controllers')
  .controller('MemberCtrl', function($scope, $stateParams, MemberService) {
    $scope.controllerName = 'MemberCtrl';
    $scope.id = $stateParams.id;

    $scope.member = MemberService.get({id: $stateParams.id});
  })

  .controller('MemberOverviewCtrl', function($scope, MemberService) {
  	$scope.controllerName = 'MemberOverviewCtrl';

  	$scope.member = MemberService.currentMember;
  })

  .controller('MemberSearchCtrl', function($scope, MemberService) {
  	$scope.controllerName = 'MemberSearchCtrl';

  	$scope.member = MemberService.currentMember;
  })

  .controller('MemberTimelineCtrl', function($scope, MemberService) {
  	$scope.controllerName = 'MemberTimelineCtrl';

  	$scope.member = MemberService.currentMember;
  });