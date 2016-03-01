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

    $scope.overview = MemberService.overview({
      member_id: $scope.member.id
    });
  })

  .controller('MemberSearchCtrl', function($scope, MemberService) {
    $scope.controllerName = 'MemberSearchCtrl';

    $scope.member = MemberService.currentMember;

    $scope.searchVotes = true;
    $scope.searchBills = true;
    $scope.searchCommittees = true;
  	$scope.searchResults = MemberService.searchResults;

    $scope.search = function() {
      if ($scope.searchText == '')
        return;

      var searchTerms = $scope.searchText;
      
      MemberService.search({
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

    $scope.years = [2016, 2015, 2014];
    $scope.selected = [];

    $scope.toggle = function(year, list) {
      var index = list.indexOf(year);
      if (index > -1) 
        list.splice(index, 1);
      else 
        list.push(year);
    }

    $scope.active = function(year, list) {
      return list.indexOf(year) > -1;
    }

    $scope.timelineResults = MemberService.timeline({
      member_id: $scope.member.id
    });
  });