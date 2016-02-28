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

    $scope.searchVotes = true;
    $scope.searchBills = true;
    $scope.searchCommittees = true;
    $scope.search = function() {
      if ($scope.searchText == '')
        return;
      
      var searchTerms = $scope.searchText.split(' ');
      
      $scope.searchResults = MemberService.search({
        member_id: $scope.member.id,
        search_terms: searchTerms,
        search_votes: $scope.searchVotes,
        search_bills: $scope.searchBills,
        search_committees: $scope.searchCommittees
      });
    };
  })

  .controller('MemberTimelineCtrl', function($scope, MemberService) {
    $scope.controllerName = 'MemberTimelineCtrl';

    $scope.member = MemberService.currentMember;
  });