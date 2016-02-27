'use strict';

angular.module('team535.controllers', [])
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.controllerName = 'AppCtrl';
    $scope.toggleSideNav = buildDelayedToggler('left');

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })

  // controller for the sidenav
  .controller('SideNavCtrl', function($scope, $state, $timeout, $mdSidenav, $log, DistrictService) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    $scope.savedDistricts = DistrictService.query();

    $scope.$watch(
      function () { return DistrictService.currentDistrict; },
      function (data) {$scope.district = data;},
      true
    );

    $scope.selectDistrict = function(id) {
      $scope.district = DistrictService.get({id: id});
      $state.go('app.district', {id: id});
    };

    $scope.selectMember = function(id) {
      $state.go('app.member.detail', {id: id});
    }
  })