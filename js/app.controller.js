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
  .controller('SideNavCtrl', function($scope, $state, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    $scope.savedDistricts = [
      { 
        'id': 19, 
        'name': 'Illinois\'s 9th',
        'senators': [
        {
          'id': 1023,
          'rank': 'senior',
          'first_name': 'Dick',
          'last_name': 'Durbin',
          'party': 'Democrat'
        },
        {
          'id': 4976,
          'rank': 'junior',
          'first_name': 'Mark',
          'last_name': 'Kirk',
          'party': 'Republican'
        }],
        'representative': {
          'id': 2231,
          'first_name': 'Jan',
          'last_name': 'Schakowsky',
          'party': 'Democrat'
        }
      },
      { 
        'id': 22, 
        'name': 'Ohio\'s 2nd',
        'senators': [
        {
          'id': 2993,
          'rank': 'senior',
          'first_name': 'Sherrod',
          'last_name': 'Brown',
          'party': 'Democrat'
        },
        {
          'id': 5302,
          'rank': 'junior',
          'first_name': 'Rob',
          'last_name': 'Portman',
          'party': 'Republican'
        }],
        'representative': {
          'id': 3054,
          'first_name': 'Brad',
          'last_name': 'Wenstrup',
          'party': 'Republican'
        }
      },
    ];

    $scope.district = $scope.savedDistricts[0];

    $scope.selectDistrict = function(index) {
      $scope.district = $scope.savedDistricts[index];
    };

    $scope.selectMember = function(id) {
      $state.go('app.member', {id: id});
    }
  })